<?php
/**
 * CAWeb Profile Banner Module (Standard)
 *
 * @package CAWeb\Modules\ProfileBanner
 */

if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

class CAWeb_Module_Profile_Banner extends ET_Builder_CAWeb_Module {
	// Module slug (also used as shortcode tag)
	public $slug = 'et_pb_profile_banner';

	// Visual Builder support (off|partial|on)
	public $vb_support = 'on';

	/**
	 * Module properties initialization
	 *
	 * @since 1.0.0
	 */
	function init() {
		// Module name
		$this->name = esc_html__( 'Profile Banner', 'et_builder' );

		// Module Icon
		// Load customized svg icon and use it on builder as module icon. If you don't have svg icon, you can use
		// $this->icon for using etbuilder font-icon. (See CustomCta / DICM_CTA class)
		// $this->icon_path = plugin_dir_path( __FILE__ ) . 'icon.svg';

		// Toggle settings
		$this->settings_modal_toggles = array(
			'general'  => array(
				'toggles' => array(
					'header'  => array(
						'title'    => esc_html__( 'Header', 'et_builder' ),
						'priority' => 1,
					),
					'profile'  => array(
						'title'    => esc_html__( 'Profile', 'et_builder' ),
						'priority' => 2,
					),
					'portrait'   => array(
						'title'    => esc_html__( 'Portrait', 'et_builder' ),
						'priority' => 3,
					),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'portrait'  => array(
						'title'    => esc_html__( 'Portrait', 'et_builder' ),
						'priority' => 1,
					),
				),
			),
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
				'label'           => esc_html__( 'Link Text', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the text for the profile link.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'profile',
				'default'         => 'Link',
			),
			'url' => array(
				'label'           => esc_html__( 'URL', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'default'         => '#',
				'description'     => esc_html__( 'Input the website of the profile.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'profile',
			),
			'portrait_url' => array(
				'label'              => esc_html__( 'Image URL', 'et_builder' ),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text'        => esc_attr__( 'Choose an Image', 'et_builder' ),
				'update_text'        => esc_attr__( 'Set As Image', 'et_builder' ),
				'description'        => esc_html__( 'Upload your desired image, or type in the URL to the image you would like to display.', 'et_builder' ),
				'tab_slug'           => 'general',
				'toggle_slug'        => 'portrait',
			),
			'portrait_alt' => array(
				'label'           => esc_html__( 'Image Alt Text', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the alt text for the portrait image.', 'et_builder' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'portrait',
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
				'toggle_slug'        => 'portrait',
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
				'toggle_slug'        => 'portrait',
			),
		);

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

		// Profile Banner.
		$image = ! empty( $portrait_url ) ? sprintf(
			'<img%1$ssrc="%2$s"%3$s>',
			'on' === $round ? ' class="rounded-circle" ' : ' ',
			$portrait_url,
			! empty( $portrait_alt ) ? sprintf( ' alt="%1$s"', $portrait_alt ) : ''
		) : '';

		$name         = ! empty( $name ) ? sprintf( '<h4>%1$s</h4>', $name ) : '';
		$job_title    = ! empty( $job_title ) ? sprintf( '<span>%1$s</span>', $job_title ) : '';
		$profile_link = ! empty( $profile_link ) ? sprintf( '<a href="%1$s">%2$s</a>', $url, $profile_link ) : '';

		$media_body = sprintf(
			'<div class="body">%1$s%2$s%3$s</div>',
			$name,
			$job_title,
			$profile_link
		);

		return sprintf('<figure class="executive-profile%1$s">%2$s%3$s</figure>',
			'on' === $is_vertical ? ' vertical' : '',
			$image,
			$media_body
		);

	}
}

new CAWeb_Module_Profile_Banner();
