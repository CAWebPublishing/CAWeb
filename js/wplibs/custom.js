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
	var row = document.createElement('DIV');

	if( undefined === translate )
		return;
	
	row.className = "group flex-row";

	// If mobile controls are visible
    if ( 1 === utility_container.children().length && "none" !== $(".global-header .mobile-controls").css("display") ){
		$(row).append(translate);
		utility_container.append(row);
	// If mobile controls are not visible
    }else if(2 === utility_container.children().length && "none" === $(".global-header .mobile-controls").css("display") ) {
		$(utility_container.children()[0]).append(translate);
		$(utility_container.children()[1]).remove();

	}
}