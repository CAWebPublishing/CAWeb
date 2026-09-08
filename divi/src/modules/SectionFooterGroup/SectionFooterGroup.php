<?php
/**
 * Module: SectionFooterGroup Module class.
 *
 * @package CAWeb\Modules\SectionFooterGroup
 * @since ??
 */

namespace CAWeb\Modules\SectionFooterGroup;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use CAWeb\Modules\Utils\Module as CAWebModule;
use CAWeb\Modules\SectionFooterGroup\ModuleTrait;

use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;

/**
 * `SectionFooterGroup` is consisted of functions used for Divi 5 Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class SectionFooterGroup extends CAWebModule {
	use ModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `SectionFooterGroup` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = CAWEB_DIVI_EXT_MODULES_JSON_PATH . 'SectionFooterGroup/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ SectionFooterGroup::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
