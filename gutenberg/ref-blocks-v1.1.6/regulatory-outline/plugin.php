<?php

/**
 * Plugin Name: Regulatory outline
 * Plugin URI: TBD
 * Description: TBD
 * Version: 1.0.0
 * Author: California Office of Digital Innovation
 * @package cagov-design-system
 */

defined('ABSPATH') || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action('init', 'cagov_design_system_gutenberg_block_regulatory_outline');

function cagov_design_system_gutenberg_block_regulatory_outline()
{
    load_plugin_textdomain('cagov-design-system', false, basename(__DIR__) . '/languages');
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function cagov_design_system_register_regulatory_outline()
{

    if (!function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }

    wp_register_script(
        'ca-design-system-regulatory-outline-block',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-i18n'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );

    wp_register_style('ca-design-system-regulatory-outline-style', false);
    $style_css = file_get_contents(plugin_dir_path(__FILE__) . '/index.css', __FILE__);
    wp_add_inline_style('ca-design-system-regulatory-outline-style', $style_css);

    wp_register_style(
        'ca-design-system-regulatory-outline-style-editor',
        plugins_url('editor.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );


    register_block_type('cagov/regulatory-outline', array(
        'style' => 'ca-design-system-regulatory-outline-style',
        'editor_style' => 'ca-design-system-regulatory-outline-style-editor',
        'editor_script' => 'ca-design-system-regulatory-outline-block',
    ));
}
add_action('init', 'cagov_design_system_register_regulatory_outline');
