<?php

// Administration Menu Setup
function menu_setup(){
	global $menu;
	global $submenu;


  // Add CAWeb Options
	add_menu_page( 'Theme Options', 'CAWeb Options', 'publish_pages', 'ca_options', 'menu_option_setup',  '',  6 );

  // Remove Menus and re-add it under the newly created CAWeb Options as Navigation
	remove_submenu_page( 'themes.php', 'nav-menus.php');
	add_submenu_page( 'ca_options','Navigation', 'Navigation','publish_pages', 'nav-menus.php', '' );

  // Remove Widgets Menu
  remove_submenu_page('themes.php',  'widgets.php');

  unset($submenu['themes.php'][6]);
  unset($submenu['themes.php'][20]);
  //remove_custom_background();

  $menu[60][0] = 'Themes';

}
add_action( 'admin_menu', 'menu_setup' );


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
							'ca_breadcrumbs_enabled', 'ca_google_trans_enabled',  'ca_contact_us_link', 'ca_geo_locator_enabled',
							'ca_google_meta_id');
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

}

?>
