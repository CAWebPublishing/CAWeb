/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (() => {

// Google Custom Search 
jQuery(document).ready(function($) {

    window.__gcse = {
        callback: googleCSECallback
    };

    function googleCSECallback() {
            var $searchContainer = $("#head-search");
            var $searchText = $searchContainer.find(".gsc-input");
            var $resultsContainer = $('.search-results-container');
            var $body = $("body");
            
            // search icon is added before search button (search button is set to opacity 0 in css)
            $("input.gsc-search-button").before("<span class='ca-gov-icon-search search-icon' aria-hidden='true'></span>");
    
            $searchText.on("click", function() {
                    addSearchResults();
                    $searchContainer.addClass("search-freeze-width");
            });

            $searchText.blur(function() {
                    $searchContainer.removeClass("search-freeze-width");

                });

                // Close search when close icon is clicked
                $('div.gsc-clear-button').on('click', function() {	removeSearchResults();   });
            
                // Helpers
                function addSearchResults() {
                    $body.addClass("active-search");
                    $searchContainer.addClass('active');
                    $resultsContainer.addClass('visible');
                    // close the the menu when we are search
                    $('#navigation').addClass('mobile-closed');
                    // fire a scroll event to help update headers if need be
                    $(window).scroll();

                    $.event.trigger('cagov.searchresults.show');
                }

                function removeSearchResults() {
                            $body.removeClass("active-search");
                            $searchContainer.removeClass('active');
                            $resultsContainer.removeClass('visible');


                            // fire a scroll event to help update headers if need be
                            $(window).scroll();

                            $.event.trigger('cagov.searchresults.hide');
                }

    }
        
});

/***/ }),
/* 3 */
/***/ (() => {

// Google Analytics
jQuery(document).ready(function($) {
	window.dataLayer = window.dataLayer || [];

	function gtag(){dataLayer.push(arguments);}

	gtag('js', new Date());

	//Statewide UA property
	gtag('config', 'UA-3419582-2', {cookie_flags:'samesite=lax;domain='+document.domain});

	// CAWeb Multisite analytics
	if(undefined !== args.caweb_multi_ga){
		gtag('config', args.caweb_multi_ga, {cookie_flags:'samesite=lax;domain='+document.domain});
	}
	
	// Agency UA ID
	if( undefined !== args.ca_google_analytic_id){
		gtag('config', args.ca_google_analytic_id, {cookie_flags:'samesite=lax;domain='+document.domain});
	}

	var getOutboundLink = function(url) {
		gtag('event', 'click', {
			'event_category': 'navigation',
			'event_label': 'outbound link: ' + url,
			'transport_type': 'beacon',
			'event_callback': function(){document.location = url;}
		});
	}

	var trackDownload = function(filename) {
		gtag('event', 'click', {
			'event_category': 'download',
			'event_label': 'file: ' + filename,
			'transport_type': 'beacon',
			'event_callback': function(){document.location = url;}
		});
	}
});

/***/ }),
/* 4 */
/***/ (() => {

// Google Tag Manager
jQuery(document).ready(function($) {
	window.dataLayer = window.dataLayer || [];

	function gtag(){dataLayer.push(arguments);}

	gtag('js', new Date());

	if( undefined !== args.ca_google_analytic4_id){
		gtag('config', args.ca_google_analytic4_id, {cookie_flags:'samesite=lax;domain='+document.domain}); // individual agency - either from your own google account, or contact eServices to have one set up for you
	}

	gtag('config', 'G-69TD0KNT0F', {cookie_flags:'samesite=lax;domain='+document.domain}); // statewide analytics - do not remove or change

	if( undefined !== args.caweb_multi_ga4 ){
		gtag('config', args.caweb_multi_ga4, {cookie_flags:'samesite=lax;domain='+document.domain}); // CAWeb multisite analytics - do not remove or change
	}
		
	var getOutboundLink = function(url) {
		gtag('event', 'click', {
			'event_category': 'navigation',
			'event_label': 'outbound link: ' + url,
			'transport_type': 'beacon',
			'event_callback': function(){document.location = url;}
		});
	}

	var trackDownload = function(filename) {
		gtag('event', 'click', {
			'event_category': 'download',
			'event_label': 'file: ' + filename,
			'transport_type': 'beacon',
			'event_callback': function(){document.location = url;}
		});
	}
});

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);


/***/ }),
/* 8 */
/***/ (() => {

jQuery(document).ready(function($) {
	/*
	Divi Blog Module Accessibility 
	Retrieve all Divi Blog Modules
	*/
	
	var blog_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_blog_\d\b/); });

	// Run only if there is a Blog Module on the current page
    if( blog_modules.length ){
        blog_modules.each(function(index, element) {
            // Grab each blog article
            blog =  $(element).find('article');
            blog.each(function(i) {
             b =  $(blog[i]); 
             // Grab the article title
             title = b.children('.entry-title').text();
			 
			 // Add Aria-Label to Post Article
			 b.attr('aria-label', title);
			 
             // Grab the More Information Button from the Post content
             // Divi appends the More Information button as the last child of the content
             read_more = b.children('.post-content').children('.more-link:last-child');
      
             // If there is a More Information Button append SR Tag with Title
             if(read_more.length){
                 read_more.append('<span class="sr-only">' + title + '</span>');
             }
            });
         });      
    }
});

