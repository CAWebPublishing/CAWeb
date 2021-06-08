<?php
/**
 * WooCommerce Modules: ET_Builder_Module_Woocommerce_Related_Products class
 *
 * The ET_Builder_Module_Woocommerce_Related_Products Class is responsible for rendering the
 * Related Products markup using the WooCommerce template.
 *
 * @package Divi\Builder
 *
 * @since   3.29
 */

/**
 * Class representing WooCommerce Related Products component.
 *
 * @since 3.29
 */
class ET_Builder_Module_Woocommerce_Related_Products extends ET_Builder_Module {
	/**
	 * Holds Prop values across static methods.
	 *
	 * @var array
	 *
	 * @used-by ET_Builder_Module_Woocommerce_Related_Products::get_related_products()
	 * @used-by ET_Builder_Module_Woocommerce_Related_Products::get_selected_related_product_args()
	 */
	public static $static_props;

	/**
	 * Initialize.
	 *
	 * @since 4.0.7 Introduced Product title toggle slug to allow Copy/Paste
	 *           @see   {https://github.com/elegantthemes/Divi/issues/17436}
	 */
	public function init() {
		$this->name   = esc_html__( 'Woo Related Product', 'et_builder' );
		$this->plural = esc_html__( 'Woo Related Products', 'et_builder' );

		// Use `et_pb_wc_{module}` for all WooCommerce modules.
		$this->slug       = 'et_pb_wc_related_products';
		$this->vb_support = 'on';

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general'  => array(
				'toggles' => array(
					'main_content' => et_builder_i18n( 'Content' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'overlay' => et_builder_i18n( 'Overlay' ),
					'image'   => et_builder_i18n( 'Image' ),
					// Avoid Text suffix by manually defining the `star` toggle slug.
					'star'    => esc_html__( 'Star Rating', 'et_builder' ),
				),
			),
		);

