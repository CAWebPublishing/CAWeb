<?php
// Compatibility code that needs to be run early and for each request.

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( function_exists( 'ud_get_stateless_media' ) ) {
	// WP Stateless Plugin.
	function et_compat_stateless_skip_cache_busting( $result, $filename ) {
		return $filename;
	}

	add_filter( 'stateless_skip_cache_busting', 'et_compat_stateless_skip_cache_busting', 10, 2 );
}
