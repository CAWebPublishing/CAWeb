<?php
/**
 * Import and Export data.
 *
 * @package Core\Portability
 */

/**
 * Handles the portability workflow.
 *
 * @package ET\Core\Portability
 */
class ET_Core_Portability {

	/**
	 * Current instance.
	 *
	 * @since 2.7.0
	 *
	 * @type object
	 */
	public $instance;

	/**
	 * @var ET_Core_Data_Utils
	 */
	protected static $_;

	/**
	 * Whether or not an import is in progress.
	 *
	 * @since 3.0.99
	 *
	 * @var bool
	 */
	protected static $_doing_import = false;

	/**
	 * Constructor.
	 *
	 * @param string $context Portability context previously registered.
	 */
	public function __construct( $context ) {
		$this->instance = et_core_cache_get( $context, 'et_core_portability' );

		self::$_ = ET_Core_Data_Utils::instance();

		if ( $this->instance && $this->instance->view ) {
			if ( et_core_is_fb_enabled() ) {
				$this->assets();
			} else {
				add_action( 'admin_footer', array( $this, 'modal' ) );
				add_action( 'customize_controls_print_footer_scripts', array( $this, 'modal' ) );
				add_action( 'admin_enqueue_scripts', array( $this, 'assets' ), 5 );
			}
		}
	}

	public static function doing_import() {
		return self::$_doing_import;
	}

	/**
	 * Import a previously exported layout.
	 *
	 * @since 3.10    Return the result of the import instead of dieing.
	 * @since 2.7.0
	 *
	 * @param string $file_context Accepts 'upload', 'sideload'. Default 'upload'.
	 *
	 * @return bool|array
	 */
	public function import( $file_context = 'upload' ) {
		global $shortname;

		$this->prevent_failure();

		self::$_doing_import = true;

		$timestamp              = $this->get_timestamp();
		$filesystem             = $this->set_filesystem();
		$temp_file_id           = sanitize_file_name( $timestamp );
		$temp_file              = $this->has_temp_file( $temp_file_id, 'et_core_import' );
		$include_global_presets = isset( $_POST['include_global_presets'] ) ? wp_validate_boolean( $_POST['include_global_presets'] ) : false;
		$global_presets         = '';

		if ( $temp_file ) {
			$import = json_decode( $filesystem->get_contents( $temp_file ), true );
		} else {
			if ( ! isset( $_FILES['file']['name'] ) || ! et_()->ends_with( sanitize_file_name( $_FILES['file']['name'] ), '.json' ) ) {
				return array( 'message' => 'invalideFile' );
			}

			if ( ! in_array( $file_context, array( 'upload', 'sideload' ) ) ) {
				$file_context = 'upload';
			}

			$handle_file = "wp_handle_{$file_context}";
			$upload      = $handle_file( $_FILES['file'], array(
				'test_size' => false,
				'test_type' => false,
				'test_form' => false,
			) );

			/**
			 * Fires before an uploaded Portability JSON file is processed.
			 *
			 * @since 3.0.99
			 *
			 * @param string $file The absolute path to the uploaded JSON file's temporary location.
			 */
			do_action( 'et_core_portability_import_file', $upload['file'] );

			$temp_file = $this->temp_file( $temp_file_id, 'et_core_import', $upload['file'] );
			$import = json_decode( $filesystem->get_contents( $temp_file ), true );
			$import = $this->validate( $import );
			$import['data'] = $this->apply_query( $import['data'], 'set' );

			if ( ! isset( $import['context'] ) || ( isset( $import['context'] ) && $import['context'] !== $this->instance->context ) ) {
				$this->delete_temp_files( 'et_core_import' );

				return array( 'message' => 'importContextFail' );
			}

			$filesystem->put_contents( $upload['file'], wp_json_encode( (array) $import ) );
		}

		// Upload images and replace current urls.
		if ( isset( $import['images'] ) ) {
			$images = $this->maybe_paginate_images( (array) $import['images'], 'upload_images', $timestamp );
			$import['data'] = $this->replace_images_urls( $images, $import['data'] );
		}

		$data = $import['data'];
		$success = array( 'timestamp' => $timestamp );

		$this->delete_temp_files( 'et_core_import' );

		if ( 'options' === $this->instance->type ) {
			// Reset all data besides excluded data.
			$current_data = $this->apply_query( get_option( $this->instance->target, array() ), 'unset' );

			if ( isset( $data['wp_custom_css'] ) && function_exists( 'wp_update_custom_css_post' ) ) {
				wp_update_custom_css_post( $data['wp_custom_css'] );

				if ( 'yes' === get_theme_mod( 'et_pb_css_synced', 'no' ) ) {
					// If synced, clear the legacy custom css value to avoid unwanted merging of old and new css.
					$data[ "{$shortname}_custom_css" ] = '';
				}
			}

			// Merge remaining current data with new data and update options.
			update_option( $this->instance->target, array_merge( $current_data, $data ) );

			set_theme_mod( 'et_pb_css_synced', 'no' );
		}

		// Pass the post content and let js save the post.
		if ( 'post' === $this->instance->type ) {
			$success['postContent'] = reset( $data );
			do_shortcode( $success['postContent'] );
			$success['migrations']  = ET_Builder_Module_Settings_Migration::$migrated;
			$success['presets']     = isset( $import['presets'] ) && is_array( $import['presets'] ) ? $import['presets'] : (object) array();
		}

		if ( 'post_type' === $this->instance->type ) {
			$preset_rewrite_map = array();
			if ( ! empty( $import['presets'] ) && $include_global_presets ) {
				$preset_rewrite_map = $this->prepare_to_import_layout_presets( $import['presets'] );
				$global_presets = $import['presets'];
			}

			foreach ( $data as &$post ) {
				$shortcode_object = et_fb_process_shortcode( $post['post_content'] );

				if ( ! empty( $import['presets'] ) ) {
					if ( $include_global_presets ) {
						$this->rewrite_module_preset_ids( $shortcode_object, $import['presets'], $preset_rewrite_map );
					} else {
						$this->apply_global_presets( $shortcode_object, $import['presets'] );
					}
				}

				$post_content = et_fb_process_to_shortcode( $shortcode_object, array(), '', false );
				// Add slashes for post content to avoid unwanted unslashing (by wp_unslash) while post is inserting.
				$post['post_content'] = wp_slash( $post_content );

				// Upload thumbnail image if exist.
				if ( ! empty( $post['post_meta'] ) && ! empty( $post['post_meta']['_thumbnail_id'] ) ) {
					$post_thumbnail_origin_id = (int) $post['post_meta']['_thumbnail_id'][0];

					if ( ! empty( $import['thumbnails'] ) && ! empty( $import['thumbnails'][ $post_thumbnail_origin_id ] ) ) {
						$post_thumbnail_new = $this->upload_images( $import['thumbnails'][ $post_thumbnail_origin_id ] );
						$new_thumbnail_data = reset( $post_thumbnail_new );

						// New thumbnail image was uploaded and it should be updated.
						if ( isset( $new_thumbnail_data['replacement_id'] ) ) {
							$new_thumbnail_id  = $new_thumbnail_data['replacement_id'];
							$post['thumbnail'] = $new_thumbnail_id;

							if ( ! function_exists( 'wp_crop_image' ) ) {
								include ABSPATH . 'wp-admin/includes/image.php';
							}

							$thumbnail_path = get_attached_file( $new_thumbnail_id );

							// Generate all the image sizes and update thumbnail metadata.
							$new_metadata = wp_generate_attachment_metadata( $new_thumbnail_id, $thumbnail_path );
							wp_update_attachment_metadata( $new_thumbnail_id, $new_metadata );
						}
					}
				}
			}

			if ( ! $this->import_posts( $data ) ) {
				/**
				 * Filters the error message when {@see ET_Core_Portability::import()} fails.
				 *
				 * @since 3.0.99
				 *
				 * @param mixed $error_message Default is `null`.
				 */
				if ( $error_message = apply_filters( 'et_core_portability_import_error_message', false ) ) {
					$error_message = array( 'message' => $error_message );
				}

				return $error_message;
			}
		}

		if ( ! empty( $global_presets ) ) {
			if ( ! $this->import_global_presets( $global_presets ) ) {
				if ( $error_message = apply_filters( 'et_core_portability_import_error_message', false ) ) {
					$error_message = array( 'message' => $error_message );
				}

				return $error_message;
			}
		}

		if ( ! empty( $import['global_colors'] ) ) {
			$this->import_global_colors( $import['global_colors'] );
			$success['globalColors'] = et_builder_get_all_global_colors();
		}

		return $success;
	}

