<?php
/**
 * CAWeb Test Module (Standard)
 *
 * @package CAWeb\Modules\Test
 */
if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

class CAWeb_Module_Test extends ET_Builder_CAWeb_Module {
	// Module slug (also used as shortcode tag)
	public $slug = 'et_pb_ca_test';

	// Visual Builder support (off|partial|on)
	public $vb_support = 'on';

	/**
	 * Module properties initialization
	 *
	 * @since 1.0.0
	 */
	function init() {
		// Module name
		$this->name = esc_html__( 'CAWeb Test', 'et_builder' );

		// Module Icon
		// Load customized svg icon and use it on builder as module icon. If you don't have svg icon, you can use
		// $this->icon for using etbuilder font-icon. (See CustomCta / DICM_CTA class)
		// $this->icon_path = plugin_dir_path( __FILE__ ) . 'icon.svg';

		/**
		 * Settings Modals do not make sense
		 * @see https://www.elegantthemes.com/documentation/developers/divi-module/advanced-field-types-for-module-settings/
		 * 
		 * tab_slug: References are mixed up (shrug)
		 *    general - Content Tab of the Module Settings Modal
		 *    advanced - Design Tab of the Module Settings Modal
		 *    custom_css - Advanced Tab of the Module Settings Modal
		 *
		 * toggle_slug: see https://www.elegantthemes.com/documentation/developers/divi-module/module-settings-groups/
		 * @since Divi 4.27.4
		 */

		// Toggle Design Settings
		// Some properties are added automatically by Divi
		// You can disable all advanced design settings by setting this property to false.
		// $this->advanced_fields = false;
		$this->advanced_fields = array(
			'background' 	 => false,
			'border'     	 => false,
			'box_shadow' 	 => false,
			'button'   		 => false,
			'filters'	 	 => false,
			'fonts'       	 => false,
			'margin_padding' => false,
			'max_width'		 => false,
			'text'       	 => false,
			'animation'    	 => false,
			'position'    	 => false,
		);

	}

	/**
	 * Module's specific fields
	 *
	 * @since 1.0.0
	 *
	 * @return array
	 */
	function get_fields() {
		$general_fields = array(
			'title' => array(
				'label'           => esc_html__( 'Title', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the title.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
			'content' => array(
				'label'           => esc_html__( 'Content', 'et_builder' ),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the content.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			)
		);

		$design_fields = array();

		$advanced_fields = array();

		return array_merge( $general_fields, $design_fields, $advanced_fields );
	}

	/**
	 * Render module output
	 *
	 * @since 1.0.0
	 *
	 * @param array  $attrs       List of unprocessed attributes
	 * @param string $content     Content being processed
	 * @param string $render_slug Slug of module that is used for rendering output
	 *
	 * @return string module's rendered output
	 */
	function render( $attrs, $content, $render_slug ) {
		$title         = $this->props['title'];
		$content    = $this->props['content'];

		return sprintf(
			'<div%1$s class="%2$s">%3$s%4$s</div>',
			$this->module_id(),
			$this->module_classname( $render_slug ),
			$title,
			$content
		);
	}
}

new CAWeb_Module_Test();
