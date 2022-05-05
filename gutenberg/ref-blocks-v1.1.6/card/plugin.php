<?php

/**
 * Plugin Name: Card
 * Plugin URI: TBD
 * Description: Button that highlights common user needs. Appears on the homepage. Provides a link to a webpage where people can take action with the department. Includes a text label and link.  Copy writing tip: Ideally starts with a verb.
 * Version: 1.1.0
 * Author: California Office of Digital Innovation
 * @package ca-design-system
 */

defined('ABSPATH') || exit;

add_action('init', 'cagov_gb_register_card');

function cagov_gb_register_card()
{

    if (!function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }

    wp_register_script(
        'ca-design-system-card-editor-script',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore', 'moment'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js'),
    );


    wp_register_style(
        'ca-design-system-card-editor-style',
        plugins_url('editor.css', __FILE__),
        false,
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );

    wp_register_style( 'ca-design-system-card-style', false );
    $style_css = file_get_contents(plugin_dir_path(__FILE__) . '/style.css', __FILE__);
    wp_add_inline_style('ca-design-system-card-style', $style_css);

    register_block_type('ca-design-system/card', array(
        'style' => 'ca-design-system-card-style',
        'editor_style' => 'ca-design-system-card-editor-style',
        'editor_script' => 'ca-design-system-card-editor-script',
        'render_callback' => 'cagov_gb_card_dynamic_render_callback'
    ));
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function cagov_gb_card_dynamic_render_callback($block_attributes, $content)
{
    $title = isset($block_attributes["title"]) ? $block_attributes["title"] : "";
    $url = isset($block_attributes["url"]) ? $block_attributes["url"] : null;
    return <<<EOT
        <a href="$url" class="wp-block-ca-design-system-card no-deco cagov-card">
            <span class="card-text">$title</span>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"></polygon></g></svg>
        </a>
    EOT;
}
