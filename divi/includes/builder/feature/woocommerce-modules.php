<?php
/**
 * All WooCommerce modules specific functions.php stuff goes here
 *
 * @package Divi
 * @subpackage Builder
 * @since 3.29
 */

/**
 * Define required constants.
 */
if ( ! defined( 'ET_BUILDER_WC_PRODUCT_LONG_DESC_META_KEY' ) ) {
	// Post meta key to retrieve/save Long description metabox content.
	define( 'ET_BUILDER_WC_PRODUCT_LONG_DESC_META_KEY', '_et_pb_old_content' );
}

if ( ! defined( 'ET_BUILDER_WC_PRODUCT_PAGE_LAYOUT_META_KEY' ) ) {
	// Post meta key to retrieve/save Long description metabox content.
	define( 'ET_BUILDER_WC_PRODUCT_PAGE_LAYOUT_META_KEY', '_et_pb_product_page_layout' );
}

if ( ! defined( 'ET_BUILDER_WC_PRODUCT_PAGE_CONTENT_STATUS_META_KEY' ) ) {
	// Post meta key to track Product page content status changes.
	define( 'ET_BUILDER_WC_PRODUCT_PAGE_CONTENT_STATUS_META_KEY', '_et_pb_woo_page_content_status' );
}

/**
 * Returning <img> string for default image placeholder
 *
 * @since 4.0.10
 *
 * @return string
 */
function et_builder_wc_placeholder_img() {
	return sprintf(
		'<img src="%1$s" alt="2$s" />',
		et_core_esc_attr( 'placeholder', ET_BUILDER_PLACEHOLDER_LANDSCAPE_IMAGE_DATA ),
		esc_attr__( 'Product image', 'et_builder' )
	);
}

/**
 * Gets the Product Content options.
 *
 * This array is used in Divi Page Settings metabox and in Divi Theme Options ⟶ Builder ⟶ Post Type integration.
 *
 * @since 3.29
 *
 * @param string $translation_context Translation Context to indicate if translation origins from Divi Theme or
 *                                    from the Builder. Optional. Default 'et_builder'.
 *
 * @return array
 */
function et_builder_wc_get_page_layouts( $translation_context = 'et_builder' ) {
	switch ( $translation_context ) {
		case 'Divi':
			$product_page_layouts = array(
				'et_build_from_scratch' => esc_html__( 'Build From Scratch', 'Divi' ),
				'et_default_layout'     => esc_html__( 'Default', 'Divi' ),
			);
			break;
		default:
			$product_page_layouts = array(
				'et_build_from_scratch' => esc_html__( 'Build From Scratch', 'et_builder' ),
				'et_default_layout'     => et_builder_i18n( 'Default' ),
			);
			break;
	}

	return $product_page_layouts;
}

/**
 * Adds WooCommerce Module settings to the Builder settings.
 *
 * Adding in the Builder Settings tab will ensure that the field is available in Extra Theme and
 * Divi Builder Plugin.
 *
 * @since 4.0.3 Hide Product Content layout settings Divi Builder Plugin options.
 * @since 3.29
 *
 * @param array $builder_settings_fields Builder settings fields.
 *
 * @return array
 */
function et_builder_wc_add_settings( $builder_settings_fields ) {
	// Bail early to hide WooCommerce Settings tab under the Builder tab.
	// If $fields['tab_slug'] is not equal to the tab slug (i.e. woocommerce_page_layout) then WooCommerce settings tab won't be displayed.
	// {@see ET_Builder_Settings::_get_builder_settings_in_epanel_format}.
	if ( ! et_is_woocommerce_plugin_active() ) {
		return $builder_settings_fields;
	}

	$fields = array(
		'et_pb_woocommerce_product_layout' => array(
			'type'            => 'select',
			'id'              => 'et_pb_woocommerce_product_layout',
			'index'           => - 1,
			'label'           => esc_html__( 'Product Layout', 'et_builder' ),
			'description'     => esc_html__( 'Here you can choose Product Page Layout for WooCommerce.', 'et_builder' ),
			'options'         => array(
				'et_right_sidebar'   => esc_html__( 'Right Sidebar', 'et_builder' ),
				'et_left_sidebar'    => esc_html__( 'Left Sidebar', 'et_builder' ),
				'et_no_sidebar'      => esc_html__( 'No Sidebar', 'et_builder' ),
				'et_full_width_page' => esc_html__( 'Fullwidth', 'et_builder' ),
			),
			'default'         => 'et_right_sidebar',
			'validation_type' => 'simple_text',
			'et_save_values'  => true,
			'tab_slug'        => 'post_type_integration',
			'toggle_slug'     => 'performance',
		),
		'et_pb_woocommerce_page_layout'    => array(
			'type'            => 'select',
			'id'              => 'et_pb_woocommerce_product_page_layout',
			'index'           => -1,
			'label'           => esc_html__( 'Product Content', 'et_builder' ),
			'description'     => esc_html__( '"Build From Scratch" loads a pre-built WooCommerce page layout, with which you build on when the Divi Builder is enabled. "Default" option lets you use default WooCommerce page layout.', 'et_builder' ),
			'options'         => et_builder_wc_get_page_layouts(),
			'default'         => 'et_build_from_scratch',
			'validation_type' => 'simple_text',
			'et_save_values'  => true,
			'tab_slug'        => 'post_type_integration',
			'toggle_slug'     => 'performance',
		),
	);

	// Hide setting in DBP : https://github.com/elegantthemes/Divi/issues/17378.
	if ( et_is_builder_plugin_active() ) {
		unset( $fields['et_pb_woocommerce_product_layout'] );
	}

	return array_merge( $builder_settings_fields, $fields );
}

