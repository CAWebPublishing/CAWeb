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
$contact_us_link = get_option('ca_contact_us_link', '');
$geo_locator_enabled = get_option('ca_geo_locator_enabled', false) ? ' checked="checked"' : '';
$utility_header_home_icon = get_option('ca_utility_home_icon', true) ? 'checked="checked"' : '';
$org_logo = get_option('header_ca_branding', '');
$org_logo_filename = ! empty($org_logo) ? substr($org_logo, strrpos($org_logo, '/')+1) : '';
$header_branding_alignment = get_option('header_ca_branding_alignment', 'left');
$header_branding_background = get_option('header_ca_background', '');
$header_branding_background_filename = ! empty($header_branding_background) ? substr($header_branding_background, strrpos($header_branding_background, '/')+1) : '';
$google_search_id = get_option('ca_google_search_id', '');
$google_analytic_id = get_option('ca_google_analytic_id', '');
$google_meta_id = get_option('ca_google_meta_id', '');
$google_translate_mode = get_option('ca_google_trans_enabled', 'none');
$google_translate_enabled = 'custom' !== $google_translate_mode ? ' class="hidden"' : '';
$google_translate_page = get_option('ca_google_trans_page', '');
$google_translate_icon = get_option('ca_google_trans_icon', 'globe');
$ext_css = get_option('caweb_external_css', array());
$custom_css = get_option('ca_custom_css', '');
$ext_js = get_option('caweb_external_js', array());
$custom_js = get_option('ca_custom_js', '');
$alerts = get_option('caweb_alerts', array());
$icons = caweb_get_icon_list(-1, '', true);

?>

<div class="wrap option-titles" >
	
	<h1 >Settings</h1>
	
	<h2 class="nav-tab-wrapper wp-clearfix">
		
		<a href="#general-settings" name="general" class="caweb-nav-tab nav-tab <?= 'general' == $selected_tab ? 'nav-tab-active' : '' ?>">General Settings</a>
		
		<a href="#social-share-settings" name="social-share" class="caweb-nav-tab nav-tab <?= 'social-share' == $selected_tab ? 'nav-tab-active' : '' ?>">Social Media Links</a>
		
		<a href="#custom-css-settings" name="custom-css" class="caweb-nav-tab nav-tab <?= 'custom-css' == $selected_tab ? 'nav-tab-active' : '' ?>">Custom CSS</a>
		
		<a href="#custom-js-settings" name="custom-js" class="caweb-nav-tab nav-tab <?= 'custom-js' == $selected_tab ? 'nav-tab-active' : '' ?>">Custom JS</a>
		
		<a href="#alert-banners" name="alert-banners" class="caweb-nav-tab nav-tab <?= 'alert-banners' == $selected_tab ? 'nav-tab-active' : '' ?> extra">Alert Banners</a>
	</h2>
