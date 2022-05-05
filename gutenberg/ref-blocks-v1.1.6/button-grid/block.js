/**
 * CAGov Card Grid
 *
 */
(function (blocks, element, blockEditor, i18n) {
  var __ = i18n.__;
  const el = element.createElement;
  const InnerBlocks = blockEditor.InnerBlocks;
  const ALLOWED_BLOCKS = ['ca-design-system/card'];
  blocks.registerBlockType('ca-design-system/button-grid', {
    title: 'Call to action grid',
    icon: "format-aside",
    category: 'ca-design-system',
    description: __("Automatic, organized layout for call to action buttons. Appears on the homepage. Ranked and prioritized in order of most needed service. Includes top 6 or less services. Includes \"Call to action button.\"", "ca-design-system"),
    edit: function (props) { 
      return el(
        'div',
        { className: 'cagov-button-grid cagov-grid cagov-stack cagov-block' },
        el(InnerBlocks,
          {
            orientation: 'horizontal',
            allowedBlocks: ALLOWED_BLOCKS
          }
        )
      );
    },
    save: function (props) {
      return el(
        'div',
        { className: 'cagov-button-grid cagov-grid cagov-stack cagov-block' },
        el(InnerBlocks.Content)
      );
    }
  });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.i18n);
