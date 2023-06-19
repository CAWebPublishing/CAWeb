jQuery( document ).ready( function($) {
	// Organization Logo Brand
	wp.customize( 'header_ca_branding', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data)
			var org_logo = $('.header-organization-banner a img');
			
			if( org_logo.length ){
				org_logo.attr('src', newval );
			}
		});
	});
});
