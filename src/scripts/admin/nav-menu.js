/* nav-menus.php Javascript  */
window.addEventListener('load', () => {
  let menuToEdit = document.getElementById('menu-to-edit');

  // Toggles available options based on menu item selection
  const nav_menu_edit_options = (itemEdit) => {
    let menu_id = itemEdit && itemEdit.hasAttribute('id') ? itemEdit.getAttribute('id').substr(itemEdit.getAttribute('id').lastIndexOf('-') + 1) : undefined;
    let menu_li = document.getElementById(`menu-item-${menu_id}`);

    // if( menu_li.classList.contains('menu-item-edit-active') || ! menu_id ){
    if( ! menu_id ){
      return;
    }

    // top level items are depth 0
    let is_top_level = menu_li.classList.contains('menu-item-depth-0');

    let always_allowed_options = [
      // the Title Attribute
      menu_li.querySelector('.field-title-attribute'),
      // the Link Target
      menu_li.querySelector('.field-link-target'),
      // description groups are always allowed
      // by default this is the CSS Classes and Link Relationship groups
      // and the Field Move Groups
      ...menu_li.querySelectorAll('.description-group .description'),
    ].filter(Boolean);

    let description = menu_li.querySelector('.field-description');
    
    // // let unit_size_selector = $(menu_li).find('.field-unit-size-selector');
    // // let unit_size = $(unit_size_selector).val();
    // // let unit_size = $(unit_size_selector).find('select').val();
    let megamenu_options = menu_li.querySelector('.megamenu-description-group');

    // these fields are always visible
    always_allowed_options.forEach((ele) => {
      ele.classList.remove('hidden-field');
    });
    
    // Description is only allowed for non top level menu items and if unit size is not 'unit1'
    description.classList[( ! is_top_level ? 'remove' : 'add')]('hidden-field');

    // // Unit Selector is only allowed for non top level menu items
    // // $(unit_size_selector)[is_top_level ? 'addClass' : 'removeClass']('hidden-field');

    // Megamenu options are only allowed for non top level menu items
    // if( 'unit3' === unit_size ){
    if( megamenu_options ){
      megamenu_options.classList[ megamenu_options && ! is_top_level ? 'remove' : 'add' ]('hidden-field');
    }
      
  }

  const media_type_selection = (selector) => {
      let menu_id = selector.getAttribute('id').substr(selector.getAttribute('id').lastIndexOf('-') + 1);
      let media_type = selector.value;
      
      let icon_options = document.querySelector( `#menu-item-${menu_id} .field-icon-selector`);
      let image_options = document.querySelector( `#menu-item-${menu_id} .field-image-selector`);
      
      if( 'icon' === media_type ){
        // Show Icon Options
        icon_options.classList.remove('hidden-field');  

        // Hide Image Options
        image_options.classList.add('hidden-field');
      } else if ( 'image' === media_type ){
        // Show Image Options
        image_options.classList.remove('hidden-field');

        // Hide Icon Options
        icon_options.classList.add('hidden-field');
      } else {
        // Hide all media options
        icon_options.classList.add('hidden-field');
        image_options.classList.add('hidden-field');
      }
  }

  // Toggles available media options based on menu item selection 

  // if the menu tree exists, attach functionality to show/hide menu item options based on menu item selection
  if( menuToEdit ){

    // if menu item option is clicked, toggle available options based on menu item selection
    menuToEdit.querySelectorAll('.item-edit').forEach((itemEdit) => {
      itemEdit.addEventListener('click', () => nav_menu_edit_options(itemEdit));
    });
   

    menuToEdit.querySelectorAll('.field-media-type-selector').forEach((selector) => {
      selector.addEventListener('change', () => media_type_selection(selector));
    });

    new MutationObserver((menuEdit) => {
      // array of entries
      for (let entry of menuEdit) {

        // if a new menu item has been added
        if( entry.addedNodes.length  ){
          // get the .item-edit element of the new menu item
          let itemEdit = entry.addedNodes[0].querySelector('.item-edit');
          
          if( entry.addedNodes[0].classList.contains('pending') && ! itemEdit.hasClickListener ){
            let mediaTypeSelector = entry.addedNodes[0].querySelectorAll('.field-media-type-selector');

            // attach click event to the .item-edit element of the new menu item, so when it's clicked, it will toggle available options based on menu item selection
            itemEdit.addEventListener('click', () => nav_menu_edit_options(itemEdit));
            itemEdit.hasClickListener = true;

            if( mediaTypeSelector ){
              mediaTypeSelector.forEach((selector) => {
                selector.addEventListener('change', () => media_type_selection(selector));
              });
            }

          // menu item is being moved while active
          } else if( itemEdit && entry.addedNodes[0].classList.contains('menu-item-edit-active')  ){
            // reset the state of the menu item options, 
            nav_menu_edit_options(itemEdit);
          }

        }
      }

    }).observe(menuToEdit, { childList: true });
  }

  

});


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
  // $(document).on('change', '.field-unit-size-selector', function(){
  //   let menu_id = $(this).attr('id').substr($(this).attr('id').lastIndexOf('-') + 1);
  //   let unit_size = $(this).val();
  //   let desc = $( `#menu-item-${menu_id}` ).find('.field-description');
  //   let megamenu_options = $( `#menu-item-${menu_id}` ).find('.megamenu-description-group');

  //   switch( unit_size ){
  //     case 'unit1':
  //       // Hide Description
  //       $(desc).addClass('hidden-field');

  //       // Hide Megamenu Options
  //       $(megamenu_options).addClass('hidden-field');
  //       break;
  //     case 'unit2':
  //       // Show Description
  //       $(desc).removeClass('hidden-field');

  //       // Hide Megamenu Options
  //       $(megamenu_options).addClass('hidden-field');
  //       break;
  //     case 'unit3':
  //       // Show Description
  //       $(desc).removeClass('hidden-field');

  //       // Show Megamenu Options
  //       $(megamenu_options).removeClass('hidden-field');
  //       break;
  //   }
  // });

  