	/**
	 * Initiate Export.
	 *
	 * @since 2.7.0
	 *
	 * @param bool $return
	 *
	 * @return null|array
	 */
	public function export( $return = false ) {
		$this->prevent_failure();
		et_core_nonce_verified_previously();

		$timestamp            = $this->get_timestamp();
		$filesystem           = $this->set_filesystem();
		$temp_file_id         = sanitize_file_name( $timestamp );
		$temp_file            = $this->has_temp_file( $temp_file_id, 'et_core_export' );
		$apply_global_presets = isset( $_POST['apply_global_presets'] ) ? wp_validate_boolean( $_POST['apply_global_presets'] ) : false;
		$global_presets       = '';
		$global_colors        = '';
		$thumbnails           = '';

		if ( $temp_file ) {
			$file_data      = json_decode( $filesystem->get_contents( $temp_file ) );
			$data           = (array) $file_data->data;
			$global_presets = $file_data->presets;
			$global_colors  = $file_data->global_colors;
		} else {
			$temp_file = $this->temp_file( $temp_file_id, 'et_core_export' );

			if ( 'options' === $this->instance->type ) {
				$data = get_option( $this->instance->target, array() );

				// Export the Customizer "Additional CSS" value as well.
				if ( function_exists( 'wp_get_custom_css' ) ) {
					$data[ 'wp_custom_css' ] = wp_get_custom_css();
				}
			}

			if ( 'post' === $this->instance->type ) {
				if ( ! ( isset( $_POST['post'] ) || isset( $_POST['content'] ) ) ) {
					wp_send_json_error();
				}

				$fields_validatation = array(
					'ID' => 'intval',
					// no post_content as the default case for no fields_validation will run it through perms based wp_kses_post, which is exactly what we want.
				);

				$post_data = array(
					'post_content' => stripcslashes( $_POST['content'] ), // need to run this through stripcslashes() as thats what wp_kses_post() expects.
					'ID'           => $_POST['post'],
				);

				$post_data = $this->validate( $post_data, $fields_validatation );

				$data = array( $post_data['ID'] => $post_data['post_content'] );

				if ( isset( $_POST['global_presets'] ) ) {
					// phpcs:ignore ET.Sniffs.ValidatedSanitizedInput.InputNotSanitized -- filter_post_data() function does sanitation.
					$post_global_presets = $this->_filter_post_data( $_POST['global_presets'] );
					$global_presets      = json_decode( stripslashes( $post_global_presets ) );
				}

				if ( isset( $_POST['global_colors'] ) ) {
					// phpcs:ignore ET.Sniffs.ValidatedSanitizedInput.InputNotSanitized -- filter_post_data() function does sanitation.
					$post_global_colors = $this->_filter_post_data( $_POST['global_colors'] );
					$global_colors      = json_decode( stripslashes( $post_global_colors ) );
				}
			}

			if ( 'post_type' === $this->instance->type ) {
				$data = $this->export_posts_query();
			}

			$data = $this->apply_query( $data, 'set' );

			if ( 'post_type' === $this->instance->type ) {
				$used_global_presets = array();
				$options             = array(
					'apply_global_presets' => true,
				);

				foreach ( $data as $post ) {
					$shortcode_object = et_fb_process_shortcode( $post->post_content );

					if ( $apply_global_presets ) {
						$post->post_content = et_fb_process_to_shortcode( $shortcode_object, $options, '', false );
					} else {
						$used_global_presets = array_merge(
							$this->get_used_global_presets( $shortcode_object, $used_global_presets ),
							$used_global_presets
						);
					}
				}

				if ( ! empty ( $used_global_presets ) ) {
					$global_presets = (object) $used_global_presets;
				}
			}

			// put contents into file, this is temporary,
			// if images get paginated, this content will be brought back out
			// of a temp file in paginated request
			$file_data = array(
				'data'          => $data,
				'presets'       => $global_presets,
				'global_colors' => $global_colors,
			);
			$filesystem->put_contents( $temp_file, wp_json_encode( $file_data ) );
		}

		$thumbnails = $this->_get_thumbnail_images( $data );

		$images = $this->get_data_images( $data );
		$data = array(
			'context'       => $this->instance->context,
			'data'          => $data,
			'presets'       => $global_presets,
			'global_colors' => $global_colors,
			'images'        => $this->maybe_paginate_images( $images, 'encode_images', $timestamp ),
			'thumbnails'    => $thumbnails,
		);

		// Return exported content instead of printing it
		if ( $return ) {
			return $data;
		}

		$filesystem->put_contents( $temp_file, wp_json_encode( (array) $data ) );

		wp_send_json_success( array( 'timestamp' => $timestamp ) );
	}

	/**
	 * Serialize a single layout post in chunks.
	 *
	 * @since 4.0
	 *
	 * @param integer $id Unique ID to represent this layout serialization.
	 * @param integer $post_id
	 * @param string $content
	 * @param array $theme_builder_meta
	 * @param integer $chunk
	 *
	 * @return array
	 */
	public function serialize_layout( $id, $post_id, $content, $theme_builder_meta = array(), $chunk = 0 ) {
		$this->prevent_failure();

		$fields_validatation = array(
			// No post_content as the default case for no fields_validation will run it through perms based wp_kses_post, which is exactly what we want.
			'ID' => 'intval',
		);

		$post_data = array(
			// Need to run this through stripcslashes() as thats what wp_kses_post() expects.
			'post_content' => stripcslashes( $content ),
			'ID'           => $post_id,
		);

		$post_data = $this->validate( $post_data, $fields_validatation );
		$data      = array( $post_data['ID'] => $post_data['post_content'] );
		$data      = $this->apply_query( $data, 'set' );
		$images    = $this->get_data_images( $data );
		$images    = $this->chunk_images( $images, 'encode_images', $id, $chunk );
		$data      = array(
			'context'       => 'et_builder',
			'data'          => $data,
			'images'        => $images['images'],
			'post_title'    => get_post_field( 'post_title', $post_id ),
			'post_type'     => get_post_type( $post_id ),
			'theme_builder' => $theme_builder_meta,
		);
		$chunks    = $images['chunks'];
		$ready     = $images['ready'];

		return array(
			'ready'  => $ready,
			'chunks' => $chunks,
			'data'   => $data,
		);
	}

	/**
	 * Serialize Theme Builder templates in chunks.
	 *
	 * @since 4.0
	 *
	 * @param integer $id Unique ID to represent this theme builder serialization process.
	 * @param array $step
	 * @param integer $steps
	 * @param integer $step_index
	 * @param integer $chunk
	 *
	 * @return array|false
	 */
	public function serialize_theme_builder( $id, $step, $steps, $step_index = 0, $chunk = 0 ) {
		if ( $step_index >= $steps ) {
			return false;
		}

		$this->prevent_failure();

		$temp_file_id = sanitize_file_name( 'et_theme_builder_' . $id );
		$temp_file    = $this->has_temp_file( $temp_file_id, 'et_core_export' );

		if ( $temp_file ) {
			$data = json_decode( $this->get_filesystem()->get_contents( $temp_file ), true );
		} else {
			$temp_file = $this->temp_file( $temp_file_id, 'et_core_export' );
			$data      = array(
				'context'              => 'et_theme_builder',
				'templates'            => array(),
				'layouts'              => array(),
				'presets'             => array(),
				'has_default_template' => false,
				'has_global_layouts'   => false,
			);
		}

		$chunks = 1;

		switch ( $step['type'] ) {
			case 'template':
				$header_id  = $step['data']['layouts']['header']['id'];
				$body_id    = $step['data']['layouts']['body']['id'];
				$footer_id  = $step['data']['layouts']['footer']['id'];
				$is_default = $step['data']['default'];

				if ( 0 !== $header_id && ! current_user_can( 'edit_post', $header_id ) ) {
					$step['data']['layouts']['header']['id'] = 0;
				}

				if ( 0 !== $body_id && ! current_user_can( 'edit_post', $body_id ) ) {
					$step['data']['layouts']['body']['id'] = 0;
				}

				if ( 0 !== $footer_id && ! current_user_can( 'edit_post', $footer_id ) ) {
					$step['data']['layouts']['footer']['id'] = 0;
				}

				if ( $is_default ) {
					$data['has_default_template'] = true;
				}

				$data['templates'][] = $step['data'];
				break;

			case 'layout':
				$post_id   = $step['data']['post_id'];
				$is_global = $step['data']['is_global'];

				if ( ! current_user_can( 'edit_post', $post_id ) ) {
					break;
				}

				if ( 0 === $chunk && isset( $data['layouts'][ $post_id ] ) ) {
					// The layout is already exported.
					break;
				}

				if ( $is_global ) {
					$data['has_global_layouts'] = true;
				}

				$step_data = $this->serialize_layout(
					$id,
					$post_id,
					get_post_field( 'post_content', $post_id ),
					array(
						'is_global' => $is_global,
					),
					$chunk
				);

				$step_data['data']['post_meta'] = array_merge(
					et_()->array_get( $step_data, 'data.post_meta', array() ),
					et_core_get_post_builder_meta( $post_id )
				);

				$data['layouts'][ $post_id ] = $step_data['data'];
				$chunks = $step_data['chunks'];
				break;

			case 'presets':
				$data['presets'] = $step['data'];
				break;
		}

		$ready = ( $step_index + 1 >= $steps ) && ( $chunk + 1 >= $chunks );

		if ( ! $ready ) {
			$this->get_filesystem()->put_contents( $temp_file, wp_json_encode( $data ) );
		} else {
			$this->delete_temp_files( 'et_core_export', array( $temp_file_id => $temp_file ) );
		}

		return array(
			'ready'  => $ready,
			'chunks' => $chunks,
			'data'   => $data,
		);
	}

	/**
	 * Export Theme Builder templates in chunks.
	 *
	 * @since 4.0
	 *
	 * @param integer $id Unique ID to represent this theme builder export process.
	 * @param array $step
	 * @param integer $steps
	 * @param integer $step_index
	 * @param integer $chunk
	 *
	 * @return array|false
	 */
	public function export_theme_builder( $id, $step, $steps, $step_index = 0, $chunk = 0 ) {
		$result = $this->serialize_theme_builder( $id, $step, $steps, $step_index, $chunk );

		if ( false === $result ) {
			return false;
		}

		$temp_file_id = sanitize_file_name( 'et_theme_builder_export_' . $id );
		$temp_file    = $this->temp_file( $temp_file_id, 'et_core_export' );

		if ( $result['ready'] ) {
			$this->get_filesystem()->put_contents( $temp_file, wp_json_encode( $result[ 'data' ] ) );
		}

		return array_merge( $result, array(
			'temp_file'    => $temp_file,
			'temp_file_id' => $temp_file_id,
		) );
	}

	/**
	 * Get whether an array represents a valid Theme Builder export.
	 *
	 * @since 4.0
	 *
	 * @param array $export
	 *
	 * @return boolean
	 */
	public function is_valid_theme_builder_export( $export ) {
		$valid_context = isset( $export['context'] ) && $export['context'] === $this->instance->context;
		$has_templates = isset( $export['templates'] ) && is_array( $export['templates'] );
		$has_layouts   = isset( $export['layouts'] ) && is_array( $export['layouts'] );

		return $valid_context && $has_templates && $has_layouts;
	}

	/**
	 * Import a single layout in chunks.
	 *
	 * @since 4.0
	 *
	 * @param string $id Unique ID to represent this layout serialization.
	 * @param array $layout
	 * @param integer $chunk
	 *
	 * @return array|false
	 */
	public function import_layout( $id, $layout, $chunk = 0 ) {
		$post_id = 0;
		$import  = $this->validate( $layout );

		if ( false === $import ) {
			return false;
		}

		$import['data'] = $this->apply_query( $import['data'], 'set' );

		if ( ! isset( $import['context'] ) || ( isset( $import['context'] ) && 'et_builder' !== $import['context'] ) ) {
			return false;
		}

		$result = $this->chunk_images( self::$_->array_get( $import, 'images', array() ), 'upload_images', $id, $chunk );

		if ( $result['ready'] ) {
			$import['data']   = $this->replace_images_urls( $result['images'], $import['data'] );
			$post_type        = self::$_->array_get( $import, 'post_type', 'post' );
			$post_title       = self::$_->array_get( $import, 'post_title', '' );
			$post_meta        = self::$_->array_get( $import, 'post_meta', array() );
			$post_type_object = get_post_type_object( $post_type );

			if ( ! $post_type_object || ! current_user_can( $post_type_object->cap->create_posts ) ) {
				return false;
			}

			$content = array_values( $import['data'] );
			$content = $content[0];
			$args    = array(
				'post_type'    => $post_type,
				'post_content' => current_user_can( 'unfiltered_html' ) ? $content : wp_kses_post( $content ),
			);

			if ( ! empty( $post_title ) ) {
				$args['post_title'] = current_user_can( 'unfiltered_html' ) ? $post_title : wp_kses( $post_title );
			}

			$post_id = et_theme_builder_insert_layout( $args );

			if ( is_wp_error( $post_id ) ) {
				return false;
			}

			foreach ( $post_meta as $entry ) {
				update_post_meta( $post_id, $entry['key'], $entry['value'] );
			}
		}

		return array(
			'ready'   => $result['ready'],
			'chunks'  => $result['chunks'],
			'id'      => $post_id,
		);
	}

