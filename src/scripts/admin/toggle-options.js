// Toggle CAWeb Template Options
jQuery( document ).ready( function($) {
	let current_version = $('#ca_site_version option:selected').val();

	// Correct Options. 
	correct_options();

	$('select[id$="ca_site_version"]').on("change", function(){
		current_version = $(this).val();
		correct_options();
	} );

	function correct_options(){
		correct_template_options();
		correct_social_media_links();
	}

	// Toggle Template Options
	function correct_template_options(){
		var current_menu = $('#ca_default_navigation_menu option:selected').val();

		// Version 6.
		if( '6.0' === current_version ){
			// Drop support for mega menus.
			$('#ca_default_navigation_menu option[value="flexmega"]').addClass('d-none');
			$('#ca_default_navigation_menu option[value="megadropdown"]').addClass('d-none');

			// if current menu is no longer supported, set to singlelevel.
			if( ['flexmega','megadropdown'].includes( current_menu ) ){
				$(`#ca_default_navigation_menu option[value="${current_menu}"]`).attr('selected', false);
				$('#ca_default_navigation_menu option[value="singlelevel"]').attr('selected', true);
			}
		
			// Drop support for Menu Home Link.
			$('#ca_home_nav_link').parent().parent().addClass('d-none');
		
			// Drop support for Search on Frontpage
			$('#ca_frontpage_search_enabled').parent().parent().addClass('d-none');

			// Drop support for Utility Header.
			$('#utility-header-settings').prev().addClass('d-none');
			$('#utility-header-settings').addClass('d-none');
		// Version 5.
		}else{
			// Add support for mega menus.
			$('#ca_default_navigation_menu option[value="flexmega"]').removeClass('d-none');
			$('#ca_default_navigation_menu option[value="megadropdown"]').removeClass('d-none');

			// Add support for Menu Home Link.
			$('#ca_home_nav_link').parent().parent().removeClass('d-none');

			// Add support for Search on Frontpage
			$('#ca_frontpage_search_enabled').parent().parent().removeClass('d-none');

			// Drop support for Utility Header.
			$('#utility-header-settings').prev().removeClass('d-none');
			$('#utility-header-settings').removeClass('d-none');
		}
	}

	// Toggle Social Media Links
	function correct_social_media_links(){
		var exclusions = '6.0' === current_version ? [
			'ca_social_snapchat-settings',
			'ca_social_pinterest-settings',
			'ca_social_rss-settings',
			'ca_social_google_plus-settings',
			'ca_social_flickr-settings'
		] : ['ca_social_github-settings'];

		$('div[id^="ca_social_"]').each(function(index) {
			// hide the entire option if not allowed for specified template version
			if( exclusions.includes(this.id) ){
				$(this).addClass('d-none');
				$(this).prev().addClass('d-none');
			}else{
				$(this).removeClass('d-none');
				$(this).prev().removeClass('d-none');
			}

			var optionName = this.id.substring(0, this.id.indexOf('-'));

			// hide header option for all social link options when using version 6.
			if(  '6.0' === current_version ){
				$(`#${optionName}_header`).parent().parent().addClass('d-none');
			}else{
				$(`#${optionName}_header`).parent().parent().removeClass('d-none');
			}
		});
	}


});