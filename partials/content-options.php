<div class="wrap option-titles" >

<h1 >Settings</h1>

<h2 class="nav-tab-wrapper wp-clearfix">

	<a href="#general-settings" name="general" class="nav-tab nav-tab-active" onclick="toggleOptionView(this)">General Settings</a>

	<a href="#social-share-settings" name="social-share" class="nav-tab" onclick="toggleOptionView(this)">Social Media Links</a>

	  <a href="#custom-css-settings" name="custom-css" class="nav-tab" onclick="toggleOptionView(this)">Custom CSS</a>

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
	<input type="text" name="ca_fav_ico" id="ca_fav_ico_filename" size="75" readonly="true" style="background-color: #fff;"
    value="<?php print substr(get_option('ca_fav_ico'), strrpos(get_option('ca_fav_ico'), '/')+1); ?>"  class="library-link" name="ca_fav_ico" data-choose="Choose a Fav Icon"
		data-update="Set as Fav Icon" data-option="x-image/icon, image/x-icon, x-image/x-icon, image/icon" data-uploader="false" data-icon-check="true">
	<input type="hidden" name="ca_fav_ico" id="ca_fav_ico" size="75" value="<?php echo get_option('ca_fav_ico'); ?>" >
		<input type="button" value="Browse" class="library-link" name="ca_fav_ico" data-choose="Choose a Fav Icon"
		data-update="Set as Fav Icon" data-option="x-image/icon, image/x-icon, x-image/x-icon, image/icon" data-uploader="false">
		<input type="button" value="Reset" onclick="resetFavIcon('<?php echo CAWebUri . '/images/system/favicon.ico';?>')"><br />
		<img class="ca_fav_ico_option" id="ca_fav_ico_img" src="<?php echo get_option('ca_fav_ico'); ?>"/>
	</td></tr>

  <tr>
		<th scope="row"><div class="tooltip">State Template Version
		<span class="tooltiptext">Select one of the California state template versions.</span></div></th>
		<td>
			<select id="ca_site_version" name="ca_site_version" onchange="toggleOptions(this)">
				<option value="5" <?= ( get_option('ca_site_version') == '5' ? 'selected="selected"' : '' ) ?>>Version 5.0</option>
				<!--option value="4.5" <?= ( get_option('ca_site_version') == '4.5' ? 'selected="selected"' : '' ) ?>>Version 4.5</option-->
				<option value="4" <?= ( get_option('ca_site_version') == '4' ? 'selected="selected"' : '' ) ?>>Version 4.0</option>
			</select>
		</td>
	</tr>
	<tr >
		<th scope="row"><div class="tooltip">Header Menu Type
			<span class="tooltiptext">Set a navigation menu style for all pages.</span></div></th>
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

<?php if( current_user_can('manage_network_options') ): ?>
		<tr>
		<th scope="row"><div class="tooltip">Menu Type Selector
			<span class="tooltiptext">Displays a header menu type selector on the page editor level.</span></div></th>
    <td><input type="checkbox" name="ca_menu_selector_enabled" id="ca_menu_selector_enabled"
			<?= ( get_option('ca_menu_selector_enabled') == true ? 'checked="checked"' : '' ) ?> />
    </td>
	</tr>
<?php endif; ?>

  <tr>
		<th scope="row"><div class="tooltip">Color Scheme
			<span class="tooltiptext">Apply a site wide color scheme.</span></div></th>
		<td>
			<select id="ca_site_color_scheme" name="ca_site_color_scheme">
				<option value="oceanside"
				<?= ( get_option('ca_site_color_scheme') == 'oceanside' ? 'selected="selected"' : '' ) ?>>Oceanside</option>

			<option value="orangecounty" 
			<?= ( get_option('ca_site_color_scheme') == 'orangecounty' ? 'selected="selected"' : '' ) ?>>Orange County</option>

		<option value="pasorobles" 
			<?= ( get_option('ca_site_color_scheme') == 'pasorobles' ? 'selected="selected"' : '' ) ?>>Paso Robles</option>
		
		<option value="santabarbara" 
			<?= ( get_option('ca_site_color_scheme') == 'santabarbara' ? 'selected="selected"' : '' ) ?>>Santa Barbara</option>
		
		<option value="sierra"
			<?= ( get_option('ca_site_color_scheme') == 'sierra' ? 'selected="selected"' : '' ) ?>>Sierra</option>

			</select>
		</td>
	</tr>
	<?php if ( !is_caweb_intranet_site() ) : ?>
  <tr class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">
		<th scope="row"><div class="tooltip">Show Search on Front Page
			<span class="tooltiptext">Display a visible search box on the front page.</span></div></th>
    <td><input type="checkbox" name="ca_frontpage_search_enabled" id="ca_frontpage_search_enabled" <?= ( get_option('ca_frontpage_search_enabled') == true ? 'checked="checked"' : '' ) ?> />
    </td>
	</tr>