/**
 * Gets the pre-built layout for WooCommerce product pages.
 *
 * @since 3.29
 *
 * @param array $args {
 *  Additional args.
 *
 * @type string $existing_shortcode Existing builder shortcode.
 * }
 *
 * @return string
 */
function et_builder_wc_get_initial_content( $args = array() ) {
	/**
	 * Filters the Top section Background in the default WooCommerce Modules layout.
	 *
	 * @param string $color Default empty.
	 */
	$et_builder_wc_initial_top_section_bg = apply_filters( 'et_builder_wc_initial_top_section_bg', '' );

	$content = '
	[et_pb_section custom_padding="0px||||false|false" background_color="' . esc_attr( $et_builder_wc_initial_top_section_bg ) . '"]
			[et_pb_row width="100%" custom_padding="0px||0px||false|false"]
				[et_pb_column type="4_4"]
					[et_pb_wc_breadcrumb][/et_pb_wc_breadcrumb]
					[et_pb_wc_cart_notice][/et_pb_wc_cart_notice]
				[/et_pb_column]
			[/et_pb_row]
			[et_pb_row custom_padding="0px||||false|false" width="100%"]
				[et_pb_column type="1_2"]
					[et_pb_wc_images][/et_pb_wc_images]
				[/et_pb_column]
				[et_pb_column type="1_2"]
					[et_pb_wc_title][/et_pb_wc_title]
					[et_pb_wc_rating][/et_pb_wc_rating]
					[et_pb_wc_price][/et_pb_wc_price]
					[et_pb_wc_description][/et_pb_wc_description]
					[et_pb_wc_add_to_cart form_field_text_align="center"][/et_pb_wc_add_to_cart]
					[et_pb_wc_meta][/et_pb_wc_meta]
				[/et_pb_column]
			[/et_pb_row]
			[et_pb_row width="100%"]
				[et_pb_column type="4_4"]
					[et_pb_wc_tabs]
					[/et_pb_wc_tabs]
					[et_pb_wc_upsells columns_number="3"][/et_pb_wc_upsells]
					[et_pb_wc_related_products columns_number="3"][/et_pb_wc_related_products]
				[/et_pb_column]
			[/et_pb_row]
		[/et_pb_section]';

	if ( ! empty( $args['existing_shortcode'] ) ) {
		return $content . $args['existing_shortcode'];
	}

	return $content;
}

/**
 * Gets the Product layout for a given Post ID.
 *
 * @since 3.29
 *
 * @param int $post_id Post Id.
 *
 * @return string The return value will be one of the values from
 *                {@see et_builder_wc_get_page_layouts()} when the Post ID is valid.
 *                Empty string otherwise.
 */
function et_builder_wc_get_product_layout( $post_id ) {
	$post = get_post( $post_id );

	if ( ! $post ) {
		return false;
	}

	return get_post_meta( $post_id, ET_BUILDER_WC_PRODUCT_PAGE_LAYOUT_META_KEY, true );
}

/**
 * Sets the pre-built layout for WooCommerce product pages.
 *
 * @param string $maybe_shortcode_content Post content.
 * @param int    $post_id Post id.
 *
 * @return string
 */
function et_builder_wc_set_initial_content( $maybe_shortcode_content, $post_id ) {
	$post = get_post( absint( $post_id ) );
	$args = array();

	if ( ! ( $post instanceof WP_Post ) || 'product' !== $post->post_type ) {
		return $maybe_shortcode_content;
	}

	// $post_id is a valid Product ID by now.
	$product_page_layout = et_builder_wc_get_product_layout( $post_id );

	/*
	 * When FALSE, this means the Product doesn't use Builder at all;
	 * Or the Product has been using the Builder before WooCommerce Modules QF launched.
	 */
	if ( ! $product_page_layout ) {
		$product_page_layout = et_get_option(
			'et_pb_woocommerce_page_layout',
			'et_build_from_scratch'
		);
	}

	$is_product_content_modified = 'modified' === get_post_meta(
		$post_id,
		ET_BUILDER_WC_PRODUCT_PAGE_CONTENT_STATUS_META_KEY,
		true
	);

	// Content was already saved or default content should be loaded.
	if ( $is_product_content_modified || 'et_default_layout' === $product_page_layout ) {
		return $maybe_shortcode_content;
	}

	if ( has_shortcode( $maybe_shortcode_content, 'et_pb_section' ) && 'et_build_from_scratch' === $product_page_layout && ! empty( $maybe_shortcode_content ) ) {
		$args['existing_shortcode'] = $maybe_shortcode_content;
	}

	return et_builder_wc_get_initial_content( $args );
}

/**
 * Saves the WooCommerce long description metabox content.
 *
 * The content is stored as post meta w/ the key `_et_pb_old_content`.
 *
 * @param int     $post_id Post id.
 * @param WP_Post $post Post Object.
 * @param array   $request The $_POST Request variables.
 *
 * @since 3.29
 */
function et_builder_wc_long_description_metabox_save( $post_id, $post, $request ) {
	if ( ! isset( $request['et_bfb_long_description_nonce'] ) ) {
		return;
	}

	if ( current_user_can( 'edit_posts', $post_id ) && et_core_security_check( 'edit_posts', 'et_bfb_long_description_nonce', '_et_bfb_long_description_nonce', '_POST', false )
	) {
		return;
	}

	if ( 'product' !== $post->post_type ) {
		return;
	}

	if ( ! isset( $request['et_builder_wc_product_long_description'] ) ) {
		return;
	}

	$long_desc_content = $request['et_builder_wc_product_long_description'];
	$is_updated        = update_post_meta( $post_id, ET_BUILDER_WC_PRODUCT_LONG_DESC_META_KEY, wp_kses_post( $long_desc_content ) );
}

