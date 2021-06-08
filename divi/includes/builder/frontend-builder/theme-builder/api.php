<?php
/**
 * Create a new layout.
 *
 * @since 4.0
 *
 * @return void
 */
function et_theme_builder_api_create_layout() {
	et_builder_security_check( 'theme_builder', 'edit_others_posts', 'et_theme_builder_api_create_layout', 'nonce' );

	$layout_type = isset( $_POST['layout_type'] ) ? sanitize_text_field( $_POST['layout_type'] ) : '';  // phpcs:ignore WordPress.Security.NonceVerification.Missing -- No need to use nonce.
	$post_type   = et_theme_builder_get_valid_layout_post_type( $layout_type );

	if ( '' === $post_type ) {
		wp_send_json_error(
			array(
				'message' => 'Invalid layout type: ' . $layout_type,
			)
		);
	}

	$post_id = et_theme_builder_insert_layout(
		array(
			'post_type' => $post_type,
		)
	);

	if ( is_wp_error( $post_id ) ) {
		wp_send_json_error(
			array(
				'message' => 'Failed to create layout.',
			)
		);
	}

	wp_send_json_success(
		array(
			'id' => $post_id,
		)
	);
}
add_action( 'wp_ajax_et_theme_builder_api_create_layout', 'et_theme_builder_api_create_layout' );

/**
 * Duplicate a layout.
 *
 * @since 4.0
 *
 * @return void
 */
