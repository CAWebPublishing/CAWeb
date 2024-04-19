<?php
/**
 * CAWeb TinyMCE
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_filter( 'tiny_mce_before_init', 'caweb_tiny_mce_before_init', 15 );
add_filter( 'mce_buttons', 'caweb_mce_buttons', 15 );
add_filter( 'mce_buttons_2', 'caweb_mce_buttons_2', 15 );


/**
 * CAWeb TinyMCE Settings
 *
 * @param  array $settings TinyMCE Settings.
 *
 * @return array
 */
function caweb_tiny_mce_settings( $settings = array() ) {
	$styles                               = array();
	$caweb_tiny_mce_init                  = caweb_tiny_mce_before_init( array() );
	$caweb_tiny_mce_init['style_formats'] = json_decode( $caweb_tiny_mce_init['style_formats'] );

	foreach ( $caweb_tiny_mce_init['style_formats'] as $i => $style ) {
		$styles[ str_replace( ' ', '', strtolower( $style->name ) ) ] = $style;
	}

	$version = caweb_template_version();
	$color   = get_option( 'ca_site_color_scheme', 'oceanside' );

	$editor_css = caweb_get_min_file( "/build/$color-$version.css" );

	$css = array(
		includes_url( '/css/dashicons.min.css' ),
		includes_url( '/js/tinymce/skins/wordpress/wp-content.css' ),
		$editor_css,
		caweb_get_min_file( '/build/caweb-admin.css' ),
	);

	$defaults_settings = array(
		'media_buttons' => false,
		'quicktags'     => true,
		'tinymce'       => array(
			'content_css'       => implode( ',', $css ),
			'skin'              => 'lightgray',
			'elementpath'       => true,
			'entity_encoding'   => 'raw',
			'entities'          => '38, amp, 60, lt, 62, gt, 34, quot, 39, apos',
			'plugins'           => 'charmap,colorpicker,hr,lists,paste,tabfocus,textcolor,wordpress,wpautoresize,wpemoji,wpgallery,wplink,wptextpattern',
			'toolbar1'          => 'formatselect,bold,italic,underline,bullist,numlist,blockquote,hr,alignleft,aligncenter,alignright,link,wp_more,wp_adv',
			'toolbar2'          => 'styleselect,strikethrough,hr,fontselect,fontsizeselect,forecolor,backcolor,pastetext,copy,subscript,superscript,charmap,outdent,indent,undo,redo,wp_help',
			'style_formats'     => $styles,
			'forced_root_block' => '',
			'force_br_newlines' => true,
			'force_p_newlines'  => false,
		),
	);

	$tiny_mce_settings = is_array( $settings ) ? array_merge( $defaults_settings, $settings ) : $defaults_settings;

	return apply_filters( 'caweb_tiny_mce_settings', $tiny_mce_settings );
}

/**
 * TinyMCE Editor
 * Attached callback to 'tiny_mce_before_init'
 *
 * @param  array $init_array Array of TinyMCE Settings.
 *
 * @return array
 */
function caweb_tiny_mce_before_init( $init_array ) {
	/*
	Define the style_formats array
	Each array child is a format with it's own settings
	*/
	$style_formats = array(
		array(
			'name'    => 'Featured Narrative',
			'title'   => 'Featured Narrative',
			'block'   => 'aside',
			'classes' => 'featured-narrative',
			'wrapper' => true,
		),
		array(
			'name'     => 'Overstated List',
			'title'    => 'Overstated List',
			'selector' => 'ul',
			'inline'   => 'ul',
			'classes'  => 'list-overstated',
			'wrapper'  => true,
			'styles'   => array(
				'list-style-type' => 'none',
			),
		),
		array(
			'name'     => 'Standout List',
			'title'    => 'Standout List',
			'selector' => 'ul',
			'inline'   => 'ul',
			'classes'  => 'list-standout',
			'wrapper'  => true,
			'styles'   => array(
				'list-style-type' => 'none',
			),
		),
		array(
			'name'     => 'Understated List',
			'title'    => 'Understated List',
			'selector' => 'ul',
			'inline'   => 'ul',
			'classes'  => 'list-understated',
			'wrapper'  => true,
			'styles'   => array(
				'list-style-type' => 'none',
			),
		),
	);

	/*
	Define the font families
	*/
	$font_family = array(
		'Andale Mono=andale mono,times',
		'Arial=arial,helvetica,sans-serif',
		'Arial Black=arial black,avant garde',
		'Book Antiqua=book antiqua,palatino',
		'Comic Sans MS=comic sans ms,sans-serif',
		'Courier New=courier new,courier',
		'Georgia=georgia,palatino',
		'Helvetica=helvetica',
		'Impact=impact,chicago',
		'Open Sans=sans-serif',
		'Symbol=symbol',
		'Tahoma=tahoma,arial,helvetica,sans-serif',
		'Terminal=terminal,monaco',
		'Times New Roman=times new roman,times',
		'Trebuchet MS=trebuchet ms,geneva',
		'Verdana=verdana,geneva',
		'Webdings=webdings',
		'Wingdings=wingdings,zapf dingbats',
	);

	/* Insert the array, JSON ENCODED, into 'style_formats' */
	$init_array['style_formats'] = wp_json_encode( $style_formats );

	/* TinyMCE default is 11pt but it doesnt appear in the font size box */
	$font_sizes                     = caweb_font_sizes( array(), true );
	$init_array['fontsize_formats'] = implode( ' ', $font_sizes );

	$init_array['font_formats'] = implode( ';', $font_family );

	/* TinyMCE Toolbar Start off unhidden */
	$init_array['wordpress_adv_hidden'] = false;

	return $init_array;
}

/**
 * Add hidden MCE Buttons
 * The primary toolbar (always visible)
 *
 * @link https://codex.wordpress.org/Plugin_API/Filter_Reference/mce_buttons,_mce_buttons_2,_mce_buttons_3,_mce_buttons_4
 * @param  array $buttons TinyMCE buttons.
 *
 * @return array
 */
function caweb_mce_buttons( $buttons ) {
	/**
	 * Add in a core button that's disabled by default
	 */
	$tmp = array( 'formatselect', 'bold', 'italic', 'underline' );
	array_splice( $buttons, 0, 3, $tmp );

	return $buttons;
}

/**
 * Add hidden MCE Buttons
 * The advanced toolbar (can be toggled on/off by user)
 *
 * @link https://codex.wordpress.org/Plugin_API/Filter_Reference/mce_buttons,_mce_buttons_2,_mce_buttons_3,_mce_buttons_4
 * @param  array $buttons TinyMCE buttons.
 *
 * @return array
 */
function caweb_mce_buttons_2( $buttons ) {

	/**
	 * Add in a core button that's disabled by default
	 */

	$tmp = array(
		'styleselect',
		'strikethrough',
		'hr',
		'fontselect',
		'fontsizeselect',
		'forecolor',
		'backcolor',
		'pastetext',
		'copy',
		'subscript',
		'superscript',
	);
	array_splice( $buttons, 0, 5, $tmp );

	return $buttons;
}
