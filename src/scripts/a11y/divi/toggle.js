jQuery(document).ready(function() {
	/*
	Divi Toggle Module Accessibility
	Retrieve all Divi Toggle Modules
   */
	var toggle_modules = $('div.et_pb_toggle');

	// Run only if there is a Toggle Module on the current page
	if( toggle_modules.length  ){
		toggle_modules.each(function(index, element) {
			var title = $(element).find('.et_pb_toggle_title');
			var expanded = $(element).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;

			$(element).attr('tabindex', 0);
			$(element).attr('role', 'button');
			$(element).attr('aria-expanded', expanded);

			// Events
			$(title).on('click', function(e){
				setTimeout( function(){
					if ($(element).hasClass('et_pb_toggle_open')) {
						toggleModule(element, false);
					}else{
						toggleModule(element);
					}
				}, 500);
			});

			$(element).on('keydown', function(e){
				var toggleKeys = [1, 13, 32]; // key codes for enter(13) and space(32), JAWS registers Enter keydown as click and e.which = 1
				var toggleKeyPressed = toggleKeys.includes(e.which);
				var toggleOpen = [40]; // down arrow to open
				var toggleOpenPressed = toggleOpen.includes(e.which);
				var toggleClose = [38] //up arrow to close
				var toggleClosePressed = toggleClose.includes(e.which);

				if (toggleKeyPressed) {
					setTimeout( function(){
						if ($(element).hasClass('et_pb_toggle_open')) {
							toggleModule(element, false);
						}else{
							toggleModule(element);
						}
					}, 500);
				}

				if (toggleOpenPressed) {
					setTimeout( function(){
						toggleModule(element);
					}, 500);
				}

				if (toggleClosePressed) {
					setTimeout( function(){
						toggleModule(element, false);
					}, 500)
				}

				// Prevents spacebar from scrolling page to the bottom
				if (e.which === 32) {
					e.preventDefault();
				}
			});
		});

		function toggleModule( module, open = true ){
			if( open ){
				$(module).removeClass('et_pb_toggle_close')
				$(module).addClass('et_pb_toggle_open');

				$(module).find('.et_pb_toggle_content').css('display', 'block');

			}else{
				$(module).removeClass('et_pb_toggle_open')
				$(module).addClass('et_pb_toggle_close');

				$(module).find('.et_pb_toggle_content').css('display', 'none')

			}

			// Modifies value for aria-expanded attribute
			// when toggle is clicked or Enter/Space key is pressed
			setTimeout( function(){
				var expanded = $(module).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;
				$(module).attr('aria-expanded', expanded);
			}, 1000 );
		}
	}
});
