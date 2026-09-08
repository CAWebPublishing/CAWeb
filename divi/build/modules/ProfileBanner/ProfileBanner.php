<?php
/**
 * Module: Profile Banner Module class.
 *
 * @package CAWeb\Modules\ProfileBanner
 * @since ??
 */

namespace CAWeb\Modules\ProfileBanner;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use CAWeb\Modules\Utils\Module as CAWebModule;
use CAWeb\Modules\ProfileBanner\ModuleTrait;

use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;

/**
 * `ProfileBanner` is consisted of functions used for Divi 5 Module such as Front-End rendering, REST API Endpoints etc.
 *
 * This is a dependency class and can be used as a dependency for `DependencyTree`.
 *
 * @since ??
 */
class ProfileBanner extends CAWebModule {
	use ModuleTrait\RenderCallbackTrait;

	/**
	 * Loads `ProfileBanner` and registers Front-End render callback and REST API Endpoints.
	 *
	 * @since ??
	 *
	 * @return void
	 */
	public function load() {
		$module_json_folder_path = CAWEB_DIVI_EXT_MODULES_JSON_PATH . 'ProfileBanner/';

		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[
						'render_callback' => [ ProfileBanner::class, 'render_callback' ],
					]
				);
			}
		);
	}
}
