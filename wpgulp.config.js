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
	templateVer: '5.5', // Minimum CA State Template Version
	availableVers: ['5.5', '6.0', 'design-system'], // Available CA State Template Versions
	availableColors: {
		'cagov.css' : 'CAGov',
		'cannabis.css' : 'Cannabis',
		'delta.css' : 'Delta',
		'drought.css' : 'Drought',
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
	// Asset Directories
	SCSSAssetDir: 'assets/scss/', // Main SCSS 
	JSAssetDir: 'assets/js/', // Main JS 
	themeCSSAssetDir: 'assets/css/caweb/', // CAWeb CSS 
	templateCSSAssetDir: 'assets/css/cagov/', // State Template CSS 
	frontendCSS: [ // Frontend CSS
		'assets/scss/frontend.scss',
	], 
	adminCSS:[ // WP Backend Admin CSS
		'assets/scss/admin.scss',
		'assets/css/cagov/cagov.font-only.css',
	],
	adminJS: [ // WP Backend Admin JS
		'assets/js/wp/browse-library.js',
		'assets/js/caweb/options/*.js', 
		'assets/js/caweb/nav-menu.js',
		'assets/js/caweb/admin.js',
		'assets/js/bootstrap/bootstrap.bundle.js',
	], 
	frontendJS: [ // Common JS 
		'assets/js/caweb/google.js',
		'assets/js/caweb/AutoTracker.js',
		'assets/js/caweb/custom.js',
	],  
	a11yJS:[ // Accessibility JS
		'assets/js/a11y/divi/*.js',
		'assets/js/a11y/plugins/*.js',
		'assets/js/a11y/*.js',
	],
	themeCustomizerJS: [ // Theme Customizer JS 
		'assets/js/wp/theme-customizer/bindings/*.js',
	],
	themeCustomizerControlJS: [ // Theme Customizer Control JS 
		'assets/js/caweb/options/icon.js',
		'assets/js/caweb/options/colorschemes.js',
		'assets/js/wp/theme-customizer/controls/*.js',
	],
};
