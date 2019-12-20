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