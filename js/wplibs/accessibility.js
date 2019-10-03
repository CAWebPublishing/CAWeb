// Last update 10/3/2019 @ 10:40am
jQuery(document).ready(function() {
    /* -----------------------------------------
   Utility Header
   ----------------------------------------- */
   // removing role attribute to fix accessibilty error
   $(".settings-links button[data-target='#locationSettings']").removeAttr("role");

   
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
               stripeIframeAttributes(element);
           }, 1000);
           
       }
        
        /*
        Google Recaptcha Accessibility 
        Retrieve recaptcha textareas
        */
        var g_recaptcha_response_textarea = $('#g-recaptcha-response');
            
        if( g_recaptcha_response_textarea.length ){
            g_recaptcha_response_textarea.each(function(index, element) {
                $(element).attr('aria-label', 'Google Recaptcha Response')
            });      
        }	

        var g_recaptcha_iframe = $('.grecaptcha-logo iframe'); 
               
       if( g_recaptcha_iframe.length ){
            g_recaptcha_iframe.each(function(index, element) {
               $(element).attr('title', 'Google Recaptcha');
               stripeIframeAttributes(element);
               
           });    
       }

       var g_recaptcha_challenge_iframe = $('iframe[title="recaptcha challenge"]');
       if( g_recaptcha_challenge_iframe.length ){
            g_recaptcha_challenge_iframe.each(function(index, element) {
                stripeIframeAttributes(element);
            });    
        }

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
         /* 
        Button Element Accessibility 
        */
       var button_elements = $('button');
            
       if( button_elements.length ){
            button_elements.each(function(index, element) {
                $(element).removeAttr('role');
            });
       }
       
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
       var event_map_element = $('.tribe-events-venue-map').find('iframe');
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
       
       if( event_map_element.length ){
        event_map_element.each(function(index, element){
            $(element).attr('title', 'The Events Calendar Event Map');
            stripeIframeAttributes(element);
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

       var addtoany_iframe = $('#a2apage_sm_ifr');

       if( addtoany_iframe.length ){
            addtoany_iframe.each(function(index,element){
                stripeIframeAttributes(element);
           });
       }

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
    }); // End of window load

    function rgb2hex(rgb){
        rgb = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        return "#" +
         ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
         ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
         ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
       }

    function stripeIframeAttributes(frame){
        $(frame).removeAttr('frameborder', '');
        $(frame).removeAttr('scrolling', '');
        $(frame).removeAttr('allowtransparency', '');
        $(frame).removeAttr('allowfullscreen', '');
    }
});
