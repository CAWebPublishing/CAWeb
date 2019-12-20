/* CAWeb Option Page */
jQuery(document).ready(function() {
	
	/*
	$( "#cawebAlerts" ).sortable();
	$( "#cawebAlerts" ).disableSelection()
	*/
	$('.remove-alert').click(function(e){ removeAlertFunc(this);});
	$('.alert-status').click(function(e){ alertStatusFunc(this);});
	$('#add-alert').click( function(e){ addAlert();});

	var alertStatusFunc = function (indicator){
		$(indicator).toggleClass('bg-success');
		$(indicator).toggleClass('bg-danger');
		
		var a = $(indicator).hasClass('bg-success') ? 'active' : '';

		$(indicator).next().val(a);

		changeMade = true;
	}

	var removeAlertFunc = function (s){
		var r = confirm("Are you sure you want to remove this alert? This can not be undone.");
	  
		if (r == true) {
			changeMade = true;
			$(s).parent().remove();
		}
	  
	}

	function addAlert(){
		var list = $('#alertBanners');
		var alertCount = $(list).children('li').length + 1;
		var li = document.createElement('LI');
		var row = document.createElement('DIV');
		var removeAlert = document.createElement('SPAN');
		var headerAnchor = document.createElement('A');
		var header = document.createElement('H2');
		var headerToggle = document.createElement('SPAN');
		var alertOptions = document.createElement('DIV');
		var alertIndicator = document.createElement('DIV');
		var alertStatus = document.createElement('INPUT');
		var alertFields = document.createElement('DIV');
		var alertHeader = document.createElement('DIV');
		var alertHeaderLabel = document.createElement('LABEL');
		var alertHeaderInput = document.createElement('INPUT');
		var alertMsg = document.createElement('DIV');
		var alertMsgAnchor = document.createElement('A');
		var alertMsgLabel = document.createElement('LABEL');
		var alertMsgToggle = document.createElement('SPAN');
		var alertMsgTextareaDiv = document.createElement('DIV');
		var alertMsgTextarea = document.createElement('TEXTAREA');
		var alertSettingsDiv = document.createElement('DIV');
		var alertSettingsAnchor = document.createElement('A');
		var alertSettingsLabel = document.createElement('LABEL');
		var alertSettingsToggle = document.createElement('SPAN');
		var alertSettings = document.createElement('DIV');
		var displayOnGroup = document.createElement('DIV');
		var displayOnLabel = document.createElement('LABEL');
		var displayOnHomeGroup = document.createElement('DIV');
		var displayOnHomeGroupInput = document.createElement('INPUT');
		var displayOnHomeGroupLabel = document.createElement('LABEL');
		var displayOnAllGroup = document.createElement('DIV');
		var displayOnAllGroupInput = document.createElement('INPUT');
		var displayOnAllGroupLabel = document.createElement('LABEL');
		var bannerColorGroup = document.createElement('DIV');
		var bannerColorInput = document.createElement('INPUT');
		var bannerColorLabel = document.createElement('LABEL');
		var readMoreGroup = document.createElement('DIV');
		var readMoreAnchor = document.createElement('A');
		var readMoreInput = document.createElement('INPUT');
		var readMoreLabel = document.createElement('LABEL');
		var readMoreSettings = document.createElement('DIV');
		var readMoreTextGroup = document.createElement('DIV');
		var readMoreTextInput = document.createElement('INPUT');
		var readMoreTextLabel = document.createElement('LABEL');
		var readMoreTextSmall = document.createElement('SMALL');
		var readMoreURLGroup = document.createElement('DIV');
		var readMoreURLInput = document.createElement('INPUT');
		var readMoreURLLabel = document.createElement('LABEL');
		var readMoreTargetGroup = document.createElement('DIV');
		var readMoreTargetInput = document.createElement('INPUT');
		var readMoreTargetLabel = document.createElement('LABEL');
		var alertIconGroup = document.createElement('DIV');
		
		// Attributes
		$(row).addClass('form-row');

		$(removeAlert).addClass('text-danger dashicons dashicons-dismiss remove-alert mr-2');
		removeAlert.addEventListener('click', function(e){ removeAlertFunc(this) } )
		
		$(headerAnchor).addClass('d-block text-decoration-none');
		$(headerAnchor).attr('href', '#alert-banner-' + alertCount);
		$(headerAnchor).attr('aria-expanded', 'true');
		$(headerAnchor).attr('aria-controls', 'alert-banner-' + alertCount);
		$(headerAnchor).attr('data-toggle', 'collapse');

		$(header).addClass('d-inline border-bottom');
		$(header).html('Label');
		
		$(headerToggle).addClass('text-secondary ca-gov-icon-');
		
		$(alertIndicator).addClass('dashicons align-middle bg-success rounded-circle alert-status mb-0');
		alertIndicator.addEventListener('click', function(e){ alertStatusFunc(this); });

		$(alertStatus).attr('type','hidden');
		$(alertStatus).attr('name','alert-status-' + alertCount);

		$(alertFields).attr('id', 'alert-banner-' + alertCount);
		$(alertFields).addClass('form-row col-sm-12 border p-2 collapse show');

		$(alertHeader).addClass('form-group col-sm-7');
		
		$(alertHeaderLabel).attr('for', 'alert-header-' + alertCount);
		$(alertHeaderLabel).html('Header');

		$(alertHeaderInput).addClass('form-control');
		$(alertHeaderInput).val('Label');
		$(alertHeaderInput).attr('type', 'text');
		$(alertHeaderInput).attr('placeholder', 'Label');
		$(alertHeaderInput).attr('name', 'alert-header-' + alertCount);

		$(alertMsg).addClass('form-group col-sm-12');

		$(alertMsgAnchor).addClass('text-decoration-none text-reset');
		$(alertMsgAnchor).attr('data-toggle', 'collapse');
		$(alertMsgAnchor).attr('href', '#alert-message-' + alertCount + '_iframe');
		$(alertMsgAnchor).attr('aria-expanded', 'true');
		$(alertMsgAnchor).attr('aria-controls', 'alert-message-' + alertCount + '_iframe');

		$(alertMsgLabel).addClass('border-bottom');
		$(alertMsgLabel).attr('for', 'alert-message-' + alertCount);
		$(alertMsgLabel).html('Message');

		$(alertMsgToggle).addClass('text-secondary ca-gov-icon-');

		$(alertMsgTextareaDiv).addClass('collapse show');
		$(alertMsgTextareaDiv).attr('id', 'alert-message-' + alertCount + '_iframe');
		
		$(alertMsgTextarea).attr('name', 'alert-message-' + alertCount);
		$(alertMsgTextarea).attr('id', 'alertmessage-' + alertCount);

		$(alertSettingsDiv).addClass('form-group col-sm-12');

		$(alertSettingsAnchor).addClass('collapsed text-decoration-none text-reset');
		$(alertSettingsAnchor).attr('data-toggle', 'collapse');
		$(alertSettingsAnchor).attr('href', '#alert-' + alertCount + '-settings');
		$(alertSettingsAnchor).attr('aria-expanded', 'false');
		$(alertSettingsAnchor).attr('aria-controls', '#alert-' + alertCount + '-settings');

		$(alertSettingsLabel).html('Settings');
		$(alertSettingsLabel).addClass('border-bottom');

		$(alertSettingsToggle).addClass('text-secondary ca-gov-icon-');

		$(alertSettings).attr('id', 'alert-' + alertCount + '-settings');
		$(alertSettings).addClass('collapse');

		$(displayOnGroup).addClass('form-group col-sm pl-0');

		$(displayOnLabel).addClass('d-block');
		$(displayOnLabel).html('<strong>Display on</strong>');

		$(displayOnHomeGroup).addClass('form-check form-check-inline');
		
		$(displayOnHomeGroupInput).attr('id', 'alert-display-' + alertCount);
		$(displayOnHomeGroupInput).attr('name', 'alert-display-' + alertCount);
		$(displayOnHomeGroupInput).attr('type', 'radio');
		$(displayOnHomeGroupInput).val('home');
		$(displayOnHomeGroupInput).attr('checked', 'true');
		$(displayOnHomeGroupInput).addClass('form-check-input');

		$(displayOnHomeGroupLabel).addClass('form-check-label');
		$(displayOnHomeGroupLabel).attr('for', 'alert-display-' + alertCount);
		$(displayOnHomeGroupLabel).html('Home Page Only');

		$(displayOnAllGroup).addClass('form-check form-check-inline');
		
		$(displayOnAllGroupInput).attr('id', 'alert-display-' + alertCount);
		$(displayOnAllGroupInput).attr('name', 'alert-display-' + alertCount);
		$(displayOnAllGroupInput).attr('type', 'radio');
		$(displayOnAllGroupInput).val('all');
		$(displayOnAllGroupInput).addClass('form-check-input');

		$(displayOnAllGroupLabel).addClass('form-check-label');
		$(displayOnAllGroupLabel).attr('for', 'alert-display-' + alertCount);
		$(displayOnAllGroupLabel).html('All Pages');
		
		$(bannerColorGroup).addClass('form-group col-sm pl-0');

		$(bannerColorLabel).attr('for', 'alert-banner-color-' + alertCount);
		$(bannerColorLabel).html('<strong>Banner Color</strong>');

		$(bannerColorInput).attr('id', 'alert-banner-color-' + alertCount);
		$(bannerColorInput).attr('name', 'alert-banner-color-' + alertCount);
		$(bannerColorInput).attr('type', 'color');
		$(bannerColorInput).addClass('form-control-sm ml-1');

		var color_scheme_picker = $('#ca_site_color_scheme')[0];
		var color = color_scheme_picker.options[color_scheme_picker.selectedIndex].value;

		$(bannerColorInput).val(args.caweb_colors[color]['highlight']);

		$(readMoreGroup).addClass('form-group pl-0');

		$(readMoreLabel).addClass('d-block');
		$(readMoreLabel).html('<strong>Read More Button</strong>');

		$(readMoreAnchor).attr('data-toggle', 'collapse');
		$(readMoreAnchor).attr('href', '#alert-banner-read-more-' + alertCount);
		$(readMoreAnchor).addClass('shadow-none');

		$(readMoreInput).attr('type', 'checkbox');
		$(readMoreInput).attr('checked', 'true');
		$(readMoreInput).attr('name', 'alert-banner-read-more-' + alertCount);
		$(readMoreInput).attr('id', 'alert-banner-read-more-' + alertCount);
		$(readMoreInput).addClass('form-control');
		
		$(readMoreSettings).attr('id', 'alert-banner-read-more-' + alertCount )
		$(readMoreSettings).addClass('collapse show');

		$(readMoreTextGroup).addClass('form-group col-sm-6 pl-0');
		
		$(readMoreTextLabel).addClass('d-block');
		$(readMoreTextLabel).html('<strong>Read More Button Text</strong>');

		$(readMoreTextInput).attr('type', 'text');
		$(readMoreTextInput).attr('name', 'alert-read-more-text-' + alertCount);
		$(readMoreTextInput).attr('id', 'alert-read-more-text-' + alertCount);
		$(readMoreTextInput).attr('maxlength', 16);
		$(readMoreTextInput).addClass('form-control');

		$(readMoreTextSmall).addClass('text-muted');
		$(readMoreTextSmall).html('(Max Characters: 16)');

		$(readMoreURLGroup).addClass('form-group col-sm-6 pl-0 d-inline-block');

		$(readMoreURLLabel).addClass('d-block');
		$(readMoreURLLabel).html('<strong>Read More Button Url</strong>');

		$(readMoreURLInput).attr('type', 'text');
		$(readMoreURLInput).attr('name', 'alert-read-more-url-' + alertCount);
		$(readMoreURLInput).attr('id', 'alert-read-more-url-' + alertCount);
		$(readMoreURLInput).addClass('form-control');
		
		$(readMoreTargetGroup).addClass('form-group col-sm-4 pl-0 d-inline-block align-top');

		$(readMoreTargetLabel).addClass('d-block');
		$(readMoreTargetLabel).html('<strong>Open link in New Tab</strong>')

		$(readMoreTargetInput).attr('type', 'checkbox');
		$(readMoreTargetInput).attr('checked', 'true');
		$(readMoreTargetInput).attr('data-toggle', 'toggle');
		$(readMoreTargetInput).attr('name', 'alert-read-more-target-' + alertCount);
		$(readMoreTargetInput).attr('id', 'alert-read-more-target-' + alertCount);
		$(readMoreTargetInput).addClass('form-control');

		$(alertIconGroup).addClass('form-group col-sm-12 d-inline-block pl-0');
		var data = {
            'action': 'caweb_icon_menu',
			'name': 'alert-icon-' + alertCount,
			'select': 'important'
          };

		$.post(ajaxurl, data, function(response) {
			$(alertIconGroup).html(response);
		});
		// Append 
		$(header).append(headerToggle);

		$(headerAnchor).append(header);

		$(alertOptions).append(alertIndicator);
		$(alertOptions).append(alertStatus);

		$(alertHeader).append(alertHeaderLabel);
		$(alertHeader).append(alertHeaderInput);

		$(alertMsgLabel).append(alertMsgToggle);

		$(alertMsgAnchor).append(alertMsgLabel);

		$(alertMsgTextareaDiv).append(alertMsgTextarea);

		$(alertMsg).append(alertMsgAnchor);
		$(alertMsg).append(alertMsgTextareaDiv);

		$(alertSettingsLabel).append(alertSettingsToggle);
	
		$(alertSettingsAnchor).append(alertSettingsLabel);
	
		$(displayOnHomeGroup).append(displayOnHomeGroupInput)
		$(displayOnHomeGroup).append(displayOnHomeGroupLabel)

		$(displayOnAllGroup).append(displayOnAllGroupInput);
		$(displayOnAllGroup).append(displayOnAllGroupLabel);

		$(displayOnGroup).append(displayOnLabel);
		$(displayOnGroup).append(displayOnHomeGroup);
		$(displayOnGroup).append(displayOnAllGroup);

		$(bannerColorGroup).append(bannerColorLabel);
		$(bannerColorGroup).append(bannerColorInput);

		$(readMoreAnchor).append(readMoreInput);

		$(readMoreGroup).append(readMoreLabel);
		$(readMoreGroup).append(readMoreAnchor);

		$(readMoreTextGroup).append(readMoreTextLabel);
		$(readMoreTextGroup).append(readMoreTextInput);
		$(readMoreTextGroup).append(readMoreURLLabel);
		$(readMoreTextGroup).append(readMoreTextSmall);

		$(readMoreURLGroup).append(readMoreURLLabel);
		$(readMoreURLGroup).append(readMoreURLInput);

		$(readMoreTargetGroup).append(readMoreTargetLabel);
		$(readMoreTargetGroup).append(readMoreTargetInput);
		
		$(readMoreSettings).append(readMoreTextGroup);
		$(readMoreSettings).append(readMoreURLGroup);
		$(readMoreSettings).append(readMoreTargetGroup);

		$(alertSettings).append(displayOnGroup);
		$(alertSettings).append(bannerColorGroup);
		$(alertSettings).append(readMoreGroup);
		$(alertSettings).append(readMoreSettings);
		$(alertSettings).append(alertIconGroup);

		$(alertSettingsDiv).append(alertSettingsAnchor);
		$(alertSettingsDiv).append(alertSettings);

		$(alertFields).append(alertHeader);
		$(alertFields).append(alertMsg);
		$(alertFields).append(alertSettingsDiv);

		$(row).append(removeAlert);
		$(row).append(headerAnchor);
		$(row).append(alertOptions);
		$(row).append(alertFields);

		$(li).append(row);
		$(list).append(li);

		// Initialize 3rd Party Plugins after DOMs have been added
		wp.editor.initialize("alertmessage-" + alertCount, args.tinymce_settings);

		$(readMoreInput).bootstrapToggle();
		$(readMoreTargetInput).bootstrapToggle({
			on: 'Yes',
			off: 'No'
		  });

		  changeMade = true;
	}
	
});
  
