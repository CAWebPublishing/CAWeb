<!-- Google Analytics -->
<script type="text/javascript">
   var _gaq = _gaq || [];
_gaq.push(['_setAccount', "<?php echo get_option('ca_google_analytic_id'); ?>"]); // Step 4: your google analytics profile code, either from your own google account, or contact eServices to have one set up for you
_gaq.push(['_gat._anonymizeIp']);
_gaq.push(['_setDomainName', '.ca.gov']);
_gaq.push(['_trackPageview']);

_gaq.push(['b._setAccount', 'UA-3419582-2']); // statewide analytics - do not remove or change
_gaq.push(['b._setDomainName', '.ca.gov']);
_gaq.push(['b._trackPageview']);

(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
    'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();
</script>

<!-- Google Custom Search -->
<script type="text/javascript">


	(function() {

		window.__gcse = {
      callback: myCallback
    };

    function myCallback() {
			var $searchContainer = $("#head-search");
			var $searchText = $searchContainer.find(".gsc-input");
			var $resultsContainer = $('.search-results-container');
			var $body = $("body");

			<?php if( 4 == ca_get_version() ): ?>
				$searchText.attr("placeholder", "Search");
			<?php endif; ?>

			 $searchText.on("click", function() {
					addSearchResults();
					$searchContainer.addClass("search-freeze-width");
			});

			 $searchText.blur(function() {
					$searchContainer.removeClass("search-freeze-width");

				});

				// Close search when close icon is clicked
				$('div.gsc-clear-button').on('click', function() {	removeSearchResults();   });

      //	$('.gsc-search-button').innerHTML
            
			$('.top-level-nav .nav-item .ca-gov-icon-search, #nav-item-search').parents('.nav-item').on('click', function(e) {
					$searchText.focus().trigger('focus')
					<?php if( true == get_option('ca_frontpage_search_enabled') && is_front_page() ): ?>
            // let the user know the input box is where they should search
						$(".primary #head-search").addClass('play-animation').one(
						'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
						function() {
							$(this).removeClass('play-animation');

						});           
        <?php else: ?>
          addSearchResults();
					<?php endif; ?>
					


				});


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


    var cx = "<?php echo get_option('ca_google_search_id');?>";
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
		gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);



  })();
</script>
