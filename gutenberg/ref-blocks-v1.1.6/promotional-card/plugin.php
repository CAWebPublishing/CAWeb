<?php

/**
 * Plugin Name: Promotional card
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
add_action('init', 'cagov_design_system_gutenberg_block_promotional_card');

function cagov_design_system_gutenberg_block_promotional_card()
{
    load_plugin_textdomain('cagov-design-system', false, basename(__DIR__) . '/languages');
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function cagov_design_system_register_promotional_card()
{
    if (!function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }

    wp_register_script(
        'ca-design-system-promotional-card-block',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );

    wp_register_style(
        'ca-design-system-promotional-card-style-editor',
        plugins_url('editor.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );

    wp_register_style('ca-design-system-promotional-card-style', false);
    $style_css = file_get_contents(plugin_dir_path(__FILE__) . '/index.css', __FILE__);
    wp_add_inline_style('ca-design-system-promotional-card-style', $style_css);

    register_block_type('ca-design-system/promotional-card', array(
        'style' => 'ca-design-system-promotional-card-style',
        'editor_style' => 'ca-design-system-promotional-card-style-editor',
        'editor_script' => 'ca-design-system-promotional-card-block',
        'render_callback' => 'cagov_promotional_card_dynamic_render_callback'
    ));
}

add_action( 'init', 'cagov_design_system_register_promotional_card' );

function cagov_promotional_card_wp_get_attachment( $attachment_id, $size = 'medium')
{
    $attachment = get_post( $attachment_id );
    if (isset($attachment)) {
        $media_object = wp_get_attachment_metadata($attachment_id);
        // print_r($media_object);

        if (isset($media_object['sizes'][$size])) {
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

function cagov_promotional_card_dynamic_render_callback( $block_attributes, $content )
{
    $title = isset( $block_attributes['title'] ) ? $block_attributes['title'] : '';

    // Most recent media content
    $media_id = isset( $block_attributes['mediaID'] ) ? $block_attributes['mediaID'] : null;
    if ( null !== $media_id ) {
        $media_object_large = cagov_promotional_card_wp_get_attachment( $media_id, 'large' );
        $media_object_medium = cagov_promotional_card_wp_get_attachment( $media_id, 'medium' );
    }


    $image_html_large = '';
    if (isset( $media_object_large ) ) {
        if (null !== $media_object_large['src']) {
            $image_html_large = '<img src="' . $media_object_large['src'] . '" alt="' . $media_object_large['alt'] . '" width="' . $media_object_large['width'] . '" height="' . $media_object_large['height'] . '" />';

        }
    }

    $image_html_medium = '';
    if (isset( $media_object_medium ) ) {
        if (null !== $media_object_medium['src'] ) {
            $image_html_medium = '<img src="' . $media_object_medium['src'] . '" alt="' . $media_object_medium['alt'] . '" width="' . $media_object_medium['width'] . '" height="' . $media_object_medium['height'] . '" />';
        }
    }

    $card_start_date = isset( $block_attributes['startDate'] ) ? $block_attributes['startDate'] : '';
    $card_end_date = isset( $block_attributes['endDate'] ) ? $block_attributes['endDate'] : '';

    if ('' !== $card_end_date ) {
        $card_start_date = $card_start_date . "-"; 
    }

    $card_image = null;
    if ('' !== $image_html_medium ) {
        $card_link = isset( $block_attributes['cardLink'] ) ? $block_attributes['cardLink'] : null;
        if (null !== $card_link) {
            $card_image = '<div class="cagov-card-image">' . '<a href="' . $card_link . '">' . $image_html_medium . '</a>' .'</div>';
        } else {
            $card_image = '<div class="cagov-card-image">' . $image_html_medium . '</div>';
        }
    }

    $body = isset( $block_attributes['body'] ) ? $block_attributes['body'] : '';
    $inner_blocks = do_blocks( $content );
    
    return '<div class="wp-block-ca-design-system-promotional-card cagov-promotional-card cagov-block">' .
          $card_image .
          '<div class="cagov-card-content">' .
          '<h2>' . $title . '</h2>' .
          '<p class="cagov-date-range"><span class="start-date">' . $card_start_date . '</span><span class="end-date">' . $card_end_date . '</span></p>' .
          $inner_blocks .
      '</div></div>';
}
