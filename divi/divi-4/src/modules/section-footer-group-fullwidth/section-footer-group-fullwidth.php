<?php
/**
 * CAWeb Section Footer Group Module (Fullwidth)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'CAWeb_Module_Footer_Group' ) ) {
	require_once dirname( __DIR__ ) . '/section-footer-group/section-footer-group.php';
}

/**
 * CAWeb Section Footer Group Module Class (Fullwidth)
 */
class CAWeb_Module_FullWidth_Footer_Group extends CAWeb_Module_Footer_Group {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_section_fullwidth_footer_group';

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
		$this->name      = esc_html__( 'FullWidth Footer Group', 'et_builder' );
		$this->fullwidth = true;
		parent::init();
	}

}
new CAWeb_Module_FullWidth_Footer_Group();
