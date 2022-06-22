// Google Analytics
var args = args || [];

if("" !== args.ca_google_analytic_id && undefined !== args.ca_google_analytic_id){
	var _gaq = _gaq || [];

	_gaq.push(['_setAccount', args.ca_google_analytic_id]); // Step 4: your google analytics profile code, either from your own google account, or contact eServices to have one set up for you
	_gaq.push(['_gat._anonymizeIp']);
	_gaq.push(['_setDomainName', '.ca.gov']);
	_gaq.push(['_trackPageview']);

		
	_gaq.push(['b._setAccount', 'UA-3419582-2']); // statewide analytics - do not remove or change
	_gaq.push(['b._setDomainName', '.ca.gov']);
	_gaq.push(['b._trackPageview']);

	if("" !== args.caweb_multi_ga){
		_gaq.push(['b._setAccount', args.caweb_multi_ga]); // CAWeb Multisite analytics - do not remove or change
		_gaq.push(['b._setDomainName', '.ca.gov']);
		_gaq.push(['b._trackPageview']);
	}
}
	

(function() {
  var ga = document.createElement('script');
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
	'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

// Google Analytics4
if("" !== args.ca_google_analytic4_id && undefined !== args.ca_google_analytic4_id){

	window.dataLayer = window.dataLayer || [];

	function gtag(){dataLayer.push(arguments);}

	gtag('js', new Date());

	gtag('config', args.ca_google_analytic4_id); // individual agency - either from your own google account, or contact eServices to have one set up for you

	gtag('config', 'G-69TD0KNT0F'); // statewide analytics - do not remove or change

	if( "" !== args.caweb_multi_ga4 && undefined !== args.caweb_multi_ga4 ){
		gtag('config', args.caweb_multi_ga4); // CAWeb multisite analytics - do not remove or change
	}
}

// Google Tag Manager
if("" !== args.ca_google_tag_manager_id && undefined !== args.ca_google_tag_manager_id){
	(function(w,d,s,l,i){
		w[l] = w[l] || [];
		w[l].push({'gtm.start' :new Date().getTime(), event:'gtm.js'});
		var f = d.getElementsByTagName(s)[0],
			j = d.createElement(s),
			dl = l!='dataLayer' ? '&l=' + l : '';
		
		j.async = true;
		j.src = 'https://www.googletagmanager.com/gtm.js?id='+ i + dl;
	
		f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer',args.ca_google_tag_manager_id);
}

// Google Custom Search 
if("" !== args.ca_google_search_id && undefined !== args.ca_google_search_id){

(function() {

	window.__gcse = {
    	callback: googleCSECallback
	};

    function googleCSECallback() {
			var $searchContainer = $("#head-search");
			var $searchText = $searchContainer.find(".gsc-input");
			var $resultsContainer = $('.search-results-container');
			var $body = $("body");
			
			// search icon is added before search button (search button is set to opacity 0 in css)
			$("input.gsc-search-button").before("<span class='ca-gov-icon-search search-icon' aria-hidden='true'></span>");
      
			 $searchText.on("click", function() {
					addSearchResults();
					$searchContainer.addClass("search-freeze-width");
			});

			 $searchText.blur(function() {
					$searchContainer.removeClass("search-freeze-width");

				});

				// Close search when close icon is clicked
				$('div.gsc-clear-button').on('click', function() {	removeSearchResults();   });
            
				// Helpers
				function addSearchResults() {
					$body.addClass("active-search");
					$searchContainer.addClass('active');
					$resultsContainer.addClass('visible');
					// close the the menu when we are search
					$('#navigation').addClass('mobile-closed');
					// fire a scroll event to help update headers if need be
					$(window).scroll();

					$.event.trigger('cagov.searchresults.show');
				}

				function removeSearchResults() {
							$body.removeClass("active-search");
							$searchContainer.removeClass('active');
							$resultsContainer.removeClass('visible');


							// fire a scroll event to help update headers if need be
							$(window).scroll();

							$.event.trigger('cagov.searchresults.hide');
				}

    }

    var cx = args.ca_google_search_id;
    var gcse = document.createElement('script');
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script');
	s[s.length - 1].parentNode.insertBefore(gcse, s[s.length - 1]);
		
  })();
}

/* Google Translate */
if( args.ca_google_trans_enabled ){
  function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en', gaTrack: true, autoDisplay: false,  
        layout: google.translate.TranslateElement.InlineLayout.VERTICAL}, 'google_translate_element');
  }
  var gtrans = document.createElement('script');
  gtrans.async = true;
  gtrans.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  var s = document.getElementsByTagName('script');
  s[s.length - 1].parentNode.insertBefore(gtrans, s[s.length - 1]);
}