/**
 * Output Callback for Product long description metabox.
 *
 * @since 3.29
 *
 * @param WP_Post $post Post.
 */
function et_builder_wc_long_description_metabox_render( $post ) {
	$settings = array(
		'textarea_name' => 'et_builder_wc_product_long_description',
		'quicktags'     => array( 'buttons' => 'em,strong,link' ),
		'tinymce'       => array(
			'theme_advanced_buttons1' => 'bold,italic,strikethrough,separator,bullist,numlist,separator,blockquote,separator,justifyleft,justifycenter,justifyright,separator,link,unlink,separator,undo,redo,separator',
			'theme_advanced_buttons2' => '',
		),
		'editor_css'    => '<style>#wp-et_builder_wc_product_long_description-editor-container .wp-editor-area{height:175px; width:100%;}</style>',
	);

	// Since we use $post_id in more than one place, use a variable.
	$post_id = $post->ID;

	// Long description metabox content. Default Empty.
	$long_desc_content = get_post_meta( $post_id, ET_BUILDER_WC_PRODUCT_LONG_DESC_META_KEY, true );
	$long_desc_content = ! empty( $long_desc_content ) ? $long_desc_content : '';

	/**
	 * Filters the wp_editor settings used in the Long description metabox.
	 *
	 * @param array $settings WP Editor settings.
	 *
	 * @since 3.29
	 */
	$settings = apply_filters( 'et_builder_wc_product_long_description_editor_settings', $settings );

	wp_nonce_field( '_et_bfb_long_description_nonce', 'et_bfb_long_description_nonce' );

	wp_editor(
		$long_desc_content,
		'et_builder_wc_product_long_description',
		$settings
	);
}

/**
 * Adds the Long description metabox to Product post type.
 *
 * @since 3.29
 *
 * @param WP_Post $post WP Post.
 */
function et_builder_wc_long_description_metabox_register( $post ) {
	if ( 'on' !== get_post_meta( $post->ID, '_et_pb_use_builder', true ) ) {
		return;
	}

	add_meta_box(
		'et_builder_wc_product_long_description_metabox',
		__( 'Product long description', 'et_builder' ),
		'et_builder_wc_long_description_metabox_render',
		'product',
		'normal'
	);
}

/**
 * Determine if WooCommerce's $product global need to be overwritten or not.
 * IMPORTANT: make sure to reset it later
 *
 * @since 3.29
 *
 * @param string $product_id Post id.
 *
 * @return bool
 */
function et_builder_wc_need_overwrite_global( $product_id = 'current' ) {
	$is_current_product_page = 'current' === $product_id;

	// There are three situation which requires global value overwrite: initial builder
	// ajax request, computed callback jax request (all ajax request has faulty global variable),
	// and if `product` attribute is not current page's product id (ie Woo Tabs being used
	// on non `product` CPT).
	$need_overwrite_global = ! $is_current_product_page
		|| et_fb_is_builder_ajax()
		|| et_fb_is_computed_callback_ajax();

	return $need_overwrite_global;
}

/**
 * Helper to render module template for module's front end and computed callback output
 *
 * @since 3.29
 *
 * @param string $function_name Rendering method name.
 * @param array  $args Method arguments.
 * @param array  $overwrite List of global variables to overwrites e.g $product, $post and $wp_query.
 *
 * @return string
 */
