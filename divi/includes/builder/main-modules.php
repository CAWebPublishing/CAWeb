<?php
/**
 * Load all modules.
 *
 * @package Divi
 * @subpackage Builder
 */

$et_builder_module_files = glob( ET_BUILDER_DIR . 'module/*.php' );
$et_builder_module_types = glob( ET_BUILDER_DIR . 'module/type/*.php' );

if ( ! $et_builder_module_files ) {
	return;
}

/**
 * Fires before the builder's module classes are loaded.
 *
 * @since 3.0.77
 */
do_action( 'et_builder_modules_load' );

foreach ( $et_builder_module_types as $module_type ) {
	require_once $module_type;
}

foreach ( $et_builder_module_files as $module_file ) {
	require_once $module_file;
}
if ( et_is_woocommerce_plugin_active() ) {
	$et_builder_woocommerce_module_files = glob( ET_BUILDER_DIR . 'module/woocommerce/*.php' );

	foreach ( $et_builder_woocommerce_module_files as $module_type ) {
		require_once $module_type;
	}
}

/**
 * Fires after the builder's module classes are loaded.
 *
 * @since 3.0.77
 */
do_action( 'et_builder_modules_loaded' );
