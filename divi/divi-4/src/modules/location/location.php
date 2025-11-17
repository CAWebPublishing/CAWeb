<?php
/**
 * CAWeb Location Module Class (Standard)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

/**
 * CAWeb Location Module Class (Standard)
 */
class CAWeb_Module_Location extends ET_Builder_CAWeb_Module {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_location_widget';
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
		$this->name             = esc_html__( 'Location', 'caweb-divi-modules' );

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'style'  => esc_html__( 'Style', 'caweb-divi-modules' ),
					'location'   => esc_html__( 'Location', 'caweb-divi-modules' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'icon' => esc_html__( 'Icon', 'caweb-divi-modules' ),
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
			'location_layout' => array(
				'label'             => esc_html__( 'Style', 'caweb-divi-modules' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'contact' => esc_html__( 'Contact', 'caweb-divi-modules' ),
					'mini'    => esc_html__( 'Mini', 'caweb-divi-modules' ),
					'banner'  => esc_html__( 'Banner', 'caweb-divi-modules' ),
				),
				'description'       => esc_html__( 'Here you can choose the style in which to display the location', 'caweb-divi-modules' ),
				'tab_slug'          => 'general',
				'toggle_slug'       => 'style',
			),
			'featured_image' => array(
				'label'              => esc_html__( 'Set Featured Image', 'caweb-divi-modules' ),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'caweb-divi-modules' ),
				'choose_text'        => esc_attr__( 'Choose a Background Image', 'caweb-divi-modules' ),
				'update_text'        => esc_attr__( 'Set As Background', 'caweb-divi-modules' ),
				'description'        => esc_html__( 'This image will be used as the main image for this location.', 'caweb-divi-modules' ),
				'show_if'            => array( 'location_layout' => 'banner' ),
				'tab_slug'           => 'general',
				'toggle_slug'        => 'style',
			),
			'name' => array(
				'label'           => esc_html__( 'Name', 'caweb-divi-modules' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a name for the location.', 'caweb-divi-modules' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			),
			'desc' => array(
				'label'           => esc_html__( 'Description', 'caweb-divi-modules' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a description of the location.', 'caweb-divi-modules' ),
				'show_if'         => array( 'location_layout' => 'banner' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			),
			'addr' => array(
				'label'           => esc_html__( 'Address', 'caweb-divi-modules' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter an address.', 'caweb-divi-modules' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			),
			'city' => array(
				'label'           => esc_html__( 'City', 'caweb-divi-modules' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a city.', 'caweb-divi-modules' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			),
			'state' => array(
				'label'           => esc_html__( 'State', 'caweb-divi-modules' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a state.', 'caweb-divi-modules' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			),
			'zip' => array(
				'label'           => esc_html__( 'Zip', 'caweb-divi-modules' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter an zip.', 'caweb-divi-modules' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			),
			'show_contact' => array(
				'label'           => esc_html__( 'Contact information', 'caweb-divi-modules' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'caweb-divi-modules' ),
					'on'  => esc_html__( 'Yes', 'caweb-divi-modules' ),
				),
				'show_if'         => array( 'location_layout' => 'contact' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			),
			'phone' => array(
				'label'           => esc_html__( 'Phone Number', 'caweb-divi-modules' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a phone number.', 'caweb-divi-modules' ),
				'show_if'         => array( 'location_layout' => 'contact', 'show_contact' => 'on' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			),
			'fax' => array(
				'label'           => esc_html__( 'Fax Number', 'caweb-divi-modules' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a fax number.', 'caweb-divi-modules' ),
				'show_if'         => array( 'location_layout' => 'contact', 'show_contact' => 'on' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			),
			'show_button' => array(
				'label'           => esc_html__( 'Button', 'caweb-divi-modules' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'caweb-divi-modules' ),
					'on'  => esc_html__( 'Yes', 'caweb-divi-modules' ),
				),
				'show_if_not'     => array( 'location_layout' => 'mini' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			),
			'location_link' => array(
				'label'           => esc_html__( 'URL', 'caweb-divi-modules' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the URL for the location.', 'caweb-divi-modules' ),
				'show_if'         => array( 'show_button' => 'on' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'location',
			)
		);

		$design_fields = array(
			'show_icon' => array(
				'label'           => esc_html__( 'Use Icon', 'caweb-divi-modules' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'caweb-divi-modules' ),
					'on'  => esc_html__( 'Yes', 'caweb-divi-modules' ),
				),
				'show_if_not'     => array( 'location_layout' => 'banner' ),
				'tab_slug'        => 'advanced',
				'toggle_slug'     => 'icon',
			),
			'font_icon' => array(
				'label'               => esc_html__( 'Icon', 'caweb-divi-modules' ),
				'type'                => 'text',
				'option_category'     => 'configuration',
				'class'               => array( 'et-pb-font-icon' ),
				'renderer'            => 'select_icon',
				'renderer_with_field' => true,
				'default'             => '%-1%',
				'description'         => esc_html__( 'Select an icon.', 'caweb-divi-modules' ),
				'show_if'             => array( 'show_icon' => 'on' ),
				'tab_slug'            => 'advanced',
				'toggle_slug'         => 'icon',
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
		$location_layout = $this->props['location_layout'];

		if ( 'contact' === $location_layout ) {
			$output = $this->contactLocation();
		} elseif ( 'mini' === $location_layout ) {
			$output = $this->miniLocation();
		} else {
			$output = $this->bannerLocation();
		}

		return sprintf( '<div class="location %1$s">%2$s</div>', $location_layout, $output );
	}

	/**
	 * Renders Location (contact)
	 *
	 * @return string
	 */
	public function contactLocation() {
		$show_contact  = $this->props['show_contact'];
		$phone         = $this->props['phone'];
		$fax           = $this->props['fax'];
		$show_button   = $this->props['show_button'];
		$location_link = $this->props['location_link'];
		$name          = $this->props['name'];
		$addr          = $this->props['addr'];
		$city          = $this->props['city'];
		$state         = $this->props['state'];
		$zip           = $this->props['zip'];
		$show_icon     = $this->props['show_icon'];
		$icon          = $this->props['font_icon'];

		$display_other  = '';
		$display_button = '';
        
        // If displaying an icon
		$display_icon   = 'on' === $show_icon ? sprintf('<div class="thumbnail">%1$s</div>', $this->caweb_get_icon_span( $icon )) : '';

        // wrap name in strong tag
        $name = ! empty( $name ) ? sprintf('<strong>%1$s</strong>', $name) : '';

        // get a map link if address info exists
        $address = (
            ! empty( $addr ) ||
            ! empty( $city ) ||
            ! empty( $state ) ||
            ! empty( $zip )
        ) ? $this->caweb_get_google_map_place_link( array( $addr, $city, $state, $zip ) ) : '';

        // show contact info if enabled
		if ( 'on' === $show_contact ) {
			$phone         = ! empty( $phone ) ? "<p>General Information: {$phone}</p>" : '';
			$fax           = ! empty( $fax ) ? "<p>FAX: {$fax}</p>" : '';
			$display_other = "{$phone}{$fax}";
		}

        // if show button is enabled and location link exists
		if ( 'on' === $show_button && ! empty( $location_link ) ) {
			$display_button = sprintf( '<a href="%1$s" class="btn btn-outline-dark" target="_blank">More</a>', $location_link );
		}

        $contact = (
            ! empty( $name ) ||
            ! empty( $address ) ||
            ! empty( $display_other ) ||
            ! empty( $display_button )
        ) ? sprintf(
            '<div class="contact">%1$s%2$s%3$s%4$s</div>',
                $name,
                $address,
                $display_other,
                $display_button
            ) : '';
		return sprintf(
			'%1$s%2$s',
			$display_icon,
            $contact
		);
	}

	/**
	 * Renders Location (mini)
	 *
	 * @return string
	 */
	public function miniLocation() {
		$name          = $this->props['name'];
		$location_link = $this->props['location_link'];
		$addr          = $this->props['addr'];
		$city          = $this->props['city'];
		$state         = $this->props['state'];
		$zip           = $this->props['zip'];
		$show_icon     = $this->props['show_icon'];
		$icon          = $this->props['font_icon'];

        // If displaying an icon
		$display_icon   = 'on' === $show_icon ? sprintf('<div class="thumbnail">%1$s</div>', $this->caweb_get_icon_span( $icon )) : '';

        // if name exists
        if( ! empty( $name ) ){
            // if location link exists make a link, otherwise a strong tag
    		$name = ! empty( $location_link)  ? sprintf('<a href="%1$s" target="_blank">%2$s</a>', esc_url( $location_link ), $name) : "<strong>{$name}</strong>";
        }

        // get a map link if address info exists
		$address      = (
            ! empty( $addr ) ||
            ! empty( $city ) ||
            ! empty( $state ) ||
            ! empty( $zip )
        ) ? $this->caweb_get_google_map_place_link( array( $addr, $city, $state, $zip ) ) : '';

        $contact = (
            ! empty( $name ) ||
            ! empty( $address ) 
        ) ? sprintf(
            '<div class="contact">%1$s%2$s</div>',
                $name,
                $address
            ) : '';

		return sprintf(
			'%1$s%2$s',
			$display_icon,
			$contact
		);
	}

	/**
	 * Renders Location (banner)
	 *
	 * @return string
	 */
	public function bannerLocation() {
		$name           = $this->props['name'];
		$show_button    = $this->props['show_button'];
		$location_link  = $this->props['location_link'];
		$featured_image = $this->props['featured_image'];
		$desc           = $this->props['desc'];
		$addr           = $this->props['addr'];
		$city           = $this->props['city'];
		$state          = $this->props['state'];
		$zip            = $this->props['zip'];

        // If displaying a featured image
        if ( ! empty( $featured_image ) ) {
			$alt_text       = caweb_get_attachment_post_meta( $featured_image, '_wp_attachment_image_alt' );
			$featured_image = sprintf( '<div class="thumbnail"><img src="%1$s" alt="%2$s"/></div>', $featured_image, ! empty( $alt_text ) ? $alt_text : ' ' );
		}

        // wrap name in strong tag
        $name = ! empty( $name ) ? sprintf( '<strong>%1$s</strong>', $name ) : '';

        // get a map link if address info exists
        $address = (
            ! empty( $addr ) ||
            ! empty( $city ) ||
            ! empty( $state ) ||
            ! empty( $zip )
        ) ? 
        sprintf('<div class="address"><span class="ca-gov-icon-road-pin"></span>%1$s</div>', $this->caweb_get_google_map_place_link( array( $addr, $city, $state, $zip ) )) 
        : '';

        // Add description markup
        $desc = ! empty( $desc ) ? sprintf( '<strong>Description</strong><div class="description">%1$s</div>', $desc ) : '';

        // if show button is enabled and location link exists
        $display_button = 'on' === $show_button && ! empty( $location_link ) ?
            sprintf( '<a href="%1$s" class="btn btn-outline-dark" target="_blank">View More Details</a>', $location_link ) : '';

        // contact info
        $contact = (
            ! empty( $name ) ||
            ! empty( $address ) 
        ) ? sprintf(
            '<div class="contact">%1$s%2$s</div>',
                $name,
                $address,
            ) : '';

        // summary info
        $summary = (
            ! empty( $desc ) ||
            ! empty( $display_button ) 
        ) ? sprintf(
            '<div class="summary">%1$s%2$s</div>',
                $desc,
                $display_button,
            ) : '';


		return sprintf(
			'%1$s%2$s%3$s',
			$featured_image,
			$contact,
			$summary
		);
	}
}
new CAWeb_Module_Location();