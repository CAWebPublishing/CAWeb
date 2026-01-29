/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/admin/icon.js"
() {

eval("{/* CAWeb Icon Menu Javascript */\njQuery(document).ready(function ($) {\n  $(document).on('click', '.caweb-icon-menu li', function (e) {\n    cawebIconSelected(this);\n  });\n  $(document).on('click', '.caweb-icon-menu-header .reset-icon', function (e) {\n    resetIconSelect($(this).parent().next());\n  });\n  function cawebIconSelected(iconLi) {\n    resetIconSelect($(iconLi).parent());\n    $(iconLi).addClass('active');\n    var i = $(iconLi).parent().find('input');\n    if (i.length) {\n      $(i).val($(iconLi).attr('title'));\n    }\n  }\n  function resetIconSelect(iconList) {\n    var icon_list = $(iconList).find('LI');\n    for (o = 0; o < icon_list.length - 1; o++) {\n      $(icon_list[o]).removeClass('active');\n    }\n    var i = $(iconList).find('input');\n    if (i.length) {\n      $(i).val('');\n    }\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/admin/icon.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/controls/alert-banners.js"
() {

eval("{jQuery(document).ready(function ($) {\n  $('#_customize-input-caweb_add_alert_banner').click(add_alert_banner);\n  $('.caweb-toggle-alert').click(toggle_alert);\n  $('.caweb-remove-alert').click(remove_alert);\n  function add_alert_banner() {\n    var alert_list = $(this).parent().parent();\n    var new_li = $(this).parent().next().clone();\n    var alert_toggle = $(new_li).find('#caweb-toggle-alert');\n    var alert_status = $(new_li).find('input[name^=\"alert-status-\"]');\n    var alert_remove = $(new_li).find('.caweb-remove-alert');\n    $(new_li).attr('id', '');\n    $(alert_toggle).on('click', toggle_alert);\n    $(alert_remove).on('click', remove_alert);\n    $(alert_status).attr('data-bs-toggle', 'toggle');\n    $(alert_status).attr('data-size', 'sm');\n    $(alert_list).append($(new_li));\n    $(alert_status).bootstrapToggle({\n      onstyle: 'success'\n    });\n\n    //wp.editor.initialize(\"alertmessage-\" + alertCount, caweb_admin_args.tinymce_settings);\n  }\n  function toggle_alert() {\n    $('#' + $(this).attr('data-target')).collapse('toggle');\n    $(this).find('span').toggleClass('dashicons-arrow-right');\n  }\n  function remove_alert() {\n    var r = confirm(\"Are you sure you want to remove this alert? This can not be undone.\");\n    if (r == true) {\n      $(this).parent().remove();\n    }\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/controls/alert-banners.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/controls/index.js"
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{__webpack_require__(\"./src/scripts/admin/icon.js\");\n__webpack_require__(\"./src/scripts/wp/theme-customizer/controls/alert-banners.js\");\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/controls/index.js?\n}");

/***/ }

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/wp/theme-customizer/controls/index.js");
/******/ 	
/******/ })()
;