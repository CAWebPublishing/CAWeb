<?php
/*
Plugin Name: CAWeb Divi Module Extension
Plugin URI:  
Description: CAWeb Custom Divi Modules
Version:     1.0.0
Author:      Danny Guzman
Author URI:  
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: caweb-divi-module-extension
Domain Path: /languages

CAWeb Divi Module Extension is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

CAWeb Divi Module Extension is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with CAWeb Divi Module Extension. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

define('CAWEB_EXT_DIR', __DIR__ . '/' );
define('CAWEB_EXT_URL', site_url( preg_replace('/(.*)\/wp-content/', '/wp-content', CAWEB_EXT_DIR ) ) );

if ( ! function_exists( 'caweb_initialize_extension' ) ):
/**
 * Creates the extension's main class instance.
 *
 * @since 1.0.0
 */
function caweb_initialize_extension() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/CAWebExtension.php';
}
add_action( 'divi_extensions_init', 'caweb_initialize_extension' );
endif;
