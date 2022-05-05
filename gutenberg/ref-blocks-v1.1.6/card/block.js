/**
 * Call to action button
 *
 * Button that highlights common user needs. Appears on the homepage. Provides a link to a webpage where people can take action with the department. Includes a text label and link.  Copy writing tip: Ideally starts with a verb.
 *
 */
(function (blocks, editor, i18n, element, components, _) {
  const __ = i18n.__;
  const el = element.createElement;
  const RichText = editor.RichText;
  const BlockControls = editor.BlockControls;
  const URLPopover = editor.URLPopover;

  blocks.registerBlockType('ca-design-system/card', {
    title: __('Call to action button', 'ca-design-system'),
    icon: 'format-aside',
    category: 'ca-design-system',
    description: __("Button that highlights common user needs. Appears on the homepage. Provides a link to a webpage where people can take action with the department. Includes a text label and link.  Copy writing tip: Ideally starts with a verb.", "ca-design-system"),
    attributes: {
      title: {
        type: 'string'
      },
      url: {
        type: 'string'
      }
    },
    example: {
      attributes: {
        title: __('Card title', 'ca-design-system'),
        url: __('CardUrl', 'ca-design-system')
      }
    },
    edit: function (props) {
      const attributes = props.attributes;

      const [isURLInputVisible, setIsURLInputVisible] = element.useState(false);

      const openURLInput = () => {
        if (isURLInputVisible) {
          setIsURLInputVisible(false);
        } else {
          setIsURLInputVisible(true);
          document.querySelector('.block-editor-url-popover__row input').focus();
        }
      };
      const closeURLInput = () => {
        setIsURLInputVisible(false);
      };

      const onSubmitSrc = (event) => {
        event.preventDefault();
        closeURLInput();
      };

      return [
        el(
          BlockControls,
          { key: 'controls' },
          el(components.ToolbarGroup, {},
            el(components.ToolbarButton, {
              label: 'Enter card link URL',
              icon: 'admin-links',
              onClick: openURLInput,
              isPressed: isURLInputVisible
            },
            el(URLPopover, { onClose: function () {} },
              el('form', {
                className: isURLInputVisible ? 'block-editor-media-placeholder__url-input-form url-input-form' : 'disp-none',
                onSubmit: onSubmitSrc,
                onClick: function (event) { event.stopPropagation(); },
                onClose: closeURLInput
              },
              el(editor.URLInput, {
                className: 'block-editor-media-placeholder__url-input-field url-input-field--card',
                type: 'url',
                placeholder: 'Paste or type card URL',
                'aria-label': 'Paste or type card URL',
                url: attributes.url,
                value: attributes.url,
                onChange: function (value) {
                  props.setAttributes({ url: value });
                },
                onClose: closeURLInput,
                onSubmit: onSubmitSrc

              }),
              el(components.Button, {
                className: 'block-editor-media-placeholder__url-input-submit-button url-submit-button',
                icon: 'undo',
                label: 'Apply',
                'aria-label': 'Submit',
                type: 'submit'
              })
              )
            )
            )
          )
        ),
        el('div',
          { className: 'cagov-card cagov-stack' },
          el(RichText, {
            tagName: 'span',
            inline: true,
            withoutInteractiveFormatting: true,
            className: 'card-text',
            placeholder: __(
              'Write card title…',
              'ca-design-system'
            ),
            value: attributes.title,
            onChange: function (value) {
              props.setAttributes({ title: value });
            }
          })
        )
      ];
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
