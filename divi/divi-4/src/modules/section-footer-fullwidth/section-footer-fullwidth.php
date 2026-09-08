<?php
/**
 * CAWeb Section Footer Module (Fullwidth)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'CAWeb_Module_Section_Footer' ) ) {
	require_once dirname( __DIR__ ) . '/section-footer/section-footer.php';
}

/**
 * CAWeb Section Footer Module Class (Fullwidth)
 */
class CAWeb_Module_Fullwidth_Section_Footer extends CAWeb_Module_Section_Footer {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_fullwidth_section_footer';

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
		$this->name      = esc_html__( 'FullWidth Section - Footer', 'et_builder' );
		$this->fullwidth = true;
		parent::init();
	}
}
new CAWeb_Module_Fullwidth_Section_Footer();