		$this->advanced_fields = array(
			'fonts'          => array(
				'title'         => array(
					'label'       => et_builder_i18n( 'Title' ),
					'css'         => array(
						'main'      => '%%order_class%% section.products > h1, %%order_class%% section.products > h2, %%order_class%% section.products > h3, %%order_class%% section.products > h4, %%order_class%% section.products > h5, %%order_class%% section.products > h6',
						'important' => 'all',
					),
					'font_size'   => array(
						'default' => '26px',
					),
					'line_height' => array(
						'default' => '1',
					),
				),
				'rating'        => array(
					'label'              => esc_html__( 'Star Rating', 'et_builder' ),
					'css'                => array(
						'main'                 => '%%order_class%% ul.products li.product .star-rating',
						'color'                => '%%order_class%% li.product .star-rating > span:before',
						'letter_spacing_hover' => '%%order_class%% ul.products li.product:hover .star-rating',
					),
					'font_size'          => array(
						'default' => 14,
					),
					'hide_font'          => true,
					'hide_line_height'   => true,
					'hide_text_shadow'   => true,
					'use_original_label' => true,
					'text_align'         => array(
						'label' => esc_html__( 'Star Rating Alignment', 'et_builder' ),
					),
					'font_size'          => array(
						'label' => esc_html__( 'Star Rating Size', 'et_builder' ),
					),
					'text_color'         => array(
						'label' => esc_html__( 'Star Rating Color', 'et_builder' ),
					),
					'toggle_slug'        => 'star',
				),
				'product_title' => array(
					'label'       => esc_html__( 'Product Title', 'et_builder' ),
					'css'         => array(
						'main'      => "{$this->main_css_element} ul.products li.product h3, {$this->main_css_element} ul.products li.product h1, {$this->main_css_element} ul.products li.product h2, {$this->main_css_element} ul.products li.product h4, {$this->main_css_element} ul.products li.product h5, {$this->main_css_element} ul.products li.product h6",
						'important' => 'all',
					),
					'font_size'   => array(
						'default' => '26px',
					),
					'line_height' => array(
						'default' => '1',
					),
				),
				'price'         => array(
					'label'       => esc_html__( 'Price', 'et_builder' ),
					'css'         => array(
						'main' => "{$this->main_css_element} ul.products li.product .price, {$this->main_css_element} ul.products li.product .price .amount",
					),
					'font_size'   => array(
						'default' => '14px',
					),
					'line_height' => array(
						'range_settings' => array(
							'min'  => '1',
							'max'  => '100',
							'step' => '1',
						),
						'default'        => floatval( et_get_option( 'body_font_height', '1.7' ) ) . 'em',
					),
				),
				'sale_badge'    => array(
					'label'           => esc_html__( 'Sale Badge', 'et_builder' ),
					'css'             => array(
						'main'      => "{$this->main_css_element} ul.products li.product .onsale",
						'important' => array( 'line-height', 'font', 'text-shadow' ),
					),
					'hide_text_align' => true,
					'line_height'     => array(
						'default' => '1.7em',
					),
					'font_size'       => array(
						'default' => '20px',
					),
					'letter_spacing'  => array(
						'default' => '0px',
					),
				),
				'sale_price'    => array(
					'label'           => esc_html__( 'Sale Price', 'et_builder' ),
					'css'             => array(
						'main' => "{$this->main_css_element} ul.products li.product .price ins .amount",
					),
					'hide_text_align' => true,
					'font'            => array(
						'default' => '|700|||||||',
					),
					'font_size'       => array(
						'default' => '14px',
					),
					'line_height'     => array(
						'range_settings' => array(
							'min'  => '1',
							'max'  => '100',
							'step' => '1',
						),
						'default'        => '1.7em',
					),
				),
			),
			'borders'        => array(
				'default' => array(
					'css' => array(
						'main' => array(
							'border_radii'  => '%%order_class%%.et_pb_wc_related_products .product',
							'border_styles' => '%%order_class%%.et_pb_wc_related_products .product',
						),
					),
				),
				'image'   => array(
					'css'          => array(
						'main'      => array(
							'border_radii'  => '%%order_class%%.et_pb_module .et_shop_image',
							'border_styles' => '%%order_class%%.et_pb_module .et_shop_image',
						),
						'important' => 'all',
					),
					'label_prefix' => et_builder_i18n( 'Image' ),
					'tab_slug'     => 'advanced',
					'toggle_slug'  => 'image',
				),
			),
			'box_shadow'     => array(
				'default' => array(
					'css' => array(
						'main' => '%%order_class%% .product',
					),
				),
				'image'   => array(
					'label'             => esc_html__( 'Image Box Shadow', 'et_builder' ),
					'option_category'   => 'layout',
					'tab_slug'          => 'advanced',
					'toggle_slug'       => 'image',
					'css'               => array(
						'main'    => '%%order_class%% .et_shop_image',
						'overlay' => 'inset',
					),
					'default_on_fronts' => array(
						'color'    => '',
						'position' => '',
					),
				),
			),
			'margin_padding' => array(
				'css' => array(
					'main'      => '%%order_class%%',

					// Needed to overwrite last module margin-bottom styling.
					'important' => array( 'custom_margin' ),
				),
			),
			'text'           => array(
				'css' => array(
					'text_shadow' => implode(
						', ',
						array(
							// Title.
							"{$this->main_css_element} ul.products h3",
							"{$this->main_css_element} ul.products  h1",
							"{$this->main_css_element} ul.products  h2",
							"{$this->main_css_element} ul.products  h4",
							"{$this->main_css_element} ul.products  h5",
							"{$this->main_css_element} ul.products  h6",
							// Price.
							"{$this->main_css_element} ul.products .price",
							"{$this->main_css_element} ul.products .price .amount",

						)
					),
				),
			),
			'filters'        => array(
				'child_filters_target' => array(
					'tab_slug'    => 'advanced',
					'toggle_slug' => 'image',
				),
			),
			'image'          => array(
				'css' => array(
					'main' => '%%order_class%% .et_shop_image',
				),
			),
			'button'         => false,
		);

		$this->custom_css_fields = array(
			'product'   => array(
				'label'    => esc_html__( 'Product', 'et_builder' ),
				'selector' => 'li.product',
			),
			'onsale'    => array(
				'label'    => esc_html__( 'Onsale', 'et_builder' ),
				'selector' => 'li.product .onsale',
			),
			'image'     => array(
				'label'    => et_builder_i18n( 'Image' ),
				'selector' => '.et_shop_image',
			),
			'overlay'   => array(
				'label'    => et_builder_i18n( 'Overlay' ),
				'selector' => '.et_overlay',
			),
			'title'     => array(
				'label'    => et_builder_i18n( 'Title' ),
				'selector' => ET_Builder_Module_Helper_Woocommerce_Modules::get_title_selector(),
			),
			'rating'    => array(
				'label'    => esc_html__( 'Star Rating', 'et_builder' ),
				'selector' => '.star-rating',
			),
			'price'     => array(
				'label'    => esc_html__( 'Price', 'et_builder' ),
				'selector' => 'li.product .price',
			),
			'price_old' => array(
				'label'    => esc_html__( 'Old Price', 'et_builder' ),
				'selector' => 'li.product .price del span.amount',
			),
		);

