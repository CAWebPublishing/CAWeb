jQuery(document).ready(function() {
    /*
    Divi Toggle Module Accessibility
    Retrieve all Divi Toggle Modules
   */
  var toggle_modules = $('div.et_pb_toggle');


    // Run only if there is a Toggle Module on the current page
    if( toggle_modules.length  ){
        toggle_modules.each(function(index, element) {
            var expanded = $(element).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;
            
            $(element).attr('tabindex', 0);
            $(element).attr('role', 'button');
            $(element).attr('aria-expanded', expanded);
            
            $(element).on('click', function(e){
                // If is IE, apply fix
                if (window.document.documentMode) {   
                    // if is an accordion item
                    if( $(element).hasClass('et_pb_accordion_item') ){

                        // if current accordion is not already opened
                        if( ! $(element).hasClass('et_pb_toggle_open') ){
                            // close all accordions
                            toggle_modules.each(function(i,e){
                                $(e).removeClass('et_pb_toggle_open');
                                $(e).addClass('et_pb_toggle_close');
                                $(e).attr('aria-expanded', 'false');
                                $(e).find('.et_pb_toggle_content').slideUp();
                            })

                            // open selected accordion content
                            $(element).find('.et_pb_toggle_content').slideToggle();
                            $(element).addClass('et_pb_toggle_open');
                            $(element).removeClass('et_pb_toggle_close');
                            $(element).attr('aria-expanded', 'true');
                        }
                    // is a toggle item
                    }else{
                        $(element).find('.et_pb_toggle_content').slideToggle();
                        $(element).toggleClass('et_pb_toggle_open');
                        $(element).toggleClass('et_pb_toggle_close');

                        if( $(element).hasClass('et_pb_toggle_open') ){
                            $(element).attr('aria-expanded', 'true');
                        }else{
                            $(element).attr('aria-expanded', 'false');
                        }
                    }
                }else{
                    setTimeout( function(){ toggleExpansion(element); }, 1000 );
                }
            });
        });      

        function toggleExpansion(ele){
            var expanded = $(ele).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;
            $(ele).attr('aria-expanded', expanded);
        }
    }

});