<?php
/*
Divi Icon Field Names
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
*/

// Standard Version
class ET_Builder_Module_CA_Section_Carousel extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'Section - Carousel', 'et_builder' );

		$this->slug = 'et_pb_ca_section_carousel';

		$this->child_slug      = 'et_pb_ca_section_carousel_slide';

		$this->child_item_text = esc_html__( 'Slide', 'et_builder' );

		$this->fields_defaults = array('slide_amount' => array(4, 'add_default_setting'));

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
		  'general' => array(
		    'toggles' => array(
		      'style'  => esc_html__( 'Style', 'et_builder'),
		      'panel' => esc_html__( 'Panel', 'et_builder'),
		      'body'   => esc_html__( 'Body', 'et_builder'),
		    ),
		  ),
		  'advanced' => array(
		    'toggles' => array(
		      'style'  => esc_html__( 'Style', 'et_builder'),
		      'text' => array(
		        'title'    => esc_html__( 'Text', 'et_builder' ),
		        'priority' => 49,
		      ),
		      'width' => array(
		        'title'    => esc_html__( 'Sizing', 'et_builder' ),
		        'priority' => 65,
		      ),
		    ),
		  ),
		  'custom_css' => array(
		    'toggles' => array(
		    ),
		  ),
		);

		// Custom handler: Output JS for editor preview in page footer.
    add_action( 'wp_footer', array($this, 'carousel_fix'), 20 );
	}

	function get_fields() {
		$fields = array(
			'carousel_style' => array(
				'label'           => esc_html__( 'Style', 'et_builder' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => array(
					'content_fit' => esc_html__( 'Content Fit', 'et_builder' ),
					'image_fit'  => esc_html__( 'Image Fit', 'et_builder' ),
					'media'  => esc_html__( 'Media', 'et_builder' ),
				),
				'toggle_slug'			=> 'style',
			),
       'slide_amount' => array(
				'label'           => esc_html__( 'Viewable Display Amount', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the amount of slides to display at one time.', 'et_builder' ),
				'show_if'   	=> array('carousel_style' => 'media'),
				'toggle_slug'			=> 'style',
			),
      'in_panel' => array(
				'label'           => esc_html__( 'Display in Panel', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'show_if'   	=> array('carousel_style' => 'media'),
				'description' => 'Choose whether to display this carousel inside of a panel',
				'toggle_slug' => 'style',
			),
      'panel_title' => array(
				'label'           => esc_html__( 'Heading', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a Heading Title.', 'et_builder' ),
				'show_if'   	=> array('in_panel' => 'on'),
				'toggle_slug'			=> 'panel',
			),
      'panel_layout' => array(
				'label'             => esc_html__( 'Style', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'default' => esc_html__( 'Default', 'et_builder'),
					'standout'  => esc_html__( 'Standout', 'et_builder'),
					'standout highlight'  => esc_html__( 'Standout Highlight', 'et_builder'),
					'overstated'  => esc_html__( 'Overstated', 'et_builder'),
					'understated'  => esc_html__( 'Understated', 'et_builder'),
				),
				'description'       => esc_html__( 'Here you can choose the style of panel to display', 'et_builder' ),
				'show_if'   	=> array('in_panel' => 'on') ,
				'toggle_slug' => 'panel',
			),
      'panel_show_button' => array(
				'label'           => esc_html__( 'Read More Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'show_if'   	=> array('in_panel' => 'on') ,
				'description'     => esc_html__( 'Here you can select to display a button.', 'et_builder' ),
				'toggle_slug'			=> 'panel',
			),
      'panel_button_text' => array(
				'label'           => esc_html__( 'Button Text', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the Text for the button.', 'et_builder' ),
				'show_if' => array('panel_show_button' => 'on'),
				'toggle_slug'			=> 'panel',
			),
			'panel_button_link' => array(
				'label'           => esc_html__( 'Button URL', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the URL for the button.', 'et_builder' ),
				'show_if' => array('panel_show_button' => 'on'),
				'toggle_slug'			=> 'panel',
			),
			'section_background_color' => array(
				'label'             => esc_html__( 'Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
				'toggle_slug'			=> 'style',
				'tab_slug'			=> 'advanced',
			),
			'max_width' => array(
			  'label'           => esc_html__( 'Max Width', 'et_builder' ),
			  'type'            => 'skip',
			  'option_category' => 'layout',
			  'mobile_options'  => true,
			  'tab_slug'        => 'advanced',
			  'toggle_slug'     => 'width',
			  'validate_unit'   => true,
			),
			'max_width_tablet' => array(
			  'type'        => 'skip',
			  'tab_slug'    => 'advanced',
			  'toggle_slug' => 'width',
			),
			'max_width_phone' => array(
			  'type'        => 'skip',
			  'tab_slug'    => 'advanced',
			  'toggle_slug' => 'width',
			),
			'max_width_last_edited' => array(
			  'type'        => 'skip',
			  'tab_slug'    => 'advanced',
			  'toggle_slug' => 'width',
			),
			'disabled_on' => array(
			  'label'           => esc_html__( 'Disable on', 'et_builder' ),
			  'type'            => 'multiple_checkboxes',
			  'options'         => array(
			    'phone'   => esc_html__( 'Phone', 'et_builder' ),
			    'tablet'  => esc_html__( 'Tablet', 'et_builder' ),
			    'desktop' => esc_html__( 'Desktop', 'et_builder' ),
			  ),
			  'additional_att'  => 'disable_on',
			  'option_category' => 'configuration',
			  'description'     => esc_html__( 'This will disable the module on selected devices', 'et_builder' ),
				'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'visibility',
			),
			'admin_label' => array(
			  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
			  'type'        => 'text',
			  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
				'toggle_slug'	=> 'admin_label',
			),
			'module_id' => array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
		);

		return $fields;

	}

	function pre_shortcode_content() {
		global $et_pb_ca_section_carousel_style;

		$et_pb_ca_section_carousel_style = $this->props['carousel_style'];
	}

	function render( $unprocessed_props, $content = null, $render_slug ) {
		$carousel_style           	= $this->props['carousel_style'];
		$slide_amount           	= $this->props['slide_amount'];
		$in_panel           	= $this->props['in_panel'];
		$panel_layout           	= $this->props['panel_layout'];
		$panel_title           	= $this->props['panel_title'];
		$panel_show_button           	= $this->props['panel_show_button'];
		$panel_button_text           	= $this->props['panel_button_text'];
		$panel_button_link           	= $this->props['panel_button_link'];
		$module_id            			= $this->props['module_id'];
		$module_class         			= $this->props['module_class'];
		$max_width            			= $this->props['max_width'];
		$max_width_tablet     			= $this->props['max_width_tablet'];
		$max_width_phone      			= $this->props['max_width_phone'];
		$max_width_last_edited 			= $this->props['max_width_last_edited'];
		$section_background_color 	= $this->props['section_background_color'];

		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );
		$class = "et_pb_ca_section_carousel et_pb_module  " . $carousel_style;

		$section_background_color = ("" != $section_background_color ?
		sprintf(' style="background: %1$s;" ', $section_background_color) : '');

    if("media" == $carousel_style && "on" == $in_panel){
      $display_button = ("on" == $panel_show_button && ! empty($panel_button_link ) ?
                        sprintf('<div class="options"><a href="%1$s" class="btn btn-default">%2$s</a></div>',
                                $panel_button_link, ( ! empty($panel_button_text ) ? $panel_button_text : 'Read More')  ) : '');

      $output  = sprintf('<div%1$s class="%2$s%3$s panel panel-%4$s">%5$s
													<div class="panel-body"%7$s>
															<div class="carousel carousel-media">%6$s</div>
													</div>
													</div> <!-- .et_pb_panel -->',
               ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ), esc_attr( $class ),
               ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ), $panel_layout,
                         ( ! empty($panel_title) ?
                          sprintf('<div class="panel-heading"><h4>%1$s</h4>%2$s</div>', $panel_title, $display_button) : ''),
                         $this->shortcode_content, $section_background_color
           );
    }else{
      $output = sprintf('<div%1$s class="%2$s%3$s section"%4$s>
						<div class="carousel carousel-%5$s">%6$s</div></div><!-- et_pb_ca_section_carousel -->',
          ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
          esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
                          $section_background_color, ( "media" == $carousel_style  ? $carousel_style : 'content' ), $this->shortcode_content);
    }

		return $output;

	}

  	// This is a non-standard function. It outputs JS code to change items amount for carousel-media.
		function carousel_fix() {
      $carousels = ( ! is_404() && !empty( get_post() ) ? json_encode( caweb_get_shortcode_from_content(get_the_content(), $this->slug, true ) ) : array() );

			?>
			<script>
        $ = jQuery.noConflict();

       var media_carousels = <?php print_r( $carousels ); ?>;

        media_carousels.forEach(function(element, index) {
          $('.<?php echo $this->slug; ?>_' + index + ' .carousel-media').owlCarousel({
          		responsive : true,
							responsive: {
				          0: {
				            items: 1,
							nav: true
				          },
				          400: {
				            items: 1,
							nav: true
				          },
				          768: {
				            items: undefined == element.slide_amount ? 4 : element.slide_amount,
				            nav: true
				          },
				        },
          		margin : 10,
          		nav : true,
          		dots : false,
          navText: [
          '<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>',
          '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>'
        ],
        })
        });


			</script>
			<?php
		}
}
new ET_Builder_Module_CA_Section_Carousel;

class ET_Builder_Module_CA_Section_Carousel_Slide extends ET_Builder_CAWeb_Module{
	function init() {

		$this->name = esc_html__( 'Carousel Slide', 'et_builder' );

		$this->slug = 'et_pb_ca_section_carousel_slide';
		$this->type = 'child';

		$this->child_title_var = 'slide_title';

		$this->child_title_fallback_var = 'slide_title';

		$this->fields_defaults = array(
			'slide_url' => array('http://','add_default_setting'),
			);

		$this->advanced_setting_title_text = esc_html__( 'New Carousel Slide', 'et_builder' );

		$this->settings_text = esc_html__( 'Carousel Slide Settings', 'et_builder' );

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'style'  => esc_html__( 'Style', 'et_builder'),
					'header' => esc_html__( 'Header', 'et_builder'),
					'body'   => esc_html__( 'Body', 'et_builder'),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'text' => array(
						'title'    => esc_html__( 'Text', 'et_builder' ),
						'priority' => 49,
					),
					'width' => array(
						'title'    => esc_html__( 'Sizing', 'et_builder' ),
						'priority' => 65,
					),
				),
			),
			'custom_css' => array(
				'toggles' => array(
				),
			),
		);

	}
	function get_fields() {
		$fields = array(
			'slide_image' => array(
				'label' => esc_html__( 'Image', 'et_builder' ),
				'type' => 'upload',
				'option_category' => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text' => esc_attr__( 'Choose a Background Image', 'et_builder' ),
				'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
				'description' => esc_html__( 'If defined, this image will be used as the background for this slide. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
				'toggle_slug'	=> 'body',
			),
			'slide_title' => array(
				'label' => esc_html__( 'Title', 'et_builder' ),
				'type'=> 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the title for the slide', 'et_builder' ),
				'toggle_slug'	=> 'header',
			),
			'slide_show_more_button' => array(
				'label'           => esc_html__( 'Add More Link', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'toggle_slug'	=> 'body',
			),
			'slide_url' => array(
				'label' => esc_html__( 'Link URL', 'et_builder' ),
				'type'=> 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the URL for the link.', 'et_builder' ),
				'show_if' => array('slide_show_more_button' => 'on'),
				'toggle_slug'	=> 'body',
			),
			'slide_desc' => array(
				'label' => esc_html__( 'Description', 'et_builder' ),
				'type'=> 'textarea',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the text for the slide content', 'et_builder' ),
				'toggle_slug'	=> 'body',
			),
			'module_id' => array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
		);

		return $fields;

	}
	function render( $unprocessed_props, $content = null, $render_slug ) {
		$module_id            = $this->props['module_id'];
		$module_class         = $this->props['module_class'];
		$slide_image = $this->props['slide_image'];
		$slide_title = $this->props['slide_title'];
		$slide_desc = $this->props['slide_desc'];
		$slide_url = $this->props['slide_url'];
		$slide_show_more_button = $this->props['slide_show_more_button'];

		global $et_pb_slider_item_num;
		global $et_pb_ca_section_carousel_style;

		$et_pb_slider_item_num++;

		$class = $et_pb_ca_section_carousel_style . ' et_pb_module';

		if("media" == $et_pb_ca_section_carousel_style){

      $button = ("on" == $slide_show_more_button ? sprintf('<a href="%1$s">%2$s</a>', $slide_url, $slide_title ) : '');

      $slide = ( ! empty($slide_image) ?
                sprintf('<div class="preview-image"><img src="%1$s"%2$s/></div>',
                        $slide_image, ( ! empty($slide_title) ? sprintf(' alt="%1$s"', $slide_title) : '')  )  : '');

      	$output = sprintf('<div%1$s class="%2$s%3$s item">%4$s%5$s</div>',
            ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ), esc_attr( $class ),
            ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),  $slide,
            ( ! empty($button) ? sprintf('<div class="details text-center">%1$s</div>', $button) : '') );

    }else{
      $display_button = ("on" == $slide_show_more_button ?
      sprintf('<br><button class="btn btn-primary">
            <a href="%1$s"><strong>More Information</strong></a></button>', $slide_url) : '');

      $slide_title = ("" != $slide_title ? sprintf('<h2>%1$s</h2>', $slide_title) : '');

      $output = sprintf('<div%1$s class="%2$s%3$s item backdrop" %4$s>
													%5$s
													<div class="content-container">
														<div class="content">
														%6$s%7$s%8$s
														</div>
													</div>
												</div>',
            ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
            esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
              ("content_fit" == $et_pb_ca_section_carousel_style ? sprintf('style="background-image: url(%1$s);"', $slide_image) : ''),
              ( "image_fit" == $et_pb_ca_section_carousel_style ? sprintf( '<img src="%1$s" />', $slide_image ) : '' ),
              $slide_title, $slide_desc, $display_button );

    }

			return $output;

	}
}
new ET_Builder_Module_CA_Section_Carousel_Slide;

// Fullwidth Version
class ET_Builder_Module_Fullwidth_CA_Section_Carousel extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'FullWidth Section - Carousel', 'et_builder' );
		$this->fullwidth = true;
		$this->slug = 'et_pb_ca_fullwidth_section_carousel';
		$this->child_slug      = 'et_pb_ca_fullwidth_section_carousel_slide';
		$this->child_item_text = esc_html__( 'Slide', 'et_builder' );
		
		$this->fields_defaults = array('slide_amount' => array(4, 'add_default_setting'));
		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'style'  => esc_html__( 'Style', 'et_builder'),
		      'panel' => esc_html__( 'Panel', 'et_builder'),
					'body'   => esc_html__( 'Body', 'et_builder'),
				),
			),
			'advanced' => array(
				'toggles' => array(
          'style'  => esc_html__( 'Style', 'et_builder'),
					'text' => array(
						'title'    => esc_html__( 'Text', 'et_builder' ),
						'priority' => 49,
					),
					'width' => array(
						'title'    => esc_html__( 'Sizing', 'et_builder' ),
						'priority' => 65,
					),
				),
			),
			'custom_css' => array(
				'toggles' => array(
				),
			),
		);

		// Custom handler: Output JS for editor preview in page footer.
    add_action( 'wp_footer', array($this, 'carousel_fix'), 20 );
	}
	function get_fields() {
		$fields = array(
			'carousel_style' => array(
				'label'           => esc_html__( 'Style', 'et_builder' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => array(
					'content_fit' 		=> esc_html__( 'Content Fit', 'et_builder' ),
					'image_fit' 			=> esc_html__( 'Image Fit', 'et_builder' ),
					'media'  => esc_html__( 'Media', 'et_builder' ),
				),
				'toggle_slug' => 'style',
			),
       'slide_amount' => array(
				'label'           => esc_html__( 'Viewable Display Amount', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the amount of slides to display at one time.', 'et_builder' ),
				'show_if'   	=> array('carousel_style' => 'media'),
				'toggle_slug'			=> 'style',
			),
      'in_panel' => array(
				'label'           => esc_html__( 'Display in Panel', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'show_if'   	=> array('carousel_style' => 'media'),
				'description' => 'Choose whether to display this carousel inside of a panel',
				'toggle_slug' => 'style',
			),
      'panel_title' => array(
				'label'           => esc_html__( 'Heading', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a Heading Title.', 'et_builder' ),
				'show_if'   	=> array('in_panel' => 'on'),
				'toggle_slug'			=> 'panel',
			),
      'panel_layout' => array(
				'label'             => esc_html__( 'Style', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'default' => esc_html__( 'Default', 'et_builder'),
					'standout'  => esc_html__( 'Standout', 'et_builder'),
					'standout highlight'  => esc_html__( 'Standout Highlight', 'et_builder'),
					'overstated'  => esc_html__( 'Overstated', 'et_builder'),
					'understated'  => esc_html__( 'Understated', 'et_builder'),
				),
				'description'       => esc_html__( 'Here you can choose the style of panel to display', 'et_builder' ),
				'show_if'   	=> array('in_panel' => 'on'),
				'toggle_slug' => 'panel',
			),
      'panel_show_button' => array(
				'label'           => esc_html__( 'Read More Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'show_if'   	=> array('in_panel' => 'on'),
				'description'     => esc_html__( 'Here you can select to display a button.', 'et_builder' ),
				'toggle_slug'			=> 'panel',
			),
      'panel_button_text' => array(
				'label'           => esc_html__( 'Button Text', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the Text for the button.', 'et_builder' ),
				'show_if' => array('panel_show_button' => 'on'),
				'toggle_slug'			=> 'panel',
			),
			'panel_button_link' => array(
				'label'           => esc_html__( 'Button URL', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the URL for the button.', 'et_builder' ),
				'show_if' => array('panel_show_button' => 'on'),
				'toggle_slug'			=> 'panel',
			),
			'section_background_color' => array(
				'label'             => esc_html__( 'Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
				'toggle_slug' => 'style',
        'tab_slug' => 'advanced',
			),
			'max_width' => array(
				'label'           => esc_html__( 'Max Width', 'et_builder' ),
				'type'            => 'skip',
				'option_category' => 'layout',
				'mobile_options'  => true,
				'tab_slug'        => 'advanced',
				'toggle_slug'     => 'width',
				'validate_unit'   => true,
			),
			'max_width_tablet' => array(
				'type'        => 'skip',
				'tab_slug'    => 'advanced',
				'toggle_slug' => 'width',
			),
			'max_width_phone' => array(
				'type'        => 'skip',
				'tab_slug'    => 'advanced',
				'toggle_slug' => 'width',
			),
			'max_width_last_edited' => array(
				'type'        => 'skip',
				'tab_slug'    => 'advanced',
				'toggle_slug' => 'width',
			),
			'disabled_on' => array(
			  	'label'     => esc_html__( 'Disable on', 'et_builder' ),
			  	'type'     	=> 'multiple_checkboxes',
			  	'options'   => array(
				    'phone'   	=> esc_html__( 'Phone', 'et_builder' ),
				    'tablet'  	=> esc_html__( 'Tablet', 'et_builder' ),
				    'desktop' 	=> esc_html__( 'Desktop', 'et_builder' ),
			  ),
			  'additional_att'  => 'disable_on',
			  'option_category' => 'configuration',
			  'description'     => esc_html__( 'This will disable the module on selected devices', 'et_builder' ),
				'tab_slug' 				=> 'custom_css',
				'toggle_slug'			=> 'visibility',
			),
			'admin_label' => array(
			  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
			  'type'        => 'text',
			  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
				'toggle_slug' => 'admin_label',
			),
			'module_id' => array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug' 		=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug' 		=> 'admin_label',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
		);
		return $fields;
	}

	function pre_shortcode_content() {
		global $et_pb_ca_fullwidth_section_carousel_style;

		$et_pb_ca_fullwidth_section_carousel_style = $this->props['carousel_style'];

	}

	function render( $unprocessed_props, $content = null, $render_slug ) {
		$carousel_style       = $this->props['carousel_style'];
		$slide_amount           	= $this->props['slide_amount'];
		$in_panel           	= $this->props['in_panel'];
		$panel_layout           	= $this->props['panel_layout'];
		$panel_title           	= $this->props['panel_title'];
		$panel_show_button           	= $this->props['panel_show_button'];
		$panel_button_text           	= $this->props['panel_button_text'];
		$panel_button_link           	= $this->props['panel_button_link'];
		$module_id            = $this->props['module_id'];
		$module_class         = $this->props['module_class'];
		$max_width            = $this->props['max_width'];
		$max_width_tablet     = $this->props['max_width_tablet'];
		$max_width_phone      = $this->props['max_width_phone'];
		$max_width_last_edited = $this->props['max_width_last_edited'];
		$section_background_color = $this->props['section_background_color'];

		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );
		$class = "et_pb_ca_fullwidth_section_carousel et_pb_module " . $carousel_style;

		$section_background_color = ("" != $section_background_color ?
		sprintf(' style="background: %1$s;" ', $section_background_color) : '');

     if("media" == $carousel_style && "on" == $in_panel){
      $display_button = ("on" == $panel_show_button && ! empty($panel_button_link ) ?
                        sprintf('<div class="options"><a href="%1$s" class="btn btn-default">%2$s</a></div>',
                                $panel_button_link, ( ! empty($panel_button_text ) ? $panel_button_text : 'Read More')  ) : '');

      $output  = sprintf('<div%1$s class="%2$s%3$s panel panel-%4$s">%5$s
													<div class="panel-body"%7$s>
															<div class="carousel carousel-media">%6$s</div>
													</div>
													</div> <!-- .et_pb_panel -->',
               ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ), esc_attr( $class ),
               ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ), $panel_layout,
                         ( ! empty($panel_title) ?
                          sprintf('<div class="panel-heading"><h4>%1$s</h4>%2$s</div>', $panel_title, $display_button) : ''),
                         $this->shortcode_content, $section_background_color
           );
    }else{
       $output = sprintf('<div%1$s class="%2$s%3$s section"%4$s>
							<div class="carousel carousel-%5$s">%6$s</div></div><!-- et_pb_ca_fullwidth_section_carousel -->',
              ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
              esc_attr( $class ), ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
              $section_background_color, ( "media" == $carousel_style ? $carousel_style : 'content' ), $this->shortcode_content
                );
     }

		return $output;
	}

  	// This is a non-standard function. It outputs JS code to change items amount for carousel-media.
		function carousel_fix() {
      	$carousels = ( ! is_404() && !empty( get_post() ) ? json_encode( caweb_get_shortcode_from_content(get_the_content(), $this->slug, true ) ) : array() );

			?>
			<script>
        $ = jQuery.noConflict();

       var media_carousels = <?php print_r( $carousels ); ?>;

        media_carousels.forEach(function(element, index) {
          $('.<?php echo $this->slug; ?>_' + index + ' .carousel-media').owlCarousel({
          		responsive : true,
			responsive: {
			  0: {
			    items: 1,
					nav: true
			  },
			  400: {
			    items: 1,
					nav: true
			  },
			  768: {
			    items: undefined == element.slide_amount ? 4 : element.slide_amount,
			    nav: true
			  },
			},
          		margin : 10,
          		nav : true,
          		dots : false,
          navText: [
          '<span class="ca-gov-icon-arrow-prev" aria-hidden="true"></span>',
          '<span class="ca-gov-icon-arrow-next" aria-hidden="true"></span>'
        ],
        })
        });


			</script>
			<?php
		}
}
new ET_Builder_Module_Fullwidth_CA_Section_Carousel;

class ET_Builder_Module_Fullwidth_CA_Section_Carousel_Slide extends ET_Builder_CAWeb_Module{
function init() {
	$this->name = esc_html__( 'FullWidth Carousel Slide', 'et_builder' );
	$this->slug = 'et_pb_ca_fullwidth_section_carousel_slide';
$this->fullwidth = true;
	$this->type = 'child';
	$this->child_title_var = 'slide_title';
	$this->child_title_fallback_var = 'slide_title';

	$this->fields_defaults = array(
		'slide_url' => array('http://','add_default_setting'),
		);
	$this->advanced_setting_title_text = esc_html__( 'New Carousel Slide', 'et_builder' );
	$this->settings_text = esc_html__( 'Carousel Slide Settings', 'et_builder' );
	$this->main_css_element = '%%order_class%%';

	$this->settings_modal_toggles = array(
		'general' => array(
			'toggles' => array(
				'style'  => esc_html__( 'Style', 'et_builder'),
				'header' => esc_html__( 'Header', 'et_builder'),
				'body'   => esc_html__( 'Body', 'et_builder'),
			),
		),
		'custom_css' => array(
			'toggles' => array(
			),
		),
	);
}
function get_fields() {
	$fields = array(
		'slide_image' => array(
			'label' => esc_html__( 'Image', 'et_builder' ),
			'type' => 'upload',
			'option_category' => 'basic_option',
			'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
			'choose_text' => esc_attr__( 'Choose a Background Image', 'et_builder' ),
			'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
			'description' => esc_html__( 'If defined, this image will be used as the background for this slide. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
			'toggle_slug'	=> 'body',
		),
		'slide_title' => array(
			'label' => esc_html__( 'Title', 'et_builder' ),
			'type'=> 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the title for the slide', 'et_builder' ),
			'toggle_slug'	=> 'header',
		),
		'slide_show_more_button' => array(
			'label'           => esc_html__( 'Add More Link', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'toggle_slug'	=> 'body',
		),
		'slide_url' => array(
			'label' => esc_html__( 'Link URL', 'et_builder' ),
			'type'=> 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the link.', 'et_builder' ),
			'show_if' => array('slide_show_more_button' => 'on'),
			'toggle_slug'	=> 'body',
		),
		'slide_desc' => array(
			'label' => esc_html__( 'Description', 'et_builder' ),
			'type'=> 'textarea',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the slide content', 'et_builder' ),
			'toggle_slug'	=> 'body',
		),
		'module_id' => array(
			'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			'type'            => 'text',
			'option_category' => 'configuration',
			'tab_slug'        => 'custom_css',
			'toggle_slug'			=> 'classes',
			'option_class'    => 'et_pb_custom_css_regular',
		),
		'module_class' => array(
			'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			'type'            => 'text',
			'option_category' => 'configuration',
			'tab_slug'        => 'custom_css',
			'toggle_slug'			=> 'classes',
			'option_class'    => 'et_pb_custom_css_regular',
		),
	);
	return $fields;
}
function render( $unprocessed_props, $content = null, $render_slug ) {
	$module_id            = $this->props['module_id'];
	$module_class         = $this->props['module_class'];
	$slide_image = $this->props['slide_image'];
	$slide_title = $this->props['slide_title'];
	$slide_desc = $this->props['slide_desc'];
	$slide_url = $this->props['slide_url'];
	$slide_show_more_button = $this->props['slide_show_more_button'];

	global $et_pb_slider_item_num;
	global $et_pb_ca_fullwidth_section_carousel_style;

	$et_pb_slider_item_num++;

	$class = $et_pb_ca_fullwidth_section_carousel_style . " et_pb_module";

  if("media" == $et_pb_ca_fullwidth_section_carousel_style){
     $button = ("on" == $slide_show_more_button ? sprintf('<a href="%1$s">%2$s</a>', $slide_url, $slide_title ) : '');

      $slide = ( ! empty($slide_image) ?
                sprintf('<div class="preview-image"><img src="%1$s"%2$s/></div>',
                        $slide_image, ( ! empty($slide_title) ? sprintf(' alt="%1$s"', $slide_title) : '') )  : '');

      	$output = sprintf('<div%1$s class="%2$s%3$s item">%4$s%5$s</div>',
            ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ), esc_attr( $class ),
            ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ), $slide,
             ( ! empty($button) ? sprintf('<div class="details text-center">%1$s</div>', $button) : ''));

    }else{

      $display_button = ("on" == $slide_show_more_button ?
      sprintf('<br><button class="btn btn-primary">
            <a href="%1$s"><strong>More Information</strong></a></button>', $slide_url) : '');

      $output = sprintf('<div%1$s class="%2$s%3$s item backdrop" %4$s>%5$s
                        <div class="content-container">
                          <div class="content">
                            %6$s%7$s%8$s
                            </div>
                            </div>
                            </div>',
        ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
        esc_attr( $class ),
        ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
        ("content_fit" == $et_pb_ca_fullwidth_section_carousel_style ? sprintf('style="background-image: url(%1$s);"', $slide_image) : ''),
        ( "image_fit" == $et_pb_ca_fullwidth_section_carousel_style ? sprintf( '<img src="%1$s" />', $slide_image ) : '' ),
        ("" != $slide_title ? sprintf('<h2>%1$s</h2>', $slide_title) : ''),
        $slide_desc,
        $display_button );

  	}

   return $output;
}
}
new ET_Builder_Module_Fullwidth_CA_Section_Carousel_Slide;
?>
