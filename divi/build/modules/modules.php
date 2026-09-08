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

// Standard modules
use CAWeb\Modules\ProfileBanner\ProfileBanner;
use CAWeb\Modules\Location\Location;
use CAWeb\Modules\SectionPrimary\SectionPrimary;
use CAWeb\Modules\Github\Github;
use CAWeb\Modules\Card\Card;
use CAWeb\Modules\Panel\Panel;
use CAWeb\Modules\SectionFooter\SectionFooter;
use CAWeb\Modules\SectionFooterGroup\SectionFooterGroup;
use CAWeb\Modules\SectionCarousel\SectionCarousel;
use CAWeb\Modules\SectionCarouselSlide\SectionCarouselSlide;
use CAWeb\Modules\PostList\PostList;

// Fullwidth modules
use CAWeb\Modules\FullwidthSectionPrimary\FullwidthSectionPrimary;
use CAWeb\Modules\FullwidthPanel\FullwidthPanel;
use CAWeb\Modules\FullwidthSectionFooter\FullwidthSectionFooter;
use CAWeb\Modules\FullwidthSectionFooterGroup\FullwidthSectionFooterGroup;
use CAWeb\Modules\FullwidthSectionCarousel\FullwidthSectionCarousel;
use CAWeb\Modules\FullwidthSectionCarouselSlide\FullwidthSectionCarouselSlide;
use CAWeb\Modules\FullwidthServiceTiles\FullwidthServiceTiles;
use CAWeb\Modules\FullwidthServiceTilesItem\FullwidthServiceTilesItem;

add_action(
	'divi_module_library_modules_dependency_tree',
	function ( $dependency_tree ) {

		// Add Standard Modules
		$dependency_tree->add_dependency( new ProfileBanner() );
		$dependency_tree->add_dependency( new Location() );
		$dependency_tree->add_dependency( new SectionPrimary() );
		$dependency_tree->add_dependency( new Github() );
		$dependency_tree->add_dependency( new Card() );
		$dependency_tree->add_dependency( new Panel() );
		$dependency_tree->add_dependency( new SectionFooter() );
		$dependency_tree->add_dependency( new SectionFooterGroup() );
		$dependency_tree->add_dependency( new SectionCarousel() );
		$dependency_tree->add_dependency( new SectionCarouselSlide() );
		$dependency_tree->add_dependency( new PostList() );

		// Add Fullwidth Modules
		$dependency_tree->add_dependency( new FullwidthSectionPrimary() );
		$dependency_tree->add_dependency( new FullwidthPanel() );
		$dependency_tree->add_dependency( new FullwidthSectionFooter() );
		$dependency_tree->add_dependency( new FullwidthSectionFooterGroup() );
		$dependency_tree->add_dependency( new FullwidthSectionCarousel() );
		$dependency_tree->add_dependency( new FullwidthSectionCarouselSlide() );
		$dependency_tree->add_dependency( new FullwidthServiceTiles() );
		$dependency_tree->add_dependency( new FullwidthServiceTilesItem() );
	}
);
