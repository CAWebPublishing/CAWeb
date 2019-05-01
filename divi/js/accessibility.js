   $ = jQuery.noConflict();

   jQuery(document).ready(function() {
    
    /* Divi Blog Module Accessibility */
    // Retrieve all Divi Blog Modules
    var blog_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_blog_\d\b/); });

    /* Divi Tab Module Accessibility */
    // Retrieve all Divi Tab Modules
    var tab_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_tabs_\d\b/); });

    /* Divi Image Module (Standard & Fullwidth) Accessibility */
    // Retrieve all Divi Image Modules
    var image_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_image_\d\b|\bet_pb_fullwidth_image_\d\b/); });

    /* Divi Button Module Accessibility */
    // Retrieve all Divi Button Modules
    var button_modules = $('a').filter(function(){ return this.className.match(/\bet_pb_button_\d\b/); });

    /* Divi Slides (Standard & Fullwidth) Accessibility 
        Slide Module is a child module used in the following modules:
        Slider (Standard & Fullwidth)
        Post Slider (Standard & Fullwidth)
       Retrieve all Divi Slide Modules
    */
    var slide_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_slide\b/); });
    
    /* Divi Slider Arrows Accessibility 
       Retrieve all Divi Slider Arrows
    */
   var slider_arrows = $('div').filter(function(){ return this.className.match(/\bet-pb-slider-arrows\b/); });

    // Run only if there is a Blog Module on the current page
    if( blog_modules.length ){
        blog_modules.each(function(index, element) {
            // Grab each blog article
            blog =  $(element).find('article');
            blog.each(function(i) {
             b =  $(blog[i]); 
             // Grab the article title
             title = b.children('.entry-title').text();
             
             // Grab the More Information Button from the Post content
             // Divi appends the More Information button as the last child of the content
             read_more = b.children('.post-content').children('.more-link:last-child');
      
             // If there is a More Information Button append SR Tag with Title
             if(read_more.length){
                 read_more.append('<span class="sr-only">' + title + '</span>');
             }
            });
         });      
    }   

    // Run only if there is a Tab Module on the current page
    if( tab_modules.length ){        
        tab_modules.each(function(index, element) {
            // Grab each tab control
            tab_list =  $(element).find('ul.et_pb_tabs_controls');

            tab_list.each(function(i) {
                t =  $(tab_list[i]); 

                // Lowercase the Tab Control Role
                t.attr('role', t.attr('role').toLowerCase() );

            });

        });      
    }   

    // Run only if there is a Image Module on the current page
    if( image_modules.length ){        
        var imgs = [];

        image_modules.each(function(index, element) {
            // Grab each img control
            var img =  $(element).find('img');

            if( !img.attr('alt') ){
                imgs[index] = img.attr('src');
            }

        });      
        var data = {
            'action': 'caweb_attachment_post_meta',
            'imgs' : imgs
        };
        
        jQuery.post(accessibleargs.ajaxurl, data, function(response) {
            var alts = jQuery.parseJSON(response);

            imgs.forEach( function(element, index){
                // Grab each img control
                var img =  $(image_modules[index]).find('img');
                img.attr('alt', alts[index]);
            });

        });
       
    }   

    // Run only if there is a Button Module on the current page
    if( button_modules.length ){
        button_modules.each(function(index, element) {
            // Add no-underline to each button module
            $(element).addClass('no-underline');
         });      
    } 

    // Run only if there is a Slide Module on the current page
    if( slide_modules.length ){
        slide_modules.each(function(index, element) {
            // Grab each more button control
            var more_button =  $(element).find('a.et_pb_more_button');

            more_button.addClass('no-underline');
            
         });      
    } 

    // Run only if there are Slide Arrows on the current page
    if( slider_arrows.length ){
        slider_arrows.each(function(index, element) {
            // Grab each more button control
            var prev_button =  $(element).find('a.et-pb-arrow-prev');
            var next_button =  $(element).find('a.et-pb-arrow-next');

            prev_button.addClass('no-underline');
            next_button.addClass('no-underline');
            
        });      
    } 
});
