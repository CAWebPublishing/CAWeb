/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 38:
/***/ (() => {

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
  


/***/ }),

/***/ 41:
/***/ (() => {

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

/***/ }),

/***/ 55:
/***/ (() => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__(38);
__webpack_require__(41);

__webpack_require__(55);

})();

/******/ })()
;