	/**
	 * Import Theme Builder templates in chunks.
	 *
	 * @since 4.0
	 *
	 * @param integer $id Unique ID to represent this theme builder import process.
	 * @param array $step
	 * @param integer $steps
	 * @param integer $step_index
	 * @param integer $chunk
	 *
	 * @return array|false
	 */
	public function import_theme_builder( $id, $step, $steps, $step_index = 0, $chunk = 0 ) {
		if ( $step_index >= $steps ) {
			return false;
		}

		$layout_id_map = array();
		$chunks        = 1;

		switch ( $step['type'] ) {
			case 'layout':
				$presets = et_()->array_get( $step, 'presets', array() );
				$presets_rewrite_map = et_()->array_get( $step, 'presets_rewrite_map', array() );
				$import_presets = et_()->array_get( $step, 'import_presets', false );
				$layouts = et_()->array_get( $step['data'], 'data', array() );

				// Apply any presets to the layouts' shortcodes prior to importing them.
				if ( ! empty( $presets ) && ! empty( $layouts ) ) {
					foreach ( $layouts as $key => $layout ) {
						$shortcode_object = et_fb_process_shortcode( $layout );

						if ( $import_presets ) {
							$this->rewrite_module_preset_ids( $shortcode_object, $presets, $presets_rewrite_map );
						} else {
							$this->apply_global_presets( $shortcode_object, $presets );
						}

						$layouts[ $key ] = et_fb_process_to_shortcode( $shortcode_object, array(), '', false );
					}

					$step['data']['data'] = $layouts;
				}

				$result = $this->import_layout( $id, $step['data'], $chunk );

				if ( false === $result ) {
					break;
				}

				if ( $result['ready'] ) {
					if ( ! isset( $layout_id_map[ $step['id'] ] ) ) {
						$layout_id_map[ $step['id'] ] = array();
					}

					// Since a single layout can be duplicated multiple times if
					// it's global we have to keep an array of duplicated ids.
					$layout_id_map[ $step['id'] ][ $step['template_id'] ] = $result['id'];
				}

				$chunks = $result['chunks'];
				break;
		}

		$ready = ( $step_index + 1 >= $steps ) && ( $chunk + 1 >= $chunks );

		return array(
			'ready'         => $ready,
			'chunks'        => $chunks,
			'layout_id_map' => $layout_id_map,
		);
	}

	/**
	 * Download temporary file.
	 *
	 * @since 4.0
	 *
	 * @param string $filename
	 * @param string $temp_file_id
	 * @param string $temp_file
	 * @return void
	 */
	public function download_file( $filename, $temp_file_id, $temp_file ) {
		$this->prevent_failure();

		$filename = sanitize_file_name( $filename );

		header( 'Content-Description: File Transfer' );
		header( "Content-Disposition: attachment; filename=\"{$filename}.json\"" );
		header( 'Content-Type: application/json' );
		header( 'Pragma: no-cache' );

		if ( file_exists( $temp_file ) ) {
			echo et_core_esc_previously( $this->get_filesystem()->get_contents( $temp_file ) );
		}

		$this->delete_temp_files( 'et_core_export', array( $temp_file_id => $temp_file ) );

		wp_die();
	}

	/**
	 * Download Export Data.
	 *
	 * @since 2.7.0
	 */
	public function download_export() {
		$this->prevent_failure();
		et_core_nonce_verified_previously();

		// Retrieve data.
		$timestamp = isset( $_GET['timestamp'] ) ? sanitize_text_field( $_GET['timestamp'] ) : null;
		$name = isset( $_GET['name'] ) ? sanitize_text_field( rawurldecode( $_GET['name'] ) ) : $this->instance->name;
		$filesystem = $this->set_filesystem();
		$temp_file = $this->temp_file( sanitize_file_name( $timestamp ), 'et_core_export' );

		header( 'Content-Description: File Transfer' );
		header( "Content-Disposition: attachment; filename=\"{$name}.json\"" );
		header( 'Content-Type: application/json' );
		header( 'Pragma: no-cache' );

		if ( file_exists( $temp_file ) ) {
			echo et_core_esc_previously( $filesystem->get_contents( $temp_file ) );
		}

		$this->delete_temp_files( 'et_core_export' );

		exit;
	}

	protected function to_megabytes( $value ) {
		$unit = strtoupper( substr( $value, -1 ) );
		$amount = intval( substr( $value, 0, -1 ) );

		// Known units
		switch ( $unit ) {
			case 'G': return $amount << 10;
			case 'M': return $amount;
		}

		if ( is_numeric( $unit ) ) {
			// Numeric unit is present, assume bytes
			return intval( $value ) >> 20;
		}

		// Unknown unit ...
		return intval( $value );

	}// end to_megabytes()

	/**
	 * Get selected posts data.
	 *
	 * @since 2.7.0
	 */
	protected function export_posts_query() {
		et_core_nonce_verified_previously();

		$args = array(
			'post_type'      => $this->instance->target,
			'posts_per_page' => -1,
			'no_found_rows'  => true,
		);

		// Only include selected posts if set and not empty.
		if ( isset( $_POST['selection'] ) ) {
			$include = json_decode( stripslashes( $_POST['selection'] ), true );

			if ( ! empty( $include ) ) {
				$include = array_map( 'intval', array_values( $include ) );
				$args['post__in'] = $include;
			}
		}

		$get_posts = get_posts( apply_filters( "et_core_portability_export_wp_query_{$this->instance->context}", $args ) );
		$taxonomies = get_object_taxonomies( $this->instance->target );
		$posts = array();

		foreach ( $get_posts as $key => $post ) {
			unset(
				$post->post_author,
				$post->guid
			);

			$posts[$post->ID] = $post;

			// Include post meta.
			$post_meta = (array) get_post_meta( $post->ID );

			if ( isset( $post_meta['_edit_lock'] ) ) {
				unset(
					$post_meta['_edit_lock'],
					$post_meta['_edit_last']
				);
			}

			$posts[$post->ID]->post_meta = $post_meta;

			// Include terms.
			$get_terms = (array) wp_get_object_terms( $post->ID, $taxonomies );
			$terms = array();

			// Order terms to make sure children are after the parents.
			while ( $term = array_shift( $get_terms ) ) {
				if ( 0 === $term->parent || isset( $terms[$term->parent] ) ) {
					$terms[$term->term_id] = $term;
				} else {
					// if parent category is also exporting then add the term to the end of the list and process it later
					// otherwise add a term as usual
					if ( $this->is_parent_term_included( $get_terms, $term->parent ) ) {
						$get_terms[] = $term;
					} else {
						$terms[$term->term_id] = $term;
					}
				}
			}

			$posts[$post->ID]->terms = array();

			foreach ( $terms as $term ) {
				$parents_data = array();

				if ( $term->parent ) {
					$parent_slug = isset( $terms[$term->parent] ) ? $terms[$term->parent]->slug : $this->get_parent_slug( $term->parent, $term->taxonomy );
					$parents_data = $this->get_all_parents( $term->parent, $term->taxonomy );
				} else {
					$parent_slug = 0;
				}

				$posts[$post->ID]->terms[$term->term_id] = array(
					'name'        => $term->name,
					'slug'        => $term->slug,
					'taxonomy'    => $term->taxonomy,
					'parent'      => $parent_slug,
					'all_parents' => $parents_data,
					'description' => $term->description
				);
			}
		}

		return $posts;
	}

	/**
	 * Check whether the $parent_id included into the $terms_list.
	 *
	 * @since 2.7.0
	 *
	 * @param array $terms_list Array of term objects.
	 * @param int   $parent_id  .
	 *
	 * @return bool
	 */
	protected function is_parent_term_included( $terms_list, $parent_id ) {
		$is_parent_found = false;

		foreach ( $terms_list as $term => $term_details ) {
			if ( $parent_id === $term_details->term_id ) {
				$is_parent_found = true;
			}
		}

		return $is_parent_found;
	}

	/**
	 * Retrieve the term slug.
	 *
	 * @since 2.7.0
	 *
	 * @param int    $parent_id .
	 * @param string $taxonomy  .
	 *
	 * @return int|string
	 */
	protected function get_parent_slug( $parent_id, $taxonomy ) {
		$term_data = get_term( $parent_id, $taxonomy );
		$slug = '' === $term_data->slug ? 0 : $term_data->slug;

		return $slug;
	}

	/**
	 * Prepare array of all parents so the correct hierarchy can be restored during the import.
	 *
	 * @since 2.7.0
	 *
	 * @param int    $parent_id .
	 * @param string $taxonomy  .
	 *
	 * @return array
	 */
	protected function get_all_parents( $parent_id, $taxonomy ) {
		$parents_data_array = array();
		$parent = $parent_id;

		// retrieve data for all parent categories
		if ( 0 !== $parent  ) {
			while( 0 !== $parent ) {
				$parent_term_data = get_term( $parent, $taxonomy );
				$parents_data_array[$parent_term_data->slug] = array(
					'name' => $parent_term_data->name,
					'description' => $parent_term_data->description,
					'parent' => 0 !== $parent_term_data->parent ? $this->get_parent_slug( $parent_term_data->parent, $taxonomy ) : 0,
				);

				$parent = $parent_term_data->parent;
			}
		}
		//reverse order of items, to simplify the restoring process
		return array_reverse( $parents_data_array );
	}

	/**
	 * Check if a layout exists in the database already based on both its title and its slug.
	 *
	 * @param string $title
	 * @param string $slug
	 *
	 * @return int $post_id The post id if it exists, zero otherwise.
	 */
	protected static function layout_exists( $title, $slug ) {
		global $wpdb;

		return (int) $wpdb->get_var( $wpdb->prepare(
			"SELECT ID FROM $wpdb->posts WHERE post_title = %s AND post_name = %s",
			array(
				wp_unslash( sanitize_post_field( 'post_title', $title, 0, 'db' ) ),
				wp_unslash( sanitize_post_field( 'post_name', $slug, 0, 'db' ) ),
			)
		) );
	}

