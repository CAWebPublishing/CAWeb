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
import wpGulpConfig from './wpgulp.config.js';

/**
 * Load Plugins.
 *
 * Load gulp plugins and passing them semantic names.
 */
import gulp from 'gulp';

// CSS related plugins.
import nodesass from 'node-sass';
import gulpsass from 'gulp-sass';

// JS related plugins.
import gulpuglify from 'gulp-uglify-es'; // Minifies JS files.

// Utility related plugins.
import { deleteAsync } from 'del'; // Delete plugin
import yargs from 'yargs';
import lineec from 'gulp-line-ending-corrector'; // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
import concat from 'gulp-concat'; // Concatenates files.
import tap from 'gulp-tap';
import log from 'fancy-log';
import path from 'path';
import fs from 'fs'; // File System


const {
	success,
	availableVers,
	availableColors,
	assetDir,
	outputCSSDir,
	outputJSDir,
	frontendStyles,
	frontendScripts,
	a11yScripts,
	adminStyles,
	adminScripts,
	customizerScripts,
	customizerControlScripts
}  = wpGulpConfig;

const {task,src, dest, parallel}  = gulp;

const sass = gulpsass(nodesass); // Gulp plugin for Sass compilation.

const uglify = gulpuglify.default;

var argv = yargs(process.argv).argv;


/**
 * Task to build all CAWeb Theme Styles/Scripts
 */
task('build', async function () {
	await deleteAsync(['js/*.js', 'css/*.css']);

	parallel(
		'frontend-css',
		'frontend-js',
		'admin-css',
		'admin-js',
		'customizer-js'
	)();
});

/**
 * Task to build CAWeb Theme Admin Styles
 */
task('admin-css', async function(){
	await deleteAsync(['css/admin*.css']);
	
	buildAdminStyles(true);
	buildAdminStyles(false);
});

/**
 * Task to build CAWeb Theme Admin Scripts
 */
task('admin-js', async function () {

	await deleteAsync(['js/admin*.js']);

	buildAdminJS(true);
	buildAdminJS(false);

});

/**
 * Task to build CAWeb FrontEnd Styles
 */
task('frontend-css', async function () {
	var version = undefined !== argv.ver ? [argv.ver] : availableVers;

	await deleteAsync(['css/caweb-*.css']);
	
	version.forEach(function (v) {
		buildFrontEndStyles(false, v);
		buildFrontEndStyles(true, v);
	});

});

/**
 *	Task to build CAWeb Theme Frontend Scripts
 */
task('frontend-js', async function () {
	var version = undefined !== argv.ver ? [argv.ver] : availableVers;
	
	await deleteAsync(['js/caweb-*.js']);

	version.forEach(function (v) {
		buildFrontendScripts(true, v);
		buildFrontendScripts(false, v);
	});

});

/**
 * Task to build CAWeb Theme Customizer Scripts
 */
task('customizer-js', async function () {

	await deleteAsync(['js/theme-customizer*.js']);

	buildCustomizerScripts(true);
	buildCustomizerScripts(false);

});

/**
 * Build CAWeb Theme FrontEnd Styles
 * 
 * @param {*} min Whether to build file minified or not
 * @param {*} ver Template version to build
 */
async function buildFrontEndStyles(min = false, ver = templateVer) {
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var versionDir = `${assetDir}/css/cagov/version-${ver}`;
	var versionColorschemesDir = `${versionDir}/colorscheme/`;

	var colors = fs.readdirSync(versionColorschemesDir).filter(file => path.extname(file) === '.css');

	var coreCSS = [`${versionDir}/cagov.core.css`];
	
	colors.forEach(function (scheme) {
		// file order is important here
		// core template css, 1st 
		// core colorscheme css, 2nd 
		// font css, 3rd 
		// theme frontend css, 3rd 
		// template custom frontend css, 3rd 
		var files = coreCSS.concat(
			`${versionColorschemesDir}${scheme}`,
			`${assetDir}/css/cagov/cagov.font-only.css`,
			frontendStyles,
			`${assetDir}/scss/cagov/version-${ver}/custom.scss`
			);
		
		var color = availableColors[scheme];
		var title = `[ ${success} CAWeb ${ver} ${color} Colorscheme` + (minified ? ' Minified ] ' : ' ] ');

		if (files.length){
			// if file is a scss change extension to css
			// if file has _ remove it
			// if minified add the .min
			scheme = scheme.replace('.scss', '.css').replace('_', '');
			scheme = minified ? scheme.replace('.css', '.min.css') : scheme;
			
			src(files)
			.pipe(
				sass({
					outputStyle: buildOutputStyle,
				})
			)
			.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(`caweb-${ver}-${scheme}`)) // compiled file
			.pipe(dest(outputCSSDir))
			.pipe(tap(function (file) {
				log(title + path.basename(file.path) + ' was created successfully.');
			}));
		}

	});
}

