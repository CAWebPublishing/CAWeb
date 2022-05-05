<?php

/**
 * Plugin Name: Page Alert
 * Plugin URI: TBD
 * Description: A departmental alert box. Appears on this website, beneath the site navigation on the homepage. Provides brief, important or time-sensitive information. It can include a hyperlink, but not a button or image.
 * Version: 1.1.0
 * Author: California Office of Digital Innovation
 * @package ca-design-system
 */

defined('ABSPATH') || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action('init', 'cagov_page_alert');

function cagov_page_alert()
{
    load_plugin_textdomain('ca-design-system', false, basename(__DIR__) . '/languages');
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function ca_design_system_register_page_alert()
{
    if (!function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }

    // Register custom web component
    wp_register_script(
        'ca-design-system-page-alert-web-component',
        plugins_url('web-component.js', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'web-component.js'),
    );

    wp_register_script(
        'ca-design-system-page-alert',
        plugins_url('block.js', __FILE__),
        false, // array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore', 'moment', 'ca-design-system-page-alert-web-component'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js'),
    );

	wp_register_style( 'ca-design-system-page-alert-style', false );
	$style_css = file_get_contents(plugin_dir_path(__FILE__) . '/index.css', __FILE__);
	wp_add_inline_style('ca-design-system-page-alert-style', $style_css);

    register_block_type('ca-design-system/page-alert', array(
        'script' => 'ca-design-system-page-alert-web-component',
        'style' => 'ca-design-system-page-alert-style',
        'editor_style' => 'ca-design-system-page-alert',
        'editor_script' => 'ca-design-system-page-alert',
        'render_callback' => 'cagov_page_alert_dynamic_render_callback',
    ));
}
add_action('init', 'ca_design_system_register_page_alert');

function cagov_page_alert_dynamic_render_callback($block_attributes, $content)
{
    $body = isset($block_attributes["body"]) ? $block_attributes["body"] : "";
    $icon = isset($block_attributes["icon"]) ? $block_attributes["icon"] : "";
    
    return '<div class="wp-block-ca-design-system-page-alert cagov-block"><cagov-page-alert data-icon="' . $icon . '" data-message="' . htmlentities($body) . '"></cagov-page-alert>
    </div>';
}
