<?php
/**
 * Main CAWeb Options File
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
		sprintf( '%1$s/images/system/caweb_logo.png', CAWEB_URI ),
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
 * Returns and array of just the CA Site Options
 *
 * @param  string  $group CAWeb group of options to retrieve.
 * @param  boolean $special Whether to include CAWeb special options.
 * @param  boolean $with_values Whether to include the options values.
 *
 * @return array
 */
function caweb_get_site_options( $group = '', $special = false, $with_values = false ) {
	$caweb_sanitized_options = array(
		'ca_utility_link_1_name',
		'ca_utility_link_2_name',
		'ca_utility_link_3_name',
		'ca_contact_us_link',
		'ca_utility_link_1',
		'ca_utility_link_2',
		'ca_utility_link_3',
	);

	$caweb_general_options = array(
		'ca_fav_ico',
		'ca_site_version',
		'ca_default_navigation_menu',
		'ca_menu_selector_enabled',
		'ca_site_color_scheme',
		'ca_frontpage_search_enabled',
		'ca_sticky_navigation',
		'ca_home_nav_link',
		'ca_default_post_title_display',
		'ca_default_post_date_display',
		'ca_x_ua_compatibility',
	);

	$caweb_utility_header_options = array(
		'ca_contact_us_link',
		'ca_geo_locator_enabled',
		'ca_utility_home_icon',
		'ca_utility_link_1',
		'ca_utility_link_1_name',
		'ca_utility_link_1_new_window',
		'ca_utility_link_1_enable',
		'ca_utility_link_2',
		'ca_utility_link_2_name',
		'ca_utility_link_2_new_window',
		'ca_utility_link_2_enable',
		'ca_utility_link_3',
		'ca_utility_link_3_name',
		'ca_utility_link_3_new_window',
		'ca_utility_link_3_enable',
	);

	$caweb_page_header_options = array( 'header_ca_branding', 'header_ca_branding_alt_text', 'header_ca_branding_alignment', 'header_ca_background' );

	$caweb_google_options = array(
		'ca_google_search_id',
		'ca_google_analytic_id',
		'ca_google_meta_id',
		'ca_google_trans_enabled',
		'ca_google_trans_page',
		'ca_google_trans_icon',
		'ca_google_trans_page_new_window',
	);

	$caweb_social_options = array(
		'Facebook'        => 'ca_social_facebook',
		'Twitter'         => 'ca_social_twitter',
		'Google Plus'     => 'ca_social_google_plus',
		'Email'           => 'ca_social_email',
		'Flickr'          => 'ca_social_flickr',
		'Pinterest'       => 'ca_social_pinterest',
		'YouTube'         => 'ca_social_youtube',
		'Instagram'       => 'ca_social_instagram',
		'LinkedIn'        => 'ca_social_linkedin',
		'RSS'             => 'ca_social_rss',
		'Snapchat'        => 'ca_social_snapchat',
	);

	$caweb_social_extra_options = array();

	foreach ( $caweb_social_options as $social ) {
		$caweb_social_extra_options[] = $social . '_header';
		$caweb_social_extra_options[] = $social . '_footer';
		if ( 'ca_social_email' !== $social ) {
			$caweb_social_extra_options[] = $social . '_new_window';
		}
	}

	$caweb_misc_options = array( 'caweb_external_css', 'ca_custom_css', 'caweb_external_js', 'ca_custom_js' );

	$caweb_special_options = array( 'caweb_username', 'caweb_password', 'caweb_multi_ga' );

	$caweb_alert_options = array( 'caweb_alerts' );

	switch ( $group ) {
		case 'general':
			$output = $caweb_general_options;

			break;
		case 'utility_header':
			$output = $caweb_utility_header_options;

			break;
		case 'page_header':
			$output = $caweb_page_header_options;

			break;
		case 'google':
			$output = $caweb_google_options;

			break;
		case 'social':
			$output = $caweb_social_options;

			break;
		case 'social-extra':
			$output = $caweb_social_extra_options;

			break;
		case 'social-all':
			$output = array_merge( $caweb_social_options, $caweb_social_extra_options );

			break;
		case 'misc':
			$output = $caweb_misc_options;

			break;
		case 'special':
			$output = $caweb_special_options;

			break;
		case 'sanitized':
			$output = $caweb_sanitized_options;

			break;
		case 'alerts':
			$output = $caweb_alert_options;
			break;
		default:
			$output = array_merge(
				$caweb_general_options,
				$caweb_utility_header_options,
				$caweb_page_header_options,
				$caweb_google_options,
				$caweb_social_options,
				$caweb_social_extra_options,
				$caweb_misc_options,
				$caweb_alert_options
			);

			break;
	}

	if ( $special ) {
		array_merge( $output, $caweb_special_options );
	}

	return $output;
}

/**
 * Default CAWeb fav ico URL
 *
 * @return URI
 */
function caweb_default_favicon_url() {
	return site_url( 'wp-content/themes/CAWeb/images/system/favicon.ico' );
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
