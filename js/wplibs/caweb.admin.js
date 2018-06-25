 /* Functions used on Admin Pages */
 /* CAWeb Option Page */

 jQuery(document).ready(function() {
	 $ = jQuery.noConflict();
	var changeMade = false;

  $(window).on('beforeunload', function(){
    	if( changeMade && "nav-menus.php" !== args.changeCheck)
    			return 'Are you sure you want to leave?';

	});

$('textarea, #ca_default_navigation_menu, select, input[type="text"], input[type="checkbox"], input[type="password"] ').change(function(e){changeMade = true; });
$('input[type="button"]').click(function(e){changeMade = true; });
$('#ca-options-form').submit(function(){ changeMade = false; this.submit(); });

$('.caweb-nav-tab').click(function() {
	var tabs = document.getElementsByClassName('caweb-nav-tab');
	var selected_tab = this.getAttribute("name");

	for (i = 0; i < tabs.length; i++) {
		if( selected_tab !== tabs[i].getAttribute("name") ){
			tabs[i].classList.remove("nav-tab-active");
      		document.getElementById(tabs[i].getAttribute("name")).classList.add('hidden');
		}else{
			tabs[i].classList.add("nav-tab-active");
            document.getElementById(selected_tab).classList.remove('hidden');
        }
    }

	document.getElementById('tab_selected').value = selected_tab;
 });

$('#ca_site_version').change(function() {
	var version = this.options[this.selectedIndex].value;
	var extra_options = document.getElementsByClassName("extra");
	var base_options = document.getElementsByClassName("base");
	var front_search_option = $('#general table:first tr:nth-child(6)');
	var color_scheme_picker = $('#ca_site_color_scheme')[0];
	var color = color_scheme_picker.options[color_scheme_picker.selectedIndex].value;
	var resetColor = false

	for (var i = 0; i < extra_options.length; i++) {
		if (version >= 5.0) {
           extra_options[i].classList.remove("hidden");
           for (var j = 0; j < base_options.length; j++) {
             base_options[j].classList.add("hidden");
           }

           // if theres no Google Search ID
           if( !$('#ca_google_search_id').val().trim() ){
             front_search_option.addClass('hidden');
           }else{
             front_search_option.removeClass('hidden');
           }

         } else {

           extra_options[i].classList.add("hidden");

		   if( extra_options[i].value == color && extra_options[i].classList.contains('extra'))
				resetColor = true;

           for (var j = 0; j < base_options.length; j++) {
             base_options[j].classList.remove("hidden");
           }
         }

       }

	   if(resetColor){
		   for (var i = 0; i < color_scheme_picker.options.length; i++) {
				if(  !color_scheme_picker.options[i].classList.contains('extra')  ){
					color_scheme_picker.selectedIndex = i;
					break;
				}
		   }
		}
    });

   $('#resetIcon').click(function() {
      var ico = args.defaultFavIcon;
      	document.getElementById('ca_fav_ico').value = ico;
        document.getElementById('ca_fav_ico_img').src = ico;
        document.getElementById('ca_fav_ico_filename').value = 'favicon.ico';
    });

$('#ca_google_search_id').on('input',function(e){
  var front_search_option = $('#general table:first tr:nth-child(6)');
  var site_version = $('#ca_site_version option:selected').val();
  // if theres no Google Search ID
  if( !this.value.trim() ){
    front_search_option.addClass('hidden');
  }else if(5 <= site_version){
    front_search_option.removeClass('hidden');
  }
});

$('.removeStyle').click(function(e){
  e.preventDefault();
	var r = confirm("Are you sure you want to " + this.title + "? This can not be undone.");

	if (r == true) {
		changeMade = true;
		this.parentNode.remove();
	}
});

$( "#uploadedCSS" ).sortable();
$( "#uploadedCSS" ).disableSelection();

$('#addCSS').click(function(e){
	var ext_css_table = $('#custom-css table:first');
	var rowCount = ext_css_table.children().children().length;
	var row = document.createElement('TR');
	var col1 = document.createElement('TD');
	var rem = document.createElement('A');
	var col2 = document.createElement('TD');
	var fileUpload = document.createElement('Input');

  row.classList = "pending-stylesheet";
  rem.classList = "dashicons dashicons-dismiss removeStyle";

	fileUpload.type = "file";
	fileUpload.name = rowCount + "_upload";
	fileUpload.id = rowCount + "_upload";
	fileUpload.accept = ".css";

  rem.addEventListener('click', function (e) {
    e.preventDefault();
    var r = "" !== this.title ? confirm("Are you sure you want to " + this.title + "? This can not be undone.") : true;

   if (r == true) {
  		changeMade = true;
  		this.parentNode.parentNode.remove();
  	}
  });

  fileUpload.addEventListener('change', function () {
    var name = this.value.substring(this.value.lastIndexOf("\\") + 1);
    var ext = name.lastIndexOf(".") > 0 ?
                      name.substring(name.lastIndexOf(".") + 1).toLowerCase() : "";

    if( "" === ext || "css" !== ext){
      alert(name + " isn't a valid CSS extension and was not uploaded.");
      this.parentNode.remove();
    }else{
      rem.title = "remove " + name;
    }

  });

	col2.append(rem);
	col2.append(fileUpload);

	row.append(col1);
	row.append(col2);

	ext_css_table.append(row);

	changeMade = true;

});

$( "#cawebAlerts" ).sortable();
$( "#cawebAlerts" ).disableSelection();

$('#addAlertBanner').click(function(e){
  $('#caweb_alert_count').val( function(i, oldval) { return ++oldval; } );

  var alertUL = $('#cawebAlerts');
  var alertLI = document.createElement('LI');
	var alertLICount = $('#caweb_alert_count').val();
	var alert_container = document.createElement('DIV');

	var alertSettings = $('#caweb-alert-settings');
	var alert_settings_wrapper = document.createElement('DIV');

	// Create and Add New Alert
	alert_container.classList = "caweb-alert";
	addAlert(alert_container, alertLICount);

	// Create and Add New Alert Settings
	alert_settings_wrapper.id = "caweb-alert-" + alertLICount;
	alert_settings_wrapper.style.display = "none";
	addAlertSettings(alert_settings_wrapper, alertLICount);

	// Add new Alert
	alertLI.appendChild(alert_container);
	alertUL.append(alertLI);

	// Add corresponding Alert Setting
  alertSettings.append(alert_settings_wrapper);

  console.log(tinymce);
  tinymce.execCommand( 'mceAddEditor', true, 'alert-message-' + alertLICount );

  changeMade = true;

});
$('.caweb-alert pre a.alert-toggle').click(function(e){ displayAlertOptions(this); });
$('.removeAlert').click(function(e){ removeAlert(this); });
$('.alert-read-more').click(function(e){ displayReadMoreOptions(this); });
$('.resetAlertIcon').click(function(e){	resetIconSelect(this.parentNode.nextElementSibling); });
$('.caweb-alert pre a.activateAlert').click(function(e){ activateAlert(this);});

var alertSettings = [];
$('[class*="caweb-alert-"] .button-primary.ok').click(function(e){ saveAlertSettings(this); });

$('[class*="caweb-alert-"] .button-primary.cancel').click(function(e){ cancelAlertSettings(this); });

function activateAlert(activateButton){
  activateButton.classList.toggle('inactive');

  if(activateButton.className.includes('inactive')){
    activateButton.firstElementChild.value = 'inactive';
  }else{
    activateButton.firstElementChild.value = 'active';
  }
}
function addAlert(container, alertCount){
	var alert_header_wrapper = document.createElement('PRE');
	var alert_header = document.createElement('P');
	var menu = document.createElement('A');
	var rem = document.createElement('A');
  var toggle = document.createElement('A');
	var status = document.createElement('A');
  var alert_status_input = document.createElement('INPUT');

	var alert_info = document.createElement('DIV');
	var alert_header_input = document.createElement('INPUT');
	var alert_msg = document.createElement('P');
	var alert_msg_textarea = document.createElement('TEXTAREA');

	alert_header.innerHTML = "Header";

	menu.classList = "thickbox dashicons dashicons-menu";
	menu.href = "#TB_inline?width=600&height=550&modal=true&inlineId=caweb-alert-" + alertCount;

	rem.classList = "dashicons dashicons-dismiss removeAlert";
	rem.addEventListener('click', function (e) { removeAlert(this); });

	toggle.classList = "dashicons dashicons-arrow-up alert-toggle";
	toggle.addEventListener('click', function (e) { displayAlertOptions(this); });

  status.classList = "dashicons activateAlert";
  status.addEventListener('click', function (e) { activateAlert(this); });

  alert_status_input.name = "alert-status-" + alertCount;
  alert_status_input.type = "hidden";

  status.appendChild(alert_status_input);

	alert_info.appendChild(alert_header_input);
	alert_info.appendChild(alert_msg);
	alert_info.appendChild(alert_msg_textarea);

	alert_header_input.name = "alert-header-" + alertCount;
	alert_header_input.type = "text";
  alert_header_input.placeholder = "Header";

	alert_msg.innerHTML = "Message";

	alert_msg_textarea.form = "ca-options-form";
	alert_msg_textarea.name = "alert-message-" + alertCount;
  alert_msg_textarea.id = "alert-message-" + alertCount;

	alert_header_wrapper.appendChild(alert_header);
	alert_header_wrapper.appendChild(rem);
	alert_header_wrapper.appendChild(menu);
  alert_header_wrapper.appendChild(toggle);
	alert_header_wrapper.appendChild(status);

	container.appendChild(alert_header_wrapper);
	container.appendChild(alert_info);

}
function addAlertSettings(container, alertCount){
	var alert_settings = document.createElement('FORM');
  var alert_heading = document.createElement('H3');
	var alert_display = document.createElement('P');
	var label1 = document.createElement('LABEL');
	var alert_display_home = document.createElement('INPUT');
	var label2 = document.createElement('LABEL');
	var alert_display_all = document.createElement('INPUT');
	var alert_banner_color = document.createElement('P');
	var color_scheme_picker = $('#ca_site_color_scheme')[0];
	var color = color_scheme_picker.options[color_scheme_picker.selectedIndex].value;
	var alert_banner_color_input = document.createElement('INPUT');
	var alert_read_more = document.createElement('P');
	var label3 = document.createElement('LABEL');
	var alert_read_more_input = document.createElement('INPUT');

	// Hidden Options for Read More Button
  var hidden_container = document.createElement('DIV');
  var alert_read_more_target_url = document.createElement('P');
  var alert_read_more_target_url_input = document.createElement('INPUT');
  var alert_open_link = document.createElement('LABEL');
  var label4 = document.createElement('LABEL');
  var label5 = document.createElement('LABEL');
  var alert_read_more_new_target = document.createElement('INPUT');
  var alert_read_more_current_target = document.createElement('INPUT');

	// Alert Icon options
	var alert_icon = document.createElement('P');
  var alert_icon_reset = document.createElement('SPAN');
  var alert_icon_list = document.createElement('UL');
  var alert_icon_input = document.createElement('INPUT');

  // Alert Setting Confirmation
  var alert_setting_ok = document.createElement('A');
  var alert_setting_cancel = document.createElement('A');

	alert_settings.classList = "caweb-alert-" + alertCount;

  alert_heading.innerHTML = "Alert Settings";

  alert_display.innerHTML = "Display on";

  alert_display_home.type = "radio";
  alert_display_home.name = "alert-display-" + alertCount;
  alert_display_home.value = "home";
  alert_display_home.checked = true;

  label1.appendChild(alert_display_home);
  label1.appendChild(document.createTextNode("Home Page Only"));

  alert_display_all.type = "radio";
  alert_display_all.name = "alert-display-" + alertCount;
  alert_display_all.value = "all";

  label2.appendChild(alert_display_all);
  label2.appendChild(document.createTextNode("All Pages"));

  alert_banner_color.innerHTML = "Banner Color";

  alert_banner_color_input.type = "color";
  alert_banner_color_input.name = "alert-banner-color-" + alertCount;
  alert_banner_color_input.value = args.caweb_colors[color]['highlight'];

  label3.innerHTML = "Add Read More Button ";
  alert_read_more_input.type = "checkbox";
	alert_read_more_input.classList = "alert-read-more";
  alert_read_more_input.name = "alert-read-more-" + alertCount;

  alert_read_more_input.addEventListener('click',  function(e){ displayReadMoreOptions(this)});

  label3.appendChild(alert_read_more_input);
  alert_read_more.appendChild(label3);

  alert_read_more_target_url.innerHTML = "Read More Button URL";

  alert_read_more_target_url_input.type = "text";
  alert_read_more_target_url_input.name = "alert-read-more-url-" + alertCount;

  alert_open_link.innerHTML = "Open link in";

  alert_read_more_new_target.type = "radio";
  alert_read_more_new_target.name = "alert-read-more-target-" + alertCount;
  alert_read_more_new_target.checked = true;
  alert_read_more_new_target.value = "_blank";

  alert_read_more_current_target.type = "radio";
  alert_read_more_current_target.name = "alert-read-more-target-" + alertCount;
  alert_read_more_current_target.value = "";

  label4.appendChild(alert_read_more_new_target);
  label4.appendChild(document.createTextNode("New Tab "));

  label5.appendChild(alert_read_more_current_target);
  label5.appendChild(document.createTextNode("Current Tab"));

  hidden_container.classList = "hidden";
  hidden_container.appendChild(alert_read_more_target_url);
  hidden_container.appendChild(alert_read_more_target_url_input);
  hidden_container.appendChild(alert_open_link);
  hidden_container.appendChild(label4);
  hidden_container.appendChild(label5);

  alert_icon.innerHTML = "Add Icon ";
	alert_icon_reset.classList = "dashicons dashicons-image-rotate resetAlertIcon";
	alert_icon_reset.addEventListener('click', function (e) { resetIconSelect(this.parentNode.nextElementSibling); });

	alert_icon.appendChild(alert_icon_reset);

  alert_icon_list.id = "caweb-icon-menu";
  for (i = 0; i < args.caweb_icons.length; i++) {
    var icon = document.createElement('LI');
    icon.classList = "icon-option ca-gov-icon-" + args.caweb_icons[i];
    icon.title = args.caweb_icons[i];

    icon.addEventListener('click', function (e) { cawebIconSelected(this); });
    alert_icon_list.appendChild(icon);
  }

  alert_icon_input.name = "alert-icon-" + alertCount;
  alert_icon_input.type = "hidden";

	alert_icon_list.appendChild(alert_icon_input);

  alert_setting_ok.className = "button button-primary ok";
  alert_setting_ok.innerHTML = "Ok";
  alert_setting_ok.addEventListener('click', function(e){ saveAlertSettings(this);});

  alert_setting_cancel.className = "button button-primary cancel";
  alert_setting_cancel.innerHTML = "Cancel";
  alert_setting_cancel.addEventListener('click', function(e){ cancelAlertSettings(this);});

  alert_settings.appendChild(alert_heading);
  alert_settings.appendChild(alert_display);
  alert_settings.appendChild(label1);
  alert_settings.appendChild(label2);
  alert_settings.appendChild(alert_banner_color);
  alert_settings.appendChild(alert_banner_color_input);
  alert_settings.appendChild(alert_read_more);
  alert_settings.appendChild(hidden_container);
  alert_settings.appendChild(alert_icon);
  alert_settings.appendChild(alert_icon_list);
  alert_settings.appendChild(alert_setting_ok);
  alert_settings.appendChild(alert_setting_cancel);

	container.appendChild(alert_settings);


}
function displayAlertOptions(e){
  e.parentNode.nextElementSibling.classList.toggle('hidden');
  e.parentNode.parentNode.nextElementSibling.classList.toggle('hidden');

	if( e.parentNode.nextElementSibling.classList.contains('hidden') ){
		e.parentNode.firstElementChild.innerHTML = "" !== e.parentNode.nextElementSibling.firstElementChild.value.trim() ? e.parentNode.nextElementSibling.firstElementChild.value : "Header";
    e.classList.remove('dashicons-arrow-up');
    e.classList.add('dashicons-arrow-down');
	}else{
		e.parentNode.firstElementChild.innerHTML = "Header";
    e.classList.remove('dashicons-arrow-down');
    e.classList.add('dashicons-arrow-up');
	}
}
function removeAlert(e){
	var r = confirm("Are you sure you want to remove this alert? This can not be undone.");

	if (r == true) {
		changeMade = true;
		e.parentNode.parentNode.parentNode.remove();
	}

}
function displayReadMoreOptions(e) {
	e.parentNode.parentNode.nextSibling.classList.toggle("hidden");
 }
function saveAlertSettings(saveButton){
  var alertID = saveButton.parentNode.className.substring(saveButton.parentNode.className.lastIndexOf('-') + 1);
  var inputs = saveButton.parentNode.getElementsByTagName('INPUT');
  var tmp = {};

  for(var i = 0; i < inputs.length; i++){
    var input = inputs[i];

    if( (input.name.includes('alert-display-') && input.checked) ||
        (input.name.includes('alert-read-more-target-') && input.checked) ){
      tmp[input.name] = input.value;
    }else if( ! input.name.includes('alert-display-') && ! input.name.includes('alert-read-more-target-') ){
      if( input.name.includes('alert-icon-') ){
        var selectedIcon = input.parentNode.getElementsByClassName('selected');
        if( 0 < selectedIcon.length){
          cawebIconSelected($(selectedIcon[0])[0]);
          input.value = input.parentNode.getElementsByClassName('selected')[0].title;
        }else{
          input.value = '';
        }
      }
      tmp[input.name] = input.name.includes('alert-read-more-') && ! input.name.includes('alert-read-more-url-') ? input.checked : input.value;
    }
  }

  alertSettings[alertID] = tmp;
  tb_remove();
}
function cancelAlertSettings(cancelButton){
  var alertID = cancelButton.parentNode.className.substring(cancelButton.parentNode.className.lastIndexOf('-') + 1);
	var inputs = cancelButton.parentNode.getElementsByTagName('INPUT');

  if(undefined !==  alertSettings[alertID] ){
    Object.keys( alertSettings[alertID] ).forEach(function(prop){
      var propValue = alertSettings[alertID][prop];
      var input = $('[name="' + prop + '"]')[0];

      if(prop.includes('alert-display-')){
        $('[name="' + prop + '"][value="' + propValue + '"]')[0].checked = true;
      }else if(prop.includes('alert-read-more-target-')){
        $('[name="' + prop + '"]')[0].checked = propValue;
      }else{
        if( prop.includes('alert-icon-') ){
          var iconList = input.parentNode;
          resetIconSelect(iconList);
          if( "" !== propValue){
            $(iconList).find('[title="' + propValue+ '"]')[0].classList.add('selected');
          }
        }
        if(prop.includes('alert-read-more-') && ! prop.includes('alert-read-more-url-') ){
          if(propValue){
            input.checked = true;
            input.parentNode.parentNode.nextElementSibling.classList.remove('hidden');
          }else{
            input.checked = false;
            input.parentNode.parentNode.nextElementSibling.classList.add('hidden');
          }
        }else{
          input.value = propValue;
        }
      }

    });
  }else{
    for(var i = 0; i < inputs.length; i++){
      var input = inputs[i];

      if((input.name.includes('alert-display-') && "home" == input.value) || (input.name.includes('alert-read-more-target-') && "_blank" == input.value)){
        input.checked = true;
      }else if(input.name.includes('alert-read-more-') && "checkbox" == input.type){
        input.checked = false;
        input.parentNode.parentNode.nextElementSibling.classList.add('hidden');
      }else if(input.name.includes('alert-banner-color-')){
        var color_scheme_picker = $('#ca_site_color_scheme')[0];
      	var color = color_scheme_picker.options[color_scheme_picker.selectedIndex].value;
        input.value = args.caweb_colors[color]['highlight'];
      }else{
        if(input.name.includes('alert-icon-')){
          var iconList = input.parentNode;
          resetIconSelect(iconList);
        }
        input.value = "";
      }
    }
  }

	tb_remove();
}

$('.resetGoogleIcon').click(function(e){resetIconSelect(this.parentNode.nextElementSibling.firstElementChild);});
$('#caweb-icon-menu li').click(function(e){cawebIconSelected(this);});
$('[name="ca_google_trans_enabled"]').click(function(e){
	if("custom" !== this.value){
		this.parentNode.parentNode.parentNode.nextElementSibling.classList.add('hidden');
		this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.classList.add('hidden');
		this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('hidden');
	}else if("custom" == this.value){
		this.parentNode.parentNode.parentNode.nextElementSibling.classList.remove('hidden');
		this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.classList.remove('hidden');
		this.parentNode.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('hidden');
	}
});

function cawebIconSelected(iconLi, autoUpdate = false){
	var icon_list = iconLi.parentNode.getElementsByTagName('LI');

	for(o = 0; o < icon_list.length - 1; o++){
		icon_list[o].classList.remove('selected');
	}
	iconLi.classList.add('selected');

	if( autoUpdate ){
		iconLi.parentNode.lastElementChild.value = iconLi.title;
	}
}
function resetIconSelect(iconList){
	iconList.lastElementChild.value = "";
	var icon_list = iconList.getElementsByTagName('LI');

	for(o = 0; o < icon_list.length - 1; o++){
		icon_list[o].classList.remove('selected');
	}
}

$('[name="caweb_options_submit"]').click( function(e){
  e.preventDefault();
  var settingInputs = $('#caweb-alert-settings').find('INPUT');
  var hiddenInputs = document.createElement('DIV');

  this.nextElementSibling.value = "on";

  hiddenInputs.className = "hidden";

  for(var i = 0; i < settingInputs.length; i++){
    var input = settingInputs[i];

    if( ((input.name.includes('alert-display-') || input.name.includes('alert-read-more-target-') ) && input.checked ) ||
          ( ! input.name.includes('alert-display-') && ! input.name.includes('alert-read-more-target-') )){
      hiddenInputs.append(settingInputs[i]);
    }
  }
  $('#ca-options-form').append(hiddenInputs);
  $('#ca-options-form').submit();
});

 /* End of CAWeb Option Page */
});

 jQuery(document).ready(function() {
	 $ = jQuery.noConflict();

   /* Navigation Page */
   // Get menu count
   var menu_count = $('#menu-to-edit').children().length;

   if (document.getElementById('description-hide') !== null) {
     document.getElementById('description-hide').parentNode.style.visibility =
       "hidden";
   }

   $('.item-edit').click(menu_selection);

   $('ul.menu-icon-list li').click(icon_select);

   $('.unit-size-selector').change(unit_change);

   // Used to attach EventListeners to newly added Nav Menu Items
   $('#menu-to-edit').on('DOMSubtreeModified', function(event) {
     if (menu_count < $('#menu-to-edit').children().length) {
       menu_count = $('#menu-to-edit').children().length;

       // Grab array of all pending menu items
       var list_items = this.getElementsByClassName("pending");

       // Remove 'is_selected' class from all icons
       for (var i = 0; i < list_items.length; i++) {
         var menu_id = list_items.item(i).id.substring(list_items.item(
           i).id.lastIndexOf('-') + 1);
         var icon_list = document.getElementById('menu-icon-list-' +
           menu_id).getElementsByTagName("li");

         document.getElementById('edit-' + menu_id).addEventListener(
           'click', menu_selection);

         for (var j = 0; j < icon_list.length; j++) {
           icon_list.item(j).addEventListener('click', icon_select);
         }

         document.getElementById('unit-size-selector-' + menu_id).addEventListener(
           'change', unit_change);

					document.getElementById('library-link-' + menu_id).addEventListener('click', (function ($) {
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
    $('.library-link').click(function(event) {
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
        var attachment = frame.state().get('selection').first(),
          link = $el.data('updateLink');

          var filename = attachment.attributes.url.split("/");
  				filename = filename[filename.length - 1];
          var input_box = document.getElementById(el_name);
          var preview_field = document.getElementById(el_name + "_img");
          var filename_box = document.getElementById(el_name +  "_filename");
  				 var data = {
            'action': 'caweb_fav_icon_check',
            'icon_url': attachment.attributes.url,
          };

          if( !icon_check){
            input_box.value = attachment.attributes.url;
						if( null !== preview_field )
            	preview_field.src = attachment.attributes.url;
						if( null !== filename_box )
              filename_box.value = filename;
          }else{
            jQuery.post(ajaxurl, data, function(response) {
              if(1 == response){
                input_box.value = attachment.attributes.url;

                preview_field.src = attachment.attributes.url;

                filename_box.value = filename;

              }else{
                alert("Invalid Icon Mime Type: " + filename);
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


}(jQuery)));
			}

     }
   });

   // Enable/Disable Menu Item Fields when li menu-item is active
   function menu_selection() {
     var menu_id = this.id.substring(this.id.lastIndexOf('-') + 1);

     var menu_li = document.getElementById('menu-item-' + menu_id);
     var classes = menu_li.className;
     var settings = document.getElementById('menu-item-settings-' + menu_id);

     var unit_selector = settings.getElementsByClassName(
       "unit-size-selector")[0];
     var unit_size = unit_selector.options[unit_selector.selectedIndex].value;

     var media_image = settings.getElementsByClassName("media_image")[0];
     var desc = settings.getElementsByClassName("field-description")[0];
     var menu_images = settings.getElementsByClassName("mega_menu_images")[
       0];
     var icon_selector = settings.getElementsByClassName("icon_selector")[0];

     // if the menu item is a top level menu item
     if (-1 != classes.indexOf("menu-item-depth-0")) {
       // show Mega Menu Options
       menu_images.classList.add("show");

       icon_selector.classList.add("show");
       // hide Nav Media Images, Unit Size Selector, Description
       media_image.classList.remove("show");

       desc.classList.add("hidden-field");


       // if the menu item is not top level menu item
     } else {
       // hide Mega Menu Options
       menu_images.classList.remove("show");

       // show Unit Size Selector
       unit_selector.parentNode.classList.add("show");

       // if the unit_size is not unit1 enable Description
       if ("unit1" != unit_size) {
         // show Description
         desc.classList.remove('hidden-field');
       } else {
         desc.classList.add('hidden-field');
       }

       // if the unit_size is unit3 enable Nav Media Images
       if ("unit3" == unit_size) {
         // show Description
         media_image.classList.add('show');
       } else {
         media_image.classList.remove('show');
       }


     }

   }


   // Icon Selection
   function icon_select() {
     var menu_id = this.parentNode.id.substring(this.parentNode.id.lastIndexOf(
       '-') + 1);

     // Display selected icon in Icon Text box
     document.getElementById(menu_id + "_icon").value = this.attributes[
       "name"].value;

     // Grab array of all Icons
     var list_items = this.parentNode.getElementsByClassName("icon-option");

     // Remove 'is_selected' class from all icons
     for (var i = 0; i < list_items.length; i++) {
       list_items.item(i).classList.remove("is_selected");
     }

     // Add 'is_selected' class to selected icon
     this.classList.toggle("is_selected");
   }

   // Unit Size Selection
   function unit_change() {
     var menu_id = this.id.substring(this.id.lastIndexOf('-') + 1);

     var unit_size = this.value;
     var settings = document.getElementById('menu-item-settings-' + menu_id);

     var media_image = settings.getElementsByClassName("media_image")[0];
     var desc = settings.getElementsByClassName("field-description")[0];
     var icon_selector = settings.getElementsByClassName("icon_selector")[0];

     // if the unit_size is not unit1 enable Description
     if ("unit1" != unit_size) {
       // show Description
       desc.classList.remove('hidden-field');
     } else {
       desc.classList.add('hidden-field');
     }

     // if the unit_size is unit3 enable Nav Media Images
     if ("unit3" == unit_size) {
       // show Description
       media_image.classList.add('show');

       // Hide Icon Selector
       icon_selector.classList.remove('show');

     } else {
       media_image.classList.remove('show');

       icon_selector.classList.add('show');
     }
   }
   /* End of Navigation  Page */


 });