function et_builder_wc_render_module_template( $function_name, $args = array(), $overwrite = array( 'product' ) ) {
	// Shouldn't be fired in Backend to not break the BB loading.
	if ( is_admin() && ! wp_doing_ajax() ) {
		return;
	}

	// Check if passed function name is allowlisted or not.
	$allowlisted_functions = array(
		'the_title',
		'woocommerce_breadcrumb',
		'woocommerce_template_single_price',
		'woocommerce_template_single_add_to_cart',
		'woocommerce_product_additional_information_tab',
		'woocommerce_template_single_meta',
		'woocommerce_template_single_rating',
		'woocommerce_show_product_images',
		'wc_get_stock_html',
		'wc_print_notices',
		'wc_print_notice',
		'woocommerce_output_related_products',
		'woocommerce_upsell_display',
	);

	if ( ! in_array( $function_name, $allowlisted_functions, true ) ) {
		return '';
	}

	// phpcs:disable WordPress.WP.GlobalVariablesOverride -- Overwrite global variables when rendering templates which are restored before this function exist.
	global $product, $post, $wp_query;

	$defaults = array(
		'product' => 'current',
	);

	$args               = wp_parse_args( $args, $defaults );
	$overwrite_global   = et_builder_wc_need_overwrite_global( $args['product'] );
	$overwrite_product  = in_array( 'product', $overwrite, true );
	$overwrite_post     = in_array( 'post', $overwrite, true );
	$overwrite_wp_query = in_array( 'wp_query', $overwrite, true );
	$is_tb              = et_builder_tb_enabled();

	if ( $is_tb ) {
		// global object needs to be set before output rendering. This needs to be performed on each
		// module template rendering instead of once for all module template rendering because some
		// module's template rendering uses `wp_reset_postdata()` which resets global query.
		et_theme_builder_wc_set_global_objects();
	} elseif ( $overwrite_global ) {
		$is_latest_product       = 'latest' === $args['product'];
		$is_current_product_page = 'current' === $args['product'];

		if ( $is_latest_product ) {
			// Dynamic filter's product_id need to be translated into correct id
			$product_id = ET_Builder_Module_Helper_Woocommerce_Modules::get_product_id( $args['product'] );
		} elseif ( $is_current_product_page && wp_doing_ajax() && class_exists( 'ET_Builder_Element' ) ) {
			// $product global doesn't exist in ajax request; thus get the fallback post id
			// this is likely happen in computed callback ajax request
			$product_id = ET_Builder_Element::get_current_post_id();
		} else {
			// Besides two situation above, $product_id is current $args['product'].
			if ( false !== get_post_status( $args['product'] ) ) {
				$product_id = $args['product'];
			} else {
				// Fallback to Latest product if saved product ID doesn't exist.
				$product_id = ET_Builder_Module_Helper_Woocommerce_Modules::get_product_id( 'latest' );
			}
		}

		if ( 'product' !== get_post_type( $product_id ) ) {
			// We are in a Theme Builder layout and the current post is not a product - use the latest one instead.
			$products = new WP_Query(
				array(
					'post_type'      => 'product',
					'post_status'    => 'publish',
					'posts_per_page' => 1,
					'no_found_rows'  => true,
				)
			);

			if ( ! $products->have_posts() ) {
				return '';
			}

			$product_id = $products->posts[0]->ID;
		}

		// Overwrite product.
		if ( $overwrite_product ) {
			$original_product = $product;
			$product          = wc_get_product( $product_id );
		}

		// Overwrite post.
		if ( $overwrite_post ) {
			$original_post = $post;
			$post          = get_post( $product_id );
		}

		// Overwrite wp_query.
		if ( $overwrite_wp_query ) {
			$original_wp_query = $wp_query;
			$wp_query          = new WP_Query( array( 'p' => $product_id ) );
		}
	}

	ob_start();

	switch ( $function_name ) {
		case 'woocommerce_breadcrumb':
			$breadcrumb_separator = et_()->array_get( $args, 'breadcrumb_separator', '' );
			$breadcrumb_separator = str_replace( '&#8221;', '', $breadcrumb_separator );

			woocommerce_breadcrumb(
				array(
					'delimiter' => ' ' . $breadcrumb_separator . ' ',
					'home'      => et_()->array_get( $args, 'breadcrumb_home_text', '' ),
				)
			);
			break;
		case 'woocommerce_show_product_images':
			// WC Images module needs to modify global variable's property. Thus it is performed
			// here instead at module's class since the $product global might be modified.
			$gallery_ids     = $product->get_gallery_image_ids();
			$image_id        = $product->get_image_id();
			$show_image      = 'on' === $args['show_product_image'];
			$show_gallery    = 'on' === $args['show_product_gallery'];
			$show_sale_badge = 'on' === $args['show_sale_badge'];

			// If featured image is disabled, replace it with first gallery image's id (if gallery
			// is enabled) or replaced it with empty string (if gallery is disabled as well).
			if ( ! $show_image ) {
				if ( $show_gallery && isset( $gallery_ids[0] ) ) {
					$product->set_image_id( $gallery_ids[0] );

					// Remove first image from the gallery because it'll be added as thumbnail and will be duplicated.
					unset( $gallery_ids[0] );
					$product->set_gallery_image_ids( $gallery_ids );
				} else {
					$product->set_image_id( '' );
				}
			}

			// Replaced gallery image ids with empty array.
			if ( ! $show_gallery ) {
				$product->set_gallery_image_ids( array() );
			}

			if ( $show_sale_badge && function_exists( 'woocommerce_show_product_sale_flash' ) ) {
				woocommerce_show_product_sale_flash();
			}

			// @phpcs:ignore Generic.PHP.ForbiddenFunctions.Found
			call_user_func( $function_name );

			// Reset product's actual featured image id.
			if ( ! $show_image ) {
				$product->set_image_id( $image_id );
			}

			// Reset product's actual gallery image id.
			if ( ! $show_gallery ) {
				$product->set_gallery_image_ids( $gallery_ids );
			}

			break;
		case 'wc_get_stock_html':
			echo wc_get_stock_html( $product ); // phpcs:ignore WordPress.Security.EscapeOutput -- `wc_get_stock_html` include woocommerce's `single-product/stock.php` template.
			break;
		case 'wc_print_notice':
			// @phpcs:ignore Generic.PHP.ForbiddenFunctions.Found
			call_user_func( $function_name, wc_add_to_cart_message( $product->get_id(), false, true ) );
			break;
		case 'wc_print_notices':
			// Save existing notices to restore them as many times as we need.
			$et_wc_cached_notices = WC()->session->get( 'wc_notices', array() );

			// @phpcs:ignore Generic.PHP.ForbiddenFunctions.Found
			call_user_func( $function_name );

			// Restore notices which were removed after wc_print_notices() executed to render multiple modules on page.
			if ( ! empty( $et_wc_cached_notices ) && empty( WC()->session->get( 'wc_notices', array() ) ) ) {
				WC()->session->set( 'wc_notices', $et_wc_cached_notices );
			}
			break;
		case 'woocommerce_upsell_display':
			$order = isset( $args['order'] ) ? $args['order'] : '';
			// @phpcs:ignore Generic.PHP.ForbiddenFunctions.Found
			call_user_func( $function_name, '', '', '', $order );
			break;
		default:
			// @phpcs:ignore Generic.PHP.ForbiddenFunctions.Found
			call_user_func( $function_name );
	}

	$output = ob_get_clean();

	// Reset original product variable to global $product.
	if ( $is_tb ) {
		et_theme_builder_wc_reset_global_objects();
	} elseif ( $overwrite_global ) {
		// Reset $product global.
		if ( $overwrite_product ) {
			$product = $original_product;
		}

		// Reset post.
		if ( $overwrite_post ) {
			$post = $original_post;
		}

		// Reset wp_query.
		if ( $overwrite_wp_query ) {
			$wp_query = $original_wp_query;
		}
		// phpcs:enable WordPress.WP.GlobalVariablesOverride -- Enable global variable override check.
	}

	return $output;
}

