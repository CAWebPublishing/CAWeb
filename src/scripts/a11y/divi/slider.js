jQuery(document).ready(function($) {
   /* 
   Retrieve all Divi Post Slider Modules
   */
   var slider_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_slider\b|\bet_pb_fullwidth_slider\d\b/); });

    // Run only if there is a Slider Module on the current page
    if( slider_modules.length ){

        slider_modules.each(function(index, slider) {
            // Grab all slides in slider
            var slides = $(slider).find('.et_pb_slide');

            slides.each(function(i, slide){
                // Grab the slide title and add the text-decoration-none class
                title = $(slide).find('.et_pb_slide_title a');
                title.addClass('text-decoration-none');
            })

            // Grab Slider Arrows
            var arrows = $(slider).find('.et-pb-slider-arrows');
            arrows.each(function(a, arrow){
                // Grab each arrow control
                var prev_button =  $(arrow).find('a.et-pb-arrow-prev');
                var next_button =  $(arrow).find('a.et-pb-arrow-next');

                prev_button.addClass('text-decoration-none');
                prev_button.attr('title', 'Previous Arrow. To activate, press Enter key.');
                prev_button.find('span').addClass('sr-only');
    
                next_button.addClass('text-decoration-none');
                next_button.attr('title', 'Next Arrow. To activate, press Enter key.');
                next_button.find('span').addClass('sr-only');

            })

            // Grab Slider Controllers
            var controllers = $(slider).find('.et-pb-controllers a');

            controllers.each(function(i, controller){
                controller.title = `Slide ${controller.innerText} of ${controllers.length}. To activate, press Enter key.`;
            })

        });      

    }

});