// Toggle CSS Colorscheme Options
jQuery( document ).ready( function($) {
	$('select[id$="ca_site_version"]').on("change", function(){
		correct_colorscheme_visibility($(this).val());
	} );
});

// Toggle CSS Colorscheme Options
function correct_colorscheme_visibility(version){
	var color_scheme_picker = document.getElementById('ca_site_color_scheme');
	var current_color = color_scheme_picker.value;
	var new_colors = caweb_admin_args.caweb_colorschemes[version];

	for(i = color_scheme_picker.length; i >= 0; i--) {
		color_scheme_picker.remove(i);
	}


	for (const [i, ele] of Object.entries(new_colors)) {
		var o = document.createElement( 'OPTION' );

		o.value = i;
		o.text = ele.displayname;

		if( i === current_color ){
			o.selected = true;
		}

		color_scheme_picker.append( o );
	}

}
