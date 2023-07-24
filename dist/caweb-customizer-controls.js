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

// Toggle CAWeb Template Options
jQuery( document ).ready( function($) {
	let current_version = $('#ca_site_version option:selected').val();

	// Correct Options. 
	correct_options();

	$('select[id$="ca_site_version"]').on("change", function(){
		current_version = $(this).val();
		correct_options();
	} );

	function correct_options(){
		correct_template_options();
		correct_social_media_links();
	}

	// Toggle Template Options
	function correct_template_options(){
		var current_menu = $('#ca_default_navigation_menu option:selected').val();

		// Version 6.
		if( '6.0' === current_version ){
			// Drop support for mega menus.
			$('#ca_default_navigation_menu option[value="flexmega"]').addClass('d-none');
			$('#ca_default_navigation_menu option[value="megadropdown"]').addClass('d-none');

			// if current menu is no longer supported, set to singlelevel.
			if( ['flexmega','megadropdown'].includes( current_menu ) ){
				$(`#ca_default_navigation_menu option[value="${current_menu}"]`).attr('selected', false);
				$('#ca_default_navigation_menu option[value="singlelevel"]').attr('selected', true);
			}
		
			// Drop support for Menu Home Link.
			$('#ca_home_nav_link').parent().parent().addClass('d-none');
		
			// Drop support for Search on Frontpage
			$('#ca_frontpage_search_enabled').parent().parent().addClass('d-none');

			// Drop support for Utility Header.
			$('#utility-header-settings').prev().addClass('d-none');
			$('#utility-header-settings').addClass('d-none');
		// Version 5.
		}else{
			// Add support for mega menus.
			$('#ca_default_navigation_menu option[value="flexmega"]').removeClass('d-none');
			$('#ca_default_navigation_menu option[value="megadropdown"]').removeClass('d-none');

			// Add support for Menu Home Link.
			$('#ca_home_nav_link').parent().parent().removeClass('d-none');

			// Add support for Search on Frontpage
			$('#ca_frontpage_search_enabled').parent().parent().removeClass('d-none');

			// Drop support for Utility Header.
			$('#utility-header-settings').prev().removeClass('d-none');
			$('#utility-header-settings').removeClass('d-none');
		}
	}

	// Toggle Social Media Links
	function correct_social_media_links(){
		var exclusions = '6.0' === current_version ? [
			'ca_social_snapchat-settings',
			'ca_social_pinterest-settings',
			'ca_social_rss-settings',
			'ca_social_google_plus-settings',
			'ca_social_flickr-settings'
		] : ['ca_social_github-settings'];

		$('div[id^="ca_social_"]').each(function(index) {
			// hide the entire option if not allowed for specified template version
			if( exclusions.includes(this.id) ){
				$(this).addClass('d-none');
				$(this).prev().addClass('d-none');
			}else{
				$(this).removeClass('d-none');
				$(this).prev().removeClass('d-none');
			}

			var optionName = this.id.substring(0, this.id.indexOf('-'));

			// hide header option for all social link options when using version 6.
			if(  '6.0' === current_version ){
				$(`#${optionName}_header`).parent().parent().addClass('d-none');
			}else{
				$(`#${optionName}_header`).parent().parent().removeClass('d-none');
			}
		});
	}


});

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

		$(alert_status).attr('data-bs-toggle', 'toggle');
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