/* nav-menus.php Javascript  */
jQuery(document).ready(function($) {
  "use strict";
  /* Alt Text Check */
  $(document).on('click', 'input[name="save_menu"]', function(e){
	  var nav_menu_alt_texts = $('.media-image:not(.hidden) input[name$="_caweb_nav_media_image_alt_text"]');


    nav_menu_alt_texts.each(function(i,ele) {
		  if( "" === $(ele).val().trim() ){
        var menu_id = $(ele).attr('id').substring(0, $(ele).attr('id').indexOf("_") );
			  var title = $("#edit-menu-item-title-" + menu_id).val();
			  alert(title + " Navigation Media Image Alt Text can not be blank.")
			  e.preventDefault();
		  }
	  });

  });

  /* Unit Size Selector */
  $(document).on('change', 'div .unit-size-selector', function(){
    var menu_id = $(this).attr('id').substr($(this).attr('id').lastIndexOf('-') + 1);
    var icon_selector = $('#menu-item-settings-' + menu_id + ' .icon-selector');
    var media_image = $('#menu-item-settings-' + menu_id + ' .media-image');
    var desc = $('#menu-item-settings-' + menu_id + ' .field-description');
    var unit_size = $(this).val();

    if( 'unit1' === unit_size){
        // Hide Description
        $(desc).addClass('hidden-field');
    }else{
        // Display Description
        $(desc).removeClass('hidden-field');
    }

    if('unit3' === unit_size ){
        // Display Navigation Media Image
        $(media_image).removeClass('hidden');

        // Hide Icon Selector
        $(icon_selector).addClass('hidden');

    }else{
        // Hide Navigation Media Image
        $(media_image).addClass('hidden');
        
        // Display Icon Selector
        $(icon_selector).removeClass('hidden');
    }
    
  });

  /* Item Menu Editing */
  $(document).on('DOMSubtreeModified', '#menu-to-edit', function() {
    
    // Grab array of all pending menu items
     var list_items = $('.pending a.item-edit');
     
     list_items.each(function(i, e){
      // Add menu selection to menu edit
      $(e).on('click', menu_selection);
     });
  });

  $('.item-edit').click(menu_selection);
  
  function menu_selection(){
    var menu_id = $(this).attr('id').substr($(this).attr('id').lastIndexOf('-') + 1);
    var menu_li = $('#menu-item-' + menu_id);
    var icon_selector = $('#menu-item-settings-' + menu_id + ' .icon-selector');
    var media_image = $('#menu-item-settings-' + menu_id + ' .media-image');
    var desc = $('#menu-item-settings-' + menu_id + ' .field-description');
    var mega_menu_images = $('#menu-item-settings-' + menu_id + ' .mega-menu-images');
    var unit_selector = $('#menu-item-settings-' + menu_id + ' .unit-size-selector');
    var unit_size = $(unit_selector).val();

    /*
    if the menu item is a top level menu item
    depth = 0
    */
    if( $(menu_li).hasClass('menu-item-depth-0') ){
      // Show Mega Menu Options
      $(mega_menu_images).removeClass('hidden');

      // Show Icon Selector
      $(icon_selector).removeClass('hidden');

      // Hide Nav Media Images, Unit Size Selector, Description
      $(media_image).addClass('hidden');
      $(unit_selector).parent().addClass('hidden');
      $(desc).addClass('hidden-field');
    }else{
      // Hide Mega Menu Options
      $(mega_menu_images).addClass('hidden');
     
      // Show Unit Selector
      $(unit_selector).parent().removeClass('hidden');

      if( 'unit1' !== unit_size ){
        // Hide Description
        $(desc).addClass('hidden-field');
      }else{
        // Show Description
        $(desc).removeClass('hidden-field');
      }

      
      if( 'unit3' === unit_size ){
        // Hide Icon Selector
        $(icon_selector).addClass('hidden');

        // Show Nav Media Images
        $(media_image).removeClass('hidden');
      }else{
        // Show Icon Selector
        $(icon_selector).removeClass('hidden');

        // Hide Nav Media Images
        $(media_image).addClass('hidden');
      }

      
    }
  }
});
