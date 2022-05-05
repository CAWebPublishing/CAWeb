/**
 * CAGov feature-card
 *
 * Simple block, renders and saves the same content without interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended
 * because all of these styles will appear in `post_content`.
 */
(function (blocks, editor, i18n, element, components, _) {
  const __ = i18n.__;
  const el = element.createElement;
  const RichText = editor.RichText;
  const MediaUpload = editor.MediaUpload;

  blocks.registerBlockType('ca-design-system/feature-card', {
    title: __('Feature card', 'cagov-design-system'),
    category: 'ca-design-system',
    icon: "format-aside",
    description: __("Featured content space. Appears on the homepage. Calls attention to a web page, announcement or event. Includes title text, brief description, image, and a button.", "ca-design-system"),
    attributes: {
      title: {
        type: 'array',
        source: 'children',
        selector: 'h2'
      },
      body: {
        type: 'array',
        source: 'children',
        selector: 'p'
      },
      buttontext: {
        type: 'array',
        source: 'children',
        selector: 'a'
      },
      buttonurl: {
        type: 'array',
        source: 'children',
        selector: 'button'
      },
      mediaID: {
        type: 'number'
      },
      mediaURL: {
        type: 'string',
        source: 'attribute',
        selector: 'img',
        attribute: 'src'
      },
      mediaAlt: {
        type: 'string',
        source: 'attribute',
        selector: 'img',
        attribute: 'alt'
      },
      mediaWidth: {
        type: 'string',
        source: 'attribute',
        selector: 'img',
        attribute: 'width'
      },
      mediaHeight: {
        type: 'string',
        source: 'attribute',
        selector: 'img',
        attribute: 'height'
      },
    },
    example: {
      attributes: {
        title: __('Annual meeting, January 14, 2022', 'cagov-design-system'),
        body: __('Registration opens November 5, 2022', 'cagov-design-system'),
        buttontext: __('Register', 'cagov-design-system'),
        buttonurl: __('https://example.com', 'cagov-design-system'),
        mediaURL: 'http://www.fillmurray.com/750/500',
        mediaAlt: 'Image Description',
        mediaWidth: "750",
        mediaHeight: "500",
      }
    },
    edit: function (props) {
      const attributes = props.attributes;
      const onSelectImage = function (media) {
        // @TODO since we have the media ID to render, could load large or small size
        // Caching tools from WP (like WP Fastest Cache) can do lazy loading automatically
        return props.setAttributes({
          mediaURL: media.sizes.large.url,
          mediaID: media.id,
          mediaAlt: media.description,
          mediaWidth: media.sizes.large.width,
          mediaHeight: media.sizes.large.height
        });
      };
      return el('div', { className: 'cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry' },
        el('div', {},
          el('div', { className: 'cagov-stack cagov-p-2 cagov-featured-sidebar' },
            el(RichText, {
              tagName: 'h2',
              inline: true,
              placeholder: __(
                'Write title…',
                'cagov-design-system'
              ),
              value: attributes.title,
              onChange: function (value) {
                props.setAttributes({ title: value });
              }
            }),
            el(
              'div',
              { className: 'cagov-feature-card-body-content' },
              el(editor.InnerBlocks,
                {
                  allowedBlocks: ['core/paragraph', 'core/button'],
                  onChange: function (value) {
                    // console.log(value);
                  }
                }
              )
            )
          ),
          el('div', { },
            el(MediaUpload, {
              onSelect: onSelectImage,
              allowedTypes: 'image',
              value: attributes.mediaID,
              render: function (obj) {
                return el(
                  components.Button,
                  {
                    className: attributes.mediaID
                      ? 'image-button'
                      : 'button button-large',
                    onClick: obj.open
                  },
                  !attributes.mediaID
                    ? __('Upload Image', 'cagov-design-system')
                    : el('img', { src: attributes.mediaURL, className: 'cagov-featured-image', alt:attributes.mediaAlt, width: attributes.mediaWidth, height: attributes.mediaHeight  })
                );
              }
            })
          )
        )
      );
    },
    save: function (props) {
      const attributes = props.attributes;
      return el('div', { className: 'cagov-with-sidebar cagov-with-sidebar-left cagov-featured-section cagov-bkgrd-gry cagov-block' },
        el('div', {},
          el('div', { className: 'cagov-stack cagov-p-2 cagov-featured-sidebar' },
            { className: 'cagov-feature-card cagov-stack' },
            el(RichText.Content, {
              tagName: 'h2',
              value: attributes.title
            }),
            el('div', { className: 'cagov-feature-card-body-content' },
              el(editor.InnerBlocks.Content)
            )
          ),
          attributes.mediaURL && el('div', { },
            el('img', { className: 'cagov-featured-image', src: attributes.mediaURL, alt: attributes.mediaAlt, width: attributes.mediaWidth, height: attributes.mediaHeight }
            )
          )
        )
      );
    }
  });
})(
  window.wp.blocks,
  window.wp.blockEditor,
  window.wp.i18n,
  window.wp.element,
  window.wp.components,
  window._
);
