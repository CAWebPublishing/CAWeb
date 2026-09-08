<?php
/**
 * FullwidthSectionCarousel::render_callback()
 *
 * @package CAWeb\Modules\FullwidthSectionCarousel
 * @since ??
 */

namespace CAWeb\Modules\FullwidthSectionCarousel\ModuleTrait;

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
	 * @return string HTML rendered of FullwidthSectionCarousel module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		$children_ids = $block->parsed_block['innerBlocks'] ? array_map(
			function( $inner_block ) {
				return $inner_block['id'];
			},
			$block->parsed_block['innerBlocks']
		) : [];

		$parent       = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );
		$parent_attrs = $parent->attrs ?? [];

		$indicators = array();

		foreach( $children_ids as $index => $child_id ) {
			$indicators[] = HTMLUtility::render(array(
				'tag' => 'button',
				'attributes' => array(
					'type' => 'button',
					'data-bs-target' => "#$child_id",
					'data-bs-slide-to' => $child_id,
					'aria-label' => "Slide $index",
					'class' => ! $index ? 'active' : '',
					'aria-current' => ! $index ? 'true' : '',
				),
			));
		}

		$inner_content = array(
			HTMLUtility::render(array(
				'tag' => 'div',
				'attributes' => array(
					'class' => 'carousel-indicators',
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => implode( '', $indicators ),
			)),
		);

		$inner_content[] = HTMLUtility::render(array(
			'tag' => 'div',
			'attributes' => array(
				'class' => 'carousel-inner',
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],
			'children' => ElementComponents::component(
					[
						'attrs'         => $attrs['module']['decoration'] ?? [],
						'id'            => $block->parsed_block['id'],

						// FE only.
						'orderIndex'    => $block->parsed_block['orderIndex'],
						'storeInstance' => $block->parsed_block['storeInstance'],
					]
				) . $content,
		));

		$inner_content[] = HTMLUtility::render(array(
			'tag' => 'button',
			'attributes' => array(
				'class' => 'carousel-control-prev',
				'type' => 'button',
				'data-bs-target' => "#{$block->parsed_block['id']}",
				'data-bs-slide' => 'prev',
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],
			'children' => HTMLUtility::render(array(
				'tag' => 'span',
				'attributes' => array(
					'class' => 'carousel-control-prev-icon',
					'aria-hidden' => 'true',
				),
			)) . HTMLUtility::render(array(
				'tag' => 'span',
				'attributes' => array(
					'class' => 'visually-hidden',
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => 'Previous',
			)),
		));

		$inner_content[] = HTMLUtility::render(array(
			'tag' => 'button',
			'attributes' => array(
				'class' => 'carousel-control-next',
				'type' => 'button',
				'data-bs-target' => "#{$block->parsed_block['id']}",
				'data-bs-slide' => 'next',
			),
			'childrenSanitizer' => [self::class, 'sanitize_html'],
			'children' => HTMLUtility::render(array(
				'tag' => 'span',
				'attributes' => array(
					'class' => 'carousel-control-next-icon',
					'aria-hidden' => 'true',
				),
			)) . HTMLUtility::render(array(
				'tag' => 'span',
				'attributes' => array(
					'class' => 'visually-hidden',
				),
				'childrenSanitizer' => [self::class, 'sanitize_html'],
				'children' => 'Next',
			)),
		));

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
				'htmlAttrs'           => array(
					'data-bs-ride' => 'carousel',
				),
				'classnamesFunction'  => [ self::class, 'module_classnames' ],
				'stylesComponent'     => [ self::class, 'module_styles' ],
				'scriptDataComponent' => [ self::class, 'module_script_data' ],

				// parent attrs
				'parentAttrs'         => $parent_attrs,
				'parentId'            => $parent->id ?? '',
				'parentName'          => $parent->blockName ?? '',

				'children'            => $inner_content,
				'childrenIds'         => $children_ids,
		));
		
	}
}
