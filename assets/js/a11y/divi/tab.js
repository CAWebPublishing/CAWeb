jQuery(document).ready(function() {
    /* 
    Divi Tab Module Accessibility 
    Retrieve all Divi Tab Modules
    */
   var tab_modules = $('div').filter(function(){ return this.className.match(/\bet_pb_tabs_\d\b/); });

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
});