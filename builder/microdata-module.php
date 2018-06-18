<?php

class ET_Builder_Module_Microdata extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'Microdata', 'et_builder' );
		$this->slug = 'et_pb_microdata';
		$this->main_css_element = '%%order_class%%.et_pb_blurb';

		$this->whitelisted_fields = array(
			'title', 'title_size', 'microdata_input', 'person_info_button',
			'person_title', 'location_info_button',
			'url', 'person_first_name', 'person_last_name',
			'use_icon', 'person_middle_name', 'person_phone',
			'font_icon', 'person_email', 'add_social_share',
			'icon_color', 'person_fb','person_twitter',
			'image_height', 'image_width', 'image_custom_size_button',
			'image', 'person_gplus','person_share_email',
			'icon_placement', 'person_flickr','person_pinterest',
			'animation', 'person_youtube', 'location_name',
			'content_new', 'location_address', 'location_city',
			'admin_label', 'location_state', 'location_zip',
			'offer_item', 'offer_price',
		);

		$et_accent_color = et_builder_accent_color();

		$this->fields_defaults = array(
			'use_icon'            => array( 'off' ),
			'microdata_input' => array('excerpt'),
			'icon_color'          => array( $et_accent_color, 'add_default_setting' ),
			'icon_placement'      => array( 'top' ),
			'animation'           => array( 'top' ),
			'person_fb'          => array( 'http://', 'add_default_setting' ),
			'person_twitter'          => array( 'http://', 'add_default_setting' ),
			'person_gplus'          => array( 'http://', 'add_default_setting' ),
			'person_flickr'          => array( 'http://', 'add_default_setting' ),
			'person_pinterest'          => array( 'http://', 'add_default_setting' ),
			'person_share_email'          => array( 'http://', 'add_default_setting' ),
			'person_youtube'          => array( 'http://', 'add_default_setting' ),


		);

	}

	function get_fields() {
		$et_accent_color = et_builder_accent_color();
		$image_icon_placement = array(
			'top' => esc_html__( 'Top', 'et_builder' ),
		);

		if ( ! is_rtl() ) {
			$image_icon_placement['left'] = esc_html__( 'Left', 'et_builder' );
		} else {
			$image_icon_placement['right'] = esc_html__( 'Right', 'et_builder' );
		}

		$fields = array(
			'microdata_input' => array(
				'label'             => esc_html__( 'Microdata Input', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
				'excerpt'    => 'Excerpt',
				'contact'    => 'Location/Contact',
				'offer'    => 'Offer',

				),
				'description'       => esc_html__( 'This enables options that can be used to add Microdata to your page.', 'et_builder' ),

				'affects' => array('#et_pb_offer_item', '#et_pb_offer_price','#et_pb_person_info_button',
						'#et_pb_location_info_button','#et_pb_add_social_share'),

      ),
			'title' => array(
				'label'           => esc_html__( 'Title', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
			),
			'title_size' => array(
				'label'             => esc_html__( 'Title Size', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => et_pb_get_text_sizes(),
				'description'       => esc_html__( 'Select a size for the title.', 'et_builder' ),
 ),
			'url' => array(
				'label'           => esc_html__( 'Url', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'If you would like to make your Microdata a link, input your destination URL here.', 'et_builder' ),
			),
      'offer_item' => array(
        'label'           => esc_html__( 'Registration Type', 'et_builder' ),
        'type'            => 'text',
        'option_category' => 'basic_option',
        'description'     => esc_html__( 'Enter a registration type for the offer.', 'et_builder' ),
        'depends_show_if' => 'offer',
      ),
      'offer_price' => array(
        'label'           => esc_html__( 'Cost', 'et_builder' ),
        'type'            => 'text',
        'option_category' => 'basic_option',
        'description'     => esc_html__( 'Enter a registration cost.', 'et_builder' ),
        'depends_show_if' => 'offer',
      ),
      'person_info_button' => array(
				'label'           => esc_html__( 'Display Person Information', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'basic_option',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
	'depends_show_if' => 'contact',
        'affects' => array('#et_pb_person_title', '#et_pb_person_first_name', '#et_pb_person_middle_name', '#et_pb_person_last_name', '#et_pb_person_phone', '#et_pb_person_email'  ),
      ),
			'person_title' => array(
				'label'           => esc_html__( 'Position Title', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter job title for the person.', 'et_builder' ),
        'depends_show_if' => 'on',
			),
      'person_first_name' => array(
				'label'           => esc_html__( 'First Name', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a First Name.', 'et_builder' ),
        'depends_show_if' => 'on',
			),
      'person_middle_name' => array(
				'label'           => esc_html__( 'Middle Name', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a Middle Name.', 'et_builder' ),
        'depends_show_if' => 'on',
			),
      'person_last_name' => array(
				'label'           => esc_html__( 'Last Name', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a Last Name.', 'et_builder' ),
        'depends_show_if' => 'on',
			),
      'person_phone' => array(
				'label'           => esc_html__( 'Phone Number', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a contact number.', 'et_builder' ),
        'depends_show_if' => 'on',
			),
      'person_email' => array(
				'label'           => esc_html__( 'Email Address', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter an email address.', 'et_builder' ),
        'depends_show_if' => 'on',
			),
      'location_info_button' => array(
  				'label'           => esc_html__( 'Display Location Information', 'et_builder' ),
  				'type'            => 'yes_no_button',
  				'option_category' => 'basic_option',
  				'options'         => array(
  					'off' => esc_html__( 'No', 'et_builder' ),
  					'on'  => esc_html__( 'Yes', 'et_builder' ),
  				),
	'depends_show_if' => 'contact',
          'affects' => array('#et_pb_location_name','#et_pb_location_address','#et_pb_location_city',
                          '#et_pb_location_state','#et_pb_location_zip'),
        ),
        'location_name' => array(
          'label'           => esc_html__( 'Location Name', 'et_builder' ),
          'type'            => 'text',
          'option_category' => 'basic_option',
          'description'     => esc_html__( 'Enter the name of the location.', 'et_builder' ),
          'depends_show_if' => 'on',
        ),
        'location_address' => array(
          'label'           => esc_html__( 'Location Address', 'et_builder' ),
          'type'            => 'text',
          'option_category' => 'basic_option',
          'description'     => esc_html__( 'Enter the address of the location.', 'et_builder' ),
          'depends_show_if' => 'on',
        ),
        'location_city' => array(
          'label'           => esc_html__( 'Location City', 'et_builder' ),
          'type'            => 'text',
          'option_category' => 'basic_option',
          'description'     => esc_html__( 'Enter the city of the location.', 'et_builder' ),
          'depends_show_if' => 'on',
        ),
        'location_state' => array(
          'label'           => esc_html__( 'State', 'et_builder' ),
          'type'            => 'text',
          'option_category' => 'basic_option',
          'description'     => esc_html__( 'Enter the state of the location.', 'et_builder' ),
          'depends_show_if' => 'on',
        ),
        'location_zip' => array(
          'label'           => esc_html__( 'Zip Code', 'et_builder' ),
          'type'            => 'text',
          'option_category' => 'basic_option',
          'description'     => esc_html__( 'Enter the zip code of the location.', 'et_builder' ),
          'depends_show_if' => 'on',
        ),

			'use_icon' => array(
				'label'           => esc_html__( 'Use Icon', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'basic_option',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects'     => array(
					'#et_pb_font_icon', '#et_pb_image_custom_size_button',
					'#et_pb_icon_color',
					'#et_pb_image',
				),
				'description' => esc_html__( 'Here you can choose whether icon set below should be used.', 'et_builder' ),
			),
			'font_icon' => array(
				'label'               => esc_html__( 'Icon', 'et_builder' ),
				'type'                => 'text',
				'option_category'     => 'basic_option',
				'class'               => array( 'et-pb-font-icon' ),
				'renderer'            => 'et_pb_get_ca_font_icon_list',
				'renderer_with_field' => true,
				'description'         => esc_html__( 'Choose an icon to display with your Microdata.', 'et_builder' ),
				'depends_default'     => true,
			),
			'icon_color' => array(
				'label'             => esc_html__( 'Icon Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'description'       => esc_html__( 'Here you can define a custom color for your icon.', 'et_builder' ),
				'depends_default'   => true,
			),
			'image' => array(
				'label'              => esc_html__( 'Image', 'et_builder' ),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text'        => esc_attr__( 'Choose an Image', 'et_builder' ),
				'update_text'        => esc_attr__( 'Set As Image', 'et_builder' ),
				'depends_show_if'    => 'off',
				'description'        => esc_html__( 'Upload an image to display at the top of your Microdata.', 'et_builder' ),
			),
			 'image_custom_size_button' => array(
				'label'           => esc_html__( 'Custom Image Size', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'basic_option',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
	'depends_show_if' => 'off',
        'affects' => array('#et_pb_image_width', '#et_pb_image_height'),
      ),
  'image_width' => array(
          'label'           => esc_html__( 'Image Width', 'et_builder' ),
          'type'            => 'text',
          'option_category' => 'basic_option',
          'description'     => esc_html__( 'Enter amount of pixels for the width.', 'et_builder' ),
          'depends_show_if' => 'on',
        ),
  'image_height' => array(
          'label'           => esc_html__( 'Image Height', 'et_builder' ),
          'type'            => 'text',
          'option_category' => 'basic_option',
          'description'     => esc_html__( 'Enter amount of pixels for the height.', 'et_builder' ),
          'depends_show_if' => 'on',
        ),
			'icon_placement' => array(
				'label'             => esc_html__( 'Image/Icon Placement', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'layout',
				'options'           => $image_icon_placement,
				'description'       => esc_html__( 'Here you can choose where to place the icon.', 'et_builder' ),
			),
			'animation' => array(
				'label'             => esc_html__( 'Image/Icon Animation', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'top'    => esc_html__( 'Top To Bottom', 'et_builder' ),
					'left'   => esc_html__( 'Left To Right', 'et_builder' ),
					'right'  => esc_html__( 'Right To Left', 'et_builder' ),
					'bottom' => esc_html__( 'Bottom To Top', 'et_builder' ),
					'off'    => esc_html__( 'No Animation', 'et_builder' ),
				),
				'description'       => esc_html__( 'This controls the direction of the lazy-loading animation.', 'et_builder' ),
			),
			'content_new' => array(
				'label'             => esc_html__( 'Content', 'et_builder' ),
				'type'              => 'tiny_mce',
				'option_category'   => 'basic_option',
				'description'       => esc_html__( 'Input the main text content for your module here.', 'et_builder' ),
			),
      'add_social_share' => array(
        'label'           => esc_html__( 'Add Social Links', 'et_builder' ),
        'type'            => 'yes_no_button',
        'option_category' => 'basic_option',
        'options'         => array(
          'off' => esc_html__( 'No', 'et_builder' ),
          'on'  => esc_html__( 'Yes', 'et_builder' ),
        ),
        'depends_show_if' => 'contact',
				'affects'     => array('#et_pb_person_fb','#et_pb_person_twitter','#et_pb_person_gplus',
										'#et_pb_person_share_email','#et_pb_person_flickr','#et_pb_person_pinterest',
										'#et_pb_person_youtube'),
				'description' => esc_html__( 'Here you can choose whether to add social share links.', 'et_builder' ),
			),
			'person_fb' => array(
				'label'           => esc_html__( 'Facebook', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter Facebook Profile Link.', 'et_builder' ),
				'depends_show_if' => 'on',
			),
			'person_twitter' => array(
				'label'           => esc_html__( 'Twitter', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter Twitter Profile Link.', 'et_builder' ),
				'depends_show_if' => 'on',
			),
			'person_gplus' => array(
				'label'           => esc_html__( 'Google Plus', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter Google Plus Profile Link.', 'et_builder' ),
				'depends_show_if' => 'on',
			),
			'person_share_email' => array(
				'label'           => esc_html__( 'Share Email', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter Share Email Link.', 'et_builder' ),
				'depends_show_if' => 'on',
			),
			'person_flickr' => array(
				'label'           => esc_html__( 'Flickr', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter Flickr Link.', 'et_builder' ),
				'depends_show_if' => 'on',
			),
			'person_pinterest' => array(
				'label'           => esc_html__( 'Pinterest', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter Pinterest Link.', 'et_builder' ),
				'depends_show_if' => 'on',
			),
			'person_youtube' => array(
				'label'           => esc_html__( 'YouTube', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter YouTube Link.', 'et_builder' ),
				'depends_show_if' => 'on',
			),

			'admin_label' => array(
				'label'       => esc_html__( 'Admin Label', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
			),
		);
		return $fields;
	}

	function shortcode_callback( $atts, $content = null, $function_name ) {
    $microdata_input = $this->shortcode_atts['microdata_input'];
    $person_info_button = $this->shortcode_atts['person_info_button'];
    $location_info_button = $this->shortcode_atts['location_info_button'];

    $person_title = $this->shortcode_atts['person_title'];
		$person_first_name = $this->shortcode_atts['person_first_name'];
    $person_middle_name = $this->shortcode_atts['person_middle_name'];
    $person_last_name = $this->shortcode_atts['person_last_name'];
    $person_phone = $this->shortcode_atts['person_phone'];
    $person_email = $this->shortcode_atts['person_email'];

    $location_name = $this->shortcode_atts['location_name'];
    $location_address = $this->shortcode_atts['location_address'];
    $location_city = $this->shortcode_atts['location_city'];
    $location_state = $this->shortcode_atts['location_state'];
    $location_zip = $this->shortcode_atts['location_zip'];

    $offer_item = $this->shortcode_atts['offer_item'];
    $offer_price = $this->shortcode_atts['offer_price'];

    $add_social_share = $this->shortcode_atts['add_social_share'];
    $person_fb = $this->shortcode_atts['person_fb'];
    $person_twitter = $this->shortcode_atts['person_twitter'];
    $person_gplus = $this->shortcode_atts['person_gplus'];
    $person_share_email = $this->shortcode_atts['person_share_email'];
    $person_flickr = $this->shortcode_atts['person_flickr'];
    $person_pinterest = $this->shortcode_atts['person_pinterest'];
    $person_youtube = $this->shortcode_atts['person_youtube'];

    $title                 = $this->shortcode_atts['title'];
	$title_size                 = $this->shortcode_atts['title_size'];
		$url                   = $this->shortcode_atts['url'];
		$image                 = $this->shortcode_atts['image'];
		$image_custom_size_button = $this->shortcode_atts['image_custom_size_button'];
		$image_width = $this->shortcode_atts['image_width'];
		$image_height = $this->shortcode_atts['image_height'];

		$animation             = $this->shortcode_atts['animation'];
		$icon_placement        = $this->shortcode_atts['icon_placement'];
		$font_icon             = $this->shortcode_atts['font_icon'];
		$use_icon              = $this->shortcode_atts['use_icon'];
		$icon_color            = $this->shortcode_atts['icon_color'];

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );


		if ( is_rtl() && 'left' === $icon_placement ) {
			$icon_placement = 'right';
		}

		if ( '' !== $title && '' !== $url ) {
			$title = sprintf( '<a href="%1$s"%3$s>%2$s</a>',
				esc_url( $url ),
				esc_html( $title ),
				' target="_blank"'
			);
		}

		if ( '' !== $title ) {
			$title = "<h4>{$title}</h4>";
		}

		if ( '' !== trim( $image ) || '' !== $font_icon ) {
			if ( 'off' === $use_icon ) {
				$image = sprintf(
					'<img src="%1$s" alt="%2$s" class="et-waypoint%3$s" %4$s/>',
					esc_url( $image ),
					esc_attr( $alt ),
					esc_attr( " et_pb_animation_{$animation}"),
					("on" == $image_custom_size_button ? sprintf('style="max-width:%1$dpx;min-width:%1$dpx;max-height:%2$dpx;min-height:%2$dpx;"', $image_width, $image_height) : '' )
				);
			} else {
				$icon_style = sprintf( 'color: %1$s;', esc_attr( $icon_color ) );


				$image = get_ca_icon_span($font_icon, $icon_style,
						array(
							'et-pb-icon',
							'et-waypoint',
							esc_attr( " et_pb_animation_{$animation}" )
						)
					);
			}

			$image = sprintf(
				'<div class="et_pb_main_blurb_image">%1$s</div>',
				( '' !== $url
					? sprintf(
						'<a href="%1$s"%3$s>%2$s</a>',
						esc_url( $url ),
						$image,' target="_blank"'
					)
					: $image
				)
			);
		}

		$class = " et_pb_module et_pb_text_align_{$icon_placement }";
    switch($microdata_input){
        case "contact":

          if("on" == $person_info_button){
		$full_name = sprintf('%1$s%2$s%3$s',
			("" != $person_first_name ? $person_first_name  : '') ,
			("" != $person_middle_name ? sprintf(' %1$s ', $person_middle_name) : '') ,
			("" != $person_last_name? $person_last_name : '')
			);

		$contact_info = sprintf('%1$s%2$s',
			("" != $person_phone ? sprintf('Phone: %1$s<br />', $person_phone) : '') ,
			("" != $person_email ? sprintf('Email: %1$s', $person_email) : '')
			);

		$title .= sprintf('%1$s%2$s%3$s',
                           ("" != $full_name ? sprintf('<h4>%1$s</h4>',$full_name) : '') ,
			("" != $person_title? sprintf('<p>%1$s</p>',$person_title) : '<br />') ,
			("" !=  $contact_info ? sprintf('<p>%1$s</p>',$contact_info) : '')
                          );
          }
            if("on" == $location_info_button){
              $title .= sprintf('<p>%1$s<br />
                            %2$s, %3$s %4$s %5$s</p>',
                            $location_name,  $location_address, $location_city,
                            $location_state, $location_zip
                          );

            }



            break;
      case "offer":
      $title .= sprintf('<p>Registration Type:%1$s<br />Cost: %2$s</p>',
                    $offer_item,  $offer_price
                  );
          break;

    }

		$output = sprintf(
			'<div class="et_pb_blurb%4$s%5$s%6$s"  style="margin: 0 !important;">
	<div class="et_pb_blurb_content" style="max-width: 100%%  !important;">
					%2$s
					<div class="et_pb_blurb_container">
						%3$s
						%1$s
					</div>
				</div> <!-- .et_pb_microdata_content -->
			</div> <!-- .et_pb_microdata -->',
			$this->shortcode_content,
			$image,
			$title,
			esc_attr( $class ),
			( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
			sprintf( ' et_pb_blurb_position_%1$s', esc_attr( $icon_placement ) )
		);
	// Add social share icons at the bottom of the microdata container
    if("on" == $add_social_share){

      $output .= '<ul class="et_pb_member_social_links" style="margin-top: 0px; margin-bottom: 0px;">';

	$output .= sprintf('%1$s%2$s%3$s%4$s%5$s%6$s%7$s',
	("" != $person_fb ? sprintf('<a href="%1$s"><li class="ca-gov-icon-facebook"></li></a>', $person_fb  ) : ''),
	("" != $person_twitter ? sprintf('<a href="%1$s"><li class="ca-gov-icon-twitter"></li></a>', $person_twitter): ''),
	("" != $person_gplus ? sprintf('<a href="%1$s"><li class="ca-gov-icon-google-plus"></li></a>', $person_gplus ): ''),
	("" != $person_share_email ? sprintf('<a href="%1$s"><li class="ca-gov-icon-share-email"></li></a>', $person_share_email ): ''),
	("" != $person_flickr ? sprintf('<a href="%1$s"><li class="ca-gov-icon-flickr"></li></a>', $person_flickr ): ''),
	("" != $person_pinterest ? sprintf('<a href="%1$s"><li class="ca-gov-icon-pinterest"></li></a>', $person_pinterest ): ''),
	("" != $person_youtube ? sprintf('<a href="%1$s"><li class="ca-gov-icon-youtube"></li></a>', $person_youtube ): '')
	);
      $output .= '</ul>';
    }

		return $output;
	}
}
new ET_Builder_Module_Microdata;

?>
