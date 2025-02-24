jQuery(document).ready(function($) {
	/*
	Divi Toggle Module Accessibility
	Retrieve all Divi Toggle Modules
   */
	let toggle_modules = $('div.et_pb_toggle');

	// Run only if there is a Toggle Module on the current page
	if( toggle_modules.length  ){

		// Callback function to execute when accordion is interacted with
		const callback = (toggle, observer) => {
			for (const mutation of toggle) {
				if (mutation.type === "attributes" && mutation.attributeName === "class") {
					// Update the aria-expanded attribute
					let expanded = $(mutation.target).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;
					$(mutation.target).attr('aria-expanded', expanded);
				}
			}
		};

		toggle_modules.each(function(index, toggle) {
			let title = $(toggle).find('.et_pb_toggle_title');
			let expanded = $(toggle).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;

			$(toggle).attr('tabindex', 0);
			$(toggle).attr('role', 'button');
			$(toggle).attr('aria-expanded', expanded);

			toggle.addEventListener('keydown', function(e) {
				let toggleKeys = [1, 13, 32]; // key codes for enter(13) and space(32), JAWS registers Enter keydown as click and e.which = 1
				
				if (toggleKeys.includes(e.which)) {	
					$(title).click();
				}

				// Prevents spacebar from scrolling page to the bottom
				if ( 32 === e.which ) {
					e.preventDefault();
				}
			});
			// Create an observer instance linked to the callback function
			let observer = new MutationObserver(callback);

			// Start observing the target node for configured mutations
			observer.observe(toggle, { attributes: true });
			
		});
	}
	
});
