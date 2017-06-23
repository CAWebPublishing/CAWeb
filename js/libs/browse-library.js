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
    $('.library-link').click(function(event) {
      var $el = $(this);
      el_name = this.name;
      event.preventDefault();

      var types = $el.data('option');
      var uploader = false == $el.data('uploader') ? false : true;
      var classes = uploader ? '' : 'hidden-upload';

      if (!!types && types.includes(','))
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
        var attachment = frame.state().get('selection').first(),
          link = $el.data('updateLink');

        var input_box = document.getElementById(el_name);
        input_box.value = attachment.attributes.url;

        var preview_field = document.getElementById(el_name+"_img");
        preview_field.src = attachment.attributes.url;

        var filename_box = document.getElementById(el_name + "_filename");
        var filename = attachment.attributes.url.split("/");
        filename_box.value = filename[filename.length-1];
      });

      frame.on('open', function() {
        if (!uploader) {
          var frame_count = document.getElementsByClassName('media-frame-router').length - 1;
          var current_frame = document.getElementsByClassName('media-frame-router')[frame_count].getElementsByClassName('media-router')[0];
				if(document.getElementsByClassName('media-menu-item')[1])
            current_frame.getElementsByClassName('media-menu-item')[1].click();
        if(document.getElementsByClassName('media-menu-item')[0])
            current_frame.getElementsByClassName('media-menu-item')[0].remove();

        }
      });

      frame.open();
      if (!uploader) {
        if(document.getElementsByClassName('media-menu-item')[2])
          document.getElementsByClassName('media-menu-item')[2].click();
        if(document.getElementsByClassName('media-menu-item')[1])
        document.getElementsByClassName('media-menu-item')[1].style.display = "none";
      }
    });

  });


}(jQuery));
