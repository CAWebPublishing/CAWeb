jQuery( document ).ready( function($) {
	// Menu Home Link
	wp.customize( 'ca_home_nav_link', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data)
			if(-1 == $('#nav_list li:first').hasClass('nav-item-home') ){
				$('#nav_list').prepend('<li class="nav-item nav-item-home hidden"><a href="/" class="first-level-link"><span class="ca-gov-icon-home"></span> Home</a></li>');
			}
			if( newval ){
				if( '/' == document.location.pathname ){
					alert( "This feature is not visible on the Front Page." );
				}else{
					$('#nav_list li:first').removeClass('hidden');
				}
			}else{
				$('#nav_list li:first').addClass('hidden');
			}
		});
	});
});