jQuery( document ).ready( function($) {
	// Search on Front Page
	wp.customize( 'ca_frontpage_search_enabled', function( value ) {
		value.bind( function( newval ) {
			//Do stuff (newval variable contains your "new" setting data)
			if( newval ){
				$('#head-search').css('top', '240px');
				$('#head-search').addClass('featured-search'); 
				$('#head-search').removeClass('active');
			}else{
				$('#head-search').removeClass('featured-search'); 
				$('#head-search').attr('style', ''); 
			}
		});
	});
});