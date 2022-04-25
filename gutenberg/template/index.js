const { join } = require( 'path' );

module.exports = {
    defaultValues: {
        namespace: "cagov",
        category: "ca-design-system",
        textdomain: 'cagov-design-system',
        dashicon: 'smiley',
		description: 'Design System Web Component Description',
		editorScript: "cagov-ds-gutenberg",
		editorStyle: "cagov-ds-gutenberg",
		style: "cagov-ds-gutenberg-style",
		supports: {
			"html": true
		},
		customScripts: {
			postbuild: "npm i @cagov/%npm_package_name%"
		}
    },
};
