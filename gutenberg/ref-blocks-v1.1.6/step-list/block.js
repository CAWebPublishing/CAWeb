/**
 * CAGov Step list
 */
(function (blocks, i18n) {
  var __ = i18n.__;
  blocks.registerBlockVariation(
    'core/list',
    [
      {
        name: 'step-list',
        title: 'Step list',
        attributes: {
          className: 'step-list cagov-step-list'
        },
        icon: "format-aside",
        category: 'ca-design-system',
        description: "List styling for a process list. Use ordered lists (ol).", 
        onChange: function (value) {
          // console.log(value);
        }
    }
    ]
  );
})(
  window.wp.blocks,
  window.wp.i18n,
);
