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

// HTML related plugins
const htmlbeautify = require('gulp-html-beautify'); // Beautify HTML/PHP files

// Image related plugins.
const imagemin = require( 'gulp-imagemin' ); // Minify PNG, JPEG, GIF and SVG images with imagemin.

// Utility related plugins.
const concat = require( 'gulp-concat' ); // Concatenates files.
const lineec = require( 'gulp-line-ending-corrector' ); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
const notify = require( 'gulp-notify' ); // Sends message notification to you.

const fs = require('fs'); // File System

/*
	CAWeb Admin Styles
*/
gulp.task('admin-css', parameterized( async function (_) {
	var noFlags = undefined === _.params.length || _.params.all;

	if ( _.params.prod ) {
		buildAdminStyles(true);
	}

	if ( _.params.dev ) {
		buildAdminStyles(false);
	}

	if( noFlags ){
		buildAdminStyles(true);
		buildAdminStyles(false);
	}
}));

/*
	CAWeb Styles (State Template v5)
*/
gulp.task('v5-css', parameterized( async function (_) {
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
gulp.task('v4-css', parameterized( async function (_) {
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
	CAWeb Admin JavaScript
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
		buildAdminJS(true);
		buildAdminJS(false);
	}
}));

/*
	CAWeb FrontEnd JavaScript
*/
gulp.task('frontend-js', parameterized( async function (_) {
	var noFlags = undefined === _.params.length || _.params.all;

	if ( _.params.prod ) {
		buildFrontEndJS(true);
	}

	if ( _.params.dev ) {
		buildFrontEndJS(false);
	}

	if( noFlags ){
		buildFrontEndJS(true);
		buildFrontEndJS(false);
	}
}));

/*
	CAWeb Theme Customizer JavaScript
*/
gulp.task('customizer-js', parameterized( async function (_) {
	var noFlags = undefined === _.params.length || _.params.all;

	if ( _.params.prod ) {
		buildThemeCustomizerJS(true);
	}

	if ( _.params.dev ) {
		buildThemeCustomizerJS(false);
	}

	if( noFlags ){
		buildThemeCustomizerJS(true);
		buildThemeCustomizerJS(false);
	}

}));


gulp.task('beautify', async function() {
	var options = {indentSize: 2};
	gulp.src(['./*.php', './*.html'], {base: './'})
	  .pipe(htmlbeautify(options))
	  .pipe(gulp.dest('./'))
  });

/*
	CAWeb Build All CSS/JS and Beautify
*/
gulp.task('build', parameterized(async function(_){
	var noFlags = ! Object.getOwnPropertyNames(_.params).length || undefined !== _.params.all;
	var versionNum = undefined !== _.params.ver ? _.params.ver : false;

	if ( _.params.prod ) {
		// Build Admin Styles
		buildAdminStyles(true);

		// Build Version Styles
		if( versionNum ){
			buildVersionStyles(true, versionNum);
		}else{
			buildVersionStyles(true, '4');
			buildVersionStyles(true, '5');
		}

		// Build Admin JS
		buildAdminJS(true);

		// Build Frontend JS
		buildFrontEndJS(true);

		// Build Theme Customizer JS
		buildThemeCustomizerJS(true);

	}

	if ( _.params.dev ) {
		// Build Admin Styles
		buildAdminStyles(false);

		// Build Version Styles
		if( versionNum ){
			buildVersionStyles(false, versionNum);
		}else{
			buildVersionStyles(false, '4');
			buildVersionStyles(false, '5');
		}

		// Build Admin JS
		buildAdminJS(false);

		// Build Frontend JS
		buildFrontEndJS(false);

		// Build Theme Customizer JS
		buildThemeCustomizerJS(false);

	}

	if( noFlags ){
		// Build Admin Styles
		buildAdminStyles(true);
		buildAdminStyles(false);

		// Build Version Styles
		if( versionNum ){
			buildVersionStyles(true, versionNum);
			buildVersionStyles(false, versionNum);
		}else{
			buildVersionStyles(true, '5');
			buildVersionStyles(false, '5');

			buildVersionStyles(true, '4');
			buildVersionStyles(false, '4');
		}

		// Build Admin JS
		buildAdminJS(true);
		buildAdminJS(false);

		// Build Frontend JS
		buildFrontEndJS(true);
		buildFrontEndJS(false);

		// Build Theme Customizer JS
		buildThemeCustomizerJS(true);
		buildThemeCustomizerJS(false);

	}

}));


// Gulp Task Functions
async function buildAdminStyles( min = false){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';

	return gulp.src(config.themeAdminCSS)
		.pipe(
			sass({
				outputStyle: buildOutputStyle,
			})
		)
		.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('admin' + minified + '.css')) // compiled file
		.pipe( notify({ title: '✅  CAWeb Admin Styles', message: '<%= file.relative %> was created successfully.', onLast: true }) )
		.pipe(gulp.dest('./css/'));
}

async function buildVersionStyles( min = false, ver = config.templateVer){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var versionDir = config.templateCSSAssetDir + 'version' + ver;
	var versionColorschemesDir = versionDir + '/colorscheme/';
	var colors = fs.readdirSync(versionColorschemesDir);

	colors.forEach(function(e){
		var f = [versionDir + '/cagov.core.css', versionColorschemesDir + e];
		f = f.concat( config.commonCSSFiles );
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
		.pipe(concat('admin' + minified + '.js')) // compiled file
		.pipe( notify({ title: '✅  CAWeb Admin JavaScript', message: '<%= file.relative %> was created successfully.', onLast: true }) )


	if( min ){
		js = js.pipe(uglify());
	}

	return js.pipe(gulp.dest('./js/'));
}

async function buildFrontEndJS( min = false){
	var minified = min ? '.min' : '';

	let js = gulp.src(config.commonJSFiles)
		.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('frontend' + minified + '.js')) // compiled file
		.pipe( notify({ title: '✅  CAWeb Front End JavaScript', message: '<%= file.relative %> was created successfully.', onLast: true }) );

	if( min ){
		js = js.pipe(uglify());
	}

	return js.pipe(gulp.dest('./js/'));
}

async function buildThemeCustomizerJS( min = false){
	var minified = min ? '.min' : '';

	// Theme Customizer
	let js = gulp.src(config.themeCustomizer)
		.pipe( lineec() )
		.pipe(concat('theme-customizer' + minified + '.js')) // compiled file
		.pipe( notify({ title: '✅  CAWeb Theme Customizer JavaScript', message: '<%= file.relative %> was created successfully.', onLast: true }) )
		 // Consistent Line Endings for non UNIX systems.

	if( min ){
		js = js.pipe(uglify());
	}

	js = js.pipe(gulp.dest('./js/'));

	// Theme Customizer Controls
	js = gulp.src(config.themeCustomizerControl)
		.pipe( lineec() )
		.pipe(concat('theme-customizer-controls' + minified + '.js'));

	if( min ){
		js = js.pipe(uglify());
	}

	js = js.pipe(gulp.dest('./js/'));

}

//
// DEV (Development Output)
//
gulp.task('dev', parameterized.series('v5-css --dev', 'v4-css --dev', 'admin-css --dev', 'admin-js --dev', 'frontend-js --dev', 'customizer-js --dev') );

// PROD (Minified Output)
gulp.task('prod', parameterized.series('v5-css --prod', 'v4-css --prod', 'admin-css --prod', 'admin-js --prod', 'frontend-js --prod', 'customizer-js --prod') );

//gulp.task('build', parameterized.series('dev', 'prod') );