/**
 * Renders the content.
 *
 * Rendering the content will enable Divi Builder to take over the entire
 * post content area.
 *
 * @since 3.29
 */
function et_builder_wc_product_render_layout() {
	do_action( 'et_builder_wc_product_before_render_layout' );

	the_content();

	do_action( 'et_builder_wc_product_after_render_layout' );
}

/**
 * Force WooCommerce to load default template over theme's custom template when builder's
 * et_builder_from_scratch is used to prevent unexpected custom layout which makes builder
 * experience inconsistent
 *
 * @since 3.29
 *
 * @param string $template Path to template file.
 * @param string $slug Template slug.
 * @param string $name Template name.
 *
 * @return string
 */
function et_builder_wc_override_template_part( $template, $slug, $name ) {
	// Only force load default `content-single-product.php` template.
	$is_content_single_product = 'content' === $slug && 'single-product' === $name;

	return $is_content_single_product ? WC()->plugin_path() . "/templates/{$slug}-{$name}.php" : $template;
}

/**
 * Disable all default WooCommerce single layout hooks.
 *
 * @since 4.0.10
 */
function et_builder_wc_disable_default_layout() {
	// To remove a hook, the $function_to_remove and $priority arguments must match
	// with which the hook was added.
	remove_action(
		'woocommerce_before_main_content',
		'woocommerce_breadcrumb',
		20
	);

	remove_action(
		'woocommerce_before_single_product_summary',
		'woocommerce_show_product_sale_flash',
		10
	);
	remove_action(
		'woocommerce_before_single_product_summary',
		'woocommerce_show_product_images',
		20
	);
	remove_action(
		'woocommerce_single_product_summary',
		'woocommerce_template_single_title',
		5
	);
	remove_action(
		'woocommerce_single_product_summary',
		'woocommerce_template_single_rating',
		10
	);
	remove_action(
		'woocommerce_single_product_summary',
		'woocommerce_template_single_price',
		10
	);
	remove_action(
		'woocommerce_single_product_summary',
		'woocommerce_template_single_excerpt',
		20
	);
	remove_action(
		'woocommerce_single_product_summary',
		'woocommerce_template_single_add_to_cart',
		30
	);
	remove_action(
		'woocommerce_single_product_summary',
		'woocommerce_template_single_meta',
		40
	);
	remove_action(
		'woocommerce_single_product_summary',
		'woocommerce_template_single_sharing',
		50
	);
	remove_action(
		'woocommerce_after_single_product_summary',
		'woocommerce_output_product_data_tabs',
		10
	);
	remove_action(
		'woocommerce_after_single_product_summary',
		'woocommerce_upsell_display',
		15
	);
	remove_action(
		'woocommerce_after_single_product_summary',
		'woocommerce_output_related_products',
		20
	);
}

/**
 * Overrides the default WooCommerce layout.
 *
 * @see woocommerce/includes/wc-template-functions.php
 *
 * @since 3.29
 */
function et_builder_wc_override_default_layout() {
	if ( ! is_singular( 'product' ) ) {
		return;
	}

	// global $post won't be available with `after_setup_theme` hook and hence `wp` hook is used.
	global $post;

	if ( ! et_pb_is_pagebuilder_used( $post->ID ) ) {
		return;
	}

	$product_page_layout         = et_builder_wc_get_product_layout( $post->ID );
	$is_product_content_modified = 'modified' === get_post_meta( $post->ID, ET_BUILDER_WC_PRODUCT_PAGE_CONTENT_STATUS_META_KEY, true );
	$is_preview_loading          = is_preview();

	// BFB was enabled but page content wasn't saved yet. Load default layout on FE.
	if ( 'et_build_from_scratch' === $product_page_layout && ! $is_product_content_modified && ! $is_preview_loading ) {
		return;
	}

	/*
	 * The `has_shortcode()` check does not work here. Hence solving the need using `strpos()`.
	 *
	 * The WHY behind the check is explained in the following issue.
	 * @see https://github.com/elegantthemes/Divi/issues/16155
	 */
	if ( ! $product_page_layout && ! et_core_is_fb_enabled() || ( $product_page_layout && 'et_build_from_scratch' !== $product_page_layout )
	) {
		return;
	}

	// Force use WooCommerce's default template if current theme is not Divi or Extra (handling
	// possible custom template on DBP / Child Theme).
	if ( ! in_array( wp_get_theme()->get( 'Name' ), array( 'Divi', 'Extra' ), true ) ) {
		add_filter( 'wc_get_template_part', 'et_builder_wc_override_template_part', 10, 3 );
	}

	et_builder_wc_disable_default_layout();

	do_action( 'et_builder_wc_product_before_render_layout_registration' );

	// Add render content on product page.
	add_action( 'woocommerce_after_single_product_summary', 'et_builder_wc_product_render_layout', 5 );
}

/**
 * Skips setting default content on Product post type during Builder activation.
 *
 * Otherwise, the description would be shown in both Product Tabs and at the end of the
 * default WooCommerce layout set at
 *
 * @see et_builder_wc_get_initial_content()
 *
 * @since 3.29
 *
 * @param bool    $flag Whether to skips the content activation.
 * @param WP_Post $post Post.
 *
 * @return bool
 */
function et_builder_wc_skip_initial_content( $flag, $post ) {
	if ( ! ( $post instanceof WP_Post ) ) {
		return $flag;
	}

	if ( 'product' !== $post->post_type ) {
		return $flag;
	}

	return true;
}

