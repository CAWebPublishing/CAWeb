jQuery(document).ready(function() {
	/*
	Divi Toggle Module Accessibility
	Retrieve all Divi Toggle Modules
   */
	var toggle_modules = $('div.et_pb_toggle');

	// Run only if there is a Toggle Module on the current page
	if( toggle_modules.length  ){
		toggle_modules.each(function(index, element) {
			var expanded = $(element).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;

			$(element).attr('tabindex', 0);
			$(element).attr('role', 'button');
			$(element).attr('aria-expanded', expanded);

			// Events
			$(element).on('click keydown', function(e){
				// Shows or hides content in accordion when Enter or Space key is pressed
				var toggleKeys = [1, 13, 32]; // key codes for enter(13) and space(32), JAWS registers Enter keydown as click and e.which = 1
				var toggleKeyPressed = toggleKeys.includes(e.which);
				var toggleOpen = [40]; // down arrow to open
				var toggleOpenPressed = toggleOpen.includes(e.which);
				var toggleClose = [38] //up arrow to close
				var toggleClosePressed = toggleClose.includes(e.which);

				if (toggleKeyPressed) {
					setTimeout( function(){
						$(element).toggleClass('et_pb_toggle_open');
						$(element).toggleClass('et_pb_toggle_close');

						if ($(element).hasClass('et_pb_toggle_open')) {
							$(element).find('.et_pb_toggle_content').css('display', 'block');
						} else {
							$(element).find('.et_pb_toggle_content').css('display', 'none')
						}
					}, 500);
				}

				if (toggleOpenPressed) {
					setTimeout( function(){
						$(element).addClass('et_pb_toggle_open');
						$(element).removeClass('et_pb_toggle_close');

						if ($(element).hasClass('et_pb_toggle_open')) {
							$(element).find('.et_pb_toggle_content').css('display', 'block');
						} else {
							$(element).find('.et_pb_toggle_content').css('display', 'none')
						}
					}, 500);
				}

				if (toggleClosePressed) {
					setTimeout( function(){
						$(element).addClass('et_pb_toggle_close');
						$(element).removeClass('et_pb_toggle_open');

						if ($(element).hasClass('et_pb_toggle_open')) {
							$(element).find('.et_pb_toggle_content').css('display', 'block');
						} else {
							$(element).find('.et_pb_toggle_content').css('display', 'none')
						}
					}, 500)
				}
					
				// Prevents spacebar from scrolling page to the bottom
				if (e.which === 32) {
					e.preventDefault();
				}

				// Modifies value for aria-expanded attribute
				// when toggle is clicked or Enter/Space key is pressed
				setTimeout( function(){
					var expanded = $(element).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;
					$(element).attr('aria-expanded', expanded);
				}, 1000 );
			});
		});
	}
});
