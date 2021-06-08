<?php
/**
 * Divi Library.
 *
 * @package Builder
 */

/**
 * Core class used to implement Layout Library.
 */
class ET_Builder_Library {

	/**
	 * Instance of `ET_Builder_Library`.
	 *
	 * @var ET_Builder_Library
	 */
	private static $_instance;

	/**
	 * Instance of  `ET_Core_Data_Utils`.
	 *
	 * @var ET_Core_Data_Utils
	 */
	protected static $_;

	/**
	 * List of i18n strings.
	 *
	 * @var mixed[]
	 */
	protected static $_i18n;

	/**
	 * Yoast primary category meta key.
	 *
	 * @var string
	 */
	protected static $_primary_category_key;

	/**
	 * List of Divi Library's Standard Post Types.
	 *
	 * @var string[]
	 */
	protected static $_standard_post_types = array( 'post', 'page', 'project' );

	/**
	 * Instance of `ET_Builder_Post_Taxonomy_LayoutCategory`.
	 *
	 * @var ET_Builder_Post_Taxonomy_LayoutCategory
	 */
	public $layout_categories;

	/**
	 * Instance of `ET_Builder_Post_Taxonomy_LayoutPack`.
	 *
	 * @var ET_Builder_Post_Taxonomy_LayoutPack
	 */
	public $layout_packs;

	/**
	 * Instance of `ET_Builder_Post_Taxonomy_LayoutType`.
	 *
	 * @var ET_Builder_Post_Taxonomy_LayoutType
	 */
	public $layout_types;

	/**
	 * Instance of `ET_Builder_Post_Type_Layout`.
	 *
	 * @var ET_Builder_Post_Type_Layout
	 */
	public $layouts;

	/**
	 * ET_Builder_Library constructor.
	 */
	public function __construct() {
		$this->_instance_check();
		$this->_register_cpt_and_taxonomies();

		self::$_ = ET_Core_Data_Utils::instance();

		$this->_register_hooks();
		$this->_register_ajax_callbacks();

		self::$_i18n = require ET_BUILDER_DIR . '/frontend-builder/i18n/library.php';

		self::$_standard_post_types = self::_standard_post_types();
	}

	/**
	 * Compare by slug
	 *
	 * @param object $a First category in comparison.
	 * @param object $b Second category in comparison.
	 *
	 * @return bool
	 */
	public static function compare_by_slug( $a, $b ) {
		return strcmp( $a->slug, $b->slug );
	}

	/**
	 * Gets a translated string from {@see self::$_i18n}.
	 *
	 * @param string $string The untranslated string.
	 * @param string $path   Optional path for nested strings.
	 *
	 * @return string The translated string if found, the original string otherwise.
	 */
	public static function __( $string, $path = '' ) {
		$path .= $path ? ".{$string}" : $string;

		return self::$_->array_get( self::$_i18n, $path, $string );
	}

	/**
	 * Dies if an instance already exists.
	 *
	 * @since 3.0.99
	 */
	protected function _instance_check() {
		if ( self::$_instance ) {
			et_error( 'Multiple instances are not allowed!' );
			wp_die();
		}
	}

	/**
	 * Get the name of a thumbnail image size used in the library UI.
	 *
	 * @since 3.0.99
	 *
	 * @param string $type The thumbnail type. Accepts 'thumbnail', 'screenshot'.
	 *
	 * @return string
	 */
	protected static function _get_image_size_name( $type ) {
		$names = array(
			'thumbnail'       => 'et-pb-portfolio-image',
			'thumbnail_small' => 'et-pb-portfolio-image',
			'screenshot'      => 'et-pb-portfolio-image-single',
		);

		$name = $names[ $type ];

		/**
		 * Filters the names of the registered image sizes to use for layout thumbnails. The
		 * dynamic portion of the filter name, '$type', refers to the layout image
		 * type ('thumbnail' or 'screenshot').
		 *
		 * @since 3.0.99
		 *
		 * @param string $name The name of the registered image size that should be used.
		 */
		return apply_filters( "et_builder_layout_{$type}_image_size_name", $name );
	}

	/**
	 * Returns a filtered short name for a layout.
	 *
	 * @since 3.0.99
	 *
	 * @param string  $long_name Layout title.
	 * @param WP_Post $layout Layout post.
	 *
	 * @return string
	 */
	protected function _get_layout_short_name( $long_name, $layout ) {
		/**
		 * Filters the short name for layouts that do not have one.
		 *
		 * @since 3.0.99
		 *
		 * @param string  $long_name
		 * @param WP_Post $layout
		 */
		return apply_filters( 'et_builder_library_layout_short_name', $long_name, $layout );
	}