function et_theme_builder_api_duplicate_layout() {
	et_builder_security_check( 'theme_builder', 'edit_others_posts', 'et_theme_builder_api_duplicate_layout', 'nonce' );

	$layout_type = isset( $_POST['layout_type'] ) ? sanitize_text_field( $_POST['layout_type'] ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Missing -- No need to use nonce.
	$post_type   = et_theme_builder_get_valid_layout_post_type( $layout_type );
	$layout_id   = isset( $_POST['layout_id'] ) ? (int) $_POST['layout_id'] : 0; // phpcs:ignore WordPress.Security.NonceVerification.Missing -- No need to use nonce.
	$layout      = get_post( $layout_id );

	if ( ! $layout ) {
		wp_send_json_error(
			array(
				'message' => 'Failed to duplicate layout.',
			)
		);
	}

	$post_id = et_theme_builder_insert_layout(
		array(
			'post_type'    => '' !== $post_type ? $post_type : $layout->post_type,
			'post_status'  => $layout->post_status,
			'post_title'   => $layout->post_title,
			'post_content' => $layout->post_content,
		)
	);

	if ( is_wp_error( $post_id ) ) {
		wp_send_json_error(
			array(
				'message' => 'Failed to duplicate layout.',
			)
		);
	}

	$meta = et_core_get_post_builder_meta( $layout_id );

	foreach ( $meta as $entry ) {
		update_post_meta( $post_id, $entry['key'], $entry['value'] );
	}

	wp_send_json_success(
		array(
			'id' => $post_id,
		)
	);
}
add_action( 'wp_ajax_et_theme_builder_api_duplicate_layout', 'et_theme_builder_api_duplicate_layout' );

/**
 * Get layout url.
 *
 * @since 4.0
 *
 * @return void
 */
function et_theme_builder_api_get_layout_url() {
	et_builder_security_check( 'theme_builder', 'edit_others_posts', 'et_theme_builder_api_get_layout_url', 'nonce' );

	$layout_id = isset( $_POST['layout_id'] ) ? (int) $_POST['layout_id'] : 0; // phpcs:ignore WordPress.Security.NonceVerification.Missing -- No need to use nonce.
	$layout    = get_post( $layout_id );

	if ( ! $layout ) {
		wp_send_json_error(
			array(
				'message' => 'Failed to load layout.',
			)
		);
	}

	$edit_url = add_query_arg( 'et_tb', '1', et_fb_get_builder_url( get_permalink( $layout_id ) ) );
	// If Admin is SSL but FE is not, we need to fix VB url or it won't work
	// because trying to load insecure resource.
	$edit_url = set_url_scheme( $edit_url, is_ssl() ? 'https' : 'http' );

	wp_send_json_success(
		array(
			'editUrl' => $edit_url,
		)
	);
}
add_action( 'wp_ajax_et_theme_builder_api_get_layout_url', 'et_theme_builder_api_get_layout_url' );

/**
 * Save the theme builder post.
 *
 * @since 4.0
 *
 * @return void
 */
function et_theme_builder_api_save() {
	et_builder_security_check( 'theme_builder', 'edit_others_posts', 'et_theme_builder_api_save', 'nonce' );

	$_                = et_();
	$live             = '1' === $_->array_get( $_POST, 'live', '0' );
	$templates        = wp_unslash( $_->array_get( $_POST, 'templates', array() ) );
	$theme_builder_id = et_theme_builder_get_theme_builder_post_id( $live, true );
	$has_default      = false;
	$updated_ids      = array();

	delete_post_meta( $theme_builder_id, '_et_template' );

	foreach ( $templates as $template ) {
		$raw_post_id = $_->array_get( $template, 'id', 0 );
		$post_id     = is_numeric( $raw_post_id ) ? (int) $raw_post_id : 0;
		$new_post_id = et_theme_builder_store_template( $theme_builder_id, $template, ! $has_default );
		$is_default  = get_post_meta( $new_post_id, '_et_default', true ) === '1';

		if ( $is_default ) {
			$has_default = true;
		}

		if ( $new_post_id !== $post_id ) {
			$updated_ids[ $raw_post_id ] = $new_post_id;
		}
	}

	if ( $live ) {
		et_theme_builder_trash_draft_and_unused_posts();
	}

	et_theme_builder_clear_wp_cache( 'all' );

	wp_send_json_success(
		array(
			'updatedTemplateIds' => (object) $updated_ids,
		)
	);
}
add_action( 'wp_ajax_et_theme_builder_api_save', 'et_theme_builder_api_save' );

/**
 * Drop the theme builder post autosave.
 *
 * @since 4.0
 *
 * @return void
 */
function et_theme_builder_api_drop_autosave() {
	et_builder_security_check( 'theme_builder', 'edit_others_posts', 'et_theme_builder_api_drop_autosave', 'nonce' );

	et_theme_builder_trash_draft_and_unused_posts();

	wp_send_json_success();
}
add_action( 'wp_ajax_et_theme_builder_api_drop_autosave', 'et_theme_builder_api_drop_autosave' );

function et_theme_builder_api_get_template_settings() {
	et_builder_security_check( 'theme_builder', 'edit_others_posts', 'et_theme_builder_api_get_template_settings', 'nonce', '_GET' );

	$parent   = isset( $_GET['parent'] ) ? sanitize_text_field( $_GET['parent'] ) : '';
	$search   = isset( $_GET['search'] ) ? sanitize_text_field( $_GET['search'] ) : '';
	$page     = isset( $_GET['page'] ) ? (int) $_GET['page'] : 1;
	$page     = $page >= 1 ? $page : 1;
	$per_page = 30;
	$settings = et_theme_builder_get_flat_template_settings_options();

	if ( ! isset( $settings[ $parent ] ) || empty( $settings[ $parent ]['options'] ) ) {
		wp_send_json_error(
			array(
				'message' => __( 'Invalid parent setting specified.', 'et_builder' ),
			)
		);
	}

	$setting = $settings[ $parent ];
	$results = et_theme_builder_get_template_setting_child_options( $setting, array(), $search, $page, $per_page );

	wp_send_json_success(
		array(
			'results' => array_values( $results ),
		)
	);
}
add_action( 'wp_ajax_et_theme_builder_api_get_template_settings', 'et_theme_builder_api_get_template_settings' );

function et_theme_builder_api_reset() {
	et_builder_security_check( 'theme_builder', 'edit_others_posts', 'et_theme_builder_api_reset', 'nonce' );

	$live_id = et_theme_builder_get_theme_builder_post_id( true, false );

	if ( $live_id > 0 ) {
		wp_trash_post( $live_id );
	}

	et_theme_builder_trash_draft_and_unused_posts();

	wp_send_json_success();
}
add_action( 'wp_ajax_et_theme_builder_api_reset', 'et_theme_builder_api_reset' );

function et_theme_builder_api_export_theme_builder() {
	if ( ! et_pb_is_allowed( 'theme_builder' ) ) {
		wp_send_json_error();
	}

	et_builder_security_check(
		'et_theme_builder_portability',
		et_core_portability_cap( 'et_theme_builder' ),
		'et_theme_builder_api_export_theme_builder',
		'nonce'
	);

	$_              = et_();
	$raw_templates  = wp_unslash( $_->array_get( $_POST, 'templates', array() ) );
	$global_layouts = array(
		'header' => (int) $_->array_get( $_POST, 'global_layouts.header', 0 ),
		'body'   => (int) $_->array_get( $_POST, 'global_layouts.body', 0 ),
		'footer' => (int) $_->array_get( $_POST, 'global_layouts.footer', 0 ),
	);
	$has_default    = false;
	$steps          = array();

	foreach ( $raw_templates as $template ) {
		$is_default = ! $has_default && '1' === $_->array_get( $template, 'default', '0' );

		if ( $is_default ) {
			$has_default = true;
		}

		$sanitized = et_theme_builder_sanitize_template(
			array_merge(
				$template,
				array(
					'default' => $is_default ? '1' : '0',
				)
			)
		);

		$steps[] = array(
			'type' => 'template',
			'data' => $sanitized,
		);

		$layout_keys = array( 'header', 'body', 'footer' );
		foreach ( $layout_keys as $key ) {
			$layout_id = (int) $_->array_get( $sanitized, array( 'layouts', $key, 'id' ), 0 );

			if ( 0 === $layout_id ) {
				continue;
			}

			$steps[] = array(
				'type' => 'layout',
				'data' => array(
					'post_id'   => $layout_id,
					'is_global' => $layout_id === $global_layouts[ $key ],
				),
			);
		}
	}

	$presets_manager = ET_Builder_Global_Presets_Settings::instance();
	$presets         = $presets_manager->get_global_presets();

	if ( ! empty( $presets ) ) {
		$steps[] = array(
			'type' => 'presets',
			'data' => $presets,
		);
	}

	$id        = md5( get_current_user_id() . '_' . uniqid( 'et_theme_builder_export_', true ) );
	$transient = 'et_theme_builder_export_' . get_current_user_id() . '_' . $id;

	set_transient(
		$transient,
		array(
			'ready'        => false,
			'steps'        => $steps,
			'temp_file'    => '',
			'temp_file_id' => '',
		),
		60 * 60 * 24
	);

	wp_send_json_success(
		array(
			'id'    => $id,
			'steps' => count( $steps ),
		)
	);
}
add_action( 'wp_ajax_et_theme_builder_api_export_theme_builder', 'et_theme_builder_api_export_theme_builder' );

function et_theme_builder_api_export_theme_builder_step() {
	if ( ! et_pb_is_allowed( 'theme_builder' ) ) {
		wp_send_json_error();
	}

	et_builder_security_check(
		'et_theme_builder_portability',
		et_core_portability_cap( 'et_theme_builder' ),
		'et_theme_builder_api_export_theme_builder',
		'nonce'
	);

	$_         = et_();
	$id        = sanitize_text_field( $_->array_get( $_POST, 'id', '' ) );
	$step      = (int) $_->array_get( $_POST, 'step', 0 );
	$chunk     = (int) $_->array_get( $_POST, 'chunk', 0 );
	$transient = 'et_theme_builder_export_' . get_current_user_id() . '_' . $id;
	$export    = get_transient( $transient );

	if ( false === $export || ! isset( $export['steps'][ $step ] ) ) {
		wp_send_json_error();
	}

	$portability = et_core_portability_load( 'et_theme_builder' );
	$export_step = isset( $export['steps'][ $step ] ) ? $export['steps'][ $step ] : array();
	$result      = $portability->export_theme_builder( $id, $export_step, count( $export['steps'] ), $step, $chunk );

	if ( false === $result ) {
		wp_send_json_error();
	}

	if ( $result['ready'] ) {
		set_transient(
			$transient,
			array_merge(
				$export,
				array(
					'ready'        => $result['ready'],
					'temp_file'    => $result['temp_file'],
					'temp_file_id' => $result['temp_file_id'],
				)
			),
			60 * 60 * 24
		);
	}

	wp_send_json_success(
		array(
			'chunks' => $result['chunks'],
		)
	);
}
add_action( 'wp_ajax_et_theme_builder_api_export_theme_builder_step', 'et_theme_builder_api_export_theme_builder_step' );

function et_theme_builder_api_export_theme_builder_download() {
	if ( ! et_pb_is_allowed( 'theme_builder' ) ) {
		wp_send_json_error();
	}

	et_builder_security_check(
		'et_theme_builder_portability',
		et_core_portability_cap( 'et_theme_builder' ),
		'et_theme_builder_api_export_theme_builder',
		'nonce',
		'_GET'
	);

	$_         = et_();
	$id        = sanitize_text_field( $_->array_get( $_GET, 'id', '' ) );
	$filename  = sanitize_text_field( $_->array_get( $_GET, 'filename', '' ) );
	$filename  = '' !== $filename ? $filename : 'Divi Theme Builder Templates';
	$filename  = sanitize_file_name( $filename );
	$transient = 'et_theme_builder_export_' . get_current_user_id() . '_' . $id;
	$export    = get_transient( $transient );

	if ( false === $export || ! $export['ready'] ) {
		wp_send_json_error();
	}

	$portability = et_core_portability_load( 'et_theme_builder' );
	$portability->download_file( $filename, $export['temp_file_id'], $export['temp_file'] );
}
add_action( 'wp_ajax_et_theme_builder_api_export_theme_builder_download', 'et_theme_builder_api_export_theme_builder_download' );

/**
 * Save a layout in a temporary file to prepare it for import.
 *
 * @since 4.1.0
 *
 * @param ET_Core_Portability $portability Portability object.
 * @param string              $template_id Template ID.
 * @param integer             $layout_id   Layout ID.
 * @param array               $layout      Layout.
 * @param string              $temp_id     Temporary ID.
 * @param string              $temp_group  Temporary Group.
 */
function et_theme_builder_api_import_theme_builder_save_layout( $portability, $template_id, $layout_id, $layout, $temp_id, $temp_group ) {
	if ( ! empty( $layout['images'] ) ) {
		// Split up images into individual temporary files
		// to avoid hitting the memory limit.
		foreach ( $layout['images'] as $url => $data ) {
			$image_temp_id = $temp_id . '-image-' . md5( $url );

			$portability->temp_file( $image_temp_id, $temp_group, false, wp_json_encode( $data ) );

			$layout['images'][ $url ] = array(
				'id'    => $image_temp_id,
				'group' => $temp_group,
			);
		}
	}

	$portability->temp_file(
		$temp_id,
		$temp_group,
		false,
		wp_json_encode(
			array(
				'type'        => 'layout',
				'data'        => $layout,
				'id'          => $layout_id,
				'template_id' => $template_id,
			)
		)
	);
}

/**
 * Load a previously saved layout from a temporary file.
 *
 * @since 4.1.0
 *
 * @param ET_Core_Portability $portability Portability Object.
 * @param string              $temp_id     Temporary ID.
 * @param string              $temp_group  Temporary Group.
 *
 * @return array
 */
function et_theme_builder_api_import_theme_builder_load_layout( $portability, $temp_id, $temp_group ) {
	$import = $portability->get_temp_file_contents( $temp_id, $temp_group );
	$import = ! empty( $import ) ? json_decode( $import, true ) : array();
	$images = et_()->array_get( $import, array( 'data', 'images' ), array() );

	// Hydrate images back from their individual temporary files.
	foreach ( $images as $url => $file ) {
		$import['data']['images'][ $url ] = json_decode( $portability->get_temp_file_contents( $file['id'], $file['group'] ), true );
	}

	return $import;
}

function et_theme_builder_api_import_theme_builder() {
	$i18n = array_merge(
		require ET_BUILDER_DIR . 'frontend-builder/i18n/generic.php',
		require ET_BUILDER_DIR . 'frontend-builder/i18n/portability.php',
		require ET_BUILDER_DIR . 'frontend-builder/i18n/theme-builder.php'
	);

	if ( ! et_pb_is_allowed( 'theme_builder' ) ) {
		wp_send_json_error(
			array(
				'code'  => ET_Theme_Builder_Api_Errors::UNKNOWN,
				'error' => $i18n['An unknown error has occurred. Please try again later.'],
			)
		);
	}

	et_builder_security_check(
		'et_theme_builder_portability',
		et_core_portability_cap( 'et_theme_builder' ),
		'et_theme_builder_api_import_theme_builder',
		'nonce'
	);

	if ( ! isset( $_FILES['file']['name'] ) || ! et_()->ends_with( sanitize_file_name( $_FILES['file']['name'] ), '.json' ) ) {
		wp_send_json_error(
			array(
				'code'  => ET_Theme_Builder_Api_Errors::PORTABILITY_IMPORT_INVALID_FILE,
				'error' => $i18n['$invalid_file'],
			)
		);
	}

	$_      = et_();
	$upload = wp_handle_upload(
		$_FILES['file'],
		array(
			'test_size' => false,
			'test_type' => false,
			'test_form' => false,
		)
	);

	if ( ! $_->array_get( $upload, 'file', null ) ) {
		wp_send_json_error(
			array(
				'code'  => ET_Theme_Builder_Api_Errors::UNKNOWN,
				'error' => $i18n['An unknown error has occurred. Please try again later.'],
			)
		);
	}

	$export = json_decode( et_()->WPFS()->get_contents( $upload['file'] ), true );

	if ( null === $export ) {
		wp_send_json_error(
			array(
				'code'  => ET_Theme_Builder_Api_Errors::UNKNOWN,
				'error' => $i18n['An unknown error has occurred. Please try again later.'],
			)
		);
	}

	$portability = et_core_portability_load( 'et_theme_builder' );

	if ( ! $portability->is_valid_theme_builder_export( $export ) ) {
		wp_send_json_error(
			array(
				'code'  => ET_Theme_Builder_Api_Errors::PORTABILITY_INCORRECT_CONTEXT,
				'error' => $i18n['This file should not be imported in this context.'],
			)
		);
	}

	$override_default_website_template = '1' === $_->array_get( $_POST, 'override_default_website_template', '0' );
	$import_presets                    = '1' === $_->array_get( $_POST, 'import_presets', '0' );
	$has_default_template              = $_->array_get( $export, 'has_default_template', false );
	$has_global_layouts                = $_->array_get( $export, 'has_global_layouts', false );
	$presets                           = $_->array_get( $export, 'presets', array() );
	$presets_rewrite_map               = array();
	$incoming_layout_duplicate         = false;

	// Maybe ask the user to make a decision on how to deal with global layouts.
	if ( ( ! $override_default_website_template || ! $has_default_template ) && $has_global_layouts ) {
		$incoming_layout_duplicate_decision = $_->array_get( $_POST, 'incoming_layout_duplicate_decision', '' );

		if ( 'duplicate' === $incoming_layout_duplicate_decision ) {
			$incoming_layout_duplicate = true;
		} elseif ( 'relink' === $incoming_layout_duplicate_decision ) {
			$incoming_layout_duplicate = false;
		} else {
			wp_send_json_error(
				array(
					'code'  => ET_Theme_Builder_Api_Errors::PORTABILITY_REQUIRE_INCOMING_LAYOUT_DUPLICATE_DECISION,
					'error' => $i18n['This import contains references to global layouts.'],
				)
			);
		}
	}

	// Make imported preset overrides to avoid collisions with local presets.
	if ( $import_presets && is_array( $presets ) && ! empty( $presets ) ) {
		$presets_rewrite_map = $portability->prepare_to_import_layout_presets( $presets );
	}

	// Prepare import steps.
	$layout_id_map = array();
	$layout_keys   = array( 'header', 'body', 'footer' );
	$id            = md5( get_current_user_id() . '_' . uniqid( 'et_theme_builder_import_', true ) );
	$transient     = 'et_theme_builder_import_' . get_current_user_id() . '_' . $id;
	$steps_files   = array();

	foreach ( $export['templates'] as $index => $template ) {
		foreach ( $layout_keys as $key ) {
			$layout_id = (int) $_->array_get( $template, array( 'layouts', $key, 'id' ), 0 );

			if ( 0 === $layout_id ) {
				continue;
			}

			$layout = $_->array_get( $export, array( 'layouts', $layout_id ), null );

			if ( empty( $layout ) ) {
				continue;
			}

			// Use a temporary string id to avoid numerical keys being reset by various array functions.
			$template_id = 'template_' . $index;
			$is_global   = (bool) $_->array_get( $layout, 'theme_builder.is_global', false );
			$create_new  = ( $template['default'] && $override_default_website_template ) || ! $is_global || $incoming_layout_duplicate;

			if ( $create_new ) {
				$temp_id = 'tbi-step-' . count( $steps_files );

				et_theme_builder_api_import_theme_builder_save_layout( $portability, $template_id, $layout_id, $layout, $temp_id, $transient );

				$steps_files[] = array(
					'id'    => $temp_id,
					'group' => $transient,
				);
			} else {
				if ( ! isset( $layout_id_map[ $layout_id ] ) ) {
					$layout_id_map[ $layout_id ] = array();
				}

				$layout_id_map[ $layout_id ][ $template_id ] = 'use_global';
			}
		}
	}

	set_transient(
		$transient,
		array(
			'ready'                             => false,
			'steps'                             => $steps_files,
			'templates'                         => $export['templates'],
			'override_default_website_template' => $override_default_website_template,
			'incoming_layout_duplicate'         => $incoming_layout_duplicate,
			'layout_id_map'                     => $layout_id_map,
			'presets'                           => $presets,
			'import_presets'                    => $import_presets,
			'presets_rewrite_map'               => $presets_rewrite_map,
		),
		60 * 60 * 24
	);

	wp_send_json_success(
		array(
			'id'    => $id,
			'steps' => count( $steps_files ),
		)
	);
}
add_action( 'wp_ajax_et_theme_builder_api_import_theme_builder', 'et_theme_builder_api_import_theme_builder' );

function et_theme_builder_api_import_theme_builder_step() {
	if ( ! et_pb_is_allowed( 'theme_builder' ) ) {
		wp_send_json_error();
	}

	et_builder_security_check(
		'et_theme_builder_portability',
		et_core_portability_cap( 'et_theme_builder' ),
		'et_theme_builder_api_import_theme_builder',
		'nonce'
	);

	$_         = et_();
	$id        = sanitize_text_field( $_->array_get( $_POST, 'id', '' ) ); // phpcs:ignore WordPress.Security.NonceVerification.Missing -- Nonce is done in `et_builder_security_check`.
	$step      = (int) $_->array_get( $_POST, 'step', 0 ); // phpcs:ignore WordPress.Security.NonceVerification.Missing -- Nonce is done in `et_builder_security_check`.
	$chunk     = (int) $_->array_get( $_POST, 'chunk', 0 ); // phpcs:ignore WordPress.Security.NonceVerification.Missing -- Nonce is done in `et_builder_security_check`.
	$transient = 'et_theme_builder_import_' . get_current_user_id() . '_' . $id;
	$export    = get_transient( $transient );

	if ( false === $export ) {
		wp_send_json_error();
	}

	$layout_keys         = array( 'header', 'body', 'footer' );
	$portability         = et_core_portability_load( 'et_theme_builder' );
	$steps               = $export['steps'];
	$ready               = empty( $steps );
	$layout_id_map       = $export['layout_id_map'];
	$presets             = $export['presets'];
	$presets_rewrite_map = $export['presets_rewrite_map'];
	$import_presets      = $export['import_presets'];
	$templates           = array();
	$template_settings   = array();
	$chunks              = 1;

	if ( ! $ready ) {
		$import_step                   = et_theme_builder_api_import_theme_builder_load_layout( $portability, $steps[ $step ]['id'], $steps[ $step ]['group'] );
		$import_step                   = array_merge( $import_step, array( 'presets' => $presets ) );
		$import_step                   = array_merge( $import_step, array( 'presets_rewrite_map' => $presets_rewrite_map ) );
		$import_step['import_presets'] = $import_presets;
		$result                        = $portability->import_theme_builder( $id, $import_step, count( $steps ), $step, $chunk );

		if ( false === $result ) {
			wp_send_json_error();
		}

		$ready  = $result['ready'];
		$chunks = $result['chunks'];

		foreach ( $result['layout_id_map'] as $old_id => $new_ids ) {
			$layout_id_map[ $old_id ] = array_merge(
				$_->array_get( $layout_id_map, $old_id, array() ),
				$new_ids
			);
		}
	}

	if ( $ready ) {
		if ( $import_presets && is_array( $presets ) && ! empty( $presets ) ) {
			if ( ! $portability->import_global_presets( $presets ) ) {
				$presets_error = apply_filters( 'et_core_portability_import_error_message', '' );

				if ( $presets_error ) {
					wp_send_json_error(
						array(
							'code'  => ET_Theme_Builder_Api_Errors::PORTABILITY_IMPORT_PRESETS_FAILURE,
							'error' => $presets_error,
						)
					);
				}
			}
		}

		$portability->delete_temp_files( $transient );

		$conditions = array();

		foreach ( $export['templates'] as $index => $template ) {
			$sanitized = et_theme_builder_sanitize_template( $template );

			foreach ( $layout_keys as $key ) {
				$old_layout_id = (int) $_->array_get( $sanitized, array( 'layouts', $key, 'id' ), 0 );
				$layout_id     = et_()->array_get( $layout_id_map, array( $old_layout_id, 'template_' . $index ), '' );
				$layout_id     = ! empty( $layout_id ) ? $layout_id : 0;

				$_->array_set( $sanitized, array( 'layouts', $key, 'id' ), $layout_id );
			}

			$conditions = array_merge( $conditions, $sanitized['use_on'], $sanitized['exclude_from'] );

			$templates[] = $sanitized;
		}

		// Load all conditions from templates.
		$conditions        = array_unique( $conditions );
		$template_settings = array_replace(
			et_theme_builder_get_flat_template_settings_options(),
			et_theme_builder_load_template_setting_options( $conditions )
		);
		$valid_settings    = array_keys( $template_settings );

		// Strip all invalid conditions from templates.
		foreach ( $templates as $index => $template ) {
			$templates[ $index ]['use_on']       = array_values( array_intersect( $template['use_on'], $valid_settings ) );
			$templates[ $index ]['exclude_from'] = array_values( array_intersect( $template['exclude_from'], $valid_settings ) );
		}
	} else {
		set_transient(
			$transient,
			array_merge(
				$export,
				array(
					'layout_id_map' => $layout_id_map,
				)
			),
			60 * 60 * 24
		);
	}

	wp_send_json_success(
		array(
			'chunks'           => $chunks,
			'templates'        => $templates,
			'templateSettings' => $template_settings,
		)
	);
}
add_action( 'wp_ajax_et_theme_builder_api_import_theme_builder_step', 'et_theme_builder_api_import_theme_builder_step' );
