<?php
/**
 * Location::custom_css().
 *
 * @package CAWeb\Modules\Location
 * @since ??
 */

namespace CAWeb\Modules\Location\ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

trait CustomCssTrait {

	/**
	 * Custom CSS fields
	 *
	 * A minor difference with the JS const cssFields, this function did not have `label` property on each array item.
	 *
	 * @since ??
	 */
	public static function custom_css() {
		return \WP_Block_Type_Registry::get_instance()->get_registered( 'caweb/profile-banner' )->customCssFields;
	}

}
