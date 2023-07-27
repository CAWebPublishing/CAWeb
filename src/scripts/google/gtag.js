// Google Tag Manager
jQuery(document).ready(function($) {
	window.dataLayer = window.dataLayer || [];

	function gtag(){dataLayer.push(arguments);}

	gtag('js', new Date());

	if( undefined !== args.ca_google_analytic4_id){
		gtag('config', args.ca_google_analytic4_id, {cookie_flags:'samesite=lax;domain=.'+document.domain}); // individual agency - either from your own google account, or contact eServices to have one set up for you
	}

	gtag('config', 'G-69TD0KNT0F', {cookie_flags:'samesite=lax;domain=.'+document.domain}); // statewide analytics - do not remove or change

	if( undefined !== args.caweb_multi_ga4 ){
		gtag('config', args.caweb_multi_ga4, {cookie_flags:'samesite=lax;domain=.'+document.domain}); // CAWeb multisite analytics - do not remove or change
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