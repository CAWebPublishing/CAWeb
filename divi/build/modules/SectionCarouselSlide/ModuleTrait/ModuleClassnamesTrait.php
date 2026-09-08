<?php
/**
 * SectionCarouselSlide::module_classnames().
 *
 * @package CAWeb\Modules\SectionCarouselSlide
 * @since ??
 */

namespace CAWeb\Modules\SectionCarouselSlide\ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Packages\Module\Options\Text\TextClassnames;

trait ModuleClassnamesTrait {

	/**
	 * Module classnames function for SectionCarouselSlide module.
	 *
	 * @since ??
	 *
	 * @param array $args {
	 *     An array of arguments.
	 *
	 *     @type object $classnamesInstance Instance of ET\Builder\Packages\Module\Layout\Components\Classnames.
	 *     @type array  $attrs              Block attributes data that being rendered.
	 * }
	 */
	public static function module_classnames( $args ) {
		$classnames_instance = $args['classnamesInstance'];
		$attrs               = $args['attrs'];
		$isFirst               = $args['isFirst'];

		$classnames_instance->add( 'carousel-item', true );

		if( $isFirst ) {
			$classnames_instance->add( 'active', true );
		}

		$text_options_classnames = TextClassnames::text_options_classnames( $attrs['module']['advanced']['text'] ?? [] );

		if ( $text_options_classnames ) {
			$classnames_instance->add( $text_options_classnames, true );
		}
	}

}
