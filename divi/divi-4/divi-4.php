<?php
/** Divi 4 Actions */
add_action( 'et_builder_ready', 'caweb_divi_extension_initialize_d4_modules' );
add_action( 'wp_enqueue_scripts', 'caweb_divi_extension_enqueue_d4_vb_scripts' );
add_action( 'et_fb_enqueue_assets', 'caweb_divi_extension_et_fb_enqueue_assets');
		
add_action( 'wp_ajax_caweb_github_request_url', 'caweb_github_request_url');
add_action( 'wp_ajax_nopriv_caweb_github_request_url', 'caweb_github_request_url');


function caweb_github_request_url(){
	$nonce = isset( $_GET['nonce'] ) ? sanitize_text_field( $_GET['nonce'] ) : '';

	if ( ! wp_verify_nonce( $nonce, 'caweb_github_request_url' ) ) {
		wp_die( 'Invalid nonce' );
	}

	$data_id = isset( $_GET['data'] ) ? sanitize_text_field( $_GET['data'] ) : '';

	if ( empty( $data_id ) ) {
		wp_die( 'Missing data ID' );
	}

	$url = isset( $_GET['url'] ) ? esc_url_raw( $_GET['url'] ) : '';
	$data = get_site_transient( $data_id );

	$args = array(
		'headers' => array(
			'Accept'    => 'application/vnd.github.json',
		)
	);

	if( ! empty( $data['pat'] ) ){
		$args['headers']['Authorization'] = 'Bearer ' . $data['pat'];
	}

	$request = wp_remote_get( $url, $args );

	if( 200 === wp_remote_retrieve_response_code( $request ) ){
		// we decode the body
		$body = json_decode( wp_remote_retrieve_body( $request ) );
		// we add the link header if it exists
		$body['links'] = wp_remote_retrieve_header( $request, 'link' );

		print json_encode($body);
	} else {
		print 'Error: ' . wp_remote_retrieve_response_message( $request );
	}


	wp_die();
}

function test(){
	header('link', 'testheader' );
}

/**
 * Register all Divi 4 modules.
 *
 * @since ??
 */
function caweb_divi_extension_initialize_d4_modules() {
	$caweb_module_files = glob( CAWEB_DIVI_EXT_DIR . '/divi-4/src/modules/*/*.php' );

	foreach ( (array) $caweb_module_files as $caweb_module_file ) {
		require_once $caweb_module_file;
	}
}

/**
 * Enqueue Divi 4 Visual Builder Assets
 *
 * @since ??
 */
function caweb_divi_extension_enqueue_d4_vb_scripts() {
	// only enqueue if Visual Builder is enabled and D5 is not enabled
	if ( et_core_is_fb_enabled() && 
		! ( 
			function_exists('et_builder_d5_enabled' ) && 
			et_builder_d5_enabled() 
			)  ) {

		// Enqueue Visual Builder Scripts
		wp_enqueue_script(
			'caweb-divi4-vb',
			CAWEB_DIVI_EXT_URL . "build/bundle4.js",
			array( 'react', 'jquery' ),
			'1.0.0',
			true
		);
	}
	// Enqueue Frontend and Visual Builder Styles
	wp_enqueue_style(
		'caweb-divi4-vb',
		CAWEB_DIVI_EXT_URL . "build/bundle4.css",
		array(),
		'1.0.0'
	);

	
}

function caweb_divi_extension_et_fb_enqueue_assets(){
	// Enqueue Frontend and Visual Builder Styles
	wp_enqueue_style(
		'caweb-divi4-vb',
		CAWEB_DIVI_EXT_URL . "build/bundle4.css",
		array(),
		'1.0.0'
	);
}