<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Enqueue styles for block editor
 *
 * @since ??
 */
function et_divi_block_editor_styles() {
	wp_enqueue_style(
		'divi-block-editor-style',
		get_theme_file_uri( '/css/editor-blocks.css' ),
		array(),
		et_get_theme_version()
	);
}
add_action( 'enqueue_block_editor_assets', 'et_divi_block_editor_styles' );

/**
 * Setup page layout content width options for block editor
 *
 * @since ??
 *
 * @param array $content_widths
 *
 * @return array
 */
function et_divi_gb_content_widths( $content_widths = array() ) {
	// Customizer value
	$content_width     = absint( et_get_option( 'content_width', '1080' ) ); // pixel
	$use_sidebar_width = et_get_option( 'use_sidebar_width', false );
	$sidebar_width     = $use_sidebar_width ? intval( et_get_option( 'sidebar_width', 21 ) ) : 21; // percentage
	$sidebar_padding   = 5.5; // percentage

	// Content width when no sidebar exist
	$no_sidebar = $content_width;

	// Content width when sidebar exist (default)
	$has_sidebar = absint( ( $content_width / 100 ) * ( 100 - ( $sidebar_width + $sidebar_padding ) ) );

	// Min content width (small smartphone width)
	$min = 320;

	// Max content width (15" laptop * 2)
	$max = 2880;

	// Current content width
	$saved   = get_post_meta( get_the_ID(), '_et_gb_content_width', true);
	$current = $saved ? $saved : $has_sidebar;

	return array(
		'current'            => $current,
		'default'            => $has_sidebar,
		'min'                => $min,
		'max'                => $max,
		'et_no_sidebar'      => $no_sidebar,
		'et_left_sidebar'    => $has_sidebar,
		'et_right_sidebar'   => $has_sidebar,
		'et_full_width_page' => $max,
	);
}
add_filter( 'et_gb_content_widths', 'et_divi_gb_content_widths' );
