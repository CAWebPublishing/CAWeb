 $ = jQuery.noConflict();

 /* Functions used on Admin Pages */
 /* CAWeb Option Page */
 function toggleOptions(ele) {
   var version = ele.options[ele.selectedIndex].value;
   var extra_options = document.getElementsByClassName("extra");
   var base_options = document.getElementsByClassName("base");
   var base = '';

   for (var i = 0; i < extra_options.length; i++) {


     if (version >= 5.0) {
       extra_options[i].classList.add("show");
       for (var j = 0; j < base_options.length; j++) {
         base_options[j].classList.remove("show");
       }
     } else {
       extra_options[i].classList.remove("show");
       for (var j = 0; j < base_options.length; j++) {
         base_options[j].classList.add("show");
       }
     }

   }



 }

 function toggleOptionView(opt) {
   var opts = ['general', 'social-share', 'custom-css'];

   var selected_option = opt.getAttribute("name");

   var selected_div_option = document.getElementById(selected_option);

   for (i = 0; i < opts.length; i++) {

     if (opts[i] != selected_option) {

       document.getElementById(opts[i]).classList.remove("show");

     }

   }

   selected_div_option.classList.add("show");

   //Make all tabs inactive by getting elements with class "nav-tab" and removing class "nav-tab-active"
   var tabs = document.getElementsByClassName("nav-tab");

   for (i = 0; i < tabs.length; i++) {
     tabs[i].classList.remove("nav-tab-active");
   }

   //Now make clicked tab active by getting element with its name (extracted from opt) and adding class "nav-tab-active"

   opt.className += " nav-tab-active";
 }
 /* End of CAWeb Option Page */

 $(document).ready(function() {
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
