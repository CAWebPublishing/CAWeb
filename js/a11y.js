jQuery(document).ready(function() {
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
});
jQuery(document).ready(function() {
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
});
jQuery(document).ready(function() {
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
	
});
jQuery(document).ready(function() {
	/* 
	Google Calendar Accessibility 
	*/
	var google_calendar_elements = $('iframe[src^="https://calendar.google.com/calendar/embed"]');

	if( google_calendar_elements.length ){
		google_calendar_elements.each(function(index, element) {
			stripeIframeAttributes(element);
			$(element).attr('title', 'Google Calendar Embed');
		});
	}
});
jQuery(document).ready(function() {
	

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
});
jQuery(document).ready(function() {
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
jQuery(document).ready(function() {
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
});
jQuery(document).ready(function() {
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
jQuery(document).ready(function() {
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
});
jQuery(document).ready(function() {
	/*
	WPForms Accessibility 
	Retrieve radio field containers
	*/
	var wpforms_radio_fields = $('.wpforms-field.wpforms-field-radio')

	if( wpforms_radio_fields.length ){
		wpforms_radio_fields.each(function(index, element) {
			$(element).attr('role', 'radiogroup');
			$(element).attr('aria-label', 'WPForms Radio Group');
		});
	}
	
	/*
	WPForms Accessibility 
	Retrieve checkbox containers
	*/
	var wpforms_checkbox_fields = $('.wpforms-field.wpforms-field-checkbox')

	if( wpforms_checkbox_fields.length ){
		wpforms_checkbox_fields.each(function(index, element) {
			$(element).attr('role', 'group');
			$(element).attr('aria-label', 'WPForms Checkbox Group');
		});
	}

	/*
	WPForms Accessibility 
	Retrieve Submit button
	*/
	var wpforms_submit = $('.wpforms-submit[aria-live="assertive"]');

	if( wpforms_submit.length ){
		wpforms_submit.each(function(index, element) {
			$(element).attr('aria-atomic', 'true');
		});
	}
	
	/*
	WPForms Accessibility 
	Retrieve Time Picker inputs
	*/
	var wpforms_time_pickers = $('input.wpforms-field-date-time-time');
	if( wpforms_time_pickers.length ){
		wpforms_time_pickers.each(function(index, element) {
			var label = $(element).parent().find('label');
			$(label).attr('for', $(element).attr('id') );
		});
	}
});
jQuery(document).ready(function() {
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
jQuery(document).ready(function() {
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

		if( ! $(element).find('a').length && $(element).hasClass('et_clickable')){ 
			$(element).prepend('<a href="#"><span class="sr-only">' + header_title + '</span></a>');
		}else if( $(element).find('.et_pb_main_blurb_image').children('a').length ){
			var blurb_img = $(element).find('.et_pb_main_blurb_image');

			$(blurb_img).removeAttr('aria-hidden');
			
			$($(blurb_img).children('a')[0]).prepend('<span class="sr-only">' + header_title + '</span>');
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
jQuery(document).ready(function() {
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
	 });
}
});
jQuery(document).ready(function() {
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
jQuery(document).ready(function() {
	/* 
    Divi Image Module (Standard & Fullwidth) Accessibility 
    Retrieve all Divi Image Modules
    */
   var image_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_image_\d\b|\bet_pb_fullwidth_image_\d\b/); });

    // Run only if there is a Image Module on the current pageI m
    if( image_modules.length ){        
        var imgs = [];

        image_modules.each(function(index, element) {
            // Grab each img control
            var img =  $(element).find('img');

            if( !img.attr('alt') ){
                imgs[index] = img.attr('src');
            }

        });      
        var data = {
            'action': 'caweb_attachment_post_meta',
            'imgs' : imgs
        };
        
        jQuery.post(args.ajaxurl, data, function(response) {
            var alts = jQuery.parseJSON(response);

            imgs.forEach( function(element, index){
                // Grab each img control
                var img =  $(image_modules[index]).find('img');
                img.attr('alt', alts[index]);
            });

        });
       
    }
});
jQuery(document).ready(function() {
	/*
    Divi Accessibility Plugin Adds a "Skip to Main Content" anchor tag
    Retrieve all a[href="#main-content"]
	*/
	var main_content_anchors = $('a[href="#main-content"]');

    // Run only if there is more than 1 a[href="#main-content"] on the current page
    if( 1 < main_content_anchors.length  ){
        main_content_anchors.each(function(index, element) {
            // Remove all anchors not in the header
            if( ! $($(element).parent().parent()).is('header') )
                $(element).remove();
            
        });
    }
});
jQuery(document).ready(function() {
    /* 
    Divi Post Slider (Standard & Fullwidth) Accessibility 
    Retrieve all Divi Post Slider Modules
	*/
   var post_slider_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_post_slider_\d\b|\bet_pb_fullwidth_post_slider_\d\b/); });

    // Run only if there is a Post Slider Module on the current page
    if( post_slider_modules.length ){
        post_slider_modules.each(function(index, element) {
            // Grab all slides
            slides =  $(element).find('div.et_pb_slide');
            slides.each(function(i) {
                s =  $(slides[i]); 

                // Grab the slide title
                title = s.find('.et_pb_slide_title');
                title_link = title.find('a');
                title_link.addClass('no-underline');

                // Grab the More Button from Slide
                more_button = s.find('.et_pb_more_button');
        
                // If there is a More Button append SR Tag with Title
                if(more_button.length){
                    more_button.append('<span class="sr-only">' + title.text() + '</span>');
                }
            });

            // Grab Post Slider Controllers
            var controller = $(element).find('.et-pb-controllers a');
            controller.each(function(c){
                controller[c].text = 'Slide ' + controller[c].text;
            })
         });    

    }   

});
jQuery(document).ready(function() {
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
jQuery(document).ready(function() {
   /* 
   Divi Slider Arrows Accessibility 
   Retrieve all Divi Slider Arrows
   */
   var slider_arrows = $('div.et-pb-slider-arrows');

    // Run only if there are Slide Arrows on the current page
    if( slider_arrows.length ){
        slider_arrows.each(function(index, element) {
            // Grab each more button control
            var prev_button =  $(element).find('a.et-pb-arrow-prev');
            var next_button =  $(element).find('a.et-pb-arrow-next');

            prev_button.addClass('no-underline');
            prev_button.find('span').addClass('sr-only');
            prev_button.prepend('<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>');

            next_button.addClass('no-underline');
            next_button.find('span').addClass('sr-only');
            next_button.prepend('<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>');
            
        });      
    }
});
jQuery(document).ready(function() {
   /* 
   Divi Post Slider (Standard & Fullwidth) Accessibility 
   Retrieve all Divi Post Slider Modules
   */
   var slider_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_slider_\d\b|\bet_pb_fullwidth_slider_\d\b/); });

    // Run only if there is a Slider Module on the current page
    if( slider_modules.length ){
        slider_modules.each(function(index, element) {
            // Grab Post Slider Controllers
            var controller = $(element).find('.et-pb-controllers a');
            controller.each(function(c){
                controller[c].text = 'Slide ' + controller[c].text;
            })
         });      
    }
});
jQuery(document).ready(function() {
	/* 
    Divi Slides (Standard & Fullwidth) Accessibility 
    Slide Module is a child module used in the following modules:
    Slider (Standard & Fullwidth)
    Post Slider (Standard & Fullwidth)
    Retrieve all Divi Slide Modules
    */
   var slide_modules = $('div.et_pb_slide');

    // Run only if there is a Slide Module on the current page
    if( slide_modules.length ){
        slide_modules.each(function(index, element) {
            // Grab each more button control
            var more_button =  $(element).find('a.et_pb_more_button');

            more_button.addClass('no-underline');
            
         });      
    }
});
jQuery(document).ready(function() {
    /* 
    Divi Tab Module Accessibility 
    Retrieve all Divi Tab Modules
    */
   var tab_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_tabs_\d\b/); });

    // Run only if there is a Tab Module on the current page
    if( tab_modules.length ){
        tab_modules.each(function(index, element) {
            // Grab each tab control list
            var tab_list =  $(element).find('ul.et_pb_tabs_controls');
            var lis = $(tab_list).find('li');

            tab_list.each(function(i) {
                var t =  $(tab_list[i]); 

                // Lowercase the Tab Control Role
                t.attr('role', t.attr('role').toLowerCase() );

                // Grab each tab control
                var tabs =  $(element).find('a');
                tabs.each(function(t) {
                    var tab = $(tabs[t]);
                    tab.attr('tabindex', 0);

                    tab.on("focus", function(){

                        lis.each(function(l){
                            $(this).removeClass('et_pb_tab_active');
                        });
                        tab.parent().addClass('et_pb_tab_active');
                        tab.addClass('keyboard-outline');
                    });
                });
            });
        });      
    }
});
jQuery(document).ready(function() {
    /*
    Divi Toggle Module Accessibility
    Retrieve all Divi Toggle Modules
   */
  var toggle_modules = $('div.et_pb_toggle');


    // Run only if there is a Video Module on the current page
    if( toggle_modules.length  ){
        toggle_modules.each(function(index, element) {
            
            $(element).off( "keydown", function(e){
                console.log("Key Down " + e.keyCode);
            });

            $(element).off( "keypress", function(e){
                console.log("Key Press " + e.keyCode);
            });

            $(element).off( "keyup", function(e){
                    console.log("Key Up " + e.keyCode);
            });

            $(element).on('focusin', function(){
                toggleExpansion(this);
            })

        });      

        function toggleExpansion(ele){
            var expanded = $(ele).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;
              
            $(ele).attr('aria-expanded', expanded);
        }
    }

});
jQuery(document).ready(function() {
	/*
    Divi Video Module Accessibility
    Retrieve all Divi Video Modules
    */
	var video_modules = $('div.et_pb_video');

    // Run only if there is a Video Module on the current page
    if( video_modules.length  ){
        video_modules.each(function(index, element) {
            var frame = $(element).find('iframe');
            frame.attr('title', 'Divi Video Module IFrame');
            $(frame).removeAttr('frameborder');
            $(frame).attr('id', 'fitvid' + index);
        });      
    }
});
jQuery(document).ready(function() {
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
jQuery(document).ready(function() {
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
});
jQuery(document).ready(function() {
	/* -----------------------------------------
	Utility Header
	----------------------------------------- */
	// removing role attribute to fix accessibilty error
	$(".settings-links button[data-target='#locationSettings']").removeAttr("role");
});