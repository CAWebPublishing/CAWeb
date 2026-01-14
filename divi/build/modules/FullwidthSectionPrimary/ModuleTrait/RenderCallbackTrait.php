<?php
/**
 * FullwidthSectionPrimary::render_callback()
 *
 * @package CAWeb\Modules\FullwidthSectionPrimary
 * @since ??
 */

namespace CAWeb\Modules\FullwidthSectionPrimary\ModuleTrait;

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
	 * @return string HTML rendered of FullwidthSectionPrimary module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		$title = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['title']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
			'mode' => 'getAndInheritAll',
		));

		$image = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['image']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
			'mode' => 'getAndInheritAll',
		));
		
		$link = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['link']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
			'mode' => 'getAndInheritAll',
		));

		$inner_content = array(
			self::render_image( $image, $elements ),
			self::render_header( $title ),
			$elements->render( array('attrName' => 'content') ),
			self::render_button( array_merge($link, array('text' => $title['text'] ?? '')) )
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

				// parent attrs
				// 'parentAttrs'         => $parent_attrs,
				// 'parentId'            => $parent->id ?? '',
				// 'parentName'          => $parent->blockName ?? '',
		));
		
	}


	/**
	 * Renders the Header
	 *
	 * @param array   $attrs Block attributes that were saved by VB.
	 * @return string
	 */
	static function render_header( $attrs ){
		$tag = ! empty( $attrs['level'] ) ? $attrs['level'] : 'h2';
		$alignment = ! empty( $attrs['alignment'] ) ? $attrs['alignment'] : 'start';

		$style = isset( $attrs['color'] ) && ! empty( $attrs['color'] ) ?
			sprintf( ' style="color:%1$s;"', esc_attr( $attrs['color'] ) ) : '';

		return "<{$tag} class='text-{$alignment}'>{$attrs['text']}</{$tag}>";
	}

	/**
	 * Renders the Featured Image
	 *
	 * @param array   $attrs Block attributes that were saved by VB.
	 * @param ModuleElements $elements ModuleElements instance.
	 * @return string
	 */
	static function render_image( $attrs, $elements ){

		if( isset( $attrs['show'] ) && 'off' === $attrs['show']  ){
			return;
		}
		
		$class = 'col-4';

		$class .= 'on' === $attrs['alignment'] ? ' ps-3 float-end' : ' pe-3 float-start';
		$class .= 'on' === $attrs['fade'] ? ' animate__animated  animate__fadeInLeft' : '';


		return sprintf( '<div class="%1$s">%2$s</div>', $class, $elements->render( array('attrName' => 'image') ) );
	}

	
	/**
	 * Renders the Button
	 *
	 * @param array   $attrs Block attributes that were saved by VB.
	 * @return string
	 */
	static function render_button( $attrs ){
		if( (isset( $attrs['show'] ) && 'off' === $attrs['show']) || empty( $attrs['text'] ) ){
			return;
		}

		return sprintf('<div><a href="%1$s" class="btn btn-outline-dark" target="_blank">More Information</a></div>', 
			esc_url( $attrs['url'] ), 
			esc_html( $attrs['text']  ) );
	}
}
