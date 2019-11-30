<?php
/**
 * Main options file
 *
 * @package CAWeb
 */

add_action( 'admin_menu', 'caweb_admin_menu', 15 );

/**
 * CAWeb Administration Menu Setup
 * Fires before the administration menu loads in the admin.
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_menu/
 * @return void
 */
function caweb_admin_menu() {
	global $submenu;

	/* Add CAWeb Options */
	add_menu_page(
		'CAWeb Options',
		'CAWeb Options',
		'manage_options',
		'caweb_options',
		'caweb_option_page',
		sprintf( '%1$s/assets/imgs/system/caweb_logo.png', CAWEB_URI ),
		6
	);
	add_submenu_page( 'caweb_options', 'CAWeb Options', 'Settings', 'manage_options', 'caweb_options', 'caweb_option_page' );

	/* Remove Menus and re-add it under the newly created CAWeb Options as Navigation */
	remove_submenu_page( 'themes.php', 'nav-menus.php' );
	add_submenu_page( 'caweb_options', 'Navigation', 'Navigation', 'manage_options', 'nav-menus.php', '' );

	/* If Multisite instance */
	if ( is_multisite() ) {

		/* If user is not a Network Admin */
		if ( ! current_user_can( 'manage_network_options' ) ) {
			/* Remove Themes and Background option under Appearance menu */
			if ( isset( $submenu['themes.php'] ) ) {
				foreach ( $submenu['themes.php'] as $m => $menu_data ) {
					if ( 'Background' === $menu_data[0] || preg_match( '/\bthemes.php\b|\bcustom-background\b/', $menu_data[2] ) ) {
						unset( $submenu['themes.php'][ $m ] );
					}
				}
			}

			/* Remove WP-Forms Addons Menus */
			remove_submenu_page( 'wpforms-overview', 'wpforms-addons' );

			/* Removal of Tools Submenu Pages */
			remove_submenu_page( 'tools.php', 'tools.php' );
			remove_submenu_page( 'tools.php', 'import.php' );
			remove_submenu_page( 'tools.php', 'ms-delete-site.php' );
			remove_submenu_page( 'tools.php', 'domainmapping' );

			/* Removal of Divi Submenu Pages */
			remove_submenu_page( 'et_divi_options', 'et_divi_options' );
			remove_submenu_page( 'et_divi_options', 'et_theme_builder' );
			remove_submenu_page( 'et_divi_options', 'customize.php?et_customizer_option_set=theme' );
			remove_submenu_page( 'et_divi_options', 'customize.php?et_customizer_option_set=module' );
			remove_submenu_page( 'et_divi_options', 'et_divi_role_editor' );

			/* Else user is a Network Admin */
		} else {
			/* If on root site */
			if ( 1 === get_current_blog_id() ) {
				/* Multisite Google Analytics */
				add_submenu_page( 'caweb_options', 'CAWeb Options', 'Multisite GA', 'manage_options', 'caweb_multi_ga', 'caweb_multi_ga_menu_option_setup' );
				/* GitHub API Key */
				add_submenu_page( 'caweb_options', 'CAWeb Options', 'GitHub API Key', 'manage_options', 'caweb_api', 'caweb_api_menu_option_setup' );
			}
		}
		/* Else single site instance */
	} else {
		/* GitHub API Key */
		add_submenu_page( 'caweb_options', 'CAWeb Options', 'GitHub API Key', 'manage_options', 'caweb_api', 'caweb_api_menu_option_setup' );
	}

}

/**
 * Setup CAWeb Options Menu
 *
 * @return void
 */
function caweb_option_page() {

	/* The actual menu file */
	get_template_part( 'partials/content-options' );
	/* get_template_part( 'partials/options' ); */
}

/**
 * Default CAWeb fav ico URL
 *
 * @return URI
 */
function caweb_default_favicon_url() {
	return site_url( 'wp-content/themes/CAWeb/assets/imgs/system/favicon.ico' );
}


/**
 * Retrieve CAWeb fav icon filename
 *
 * @return string
 */
function caweb_favicon_name() {
	$option = get_option( 'ca_fav_ico', caweb_default_favicon_url() );

	return preg_replace( '/(.*\.ico)(.*)/', '$1', substr( $option, strrpos( $option, '/' ) + 1 ) );
}
