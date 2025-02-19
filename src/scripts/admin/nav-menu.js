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
    var desc = $('#menu-item-settings-' + menu_id + ' .field-description');
    var unit_size = $(this).val();

    if( 'unit1' === unit_size){
        // Hide Description
        $(desc).addClass('hidden-field');
    }else{
        // Display Description
        $(desc).removeClass('hidden-field');
    }
  });

  /* New Row */
  $(document).on('click', 'div .new-row', function(){
    var menu_id = $(this).attr('id').substr(0, $(this).attr('id').indexOf('_') );
    var border = $('#menu-item-settings-' + menu_id + ' .flexmega-border');

    if( $(this).is(':checked') ){
      $(border).removeClass('hidden');
    }else{
      $(border).addClass('hidden');
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

  $('.item-edit').on( 'click', menu_selection);
  
  function menu_selection(){
    var menu_id = $(this).attr('id').substr($(this).attr('id').lastIndexOf('-') + 1);
    var menu_li = $('#menu-item-' + menu_id);
    var desc = $('#menu-item-settings-' + menu_id + ' .field-description');
    var unit_selector = $('#menu-item-settings-' + menu_id + ' .unit-size-selector');
    var unit_size = $(unit_selector).val();

    /*
    if the menu item is a top level menu item
    depth = 0
    */
    if( $(menu_li).hasClass('menu-item-depth-0') ){
      // Hide Unit Size Selector, Description
      $(unit_selector).parent().addClass('hidden');
      $(desc).addClass('hidden-field');
      
    }else{
      // Show Unit Selector
      $(unit_selector).parent().removeClass('hidden');

      if( 'unit1' !== unit_size ){
        // Hide Description
        $(desc).addClass('hidden-field');
      }else{
        // Show Description
        $(desc).removeClass('hidden-field');
      }
    }
  }
});