		$this->help_videos = array(
			array(
				'id'   => '7X03vBPYJ1o',
				'name' => esc_html__( 'Divi WooCommerce Modules', 'et_builder' ),
			),
		);
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_fields() {
		$fields = array(
			'product'             => ET_Builder_Module_Helper_Woocommerce_Modules::get_field(
				'product',
				array(
					'default'          => ET_Builder_Module_Helper_Woocommerce_Modules::get_product_default(),
					'computed_affects' => array(
						'__related_products',
					),
				)
			),
			'product_filter'      => ET_Builder_Module_Helper_Woocommerce_Modules::get_field(
				'product_filter',
				array(
					'computed_affects' => array(
						'__related_products',
					),
				)
			),
			'posts_number'        => ET_Builder_Module_Helper_Woocommerce_Modules::get_field(
				'posts_number',
				array(
					'default'          => ET_Builder_Module_Helper_Woocommerce_Modules::get_columns_posts_default(),
					'computed_affects' => array(
						'__related_products',
					),
				)
			),
			'columns_number'      => ET_Builder_Module_Helper_Woocommerce_Modules::get_field(
				'columns_number',
				array(
					'default'          => ET_Builder_Module_Helper_Woocommerce_Modules::get_columns_posts_default(),
					'computed_affects' => array(
						'__related_products',
					),
				)
			),
			'orderby'             => ET_Builder_Module_Helper_Woocommerce_Modules::get_field(
				'orderby',
				array(
					'options'          => array(
						'default'    => esc_html__( 'Random Order', 'et_builder' ),
						'menu_order' => esc_html__( 'Sort by Menu Order', 'et_builder' ),
						'popularity' => esc_html__( 'Sort By Popularity', 'et_builder' ),
						'date'       => esc_html__( 'Sort By Date: Oldest To Newest', 'et_builder' ),
						'date-desc'  => esc_html__( 'Sort By Date: Newest To Oldest', 'et_builder' ),
						'price'      => esc_html__( 'Sort By Price: Low To High', 'et_builder' ),
						'price-desc' => esc_html__( 'Sort By Price: High To Low', 'et_builder' ),
					),
					'computed_affects' => array(
						'__related_products',
					),
				)
			),
			'sale_badge_color'    => array(
				'label'          => esc_html__( 'Sale Badge Color', 'et_builder' ),
				'description'    => esc_html__( 'Pick a color to use for the sales bade that appears on products that are on sale.', 'et_builder' ),
				'type'           => 'color-alpha',
				'custom_color'   => true,
				'tab_slug'       => 'advanced',
				'toggle_slug'    => 'sale_badge',
				'hover'          => 'tabs',
				'mobile_options' => true,
				'sticky'         => true,
			),
			'icon_hover_color'    => array(
				'label'          => esc_html__( 'Overlay Icon Color', 'et_builder' ),
				'description'    => esc_html__( 'Pick a color to use for the icon that appears when hovering over a product.', 'et_builder' ),
				'type'           => 'color-alpha',
				'custom_color'   => true,
				'tab_slug'       => 'advanced',
				'toggle_slug'    => 'overlay',
				'mobile_options' => true,
				'sticky'         => true,
			),
			'hover_overlay_color' => array(
				'label'          => esc_html__( 'Overlay Background Color', 'et_builder' ),
				'description'    => esc_html__( 'Here you can define a custom color for the overlay', 'et_builder' ),
				'type'           => 'color-alpha',
				'custom_color'   => true,
				'tab_slug'       => 'advanced',
				'toggle_slug'    => 'overlay',
				'mobile_options' => true,
				'sticky'         => true,
			),
			'hover_icon'          => array(
				'label'           => esc_html__( 'Overlay Icon', 'et_builder' ),
				'description'     => esc_html__( 'Here you can define a custom icon for the overlay', 'et_builder' ),
				'type'            => 'select_icon',
				'option_category' => 'configuration',
				'class'           => array( 'et-pb-font-icon' ),
				'tab_slug'        => 'advanced',
				'toggle_slug'     => 'overlay',
				'mobile_options'  => true,
				'sticky'          => true,
			),
			'__related_products'  => array(
				'type'                => 'computed',
				'computed_callback'   => array(
					'ET_Builder_Module_Woocommerce_Related_Products',
					'get_related_products',
				),
				'computed_depends_on' => array(
					'product',
					'product_filter',
					'posts_number',
					'columns_number',
					'orderby',
				),
				'computed_minimum'    => array(
					'product',
				),
			),
		);

		return $fields;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_transition_fields_css_props() {
		$fields = parent::get_transition_fields_css_props();

		$fields['rating_letter_spacing'] = array(
			'width'          => '%%order_class%% .star-rating',
			'letter-spacing' => '%%order_class%% .star-rating',
		);

		return $fields;
	}

	/**
	 * Gets the related Products.
	 *
	 * Used as a callback to the __related_products computed prop.
	 *
	 * @param array $args             Arguments from Computed Prop AJAX call.
	 * @param array $conditional_tags Conditional Tags.
	 * @param array $current_page     Current page args.
	 *
	 * @return string
	 */
	public static function get_related_products( $args = array(), $conditional_tags = array(), $current_page = array() ) {
		/*
		 * User selected Posts per page, Columns and Order by values are propagated to WooCommerce
		 * using the `woocommerce_output_related_products_args` filter.
		 *
		 * Since we cannot directly pass the `$args` as argument to the filter,
		 * we pass them via a static variable.
		 */
		self::$static_props = $args;

		// Force set product's class to ET_Theme_Builder_Woocommerce_Product_Variable_Placeholder
		// in TB so related product can outputs visible content based on pre-filled value in TB
		if ( 'true' === et_()->array_get( $conditional_tags, 'is_tb', false ) ) {
			add_filter( 'woocommerce_product_class', 'et_theme_builder_wc_product_class' );
		}

		add_filter(
			'woocommerce_output_related_products_args',
			array(
				'ET_Builder_Module_Woocommerce_Related_Products',
				'set_related_products_args',
			)
		);

		$output = et_builder_wc_render_module_template( 'woocommerce_output_related_products', $args );

		remove_filter(
			'woocommerce_output_related_products_args',
			array(
				'ET_Builder_Module_Woocommerce_Related_Products',
				'set_related_products_args',
			)
		);

		return $output;
	}

	/**
	 * Returns the User selected Posts per page, columns and Order by values to WooCommerce.
	 *
	 * @param array $args Documented at
	 *              {@see woocommerce_output_related_products()}.
	 *
	 * @return array
	 */
	public static function set_related_products_args( $args ) {
		$selected_args = self::get_selected_related_product_args();

		return wp_parse_args( $selected_args, $args );
	}

	/**
	 * Gets the User set Posts per page, columns and Order by values.
	 *
	 * The static variable used in this method is set by
	 *
	 * @see ET_Builder_Module_Woocommerce_Related_Products::get_related_products()
	 *
	 * @return array
	 */
	public static function get_selected_related_product_args() {
		$selected_args                   = array();
		$selected_args['posts_per_page'] = et_()->array_get(
			self::$static_props,
			'posts_number',
			''
		);
		$selected_args['columns']        = et_()->array_get(
			self::$static_props,
			'columns_number',
			''
		);
		$selected_args['orderby']        = et_()->array_get(
			self::$static_props,
			'orderby',
			''
		);

		// Set default values when parameters are empty.
		$default = ET_Builder_Module_Helper_Woocommerce_Modules::get_columns_posts_default_value();
		if ( empty( $selected_args['posts_per_page'] ) ) {
			$selected_args['posts_per_page'] = $default;
		}
		if ( empty( $selected_args['columns'] ) ) {
			$selected_args['columns'] = $default;
		}

		$selected_args = array_filter( $selected_args, 'strlen' );

		if ( isset( $selected_args['orderby'] ) ) {
			$orderby = $selected_args['orderby'];

			if ( in_array( $orderby, array( 'price-desc', 'date-desc' ), true ) ) {
				/*
				 * For the list of all allowed Orderby values, refer
				 *
				 * @see wc_products_array_orderby
				 */
				$selected_args['orderby'] = str_replace( '-desc', '', $orderby );
			} else {
				/*
				 * Implicitly specify when ascending is required since `desc` is the default value.
				 *
				 * @see woocommerce_related_products()
				 */
				$selected_args['order'] = 'asc';
			}
		}

		return $selected_args;
	}

	/**
	 * Renders the module output.
	 *
	 * @since 4.1.0 Show only Products irrespective of Customizer Product Catalog setting on Shop page.
	 *
	 * @param  array  $attrs       List of attributes.
	 * @param  string $content     Content being processed.
	 * @param  string $render_slug Slug of module that is used for rendering output.
	 *
	 * @return string
	 */
	public function render( $attrs, $content, $render_slug ) {
		ET_Builder_Module_Helper_Woocommerce_Modules::process_background_layout_data( $render_slug, $this );
		ET_Builder_Module_Helper_Woocommerce_Modules::add_star_rating_style(
			$render_slug,
			$this->props,
			'%%order_class%% ul.products li.product .star-rating',
			'%%order_class%% ul.products li.product:hover .star-rating'
		);

		// Sale Badge Color.
		$this->generate_styles(
			array(
				'base_attr_name' => 'sale_badge_color',
				'selector'       => '%%order_class%% span.onsale',
				'css_property'   => 'background-color',
				'important'      => true,
				'render_slug'    => $render_slug,
				'type'           => 'color',
			)
		);

		// Icon Hover Color.
		$this->generate_styles(
			array(
				'hover'          => false,
				'base_attr_name' => 'icon_hover_color',
				'selector'       => '%%order_class%% .et_overlay:before, %%order_class%% .et_pb_extra_overlay:before',
				'css_property'   => 'color',
				'important'      => true,
				'render_slug'    => $render_slug,
				'type'           => 'color',
			)
		);

		// Hover Overlay Color.
		$this->generate_styles(
			array(
				'hover'          => false,
				'base_attr_name' => 'hover_overlay_color',
				'selector'       => '%%order_class%% .et_overlay, %%order_class%% .et_pb_extra_overlay',
				'css_property'   => array( 'background-color', 'border-color' ),
				'important'      => true,
				'render_slug'    => $render_slug,
				'type'           => 'color',
			)
		);

		// Images: Add CSS Filters and Mix Blend Mode rules (if set).
		if ( array_key_exists( 'image', $this->advanced_fields ) && array_key_exists( 'css', $this->advanced_fields['image'] ) ) {
			$this->add_classname(
				$this->generate_css_filters(
					$render_slug,
					'child_',
					self::$data_utils->array_get( $this->advanced_fields['image']['css'], 'main', '%%order_class%%' )
				)
			);
		}

		$this->add_classname( $this->get_text_orientation_classname() );

		$is_shop                        = function_exists( 'is_shop' ) && is_shop();
		$is_wc_loop_prop_get_set_exists = function_exists( 'wc_get_loop_prop' ) && function_exists( 'wc_set_loop_prop' );
		$is_product_category            = function_exists( 'is_product_category' ) && is_product_category();

		if ( $is_shop ) {
			$display_type = ET_Builder_Module_Helper_Woocommerce_Modules::set_display_type_to_render_only_products( 'woocommerce_shop_page_display' );
		} elseif ( $is_product_category ) {
			$display_type = ET_Builder_Module_Helper_Woocommerce_Modules::set_display_type_to_render_only_products( 'woocommerce_category_archive_display' );
		}

		// Required to handle Customizer preview pane.
		// Refer: https://github.com/elegantthemes/Divi/issues/17998#issuecomment-565955422
		if ( $is_wc_loop_prop_get_set_exists && is_customize_preview() ) {
			$is_filtered = wc_get_loop_prop( 'is_filtered' );
			wc_set_loop_prop( 'is_filtered', true );
		}

		$output = self::get_related_products( $this->props );

		// Required to handle Customizer preview pane.
		// Refer: https://github.com/elegantthemes/Divi/issues/17998#issuecomment-565955422
		if ( $is_wc_loop_prop_get_set_exists && is_customize_preview() && isset( $is_filtered ) ) {
			wc_set_loop_prop( 'is_filtered', $is_filtered );
		}

		if ( $is_shop && isset( $display_type ) ) {
			ET_Builder_Module_Helper_Woocommerce_Modules::reset_display_type( 'woocommerce_shop_page_display', $display_type );
		} elseif ( $is_product_category && isset( $display_type ) ) {
			ET_Builder_Module_Helper_Woocommerce_Modules::reset_display_type( 'woocommerce_category_archive_display', $display_type );
		}

		// Render empty string if no output is generated to avoid unwanted vertical space.
		if ( '' === $output ) {
			return '';
		}

		add_filter(
			"et_builder_module_{$render_slug}_outer_wrapper_attrs",
			array(
				'ET_Builder_Module_Helper_Woocommerce_Modules',
				'output_data_icon_attrs',
			),
			10,
			2
		);

		$output = $this->_render_module_wrapper( $output, $render_slug );

		remove_filter(
			"et_builder_module_{$render_slug}_outer_wrapper_attrs",
			array(
				'ET_Builder_Module_Helper_Woocommerce_Modules',
				'output_data_icon_attrs',
			),
			10
		);

		return $output;
	}
}

new ET_Builder_Module_Woocommerce_Related_Products();
