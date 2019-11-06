<?php
// This is the CAWeb Options Page

$selected_tab = isset($_POST['tab_selected']) || ! empty($_POST['tab_selected']) ? $_POST['tab_selected'] : 'general';

// if saving
if (isset($_POST['caweb_submit'])) {
    caweb_save_options($_POST, $_FILES);
}

// Site Version variables
$ver = get_option('ca_site_version', 5);
$legacy = 4 == $ver ? '' : 'hidden';
$modern = 5 <= $ver ? '' : 'hidden';
$legacySchemes = caweb_color_schemes(4);
$schemes = caweb_color_schemes(0, 'displayname');

// Site Option variables
$fav_icon = get_option('ca_fav_ico', caweb_default_favicon_url());
$fav_icon_name = caweb_favicon_name();
$navigation_menu = get_option('ca_default_navigation_menu', 'megadropdown');
$navigation_menu_selector = get_option('ca_menu_selector_enabled', false);
$color_scheme = get_option('ca_site_color_scheme', 'oceanside');
$frontpage_search_enabled = get_option('ca_frontpage_search_enabled', false) ? ' checked="checked"' : '';
$sticky_nav_enabled = get_option('ca_sticky_navigation', false) ? ' checked="checked"' : '';
$home_nav_link_enabled = get_option('ca_home_nav_link', true) ? ' checked="checked"' : '';
$display_post_title = get_option('ca_default_post_title_display', false) ? ' checked="checked"' : '';
$display_post_date = get_option('ca_default_post_date_display', false) ? ' checked="checked"' : '';
$ua_compatibiliy = get_option('ca_x_ua_compatibility', false) ? ' checked="checked"' : '';
$contact_us_link = get_option('ca_contact_us_link', '');
$geo_locator_enabled = get_option('ca_geo_locator_enabled', false) ? ' checked="checked"' : '';
$utility_header_home_icon = get_option('ca_utility_home_icon', true) ? 'checked="checked"' : '';
$ca_utility_link_1_name = get_option('ca_utility_link_1_name', '');
$ca_utility_link_1_url = get_option('ca_utility_link_1', '');
$ca_utility_link_1_target = get_option('ca_utility_link_1_new_window', true) ? 'checked="checked"' : '';
$ca_utility_link_2_name = get_option('ca_utility_link_2_name', '');
$ca_utility_link_2_url = get_option('ca_utility_link_2', '');
$ca_utility_link_2_target = get_option('ca_utility_link_2_new_window', true) ? 'checked="checked"' : '';
$ca_utility_link_3_name = get_option('ca_utility_link_3_name', '');
$ca_utility_link_3_url = get_option('ca_utility_link_3', '');
$ca_utility_link_3_target = get_option('ca_utility_link_3_new_window', true) ? 'checked="checked"' : '';

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
	<div class="row">
		<div class="col-3 bg-white border">
			<ul>
				<li><a href="#general" class="caweb-nav-tab">General Settings</a></li>
				<li><a href="#social-share" class="caweb-nav-tab">Social Media Links</a></li>
				<li><a href="#custom-css" name="custom-css" class="caweb-nav-tab <?php print 'custom-css' == $selected_tab ? 'nav-tab-active' : '' ?>">Custom CSS</a></li>
				<li><a href="#custom-js" name="custom-js" class="caweb-nav-tab <?php print 'custom-js' == $selected_tab ? 'nav-tab-active' : '' ?>">Custom JS</a></li>
				<li><a href="#alert-banners" name="alert-banners" class="caweb-nav-tab <?php print 'alert-banners' == $selected_tab ? 'nav-tab-active' : '' ?> extra">Alert Banners</a></li>
			</ul>
		</div>
		<div class="col-8 bg-white border pt-2" id="caweb-settings">
			<form id="caweb-options-form" action="<?php print admin_url('admin.php?page=caweb_options'); ?>" method="POST" enctype="multipart/form-data">
				<input type="hidden" id="tab_selected" name="tab_selected" value="<?php print $selected_tab ?>">
					<?php include_once 'options/general.php'; ?>
					<?php include_once 'options/social-media.php'; ?>
					<?php include_once 'options/custom-css.php'; ?>
					<?php include_once 'options/custom-js.php'; ?>
					<?php include_once 'options/alert-banners.php'; ?>
				<input type="submit" name="caweb_options_submit" class="button button-primary" value="<?php _e('Save Changes') ?>">
				<input type="hidden" name="caweb_submit" >
			</form>
		</div>
	</div>
</div>