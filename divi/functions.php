<?php
/**
 * CAWeb Divi Functions
 * These are missing Divi functions that are a result of using CAWeb as a parent theme.
 *
 * @package CAWeb
 */

if ( ! function_exists( 'et_pb_is_pagebuilder_used' ) ) {
	/**
	 * Determines if page is using the Divi Page Builder
	 * et_pb_is_pagebuilder_used
	 *
	 * @source Divi includes/builder/core.php Line 3874
	 * @since 4.0.7
	 *
	 * @return bool
	 */
	function et_pb_is_pagebuilder_used() {
		return false;
	}
}

if ( ! function_exists( 'et_get_option' ) ) {
	/**
	 * Gets Divi option
	 * et_get_option
	 *
	 * @source Divi epanel/custom_functions.php Line 204
	 * @since 4.0.7
	 *
	 * @param string $option_name Divi Option Name.
	 * @param string $default_value Default value for the option. Default is blank.
	 * @param string $used_for_object Name of Object this option applies to.
	 * @param bool   $force_default_value Whether to force the default value or not. Default is false.
	 * @param bool   $is_global_setting If this is a global setting. Default is false.
	 * @param string $global_setting_main_name Name of the Main Setting for the option.
	 * @param string $global_setting_sub_name Name of the Sub Setting for the option.
	 *
	 * @return string
	 */
	function et_get_option( $option_name, $default_value = '', $used_for_object = '', $force_default_value = false, $is_global_setting = false, $global_setting_main_name = '', $global_setting_sub_name = '' ) {
		return '';
	}
}

