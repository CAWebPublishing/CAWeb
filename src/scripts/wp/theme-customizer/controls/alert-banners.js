jQuery( document ).ready( function($) {
	$('#_customize-input-caweb_add_alert_banner').click( add_alert_banner);
	$('.caweb-toggle-alert').click( toggle_alert );
	$('.caweb-remove-alert').click( remove_alert );

	function add_alert_banner(){
		var alert_list = $(this).parent().parent();
		var new_li = $(this).parent().next().clone();
		var alert_toggle = $(new_li).find('#caweb-toggle-alert');
		var alert_status = $(new_li).find('input[name^="alert-status-"]');
		var alert_remove = $(new_li).find('.caweb-remove-alert');

		$(new_li).attr('id', '');

		$(alert_toggle).on( 'click', toggle_alert );
		$(alert_remove).on( 'click', remove_alert );

		$(alert_status).attr('data-toggle', 'toggle');
		$(alert_status).attr('data-size', 'sm');

		$(alert_list).append( $(new_li) );

		$(alert_status).bootstrapToggle({
			onstyle: 'success',
		});

		//wp.editor.initialize("alertmessage-" + alertCount, caweb_admin_args.tinymce_settings);
		
	}

	function toggle_alert(){
		$( '#' + $(this).attr('data-target') ).collapse('toggle');
		$(this).find('span').toggleClass('dashicons-arrow-right');
	}

	function remove_alert(){
		var r = confirm("Are you sure you want to remove this alert? This can not be undone.");
	  
		if (r == true) {
			$(this).parent().remove();
		}
	}

});