// import * as bootstrap from 'bootstrap';
// import Dropdown from 'bootstrap';

jQuery(document).ready(function($) {
	
	
	/* Fixed padding for wp-activate.php page when Navigation is fixed */
	if( $('header.fixed + #signup-content').length ){
		$('header.fixed + #signup-content').css('padding-top', $('header.fixed').outerHeight() );
	}

	

	// $('header .nav.megadropdown .dropdown').each((i, element) => {
	// 	element.addEventListener('shown.bs.dropdown', (event) => {
	// 		let dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
	// 		// let popoverInstance = Dropdown.getInstance(event.srcElement);
	// 		// let popoverInstance = bootstrap.Dropdown.getInstance(event.srcElement);

	// 		// if( popoverInstance && popoverInstance._menu ){
	// 			// let style = window.getComputedStyle(popoverInstance._menu);
	// 			// let transform = style.transform || style.getPropertyValue("transform");
				
				
	// 			// console.log( transform );
	// 		// }
	// 		// console.log( dropdownMenu );
			
	// 		// dropdownMenu.style.transform = 'translateX(14vw)';
	// 	});
	// });
 });