/***/ }),
/* 9 */
/***/ (() => {

jQuery(document).ready(function($) {
	/* 
    Divi Blurb Module Accessibility 
    Retrieve all Divi Blurb Modules
    */
   var blurb_modules = $('div.et_pb_blurb');

   // Run only if there is a Blog Module on the current page
   if( blurb_modules.length ){
	blurb_modules.each(function(index, element) {
		var header = $(element).find('.et_pb_module_header');
		var header_title = header.length ?
				 ( $(header).children('a').length ? $(header).children('a')[0].innerText : header[0].innerText ) : '';

		var blurb_img = $(element).find('.et_pb_main_blurb_image');
		var img_link = $(blurb_img).find('a');

		if( blurb_img.length && img_link.length ){
			$(img_link).attr('title', header_title);

		}

		$(element).children('a').on('focusin', function(){ 
			$(this).parent().css('outline', "#2ea3f2 solid 2px");
		 });
		 
		 $(element).children('a').on('focusout', function(){ 
			$(this).parent().css('outline', '0');
		 });
	 });      
	}
});

/***/ }),
/* 10 */
/***/ (() => {

jQuery(document).ready(function($) {
	/* 
    Divi Button Module Accessibility 
    Retrieve all Divi Button Modules
    */
   var button_modules = $('a.et_pb_button');

   // Run only if there is a Button Module on the current page
   if( button_modules.length ){
	button_modules.each(function(index, element) {
		// Add no-underline to each button module
		$(element).addClass('no-underline');

        // Divi has removed et_pb_custom_button_icon class from buttons.
        // If Button is using a data-icon add the missing class.
        if( '' !== $(element).attr('data-icon') ){
    		$(element).addClass('et_pb_custom_button_icon');
        }
	 });
}
});

/***/ }),
/* 11 */
/***/ (() => {

jQuery(document).ready(function($) {
	/* 
	Fixes Deep Links issue created by Divi
    */
    var links = $('a[href^="#"]:not([href="#"])');
    
    // Run only if there are deep links on the current page
   if( links.length ){
    	links.each(function(index, element) {
	    	// Add et_smooth_scroll_disabled to each link
		    $(element).addClass('et_smooth_scroll_disabled');
        });
    }

 });

/***/ }),
/* 12 */
/***/ (() => {

jQuery(document).ready(function($) {
	/*
    Divi Fullwidth Header Module Accessibility 
    Retrieve all Divi Fullwidth Header Modules
	*/
   var fullwidth_header_modules = $('section').filter(function(){ return this.className.match(/\bet_pb_fullwidth_header_\d\b/); });

	// Run only if there is a Fullwidth Header Module on the current page
    if( fullwidth_header_modules.length ){
        fullwidth_header_modules.each(function(index, element) {
            // Grab all More Buttons
            more_buttons =  $(element).find('.et_pb_more_button');
            more_buttons.each(function(i) {
             m =  $(more_buttons[i]); 

             m.addClass('no-underline');
            });
         });      
    }
});

/***/ }),
/* 13 */
/***/ (() => {

jQuery(document).ready(function($) {
   /* 
   Retrieve all Divi Gallery Modules
   */
   var gallery_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_gallery\b/); });

    // Run only if there is a Slider Module on the current page
    if( gallery_modules.length ){

        gallery_modules.each(function(index, element) {
            // Grab all gallery images
            var gallery_images = $(element).find('.et_pb_gallery_image img');
            gallery_images.each(function(i, g){
                // add the value of the anchors title to the alt text of the image
                $(g).attr('alt',$(g).parent().attr('title') );
            })
        });      

    }

});

