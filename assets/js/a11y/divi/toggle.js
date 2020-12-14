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
                setTimeout( function(){ 
                    expanded = $(element).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;
                    $(element).attr('aria-expanded', expanded);
                }, 1000 );
            });
        });      

    }

});