/**
 * Determine whether given content has WooCommerce module inside it or not
 *
 * @since 4.0 Added ET_Builder_Element class exists check.
 * @since 3.29
 *
 * @param string $content Content.
 *
 * @return bool
 */
function et_builder_has_woocommerce_module( $content = '' ) {
	if ( ! class_exists( 'ET_Builder_Element' ) ) {
		return false;
	}

	$has_woocommerce_module = false;
	$woocommerce_modules    = ET_Builder_Element::get_woocommerce_modules();

	foreach ( $woocommerce_modules as $module ) {
		if ( has_shortcode( $content, $module ) ) {
			$has_woocommerce_module = true;

			// Stop the loop once any shortcode is found.
			break;
		}
	}

	return apply_filters( 'et_builder_has_woocommerce_module', $has_woocommerce_module );
}

/**
 * Check if current global $post uses builder / layout block, not `product` CPT, and contains
 * WooCommerce module inside it. This check is needed because WooCommerce by default only adds
 * scripts and style to `product` CPT while WooCommerce Modules can be used at any CPT
 *
 * @since 3.29
 * @since 4.1.0 check if layout block is used instead of builder
 *
 * @since bool
 */
function et_builder_wc_is_non_product_post_type() {
	global $post;

	if ( $post && 'product' === $post->post_type ) {
		return false;
	}

	$types   = et_theme_builder_get_layout_post_types();
	$layouts = et_theme_builder_get_template_layouts();

	foreach ( $types as $type ) {
		if ( ! isset( $layouts[ $type ] ) ) {
			continue;
		}

		if ( $layouts[ $type ]['override'] && et_builder_has_woocommerce_module( get_post_field( 'post_content', $layouts[ $type ]['id'] ) ) ) {
			return true;
		}
	}

	// If no post found, bail early.
	if ( ! $post ) {
		return false;
	}

	$is_builder_used      = et_pb_is_pagebuilder_used( $post->ID );
	$is_layout_block_used = has_block( 'divi/layout', $post->post_content );

	// If no builder or layout block used, bail early.
	if ( ! $is_builder_used && ! $is_layout_block_used ) {
		return false;
	}

	$has_wc_module = et_builder_has_woocommerce_module( $post->post_content );

	if ( ( $is_builder_used || $is_layout_block_used ) && $has_wc_module ) {
		return true;
	}

	return false;
}

/**
 * Load WooCommerce related scripts. This function basically redo what `WC_Frontend_Scripts::load_scripts()`
 * does without the `product` CPT limitation.
 *
 * @todo Once more WooCommerce Modules are added (checkout, account, etc), revisit this method and
 *       compare it against `WC_Frontend_Scripts::load_scripts()`. Some of the script queues are
 *       removed here because there is currently no WooCommerce module equivalent of them
 *
 * @since 3.29
 *
 * @since 4.3.3 Loads WC scripts on Shop, Product Category & Product Tags archives.
 */
function et_builder_wc_load_scripts() {
	global $post;

	$is_shop = function_exists( 'is_shop' ) && is_shop();

	// is_product_taxonomy() is not returning TRUE for Category & Tags.
	// Hence we check Category & Tag archives individually.
	$is_product_category = function_exists( 'is_product_category' ) && is_product_category();
	$is_product_tag      = function_exists( 'is_product_tag' ) && is_product_tag();

	// If current page is not non-`product` CPT which using builder, stop early.
	if ( ( ! et_builder_wc_is_non_product_post_type()
			|| ! class_exists( 'WC_Frontend_Scripts' ) )
		&& function_exists( 'et_fb_enabled' )
		&& ! et_core_is_fb_enabled()
		&& ! $is_shop
		&& ! $is_product_category
		&& ! $is_product_tag
	) {
		return;
	}

	// Simply enqueue the scripts; All of them have been registered.
	if ( 'yes' === get_option( 'woocommerce_enable_ajax_add_to_cart' ) ) {
		wp_enqueue_script( 'wc-add-to-cart' );
	}

	if ( current_theme_supports( 'wc-product-gallery-zoom' ) ) {
		wp_enqueue_script( 'zoom' );
	}
	if ( current_theme_supports( 'wc-product-gallery-slider' ) ) {
		wp_enqueue_script( 'flexslider' );
	}
	if ( current_theme_supports( 'wc-product-gallery-lightbox' ) ) {
		wp_enqueue_script( 'photoswipe-ui-default' );
		wp_enqueue_style( 'photoswipe-default-skin' );

		add_action( 'wp_footer', 'woocommerce_photoswipe' );
	}
	wp_enqueue_script( 'wc-single-product' );

	if ( 'geolocation_ajax' === get_option( 'woocommerce_default_customer_address' ) ) {
		$ua = strtolower( wc_get_user_agent() ); // Exclude common bots from geolocation by user agent.

		if ( ! strstr( $ua, 'bot' ) && ! strstr( $ua, 'spider' ) && ! strstr( $ua, 'crawl' ) ) {
			wp_enqueue_script( 'wc-geolocation' );
		}
	}

	wp_enqueue_script( 'woocommerce' );
	wp_enqueue_script( 'wc-cart-fragments' );

	// Enqueue style.
	$wc_styles = WC_Frontend_Scripts::get_styles();

	foreach ( $wc_styles as $style_handle => $wc_style ) {
		if ( ! isset( $wc_style['has_rtl'] ) ) {
			$wc_style['has_rtl'] = false;
		}

		wp_enqueue_style( $style_handle, $wc_style['src'], $wc_style['deps'], $wc_style['version'], $wc_style['media'], $wc_style['has_rtl'] );
	}
}

/**
 * Add WooCommerce body class name on non `product` CPT builder page
 *
 * @param array $classes CSS class names.
 *
 * @return array
 * @since 3.29
 */
