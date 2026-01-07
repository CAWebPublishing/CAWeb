<?php
/**
 * Register all modules with dependency tree.
 *
 * @package CAWeb\Modules
 * @since ??
 */

namespace CAWeb\Modules;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use CAWeb\Modules\ProfileBanner\ProfileBanner;
use CAWeb\Modules\Location\Location;
use CAWeb\Modules\SectionPrimary\SectionPrimary;
use CAWeb\Modules\FullwidthSectionPrimary\FullwidthSectionPrimary;
use CAWeb\Modules\Github\Github;

// This is base module for testing purposes only.
// use CAWeb\Modules\Base\Base;

add_action(
	'divi_module_library_modules_dependency_tree',
	function ( $dependency_tree ) {
		$dependency_tree->add_dependency( new ProfileBanner() );
		$dependency_tree->add_dependency( new Location() );
		$dependency_tree->add_dependency( new SectionPrimary() );
		$dependency_tree->add_dependency( new FullwidthSectionPrimary() );
		$dependency_tree->add_dependency( new Github() );
		// $dependency_tree->add_dependency( new Base() );
	}
);
