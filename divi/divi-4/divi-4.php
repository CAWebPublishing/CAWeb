<?php
/** Divi 4 Actions */
add_action( 'et_builder_ready', 'caweb_divi_extension_initialize_d4_modules' );
add_action( 'wp_enqueue_scripts', 'caweb_divi_extension_enqueue_d4_vb_scripts' );

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
	if ( et_core_is_fb_enabled() && 
		! ( 
			function_exists('et_builder_d5_enabled' ) && 
			et_builder_d5_enabled() 
			)  ) {
		wp_enqueue_script(
			'caweb-divi4-vb',
			CAWEB_DIVI_EXT_URL . "build/bundle4.js",
			array( 'react', 'jquery' ),
			'1.0.0',
			true
		);
	}
}