<?php
/**
 * CAWeb Theme Helper Functions
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Returns array of CAWeb Menu Theme Locations
 *
 * @return array
 */
function caweb_nav_menu_theme_locations() {
	return array(
		'header-menu' => 'Header Menu',
		'footer-menu' => 'Footer Menu',
	);
}

/**
 * Is CAWeb Theme is running in Debug Mode.
 *
 * @return boolean
 */
function caweb_is_debug_enabled() {
	return get_option( 'caweb_debug_mode', false );
}

/**
 * Load Minified Version of a file
 *
 * @param  string $f File to load.
 * @param  mixed  $ext Extension of file, default css.
 *
 * @return string
 */
function caweb_get_min_file( $f, $ext = 'css' ) {
	/* if a minified version exists load it */
	if ( ! caweb_is_debug_enabled() && file_exists( CAWEB_ABSPATH . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
		return CAWEB_URI . str_replace( ".$ext", ".min.$ext", $f );
	} else {
		return CAWEB_URI . $f;
	}
}

/**
 * CA.gov Template Colors
 *
 * @link https://template.webstandards.ca.gov/sample/color-schemes.html
 *
 * @return array
 */
function caweb_template_colors() {

	$colors = array(
		'delta' => array(
			'main' => '#577786',
			'alt'   => '#f5f9fa',
			'highlight'  => '#a5bdc5',
			'standout'        => '#46565e',
		),
		'eureka' => array(
			'main' => '#3e4b4d',
			'alt'   => '#f9f4f0',
			'highlight'  => '#d9b295',
			'standout'        => '#21272a',
		),
		'mono' => array(
			'main' => '#545351',
			'alt'   => '#ededef',
			'highlight'  => '#ffce2b',
			'standout'        => '#191919',
		),
		'oceanside' => array(
			'main' => '#046b99',
			'alt'   => '#eef8fb',
			'highlight'  => '#fdb81e',
			'standout'        => '#323a45',
		),
		'orange county' => array(
			'main' => '#a15801',
			'alt'   => '#fbf0e7',
			'highlight'  => '#fbad23',
			'standout'        => '#483723',
		),
		'paso robles' => array(
			'main' => '#691808',
			'alt'   => '#f5f5f5',
			'highlight'  => '#fbad23',
			'standout'        => '#313131',
		),
		'sacramento' => array(
			'main' => '#153554',
			'alt'   => '#e1ecf7',
			'highlight'  => '#7bb0da',
			'standout'        => '#730000',
		),
		'santa barbara' => array(
			'main' => '#834b1e',
			'alt'   => '#f8eee4',
			'highlight'  => '#ff9b53',
			'standout'        => '#664945',
		),
		'santa cruz' => array(
			'main' => '#0f4f94',
			'alt'   => '#eff4fa',
			'highlight'  => '#f5811b',
			'standout'        => '#2c2c4f',
		),
		'shasta' => array(
			'main' => '#336c39',
			'alt'   => '#e4f1e5',
			'highlight'  => '#fbad23',
			'standout'        => '#3c4543',
		),
		'sierra' => array(
			'main' => '#476476',
			'alt'   => '#e8f1ee',
			'highlight'  => '#fbad23',
			'standout'        => '#194949',
		),
		'trinity' => array(
			'main' => '#446a7c',
			'alt'   => '#eff5f8',
			'highlight'  => '#c19e73',
			'standout'        => '#21272a',
		),
	);

	return apply_filters( 'caweb_template_colors', $colors );
}

/**
 * Returns array of CAWeb Menu Types
 *
 * @return array
 */
function caweb_nav_menu_types() {
	$menu_types = array(
		'dropdown'     => 'Drop Down',
		'singlelevel'  => 'Single Level',
	);

	return apply_filters( 'caweb_nav_menu_types', $menu_types );
}

/**
 * CAWeb Font Sizes
 *
 * @param  array $exclude font sizes to exclude.
 * @param  mixed $values return values.
 *
 * @return array
 */
function caweb_font_sizes( $exclude = array(), $values = false ) {
	$sizes = array(
		8  => '8pt',
		9  => '9pt',
		10 => '10pt',
		11 => '11pt',
		12 => '12pt',
		13 => '13pt',
		14 => '14pt',
		15 => '15pt',
		16 => '16pt',
		17 => '17pt',
		18 => '18pt',
		19 => '19pt',
		20 => '20pt',
		21 => '21pt',
		22 => '22pt',
		23 => '23pt',
		24 => '24pt',
		25 => '25pt',
		26 => '26pt',
		27 => '27pt',
		28 => '28pt',
		29 => '29pt',
		30 => '30pt',
		31 => '31pt',
		32 => '32pt',
		33 => '33pt',
		34 => '34pt',
		35 => '35pt',
		36 => '36pt',
	);

	foreach ( $exclude as $i => $size ) {
		if ( isset( $sizes[ $size ] ) ) {
			unset( $sizes[ $size ] );
		}
	}

	return $values ? array_values( $sizes ) : $sizes;
}

/**
 * Return CAWeb Attachment Meta Field for given urls
 *
 * @param  string|array $image_url Attachment URL. Can be string or an array of URLS.
 * @param  string       $meta_key Meta Field to return. If empty all fields are returned.
 *
 * @return string|array
 */
function caweb_get_attachment_post_meta( $image_url, $meta_key = '' ) {

	if ( empty( $image_url ) ) {
		return '';
	} elseif ( is_string( $image_url ) || is_array( $image_url ) ) {
		$query = array(
			'post_type'  => 'attachment',
			'fields'     => 'ids',
		);

		$image_urls = is_string( $image_url ) ? array( $image_url ) : $image_url;
		$imgs       = array();

		foreach ( $image_urls as $i => $img ) {
			// phpcs:disable -- Slow meta query ok.
			$query['meta_query'] = array(
				array(
					'key'     => '_wp_attached_file',
					'value'   => basename( $img ),
					'compare' => 'LIKE',
				),
			);
			// phpcs:enable
			$ids = get_posts( $query );

			if ( ! empty( $ids ) ) {
				$imgs[] = get_post_meta( $ids[0], $meta_key, true );
			}
		}

		if ( empty( $imgs ) ) {
			return 0;
		} else {
			return 1 < count( $imgs ) ? $imgs : $imgs[0];
		}
	}
}

if ( ! function_exists( 'caweb_get_shortcode_from_content' ) ) {
	/**
	 * Retrieve specific shortcode tag from given content
	 *
	 * @param  string $con Post Content.
	 * @param  string $tag Shortcode tag to retrieve.
	 * @param  bool   $all_matches Whether to retrieve all matches or just the first.
	 *
	 * @return array|Object
	 */
	function caweb_get_shortcode_from_content( $con = '', $tag = '', $all_matches = false ) {
		if ( empty( $con ) || empty( $tag ) ) {
			return array();
		}
		$results = array();
		$objects = array();

		$tag = is_array( $tag ) ? implode( '|', $tag ) : $tag;

		/* Get Shortcode Tags from Con and save it to $results */
		$pattern = sprintf( '/\[(%1$s)[\d\s\w\S]+?\[\/\1\]|\[(%1$s)[\d\s\w\S]+? \/\]/', $tag );
		preg_match_all( $pattern, $con, $results );
		/* if there are no matches return an empty array */
		if ( empty( $results ) ) {
			return array();
		}
		/* if there are results save only the matches */
		$matches = $results[0];

		/* iterate thru each match */
		foreach ( $matches as $m => $match ) {
			$obj  = array();
			$attr = array();

			/*
			Matching tag can either be self-closing or not.
			Non self-closing matching tags are results[1].
			Self-closing matching tags are results[2].
			If non self-closing tag is empty assume self-closing
			*/
			$matching_tag = ! empty( $results[1][ $m ] ) ? $results[1][ $m ] : $results[2][ $m ];

			/*
			If the shortcode is a self closing tag, then it contains content in between its Shortcode Tags
			Get content from shortcode
			*/
			preg_match( sprintf( '/"\][\s\S]*\[\/(%1$s)/', $matching_tag ), $match, $obj['content'] );

			if ( ! empty( $obj['content'] ) ) {
				/* substring the attributes, removing the content from the match */
				$match          = substr( $match, 1, strpos( $match, $obj['content'][0] ) );
				$obj['content'] = substr( $obj['content'][0], 2, strlen( $obj['content'][0] ) - strlen( $matching_tag ) - 4 );
				/* If the shortcode is not a self closing tag, then it only contains one Shortcode Tag */
			} else {
				$obj['content'] = '';
			}

			/* Get Attributes from Shortcode */
			preg_match_all( '/\w*="[\w\s\d$:(),@?\'=+%!#\/\.\[\]\{\}-]*/', $match, $attr );
			foreach ( $attr[0] as $a ) {
				preg_match( '/\w*/', $a, $key );
				$obj[ $key[0] ] = urldecode( substr( $a, strlen( $key[0] ) + 2 ) );
			}

			$objects[] = (object) $obj;
		}

		if ( $all_matches ) {
			return $objects;
		}

		return ! empty( $objects ) ? $objects[0] : array();
	}
}

/**
 * Returns all child nav_menu_items under a specific parent
 *
 * @source https://wpsmith.net/2011/how-to-get-all-the-children-of-a-specific-nav-menu-item/
 * @param  int   $parent_id The parent nav_menu_item ID.
 * @param  array $nav_menu_items Array of Nav Menu Objects.
 * @param  bool  $depth Gives all children or direct children only.
 *
 * @return array
 */
function caweb_get_nav_menu_item_children( $parent_id, $nav_menu_items, $depth = true ) {
	$nav_menu_item_list = array();

	foreach ( (array) $nav_menu_items as $nav_menu_item ) {
		if ( (int) $nav_menu_item->menu_item_parent === (int) $parent_id ) {
			$nav_menu_item_list[] = $nav_menu_item;
			if ( $depth ) {
				$children = caweb_get_nav_menu_item_children( $nav_menu_item->ID, $nav_menu_items );
				if ( $children ) {
					$nav_menu_item_list = array_merge( $nav_menu_item_list, $children );
				}
			}
		}
	}

	return $nav_menu_item_list;
}

/**
 * Get User Profile Color
 *
 * @return string
 */
function caweb_get_user_color() {
	global $_wp_admin_css_colors;

	$admin_color = get_user_option( 'admin_color' );

	return $_wp_admin_css_colors[ $admin_color ];
}

/**
 * Checks if page/post is using Divi Builder.
 *
 * @param array $wp_classes An array of classes used in the body.
 *
 * @return boolean
 */
function caweb_is_divi_used( $wp_classes = array() ) {

	// Default WordPress theme templates do not use the Divi Builder.
	if ( is_tag() || is_archive() || is_category() || is_author() ) {
		return false;
	}

	// Default HomePage "Your latest posts" does not use the Divi Builder.
	if ( in_array( 'blog', $wp_classes, true ) ) {
		return false;
	}

	// Default index.php (search) does not use the Divi Builder.
	if ( in_array( 'search', $wp_classes, true ) ) {
		return false;
	}

	$tribe_events = get_post_meta( get_the_ID(), '_EventOrigin' );
	// if The Events Calendar Plugin is using the layout it triggers the builder is enabled.
	if ( ! empty( $tribe_events ) && in_array( 'event-calendar', $tribe_events, true ) ) {
		return false;
	}

	// if the builder is used return true.
	return function_exists( 'et_pb_is_pagebuilder_used' ) && et_pb_is_pagebuilder_used( get_the_ID() );
}
