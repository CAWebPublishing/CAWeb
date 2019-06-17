 jQuery(document).ready(function() {
	 $('.caweb-alert-close').click( function(e){ jQuery.post(this.dataset.url); });
	 
	// run test on initial page load
	checkSize();

	// run test on resize of the window
	$(window).resize(checkSize);

	/* 
    WPForms Accessibility 
    Retrieve radio field containers
    */
   	var wpforms_radio_fields = $('.wpforms-field.wpforms-field-radio')

	/* 
    WPForms Accessibility 
    Retrieve radio field containers
    */
	var wpforms_checkbox_fields = $('.wpforms-field.wpforms-field-checkbox')
   
	if( wpforms_radio_fields.length ){
        wpforms_radio_fields.each(function(index, element) {
			$(element).attr('role', 'radiogroup');
			$(element).attr('aria-label', 'WPForms Radio Group');
		});      
	}  
	
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
		 
	}); // End of window load


 });

 function checkSize(){
	var utility_container = $('.global-header .utility-header .container');
	var translate = utility_container.find('#google_translate_element')[0];
	var settings = utility_container.find('.settings-links')[0];

	var settings_row = document.createElement('DIV');
	var translate_row = document.createElement('DIV');

	settings_row.className = "group flex-row";
	translate_row.className = "group flex-row";

	// If mobile controls are visible
    if ( 1 === utility_container.children().length && "none" !== $(".global-header .mobile-controls").css("display") ){
			if( undefined !== translate )
				$(translate_row).append(translate);

			if( undefined !== settings ){
				$(settings).css('margin-left', '0');
				$(settings_row).append(settings);
			}

			utility_container.append(settings_row);
			utility_container.append(translate_row);
	// If mobile controls are not visible
    }else if(1 < utility_container.children().length && "none" === $(".global-header .mobile-controls").css("display") ) {
			$(settings).css('margin-left', 'auto');

			if( undefined !== translate ){
				$(translate).insertBefore($(settings).find('button:last-child'))
			}
			$(utility_container.children()[0]).append(settings);

		$(utility_container.children()[1]).remove();
		$(utility_container.children()[2]).remove();

	}
}