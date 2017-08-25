( function( $ ) {  
// Organization Logo Brand
wp.customize( 'header_ca_branding', function( value ) {
	value.bind( function( newval ) {
		//Do stuff (newval variable contains your "new" setting data)
    if(4 == wp.customize._value.ca_site_version._value){
      var org_logo = document.getElementsByClassName('header-organization-banner')[0].getElementsByTagName('a')[0];
    }else{
      var org_logo = document.getElementsByClassName('header-cagov-logo')[0].getElementsByTagName('a')[0];
    }
    
    var img = document.createElement('img');
    img.src = newval;
    
    org_logo.innerHTML = '';
    org_logo.appendChild(img);
	} );
} );

} )( jQuery );