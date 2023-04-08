/**
 * WPGulp Configuration File
 *
 * 1. Edit the variables as per your project requirements.
 * 2. In paths you can add <<glob or array of globs>>.
 *
 * @package WPGulp
 */

export default {
	success: '✅',
	assetDir: 'assets',
	outputCSSDir: './css/',
	outputJSDir: './js/',
	// CA State Template Options
	templateVer: '5.5', // Minimum CA State Template Version
	availableVers: ['5.5', '6.0'], // Available CA State Template Versions
	availableColors: {
		'eureka.css' : 'Eureka',
		'mono.css' : 'Mono',
		'oceanside.css' : 'Oceanside',
		'orange county.css' : 'Orange County',
		'paso robles.css' : 'Paso Robles',
		'sacramento.css' : 'Sacramento',
		'santa barbara.css' : 'Santa Barbara',
		'santa cruz.css' : 'Santa Cruz',
		'shasta.css' : 'Shasta',
		'sierra.css' : 'Sierra',
		'trinity.css' : 'Trinity',
	},
	// Theme Styles
	adminStyles:[ // WP Backend Admin Styles
		'assets/scss/admin.scss',
		'assets/css/cagov/cagov.font-only.css',
	],
	adminScripts: [ // WP Backend Admin JS
		'assets/js/wp/browse-library.js',
		'assets/js/caweb/options/*.js', 
		'assets/js/caweb/nav-menu.js',
		'assets/js/caweb/admin.js',
		'assets/js/bootstrap/bootstrap.bundle.js',
	], 
	frontendStyles: [ // Frontend CSS
		'assets/scss/frontend.scss',
	],
	frontendScripts: [ // Common JS 
		'assets/js/caweb/google.js',
		'assets/js/caweb/AutoTracker.js',
		'assets/js/caweb/custom.js',
	], 
	a11yScripts:[ // Accessibility JS
		'assets/js/a11y/divi/*.js',
		'assets/js/a11y/plugins/*.js',
		'assets/js/a11y/*.js',
	],
	customizerScripts: [ // Theme Customizer JS 
		'assets/js/wp/theme-customizer/bindings/*.js',
	],
	customizerControlScripts: [ // Theme Customizer Control JS 
		'assets/js/caweb/options/icon.js',
		'assets/js/caweb/options/toggle-options.js',
		'assets/js/wp/theme-customizer/controls/*.js',
	],
};