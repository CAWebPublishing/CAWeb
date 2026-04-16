/* CAWeb Icon Menu Javascript */
window.addEventListener('load', () => {
	// Get the icon menu modal element
	let iconMenuModal = document.getElementById('caweb-icon-menu-modal');
	let iconMenus = document.querySelectorAll('.caweb-icon-menu');

	// get the input value from the icon menu
	const getSelectedIcon = ( iconMenu ) => {
		// get the input value from the icon menu.
		let selectedIcon = iconMenu.querySelector('input').value;

		// return the selected icon value
		return selectedIcon;
	}

	// reset the icon menu selection
	const resetIcon = ( iconMenu ) => {
		let iconList = iconMenu.querySelectorAll('li');
		let iconInput = iconMenu.querySelector('input');

		iconList.forEach((li) => {
			li.classList.remove('active');
		});

		iconInput.value = '';
	}

	const selectIcon = ( iconLi ) => {
		resetIcon( iconLi.parentElement );

		iconLi.classList.add('active');
		let iconInput = iconLi.parentElement.querySelector('input');

		if (iconInput){
			iconInput.value = iconLi.getAttribute('title');
		}
	}

	// attach functionality to the icon menus
	if( iconMenus ){
		iconMenus.forEach((menu) => {
			menu.getSelectedIcon = () => getSelectedIcon(menu);

			menu.querySelectorAll('li').forEach((li) => {
				li.addEventListener('click', (e) => { selectIcon(li); });
			});

			menu.parentElement.querySelectorAll('.reset-icon').forEach((resetButton) => {
				resetButton.addEventListener('click', (e) => { resetIcon(menu); });
			});
		});
	}

	// if the icon menu modal exists, add event listener to the save button	
	if( iconMenuModal ){
		// modal save button 
		let saveButton = iconMenuModal.querySelector('[data-bs-save="modal"]');

		// Get the icon menu element used inside the modal for selecting icons
		iconMenus = iconMenuModal.querySelector('.caweb-icon-menu');

		// modal show event listener 
		iconMenuModal.addEventListener('show.bs.modal', (e) => {
			// the modal may be triggered by multiple buttons, 
			// so we need to get the data-icon attribute from the relatedTarget and assign it to the modal's dataset for use when saving
			iconMenuModal.dataset.icon = e.relatedTarget.dataset.icon;
		});

		// modal save button click event listener
		saveButton.addEventListener('click', (e) => {
			
			// Get the data-icon attribute from the modal's dataset to know which input to update with the selected icon value
			let inputId = iconMenuModal.dataset.icon;
			let inputElement = document.querySelector(`[name="${inputId}"]`);
			
			// Update the input value with the selected icon value
			if( inputElement ){
				// Get the selected icon from the icon menu 
				inputElement.value = getSelectedIcon(iconMenus);
			}

			// close the modal after saving	
			let modal = bootstrap.Modal.getInstance(iconMenuModal);
			modal.hide();
			
			// give the focus back to the button that triggered the modal after saving
			document.querySelector(`[data-icon="${inputId}"]`).focus({ focusVisible: true });
		});
		
	}


});

