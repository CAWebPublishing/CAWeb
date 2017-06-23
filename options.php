<?php

// Administration Menu Setup
function menu_setup(){
  // Add CAWeb Options
	add_menu_page( 'CAWeb Options', 'CAWeb Options', 'manage_options', 'ca_options',
								'menu_option_setup',  sprintf('%1$s/images/system/caweb_logo.png', CAWebUri),  6  );
	add_submenu_page( 'ca_options','CAWeb Options', 'Settings','manage_options', 'ca_options', 'menu_option_setup' );

  // Remove Menus and re-add it under the newly created CAWeb Options as Navigation
	remove_submenu_page( 'themes.php', 'nav-menus.php');
	add_submenu_page( 'ca_options','Navigation', 'Navigation','manage_options', 'nav-menus.php', '' );

  // If user is not a Network Admin
	if( ! current_user_can('manage_network_options')){
		// Remove Themes Menu
		remove_menu_page('themes.php');

		// Removal of Tools Submenu Pages
		remove_submenu_page('tools.php','tools.php');
		remove_submenu_page('tools.php','import.php');
		remove_submenu_page('tools.php', 'ms-delete-site.php');
		remove_submenu_page('tools.php', 'domainmapping');
		remove_submenu_page('tools.php', 'php-compatibility-checker');

		// Removal of Divi Submenu Pages
		remove_submenu_page('et_divi_options','et_divi_options');
		remove_submenu_page('et_divi_options','customize.php?et_customizer_option_set=theme');
		remove_submenu_page('et_divi_options','customize.php?et_customizer_option_set=module');
		remove_submenu_page('et_divi_options','et_divi_role_editor');
	}

}
add_action( 'admin_menu', 'menu_setup' );

// If direct access to certain menus is accessed
// redirect to admin page
function redirect_themes_page() {
	if( ! current_user_can('manage_options')){
		wp_redirect(get_admin_url());
		exit;
	}
}
add_action( 'load-themes.php', 'redirect_themes_page' );
add_action( 'load-tools.php', 'redirect_themes_page' );


// Administration Initialization
function admin_ca_init(){
	ca_register_settings();


}
add_action( 'admin_init', 'admin_ca_init' );

// Setup CA Options Menu
function menu_option_setup(){
	// The actual menu file
	get_template_part('partials/content','options');

}

// Returns and array of all CA Site Options
function get_all_ca_site_options($with_values = false){

	$ca_site_options = get_ca_site_options();

	$ca_social_options = array_merge(get_ca_social_options(), get_ca_social_extra_options());
	return array_merge($ca_site_options, $ca_social_options);

}

// Returns and array of just the CA Site Options
function get_ca_site_options(){

	return array('caweb_initialized', 'ca_fav_ico', 'header_ca_branding', 'header_ca_branding_alignment',
				'header_ca_background', 'ca_default_navigation_menu', 'ca_google_search_id', 'ca_google_analytic_id',
				'ca_sticky_navigation', 'ca_site_color_scheme', 'ca_site_version', 'ca_frontpage_search_enabled',
				'ca_google_trans_enabled',  'ca_contact_us_link', 'ca_geo_locator_enabled', 'ca_menu_selector_enabled',
				'ca_google_meta_id', 'ca_custom_css','ca_home_nav_link', 'ca_utility_home_icon', 'ca_utility_link_1',
				'ca_utility_link_2', 'ca_utility_link_3', 'ca_utility_link_1_name', 'ca_utility_link_2_name', 'ca_utility_link_3_name');
}

// Returns and array of all CA Social Options
function get_ca_social_options(){

	return array('ca_social_facebook', 'ca_social_twitter' ,  'ca_social_google_plus', 'ca_social_email' ,
		'ca_social_flickr' , 'ca_social_pinterest' , 'ca_social_youtube', 'ca_social_instagram', 'ca_social_linkedin', 'ca_social_rss');
}


// Returns and array of all CA Social Extra Options
function get_ca_social_extra_options(){

	$hold = get_ca_social_options();

	$tmp = array();

	foreach($hold as $social){

		array_push($tmp, $social . '_header');

		array_push($tmp, $social . '_footer');

	}
	return $tmp;

}

// Registers all site settings under
// Global Group Name = 'ca_site_options'
function ca_register_settings(){

	$all_ca_options = get_all_ca_site_options();

	foreach($all_ca_options as $option){
		register_setting( 'ca_site_options', $option);
	}

	// enable admin notices for CAWeb Options
	settings_errors('ca_options');

	// If first time settings have been registered, initialize defaults
	if("" == get_option('caweb_initialized') ){
			update_option('caweb_initialized', true);

			// Some settings may have already been set from a previous version
			if("" == get_option('ca_site_version'))
			 		update_option('ca_site_version', 5) ;

			if("" == get_option('ca_fav_ico'))
			 		update_option('ca_fav_ico', CAWebUri . '/images/system/favicon.ico') ;

			if("" == get_option('ca_site_color_scheme'))
			 		update_option('ca_site_color_scheme', 'oceanside');

	}

	// Remove the Breadcrumbs option if it had been initialized prior to v1.0.2a
	delete_option( 'ca_breadcrumbs_enabled' );

	delete_option ('caweb_intranet_enabled');


}

// admin message hook
function caweb_option_notices(){


	// if on the caweb options page and update is made
	if ( ( isset($_GET['page']) && isset($_GET['settings-updated']) ) ){
			if ( ( "ca_options" == $_GET['page']  &&  true == $_GET['settings-updated'] ) ){
			print '<div class="updated notice is-dismissible"><p><strong>CAWeb Options</strong> have been updated.</p><button type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></button></div>';
		}
	}

}
add_action('admin_notices', 'caweb_option_notices');
/*
	Check the Binary Signature of a file
	currently only checking for icon 

	Living Standard on Mime Sniffing
	https://mimesniff.spec.whatwg.org/#image-type-pattern-matching-algorithm

	File checker
	http://asecuritysite.com/forensics/ico
*/
function caweb_fav_icon_checker(){
	$url = $_POST['icon_url'];
	
	$handle = rawurlencode( file_get_contents( $url ) ) ; 
	$handle = array_splice( array_filter( explode('%',  $handle) ), 0, 4);
	$handle = implode("", $handle);
	
	if("00000100" == $handle)
		print true;
	
	print false ;	
	wp_die(); // this is required to terminate immediately and return a proper response
}
add_action('wp_ajax_caweb_fav_icon_check', 'caweb_fav_icon_checker');
?>
