jQuery( document ).ready( function($) {
	// Sticky Navigation
	var current_padding = $('#main-content').css('padding-top');
	wp.customize( 'ca_sticky_navigation', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data)
			if( newval ){
				$('body').addClass('sticky_nav');
				$('#header').addClass('fixed');
				$('#main-content').css('padding-top', current_padding);
			}else{        
				$('body').removeClass('sticky_nav');
				$('#header').removeClass('fixed');
				$('#main-content').css('padding-top', 0);
			}
		});
	});
});