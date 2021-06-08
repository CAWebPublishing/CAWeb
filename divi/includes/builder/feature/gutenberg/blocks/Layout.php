<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class ET_GB_Block_Layout {
	/**
	 * @var ET_GB_Block_Layout
	 */
	private static $_instance;

	private $block_name = 'divi/layout';

	function __construct() {
		if ( ! et_core_is_gutenberg_active() ) {
			return;
		}

		$this->register_block();
		$this->register_hooks();
	}

	/**
	 * Get class instance
	 *
	 * @since 4.1.0
	 *
	 * @return object class instance
	 */
	public static function instance() {
		if ( null === self::$_instance ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Register block
	 *
	 * @since 4.1.0
	 */
	public function register_block() {
		register_block_type(
			$this->block_name,
			array(
				'attributes' => array(
					'layoutContent' => array(
						'type' => 'string',
					),
				),
			)
		);
	}

	/**
	 * Register hooks
	 *
	 * @since 4.1.0
	 */
	public function register_hooks() {
		// Admin screen
		add_action( 'admin_init', array( $this, 'register_portability_on_builder_page' ) );

		// Block preview inside gutenberg
		add_action( 'template_include', array( $this, 'register_preview_template' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_block_preview_styles_scripts' ), 15 );
		add_action( 'wp_footer', array( $this, 'enqueue_block_preview_footer_styles_scripts' ) );
		add_action( 'pre_get_posts', array( $this, 'modify_layout_content_condition' ), 20 );

		add_filter( 'body_class', array( $this, 'add_body_classnames' ) );
		add_filter( 'et_pb_section_data_attributes', array( $this, 'add_section_boxshadow_attributes' ), 10, 3 );
		add_filter( 'the_content', array( $this, 'modify_layout_content_output' ), 1 );
		add_filter( 'get_post_metadata', array( $this, 'modify_layout_content_builder_meta' ), 10, 4 );
		add_filter( 'et_fb_load_raw_post_content', array( $this, 'modify_layout_content_visual_builder_raw_post_content' ) );
		add_filter( 'et_builder_render_layout', array( $this, 'modify_theme_builder_body_layout' ), 7 );

		// Block rendering on frontend
		add_filter( 'render_block', array( $this, 'render_block' ), 100, 2 );

	}

	/**
	 * Check if current request is Divi Layout preview for block request. Layout block preview page
	 * is only valid for logged in user with edit_posts cap with query string for activating block
	 * layout preview and its nonce to verify it.
	 *
	 * Initially, is_singular() check existed but reusable block at `wp_block` CPT and any other CPT
	 * that has no frontend due to its post type registration sets `public` attribute to `false`
	 * renders layout block preview at non singular page makes is_singular() check need to be dropped
	 *
	 * @since 4.1.0
	 *
	 * @return bool
	 */
	public static function is_layout_block_preview() {
		return isset( $_GET['et_block_layout_preview'] ) && et_core_security_check(
			'edit_posts',
			'et_block_layout_preview',
			'et_block_layout_preview_nonce',
			'_GET',
			false
		);
	}

	/**
	 * Check if current builder shortcode rendering is done inside layout block
	 *
	 * @since 4.1.0
	 *
	 * @return bool
	 */
	public static function is_layout_block() {
		global $et_is_layout_block;

		// Ensure the returned value is bool
		return $et_is_layout_block ? true : false;
	}

	/**
	 * Register portability which is needed to import premade and saved Layout via Divi Library;
	 * Portability is intentionally disabled on builder page by `et_builder_should_load_framework()`
	 * nevertheless excluding GB there doesn't work because it is being too early before any
	 * GB check is hooked. Thus Register another portability for GB + builder page
	 *
	 * @since 4.1.0
	 */
	public function register_portability_on_builder_page() {
		global $pagenow;

		// No permission, can't load library UI in the first place
		if ( ! et_pb_is_allowed( 'divi_library' ) ) {
			return;
		}

		// Exit if current page is not saved edit page
		$is_edit_page = 'post.php' === $pagenow && isset( $_GET['post'] );

		if ( ! $is_edit_page ) {
			return;
		}

		$post_id = intval( $_GET['post'] );

		// Exit if current page doesn't use Gutenberg
		if ( ! use_block_editor_for_post_type( get_post_type( $post_id ) ) ) {
			return;
		}

		// Exit if current page doesn't use builder
		if ( ! et_pb_is_pagebuilder_used( $post_id ) ) {
			return;
		}

		// Register portability
		et_core_portability_register(
			'et_builder',
			array(
				'name' => esc_html__( 'Divi Builder Layout', 'et_builder' ),
				'type' => 'post',
				'view' => true,
			)
		);
	}

	/**
	 * Render layout block
	 *
	 * @since 4.1.0
	 *
	 * @param string $block_content saved & serialized block data
	 * @param array  $block         block info
	 */
	public function render_block( $block_content, $block ) {
		// Layout block only
		if ( 'divi/layout' !== $block['blockName'] ) {
			return $block_content;
		}

		global $et_is_layout_block;

		// Set flag
		$et_is_layout_block = true;

		// Render block content's shortcode. Block content actually can be rendered without this
		// method and only depending to WordPress' `do_shortcode` hooked into `the_content`. However
		// layout block need to set global for detecting that shortcode is rendered inside layout
		// block hence the early shortcode rendering between global variables.
		$block_content = do_shortcode( $block_content );

		// Reset flag
		$et_is_layout_block = false;

		return $block_content;
	}

	/**
	 * Overwrite template path if current request is Divi Layout block preview
	 *
	 * @since 4.1.0
	 *
	 * @return string
	 */
	public function register_preview_template( $template ) {
		if ( self::is_layout_block_preview() ) {
			// disable admin bar
			show_admin_bar( false );

			// Use layout block specific template for render layout block preview (headerless
			// and footerless templates). BFB template was initialy used for this for DRY reason
			// but its #page-container-bfb causing styling issues
			return ET_BUILDER_DIR . 'templates/block-layout-preview.php';
		}

		// return original template
		return $template;
	}

	/**
	 * Get Theme Builder's template settings of current (layout block preview) page
	 *
	 * @since 4.3.4
	 *
	 * @return array
	 */
	public static function get_preview_tb_template() {
		// Identify current request, and get applicable TB template for current page
		$request     = ET_Theme_Builder_Request::from_current();
		$templates   = et_theme_builder_get_theme_builder_templates( true );
		$settings    = et_theme_builder_get_flat_template_settings_options();
		$tb_template = $request->get_template( $templates, $settings );

		// Define template properties as variables for readability
		$template_id     = et_()->array_get( $tb_template, 'id', 0 );
		$layout_id       = et_()->array_get( $tb_template, 'layouts.body.id', 0 );
		$layout_enabled  = et_()->array_get( $tb_template, 'layouts.body.enabled', false );
		$layout_override = et_()->array_get( $tb_template, 'layouts.body.override', false );
		$has_layout      = $layout_id && $layout_enabled && $layout_override;

		return array(
			'layout_id'      => $layout_id,
			'layout_enabled' => $layout_enabled,
			'template_id'    => $template_id,
			'has_layout'     => $has_layout,
		);
	}

	/**
	 * Early scripts and styles queue for Layout Block Preview page
	 * Need to queue early because `et-builder-modules-script` uses localize scripts on this method
	 *
	 * @since 4.4.1 Compatibility fixes for WP 5.4
	 * @since 4.1.0
	 */
	public function enqueue_block_preview_styles_scripts() {
		if ( ! self::is_layout_block_preview() ) {
			return;
		}

		if ( et_fb_enabled() ) {
			return;
		}

		// Enqueue frame helper if it hasn't been queued
		if ( ! wp_script_is( 'et-frame-helpers', 'enqueued' ) ) {
			wp_enqueue_script(
				'et-frame-helpers',
				ET_BUILDER_URI . '/frontend-builder/build/frame-helpers.js',
				array(),
				ET_BUILDER_VERSION
			);
		}

		// frontend-builder-scripts.js handle might change when scripts are minified
		$builder_script_handle = apply_filters(
			'et_builder_modules_script_handle',
			'et-builder-modules-script'
		);

		wp_localize_script(
			$builder_script_handle,
			'ETBlockLayoutModulesScript',
			array(
				// blockId is dash separated alphanumeric uuid value
				'blockId'       => sanitize_title( et_()->array_get( $_POST, 'et_editor_block_id', 0 ) ),

				// Make layout shortcode available for ajax pagination request by outputting it
				// as JS params so the pagination ajax request can have identical page on next
				// request. Thus any custom script has no business being here: as long as the same
				// module shortcode exist on next page it should be okay. Hence, kses em all
				// regardless user capability to reduce security concern
				'layoutContent' => wp_kses_post( et_()->array_get( $_POST, 'et_layout_block_layout_content', '' ) ),
			)
		);
	}

	/**
	 * Late scripts and styles queue for Layout Block Preview page
	 * Need to queue late because localize script needs to populate settings from rendered modules
	 *
	 * @since 4.4.1 Renamed into `enqueue_block_preview_footer_styles_scripts`. Localize script
	 *                 value which is used by `et-builder-modules-script` is queued on earlier hook
	 * @since 4.1.0
	 */
	public function enqueue_block_preview_footer_styles_scripts() {
		if ( ! self::is_layout_block_preview() ) {
			return;
		}

		// Frontend preview adjustment should only be called on layout block preview frame
		// and shouldn't be called on layout block builder
		if ( ! et_fb_enabled() ) {
			wp_enqueue_script(
				'et-block-layout-preview',
				ET_BUILDER_URI . '/scripts/block-layout-frontend-preview.js',
				array( 'jquery' ),
				ET_BUILDER_PRODUCT_VERSION
			);
		}

		wp_localize_script(
			'et-block-layout-preview',
			'ETBlockLayoutPreview',
			array(
				// blockId is dash separated alphanumeric uuid value
				'blockId'             => sanitize_title( et_()->array_get( $_POST, 'et_editor_block_id', 0 ) ),

				// Exposed module settings for layout block preview for making nescessary adjustments
				'assistiveSettings'   => ET_Builder_Element::get_layout_block_assistive_settings(),

				// Exposed Divi breakpoint minimum widths
				'breakpointMinWidths' => et_pb_responsive_options()->get_breakpoint_min_widths(),

				// Divi style mode
				'styleModes'          => array(
					'desktop',
					'tablet',
					'phone',
					'hover',
				),
			)
		);

		// Disabled link modal, originally added for classic builder preview
		wp_enqueue_style(
			'et-block-layout-preview-style',
			ET_BUILDER_URI . '/styles/preview-layout-block.css',
			array(),
			ET_BUILDER_VERSION
		);
	}

	/**
	 * Add builder classname on body class if layout block exist on the page
	 *
	 * @since 4.1.0
	 *
	 * @param array classname
	 *
	 * @return array modified classname
	 */
	public function add_body_classnames( $classes ) {
		if ( self::is_layout_block_preview() ) {
			$classes[] = 'et-db';
			$classes[] = 'et-block-layout-preview';
		}

		return $classes;
	}

	/**
	 * Add box shadow's highest offset value if box shadow is used on section so block preview area
	 * can adjust its padding to make section's box shadow previewable on block preview
	 *
	 * @since 4.1.0
	 *
	 * @return array
	 */
	public function add_section_boxshadow_attributes( $attributes, $props, $render_count ) {
		$box_shadow_style = et_()->array_get( $props, 'box_shadow_style', '' );

		// Only apply on layout block and box shadow is set
		if ( ! self::is_layout_block_preview() || '' === $box_shadow_style || 'none' === $box_shadow_style ) {
			return $attributes;
		}

		// List of box shadow attribute that might affect how tall the box shadow is
		$spread   = et_()->array_get( $props, 'box_shadow_spread', '' );
		$blur     = et_()->array_get( $props, 'box_shadow_blur', '' );
		$vertical = et_()->array_get( $props, 'box_shadow_vertical', '' );

		$values = array(
			'spread'   => absint( $spread ),
			'blur'     => absint( $blur ),
			'vertical' => absint( $vertical ),
		);

		// Sort attributes; there's no way to safely convert all unit (em, rem, etc) into one
		// specific unit accurately, so this assumes that all values are in px
		asort( $values );

		// Point to the last array
		end( $values );

		// Get last array keys
		$highest_attribute_key = key( $values );

		// Add attribute with higest value into DOM data-* attribute so it can be referenced
		$attributes['box-shadow-offset'] = et_()->array_get( $props, 'box_shadow_' . $highest_attribute_key, '' );

		return $attributes;
	}

	/**
	 * Modify layout content condition. Preview template should consider itself is_single = true
	 *
	 * @since 4.1.0
	 * @since 4.4.1 don't overwrite `p` and `post_type` query vars if homepage displays static page
	 *
	 * @param object
	 */
	public function modify_layout_content_condition( $query ) {
		if ( $query->is_main_query() && self::is_layout_block_preview() ) {
			// Set to `false` to avoid home specific classname and attribute being printed. This is
			// specifically needed on CPT which is not publicly queryable / doesn't have frontend
			// page such as reusable block's `wp_block` CPT
			$query->is_home = false;

			// Set to `true` so `#et-boc` wrapper is correctly added
			$query->is_single   = true;
			$query->is_singular = true;

			// Query name doesn't exist while post_id is passed via query string means current
			// layout block preview is rendered on CPT that doesn't publicly queryable / doesn't
			// have registered frontend page such `wp_block`. Manually set post id and post type
			// to avoid current query fetches ALL posts on `post` post type. However, bail if
			// current page has page_id. This means the current page, most likely homepage URL when
			// it has `name` query like this, renders static page on its homepage URL (defined at
			// dashboard > settings > your homepage display). Not doing this will cause current
			// homepage has incorrect post type and id which leads to 404 preview page which
			// will prevent the preview page from being rendered
			if ( ! isset( $query->query['name'] ) && 0 === $query->get( 'page_id' ) ) {
				if ( isset( $_GET['et_post_id'] ) ) {
					$query->set( 'p', intval( $_GET['et_post_id'] ) );
				}

				if ( isset( $_GET['et_post_type'] ) ) {
					$query->set( 'post_type', sanitize_text_field( $_GET['et_post_type'] ) );
				}
			}
		}
	}

	/**
	 * Modify layout content content output based on layout shortcode layout sent over POST for
	 * previewing layout block on gutenberg editor
	 *
	 * @since 4.1.0
	 *
	 * @param string $content post's content
	 *
	 * @return string
	 */
	public function modify_layout_content_output( $content ) {
		if ( self::is_layout_block_preview() && is_main_query() ) {
			$content = et_()->array_get( $_POST, 'et_layout_block_layout_content', '' );

			// If user don't have posting unfiltered html capability, strip scripts
			if ( ! current_user_can( 'unfiltered_html' ) ) {
				$content = wp_kses_post( $content );
			}

			return wp_unslash( $content );
		}

		return $content;
	}

	/**
	 * Modify post meta for enabling builder status and disabling static css if current request is
	 * layout block preview
	 *
	 * @since 4.1.0
	 *
	 * @param null   $value
	 * @param int    $object_id
	 * @param string $meta_key
	 * @param bool   $single
	 *
	 * @return mixed
	 */
	public function modify_layout_content_builder_meta( $value, $object_id, $meta_key, $single ) {
		// Force enable builder on layout block preview page request
		if ( '_et_pb_use_builder' === $meta_key && self::is_layout_block_preview() ) {
			return 'on';
		}

		// Force disable static CSS on layout block preview page request so static CSS doesn't cache
		// incorrect stylesheet and break layout block styling
		if ( '_et_pb_static_css_file' === $meta_key && self::is_layout_block_preview() ) {
			return 'off';
		}

		return $value;
	}

	/**
	 * Modify raw post content for visual builder for layout content edit screen
	 *
	 * @since 4.1.0
	 *
	 * @param string $post_content
	 *
	 * @return string modified post content
	 */
	public function modify_layout_content_visual_builder_raw_post_content( $post_content ) {
		if ( self::is_layout_block_preview() ) {
			// Explicitly set post_id value based on query string because layout block's edit
			// window of CPT that has no frontend page such as reusable block's `wp_block` CPT
			// might use other / last post loop for rendering visual builder structure since its
			// own post data isn't publicly queryable
			$post_id  = intval( et_()->array_get( $_GET, 'et_post_id', get_the_ID() ) );
			$block_id = sanitize_title( et_()->array_get( $_GET, 'blockId' ) );

			$key          = "_et_block_layout_preview_{$block_id}";
			$post_content = wp_unslash( get_post_meta( $post_id, $key, true ) );
		}

		return $post_content;
	}

	/**
	 * Modify Theme Builder body layout that is used on layout block preview
	 *
	 * @since 4.3.4
	 *
	 * @param string $content
	 *
	 * @return string
	 */
	public function modify_theme_builder_body_layout( $content ) {
		// Skip if current request isn't layout block preview
		if ( ! self::is_layout_block_preview() ) {
			return $content;
		}

		// Get `et_pb_post_content` shortcode inside layout by pulling regex and matching it.
		// `et_pb_post_content` has to exist, otherwise `the_content()` won't be rendered; Return
		// plain `et_pb_post_content` shortcode if current layout doesn't have any
		$post_content_regex = get_shortcode_regex( et_theme_builder_get_post_content_modules() );

		preg_match_all( "/$post_content_regex/", $content, $post_content_module, PREG_SET_ORDER );

		$post_content_shortcode = et_()->array_get(
			$post_content_module,
			'0.0',
			'[et_pb_post_content][/et_pb_post_content]'
		);

		// Return `et_pb_post_content` wrapped by section > row > column which has no unwanted
		// styling. TB body layout might have any module imaginable while in context of layout block
		// preview, only `et_pb_post_content` matters because its typography setting can override
		// default typography styling
		return '[et_pb_section admin_label="section" custom_padding="0px|0px|0px|0px"]
			[et_pb_row admin_label="row" custom_padding="0px|0px|0px|0px" custom_margin="0px|0px|0px|0px" width="100%"]
				[et_pb_column type="4_4"]' . $post_content_shortcode . '[/et_pb_column]
			[/et_pb_row]
		[/et_pb_section]';
	}
}

// Initialize ET_GB_Block_Layout
ET_GB_Block_Layout::instance();
