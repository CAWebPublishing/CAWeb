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