 jQuery(document).ready(function() {
	 $('.caweb-alert-close').click( function(e){ jQuery.post(this.dataset.url); });
	 
	// run test on initial page load
	checkSize();

	// run test on resize of the window
	$(window).resize(checkSize);
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

			$(utility_container.children()[0]).append(settings);

			if( undefined !== translate )
				$(utility_container.children()[0]).append(translate);

		$(utility_container.children()[1]).remove();
		$(utility_container.children()[2]).remove();

	}
}