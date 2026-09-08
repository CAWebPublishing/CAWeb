<?php
/**
 * SectionFooter::custom_css().
 *
 * @package CAWeb\Modules\SectionFooter
 * @since ??
 */

namespace CAWeb\Modules\SectionFooter\ModuleTrait;

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
		return \WP_Block_Type_Registry::get_instance()->get_registered( 'caweb/section-footer' )->customCssFields;
	}

}