	/**
	 * Processes layout categories for inclusion in the library UI layouts data.
	 *
	 * @since 3.0.99
	 *
	 * @param WP_POST $post              Unprocessed layout.
	 * @param object  $layout            Currently processing layout.
	 * @param int     $index             The layout's index position.
	 * @param array[] $layout_categories Processed layouts.
	 */
	protected function _process_layout_categories( $post, $layout, $index, &$layout_categories ) {
		$terms = wp_get_post_terms( $post->ID, $this->layout_categories->name );
		if ( ! $terms ) {
			$layout->category_slug = 'uncategorized';
			return;
		}

		foreach ( $terms as $category ) {
			$category_name = self::__( html_entity_decode( $category->name ), '@categories' );
			$category_name = et_core_intentionally_unescaped( $category_name, 'react_jsx' );

			if ( ! isset( $layout_categories[ $category->term_id ] ) ) {
				$layout_categories[ $category->term_id ] = array(
					'id'      => $category->term_id,
					'name'    => $category_name,
					'slug'    => $category->slug,
					'layouts' => array(),
				);
			}

			$layout_categories[ $category->term_id ]['layouts'][] = $index;

			$layout->categories[]   = $category_name;
			$layout->category_ids[] = $category->term_id;

			if ( ! isset( $layout->category_slug ) ) {
				$layout->category_slug = $category->slug;
			}

			$id = get_post_meta( $post->ID, self::$_primary_category_key, true );

			if ( $id ) {
				// $id is a string, $category->term_id is an int.
				if ( $id === $category->term_id ) {
					// This is the primary category (used in the layout URL).
					$layout->category_slug = $category->slug;
				}
			}
		}
	}

	/**
	 * Processes layout packs for inclusion in the library UI layouts data.
	 *
	 * @since 3.0.99
	 *
	 * @param WP_POST $post         Unprocessed layout.
	 * @param object  $layout       Currently processing layout.
	 * @param int     $index        The layout's index position.
	 * @param array[] $layout_packs Processed layouts.
	 */
	protected function _process_layout_packs( $post, $layout, $index, &$layout_packs ) {
		$terms = wp_get_post_terms( $post->ID, $this->layout_packs->name );
		if ( ! $terms ) {
			return;
		}

		$pack      = array_shift( $terms );
		$pack_name = self::__( html_entity_decode( $pack->name ), '@packs' );
		$pack_name = et_core_intentionally_unescaped( $pack_name, 'react_jsx' );

		if ( ! isset( $layout_packs[ $pack->term_id ] ) ) {
			$layout_packs[ $pack->term_id ] = array(
				'id'      => $pack->term_id,
				'name'    => $pack_name,
				'slug'    => $pack->slug,
				'date'    => $layout->date,
				'layouts' => array(),
			);
		}

		if ( $layout->is_landing ) {
			$layout_packs[ $pack->term_id ]['thumbnail']     = $layout->thumbnail;
			$layout_packs[ $pack->term_id ]['screenshot']    = $layout->screenshot;
			$layout_packs[ $pack->term_id ]['description']   = et_core_intentionally_unescaped( html_entity_decode( $post->post_excerpt ), 'react_jsx' );
			$layout_packs[ $pack->term_id ]['category_slug'] = $layout->category_slug;
			$layout_packs[ $pack->term_id ]['landing_index'] = $index;
		}

		$layout_packs[ $pack->term_id ]['layouts'][] = $index;

		$layout_packs[ $pack->term_id ]['categories']   = $layout->categories;
		$layout_packs[ $pack->term_id ]['category_ids'] = $layout->category_ids;

		$layout->pack    = $pack_name;
		$layout->pack_id = $pack->term_id;
	}

	/**
	 * Registers the Library's AJAX callbacks.
	 *
	 * @since 3.0.99
	 */
	protected function _register_ajax_callbacks() {
		add_action( 'wp_ajax_et_builder_library_get_layouts_data', array( $this, 'wp_ajax_et_builder_library_get_layouts_data' ) );
		add_action( 'wp_ajax_et_builder_library_get_layout', array( $this, 'wp_ajax_et_builder_library_get_layout' ) );
		add_action( 'wp_ajax_et_builder_library_update_account', array( $this, 'wp_ajax_et_builder_library_update_account' ) );
	}

