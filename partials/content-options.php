<div class="wrap option-titles" >

<h1 >CAWeb Options</h1>

<h2 class="nav-tab-wrapper wp-clearfix">

	<a href="#general-settings" name="general" class="nav-tab nav-tab-active" onclick="toggleOptionView(this)">General Settings</a>

	<a href="#social-share-settings" name="social-share" class="nav-tab" onclick="toggleOptionView(this)">Social Media Links</a>

</h2>
</div>
<form id="ca-options-form" action="options.php" method="POST">
<?php
	settings_fields('ca_site_options');

?>

<div id="ca-options-container">

<!-- General Settings -->
<div id="general" class="show">
  <h1 class="option">General Settings</h1>

<table class="form-table">

<tr><th scope="row"><div class="tooltip">Fav Icon
			<span class="tooltiptext">Select an icon to display as the page icon.</span></div></th>
	<td>
	<input type="text" name="ca_fav_ico" id="ca_fav_ico" size="75" value="<?php echo get_option('ca_fav_ico'); ?>" >
	<input type="button" value="Browse" class="library-link" name="ca_fav_ico" data-choose="Choose a Fav Icon" data-update="Set as Fav Icon" data-option="image/x-icon">
	</td></tr>

  <tr>
		<th scope="row"><div class="tooltip">State Template Version
		<span class="tooltiptext">Select one of the California State Template Versions.</span></div></th>
		<td>
			<select id="ca_site_version" name="ca_site_version" onchange="toggleOptions(this)">
				<option value="5" <?= ( get_option('ca_site_version') == '5' ? 'selected="selected"' : '' ) ?>>Version 5.0 - beta</option>
				<option value="4_5" <?= ( get_option('ca_site_version') == '4_5' ? 'selected="selected"' : '' ) ?>>Version 4.5</option>
				<option value="4" <?= ( get_option('ca_site_version') == '4' ? 'selected="selected"' : '' ) ?>>Version 4.0</option>
			</select>
		</td>
	</tr>
	<tr >
		<th scope="row"><div class="tooltip">Default Navigation Menu
			<span class="tooltiptext">Set a Navigation Menu Style as the default on all newly created pages.</span></div></th>
		<td>
			<select id="ca_default_navigation_menu" name="ca_default_navigation_menu">
				<option value="megadropdown"
			<?= ( get_option('ca_default_navigation_menu') == 'megadropdown' ? 'selected="selected"' : '' ) ?>>Mega Drop</option>
			  <option value="dropdown"
			<?= ( get_option('ca_default_navigation_menu') == 'dropdown' ? 'selected="selected"' : '' ) ?>>Drop Down</option>
			  <option value="singlelevel"
			<?= ( get_option('ca_default_navigation_menu') == 'singlelevel' ? 'selected="selected"' : '' ) ?>>Single Level</option>

			</select>
		</td>
	</tr>



  <tr>
		<th scope="row"><div class="tooltip">Color Scheme
			<span class="tooltiptext">Apply a site wide color scheme.</span></div></th>
		<td>
			<select id="ca_site_color_scheme" name="ca_site_color_scheme">
				<option value="oceanside"
	<?= ( get_option('ca_site_color_scheme') == 'oceanside' ? 'selected="selected"' : '' ) ?>>Oceanside</option>

			<option value="orangecounty" class="base <?= (5.0 > get_option('ca_site_version') ? 'show' : ''); ?>"
	<?= ( get_option('ca_site_color_scheme') == 'orangecounty' ? 'selected="selected"' : '' ) ?>>Orange County</option>

<option value="pasorobles" class="base <?= (5.0 > get_option('ca_site_version') ? 'show' : ''); ?>"
	<?= ( get_option('ca_site_color_scheme') == 'pasorobles' ? 'selected="selected"' : '' ) ?>>Paso Robles</option>

<option value="santabarbara" class="base <?= (5.0 > get_option('ca_site_version') ? 'show' : ''); ?>"
	<?= ( get_option('ca_site_color_scheme') == 'santabarbara' ? 'selected="selected"' : '' ) ?>>Santa Barbara</option>

