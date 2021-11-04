// Google Analytics
var args = args || [];
var _gaq = _gaq || [];
if ("" !== args.ca_google_analytic_id && undefined !== args.ca_google_analytic_id) {
	_gaq.push(['_setAccount', args.ca_google_analytic_id]); // Step 4: your google analytics profile code, either from your own google account, or contact eServices to have one set up for you
	_gaq.push(['_gat._anonymizeIp']);
	_gaq.push(['_setDomainName', '.ca.gov']);
	_gaq.push(['_trackPageview']);
}

_gaq.push(['b._setAccount', 'UA-3419582-2']); // statewide analytics - do not remove or change
_gaq.push(['b._setDomainName', '.ca.gov']);
_gaq.push(['b._trackPageview']);

if ("" !== args.caweb_multi_ga) {
	_gaq.push(['b._setAccount', args.caweb_multi_ga]); // CAWeb Multisite analytics - do not remove or change
	_gaq.push(['b._setDomainName', '.ca.gov']);
	_gaq.push(['b._trackPageview']);
}

(function () {
	var ga = document.createElement('script');
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
		'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

// Google Tag Manager
if ("" !== args.ca_google_tag_manager_id && undefined !== args.ca_google_tag_manager_id) {
	(function (w, d, s, l, i) {
		w[l] = w[l] || [];
		w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s),
			dl = l != 'dataLayer' ? '&l=' + l : '';

		j.async = true;
		j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;

		f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', args.ca_google_tag_manager_id);
}

