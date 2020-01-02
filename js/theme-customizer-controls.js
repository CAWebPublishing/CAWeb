/* CAWeb Icon Menu Javascript */
jQuery(document).ready(function($) {
	$(document).on('click', '.caweb-icon-menu li', function(e){cawebIconSelected(this);});
	$(document).on('click', '.caweb-icon-menu-header .resetIcon', function(e){ resetIconSelect($(this).parent().next());});

	function cawebIconSelected(iconLi){
		resetIconSelect($(iconLi).parent());
		$(iconLi).addClass('active');

		var i = $(iconLi).parent().find('input');

		if (i.length){
			$(i).val($(iconLi).attr('title'));
		}
	}

	function resetIconSelect(iconList){
		var icon_list = $(iconList).find('LI');
		
		for(o = 0; o < icon_list.length - 1; o++){
			$(icon_list[o]).removeClass('active');
		}

		var i = $(iconList).find('input');

		if (i.length){
			$(i).val('');
		}
	}
	
});
  

/**
 * CAWeb Theme Customizer Control Scripts 
 * These scripts run within the customizer controls window.
 */

(function() {
  $( document ).ready( function() {
    var api = wp.customize;
    
    correct_colorscheme_visibility();
    
    $('select[data-customize-setting-link="ca_site_version"]').on("change", correct_colorscheme_visibility );
    
		$('span.resetGoogleIcon').on('click', function(e){
			var iconList = $(this).parent().parent().find('#caweb-icon-menu');
			
			resetIconSelect(iconList[0], true);
		});
		
    function correct_colorscheme_visibility(){
      var colors = 4 >= api._value.ca_site_version._value ? colorschemes.original : colorschemes.all;
      
      $('select[data-customize-setting-link="ca_site_color_scheme"]').find('option').remove();
      
       Object.keys( colors ).forEach(function(key){
         $('select[data-customize-setting-link="ca_site_color_scheme"]').append($('<option>', {value:key, text:colors[key]}));
       });
       // if the selected color scheme is not a valid selectable colorscheme set to the default ('oceanside')
       if( api._value.ca_site_color_scheme._value in colors ){
          $('select[data-customize-setting-link="ca_site_color_scheme"] option[value="' + api._value.ca_site_color_scheme._value + '"]')[0].selected = true;
       }else {
         api._value.ca_site_color_scheme._value = 'oceanside';
          $('select[data-customize-setting-link="ca_site_color_scheme"] option[value="oceanside"]')[0].selected = true;
       }
               
    }
});
})( jQuery );
