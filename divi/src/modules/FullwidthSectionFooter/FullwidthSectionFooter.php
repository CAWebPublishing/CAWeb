<?php
/**
 * Module: Fullwidth Section Footer Module class.
 *
 * @package CAWeb\Modules\FullwidthSectionFooter
 * @since ??
 */

namespace CAWeb\Modules\FullwidthSectionFooter;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use CAWeb\Modules\Utils\Module as CAWebModule;
use CAWeb\Modules\FullwidthSectionFooter\ModuleTrait;

use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;

/**
 * `FullwidthSectionFooter` is consisted of functions used for Divi 5 Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class FullwidthSectionFooter extends CAWebModule {
	use ModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `FullwidthSectionFooter` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = CAWEB_DIVI_EXT_MODULES_JSON_PATH . 'FullwidthSectionFooter/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ FullwidthSectionFooter::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
