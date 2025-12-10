<?php
/**
 * Module: Profile Banner Module class.
 *
 * @package CAWeb\Modules\SectionPrimary
 * @since ??
 */

namespace CAWeb\Modules\SectionPrimary;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use CAWeb\Modules\SectionPrimary\ModuleTrait;

/**
 * `SectionPrimary` is consisted of functions used for Divi 5 Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class SectionPrimary implements DependencyInterface {
	use ModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `SectionPrimary` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = CAWEB_DIVI_EXT_MODULES_JSON_PATH . 'SectionPrimary/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ SectionPrimary::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
