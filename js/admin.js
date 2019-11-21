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
        var attachment = frame.state().get('selection').first(),
          link = $el.data('updateLink');

        var input_box = document.getElementById(el_name);
        var preview_field = document.getElementById(el_name + "_img");
        var filename_box = document.getElementById(el_name +  "_filename");

				 var data = {
          'action': 'caweb_fav_icon_check',
          'icon_url': attachment.attributes.url,
        };
				if( /\d+_media_image/.test(el_name) ){
          var nav_img_alt_box =  document.getElementById(el_name.substring(0, el_name.indexOf("_")) +  "_caweb_nav_media_image_alt_text");
          input_box.value = attachment.attributes.url;
          nav_img_alt_box.value = attachment.attributes.alt;

        }else if( "true" !== icon_check ){
            input_box.value = attachment.attributes.url;
						if( null !== preview_field )
            	preview_field.src = attachment.attributes.url;
						if( null !== filename_box )
              filename_box.value = attachment.attributes.filename;
              
            if(  /header_ca_branding/.test(el_name)  ){
              var org_logo_alt_textbox = document.getElementById("header_ca_branding_alt_text");
              org_logo_alt_textbox.value = attachment.attributes.alt;
            }
        }else{
					jQuery.post(ajaxurl, data, function(response) {
						if(1 == response){

							preview_field.src = attachment.attributes.url;
  						input_box.value = attachment.attributes.url;
							filename_box.value = attachment.attributes.filename;

						}else{
							alert("Invalid Icon Mime Type: " + attachment.attributes.filename);
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

(function( $ ) {
     "use strict";
	$(function(){
		
		$(document).on('click', '#caweb-icon-menu.autoUpdate li,.caweb-icon-menu.autoUpdate li', function(e){cawebIconSelected(this, true);});
		$(document).on('click', '#caweb-icon-menu.noUpdate li,.caweb-icon-menu.noUpdate li', function(e){cawebIconSelected(this, false);});
		
	});
	
		
})(jQuery);

function cawebIconSelected(iconLi, autoUpdate){
	var icon_list = iconLi.parentNode.getElementsByTagName('LI');
	
	for(o = 0; o < icon_list.length - 1; o++){
		icon_list[o].classList.remove('selected');
	}
	iconLi.classList.add('selected');
	
	if( autoUpdate ){
		iconLi.parentNode.lastElementChild.value = iconLi.title;
		$(iconLi.parentNode.lastElementChild).change();
	}
}
function resetIconSelect(iconList, autoUpdate){
	var icon_list = iconList.getElementsByTagName('LI');
	
	for(o = 0; o < icon_list.length - 1; o++){
		icon_list[o].classList.remove('selected');
	}
	if(autoUpdate){
		iconList.lastElementChild.value = "";
		$(iconList.lastElementChild).change();
	}
}


 /* Functions used on Admin Pages */
 /* CAWeb Option Page */
 (function( $ ) {
	"use strict";
  var changeMade = false;

$(window).on('beforeunload', function(){
	  if( changeMade && "nav-menus.php" !== args.changeCheck)
			  return 'Are you sure you want to leave?';

  });

$('textarea, #ca_default_navigation_menu, select, input[type="text"], input[type="checkbox"], input[type="password"] ').change(function(e){changeMade = true; });
$('input[type="button"]').click(function(e){changeMade = true; });
$('#caweb-options-form').submit(function(){ changeMade = false; this.submit(); });

$('.caweb-nav-tab').click(function() {
  var tabs = document.getElementsByClassName('caweb-nav-tab');
  var selected_tab = this.getAttribute("name");

  for (var i = 0; i < tabs.length; i++) {
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

 $('#resetFavIcon').click(function() {
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

$('#ca_x_ua_compatibility').on('input',function(e){
  var isChecked = this.checked;
  var respSpan = $(this).next();

  if(isChecked){
	  respSpan.html('IE 11 browser compatibility enabled. Warning: creates accessibility errors when using IE browsers.')
  }else{
	  respSpan.html('');
  }	
});



$( "#uploadedCSS, #uploadedJS" ).sortable();
$( "#uploadedCSS, #uploadedJS" ).disableSelection();

$('.remove-css, .remove-js').click(function(e){
e.preventDefault();
  var r = confirm("Are you sure you want to " + this.title + "? This can not be undone.");

  if (r == true) {
	  changeMade = true;
	  this.parentNode.remove();
  }
});

$('#addCSS, #addJS').click(function(e){
  
  addExternal($(this).closest('table'), $(this).attr('name'));	
  changeMade = true;

});

function addExternal(ext_table, ext){
  var rowCount = ext_table.children().children().length;
  var row = document.createElement('TR');
  var col1 = document.createElement('TD');
  var rem = document.createElement('A');
  var col2 = document.createElement('TD');
  var fileUpload = document.createElement('Input');

row.classList = "pending-" + ext;
rem.classList = "dashicons dashicons-dismiss remove-" + ext;

  fileUpload.type = "file";
  fileUpload.name = rowCount + ext + "_upload";
  fileUpload.id = rowCount + ext + "_upload";
  fileUpload.accept = "." + ext;

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
  var extension = name.lastIndexOf(".") > 0 ?
					name.substring(name.lastIndexOf(".") + 1).toLowerCase() : "";

  if( "" === extension || ext !== extension){
	alert(name + " isn't a valid " + ext + " extension and was not uploaded.");
	this.parentNode.remove();
  }else{
	rem.title = "remove " + name;
  }

});

  col2.append(rem);
  col2.append(fileUpload);

  row.append(col1);
  row.append(col2);

  ext_table.append(row);
}

$( "#cawebAlerts" ).sortable();
$( "#cawebAlerts" ).disableSelection();

$('#addAlertBanner').click(function(e){
$('#caweb_alert_count').val( function(i, oldval) { return ++oldval; } );

var alertUL = $('#cawebAlerts');
var alertLI = document.createElement('LI');
  var alertLICount = $('#caweb_alert_count').val();
  var alert_container = document.createElement('DIV');

  var alertSetting = $('#caweb-alert-settings');
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
alertSetting.append(alert_settings_wrapper);
  wp.editor.initialize("alertmessage" + alertLICount, args.tinymce_settings);
changeMade = true;

});

$('.caweb-alert div a.alert-toggle').click(function(e){ displayAlertOptions(this); });
$('.removeAlert').click(function(e){ removeAlert(this); });
$('.alert-read-more').click(function(e){ displayReadMoreOptions(this); });
$('.resetAlertIcon').click(function(e){	resetIconSelect(this.parentNode.nextElementSibling, false); });
$('.caweb-alert div a.activateAlert').click(function(e){ activateAlert(this);});

$('[class*="caweb-alert-"] .button-primary.ok').click(function(e){ saveAlertSettings(this); });

$('[class*="caweb-alert-"] .button-primary.cancel').click(function(e){ cancelAlertSettings(this); });

function activateAlert(activateButton){
activateButton.classList.toggle('inactive');

if(-1 < activateButton.className.indexOf('inactive')){
  activateButton.firstElementChild.value = 'inactive';
}else{
  activateButton.firstElementChild.value = 'active';
}
}
function addAlert(container, alertCount){
  var alert_header_wrapper = document.createElement('DIV');
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

  alert_header.innerHTML = "Label";

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
alert_header_input.placeholder = "Label";

  alert_msg.innerHTML = "Message";

  //alert_msg_textarea.form = "caweb-options-form";
  alert_msg_textarea.name = "alert-message-" + alertCount;
alert_msg_textarea.id = "alertmessage" + alertCount;

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
var alert_read_more_target_text = document.createElement('P');
var alert_read_more_target_text_input = document.createElement('INPUT');
var alert_read_more_target_text_tip = document.createElement('I');
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

alert_read_more_target_text.innerHTML = "Read More Button Text";

alert_read_more_target_text_input.type = "text";
alert_read_more_target_text_input.name = "alert-read-more-text-" + alertCount;
alert_read_more_target_text_input.maxLength = 16;

alert_read_more_target_url.innerHTML = "Read More Button URL";

alert_read_more_target_url_input.type = "text";
alert_read_more_target_url_input.name = "alert-read-more-url-" + alertCount;

alert_read_more_target_text_tip.innerHTML = "(Max Characters: 16)";

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
hidden_container.appendChild(alert_read_more_target_text);
hidden_container.appendChild(alert_read_more_target_text_input);
hidden_container.appendChild(alert_read_more_target_text_tip);
hidden_container.appendChild(alert_read_more_target_url);
hidden_container.appendChild(alert_read_more_target_url_input);
hidden_container.appendChild(alert_open_link);
hidden_container.appendChild(label4);
hidden_container.appendChild(label5);

alert_icon.innerHTML = "Add Icon ";
  alert_icon_reset.classList = "dashicons dashicons-image-rotate resetAlertIcon";
  alert_icon_reset.addEventListener('click', function (e) { resetIconSelect(this.parentNode.nextElementSibling, false); });

  alert_icon.appendChild(alert_icon_reset);

alert_icon_list.id = "caweb-icon-menu";
  alert_icon_list.className = "noUpdate";
  
for (var i = 0; i < args.caweb_icons.length; i++) {
  var icon = document.createElement('LI');
  icon.classList = "icon-option ca-gov-icon-" + args.caweb_icons[i];
  icon.title = args.caweb_icons[i];

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
//e.parentNode.parentNode.nextElementSibling.classList.toggle('hidden');

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


var alertSettings = $('#caweb-alert-settings');
  
function saveAlertSettings(saveButton){
var alertID = saveButton.parentNode.className.substring(saveButton.parentNode.className.lastIndexOf('-') + 1);
var inputs = saveButton.parentNode.getElementsByTagName('INPUT');
var tmp = {};

for(var i = 0; i < inputs.length; i++){
  var input = inputs[i];

  if( (-1 < input.name.indexOf('alert-display-') && input.checked) ||
	  (-1 < input.name.indexOf('alert-read-more-target-') && input.checked) ){
	tmp[input.name] = input.value;
  }else if( -1 == input.name.indexOf('alert-display-') && -1 == input.name.indexOf('alert-read-more-target-') ){
	if( -1 < input.name.indexOf('alert-icon-') ){
	  var selectedIcon = input.parentNode.getElementsByClassName('selected');
	  if( 0 < selectedIcon.length){
		cawebIconSelected($(selectedIcon[0])[0], true);
	  }else{
		input.value = '';
	  }
	}
	tmp[input.name] = -1 < input.name.indexOf('alert-read-more-') && -1 == input.name.indexOf('alert-read-more-url-') ? input.checked : input.value;
  }
}

alertSettings[alertID] = tmp;
tb_remove();
}
function cancelAlertSettings(cancelButton){
var alertID = cancelButton.parentNode.className.substring(cancelButton.parentNode.className.lastIndexOf('-') + 1);
  var inputs = cancelButton.parentNode.getElementsByTagName('INPUT');
  
  for(var i = 0; i < inputs.length; i++){
	  var input = inputs[i];

	  if((-1 < input.name.indexOf('alert-display-') && "home" == input.value) || (-1 < input.name.indexOf('alert-read-more-target-') && "_blank" == input.value)){
		  input.checked = true;
	  }else if(-1 < input.name.indexOf('alert-read-more-') && "checkbox" == input.type){
		  input.checked = false;
		  input.parentNode.parentNode.nextElementSibling.classList.add('hidden');
	  }else if(-1 < input.name.indexOf('alert-banner-color-')){
		  var color_scheme_picker = $('#ca_site_color_scheme')[0];
		  var color = color_scheme_picker.options[color_scheme_picker.selectedIndex].value;
		  input.value = args.caweb_colors[color]['highlight'];
	  }else{
		  if(-1 < input.name.indexOf('alert-icon-')){
			  var iconList = input.parentNode;
			  resetIconSelect(iconList, false);
			  if( "" !== input.value){
				  $(iconList).find('[title="' + input.value+ '"]')[0].classList.add('selected');
				   //$(iconList).find('[name="alert-icon-' + alertID + '"]')[0].value = input.value;
			  }
		  }
	  }
	  
  }

  tb_remove();
}

$('.resetGoogleIcon').click(function(e){resetIconSelect(this.parentNode.nextElementSibling.firstElementChild, true);});
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

$('[name="caweb_options_submit"]').click( function(e){
e.preventDefault();
var settingInputs = $('#caweb-alert-settings').find('INPUT');
var hiddenInputs = document.createElement('DIV');
  var org_logo_alt_text = document.getElementById('header_ca_branding_alt_text');
  
  if( !org_logo_alt_text.value ){
	  alert('Organization Logo-Brand Alt Text can not be blank.');
  }else{
	  
	  this.nextElementSibling.value = "on";

	  hiddenInputs.className = "hidden";
  
	  for(var i = 0; i < settingInputs.length; i++){
		  var input = settingInputs[i];
  
		  if( ((-1 < input.name.indexOf('alert-display-') || -1 < input.name.indexOf('alert-read-more-target-') ) && input.checked ) ||
					  ( -1 ==  input.name.indexOf('alert-display-') && -1 ==  input.name.indexOf('alert-read-more-target-') )){
			  hiddenInputs.appendChild(settingInputs[i]);
		  }
	  }
	  
	  $('#caweb-options-form').append(hiddenInputs);
	  $('#caweb-options-form').submit();
  }

});

/* End of CAWeb Option Page */

/* Navigation Page */

$(function(){
  $(document).on('click', 'input[name="save_menu"]', function(e){
	  var nav_menu_alt_texts = $('div.media_image.show input[name$="_caweb_nav_media_image_alt_text"]');

	  nav_menu_alt_texts.each(function(element) {
		  if( "" == nav_menu_alt_texts[element].value ){
			  var title = document.getElementById("edit-menu-item-title-" + nav_menu_alt_texts[element].id.substring(0, nav_menu_alt_texts[element].id.indexOf("_")));
			  alert(title.value + " Navigation Media Image Alt Text can not be blank.")
			  e.preventDefault();
		  }
	  });

  });

   $(document).on('change', 'div .unit-size-selector', function(){
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
   });

   $(document).on('click', '.icon_selector .caweb-icon-menu li', function(e){
	   this.parentNode.parentNode.firstElementChild.lastElementChild.value = this.title;
   });

   $(document).on('DOMSubtreeModified', '#menu-to-edit', function(event) {
	   // Grab array of all pending menu items
		  var list_items = this.getElementsByClassName("pending");
		  
		  // Remove 'is_selected' class from all icons
		  for (var i = 0; i < list_items.length; i++) {
			  var menu_id = list_items.item(i).id.substring(list_items.item(
				  i).id.lastIndexOf('-') + 1);
				  
			  document.getElementById('edit-' + menu_id).addEventListener('click', menu_selection);
		  }
   });
		
   $('.item-edit').click(menu_selection);
});

/* End of Navigation Page */

function menu_selection(){
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
	   if( undefined !== menu_images ) menu_images.classList.add("show");

	   if( undefined !== icon_selector ) icon_selector.classList.add("show");
	   // hide Nav Media Images, Unit Size Selector, Description
	   if( undefined !== media_image ) media_image.classList.remove("show");

	   if( undefined !== desc ) desc.classList.add("hidden-field");


	   // if the menu item is not top level menu item
   } else {
	   // hide Mega Menu Options
	   if( undefined !== menu_images ) menu_images.classList.remove("show");

	   // show Unit Size Selector
	   if( undefined !== unit_selector ) unit_selector.parentNode.classList.add("show");

	   // if the unit_size is not unit1 enable Description
	   if ("unit1" != unit_size) {
		   // show Description
		   if( undefined !== desc ) desc.classList.remove('hidden-field');
	   } else {
		  if( undefined !== desc ) desc.classList.add('hidden-field');
	   }

	   // if the unit_size is unit3 enable Nav Media Images
	   if ("unit3" == unit_size) {
		   // show Description
		   if( undefined !== media_image ) media_image.classList.add('show');
	   } else {
		   if( undefined !== media_image ) media_image.classList.remove('show');
	   }


   }
}
})(jQuery);