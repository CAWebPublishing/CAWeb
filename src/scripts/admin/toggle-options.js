// Toggle CSS Colorscheme Options
jQuery( document ).ready( function($) {
	$('select[id$="ca_site_version"]').on("change", function(){
		correct_social_media_links($(this).val());
		correct_utility_header_options($(this).val());
		correct_sticky_nav_option($(this).val());
		correct_frontpage_search_option($(this).val());
		correct_menu_types_option($(this).val());
		correct_menu_home_link_option($(this).val());
	} );
});


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

// Toggle Sticky Nav
function correct_sticky_nav_option(version){
	if( '5.5' === version ){
		jQuery('#ca_sticky_navigation').parent().parent().removeClass('d-none');
	}else{
		jQuery('#ca_sticky_navigation').parent().parent().addClass('d-none');
	}
}

// Toggle Search on Frontpage
function correct_frontpage_search_option(version){
	if( '5.5' === version ){
		jQuery('#ca_frontpage_search_enabled').parent().parent().removeClass('d-none');
	}else{
		jQuery('#ca_frontpage_search_enabled').parent().parent().addClass('d-none');
	}
}

// Toggle Menu Types
function correct_menu_types_option(version){
	var menu_type_picker = document.getElementById('ca_default_navigation_menu');
	var current_menu = menu_type_picker.value;
	
	for(i = menu_type_picker.length; i >= 0; i--) {
		menu_type_picker.remove(i);
	}


	for (const [i, ele] of Object.entries(caweb_admin_args.caweb_menus)) {
		if( '6.0' === version && ['flexmega', 'megadropdown'].includes(i)){
			continue;
		}
		var o = document.createElement( 'OPTION' );

		o.value = i;
		o.text = ele;

		if( i === current_menu ){
			o.selected = true;
		}

		menu_type_picker.append( o );
	}
}

// Toggle Menu Home Link
function correct_menu_home_link_option(version){
	if( '5.5' === version ){
		jQuery('#ca_home_nav_link').parent().parent().removeClass('d-none');
	}else{
		jQuery('#ca_home_nav_link').parent().parent().addClass('d-none');
	}
}