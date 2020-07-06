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
const uglify = require('gulp-uglify-es').default; // Minifies JS files.

// HTML related plugins
const htmlbeautify = require('gulp-html-beautify'); // Beautify HTML/PHP files

// Image related plugins.
const imagemin = require( 'gulp-imagemin' ); // Minify PNG, JPEG, GIF and SVG images with imagemin.

// Utility related plugins.
const concat = require( 'gulp-concat' ); // Concatenates files.
const lineec = require( 'gulp-line-ending-corrector' ); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
const notify = require( 'gulp-notify' ); // Sends message notification to you.

const fs = require('fs'); // File System

const del = require('del'); // Delete plugin


/*
	CAWeb Admin Styles
*/
gulp.task('admin-css', parameterized( async function (_) {

	del( ['css/admin*.css'] );

	if ( _.params.prod ) {
		buildAdminStyles(true);
	}

	if ( _.params.dev ) {
		buildAdminStyles(false);
	}

	if( buildAll(_.params) ){
		buildAdminStyles(true);
		buildAdminStyles(false);
	}
}));


/*
	CAWeb Frontend Styles 
*/
gulp.task('frontend-css', parameterized( async function (_) {
	var version = undefined !== _.params.ver ? [ _.params.ver ] : config.availableVers;
	
	del( ['css/cagov-v*.css'] );

	version.forEach(function(v){
		if ( _.params.prod ) {
			buildFrontEndStyles(true, v);
		}
	
		if ( _.params.dev ) {
			buildFrontEndStyles(false, v);
		}
	
		if( buildAll(_.params) ){
			buildFrontEndStyles(false, v);
			buildFrontEndStyles(true, v);
		}
	});

}));

/*
	CAWeb BootStrap Admin Styles
*/
gulp.task('bootstrap-css', parameterized( async function (_) {

	del( ['css/bootstrap*.css'] );

	if ( _.params.prod ) {
		buildBootStrapStyles(true);
	}

	if ( _.params.dev ) {
		buildBootStrapStyles(false);
	}

	if( buildAll(_.params) ){
		buildBootStrapStyles(true);
		buildBootStrapStyles(false);
	}
}));

/*
	CAWeb Admin JavaScript
*/
gulp.task('admin-js', parameterized( async function (_) {

	del( ['js/admin*.js'] );

	if ( _.params.prod ) {
		buildAdminJS(true);
	}

	if ( _.params.dev ) {
		buildAdminJS(false);
	}

	if( buildAll(_.params) ){
		buildAdminJS(true);
		buildAdminJS(false);
	}
}));

/*
	CAWeb JavaScript
*/
gulp.task('caweb-js', parameterized( async function (_) {
	var version = undefined !== _.params.ver ? [ _.params.ver ] : config.availableVers;
	
	del( ['js/caweb-v*.js'] );

	version.forEach(function(v){
		if ( _.params.prod ) {
			buildCAWebJS(true, v);
		}
	
		if ( _.params.dev ) {
			buildCAWebJS(false, v);
		}
	
		if( buildAll(_.params) ){
			buildCAWebJS(true, v);
			buildCAWebJS(false, v);
		}
	});
	
}));

/*
	CAWeb BootStrap Admin Styles
*/
gulp.task('bootstrap-js', parameterized( async function (_) {

	del( ['js/bootstrap*.js'] );

	if ( _.params.prod ) {
		buildBootStrapJS(true);
	}

	if ( _.params.dev ) {
		buildBootStrapJS(false);
	}

	if( buildAll(_.params) ){
		buildBootStrapJS(true);
		buildBootStrapJS(false);
	}
}));

/*
	CAWeb Theme Customizer JavaScript
*/
gulp.task('customizer-js', parameterized( async function (_) {

	del( ['js/theme-customizer*.js'] );

	if ( _.params.prod ) {
		buildCustomizerJS(true);
	}

	if ( _.params.dev ) {
		buildCustomizerJS(false);
	}

	if( buildAll(_.params) ){
		buildCustomizerJS(true);
		buildCustomizerJS(false);
	}

}));


gulp.task('beautify', parameterized(async function(_) {
	var options = {indentSize: 2};
	var src = ['**/*.php'];

	if( _.params.hasOwnProperty('file') ){
		src = _.params.file;
	}
	
	gulp.src(src, {base: './'})
	  .pipe(htmlbeautify(options))
	  .pipe(gulp.dest('./'));
	
}));

