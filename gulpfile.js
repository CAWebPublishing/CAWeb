/**
 * Gulpfile.
 *
 * Gulp with WordPress.
 *
 * Implements:
 *      1. Live reloads browser with BrowserSync.
 *      2. CSS: Sass to CSS conversion, error catching, Autoprefixing, Sourcemaps,
 *         CSS minification, and Merge Media Queries.
 *      3. JS: Concatenates & uglifies Vendor and Custom JS files.
 *      4. Images: Minifies PNG, JPEG, GIF and SVG images.
 *      5. Watches files for changes in CSS or JS.
 *      6. Watches files for changes in PHP.
 *      7. Corrects the line endings.
 *      8. InjectCSS instead of browser page reload.
 *      9. Generates .pot file for i18n and l10n.
 *
 * @tutorial https://github.com/ahmadawais/WPGulp
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */

/**
 * Load WPGulp Configuration.
 *
 * TODO: Customize your project in the wpgulp.js file.
 */
const config = require( './wpgulp.config.js' );

/**
 * Load Plugins.
 *
 * Load gulp plugins and passing them semantic names.
 */
const gulp = require( 'gulp' ); // Gulp of-course.
const parameterized = require('gulp-parameterized');

// CSS related plugins.
const sass = require( 'gulp-sass' ); // Gulp plugin for Sass compilation.

// JS related plugins.
const uglify = require('gulp-uglify'); // Minifies JS files.

// Image related plugins.
const imagemin = require( 'gulp-imagemin' ); // Minify PNG, JPEG, GIF and SVG images with imagemin.

// Utility related plugins.
const concat = require( 'gulp-concat' ); // Concatenates files.
const lineec = require( 'gulp-line-ending-corrector' ); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).

const fs = require('fs'); // File System

/* 
	CAWeb Admin Styles 
*/
gulp.task('admin-styles', parameterized( async function (_) {
	var noFlags = undefined === _.params.length || _.params.all;
	
	if ( _.params.prod ) {
		buildAdminStyles(true);
	}

	if ( _.params.dev ) {
		buildAdminStyles(false);
	}	

	if( noFlags ){
		buildAdminStyles(false);
	}
}));

/*
	CAWeb Styles (State Template v5)
*/
gulp.task('v5-styles', parameterized( async function (_) {
	var noFlags = undefined === _.params.length || _.params.all;

	if ( _.params.prod ) {
		buildVersionStyles(true, '5');
	}

	if ( _.params.dev ) {
		buildVersionStyles(false, '5');
	}	

	if( noFlags ){
		buildVersionStyles(false, '5');
		buildVersionStyles(true, '5');
	}
	
}));

/*
	CAWeb Styles (State Template v4 Legacy Version)
*/
gulp.task('v4-styles', parameterized( async function (_) {
	var noFlags = undefined === _.params.length || _.params.all;
	
	if ( _.params.prod ) {
		buildVersionStyles(true, '4');
	}

	if ( _.params.dev ) {
		buildVersionStyles(false, '4');
	}	

	if( noFlags ){
		buildVersionStyles(false, '4');
		buildVersionStyles(true, '4');
	}
}));

/*
	CAWeb Admin Java Script
*/
gulp.task('admin-js', parameterized( async function (_) {
	var noFlags = undefined === _.params.length || _.params.all;
	
	if ( _.params.prod ) {
		buildAdminJS(true);
	}

	if ( _.params.dev ) {
		buildAdminJS(false);
	}	

	if( noFlags ){
		buildAdminJS(false);
	}
}));

gulp.task('build', parameterized(async function(_){
	var noFlags = ! Object.getOwnPropertyNames(_.params).length || undefined !== _.params.all;
	var versionNum = undefined !== _.params.ver ? _.params.ver : false; 
	
	if ( _.params.prod ) {
		buildAdminStyles(true);

		if( versionNum ){
			buildVersionStyles(true, versionNum);
		}else{
			buildVersionStyles(true, '4');
			buildVersionStyles(true, '5');
		}
	}

	if ( _.params.dev ) {
		buildAdminStyles(false);
		
		if( versionNum ){
			buildVersionStyles(false, versionNum);
		}else{
			buildVersionStyles(false, '4');
			buildVersionStyles(false, '5');
		}
	}	

	if( noFlags ){
		buildAdminStyles(true);
		buildAdminStyles(false);

		if( versionNum ){
			buildVersionStyles(true, versionNum);
			buildVersionStyles(false, versionNum);
		}else{
			buildVersionStyles(true, '5');
			buildVersionStyles(false, '5');

			buildVersionStyles(true, '4');
			buildVersionStyles(false, '4');
		}
	}

}));

// Gulp Task Functions
async function buildAdminStyles( min = false){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';

	var f = [
		config.themeAssetDir + 'admin.css', 
		config.templateAssetDir + 'cagov.font-only.css'
	];

	return gulp.src(f)
		.pipe(
			sass({
				outputStyle: buildOutputStyle,
			})
		)
		.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('admin' + minified + '.css')) // compiled file
		.pipe(gulp.dest('./css/'));
}

async function buildVersionStyles( min = false, ver = config.templateVer){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var versionDir = config.templateAssetDir + 'version' + ver;
	var versionColorschemesDir = versionDir + '/colorscheme/';
	var colors = fs.readdirSync(versionColorschemesDir);

	colors.forEach(function(e){
		var f = [versionDir + '/cagov.core.css', versionColorschemesDir + e];
		f = f.concat( config.commonFiles );
		f = f.concat( versionDir + '/custom.css' );

		var fileName = 'cagov-v' + ver + '-' +
			( minified ? e.replace('.css', '.min.css') : e);

		return gulp.src(f)
			.pipe(
				sass({
					outputStyle: buildOutputStyle,
				})
			)

			.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
			.pipe(concat(fileName )) // compiled file
			.pipe(gulp.dest('./css/'));
	});
}

async function buildAdminJS( min = false){
	var minified = min ? '.min' : '';

	let js = gulp.src(config.themeAdminJS)
		.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('admin' + minified + '.js')); // compiled file

	if( min ){
		js = js.pipe(uglify());
	}

	return js.pipe(gulp.dest('./js/'));
}
//
// DEV (Development Output)
//
gulp.task('dev', parameterized.series('v5-styles --dev', 'v4-styles --dev', 'admin-styles --dev') );

// PROD (Minified Output)
gulp.task('prod', parameterized.series('v5-styles --prod', 'v4-styles --prod', 'admin-styles --prod') );