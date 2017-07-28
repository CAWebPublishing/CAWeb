<?php

// Administration Menu Setup
function menu_setup(){
  global $submenu;

  // Add CAWeb Options
	add_menu_page( 'CAWeb Options', 'CAWeb Options', 'manage_options', 'ca_options',
								'menu_option_setup',  sprintf('%1$s/images/system/caweb_logo.png', CAWebUri),  6  );
	add_submenu_page( 'ca_options','CAWeb Options', 'Settings','manage_options', 'ca_options', 'menu_option_setup' );

  // Remove Menus and re-add it under the newly created CAWeb Options as Navigation
	remove_submenu_page( 'themes.php', 'nav-menus.php');
  add_submenu_page( 'ca_options','Navigation', 'Navigation','manage_options', 'nav-menus.php', '' );

  // If user is not a Network Admin
	if( ! current_user_can('manage_network_options')){
    // Remove Themes, Customize and Background option under Appearance menu
    unset($submenu['themes.php'][5]); // Themes link
    unset($submenu['themes.php'][6]); // Customize link
    unset($submenu['themes.php'][20]); // Background link

		// Removal of Tools Submenu Pages
		remove_submenu_page('tools.php','tools.php');
		remove_submenu_page('tools.php','import.php');
		remove_submenu_page('tools.php', 'ms-delete-site.php');
		remove_submenu_page('tools.php', 'domainmapping');

		// Removal of Divi Submenu Pages
		remove_submenu_page('et_divi_options','et_divi_options');
		remove_submenu_page('et_divi_options','customize.php?et_customizer_option_set=theme');
		remove_submenu_page('et_divi_options','customize.php?et_customizer_option_set=module');
		remove_submenu_page('et_divi_options','et_divi_role_editor');
	}

  if(!is_multisite() || current_user_can('manage_network_options') ){
    	add_submenu_page( 'ca_options','CAWeb Options', 'API Key','manage_options', 'caweb_api', 'api_menu_option_setup' );
  }

}
add_action( 'admin_menu', 'menu_setup' );

// If direct access to certain menus is accessed
// redirect to admin page
function redirect_themes_page() {
	if( ! current_user_can('manage_network_options')){
		wp_redirect(get_admin_url());
		exit;
	}
}
add_action( 'load-customize.php', 'redirect_themes_page' );
add_action( 'load-themes.php', 'redirect_themes_page' );
add_action( 'load-tools.php', 'redirect_themes_page' );


// Administration Initialization
function admin_ca_init(){



}
add_action( 'admin_init', 'admin_ca_init' );

// Setup CAWeb Options Menu
function menu_option_setup(){
	// The actual menu file
	get_template_part('partials/content','options');

}

function save_caweb_options($values = array()){
  $site_options = get_ca_site_options();
 	$social_options = get_ca_social_extra_options();

  foreach($site_options as $opt){
   	if( !array_key_exists($opt, $values) )
      $values[$opt] = '';
  }

  unset($values['tab_selected']);
  unset($values['caweb_options_submit']);
  unset($values['caweb_username']);
  unset($values['caweb_password']);

  foreach($values as $opt => $val){
    	update_option($opt, $val);
  }

  foreach($social_options as $option){
    update_option($option, isset( $values[$option] ) ? true : false );
  }

}
// Setup CAWeb API Menu
function api_menu_option_setup(){

?>
<style>table td{padding-left: 0 !important; padding-top: 0 !important}</style>

<form id="ca-options-form" action="options.php" method="GET">
  <?php
settings_fields('ca_site_options');
?>
<div class="wrap">
  <h1>API Key</h1>
    <table class="form-table">
      <tr><td><p>Username</p><input type="text" name="caweb_username" size="50" value="<?= get_site_option('caweb_username', ''); ?>"></td></tr>
      <tr><td><p>Password</p><input type="password" name="caweb_password" size="50" value="<?= base64_encode(get_site_option('caweb_password', '')); ?>"></td></tr>
		</table>
  </div>
  <input type="submit" name="submit" id="submit" class="button button-primary" value="<?php _e('Save Changes') ?>" />
</form>
<?php
}

// Returns and array of all CAWeb Site Options
function get_all_ca_site_options($with_values = false){

	$ca_site_options = get_ca_site_options();

	$ca_social_options = array_merge(get_ca_social_options(), get_ca_social_extra_options());
	return array_merge($ca_site_options, $ca_social_options);

}

function update_caweb_owner_info( $old_value, $value,  $option){
  update_site_option($option, $value);
}
add_action('update_option_caweb_username', 'update_caweb_owner_info', 10, 3);
add_action('update_option_caweb_password', 'update_caweb_owner_info', 10, 3);

function update_caweb_owner_encoded_info( $value, $old_value, $option ){
   if(base64_decode($value) == $old_value){
   		return $old_value;
    }else{
        return $value;
    }
}
add_action('pre_update_option_caweb_password', 'update_caweb_owner_encoded_info', 10, 3);

// Returns and array of just the CA Site Options
function get_ca_site_options(){

	return array('caweb_username', 'caweb_password','ca_fav_ico', 'header_ca_branding', 'header_ca_branding_alignment',
				'header_ca_background', 'ca_default_navigation_menu', 'ca_google_search_id', 'ca_google_analytic_id',
				'ca_sticky_navigation', 'ca_site_color_scheme', 'ca_site_version', 'ca_frontpage_search_enabled',
				'ca_google_trans_enabled',  'ca_contact_us_link', 'ca_geo_locator_enabled', 'ca_menu_selector_enabled',
				'ca_google_meta_id', 'ca_custom_css','ca_home_nav_link', 'ca_default_post_title_display', 'ca_utility_home_icon', 'ca_utility_link_1',
				'ca_utility_link_2', 'ca_utility_link_3', 'ca_utility_link_1_name', 'ca_utility_link_2_name', 'ca_utility_link_3_name');
}

// Returns and array of all CA Social Options
function get_ca_social_options(){

	return array('Facebook' => 'ca_social_facebook', 'Twitter' => 'ca_social_twitter' , 'Google Plus' =>  'ca_social_google_plus', 'Email' => 'ca_social_email' ,
								'Flickr' => 'ca_social_flickr' , 'Pinterest' => 'ca_social_pinterest' , 'YouTube' => 'ca_social_youtube', 'Instagram' => 'ca_social_instagram',
               'LinkedIn' => 'ca_social_linkedin', 'RSS' => 'ca_social_rss');
}


// Returns and array of all CA Social Extra Options
function get_ca_social_extra_options(){

	$hold = get_ca_social_options();

	$tmp = array();

	foreach($hold as $social){
		$tmp[] = $social . '_header';
		$tmp[] = $social . '_footer';
	}
	return $tmp;

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
