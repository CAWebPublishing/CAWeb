(function ($) {
  var frame;
  var el_name;

  $(function() {
    // Fetch available headers and apply jQuery.masonry
    // once the images have loaded.
    var $headers = $('.available-headers');

    $headers.imagesLoaded(function() {
      $headers.masonry({
        itemSelector: '.default-header',
        isRTL: !!('undefined' != typeof isRtl && isRtl)
      });
    });

    // Build the choose from library frame.
    $(document).on('click', 'div .library-link', function(event) {
      var $el = $(this);
      el_name = this.name;
      event.preventDefault();

      var types = $el.data('option');
      var uploader =  $el.data('uploader') ;
      var classes = uploader ? '' : 'hidden-upload';
      var icon_check =  $el.data('icon-check') && $el.attr('data-icon-check') ;
      

      if (!!types && types.indexOf(',') > 0 )
        types = types.split(',');

      // If the media frame already exists, reopen it.
      if (frame) {
        //frame.open();
        //return;
      }



      // Create the media frame.
      frame = wp.media.frames.customHeader = wp.media({
        // Set the title of the modal.
        title: $el.data('choose'),

        // Tell the modal to show only images.
        library: {
          type: types
        },

        uploader: uploader,
        // Customize the submit button.
        button: {
          // Set the text of the button.
          text: $el.data('update'),
          //text: $el.dataset.update,
          // Tell the button not to close the modal, since we're
          // going to refresh the page when the image is selected.
          close: true
        }
      });

      // When an image is selected, run a callback.
      frame.on('select', function() {
        // Grab the selected attachment.
        var attachment = frame.state().get('selection').first();
        //  link = $el.data('updateLink');
        var attachmentURL = attachment.attributes.url;
        var attachmentAlt = attachment.attributes.alt;
        var attachmentFileName = attachment.attributes.filename;
        //var attachmentFileName = attachment.attributes.filename;
        
        var input_box = $('input[type="hidden"][name="' + el_name + '"]');
        var preview_field = $('#' + el_name + '_img');
        var filename_box = $('input[type="text"][id="' + el_name + '_filename"]');

				if( /\d+_media_image/.test(el_name) ){
          var nav_img_alt_box =  document.getElementById(el_name.substring(0, el_name.indexOf("_")) +  "_caweb_nav_media_image_alt_text");
          input_box.value = attachmentURL;
          nav_img_alt_box.value = attachmentAlt;

        }else if( "true" !== icon_check ){
            if( null !== input_box )
              input_box.val(attachmentURL);
            
						if( null !== preview_field )
              preview_field.attr('src', attachmentURL);
              
						if( null !== filename_box )
              filename_box.val(attachmentFileName);
              
            if(  /header_ca_branding/.test(el_name)  )
              $('#header_ca_branding_alt_text').val(attachmentAlt);

        }else{
          var data = {
            'action': 'caweb_fav_icon_check',
            'icon_url': attachmentURL,
          };

					jQuery.post(ajaxurl, data, function(response) {
						if(1 == response){

              if( null !== input_box )
                input_box.val(attachmentURL);
              
              if( null !== preview_field )
                preview_field.attr('src', attachmentURL);
                
              if( null !== filename_box )
                filename_box.val(attachmentFileName);

						}else{
							alert("Invalid Icon Mime Type: " + attachmentFileName);
						}
					});
				}
      });

      frame.on('open', function() {
        if (!uploader) {
         var tabs = frame.el.getElementsByClassName('media-frame-router')[0].getElementsByClassName('media-router')[0].getElementsByClassName('media-menu-item');

					tabs[1].click();
          tabs[0].parentNode.removeChild(tabs[0]);

        }
      });

      frame.open();

    });

  });


}(jQuery));

