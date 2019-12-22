<?php
/**
 * CAWeb WP Ajax
 *
 * @see https://codex.wordpress.org/AJAX_in_Plugins
 * @package CAWeb
 */

add_action( 'wp_ajax_caweb_fav_icon_check', 'caweb_fav_icon_checker' );
add_action( 'wp_ajax_caweb_icon_menu', 'caweb_icon_menu_func' );
add_action( 'wp_ajax_nopriv_caweb_icon_menu', 'caweb_icon_menu_func' );

/**
 * Check the Binary Signature of a file, currently only icons
 *
 * @see https://mimesniff.spec.whatwg.org/#image-type-pattern-matching-algorithm Living Standard on Mime Sniffing.
 * @see http://asecuritysite.com/forensics/ico File checker.
 *
 * @return void
 */
function caweb_fav_icon_checker() {
	$url = isset( $_POST['icon_url'] ) ? sanitize_text_field( wp_unslash( $_POST['icon_url'] ) ) : '';

	$arr_context_options = array(
		'sslverify' => false,
	);

	$handle = wp_remote_retrieve_body( wp_remote_get( $url, $arr_context_options ) );
	$handle = rawurlencode( $handle );
	$handle = explode( '%', $handle );
	$handle = array_filter( $handle );
	$handle = array_splice( $handle, 0, 4 );
	$handle = implode( '', $handle );

	if ( '00000100' === $handle ) {
		print true;
		wp_die(); /* this is required to terminate immediately and return a proper response */
	}

	print false;
	wp_die(); /* this is required to terminate immediately and return a proper response */
}

function caweb_icon_menu_func() {
	$input = isset( $_POST['name'] ) ? $_POST['name'] : '';
	$sel   = isset( $_POST['select'] ) ? $_POST['select'] : '';
	$header   = isset( $_POST['header'] ) ? $_POST['header'] : false;

	print caweb_icon_menu(
		array(
			'select' => $sel,
			'name'   => $input,
			'header' => $header
		)
	);
	wp_die(); // this is required to terminate immediately and return a proper response

}
