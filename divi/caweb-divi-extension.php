<?php
/*
Plugin Name: CAWeb Divi Extension: Modules
Plugin URI:
Description: CAWeb Modules 
Version:     1.0.0
Author:      CAWebPublishing
Author URI:  https://github.com/Danny-Guzman/caweb-divi-extension/
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: caweb-divi-extension
Domain Path: /languages

CAWeb Divi Extension is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

CAWeb Divi Extension is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with D5 Module Extension Example. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// Setup constants.
define( 'CAWEB_DIVI_EXT_DIR', str_replace( '\\', '/', __DIR__ . '/' ) );
define( 'CAWEB_DIVI_EXT_URL', site_url( preg_replace( '/(.*)\/wp-content/', '/wp-content', CAWEB_DIVI_EXT_DIR ) ) );
define( 'CAWEB_DIVI_EXT_MODULES_JSON_PATH', CAWEB_DIVI_EXT_DIR . 'src/modules/' );

/** Divi 5 Actions */
add_action( 'divi_visual_builder_assets_before_enqueue_scripts', 'caweb_divi_extension_module_enqueue_vb_scripts' );

/**
 * Requires Autoloader.
 */
require CAWEB_DIVI_EXT_DIR . 'vendor/autoload.php';
require CAWEB_DIVI_EXT_DIR . 'build/modules/modules.php';

/**
 * Enqueue style and scripts of Module Extension Example for Visual Builder.
 *
 * @since ??
 */
function caweb_divi_extension_module_enqueue_vb_scripts() {
	if ( et_builder_d5_enabled() && et_core_is_fb_enabled() ) {

		\ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
			[
				'name'   => 'caweb-divi-extension-modules-builder-bundle-script',
				'version' => '1.0.0',
				'script' => [
					'src' => CAWEB_DIVI_EXT_URL . "build/bundle.js",
					'deps'               => [
						'wp-hooks',
						'wp-i18n',
						'wp-element',
						'lodash',
						'jquery',
						'react',
						'react-dom',
						'divi-vendor-wp-hooks',
						'divi-rest',
						'divi-data',
						'divi-module',
						'divi-module-utils',
						'divi-modal',
						'divi-field-library',
						'divi-icon-library',
						'divi-module-library',
						'divi-style-library',
						'divi-shortcode-module'
					],
					'enqueue_top_window' => false,
					'enqueue_app_window' => true,
				],
			]
		);

		\ET\Builder\VisualBuilder\Assets\PackageBuildManager::register_package_build(
			[
				'name'   => 'caweb-divi-extension-modules-builder-vb-bundle-style',
				'version' => '1.0.0',
				'style' => [
					'src' => CAWEB_DIVI_EXT_URL . "build/admin.css",
					'deps'               => [],
					'enqueue_top_window' => true,
					'enqueue_app_window' => false,
				],
			]
		);
	}
}

// Load Divi 4 modules.
require_once CAWEB_DIVI_EXT_DIR . 'divi-4/divi-4.php';
