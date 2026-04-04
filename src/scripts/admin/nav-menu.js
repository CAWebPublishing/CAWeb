/* nav-menus.php Javascript  */
jQuery(document).ready(function($) {
  "use strict";


  // // Alt Text Check 
  // $(document).on('click', 'input[name="save_menu"]', function(e){
	//   var nav_menu_alt_texts = $('.media-image:not(.hidden) input[name$="_caweb_nav_media_image_alt_text"]');


  //   nav_menu_alt_texts.each(function(i,ele) {
	// 	  if( "" === $(ele).val().trim() ){
  //       var menu_id = $(ele).attr('id').substring(0, $(ele).attr('id').indexOf("_") );
	// 		  var title = $("#edit-menu-item-title-" + menu_id).val();
	// 		  alert(title + " Navigation Media Image Alt Text can not be blank.")
	// 		  e.preventDefault();
	// 	  }
	//   });

  // });

  // Unit Size Selector
  $(document).on('change', '.field-unit-size-selector', function(){
    let menu_id = $(this).attr('id').substr($(this).attr('id').lastIndexOf('-') + 1);
    let unit_size = $(this).val();
    let desc = $( `#menu-item-${menu_id}` ).find('.field-description');
    let megamenu_options = $( `#menu-item-${menu_id}` ).find('.megamenu-description-group');

    switch( unit_size ){
      case 'unit1':
        // Hide Description
        $(desc).addClass('hidden-field');

        // Hide Megamenu Options
        $(megamenu_options).addClass('hidden-field');
        break;
      case 'unit2':
        // Show Description
        $(desc).removeClass('hidden-field');

        // Hide Megamenu Options
        $(megamenu_options).addClass('hidden-field');
        break;
      case 'unit3':
        // Show Description
        $(desc).removeClass('hidden-field');

        // Show Megamenu Options
        $(megamenu_options).removeClass('hidden-field');
        break;
    }
  });

  // Media Type Selector
  $(document).on('change', '.field-media-type-selector', function(){
    let menu_id = $(this).attr('id').substr($(this).attr('id').lastIndexOf('-') + 1);
    let media_type = $(this).val();
    let icon_options = $( `#menu-item-${menu_id}` ).find('.field-icon-selector');
    let image_options = $( `#menu-item-${menu_id}` ).find('.field-image-selector');

    if( 'icon' === media_type ){
      // Show Icon Options
      $(icon_options).removeClass('hidden-field');  

      // Hide Image Options
      $(image_options).addClass('hidden-field');
    } else if ( 'image' === media_type ){
      // Show Image Options
      $(image_options).removeClass('hidden-field');

      // Hide Icon Options
      $(icon_options).addClass('hidden-field');
    } 

  });

  // if the menu tree has been modified
  new MutationObserver((menuEdit) => {
    // array of entries
    for (let entry of menuEdit) {
      // if a new menu item has been added
      if( entry.addedNodes.length  ){
        // get the .item-edit element of the new menu item
        let itemEdit = entry.addedNodes[0].querySelector('.item-edit');
        
        if( entry.addedNodes[0].classList.contains('pending') ){
          // attach click event to the .item-edit element of the new menu item, so when it's clicked, it will toggle available options based on menu item selection
          $(itemEdit).on('click', nav_menu_edit_options);
        } else {
          // simulate clicking the .item-edit element of the new menu item, so it will toggle available options based on menu item selection case the menu items are dragged while in an open state.
          nav_menu_edit_options.call(itemEdit);
        }

      }
      
    }
  }).observe($('#menu-to-edit')[0], { childList: true });


  // if menu item option is clicked, toggle available options based on menu item selection
  $('.item-edit').on( 'click', nav_menu_edit_options);
  
  // Toggles available options based on menu item selection
  function nav_menu_edit_options(){
    let menu_id = null !== this && this.hasAttribute('id') ? $(this).attr('id').substr($(this).attr('id').lastIndexOf('-') + 1) : undefined;
    let menu_li = $( `#menu-item-${menu_id}` );

    if( $(menu_li).hasClass('menu-item-edit-active') || ! menu_id ){
      return;
    }

    // top level items are depth 0
    let is_top_level = $(menu_li).hasClass('menu-item-depth-0');

    let always_allowed_options = [
      // the Title Attribute
      ...$(menu_li).find('.field-title-attribute'),
      // the Link Target
      ...$(menu_li).find('.field-link-target'),
      // description groups are always allowed
      // by default this is the CSS Classes and Link Relationship groups
      // and the Field Move Groups
      ...$(menu_li).find('.description-group .description'),
    ].filter(Boolean);

    let description = $(menu_li).find('.field-description');
    
    let unit_size_selector = $(menu_li).find('.field-unit-size-selector');
    let unit_size = $(unit_size_selector).val();
    // let unit_size = $(unit_size_selector).find('select').val();
    let megamenu_options = $( menu_li ).find('.megamenu-description-group');

    // these fields are always visible
    $(always_allowed_options).each(function(g, ele){
      $(ele).removeClass('hidden-field');
    });

    // Description is only allowed for non top level menu items and if unit size is not 'unit1'
    $(description)[( ! is_top_level && 'unit1' !== unit_size ? 'removeClass' : 'addClass')]('hidden-field');

    // Unit Selector is only allowed for non top level menu items
    $(unit_size_selector)[is_top_level ? 'addClass' : 'removeClass']('hidden-field');

    // Megamenu options are only allowed if unit size is 'unit3'
    if( 'unit3' === unit_size ){
      let media_type = $(megamenu_options).find(`[name="${menu_id}_media_type"]`).val();
      console.log(media_type);
      $(megamenu_options).removeClass('hidden-field');
    }else{
      $(megamenu_options).addClass('hidden-field');
    }

  }

});
