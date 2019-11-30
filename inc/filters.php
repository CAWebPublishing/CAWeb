<?php
/**
 * CAWeb Filters
 *
 * @package CAWeb
 */

add_filter( 'tiny_mce_before_init', 'caweb_tiny_mce_before_init', 15 );

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

	/* Insert the array, JSON ENCODED, into 'style_formats' */
	$init_array['style_formats'] = json_encode( $style_formats );

	/* TinyMCE default is 11pt but it doesnt appear in the font size box */
	$font_sizes                     = caweb_font_sizes( array(), true );
	$init_array['fontsize_formats'] = implode( ' ', $font_sizes );

	/* TinyMCE Toolbar Start off unhidden */
	$init_array['wordpress_adv_hidden'] = false;

	return $init_array;
}
