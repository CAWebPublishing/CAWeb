 /* CAWeb Option Page */
jQuery(document).ready(function() {
  "use strict";
  var changeMade = false;

  $(window).on('beforeunload', function(){
	  if( changeMade && "nav-menus.php" !== args.changeCheck)
			  return 'Are you sure you want to leave?';

  });

  // Reset Fav Icon
  $('#resetFavIcon').click(function() {
    var ico = args.defaultFavIcon;
    var icoName = ico.substring( ico.lastIndexOf('/') + 1 );

    $('input[name="ca_fav_ico"]').val(icoName);
    $('#ca_fav_ico_img').attr('src', ico);

    changeMade = true;
  });

  $('#ca_google_trans_enabled_custom, label[for="ca_google_trans_enabled_custom"]').click(function(){
    $('#ca_google_trans_enabled_custom_extras').collapse('toggle');
  });

});
