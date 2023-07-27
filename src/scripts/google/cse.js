// Google Custom Search 
jQuery(document).ready(function($) {

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
        
});