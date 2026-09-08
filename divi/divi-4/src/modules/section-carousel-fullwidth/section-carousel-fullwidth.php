<?php
/**
 * CAWeb Section Carousel Module Class (Fullwidth)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'CAWeb_Module_Section_Carousel' ) ) {
	require_once dirname( __DIR__ ) . '/section-carousel/section-carousel.php';
}

/**
 * CAWeb Section Carousel Module Class (Fullwidth)
 */
class CAWeb_Module_Fullwidth_Section_Carousel extends CAWeb_Module_Section_Carousel {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_fullwidth_section_carousel';

	/**
	 * Even tho we dont support the Visual Builder Support
	 * we dont' want the warning message that the module doesn't support the Visual Builder, so we set this to on.
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

	}

}
new CAWeb_Module_Fullwidth_Section_Carousel();
