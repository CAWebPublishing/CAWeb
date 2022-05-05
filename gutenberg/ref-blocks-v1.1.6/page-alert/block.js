/**
 * CAGov Page Alert
 *
 */
 ( function( blocks, editor, i18n, element, components, _, compose ) {
    var __ = i18n.__;
    var el = element.createElement;
    var RichText = editor.RichText;

    var { SelectControl } = components;

    blocks.registerBlockType( 'ca-design-system/page-alert', {
        title: __( 'Page Alert', 'ca-design-system' ),
        icon: 'format-aside',
        category: 'ca-design-system',
        description: __("A departmental alert box. Appears on this website, beneath the site navigation on the homepage. Provides brief, important or time-sensitive information. It can include a hyperlink, but not a button or image.", "ca-design-system"),
        attributes: {
            icon: {
                type: 'string',
            },
            body: {
                type: 'string'
            }
        },
        example: {
            attributes: {
                icon: __( 'bell', 'ca-design-system' ),
                body: __( 'We’re accepting applications for regulatory relief due to COVID-19. <a href="#">Find out how to apply.</a>', 'ca-design-system' )
            }
        },
        supports: {
            reusable: false,
            multiple: false,
            inserter: true
        },
        edit: function( props ) {
            var attributes = props.attributes;
            // @TODO find url for CDT version of icon list, DFA is the result that shows up in google search.
            // https://www.cdfa.ca.gov/v6.5/sample/icon-fonts.html
            // @TODO has CSS dependencies on dashicons AND cagov CSS. Would be simpler if we had one, but why doesn't ca-gov have a star or flag icon & can we add these?
            // Also need to go through the cagov icons and pick
            // Value is the class
            let iconOptions = [
                { label: 'None', value: '' },
                { label: 'Bell', value: 'ca-gov-icon-bell'},
                { label: 'Cannabis', value: 'ca-gov-icon-cannabis'},
                { label: 'Warning', value: 'ca-gov-icon-warning-triangle'},
                { label: 'Question', value: 'ca-gov-icon-question-line'},
                { label: 'Flag', value: 'dashicons dashicons-flag'}, // ca-gov doesn't have a flag icon
                { label: 'Star', value: 'dashicons dashicons-star-filled'}, // ca-gov doesn't have a star icon
            ];

            return el(
                'div',
                { className: 'cagov-page-alert cagov-stack' },
                el(
                    'span',
                    { className: `${attributes.icon}`  },
                ),
                el(SelectControl, {
                    label: "Icon",
                    inline: true,
                    className: "icon-select",
                    value: attributes.icon,
                    options: iconOptions,
                    onChange: function( value ) {
                        props.setAttributes( { icon: value} );
                    },
                }),
                el( RichText, {
                    tagName: 'p',
                    className: "message-body",
                    inline: true,
                    placeholder: __(
                        'Write page alert message',
                        'ca-design-system'
                    ),
                    value: attributes.body,
                    onChange: function( value ) {
                        props.setAttributes( { body: value } );
                    },
                } )
            );
        },
    } );
} )(
    window.wp.blocks,
    window.wp.editor,
    window.wp.i18n,
    window.wp.element,
    window.wp.components,
    window._,
    window.wp.compose
);