<?php endif; ?>
  	<tr class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?> ">
		<th scope="row"><div class="tooltip">Sticky Navigation
		<span class="tooltiptext">This will allow the navigation menu to either stay fixed at the top of the page or scroll with the page content.</span></div>
		</th>
  <td><input type="checkbox" name="ca_sticky_navigation" id="ca_sticky_navigation" <?= ( get_option('ca_sticky_navigation') == true ? 'checked="checked"' : '' ) ?> />
  </td></tr>
<tr >
		<th scope="row"><div class="tooltip">Menu Home Link
		<span class="tooltiptext">Adds a Home link to the header menu.</span></div>
		</th>
  <td><input type="checkbox" name="ca_home_nav_link" id="ca_home_nav_link" <?= ( get_option('ca_home_nav_link', true) == true ? 'checked="checked"' : '' ) ?> />
  </td></tr>
  <tr >
		<th scope="row"><div class="tooltip">Title Display Default Off
		<span class="tooltiptext">Checking this box defaults all new pages/posts to suppress the title.</span></div>
		</th>
  <td><input type="checkbox" name="ca_default_post_title_display" id="ca_default_post_title_display" <?= ( get_option('ca_default_post_title_display', false) ? 'checked="checked"' : '' ) ?> />
  </td></tr>
</table>
<div class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">
  <h1 class="option">Utility Header</h1>
<table class="form-table">

	<tr>
		<th scope="row"><div class="tooltip">Contact Us Page
			<span class="tooltiptext">Select a page as the "Contact Us" page to be used in the utility header.</span></div></th>
		<td>
	<input type="text" name="ca_contact_us_link" id="ca_contact_us_link" size="75" value="<?php echo get_option('ca_contact_us_link')?>" />


		</td>
	</tr>
<tr>
		<th scope="row"><div class="tooltip">Enable Geo Locator
			<span class="tooltiptext">Displays a geo locator feature at the top right of each page.</span></div></th>
		<td><input type="checkbox" name="ca_geo_locator_enabled" id="ca_geo_locator_enabled" <?= ( get_option('ca_geo_locator_enabled') == true ? 'checked="checked"' : '' ) ?>> </td></tr>

        <tr>
		<th scope="row"><div class="tooltip">Home Link
		<span class="tooltiptext">Adds a home link to the utility header.</span></div>
		</th>
  <td><input type="checkbox" name="ca_utility_home_icon" id="ca_utility_home_icon" <?= ( get_option('ca_utility_home_icon', true) == true ? 'checked="checked"' : '' ) ?> />
  </td></tr>
	<?php if(5.0 <= get_option('ca_site_version') ): ?>
<tr  class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">
	<th scope="row">
		<div class="tooltip">Custom Link 1 URL
			<span class="tooltiptext">Adds a custom link to the utility header.</span>
		</div>
	</th>
	<td>
		<input type="text" name="ca_utility_link_1" id="ca_utility_link_1" size="75" value="<?php echo get_option('ca_utility_link_1')?>" />
	</td>
</tr>
<tr class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">
	<th scope="row">
		<div class="tooltip">Custom Link 1 Label
			<span class="tooltiptext">This is the text you want to display for this custom link in the utility header.</span>
		</div>
	</th>
	<td>
		<input type="text" name="ca_utility_link_1_name" id="ca_utility_link_1_name" size="50" value="<?php echo get_option('ca_utility_link_1_name')?>"/>
	</td>
</tr>
<tr class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">
	<th scope="row">
		<div class="tooltip">Custom Link 2 URL
			<span class="tooltiptext">Adds a custom link to the utility header.</span>
		</div>
	</th>
	<td>
		<input type="text" name="ca_utility_link_2" id="ca_utility_link_2" size="75" value="<?php echo get_option('ca_utility_link_2')?>" />
	</td>
</tr>
<tr class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">
	<th scope="row">
		<div class="tooltip">Custom Link 2 Label
			<span class="tooltiptext">This is the text you want to display for this custom link in the utility header.</span>
		</div>
	</th>
	<td>
		<input type="text" name="ca_utility_link_2_name" id="ca_utility_link_2_name" size="50" value="<?php echo get_option('ca_utility_link_2_name')?>"/>
	</td>
</tr>
<tr  class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">
	<th scope="row">
		<div class="tooltip">Custom Link 3 URL
			<span class="tooltiptext">Adds a custom link to the utility header.</span>
		</div>
	</th>
	<td>
		<input type="text" name="ca_utility_link_3" id="ca_utility_link_3" size="75" value="<?php echo get_option('ca_utility_link_3')?>" />
	</td>