</div>
<form id="caweb-options-form" action="<?= admin_url('admin.php?page=caweb_options'); ?>" method="POST" enctype="multipart/form-data">
	
	<input type="hidden" id="tab_selected" name="tab_selected" value="<?= $selected_tab ?>">
		
	<div id="caweb-options-container">
		<!-- General Settings -->
		<div id="general" class="<?= 'general' == $selected_tab ? '' : 'hidden' ?>">
			
			<h1 class="option">General Settings</h1>
			
			<table class="form-table">
				<tr><th scope="row"><div class="tooltip">Fav Icon
					<span class="tooltiptext">Select an icon to display as the page icon.</span></div></th>
					<td>
						<input type="text" name="ca_fav_ico" id="ca_fav_ico_filename" size="75" readonly="true" style="background-color: #fff;"
						value="<?= $fav_icon_name ?>"  class="library-link" name="ca_fav_ico" data-choose="Choose a Fav Icon"
						data-update="Set as Fav Icon" data-option="x-image/icon, image/x-icon, x-image/x-icon, image/icon" data-uploader="false" data-icon-check="true">
						<input type="hidden" name="ca_fav_ico" id="ca_fav_ico" size="75" value="<?= $fav_icon ?>" >
						<input type="button" value="Browse" class="library-link" name="ca_fav_ico" data-choose="Choose a Fav Icon"
						data-update="Set as Fav Icon" data-option="x-image/icon, image/x-icon, x-image/x-icon, image/icon" data-uploader="false">
						<input type="button" value="Reset" id="resetFavIcon"><br />
						<img class="ca_fav_ico_option" id="ca_fav_ico_img" src="<?= $fav_icon ?>"/>
					</td></tr>
					
					<tr>
						<th scope="row"><div class="tooltip">State Template Version
							<span class="tooltiptext">Select one of the California state template versions.</span></div></th>
							<td>
								<select id="ca_site_version" name="ca_site_version">
									<option value="5" <?= 5 == $ver ? 'selected="selected"' : '' ?>>Version 5.0</option>
									<?php if (4 == $ver) : ?>
									<option value="4" <?= 4 == $ver ? 'selected="selected"' : '' ?>>Version 4.0</option>
								<?php endif; ?>
								</select>
							</td>
						</tr>
						<tr >
							<th scope="row"><div class="tooltip">Header Menu Type
								<span class="tooltiptext">Set a navigation menu style for all pages.</span></div></th>
								<td>
									<select id="ca_default_navigation_menu" name="ca_default_navigation_menu">
										<option value="megadropdown"
										<?=  'megadropdown' == $navigation_menu ? 'selected="selected"' : '' ?>>Mega Drop</option>
										<option value="dropdown"
										<?= 'dropdown' == $navigation_menu ? 'selected="selected"' : '' ?>>Drop Down</option>
										<option value="singlelevel"
										<?= 'singlelevel' == $navigation_menu ? 'selected="selected"' : '' ?>>Single Level</option>
										
									</select>
								</td>
							</tr>
							
							<?php if ( ! is_multisite() || current_user_can('manage_network_options')): ?>
								<tr>
									<th scope="row"><div class="tooltip">Menu Type Selector
										<span class="tooltiptext">Displays a header menu type selector on the page editor level.</span></div></th>
										<td><input type="checkbox" name="ca_menu_selector_enabled" id="ca_menu_selector_enabled"
											<?= $navigation_menu_selector ? 'checked="checked"' : '' ?>>
										</td>
									</tr>
								<?php endif; ?>
								
								<tr>
									<th scope="row"><div class="tooltip">Color Scheme
										<span class="tooltiptext">Apply a site wide color scheme.</span></div></th>
										<td>
											<select id="ca_site_color_scheme" name="ca_site_color_scheme">
												<?php

												foreach ($schemes as $key => $data) {
												    printf('<option value="%1$s"%2$s%3$s>%4$s</option>',
													$key, ! array_key_exists($key, $legacySchemes) ? sprintf(' class="extra %1$s" ', $modern) : '',
													$key == $color_scheme ? ' selected="selected"' : '', $data);
												}

												?>
											</select>
										</td>
									</tr>
									<tr class="extra <?= $modern ?>">
										<th scope="row"><div class="tooltip">Show Search on Front Page
											<span class="tooltiptext">Display a visible search box on the front page.</span></div></th>
											<td><input type="checkbox" name="ca_frontpage_search_enabled" id="ca_frontpage_search_enabled" <?= $frontpage_search_enabled ?> >
											</td>
										</tr>
										<tr class="extra <?= $modern ?> ">
											<th scope="row"><div class="tooltip">Sticky Navigation
												<span class="tooltiptext">This will allow the navigation menu to either stay fixed at the top of the page or scroll with the page content.</span></div>
											</th>
											<td><input type="checkbox" name="ca_sticky_navigation" id="ca_sticky_navigation" <?= $sticky_nav_enabled ?>>
											</td></tr>
											<tr >
												<th scope="row"><div class="tooltip">Menu Home Link
													<span class="tooltiptext">Adds a Home link to the header menu.</span></div>
												</th>
												<td><input type="checkbox" name="ca_home_nav_link" id="ca_home_nav_link" <?= $home_nav_link_enabled ?>>
												</td></tr>
												<tr >
													<th scope="row"><div class="tooltip">Title Display Default Off
														<span class="tooltiptext">Checking this box defaults all new pages/posts to suppress the title.</span></div>
													</th>
													<td><input type="checkbox" name="ca_default_post_title_display" id="ca_default_post_title_display" <?= $display_post_title ?>>
													</td></tr>
													<tr >
														<th scope="row"><div class="tooltip">Display Date for Non-Divi Posts
															<span class="tooltiptext"> If checked all non-Divi Posts will display the Posts Published Date.</span></div>
														</th>
														<td><input type="checkbox" name="ca_default_post_date_display" id="ca_default_post_date_display" <?= $display_post_date ?>>
														</td></tr>
													</table>
													<div class="extra <?= $modern ?>">
														<h1 class="option">Utility Header</h1>
														<table class="form-table">
															
															<tr>
																<th scope="row"><div class="tooltip">Contact Us Page
																	<span class="tooltiptext">Select a page as the "Contact Us" page to be used in the utility header.</span></div></th>
																	<td>
																		<input type="text" name="ca_contact_us_link" id="ca_contact_us_link" size="75" value="<?= $contact_us_link ?>">
																	</td>
																</tr>
																<tr>
																	<th scope="row"><div class="tooltip">Enable Geo Locator
																		<span class="tooltiptext">Displays a geo locator feature at the top right of each page.</span></div></th>
																		<td><input type="checkbox" name="ca_geo_locator_enabled" id="ca_geo_locator_enabled" <?= $geo_locator_enabled ?>> </td>
																	</tr>
																		<tr>
																			<th scope="row"><div class="tooltip">Home Link
																				<span class="tooltiptext">Adds a home link to the utility header.</span></div>
																			</th>
																			<td><input type="checkbox" name="ca_utility_home_icon" id="ca_utility_home_icon" <?= $utility_header_home_icon ?>>
																			</td></tr>
																			<?php
																			for ($link = 1; $link < 4; $link++) :
																				$url = get_option(sprintf('ca_utility_link_%1$s', $link));
																				$label = get_option(sprintf('ca_utility_link_%1$s_name', $link));
																				$target = get_option(sprintf('ca_utility_link_%1$s_new_window', $link)); ?>
																				<tr class="extra <?= $modern ?>">
																					<th scope="row">
																						<div class="tooltip">Custom Link <?= $link ?> Label
																							<span class="tooltiptext">This is the text you want to display for this custom link in the utility header.</span>
																						</div>
																					</th>
																					<td>
																						<input type="text" name="ca_utility_link_<?= $link ?>_name" id="ca_utility_link_<?= $link ?>_name" size="50" value="<?= $label ?>"/>
																					</td>
																				</tr>
																				<tr  class="extra <?= $modern ?>">
																					<th scope="row">
																						<div class="tooltip">Custom Link <?= $link ?> URL
																							<span class="tooltiptext">Adds a custom link to the utility header.</span>
																						</div>
																					</th>
																					<td>
																						<input type="text" name="ca_utility_link_<?= $link ?>" id="ca_utility_link_<?= $link ?>" size="75" value="<?= $url ?>" />
																					</td>
																				</tr>
																				<tr class="extra <?= $modern ?>">
																					<th></th>
																					<td>
																						<label>Open in New Tab: <input type="checkbox" name="ca_utility_link_<?= $link ?>_new_window" id="ca_utility_link_<?= $link ?>_new_window" <?= $target ? 'checked="checked"' : '' ?> /></label>
																					</td>
																				</tr>
																			<?php endfor; ?>
																		</table>
																	</div>
																	
																	<h1 class="option">Page Header</h1>
																	<table class="form-table">
																		
																		<tr>
																			<th scope="row"><div class="tooltip">Organization Logo-Brand
																				<span class="tooltiptext">Select an image to use as the agency logo. Recommended size is 300pixels wide by 80pixels tall</span></div></th>
																				<td>
																					<input type="text" name="header_ca_branding" id="header_ca_branding_filename" size="75" value="<?= $org_logo_filename ?>" >
																					<input type="hidden" name="header_ca_branding" id="header_ca_branding" size="75" value="<?= $org_logo ?>" >
																					<input type="button" value="Browse" class="library-link" name="header_ca_branding" data-choose="Choose an Organization Logo-Brand" data-update="Set as Default Logo">
																					<br/>
																					<img class="header_ca_branding_option" id="header_ca_branding_img" src="<?= $org_logo ?>"/>
																				</td>
																			</tr>
																			
																			<tr class="base <?= $legacy ?>">
																				<th scope="row"><div class="tooltip ">Organization Logo Alignment
																					<span class="tooltiptext">Select the position for the agency logo.</span></div></th>
																					<td>
																						<select id="header_ca_branding_alignment" name="header_ca_branding_alignment">
																							<option value="left"
																							<?= 'left' == $header_branding_alignment ? ' selected="selected"' : '' ?>>Left</option>
																							<option value="center"
																							<?= 'center' == $header_branding_alignment ? ' selected="selected"' : '' ?>>Center</option>
																							<option value="right"
																							<?= 'right' == $header_branding_alignment ? ' selected="selected"' : '' ?>>Right</option>
																							
																						</select>
																					</td>
																				</tr>
																				<tr class="base <?= $legacy ?>">
																					<th scope="row"><div class="tooltip">Header Background Image
																						<span class="tooltiptext">Select the image to use as the background in the header of every page.</span></div>
																					</th>
																					<td>
																						<input type="text" name="header_ca_background" id="header_ca_background_filename" size="75" value="<?= $header_branding_background_filename ?>" >
																						<input type="hidden" name="header_ca_background" id="header_ca_background" size="75" value="<?= $header_branding_background ?>" >
																						<input type="button" value="Browse" class="library-link" name="header_ca_background" data-choose="Choose a Header Background" data-update="Set as Header Background">
																						<br/>
																						<img class="header_ca_background_option" id="header_ca_background_img" src="<?= $header_branding_background ?>"/>
																					</td></tr>
																				</table>
																				<h1 class="option">Google</h1>
																				<table class="form-table">
																					
																					<tr>
																						<th scope="row"><div class="tooltip">Search Engine ID
																							<span class="tooltiptext">Enter your unique Google search engine ID, if you don't have one see an administrator.</span></div></th>
																							<td>
																								<input type="text" name="ca_google_search_id" id="ca_google_search_id" size="60" value="<?= $google_search_id ?>" >
																							</td>
																						</tr>
																						<tr><th scope="row"><div class="tooltip">Analytics ID
																							<span class="tooltiptext">Enter your unique Google analytics ID, if you don't have one see an administrator.</span></div></th>
																							<td>
																								<input type="text" name="ca_google_analytic_id" id="ca_google_analytic_id" size="60" value="<?= $google_analytic_id ?>" >
																							</td></tr>
																							<tr><th scope="row"><div class="tooltip">Meta ID
																								<span class="tooltiptext">Enter your unique Google meta ID, if you don't have one see an administrator.</span></div></th>
																								<td>
																									<input type="text" name="ca_google_meta_id" id="ca_google_meta_id" size="60" value="<?= $google_meta_id ?>" >
																								</td></tr>
																								<tr>
																									<th scope="row"><div class="tooltip">Enable Google Translate
																										<span class="tooltiptext">Displays the Google translate feature at the top right of each page.</span></div></th>
																										<td><label><input type="radio" value="none" name="ca_google_trans_enabled" <?= false === $google_translate_mode || 'none' == $google_translate_mode ? ' checked="checked"' : '' ?>>None </label><label><input type="radio" value="standard" name="ca_google_trans_enabled" <?= true === $google_translate_mode || 'standard' == $google_translate_mode ? ' checked="checked"' : '' ?>>Standard </label><label><input type="radio" value="custom" name="ca_google_trans_enabled" <?= 'custom' == $google_translate_mode ? ' checked="checked"' : '' ?>>Custom</label></td>
																									</tr>
																									<tr <?= $google_translate_enabled ?>>
																										<th scope="row">Translate Page</th>
																										<td><input type="text" name="ca_google_trans_page" size="60" value="<?= $google_translate_page ?>"></td>
																									</tr>
																									<tr <?= $google_translate_enabled ?>>
																										<th scope="row"><span class="dashicons dashicons-image-rotate resetIcon resetGoogleIcon"></span> Icon</th>
																										<td>
																											<ul id="caweb-icon-menu" class="autoUpdate">
																												<?php
																												$icons = caweb_get_icon_list(-1, '', true);
																												$iconList = '';
																												foreach ($icons as $i) {
																												    printf('<li class="icon-option ca-gov-icon-%1$s%2$s" title="%1$s"></li>', $i, $google_translate_icon == $i ? ' selected' : '');
																												}
																												?>
																												<input type="hidden" name="ca_google_trans_icon" value="<?= $google_translate_icon ?>" >
																											</ul>
																										</td>
																									</tr>
																									<tr <?= $google_translate_enabled ?>>
																										<th>Google Translate Shortcode</th>
																										<td><input id="caweb-google-trans-shorcode" type="text" readonly size="60" value="[caweb_google_translate /]">
																										</td>
																									</tr>
																								</table>
																							</div>
																							<!-- Social Media Links -->
																							<div id="social-share" class="<?= 'social-share' == $selected_tab ? '' : 'hidden' ?>">
																								<h1 class="option">Social Media Links</h1>
																								
																								<p>Enter the URL for each of your social media profiles.</p>
																								<table class="form-table">
																									<?php
																									$social_options = caweb_get_site_options('social');

																									foreach ($social_options as $social => $option) {
																									    $share_email = 'ca_social_email' === $option ? true : false;
																									    $social = $share_email ? "Share via ".$social : $social;
																									    $input_box = ! $share_email ? sprintf('<td><input type="text" name="%1$s" id="%1$s" size="60" value="%2$s" /></td></tr><tr><td></td>', $option, get_option($option)) : '';
																									    $header_checked = get_option(sprintf('%1$s_header', $option)) ? ' checked="checked"' : '';
																									    $footer_checked = get_option(sprintf('%1$s_footer', $option)) ? ' checked="checked"' : '';
																									    $new_window_checked = get_option(sprintf('%1$s_new_window', $option)) ? ' checked="checked"' : '';

																									    printf('<tr><th>%1$s</th>%2$s<td><label class="extra %3$s">Show in header: <input type="checkbox" name="%4$s_header" id="%4$s_header"%5$s></label><label>Show in footer: <input type="checkbox" name="%4$s_footer" id="%4$s_footer"%6$s></label>%7$s</td></tr>', $social, $input_box, $modern, $option, $header_checked, $footer_checked, ( ! $share_email ? sprintf('<label>Open in New Tab: <input type="checkbox" name="%1$s_new_window" id="%1$s_new_window"%2$s /></label>', $option, $new_window_checked) : ''));
																									}
																										?>
																									</table>
																								</div>
																								<div id="custom-css" class="<?= 'custom-css' == $selected_tab ? '' : 'hidden' ?>">
																									<h1 class="option">Upload CSS</h1>
																									<table class="form-table">
																										<tr>
																											<th><div class="tooltip">Stylesheets
																												<span class="tooltiptext">Any styles added will override any pre-existing styles.
																													Uploaded stylesheets load at the bottom of the head in the order listed. To adjust the order,
																													click and drag the name of the file in the order you would like.
																												</span></div></th>
																												<td>
																													<a class="dashicons dashicons-plus-alt" id="addCSS" title="Add Style" name="css"></a>
																												</td>
																												<?php if ( ! empty($ext_css)): ?>
																													<tr><td></td>
																														<td>
																															<p class="option">Uploaded Styles</p>
																															
																															<ol id="uploadedCSS">
																																<?php
																																foreach ($ext_css as  $name) {
																																    $location = sprintf('%1$s/css/external/%2$s/%3$s', CAWebUri, get_current_blog_id(), $name);

																																    printf('<li><a href="%1$s?TB_iframe=true&width=600&height=550" title="%2$s" class="thickbox dashicons dashicons-visibility preview-css"></a><a href="%1$s" download="%2$s" title="download" class="dashicons dashicons-download download-css"></a><a title="remove %2$s" class="dashicons dashicons-dismiss remove-css"></a>%2$s<input type="hidden" name="caweb_external_css[]" value="%2$s"></li>', $location, $name);
																																}
																																	?>
																																</ol>
																															</tr>
																														<?php endif; ?>
																													</tr>
																												</table>
																												<input type="submit" name="caweb_options_submit" id="#submit" class="button button-primary" value="Save Changes">
																												<h1 class="option">Custom CSS</h1>
																												<table class="form-table">
																													
																													<tr>
																														<th><div class="tooltip">Stylesheet<span class="tooltiptext">Any styles added will override any pre-existing styles. </span></div></th>
																														<td><textarea id="ca_custom_css" name="ca_custom_css" ><?= wp_unslash($custom_css) ?></textarea></td>
																													</tr>
																												</table>
																												
																											</div>
																											
																											<!-- Custom JS -->
																											<div id="custom-js" class="<?= 'custom-js' == $selected_tab ? '' : 'hidden' ?>">
																												<h1 class="option">Upload JS</h1>
																												<table class="form-table">
																													<tr>
																														<th><div class="tooltip">Javascripts
																															<span class="tooltiptext">Any scripts added will override any pre-existing scripts.
																																Uploaded scripts load at the bottom of the footer in the order listed. To adjust the order,
																																click and drag the name of the file in the order you would like.
																															</span></div></th>
																															<td>
																																<a class="dashicons dashicons-plus-alt" id="addJS" title="Add Script" name="js"></a>
																															</td>
																															<?php if ( ! empty($ext_js)): ?>
																																<tr><td></td>
																																	<td>
																																		<p class="option">Uploaded JS</p>
																																		
																																		<ol id="uploadedJS">
																																			<?php
																																			foreach ($ext_js as  $name) {
																																			    $location = sprintf('%1$s/js/external/%2$s/%3$s', CAWebUri, get_current_blog_id(), $name);

																																			    printf('<li><a href="%1$s?TB_iframe=true&width=600&height=550" title="%2$s" class="thickbox dashicons dashicons-visibility preview-js"></a><a href="%1$s" download="%2$s" title="download" class="dashicons dashicons-download download-js"></a><a title="remove %2$s" class="dashicons dashicons-dismiss remove-js"></a>%2$s<input type="hidden" name="caweb_external_js[]" value="%2$s"></li>', $location, $name);
																																			}
																																				?>
																																			</ol>
																																		</tr>
																																	<?php endif; ?>
																																</tr>
																															</table>
																															<input type="submit" name="caweb_options_submit" id="#submit" class="button button-primary" value="Save Changes">
																															<h1 class="option">Custom JS</h1>
																															<table class="form-table">
																																
																																<tr>
																																	<th><div class="tooltip">Javascript<span class="tooltiptext">Any scripts added will override any pre-existing scripts. </span></div></th>
																																	<td><textarea id="ca_custom_js" name="ca_custom_js" ><?= wp_unslash($custom_js) ?></textarea></td>
																																</tr>
																															</table>
																															
																														</div>
																											
																											<div id="alert-banners" class="<?= 'alert-banners' == $selected_tab ? '' : 'hidden' ?>">
																												<h1 class="option">Create Alert Banner <a class="dashicons dashicons-plus-alt" id="addAlertBanner" title="Add Alert Banner"></a></h1>
																												<ul id="cawebAlerts">
																													<?php

																													foreach ($alerts as $a => $data) :
																														$header = $data['header'];
																														$default_header = ! empty($header) ? $header : "Label";
																														$count = $a + 1;
																														$status = $data['status'];

																														?>
																														
																														<li>
																															<div class="caweb-alert">
																																<div><p><?= $default_header ?></p><a class="dashicons dashicons-dismiss removeAlert"></a><a class="thickbox dashicons dashicons-menu" href="#TB_inline?width=600&height=550&modal=true&inlineId=caweb-alert-<?= $count ?>"></a><a class="dashicons dashicons-arrow-down alert-toggle" title="<?= $default_header ?>"></a><a class="dashicons activateAlert <?= $status ?>"><input name="alert-status-<?= $count ?>" value="<?= $status ?>" type="hidden"></a></div>
																																<div class="hidden">
																																	<input placeholder="Label" name="alert-header-<?= $count ?>" type="text" value="<?= $header ?>">
																																	<p>Message</p>
																																	<?= wp_editor(stripslashes($data['message']), "alert-message-$count", caweb_tiny_mce_settings()); ?>
																																</div>
																															</div>
																														</li>
																													<?php  endforeach; ?>
																													<input id="caweb_alert_count" type="hidden" name="caweb_alert_count" value="<?= count($alerts) ?>">
																												</ul>
																											</div>
																										</div> <!-- End of CA Options Container -->
																										
																										<input type="submit" name="caweb_options_submit" class="button button-primary" value="<?php _e('Save Changes') ?>">
																										<input type="hidden" name="caweb_submit" >
																									</form>
																									<div id="caweb-alert-settings">
																										<?php
																										// Alert Settings
																										foreach ($alerts as $a => $data) {
																										    $iconList = '';
																										    foreach ($icons as $i) {
																										        $iconList .= sprintf('<li class="icon-option ca-gov-icon-%1$s%2$s" title="%1$s"></li>', $i, $i == $data['icon'] ? ' selected' : '');
																										    }

																										    printf('<div id="caweb-alert-%1$s" style="display:none;"><form id="caweb-options-form" class="caweb-alert-%1$s"><h3>Alert Settings</h3><p>Display on</p><label><input type="radio" name="alert-display-%1$s" value="home"%2$s>Home Page Only</label><label><input type="radio" name="alert-display-%1$s" value="all"%3$s>All Pages</label><p>Banner Color</p><input type="color" name="alert-banner-color-%1$s" value="%4$s"><p><label>Add Read More Button <input type="checkbox" name="alert-read-more-%1$s"%5$s class="alert-read-more"></label></p><div%6$s><p>Read More Button URL</p><input type="text" name="alert-read-more-url-%1$s" value="%7$s"><label>Open link in</label><label><input type="radio" name="alert-read-more-target-%1$s" value="_blank"%8$s>New Tab</label><label><input type="radio" name="alert-read-more-target-%1$s"%9$s>Current Tab</label></div><p>Add Icon <span class="dashicons dashicons-image-rotate resetAlertIcon"></span></p><ul id="caweb-icon-menu" class="noUpdate">%10$s<input name="alert-icon-%1$s" type="hidden" value="%11$s"></ul><a class="button button-primary ok">Ok</a><a class="button button-primary cancel">Cancel</a></form></div>', $a + 1, "home" == $data['page_display'] ? ' checked="true" data-display="true"' : '', "all" == $data['page_display'] ? ' checked="true" data-display="true"' : '', $data['color'], "on" == $data['button'] ? ' checked="true"' : '', "on" !== $data['button'] ? ' class="hidden"' : '', $data['url'], "_blank" == $data['target'] ? ' checked="true"' : '', empty($data['target']) ? ' checked="true"' : '', $iconList, $data['icon']);
																										}
																										?>
																									</div>