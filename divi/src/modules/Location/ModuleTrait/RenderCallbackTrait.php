<?php
/**
 * Location::render_callback()
 *
 * @package CAWeb\Modules\Location
 * @since ??
 */

namespace CAWeb\Modules\Location\ModuleTrait;

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
	 * @return string HTML rendered of Location module.
	 */
	public static function render_callback( $attrs, $content, $block, $elements ) {
		// layout.
		$layout = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['layout']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
			'mode' => 'getAndInheritAll',
		));

		$address = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['address']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
			'mode' => 'getAndInheritAll',
		));

		$contact = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['contact']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
			'mode' => 'getAndInheritAll',
		));

		$icon = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['icon']['innerContent'] ?? $attrs,
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

		$name = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['name']['innerContent'] ?? $attrs,
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

		$desc = ModuleUtils::get_attr_value(array(
			'attr' => $attrs['desc']['innerContent'] ?? $attrs,
			'breakpoint' => 'desktop',
			'state' => 'value',
			'mode' => 'getAndInheritAll',
		));

		$body = '';

		switch( $layout ){
			case 'mini':
				$body = self::render_mini( array(
					'address' => $address,
					'icon'    => $icon,
					'link'    => $link,
					'name'    => $name,
				), $elements );
				break;
			case 'banner':
				$body = self::render_banner( array(
					'address' => $address,
					'image'    => $image,
					'link'    => $link,
					'desc'    => $desc,
					'name'    => $name,
				), $elements );
				break;
			case 'contact':
			default:
				$body = self::render_contact( array(
					'address' => $address,
					'contact'    => $contact,
					'icon'    => $icon,
					'link'    => $link,
					'name'    => $name,
				), $elements );
				break;
		}

		$inner_content = HTMLUtility::render(array(
			'tag'               => 'div',
			'attributes'        => array(
				'class' => array(
					'location',
					$layout
				),
			),
			'childrenSanitizer' => 'et_core_esc_previously',
			'children'          => array( $body ),
			));

		// $parent       = BlockParserStore::get_parent( $block->parsed_block['id'], $block->parsed_block['storeInstance'] );
		// $parent_attrs = $parent->attrs ?? [];

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
	 * Renders Location (contact).
	 *
	 * @since ??
	 *
	 * @param array          $attrs Block attributes that were saved by VB.
	 * @param string         $content          Block content.
	 * @param \WP_Block      $block            Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of Location module.
	 */
	static function render_contact( $attrs, $elements ) {
		$address = $attrs['address'] ?? '';
		$contact = $attrs['contact'] ?? '';
		$icon = $attrs['icon'] ?? '';
		$link = $attrs['link'] ?? '';
		
  		// get a map link if address info exists
		$addressMapLink = self::render_address_map_link( $address );
		
		// If displaying an icon
		// $displayIcon   = 'on' === icon?.show ? <div className="thumbnail">{get_icon_span(icon?.icon)}</div> : <></>;

		// show contact info if enabled
		$displayOther = 'on' === $contact['show'] ? 
			sprintf('%1$s%2$s',
				! empty( $contact['phone'] ) ? sprintf('<p>General Information: %1$s</p>', $contact['phone']) : '',
				! empty( $contact['fax'] ) ? sprintf('<p>FAX: %1$s</p>', $contact['fax']) : ''
			) : '';

					
		$linkElement = ! empty( $link['url'] )  && 'on' === $link['show'] ?
			sprintf('<a href="%1$s" class="btn btn-outline-dark" target="_blank">More</a>', $link['url'])
			: '';
			
		 // we combine all contact info elements here
		$contactInfo = ( 
			! empty( $attrs['name'] )  ||
			! empty( $displayOther ) ||
			! empty( $addressMapLink ) ||
			! empty( $linkElement )
		) ? 
		sprintf('<div class="contact">%1$s%2$s%3$s%4$s</div>', 
			$elements->render(array('attrName' => 'name')),
			$addressMapLink, 
			$displayOther, 
			$linkElement
		) : '';

		return sprintf('%1$s',$contactInfo);
	}
	
	/**
	 * Renders Location (mini).
	 *
	 * @since ??
	 *
	 * @param array          $attrs Block attributes that were saved by VB.
	 * @param string         $content          Block content.
	 * @param \WP_Block      $block            Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of Location module.
	 */
	static function render_mini( $attrs, $elements  ) {
		$address = $attrs['address'] ?? '';
		$icon = $attrs['icon'] ?? '';
		$link = $attrs['link'] ?? '';
		$name = $attrs['name'] ?? '';
		
  		// get a map link if address info exists
		$addressMapLink = self::render_address_map_link( $address );
		
		// If displaying an icon
		// $displayIcon   = 'on' === icon?.show ? <div className="thumbnail">{get_icon_span(icon?.icon)}</div> : <></>;

		// we wrap the name in a link if a link url is provided
		$nameElement = ! empty( $link['name'] )  ?
			! empty( $link['url'] ) ?
			sprintf('<a href="%1$s" target="_blank">%2$s</a>', $link['url'], $link['name'])
			:
			$elements->render(array('attrName' => 'name'))
			: '';
			
		 // we combine all contact info elements here
		$contactInfo = ( 
			! empty( $nameElement )  ||
			! empty( $addressMapLink ) 
		) ? 
		sprintf('<div class="contact">%1$s%2$s</div>', 
			$nameElement,
			$addressMapLink
		) : '';

		return sprintf('%1$s',$contactInfo);
	}

	/**
	 * Renders Location (mini).
	 *
	 * @since ??
	 *
	 * @param array          $attrs Block attributes that were saved by VB.
	 * @param string         $content          Block content.
	 * @param \WP_Block      $block            Parsed block object that being rendered.
	 * @param ModuleElements $elements ModuleElements instance.
	 *
	 * @return string HTML rendered of Location module.
	 */
	static function render_banner( $attrs, $elements  ) {
		$address = $attrs['address'] ?? '';
		$link = $attrs['link'] ?? '';
		$name = $attrs['name'] ?? '';
		$desc = $attrs['desc'] ?? '';
		$image = $attrs['image'] ?? '';
		
		$imageElement = ! empty( $image['src'] ) ?
    		sprintf('<div class="thumbnail">%1$s</div>', $elements->render(array('attrName' => 'image')))
			: '';
  		
			// get a map link if address info exists
		$addressMapLink = self::render_address_map_link( $address );
		
  		// Add description markup
		$descElement = ! empty( $desc ) ?
			sprintf('<strong>Description:</strong>%1$s', $elements->render(array('attrName' => 'desc')))
			: '';

		$linkElement = ! empty( $link['url'] )  && 'on' === $link['show'] ?
			sprintf('<a href="%1$s" class="btn btn-outline-dark" target="_blank">View More Details</a>', $link['url'])
			: '';
						
		// we combine all contact info elements here
		$contactInfo = ( 
			! empty( $attrs['name'] )  ||
			! empty( $addressMapLink ) 
		) ? 
		sprintf('<div class="contact">%1$s%2$s</div>', 
			$elements->render(array('attrName' => 'name'))	,
			! empty ($addressMapLink) ? sprintf('<div class="address">%1$s%2$s</div>', self::get_icon_span('road-pin'), $addressMapLink) : ''
		) : '';

		// we combine all summary info elements here
		$summaryInfo = ( 
			! empty( $descElement )  ||
			! empty( $linkElement ) 
		) ? 
		sprintf('<div class="summary">%1$s%2$s</div>', 
			$descElement,
			$linkElement
		) : '';

		return sprintf('%1$s%2$s%3$s', $imageElement, $contactInfo, $summaryInfo);
	}

}