	/**
	 * Imports Global Presets
	 *
	 * @since 4.0.10 Made public.
	 *
	 * @param array $presets - The Global Presets to be imported
	 *
	 * @return boolean
	 */
	public function import_global_presets( $presets ) {
		if ( ! is_array( $presets ) ) {
			return false;
		}

		$all_modules            = ET_Builder_Element::get_modules();
		$module_presets_manager = ET_Builder_Global_Presets_Settings::instance();
		$global_presets         = $module_presets_manager->get_global_presets();
		$presets_to_import      = array();

		foreach ( $presets as $module_type => $module_presets ) {
			$presets_to_import[ $module_type ] = array(
				'presets' => array(),
			);

			if ( ! isset( $global_presets->$module_type->presets ) ) {
				$initial_preset_structure = ET_Builder_Global_Presets_Settings::generate_module_initial_presets_structure( $module_type, $all_modules );

				$global_presets->$module_type = $initial_preset_structure;
			}

			$local_presets      = $global_presets->$module_type->presets;
			$local_preset_names = array();

			foreach ( $local_presets as $preset ) {
				array_push( $local_preset_names, $preset->name );
			}

			foreach ( $module_presets['presets'] as $preset_id => $preset ) {
				$imported_name = sanitize_text_field( $preset['name'] );
				$name          = in_array( $imported_name, $local_preset_names )
					? $imported_name . ' ' . esc_html__( 'imported', 'et-core' )
					: $imported_name;

				$presets_to_import[ $module_type ]['presets'][ $preset_id ] = array(
					'name'     => $name,
					'created'  => time() * 1000,
					'updated'  => time() * 1000,
					'version'  => $preset['version'],
					'settings' => $preset['settings'],
				);
			}
		}


		// Merge existing Global Presets with imported ones
		foreach ( $presets_to_import as $module_type => $module_presets ) {
			foreach ( $module_presets['presets'] as $preset_id => $preset ) {
				$global_presets->$module_type->presets->$preset_id           = (object) array();
				$global_presets->$module_type->presets->$preset_id->name     = sanitize_text_field( $preset['name'] );
				$global_presets->$module_type->presets->$preset_id->created  = $preset['created'];
				$global_presets->$module_type->presets->$preset_id->updated  = $preset['updated'];
				$global_presets->$module_type->presets->$preset_id->version  = $preset['version'];
				$global_presets->$module_type->presets->$preset_id->settings = (object) array();

				foreach ( $preset['settings'] as $setting_name => $value ) {
					$setting_name_sanitized = sanitize_text_field( $setting_name );
					$value_sanitized        = sanitize_text_field( $value );

					$global_presets->$module_type->presets->$preset_id->settings->$setting_name_sanitized = $value_sanitized;
				}
			}
		}

		et_update_option( ET_Builder_Global_Presets_Settings::GLOBAL_PRESETS_OPTION, $global_presets );

		$global_presets_history = ET_Builder_Global_Presets_History::instance();
		$global_presets_history->add_global_history_record( $global_presets );

		return true;
	}

	/**
	 * Import global colors.
	 *
	 * @since 4.9.0
	 *
	 * @param array $incoming_global_colors Global Colors Array.
	 *
	 * @return void
	 */
	public function import_global_colors( $incoming_global_colors ) {
		$global_colors = array();

		foreach ( $incoming_global_colors as $incoming_gcolor ) {
			$key                   = sanitize_text_field( $incoming_gcolor[0] );
			$global_colors[ $key ] = sanitize_text_field( $incoming_gcolor[1] );
		}

		$stored_global_colors = et_builder_get_all_global_colors();

		if ( ! empty( $stored_global_colors ) ) {
			$global_colors = array_merge( $global_colors, $stored_global_colors );
		}

		et_update_option( 'et_global_colors', $global_colors );
	}

	/**
	 * Import post.
	 *
	 * @since 2.7.0
	 *
	 * @param array $posts Array of data formatted by the portability exporter.
	 *
	 * @return bool
	 */
	protected function import_posts( $posts ) {
		/**
		 * Filters the array of builder layouts to import. Returning an empty value will
		 * short-circuit the import process.
		 *
		 * @since 3.0.99
		 *
		 * @param array $posts
		 */
		$posts = apply_filters( 'et_core_portability_import_posts', $posts );

		if ( empty( $posts ) ) {
			return false;
		}

		foreach ( $posts as $post ) {
			if ( isset( $post['post_status'] ) && 'auto-draft' === $post['post_status'] ) {
				continue;
			}

			$fields_validatation = array(
				'ID'         => 'intval',
				'post_title' => 'sanitize_text_field',
				'post_type'  => 'sanitize_text_field',
			);

			if ( ! $post = $this->validate( $post, $fields_validatation ) ) {
				continue;
			}

			$layout_exists = self::layout_exists( $post['post_title'], $post['post_name'] );

			if ( $layout_exists && get_post_type( $layout_exists ) === $post['post_type'] ) {
				// Make sure the post is published.
				if ( 'publish' !== get_post_status( $layout_exists ) ) {
					wp_update_post( array(
						'ID'          => intval( $layout_exists ),
						'post_status' => 'publish',
					) );
				}

				continue;
			}

			$post['import_id'] = $post['ID'];
			unset( $post['ID'] );

			$post['post_author'] = (int) get_current_user_id();

			// Insert or update post.
			$post_id = wp_insert_post( $post, true );

			if ( ! $post_id || is_wp_error( $post_id ) ) {
				continue;
			}

			// Insert and set terms.
			if ( isset( $post['terms'] ) && is_array( $post['terms'] ) ) {
				$processed_terms = array();

				foreach ( $post['terms'] as $term ) {
					$fields_validatation = array(
						'name'        => 'sanitize_text_field',
						'slug'        => 'sanitize_title',
						'taxonomy'    => 'sanitize_title',
						'parent'      => 'sanitize_title',
						'description' => 'wp_kses_post',
					);

					if ( ! $term = $this->validate( $term, $fields_validatation ) ) {
						continue;
					}

					if ( empty( $term['parent'] ) ) {
						$parent = 0;
					} else {
						if ( isset( $term['all_parents'] ) && ! empty( $term['all_parents'] ) ) {
							$this->restore_parent_categories( $term['all_parents'], $term['taxonomy'] );
						}

						$parent = term_exists( $term['parent'], $term['taxonomy'] );

						if ( is_array( $parent ) ){
							$parent = $parent['term_id'];
						}
					}

					if ( ! $insert = term_exists( $term['slug'], $term['taxonomy'] ) ) {
						$insert = wp_insert_term( $term['name'], $term['taxonomy'], array(
							'slug'        => $term['slug'],
							'description' => $term['description'],
							'parent'      => intval( $parent ),
						) );
					}

					if ( is_array( $insert ) && ! is_wp_error( $insert ) ) {
						$processed_terms[$term['taxonomy']][] = $term['slug'];
					}
				}

				// Set post terms.
				foreach ( $processed_terms as $taxonomy => $ids ) {
					wp_set_object_terms( $post_id, $ids, $taxonomy );
				}
			}

			// Insert or update post meta.
			if ( isset( $post['post_meta'] ) && is_array( $post['post_meta'] ) ) {
				foreach ( $post['post_meta'] as $meta_key => $meta ) {

					$meta_key = sanitize_text_field( $meta_key );

					if ( count( $meta ) < 2 ) {
						$meta = wp_kses_post( $meta[0] );
					} else {
						$meta = array_map( 'wp_kses_post', $meta );
					}

					update_post_meta( $post_id, $meta_key, $meta );
				}
			}

			// Assign new thumbnail if provided.
			if ( isset( $post['thumbnail'] ) ) {
				set_post_thumbnail( $post_id, $post['thumbnail'] );
			}
		}

		return true;
	}

	/**
	 * Restore the categories hierarchy in library.
	 *
	 * @since 2.7.0
	 *
	 * @param array $parents_array    Array of parent categories data.
	 * @param string $taxonomy
	 */
	protected function restore_parent_categories( $parents_array, $taxonomy ) {
		foreach( $parents_array as $slug => $category_data ) {
			$current_category = term_exists( $slug, $taxonomy );

			if ( ! is_array( $current_category ) ) {
				$parent_id = 0 !== $category_data['parent'] ? term_exists( $category_data['parent'], $taxonomy ) : 0;
				wp_insert_term( $category_data['name'], $taxonomy, array(
					'slug'        => $slug,
					'description' => $category_data['description'],
					'parent'      => is_array( $parent_id ) ? $parent_id['term_id'] : $parent_id,
				) );
			} else if ( ( ! isset( $current_category['parent'] ) || 0 === $current_category['parent'] ) && 0 !== $category_data['parent'] ) {
				$parent_id = 0 !== $category_data['parent'] ? term_exists( $category_data['parent'], $taxonomy ) : 0;
				wp_update_term( $current_category['term_id'], $taxonomy, array( 'parent' => is_array( $parent_id ) ? $parent_id['term_id'] : $parent_id ) );
			}
		}
	}

	/**
	 * Generates UUIDs for the presets to avoid collisions.
	 *
	 * @since 4.5.0
	 *
	 * @param array $global_presets - The Global Presets to be imported
	 *
	 * @return array - The list of module types for which preset ids have been changed
	 */
	public function prepare_to_import_layout_presets( &$global_presets ) {
		$preset_rewrite_map = array();
		$initial_preset_id = ET_Builder_Global_Presets_Settings::MODULE_INITIAL_PRESET_ID;

		foreach ( $global_presets as $component_type => &$component_presets ) {
			$preset_rewrite_map[ $component_type ] = array();
			foreach ( $component_presets['presets'] as $preset_id => $preset ) {
				$new_id = ET_Core_Data_Utils::uuid_v4();
				$component_presets['presets'][ $new_id ] = $preset;
				$preset_rewrite_map[ $component_type ][ $preset_id ] = $new_id;
				unset( $component_presets['presets'][ $preset_id ] );
			}

			if ( $component_presets['default'] === $initial_preset_id && ! isset( $preset_rewrite_map[ $component_type ][ $initial_preset_id ] ) ) {
				$new_id = ET_Core_Data_Utils::uuid_v4();
				$component_presets['default'] = $new_id;
				if ( isset( $component_presets['presets'][ $initial_preset_id ] ) ) {
					$component_presets['presets'][ $new_id ] = $component_presets['presets'][ $initial_preset_id ];
					unset( $component_presets['presets'][ $initial_preset_id ] );
				}
				$preset_rewrite_map[ $component_type ][ $initial_preset_id ] = $new_id;
			} else {
				$component_presets['default'] = $preset_rewrite_map[ $component_type ][ $component_presets['default'] ];
			}
		}

		return $preset_rewrite_map;
	}

