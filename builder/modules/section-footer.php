<?php
/*
Divi Icon Field Names
When using the et_pb_get_font_icon_list to render the icon picker,
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
*/

// Standard Version
class ET_Builder_Module_Section_Footer extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'Section - Footer', 'et_builder' );

		$this->slug = 'et_pb_ca_section_footer';
		$this->fb_support = true;

		$this->child_slug      = 'et_pb_ca_section_footer_group';

		$this->child_item_text = esc_html__( 'Group', 'et_builder' );

		$this->whitelisted_fields = array(
			'section_background_color',
			'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
			'module_class',
			'module_id',
			'admin_label',
		);

		$this->main_css_element = '%%order_class%%.et_pb_ca_section_footer';

		$this->options_toggles = array(
		  'general' => array(
		    'toggles' => array(
		      'header' => esc_html__( 'Header', 'et_builder'),
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
		//add_action( 'wp_footer', array( $this, 'js_frontend_preview' ) );
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
		$section_background_color = $this->shortcode_atts['section_background_color'];

		$class = "et_pb_ca_section_footer section";
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

		$section_bg_color = ("" != $section_background_color ?
					sprintf(' style="background: %1$s" ', $section_background_color): '');

		$output = sprintf(
			'<div%1$s class="%2$s%3$s" %4$s>
				<div class="row group">
					%5$s
				</div>
			</div> <!-- .et_pb_ca_section_footer -->',
			( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
			esc_attr( $class ), ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
			$section_bg_color, $this->shortcode_content
		);

		return $output;

	}

		// This is a non-standard function. It outputs JS code to render the
		// module preview in the new Divi 3 frontend editor.
		// Return value of the JS function must be full HTML code to display.
		function js_frontend_preview() {
			?>
			<script>
			window.<?php echo $this->slug; ?>_preview = function(args) {
				 var section_bg_color = "" !== args.section_background_color && undefined !== args.section_background_color ?
					' style="background: ' + args.section_background_color + '" ': '';

				var output = '<div class="section" ' + section_bg_color + '><div class="row group">' + this.props.content + '</div></div>';

				return output;

			}
			</script>
			<?php
		}
}
new ET_Builder_Module_Section_Footer;

class ET_Builder_Module_Footer_Group extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'Footer Group', 'et_builder' );

		$this->slug = 'et_pb_ca_section_footer_group';
		$this->fb_support = true;

		$this->type = 'child';

		$this->child_title_var = 'group_title';

		$this->child_title_fallback_var = 'group_title';

		$this->whitelisted_fields = array('heading_color', 'text_color',
			'font_icon', 'group_icon_button', 'group_title',
			'group_url', 'group_show_more_button', 'display_link_as_button',
			'group_link1_show',
			'group_link2_show', 'group_link3_show', 'group_link4_show',
			'group_link5_show', 'group_link6_show', 'group_link7_show',
			'group_link8_show', 'group_link9_show', 'group_link10_show',
		 'group_link_text1', 'group_link_url1','group_link_text2',
		 'group_link_url2', 'group_link_text3', 'group_link_url3',
		 'group_link_text4', 'group_link_url4', 'group_link_text5',
		 'group_link_url5', 'group_link_text6', 'group_link_url6',
		 'group_link_text7', 'group_link_url7', 'group_link_text8',
		 'group_link_url8', 'group_link_text9', 'group_link_url9',
		 'group_link_text10', 'group_link_url10','module_class', 'module_id',
			);

		$this->fields_defaults = array(
			'font_icon' => array('%-1%','add_default_setting'),
			'group_url' => array('http://','add_default_setting'),
			'group_link_url1' => array('http://','add_default_setting'),
					'group_link_url2' => array('http://','add_default_setting'),
					'group_link_url3' => array('http://','add_default_setting'),
					'group_link_url4' => array('http://','add_default_setting'),
					'group_link_url5' => array('http://','add_default_setting'),
					'group_link_url6' => array('http://','add_default_setting'),
					'group_link_url7' => array('http://','add_default_setting'),
					'group_link_url8' => array('http://','add_default_setting'),
					'group_link_url9' => array('http://','add_default_setting'),
					'group_link_url10' => array('http://','add_default_setting'),
			);

		$this->advanced_setting_title_text = esc_html__( 'New Footer Group', 'et_builder' );

		$this->settings_text = esc_html__( 'Footer Group Settings', 'et_builder' );

		$this->main_css_element = '%%order_class%%';

		$this->options_toggles = array(
			'general' => array(
				'toggles' => array(
					'style'  => esc_html__( 'Style', 'et_builder'),
					'header' => esc_html__( 'Header', 'et_builder'),
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
		//add_action( 'wp_footer', array( $this, 'js_frontend_preview' ) );
	}
	function get_fields() {
		$fields = array(
			'heading_color' => array(
				'label'             => esc_html__( 'Heading Text Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom heading color for the title.', 'et_builder' ),
				'toggle_slug'				=> 'style',
				'tab_slug'				=> 'advanced',
			),
			'text_color' => array(
				'label'             => esc_html__( 'Text Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom text color for the list items.', 'et_builder' ),
				'toggle_slug'				=> 'style',
				'tab_slug'				=> 'advanced',
			),
			'group_title' => array(
				'label' => esc_html__( 'Title', 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the title for the group section.', 'et_builder' ),
				'toggle_slug'				=> 'header',
			),
			'group_icon_button' => array(
				'label'           => esc_html__( 'List Icon', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects'     => array(
					'#et_pb_font_icon',
				),
				'toggle_slug'				=> 'style',
				'tab_slug'				=> 'advanced',
			),
			'font_icon' => array(
				'label' => esc_html__( 'Group Icon', 'et_builder' ),
				'type' => 'text',
	  		'option_category'     => 'configuration',
				'class'    => array('et-pb-font-icon'),
				'renderer'            => 'et_pb_get_font_icon_list',
				'renderer_with_field' => true,
				'description' => esc_html__( 'Define the icon for the group section.', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug'				=> 'style',
				'tab_slug'				=> 'advanced',
			),
			'group_show_more_button' => array(
				'label'           => esc_html__( 'Read More Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('#et_pb_group_url',),
				'toggle_slug'				=> 'body',
			),
			'group_url' => array(
				'label' => esc_html__( 'Read More URL', 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the url for the Read More Button. (http:// must be included)', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug'				=> 'body',
			),
			'display_link_as_button' => array(
				'label'           => esc_html__( 'Links as Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'toggle_slug'				=> 'body',
			)
		);

    for($i = 1; $i <= 10; $i++){
      $groups[sprintf('group_link%1$s_show', $i)] = array(
				'label'           => esc_html__( sprintf('Link %1$s', $i), 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array(
					sprintf('group_link_text%1$s', $i),sprintf('group_link_url%1$s', $i),
				),
				'toggle_slug'				=> 'body',
			);

			 $groups[sprintf('group_link_text%1$s', $i)] = array(
				'label' => esc_html__( sprintf('Link %1$s Text', $i), 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug'				=> 'body',
			);
       $groups[sprintf('group_link_url%1$s', $i)] = array(
				'label' => esc_html__( sprintf('Link %1$s URL', $i), 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug'				=> 'body',
			  );
    }

    $ending_fields['module_id'] = array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			);

			$ending_fields['module_class'] = array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
		);

		return array_merge($fields, $groups, $ending_fields);

	}
	function shortcode_callback($atts, $content = null, $function_name) {
		$module_id            = $this->shortcode_atts['module_id'];

		$module_class         = $this->shortcode_atts['module_class'];

		$heading_color = $this->shortcode_atts['heading_color'];

		$text_color= $this->shortcode_atts['text_color'];

		$group_icon = $this->shortcode_atts['font_icon'];

		$group_title = $this->shortcode_atts['group_title'];

		$group_url = $this->shortcode_atts['group_url'];

		$group_icon_button = $this->shortcode_atts['group_icon_button'];

		$group_show_more_button = $this->shortcode_atts['group_show_more_button'];

		$display_link_as_button= $this->shortcode_atts['display_link_as_button'];

    // Declare variable variables for the 10 groups
    for($i = 1; $i <= 10; $i++){
      $group_link_show[$i] = $this->shortcode_atts[sprintf('group_link%1$s_show', $i)];
      $group_link_text[$i] = $this->shortcode_atts[sprintf('group_link_text%1$s', $i)];
      $group_link_url[$i] = $this->shortcode_atts[sprintf('group_link_url%1$s', $i)];
    }

		$class = "quarter";

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		//$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

		$heading_color = ( ! empty($heading_color) ? sprintf(' style="color: %1$s" ', $heading_color) : '');

		$icon_color = ( ! empty($text_color) ? sprintf(' color: %1$s;', $text_color) : '');
		$text_color = ( ! empty($text_color) ? sprintf(' style="color: %1$s" ', $text_color) : '');

    $icon = ("on" == $group_icon_button ? caweb_get_icon_span($group_icon, $icon_color) : '');

		$link_as_button = ("on" == $display_link_as_button ? ' class="btn btn-default btn-xs" ' : '');

		$no_pad = ("on" != $group_icon_button ? 'padding-left: 0 !important;' : '');

		$display_more_button = ("on" == $group_show_more_button ?
		sprintf('<a href="%1$s" class="btn btn-primary">Read More</a>', $group_url) : '');

		$group_links = '';

    for($i = 1; $i <= 10; $i++){
      $tmp[] = $icon;
      $group_links .= ("on" == $group_link_show[$i] ?
        sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>',
        $group_link_url[$i], $link_as_button, $text_color, $icon, $group_link_text[$i] ) : '');
    }

		$output = sprintf('<div%1$s class="%2$s%3$s">
				<h4 %4$s>%5$s</h4>
				<ul class="list-unstyled" style="list-style-type: none; %6$s">
				%7$s</ul></div>' ,
				( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
				esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
				 $heading_color, $group_title, $no_pad, $group_links);

		return $output;

	}
		// This is a non-standard function. It outputs JS code to render the
		// module preview in the new Divi 3 frontend editor.
		// Return value of the JS function must be full HTML code to display.
		function js_frontend_preview() {
			?>
			<script>
			window.<?php echo $this->slug; ?>_preview = function(args) {
				var output = '<div class="quarter"><h4 ' + args.heading_color + '>' + args.group_title + '</h4>' +
						'<ul class="list-unstyled" style="list-style-type: none;"></ul></div>';

				return output;

			}
			</script>
			<?php
		}
}
new ET_Builder_Module_Footer_Group;

// Fullwidth Version
class ET_Builder_Module_FullWidth_Section_Footer extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'FullWidth Section - Footer', 'et_builder' );
		$this->slug = 'et_pb_ca_fullwidth_section_footer';
		$this->fullwidth = true;
		$this->child_slug      = 'et_pb_ca_section_fullwidth_footer_group';
		$this->child_item_text = esc_html__( 'Group', 'et_builder' );
		$this->whitelisted_fields = array(
			'section_background_color',
			'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
			'module_class',
			'module_id',
			'admin_label',
		);

		$this->main_css_element = '%%order_class%%';

		$this->options_toggles = array(
			'general' => array(
				'toggles' => array(
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
				'tab_slug'				=> 'custom_css',
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
		$section_background_color = $this->shortcode_atts['section_background_color'];

		$class = "et_pb_ca_fullwidth_section_footer section";
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

		$section_bg_color = ("" != $section_background_color ?
					sprintf(' style="background: %1$s" ', $section_background_color): '');

		$output = sprintf(
			'<div%1$s class="%2$s%3$s" %4$s>
				<div class="row group">
					%5$s
				</div>
			</div> <!-- .et_pb_ca_fullwidth_section_footer -->',
			( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
			esc_attr( $class ), ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
			$section_bg_color, $this->shortcode_content
		);
		return $output;
	}
}
new ET_Builder_Module_FullWidth_Section_Footer;

class ET_Builder_Module_FullWidth_Footer_Group extends ET_Builder_CAWeb_Module{
function init() {
	$this->name = esc_html__( 'FullWidth Footer Group', 'et_builder' );
	$this->slug = 'et_pb_ca_section_fullwidth_footer_group';
	$this->type = 'child';
	$this->fullwidth = true;
	$this->child_title_var = 'group_title';
	$this->child_title_fallback_var = 'group_title';

	$this->whitelisted_fields = array('heading_color', 'text_color',
	'font_icon', 'group_icon_button', 'group_title',
	'group_url', 'group_show_more_button', 'display_link_as_button',
	'group_link1_show',
	'group_link2_show', 'group_link3_show', 'group_link4_show',
	'group_link5_show', 'group_link6_show', 'group_link7_show',
	'group_link8_show', 'group_link9_show', 'group_link10_show',
 'group_link_text1', 'group_link_url1','group_link_text2',
 'group_link_url2', 'group_link_text3', 'group_link_url3',
 'group_link_text4', 'group_link_url4', 'group_link_text5',
 'group_link_url5', 'group_link_text6', 'group_link_url6',
 'group_link_text7', 'group_link_url7', 'group_link_text8',
 'group_link_url8', 'group_link_text9', 'group_link_url9',
 'group_link_text10', 'group_link_url10','module_class', 'module_id', 'admin_label',
		);

	$this->fields_defaults = array(
		'font_icon' => array('%-1%','add_default_setting'),
		'group_url' => array('http://','add_default_setting'),
		'group_link_url1' => array('http://','add_default_setting'),
				'group_link_url2' => array('http://','add_default_setting'),
				'group_link_url3' => array('http://','add_default_setting'),
				'group_link_url4' => array('http://','add_default_setting'),
				'group_link_url5' => array('http://','add_default_setting'),
				'group_link_url6' => array('http://','add_default_setting'),
				'group_link_url7' => array('http://','add_default_setting'),
				'group_link_url8' => array('http://','add_default_setting'),
				'group_link_url9' => array('http://','add_default_setting'),
				'group_link_url10' => array('http://','add_default_setting'),
		);
	$this->advanced_setting_title_text = esc_html__( 'New Footer Group', 'et_builder' );
	$this->settings_text = esc_html__( 'Footer Group Settings', 'et_builder' );
	$this->main_css_element = '%%order_class%%';

	$this->options_toggles = array(
		'general' => array(
			'toggles' => array(
				'style'  => esc_html__( 'Style', 'et_builder'),
				'header' => esc_html__( 'Header', 'et_builder'),
				'body'   => esc_html__( 'Body', 'et_builder'),
			),
		),
    'advanced' => array(
			'toggles' => array(
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
		'heading_color' => array(
			'label'             => esc_html__( 'Heading Text Color', 'et_builder' ),
			'type'              => 'color-alpha',
			'custom_color'      => true,
			'description'       => esc_html__( 'Here you can define a custom heading color for the title.', 'et_builder' ),
			'toggle_slug'				=> 'header',
			'tab_slug'				=> 'advanced',
		),
		'text_color' => array(
			'label'             => esc_html__( 'Text Color', 'et_builder' ),
			'type'              => 'color-alpha',
			'custom_color'      => true,
			'description'       => esc_html__( 'Here you can define a custom text color for the list items.', 'et_builder' ),
			'toggle_slug'				=> 'body',
			'tab_slug'				=> 'advanced',
		),
		'group_title' => array(
			'label' => esc_html__( 'Title', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the title for the group section.', 'et_builder' ),
			'toggle_slug'	=> 'header',
		),
		'group_icon_button' => array(
			'label'           => esc_html__( 'List Icon', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects'     => array(
				'#et_pb_font_icon',
			),
			'toggle_slug'			=> 'body',
			'tab_slug'				=> 'advanced',
		),
		'font_icon' => array(
			'label' => esc_html__( 'Group Icon', 'et_builder' ),
			'type' => 'text',
			'option_category'     => 'configuration',
			'class'    => array('et-pb-font-icon'),
				'renderer'            => 'et_pb_get_font_icon_list',
			'renderer_with_field' => true,
			'description' => esc_html__( 'Define the icon for the group section.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug'		=> 'body',
			'tab_slug'				=> 'advanced',
		),
		'group_show_more_button' => array(
			'label'           => esc_html__( 'Read More Button', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array('#et_pb_group_url',),
			'toggle_slug' => 'body',
		),
		'group_url' => array(
			'label' => esc_html__( 'Read More URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the url for the Read More Button. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'display_link_as_button' => array(
			'label'           => esc_html__( 'Display Links as Button', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'toggle_slug' => 'body',
		),);

  for($i = 1; $i <= 10; $i++){
      $groups[sprintf('group_link%1$s_show', $i)] = array(
				'label'           => esc_html__( sprintf('Link %1$s', $i), 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array(
					sprintf('group_link_text%1$s', $i),sprintf('group_link_url%1$s', $i),
				),
				'toggle_slug'				=> 'body',
			);

			 $groups[sprintf('group_link_text%1$s', $i)] = array(
				'label' => esc_html__( sprintf('Link %1$s Text', $i), 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug'				=> 'body',
			);
       $groups[sprintf('group_link_url%1$s', $i)] = array(
				'label' => esc_html__( sprintf('Link %1$s URL', $i), 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug'				=> 'body',
			  );
    }

  $ending_fields['module_id'] = array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			);

			$ending_fields['module_class'] = array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
		);

	return array_merge($fields, $groups, $ending_fields);
}
function shortcode_callback($atts, $content = null, $function_name) {
	$module_id            = $this->shortcode_atts['module_id'];

	$module_class         = $this->shortcode_atts['module_class'];

	$heading_color = $this->shortcode_atts['heading_color'];

	$text_color= $this->shortcode_atts['text_color'];

	$group_icon = $this->shortcode_atts['font_icon'];

		$group_title = $this->shortcode_atts['group_title'];

		$group_url = $this->shortcode_atts['group_url'];

		$group_icon_button = $this->shortcode_atts['group_icon_button'];

		$group_show_more_button = $this->shortcode_atts['group_show_more_button'];

		$display_link_as_button= $this->shortcode_atts['display_link_as_button'];

  	for($i = 1; $i <= 10; $i++){
      $group_link_show[$i] = $this->shortcode_atts[sprintf('group_link%1$s_show', $i)];
      $group_link_text[$i] = $this->shortcode_atts[sprintf('group_link_text%1$s', $i)];
      $group_link_url[$i] = $this->shortcode_atts[sprintf('group_link_url%1$s', $i)];
    }

	$class = "quarter";

	$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

	$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

	$heading_color = ( ! empty($heading_color) ? sprintf(' style="color: %1$s" ', $heading_color) : '');

	$icon_color = ( ! empty($text_color) ? sprintf(' color: %1$s;', $text_color) : '');
	$text_color = ( ! empty($text_color) ? sprintf(' style="color: %1$s" ', $text_color) : '');

	$icon = ("on" == $group_icon_button ? caweb_get_icon_span($group_icon, $icon_color) : '');

	$link_as_button = ("on" == $display_link_as_button ? ' class="btn btn-default btn-xs" ' : '');

	$no_pad = ("on" != $group_icon_button ? 'padding-left: 0 !important;' : '');

	$display_more_button = ("on" == $group_show_more_button ?
	sprintf('<a href="%1$s" class="btn btn-primary">Read More</a>', $group_url) : '');

	$group_links = '';

  for($i = 1; $i <= 10; $i++){
    $group_links .= ("on" == $group_link_show[$i] ?
            sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>',
            $group_link_url[$i], $link_as_button, $text_color, $icon, $group_link_text[$i] ) : '');

   }

	$output = sprintf('<div%1$s class="%2$s%3$s">
			<h4 %4$s>%5$s</h4>
			<ul class="list-unstyled" style="list-style-type: none; %6$s">
			%7$s</ul></div>' ,
			( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
			esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
			 $heading_color, $group_title, $no_pad, $group_links);

	return $output;
}
}
new ET_Builder_Module_FullWidth_Footer_Group;
?>