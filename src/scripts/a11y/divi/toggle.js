jQuery(document).ready(function($) {
	/*
	Divi Toggle Module Accessibility
	Retrieve all Divi Toggle Modules
   */
	var toggle_modules = $('div.et_pb_toggle');

	// Run only if there is a Toggle Module on the current page
	if( toggle_modules.length  ){

		// Callback function to execute when accordion is interacted with
		const callback = (mutationList, observer) => {
			for (const mutation of mutationList) {
				if (mutation.type === "attributes" && mutation.attributeName === "class") {
					// Update the aria-expanded attribute
					var expanded = $(mutation.target).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;
					console.log( mutation.target.classList)
					$(mutation.target).attr('aria-expanded', expanded);
				}
			}
		};

		toggle_modules.each(function(index, element) {
			var expanded = $(element).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;

			$(element).attr('tabindex', 0);
			$(element).attr('role', 'button');
			$(element).attr('aria-expanded', expanded);

			// Create an observer instance linked to the callback function
			let observer = new MutationObserver(callback);

			// Start observing the target node for configured mutations
			observer.observe(element, { attributes: true });
			
		});
	}
	
});
