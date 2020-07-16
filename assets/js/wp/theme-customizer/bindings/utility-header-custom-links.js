jQuery( document ).ready( function($) {
	// Utility Header Custom Link 1 Text
	wp.customize( 'ca_utility_link_1_name', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data) 
			update_custom_link( $('.utility-header .settings-links .utility-custom-1'), newval );
		});
	});

	// Utility Header Custom Link 1 URL
	wp.customize( 'ca_utility_link_1', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data) 
			update_custom_link( $('.utility-header .settings-links .utility-custom-1'), newval, 'href' );
		});
	});

	// Utility Header Custom Link 1 Target
	wp.customize( 'ca_utility_link_1_new_window', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data) 
			update_custom_link( $('.utility-header .settings-links .utility-custom-1'), newval, 'target' );
		});
	});

	// Utility Header Custom Link 2 Text
	wp.customize( 'ca_utility_link_2_name', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data) 
			update_custom_link( $('.utility-header .settings-links .utility-custom-2'), newval );
		});
	});

	// Utility Header Custom Link 2 URL
	wp.customize( 'ca_utility_link_2', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data) 
			update_custom_link( $('.utility-header .settings-links .utility-custom-2'), newval, 'href' );
		});
	});

	// Utility Header Custom Link 2 Target
	wp.customize( 'ca_utility_link_2_new_window', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data) 
			update_custom_link( $('.utility-header .settings-links .utility-custom-2'), newval, 'target' );
		});
	});
	
	// Utility Header Custom Link 3 Text
	wp.customize( 'ca_utility_link_3_name', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data) 
			update_custom_link( $('.utility-header .settings-links .utility-custom-3'), newval );
		});
	});

	// Utility Header Custom Link 3 Url
	wp.customize( 'ca_utility_link_3', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data) 
			update_custom_link( $('.utility-header .settings-links .utility-custom-3'), newval, 'href' );
		});
	});

	wp.customize( 'ca_utility_link_3_new_window', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data) 
			update_custom_link( $('.utility-header .settings-links .utility-custom-3'), newval, 'target' );
		});
	});

	function update_custom_link( link, value, attr = 'html' ){
		if( link.length ){
			if( 'href' == attr ){
				$(link).attr( 'href', encodeURI( value ) );
			}else if( 'target' == attr ){
				if( value ){
					$(link).attr( 'target', '_blank' );					
				}else{
					$(link).attr( 'target', '_self' );					
				}
			}else if( 'html' == attr){
				$(link).html( value );
			}
		}
	}

});