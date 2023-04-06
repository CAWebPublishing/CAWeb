<?php
/**
 * CAWeb Navigation Menu Class
 *
 * @see https://developer.wordpress.org/reference/classes/walker_nav_menu/
 * @see https://core.trac.wordpress.org/browser/tags/5.3/src/wp-includes/class-walker-nav-menu.php
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_filter( 'wp_nav_menu', 'caweb_nav_menu', 10, 2 );

/**
 * Filters the HTML content for navigation menus.
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_nav_menu/
 * @param  string   $nav_menu The HTML content for the navigation menu.
 * @param  stdClass $args An object containing wp_nav_menu() arguments.
 *
 * @return void
 */
function caweb_nav_menu( $nav_menu, $args ) {

	/* Menu Construction */
	if ( ! empty( $args->menu ) && isset( $args->caweb_theme_location ) ) {

		$template_version = isset( $args->caweb_template_version ) ? $args->caweb_template_version : caweb_template_version();

		$nav_type = isset( $args->caweb_nav_type ) ? $args->caweb_nav_type : get_option( 'ca_default_navigation_menu', 'singlelevel' );

		if ( 'header-menu' === $args->caweb_theme_location ) {
			get_template_part( "parts/$template_version/nav", $nav_type, $args );
		} elseif ( 'footer-menu' === $args->caweb_theme_location ) {
			// get_template_part( "parts/$template_version/nav", $nav_type, $args );
		}
	}

}
