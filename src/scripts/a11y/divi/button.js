jQuery(document).ready(function($) {
	/* 
    Divi Button Module Accessibility 
    Retrieve all Divi Button Modules
    */
   var button_modules = $('a.et_pb_button');

   // Run only if there is a Button Module on the current page
   if( button_modules.length ){
	button_modules.each(function(index, element) {
		// Add text-decoration-none to each button module
		$(element).addClass('text-decoration-none');

      // Divi has removed et_pb_custom_button_icon class from buttons.
      // If Button is using a data-icon add the missing class.
      if( '' !== $(element).attr('data-icon') ){
    		$(element).addClass('et_pb_custom_button_icon');
      }
	 });
}
});