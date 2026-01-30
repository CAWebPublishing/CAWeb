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

/***/ "./node_modules/@caweb/icon-library/build/font-only.css"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@caweb/theme/./node_modules/@caweb/icon-library/build/font-only.css?\n}");

/***/ },

/***/ "./src/scripts/a11y/button.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \r\n  Button Element Accessibility \r\n  */\n\n  var button_elements = $('button:not(.first-level-btn)[role=\"button\"]');\n  if (button_elements.length) {\n    button_elements.each(function (index, element) {\n      $(element).removeAttr('role');\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/button.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/blog.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /*\r\n  Divi Blog Module Accessibility \r\n  Retrieve all Divi Blog Modules\r\n  */\n\n  var blog_modules = $('div').filter(function () {\n    return this.className.match(/\\bet_pb_blog_\\d\\b/);\n  });\n\n  // Run only if there is a Blog Module on the current page\n  if (blog_modules.length) {\n    blog_modules.each(function (index, element) {\n      // Grab each blog article\n      blog = $(element).find('article');\n      blog.each(function (i) {\n        b = $(blog[i]);\n        // Grab the article title\n        title = b.children('.entry-title').text();\n\n        // Add Aria-Label to Post Article\n        b.attr('aria-label', title);\n\n        // Grab the More Information Button from the Post content\n        // Divi appends the More Information button as the last child of the content\n        read_more = b.children('.post-content').children('.more-link:last-child');\n\n        // If there is a More Information Button append SR Tag with Title\n        if (read_more.length) {\n          read_more.append('<span class=\"sr-only\">' + title + '</span>');\n        }\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/blog.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/blurb.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \r\n     Divi Blurb Module Accessibility \r\n     Retrieve all Divi Blurb Modules\r\n     */\n  var blurb_modules = $('div.et_pb_blurb');\n\n  // Run only if there is a Blog Module on the current page\n  if (blurb_modules.length) {\n    blurb_modules.each(function (index, element) {\n      var header = $(element).find('.et_pb_module_header');\n      var header_title = header.length ? $(header).children('a').length ? $(header).children('a')[0].innerText : header[0].innerText : '';\n      var blurb_img = $(element).find('.et_pb_main_blurb_image');\n      var img_link = $(blurb_img).find('a');\n      if (blurb_img.length && img_link.length) {\n        $(img_link).attr('title', header_title);\n      }\n      $(element).children('a').on('focusin', function () {\n        $(this).parent().css('outline', \"#2ea3f2 solid 2px\");\n      });\n      $(element).children('a').on('focusout', function () {\n        $(this).parent().css('outline', '0');\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/blurb.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/button.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \r\n     Divi Button Module Accessibility \r\n     Retrieve all Divi Button Modules\r\n     */\n  var button_modules = $('a.et_pb_button');\n\n  // Run only if there is a Button Module on the current page\n  if (button_modules.length) {\n    button_modules.each(function (index, element) {\n      // Add text-decoration-none to each button module\n      $(element).addClass('text-decoration-none');\n\n      // Divi has removed et_pb_custom_button_icon class from buttons.\n      // If Button is using a data-icon add the missing class.\n      if ('' !== $(element).attr('data-icon')) {\n        $(element).addClass('et_pb_custom_button_icon');\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/button.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/deep-links.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \n  Fixes Deep Links issue created by Divi\n     */\n  var links = $('a[href^=\"#\"]:not([href=\"#\"])');\n\n  // Run only if there are deep links on the current page\n  if (links.length) {\n    links.each(function (index, element) {\n      // Add et_smooth_scroll_disabled to each link\n      $(element).addClass('et_smooth_scroll_disabled');\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/deep-links.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/fullwidth-header.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /*\r\n     Divi Fullwidth Header Module Accessibility \r\n     Retrieve all Divi Fullwidth Header Modules\r\n  */\n  var fullwidth_header_modules = $('section').filter(function () {\n    return this.className.match(/\\bet_pb_fullwidth_header_\\d\\b/);\n  });\n\n  // Run only if there is a Fullwidth Header Module on the current page\n  if (fullwidth_header_modules.length) {\n    fullwidth_header_modules.each(function (index, element) {\n      // Grab all More Buttons\n      more_buttons = $(element).find('.et_pb_more_button');\n      more_buttons.each(function (i) {\n        m = $(more_buttons[i]);\n        m.addClass('text-decoration-none');\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/fullwidth-header.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/gallery.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \r\n  Retrieve all Divi Gallery Modules\r\n  */\n  var gallery_modules = $('div').filter(function () {\n    return this.className.match(/\\bet_pb_gallery\\b/);\n  });\n\n  // Run only if there is a Slider Module on the current page\n  if (gallery_modules.length) {\n    gallery_modules.each(function (index, element) {\n      // Grab all gallery images\n      var gallery_images = $(element).find('.et_pb_gallery_image img');\n      gallery_images.each(function (i, g) {\n        // add the value of the anchors title to the alt text of the image\n        $(g).attr('alt', $(g).parent().attr('title'));\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/gallery.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/index.js"
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{__webpack_require__(\"./src/scripts/a11y/divi/blog.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/blurb.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/button.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/deep-links.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/fullwidth-header.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/gallery.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/person.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/search.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/slider.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/tab.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/toggle.js\");\n__webpack_require__(\"./src/scripts/a11y/divi/video.js\");\n\n// This prevents Divi from anchor positioning when smooth scrolling\nwindow.et_pb_smooth_scroll = () => {};\n\n// this prevents Divi from adding classes to navigation.\nwindow.et_pb_toggle_nav_menu = () => {};\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/index.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/person.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /*\r\n  Divi Person Module Accessibility \r\n  Retrieve all Divi Person Modules\r\n  */\n\n  var person_modules = $('div').filter(function () {\n    return this.className.match(/\\bet_pb_team_member_\\d\\b/);\n  });\n\n  // Run only if there is a Person Module on the current page\n  if (person_modules.length) {\n    person_modules.each(function (index, element) {\n      // Grab each person header\n      person_name = $(element).find('.et_pb_module_header').html();\n      social_links = $(element).find('.et_pb_member_social_links li a');\n      social_links.each(function (i, e) {\n        social = $(e).html().replace('<span>', '').replace('</span>', '');\n        $(e).attr('title', social + ' Profile for ' + person_name);\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/person.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/search.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /*\r\n  Divi Search Module Form Accessibility\r\n  Retrieve all Divi Search Module Forms\r\n  */\n  var search_modules = $('form.et_pb_searchform');\n\n  /*\r\n     Divi Search Module Accessibility\r\n     Retrieve all Divi Search Modules\r\n    */\n  var et_bocs = $('#et-boc.et-boc');\n\n  // Run only if there is a Search Module on the current page\n  if (search_modules.length) {\n    search_modules.each(function (index, element) {\n      var searchInput = $(element).find('input[name=\"s\"]');\n      var searchLabel = $(element).find('label');\n      $(element).attr('aria-label', \"Divi Search Form \" + index);\n      $(searchInput).attr('id', 'divi-search-module-form-input-' + index);\n      $(searchLabel).attr('for', 'divi-search-module-form-input-' + index);\n    });\n  }\n\n  // Run only if there is more than 1 #et-boc.et-boc element\n  if (et_bocs.length) {\n    et_bocs.each(function (index, element) {\n      if (index) {\n        $(element).attr('id', $(element).attr('id') + '-' + index);\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/search.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/slider.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \r\n  Retrieve all Divi Post Slider Modules\r\n  */\n  let slider_modules = $('div').filter(function () {\n    return this.className.match(/\\bet_pb_slider\\b|\\bet_pb_fullwidth_slider\\d\\b/);\n  });\n\n  // Run only if there is a Slider Module on the current page\n  if (slider_modules.length) {\n    slider_modules.each(function (index, slider) {\n      // Grab all slides in slider\n      let slides = $(slider).find('.et_pb_slide');\n      slides.each(function (i, slide) {\n        // Grab the slide title and add the text-decoration-none class\n        title = $(slide).find('.et_pb_slide_title a');\n        title.addClass('text-decoration-none');\n      });\n\n      // Grab Slider Arrows\n      let arrows = $(slider).find('.et-pb-slider-arrows');\n      arrows.each(function (a, arrow) {\n        // Grab each arrow control\n        let prev_button = $(arrow).find('a.et-pb-arrow-prev');\n        let next_button = $(arrow).find('a.et-pb-arrow-next');\n        prev_button.addClass('text-decoration-none');\n        prev_button.attr('title', 'Previous Arrow. To activate, press Enter key.');\n        prev_button.find('span').addClass('sr-only');\n        next_button.addClass('text-decoration-none');\n        next_button.attr('title', 'Next Arrow. To activate, press Enter key.');\n        next_button.find('span').addClass('sr-only');\n      });\n\n      // Grab Slider Controllers\n      let controllers = $(slider).find('.et-pb-controllers a');\n      controllers.each(function (i, controller) {\n        controller.title = `Slide ${controller.innerText} of ${controllers.length}. To activate, press Enter key.`;\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/slider.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/tab.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \r\n  Divi Tab Module Accessibility \r\n  Retrieve all Divi Tab Modules\r\n  */\n  var tab_modules = $('div').filter(function () {\n    return this.className.match(/\\bet_pb_tabs_\\d\\b/);\n  });\n\n  // Run only if there is a Tab Module on the current page\n  if (tab_modules.length) {\n    setTimeout(function () {\n      tab_modules.each(function (index, element) {\n        // Grab each tab control list\n        var tab_list = $(element).find('.et_pb_tabs_controls');\n\n        // Lowercase the Tab Control Role\n        $(tab_list).attr('role', 'tablist');\n      });\n    }, 100);\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/tab.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/toggle.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /*\r\n  Divi Toggle Module Accessibility\r\n  Retrieve all Divi Toggle Modules\r\n    */\n  let toggle_modules = $('div.et_pb_toggle');\n\n  // Run only if there is a Toggle Module on the current page\n  if (toggle_modules.length) {\n    // Callback function to execute when accordion is interacted with\n    const callback = (toggle, observer) => {\n      for (const mutation of toggle) {\n        if (mutation.type === \"attributes\" && mutation.attributeName === \"class\") {\n          // Update the aria-expanded attribute\n          let expanded = $(mutation.target).hasClass('et_pb_toggle_open') ? 'true' : 'false';\n          $(mutation.target).attr('aria-expanded', expanded);\n        }\n      }\n    };\n    toggle_modules.each(function (index, toggle) {\n      let title = $(toggle).find('.et_pb_toggle_title');\n      let expanded = $(toggle).hasClass('et_pb_toggle_open') ? 'true' : 'false';\n      $(toggle).attr('tabindex', 0);\n      $(toggle).attr('aria-expanded', expanded);\n      toggle.addEventListener('keydown', function (e) {\n        let toggleKeys = [1, 13, 32]; // key codes for enter(13) and space(32), JAWS registers Enter keydown as click and e.which = 1\n\n        if (toggleKeys.includes(e.which)) {\n          $(title).click();\n        }\n\n        // Prevents spacebar from scrolling page to the bottom\n        if (32 === e.which) {\n          e.preventDefault();\n        }\n      });\n      // Create an observer instance linked to the callback function\n      let observer = new MutationObserver(callback);\n\n      // Start observing the target node for configured mutations\n      observer.observe(toggle, {\n        attributes: true\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/toggle.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/divi/video.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /*\r\n     Divi Video Module Accessibility\r\n     Retrieve all Divi Video Modules\r\n     */\n  var video_modules = $('div.et_pb_video');\n\n  /*\r\n  Divi Video Slider Module Accessibility\r\n  Retrieve all Divi Video Modules\r\n  */\n  var video_slider_modules = $('div').filter(function () {\n    return this.className.match(/\\bet_pb_video_slider_\\d\\b/);\n  });\n\n  // Run only if there is a Video Module on the current page\n  if (video_modules.length) {\n    video_modules.each(function (index, element) {\n      var frame = $(element).find('iframe');\n      frame.attr('title', 'Divi Video Module IFrame ' + (index + 1));\n      $(frame).removeAttr('frameborder');\n      $(frame).attr('id', 'fitvid' + (index + 1));\n      var src = $(frame).attr('src');\n      $(frame).attr('src', src + '&amp;rel=0');\n    });\n  }\n\n  // Run only if there is a Video Slider Module Items on the current page\n  if (video_slider_modules.length) {\n    video_slider_modules.each(function (index, element) {\n      var slides = $(element).find('.et_pb_slide');\n      slides.each(function (i, s) {\n        play_button = $(s).find('.et_pb_video_play');\n        carousel_play = $(element).find('.et_pb_carousel_item.position_' + (i + 1)).find('.et_pb_video_play');\n        $(play_button).addClass('text-decoration-none');\n        $(play_button).attr('title', 'Play Video ' + (i + 1));\n        if (carousel_play.length) {\n          $(carousel_play).addClass('text-decoration-none');\n          $(carousel_play).attr('title', 'Play Video ' + (i + 1));\n        }\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/divi/video.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/index.js"
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{__webpack_require__(\"./src/scripts/a11y/divi/index.js\");\n__webpack_require__(\"./src/scripts/a11y/plugins/index.js\");\n__webpack_require__(\"./src/scripts/a11y/button.js\");\n__webpack_require__(\"./src/scripts/a11y/others.js\");\n__webpack_require__(\"./src/scripts/a11y/twitter.js\");\n__webpack_require__(\"./src/scripts/a11y/utility-header.js\");\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/index.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/others.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /*\r\n     Divi Accessibility Plugin Adds a \"Skip to Main Content\" anchor tag\r\n     Retrieve all a[href=\"#main-content\"]\r\n  */\n  var main_content_anchors = $('a[href=\"#main-content\"]');\n\n  // Run only if there is more than 1 a[href=\"#main-content\"] on the current page\n  if (1 < main_content_anchors.length) {\n    main_content_anchors.each(function (index, element) {\n      // Remove all anchors not in the header\n      if (!$($(element).parent().parent()).is('header')) {\n        $(element).remove();\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/others.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/plugins/add-to-any.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Do this after the page has loaded\n  $(window).on('load', function () {\n    /*\r\n    Add to Any Accessibility \r\n    IFrame html is used to format content\r\n    */\n    var addtoany_iframe = $('#a2apage_sm_ifr');\n    if (addtoany_iframe.length) {\n      addtoany_iframe.each(function (index, element) {\n        stripeIframeAttributes(element);\n      });\n    }\n  });\n  function stripeIframeAttributes(frame) {\n    $(frame).removeAttr('frameborder');\n    $(frame).removeAttr('scrolling');\n    $(frame).removeAttr('allowtransparency');\n    $(frame).removeAttr('allowfullscreen');\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/plugins/add-to-any.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/plugins/constant-contact-forms.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Do this after the page has loaded\n  $(window).on('load', function () {\n    /*\r\n    Constant Contact Forms by MailMunch Accessibility \r\n    IFrame html is used to format content\r\n    */\n    var mailmunch_iframe = $('iframe.mailmunch-embedded-iframe');\n    if (mailmunch_iframe.length) {\n      mailmunch_iframe.each(function (index, element) {\n        $(element).attr('title', 'Constant Contact by MailMunch IFrame');\n        stripeIframeAttributes(element);\n      });\n      setTimeout(function () {\n        var mailmunch_img = $('img[src^=\"//analytics.mailmunch.co/event\"');\n        $(mailmunch_img).attr('alt', '');\n      }, 1000);\n    }\n  });\n  function stripeIframeAttributes(frame) {\n    $(frame).removeAttr('frameborder');\n    $(frame).removeAttr('scrolling');\n    $(frame).removeAttr('allowtransparency');\n    $(frame).removeAttr('allowfullscreen');\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/plugins/constant-contact-forms.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/plugins/google-calendar.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \r\n  Google Calendar Accessibility \r\n  */\n  var google_calendar_elements = $('iframe[src^=\"https://calendar.google.com/calendar/embed\"]');\n  if (google_calendar_elements.length) {\n    google_calendar_elements.each(function (index, element) {\n      stripeIframeAttributes(element);\n      title = google_calendar_elements.length > 1 ? 'Google Calendar Embed ' + (index + 1) : 'Google Calendar Embed';\n      $(element).attr('title', title);\n    });\n  }\n  function stripeIframeAttributes(frame) {\n    $(frame).removeAttr('frameborder');\n    $(frame).removeAttr('scrolling');\n    $(frame).removeAttr('allowtransparency');\n    $(frame).removeAttr('allowfullscreen');\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/plugins/google-calendar.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/plugins/google-recaptcha.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Do this after the page has loaded\n  $(window).on('load', function () {\n    /*\r\n    Google Recaptcha Accessibility\r\n    Retrieve recaptcha textareas\r\n    */\n\n    var g_recaptcha_response_textarea = $('textarea[id^=\"g-recaptcha-response\"]');\n    if (g_recaptcha_response_textarea.length) {\n      g_recaptcha_response_textarea.each(function (index, element) {\n        $(element).attr('aria-label', 'Google Recaptcha Response');\n      });\n    }\n\n    /*\r\n    Google Recaptcha Hidden Accessibility\r\n    Retrieve recaptcha hidden input\r\n    */\n\n    var g_recaptcha_hidden_response = $('input[name=\"g-recaptcha-hidden\"]');\n    if (g_recaptcha_hidden_response.length) {\n      g_recaptcha_hidden_response.each(function (index, element) {\n        $(element).attr('aria-label', 'Google Recaptcha Hidden Response');\n      });\n    }\n\n    /*\r\n    Google Recaptcha IFrame\r\n    */\n    var g_recaptcha_iframe = $('.g-recaptcha iframe, .grecaptcha-logo iframe');\n    if (g_recaptcha_iframe.length) {\n      g_recaptcha_iframe.each(function (index, element) {\n        $(element).attr('title', 'Google Recaptcha');\n        stripeIframeAttributes(element);\n      });\n    }\n\n    /*\r\n    Google Recaptcha Challenge IFrame\r\n    */\n    setTimeout(function () {\n      var g_recaptcha_challenge_iframe = $('iframe[title=\"recaptcha challenge\"]');\n      if (g_recaptcha_challenge_iframe.length) {\n        g_recaptcha_challenge_iframe.each(function (index, element) {\n          stripeIframeAttributes(element);\n        });\n      }\n    }, 1000);\n  });\n  function stripeIframeAttributes(frame) {\n    $(frame).removeAttr('frameborder');\n    $(frame).removeAttr('scrolling');\n    $(frame).removeAttr('allowtransparency');\n    $(frame).removeAttr('allowfullscreen');\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/plugins/google-recaptcha.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/plugins/index.js"
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{__webpack_require__(\"./src/scripts/a11y/plugins/add-to-any.js\");\n__webpack_require__(\"./src/scripts/a11y/plugins/constant-contact-forms.js\");\n__webpack_require__(\"./src/scripts/a11y/plugins/google-calendar.js\");\n__webpack_require__(\"./src/scripts/a11y/plugins/google-recaptcha.js\");\n__webpack_require__(\"./src/scripts/a11y/plugins/mailchimp.js\");\n__webpack_require__(\"./src/scripts/a11y/plugins/mailpoet.js\");\n__webpack_require__(\"./src/scripts/a11y/plugins/tabby-response.js\");\n__webpack_require__(\"./src/scripts/a11y/plugins/tablepress.js\");\n__webpack_require__(\"./src/scripts/a11y/plugins/wpforms.js\");\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/plugins/index.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/plugins/mailchimp.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \r\n    MailChimp Accessibility \r\n    Retrieve radio field containers\r\n    */\n\n  var mailchimp_form = $('#mc-embedded-subscribe-form');\n  if (mailchimp_form.length) {\n    mailchimp_form.each(function (index, element) {\n      var inputs = $(element).find('input').filter(function () {\n        return !$(this).attr('class') && !$(this).attr('id');\n      });\n      var input_groups = $(element).find('.mc-field-group.input-group');\n\n      // Add aria-label to non-hidden hidden input \n      $(inputs).attr('aria-label', 'Do not fill this, do not remove or risk form bot signups');\n      input_groups.each(function (i, e) {\n        // if group contains radio buttons\n        if ($(e).find('input[type=\"radio\"]').length) {\n          $(e).attr('role', 'radiogroup');\n          $(e).attr('aria-label', 'MailChimp Radio Button Group');\n          // if group contains checkbox\n        } else if ($(e).find('input[type=\"checkbox\"]').length) {\n          $(e).attr('role', 'group');\n          $(e).attr('aria-label', 'MailChimp Checkbox Group');\n        }\n      });\n      $(element).find('input').each(function (i, e) {\n        $(e).removeAttr('aria-invalid');\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/plugins/mailchimp.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/plugins/mailpoet.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /*\r\n  MailPoet Accessibility \r\n  Retrieve recaptcha iFrame\r\n  */\n  setTimeout(function () {\n    var mailpoet_recaptcha_iframe = $('.mailpoet_recaptcha_container iframe');\n    if (mailpoet_recaptcha_iframe.length) {\n      mailpoet_recaptcha_iframe.each(function (index, element) {\n        $(element).attr('title', 'MailPoet Recaptcha');\n        stripeIframeAttributes(element);\n      });\n    }\n  }, 1000);\n  function stripeIframeAttributes(frame) {\n    $(frame).removeAttr('frameborder');\n    $(frame).removeAttr('scrolling');\n    $(frame).removeAttr('allowtransparency');\n    $(frame).removeAttr('allowfullscreen');\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/plugins/mailpoet.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/plugins/tabby-response.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \r\n         Tabby Response Accessibility \r\n         Retrieve tablist \r\n         */\n  var tabby_response_tabs = $('.responsive-tabs-wrapper .responsive-tabs');\n  if (tabby_response_tabs.length) {\n    $(tabby_response_tabs).find('ul.responsive-tabs__list li').each(function (index, element) {\n      $(element).attr('aria-label', $(element).html());\n      $(element).on(\"keyup\", function (e) {\n        if (e.keyCode == 13) {\n          // enter\n          resetTabbyFocus(element);\n        }\n      });\n      $(element).on(\"click\", function () {\n        resetTabbyFocus(element);\n      });\n      var panel = $(element).attr('aria-controls');\n      $(\"#\" + panel).attr('tabindex', '0');\n    });\n    function resetTabbyFocus(element) {\n      var panel = $(element).attr('aria-controls');\n      var firstFocusable = $(\"#\" + panel);\n      $(firstFocusable).focus();\n      $(firstFocusable).on(\"keydown\", function (e) {\n        if (e.shiftKey && e.keyCode == 9) {\n          // shift+tab\n          $(element).next().focus();\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/plugins/tabby-response.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/plugins/tablepress.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* \r\n  TablePress Accessibility \r\n  Add aria labels to datatables search field \r\n  */\n  var dataTables_filter = $('.dataTables_filter');\n  if (dataTables_filter.length) {\n    dataTables_filter.each(function (index, element) {\n      var l = $(element).find('label');\n      var i = $(element).find('input');\n      $(l).attr('for', $(i).attr('aria-controls') + '-search');\n      $(i).attr('id', $(i).attr('aria-controls') + '-search');\n    });\n  }\n  setTimeout(function () {\n    /* \r\n    TablePress Accessibility \r\n    Add missing aria-sort to headers\r\n    */\n    var tablepress_headers = $('table[id^=\"tablepress-\"] thead tr th');\n    if (tablepress_headers.length) {\n      add_aria_sort();\n      tablepress_headers.each(function (index, element) {\n        $(element).on('click', add_aria_sort);\n      });\n      function add_aria_sort() {\n        tablepress_headers.each(function (index, element) {\n          if (undefined == $(element).attr('aria-sort')) {\n            $(element).attr('aria-sort', 'none');\n          }\n        });\n      }\n    }\n\n    /* \r\n    TablePress Accessibility \r\n    Add href to pagination links\r\n    */\n    var dataTables_pagination = $('.dataTables_paginate .paginate_button');\n    if (dataTables_pagination.length) {\n      dataTables_pagination.each(function (index, element) {\n        $(element).attr('href', '#');\n      });\n    }\n  }, 500);\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/plugins/tablepress.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/plugins/wpforms.js"
() {

eval("{/*\r\n\tWPForms v1.8.3.2 Accessibility \r\n\tLast updated 9/25/2023\r\n*/\n\n// WPForms Submit buttons.\nvar wpforms_submit = document.querySelectorAll('.wpforms-submit[aria-live=\"assertive\"]');\n\n// WPForms Confirmation message.\nvar wpforms_confirmation_msg = document.querySelector('div[id^=\"wpforms-confirmation-\"] p');\n\n// iterate over submit buttons.\nif (wpforms_submit.length) {\n  // Mark assertive live regions as aria-atomic.\n  wpforms_submit.forEach(element => {\n    element.ariaAtomic = true;\n  });\n}\n\n// Give focus to confirmation message on form submission,\n// doesn't work when Ajax Submission is enabled.\nif (null !== wpforms_confirmation_msg) {\n  wpforms_confirmation_msg.tabIndex = 0;\n  wpforms_confirmation_msg.focus();\n}\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/plugins/wpforms.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/twitter.js"
() {

eval("{jQuery(document).ready(function ($) {\n  // Do this after the page has loaded\n  $(window).on('load', function () {\n    /*\r\n    Twitter Feed Accessibility \r\n    IFrame html is used to format content\r\n    */\n    var twitter_iframe = $('iframe[id^=\"twitter-widget-\"], iframe[src^=\"https://platform.twitter.com\"]');\n    if (twitter_iframe.length) {\n      twitter_iframe.each(function (index, element) {\n        stripeIframeAttributes(element);\n      });\n      setTimeout(function () {\n        var rufous_iframe = $('iframe[id=\"rufous-sandbox\"]');\n        stripeIframeAttributes(rufous_iframe);\n      }, 1000);\n    }\n  });\n  function stripeIframeAttributes(frame) {\n    $(frame).removeAttr('frameborder');\n    $(frame).removeAttr('scrolling');\n    $(frame).removeAttr('allowtransparency');\n    $(frame).removeAttr('allowfullscreen');\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/twitter.js?\n}");

/***/ },

/***/ "./src/scripts/a11y/utility-header.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* -----------------------------------------\r\n  Utility Header\r\n  ----------------------------------------- */\n  // removing role attribute to fix accessibilty error\n  $(\".settings-links button[data-target='#locationSettings']\").removeAttr(\"role\");\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/a11y/utility-header.js?\n}");

/***/ },

/***/ "./src/scripts/custom/index.js"
() {

eval("{jQuery(document).ready(function ($) {\n  /* Fixed padding for wp-activate.php page when Navigation is fixed */\n  if ($('header.fixed + #signup-content').length) {\n    $('header.fixed + #signup-content').css('padding-top', $('header.fixed').outerHeight());\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/custom/index.js?\n}");

/***/ },

/***/ "./src/scripts/google/cse.js"
() {

eval("{// Google Custom Search \njQuery(document).ready(function ($) {\n  window.__gcse = {\n    callback: googleCSECallback\n  };\n  function googleCSECallback() {\n    var $searchContainer = $(\"#head-search\");\n    var $searchText = $searchContainer.find(\".gsc-input\");\n    var $resultsContainer = $('.search-results-container');\n    var $body = $(\"body\");\n\n    // search icon is added before search button (search button is set to opacity 0 in css)\n    $(\"input.gsc-search-button\").before(\"<span class='ca-gov-icon-search search-icon' aria-hidden='true'></span>\");\n    $searchText.on(\"click\", function () {\n      addSearchResults();\n      $searchContainer.addClass(\"search-freeze-width\");\n    });\n    $searchText.blur(function () {\n      $searchContainer.removeClass(\"search-freeze-width\");\n    });\n\n    // Close search when close icon is clicked\n    $('div.gsc-clear-button').on('click', function () {\n      removeSearchResults();\n    });\n\n    // Helpers\n    function addSearchResults() {\n      $body.addClass(\"active-search\");\n      $searchContainer.addClass('active');\n      $resultsContainer.addClass('visible');\n      // close the the menu when we are search\n      $('#navigation').addClass('mobile-closed');\n      // fire a scroll event to help update headers if need be\n      $(window).scroll();\n      $.event.trigger('cagov.searchresults.show');\n    }\n    function removeSearchResults() {\n      $body.removeClass(\"active-search\");\n      $searchContainer.removeClass('active');\n      $resultsContainer.removeClass('visible');\n\n      // fire a scroll event to help update headers if need be\n      $(window).scroll();\n      $.event.trigger('cagov.searchresults.hide');\n    }\n  }\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/google/cse.js?\n}");

/***/ },

/***/ "./src/scripts/google/ga.js"
() {

eval("{// Google Analytics\njQuery(document).ready(function ($) {\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    dataLayer.push(arguments);\n  }\n  gtag('js', new Date());\n\n  //Statewide UA property\n  gtag('config', 'UA-3419582-2', {\n    cookie_flags: 'secure;samesite=lax;domain='\n  });\n\n  // Statewide GA4 property\n  gtag('config', 'G-69TD0KNT0F', {\n    cookie_flags: 'secure;samesite=lax;domain='\n  }); // statewide analytics - do not remove or change\n\n  // CAWeb Multisite UA property\n  if (undefined !== args.caweb_multi_ga) {\n    gtag('config', args.caweb_multi_ga, {\n      cookie_flags: 'secure;samesite=lax;domain='\n    });\n  }\n\n  // CAWeb Multisite GA4 property\n  if (undefined !== args.caweb_multi_ga4) {\n    gtag('config', args.caweb_multi_ga4, {\n      cookie_flags: 'secure;samesite=lax;domain='\n    }); // CAWeb multisite analytics - do not remove or change\n  }\n\n  // Agency UA ID\n  if (undefined !== args.ca_google_analytic_id) {\n    gtag('config', args.ca_google_analytic_id, {\n      cookie_flags: 'secure;samesite=lax;domain='\n    });\n  }\n\n  // Agency GA4 ID\n  if (undefined !== args.ca_google_analytic4_id) {\n    gtag('config', args.ca_google_analytic4_id, {\n      cookie_flags: 'secure;samesite=lax;domain='\n    }); // individual agency - either from your own google account, or contact eServices to have one set up for you\n  }\n  var getOutboundLink = function (url) {\n    gtag('event', 'click', {\n      'event_category': 'navigation',\n      'event_label': 'outbound link: ' + url,\n      'transport_type': 'beacon',\n      'event_callback': function () {\n        document.location = url;\n      }\n    });\n  };\n  var trackDownload = function (filename) {\n    gtag('event', 'click', {\n      'event_category': 'download',\n      'event_label': 'file: ' + filename,\n      'transport_type': 'beacon',\n      'event_callback': function () {\n        document.location = url;\n      }\n    });\n  };\n});\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/google/ga.js?\n}");

/***/ },

/***/ "./src/scripts/google/index.js"
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{//require('./AutoTracker');\n__webpack_require__(\"./src/scripts/google/cse.js\");\n__webpack_require__(\"./src/scripts/google/ga.js\");\n\n//# sourceURL=webpack://@caweb/theme/./src/scripts/google/index.js?\n}");

/***/ },

/***/ "./src/styles/frontend.scss"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@caweb/theme/./src/styles/frontend.scss?\n}");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/styles/frontend.scss");
/******/ 	__webpack_require__("./node_modules/@caweb/icon-library/build/font-only.css");
/******/ 	__webpack_require__("./src/scripts/google/index.js");
/******/ 	__webpack_require__("./src/scripts/custom/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/a11y/index.js");
/******/ 	
/******/ })()
;