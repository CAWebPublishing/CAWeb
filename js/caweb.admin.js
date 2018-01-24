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
       var base = '';
    		var front_search_option = $('#general table:first tr:nth-child(6)');
      
       for (var i = 0; i < extra_options.length; i++) {   
         if (version >= 5.0) {
           extra_options[i].classList.remove("hidden");
           for (var j = 0; j < base_options.length; j++) {
             base_options[j].classList.add("hidden");
           }
           
           if( !$('#ca_google_search_id').val().trim() ){
             front_search_option.addClass('hidden');
           }else{
             front_search_option.removeClass('hidden');             
           }
         } else {
           extra_options[i].classList.add("hidden");
           for (var j = 0; j < base_options.length; j++) {
             base_options[j].classList.remove("hidden");
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
  
  if( !this.value.trim() ){
    front_search_option.addClass('hidden');
  }else if(5 <= site_version){
    front_search_option.removeClass('hidden');
  }
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