/*
	CAWeb Build All CSS/JS and Beautify
*/
gulp.task('build', parameterized(async function(_){
	var version = undefined !== _.params.ver ? [ _.params.ver ] : config.availableVers;

	del( ['js/*.js', 'css/*.css'] );
	
	if ( _.params.prod ) {
		// Build Admin Styles
		buildAdminStyles(true);
		
		// Build Admin JS
		buildAdminJS(true);

		version.forEach(function(v){
			// Build Frontend Styles
			buildFrontEndStyles(true, v);

			// Build CAWeb JS
			buildCAWebJS(true, v);
		});

		// Build Bootstrap Styles
		buildBootStrapStyles(true);

		// Build Admin Bootstrap JS
		buildBootStrapJS(true);

		// Build Theme Customizer JS
		buildCustomizerJS(true);

	}

	if ( _.params.dev ) {
		// Build Admin Styles
		buildAdminStyles(false);
		
		// Build Admin JS
		buildAdminJS(false);

		version.forEach(function(v){
			// Build Frontend Styles
			buildFrontEndStyles(false, v);

			// Build CAWeb JS
			buildCAWebJS(false, v);
		});

		// Build Bootstrap Styles
		buildBootStrapStyles(false);

		// Build Admin Bootstrap JS
		buildBootStrapJS(false);

		// Build Theme Customizer JS
		buildCustomizerJS(false);

	}

	if( buildAll(_.params) ){
		// Build Admin Styles
		buildAdminStyles(true);
		buildAdminStyles(false);
		
		// Build Admin JS
		buildAdminJS(true);
		buildAdminJS(false);

		version.forEach(function(v){
			// Build Frontend Styles
			buildFrontEndStyles(true, v);
			buildFrontEndStyles(false, v);

			// Build CAWeb JS
			buildCAWebJS(true, v);
			buildCAWebJS(false, v);
		});

		// Build Bootstrap Styles
		buildBootStrapStyles(true);
		buildBootStrapStyles(false);

		// Build Admin Bootstrap JS
		buildBootStrapJS(true);
		buildBootStrapJS(false);

		// Build Theme Customizer JS
		buildCustomizerJS(true);
		buildCustomizerJS(false);

	}

}));


// Gulp Task Functions
async function buildAdminStyles( min = false){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var t = minified ? ' Minified' : '';
	t = '✅  CAWeb Admin Styles' + t;

	if( ! config.adminCSS.length )
		return;

	return gulp.src(config.adminCSS)
		.pipe(
			sass({
				outputStyle: buildOutputStyle,
			})
		)
		.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('admin' + minified + '.css')) // compiled file
		.pipe( notify({ title: t, message: '<%= file.relative %> was created successfully.', onLast: true }) )
		.pipe(gulp.dest('./css/'));
}

async function buildFrontEndStyles( min = false, ver = config.templateVer){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var versionDir = config.templateCSSAssetDir + 'version' + ver;
	var versionColorschemesDir = versionDir + '/colorscheme/';
	var colors = fs.readdirSync(versionColorschemesDir);

	colors.forEach(function(e){
		var f = [versionDir + '/cagov.core.css', 
				versionColorschemesDir + e, 
				config.templateCSSAssetDir + 'cagov.font-only.css'];
		f = f.concat( config.frontendCSS );
		f = f.concat( config.SCSSAssetDir + 'cagov/version' + ver + '/custom.scss' );
		var color = config.availableColors[e];
		var t = minified ? ' Minified' : '';
		t = '✅  CAWeb v' + ver + ' ' + color + ' Colorscheme' + t;

		if( ! f.length )
			return;

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
			.pipe(gulp.dest('./css/'))
			.pipe( notify({ title: t, message: '<%= file.relative %> was created successfully.', onLast: true }) );
		;
	});
}

async function buildBootStrapStyles( min = false ){
	var buildOutputStyle = min ? 'compressed' : 'expanded';
	var minified = min ? '.min' : '';
	var t = minified ? ' Minified' : '';
	t = '✅  CAWeb Admin Bootstrap Styles' + t;

	if( ! config.adminBootStrapCSS.length )
		return;

	return gulp.src(config.adminBootStrapCSS)
		.pipe(
			sass({
				outputStyle: buildOutputStyle,
			})
		)
		.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('bootstrap' + minified + '.css')) // compiled file
		.pipe( notify({ title: t, message: '<%= file.relative %> was created successfully.', onLast: true }) )
		.pipe(gulp.dest('./css/'));
}

