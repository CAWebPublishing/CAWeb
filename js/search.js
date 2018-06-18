/* -----------------------------------------
	 SEARCH - extracted from /source/js/cagov/search.js
----------------------------------------- */
$ = jQuery.noConflict();

$(document).ready(function() {
	var $searchContainer = $("#head-search");
	var $searchText = $searchContainer.find(".search-textfield");
	var $resultsContainer = $('.search-results-container');

	var $body = $("body");
	var $specialIcon =
		// setup the tabs
		$('.search-tabs button').click(function(e) {
			$(this).siblings().removeClass('active');
			$(this).tab('show').addClass('active');
			e.preventDefault()
		});

	// Unfreeze search width when blured.
	// Unfreeze search width when blured.
	$searchText.on('blur focus', function(e) {
		$(this).parents("#head-search").removeClass("active");
		$(this).parents(".search-container").addClass("active");
	});

	$searchText.on("change keyup paste", function() {
		if ($(this).val()) {
			addSearchResults();
		}
	});

	// have the close button remove search results and the applied classes
	$resultsContainer.find('.close').on('click', removeSearchResults);
	$searchContainer.find('.close').on('click', removeSearchResults);

	// Our special nav icon which we need to hook into for starting the search
	// $('#nav-item-search')

	// Sitecore link data types currently do not have a way to set id's per nav,
	// so instead we are binding to what I'm assuming will aslways be the search
	$('.top-level-nav .nav-item .ca-gov-icon-search, #nav-item-search').parents(
		'.nav-item').on('click', function(e) {
		$searchText.focus().trigger('focus')
			// // already opened search, nothing else needs to be done
			// if ($searchContainer.hasClass('active')) {
			//     return;
			// }

		// let the user know the input box is where they should search
		$(".primary #head-search").addClass('play-animation').one(
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
			function() {
				$(this).removeClass('play-animation');

			});


		// When compact has been applied to the header, it will take 400ms
		// unitll the window has scrolled, and it will keep removing the ".active" class. After that we can apply the active
		// class.
		window.setTimeout(function() {
			$('.search-container').addClass(
				'active');
		}, 401);
	});



	// SEE navitgation.js for mobile click handlers

	// Close search when close icon is clicked
	$('.close-search').on('click', removeSearchResults);

	// Helpers
	function addSearchResults() {
		$body.addClass("active-search");
		$searchContainer.addClass('active');
		$resultsContainer.addClass('visible');
		// close the the menu when we are search
		$('#navigation').addClass('mobile-closed');
		// hide the ask group as well
		$('.ask-group').addClass('fade-out');

		// fire a scroll event to help update headers if need be
		$(window).scroll();

		$.event.trigger('cagov.searchresults.show');
	}

	function removeSearchResults() {
		$body.removeClass("active-search");
		$searchText.val('');
		$searchContainer.removeClass('active');
		$resultsContainer.removeClass('visible');
		$('.ask-group').removeClass('fade-out');

		// fire a scroll event to help update headers if need be
		$(window).scroll();

		$.event.trigger('cagov.searchresults.hide');
	}

 $(".textfield-container").click(function() {
  document.getElementById("head-search").classList.add("search-freeze-width")
    });
  
    $(".search-textfield").blur(function() {
        document.getElementById("head-search").classList.remove("search-freeze-width")

    });

}(jQuery));
/* -----------------------------------------
   SEARCH - Extracted from /js/search.js
----------------------------------------- */

$(document).ready(function() {
	var serpLocation = "/serp"; // Location of your search engine results page (SERP)

	var prepareSearchForm = {
		init: function() {
			elemSearchForm = document.getElementById("local_form");
			if (elemSearchForm) {
				elemSearchForm.action = serpLocation;
				elemSearchForm.cof.value = "FORID:10";
			}

			if ((navigator.appVersion.indexOf("MSIE 7.") != -1) || (navigator.appVersion
					.indexOf("MSIE 8.") != -1)) { /* Fix Google Autocomplete and IE7/8 issue where default text doesn't clear */
				document.getElementById("search_local_textfield").value = "";
			}

		}
	}

	prepareSearchForm.init();
}(jQuery));
