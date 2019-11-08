<?php
// This is the CAWeb Options Page

$selected_tab = isset($_POST['tab_selected']) || ! empty($_POST['tab_selected']) ? $_POST['tab_selected'] : 'general';

// if saving
if (isset($_POST['caweb_submit'])) {
    caweb_save_options($_POST, $_FILES);
}

// State Template Version variables
$ver = get_option('ca_site_version', 5);
$legacy = 4 == $ver ? '' : 'hidden';
$modern = 5 <= $ver ? '' : 'hidden';
$legacySchemes = caweb_color_schemes(4);
$schemes = caweb_color_schemes(0, 'displayname');

/*
 General Settings
*/
// Fav Icon
$fav_icon = get_option('ca_fav_ico', caweb_default_favicon_url());
$fav_icon_name = caweb_favicon_name();

// Header Menu
$navigation_menu = get_option('ca_default_navigation_menu', 'megadropdown');

// Menu Type Selector 
$navigation_menu_selector = get_option('ca_menu_selector_enabled', false);

// Color Scheme
$color_scheme = get_option('ca_site_color_scheme', 'oceanside');

// Show Search on FrontPage
$frontpage_search_enabled = get_option('ca_frontpage_search_enabled', false) ? ' checked="checked"' : '';

// Sticky Nav
$sticky_nav_enabled = get_option('ca_sticky_navigation', false) ? ' checked="checked"' : '';

// Menu Home Link
$home_nav_link_enabled = get_option('ca_home_nav_link', true) ? ' checked="checked"' : '';

// Title Display
$display_post_title = get_option('ca_default_post_title_display', false) ? ' checked="checked"' : '';

// Display Date for Non Divi Posts
$display_post_date = get_option('ca_default_post_date_display', false) ? ' checked="checked"' : '';

// Legacy Browser Support
$ua_compatibiliy = get_option('ca_x_ua_compatibility', false) ? ' checked="checked"' : '';

/*
 Utility Header
*/
// Contact Us Page
$contact_us_link = get_option('ca_contact_us_link', '');

// Geo Locator
$geo_locator_enabled = get_option('ca_geo_locator_enabled', false) ? ' checked="checked"' : '';

// Utility Header Home Icon
$utility_header_home_icon = get_option('ca_utility_home_icon', true) ? 'checked="checked"' : '';

// Custom Link Declarations are located at options/sections/utility-header.php

$org_logo = get_option('header_ca_branding', '');
$org_logo_filename = ! empty($org_logo) ? substr($org_logo, strrpos($org_logo, '/')+1) : '';
$org_logo_alt_text = ! empty( get_option('header_ca_branding_alt_text', '') ) ? get_option('header_ca_branding_alt_text') :  caweb_get_attachment_post_meta($org_logo, '_wp_attachment_image_alt');

$header_branding_alignment = get_option('header_ca_branding_alignment', 'left');
$header_branding_background = get_option('header_ca_background', '');
$header_branding_background_filename = ! empty($header_branding_background) ? substr($header_branding_background, strrpos($header_branding_background, '/')+1) : '';
$google_search_id = get_option('ca_google_search_id', '');
$google_analytic_id = get_option('ca_google_analytic_id', '');
$google_meta_id = get_option('ca_google_meta_id', '');
$google_translate_mode = get_option('ca_google_trans_enabled', 'none');
$google_translate_enabled = 'custom' !== $google_translate_mode ? ' class="hidden"' : '';
$google_translate_page = get_option('ca_google_trans_page', '');
$google_translate_new_window = get_option('ca_google_trans_page_new_window', true) ? ' checked="checked"' : '';
$google_translate_icon = get_option('ca_google_trans_icon', 'globe');
$ext_css = get_option('caweb_external_css', array());
$custom_css = get_option('ca_custom_css', '');
$ext_js = get_option('caweb_external_js', array());
$custom_js = get_option('ca_custom_js', '');
$alerts = get_option('caweb_alerts', array());
$icons = caweb_get_icon_list(-1, '', true);

?>
<div class="container-fluid mt-4">
	<form id="caweb-options-form" action="<?php print admin_url('admin.php?page=caweb_options'); ?>" method="POST" enctype="multipart/form-data">
	<div class="row">
		<ul class="list-group list-group-horizontal">
			<li class="list-group-item"><a href="#general" class="text-reset" aria-expanded="true" data-toggle="collapse">General Settings</a></li>
			<li class="list-group-item"><a href="#social-share" class="text-reset" data-toggle="collapse">Social Media Links</a></li>
			<li class="list-group-item"><a href="#custom-css" class="text-reset" data-toggle="collapse">Custom CSS</a></li>
			<li class="list-group-item"><a href="#custom-js" class="text-reset" data-toggle="collapse">Custom JS</a></li>
			<li class="list-group-item"><a href="#alert-banners" class="text-reset" data-toggle="collapse">Alert Banners</a></li>
		</ul>
	</div>
	<div class="row pr-3">
		<div class="col-12 bg-white border pt-2" id="caweb-settings">
				<input type="hidden" id="tab_selected" name="tab_selected" value="<?php print $selected_tab ?>">
					<?php include_once 'options/general.php'; ?>
					<?php include_once 'options/social-media.php'; ?>
					<?php include_once 'options/custom-css.php'; ?>
					<?php include_once 'options/custom-js.php'; ?>
					<?php include_once 'options/alert-banners.php'; ?>
				<input type="submit" name="caweb_options_submit" class="button button-primary" value="<?php _e('Save Changes') ?>">
				<input type="hidden" name="caweb_submit" >
		</div>
	</div>
	</form>
</div>