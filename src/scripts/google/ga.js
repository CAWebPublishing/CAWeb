// Google Analytics
jQuery(document).ready(function($) {
	window.dataLayer = window.dataLayer || [];

	function gtag(){dataLayer.push(arguments);}

	gtag('js', new Date());

	//Statewide UA property
	gtag('config', 'UA-3419582-2', {cookie_flags:'secure;samesite=lax;domain=' });

	// Statewide GA4 property
	gtag('config', 'G-69TD0KNT0F', {cookie_flags:'secure;samesite=lax;domain=' }); // statewide analytics - do not remove or change

	// CAWeb Multisite UA property
	if(undefined !== args.caweb_multi_ga){
		gtag('config', args.caweb_multi_ga, {cookie_flags:'secure;samesite=lax;domain=' });
	}
	
	// CAWeb Multisite GA4 property
	if( undefined !== args.caweb_multi_ga4 ){
		gtag('config', args.caweb_multi_ga4, {cookie_flags:'secure;samesite=lax;domain=' }); // CAWeb multisite analytics - do not remove or change
	}

	// Agency UA ID
	if( undefined !== args.ca_google_analytic_id){
		gtag('config', args.ca_google_analytic_id, {cookie_flags:'secure;samesite=lax;domain=' });
	}

	// Agency GA4 ID
	if( undefined !== args.ca_google_analytic4_id){
		gtag('config', args.ca_google_analytic4_id, {cookie_flags:'secure;samesite=lax;domain=' }); // individual agency - either from your own google account, or contact eServices to have one set up for you
	}

	var getOutboundLink = function(url) {
		gtag('event', 'click', {
			'event_category': 'navigation',
			'event_label': 'outbound link: ' + url,
			'transport_type': 'beacon',
			'event_callback': function(){document.location = url;}
		});
	}

	var trackDownload = function(filename) {
		gtag('event', 'click', {
			'event_category': 'download',
			'event_label': 'file: ' + filename,
			'transport_type': 'beacon',
			'event_callback': function(){document.location = url;}
		});
	}
});