	/**
	 * Registers the Library's custom post types and taxonomies.
	 *
	 * @since 3.0.99
	 */
	protected function _register_cpt_and_taxonomies() {
		$files = glob( ET_BUILDER_DIR . 'post/*/Layout*.php' );
		if ( ! $files ) {
			return;
		}

		foreach ( $files as $file ) {
			require_once $file;
		}

		$this->layouts           = ET_Builder_Post_Type_Layout::instance();
		$this->layout_categories = ET_Builder_Post_Taxonomy_LayoutCategory::instance();
		$this->layout_packs      = ET_Builder_Post_Taxonomy_LayoutPack::instance();
		$this->layout_types      = ET_Builder_Post_Taxonomy_LayoutType::instance();

		ET_Builder_Post_Taxonomy_LayoutScope::instance();
		ET_Builder_Post_Taxonomy_LayoutWidth::instance();

		// We manually call register_all() now to ensure the CPT and taxonomies are registered
		// at exactly the same point during the request that they were in prior releases.
		ET_Builder_Post_Type_Layout::register_all( 'builder' );

		self::$_primary_category_key = "_yoast_wpseo_primary_{$this->layout_categories->name}";
	}

	/**
	 * Registers the Library's non-AJAX callbacks.
	 *
	 * @since 3.0.99
	 */
	public function _register_hooks() {
		add_action( 'admin_init', 'ET_Builder_Library::update_old_layouts' );
		add_action( 'admin_enqueue_scripts', array( $this, 'wp_hook_admin_enqueue_scripts' ), 4 );
	}

	/**
	 * Returns sorted layout category and pack IDs for use in library UI layouts data.
	 *
	 * @since 3.0.99
	 *
	 * @param array[] $categories Layout categories.
	 * @param array[] $packs Layout packs.
	 *
	 * @return array[] {
	 *
	 *     @type int[] $categories Layout category ids sorted alphabetically by category name.
	 *     @type int[] $packs      Layout pack ids sorted alphabetically by pack name.
	 * }
	 */
	protected static function _sort_builder_library_data( $categories, $packs ) {
		$categories = array_values( $categories );
		$packs      = array_values( $packs );
		$sorted     = array();

		foreach ( array( 'categories', 'packs' ) as $taxonomy ) {
			$sorted[ $taxonomy ] = array();

			$$taxonomy = self::$_->array_sort_by( $$taxonomy, 'slug' );

			foreach ( $$taxonomy as $term ) {
				$sorted[ $taxonomy ][] = $term['id'];
			}
		}

		return $sorted;
	}

	/**
	 * Get Divi Library's Standard Post Types.
	 *
	 * @return mixed|void
	 */
	public static function _standard_post_types() {
		/**
		 * Filters the Divi Library's Standard Post Types.
		 *
		 * @since 3.0.99
		 *
		 * @param string[] $standard_post_types
		 */
		return apply_filters( 'et_pb_standard_post_types', self::$_standard_post_types );
	}

