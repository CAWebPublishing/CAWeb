/**
 * Gulpfile.
 *
 * Gulp for CAWeb WordPress.
 * 
 * This Gulpfile is a modified version of WPGulp.
 * @tutorial https://github.com/ahmadawais/WPGulp
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */

/**
 * Load WPGulp Configuration.
 *
 * TODO: Customize your project in the wpgulp.js file.
 */
const {
	success, 
	outputCSSDir,
	outputJSDir,
	templateVer,
	availableVers,
	availableColors,
	templateCSSAssetDir,
	SCSSAssetDir,
	JSAssetDir,
	adminStyles,
	adminScripts,
	frontendStyles,
	frontendScripts,
	a11yScripts,
	themeCustomizerScripts,
	themeCustomizerControlScripts
} = require('./wpgulp.config.js');

/**
 * Load Plugins.
 *
 * Load gulp plugins and passing them semantic names.
 */
const {task,src, dest, parallel}  = require('gulp'); // Gulp of-course.

// Shell
const shell = require('gulp-shell')

// Monitoring related plugins.
const watch = require('gulp-watch');

// CSS related plugins.
const sass = require('gulp-sass')(require('node-sass')); // Gulp plugin for Sass compilation.

// JS related plugins.
const uglify = require('gulp-uglify-es').default; // Minifies JS files.

// HTML related plugins
const htmlbeautify = require('gulp-html-beautify'); // Beautify HTML/PHP files

// Utility related plugins.
const concat = require('gulp-concat'); // Concatenates files.
const lineec = require('gulp-line-ending-corrector'); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
//const notify = require( 'gulp-notify' ); // Sends message notification to you.
const fs = require('fs'); // File System
const del = require('del'); // Delete plugin
var path = require('path');

var argv = require('yargs').argv;
var log = require('fancy-log');
var tap = require('gulp-tap');

task('monitor', function () {

	watch(['assets/**/*'], function (cb) {
		buildAllAssets();
	});
});

/**
 * Task to build CAWeb Theme Admin Styles
 */
task('admin-css', async function(){
	buildAdminStyles(true);
	buildAdminStyles(false);
});

/**
 * Task to build CAWeb FrontEnd Styles
 */
task('frontend-css', async function () {
	var version = undefined !== argv.ver ? [argv.ver] : availableVers;

	del(['css/caweb-*.css']);
	
	version.forEach(function (v) {
		buildFrontEndStyles(false, v);
		buildFrontEndStyles(true, v);
	});

});

/**
 * Task to build CAWeb Theme Admin Scripts
 */
task('admin-js', async function () {

	del(['js/admin*.js']);

	buildAdminJS(true);
	buildAdminJS(false);

});

/**
 *	Task to build CAWeb Theme Frontend Scripts
 */
task('frontend-js', async function () {
	var version = undefined !== argv.ver ? [argv.ver] : availableVers;

	del(['js/caweb-*.js']);

	version.forEach(function (v) {
		buildFrontendScripts(true, v);
		buildFrontendScripts(false, v);
	});

});

/**
 * Task to build CAWeb Theme Customizer Scripts
 */
task('customizer-js', async function () {

	del(['js/theme-customizer*.js']);

	buildCustomizerScripts(true);
	buildCustomizerScripts(false);

});

/**
 * Task to help assist beautifying files
 */
task('beautify', async function () {
	var options = { indentSize: 2 };
	var src = ['**/*.php'];

	if (argv.hasOwnProperty('file')) {
		src = argv.file;
	}

	src(src, { base: './' })
		.pipe(htmlbeautify(options))
		.pipe(dest('./'));

});

/**
 * Task to build all CAWeb Theme Styles/Scripts
 */
task('build', async function () {
	del(['js/*.js', 'css/*.css']);

	parallel(
		'admin-css',
		'frontend-css',
		'admin-js',
		'frontend-js',
		'customizer-js'
	)();
});


/**
 * Build CAWeb Theme Admin Styles
 * 
 * @param {*} min Whether to build file minified or not
 */
async function buildAdminStyles(min = false) {
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var t = minified ? ' Minified ] ' : ' ] ';
	t = '[ ' + success +' CAWeb Admin Styles' + t;

	if (adminStyles.length){
		src(adminStyles)
		.pipe(
			sass({
				outputStyle: buildOutputStyle,
			})
		)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('admin' + minified + '.css')) // compiled file
		.pipe(tap(function (file) {
			log(t + path.basename(file.path) + ' was created successfully.');
		}))
		.pipe(dest(outputCSSDir));
	}

}

task('test', async function(){
	buildFrontEndStyles(false, 'design-system')
})
/**
 * Build CAWeb Theme FrontEnd Styles
 * 
 * @param {*} min Whether to build file minified or not
 * @param {*} ver Template version to build
 */
