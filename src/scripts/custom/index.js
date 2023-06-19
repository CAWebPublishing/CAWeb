jQuery(document).ready(function() {
	require('./AutoTracker');
	require('./google');
	
	// from https://www.w3schools.com/js/js_cookies.asp
	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for(let i = 0; i <ca.length; i++) {
		  let c = ca[i];
		  while (c.charAt(0) == ' ') {
			c = c.substring(1);
		  }
		  if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		  }
		}
		return null;
	}

	if( "" !== args.caweb_alerts && undefined !== args.caweb_alerts ){
		args.caweb_alerts.forEach(function(obj, alert){			
			
			if( 
				( null === getCookie('caweb-alert-id-' + alert) || "true" === getCookie('caweb-alert-id-' + alert) ) &&
				( 'active' == obj.status || 'on' == obj.status ) &&
				( ( args.is_front && 'home' === obj.page_display ) || 'all' == obj.page_display  )
			 ){
				document.cookie = 'caweb-alert-id-' + alert + '=true;path=' + args.path;
				createAlertBanner(obj, alert);
			}
		})
	}

	function createAlertBanner( alert, id ){
		var parent_container = $('#caweb_alerts');

		var alert_container = document.createElement('DIV');
		var alert_inner_container = document.createElement('DIV');
		var alert_close_button = document.createElement('Button');

		$(alert_container).addClass('alert alert-dismissible alert-banner border-top border-dark alert-' + id)
		$(alert_container).addClass('alert-' + id);
		$(alert_container).css('background-color', alert.color);

		$(alert_inner_container).addClass('container');

		// Alert Close Button
		$(alert_close_button).addClass('close caweb-alert-close');
		$(alert_close_button).attr('type', 'button');
		$(alert_close_button).attr('data-id', id);
		$(alert_close_button).attr('data-dismiss', 'alert');
		$(alert_close_button).attr('aria-label', 'Close Alert ' + id);
		$(alert_close_button).html('<span aria-hidden="true">&times;</span>');

		alert_inner_container.append(alert_close_button);

		// Alert Read More Button
		if( "" !== alert.button && "" !== alert.url ){
			var alert_read_more = document.createElement('A');

			$(alert_read_more).addClass('alert-link btn btn-default btn-xs');
			$(alert_read_more).attr('href', alert.url);

			if( "" !== alert.target ){
				$(alert_read_more).attr('target', '_blank');
			}

			$(alert_read_more).html(alert.text);

			alert_inner_container.append(alert_read_more);
		}

		// Alert Header
		if( "" !== alert.header ){
			var alert_header = document.createElement('SPAN');

			$(alert_header).addClass('alert-level');

			// Alert Icon
			if( "" !== alert.icon ){
				var alert_icon = document.createElement('SPAN');

				$(alert_icon).addClass('ca-gov-icon-' + alert.icon );
				$(alert_icon).attr('aria-hidden', 'true');
				
				$(alert_header).append(alert_icon);
			}

			$(alert_header).append(alert.header);
			
			alert_inner_container.append(alert_header);

		}

		// Alert Message
		var alert_message = document.createElement('SPAN');

		var message = alert.message.replaceAll('\\"', '');

		$(alert_message).addClass('alert-text');
		$(alert_message).html(message);
		

		alert_inner_container.append(alert_message);

		alert_container.append(alert_inner_container);
		parent_container.append(alert_container);

	}


	$('.caweb-alert-close').on( 'click', function(e){ 
		var alert_id = this.dataset.id; 
		document.cookie = 'caweb-alert-id-' + alert_id + '=false;path=' + args.path;

		$(`.alert-${alert_id}`)[0].remove();
	});
	
	/* Fixed padding for wp-activate.php page when Navigation is fixed */
	if( $('header.fixed + #signup-content').length ){
		$('header.fixed + #signup-content').css('padding-top', $('header.fixed').outerHeight() );
	}

	// This fixes anchor position when smooth scrolling
	window.et_pb_smooth_scroll=function($target,$top_section,speed,easing){
		var $window_width=$(window).width();
		$("header").hasClass("fixed")&&$window_width>768?$menu_offset=$("#header").outerHeight()-1:$menu_offset=-1,
		$("#wpadminbar").length&&$window_width>600&&($menu_offset+=$("#wpadminbar").outerHeight()),
		$scroll_position=$top_section?0:$target.offset().top-$menu_offset,
		void 0===easing&&(easing="swing");
		var $skip_to_content="skip-to-content"===$($target).attr('id'); 
		if($scroll_position<220&&!$skip_to_content){ // scrollDistanceToMakeCompactHeader from cagov.core.js
						$scroll_position-=36; // Height difference between normal and compact header
		}else if($skip_to_content){
			$scroll_position=0;
		}
		$("html, body").animate({scrollTop:$scroll_position},speed,easing);
	}

	
 });
