// Toggle CSS Colorscheme Options
jQuery( document ).ready( function($) {
	$('select[id$="ca_site_version"]').on("change", function(){
		correct_colorscheme_visibility($(this).val());
		correct_social_media_links($(this).val());
		correct_utility_header_options($(this).val());
	} );
});

// Toggle CSS Colorscheme Options
function correct_colorscheme_visibility(version){
	var color_scheme_picker = document.getElementById('ca_site_color_scheme');
	var current_color = color_scheme_picker.value;
	var new_colors = caweb_admin_args.caweb_colorschemes[version];

	for(i = color_scheme_picker.length; i >= 0; i--) {
		color_scheme_picker.remove(i);
	}


	for (const [i, ele] of Object.entries(new_colors)) {
		var o = document.createElement( 'OPTION' );

		o.value = i;
		o.text = ele.displayname;

		if( i === current_color ){
			o.selected = true;
		}

		color_scheme_picker.append( o );
	}

}

// Toggle Social Media Links
function correct_social_media_links(version){
	var exlusions = '5.5' !== version ? [
		'ca_social_snapchat-settings',
		'ca_social_pinterest-settings',
		'ca_social_rss-settings',
		'ca_social_google_plus-settings',
		'ca_social_flickr-settings'
	] : ['ca_social_github-settings'];

	jQuery('div[id^="ca_social_"]').each(function(index) {
		// hide the entire option if not allowed for specified template version
		if( exlusions.includes(this.id) ){
			jQuery(this).addClass('d-none');
			jQuery(this).prev().addClass('d-none');
		}else{
			jQuery(this).removeClass('d-none');
			jQuery(this).prev().removeClass('d-none');

			// Share via Email only has 2 options
			// all other options have 5 options
			var headerOption = 2 === this.children.length ? this.children[0] : this.children[1];

			// hide header option for all social link options
			if(  '5.5' !== version ){
				jQuery(headerOption).addClass('d-none');

			}else{
				jQuery(headerOption).removeClass('d-none');
			}
		}
	});
}

// Toggle Utility Header Options
function correct_utility_header_options(version){
	var homeIcon = jQuery('#utility-header-settings');

	if(  '5.5' !== version ){
		jQuery(homeIcon).addClass('d-none');
		jQuery(homeIcon).prev().addClass('d-none');
	}else{
		jQuery(homeIcon).removeClass('d-none');
		jQuery(homeIcon).prev().removeClass('d-none');
	}
}