	/**
	 * Injects the given Global Presets settings into the imported layout
	 *
	 * @since 4.5.0
	 *
	 * @param array $shortcode_object - The multidimensional array representing a page/module structure
	 * @param array $global_presets - The Global Presets to be imported
	 * @param array $preset_rewrite_map - The list of module types for which preset ids have been changed
	 */
	protected function rewrite_module_preset_ids( &$shortcode_object, $global_presets, $preset_rewrite_map ) {
		$global_presets_manager  = ET_Builder_Global_Presets_Settings::instance();
		$module_preset_attribute = ET_Builder_Global_Presets_Settings::MODULE_PRESET_ATTRIBUTE;

		foreach ( $shortcode_object as &$module ) {
			$module_type      = $global_presets_manager->maybe_convert_module_type( $module['type'], $module['attrs'] );
			$module_preset_id = et_()->array_get( $module, "attrs.{$module_preset_attribute}", 'default' );

			if ( $module_preset_id === 'default' ) {
				$module['attrs'][ $module_preset_attribute ] = et_()->array_get( $global_presets, "{$module_type}.default", 'default' );
			} else {
				if ( isset( $preset_rewrite_map[ $module_type ][ $module_preset_id ] ) ) {
					$module['attrs'][ $module_preset_attribute ] = $preset_rewrite_map[ $module_type ][ $module_preset_id ];
				} else {
					$module['attrs'][ $module_preset_attribute ] = et_()->array_get( $global_presets, "{$module_type}.default", 'default' );
				}
			}

			if ( is_array( $module['content'] ) ) {
				$this->rewrite_module_preset_ids( $module['content'], $global_presets, $preset_rewrite_map );
			}
		}
	}

	/**
	 * Injects the given Global Presets settings into the imported layout
	 *
	 * @since 3.26
	 *
	 * @param array $shortcode_object - The multidimensional array representing a page/module structure
	 * @param array $global_presets   - The Global Presets to be applied
	 */
	protected function apply_global_presets( &$shortcode_object, $global_presets ) {
		$global_presets_manager  = ET_Builder_Global_Presets_Settings::instance();
		$module_preset_attribute = ET_Builder_Global_Presets_Settings::MODULE_PRESET_ATTRIBUTE;

		foreach ( $shortcode_object as &$module ) {
			$module_type = $global_presets_manager->maybe_convert_module_type( $module['type'], $module['attrs'] );

			if ( isset( $global_presets[ $module_type ] ) ) {
				$default_preset_id = et_()->array_get( $global_presets, "{$module_type}.default", null );
				$module_preset_id  = et_()->array_get( $module, "attrs.{$module_preset_attribute}", $default_preset_id );

				if ( $module_preset_id === 'default' ) {
					$module_preset_id = $default_preset_id;
				}

				if ( isset( $global_presets[ $module_type ]['presets'][ $module_preset_id ] ) ) {
					$module['attrs'] = array_merge( $global_presets[ $module_type ]['presets'][ $module_preset_id ]['settings'], $module['attrs'] );
				} else {
					if ( isset( $global_presets[ $module_type ]['presets'][ $default_preset_id ]['settings'] ) ) {
						$module['attrs'] = array_merge( $global_presets[ $module_type ]['presets'][ $default_preset_id ]['settings'], $module['attrs'] );
					}
				}
			}

			if ( is_array( $module['content'] ) ) {
				$this->apply_global_presets( $module['content'], $global_presets );
			}
		}
	}

	/**
	 * Restrict data according the argument registered.
	 *
	 * @since 2.7.0
	 *
	 * @param array  $data   Array of data the query is applied on.
	 * @param string $method Whether data should be set or reset. Accepts 'set' or 'unset' which is
	 *                       should be used when treating existing data in the db.
	 *
	 * @return array
	 */
	protected function apply_query( $data, $method ) {
		$operator = ( $method === 'set' ) ? true : false;

		foreach ( $data as $id => $value ) {
			if ( ! empty( $this->instance->exclude ) && isset( $this->instance->exclude[$id] ) === $operator ) {
				unset( $data[$id] );
			}

			if ( ! empty( $this->instance->include ) && isset( $this->instance->include[$id] ) === ! $operator ) {
				unset( $data[$id] );
			}
		}

		return $data;
	}

	/**
	 * Serialize images in chunks.
	 *
	 * @since 4.0
	 *
	 * @param array $images
	 * @param string $method Method applied on images.
	 * @param string $id Unique ID to use for temporary files.
	 * @param integer $chunk
	 *
	 * @return array
	 */
	protected function chunk_images( $images, $method, $id, $chunk = 0 ) {
		$images_per_chunk = 5;
		$chunks           = 1;

		/**
		 * Filters whether or not images in the file being imported should be paginated.
		 *
		 * @since 3.0.99
		 *
		 * @param bool $paginate_images Default `true`.
		 */
		$paginate_images = apply_filters( 'et_core_portability_paginate_images', true );

		if ( $paginate_images && count( $images ) > $images_per_chunk ) {
			$chunks       = ceil( count( $images ) / $images_per_chunk );
			$slice        = $images_per_chunk * $chunk;
			$images       = array_slice( $images, $slice, $images_per_chunk );
			$images       = $this->$method( $images );
			$filesystem   = $this->get_filesystem();
			$temp_file_id = sanitize_file_name( "images_{$id}" );
			$temp_file    = $this->temp_file( $temp_file_id, 'et_core_export' );
			$temp_images  = json_decode( $filesystem->get_contents( $temp_file ), true );

			if ( is_array( $temp_images ) ) {
				$images = array_merge( $temp_images, $images );
			}

			if ( $chunk + 1 < $chunks ) {
				$filesystem->put_contents( $temp_file, wp_json_encode( (array) $images ) );
			} else {
				$this->delete_temp_files( 'et_core_export', array( $temp_file_id => $temp_file ) );
			}
		} else {
			$images = $this->$method( $images );
		}

		return array(
			'ready'  => $chunk + 1 >= $chunks,
			'chunks' => $chunks,
			'images' => $images,
		);
	}

	/**
	 * Paginate images processing.
	 *
	 * @since    1.0.0
	 *
	 * @param        $images
	 * @param string $method    Method applied on images.
	 * @param int    $timestamp Timestamp used to store data upon pagination.
	 *
	 * @return array
	 * @internal param array $data Array of images.
	 */
	protected function maybe_paginate_images( $images, $method, $timestamp ) {
		et_core_nonce_verified_previously();

		$page = isset( $_POST['page'] ) ? (int) $_POST['page'] : 1;
		$result = $this->chunk_images( $images, $method, $timestamp, max( $page - 1, 0 ) );

		if ( ! $result['ready'] ) {
			wp_send_json( array(
				'page'        => $page,
				'total_pages' => $result['chunks'],
				'timestamp'   => $timestamp,
			) );
		}

		return $result['images'];
	}

	/**
	 * Get all thumbnail images in the data given.
	 *
	 * @since 4.7.4
	 *
	 * @param array $data Array of data.
	 *
	 * @return array
	 */
	protected function _get_thumbnail_images( $data ) {
		$thumbnails = array();

		foreach ( $data as $post_data ) {
			// If post has thumbnail.
			if ( ! empty( $post_data->post_meta ) && ! empty( $post_data->post_meta->_thumbnail_id ) ) {
				$post_thumbnail = get_the_post_thumbnail_url( $post_data->ID );

				// If thumbnail image found in the WP Media library.
				if ( $post_thumbnail ) {
					$thumbnail_id    = (int) $post_data->post_meta->_thumbnail_id[0];
					$thumbnail_image = $this->encode_images( array( $thumbnail_id ) );

					$thumbnails[ $thumbnail_id ] = $thumbnail_image;
				}
			}
		}

		return $thumbnails;
	}

	/**
	 * Get all images in the data given.
	 *
	 * @since 2.7.0
	 *
	 * @param array $data  Array of data.
	 * @param bool  $force Set whether the value should be added by force. Usually used for image ids.
	 *
	 * @return array
	 */
	protected function get_data_images( $data, $force = false ) {
		$images     = array();
		$images_src = array();
		$basenames  = array(
			'src',
			'image_url',
			'background_image',
			'image',
			'url',
			'bg_img_?\d?',
		);
		$suffixes  = array(
			'__hover',
			'_tablet',
			'_phone'
		);

		foreach ( $basenames as $basename ) {
			$images_src[] = $basename;
			foreach ( $suffixes as $suffix ) {
				$images_src[] = $basename . $suffix;
			}
		}

		foreach ( $data as $value ) {
			if ( is_array( $value ) || is_object( $value ) ) {
				$images = array_merge( $images, $this->get_data_images( (array) $value ) );
				continue;
			}

			// Extract images from html or shortcodes.
			if ( preg_match_all( '/(' . implode( '|', $images_src ) . ')="(?P<src>\w+[^"]*)"/i', $value, $matches ) ) {
				foreach ( array_unique( $matches['src'] ) as $key => $src ) {
					$images = array_merge( $images, $this->get_data_images( array( $key => $src ) ) );
				}
				continue;
			}

			// Extract images from shortcodes gallery.
			if ( preg_match_all( '/gallery_ids="(?P<ids>\w+[^"]*)"/i', $value, $matches ) ) {
				$explode = explode( ',', str_replace( ' ', '', $matches['ids'][0] ) );

				foreach ( $explode as $image_id ) {
					$images = array_merge( $images, $this->get_data_images( array( (int) $image_id ), true ) );
				}
				continue;
			}

			if ( preg_match( '/^.+?\.(jpg|jpeg|jpe|png|gif)/', $value, $match ) || $force ) {
				$basename = basename( $value );

				// Avoid duplicates.
				if ( isset( $images[$value] ) ) {
					continue;
				}

				$images[$value] = $value;
			}
		}

		return $images;
	}

