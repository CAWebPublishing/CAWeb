const { join } = require( 'path' );

module.exports = {
    defaultValues: {
        namespace: "cagov",
        category: "ca-design-system",
        textdomain: 'cagov-design-system',
        dashicon: 'smiley',
		editorScript: "cagov-ds-gutenberg-js",
		editorStyle: "cagov-ds-gutenberg-css",
		style: "cagov-ds-gutenberg-style-css",
		supports: {
			"html": true
		},
		customScripts: {
			postbuild: "npm i @cagov/%npm_package_name%"
		}
    },
};