function et_builder_wc_add_body_class( $classes ) {
	if ( et_builder_wc_is_non_product_post_type() ) {
		$classes[] = 'woocommerce';
		$classes[] = 'woocommerce-page';
	}

	return $classes;
}

/**
 * Add product class name on inner content wrapper page on non `product` CPT builder page with woocommerce modules
 * And on Product posts
 *
 * @param array $classes Product class names.
 *
 * @return array
 * @since 3.29
 */
function et_builder_wc_add_inner_content_class( $classes ) {
	// The class is required on any post with woocommerce modules and on product pages.
	if ( et_builder_wc_is_non_product_post_type() || is_product() ) {
		$classes[] = 'product';
	}

	return $classes;
}

/**
 * Add WooCommerce class names on Divi Shop Page (not WooCommerce Shop).
 *
 * @since 4.0.7
 *
 * @param array $classes Array of Classes.
 *
 * @return array
 */
function et_builder_wc_add_outer_content_class( $classes ) {
	$body_classes = get_body_class();

	// Add Class only to WooCommerce Shop page if built using Divi (i.e. Divi Shop page).
	if ( ! ( function_exists( 'is_shop' ) && is_shop() ) ) {
		return $classes;
	}

	// Add Class only when the WooCommerce Shop page is built using Divi.
	if ( ! et_builder_wc_is_non_product_post_type() ) {
		return $classes;
	}

	// Precautionary check: $body_classes should always be an array.
	if ( ! is_array( $body_classes ) ) {
		return $classes;
	}

	// Add Class only when the <body> tag does not contain them.
	$woocommerce_classes = array( 'woocommerce', 'woocommerce-page' );
	$common_classes      = array_intersect(
		$body_classes,
		array(
			'woocommerce',
			'woocommerce-page',
		)
	);
	if ( is_array( $common_classes ) && count( $woocommerce_classes ) === count( $common_classes ) ) {
		return $classes;
	}

	// Precautionary check: $classes should always be an array.
	if ( ! is_array( $classes ) ) {
		return $classes;
	}

	$classes[] = 'woocommerce';
	$classes[] = 'woocommerce-page';

	return $classes;
}

/**
 * Sets the Product page layout post meta on two occurrences.
 *
 * They are 1) On WP Admin Publish/Update post 2) On VB Save.
 *
 * @param int $post_id Post id.
 *
 * @since 3.29
 */
function et_builder_set_product_page_layout_meta( $post_id ) {
	$post = get_post( $post_id );
	if ( ! $post ) {
		return;
	}

	/*
	 * The Product page layout post meta adds no meaning to the Post when the Builder is not used.
	 * Hence the meta key/value is removed, when the Builder is turned off.
	 */
	if ( ! et_pb_is_pagebuilder_used( $post_id ) ) {
		delete_post_meta( $post_id, ET_BUILDER_WC_PRODUCT_PAGE_LAYOUT_META_KEY );
		return;
	}

	// Do not update Product page layout post meta when it contains a value.
	$product_page_layout = get_post_meta(
		$post_id,
		ET_BUILDER_WC_PRODUCT_PAGE_LAYOUT_META_KEY,
		true
	);
	if ( $product_page_layout ) {
		return;
	}

	$product_page_layout = et_get_option(
		'et_pb_woocommerce_page_layout',
		'et_build_from_scratch'
	);

	update_post_meta(
		$post_id,
		ET_BUILDER_WC_PRODUCT_PAGE_LAYOUT_META_KEY,
		sanitize_text_field( $product_page_layout )
	);
}

/**
 * Sets the Product content status as modified during VB save.
 *
 * This avoids setting the default WooCommerce Modules layout more than once.
 *
 * @link https://github.com/elegantthemes/Divi/issues/16420
 *
 * @param int $post_id Post ID.
 */
function et_builder_set_product_content_status( $post_id ) {
	if ( 0 === absint( $post_id ) ) {
		return;
	}

	if ( 'product' !== get_post_type( $post_id ) || 'modified' === get_post_meta(
		$post_id,
		ET_BUILDER_WC_PRODUCT_PAGE_CONTENT_STATUS_META_KEY,
		true
	) ) {
		return;
	}

	update_post_meta( $post_id, ET_BUILDER_WC_PRODUCT_PAGE_CONTENT_STATUS_META_KEY, 'modified' );
}

/**
 * Gets Woocommerce Tabs for the given Product ID.
 *
 * @since 4.4.2
 */
function et_builder_get_woocommerce_tabs() {
	// Nonce verification.
	et_core_security_check( 'edit_posts', 'et_builder_get_woocommerce_tabs', 'nonce' );

	$_          = et_();
	$product_id = $_->array_get( $_POST, 'product', 0 );

	if ( null === $product_id || ! et_is_woocommerce_plugin_active() ) {
		wp_send_json_error();
	}

	// Allow Latest Product ID which is a string 'latest'.
	// `This Product` tabs are defined in et_fb_current_page_params().
	if ( ! in_array( $product_id, array( 'current', 'latest' ), true ) && 0 === absint( $product_id ) ) {
		wp_send_json_error();
	}

	$tabs = ET_Builder_Module_Woocommerce_Tabs::get_tabs( array( 'product' => $product_id ) );

	wp_send_json_success( $tabs );
}

/**
 * Returns alternative hook to make Woo Extra Product Options display fields in FE when TB is
 * enabled.
 *
 * - The Woo Extra Product Options addon does not display the extra fields on the FE.
 * - This is because the original hook i.e. `woocommerce_before_single_product` in the plugin
 * is not triggered when TB is enabled.
 * - Hence return a suitable hook that is fired for all types of Products i.e. Simple, Variable,
 * etc.
 *
 * @param string $hook Hook name.
 *
 * @return string WooCommerce Hook that is being fired on TB enabled Product pages.
 * @see WEPOF_Product_Options_Frontend::define_public_hooks()
 *
 * @since 4.0.9
 */
