<?php
/**
 * CAWeb Theme Helper Functions
 *
 * @package CAWeb
 */

/**
 * Returns the Site Wide Version Setting
 * if post_id is passed will return version used by the page template.
 *
 * @param  int $post_id Post ID.
 *
 * @return int
 */
function caweb_get_page_version( $post_id = -1 ) {
	$result = get_option( 'ca_site_version', 5 );

	switch ( get_page_template_slug( $post_id ) ) {
		case 'page-templates/page-template-v4.php':
			$result = 4;
			break;
		case 'page-templates/page-template-v5.php':
		default:
			$result = 5;
			break;
	}

	return (int) $result;
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
 * Load Minified Version of a file
 *
 * @param  string $f File to load.
 * @param  mixed  $ext Extension of file, default css.
 *
 * @return string
 */
function caweb_get_min_file( $f, $ext = 'css' ) {
	/* if a minified version exists load it */
	if ( file_exists( CAWEB_ABSPATH . str_replace( ".$ext", ".min.$ext", $f ) ) ) {
		return CAWEB_URI . str_replace( ".$ext", ".min.$ext", $f );
	} else {
		return CAWEB_URI . $f;
	}
}

/**
 * CA.gov Template Colors
 *
 * @return array
 */
function caweb_template_colors() {
	$color['oceanside'] = array(
		'highlight' => '#FDB81E',
		'primary'   => '#046B99',
		'standout'  => '#323A45',
		's1'        => '#E1F2F7',
	);

	$color['orangecounty'] = array(
		'highlight' => '#FBAD23',
		'primary'   => '#A15801',
		'standout'  => '#483723',
		's1'        => '#F1EDE4',
	);

	$color['pasorobles']   = array(
		'highlight' => '#FBAD23',
		'primary'   => '#9A0000',
		'standout'  => '#313131',
		's1'        => '#F5F5F5',
	);
	$color['santabarbara'] = array(
		'highlight' => '#FF9B53',
		'primary'   => '#60617D',
		'standout'  => '#664945',
		's1'        => '#FFEBD7',
	);
	$color['sierra']       = array(
		'highlight' => '#FBAD23',
		'primary'   => '#447766',
		'standout'  => '#194949',
		's1'        => '#EFFAF6',
	);
	$color['mono']         = array(
		'highlight' => '#FFCE2B',
		'primary'   => '#545351',
		'standout'  => '#191919',
		's1'        => '#F4F3EF',
	);
	$color['trinity']      = array(
		'highlight' => '#C19E73',
		'primary'   => '#446A7C',
		'standout'  => '#21272A',
		's1'        => '#F9F8F8',
	);
	$color['eureka']       = array(
		'highlight' => '#D9B295',
		'primary'   => '#3E4B4D',
		'standout'  => '#21272A',
		's1'        => '#F9F8F8',
	);
	$color['sacramento']   = array(
		'highlight' => '#7BB0DA',
		'primary'   => '#153554',
		'standout'  => '#730000',
		's1'        => '#E1ECF7',
	);

	return $color;
}


/**
 * Retrieve CAWeb Color Schemes
 *
 * @param  int    $version State Template Version.
 * @param  string $field Whether to return filename, displayname or both.
 * @param  string $color Retrieve information on a specific colorscheme.
 *
 * @return array
 */
function caweb_color_schemes( $version = 0, $field = '', $color = '' ) {
	$css_dir = sprintf( '%1$s/assets/css/cagov', CAWEB_ABSPATH );
	$pattern = '/.*\/([\w\s]*)\.css/';

	$schemes = array();

	/*
	Get glob of colorschemes based on version,
	if no version provided return all colors from all versions
	*/
	switch ( $version ) {
		case 4:
			$tmp = glob( sprintf( '%1$s/version4/colorscheme/*.css', $css_dir ) );

			break;
		case 5:
			$tmp = glob( sprintf( '%1$s/version5/colorscheme/*.css', $css_dir ) );

			break;
		default:
			$v4_schemes = glob( sprintf( '%1$s/version4/colorscheme/*.css', $css_dir ) );
			$v5_schemes = glob( sprintf( '%1$s/version5/colorscheme/*.css', $css_dir ) );
			$tmp        = array_merge( $v4_schemes, $v5_schemes );

			break;
	}

	/*
	Iterate thru each colorscheme
	*/
	foreach ( $tmp as $css_file ) {
		$filename    = preg_replace( $pattern, '\1', $css_file );
		$displayname = ucwords( strtolower( $filename ) );

		$schemekey = strtolower( str_replace( ' ', '', $displayname ) );

		switch ( $field ) {
			case 'filename':
				$schemes[ $schemekey ] = $filename;

				break;
			case 'displayname':
				$schemes[ $schemekey ] = $displayname;

				break;
			default:
				$schemes[ $schemekey ] = array(
					'filename'    => $filename,
					'displayname' => $displayname,
				);

				break;

		}

		if ( ! empty( $color ) && $color === $schemekey && isset( $schemes[ $color ] ) ) {
			return $schemes[ $color ];
		}
	}

	ksort( $schemes );

	return $schemes;
}

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

	$admin_css = caweb_get_min_file( '/css/admin.css' );

	$version     = caweb_get_page_version( get_the_ID() );
	$color       = get_option( 'ca_site_color_scheme', 'oceanside' );
	$colorscheme = caweb_color_schemes( $version, 'filename', $color );

	$editor_css = caweb_get_min_file( "/css/cagov-v$version-$colorscheme.css" );

	$css = array(
		includes_url( '/css/dashicons.min.css' ),
		includes_url( '/js/tinymce/skins/wordpress/wp-content.css' ),
		$editor_css,
		$admin_css,
	);

	$defaults_settings = array(
		'media_buttons' => false,
		'quicktags'     => true,
		'tinymce'       => array(
			'content_css'     => implode( ',', $css ),
			'skin'            => 'lightgray',
			'elementpath'     => true,
			'entity_encoding' => 'raw',
			'entities'        => '38, amp, 60, lt, 62, gt, 34, quot, 39, apos',
			'plugins'         => 'charmap,colorpicker,hr,lists,paste,tabfocus,textcolor,wordpress,wpautoresize,wpemoji,wpgallery,wplink,wptextpattern',
			'toolbar1'        => 'formatselect,bold,italic,underline,bullist,numlist,blockquote,hr,alignleft,aligncenter,alignright,link,wp_more,wp_adv',
			'toolbar2'        => 'styleselect,strikethrough,hr,fontselect,fontsizeselect,forecolor,backcolor,pastetext,copy,subscript,superscript,charmap,outdent,indent,undo,redo,wp_help',
			'style_formats'   => $styles,
		),
	);

	return is_array( $settings ) ? array_merge( $defaults_settings, $settings ) : $defaults_settings;
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
