/**
 * Load WPGulp Configuration.
 *
 * TODO: Customize your project in the wpgulp.js file.
 */
 const {gutenbergEditorCSS, designSystemCSS, gutenbergEditorJS, designSystemJS } = require('./wpgulp.config.js');

/**
 * Load Plugins.
 *
 * Load gulp plugins and passing them semantic names.
 */
 const {task, src, dest, parallel}  = require('gulp'); // Gulp of-course.
 const shell = require('gulp-shell')

// CSS related plugins.
const sass = require('gulp-sass')(require('node-sass')); // Gulp plugin for Sass compilation.

// Utility related plugins.
const del = require('del'); // Delete plugin
const lineec = require('gulp-line-ending-corrector'); // Consistent Line Endings for non UNIX systems. Gulp Plugin for Line Ending Corrector (A utility that makes sure your files have consistent line endings).
const concat = require('gulp-concat'); // Concatenates files.
var tap = require('gulp-tap');
var log = require('fancy-log');
var path = require('path');
const fs = require('fs'); // File System
var glob = require("glob")

const isNotFile = fileName => {
	return ! fs.lstatSync(fileName).isFile()
}

/**
 * Task to build all CAGov Design System CSS/JS
 */
task('build', async function(){
	var blocks = fs.readdirSync('./blocks/').map(fileName => {
			return path.join('./blocks/', fileName)
		}).filter(isNotFile);

	if ( !blocks.length ){
		fs.writeFileSync('css/gutenberg.css', '');
		fs.writeFileSync('css/cagov-design-system.css', '');
		fs.writeFileSync('js/gutenberg.js', '');
		fs.writeFileSync('js/cagov-design-system.js', '');
	}else{
		parallel(
			buildGutenberEditorCSS,
			buildGutenberEditorJS,
			buildDesignSystemCSS,
			buildDesignSystemJS		
		)();
	}
	
});

/**
 * Task to build all CAGov Design System Component Blocks
 */
task('build-blocks', buildGutenbergBlocks );

/**
 * Runs Gutenberg Block build script 
 */
async function buildGutenbergBlocks(){
    src(['./blocks/*/'])
        .pipe(tap (function(file){
			shell.task("cd " + file.path + " && npm run build")()
        }))

}

/**
 * Build Gutenberg Block Editor CSS file
 */
async function buildGutenberEditorCSS(){
	del(['css/gutenberg.css']);

    // Gutenberg Block Editor CSS
    if (gutenbergEditorCSS.length){
		src(gutenbergEditorCSS.concat(designSystemCSS))
			.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
			.pipe(concat('gutenberg.css')) // compiled file
			.pipe(dest('css/'))
			.pipe(tap(function (file) {
				log('[ ✅ Gutenberg Block Editor CSS ] ' + path.basename(file.path) + ' was created successfully.');
			}))
	}
}

/**
 * Build Gutenberg Block Editor JS file
 */
async function buildGutenberEditorJS(){
	del(['js/gutenberg.js']);
	
    // Gutenberg Block Editor JS
	if (gutenbergEditorJS.length){
		src(gutenbergEditorJS)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('gutenberg.js')) // compiled file
		.pipe(dest('js/'))
		.pipe(tap(function (file) {
			log('[ ✅ Gutenberg Block Editor JS ] ' + path.basename(file.path) + ' was created successfully.');
		}))
	}

}

/**
 * Build Design System CSS file
 */
async function buildDesignSystemCSS(){
	del(['css/cagov-design-system.css']);

	// Design System Front End CSS
	if (designSystemCSS.length){
		src(designSystemCSS)
		.pipe(
			sass({
				outputStyle: 'expanded',
			})
		)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('cagov-design-system.css')) // compiled file
		.pipe(dest('css/'))
		.pipe(tap(function (file) {
			log('[ ✅ Design System Frontend CSS ] ' + path.basename(file.path) + ' was created successfully.');
		}))
	}

}

/**
 * Build Design System JS file
 */
async function buildDesignSystemJS(){
	del(['js/cagov-design-system.js']);

	// Design System Front End JS
	if (designSystemJS.length){
		src(designSystemJS)
		.pipe(lineec()) // Consistent Line Endings for non UNIX systems.
		.pipe(concat('cagov-design-system.js')) // compiled file
		.pipe(dest('js/'))
		.pipe(tap(function (file) {
			log('[ ✅ Design System Frontend JS ] ' + path.basename(file.path) + ' was created successfully.');
		}))
	}
}