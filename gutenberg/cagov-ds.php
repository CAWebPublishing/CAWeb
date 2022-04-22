<?php
/**
 * CAGov Design System Extension Plugin
 *
 * @source https://github.com/cagov/design-system/
 *
 *
 * @wordpress-plugin
 * Plugin Name: CAGov Design System Extension Plugin
 * Plugin URI:
 * Description: CAGov Design System Components
 * Version:     1.0.0
 * Author:      Danny Guzman
 * Author URI:
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: cagov-design-system
 * Domain Path: /languages
 * 
 * @package cagov-ds
 *
 */

define( 'CAGOV_DS_ABSPATH', __DIR__ );
define( 'CAGOV_DS_URI', esc_url(str_replace($_SERVER['DOCUMENT_ROOT'], '', __DIR__)) );

add_action( 'init', 'cagov_ds_enqueue_block_editor_assets' );
// add_action( 'wp_enqueue_scripts', 'cagov_ds_wp_enqueue_scripts', 99999999 );

function cagov_ds_enqueue_block_editor_assets(){
    global $wp_version;

    $is_under_5_8 = version_compare($wp_version, "5.8", '<') ? '' : '_all';

    add_filter("block_categories$is_under_5_8", 'cagov_ds_gutenberg_categories', 10, 2);

    $deps = array(
        'jquery',
        'wp-blocks', 
        'wp-element', 
        'wp-editor',
        'wp-i18n',
        'wp-block-editor',
        'wp-rich-text'
    );

    wp_register_script( 'cagov-ds-gutenberg', CAGOV_DS_URI . '/js/gutenberg.js', $deps, '1.0.0', true );

    wp_register_style( 'cagov-ds-gutenberg', CAGOV_DS_URI . '/css/gutenberg.css', array(), '1.0.0' );
    wp_register_style( 'cagov-ds-gutenberg-style', CAGOV_DS_URI . '/css/cagov-design-system.css', array(), '1.0.0' );

    // CA Design System Gutenberg Blocks
    foreach( glob(CAGOV_DS_ABSPATH . '/blocks/*/') as $block ){
        $name = basename($block);
        
        register_block_type(strtolower(CAGOV_DS_ABSPATH . "/blocks/$name/build"));
    }
}

function cagov_ds_wp_enqueue_scripts(){
    $core_css = CAGOV_DS_URI . '/css/cagov.core.css';
	$core_js = CAGOV_DS_URI . '/js/cagov.core.js';

	wp_enqueue_style( 'cagov-design-system-style', $core_css, array(), '1.0.0' );

    
	wp_enqueue_script( 'cagov-design-system-script', $core_js, array( '' ), '1.0.0', true );

}

function cagov_ds_gutenberg_categories($categories, $post) {
    return array_merge(
        array(
            array(
                'slug'  => 'ca-design-system',
                'title' => 'CA Design System',
            ),
        ),
        array(
            array(
                'slug'  => 'ca-design-system-utilities',
                'title' => 'CA Design System: Utilities',
            ),
        ),
        $categories,
    );
}