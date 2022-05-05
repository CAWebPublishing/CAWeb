<?php
/**
 * Plugin Name: ca.gov Design System Gutenberg blocks extension plugin
 *
 * @source https://github.com/cagov/design-system/
 * Plugin URI: https://github.com/cagov/design-system-wordpress-gutenberg
 * Description: Integrate the <a href="https://designsystem.webstandards.ca.gov">State of California Design System</a> into the WordPress Gutenberg editor.
 * Author: Office of Digital Innovation
 * Author URI: https://digital.ca.gov
 * Version: 1.2.0
 * License: MIT
 * License URI: https://opensource.org/licenses/MIT
 * Text Domain: cagov-design-system
 *
 * @package  cagov-design-system
 * @author   Office of Digital Innovation <info@digital.ca.gov>
 * @license  https://opensource.org/licenses/MIT MIT
 * @link     https://github.com/cagov/design-system-wordpress-gutenberg#README
 * @docs https://designsystem.webstandards.ca.gov
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Plugin constants.
define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG', __DIR__ );
define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION', '1.2.0.3' );
define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG_URI', esc_url( str_replace( $_SERVER['DOCUMENT_ROOT'], '', __DIR__ ) ) );
define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG__DEBUG', true ); // Can associate with env variable later

// define( 'CAGOV_DESIGN_SYSTEM_BUNDLE', "https://cdn.designsystem.webstandards.ca.gov/bundles/v1.0.0/cagov-design-system.min.js" ); // Bundle
// define( 'CAGOV_DESIGN_SYSTEM_BUNDLE', "https://cdn.designsystem.webstandards.ca.gov/bundles/v1.0.0/cagov-design-system.main.js" ); // Bundle
// define( 'CAGOV_DESIGN_SYSTEM_BUNDLE', "https://cdn.designsystem.webstandards.ca.gov/bundles/v1.0.0/cagov-design-system.staging.js" ); // Bundle
define( 'CAGOV_DESIGN_SYSTEM_BUNDLE', 'https://cdn.designsystem.webstandards.ca.gov/bundles/v1.0.0/cagov-design-system.development.js' ); // Bundle instructions
define( 'CAGOV_DESIGN_SYSTEM_BUNDLE_LOCAL', CAGOV_DESIGN_SYSTEM_GUTENBERG_URI . '/build/js/cagov-design-system.core.js' ); // Bundle instructions

add_action( 'init', 'cagov_ds_gutenberg_enqueue_block_editor_assets' );
// add_action( 'wp_enqueue_scripts', 'cagov_ds_gutenberg_wp_enqueue_scripts', 99999 ); // Not needed yet but very likely will be.


/**
 * Load custom styles
 */
function cagov_ds_gutenberg_wp_enqueue_scripts() {
	// wp_enqueue_style( 'cagov-design-system-style', $core_css, array(), CAGOV_DESIGN_SYSTEM_BUNDLE ); // For debugging, Design System bundle has no CSS, but can use this for debugging when there is a bug in the Design System.
}

function cagov_ds_gutenberg_enqueue_header_scripts() {
	$handle  = 'cagov-design-system-components-script';
	$src     = CAGOV_DESIGN_SYSTEM_BUNDLE_LOCAL;
	$deps    = array();
	$version = CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION;
	wp_enqueue_script( $handle, $src, $deps, $version, true );
}

function cagov_ds_gutenberg_add_type_attribute( $tag, $handle, $src ) {
	// Register script as module
	if ( 'cagov-design-system-components-script' !== $handle ) {
		return $tag;
	}
	$tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';

	return $tag;
}


/**
 * Include Gutenberg Block assets by getting the index file of each block build file.
 */
