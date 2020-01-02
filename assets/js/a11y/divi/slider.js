jQuery(document).ready(function() {
   /* 
   Divi Post Slider (Standard & Fullwidth) Accessibility 
   Retrieve all Divi Post Slider Modules
   */
   var slider_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_slider_\d\b|\bet_pb_fullwidth_slider_\d\b/); });

    // Run only if there is a Slider Module on the current page
    if( slider_modules.length ){
        slider_modules.each(function(index, element) {
            // Grab Post Slider Controllers
            var controller = $(element).find('.et-pb-controllers a');
            controller.each(function(c){
                controller[c].text = 'Slide ' + controller[c].text;
            })
         });      
    }
});