jQuery( document ).ready( function($) {
	// Bind to Google Translate Custom Translate Page 
	wp.customize( 'ca_google_trans_page', function( value ) {
		value.bind( function( newval ) {
			if( newval.trim() ){ 
				$('#caweb-gtrans-custom').attr('href', encodeURI( newval.trim() ) );
				$('#caweb-gtrans-custom').removeClass('hidden');
			}else{
				$('#caweb-gtrans-custom').addClass('hidden');
			}
		});
	});

	// Bind to Google Translate Custom CAWeb_Customize_Icon_Control 
	wp.customize( 'ca_google_trans_icon', function( value ) {
		value.bind( function( newval ) {
			var icon = $('#caweb-gtrans-custom span');
			if( ! newval.trim() ){
				icon.addClass('hidden');
			}else{
				icon.attr( "class",  "ca-gov-icon-" + newval.trim);
			}
		});
	});

});