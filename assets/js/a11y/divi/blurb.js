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