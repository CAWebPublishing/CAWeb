/**
 * Scripts within the customizer controls window.
 */

(function() {
  $( document ).ready( function() {
    var api = wp.customize;
    var default_caweb_colorschemes = ["oceanside", "orangecounty", "pasorobles", "santabarbara", "sierra"];
    
    correct_colorscheme_visibility();
    $('select[data-customize-setting-link="ca_site_version"]').on("change", correct_colorscheme_visibility );
    
    function correct_colorscheme_visibility(){
      var options = $('select[data-customize-setting-link="ca_site_color_scheme"]')[0].options;
    
      for (var i = 0; i < options.length; i++) {
          // If V4 hide all color schemes not listed as defaults
          if(4 >= api._value.ca_site_version._value ){
            // if not a default color schemes hide it
            if ( -1 === $.inArray(options[i].value, default_caweb_colorschemes) )
                $('select[data-customize-setting-link="ca_site_color_scheme"]')[0].options[i].classList.add('hidden');
            // if the selected color scheme is not a valid default select default colorscheme ('oceanside')
            if( "oceanside" == options[i].value && -1 === $.inArray(api._value.ca_site_color_scheme._value, default_caweb_colorschemes) ){
                  $('select[data-customize-setting-link="ca_site_color_scheme"]')[0].options[i].selected = true;
            }
          // If V5 include all color schemes
          }else if(5 <= api._value.ca_site_version._value ){          
                $('select[data-customize-setting-link="ca_site_color_scheme"]')[0].options[i].classList.remove('hidden');
              
          }
      }
    }
	
});
})( jQuery );
