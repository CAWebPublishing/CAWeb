jQuery(document).ready(function() {
	/* 
    Divi Image Module (Standard & Fullwidth) Accessibility 
    Retrieve all Divi Image Modules
    */
   var image_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_image_\d\b|\bet_pb_fullwidth_image_\d\b/); });

    // Run only if there is a Image Module on the current pageI m
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
        
        jQuery.post(args.ajaxurl, data, function(response) {
            var alts = jQuery.parseJSON(response);

            imgs.forEach( function(element, index){
                // Grab each img control
                var img =  $(image_modules[index]).find('img');
                img.attr('alt', alts[index]);
            });

        });
       
    }
});