/***/ }),
/* 14 */
/***/ (() => {

jQuery(document).ready(function($) {
	/*
	Divi Person Module Accessibility 
	Retrieve all Divi Person Modules
	*/
	
	var person_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_team_member_\d\b/); });

	// Run only if there is a Person Module on the current page
    if( person_modules.length ){
        person_modules.each(function(index, element) {
            // Grab each person header
            person_name =  $(element).find('.et_pb_module_header').html();
            social_links = $(element).find('.et_pb_member_social_links li a');

            social_links.each( function(i, e){
                social = $(e).html().replace( '<span>', '' ).replace( '</span>', '' );
                $(e).attr('title', social + ' Profile for ' + person_name )
            })
            
         });      
    }
});

/***/ }),
/* 15 */
/***/ (() => {

jQuery(document).ready(function($) {
    /*
    Divi Search Module Form Accessibility
    Retrieve all Divi Search Module Forms
	*/
	var search_modules = $('form.et_pb_searchform');

	/*
    Divi Search Module Accessibility
    Retrieve all Divi Search Modules
   */
	var et_bocs = $('#et-boc.et-boc');

	// Run only if there is a Search Module on the current page
    if( search_modules.length  ){
        search_modules.each(function(index, element) {
            var searchInput = $(element).find('input[name="s"]');
            var searchLabel = $(element).find('label');
            
            $(element).attr('aria-label', "Divi Search Form " + index);
            $(searchInput).attr('id', 'divi-search-module-form-input-' + index);
            $(searchLabel).attr('for', 'divi-search-module-form-input-' + index);
        });
	}
	
	// Run only if there is more than 1 #et-boc.et-boc element
    if( et_bocs.length  ){
        et_bocs.each(function(index, element) {
            if( index ){
                $(element).attr('id', $(element).attr('id') + '-' + index );
            }
        });
    }
});

/***/ }),
/* 16 */
/***/ (() => {

jQuery(document).ready(function($) {
   /* 
   Retrieve all Divi Post Slider Modules
   */
   var slider_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_slider\b|\bet_pb_fullwidth_slider\d\b/); });

    // Run only if there is a Slider Module on the current page
    if( slider_modules.length ){

        slider_modules.each(function(index, element) {
            // Grab all slides in slider
            var slide_modules = $(element).find('.et_pb_slide');

            slide_modules.each(function(i, s){
                // Grab the slide title and add the no-underline class
                title = $(s).find('.et_pb_slide_title a');
                title.addClass('no-underline');
            })

            // Grab Slider Arrows
            var arrows = $(element).find('.et-pb-slider-arrows');
            arrows.each(function(a, arrow){
                // Grab each arrow control
                var prev_button =  $(arrow).find('a.et-pb-arrow-prev');
                var next_button =  $(arrow).find('a.et-pb-arrow-next');

                prev_button.addClass('no-underline');
                prev_button.attr('title', 'Previous Arrow');
                prev_button.find('span').addClass('sr-only');
    
                next_button.addClass('no-underline');
                next_button.attr('title', 'Next Arrow');
                next_button.find('span').addClass('sr-only');
            })

            // Grab Slider Controllers
            var controller = $(element).find('.et-pb-controllers a');
            controller.each(function(i, c){
                $(c).val('Slide ' + $(c).val() );
            })

        });      

    }

});

/***/ }),
/* 17 */
/***/ (() => {

jQuery(document).ready(function($) {
    /* 
    Divi Tab Module Accessibility 
    Retrieve all Divi Tab Modules
    */
   var tab_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_tabs_\d\b/); });

    // Run only if there is a Tab Module on the current page
    if( tab_modules.length ){
        setTimeout(function(){
            tab_modules.each(function(index, element) {
                // Grab each tab control list
                var tab_list =  $(element).find('.et_pb_tabs_controls');
                
                // Lowercase the Tab Control Role
                $(tab_list).attr('role', 'tablist' );
    
            });  
        }, 100);

            
    }
});