async function buildAdminJS( min = false){
	var minified = min ? '.min' : '';
	var t = minified ? ' Minified' : '';
	t = '✅  CAWeb Admin JavaScript' + t;

	if( ! config.adminJS.length )
		return;

	let js = gulp.src(config.adminJS)
		.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('admin' + minified + '.js')) // compiled file
		.pipe( notify({ title: t, message: '<%= file.relative %> was created successfully.', onLast: true }) )


	if( min ){
		js = js.pipe(uglify());
	}

	return js.pipe(gulp.dest('./js/'));
}

async function buildBootStrapJS( min = false ){
	var minified = min ? '.min' : '';
	var t = minified ? ' Minified' : '';
	t = '✅  CAWeb Admin Bootstrap JavaScript' + t;

	if( ! config.adminBootStrapJS.length )
		return;

	let js = gulp.src(config.adminBootStrapJS)
		.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('bootstrap' + minified + '.js')) // compiled file
		.pipe( notify({ title: t, message: '<%= file.relative %> was created successfully.', onLast: true }) )


	if( min ){
		js = js.pipe(uglify());
	}

	return js.pipe(gulp.dest('./js/'));
}

async function buildCAWebJS( min = false, ver = config.templateVer){
	var minified = min ? '.min' : '';
	var versionDir = config.JSAssetDir + 'cagov/version' + ver;
	var f = config.frontendJS.concat( 
		[versionDir + '/cagov.core.js', 
		versionDir + '/custom.js'], 
		config.a11yJS);
	var t = minified ? ' Minified' : '';
	t = '✅  CAWeb v' + ver + ' JavaScript' + t;

	if( ! f.length )
		return;

	let js = gulp.src(f)
		.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('caweb-v' + ver + minified + '.js')) // compiled file
		.pipe( notify({ title: t, message: '<%= file.relative %> was created successfully.', onLast: true }) );

	if( min ){
		js = js.pipe(uglify());
	}

	return js.pipe(gulp.dest('./js/'));
}

async function buildCustomizerJS( min = false){
	var minified = min ? '.min' : '';
	var t = minified ? ' Minified' : '';
	var t1 = '✅  CAWeb Theme Customizer JavaScript' + t;
	var t2 = '✅  CAWeb Theme Customizer Controls JavaScript' + t;

	if( ! config.themeCustomizer.length )
		return;

	// Theme Customizer
	let js = gulp.src(config.themeCustomizer)
		.pipe( lineec() )
		.pipe(concat('theme-customizer' + minified + '.js')) // compiled file
		.pipe( notify({ title: t1, message: '<%= file.relative %> was created successfully.', onLast: true }) )
		 // Consistent Line Endings for non UNIX systems.

	if( min ){
		js = js.pipe(uglify());
	}

	js = js.pipe(gulp.dest('./js/'));

	// Theme Customizer Controls
	js = gulp.src(config.themeCustomizerControl)
		.pipe( lineec() )
		.pipe(concat('theme-customizer-controls' + minified + '.js'))
		.pipe( notify({ title: t2, message: '<%= file.relative %> was created successfully.', onLast: true }) );

	if( min ){
		js = js.pipe(uglify());
	}

	js = js.pipe(gulp.dest('./js/'));

}

function buildAll( params = {} ){
	var b = params.hasOwnProperty('all') || ! Object.keys(params).length;
	var p = params.hasOwnProperty('dev') || params.hasOwnProperty('prod');

	return  b || ! p ;
}

// DEV (Development Output)
gulp.task('dev', parameterized.series(
	'admin-css --dev', 
	'frontend-css --dev', 
	'bootstrap-css --dev', 
	'admin-js --dev', 
	'caweb-js --dev', 
	'bootstrap-js --dev', 
	'customizer-js --dev'
	) 
);

// PROD (Minified Output)
gulp.task('prod', parameterized.series(
	'admin-css --prod', 
	'frontend-css --prod', 
	'bootstrap-css --prod', 
	'admin-js --prod', 
	'caweb-js --prod', 
	'bootstrap-js --prod',
	'customizer-js --prod',
	) 
);

//gulp.task('build', parameterized.series('dev', 'prod') );
