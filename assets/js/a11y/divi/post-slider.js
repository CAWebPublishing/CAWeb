jQuery(document).ready(function() {
    /* 
    Divi Post Slider (Standard & Fullwidth) Accessibility 
    Retrieve all Divi Post Slider Modules
	*/
   var post_slider_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_post_slider_\d\b|\bet_pb_fullwidth_post_slider_\d\b/); });

    // Run only if there is a Post Slider Module on the current page
    if( post_slider_modules.length ){
        post_slider_modules.each(function(index, element) {
            // Grab all slides
            slides =  $(element).find('div.et_pb_slide');
            slides.each(function(i) {
                s =  $(slides[i]); 

                // Grab the slide title
                title = s.find('.et_pb_slide_title');
                title_link = title.find('a');
                title_link.addClass('no-underline');

                // Grab the More Button from Slide
                more_button = s.find('.et_pb_more_button');
        
                // If there is a More Button append SR Tag with Title
                if(more_button.length){
                    more_button.append('<span class="sr-only">' + title.text() + '</span>');
                }
            });

            // Grab Post Slider Controllers
            var controller = $(element).find('.et-pb-controllers a');
            controller.each(function(c){
                controller[c].text = 'Slide ' + controller[c].text;
            })
         });    

    }   

});