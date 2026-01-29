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

/***/ "./src/scripts/wp/theme-customizer/bindings/alert-banners.js"
() {

eval("{jQuery(document).ready(function ($) {\n  wp.customize('caweb_alert_banner_0', function (value) {\n    value.bind(function (newval) {\n      console.log($(this).attr('name'));\n    });\n  });\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/bindings/alert-banners.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/bindings/contact-us-link.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Utility Header Contact Us Link\n  wp.customize('ca_contact_us_link', function (value) {\n    value.bind(function (newval) {\n      if (!$('.utility-header:first .settings-links .utility-contact-us').length) {\n        var settings_button = $('.utility-header:first .settings-links button[data-target=\"#siteSettings\"]');\n        var google_translate = $('.utility-header:first .settings-links #google_translate_element');\n        var google_custom_translate = $('.utility-header:first .settings-links #caweb-gtrans-custom');\n        if (google_translate.length) {\n          $('<a class=\"hidden utility-contact-us\">Contact Us</a>').insertBefore($(google_translate));\n        } else if (google_custom_translate.length) {\n          $('<a class=\"hidden utility-contact-us\">Contact Us</a>').insertBefore($(google_custom_translate));\n        } else {\n          $('<a class=\"hidden utility-contact-us\">Contact Us</a>').insertBefore($(settings_button));\n        }\n      }\n      var contact_us_link = $('.utility-header:first .settings-links .utility-contact-us');\n      if (!newval.trim()) {\n        contact_us_link.addClass('hidden');\n      } else {\n        contact_us_link.attr('href', encodeURI(newval.trim()));\n        contact_us_link.removeClass('hidden');\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/bindings/contact-us-link.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/bindings/frontpage-search.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Search on Front Page\n  wp.customize('ca_frontpage_search_enabled', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data)\n      if (newval) {\n        $('#head-search').css('top', '240px');\n        $('#head-search').addClass('featured-search');\n        $('#head-search').removeClass('active');\n      } else {\n        $('#head-search').removeClass('featured-search');\n        $('#head-search').attr('style', '');\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/bindings/frontpage-search.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/bindings/google-translate.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Bind to Google Translate Custom Translate Page \n  wp.customize('ca_google_trans_page', function (value) {\n    value.bind(function (newval) {\n      if (newval.trim()) {\n        $('#caweb-gtrans-custom').attr('href', encodeURI(newval.trim()));\n        $('#caweb-gtrans-custom').removeClass('hidden');\n      } else {\n        $('#caweb-gtrans-custom').addClass('hidden');\n      }\n    });\n  });\n\n  // Bind to Google Translate Custom CAWeb_Customize_Icon_Control \n  wp.customize('ca_google_trans_icon', function (value) {\n    value.bind(function (newval) {\n      var icon = $('#caweb-gtrans-custom span');\n      if (!newval.trim()) {\n        icon.addClass('hidden');\n      } else {\n        icon.attr(\"class\", \"ca-gov-icon-\" + newval.trim);\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/bindings/google-translate.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/bindings/header-ca-branding.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Organization Logo Brand\n  wp.customize('header_ca_branding', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data)\n      var org_logo = $('.header-organization-banner a img');\n      if (org_logo.length) {\n        org_logo.attr('src', newval);\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/bindings/header-ca-branding.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/bindings/home-nav-link.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Menu Home Link\n  wp.customize('ca_home_nav_link', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data)\n      if (-1 == $('#nav_list li:first').hasClass('nav-item-home')) {\n        $('#nav_list').prepend('<li class=\"nav-item nav-item-home hidden\"><a href=\"/\" class=\"first-level-link\"><span class=\"ca-gov-icon-home\"></span> Home</a></li>');\n      }\n      if (newval) {\n        if ('/' == document.location.pathname) {\n          alert(\"This feature is not visible on the Front Page.\");\n        } else {\n          $('#nav_list li:first').removeClass('hidden');\n        }\n      } else {\n        $('#nav_list li:first').addClass('hidden');\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/bindings/home-nav-link.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/bindings/index.js"
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{__webpack_require__(\"./src/scripts/wp/theme-customizer/bindings/alert-banners.js\");\n__webpack_require__(\"./src/scripts/wp/theme-customizer/bindings/contact-us-link.js\");\n__webpack_require__(\"./src/scripts/wp/theme-customizer/bindings/frontpage-search.js\");\n__webpack_require__(\"./src/scripts/wp/theme-customizer/bindings/google-translate.js\");\n__webpack_require__(\"./src/scripts/wp/theme-customizer/bindings/header-ca-branding.js\");\n__webpack_require__(\"./src/scripts/wp/theme-customizer/bindings/home-nav-link.js\");\n__webpack_require__(\"./src/scripts/wp/theme-customizer/bindings/sticky-navigation.js\");\n__webpack_require__(\"./src/scripts/wp/theme-customizer/bindings/utility-header-custom-links.js\");\n__webpack_require__(\"./src/scripts/wp/theme-customizer/bindings/utility-header-home-icon.js\");\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/bindings/index.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/bindings/sticky-navigation.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Sticky Navigation\n  var current_padding = $('#main-content').css('padding-top');\n  wp.customize('ca_sticky_navigation', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data)\n      if (newval) {\n        $('body').addClass('sticky_nav');\n        $('#header').addClass('fixed');\n        $('#main-content').css('padding-top', current_padding);\n      } else {\n        $('body').removeClass('sticky_nav');\n        $('#header').removeClass('fixed');\n        $('#main-content').css('padding-top', 0);\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/bindings/sticky-navigation.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/bindings/utility-header-custom-links.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Utility Header Custom Link 1 Text\n  wp.customize('ca_utility_link_1_name', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data) \n      update_custom_link($('.utility-header .settings-links .utility-custom-1'), newval);\n    });\n  });\n\n  // Utility Header Custom Link 1 URL\n  wp.customize('ca_utility_link_1', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data) \n      update_custom_link($('.utility-header .settings-links .utility-custom-1'), newval, 'href');\n    });\n  });\n\n  // Utility Header Custom Link 1 Target\n  wp.customize('ca_utility_link_1_new_window', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data) \n      update_custom_link($('.utility-header .settings-links .utility-custom-1'), newval, 'target');\n    });\n  });\n\n  // Utility Header Custom Link 2 Text\n  wp.customize('ca_utility_link_2_name', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data) \n      update_custom_link($('.utility-header .settings-links .utility-custom-2'), newval);\n    });\n  });\n\n  // Utility Header Custom Link 2 URL\n  wp.customize('ca_utility_link_2', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data) \n      update_custom_link($('.utility-header .settings-links .utility-custom-2'), newval, 'href');\n    });\n  });\n\n  // Utility Header Custom Link 2 Target\n  wp.customize('ca_utility_link_2_new_window', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data) \n      update_custom_link($('.utility-header .settings-links .utility-custom-2'), newval, 'target');\n    });\n  });\n\n  // Utility Header Custom Link 3 Text\n  wp.customize('ca_utility_link_3_name', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data) \n      update_custom_link($('.utility-header .settings-links .utility-custom-3'), newval);\n    });\n  });\n\n  // Utility Header Custom Link 3 Url\n  wp.customize('ca_utility_link_3', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data) \n      update_custom_link($('.utility-header .settings-links .utility-custom-3'), newval, 'href');\n    });\n  });\n  wp.customize('ca_utility_link_3_new_window', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data) \n      update_custom_link($('.utility-header .settings-links .utility-custom-3'), newval, 'target');\n    });\n  });\n  function update_custom_link(link, value, attr = 'html') {\n    if (link.length) {\n      if ('href' == attr) {\n        $(link).attr('href', encodeURI(value));\n      } else if ('target' == attr) {\n        if (value) {\n          $(link).attr('target', '_blank');\n        } else {\n          $(link).attr('target', '_self');\n        }\n      } else if ('html' == attr) {\n        $(link).html(value);\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/bindings/utility-header-custom-links.js?\n}");

/***/ },

/***/ "./src/scripts/wp/theme-customizer/bindings/utility-header-home-icon.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Utility Header Home Link\n  wp.customize('ca_utility_home_icon', function (value) {\n    value.bind(function (newval) {\n      //Do stuff (newval variable contains your \"new\" setting data)\n      if (!$('.utility-header:first .social-media-links .utility-home-icon').length) {\n        $('<a href=\"/\" title=\"Home\" class=\"hidden utility-home-icon ca-gov-icon-home\"><span class=\"sr-only\">Home</span></a>').insertAfter($('.utility-header:first .social-media-links .header-cagov-logo'));\n      }\n      var home_link = $('.utility-header:first .social-media-links .utility-home-icon');\n      if (newval) {\n        home_link.removeClass('hidden');\n      } else {\n        home_link.addClass('hidden');\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/wp/theme-customizer/bindings/utility-header-home-icon.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/wp/theme-customizer/bindings/index.js");
/******/ 	
/******/ })()
;