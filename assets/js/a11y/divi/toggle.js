jQuery(document).ready(function() {
    /*
    Divi Toggle Module Accessibility
    Retrieve all Divi Toggle Modules
   */
  var toggle_modules = $('div.et_pb_toggle');


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

});