/***/ }),
/* 18 */
/***/ (() => {

jQuery(document).ready(function($) {
	/*
    Divi Video Module Accessibility
    Retrieve all Divi Video Modules
    */
	var video_modules = $('div.et_pb_video');

    /*
    Divi Video Slider Module Accessibility
    Retrieve all Divi Video Modules
    */
    var video_slider_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_video_slider_\d\b/); });

    // Run only if there is a Video Module on the current page
    if( video_modules.length  ){
        video_modules.each(function(index, element) {
            var frame = $(element).find('iframe');
            frame.attr('title', 'Divi Video Module IFrame ' + (index + 1));
            $(frame).removeAttr('frameborder');
            $(frame).attr('id', 'fitvid' + (index + 1));

            var src = $(frame).attr('src');
            $(frame).attr('src', src + '&amp;rel=0');

        });      
    }

    
    // Run only if there is a Video Slider Module Items on the current page
    if( video_slider_modules.length  ){
        video_slider_modules.each(function(index, element) {
            var slides = $(element).find('.et_pb_slide');

            slides.each(function(i, s){
                play_button = $(s).find('.et_pb_video_play');
                carousel_play = $(element).find('.et_pb_carousel_item.position_' + ( i + 1 ) ).find('.et_pb_video_play');
                
                $(play_button).addClass('no-underline');
                $(play_button).attr('title', 'Play Video ' + ( i + 1 ) );

                if( carousel_play.length ){
                    $(carousel_play).addClass('no-underline');
                    $(carousel_play).attr('title', 'Play Video ' + ( i + 1 ) );
                }
            })
        });      
    }
});

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);


