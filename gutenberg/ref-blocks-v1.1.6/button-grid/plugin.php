<?php

/**
 * Plugin Name: Card Grid
 * Plugin URI: TBD
 * Description: TBD
 * Version: 1.1.0
 * Author: California Office of Digital Innovation
 * @package ca-design-system
 */

defined('ABSPATH') || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action('init', 'ca_design_system_register_card_grid');

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function ca_design_system_register_card_grid()
{
    if (!function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }

    wp_register_script(
        'ca-design-system-button-grid-editor',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );

    wp_register_style( 'ca-design-system-button-grid-style', false );
    $style_css = file_get_contents(plugin_dir_path(__FILE__) . '/style.css', __FILE__);
    wp_add_inline_style('ca-design-system-button-grid-style', $style_css);

    wp_register_style(
        'ca-design-system-accordion-editor-style',
        plugins_url('editor.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );

    register_block_type('ca-design-system/button-grid', array(
        'style' => 'ca-design-system-button-grid-style',
        'editor_style' => 'ca-design-system-accordion-editor-style',
        'editor_script' => 'ca-design-system-button-grid-editor',
    ));
}
