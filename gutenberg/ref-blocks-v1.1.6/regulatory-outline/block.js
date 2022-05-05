/**
 * CAGov Regulatory Outline
 */
(function (blocks, i18n) {
  var __ = i18n.__;
  blocks.registerBlockVariation(
    'core/list',
    [
      {
        name: 'regulatory-outline',
        title: 'Regulatory outline',
        attributes: {
          className: 'cagov-regulatory-outline'
        },
        icon: "format-aside",
        category: 'ca-design-system',
        description: "Nested, ordered list with the following pattern: (a)(b)(c), (1)(2)(3), (A)(B)(C), (i)(ii)(iii)", 
    }
    ]
  );
})(
  window.wp.blocks,
  window.wp.i18n,
);
