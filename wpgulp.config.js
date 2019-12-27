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
	SCSSAssetDir: 'assets/scss/', // CAWeb CSS 
	themeCSSAssetDir: 'assets/css/caweb/', // CAWeb CSS 
	templateCSSAssetDir: 'assets/css/cagov/', // State Template CSS 
	commonCSSFiles: [ 
		'assets/css/cagov/cagov.font-only.css', 
		'assets/scss/frontend.scss',
	], 
	themeAdminCSS:[ // WP Backend Admin CSS
		'assets/scss/admin.scss',
		'assets/css/cagov/cagov.font-only.css',
	],
	themeAdminBootStrapCSS: [ // WP Backend Admin Bootstrap CSS
		'assets/scss/bootstrap.scss'
	],
	themeAdminJS: [ // WP Backend Admin JS
		'assets/js/wp/browse-library.js',
		'assets/js/caweb/options/*.js', 
		'assets/js/caweb/nav-menu.js',
		'assets/js/caweb/admin.js',
	], 
	themeAdminBootStrapJS: [ // WP Backend Admin Bootstrap JS
		'assets/js/bootstrap/bootstrap.bundle.js',
	],
	commonJSFiles: [ // Common JS 
		'assets/js/caweb/google.js',
		//'assets/js/caweb/geolocator.js', Geolocator not functioning
		'assets/js/caweb/AutoTracker.js',
		'assets/js/a11y/*.js',
		'assets/js/caweb/custom.js',
	],  
	themeCustomizer: [ // Theme Customizer JS 
		'assets/js/wp/theme-customizer.js'
	],
	themeCustomizerControl: [ // Theme Customizer Control JS 
		'assets/js/caweb/options/icon.js',
		'assets/js/wp/theme-customizer-controls.js'
	],
};
