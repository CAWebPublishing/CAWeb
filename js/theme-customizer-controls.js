/* CAWeb Icon Menu Javascript */
jQuery(document).ready(function($) {
	$(document).on('click', '.caweb-icon-menu li', function(e){cawebIconSelected(this);});
	$(document).on('click', '.caweb-icon-menu-header .reset-icon', function(e){ resetIconSelect($(this).parent().next());});

	function cawebIconSelected(iconLi){
		resetIconSelect($(iconLi).parent());
		$(iconLi).addClass('active');

		var i = $(iconLi).parent().find('input');

		if (i.length){
			$(i).val($(iconLi).attr('title'));
		}
	}

	function resetIconSelect(iconList){
		var icon_list = $(iconList).find('LI');
		
		for(o = 0; o < icon_list.length - 1; o++){
			$(icon_list[o]).removeClass('active');
		}

		var i = $(iconList).find('input');

		if (i.length){
			$(i).val('');
		}
	}
	
});
  

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

jQuery( document ).ready( function($) {
	$('#_customize-input-caweb_add_alert_banner').click( add_alert_banner);
	$('.caweb-toggle-alert').click( toggle_alert );
	$('.caweb-remove-alert').click( remove_alert );

	function add_alert_banner(){
		var alert_list = $(this).parent().parent();
		var new_li = $(this).parent().next().clone();
		var alert_toggle = $(new_li).find('#caweb-toggle-alert');
		var alert_status = $(new_li).find('input[name^="alert-status-"]');
		var alert_remove = $(new_li).find('.caweb-remove-alert');

		$(new_li).attr('id', '');

		$(alert_toggle).on( 'click', toggle_alert );
		$(alert_remove).on( 'click', remove_alert );

		$(alert_status).attr('data-toggle', 'toggle');
		$(alert_status).attr('data-size', 'sm');

		$(alert_list).append( $(new_li) );

		$(alert_status).bootstrapToggle({
			onstyle: 'success',
		});

		//wp.editor.initialize("alertmessage-" + alertCount, caweb_admin_args.tinymce_settings);
		
	}

	function toggle_alert(){
		$( '#' + $(this).attr('data-target') ).collapse('toggle');
		$(this).find('span').toggleClass('dashicons-arrow-right');
	}

	function remove_alert(){
		var r = confirm("Are you sure you want to remove this alert? This can not be undone.");
	  
		if (r == true) {
			$(this).parent().remove();
		}
	}

});