/***/ }),
/* 20 */
/***/ (() => {

jQuery(document).ready(function($) {
	// Do this after the page has loaded
	$(window).on('load', function(){
		/*
		Add to Any Accessibility 
		IFrame html is used to format content
		*/
		var addtoany_iframe = $('#a2apage_sm_ifr');

		if( addtoany_iframe.length ){
			addtoany_iframe.each(function(index,element){
				stripeIframeAttributes(element);
			});
		}
	});

	function stripeIframeAttributes(frame){
		$(frame).removeAttr('frameborder');
		$(frame).removeAttr('scrolling');
		$(frame).removeAttr('allowtransparency');
		$(frame).removeAttr('allowfullscreen');
	}
});

/***/ }),
/* 21 */
/***/ (() => {

jQuery(document).ready(function($) {
	// Do this after the page has loaded
	$(window).on('load', function(){
		/*
		Constant Contact Forms by MailMunch Accessibility 
		IFrame html is used to format content
		*/
		var mailmunch_iframe = $('iframe.mailmunch-embedded-iframe'); 

		if( mailmunch_iframe.length ){
			mailmunch_iframe.each(function(index, element) {
				$(element).attr('title', 'Constant Contact by MailMunch IFrame');
				stripeIframeAttributes(element);
			});

			setTimeout(function(){ 
				var mailmunch_img = $('img[src^="//analytics.mailmunch.co/event"'); 
				$(mailmunch_img).attr('alt', '');
			}, 1000);
		}
	});

	function stripeIframeAttributes(frame){
		$(frame).removeAttr('frameborder');
		$(frame).removeAttr('scrolling');
		$(frame).removeAttr('allowtransparency');
		$(frame).removeAttr('allowfullscreen');
	}
});

/***/ }),
/* 22 */
/***/ (() => {

jQuery(document).ready(function($) {
	/* 
	The Events Calendar Accessibility 
	*/
	
	var event_calendar_form_element = $('#tribe-bar-form span[role="none"], #tribe-bar-form li[role="option"]');

	if( event_calendar_form_element.length ){
		event_calendar_form_element.each(function(index, element) {
			$(element).removeAttr('role', '');
		});
	}

	var event_calendar_element = $('.tribe-events-calendar');
	var event_notices = $('.tribe-events-notices');
	var event_pastmonth = $('.tribe-events-othermonth.tribe-events-past div');

	if( event_calendar_element.length ){
		event_calendar_element.each(function(index, element) {
			var th = $(element).find('thead tr th');
			var future_dates = $(element).find('tbody tr td.tribe-events-thismonth.tribe-events-future div');
			var past_dates = $(element).find('tbody tr td.tribe-events-thismonth.tribe-events-past div');

			// Tribe Event Display Contrast Fixes
			if( "#666666" == rgb2hex( $(th[0]).css( "background-color" ) ) ){
				th.each(function(i, e){
					$(e).css( "background-color", "#dddddd" );

				});

				future_dates.each(function(i,e){
					$(e).css( "background-color", "#f7f7f7" );
					$(e).css("color", "#707070");
				});

			// Full Style Display Contrast Fixes
			}else if( "#dddddd" == rgb2hex( $(th[0]).css( "background-color" )) ){
				past_dates.each(function(i,e){
					$(e).css("color", "#333333");
				});
			}
		});
	}

	if( event_notices.length ){
		event_notices.each(function(index, element){
			$(element).css('color', '#307185');
		});
	}

	if ( event_pastmonth.length ){
		event_pastmonth.each(function(index, element){
			$(element).css('color', '#707070');
		});
	}

	// Do this after the page has loaded
	$(window).on('load', function(){
		var event_map_element = $('.tribe-events-venue-map').find('iframe');

		if( event_map_element.length ){
			event_map_element.each(function(index, element){
				$(element).attr('title', 'The Events Calendar Event Map');
				stripeIframeAttributes(element);
			});
		}	
	});
	
	function rgb2hex(rgb){
		rgb = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
		return "#" +
		 ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
		 ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
		 ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
	}
	
	function stripeIframeAttributes(frame){
		$(frame).removeAttr('frameborder');
		$(frame).removeAttr('scrolling');
		$(frame).removeAttr('allowtransparency');
		$(frame).removeAttr('allowfullscreen');
	}
});

/***/ }),
/* 23 */
/***/ (() => {

jQuery(document).ready(function($) {
	/* 
	Google Calendar Accessibility 
	*/
	var google_calendar_elements = $('iframe[src^="https://calendar.google.com/calendar/embed"]');

	if( google_calendar_elements.length ){
		google_calendar_elements.each(function(index, element) {
			stripeIframeAttributes(element);
			title = google_calendar_elements.length > 1 ? 'Google Calendar Embed ' + ( index + 1): 'Google Calendar Embed';
			$(element).attr('title', title);
		});
	}

	function stripeIframeAttributes(frame){
		$(frame).removeAttr('frameborder');
		$(frame).removeAttr('scrolling');
		$(frame).removeAttr('allowtransparency');
		$(frame).removeAttr('allowfullscreen');
	}
});

/***/ }),
/* 24 */
/***/ (() => {

jQuery(document).ready(function($) {
	

	// Do this after the page has loaded
	$(window).on('load', function(){
		/*
		Google Recaptcha Accessibility
		Retrieve recaptcha textareas
		*/

		var g_recaptcha_response_textarea = $('textarea[id^="g-recaptcha-response"]');

		if( g_recaptcha_response_textarea.length ){
			g_recaptcha_response_textarea.each(function(index, element) {
				$(element).attr('aria-label', 'Google Recaptcha Response')
			});
		}

		/*
		Google Recaptcha Hidden Accessibility
		Retrieve recaptcha hidden input
		*/

		var g_recaptcha_hidden_response = $('input[name="g-recaptcha-hidden"]');

		if( g_recaptcha_hidden_response.length ){
			g_recaptcha_hidden_response.each(function(index, element) {
				$(element).attr('aria-label', 'Google Recaptcha Hidden Response')
			});
		}

		/*
		Google Recaptcha IFrame
		*/
		var g_recaptcha_iframe = $('.g-recaptcha iframe, .grecaptcha-logo iframe'); 

		if( g_recaptcha_iframe.length ){
			g_recaptcha_iframe.each(function(index, element) {
				$(element).attr('title', 'Google Recaptcha');
				stripeIframeAttributes(element);
			});
		}

		/*
		Google Recaptcha Challenge IFrame
		*/
		setTimeout(function(){
			var g_recaptcha_challenge_iframe = $('iframe[title="recaptcha challenge"]');

			if( g_recaptcha_challenge_iframe.length ){
				g_recaptcha_challenge_iframe.each(function(index, element) {
					stripeIframeAttributes(element);
				});
			}	
		}, 1000);

	});

	function stripeIframeAttributes(frame){
		$(frame).removeAttr('frameborder');
		$(frame).removeAttr('scrolling');
		$(frame).removeAttr('allowtransparency');
		$(frame).removeAttr('allowfullscreen');
	}
});

/***/ }),
/* 25 */
/***/ (() => {

jQuery(document).ready(function($) {
	/* 
   MailChimp Accessibility 
   Retrieve radio field containers
   */

  var mailchimp_form = $('#mc-embedded-subscribe-form');

  if( mailchimp_form.length ){
	   mailchimp_form.each(function(index, element) {
		   var inputs = $(element).find('input').filter(function(){ return ! $(this).attr('class') && ! $(this).attr('id') });

		   var input_groups = $(element).find('.mc-field-group.input-group');
		   
		   // Add aria-label to non-hidden hidden input 
		   $(inputs).attr('aria-label', 'Do not fill this, do not remove or risk form bot signups')
		  
		   input_groups.each(function(i, e) {
			   // if group contains radio buttons
			   if( $(e).find('input[type="radio"]').length ){
				   $(e).attr('role', 'radiogroup');
				   $(e).attr('aria-label', 'MailChimp Radio Button Group');
			   // if group contains checkbox
			   }else if( $(e).find('input[type="checkbox"]').length ) {
				   $(e).attr('role', 'group');
				   $(e).attr('aria-label', 'MailChimp Checkbox Group');
			   }
		   });

		   $(element).find('input').each(function(i, e){
			   $(e).removeAttr('aria-invalid');
		   });
	   });      
   }  
});

/***/ }),
/* 26 */
/***/ (() => {

jQuery(document).ready(function($) {
	/*
	MailPoet Accessibility 
	Retrieve recaptcha iFrame
	*/
	setTimeout(function(){
		var mailpoet_recaptcha_iframe = $('.mailpoet_recaptcha_container iframe');

		if( mailpoet_recaptcha_iframe.length ){
			mailpoet_recaptcha_iframe.each(function(index, element) {
				$(element).attr('title', 'MailPoet Recaptcha');
				stripeIframeAttributes(element);
			});
		}	
	}, 1000);

	function stripeIframeAttributes(frame){
		$(frame).removeAttr('frameborder');
		$(frame).removeAttr('scrolling');
		$(frame).removeAttr('allowtransparency');
		$(frame).removeAttr('allowfullscreen');
	}
});

/***/ }),
/* 27 */
/***/ (() => {

jQuery(document).ready(function($) {
	/* 
        Tabby Response Accessibility 
        Retrieve tablist 
        */
        var tabby_response_tabs = $('.responsive-tabs-wrapper .responsive-tabs');
            
        if( tabby_response_tabs.length ){

            $(tabby_response_tabs).find('ul.responsive-tabs__list li').each(function(index, element) {
                $(element).attr('aria-label', $(element).html());

                $(element).on( "keyup", function(e){
                    if( e.keyCode == 13 ){ // enter
                        resetTabbyFocus(element);
                    }
                });
                
                $(element).on( "click", function(){
                    resetTabbyFocus(element);
                });

                var panel = $(element).attr('aria-controls');
                $("#" + panel).attr('tabindex', '0');
            });      

            function resetTabbyFocus(element){
                var panel = $(element).attr('aria-controls');
                var firstFocusable = $("#" + panel); 

                $(firstFocusable).focus();

                $(firstFocusable).on( "keydown", function(e){
                    if( e.shiftKey && e.keyCode == 9 ){ // shift+tab
                        $(element).next().focus();
                    }
                });

            }
        }
});

/***/ }),
/* 28 */
/***/ (() => {

jQuery(document).ready(function($) {
	/* 
	TablePress Accessibility 
	Add aria labels to datatables search field 
	*/
	var dataTables_filter = $('.dataTables_filter')
	
	if( dataTables_filter.length ){
		dataTables_filter.each(function(index, element) {
			var l = $(element).find('label');
			var i = $(element).find('input');

			$(l).attr('for', $(i).attr('aria-controls') + '-search');
			$(i).attr('id', $(i).attr('aria-controls') + '-search');
		});
	}

	setTimeout( function(){
		/* 
		TablePress Accessibility 
		Add missing aria-sort to headers
		*/
		var tablepress_headers = $('table[id^="tablepress-"] thead tr th');

		if( tablepress_headers.length ){
			add_aria_sort();

			tablepress_headers.each(function(index, element) {
				$(element).on('click', add_aria_sort );
			});

			function add_aria_sort(){
				tablepress_headers.each(function(index, element) {
					if( undefined == $(element).attr('aria-sort') ){
						$(element).attr('aria-sort', 'none');
					}
				});
			}
		}

		/* 
		TablePress Accessibility 
		Add href to pagination links
		*/
		var dataTables_pagination = $('.dataTables_paginate .paginate_button'); 

		if( dataTables_pagination.length ){
			dataTables_pagination.each(function(index, element){
				$(element).attr('href', '#');
			});
		}
	}, 500);
	
});

/***/ }),
/* 29 */
/***/ (() => {

/*
	WPForms v1.8.3.2 Accessibility 
	Last updated 9/25/2023
*/

// WPForms Submit buttons.
var wpforms_submit = document.querySelectorAll('.wpforms-submit[aria-live="assertive"]');

// WPForms Confirmation message.
var wpforms_confirmation_msg = document.querySelector('div[id^="wpforms-confirmation-"] p');


// iterate over submit buttons.
if( wpforms_submit.length ){
	// Mark assertive live regions as aria-atomic.
	wpforms_submit.forEach((element) => {
		element.ariaAtomic = true;
	})
}

// Give focus to confirmation message on form submission,
// doesn't work when Ajax Submission is enabled.
if( null !== wpforms_confirmation_msg ){
	wpforms_confirmation_msg.tabIndex = 0;
	wpforms_confirmation_msg.focus();
}

/***/ }),
/* 30 */
/***/ (() => {

jQuery(document).ready(function($) {
	/* 
	Button Element Accessibility 
	*/
	
	var button_elements = $('button:not(.first-level-btn)[role="button"]');

	if( button_elements.length ){
		button_elements.each(function(index, element) {
			$(element).removeAttr('role');
		});
	}
});

/***/ }),
/* 31 */
/***/ (() => {

jQuery(document).ready(function($) {
	/*
    Divi Accessibility Plugin Adds a "Skip to Main Content" anchor tag
    Retrieve all a[href="#main-content"]
	*/
	var main_content_anchors = $('a[href="#main-content"]');

    // Run only if there is more than 1 a[href="#main-content"] on the current page
    if( 1 < main_content_anchors.length  ){
        main_content_anchors.each(function(index, element) {
            // Remove all anchors not in the header
            if( ! $($(element).parent().parent()).is('header') ){
                $(element).remove();
            }            
        });
    }

});

/***/ }),
/* 32 */
/***/ (() => {

jQuery(document).ready(function($) {
	// Do this after the page has loaded
	$(window).on('load', function(){
		/*
		Twitter Feed Accessibility 
		IFrame html is used to format content
		*/
		var twitter_iframe = $('iframe[id^="twitter-widget-"], iframe[src^="https://platform.twitter.com"]'); 

		if( twitter_iframe.length ){
			twitter_iframe.each(function(index, element) {
				stripeIframeAttributes(element);
			});

			setTimeout(function(){
				var rufous_iframe = $('iframe[id="rufous-sandbox"]'); 
				stripeIframeAttributes(rufous_iframe);
			}, 1000);
		}
	});

	function stripeIframeAttributes(frame){
		$(frame).removeAttr('frameborder');
		$(frame).removeAttr('scrolling');
		$(frame).removeAttr('allowtransparency');
		$(frame).removeAttr('allowfullscreen');
	}
});

/***/ }),
/* 33 */
/***/ (() => {

jQuery(document).ready(function($) {
	/* -----------------------------------------
	Utility Header
	----------------------------------------- */
	// removing role attribute to fix accessibilty error
	$(".settings-links button[data-target='#locationSettings']").removeAttr("role");
});

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
//require('./AutoTracker');
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
jQuery(document).ready(function($) {
	
	// from https://www.w3schools.com/js/js_cookies.asp
	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for(let i = 0; i <ca.length; i++) {
		  let c = ca[i];
		  while (c.charAt(0) == ' ') {
			c = c.substring(1);
		  }
		  if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		  }
		}
		return null;
	}

	if( "" !== args.caweb_alerts && undefined !== args.caweb_alerts ){
		args.caweb_alerts.forEach(function(obj, alert){			
			
			if( 
				( null === getCookie('caweb-alert-id-' + alert) || "true" === getCookie('caweb-alert-id-' + alert) ) &&
				( 'active' == obj.status || 'on' == obj.status ) &&
				( ( args.is_front && 'home' === obj.page_display ) || 'all' == obj.page_display  )
			 ){
				document.cookie = 'caweb-alert-id-' + alert + '=true;path=' + args.path;
				createAlertBanner(obj, alert);
			}
		})
	}

	function createAlertBanner( alert, id ){
		var parent_container = $('#caweb_alerts');

		var alert_container = document.createElement('DIV');
		var alert_inner_container = document.createElement('DIV');
		var alert_close_button = document.createElement('Button');

		$(alert_container).addClass('alert alert-dismissible alert-banner border-top border-dark alert-' + id)
		$(alert_container).addClass('alert-' + id);
		$(alert_container).css('background-color', alert.color);

		$(alert_inner_container).addClass('container');

		// Alert Close Button
		$(alert_close_button).addClass('close caweb-alert-close');
		$(alert_close_button).attr('type', 'button');
		$(alert_close_button).attr('data-id', id);
		$(alert_close_button).attr('data-dismiss', 'alert');
		$(alert_close_button).attr('aria-label', 'Close Alert ' + id);
		$(alert_close_button).html('<span aria-hidden="true">&times;</span>');

		alert_inner_container.append(alert_close_button);

		// Alert Read More Button
		if( "" !== alert.button && "" !== alert.url ){
			var alert_read_more = document.createElement('A');

			$(alert_read_more).addClass('alert-link btn btn-default btn-xs');
			$(alert_read_more).attr('href', alert.url);

			if( "" !== alert.target ){
				$(alert_read_more).attr('target', '_blank');
			}

			$(alert_read_more).html(alert.text);

			alert_inner_container.append(alert_read_more);
		}

		// Alert Header
		if( "" !== alert.header ){
			var alert_header = document.createElement('SPAN');

			$(alert_header).addClass('alert-level');

			// Alert Icon
			if( "" !== alert.icon ){
				var alert_icon = document.createElement('SPAN');

				$(alert_icon).addClass('ca-gov-icon-' + alert.icon );
				$(alert_icon).attr('aria-hidden', 'true');
				
				$(alert_header).append(alert_icon);
			}

			$(alert_header).append(alert.header);
			
			alert_inner_container.append(alert_header);

		}

		// Alert Message
		var alert_message = document.createElement('SPAN');

		var message = alert.message.replaceAll('\\"', '');

		$(alert_message).addClass('alert-text');
		$(alert_message).html(message);
		

		alert_inner_container.append(alert_message);

		alert_container.append(alert_inner_container);
		parent_container.append(alert_container);

	}


	$('.caweb-alert-close').on( 'click', function(e){ 
		var alert_id = this.dataset.id; 
		document.cookie = 'caweb-alert-id-' + alert_id + '=false;path=' + args.path;

		$(`.alert-${alert_id}`)[0].remove();
	});
	
	/* Fixed padding for wp-activate.php page when Navigation is fixed */
	if( $('header.fixed + #signup-content').length ){
		$('header.fixed + #signup-content').css('padding-top', $('header.fixed').outerHeight() );
	}

	// This fixes anchor position when smooth scrolling
	window.et_pb_smooth_scroll=function($target,$top_section,speed,easing){
		var $window_width=$(window).width();
		$("header").hasClass("fixed")&&$window_width>768?$menu_offset=$("#header").outerHeight()-1:$menu_offset=-1,
		$("#wpadminbar").length&&$window_width>600&&($menu_offset+=$("#wpadminbar").outerHeight()),
		$scroll_position=$top_section?0:$target.offset().top-$menu_offset,
		void 0===easing&&(easing="swing");
		var $skip_to_content="skip-to-content"===$($target).attr('id'); 
		if($scroll_position<220&&!$skip_to_content){ // scrollDistanceToMakeCompactHeader from cagov.core.js
						$scroll_position-=36; // Height difference between normal and compact header
		}else if($skip_to_content){
			$scroll_position=0;
		}
		$("html, body").animate({scrollTop:$scroll_position},speed,easing);
	}

	
 });

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
__webpack_require__(7);
__webpack_require__(19);

__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
})();

/******/ })()
;