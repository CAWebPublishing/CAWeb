<?php
/**
 * CAWeb Section Carousel Slide Module (Fullwidth)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'CAWeb_Module_Section_Carousel_Slide' ) ) {
	require_once dirname( __DIR__ ) . '/section-carousel-slide/section-carousel-slide.php';
}

/**
 * CAWeb Section Carousel Slide Module Class (Fullwidth)
 */
class CAWeb_Module_Fullwidth_Section_Carousel_Slide extends CAWeb_Module_Section_Carousel_Slide {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_fullwidth_section_carousel_slide';
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
		$this->name      = esc_html__( 'Fullwidth Carousel Slide', 'et_builder' );
		$this->fullwidth = true;
	}
}
new CAWeb_Module_Fullwidth_Section_Carousel_Slide();