	/**
	 * Generates layouts data for the builder's library UI.
	 *
	 * @since 3.0.99
	 *
	 * @return array $data
	 */
	public function builder_library_layouts_data() {
		$layout_categories = array();
		$layout_packs      = array();
		$layouts           = array();
		$index             = 0;

		$thumbnail       = self::_get_image_size_name( 'thumbnail' );
		$thumbnail_small = self::_get_image_size_name( 'thumbnail_small' );
		$screenshot      = self::_get_image_size_name( 'screenshot' );

		$extra_layout_post_type = 'layout';

		$posts = $this->layouts
			->query()
			->not()->with_meta( '_et_pb_built_for_post_type', $extra_layout_post_type )
			->run();

		$posts = self::$_->array_sort_by( is_array( $posts ) ? $posts : array( $posts ), 'post_name' );

		foreach ( $posts as $post ) {
			$layout = new stdClass();

			setup_postdata( $post );

			$layout->id    = $post->ID;
			$layout->index = $index;
			$layout->date  = $post->post_date;
			$types         = wp_get_post_terms( $layout->id, $this->layout_types->name );

			if ( ! $types ) {
				continue;
			}

			$layout->type = $types[0]->name;

			// For the initial release of new library UI, only 'layouts' are needed.
			if ( 'layout' !== $layout->type ) {
				continue;
			}

			$title      = html_entity_decode( $post->post_title );
			$short_name = get_post_meta( $post->ID, '_et_builder_library_short_name', true );

			if ( ! $short_name ) {
				$short_name = $this->_get_layout_short_name( $title, $post );

				if ( $short_name !== $title ) {
					update_post_meta( $post->ID, '_et_builder_library_short_name', $short_name );
				}
			}
			$layout->short_name = '';
			$layout->name       = $layout->short_name;

			if ( $title ) {
				// Remove periods since we use dot notation to retrieve translation.
				str_replace( '.', '', $title );

				$layout->name = et_core_intentionally_unescaped( self::__( $title, '@layoutsLong' ), 'react_jsx' );
			}

			if ( $short_name ) {
				// Remove periods since we use dot notation to retrieve translation.
				str_replace( '.', '', $title );

				$layout->short_name = et_core_intentionally_unescaped( self::__( $short_name, '@layoutsShort' ), 'react_jsx' );
			}

			$layout->slug = $post->post_name;
			$layout->url  = esc_url( wp_make_link_relative( get_permalink( $post ) ) );

			$layout->thumbnail       = esc_url( get_the_post_thumbnail_url( $post->ID, $thumbnail ) );
			$layout->thumbnail_small = esc_url( get_the_post_thumbnail_url( $post->ID, $thumbnail_small ) );
			$layout->screenshot      = esc_url( get_the_post_thumbnail_url( $post->ID, $screenshot ) );

			$layout->categories   = array();
			$layout->category_ids = array();

			$layout->is_global   = $this->layouts->is_global( $layout->id );
			$layout->is_landing  = ! empty( $post->post_excerpt );
			$layout->description = '';

			$this->_process_layout_categories( $post, $layout, $index, $layout_categories );
			$this->_process_layout_packs( $post, $layout, $index, $layout_packs );

			wp_reset_postdata();

			$layouts[] = $layout;

			$index++;
		}

		/**
		 * Filters data for the 'My Saved Layouts' tab.
		 *
		 * @since 3.1
		 *
		 * @param array[] $saved_layouts_data {
		 *     Saved Layouts Data
		 *
		 *     @type array[]  $categories {
		 *         Layout Categories
		 *
		 *         @type $id mixed[] {
		 *             Category
		 *
		 *             @type int    $id      Id.
		 *             @type int[]  $layouts Id's of layouts in category.
		 *             @type string $name    Name.
		 *             @type string $slug    Slug.
		 *          }
		 *          ...
		 *     }
		 *     @type array[]  $packs {
		 *         Layout Packs
		 *
		 *         @type $id mixed[] {
		 *             Pack
		 *
		 *             @type string $category_ids  Category ids.
		 *             @type string $category_slug Primary category slug.
		 *             @type string $date          Published date.
		 *             @type string $description   Description.
		 *             @type int    $id            Id.
		 *             @type int[]  $layouts       Id's of layouts in pack.
		 *             @type string $name          Name.
		 *             @type string $screenshot    Screenshot URL.
		 *             @type string $slug          Slug.
		 *             @type string $thumbnail     Thumbnail URL.
		 *          }
		 *          ...
		 *     }
		 *     @type object[] $layouts {
		 *         Layouts
		 *
		 *         @type object {
		 *             Layout
		 *
		 *             @type int      $id ID
		 *             @type string[] $categories
		 *             @type int[]    $category_ids
		 *             @type string   $category_slug
		 *             @type int      $date
		 *             @type string   $description
		 *             @type int      $index
		 *             @type bool     $is_global
		 *             @type bool     $is_landing
		 *             @type string   $name
		 *             @type string   $screenshot
		 *             @type string   $short_name
		 *             @type string   $slug
		 *             @type string   $thumbnail
		 *             @type string   $thumbnail_small
		 *             @type string   $type
		 *             @type string   $url
		 *         }
		 *         ...
		 *     }
		 *     @type array[]  $sorted {
		 *         Sorted Ids
		 *
		 *         @type int[] $categories
		 *         @type int[] $packs
		 *     }
		 * }
		 */
		$saved_layouts_data = array(
			'categories' => $layout_categories,
			'packs'      => $layout_packs,
			'layouts'    => $layouts,
			'sorted'     => self::_sort_builder_library_data( $layout_categories, $layout_packs ),
		);
		$saved_layouts_data = apply_filters( 'et_builder_library_saved_layouts', $saved_layouts_data );

		/**
		 * Filters custom tabs layout data for the library modal. Custom tabs must be registered
		 * via the {@see 'et_builder_library_modal_custom_tabs'} filter.
		 *
		 * @since 3.1
		 *
		 * @param array[] $custom_layouts_data {
		 *     Custom Layouts Data Organized By Modal Tab
		 *
		 *     @type array[] $tab_slug See {@see 'et_builder_library_saved_layouts'} for array structure.
		 *     ...
		 * }
		 * @param array[] $saved_layouts_data {@see 'et_builder_library_saved_layouts'} for array structure.
		 */
		$custom_layouts_data = apply_filters(
			'et_builder_library_custom_layouts',
			array(
				'existing_pages' => $this->_builder_library_modal_custom_tabs_existing_pages(),
			),
			$saved_layouts_data
		);

		return array(
			'layouts_data'        => $saved_layouts_data,
			'custom_layouts_data' => $custom_layouts_data,
		);
	}

