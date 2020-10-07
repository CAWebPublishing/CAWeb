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