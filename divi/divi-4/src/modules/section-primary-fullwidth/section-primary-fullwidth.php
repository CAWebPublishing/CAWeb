<?php
/**
 * CAWeb Section Primary Module (Fullwidth )
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'CAWeb_Module_Section_Primary' ) ) {
	require_once dirname( __DIR__ ) . '/section-primary/section-primary.php';
}

/**
 * CAWeb Section Primary Module Class (Fullwidth )
 */
class CAWeb_Module_Fullwidth_Section_Primary extends CAWeb_Module_Section_Primary {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_fullwidth_section_primary';
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
		$this->name             = esc_html__( 'Fullwidth Section - Primary', 'caweb' );
		$this->fullwidth = true;
		parent::init();
	}

	public function get_fields() {
		return parent::get_fields();
	}

	
	/**
	 * Get wrapper settings. Combining module-defined wrapper settings with default wrapper settings
	 *
	 * @since 3.1
	 *
	 * @param string $render_slug module slug.
	 *
	 * @return array
	 */
	protected function get_wrapper_settings( $render_slug = '' ) {
		return parent::get_wrapper_settings( $render_slug );
	}
}

new CAWeb_Module_Fullwidth_Section_Primary();