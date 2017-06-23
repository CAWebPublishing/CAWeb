(function($) {
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

      //alert(Object.keys($el));

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
          type: $el.data('option')
        },

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

        // Tell the browser to navigate to the crop step.
        //window.location = link + '&file=' + attachment.id;
        //window.location = '#';
      });

      frame.open();
    });
  });
}(jQuery));