<option value="sierra" class="base <?= (5.0 > get_option('ca_site_version') ? 'show' : ''); ?>"
	<?= ( get_option('ca_site_color_scheme') == 'sierra' ? 'selected="selected"' : '' ) ?>>Sierra</option>

			</select>
		</td>
	</tr>
  	<tr>
		<th scope="row"><div class="tooltip">Show Breadcrumbs
			<span class="tooltiptext">Display a secondary navigation scheme, from the current page back to the Front Page.</span></div></th>
    <td><input type="checkbox" name="ca_breadcrumbs_enabled" id="ca_breadcrumbs_enabled" <?= ( get_option('ca_breadcrumbs_enabled') == true ? 'checked="checked"' : '' ) ?> />
    </td></tr>

  <tr class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">
		<th scope="row"><div class="tooltip">Show Search on Front Page
			<span class="tooltiptext">Display a visible search box on the Front Page.</span></div></th>
    <td><input type="checkbox" name="ca_frontpage_search_enabled" id="ca_frontpage_search_enabled" <?= ( get_option('ca_frontpage_search_enabled') == true ? 'checked="checked"' : '' ) ?> />
    </td>
	</tr>
  	<tr class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?> ">
		<th scope="row"><div class="tooltip">Sticky Navigation
		<span class="tooltiptext">This will allow the Navigation Menu to either stay fixed at the top of the page or scroll with the page content.</span></div>
		</th>
  <td><input type="checkbox" name="ca_sticky_navigation" id="ca_sticky_navigation" <?= ( get_option('ca_sticky_navigation') == true ? 'checked="checked"' : '' ) ?> />
  </td></tr>

</table>
<div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">
  <h1 class="option">Utility Header</h1>
<table class="form-table">

	<tr>
		<th scope="row"><div class="tooltip">Contact Us Page
			<span class="tooltiptext">Select a Page as the "Contact Us" Page to be used in the Utility Header.</span></div></th>
		<td>
			<select id="ca_contact_us_link" name="ca_contact_us_link">
				<?php
					$all_pages = get_pages(array(
							'post_type' => 'page',
							'sort_column' => 'post_title',
							'sort_order' => 'asc'));

					foreach($all_pages as $p => $pg){
				print sprintf('<option value="%1$s" %3$s>%2$s</option>',
						get_permalink($pg->ID),$pg->post_title,
			( get_option('ca_contact_us_link') == get_permalink($pg->ID) ? 'selected="selected"' : '' ));
					}
				?>
			</select>

		</td>
	</tr>
<tr>
		<th scope="row"><div class="tooltip">Enable Geo Locator
			<span class="tooltiptext">Displays a Geo Locator feature at the top right of each page.</span></div></th>
		<td><input type="checkbox" name="ca_geo_locator_enabled" id="ca_geo_locator_enabled" <?= ( get_option('ca_geo_locator_enabled') == true ? 'checked="checked"' : '' ) ?>> </td></tr>

</table>
  </div>

  <h1 class="option">Page Header</h1>
<table class="form-table">

	<tr>
		<th scope="row"><div class="tooltip">Organization Logo-Brand
			<span class="tooltiptext">Select an image to use as the Agency Logo.</span></div></th>
		<td>
			<input type="text" name="header_ca_branding" id="header_ca_branding" size="75" value="<?php echo get_option('header_ca_branding'); ?>" >
			<input type="button" value="Browse" class="library-link" name="header_ca_branding" data-choose="Choose an Organization Logo-Brand" data-update="Set as Default Logo"/>
		</td>
	</tr>

	<tr class="base <?= (4.0 == get_option('ca_site_version') ? 'show' : '' ); ?>">
<th scope="row"><div class="tooltip ">Organization Logo Alignment
<span class="tooltiptext">Select the position for the Agency Logo.</span></div></th>
<td>
			<select id="header_ca_branding_alignment" name="header_ca_branding_alignment">
				<option value="left"
			<?= ( get_option('header_ca_branding_alignment') == 'left' ? 'selected="selected"' : '' ) ?>>Left</option>
			  <option value="center"
			<?= ( get_option('header_ca_branding_alignment') == 'center' ? 'selected="selected"' : '' ) ?>>Center</option>
			  <option value="right"
			<?= ( get_option('header_ca_branding_alignment') == 'right' ? 'selected="selected"' : '' ) ?>>Right</option>

			</select>
		</td>
	</tr>
	<tr class="base <?= (4.0 == get_option('ca_site_version') ? 'show' : '' ); ?>"><th scope="row"><div class="tooltip">Header Background Image
		<span class="tooltiptext">Select the image to use as the background in the header of every page.</span></div></th>
	<td>
	<input type="text" name="header_ca_background" id="header_ca_background" size="75" value="<?php echo get_option('header_ca_background'); ?>" >
	<input type="button" value="Browse" class="library-link" name="header_ca_background" data-choose="Choose a Header Background" data-update="Set as Header Background">
	</td></tr>
