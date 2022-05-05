<?php

/**
 * Plugin Name: Scrollable Grid Card
 * Plugin URI: TBD
 * Description: Card that highlights content. Designed for page content. Provides image asset, name, description and hyperlink.
 * Version: 1.0.0
 * Author: California Office of Digital Innovation
 * @package cagov-design-system
 */

defined('ABSPATH') || exit;

/**
 * Load all translations for our plugin from the MO file.
 */
add_action('init', 'cagov_design_system_gutenberg_block_scrollable_card');

function cagov_design_system_gutenberg_block_scrollable_card()
{
    load_plugin_textdomain('cagov-design-system', false, basename(__DIR__) . '/languages');
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function cagov_design_system_register_scrollable_card()
{
    if (!function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }

    // Temporary staging for testing, (belongs in a set of design system behaviors)
    wp_register_script(
        'ca-design-system-behavior-glider-js',
        plugins_url('glider.min.js', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'glider.min.js')
    );
    wp_enqueue_script('ca-design-system-behavior-glider-js');

    // wp_register_style('ca-design-system-behavior-glider-css', false);
    // $glider_style_css = file_get_contents(plugin_dir_path(__FILE__) . '/glider.js/glider.css', __FILE__);
    // wp_add_inline_style('ca-design-system-behavior-glider-css', $glider_style_css);


    wp_register_style(
		'ca-design-system-behavior-glider-css',
		plugins_url('glider.min.css', __FILE__),
		array(),
		filemtime(plugin_dir_path(__FILE__) . 'glider.min.css')
	);
    wp_enqueue_style('ca-design-system-behavior-glider-css');

    wp_register_script(
        'ca-design-system-scrollable-card-block',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );

    wp_register_style(
        'ca-design-system-scrollable-card-style-editor',
        plugins_url('editor.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );

    wp_register_style('ca-design-system-scrollable-card-style', false);
    $style_css = file_get_contents(plugin_dir_path(__FILE__) . '/index.css', __FILE__);
    wp_add_inline_style('ca-design-system-scrollable-card-style', $style_css);




    wp_register_script(
        'ca-design-system-scrollable-card-behavior',
        plugins_url('behavior.js', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'behavior.js')
    );

    wp_enqueue_script('ca-design-system-scrollable-card-behavior');

    register_block_type('ca-design-system/scrollable-card', array(
        'style' => 'ca-design-system-scrollable-card-style',
        'editor_style' => 'ca-design-system-scrollable-card-style-editor',
        'editor_script' => 'ca-design-system-scrollable-card-block',
        'render_callback' => 'cagov_scrollable_card_dynamic_render_callback'
    ));
}

add_action( 'init', 'cagov_design_system_register_scrollable_card' );

function cagov_scrollable_card_wp_get_attachment( $attachment_id, $size = 'thumbnail')
{
    $attachment = get_post( $attachment_id );
    if (isset($attachment)) {
        $media_object = wp_get_attachment_metadata($attachment_id);
        // print_r($media_object);

        if(isset($media_object['sizes'][$size])) {
            return array(
                'alt' => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
                'caption' => $attachment->post_excerpt,
                'description' => $attachment->post_content,
                'src' => wp_get_attachment_image_url( $attachment_id, $size ),
                'title' => $attachment->post_title,
                'width' => $media_object['sizes'][$size]['width'],
                'height' => $media_object['sizes'][$size]['height'],
            );
        }
    } 
    return null;
}

function cagov_scrollable_card_dynamic_render_callback( $block_attributes, $content )
{
    $title = isset( $block_attributes['title'] ) ? $block_attributes['title'] : '';

    // Most recent media content
    $media_id = isset( $block_attributes['mediaID'] ) ? $block_attributes['mediaID'] : null;
    if ( null !== $media_id ) {
        $media_object_thumbnail = cagov_scrollable_card_wp_get_attachment( $media_id, 'thumbnail' );
    }

    $image_html_thumbnail = '';
    if (isset( $media_object_thumbnail ) ) {
        if (null !== $media_object_thumbnail['src'] ) {
            $image_html_thumbnail = '<img src="' . $media_object_thumbnail['src'] . '" alt="' . $media_object_thumbnail['alt'] . '" width="' . $media_object_thumbnail['width'] . '" height="' . $media_object_thumbnail['height'] . '" />';
        }
    }

    $card_image = null;
    if ('' !== $image_html_thumbnail ) {
        $card_link = isset( $block_attributes['cardLink'] ) ? $block_attributes['cardLink'] : null;
        if (null !== $card_link) {
            $card_image = '<div class="cagov-card-image">' . '<a href="' . $card_link . '">' . $image_html_thumbnail . '</a>' .'</div>';
        } else {
            $card_image = '<div class="cagov-card-image">' . $image_html_thumbnail . '</div>';
        }
    }

    $body = isset( $block_attributes['body'] ) ? $block_attributes['body'] : '';
    $inner_blocks = do_blocks( $content );
    
    return '<div class="wp-block-ca-design-system-scrollable-card cagov-scrollable-card cagov-stack">' .
          $card_image .
          '<div class="cagov-card-content">' .
          '<h2>' . $title . '</h2>' .
          $inner_blocks .
      '</div></div>';
}
