/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */


module.exports = {
	// CA State Template Options
	templateVer: '5', // Default CA State Template Version

	// Asset Directories
	themeAssetDir: 'assets/css/caweb/', // CAWeb CSS 
	templateAssetDir: 'assets/css/cagov/', // State Template CSS 
	commonCSSFiles: [ 
		'assets/css/caweb/modules.css', 
		'assets/css/cagov/cagov.font-only.css', 
		'assets/css/caweb/custom.css'
	], // Common CSS Files 
	themeAdminJS: [
		'assets/js/wp/browse-library.js',
		'assets/js/caweb/icon.js',
		'assets/js/caweb/admin.js',
	], // WP Backend Admin JS
	CommonJSFiles: [
		'assets/js/caweb/google.js',
		'assets/js/caweb/geolocator.js',
		'assets/js/caweb/AutoTracker.js',
		'assets/js/caweb/custom.js',
		'assets/js/a11y/*.js',
	] // Common JS Files
	
};