</table>
<h1 class="option">Google</h1>
<table class="form-table">

	<tr>
		<th scope="row"><div class="tooltip">Search Engine ID
<span class="tooltiptext">Enter your unique Google Search Engine ID, if you don't have one see an Administrator.</span></div></th>
		<td>
			<input type="text" name="ca_google_search_id" id="ca_google_search_id" size="60" value="<?php echo get_option('ca_google_search_id'); ?>" >
		</td>
	</tr>
	<tr><th scope="row"><div class="tooltip">Analytics ID
<span class="tooltiptext">Enter your unique Google Analytics ID, if you don't have one see an Administrator.</span></div></th>
	<td>
	<input type="text" name="ca_google_analytic_id" id="ca_google_analytic_id" size="60" value="<?php echo get_option('ca_google_analytic_id'); ?>" >
	</td></tr>
<tr>
		<th scope="row"><div class="tooltip">Enable Google Translate
			<span class="tooltiptext">Displays the Google Translate feature at the top right of each page.</span></div></th>
		<td><input type="checkbox" name="ca_google_trans_enabled" id="ca_google_trans_enabled" <?= ( get_option('ca_google_trans_enabled') == true ? 'checked="checked"' : '' ) ?>> </td></tr>

</table>

</div>


<!-- Social Media Links -->
<div id="social-share">
<h1 class="option">Social Media Links</h1>

<p>Enter the URL for each of your social media profiles.</p>
<table class="form-table">

		<tr>
		<th>Facebook</th>
		<td><input type="text" name="ca_social_facebook" id="ca_social_facebook" size="60" value="<?php echo get_option('ca_social_facebook'); ?>">
		</td>
	</tr>
	<tr>
		<td></td>
    <td><div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">Show in header: <input type="checkbox" name="ca_social_facebook_header" id="ca_social_facebook_header" <?= ( get_option('ca_social_facebook_header') == true ? 'checked="checked"' : '' ) ?>> </div>Show in footer: <input type="checkbox" name="ca_social_facebook_footer" id="ca_social_facebook_footer" <?= ( get_option('ca_social_facebook_footer') == true ? 'checked="checked"' : '' ) ?>></td>
	</tr>
	<tr>
		<th>Twitter</th>
		<td><input type="text" name="ca_social_twitter" id="ca_social_twitter" size="60" value="<?php echo get_option('ca_social_twitter'); ?>"></td>
	</tr>
	<tr>
		<td></td>
		<td><div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">Show in header: <input type="checkbox" name="ca_social_twitter_header" id="ca_social_twitter_header" <?= ( get_option('ca_social_twitter_header') == true ? 'checked="checked"' : '' ) ?>> </div>Show in footer: <input type="checkbox" name="ca_social_twitter_footer" id="ca_social_twitter_footer" <?= ( get_option('ca_social_twitter_footer') == true ? 'checked="checked"' : '' ) ?>></td>
	</tr>
	<tr>
		<th>Google Plus</th>
		<td><input type="text" name="ca_social_google_plus" id="ca_social_google_plus" size="60" value="<?php echo get_option('ca_social_google_plus'); ?>"></td>
	</tr>
	<tr>
		<td></td>
		<td><div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">Show in header: <input type="checkbox" name="ca_social_google_plus_header" id="ca_social_google_plus_header" <?= ( get_option('ca_social_google_plus_header') == true ? 'checked="checked"' : '' ) ?>> </div>Show in footer: <input type="checkbox" name="ca_social_google_plus_footer" id="ca_social_google_plus_footer" <?= ( get_option('ca_social_google_plus_footer') == true ? 'checked="checked"' : '' ) ?>></td>
	</tr>
	<tr>
		<th>Email</th>
		<td><input type="text" name="ca_social_email" id="ca_social_email" size="60" value="<?php echo get_option('ca_social_email'); ?>"></td>
	</tr>
	<tr>
		<td></td>
		<td><div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">Show in header: <input type="checkbox" name="ca_social_email_header" id="ca_social_email_header" <?= ( get_option('ca_social_email_header') == true ? 'checked="checked"' : '' ) ?>> </div>Show in footer: <input type="checkbox" name="ca_social_email_footer" id="ca_social_email_footer" <?= ( get_option('ca_social_email_footer') == true ? 'checked="checked"' : '' ) ?>></td>
	</tr>
	<tr>
		<th>Flickr</th>
		<td><input type="text" name="ca_social_flickr" id="ca_social_flickr" size="60" value="<?php echo get_option('ca_social_flickr'); ?>"></td>
	</tr>
	<tr>
		<td></td>
		<td><div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">Show in header: <input type="checkbox" name="ca_social_flickr_header" id="ca_social_flickr_header" <?= ( get_option('ca_social_flickr_header') == true ? 'checked="checked"' : '' ) ?>></div> Show in footer: <input type="checkbox" name="ca_social_flickr_footer" id="ca_social_flickr_footer" <?= ( get_option('ca_social_flickr_footer') == true ? 'checked="checked"' : '' ) ?>></td>
	</tr>
	<tr>
		<th>Pinterest</th>
		<td><input type="text" name="ca_social_pinterest" id="ca_social_pinterest" size="60" value="<?php echo get_option('ca_social_pinterest'); ?>"></td>
	</tr>
	<tr>
		<td></td>
		<td><div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">Show in header: <input type="checkbox" name="ca_social_pinterest_header" id="ca_social_pinterest_header" <?= ( get_option('ca_social_pinterest_header') == true ? 'checked="checked"' : '' ) ?>> </div>Show in footer: <input type="checkbox" name="ca_social_pinterest_footer" id="ca_social_pinterest_footer" <?= ( get_option('ca_social_pinterest_footer') == true ? 'checked="checked"' : '' ) ?>></td>
	</tr>
	<tr>
		<th>YouTube</th>
		<td><input type="text" name="ca_social_youtube" id="ca_social_youtube" size="60" value="<?php echo get_option('ca_social_youtube'); ?>"></td>
	</tr>
	<tr>
		<td></td>
		<td><div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">Show in header: <input type="checkbox" name="ca_social_youtube_header" id="ca_social_youtube_header" <?= ( get_option('ca_social_youtube_header') == true ? 'checked="checked"' : '' ) ?>> </div>Show in footer: <input type="checkbox" name="ca_social_youtube_footer" id="ca_social_youtube_footer" <?= ( get_option('ca_social_youtube_footer') == true ? 'checked="checked"' : '' ) ?>></td>
	</tr>
