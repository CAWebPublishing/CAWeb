<?php
/*
Divi Icon Field Names
When using the et_pb_get_font_icon_list to render the icon picker,
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
*/

// Standard Version
class ET_Builder_Module_CA_Section_Primary extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'Section - Primary', 'et_builder' );

		$this->slug = 'et_pb_ca_section_primary';
		$this->fb_support = true;

		$this->whitelisted_fields = array(
			'section_image',
			'section_heading',
			'section_content',
			'section_link',
			'show_more_button',
			'featured_image_button',
			'left_right_button',
			'slide_image_button',
			'section_background_color',
			'heading_align',
			'heading_text_color',
			'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
			'module_class',
			'module_id',
			'admin_label',
		);

		$this->fields_defaults = array(
			'section_link' => array('http://','add_default_setting'),
			'show_more_button' => array('no'),
			'featured_image_button' => array('true'),
		);

		$this->main_css_element = '%%order_class%%';

		$this->options_toggles = array(
		  'general' => array(
		    'toggles' => array(
		      'header' => esc_html__( 'Header', 'et_builder'),
		      'body'   => esc_html__( 'Body', 'et_builder'),
		    ),
		  ),
		  'advanced' => array(
		    'toggles' => array(
		      'header' => esc_html__( 'Header', 'et_builder'),
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
		//add_action( 'wp_footer', array( $this, 'js_frontend_preview' ) );
	}
	function get_fields() {
		$fields = array(
			'section_background_color' => array(
				'label'             => esc_html__( 'Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
				'toggle_slug'			=> 'style',
				'tab_slug'				=> 'advanced',
			),
			'section_heading' => array(
				'label' => esc_html__( 'Title', 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the title for the section.', 'et_builder' ),
				'toggle_slug'			=> 'header',
			),
			'heading_text_color' => array(
				'label'             => esc_html__( 'Heading Text Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom heading color for the title.', 'et_builder' ),
				'toggle_slug'				=> 'header',
				'tab_slug'				=> 'advanced',
			),
			'heading_align' => array(
				'label'           => esc_html__( 'Heading Alignment', 'et_builder' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => array(
					'left' => esc_html__( 'Left', 'et_builder' ),
					'center'  => esc_html__( 'Center', 'et_builder' ),
					'right'  => esc_html__( 'Right', 'et_builder' ),
				),
				'depends_show_if' => 'off',
				'toggle_slug'			=> 'header',
				'tab_slug'				=> 'advanced',
			),
			'featured_image_button' => array(
				'label'           => esc_html__( 'Featured Image', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects'     => array(
					'left_right_button','section_image','slide_image_button',
					'heading_align',
				),
				'toggle_slug'			=> 'body',
			),
			'left_right_button' => array(
				'label'           => esc_html__( 'Image Position', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'Left', 'et_builder' ),
					'on'  => esc_html__( 'Right', 'et_builder' ),
				),
				'depends_show_if' => 'on',
				'toggle_slug'			=> 'body',
			),
			'section_image' => array(
				'label' => esc_html__( 'Image', 'et_builder' ),
				'type' => 'upload',
				'option_category' => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text' => esc_attr__( 'Choose a Gallery Image', 'et_builder' ),
				'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
				'description' => esc_html__( 'If defined, this image will be used as the background for this module. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
				'toggle_slug'			=> 'body',
				'depends_show_if' => 'on',
			),
			'slide_image_button' => array(
				'label'           => esc_html__( 'Fade Image from Left', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'toggle_slug'			=> 'body',
				'depends_show_if' => 'on',
			),
			'show_more_button' => array(
				'label'           => esc_html__( 'More Information Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects'     => array(
					'section_link',
				),
				'toggle_slug'			=> 'body',
			),
			'section_link' => array(
				'label' => esc_html__( 'Link URL', 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'URL destination for the button. (http:// must be included)', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug'			=> 'body',
			),
			'section_content' => array(
				'label'           => esc_html__( 'Content', 'et_builder'),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can create the content that will be used within the module.', 'et_builder' ),
				'toggle_slug'			=> 'body',
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
	function shortcode_callback($atts, $content = null, $function_name) {
		$module_id            		= $this->shortcode_atts['module_id'];
		$module_class         		= $this->shortcode_atts['module_class'];
		$max_width            		= $this->shortcode_atts['max_width'];
		$max_width_tablet     		= $this->shortcode_atts['max_width_tablet'];
		$max_width_phone      		= $this->shortcode_atts['max_width_phone'];
		$max_width_last_edited 		= $this->shortcode_atts['max_width_last_edited'];
		$featured_image_button 		= $this->shortcode_atts['featured_image_button'];
		$heading_align 						= $this->shortcode_atts['heading_align'];
		$image_pos 								= $this->shortcode_atts['left_right_button'];
		$section_image 						= $this->shortcode_atts['section_image'];
		$section_heading 					= $this->shortcode_atts['section_heading'];
		$section_content 					= $this->shortcode_atts['section_content'];
		$show_more_button 				= $this->shortcode_atts['show_more_button'];
		$slide_image_button 			= $this->shortcode_atts['slide_image_button'];
		$section_link 						= $this->shortcode_atts['section_link'];
		$section_background_color = $this->shortcode_atts['section_background_color'];
		$heading_text_color 			= $this->shortcode_atts['heading_text_color'];

		$class = "et_pb_ca_section_primary et_pb_module";
		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );
		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
		  $max_width_responsive_active = et_pb_get_responsive_status( $max_width_last_edited );

		  $max_width_values = array(
		    'desktop' => $max_width,
		    'tablet'  => $max_width_responsive_active ? $max_width_tablet : '',
		    'phone'   => $max_width_responsive_active ? $max_width_phone : '',
		  );

		  et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );
		}

		$section_bg_color = ("" !=  $section_background_color ?
			sprintf(' style="background: %1$s;"', $section_background_color ) : '');

		$heading_text_color = ("" != $heading_text_color ? sprintf(' color: %1$s; ', $heading_text_color) : '');

		$display_button = ($show_more_button == "on" && $section_link != "" ?
			sprintf('<div><a href="%1$s" class="btn btn-default">More Information</a></div>', $section_link) : '');

		if("on" == $featured_image_button){
      $img_class = ("on"== $slide_image_button  ? ' animate-fadeInLeft ' : '');
      $img_class .= ("on" == $image_pos ? 'pull-right' : '');

			$display_image = sprintf('<div class="col-md-4 col-md-offset-0 %1$s" style="%2$s">
					<img src="%3$s" class="img-responsive" style="width: 100%%;"></div>',
                $img_class, ("on" == $image_pos ? 'padding-right: 0;' : 'padding-left: 0;'), $section_image);

				$heading_style =("" != $heading_text_color ? sprintf(' style="%1$s" ', $heading_text_color) : '');

			$section = sprintf('<div class="col-md-15" ><h2%1$s>%2$s</h2>%3$s%4$s</div>',
					$heading_style, $section_heading, $this->shortcode_content, $display_button);

					$body= sprintf('%1$s%2$s', $display_image, $section );

		}else{
			$heading_style = ( ! empty($heading_text_color) ?
										sprintf(' style="%1$s" ', $heading_text_color) : '');

					$body = sprintf('<div><h2%1$s class="text-%2$s">%3$s</h2>%4$s%5$s</div>',
					$heading_style, $heading_align, $section_heading, $this->shortcode_content, $display_button);

		}
		$output = sprintf('<div%1$s class="%2$s%3$s section" %4$s>%5$s</div>',
		( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
		esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
		$section_bg_color, $body);

		return $output;

	}
	// This is a non-standard function. It outputs JS code to render the
		// module preview in the new Divi 3 frontend editor.
		// Return value of the JS function must be full HTML code to display.
		function js_frontend_preview() {
			?>
			<script>
			window.<?php echo $this->slug; ?>_preview = function(args) {
				var section_bg_color = "" !==  args.section_background_color ?
							' style="background: ' + args.section_background_color + ';"' : '';

				var heading_text_color = "" !== args.heading_text_color && undefined !== args.heading_text_color ?
													' color: ' + args.heading_text_color + ';'  : '';
				var heading_float = ' text-align: ' + args.heading_align +'; ' ;


				var display_button = args.show_more_button == "on" && args.section_link !== "" ?
					'<div><a href="' + args.section_link + '" class="btn btn-default">More Information</a></div>' : '';

				if("on" == args.featured_image_button){
        	var img_class = "on"== args.slide_image_button  ? ' animated fadeInLeft ' : '';
      		 img_class += "on" == args.left_right_button ? 'pull-right' : 'pull-left' ;

					var display_image = '<div class="col-md-4 col-md-offset-0 ' + img_class + '">' +
							'<img src="' + args.section_image + '" class="img-responsive" style="width: 100%;"></div>';

					var heading_style = "" !== heading_text_color ? ' style="' + heading_text_color + '" ' : '';

					var section = '<div class="col-md-15" style="padding-right: 15px; padding-left: 15px"><h2' + heading_style + '>' + args.section_heading + '</h2><p>' +
							this.props.content + '</p>' + display_button + '</div>';

					var body = display_image + section;

			}else{
				var heading_style = ' style="' + heading_float + heading_text_color + '" ';

				var body = '<div class="col-md-10 col-md-offset-1"><h2' + heading_style +' class="text-center">' + args.section_heading + '</h2>' +
						'<div  class="text-center"><p>' + this.props.content + '</p></div><div  class="text-center">' + display_button + '</div></div>';


			}
			 var output = '<div class="section" ' + section_bg_color + '>' + body + '</div>';

				return output;

			}
			</script>
			<?php
		}
}
new ET_Builder_Module_CA_Section_Primary;

// Fullwidth Version
class ET_Builder_Module_Fullwidth_CA_Section_Primary extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'FullWidth Section - Primary', 'et_builder' );
		$this->slug = 'et_pb_ca_fullwidth_section_primary';
		$this->fullwidth = true;
		$this->whitelisted_fields = array(
										'section_image',
										'section_heading',
										'section_content',
										'section_link',
										'show_more_button' ,
										'featured_image_button',
										'left_right_button',
										'slide_image_button',
										'section_background_color',
										'heading_align',
										'heading_text_color',
										'max_width',
										'max_width_tablet',
										'max_width_phone',
										'max_width_last_edited',
										'module_class',
										'module_id',
										'admin_label',
		);
		$this->fields_defaults = array(
			'section_link' => array('http://','add_default_setting'),
			'show_more_button' => array('no'),
			'featured_image_button' => array('true'),
		);
		$this->main_css_element = '%%order_class%%';

		$this->options_toggles = array(
			'general' => array(
				'toggles' => array(
					'header' => esc_html__( 'Header', 'et_builder'),
					'body'   => esc_html__( 'Body', 'et_builder'),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'header' => esc_html__( 'Header', 'et_builder'),
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
	}
	function get_fields() {
		$fields = array(
			'section_background_color' => array(
				'label'             => esc_html__( 'Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
				'toggle_slug'				=> 'style',
				'tab_slug'				=> 'advanced',
			),
			'section_heading' => array(
				'label' => esc_html__( 'Title', 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the title for the section.', 'et_builder' ),
				'toggle_slug'	=> 'header',
			),
			'heading_text_color' => array(
				'label'             => esc_html__( 'Heading Text Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom heading color for the title.', 'et_builder' ),
				'toggle_slug'				=> 'header',
				'tab_slug'				=> 'advanced',
			),
			'heading_align' => array(
				'label'           => esc_html__( 'Heading Alignment', 'et_builder' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => array(
					'left' => esc_html__( 'Left', 'et_builder' ),
					'center'  => esc_html__( 'Center', 'et_builder' ),
					'right'  => esc_html__( 'Right', 'et_builder' ),
				),
				'depends_show_if' => 'off',
				'toggle_slug'			=> 'header',
				'tab_slug'				=> 'advanced',
			),
			'featured_image_button' => array(
				'label'           => esc_html__( 'Featured Image', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects'     => array(
					'#et_pb_left_right_button','#et_pb_section_image','#et_pb_slide_image_button',
					'#et_pb_heading_align',
				),
				'toggle_slug'	=> 'body',
				),
			'left_right_button' => array(
				'label'           => esc_html__( 'Image Position', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'Left', 'et_builder' ),
					'on'  => esc_html__( 'Right', 'et_builder' ),
				),
				'toggle_slug' 		=> 'body',
			),
			'section_image' => array(
				'label' => esc_html__( 'Image', 'et_builder' ),
				'type' => 'upload',
				'option_category' => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text' => esc_attr__( 'Choose a Gallery Image', 'et_builder' ),
				'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
				'description' => esc_html__( 'If defined, this image will be used as the background for this module. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
				'toggle_slug' 		=> 'body',
			),
			'slide_image_button' => array(
				'label'           => esc_html__( 'Fade Image from Left', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'toggle_slug' 		=> 'body',
			),
			'show_more_button' => array(
				'label'           => esc_html__( 'More Information Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects'     => array(
					'#et_pb_section_link',
				),
				'toggle_slug' 		=> 'body',
			),
			'section_link' => array(
				'label' => esc_html__( 'Link URL', 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'URL destination for the button. (http:// must be included)', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug' 		=> 'body',
			),
			'section_content' => array(
				'label'           => esc_html__( 'Section Information', 'et_builder'),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can create the content that will be used within the module.', 'et_builder' ),
				'toggle_slug' 		=> 'body',
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
				'toggle_slug' 		=> 'admin_label',
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
	function shortcode_callback($atts, $content = null, $function_name) {
		$module_id            = $this->shortcode_atts['module_id'];

		$module_class         = $this->shortcode_atts['module_class'];

		$max_width            = $this->shortcode_atts['max_width'];

		$max_width_tablet     = $this->shortcode_atts['max_width_tablet'];

		$max_width_phone      = $this->shortcode_atts['max_width_phone'];

		$max_width_last_edited = $this->shortcode_atts['max_width_last_edited'];

		$featured_image_button = $this->shortcode_atts['featured_image_button'];

		$heading_align = $this->shortcode_atts['heading_align'];

		$image_pos = $this->shortcode_atts['left_right_button'];

		$section_image = $this->shortcode_atts['section_image'];

		$section_heading = $this->shortcode_atts['section_heading'];

		$section_content = $this->shortcode_atts['section_content'];

		$show_more_button = $this->shortcode_atts['show_more_button'];

		$slide_image_button = $this->shortcode_atts['slide_image_button'];

		$section_link = $this->shortcode_atts['section_link'];

		$section_background_color = $this->shortcode_atts['section_background_color'];

		$heading_text_color = $this->shortcode_atts['heading_text_color'];

		$class = "et_pb_ca_fullwidth_section_primary et_pb_module";

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
			$max_width_responsive_active = et_pb_get_responsive_status( $max_width_last_edited );

			$max_width_values = array(
				'desktop' => $max_width,
				'tablet'  => $max_width_responsive_active ? $max_width_tablet : '',
				'phone'   => $max_width_responsive_active ? $max_width_phone : '',
			);

			et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );
		}

		$section_bg_color = ("" !=  $section_background_color ?
		sprintf(' style="background: %1$s;"', $section_background_color ) : '');

		$heading_text_color = ("" != $heading_text_color ? sprintf(' color: %1$s; ', $heading_text_color) : '');

		$display_button = ($show_more_button == "on" && $section_link != "" ?
		sprintf('<div><a href="%1$s" class="btn btn-default">More Information</a></div>', $section_link) : '');

		if("on" == $featured_image_button){
      $img_class = ("on"== $slide_image_button  ? ' animate-fadeInLeft ' : '');
      $img_class .= ("on" == $image_pos ? 'pull-right' : '');

			$display_image = sprintf('<div class="col-md-4 col-md-offset-0 %1$s" style="%2$s">
					<img src="%3$s" class="img-responsive" style="width: 100%%; "></div>',
            $img_class, ("on" == $image_pos ? 'padding-right: 0;' : 'padding-left: 0;'), $section_image );

				$heading_style =("" != $heading_text_color ? sprintf(' style="%1$s" ', $heading_text_color) : '');

				$section = sprintf('<div class="col-md-15"><h2%1$s>%2$s</h2>%3$s%4$s</div>',
					$heading_style, $section_heading, $this->shortcode_content, $display_button);

					$body= sprintf('%1$s%2$s', $display_image, $section );

		}else{
			$heading_style = ( ! empty($heading_text_color) ?
								sprintf(' style="%1$s" ', $heading_text_color) : '');

			$body = sprintf('<div><h2%1$s class="text-%2$s">%3$s</h2>%4$s%5$s</div>',
			$heading_style, $heading_align, $section_heading, $this->shortcode_content, $display_button);

		}
		$output = sprintf('<div%1$s class="%2$s%3$s section" %4$s>%5$s</div>',
		( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
		esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
		$section_bg_color, $body);

		return $output;
	}
}
new ET_Builder_Module_Fullwidth_CA_Section_Primary;

?>