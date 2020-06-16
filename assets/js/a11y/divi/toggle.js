jQuery(document).ready(function() {
    /*
    Divi Toggle Module Accessibility
    Retrieve all Divi Toggle Modules
   */
  var toggle_modules = $('div.et_pb_toggle');


    // Run only if there is a Toggle Module on the current page
    if( toggle_modules.length  ){
        toggle_modules.each(function(index, element) {
            $(element).attr('tabindex', 0);
            $(element).attr('role', 'button');

            $(element).on('focusin', function(e){
                toggleExpansion(this);
            });
            $(element).on('click', function(e){
                setTimeout( function(){ toggleExpansion(element); }, 1000 );
            });
        });      

        function toggleExpansion(ele){
            var expanded = $(ele).hasClass('et_pb_toggle_open') ?  'true' : 'false' ;
            var span_icon = $(ele).find('.et_pb_toggle_title span');
            $(ele).attr('aria-expanded', expanded);

            if( span_icon.length ){
                'true' === expanded ? span_icon.removeClass('ca-gov-icon-triangle-right') : span_icon.addClass('ca-gov-icon-triangle-right');
            }
        }
    }

});