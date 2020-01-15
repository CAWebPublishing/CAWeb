jQuery(document).ready(function() {
   /* 
   Divi Slider Arrows Accessibility 
   Retrieve all Divi Slider Arrows
   */
   var slider_arrows = $('div.et-pb-slider-arrows');

    // Run only if there are Slide Arrows on the current page
    if( slider_arrows.length ){
        slider_arrows.each(function(index, element) {
            // Grab each more button control
            var prev_button =  $(element).find('a.et-pb-arrow-prev');
            var next_button =  $(element).find('a.et-pb-arrow-next');

            prev_button.addClass('no-underline');
            prev_button.find('span').addClass('sr-only');
            prev_button.prepend('<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>');

            next_button.addClass('no-underline');
            next_button.find('span').addClass('sr-only');
            next_button.prepend('<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>');
            
        });      
    }
});