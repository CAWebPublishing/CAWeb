<?php
/**
 * CAWeb Divi Extension WP Ajax
 *
 * @see https://codex.wordpress.org/AJAX_in_Plugins
 * @package CAWebModuleExtension
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// add_action( 'wp_ajax_caweb_github_request_url', 'request_url' );
function request_url(){

   print 'something';

   wp_die();
   wp_die(); // this is required to terminate immediately and return a proper response.
}
