<?php
/**
 * CAWeb Section Carousel Module Class (Standard)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

/**
 * CAWeb Section Carousel Module Class (Standard)
 */
class CAWeb_Module_Section_Carousel extends ET_Builder_CAWeb_Module {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_section_carousel';
	/**
	 * Visual Builder Support
	 *
	 * @var string Whether or not this module supports Divi's Visual Builder.
	 */
	public $vb_support = 'on';

	/**
	 * Module Initialization
	 *
	 * @return void
	 */
	public function init() {
		$this->name = esc_html__( 'Section - Carousel', 'et_builder' );

		$this->child_slug      = 'et_pb_ca_section_carousel_slide';
		$this->child_item_text = esc_html__( 'Slide', 'et_builder' );

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'style' => esc_html__( 'Style', 'et_builder' ),
					'panel' => esc_html__( 'Panel', 'et_builder' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'style' => esc_html__( 'Style', 'et_builder' ),
					'text'  => array(
						'title'    => esc_html__( 'Text', 'et_builder' ),
						'priority' => 49,
					),
				),
			),
		);

	}

	/**
	 * Returns an array of all the Module Fields.
	 *
	 * @return array
	 */
	public function get_fields() {
		$general_fields = array(
			'carousel_style' => array(
				'label'           => esc_html__( 'Style', 'et_builder' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => array(
					'content_fit' => esc_html__( 'Content Fit', 'et_builder' ),
					'image_fit'   => esc_html__( 'Image Fit', 'et_builder' ),
					'media'       => esc_html__( 'Media', 'et_builder' ),
				),
				'default'         => 'content_fit',
				'tab_slug'        => 'general',
				'toggle_slug'     => 'style',
			),
			'slide_amount' => array(
				'label'           => esc_html__( 'Viewable Display Amount', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the amount of slides to display at one time.', 'et_builder' ),
				'default'         => 4,
				'show_if'         => array( 'carousel_style' => 'media' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'style',
			),
			'in_panel' => array(
				'label'           => esc_html__( 'Display in Panel', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'default'         => 'off',
				'show_if'         => array( 'carousel_style' => 'media' ),
				'description'     => 'Choose whether to display this carousel inside of a panel',
				'tab_slug'        => 'general',
				'toggle_slug'     => 'style',
			),
			'panel_title' => array(
				'label'           => esc_html__( 'Heading', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a Heading Title.', 'et_builder' ),
				'show_if'         => array(
					'carousel_style' => 'media',
					'in_panel'       => 'on',
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'panel',
			),
			'panel_layout' => array(
				'label'             => esc_html__( 'Style', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'default'            => esc_html__( 'Default', 'et_builder' ),
					'standout'           => esc_html__( 'Standout', 'et_builder' ),
					'standout highlight' => esc_html__( 'Standout Highlight', 'et_builder' ),
					'overstated'         => esc_html__( 'Overstated', 'et_builder' ),
					'understated'        => esc_html__( 'Understated', 'et_builder' ),
				),
				'description'       => esc_html__( 'Here you can choose the style of panel to display', 'et_builder' ),
				'show_if'           => array(
					'carousel_style' => 'media',
					'in_panel'       => 'on',
				),
				'default'           => 'default',
				'tab_slug'          => 'general',
				'toggle_slug'       => 'panel',
			),
			'panel_show_button' => array(
				'label'           => esc_html__( 'Read More Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'show_if'         => array(
					'carousel_style' => 'media',
					'in_panel'       => 'on',
				),
				'description'     => esc_html__( 'Here you can select to display a button.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'panel',
			),
			'panel_button_text' => array(
				'label'           => esc_html__( 'Button Text', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the Text for the button.', 'et_builder' ),
				'show_if'         => array(
					'carousel_style'    => 'media',
					'in_panel'          => 'on',
					'panel_show_button' => 'on',
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'panel',
			),
			'panel_button_link' => array(
				'label'           => esc_html__( 'Button URL', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the URL for the button.', 'et_builder' ),
				'show_if'         => array(
					'carousel_style'    => 'media',
					'in_panel'          => 'on',
					'panel_show_button' => 'on',
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'panel',
			),
		);

		$design_fields = array(
			'panel_heading_size' => array(
				'label'             => esc_html__( 'Heading Size', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => $this->caweb_get_text_sizes( array( 'p', 'h6' ) ),
				'default'           => 'h4',
				'show_if'           => array(
					'carousel_style' => 'media',
					'in_panel'       => 'on',
				),
				'description'       => esc_html__( 'Here you can choose the heading size for the panel title.', 'et_builder' ),
				'tab_slug'          => 'advanced',
				'toggle_slug'       => 'header',
			),
			'section_background_color' => array(
				'label'             => esc_html__( 'Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
				'tab_slug'          => 'advanced',
				'toggle_slug'       => 'style',
			),
		);

		$advanced_fields = array();

		return array_merge( $general_fields, $design_fields, $advanced_fields );
	}

	/**
	 * Before rendering set the global $et_pb_ca_section_carousel_style
	 *
	 * @return void
	 */
	public function before_render() {
		global $et_pb_ca_section_carousel_style;

		$et_pb_ca_section_carousel_style = $this->props['carousel_style'];
	}

	/**
	 * Renders the Module on the frontend
	 *
	 * @param  mixed $unprocessed_props Module Props before processing.
	 * @param  mixed $content Module Content.
	 * @param  mixed $render_slug Module Slug Name.
	 * @return string
	 */
	public function render( $unprocessed_props, $content, $render_slug ) {
		$carousel_style = $this->props['carousel_style'];
		$in_panel       = $this->props['in_panel'];
		$panel_layout   = $this->props['panel_layout'];

		$section_bg_color = $this->props['section_background_color'];

		$content = $this->content;

		$section_bg_color = ! empty( $section_bg_color ) ? sprintf( ' style="background: %1$s;" ', $section_bg_color ) : '';
		global $et_pb_slider_item_num;

		$module_id = ! empty( $this->module_id(false) ) ? $this->module_id(false) : $this->slug . '-0';

		$controls = sprintf('<button class="carousel-control-prev" type="button" data-bs-target="#%1$s" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#%1$s" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>', $module_id);

		$indicators = '';
		
		for($i = 0; $i < $et_pb_slider_item_num; $i++ ){
			$indicators .= sprintf('<button type="button" data-bs-target="#%1$s" data-bs-slide-to="%2$s" aria-label="Slide %2$s"%3$s></button>', 
				$module_id, $i, ! $i ? 'class="active" aria-current="true"' : '' );

		}

		if( ! empty( $indicators ) ){
			$indicators = sprintf('<div class="carousel-indicators">%1$s</div>', $indicators);
		}

		$this->add_classname( $carousel_style );
		$this->add_classname( 'carousel slide' );
		$class = sprintf( ' class="%1$s" ', $this->module_classname( $render_slug ) );

		$output = sprintf( '<div id="%1$s"%2$s%3$s>%4$s%5$s%6$s</div>', $module_id, $class, $section_bg_color, $indicators, $this->renderCarousel( $carousel_style ), $controls  );

		return $output;
	}

	/**
	 * Renders the carousel with the appropriate style
	 *
	 * @param  mixed $style Carousel style, media or content.
	 * @return string
	 */
	public function renderCarousel( $style ) {
		return sprintf( '<div class="carousel-inner">%1$s</div>', $this->content );
	}

}
new CAWeb_Module_Section_Carousel();
