/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */


module.exports = {

	// Project options.
	projectURL: 'https://caweb.cdt.ca.gov/', // Local project URL of your already running WordPress site. Could be something like wpgulp.local or localhost:3000 depending upon your local WordPress setup.
	productURL: './', // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
	browserAutoOpen: false,
	injectChanges: true,

	// Style options.
	styleSRC: './assets/scss/style.scss', // Path to main .scss file.
	styleDestination: './', // Path to place the compiled CSS file. Default set to root folder.
	outputDevStyle: 'expanded', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	outputProdStyle: 'compressed', // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
	errLogToConsole: true,
	precision: 10,

};
