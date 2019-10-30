// Last update 8/5/2019 @ 3:20pm
$ = jQuery.noConflict();

jQuery(document).ready(function() {
    /* SIMPLIFIED FIXED HEADER - /source/js/cagov/fixed-header.js */
    // setting up global variables for header functions
    window.headerVars = {
        MOBILEWIDTH: 767,
        MAXHEIGHT: 1200,
        MINHEIGHT: 500
    };

    var scrollDistanceToMakeCompactHeader = 220;

    var $header = $('header');
    var $globalHeader = $('.global-header');

    var $mainContent = $('#main-content');

    var headerHeight = $globalHeader.innerHeight();
    var windowWidth = $(window).width();

    var currentScrollTop = $(document).scrollTop();

    // set up the interaction handlers before anything else
    setResizeHandler();
    setScrollHandler();

    /**
     * Since we have a fixed header we need to use js to scroll back to top
     * We also expose it as a jQuery plugin for resuability
     */
    (function ($) {
        $.fn.customScrollTop = function customScrollTop() {
            return this.each(function () {
                $el = $(this);
                $el.on('click', function () {
                    $('html,body').animate({
                        scrollTop: 0
                    }, 400, function () {
                        $(window).scroll();
                    });
                    return;
                });
            });
        };
    }(jQuery));

    // fire off the first update to the header, all remaining updates will
    // from user interactions
    updateFixed();

    function setResizeHandler() {
        if (!$header.hasClass('fixed')) {
            return;
        }

        $(window).on('resize', function () {
            windowHeight = $(window).height();
            windowWidth = $(window).width();
            headerHeight = $globalHeader.innerHeight();

            if (windowWidth > headerVars.MOBILEWIDTH) {
                addFixed();
            } else {
                removeFixed();
            }
        });
    }

    function setScrollHandler() {

        // function which we will call on scroll.
        // NOTE: keep this minimal to benefit performance.
        var updateFunc;

        if ($header.hasClass('fixed')) {
            updateFunc = function () {

                // we dont have any fixed updates if we switch or start in mobile
                // even if the user has requested to be fixed.
                if (windowWidth < headerVars.MOBILEWIDTH) {
                    return;
                }

                checkForCompactUpdate();
            }
        }

        // set up our event listener to update the continously
        // changing variables as well as update
        $(window).on('scroll', function () {
            currentScrollTop = $(document).scrollTop();
            updateFunc();
        });

        // fire the first update
        updateFunc();
    }

    // Simply apply the class if we have scrolled the required amount
    function checkForCompactUpdate() {

        if (currentScrollTop >= scrollDistanceToMakeCompactHeader) {
            $header.addClass('compact');

        } else if ($header.hasClass('compact')) {
            $header.removeClass('compact');
        }

    }

    /**
     * Sets and removes the fixed header based upon with and the required class
     */
    function updateFixed() {
        if ($header.hasClass('fixed') && windowWidth > headerVars.MOBILEWIDTH) {
            addFixed();

        } else {
            removeFixed();

        }
    }

    /**
     * Adds the required classes and sets the proper inline styles
     * on the header elements. Also recalculates the header image height
     */
    function addFixed() {
        $header.addClass('fixed');

        // no header image, which means our main content needs to

        $mainContent.css({
            'padding-top': Math.max(headerHeight, 129)
        });
    }
    // take into account the fixed header -----------------------------------------------------v5 FIX---------------------------------


    // remove all inline styles from setting the fixed header
    function removeFixed() {
        $header.removeClass('fixed');
        $headerImage.css({ 'top': '', 'margin-bottom': '' });
        $mainContent.css({ 'padding-top': '' });
        $askGroupBar.css('top', '');
    }
    /* End of SIMPLIFIED FIXED HEADER */
});