/* CAWeb Option Page */
jQuery(document).ready(function() {
	
	$('.remove-alert').click(function(e){ removeAlertFunc(this);});
	$('.alert-status').click(function(e){ alertStatusFunc(this);});
	$('#add-alert').click( function(e){ addAlert();});

	var alertStatusFunc = function (indicator){
		$(indicator).toggleClass('bg-success');
		$(indicator).toggleClass('bg-danger');
		
		var a = $(indicator).hasClass('bg-success') ? 'active' : '';

		$(indicator).next().val(a);
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
		//$(displayOnAllGroupInput).attr('checked', 'false');
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

		$(readMoreURLGroup).append(readMoreURLLabel);
		$(readMoreURLGroup).append(readMoreURLInput);

		$(readMoreTargetGroup).append(readMoreTargetLabel);
		$(readMoreTargetGroup).append(readMoreTargetInput);
		
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
		console.log(args.tinymce_settings)
		$(readMoreInput).bootstrapToggle();
		$(readMoreTargetInput).bootstrapToggle({
			on: 'Yes',
			off: 'No'
		  });

	}
	
});
  

/* CAWeb Option Page */
jQuery(document).ready(function() {
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
  

/* CAWeb Option Page */
jQuery(document).ready(function() {
	
  /*
    Custom CSS/JS
  */
 
  //$( "#uploadedCSS, #uploadedJS" ).sortable();
  //$( "#uploadedCSS, #uploadedJS" ).disableSelection();

  // Remove Uploaded CSS/JS
  $('.remove-css, .remove-js').click(function(e){
    e.preventDefault();
    var r = confirm("Are you sure you want to remove " + this.title + "? This can not be undone.");
  
    if (r == true) {
      changeMade = true;
      this.parentNode.remove();
    }
  });

  // Add New CSS
$('#add-css, #add-js').click(function(e){
  var ext =  $(this).attr('id').replace('add-', '');
  var ulID = '#uploaded-' + ext;

  addExternal($(ulID), ext);	
  changeMade = true;

});

function addExternal(ext_list, ext){
  var li = document.createElement('LI');
  var fileUpload = document.createElement('INPUT');
  var rem = document.createElement('a');

  li.classList = "list-group-item";

  // File Upload
  fileUpload.type = "file";
  //fileUpload.name = rowCount + ext + "_upload";
  //fileUpload.id = rowCount + ext + "_upload";
  fileUpload.accept = "." + ext;
  fileUpload.classList = "form-control-file border-bottom border-warning pl-2 d-inline-block w-75";
  fileUpload.addEventListener('change', function () {
    var name = this.value.substring(this.value.lastIndexOf("\\") + 1);
    var extension = name.lastIndexOf(".") > 0 ?
            name.substring(name.lastIndexOf(".") + 1).toLowerCase() : "";
  
    if( "" === extension || ext !== extension){
      alert(name + " isn't a valid " + ext + " extension and was not uploaded.");
      $(this).parent().remove();
    }else{
      rem.title = "remove " + name;
    }
  
  });
  
  // Remove Newly Added Item
  rem.classList = "dashicons dashicons-dismiss text-danger align-middle";
  rem.addEventListener('click', function (e) {
    e.preventDefault();
    var r = "" !== this.title ? confirm("Are you sure you want to " + this.title + "? This can not be undone.") : true;
  
   if (r == true) {
      changeMade = true;
      $(this).parent().remove();
    }
  });

  $(li).append(rem);
  $(li).append(fileUpload);

  $(ext_list).append(li);

}
});
  

 /* CAWeb Option Page */
jQuery(document).ready(function() {
  "use strict";
  var changeMade = false;

  $(window).on('beforeunload', function(){
	  if( changeMade && "nav-menus.php" !== args.changeCheck)
			  return 'Are you sure you want to leave?';

  });

  // Reset Fav Icon
  $('#resetFavIcon').click(function() {
    var ico = args.defaultFavIcon;
    var icoName = ico.substring( ico.lastIndexOf('/') + 1 );

    $('input[name="ca_fav_ico"]').val(icoName);
    $('#ca_fav_ico_img').attr('src', ico);

    changeMade = true;
  });

  $('#ca_google_trans_enabled_custom, label[for="ca_google_trans_enabled_custom"]').click(function(){
    $('#ca_google_trans_enabled_custom_extras').collapse('toggle');
  });

});