function et_builder_trigger_extra_product_options( $hook ) {
	return 'woocommerce_before_add_to_cart_form';
}

/**
 * Strip Builder shortcodes to avoid nested parsing.
 *
 * @see   https://github.com/elegantthemes/Divi/issues/18682
 *
 * @param string $content Post content.
 *
 * @since 4.3.3
 *
 * @return string
 */
function et_builder_avoid_nested_shortcode_parsing( $content ) {
	// Strip shortcodes only on non-builder pages that contain Builder shortcodes.
	if ( et_pb_is_pagebuilder_used( get_the_ID() ) ) {
		return $content;
	}

	// WooCommerce layout loads when builder is not enabled.
	// So strip builder shortcodes from Post content.
	if ( function_exists( 'is_product' ) && is_product() ) {
		return et_strip_shortcodes( $content );
	}

	// Strip builder shortcodes from non-product pages.
	// Only Tabs shortcode is checked since that causes nested rendering.
	if ( has_shortcode( $content, 'et_pb_wc_tabs' ) ) {
		return et_strip_shortcodes( $content );
	}

	return $content;
}

/**
 * Parses Product description to
 *
 * - converts any [embed][/embed] shortcode to its respective HTML.
 * - strips `et_` shortcodes to avoid nested rendering in Woo Tabs module.
 * - adds <p> tag to keep the paragraph sanity.
 * - runs other shortcodes if any using do_shortcode.
 *
 * @since 4.4.1
 *
 * @param string $description Product description i.e. Post content.
 *
 * @return string
 */
function et_builder_wc_parse_description( $description ) {
	if ( ! is_string( $description ) ) {
		return $description;
	}

	global $wp_embed;

	$parsed_description = et_strip_shortcodes( $description );
	$parsed_description = $wp_embed->run_shortcode( $parsed_description );
	$parsed_description = do_shortcode( $parsed_description );
	$parsed_description = wpautop( $parsed_description );

	return $parsed_description;
}

/**
 * Entry point for the woocommerce-modules.php file.
 *
 * @since 3.29
 */
function et_builder_wc_init() {
	// global $post won't be available with `after_setup_theme` hook and hence `wp` hook is used.
	add_action( 'wp', 'et_builder_wc_override_default_layout' );

	// Add WooCommerce class names on non-`product` CPT which uses builder.
	add_filter( 'body_class', 'et_builder_wc_add_body_class' );
	add_filter( 'et_builder_inner_content_class', 'et_builder_wc_add_inner_content_class' );
	add_filter( 'et_builder_outer_content_class', 'et_builder_wc_add_outer_content_class' );

	// Load WooCommerce related scripts.
	add_action( 'wp_enqueue_scripts', 'et_builder_wc_load_scripts', 15 );

	add_filter(
		'et_builder_skip_content_activation',
		'et_builder_wc_skip_initial_content',
		10,
		2
	);

	// Show Product Content dropdown settings under
	// Divi Theme Options ⟶ Builder ⟶ Post TYpe Integration.
	add_filter( 'et_builder_settings_definitions', 'et_builder_wc_add_settings' );

	/**
	 * Adds the metabox only to Product post type.
	 *
	 * This is achieved using the post type hook - add_meta_boxes_{post_type}.
	 *
	 * @see https://codex.wordpress.org/Plugin_API/Action_Reference/add_meta_boxes
	 *
	 * @since 3.29
	 */
	add_action( 'add_meta_boxes_product', 'et_builder_wc_long_description_metabox_register' );

	// Saves the long description metabox data.
	// Since `et_pb_metabox_settings_save_details()` already uses `save_post` hook
	// to save `_et_pb_old_content` post meta,
	// we use this additional hook `et_pb_old_content_updated`.
	add_action( 'et_pb_old_content_updated', 'et_builder_wc_long_description_metabox_save', 10, 3 );

	// 01. Sets the initial Content when `Use Divi Builder` button is clicked
	// in the Admin dashboard.
	// 02. Sets the initial Content when `Enable Visual Builder` is clicked.
	add_filter(
		'et_fb_load_raw_post_content',
		'et_builder_wc_set_initial_content',
		10,
		2
	);

	add_action( 'et_save_post', 'et_builder_set_product_page_layout_meta' );

	/*
	 * Set the Product modified status as modified upon save to make sure default layout is not
	 * loaded more than one time.
	 *
	 * @see https://github.com/elegantthemes/Divi/issues/16420
	 */
	add_action( 'et_update_post', 'et_builder_set_product_content_status' );

	/*
	 * Handle get Woocommerce tabs AJAX call initiated by Tabs checkbox in settings modal.
	 */
	add_action( 'wp_ajax_et_builder_get_woocommerce_tabs', 'et_builder_get_woocommerce_tabs' );

	/*
	 * Fix Woo Extra Product Options addon compatibility.
	 * @see https://github.com/elegantthemes/Divi/issues/17909
	 */
	add_filter( 'thwepof_hook_name_before_single_product', 'et_builder_trigger_extra_product_options' );

	/*
	 * Fix nested parsing on non-builder product pages w/ shortcode content.
	 * @see https://github.com/elegantthemes/Divi/issues/18682
	 */
	add_filter( 'the_content', 'et_builder_avoid_nested_shortcode_parsing' );

	add_filter( 'et_builder_wc_description', 'et_builder_wc_parse_description' );
}

et_builder_wc_init();
