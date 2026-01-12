<?php
/**
 * CAWeb Section Primary Module (Standard)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

/**
 * CAWeb Section Primary Module Class (Standard)
 */
class CAWeb_Module_Section_Primary extends ET_Builder_CAWeb_Module {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_section_primary';
	/**
	 * Visual Builder Support
	 *
	 * @var string Whether or not this module supports Divi's Visual Builder.
	 */
	public $vb_support = 'on';

	/**
	 * Module Initialization
	 *
	 * @return void
	 */
	public function init() {
		$this->name             = esc_html__( 'Section - Primary', 'caweb' );
		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'header' => esc_html__( 'Header', 'caweb' ),
					'body'   => esc_html__( 'Body', 'caweb' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'header' => esc_html__( 'Header', 'caweb' ),
					'style'  => esc_html__( 'Style', 'caweb' ),
				),
			),
		);

		add_filter('et_pb_module_shortcode_attributes', [$this, 'maybe_override_shortcode_attributes'], 10, 6);

	}
	
	/**
	 * Maybe override shortcode attributes.
	 *
	 * @param array  $attrs Shortcode attributes.
	 * @param array  $unprocessed_attrs Attributes that have not yet been processed.
	 * @param string $module_slug Internal system name for the module type.
	 * @param string $module_address Location of the current module on the page.
	 * @param string $content Text/HTML content within the current module.
	 * @param bool   $maybe_global_presets_migration Whether to include global presets.
	 *
	 * @since 1.14.0
	 *
	 * @return array
	 */
	public function maybe_override_shortcode_attributes( $attrs, $unprocessed_attrs, $module_slug, $module_address, $content = '', $maybe_global_presets_migration = false ) {

		if ( $this->slug === $module_slug ) {
			// Override heading alignment to match new Bootstrap classes.
			if ( isset( $attrs['heading_align'] ) ) {
				$attrs['heading_align'] = 'left' === $attrs['heading_align'] ? 'start' : $attrs['heading_align'];
				$attrs['heading_align'] = 'right' === $attrs['heading_align'] ? 'end' : $attrs['heading_align'];
			}

			// Add default heading size if not set.
			if ( empty( $attrs['heading_size'] ) ) {
				$attrs['heading_size'] = 'h2';
			}
		}

		return $attrs;
	}

	/**
	 * Returns an array of all the Module Fields.
	 *
	 * @return array
	 */
	public function get_fields() {
		$general_fields = array(
			'section_heading' => array(
				'label'           => esc_html__( 'Title', 'caweb' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Define the title for the section.', 'caweb' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'header',
			),
			'featured_image_button' => array(
				'label'           => esc_html__( 'Featured Image', 'caweb' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'caweb' ),
					'on'  => esc_html__( 'Yes', 'caweb' ),
				),
				'default'         => 'on',
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
			'left_right_button' => array(
				'label'           => esc_html__( 'Image Position', 'caweb' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on' => esc_html__( 'Left', 'caweb' ),
					'off'  => esc_html__( 'Right', 'caweb' ),
				),
				'show_if'         => array( 'featured_image_button' => 'on' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
			'section_image' => array(
				'label'              => esc_html__( 'Image', 'caweb' ),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'caweb' ),
				'choose_text'        => esc_attr__( 'Choose a Gallery Image', 'caweb' ),
				'update_text'        => esc_attr__( 'Set As Background', 'caweb' ),
				'description'        => esc_html__( 'If defined, this image will be used as the background for this module. To remove a background image, simply delete the URL from the settings field.', 'caweb' ),
				'tab_slug'           => 'general',
				'toggle_slug'        => 'body',
				'show_if'            => array( 'featured_image_button' => 'on' ),
			),
			'slide_image_button' => array(
				'label'           => esc_html__( 'Fade Image from Left', 'caweb' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'caweb' ),
					'on'  => esc_html__( 'Yes', 'caweb' ),
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
				'show_if'         => array( 'featured_image_button' => 'on' ),
			),
			'show_more_button' => array(
				'label'           => esc_html__( 'More Information Button', 'caweb' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'caweb' ),
					'on'  => esc_html__( 'Yes', 'caweb' ),
				),
				'default'         => 'off',
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
			'section_link' => array(
				'label'           => esc_html__( 'Link URL', 'caweb' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'URL destination for the button.', 'caweb' ),
				'show_if'         => array( 'show_more_button' => 'on' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
			'content' => array(
				'label'           => esc_html__( 'Content', 'caweb' ),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can create the content that will be used within the module.', 'caweb' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
		);

		$design_fields = array(
			'heading_text_color' => array(
				'label'             => esc_html__( 'Heading Text Color', 'caweb' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom heading color for the title.', 'caweb' ),
				'tab_slug'          => 'advanced',
				'toggle_slug'       => 'header',
			),
			'heading_align' => array(
				'label'           => esc_html__( 'Heading Alignment', 'caweb' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => array(
					'start'   => esc_html__( 'Left', 'caweb' ),
					'center' => esc_html__( 'Center', 'caweb' ),
					'end'  => esc_html__( 'Right', 'caweb' ),
				),
				'show_if'         => array( 'featured_image_button' => 'off' ),
				'tab_slug'        => 'advanced',
				'toggle_slug'     => 'header',
			),
			'heading_size' => array(
				'label'             => esc_html__( 'Header Size', 'caweb' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => $this->get_text_sizes( array( 'p', 'h6' ) ),
				'default'           => 'h2',
				'description'       => esc_html__( 'Here you can choose the size for the panel header', 'caweb' ),
				'tab_slug'          => 'advanced',
				'toggle_slug'       => 'header',
			),
			'section_background_color' => array(
				'label'             => esc_html__( 'Background Color', 'caweb' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'caweb' ),
				'tab_slug'          => 'advanced',
				'toggle_slug'       => 'style',
			),
		);

		$advanced_fields = array();

		return array_merge( $general_fields, $design_fields, $advanced_fields );
	}

	/**
	 * Renders the Module on the frontend
	 *
	 * @param  mixed $unprocessed_props Module Props before processing.
	 * @param  mixed $content Module Content.
	 * @param  mixed $render_slug Module Slug Name.
	 * @return string
	 */
	public function render( $unprocessed_props, $content, $render_slug ) {
		$featured_image_button    = $this->props['featured_image_button'];
		$show_more_button         = $this->props['show_more_button'];
		$section_background_color = $this->props['section_background_color'];

		$header         = $this->renderHeader( $featured_image_button );
		$display_button = 'on' === $show_more_button ? $this->renderMoreButton() : '';

		return sprintf( '%1$s<div>%2$s%3$s%4$s</div>',
				'on' === $featured_image_button ? $this->renderFeaturedImage() : '',
				$header,
				$this->content,
				$display_button
			);
	}

	/**
	 * Get wrapper settings. Combining module-defined wrapper settings with default wrapper settings
	 *
	 * @since 3.1
	 *
	 * @param string $render_slug module slug.
	 *
	 * @return array
	 */
	protected function get_wrapper_settings( $render_slug = '' ) {
		$wrapper_settings = parent::get_wrapper_settings( $render_slug );
		// get current attrs as array
		$attrs = isset( $wrapper_settings['attrs'] ) ? (array) $wrapper_settings['attrs'] : array();
		
		// add section class
		$attrs['class'] = isset( $attrs['class'] ) ? $attrs['class'] . ' section' : 'section';

		// get background color
		$section_background_color = $this->props['section_background_color'];

		// add background color style if set
		if ( ! empty( $section_background_color ) ) {
			$attrs['style'] = "background: $section_background_color;";
		}

		// if on the Frontend, we can just assign attrs since its an array
		if( is_array( $wrapper_settings['attrs'] ) ){
			$wrapper_settings['attrs'] = $attrs;
		// VB is expecting an associative array correctly encoded with wp_json_encode 
		}else if( is_object( $wrapper_settings['attrs'] ) ){
			$wrapper_settings['outer_attrs'] = wp_json_encode( array(
				'class' => 'section'
			));
			
			// $wrapper_settings['inner_attrs'] = array( 'class' => 'section' );
			// $wrapper_settings['attrs'] = "{\"style\": 'background: $section_background_color; ', \"class\": 'section' }";
		}

		return $wrapper_settings;
	}	

	/**
	 * Renders the Header
	 *
	 * @param  mixed $featured_image_button Whether to show featured image or not.
	 * @return string
	 */
	public function renderHeader( $featured_image_button = 'on' ) {
		$heading_size       = $this->props['heading_size'];
		$heading_text_color = $this->props['heading_text_color'];
		$heading_align      = $this->props['heading_align'];
		$section_heading    = $this->props['section_heading'];

		$heading_style = ! empty( $heading_text_color ) ? sprintf( ' style="color: %1$s;" ', $heading_text_color ) : '';
		$heading_class = 'off' === $featured_image_button ? sprintf( ' class="text-%1$s"', $heading_align ) : '';
		return "<$heading_size$heading_style$heading_class>$section_heading</$heading_size>";
	}

	/**
	 * Renders the More Button
	 *
	 * @return string
	 */
	public function renderMoreButton() {
		$section_link    = $this->props['section_link'];
		$section_heading = $this->props['section_heading'];

		if ( empty( $section_link ) ) {
			return;
		}

		return sprintf( '<div><a href="%1$s" class="btn btn-outline-dark" target="_blank">More Information<span class="sr-only">More information about %2$s</span></a></div>', esc_url( $section_link ), $section_heading );
	}

	/**
	 * Renders the Featured Image
	 *
	 * @return string
	 */
	public function renderFeaturedImage() {
		$slide_image_button = $this->props['slide_image_button'];
		$image_pos          = $this->props['left_right_button'];
		$section_image      = $this->props['section_image'];
		$class              = '';

		$class .= 'on' === $slide_image_button ? ' animate__animated  animate__fadeInLeft' : '';
		$class .= 'on' === $image_pos ? ' ps-3 float-end' : ' pe-3 float-start';

		$alt_text      = caweb_get_attachment_post_meta( $section_image, '_wp_attachment_image_alt' );
		$section_image = sprintf( '<img src="%1$s" alt="%2$s" />', $section_image, $alt_text );

		return sprintf( '<div class="col-4%1$s">%2$s</div>', $class, $section_image );
	}
}

new CAWeb_Module_Section_Primary();