<?php
/**
 * CAWeb Options Page
 * 
 * @package CAWeb
 */

$selected_tab = isset( $_POST['tab_selected'] ) || ! empty( $_POST['tab_selected'] ) ? $_POST['tab_selected'] : 'general';

// if saving
if ( isset( $_POST['caweb_submit'] ) ) {
	caweb_save_options( $_POST, $_FILES );
}

// State Template Version variables
$ver           = get_option( 'ca_site_version', 5 );
$legacy        = 4 == $ver ? '' : 'hidden';
$modern        = 5 <= $ver ? '' : 'hidden';
$legacySchemes = caweb_color_schemes( 4 );
$schemes       = caweb_color_schemes( 0, 'displayname' );

/*
 General Settings
*/
// Fav Icon
$fav_icon      = get_option( 'ca_fav_ico', caweb_default_favicon_url() );
$fav_icon_name = caweb_favicon_name();

// Header Menu
$navigation_menu = get_option( 'ca_default_navigation_menu', 'megadropdown' );

// Menu Type Selector
$navigation_menu_selector = get_option( 'ca_menu_selector_enabled', false );

// Color Scheme
$color_scheme = get_option( 'ca_site_color_scheme', 'oceanside' );

// Show Search on FrontPage
$frontpage_search_enabled = get_option( 'ca_frontpage_search_enabled', false ) ? ' checked="checked"' : '';

// Sticky Nav
$sticky_nav_enabled = get_option( 'ca_sticky_navigation', false ) ? ' checked="checked"' : '';

// Menu Home Link
$home_nav_link_enabled = get_option( 'ca_home_nav_link', true ) ? ' checked="checked"' : '';

// Title Display
$display_post_title = get_option( 'ca_default_post_title_display', false ) ? ' checked="checked"' : '';

// Display Date for Non Divi Posts
$display_post_date = get_option( 'ca_default_post_date_display', false ) ? ' checked="checked"' : '';

// Legacy Browser Support
$ua_compatibiliy = get_option( 'ca_x_ua_compatibility', false ) ? ' checked="checked"' : '';

/*
 Utility Header
*/
// Contact Us Page
$contact_us_link = get_option( 'ca_contact_us_link', '' );

// Geo Locator
$geo_locator_enabled = get_option( 'ca_geo_locator_enabled', false ) ? ' checked="checked"' : '';

// Utility Header Home Icon
$utility_header_home_icon = get_option( 'ca_utility_home_icon', true ) ? 'checked="checked"' : '';

// Custom Link Declarations are located at options/sections/utility-header.php

/*
 Page Header
*/
// Organization Logo
$org_logo          = get_option( 'header_ca_branding', '' );
$org_logo_filename = ! empty( $org_logo ) ? substr( $org_logo, strrpos( $org_logo, '/' ) + 1 ) : '';

// Organization Logo Alt Text
$org_logo_alt_text = '';
if ( ! empty( $org_logo ) ) {
	$org_logo_alt_text = ! empty( get_option( 'header_ca_branding_alt_text', '' ) ) ? get_option( 'header_ca_branding_alt_text' ) : caweb_get_attachment_post_meta( $org_logo, '_wp_attachment_image_alt' );
}

/*
 Google
*/
// Search ID
$google_search_id = get_option( 'ca_google_search_id', '' );

// Analytics ID
$google_analytic_id = get_option( 'ca_google_analytic_id', '' );

// Meta ID
$google_meta_id = get_option( 'ca_google_meta_id', '' );

// Translate
$google_translate_mode       = get_option( 'ca_google_trans_enabled', 'none' );
$google_translate_enabled    = 'custom' !== $google_translate_mode ? ' class="hidden"' : '';
$google_translate_page       = get_option( 'ca_google_trans_page', '' );
$google_translate_new_window = get_option( 'ca_google_trans_page_new_window', true ) ? ' checked="checked"' : '';
$google_translate_icon       = get_option( 'ca_google_trans_icon', 'globe' );

// Social Media Declarations are located at options/social-media.php

/*
 Custom CSS
*/
$ext_css_dir = sprintf( '%1$s/css/external/%2$s', CAWEB_URI, get_current_blog_id() );

// Upladed CSS
$ext_css = get_option( 'caweb_external_css', array() );

