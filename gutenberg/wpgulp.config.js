/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */


module.exports = {
	gutenbergEditorCSS: [ // Gutenberg Editor CSS
		'blocks/*/build/index.css'
	], 
	designSystemCSS: [ // Design System Components CSS
		'blocks/*/node_modules/@cagov/*/src/index.scss'
	], 
	gutenbergEditorJS: [ // Gutenberg Editor JS
		'blocks/*/build/index.js'
	],  
	designSystemJS: [ // Design Components JS
		'blocks/*/node_modules/@cagov/*/dist/index.js'
	],
};