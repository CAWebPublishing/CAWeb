<?php
/**
 * Card::render_callback()
 *
 * @package CAWeb\Modules\Card
 * @since ??
 */

namespace CAWeb\Modules\Card\ModuleTrait;

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
	 * @return string HTML rendered of Card module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		// Retrieve the card layout from the block attributes
		$layout = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['layout']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		// Retrieve the showImage and image attributes from the block attributes
		$showImage = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['image']['advanced'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		))['show'] ?? 'off';
		$image = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['image']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		))['src'] ?? '';

		// Retrieve the titleAdvanced options and title attributes from the block attributes
		$titleAdvanced = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['title']['advanced'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));
		$title = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['title']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		// Retrive content and button attributes from the block attributes
		$content = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['content']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));
		$showButton = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['button']['advanced'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		))['show'] ?? 'off';
		$button = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['button']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		$buttonClass = 'light';
		switch( $layout ){
			case 'overstated':
				$buttonClass = 'main';
				break;
			case 'understated':
				$buttonClass = 'alt';
				break;
			case 'standout':
				$buttonClass = 'standout';
				break;
		}
		
		// Create the button element if showButton is 'on' and button text and linkUrl are not empty
		$buttonElement = 'on' === $showButton && ! empty( $button['text'] ) && ! empty( $button['linkUrl'] ) ? 
			sprintf('<a href="%1$s" class="btn btn-%2$s">%3$s</a>', esc_url( $button['linkUrl'] ), esc_attr( $buttonClass ), esc_html( $button['text'] )) : '';
		
		// Create the content element if content is not empty
		$content = sprintf('<div class="card-body">%1$s%2$s</div>', $content, $buttonElement );

		// Retrieve the footerAdvanced options and footer attributes from the block attributes
		$footerAdvanced = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['footer']['advanced'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		)) ?? 'off';
		$footer = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['footer']['innerContent'],
			'breakpoint' => 'desktop',
			'state' => 'value'
		));

		// Create the image element if showImage is 'on' and image is not empty
		$imgElement = 'on' === $showImage && ! empty( $image ) ? sprintf('<img src="%s" class="card-image-top img-responsive" />', $image) : '';

		// Create the header element if titleAdvanced show is 'on' and title is not empty
		$headerElement = 'on' === $titleAdvanced['show'] && ! empty( $title ) ? 
			sprintf('<%1$s class="card-header"%2$s>%3$s</%1$s>', 
				$titleAdvanced['size'], 
				! empty( $titleAdvanced['color'] ) ? sprintf(' style="color: %s;"', esc_attr( $titleAdvanced['color'] )) : '', 
				$title
			) : '';
		
		// Create the footer element if footerAdvanced show is 'on' and footer is not empty
		$footerElement = 'on' === $footerAdvanced['show'] && ! empty( $footer ) ? 
			sprintf('<div class="card-footer"%s>%s</div>', 
				! empty( $footerAdvanced['color'] ) ? sprintf(' style="color: %s;"', esc_attr( $footerAdvanced['color'] )) : '', 
				$footer
			) : '';
		
		$inner_content = array(
			$imgElement,
			$headerElement,
			$content,
			$footerElement
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

}
