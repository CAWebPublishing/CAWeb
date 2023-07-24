jQuery(document).ready(function($) {
	/*
	MailPoet Accessibility 
	Retrieve recaptcha iFrame
	*/
	setTimeout(function(){
		var mailpoet_recaptcha_iframe = $('.mailpoet_recaptcha_container iframe');

		if( mailpoet_recaptcha_iframe.length ){
			mailpoet_recaptcha_iframe.each(function(index, element) {
				$(element).attr('title', 'MailPoet Recaptcha');
				stripeIframeAttributes(element);
			});
		}	
	}, 1000);

	function stripeIframeAttributes(frame){
		$(frame).removeAttr('frameborder');
		$(frame).removeAttr('scrolling');
		$(frame).removeAttr('allowtransparency');
		$(frame).removeAttr('allowfullscreen');
	}
});