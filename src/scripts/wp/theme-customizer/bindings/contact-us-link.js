jQuery( document ).ready( function($) {
	// Utility Header Contact Us Link
	wp.customize( 'ca_contact_us_link', function( value ) {
		value.bind( function( newval ) {
			if( ! $('.utility-header:first .settings-links .utility-contact-us').length ){
				var settings_button = $('.utility-header:first .settings-links button[data-target="#siteSettings"]');
				var google_translate = $('.utility-header:first .settings-links #google_translate_element');
				var google_custom_translate = $('.utility-header:first .settings-links #caweb-gtrans-custom');

				if( google_translate.length ){
					$('<a class="hidden utility-contact-us">Contact Us</a>').insertBefore( $(google_translate) );
				}else if( google_custom_translate.length ){
					$('<a class="hidden utility-contact-us">Contact Us</a>').insertBefore( $(google_custom_translate) );
				}else{
					$('<a class="hidden utility-contact-us">Contact Us</a>').insertBefore( $(settings_button) );
				}
			}

			var contact_us_link = $('.utility-header:first .settings-links .utility-contact-us');

			if( ! newval.trim() ){
				contact_us_link.addClass('hidden');
			}else{
				contact_us_link.attr('href', encodeURI( newval.trim() ) );
				contact_us_link.removeClass('hidden');
			}
		});
	});
});