/**
 * Build CAWeb Theme Frontend Scripts
 * 
 * @param {*} min Whether to build file minified or not
 * @param {*} ver Template version to build
 */
async function buildFrontendScripts(min = false, ver = templateVer) {
	var minified = min ? '.min' : '';
	var versionDir = `${assetDir}/js/cagov/version-${ver}`;

	var coreJS = [ `${versionDir}/cagov.core.js` ];
	
	// file order is important here
	// frontend scripts, 1st 
	// core template js, 2nd,
	// the templates custom js, 3rd
	// a11y js, last 
	var files = frontendScripts.concat(
			coreJS, 
			versionDir + '/custom.js',
			a11yScripts,
	);

	var title = `[ ${success} CAWeb ${ver} JavaScript` + (minified ? ' Minified ] ' : ' ] ');

	if (files.length){
		let js = src(files)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat(`caweb-${ver}${minified}.js`)) // compiled file
		.pipe(tap(function (file) {
			log(title + path.basename(file.path) + ' was created successfully.');
		}));

		if (min) {
			js = js.pipe(uglify());
		}

		js.pipe(dest(outputJSDir));
	}
}

/**
 * Build CAWeb Theme Admin Styles
 * 
 * @param {*} min Whether to build file minified or not
 */
async function buildAdminStyles(min = false) {
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var title = `[ ${success} CAWeb Admin Styles` + (minified ? ' Minified ] ' : ' ] ');

	if (adminStyles.length){
		src(adminStyles)
		.pipe(
			sass({
				outputStyle: buildOutputStyle,
			})
		)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat(`admin${minified}.css`)) // compiled file
		.pipe(tap(function (file) {
			log(title + path.basename(file.path) + ' was created successfully.');
		}))
		.pipe(dest(outputCSSDir));
	}

}

/**
 * Build CAWeb Theme Admin Scripts
 * 
 * @param {*} min Whether to build file minified or not
 */
async function buildAdminJS(min = false) {
	var minified = min ? '.min' : '';
	var title = `[ ${success} CAWeb Admin JavaScript` + ( minified ? ' Minified ] ' : ' ] ' );

	if (adminScripts.length){
		let js = src(adminScripts)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat(`admin${minified}.js`)) // compiled file
		.pipe(tap(function (file) {
			log(title + path.basename(file.path) + ' was created successfully.');
		}))


		if (min) {
			js = js.pipe(uglify());
		}

		return js.pipe(dest(outputJSDir));
		
	}

}

/**
 * Build CAWeb Theme Customizer Scripts
 * 
 * @param {*} min Whether to build file minified or not
 */
async function buildCustomizerScripts(min = false) {
	var minified = min ? '.min' : '';

	var title1 = `[ ${success} CAWeb Theme Customizer JavaScript` + ( minified ? ' Minified ] ' : ' ] ' );
	var title2 = `[ ${success} CAWeb Theme Customizer Controls JavaScript` + ( minified ? ' Minified ] ' : ' ] ' );

	if (customizerScripts.length){
		// Theme Customizer
		let js = src(customizerScripts)
			.pipe(lineec())
			.pipe(concat(`theme-customizer${minified}.js`)) // compiled file
			.pipe(tap(function (file) {
				log(title1 + path.basename(file.path) + ' was created successfully.');
			}))

		if (min) {
			js = js.pipe(uglify());
		}

		js = js.pipe(dest(outputJSDir));

	}

	if (customizerControlScripts.length){
		// Theme Customizer Controls
		let js = src(customizerControlScripts)
			.pipe(lineec())
			.pipe(concat(`theme-customizer-controls${minified}.js`))
			.pipe(tap(function (file) {
				log(title2 + path.basename(file.path) + ' was created successfully.');
			}));

		if (min) {
			js = js.pipe(uglify());
		}

		js = js.pipe(dest(outputJSDir));
	}

}