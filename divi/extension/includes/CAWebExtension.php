<?php

class CAWEB_Module_Extension extends DiviExtension {

	/**
	 * The gettext domain for the extension's translations.
	 *
	 * @since 1.0.0
	 *
	 * @var string
	 */
	public $gettext_domain = 'caweb-module-extension';

	/**
	 * The extension's WP Plugin name.
	 *
	 * @since 1.0.0
	 *
	 * @var string
	 */
	public $name = 'caweb-module-extension';

	/**
	 * The extension's version
	 *
	 * @since 1.0.0
	 *
	 * @var string
	 */
	public $version = '1.0.0';

	/**
	 * CAWEB_Module_Extension constructor.
	 *
	 * @param string $name
	 * @param array  $args
	 */
	public function __construct( $name = 'caweb-module-extension', $args = array() ) {
		//$this->plugin_dir     = plugin_dir_path( __FILE__ );
		//$this->plugin_dir_url = plugin_dir_url( $this->plugin_dir );
		$this->plugin_dir     = CAWEB_EXT_DIR . 'includes/';
		$this->plugin_dir_url = CAWEB_EXT_URL;

		parent::__construct( $name, $args );
	}
}

new CAWEB_Module_Extension;