	/**
	 * Filters data for the 'Your Existing Pages' tab.
	 *
	 * @since 3.4
	 *
	 * @return array[] $saved_layouts_data {
	 *     Existing Pages/Posts Data
	 *
	 *     @type array[]  $categories {
	 *         Post Types Filters
	 *
	 *         @type $id mixed[] {
	 *             Post Type
	 *
	 *             @type int    $id      Id.
	 *             @type int[]  $layouts Id's of layouts in filter.
	 *             @type string $name    Name.
	 *             @type string $slug    Slug.
	 *          }
	 *          ...
	 *     }
	 *     @type array[]  $packs {
	 *         Layout Packs
	 *
	 *         @type $id mixed[] {
	 *             Pack
	 *
	 *             @type string $category_ids  Category ids.
	 *             @type string $category_slug Primary category slug.
	 *             @type string $date          Published date.
	 *             @type string $description   Description.
	 *             @type int    $id            Id.
	 *             @type int[]  $layouts       Id's of layouts in pack.
	 *             @type string $name          Name.
	 *             @type string $screenshot    Screenshot URL.
	 *             @type string $slug          Slug.
	 *             @type string $thumbnail     Thumbnail URL.
	 *          }
	 *          ...
	 *     }
	 *     @type object[] $layouts {
	 *         Pages/Posts Data
	 *
	 *         @type object {
	 *             Page/Post Object
	 *
	 *             @type int      $id ID
	 *             @type string[] $categories
	 *             @type int[]    $category_ids
	 *             @type string   $category_slug
	 *             @type int      $date
	 *             @type string   $description
	 *             @type int      $index
	 *             @type bool     $is_global
	 *             @type bool     $is_landing
	 *             @type string   $name
	 *             @type string   $screenshot
	 *             @type string   $short_name
	 *             @type string   $slug
	 *             @type string   $thumbnail
	 *             @type string   $thumbnail_small
	 *             @type string   $type
	 *             @type string   $url
	 *         }
	 *         ...
	 *     }
	 *     @type array[]  $sorted {
	 *         Sorted Ids
	 *
	 *         @type int[] $categories
	 *         @type int[] $packs
	 *     }
	 * }
	 */
	protected function _builder_library_modal_custom_tabs_existing_pages() {
		et_core_nonce_verified_previously();

		$categories = array();
		$packs      = array();
		$layouts    = array();
		$index      = 0;

		$thumbnail       = self::_get_image_size_name( 'thumbnail' );
		$thumbnail_small = self::_get_image_size_name( 'thumbnail_small' );
		$screenshot      = self::_get_image_size_name( 'screenshot' );

		/**
		 * Array of post types that should be listed as categories under "Existing Pages".
		 *
		 * @since 4.0
		 *
		 * @param string[] $post_types
		 */
		$post_types = apply_filters( 'et_library_builder_post_types', et_builder_get_builder_post_types() );

		// Remove Extra's category layouts from "Your Existing Pages" layout list.
		if ( in_array( 'layout', $post_types, true ) ) {
			unset( $post_types[ array_search( 'layout', $post_types, true ) ] );
		}

		if ( wp_doing_ajax() ) {
			// VB case.
			$exclude = isset( $_POST['postId'] ) ? (int) $_POST['postId'] : false;
		} else {
			// BB case.
			$exclude = get_the_ID();
		}

		if ( $post_types ) {
			$category_id  = 1;
			$layout_index = 0;

			// Keep track of slugs in case there are duplicates.
			$seen = array();

			foreach ( $post_types as $post_type ) {
				if ( ET_BUILDER_LAYOUT_POST_TYPE === $post_type ) {
					continue;
				}

				$post_type_obj = get_post_type_object( $post_type );

				if ( ! $post_type_obj ) {
					continue;
				}

				$category = new StdClass();

				$category->id      = $category_id;
				$category->layouts = array();
				$category->slug    = $post_type;
				$category->name    = $post_type_obj->label;

				$query = new ET_Core_Post_Query( $post_type );

				$posts = $query
					// Do not include unused Theme Builder layouts. For more information
					// see et_theme_builder_trash_draft_and_unused_posts().
					->not()->with_meta( '_et_theme_builder_marked_as_unused' )
					->run();

				$posts = self::$_->array_sort_by( is_array( $posts ) ? $posts : array( $posts ), 'post_name' );

				if ( ! empty( $posts ) ) {
					foreach ( $posts as $post ) {
						// Check if page builder is activated.
						if ( ! et_pb_is_pagebuilder_used( $post->ID ) ) {
							continue;
						}

						// Do not add the current page to the list.
						if ( $post->ID === $exclude ) {
							continue;
						}

						// Check if content has shortcode.
						if ( ! has_shortcode( $post->post_content, 'et_pb_section' ) ) {
							continue;
						}

						// Only include posts that the user is allowed to edit.
						if ( ! current_user_can( 'edit_post', $post->ID ) ) {
							continue;
						}

						$title = html_entity_decode( $post->post_title );

						$slug = $post->post_name;

						if ( ! $slug ) {
							// Generate a slug, if none is available - this is necessary as draft posts
							// that have never been published will not have a slug by default.
							$slug = wp_unique_post_slug( $post->post_title . '-' . $post->ID, $post->ID, $post->post_status, $post->post_type, $post->post_parent );
						}

						if ( empty( $title ) || empty( $slug ) ) {
							continue;
						}

						// Make sure we don't have duplicate slugs since we're using them as key in React.
						// slugs should always be unique but enabling/disabling WPML can break this rule.
						if ( isset( $seen[ $slug ] ) ) {
							continue;
						}

						$type_label = et_theme_builder_is_layout_post_type( $post_type )
							? $post_type_obj->labels->singular_name
							: $post_type;

						$seen[ $slug ]      = true;
						$layout             = new stdClass();
						$layout->index      = $index;
						$layout->id         = $post->ID;
						$layout->date       = $post->post_date;
						$layout->status     = $post->post_status;
						$layout->icon       = 'layout';
						$layout->type       = $type_label;
						$layout->name       = et_core_intentionally_unescaped( $title, 'react_jsx' );
						$layout->short_name = et_core_intentionally_unescaped( $title, 'react_jsx' );
						$layout->slug       = $slug;
						$layout->url        = esc_url( wp_make_link_relative( get_permalink( $post ) ) );

						$layout->thumbnail       = esc_url( get_the_post_thumbnail_url( $post->ID, $thumbnail ) );
						$layout->thumbnail_small = esc_url( get_the_post_thumbnail_url( $post->ID, $thumbnail_small ) );
						$layout->screenshot      = esc_url( get_the_post_thumbnail_url( $post->ID, $screenshot ) );

						$layout->categories   = array();
						$layout->category_ids = array( $category_id );

						$layout->is_global     = false;
						$layout->is_landing    = false;
						$layout->description   = '';
						$layout->category_slug = $post_type;
						// $layout_index is the array index, not the $post->ID
						$category->layouts[] = $layout_index;

						$post_status_object = get_post_status_object( $post->post_status );

						$layout->status = isset( $post_status_object->label ) ? $post_status_object->label : $post->post_status;

						$layouts[ $layout_index++ ] = $layout;

						$index++;
					}
				}

				$categories[ $category_id++ ] = $category;
			}
		}

		if ( count( $categories ) > 1 ) {
			// Sort categories (post_type in this case) by slug.
			uasort( $categories, array( 'self', 'compare_by_slug' ) );
		}

		return array(
			'categories' => $categories,
			'packs'      => $packs,
			'layouts'    => $layouts,
			'options'    => array(
				'content' => array(
					'title' => array(
						et_core_intentionally_unescaped( self::__( '%d Pages' ), 'react_jsx' ),
						et_core_intentionally_unescaped( self::__( '%d Page' ), 'react_jsx' ),
					),
				),
				'sidebar' => array(
					'title' => et_core_intentionally_unescaped( self::__( 'Find A Page' ), 'react_jsx' ),
				),
				'list'    => array(
					'columns' => array(
						'status' => et_core_intentionally_unescaped( self::__( 'Status' ), 'react_jsx' ),
					),
				),
			),
			'sorted'     => array(
				'categories' => array_keys( $categories ),
				'packs'      => $packs,
			),
		);
	}

