// Google Analytics
jQuery(document).ready(function($) {
	window.dataLayer = window.dataLayer || [];

	function gtag(){dataLayer.push(arguments);}

	gtag('js', new Date());

	//Statewide UA property
	gtag('config', 'UA-3419582-2', {cookie_flags:'secure;samesite=lax;domain='});

	// CAWeb Multisite analytics
	if(undefined !== args.caweb_multi_ga){
		gtag('config', args.caweb_multi_ga, {cookie_flags:'secure;samesite=lax;domain='});
	}
	
	// Agency UA ID
	if( undefined !== args.ca_google_analytic_id){
		gtag('config', args.ca_google_analytic_id, {cookie_flags:'secure;samesite=lax;domain='});
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