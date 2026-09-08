/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/admin/icon.js"
() {

/* CAWeb Icon Menu Javascript */
window.addEventListener('load', () => {
  // Get the icon menu modal element
  let iconMenuModal = document.getElementById('caweb-icon-menu-modal');
  let iconMenus = document.querySelectorAll('.caweb-icon-menu');

  // get the input value from the icon menu
  const getSelectedIcon = iconMenu => {
    // get the input value from the icon menu.
    let selectedIcon = iconMenu.querySelector('input').value;

    // return the selected icon value
    return selectedIcon;
  };

  // reset the icon menu selection
  const resetIcon = iconMenu => {
    let iconList = iconMenu.querySelectorAll('li');
    let iconInput = iconMenu.querySelector('input');
    iconList.forEach(li => {
      li.classList.remove('active');
    });
    iconInput.value = '';
  };
  const selectIcon = iconLi => {
    resetIcon(iconLi.parentElement);
    iconLi.classList.add('active');
    let iconInput = iconLi.parentElement.querySelector('input');
    if (iconInput) {
      iconInput.value = iconLi.getAttribute('title');
    }
  };

  // attach functionality to the icon menus
  if (iconMenus) {
    iconMenus.forEach(menu => {
      menu.getSelectedIcon = () => getSelectedIcon(menu);
      menu.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', e => {
          selectIcon(li);
        });
      });
      menu.parentElement.querySelectorAll('.reset-icon').forEach(resetButton => {
        resetButton.addEventListener('click', e => {
          resetIcon(menu);
        });
      });
    });
  }

  // if the icon menu modal exists, add event listener to the save button	
  if (iconMenuModal) {
    // modal save button 
    let saveButton = iconMenuModal.querySelector('[data-bs-save="modal"]');

    // Get the icon menu element used inside the modal for selecting icons
    iconMenus = iconMenuModal.querySelector('.caweb-icon-menu');

    // modal show event listener 
    iconMenuModal.addEventListener('show.bs.modal', e => {
      // the modal may be triggered by multiple buttons, 
      // so we need to get the data-icon attribute from the relatedTarget and assign it to the modal's dataset for use when saving
      iconMenuModal.dataset.icon = e.relatedTarget.dataset.icon;
    });

    // modal save button click event listener
    saveButton.addEventListener('click', e => {
      // Get the data-icon attribute from the modal's dataset to know which input to update with the selected icon value
      let inputId = iconMenuModal.dataset.icon;
      let inputElement = document.querySelector(`[name="${inputId}"]`);

      // Update the input value with the selected icon value
      if (inputElement) {
        // Get the selected icon from the icon menu 
        inputElement.value = getSelectedIcon(iconMenus);
      }

      // close the modal after saving	
      let modal = bootstrap.Modal.getInstance(iconMenuModal);
      modal.hide();

      // give the focus back to the button that triggered the modal after saving
      document.querySelector(`[data-icon="${inputId}"]`).focus({
        focusVisible: true
      });
    });
  }
});

/***/ },

/***/ "./src/scripts/wp/theme-customizer/controls/alert-banners.js"
() {

jQuery(document).ready(function ($) {
  $('#_customize-input-caweb_add_alert_banner').click(add_alert_banner);
  $('.caweb-toggle-alert').click(toggle_alert);
  $('.caweb-remove-alert').click(remove_alert);
  function add_alert_banner() {
    var alert_list = $(this).parent().parent();
    var new_li = $(this).parent().next().clone();
    var alert_toggle = $(new_li).find('#caweb-toggle-alert');
    var alert_status = $(new_li).find('input[name^="alert-status-"]');
    var alert_remove = $(new_li).find('.caweb-remove-alert');
    $(new_li).attr('id', '');
    $(alert_toggle).on('click', toggle_alert);
    $(alert_remove).on('click', remove_alert);
    $(alert_status).attr('data-bs-toggle', 'toggle');
    $(alert_status).attr('data-size', 'sm');
    $(alert_list).append($(new_li));
    $(alert_status).bootstrapToggle({
      onstyle: 'success'
    });

    //wp.editor.initialize("alertmessage-" + alertCount, caweb_admin_args.tinymce_settings);
  }
  function toggle_alert() {
    $('#' + $(this).attr('data-target')).collapse('toggle');
    $(this).find('span').toggleClass('dashicons-arrow-right');
  }
  function remove_alert() {
    var r = confirm("Are you sure you want to remove this alert? This can not be undone.");
    if (r == true) {
      $(this).parent().remove();
    }
  }
});

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__("./src/scripts/admin/icon.js");
__webpack_require__("./src/scripts/wp/theme-customizer/controls/alert-banners.js");
})();

/******/ })()
;
//# sourceMappingURL=caweb-customizer-controls.js.map