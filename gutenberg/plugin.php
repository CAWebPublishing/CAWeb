<?php

define( 'CAGOV_DS_ABSPATH', __DIR__ );
define( 'CAGOV_DS_URI', get_stylesheet_directory_uri() . '/gutenberg' );

add_action( 'init', 'cagov_ds_enqueue_block_editor_assets' );

function cagov_ds_enqueue_block_editor_assets(){
    global $wp_version;

    $is_under_5_8 = version_compare($wp_version, "5.8", '<') ? '' : '_all';
    
    add_filter("block_categories$is_under_5_8", 'cagov_ds_gutenberg_categories', 10, 2);

    $deps = array(
        'jquery',
        'wp-blocks', 
        'wp-element', 
        'wp-editor',
        'wp-i18n'
    );

    wp_register_script( 'cagov-ds-accordion-js', CAGOV_DS_URI . '/blocks/accordion/build/index.js', $deps, '1.0.0', true );
    
    wp_register_style( 'cagov-ds-accordion-layout', CAGOV_DS_URI . '/blocks/accordion/build/index.css', array(), '1.0.0' );

    // CA Design System BLOCKS
    // Requires webcomponents from external design system
    $blocks = array(
        'accordion'
    );

    foreach( $blocks as $b ){
        register_block_type(CAGOV_DS_ABSPATH . "/blocks/$b/build");
    }

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
