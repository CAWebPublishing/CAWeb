<?php
/**
 * FullwidthSectionCarouselSlide::render_callback()
 *
 * @package CAWeb\Modules\FullwidthSectionCarouselSlide
 * @since ??
 */

namespace CAWeb\Modules\FullwidthSectionCarouselSlide\ModuleTrait;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// phpcs:disable ET.Sniffs.ValidVariableName.UsedPropertyNotSnakeCase -- WP use snakeCase in \WP_Block_Parser_Block

use ET\Builder\Packages\Module\Module;
use ET\Builder\Packages\ModuleUtils\ModuleUtils;
use ET\Builder\Framework\Utility\HTMLUtility;
use ET\Builder\FrontEnd\BlockParser\BlockParserStore;
use ET\Builder\Packages\Module\Options\Element\ElementComponents;

trait RenderCallbackTrait {
	use ModuleClassnamesTrait;
	use ModuleStylesTrait;
	use ModuleScriptDataTrait;

	/**
	 * Divi 5 module render callback which outputs server side rendered HTML on the Front-End.
	 *
	 * @since ??
	 *
	 * @param array          $attrs Block attributes that were saved by VB.
	 * @param string         $content          Block content.
	 * @param \WP_Block      $block            Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of FullwidthSectionCarouselSlide module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		$title = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['title']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		));

		$title_size = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['title']['advanced'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		))['size'] ?? '';	
	
		$linkUrl = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['button']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		))['linkUrl'];
		
		$show = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['button']['advanced'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
		))['show'];

		update_site_option('dev', $linkUrl);

		// Use the BlockParserStore to determine if this is the first slide.
		$isFirst = BlockParserStore::is_first($block->parsed_block['id']);

		$inner_content = array(
			$elements->render(array(
				'attrName' => 'image',
				'attributes' => array(
					'class' => 'd-block w-100',
				),
			)),
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'carousel-caption d-block',
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => array(
					$elements->render(array(
						'attrName' => 'title',
						'tagName' => $title_size,
					)),
					$elements->render(array(
						'attrName' => 'desc',
					)),
					'on' === $show && ! empty( $linkUrl ) && ! empty( $title ) ?
						sprintf('<br /><a href="%1$s" class="btn btn-primary" target="_blank"><strong>More Information<span class="sr-only">More information about %2$s</span></strong></a>', esc_url( $linkUrl ), $title ) : ''
				)
			))
		);

		return Module::render(array(
				// FE only.
				'orderIndex'          => $block->parsed_block['orderIndex'],
				'storeInstance'       => $block->parsed_block['storeInstance'],

				// VB equivalent.
				'id'                  => $block->parsed_block['id'],
				'moduleCategory'      => $block->block_type->category,
				'name'                => $block->block_type->name,
				'attrs'               => $attrs,
				'elements'            => $elements,
				'children'            =>  $inner_content,

				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],

				'isFirst' => $isFirst,
				// parent attrs
				// 'parentAttrs'         => $parent_attrs,
				// 'parentId'            => $parent->id ?? '',
				// 'parentName'          => $parent->blockName ?? '',
		));
		
	}

}