</tr>
<tr  class="extra <?= (5.0 <= get_option('ca_site_version') ? 'show' : ''); ?>">
	<th scope="row">
		<div class="tooltip">Custom Link 3 Label
			<span class="tooltiptext">This is the text you want to display for this custom link in the utility header.</span>
		</div>
	</th>
	<td>
		<input type="text" name="ca_utility_link_3_name" id="ca_utility_link_3_name" size="50" value="<?php echo get_option('ca_utility_link_3_name')?>"/>
	</td>
</tr>
<?php endif; ?>
</table>
  </div>

  <h1 class="option">Page Header</h1>
<table class="form-table">

	<tr>
		<th scope="row"><div class="tooltip">Organization Logo-Brand
			<span class="tooltiptext">Select an image to use as the agency logo.</span></div></th>
		<td>
			<input type="text" name="header_ca_branding" id="header_ca_branding_filename" size="75" value="<?php echo substr(get_option('header_ca_branding'), strrpos(get_option('header_ca_branding'), '/')+1); ?>" >
			<input type="hidden" name="header_ca_branding" id="header_ca_branding" size="75" value="<?php echo get_option('header_ca_branding'); ?>" >
			<input type="button" value="Browse" class="library-link" name="header_ca_branding" data-choose="Choose an Organization Logo-Brand" data-update="Set as Default Logo"/>
			<br/>
			<img class="header_ca_branding_option" id="header_ca_branding_img" src="<?php echo get_option('header_ca_branding'); ?>"/>
		</td>
	</tr>

	<tr class="base <?= (4.0 == get_option('ca_site_version') ? 'show' : '' ); ?>">
<th scope="row"><div class="tooltip ">Organization Logo Alignment
<span class="tooltiptext">Select the position for the agency logo.</span></div></th>
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
		<input type="text" name="header_ca_background" id="header_ca_background_filename" size="75" value="<?php echo substr(get_option('header_ca_background'), strrpos(get_option('header_ca_background'), '/')+1); ?>" >
	<input type="hidden" name="header_ca_background" id="header_ca_background" size="75" value="<?php echo get_option('header_ca_background'); ?>" >
	<input type="button" value="Browse" class="library-link" name="header_ca_background" data-choose="Choose a Header Background" data-update="Set as Header Background">
	<br/>
	<img class="header_ca_background_option" id="header_ca_background_img" src="<?php echo get_option('header_ca_background'); ?>"/>
	</td></tr>
</table>
	<?php if( !is_caweb_intranet_site() ) : ?>
<h1 class="option">Google</h1>
<table class="form-table">

	<tr>
		<th scope="row"><div class="tooltip">Search Engine ID
<span class="tooltiptext">Enter your unique Google search engine ID, if you don't have one see an administrator.</span></div></th>
		<td>
			<input type="text" name="ca_google_search_id" id="ca_google_search_id" size="60" value="<?php echo get_option('ca_google_search_id'); ?>" >
		</td>
	</tr>
	<tr><th scope="row"><div class="tooltip">Analytics ID
<span class="tooltiptext">Enter your unique Google analytics ID, if you don't have one see an administrator.</span></div></th>
	<td>
	<input type="text" name="ca_google_analytic_id" id="ca_google_analytic_id" size="60" value="<?php echo get_option('ca_google_analytic_id'); ?>" >
	</td></tr>
		<tr><th scope="row"><div class="tooltip">Meta ID
<span class="tooltiptext">Enter your unique Google meta ID, if you don't have one see an administrator.</span></div></th>
	<td>
	<input type="text" name="ca_google_meta_id" id="ca_google_meta_id" size="60" value="<?php echo get_option('ca_google_meta_id'); ?>" >
	</td></tr>
<tr>
		<th scope="row"><div class="tooltip">Enable Google Translate
			<span class="tooltiptext">Displays the Google translate feature at the top right of each page.</span></div></th>
		<td><input type="checkbox" name="ca_google_trans_enabled" id="ca_google_trans_enabled" <?= ( get_option('ca_google_trans_enabled') == true ? 'checked="checked"' : '' ) ?>> </td></tr>

</table>
<?php endif; ?>
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

	<div id="custom-css">
  <h1 class="option">Custom CSS</h1>
		<table class="form-table">

		<tr>
			<th><div class="tooltip">Stylesheet<span class="tooltiptext">Any styles added will override any pre-existing styles. </span></div></th>
			<td><textarea id="ca_custom_css" name="ca_custom_css" ><?php echo get_option('ca_custom_css'); ?> </textarea></td>
		</tr>
		</table>

	</div>

</div>
<input type="submit" name="submit" id="submit" class="button button-primary" value="<?php _e('Save Changes') ?>"/>
</form>
