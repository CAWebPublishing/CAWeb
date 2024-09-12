<?php
/**
 * CAWeb Profile Banner Module (Standard)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

/**
 * CAWeb Profile Banner Module Class (Standard)
 */
class CAWeb_Module_Profile_Banner extends ET_Builder_CAWeb_Module {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_profile_banner';
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
		$this->name = esc_html__( 'Profile Banner', 'et_builder' );

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'style'  => esc_html__( 'Style', 'et_builder' ),
					'header' => esc_html__( 'Header', 'et_builder' ),
					'body'   => esc_html__( 'Body', 'et_builder' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'body' => esc_html__( 'Body', 'et_builder' ),
					'text' => array(
						'title'    => esc_html__( 'Text', 'et_builder' ),
						'priority' => 49,
					),
				),
			),
		);
	}

	/**
	 * Returns an array of all the Module Fields.
	 *
	 * @return array
	 */
	public function get_fields() {
		$general_fields = array(
			'name' => array(
				'label'           => esc_html__( 'Profile Name', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the name of the profile.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'header',
			),
			'job_title' => array(
				'label'           => esc_html__( 'Job Title', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the job title.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'header',
			),
			'profile_link' => array(
				'label'           => esc_html__( 'Profile Link', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the text for the profile link.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
				'default'         => 'Profile Link',
			),
			'url' => array(
				'label'           => esc_html__( 'Profile URL', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'default'         => '#',
				'description'     => esc_html__( 'Input the website of the profile.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
			'portrait_url' => array(
				'label'              => esc_html__( 'Portrait Image URL', 'et_builder' ),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text'        => esc_attr__( 'Choose an Image', 'et_builder' ),
				'update_text'        => esc_attr__( 'Set As Image', 'et_builder' ),
				'description'        => esc_html__( 'Upload your desired image, or type in the URL to the image you would like to display.', 'et_builder' ),
				'tab_slug'           => 'general',
				'toggle_slug'        => 'body',
			),
			'portrait_alt' => array(
				'label'           => esc_html__( 'Portrait Image Alt Text', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the alt text for the portrait image.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'body',
			),
		);

		$design_fields = array(
			'round_image' => array(
				'label'              => esc_html__( 'Round Image', 'et_builder' ),
				'type'               => 'yes_no_button',
				'option_category'    => 'configuration',
				'options'            => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'description'        => esc_html__( 'Switch to yes if you want round images in the profile banner.', 'et_builder' ),
				'tab_slug'           => 'advanced',
				'toggle_slug'        => 'body',
			),
			'is_vertical' => array(
				'label'              => esc_html__( 'Display Vertically', 'et_builder' ),
				'type'               => 'yes_no_button',
				'option_category'    => 'configuration',
				'options'            => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'description'        => esc_html__( 'Switch to yes if you want the profile banner to display vertically.', 'et_builder' ),
				'tab_slug'           => 'advanced',
				'toggle_slug'        => 'body',
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
		$name         = $this->props['name'];
		$job_title    = $this->props['job_title'];
		$profile_link = $this->props['profile_link'];
		$portrait_url = $this->props['portrait_url'];
		$portrait_alt = $this->props['portrait_alt'];
		$round        = $this->props['round_image'];
		$url          = $this->props['url'];
		$is_vertical  = $this->props['is_vertical'];


		$url = ! empty( $url ) ? esc_url( $url ) : '';

		if ( empty( $portrait_alt ) && ! empty( $portrait_url ) ) {
			$portrait_id  = attachment_url_to_postid( $portrait_url );
			$portrait_alt = get_post_meta( $portrait_id, '_wp_attachment_image_alt', true );
		}

		$figure_class = 'row';
		$image_class  = 'me-3';

		// Vertical Layout
		if( 'on' === $is_vertical ){
			$figure_class = 'column bg-light vertical';
			$image_class = 'align-self-center';
		}

		// Rounded Profile Banner.
		if ( 'on' === $round ) {
			$image_class  .= ' rounded-circle';
		}

		$image = ! empty( $portrait_url ) ? sprintf(
			'<img class="width-80 height-80 %1$s" src="%2$s"%3$s>',
			$image_class,
			$portrait_url,
			! empty( $portrait_alt ) ? sprintf( ' alt="%1$s"', $portrait_alt ) : ''
		) : '';

		$name         = ! empty( $name ) ? sprintf( '<h4 class="pb-0">%1$s</h4>', $name ) : '';
		$job_title    = ! empty( $job_title ) ? sprintf( '<span class="d-block">%1$s</span>', $job_title ) : '';
		$profile_link = ! empty( $profile_link ) ? sprintf( '<a href="%1$s">%2$s</a>', $url, $profile_link ) : '';

		$media_body = sprintf(
			'<div class="body%1$s">%2$s%3$s%4$s</div>',
			'on' === $is_vertical ? ' text-center' : '',
			$name,
			$job_title,
			$profile_link
		);

		$output = sprintf('<figure class="executive-profile p-3 d-flex flex-%1$s">%2$s%3$s</figure>',
			$figure_class,
			$image,
			$media_body
		);

		return sprintf(
			'<div%1$s class="%2$s">%3$s</div>',
			$this->module_id(),
			$this->module_classname( $render_slug ),
			$output
		);
	}
}
new CAWeb_Module_Profile_Banner();
