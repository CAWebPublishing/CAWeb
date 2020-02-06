/* CAWeb Google Translate */
if( args.ca_google_trans_enabled ){
	function googleTranslateElementInit() {
		new google.translate.TranslateElement({pageLanguage: 'en', gaTrack: true, autoDisplay: false,  
		  layout: google.translate.TranslateElement.InlineLayout.VERTICAL}, 'google_translate_element');
	}
	var gtrans = document.createElement('script');
	gtrans.async = true;
	gtrans.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
	var s = document.getElementsByTagName('script');
	s[s.length - 1].parentNode.insertBefore(gtrans, s[s.length - 1]);
}