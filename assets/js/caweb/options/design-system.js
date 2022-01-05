// Toggle CSS Colorscheme Options
jQuery( document ).ready( function($) {

	$('#caweb_enable_design_system').on("change", function(){
		var version = document.getElementById('caweb_enable_design_system').checked ? 'design-system' : $('select[id$="ca_site_version"]').val(); 
        var menu_picker = document.getElementById('ca_default_navigation_menu');
    	var current_menu = menu_picker.value;

        // Change Colorscheme options.
        correct_colorscheme_visibility(version);

        // Clear Menu Options
        for(i = menu_picker.length; i >= 0; i--) {
            menu_picker.remove(i);
        }

        // Design System is on
        if( document.getElementById('caweb_enable_design_system').checked ){
            var menus = { 
                'dropdown' : 'Drop Down' ,
                'singlelevel' : 'Singe Level' ,
            };

            // Hide State Template Version option.
            $('select[id$="ca_site_version"]').parent().parent().addClass('d-none');
        }else{
            var menus = { 
                'flexmega' : 'Flex Mega Menu' ,
                'megadropdown' : 'Mega Drop' ,
                'dropdown' : 'Drop Down' ,
                'singlelevel' : 'Singe Level' ,
            };

    
            // Show State Template Version option.
            $('select[id$="ca_site_version"]').parent().parent().removeClass('d-none');
        }

        // Change Menu Options
        for (const [i, ele] of Object.entries(menus)) {
            var o = document.createElement( 'OPTION' );
    
            o.value = i;
            o.text = ele;
    
            if( i === current_menu ){
                o.selected = true;
            }
    
            menu_picker.append( o );
        }

	} );

});