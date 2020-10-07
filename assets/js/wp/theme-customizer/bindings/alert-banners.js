jQuery( document ).ready( function($) {
	wp.customize( 'caweb_alert_banner_0', function( value ) {
		value.bind( function( newval ) {
			console.log( $(this).attr('name') );
		});
	});
});