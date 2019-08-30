// Last update 8/15/2019 @ 8:50am
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
               $(element).removeAttr('frameborder', '');
               $(element).removeAttr('scrolling', '');
               $(element).removeAttr('allowtransparency', '');
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
               $(element).removeAttr('frameborder', '');
               $(element).removeAttr('scrolling', '');
               $(element).removeAttr('allowtransparency', '');
               $(element).removeAttr('allowfullscreen', '');
           });    
           
           setTimeout(function(){
               var rufous_iframe = $('iframe[id="rufous-sandbox"]'); 
               $(rufous_iframe).removeAttr('frameborder', '');
               $(rufous_iframe).removeAttr('scrolling', '');
               $(rufous_iframe).removeAttr('allowtransparency', '');
               $(rufous_iframe).removeAttr('allowfullscreen', '');
           }, 1000);
           
       }
        
        /*
        Google Recaptcha Accessibility 
        Retrieve recaptcha textareas
        */
        var g_recaptcha_response_textarea = $('#g-recaptcha-response')
            
        if( g_recaptcha_response_textarea.length ){
            g_recaptcha_response_textarea.each(function(index, element) {
                $(element).attr('aria-label', 'Google Recaptcha Response')
            });      
        }	

        var g_recaptcha_iframe = $('.grecaptcha-logo iframe'); 
               
       if( g_recaptcha_iframe.length ){
            g_recaptcha_iframe.each(function(index, element) {
               $(element).removeAttr('frameborder', '');
               $(element).removeAttr('scrolling', '');
               $(element).attr('title', 'Google Recaptcha');
               
           });    
       }

       var g_recaptcha_challenge_iframe = $('iframe[title="recaptcha challenge"]');
       if( g_recaptcha_challenge_iframe.length ){
            g_recaptcha_challenge_iframe.each(function(index, element) {
                $(element).removeAttr('frameborder', '');
                $(element).removeAttr('scrolling', '');
            });    
        }

         /* 
        Tabby Response Accessibility 
        Retrieve tablist 
        */
        var tabby_response_tabs = $('.responsive-tabs-wrapper .responsive-tabs')
            
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
        Removing type attribute from styles and scripts cause issue with IE/Edge
       */
        $('style').each(function(index, element) {
            //$(element).removeAttr('type', '');
        });  
        $('script').each(function(index, element) {
            //$(element).removeAttr('type', '');
        });   
    }); // End of window load

});
