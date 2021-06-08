<?php
/**
 * WooCommerce Modules: ET_Builder_Module_Woocommerce_Cart_Notice class
 *
 * The ET_Builder_Module_Woocommerce_Cart_Notice Class is responsible for rendering the
 * Cart Notice markup using the WooCommerce template.
 *
 * @package Divi\Builder
 *
 * @since   3.29
 */

/**
 * Class representing WooCommerce Cart Notice component.
 */
class ET_Builder_Module_Woocommerce_Cart_Notice extends ET_Builder_Module {
	/**
	 * Initialize.
	 */
	public function init() {
		$this->name       = esc_html__( 'Woo Cart Notice', 'et_builder' );
		$this->plural     = esc_html__( 'Woo Cart Notices', 'et_builder' );
		$this->slug       = 'et_pb_wc_cart_notice';
		$this->vb_support = 'on';

		$this->settings_modal_toggles = array(
			'general'  => array(
				'toggles' => array(
					'main_content' => et_builder_i18n( 'Content' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'text' => array(
						'title'    => et_builder_i18n( 'Text' ),
						'priority' => 45,
					),
				),
			),
		);

		$this->main_css_element = '%%order_class%% .woocommerce-message';

		$this->advanced_fields = array(
			'fonts'          => array(
				'body' => array(
					'label'           => et_builder_i18n( 'Text' ),
					'css'             => array(
						'main'      => '%%order_class%% .woocommerce-message',
						// CPT style uses `!important` so outputting important is inevitable.
						'important' => 'all',
					),
					'font_size'       => array(
						'default' => '18px',
					),
					'line_height'     => array(
						'default' => '1.7em',
					),
					'toggle_slug'     => 'text',
					'hide_text_align' => true,
				),
			),
			'max_width'      => array(
				'css' => array(
					'module_alignment' => '%%order_class%%.et_pb_module',
				),
			),
			'margin_padding' => array(
				'css'            => array(
					'padding'   => '%%order_class%% .woocommerce-message',
					'important' => 'all',
				),
				'custom_padding' => array(
					'default' => '15px|15px|15px|15px|false|false',
				),
				'custom_margin'  => array(
					'default' => '0em|0em|2em|0em|false|false',
				),
			),
			'button'         => array(
				'button' => array(
					'label'          => et_builder_i18n( 'Button' ),
					'css'            => array(
						'main'      => '%%order_class%% .wc-forward',
						'important' => true,
					),
					'use_alignment'  => false,
					'border_width'   => array(
						'default' => '0px',
					),
					'box_shadow'     => array(
						'css' => array(
							'main' => '%%order_class%% .wc-forward',
						),
					),
					'margin_padding' => array(
						'css' => array(
							'important' => 'all',
						),
					),
				),
			),
			'text'           => array(
				'use_background_layout' => true,
				'css'                   => array(
					'main'        => '%%order_class%%',
					'text_shadow' => '%%order_class%%',
				),
				'options'               => array(
					'text_orientation'  => array(
						'default' => 'left',
					),
					'background_layout' => array(
						'default' => 'dark',
					),
				),
			),
			'text_shadow'    => array(
				// Don't add text-shadow fields since they already are via font-options.
				'default' => false,
			),
			'background'     => array(
				'css' => array(
					// Defined explicitly to solve
					// @see https://github.com/elegantthemes/Divi/issues/17200#issuecomment-542140907
					'main'      => '%%order_class%% .woocommerce-message',
					// Important is required to override
					// Appearance ⟶ Customize ⟶ Color schemes styles.
					'important' => 'all',
				),
			),
			'border'         => array(
				'css' => array(
					'important' => true,
				),
			),
		);

		$this->custom_css_fields = array(
			'text'   => array(
				'label'    => et_builder_i18n( 'Text' ),
				'selector' => '.woocommerce-message',
			),
			'button' => array(
				'label'    => et_builder_i18n( 'Button' ),
				'selector' => '.wc-forward',
			),
		);

		$this->help_videos = array(
			array(
				'id'   => '7X03vBPYJ1o',
				'name' => esc_html__( 'Divi WooCommerce Modules', 'et_builder' ),
			),
		);

		/*
		 * Disable default cart notice if needed. Priority need to be set at 100 to
		 * that the callback is being called after modules are being loaded.
		 *
		 * See: et_builder_load_framework()
		 */
		add_action(
			'wp',
			array(
				'ET_Builder_Module_Woocommerce_Cart_Notice',
				'disable_default_notice',
			),
			100
		);

		// Clear notices array which was modified during render.
		add_action( 'wp_footer', array( 'ET_Builder_Module_Woocommerce_Cart_Notice', 'clear_notices' ) );
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_fields() {
		$fields = array(
			'product'        => ET_Builder_Module_Helper_Woocommerce_Modules::get_field(
				'product',
				array(
					'default'          => ET_Builder_Module_Helper_Woocommerce_Modules::get_product_default(),
					'computed_affects' => array(
						'__cart_notice',
					),
				)
			),
			'product_filter' => ET_Builder_Module_Helper_Woocommerce_Modules::get_field(
				'product_filter',
				array(
					'computed_affects' => array(
						'__cart_notice',
					),
				)
			),
			'__cart_notice'  => array(
				'type'                => 'computed',
				'computed_callback'   => array(
					'ET_Builder_Module_Woocommerce_Cart_Notice',
					'get_cart_notice',
				),
				'computed_depends_on' => array(
					'product',
					'product_filter',
				),
				'computed_minumum'    => array(
					'product',
				),
			),
		);

		return $fields;
	}

	/**
	 * Disable default WooCommerce notice if current page's main query post content contains
	 * Cart Notice module to prevent duplicate cart notices being rendered AND to make Cart Notice
	 * module can render the notices correctly (notices are cleared once they are rendered)
	 *
	 * @since 3.29
	 */
	public static function disable_default_notice() {
		global $post;

		$remove_default_notices = false;
		$tb_layouts             = et_theme_builder_get_template_layouts();
		$tb_layout_types        = et_theme_builder_get_layout_post_types();

		// Check if a TB layout outputs the notices.
		foreach ( $tb_layout_types as $post_type ) {
			$id      = et_()->array_get( $tb_layouts, array( $post_type, 'id' ), 0 );
			$enabled = et_()->array_get( $tb_layouts, array( $post_type, 'enabled' ), 0 );

			if ( ! $id || ! $enabled ) {
				continue;
			}

			$content = get_post_field( 'post_content', $id );

			if ( has_shortcode( $content, 'et_pb_wc_cart_notice' ) ) {
				$remove_default_notices = true;
				break;
			}
		}

		// Check if the product itself outputs the notices.
		if ( isset( $post->post_content ) && has_shortcode( $post->post_content, 'et_pb_wc_cart_notice' ) ) {
			$remove_default_notices = true;
		}

		if ( $remove_default_notices ) {
			remove_action( 'woocommerce_before_single_product', 'woocommerce_output_all_notices', 10 );
		}
	}

	/**
	 * We update Woo Notices array during modules render and need to cleat it
	 * after Woo Product is fully rendered to avoid duplicated notifications on
	 * subsequent page loads.
	 */
	public static function clear_notices() {
		if ( ! empty( WC()->session ) ) {
			WC()->session->set( 'wc_notices', null );
		}
	}

	/**
	 * Gets the Cart notice markup.
	 *
	 * @param array $args Additional arguments.
	 *
	 * @return string
	 */
	public static function get_cart_notice( $args = array() ) {
		if ( et_fb_enabled() || et_fb_is_builder_ajax() || et_fb_is_computed_callback_ajax() ) {
			return et_builder_wc_render_module_template( 'wc_print_notice', $args );
		}

		return et_builder_wc_render_module_template( 'wc_print_notices', $args );
	}

	function get_button_classname() {
		return 'wc-forward';
	}

	/**
	 * Renders the module output.
	 *
	 * @param  array  $attrs       List of attributes.
	 * @param  string $content     Content being processed.
	 * @param  string $render_slug Slug of module that is used for rendering output.
	 *
	 * @return string
	 */
	public function render( $attrs, $content, $render_slug ) {
		/*
		 * In front end, do not print cart notice module if there is no notices exist.
		 *
		 * There is no custom style rendered below (to make sure that styles are correctly cached
		 * nevertheless), thus it is fine to exit early;
		 */
		if ( ! empty( WC()->session ) && empty( WC()->session->get( 'wc_notices', array() ) ) ) {
			return '';
		}

		ET_Builder_Module_Helper_Woocommerce_Modules::process_background_layout_data( $render_slug, $this );
		ET_Builder_Module_Helper_Woocommerce_Modules::process_custom_button_icons( $render_slug, $this );

		$this->add_classname( $this->get_text_orientation_classname() );

		$output = self::get_cart_notice( $this->props );

		return $this->_render_module_wrapper( $output, $render_slug );
	}
}

new ET_Builder_Module_Woocommerce_Cart_Notice();
