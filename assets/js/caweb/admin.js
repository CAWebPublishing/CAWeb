 /* CAWeb Option Page */
jQuery(document).ready(function() {

  $('#resetFavIcon').click(function() {
    var ico = args.defaultFavIcon;
    var icoName = ico.substring( ico.lastIndexOf('/') + 1 );

    $('input[name="ca_fav_ico"]').val(icoName);
    $('#ca_fav_ico_img').attr('src', ico);
  });
});
