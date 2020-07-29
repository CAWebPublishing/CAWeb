// Toggle CSS Colorscheme Options
jQuery( document ).ready( function($) {
	$('select[id$="ca_site_version"]').on("change", correct_colorscheme_visibility );

	function correct_colorscheme_visibility(){
		var color_scheme_picker = $('select[id$="ca_site_color_scheme"]');
		var current_color = color_scheme_picker.val();
		var new_colors = caweb_admin_args.caweb_colorschemes[$(this).val()];

		color_scheme_picker.empty();

		$.each(new_colors, function(i, ele){
			var o = document.createElement( 'OPTION' );

			$(o).val( i );
			$(o).html( ele.displayname );

			if( i === current_color ){
				$(o).attr('selected', 'selected');
			}

			color_scheme_picker.append( o );
		});

	}

});