(function ($) {
  var frame;
  var el_name;

  $(function() {
    // Fetch available headers and apply jQuery.masonry
    // once the images have loaded.
    var $headers = $('.available-headers');

    $headers.imagesLoaded(function() {
      $headers.masonry({
        itemSelector: '.default-header',
        isRTL: !!('undefined' != typeof isRtl && isRtl)
      });
    });

    // Build the choose from library frame.
    $(document).on('click', 'div .library-link', function(event) {
      var $el = $(this);
      el_name = this.name;
      event.preventDefault();

      var types = $el.data('option');
      var uploader =  $el.data('uploader') ;
      var classes = uploader ? '' : 'hidden-upload';
      var icon_check =  $el.data('icon-check') && $el.attr('data-icon-check') ;
      

      if (!!types && types.indexOf(',') > 0 )
        types = types.split(',');

      // If the media frame already exists, reopen it.
      if (frame) {
        //frame.open();
        //return;
      }



      // Create the media frame.
      frame = wp.media.frames.customHeader = wp.media({
        // Set the title of the modal.
        title: $el.data('choose'),

        // Tell the modal to show only images.
        library: {
          type: types
        },

        uploader: uploader,
        // Customize the submit button.
        button: {
          // Set the text of the button.
          text: $el.data('update'),
          //text: $el.dataset.update,
          // Tell the button not to close the modal, since we're
          // going to refresh the page when the image is selected.
          close: true
        }
      });

      // When an image is selected, run a callback.
      frame.on('select', function() {
        // Grab the selected attachment.
        var attachment = frame.state().get('selection').first();
        //  link = $el.data('updateLink');
        var attachmentURL = attachment.attributes.url;
        var attachmentAlt = attachment.attributes.alt;
        var attachmentFileName = attachment.attributes.filename;
        //var attachmentFileName = attachment.attributes.filename;
        
        var input_box = $('input[type="text"][name="' + el_name + '"]');
        var preview_field = $('#' + el_name + '_img');
        var filename_box = $('input[type="hidden"][name="' + el_name + '_filename"]');

				if( /\d+_media_image/.test(el_name) ){
          var nav_img_alt_box =  document.getElementById(el_name.substring(0, el_name.indexOf("_")) +  "_caweb_nav_media_image_alt_text");
          input_box.value = attachmentURL;
          nav_img_alt_box.value = attachmentAlt;

        }else if( "true" !== icon_check ){
            input_box.val(attachmentFileName);
            
						if( null !== preview_field )
              preview_field.attr('src', attachmentURL);
              
						if( null !== filename_box )
              filename_box.val(attachmentURL);
              
            if(  /header_ca_branding/.test(el_name)  )
              $('#header_ca_branding_alt_text').val(attachmentAlt);

        }else{
          var data = {
            'action': 'caweb_fav_icon_check',
            'icon_url': attachmentURL,
          };

					jQuery.post(ajaxurl, data, function(response) {
						if(1 == response){

							preview_field.attr('src', attachmentURL);
  						input_box.val(attachmentFileName);
							filename_box.val(attachmentURL);

						}else{
							alert("Invalid Icon Mime Type: " + attachmentFileName);
						}
					});
				}
      });

      frame.on('open', function() {
        if (!uploader) {
         var tabs = frame.el.getElementsByClassName('media-frame-router')[0].getElementsByClassName('media-router')[0].getElementsByClassName('media-menu-item');

					tabs[1].click();
          tabs[0].parentNode.removeChild(tabs[0]);

        }
      });

      frame.open();

    });

  });


}(jQuery));

/* CAWeb Option Page */
jQuery(document).ready(function() {
	$(document).on('click', '#caweb-icon-menu li', function(e){cawebIconSelected(this);});
	$(document).on('click', '#caweb-icon-menu-header .resetIcon', function(e){ resetIconSelect($(this).parent().next());});

	function cawebIconSelected(iconLi){
		resetIconSelect($(iconLi).parent());
		$(iconLi).addClass('active');

		var i = $(iconLi).parent().find('input');

		if (i.length){
			$(i).val($(iconLi).attr('title'));
		}
	}

	function resetIconSelect(iconList){
		var icon_list = $(iconList).find('LI');
		
		for(o = 0; o < icon_list.length - 1; o++){
			$(icon_list[o]).removeClass('active');
		}

		var i = $(iconList).find('input');

		if (i.length){
			$(i).val('');
		}
	}
	
});
  

/* CAWeb Option Page */
jQuery(document).ready(function() {
	
  /*
    Custom CSS/JS
  */
 
  //$( "#uploadedCSS, #uploadedJS" ).sortable();
  //$( "#uploadedCSS, #uploadedJS" ).disableSelection();

  // Remove Uploaded CSS/JS
  $('.remove-css, .remove-js').click(function(e){
    e.preventDefault();
    var r = confirm("Are you sure you want to remove " + this.title + "? This can not be undone.");
  
    if (r == true) {
      changeMade = true;
      this.parentNode.remove();
    }
  });

  // Add New CSS
$('#add-css, #add-js').click(function(e){
  var ext =  $(this).attr('id').replace('add-', '');
  var ulID = '#uploaded-' + ext;

  addExternal($(ulID), ext);	
  changeMade = true;

});

function addExternal(ext_list, ext){
  var li = document.createElement('LI');
  var fileUpload = document.createElement('INPUT');
  var rem = document.createElement('a');

  li.classList = "list-group-item";

  // File Upload
  fileUpload.type = "file";
  //fileUpload.name = rowCount + ext + "_upload";
  //fileUpload.id = rowCount + ext + "_upload";
  fileUpload.accept = "." + ext;
  fileUpload.classList = "form-control-file border-bottom border-warning pl-2 d-inline-block w-75";
  fileUpload.addEventListener('change', function () {
    var name = this.value.substring(this.value.lastIndexOf("\\") + 1);
    var extension = name.lastIndexOf(".") > 0 ?
            name.substring(name.lastIndexOf(".") + 1).toLowerCase() : "";
  
    if( "" === extension || ext !== extension){
      alert(name + " isn't a valid " + ext + " extension and was not uploaded.");
      $(this).parent().remove();
    }else{
      rem.title = "remove " + name;
    }
  
  });
  
  // Remove Newly Added Item
  rem.classList = "dashicons dashicons-dismiss text-danger align-middle";
  rem.addEventListener('click', function (e) {
    e.preventDefault();
    var r = "" !== this.title ? confirm("Are you sure you want to " + this.title + "? This can not be undone.") : true;
  
   if (r == true) {
      changeMade = true;
      $(this).parent().remove();
    }
  });

  $(li).append(rem);
  $(li).append(fileUpload);

  $(ext_list).append(li);

}
});
  

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

});
