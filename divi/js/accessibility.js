// Last update 8/5/2019 @ 3:20pm
$ = jQuery.noConflict();

   jQuery(document).ready(function() {
    
    /* 
    Divi Blog Module Accessibility 
    Retrieve all Divi Blog Modules
    */
    var blog_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_blog_\d\b/); });

    /* 
    Divi Blurb Module Accessibility 
    Retrieve all Divi Blurb Modules
    */
    var blurb_modules = $('div.et_pb_blurb'); 

    /* 
    Divi Tab Module Accessibility 
    Retrieve all Divi Tab Modules
    */
    var tab_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_tabs_\d\b/); });

    /* 
    Divi Image Module (Standard & Fullwidth) Accessibility 
    Retrieve all Divi Image Modules
    */
    var image_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_image_\d\b|\bet_pb_fullwidth_image_\d\b/); });

    /* 
    Divi Button Module Accessibility 
    Retrieve all Divi Button Modules
    */
    var button_modules = $('a.et_pb_button');

    /* 
    Divi Slides (Standard & Fullwidth) Accessibility 
    Slide Module is a child module used in the following modules:
    Slider (Standard & Fullwidth)
    Post Slider (Standard & Fullwidth)
    Retrieve all Divi Slide Modules
    */
    var slide_modules = $('div.et_pb_slide');
    
    /* 
    Divi Slider Arrows Accessibility 
    Retrieve all Divi Slider Arrows
    */
    var slider_arrows = $('div.et-pb-slider-arrows');
    
    /* 
    Divi Post Slider (Standard & Fullwidth) Accessibility 
    Retrieve all Divi Post Slider Modules
    */
   var slider_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_slider_\d\b|\bet_pb_fullwidth_slider_\d\b/); });


    /* 
    Divi Post Slider (Standard & Fullwidth) Accessibility 
    Retrieve all Divi Post Slider Modules
    */
   var post_slider_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_post_slider_\d\b|\bet_pb_fullwidth_post_slider_\d\b/); });

   /* 
    Divi Fullwidth Header Module Accessibility 
    Retrieve all Divi Fullwidth Header Modules
    */
   var fullwidth_header_modules = $('section').filter(function(){ return this.className.match(/\bet_pb_fullwidth_header_\d\b/); });


   /*
    Divi Accessibility Plugin Adds a "Skip to Main Content" anchor tag
    Retrieve all a[href="#main-content"]
   */
    var main_content_anchors = $('a[href="#main-content"]');

    /*
    Divi Video Module Accessibility
    Retrieve all Divi Video Modules
   */
    var video_modules = $('div.et_pb_video');

    /*
    Divi Toggle Module Accessibility
    Retrieve all Divi Toggle Modules
   */
    var toggle_modules = $('div.et_pb_toggle');

    /*
    Divi Search Module Accessibility
    Retrieve all Divi Search Modules
   */
  var search_modules = $('form.et_pb_searchform');

    /*
    Divi Search Module Accessibility
    Retrieve all Divi Search Modules
   */
    var et_bocs = $('#et-boc.et-boc');

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

    
    // Run only if there is a Blog Module on the current page
    if( blurb_modules.length ){
        blurb_modules.each(function(index, element) {
			var header = $(element).find('.et_pb_module_header');
            var header_title = header.length ?
                     ( $(header).children('a').length ? $(header).children('a')[0].innerText : header[0].innerText ) : '';

            if( ! $(element).find('a').length && $(element).hasClass('et_clickable')){ 
                $(element).prepend('<a href="#"><span class="sr-only">' + header_title + '</span></a>');
            }else if( $(element).find('.et_pb_main_blurb_image').children('a').length ){
                var blurb_img = $(element).find('.et_pb_main_blurb_image');

                $(blurb_img).removeAttr('aria-hidden');
                
                $($(blurb_img).children('a')[0]).prepend('<span class="sr-only">' + header_title + '</span>');
            }

            $(element).children('a').on('focusin', function(){ 
                $(this).parent().css('outline', "#2ea3f2 solid 2px");
             });
             
             $(element).children('a').on('focusout', function(){ 
                $(this).parent().css('outline', '0');
             });
         });      
    }   

    // Run only if there is a Tab Module on the current page
    if( tab_modules.length ){        
        tab_modules.each(function(index, element) {
            // Grab each tab control list
            var tab_list =  $(element).find('ul.et_pb_tabs_controls');
            var lis = $(tab_list).find('li');

            tab_list.each(function(i) {
                var t =  $(tab_list[i]); 

                // Lowercase the Tab Control Role
                t.attr('role', t.attr('role').toLowerCase() );

                // Grab each tab control
                var tabs =  $(element).find('a');
                tabs.each(function(t) {
                    var tab = $(tabs[t]);
                    tab.attr('tabindex', 0);

                    tab.on("focus", function(){

                        lis.each(function(l){
                            $(this).removeClass('et_pb_tab_active');
                        });
                        tab.parent().addClass('et_pb_tab_active');
                        tab.addClass('keyboard-outline');
                    });
                });
            });
        });      
    }   

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
            prev_button.find('span').addClass('sr-only');
            prev_button.prepend('<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>');

            next_button.addClass('no-underline');
            next_button.find('span').addClass('sr-only');
            next_button.prepend('<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>');
            
        });      
    } 
    
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

    
    // Run only if there is a Fullwidth Header Module on the current page
    if( fullwidth_header_modules.length ){
        fullwidth_header_modules.each(function(index, element) {
            // Grab all More Buttons
            more_buttons =  $(element).find('.et_pb_more_button');
            more_buttons.each(function(i) {
             m =  $(more_buttons[i]); 

             m.addClass('no-underline');
            });
         });      
    }   
    
    // Run only if there is more than 1 a[href="#main-content"] on the current page
    if( 1 < main_content_anchors.length  ){
        main_content_anchors.each(function(index, element) {
            // Remove all anchors not in the header
            if( ! $($(element).parent().parent()).is('header') )
                $(element).remove();
            
        });      
    }

    // Run only if there is a Video Module on the current page
    if( video_modules.length  ){
        video_modules.each(function(index, element) {
            var frame = $(element).find('iframe');
            frame.attr('title', 'Divi Video Module IFrame');
            $(frame).removeAttr('frameborder');
            $(frame).attr('id', 'fitvid' + index);
        });      
    }

    // Run only if there is a Video Module on the current page
    if( toggle_modules.length  ){
        toggle_modules.each(function(index, element) {
            
            $(element).off( "keydown", function(e){
                console.log("Key Down " + e.keyCode);
            });

            $(element).off( "keypress", function(e){
                console.log("Key Press " + e.keyCode);
            });

            $(element).off( "keyup", function(e){
                    console.log("Key Up " + e.keyCode);
            });

            $(element).on('focusin', function(){
                toggleExpansion(this);
            })

        });      

        function toggleExpansion(ele){
            var expanded = $(ele).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;
              
            $(ele).attr('aria-expanded', expanded);
        }
    }

    // Run only if there is a Video Module on the current page
    if( search_modules.length  ){
        search_modules.each(function(index, element) {
            var searchInput = $(element).find('input[name="s"]');
            var searchLabel = $(element).find('label');
            
            $(element).attr('aria-label', "Divi Search Form " + index);
            $(searchInput).attr('id', 'divi-search-module-form-input-' + index);
            $(searchLabel).attr('for', 'divi-search-module-form-input-' + index);

        });      

    }
    
    // Run only if there is more than 1 #et-boc.et-boc element
    if( et_bocs.length  ){
        et_bocs.each(function(index, element) {
            if( index ){
                $(element).attr('id', $(element).attr('id') + '-' + index );
            }
        });      

    }
});
