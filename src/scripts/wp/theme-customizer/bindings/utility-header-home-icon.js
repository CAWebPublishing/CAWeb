jQuery( document ).ready( function($) {
	// Utility Header Home Link
	wp.customize( 'ca_utility_home_icon', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data)
			if( ! $('.utility-header:first .social-media-links .utility-home-icon').length ){
				$('<a href="/" title="Home" class="hidden utility-home-icon ca-gov-icon-home"><span class="sr-only">Home</span></a>').insertAfter( $('.utility-header:first .social-media-links .header-cagov-logo') );
			}

			var home_link = $('.utility-header:first .social-media-links .utility-home-icon');
			
			if( newval ){
				home_link.removeClass('hidden');
			}else{
				home_link.addClass('hidden');
			}
		});
	});
});