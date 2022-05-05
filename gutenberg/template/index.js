const { join } = require( 'path' );

module.exports = {
    defaultValues: {
        namespace: "cagov-design-system",
        category: "cagov-design-system",
        textdomain: 'cagov-design-system',
        dashicon: 'format-aside',
		description: 'Design System component description, pull from design system website or project assets from PM',
		editorScript: "cagov-design-system-gutenberg",
		editorStyle: "cagov-design-system-gutenberg",
		style: "cagov-design-system-gutenberg-style",
		supports: {
			"html": true
		},
		customScripts: {
			postbuild: "npm i @cagov/$npm_package_name"
		}
    },
};
