 /* CAWeb Option Page */
jQuery(document).ready(function() {
  "use strict";
  var changeMade = false;

  $(window).on('beforeunload', function(){
	  if( changeMade && "nav-menus.php" !== args.changeCheck)
			  return 'Are you sure you want to leave?';

  });

  $('#resetFavIcon').click(function() {
    var ico = args.defaultFavIcon;
    var icoName = ico.substring( ico.lastIndexOf('/') + 1 );

    $('input[name="ca_fav_ico"]').val(icoName);
    $('#ca_fav_ico_img').attr('src', ico);
  });

  $('#resetFavIcon').click(function(){ changeMade = true; });
});