function cagov_ds_gutenberg_enqueue_block_editor_assets() {
	global $wp_version;

	$is_under_5_8 = version_compare( $wp_version, '5.8', '<' ) ? '' : '_all';

	add_filter( "block_categories$is_under_5_8", 'cagov_ds_gutenberg_categories', 10, 2 );

	add_action( 'admin_enqueue_scripts', 'cagov_ds_gutenberg_enqueue_header_scripts', 10 );
	add_action( 'wp_enqueue_scripts', 'cagov_ds_gutenberg_enqueue_header_scripts', 10 );
	add_filter( 'script_loader_tag', 'cagov_ds_gutenberg_add_type_attribute', 10, 3 );

	add_filter( 'allowed_block_types', 'cagov_ds_gutenberg_allowed_block_types' );

	// Register shared packages.
	// @TODO check performance after a few components are re-mapped
	$deps = array(
		// 'jquery', (DEPRECATING: Let's not use jQuery with React.)
		'wp-blocks',
		'wp-element',
		'wp-editor',
		'wp-i18n',
		'wp-block-editor',
		'wp-rich-text',
	);

	// Register compiled Gutenberg Block bundles.
	if ( false === CAGOV_DESIGN_SYSTEM_GUTENBERG__DEBUG ) {
		wp_register_script( 'cagov-design-system-gutenberg', cagov_ds_gutenberg_get_min_file( '/build/js/gutenberg.js', 'js' ), $deps, CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION, true );
		wp_register_style( 'cagov-design-system-gutenberg', cagov_ds_gutenberg_get_min_file( '/build/css/gutenberg.css' ), array(), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION );
		wp_register_style( 'cagov-design-system-gutenberg-style', cagov_ds_gutenberg_get_min_file( '/build/css/cagov-design-system.css' ), array(), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION );

		// Register all CA Design System Gutenberg Blocks.
		foreach ( glob( CAGOV_DESIGN_SYSTEM_GUTENBERG . '/blocks/*/' ) as $block ) {
			$name = basename( $block );
			register_block_type( strtolower( CAGOV_DESIGN_SYSTEM_GUTENBERG . "/blocks/$name/build" ) );
		}
	} else {
		// Load `src` code from Gutenberg blocks editor.
		wp_register_script( 'cagov-design-system-gutenberg', cagov_ds_gutenberg_get_min_file( '/build/js/gutenberg.debug.js', 'js' ), $deps, CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION, true );
		wp_register_style( 'cagov-design-system-gutenberg', cagov_ds_gutenberg_get_min_file( '/build/css/gutenberg.debug.css' ), array(), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION );
		wp_register_style( 'cagov-design-system-gutenberg-style', cagov_ds_gutenberg_get_min_file( '/build/css/cagov-design-system.debug.css' ), array(), CAGOV_DESIGN_SYSTEM_GUTENBERG__VERSION );

		// Register all CA Design System Gutenberg Blocks.
		foreach ( glob( CAGOV_DESIGN_SYSTEM_GUTENBERG . '/blocks/*/' ) as $block ) {
			$name = basename( $block );
			register_block_type( strtolower( CAGOV_DESIGN_SYSTEM_GUTENBERG . "/blocks/$name/src" ) );
		}
	}
}

/**
 * Register Gutenberg Blocks categories to the Block editor
 */
function cagov_ds_gutenberg_categories( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug'  => 'cagov-design-system',
				'title' => 'CA Design System',
			),
		),
		array(
			array(
				'slug'  => 'cagov-design-system-utilities',
				'title' => 'CAGov Design System: Utilities',
			),
		),
		$categories,
	);
}

/**
 * Load Minified Version of a file
 *
 * @param  string $f File to load.
 * @param  mixed  $ext Extension of file, default css.
 *
 * @return string
 */
function cagov_ds_gutenberg_get_min_file( $f, $ext = 'css' ) {
	/* if a minified version exists load it */
	if ( file_exists( CAGOV_DESIGN_SYSTEM_GUTENBERG . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
		return CAGOV_DESIGN_SYSTEM_GUTENBERG_URI . str_replace( ".$ext", ".min.$ext", $f );
	} else {
		return CAGOV_DESIGN_SYSTEM_GUTENBERG_URI . $f;
	}
}

/** If we want to remove any blocks or patterns from Gutenberg, this is how we can do it something like this. */
function cagov_ds_gutenberg_allowed_block_types( $allowed_blocks ) {
	remove_theme_support( 'core-block-patterns' );
	// Return the desired components
	return array(
		'core/image',
		'core/paragraph',
		'core/button',
		'core/table',
		'core/heading',
		'core/list',
		'core/custom-html',
		'core/classic',
		'cagov/ds-accordion',
		// 'cagov/card', // Missing but necessary.
		'cagov/ds-link-grid',
		'cagov/ds-feature-card',
		'cagov/ds-page-alert',
		'cagov/ds-regulatory-outline',
		'cagov/ds-step-list',
	);
}