	/**
	 * Get custom tabs for the library modal.
	 *
	 * @param string $post_type Post type.
	 *
	 * @return array[] {
	 *     Custom Tabs
	 *
	 *     @type string $tab_slug Tab display name.
	 *     ...
	 * }
	 */
	public static function builder_library_modal_custom_tabs( $post_type ) {
		/**
		 * Filters custom tabs for the library modal.
		 *
		 * @since 3.1
		 *
		 * @param array[] $custom_tabs See {@self::builder_library_modal_custom_tabs()} return value.
		 */
		$custom_tabs = array();

		if ( 'layout' !== $post_type ) {
			$custom_tabs['existing_pages'] = esc_html__( 'Your Existing Pages', 'et_builder' );
		}

		return apply_filters( 'et_builder_library_modal_custom_tabs', $custom_tabs, $post_type );
	}

	/**
	 * Gets the post types that have existing layouts built for them.
	 *
	 * @since 3.1  Supersedes {@see et_pb_get_standard_post_types()}
	 *            Supersedes {@see et_pb_get_used_built_for_post_types()}
	 * @since 2.0
	 *
	 * @param string $type Accepts 'standard' or 'all'. Default 'standard'.
	 *
	 * @return string[] $post_types
	 */
	public static function built_for_post_types( $type = 'standard' ) {
		static $all_built_for_post_types;

		if ( 'standard' === $type ) {
			return self::$_standard_post_types;
		}

		if ( $all_built_for_post_types ) {
			return $all_built_for_post_types;
		}

		global $wpdb;

		$all_built_for_post_types = $wpdb->get_col(
			$wpdb->prepare(
				"SELECT DISTINCT( meta_value ) FROM {$wpdb->postmeta} WHERE meta_key = %s AND meta_value > ''",
				'_et_pb_built_for_post_type'
			)
		);

		return $all_built_for_post_types;
	}

