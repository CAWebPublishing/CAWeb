/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/admin/icon.js":
/*!***********************************!*\
  !*** ./src/scripts/admin/icon.js ***!
  \***********************************/
/***/ (() => {

/* CAWeb Icon Menu Javascript */
jQuery(document).ready(function ($) {
  $(document).on('click', '.caweb-icon-menu li', function (e) {
    cawebIconSelected(this);
  });
  $(document).on('click', '.caweb-icon-menu-header .reset-icon', function (e) {
    resetIconSelect($(this).parent().next());
  });
  function cawebIconSelected(iconLi) {
    resetIconSelect($(iconLi).parent());
    $(iconLi).addClass('active');
    var i = $(iconLi).parent().find('input');
    if (i.length) {
      $(i).val($(iconLi).attr('title'));
    }
  }
  function resetIconSelect(iconList) {
    var icon_list = $(iconList).find('LI');
    for (o = 0; o < icon_list.length - 1; o++) {
      $(icon_list[o]).removeClass('active');
    }
    var i = $(iconList).find('input');
    if (i.length) {
      $(i).val('');
    }
  }
});

/***/ }),

/***/ "./src/scripts/wp/theme-customizer/controls/alert-banners.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/wp/theme-customizer/controls/alert-banners.js ***!
  \*******************************************************************/
/***/ (() => {

jQuery(document).ready(function ($) {
  $('#_customize-input-caweb_add_alert_banner').click(add_alert_banner);
  $('.caweb-toggle-alert').click(toggle_alert);
  $('.caweb-remove-alert').click(remove_alert);
  function add_alert_banner() {
    var alert_list = $(this).parent().parent();
    var new_li = $(this).parent().next().clone();
    var alert_toggle = $(new_li).find('#caweb-toggle-alert');
    var alert_status = $(new_li).find('input[name^="alert-status-"]');
    var alert_remove = $(new_li).find('.caweb-remove-alert');
    $(new_li).attr('id', '');
    $(alert_toggle).on('click', toggle_alert);
    $(alert_remove).on('click', remove_alert);
    $(alert_status).attr('data-bs-toggle', 'toggle');
    $(alert_status).attr('data-size', 'sm');
    $(alert_list).append($(new_li));
    $(alert_status).bootstrapToggle({
      onstyle: 'success'
    });

    //wp.editor.initialize("alertmessage-" + alertCount, caweb_admin_args.tinymce_settings);
  }
  function toggle_alert() {
    $('#' + $(this).attr('data-target')).collapse('toggle');
    $(this).find('span').toggleClass('dashicons-arrow-right');
  }
  function remove_alert() {
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************************************!*\
  !*** ./src/scripts/wp/theme-customizer/controls/index.js ***!
  \***********************************************************/
__webpack_require__(/*! ../../../admin/icon */ "./src/scripts/admin/icon.js");
__webpack_require__(/*! ./alert-banners */ "./src/scripts/wp/theme-customizer/controls/alert-banners.js");
})();

/******/ })()
;
//# sourceMappingURL=caweb-customizer-controls.js.map