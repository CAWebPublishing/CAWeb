<?php
/**
 * CAWeb Section Carousel Module Class (Fullwidth)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

/**
 * CAWeb Section Carousel Module Class (Fullwidth)
 */
class CAWeb_Module_Fullwidth_Section_Carousel extends ET_Builder_CAWeb_Module {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_fullwidth_section_carousel';
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
		$this->name      = esc_html__( 'Fullwidth Section - Carousel', 'et_builder' );
		$this->fullwidth = true;

		$this->child_slug      = 'et_pb_ca_fullwidth_section_carousel_slide';
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
		$general_fields = array();

		$design_fields = array(
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
	 * Renders the Module on the frontend
	 *
	 * @param  mixed $unprocessed_props Module Props before processing.
	 * @param  mixed $content Module Content.
	 * @param  mixed $render_slug Module Slug Name.
	 * @return string
	 */
	public function render( $unprocessed_props, $content, $render_slug ) {
		$section_bg_color = $this->props['section_background_color'];

		global $et_pb_fullwidth_slider_item_num;

		$module_id = ! empty( $this->module_id(false) ) ? $this->module_id(false) : self::get_module_order_class( $render_slug );

		$this->add_classname( 'carousel slide' );

		if( ! empty( $section_bg_color ) ){
			$section_bg_color =  sprintf( ' style="background: %1$s;" ', $section_bg_color );
			$this->add_classname( 'p-5' );
		}

		$controls = sprintf('<button class="carousel-control-prev" type="button" data-bs-target="#%1$s" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#%1$s" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>', $module_id);

		$indicators = '';
		
		for($i = 0; $i < $et_pb_fullwidth_slider_item_num; $i++ ){
			$indicators .= sprintf('<button type="button" data-bs-target="#%1$s" data-bs-slide-to="%2$s" aria-label="Slide %2$s"%3$s></button>', 
				$module_id, $i, ! $i ? 'class="active" aria-current="true"' : '' );

		}

		if( ! empty( $indicators ) ){
			$indicators = sprintf('<div class="carousel-indicators">%1$s</div>', $indicators);
		}

		$class = sprintf( ' class="%1$s" ', $this->module_classname( $render_slug ) );

		$output = sprintf( '<div id="%1$s"%2$s%3$s>%4$s<div class="carousel-inner">%5$s</div>%6$s</div>', $module_id, $class, $section_bg_color, $indicators, $this->content, $controls  );

		$et_pb_fullwidth_slider_item_num = 0;
		
		return $output;
	}

}
new CAWeb_Module_Fullwidth_Section_Carousel();