	/**
	 * Get the class instance.
	 *
	 * @since 3.0.99
	 *
	 * @return ET_Builder_Library
	 */
	public static function instance() {
		if ( ! self::$_instance ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Performs one-time maintenance tasks on library layouts in the database.
	 * {@see 'admin_init'}
	 *
	 * @since 3.1  Relocated from `builder/layouts.php`. New task: create 'Legacy Layouts' category.
	 * @since 2.0
	 */
	public static function update_old_layouts() {
		$layouts = ET_Builder_Post_Type_Layout::instance();

		if ( 'yes' !== get_theme_mod( 'et_updated_layouts_built_for_post_types', 'no' ) ) {
			$posts = $layouts
				->query()
				->not()->with_meta( '_et_pb_built_for_post_type' )
				->run();

			foreach ( (array) $posts as $single_post ) {
				update_post_meta( $single_post->ID, '_et_pb_built_for_post_type', 'page' );
			}

			set_theme_mod( 'et_updated_layouts_built_for_post_types', 'yes' );
		}

		if ( ! et_get_option( 'et_pb_layouts_updated', false ) ) {
			$types = array(
				'section',
				'row',
				'module',
				'fullwidth_section',
				'specialty_section',
				'fullwidth_module',
			);

			$posts = $layouts
				->query()
				->not()->is_type( $types )
				->run();

			foreach ( (array) $posts as $single_post ) {
				if ( ! get_the_terms( $single_post->ID, 'layout_type' ) ) {
					wp_set_object_terms( $single_post->ID, 'layout', 'layout_type', true );
				}
			}

			et_update_option( 'et_pb_layouts_updated', true );
		}

		if ( ! et_get_option( 'library_removed_legacy_layouts', false ) ) {
			$posts = $layouts
				->query()
				->with_meta( '_et_pb_predefined_layout' )
				->run();

			foreach ( $posts as $post ) {
				if ( 'layout' === get_post_meta( $post->ID, '_et_pb_built_for_post_type', true ) ) {
					// Don't touch Extra's Category Builder layouts.
					continue;
				}

				// Sanity check just to be safe.
				if ( get_post_meta( $post->ID, '_et_pb_predefined_layout', true ) ) {
					wp_delete_post( $post->ID, true );
				}
			}

			et_update_option( 'library_removed_legacy_layouts', true );
		}
	}

	/**
	 * AJAX Callback: Gets a layout by ID.
	 *
	 * @since 3.0.99
	 *
	 * @global $_POST['id']     The id of the desired layout.
	 * @global $_POST ['nonce'] Nonce: 'et_builder_library_get_layout'.
	 *
	 * @return string|void $layout JSON encoded. See return value of {@see et_pb_retrieve_templates()}
	 *                             for array structure.
	 */
	public function wp_ajax_et_builder_library_get_layout() {
		et_core_security_check( 'edit_posts', 'et_builder_library_get_layout', 'nonce' );

		$id = isset( $_POST['id'] ) ? (int) $_POST['id'] : 0;

		if ( empty( $id ) ) {
			wp_send_json_error();
		}

		$result = array();
		$post   = get_post( $id );

		$post_type = isset( $post->post_type ) ? $post->post_type : ET_BUILDER_LAYOUT_POST_TYPE;

		switch ( $post_type ) {
			case ET_BUILDER_LAYOUT_POST_TYPE:
				$layouts = et_pb_retrieve_templates( 'layout', '', 'all', '0', 'all', 'all', array(), $post_type );

				foreach ( $layouts as $layout ) {
					if ( $id === $layout['ID'] ) {
						$result = $layout;
						break;
					}
				}

				$result['savedShortcode'] = $result['shortcode'];

				if ( ! isset( $_POST['is_BB'] ) ) {
					$result['savedShortcode'] = et_fb_process_shortcode( $result['savedShortcode'] );
				} else {
					$post_content_processed = do_shortcode( $result['shortcode'] );
					$result['migrations']   = ET_Builder_Module_Settings_Migration::$migrated;
				}

				unset( $result['shortcode'] );
				break;
			default:
				$post_content = $post->post_content;
				if ( ! isset( $_POST['is_BB'] ) ) {
					$post_content = et_fb_process_shortcode( stripslashes( $post_content ) );
				}
				$result['savedShortcode'] = $post_content;
				break;
		}

		$response = wp_json_encode(
			array(
				'success' => true,
				'data'    => $result,
			)
		);

		$tmp_dir = function_exists( 'sys_get_temp_dir' ) ? sys_get_temp_dir() : '/tmp';

		$tmp_file = tempnam( $tmp_dir, 'et' );

		et_()->WPFS()->put_contents( $tmp_file, $response );

		// Remove any previous buffered content since we're setting `Content-Length` header
		// based on $response value only.
		while ( ob_get_level() ) {
			ob_end_clean();
		}

		header( 'Content-Length: ' . @filesize( $tmp_file ) ); // phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged -- `filesize` may fail due to the permissions denied error.

		@unlink( $tmp_file ); // phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged -- `unlink` may fail due to the permissions denied error.

		// Charset has to be explicitly mentioned when it is other than UTF-8.
		header( 'Content-Type: application/json; charset=' . esc_attr( get_option( 'blog_charset' ) ) );

		die( et_core_intentionally_unescaped( $response, 'html' ) );
	}

	/**
	 * AJAX Callback: Gets layouts data for the builder's library UI.
	 *
	 * @since 3.0.99
	 *
	 * @global $_POST['nonce'] Nonce: 'et_builder_library_get_layouts_data'.
	 *
	 * @return string|void $layouts_data JSON Encoded.
	 */
	public function wp_ajax_et_builder_library_get_layouts_data() {
		et_core_security_check( 'edit_posts', 'et_builder_library_get_layouts_data', 'nonce' );
		wp_send_json_success( $this->builder_library_layouts_data() );
	}

	/**
	 * AJAX Callback: Updates ET Account in database.
	 *
	 * @since 3.0.99
	 *
	 * @global $_POST['nonce']    Nonce: 'et_builder_library_update_account'.
	 * @global $_POST['username'] Username
	 * @global $_POST['api_key']  API Key
	 * @global $_POST['status']   Account Status
	 */
	public function wp_ajax_et_builder_library_update_account() {
		et_core_security_check( 'manage_options', 'et_builder_library_update_account', 'nonce' );

		$args = $_POST;

		if ( ! self::$_->all( $args ) ) {
			wp_send_json_error();
		}

		$args            = array_map( 'sanitize_text_field', $args );
		$updates_options = get_site_option( 'et_automatic_updates_options', array() );
		$account         = array(
			'username' => $args['et_username'],
			'api_key'  => $args['et_api_key'],
		);

		update_site_option( 'et_automatic_updates_options', array_merge( $updates_options, $account ) );
		update_site_option( 'et_account_status', $args['status'] );

		wp_send_json_success();
	}

	/**
	 * Enqueues library-related styles and scripts in the admin.
	 * {@see 'admin_enqueue_scripts'}
	 *
	 * @param string $page The current admin page.
	 *
	 * @since 3.0.99
	 */
	public function wp_hook_admin_enqueue_scripts( $page ) {
		global $typenow;

		et_core_load_main_fonts();

		wp_enqueue_style( 'et-builder-notification-popup-styles', ET_BUILDER_URI . '/styles/notification_popup_styles.css', array(), ET_BUILDER_PRODUCT_VERSION );

		if ( 'et_pb_layout' === $typenow ) {
			$new_layout_modal = et_pb_generate_new_layout_modal();

			wp_enqueue_style( 'library-styles', ET_BUILDER_URI . '/styles/library_pages.css', array( 'et-core-admin' ), ET_BUILDER_PRODUCT_VERSION );
			$deps = array(
				'jquery',
			);
			wp_enqueue_script( 'library-scripts', ET_BUILDER_URI . '/scripts/library_scripts.js', $deps, ET_BUILDER_PRODUCT_VERSION, false );

			$new_template_options_data = array(
				'ajaxurl'             => admin_url( 'admin-ajax.php' ),
				'et_admin_load_nonce' => wp_create_nonce( 'et_admin_load_nonce' ),
				'modal_output'        => $new_layout_modal,
			);
			wp_localize_script( 'library-scripts', 'et_pb_new_template_options', $new_template_options_data );
		} else {
			wp_enqueue_script( 'et-builder-failure-notice', ET_BUILDER_URI . '/scripts/failure_notice.js', array( 'jquery' ), ET_BUILDER_PRODUCT_VERSION, false );
		}
	}
}

ET_Builder_Library::instance();