async function buildFrontEndStyles(min = false, ver = templateVer) {
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var versionDir = templateCSSAssetDir + 'version-' + ver;
	//var versionColorschemesDir = 'design-system' != ver ? versionDir + '/colorscheme/' : 'node_modules/@cagov/ds-base-css/src/themes/';
	//var versionColorschemesDir = 'design-system' != ver ? versionDir + '/colorscheme/' : 'node_modules/@cagov/ds-base-css/dist/themes/';
	var versionColorschemesDir = versionDir + '/colorscheme/';
	var colors = fs.readdirSync(versionColorschemesDir);
	var core_css = 'design-system' != ver ? versionDir + '/cagov.core.css' : 'node_modules/@cagov/*/src/index.scss';
	colors.forEach(function (e) {

		var f = [core_css,
		versionColorschemesDir + e,
		templateCSSAssetDir + 'cagov.font-only.css'];
		f = f.concat(frontendStyles);
		f = f.concat( SCSSAssetDir + 'cagov/version-' + ver + '/custom.scss' );
		var color = availableColors[e];
		var t = minified ? ' Minified ] ' : ' ] ';
	
		t = '[ ' + success + ' CAWeb ' + ver + ' ' + color + ' Colorscheme' + t;


		if (f.length){
			// if file is a scss change extension to css
			// if file has _ remove it
			// if minified add the .min
			e = e.replace('.scss', '.css');
			e = e.replace('_', '');
			e = minified ? e.replace('.css', '.min.css') : e;
			
			var fileName = 'caweb-' + ver + '-' + e;

			src(f)
			.pipe(
				sass({
					outputStyle: buildOutputStyle,
				})
			)
			.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName)) // compiled file
			.pipe(dest(outputCSSDir))
			.pipe(tap(function (file) {
				log(t + path.basename(fileName) + ' was created successfully.');
			}));
		}

	});
}

/**
 * Build CAWeb Theme Admin Scripts
 * 
 * @param {*} min Whether to build file minified or not
 */
async function buildAdminJS(min = false) {
	var minified = min ? '.min' : '';
	var t = minified ? ' Minified ] ' : ' ] ';
	t = '[ ' + success + ' CAWeb Admin JavaScript' + t;

	if (adminScripts.length){
		let js = src(adminScripts)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('admin' + minified + '.js')) // compiled file
		.pipe(tap(function (file) {
			log(t + path.basename(file.path) + ' was created successfully.');
		}))


		if (min) {
			js = js.pipe(uglify());
		}

		return js.pipe(dest(outputJSDir));
		
	}

}

/**
 * Build CAWeb Theme Frontend Scripts
 * 
 * @param {*} min Whether to build file minified or not
 * @param {*} ver Template version to build
 */
async function buildFrontendScripts(min = false, ver = templateVer) {
	var minified = min ? '.min' : '';
	var versionDir = JSAssetDir + 'cagov/version-' + ver;

	var core_js = 'design-system' != ver ? versionDir + '/cagov.core.js' : 'node_modules/@cagov/*/dist/index.js';
	var f = frontendScripts.concat(
			[core_js,
			versionDir + '/custom.js' ],
			a11yScripts,
	);

	var t = minified ? ' Minified ] ' : ' ] ';

	t = '[ ' + success + ' CAWeb ' + ver + ' JavaScript' + t;

	if (f.length){
		let js = src(f)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('caweb-' + ver + minified + '.js')) // compiled file
		.pipe(tap(function (file) {
			log(t + path.basename(file.path) + ' was created successfully.');
		}));

		if (min) {
			js = js.pipe(uglify());
		}

		js.pipe(dest(outputJSDir));
	}
}

/**
 * Build CAWeb Theme Customizer Scripts
 * 
 * @param {*} min Whether to build file minified or not
 */
async function buildCustomizerScripts(min = false) {
	var minified = min ? '.min' : '';
	var t = minified ? ' Minified ] ' : ' ] ';
	var t1 = '[ ' + success + ' CAWeb Theme Customizer JavaScript' + t;
	var t2 = '[ ' + success + ' CAWeb Theme Customizer Controls JavaScript' + t;

	if (themeCustomizerScripts.length){
		// Theme Customizer
		let js = src(themeCustomizerScripts)
			.pipe(lineec())
			.pipe(concat('theme-customizer' + minified + '.js')) // compiled file
			.pipe(tap(function (file) {
				log(t1 + path.basename(file.path) + ' was created successfully.');
			}))

		if (min) {
			js = js.pipe(uglify());
		}

		js = js.pipe(dest(outputJSDir));

	}

	if (themeCustomizerControlScripts.length){
		// Theme Customizer Controls
		js = src(themeCustomizerControlScripts)
			.pipe(lineec())
			.pipe(concat('theme-customizer-controls' + minified + '.js'))
			.pipe(tap(function (file) {
				log(t2 + path.basename(file.path) + ' was created successfully.');
			}));

		if (min) {
			js = js.pipe(uglify());
		}

		js = js.pipe(dest(outputJSDir));
	}

}