	/**
	 * Get the attachment post id for the given url.
	 *
	 * @since 3.22.3
	 *
	 * @param string $url The url of an attachment file.
	 *
	 * @return int
	 */
	protected function _get_attachment_id_by_url( $url ) {
		global $wpdb;

		// Remove any thumbnail size suffix from the filename and use that as a fallback.
		$fallback_url = preg_replace( '/-\d+x\d+(\.[^.]+)$/i', '$1', $url );

		// Scenario: Trying to find the attachment for a file called x-150x150.jpg.
		// 1. Since WordPress adds the -150x150 suffix for thumbnail sizes we cannot be
		//    sure if this is an attachment or an attachment's generated thumbnail.
		// 2. Since both x.jpg and x-150x150.jpg can be uploaded as separate attachments
		//    we must decide which is a better match.
		// 3. The above is why we order by guid length and use the first result.
		$attachments_query = $wpdb->prepare( "
			SELECT id
			FROM $wpdb->posts
			WHERE `post_type` = %s
				AND `guid` IN ( %s, %s )
			ORDER BY CHAR_LENGTH( `guid` ) DESC
		", 'attachment', esc_url_raw( $url ), esc_url_raw( $fallback_url ) );

		$attachment_id = (int) $wpdb->get_var( $attachments_query );

		return $attachment_id;
	}

	/**
	 * Encode image in a base64 format.
	 *
	 * @since 2.7.0
	 *
	 * @param array $images Array of data for which images need to be encoded if any.
	 *
	 * @return array
	 */
	protected function encode_images( $images ) {
		$encoded = array();

		foreach ( $images as $url ) {
			$id = 0;
			$image = '';

			if ( is_int( $url ) ) {
				$id = $url;
				$url = wp_get_attachment_url( $id );
			} else {
				$id = $this->_get_attachment_id_by_url( $url );
			}

			if ( $id > 0 ) {
				$image = $this->_encode_attachment_image( $id );
			}

			if ( empty( $image ) ) {
				// Case 1: No attachment found.
				// Case 2: Attachment found, but file does not exist (may be stored on a CDN, for example).
				$image = $this->_encode_remote_image( $url );
			}

			if ( empty( $image ) ) {
				// All fetching methods have failed - bail on encoding.
				continue;
			}

			$encoded[ $url ] = array(
				'encoded' => $image,
				'url'     => $url,
			);

			// Add image id for replacement purposes.
			if ( $id > 0 ) {
				$encoded[ $url ]['id'] = $id;
			}
		}

		return $encoded;
	}

	/**
	 * Encode an image attachment.
	 *
	 * @since 3.22.3
	 *
	 * @param int $id
	 *
	 * @return string
	 */
	protected function _encode_attachment_image( $id ) {
		/**
		 * @var WP_Filesystem_Base $wp_filesystem
		 */
		global $wp_filesystem;

		if ( ! current_user_can( 'read_post', $id ) ) {
			return '';
		}

		$file = get_attached_file( $id );

		if ( ! $wp_filesystem->exists( $file ) ) {
			return '';
		}

		$image = $wp_filesystem->get_contents( $file );

		if ( empty( $image ) ) {
			return '';
		}

		return base64_encode( $image );
	}

	/**
	 * Encode a remote image.
	 *
	 * @since 3.22.3
	 *
	 * @param string $url
	 *
	 * @return string
	 */
	protected function _encode_remote_image( $url ) {
		$request = wp_remote_get( esc_url_raw( $url ), array(
			'timeout'     => 2,
			'redirection' => 2,
		) );

		if ( ! is_array( $request ) || is_wp_error( $request ) ) {
			return '';
		}

		if ( ! self::$_->includes( $request['headers']['content-type'], 'image' ) ) {
			return '';
		}

		$image = wp_remote_retrieve_body( $request );

		if ( ! $image ) {
			return '';
		}

		return base64_encode( $image );
	}

	/**
	 * Decode base64 formatted image and upload it to WP media.
	 *
	 * @since 2.7.0
	 *
	 * @param array $images Array of encoded images which needs to be uploaded.
	 *
	 * @return array
	 */
	protected function upload_images( $images ) {
		$filesystem = $this->set_filesystem();

		foreach ( $images as $key => $image ) {
			$basename    = sanitize_file_name( wp_basename( $image['url'] ) );
			$attachments = get_posts( array(
				'posts_per_page' => -1,
				'post_type'      => 'attachment',
				'meta_key'       => '_wp_attached_file',
				'meta_value'     => pathinfo( $basename, PATHINFO_FILENAME ),
				'meta_compare'   => 'LIKE',
			) );
			$id = 0;
			$url = '';

			// Avoid duplicates.
			if ( ! is_wp_error( $attachments ) && ! empty( $attachments ) ) {
				foreach ( $attachments as $attachment ) {
					$attachment_url = wp_get_attachment_url( $attachment->ID );
					$file           = get_attached_file( $attachment->ID );
					$filename       = sanitize_file_name( wp_basename( $file ) );

					// Use existing image only if the content matches.
					if ( $filesystem->get_contents( $file ) === base64_decode( $image['encoded'] ) ) {
						$id = isset( $image['id'] ) ? $attachment->ID : 0;
						$url = $attachment_url;

						break;
					}
				}
			}

			// Create new image.
			if ( empty( $url ) ) {
				$temp_file = wp_tempnam();
				$filesystem->put_contents( $temp_file, base64_decode( $image['encoded'] ) );
				$filetype = wp_check_filetype_and_ext( $temp_file, $basename );

				// Avoid further duplicates if the proper_file name match an existing image.
				if ( isset( $filetype['proper_filename'] ) && $filetype['proper_filename'] !== $basename ) {
					if ( isset( $filename ) && $filename === $filetype['proper_filename'] ) {
						// Use existing image only if the basenames and content match.
						if ( $filesystem->get_contents( $file ) === $filesystem->get_contents( $temp_file ) ) {
							$filesystem->delete( $temp_file );
							continue;
						}
					}
				}

				$file = array(
					'name'     => $basename,
					'tmp_name' => $temp_file,
				);
				$upload = media_handle_sideload( $file, 0 );

				if ( ! is_wp_error( $upload ) ) {
					// Set the replacement as an id if the original image was set as an id (for gallery).
					$id = isset( $image['id'] ) ? $upload : 0;
					$url = wp_get_attachment_url( $upload );
				} else {
					// Make sure the temporary file is removed if media_handle_sideload didn't take care of it.
					$filesystem->delete( $temp_file );
				}
			}

			// Only declare the replace if a url is set.
			if ( $id > 0 ) {
				$images[$key]['replacement_id'] = $id;
			}

			if ( ! empty( $url ) ) {
				$images[$key]['replacement_url'] = $url;
			}

			unset( $url );
		}

		return $images;
	}

	/**
	 * Replace encoded image url with a real url
	 *
	 * @param $subject     - The string to perform replacing for
	 * @param array $image - The image settings
	 *
	 * @return string|string[]|null
	 */
	protected function replace_image_url( $subject, $image ) {
		if ( isset( $image['replacement_id'] ) && isset( $image['id'] ) ) {
			$search      = $image['id'];
			$replacement = $image['replacement_id'];
			$subject     = preg_replace( "/(gallery_ids=.*){$search}(.*\")/", "\${1}{$replacement}\${2}", $subject );
		}

		if ( isset( $image['url'] ) && isset( $image['replacement_url'] ) && $image['url'] !== $image['replacement_url'] ) {
			$search      = $image['url'];
			$replacement = $image['replacement_url'];
			$subject     = str_replace( $search, $replacement, $subject );
		}

		return $subject;
	}

	/**
	 * Replace image urls with newly uploaded images.
	 *
	 * @since 2.7.0
	 *
	 * @param array $images Array of new images uploaded.
	 * @param array $data   Array of for which images url needs to be replaced.
	 *
	 * @return array|mixed|object
	 */
	protected function replace_images_urls( $images, $data ) {
		foreach ( $data as $post_id => &$post_data ) {
			foreach ( $images as $image ) {
				if ( is_array( $post_data ) ) {
					foreach ( $post_data as $post_param => &$param_value ) {
						if ( ! is_array( $param_value ) ) {
							$data[ $post_id ][ $post_param ] = $this->replace_image_url( $param_value, $image );
						}
					}
					unset($param_value);
				} else {
					$data[ $post_id ] = $this->replace_image_url( $post_data, $image );
				}
			}
		}
		unset($post_data);

		return $data;
	}

	/**
	 * Validate data and remove any malicious code.
	 *
	 * @since 2.7.0
	 *
	 * @param array $data              Array of data which needs to be validated.
	 * @param array $fields_validation Array of field and validation callback.
	 *
	 * @return array|bool
	 */
	protected function validate( $data, $fields_validation = array() ) {
		if ( ! is_array( $data ) ) {
			return false;
		}

		foreach ( $data as $key => $value ) {
			if ( is_array( $value ) ) {
				$data[$key] = $this->validate( $value, $fields_validation );
			} else {
				if ( isset( $fields_validation[$key] ) ) {
					// @phpcs:ignore Generic.PHP.ForbiddenFunctions.Found
					$data[$key] = call_user_func( $fields_validation[$key], $value );
				} else {
					if ( current_user_can( 'unfiltered_html' ) ) {
						$data[ $key ] = $value;
					} else {
						$data[ $key ] = wp_kses_post( $value );
					}
				}
			}
		}

		return $data;
	}

	/**
	 * Filters a variable with string filter
	 *
	 * @param mixed $data - Value to filter.
	 *
	 * @return mixed
	 */
	protected function _filter_post_data( $data ) {
		return filter_var( $data, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES );
	}

	/**
	 * Prevent import and export timeout or memory failure.
	 *
	 * @since 2.7.0
	 *
	 * It doesn't need to be reset as in both case the request exit.
	 */
	protected function prevent_failure() {
		@set_time_limit( 0 );

		// Increase memory which is safe at this stage of the request.
		if ( et_core_get_memory_limit() < 256 ) {
			@ini_set( 'memory_limit', '256M' );
		}
	}

	/**
	 * Set WP filesystem to direct. This should only be use to create a temporary file.
	 *
	 * @since 2.7.0
	 *
	 * It is safe to do so since the created file is removed immediately after import. The method does'nt have
	 * to be reset since the ajax query is exited.
	 */
	protected function set_filesystem() {
		global $wp_filesystem;

		add_filter( 'filesystem_method', array( $this, 'replace_filesystem_method' ) );
		WP_Filesystem();

		return $wp_filesystem;
	}

	/**
	 * Proxy method for set_filesystem() to avoid calling it multiple times.
	 *
	 * @since 4.0
	 *
	 * @return WP_Filesystem_Direct
	 */
	protected function get_filesystem() {
		static $filesystem = null;

		if ( null === $filesystem ) {
			$filesystem = $this->set_filesystem();
		}

		return $filesystem;
	}

	/**
	 * Check if a temporary file is register. Returns temporary file if it exists.
	 *
	 * @since 4.0 Made method public.
	 *
	 * @param string $id    Unique id used when the temporary file was created.
	 * @param string $group Group name in which files are grouped.
	 *
	 * @return bool|string
	 */
	public function has_temp_file( $id, $group ) {
		$temp_files = get_option( '_et_core_portability_temp_files', array() );

		if ( isset( $temp_files[$group][$id] ) && file_exists( $temp_files[$group][$id] ) ) {
			return $temp_files[$group][$id];
		}

		return false;
	}

	/**
	 * Create a temp file and register it.
	 *
	 * @since 2.7.0
	 * @since 4.0 Made method public. Added $content parameter.
	 *
	 * @param string      $id        Unique id reference for the temporary file.
	 * @param string      $group     Group name in which files are grouped.
	 * @param string|bool $temp_file Path to the temporary file. False create a new temporary file.
	 *
	 * @return bool|string
	 */
	public function temp_file( $id, $group, $temp_file = false, $content = '' ) {
		$temp_files = get_option( '_et_core_portability_temp_files', array() );

		if ( ! isset( $temp_files[$group] ) ) {
			$temp_files[$group] = array();
		}

		if ( isset( $temp_files[$group][$id] ) && file_exists( $temp_files[$group][$id] ) ) {
			return $temp_files[$group][$id];
		}

		$temp_file = $temp_file ? $temp_file : wp_tempnam();
		$temp_files[$group][$id] = $temp_file;

		update_option( '_et_core_portability_temp_files', $temp_files, false );

		if ( ! empty( $content ) ) {
			$this->get_filesystem()->put_contents( $temp_file, $content );
		}

		return $temp_file;
	}

	/**
	 * Get temp file contents or an empty string if it does not exist.
	 *
	 * @since 4.0
	 *
	 * @param string $id    Unique id used when the temporary file was created.
	 * @param string $group Group name in which files are grouped.
	 *
	 * @return string
	 */
	public function get_temp_file_contents( $id, $group ) {
		$file = $this->has_temp_file( $id, $group );

		if ( ! $file ) {
			return '';
		}

		$content = $this->get_filesystem()->get_contents( $file );

		return $content ? $content : '';
	}

	/**
	 * Delete all the temp files.
	 *
	 * @since 2.7.0
	 *
	 * @param bool|string $group         Group name in which files are grouped. Set to true to remove all groups and files.
	 * @param array       $defined_files Array or temoporary files to delete. No argument deletes all temp files.
	 */
	public function delete_temp_files( $group = false, $defined_files = false ) {
		$filesystem = $this->set_filesystem();
		$temp_files = get_option( '_et_core_portability_temp_files', array() );

		// Remove all temp files accross all groups if group is true.
		if ( $group === true ) {
			foreach( $temp_files as $group_id => $_group ) {
				$this->delete_temp_files( $group_id );
			}
		}

		if ( ! isset( $temp_files[$group] ) ) {
			return;
		}

		$delete_files = ( is_array( $defined_files ) && ! empty( $defined_files ) ) ? $defined_files : $temp_files[$group];

		foreach ( $delete_files as $id => $temp_file ) {
			if ( isset( $temp_files[$group][$id] ) && $filesystem->delete( $temp_files[$group][$id] ) ) {
				unset( $temp_files[$group][$id] );
			}
		}

		if ( empty( $temp_files[$group] ) ) {
			unset( $temp_files[$group] );
		}

		if ( empty( $temp_files ) ) {
			delete_option( '_et_core_portability_temp_files' );
		} else {
			update_option( '_et_core_portability_temp_files', $temp_files, false );
		}
	}

	/**
	 * Set WP filesystem method to direct.
	 *
	 * @since 2.7.0
	 */
	public function replace_filesystem_method() {
		return 'direct';
	}

	/**
	 * Get timestamp or create one if it isn't set.
	 *
	 * @since 2.7.0
	 */
	public function get_timestamp() {
		et_core_nonce_verified_previously();

		return isset( $_POST['timestamp'] ) && ! empty( $_POST['timestamp'] ) ? sanitize_text_field( $_POST['timestamp'] ) : current_time( 'timestamp' );
	}

	/**
	 * Returns Global Presets used for a given shortcode only
	 *
	 * @since 3.26
	 *
	 * @param array $shortcode_object - The multidimensional array representing a page structure
	 * @param array $used_global_presets
	 *
	 * @return array - The list of the Global Presets
	 *
	 */
	protected function get_used_global_presets( $shortcode_object, $used_global_presets = array() ) {
		$global_presets_manager = ET_Builder_Global_Presets_Settings::instance();

		foreach ( $shortcode_object as $module ) {
			$module_type = $global_presets_manager->maybe_convert_module_type( $module['type'], $module['attrs'] );
			$preset_id   = $global_presets_manager->get_module_preset_id( $module_type, $module['attrs'] );
			$preset      = $global_presets_manager->get_module_preset( $module_type, $preset_id );

			if ( $preset_id !== 'default' && count( (array) $preset ) !== 0 && count( (array) $preset->settings ) !== 0 ) {
				if ( ! isset( $used_global_presets[ $module_type ] ) ) {
					$used_global_presets[ $module_type ] = (object) array(
						'presets' => (object) array(),
					);
				}

				if ( ! isset( $used_global_presets[ $module_type ]->presets->$preset_id ) ) {
					$used_global_presets[ $module_type ]->presets->$preset_id = (object) array(
						'name'     => $preset->name,
						'version'  => $preset->version,
						'settings' => $preset->settings,
					);
				}

				if ( ! isset( $used_global_presets[ $module_type ]->default ) ) {
					$used_global_presets[ $module_type ]->default = $global_presets_manager->get_module_default_preset_id( $module_type );
				}
			}

			if ( is_array( $module['content'] ) ) {
				$used_global_presets = array_merge( $used_global_presets, $this->get_used_global_presets( $module['content'], $used_global_presets ) );
			}
		}

		return $used_global_presets;
	}

	/**
	 * Enqueue assets.
	 *
	 * @since ?.? Script `et-core-portability` now loads in footer along with `et-core-admin`.
	 * @since 2.7.0
	 */
	public function assets() {
		$time = '<span>1</span>';

		wp_enqueue_style( 'et-core-portability', ET_CORE_URL . 'admin/css/portability.css', array(
			'et-core-admin',
		), ET_CORE_VERSION );

		wp_enqueue_script(
			'et-core-portability',
			ET_CORE_URL . 'admin/js/portability.js',
			array(
				'jquery',
				'jquery-ui-tabs',
				'jquery-form',
				'et-core-admin',
			),
			ET_CORE_VERSION,
			true
		);

		wp_localize_script( 'et-core-portability', 'etCorePortability', array(
			'nonces'        => array(
				'import' => wp_create_nonce( 'et_core_portability_import' ),
				'export' => wp_create_nonce( 'et_core_portability_export' ),
				'cancel' => wp_create_nonce( 'et_core_portability_cancel' ),
			),
			'postMaxSize'   => $this->to_megabytes( @ini_get( 'post_max_size' ) ),
			'uploadMaxSize' => $this->to_megabytes( @ini_get( 'upload_max_filesize' ) ),
			'text'          => array(
				'browserSupport'      => esc_html__( 'The browser version you are currently using is outdated. Please update to the newest version.', ET_CORE_TEXTDOMAIN ),
				'memoryExhausted'     => esc_html__( 'You reached your server memory limit. Please try increasing your PHP memory limit.', ET_CORE_TEXTDOMAIN ),
				'maxSizeExceeded'     => esc_html__( 'This file cannot be imported. It may be caused by file_uploads being disabled in your php.ini. It may also be caused by post_max_size or/and upload_max_filesize being smaller than file selected. Please increase it or transfer more substantial data at the time.', ET_CORE_TEXTDOMAIN ),
				'invalideFile'        => esc_html__( 'Invalid File format. You should be uploading a JSON file.', ET_CORE_TEXTDOMAIN ),
				'importContextFail'   => esc_html__( 'This file should not be imported in this context.', ET_CORE_TEXTDOMAIN ),
				'noItemsSelected'     => esc_html__( 'Please select at least one item to export or disable the "Only export selected items" option', ET_CORE_TEXTDOMAIN ),
				'importing'           => sprintf( esc_html__( 'Import estimated time remaining: %smin', ET_CORE_TEXTDOMAIN ), $time ),
				'exporting'           => sprintf( esc_html__( 'Export estimated time remaining: %smin', ET_CORE_TEXTDOMAIN ), $time ),
				'backuping'           => sprintf( esc_html__( 'Backup estimated time remaining: %smin', ET_CORE_TEXTDOMAIN ), $time ),
			),
		) );
	}

	/**
	 * Modal HTML.
	 *
	 * @since 2.7.0
	 */
	public function modal() {
		$export_url = add_query_arg( array(
			'et_core_portability' => true,
			'context'             => $this->instance->context,
			'name'                => $this->instance->name,
			'nonce'               => wp_create_nonce( 'et_core_portability_export' ),

		), admin_url() );

		$is_etdev_plugin_activated = is_plugin_active( 'etdev/etdev.php' );

		?>
		<div class="et-core-modal-overlay et-core-form" data-et-core-portability="<?php echo esc_attr( $this->instance->context ); ?>">
			<div class="et-core-modal">
				<div class="et-core-modal-header">
					<h3 class="et-core-modal-title"><?php esc_html_e( 'Portability', ET_CORE_TEXTDOMAIN ); ?></h3><a href="#" class="et-core-modal-close" data-et-core-modal="close"></a>
				</div>
				<div data-et-core-tabs class="et-core-modal-tabs-enabled">
					<ul class="et-core-tabs">
						<li><a href="#et-core-portability-export"><?php esc_html_e( 'Export', ET_CORE_TEXTDOMAIN ); ?></a></li>
						<li><a href="#et-core-portability-import"><?php esc_html_e( 'Import', ET_CORE_TEXTDOMAIN ); ?></a></li>
					</ul>
					<div id="et-core-portability-export">
						<div class="et-core-modal-content">
							<?php printf( esc_html__( 'Exporting your %s will create a JSON file that can be imported into a different website.', ET_CORE_TEXTDOMAIN ), esc_html( $this->instance->name ) ); ?>
							<h3><?php esc_html_e( 'Export File Name', ET_CORE_TEXTDOMAIN ); ?></h3>
							<form class="et-core-portability-export-form">
								<input type="text" name="" value="<?php echo esc_attr( $this->instance->name ); ?>">
								<?php if ( 'post_type' === $this->instance->type ) : ?>
									<div class="et-core-clearfix"></div>
									<label><input type="checkbox" name="et-core-portability-posts" <?php echo $is_etdev_plugin_activated ? 'checked' : ''; ?> /><?php esc_html_e( 'Only export selected items', ET_CORE_TEXTDOMAIN ); ?></label>
								<?php endif; ?>
								<?php if ( $is_etdev_plugin_activated ) : ?>
									<div class="et-core-clearfix"></div>
									<label><input type="checkbox" name="et-core-portability-apply-presets" checked /><?php esc_html_e( 'Export Presets As Static Styles', ET_CORE_TEXTDOMAIN ); ?></label>
								<?php endif; ?>
							</form>
						</div>
						<a class="et-core-modal-action" href="#" data-et-core-portability-export="<?php echo esc_url( $export_url ); ?>"><?php printf( esc_html__( 'Export %s', ET_CORE_TEXTDOMAIN ), esc_html( $this->instance->name ) ); ?></a>
						<a class="et-core-modal-action et-core-button-danger" href="#" data-et-core-portability-cancel><?php esc_html_e( 'Cancel Export', ET_CORE_TEXTDOMAIN ); ?></a>
					</div>
					<div id="et-core-portability-import">
						<div class="et-core-modal-content">
							<?php if ( 'post' === $this->instance->type ) : ?>
								<?php printf( esc_html__( 'Importing a previously-exported %s file will overwrite all content currently on this page.', ET_CORE_TEXTDOMAIN ), esc_html( $this->instance->name ) ); ?>
							<?php elseif ( 'post_type' === $this->instance->type ) : ?>
								<?php printf( esc_html__( 'Select a previously-exported Divi Builder Layouts file to begin importing items. Large collections of image-heavy exports may take several minutes to upload.', ET_CORE_TEXTDOMAIN ), esc_html( $this->instance->name ) ); ?>
							<?php else : ?>
								<?php printf( esc_html__( 'Importing a previously-exported %s file will overwrite all current data. Please proceed with caution!', ET_CORE_TEXTDOMAIN ), esc_html( $this->instance->name ) ); ?>
							<?php endif; ?>
							<h3><?php esc_html_e( 'Select File To Import', ET_CORE_TEXTDOMAIN ); ?></h3>
							<form class="et-core-portability-import-form">
								<span class="et-core-portability-import-placeholder"><?php esc_html_e( 'No File Selected', ET_CORE_TEXTDOMAIN ); ?></span>
								<button class="et-core-button"><?php esc_html_e( 'Choose File', ET_CORE_TEXTDOMAIN ); ?></button>
								<input type="file">
								<div class="et-core-clearfix"></div>
								<?php if ( 'post_type' !== $this->instance->type ) : ?>
									<label><input type="checkbox" name="et-core-portability-import-backup" /><?php esc_html_e( 'Download backup before importing', ET_CORE_TEXTDOMAIN ); ?></label>
								<?php endif; ?>
								<?php if ( 'post_type' === $this->instance->type ) : ?>
									<label><input type="checkbox" name="et-core-portability-import-include-global-presets" /><?php esc_html_e( 'Import Presets', ET_CORE_TEXTDOMAIN ); ?></label>
								<?php endif; ?>
							</form>
						</div>
						<a class="et-core-modal-action et-core-portability-import" href="#"><?php printf( esc_html__( 'Import %s', ET_CORE_TEXTDOMAIN ), esc_html( $this->instance->name ) ); ?></a>
						<a class="et-core-modal-action et-core-button-danger" href="#" data-et-core-portability-cancel><?php esc_html_e( 'Cancel Import', ET_CORE_TEXTDOMAIN ); ?></a>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}


if ( ! function_exists( 'et_core_portability_register' ) ) :
/**
 * Register portability.
 *
 * This function should be called in an 'admin_init' action callback.
 *
 * @since 2.7.0
 *
 * @param string $context A unique ID used to register the portability arguments.
 *
 * @param array  $args {
 *      Array of arguments used to register the portability.
 *
 * 		@type string $name	  The name used in the various text string.
 * 		@type bool   $view	  Whether the assets and content should load or not.
 * 		      				  Example: `isset( $_GET['page'] ) && $_GET['page'] == 'example'`.
 * 		@type string $db	  The option_name from the wp_option table used to export and import data.
 * 		@type array  $include Optional. Array of all the options scritcly included. Options ids must be set
 *         					  as the array keys.
 *      @type array  $exclude Optional. Array of excluded options. Options ids must be set as the array keys.
 * }
 */
function et_core_portability_register( $context, $args ) {
	$defaults = array(
		'context' => $context,
		'name'    => false,
		'view'    => false,
		'type'    => false,
		'target'  => false,
		'include' => array(),
		'exclude' => array(),
	);

	$data = apply_filters( "et_core_portability_args_{$context}", (object) array_merge( $defaults, (array) $args ) );

	et_core_cache_set( $context, $data, 'et_core_portability' );

	// Stop here if not allowed.
	if ( function_exists( 'et_pb_is_allowed' ) && ! et_pb_is_allowed( array( 'portability', "{$data->context}_portability" ) ) ) {

		// Set view to false if not allowed.
		$data->view = false;
		et_core_cache_set( $context, $data, 'et_core_portability' );

		return;
	}

	if ( $data->view ) {
		et_core_portability_load( $context );
	}
}
endif;


if ( ! function_exists( 'et_core_portability_load' ) ) :
/**
 * Load Portability class.
 *
 * @since 2.7.0
 *
 * @param string $context A unique ID used to register the portability arguments.
 * @return ET_Core_Portability
 */
function et_core_portability_load( $context ) {
	return new ET_Core_Portability( $context );
}
endif;


if ( ! function_exists( 'et_core_portability_link' ) ) :
/**
 * HTML link to trigger the portability modal.
 *
 * @since 2.7.0
 *
 * @param string       $context    The context used to register the portability.
 * @param string|array $attributes Optional. Query string or array of attributes. Default empty.
 *
 * @return string
 */
function et_core_portability_link( $context, $attributes = array() ) {
	$instance = et_core_cache_get( $context, 'et_core_portability' );

	if ( ! $capability = et_core_portability_cap( $context ) ) {
		return '';
	}

	if ( ! current_user_can( $capability ) || ! ( isset( $instance->view ) && $instance->view ) ) {
		return '';
	}

	$defaults = array(
		'title' => esc_attr__( 'Import & Export', ET_CORE_TEXTDOMAIN ),
	);
	$attributes = array_merge( $defaults, $attributes );

	// Forced attributes.
	$attributes['href'] = '#';
	$context = esc_attr( $context );
	$attributes['data-et-core-modal'] = "[data-et-core-portability='{$context}']";

	$string = '';

	foreach ( $attributes as $attribute => $value ) {
		if ( null !== $value ){
			$string .= esc_attr( $attribute ) . '="' . esc_attr( $value ) . '" ';
		}
	}

	return sprintf(
		'<a %1$s><span>%2$s</span></a>',
		trim( $string ),
		esc_html( $attributes['title'] )
	);
}
endif;


if ( ! function_exists( 'et_core_portability_ajax_import' ) ) :
/**
 * Ajax portability Import.
 *
 * @since 2.7.0
 */
function et_core_portability_ajax_import() {
	if ( ! isset( $_POST['context'] ) ) {
		et_core_die();
	}

	$context = sanitize_text_field( $_POST['context'] );
	$post_id = isset( $_POST['post'] ) ? (int) $_POST['post'] : 0;
	$replace = isset( $_POST['replace'] ) ? '1' === $_POST['replace'] : false;

	if ( ! $capability = et_core_portability_cap( $context ) ) {
		et_core_die();
	}

	if ( ! et_core_security_check_passed( $capability, 'et_core_portability_import', 'nonce' ) ) {
		et_core_die();
	}

	$portability = et_core_portability_load( $context );

	if ( ! $result = $portability->import() ) {
		wp_send_json_error();
	} else if ( is_array( $result ) && isset( $result['message'] ) ) {
		wp_send_json_error( $result );
	} else if ( $result ) {
		if ( $replace && $post_id > 0 && current_user_can( 'edit_post', $post_id ) ) {
			wp_update_post( array(
				'ID' => $post_id,
				'post_content' => $result['postContent'],
			) );
		}

		wp_send_json_success( $result );
	}

	wp_send_json_error();
}
add_action( 'wp_ajax_et_core_portability_import', 'et_core_portability_ajax_import' );
endif;


if ( ! function_exists( 'et_core_portability_ajax_export' ) ) :
/**
 * Ajax portability Export.
 *
 * @since 2.7.0
 */
function et_core_portability_ajax_export() {
	if ( ! isset( $_POST['context'] ) ) {
		et_core_die();
	}

	$context = sanitize_text_field( $_POST['context'] );

	if ( ! $capability = et_core_portability_cap( $context ) ) {
		et_core_die();
	}

	if ( ! et_core_security_check_passed( $capability, 'et_core_portability_export', 'nonce' ) ) {
		et_core_die();
	}

	et_core_portability_load( $context )->export();

	wp_send_json_error();
}
add_action( 'wp_ajax_et_core_portability_export', 'et_core_portability_ajax_export' );
endif;


if ( ! function_exists( 'et_core_portability_ajax_cancel' ) ) :
/**
 * Cancel portability action.
 *
 * @since 2.7.0
 */
function et_core_portability_ajax_cancel() {
	if ( ! isset( $_POST['context'] ) ) {
		et_core_die();
	}

	$context = sanitize_text_field( $_POST['context'] );

	if ( ! $capability = et_core_portability_cap( $context ) ) {
		et_core_die();
	}

	if ( ! et_core_security_check_passed( $capability, 'et_core_portability_cancel' ) ) {
		et_core_die();
	}

	et_core_portability_load( $context )->delete_temp_files( true );

	wp_send_json_error();
}
add_action( 'wp_ajax_et_core_portability_cancel', 'et_core_portability_ajax_cancel' );
endif;


if ( ! function_exists( 'et_core_portability_export' ) ) :
/**
 * Portability export.
 *
 * @since 2.7.0
 */
function et_core_portability_export() {
	if ( ! isset( $_GET['et_core_portability'], $_GET['timestamp'] ) ) {
		return;
	}

	if ( ! et_core_security_check_passed( 'edit_posts' ) ) {
		wp_die( esc_html__( 'The export process failed. Please refresh the page and try again.', ET_CORE_TEXTDOMAIN ) );
	}

	et_core_portability_load( sanitize_text_field( $_GET['timestamp'] ) )->download_export();
}
add_action( 'admin_init', 'et_core_portability_export', 20 );
endif;


if ( ! function_exists( 'et_core_portability_cap' ) ):
/**
 * Returns the required WordPress Capability for a Portability context.
 *
 * @since 3.0.91
 *
 * @param string $context The Portability context
 *
 * @return string
 */
function et_core_portability_cap( $context ) {
	$capability       = '';
	$options_contexts = array(
		'et_pb_roles',
		'et_builder_layouts',
		'epanel',
		'et_divi_mods',
		'et_extra_mods',
	);
	$post_contexts    = array(
		'et_builder',
		'et_theme_builder',
	);

	if ( in_array( $context, $options_contexts, true ) ) {
		$capability = 'edit_theme_options';
	} else if ( in_array( $context, $post_contexts, true ) ) {
		$capability = 'edit_posts';
	}

	return $capability;
}
endif;