// Custom CSS
$custom_css = get_option( 'ca_custom_css', '' );
update_site_option( 'dev', $ext_css );
/*
 Custom JS
*/
$ext_js_dir = sprintf( '%1$s/js/external/%2$s', CAWEB_URI, get_current_blog_id() );

// Uploaded JS
$ext_js = get_option( 'caweb_external_js', array() );

// Custom JS
$custom_js = get_option( 'ca_custom_js', '' );

/*
 Alert Banners
*/
$alerts = get_option( 'caweb_alerts', array() );

/*
	Tab Selected
*/
$tab = isset( $_POST['tab_selected'] ) && ! empty( $_POST['tab_selected'] ) ? $_POST['tab_selected'] : 'general';

// Version 4 Options (slated for removal)
$header_branding_alignment           = get_option( 'header_ca_branding_alignment', 'left' );
$header_branding_background          = get_option( 'header_ca_background', '' );
$header_branding_background_filename = ! empty( $header_branding_background ) ? substr( $header_branding_background, strrpos( $header_branding_background, '/' ) + 1 ) : '';

/*
	Get User Profile Color
*/
$user_color = caweb_get_user_color()->colors[2];

?>
<style>
.menu-list li.list-group-item,
.menu-list li.list-group-item:hover {
	background-color: <?php print $user_color;?> !important;
}
.menu-list li.list-group-item:not(.selected) a {
	color: <?php print $user_color;?> !important;
}
</style>
<div class="container-fluid mt-4">
	<form id="caweb-options-form" action="<?php print admin_url( 'admin.php?page=caweb_options' ); ?>" method="POST" enctype="multipart/form-data">
	<input type="submit" name="caweb_options_submit" class="button button-primary mb-2" value="<?php _e( 'Save Changes' ); ?>">
	<div class="row">
		<ul class="menu-list list-group list-group-horizontal">
			<li class="list-group-item<?php print 'general' === $tab ? ' selected' : ''; ?>"><a href="#general" class="text-decoration-none text-white" data-toggle="collapse"<?php print 'general' === $tab ? ' aria-expanded="true"' : ''; ?>>General Settings</a></li>
			<li class="list-group-item<?php print 'social-share' === $tab ? ' selected' : ''; ?>"><a href="#social-share" class="text-decoration-none text-white" data-toggle="collapse"<?php print 'social-share' === $tab ? ' aria-expanded="true"' : ''; ?>>Social Media Links</a></li>
			<li class="list-group-item<?php print 'custom-css' === $tab ? ' selected' : ''; ?>"><a href="#custom-css" class="text-decoration-none text-white" data-toggle="collapse"<?php print 'custom-css' === $tab ? ' aria-expanded="true"' : ''; ?>>Custom CSS</a></li>
			<li class="list-group-item<?php print 'custom-js' === $tab ? ' selected' : ''; ?>"><a href="#custom-js" class="text-decoration-none text-white" data-toggle="collapse"<?php print 'custom-js' === $tab ? ' aria-expanded="true"' : ''; ?>>Custom JS</a></li>
			<li class="list-group-item<?php print 'alert-banners' === $tab ? ' selected' : ''; ?>"><a href="#alert-banners" class="text-decoration-none text-white" data-toggle="collapse"<?php print 'alert-banners' === $tab ? ' aria-expanded="true"' : ''; ?>>Alert Banners</a></li>
			<li class="list-group-item<?php print 'document-sitemap' === $tab ? ' selected' : ''; ?>"><a href="#document-sitemap" class="text-decoration-none text-white" data-toggle="collapse"<?php print 'document-sitemap' === $tab ? ' aria-expanded="true"' : ''; ?>>Document Map</a></li>
		</ul>
	</div>
	<div class="row pr-3">
		<div class="col-12 bg-white border pt-2" id="caweb-settings">
				<input type="hidden" id="tab_selected" name="tab_selected" value="<?php print $selected_tab; ?>">
					<?php require_once 'options/general.php'; ?>
					<?php require_once 'options/social-media.php'; ?>
					<?php require_once 'options/custom-css.php'; ?>
					<?php require_once 'options/custom-js.php'; ?>
					<?php require_once 'options/alert-banners.php'; ?>
					<?php require_once 'options/sitemap.php'; ?>
				<input type="hidden" name="caweb_submit" >
		</div>
	</div>
	<input type="submit" name="caweb_options_submit" class="button button-primary mt-2" value="<?php _e( 'Save Changes' ); ?>">
	</form>
</div>
