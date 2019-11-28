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
		$filename  = preg_replace( $pattern, '\1', $css_file );
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

		if( ! empty( $color ) && $color === $schemekey && isset($schemes[$color]) ){
			return $schemes[$color];
		}
	}

	ksort( $schemes );

	return $schemes;
}
