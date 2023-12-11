/*
	WPForms v1.8.3.2 Accessibility 
	Last updated 9/25/2023
*/

// WPForms Submit buttons.
var wpforms_submit = document.querySelectorAll('.wpforms-submit[aria-live="assertive"]');

// WPForms Confirmation message.
var wpforms_confirmation_msg = document.querySelector('div[id^="wpforms-confirmation-"] p');


// iterate over submit buttons.
if( wpforms_submit.length ){
	// Mark assertive live regions as aria-atomic.
	wpforms_submit.forEach((element) => {
		element.ariaAtomic = true;
	})
}

// Give focus to confirmation message on form submission,
// doesn't work when Ajax Submission is enabled.
if( null !== wpforms_confirmation_msg ){
	wpforms_confirmation_msg.tabIndex = 0;
	wpforms_confirmation_msg.focus();
}