<tr>
		<th>LinkedIn</th>
		<td><input type="text" name="ca_social_linkedin" id="ca_social_linkedin" size="60" value="<?php echo get_option('ca_social_linkedin'); ?>"></td>
	</tr>
	<tr>
		<td></td>
		<td><div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">Show in header: <input type="checkbox" name="ca_social_linkedin_header" id="ca_social_linkedin_header" <?= ( get_option('ca_social_linkedin_header') == true ? 'checked="checked"' : '' ) ?>> </div>Show in footer: <input type="checkbox" name="ca_social_linkedin_footer" id="ca_social_linkedin_footer" <?= ( get_option('ca_social_linkedin_footer') == true ? 'checked="checked"' : '' ) ?>></td>
	</tr>
<tr>
		<th>Instagram</th>
		<td><input type="text" name="ca_social_instagram" id="ca_social_instagram" size="60" value="<?php echo get_option('ca_social_instagram'); ?>"></td>
	</tr>
	<tr>
		<td></td>
		<td><div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">Show in header: <input type="checkbox" name="ca_social_instagram_header" id="ca_social_instagram_header" <?= ( get_option('ca_social_instagram_header') == true ? 'checked="checked"' : '' ) ?>></div>Show in footer: <input type="checkbox" name="ca_social_instagram_footer" id="ca_social_instagram_footer" <?= ( get_option('ca_social_instagram_footer') == true ? 'checked="checked"' : '' ) ?>></td>
	</tr>
<tr>
		<th>RSS</th>
		<td><input type="text" name="ca_social_rss" id="ca_social_rss" size="60" value="<?php echo get_option('ca_social_rss'); ?>"></td>
	</tr>
	<tr>
		<td></td>
    <td><div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">Show in header: <input type="checkbox" name="ca_social_rss_header" id="ca_social_rss_header" <?= ( get_option('ca_social_rss_header') == true ? 'checked="checked"' : '' ) ?>></div> Show in footer: <input type="checkbox" name="ca_social_rss_footer" id="ca_social_rss_footer" <?= ( get_option('ca_social_rss_footer') == true ? 'checked="checked"' : '' ) ?>></td>
	</tr>
</table>
</div>
</div>

<input type="submit" name="submit" id="submit" class="button button-primary" value="<?php _e('Save Changes') ?>"/>

</form>
