<?php
/*
Divi Icon Field Names
When using the et_pb_get_font_icon_list to render the icon picker,
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
*/


/*********************
	Standard Version 
**********************/
class ET_Builder_Module_Panel extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'Panel', 'et_builder' );

		$this->slug = 'et_pb_ca_panel';
		$this->fb_support = true;

		$this->whitelisted_fields = array(
			'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
			'module_class',
			'module_id',
			'admin_label',
			'panel_layout',
			'show_button',
			'use_icon',
			'font_icon',
			'heading_align',
			'button_link',
			'title',
			'heading_text_color',
			'content_new',
		);

		$this->fields_defaults = array(
			'panel_layout' => array( 'default' ),
			'button_link' => array( 'http://','add_default_setting'),
		);

		$this->main_css_element = '%%order_class%%';

		$this->options_toggles = array(
		  'general' => array(
		    'toggles' => array(
		      'style'  => esc_html__( 'Style' , 'et_builder'),
		      'header' => esc_html__( 'Header', 'et_builder'),
		      'body'   => esc_html__( 'Body'  , 'et_builder'),
		    ),
		  ),
		  'advanced' => array(
		    'toggles' => array(
		      'header' => esc_html__( 'Header', 'et_builder'),
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
			'panel_layout' => array(
				'label'             => esc_html__( 'Style','et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'none' => esc_html__( 'None','et_builder'),
					'default' => esc_html__( 'Default','et_builder'),
					'standout'  => esc_html__( 'Standout','et_builder'),
					'standout highlight'  => esc_html__( 'Standout Highlight','et_builder'),
					'overstated'  => esc_html__( 'Overstated','et_builder'),
					'understated'  => esc_html__( 'Understated','et_builder'),
				),
				'description'       => esc_html__( 'Here you can choose the style of panel to display','et_builder' ),
				'affects' => array('heading_text_color'),
				'toggle_slug' => 'style',
			),
			'title' => array(
				'label'           => esc_html__( 'Heading','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a Heading Title.','et_builder' ),
				'toggle_slug'			=> 'header',
			),
			'heading_align' => array(
				'label'             => esc_html__( 'Heading Alignment','et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'left' => esc_html__( 'Left','et_builder'),
					'center' => esc_html__( 'Center','et_builder'),
					'right'  => esc_html__( 'Right','et_builder'),
				),
				'description'       => esc_html__( 'Here you can choose the alignment for the panel heading','et_builder' ),
				'toggle_slug'				=> 'header',
				'tab_slug' => 'advanced',
			),
			'heading_text_color' => array(
				'label'             => esc_html__( 'Heading Text Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom heading color for the title.', 'et_builder' ),
				'depends_show_if' 	=> 'none',
				'toggle_slug'				=> 'header',
				'tab_slug' => 'advanced',
			),
			'use_icon' => array(
				'label'           => esc_html__( 'Use Icon', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'affects' => array('font_icon',),
				'description' => 'Choose whether to display an icon before the Heading',
				'toggle_slug' => 'header',
				'tab_slug' => 'advanced',
			),
			'font_icon' => array(
				'label'           => esc_html__( 'Heading Icon','et_builder' ),
				'type'            => 'text',
			 	'option_category'     => 'configuration',
				'class'               => array( 'et-pb-font-icon' ),
  			'renderer'            => 'et_pb_get_font_icon_list',
				'renderer_with_field' => true,
				'depends_show_if'   	=> 'on',
				'description'     		=> esc_html__( 'Here you can select a Heading Icon','et_builder' ),
				'toggle_slug'   			=> 'header',
				'tab_slug' => 'advanced',
			),
			'show_button' => array(
				'label'           => esc_html__( 'Read More Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('button_link',),
				'description'     => esc_html__( 'Here you can select to display a button.','et_builder' ),
				'toggle_slug'			=> 'header',
			),
			'button_link' => array(
				'label'           => esc_html__( 'Button Link','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the URL for the button. (http:// must be included)','et_builder' ),
				'depends_show_if' => "on",
				'toggle_slug'			=> 'header',
			),
			'content_new' => array(
				'label'           => esc_html__( 'Content','et_builder'),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can create the content that will be used within the module.','et_builder' ),
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
				'toggle_slug' => 'admin_label',
			),
			'module_id' => array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
		);

		return $fields;

	}
	function shortcode_callback( $atts, $content = null, $function_name ) {
		$module_id             	= $this->shortcode_atts['module_id'];
		$module_class          	= $this->shortcode_atts['module_class'];
		$max_width             	= $this->shortcode_atts['max_width'];
		$max_width_tablet      	= $this->shortcode_atts['max_width_tablet'];
		$max_width_phone       	= $this->shortcode_atts['max_width_phone'];
		$max_width_last_edited 	= $this->shortcode_atts['max_width_last_edited'];
		$panel_layout        		= $this->shortcode_atts['panel_layout'];
		$use_icon               = $this->shortcode_atts['use_icon'];
		$icon               		= $this->shortcode_atts['font_icon'];
		$title    							= $this->shortcode_atts['title'];
		$heading_align    			= $this->shortcode_atts['heading_align'];
		$heading_text_color    	= $this->shortcode_atts['heading_text_color'];
		$show_button    				= $this->shortcode_atts['show_button'];
		$button_link    				= $this->shortcode_atts['button_link'];
		$content_new    				= $this->shortcode_atts['content_new'];

		$class = "et_pb_ca_panel et_pb_module";
		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );
		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );
		$display_icon = ("on" == $use_icon ? get_icon_span( $icon ) : '');

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
		  $max_width_responsive_active = et_pb_get_responsive_status( $max_width_last_edited );

		  $max_width_values = array(
		    'desktop' => $max_width,
		    'tablet'  => $max_width_responsive_active ? $max_width_tablet : '',
		    'phone'   => $max_width_responsive_active ? $max_width_phone : '',
		  );

		  et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );
		}


		$headingSize = ("none" == $panel_layout ? 'h1' : 'h2');

		$heading_text_color = ("none" == $panel_layout && "" != $heading_text_color ?
						sprintf(' style="color: %1$s;"', $heading_text_color) : '');

		$option_padding = ("right" == $heading_align ? ' style="padding-left: 10px;"' : '');

		$heading_align = ("left" != $heading_align ? sprintf('text-align: %1$s; width: 100%;', $heading_align ) : '');

		$heading_style = ("" != $heading_text_color || "" != $heading_align ?
						sprintf(' style="%1$s%2$s"', $heading_text_color, $heading_align )  : '');

		$remove_overflow = ("none" == $panel_layout ? 'style="overflow: visible;"' : '');

		$display_options = ($show_button == "on" ? sprintf('<div class="options" %2$s>
		<a href="%1$s" class="btn btn-default">Read More</a></div>',$button_link,  $option_padding ) : '') ;

		$display_title = ("" != $title ? sprintf('<div class="panel-heading" ><%1$s%2$s>%3$s%4$s%5$s</%1$s></div>',
				$headingSize, ("" != $heading_style ? $heading_style : ''), $display_icon, $title, $display_options) : '');

		$output = sprintf('<div%5$s class="%6$s%7$s panel panel-%1$s" %2$s>
								%3$s
									<div class="panel-body">%4$s</div></div> <!-- .et_pb_panel -->',
					$panel_layout, $remove_overflow, $display_title,  $this->shortcode_content,
      	  ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),	esc_attr( $class ),
    	    ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' )
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
				var icon_list = <?= json_encode( get_ca_icon_list(-1,'',true) ) ?>;
				var dispay_icon = "on" == args.use_icon ? '<span class="ca-gov-icon-' + icon_list[args.icon.replace(/%%/g, "")] + '"></span> ' : '';

				var heading_size = "none" == args.panel_layout ? "h1" : "h2";
				var heading_text_color = "none" == args.panel_layout && !Boolean(args.heading_text_color) ? 'color: ' + args.heading_text_color + '; ' : '';
			 	var heading_align = "left" != args.heading_align ? 'text-align: ' + args.heading_align + '; width: 100%;' : '';
				var heading_style = !Boolean(heading_text_color) || !Boolean(heading_align) ? ' style="' + heading_text_color + heading_align +'"'  : '';
				var option_padding = "right" == args.heading_align ? ' style="padding-left: 10px;"' : '';
  			var readmore =  "on" == args.show_button ? '<div class="options" ' + option_padding + '><a href="'+ args.button_link +'" class="btn btn-default">Read More</a></div>' : '' ;
				var heading = Boolean(args.title) ? '<div class="panel-heading" ><' + heading_size + heading_style + '>'+ dispay_icon + args.title + readmore +'</' + heading_size + '></div>' : '';

 				var remove_overflow = "none" == args.panel_layout ? 'style="overflow: visible;"' : '';

				var output =  '<div class="panel panel-'+ args.panel_layout +'" ' + remove_overflow + '>' + heading + '<div class="panel-body">' + this.props.content +'</div></div> <!-- .et_pb_panel -->';

				return output;

			}
			</script>
			<?php
		}
}
new ET_Builder_Module_Panel;

/*********************
	Fullwidth Version 
**********************/
class ET_Builder_Module_Fullwidth_Panel extends ET_Builder_CAWeb_Module{
	function init(){
		$this->name = esc_html__( 'FullWidth Panel', 'et_builder' );
		$this->slug = 'et_pb_ca_fullwidth_panel';
		$this->fb_support = true;
		$this->fullwidth       = true;

		$this->whitelisted_fields = array(
			'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
			'module_class',
			'module_id',
			'admin_label',
			'panel_layout',
			'show_button',
			'use_icon',
			'font_icon',
			'heading_align',
			'button_link',
			'title',
			'heading_text_color',
			'content_new',
			);

			$this->fields_defaults = array(
				'panel_layout' => array( 'default' ),
				'button_link' => array( 'http://','add_default_setting'),
			);

			$this->main_css_element = '%%order_class%%';

			$this->options_toggles = array(
				'general' => array(
					'toggles' => array(
						'style'  => esc_html__( 'Style' , 'et_builder'),
						'header' => esc_html__( 'Header', 'et_builder'),
						'body'   => esc_html__( 'Body'  , 'et_builder'),
					),
				),
				'advanced' => array(
					'toggles' => array(
            'header' => esc_html__( 'Header', 'et_builder'),
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
			'panel_layout' => array(
				'label'             => esc_html__( 'Style','et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'none' => esc_html__( 'None','et_builder'),
					'default' => esc_html__( 'Default','et_builder'),
					'standout'  => esc_html__( 'Standout','et_builder'),
					'standout highlight'  => esc_html__( 'Standout Highlight','et_builder'),
					'overstated'  => esc_html__( 'Overstated','et_builder'),
					'understated'  => esc_html__( 'Understated','et_builder'),
				),
				'description'       => esc_html__( 'Here you can choose the style of panel to display','et_builder' ),
				'affects' => array('heading_text_color'),
				'toggle_slug' => 'style',
			),
			'title' => array(
				'label'           => esc_html__( 'Heading','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a Heading Title.','et_builder' ),
				'toggle_slug'     => 'header',
			),
			'heading_align' => array(
				'label'             => esc_html__( 'Heading Alignment','et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'left' => esc_html__( 'Left','et_builder'),
					'center' => esc_html__( 'Center','et_builder'),
					'right'  => esc_html__( 'Right','et_builder'),
				),
				'description'       => esc_html__( 'Here you can choose the alignment for the panel heading','et_builder' ),
				'toggle_slug'       => 'header',
				'tab_slug'       => 'advanced',
			),
			'heading_text_color' => array(
				'label'             => esc_html__( 'Heading Text Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom heading color for the title.', 'et_builder' ),
				'depends_show_if'   => 'none',
				'toggle_slug'       => 'header',
				'tab_slug'       => 'advanced',
			),
			'use_icon' => array(
				'label'           => esc_html__( 'Use Icon', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'affects' => array('font_icon',),
				'description' => 'Choose whether to display an icon before the Heading',
				'toggle_slug'       => 'header',
				'tab_slug'       => 'advanced',
			),
			'font_icon' => array(
				'label'           => esc_html__( 'Heading Icon','et_builder' ),
				'type'            => 'text',
			 	'option_category'     => 'configuration',
				'class'               => array( 'et-pb-font-icon' ),
				'renderer'            => 'et_pb_get_font_icon_list',
				'renderer_with_field' => true,
				'depends_show_if' => 'on',
				'description'     => esc_html__( 'Here you can select a Heading Icon','et_builder' ),
				'toggle_slug'       => 'header',
				'tab_slug'       => 'advanced',
			),
			'show_button' => array(
				'label'           => esc_html__( 'Read More Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('button_link',),
				'description'     => esc_html__( 'Here you can select to display a button.','et_builder' ),
				'toggle_slug'       => 'header',
			),
			'button_link' => array(
				'label'           => esc_html__( 'Button Link','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the URL for the button. (http:// must be included)','et_builder' ),
				'depends_show_if' => "on",
				'toggle_slug'       => 'header',
			),
			'content_new' => array(
				'label'           => esc_html__( 'Content','et_builder'),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can create the content that will be used within the module.','et_builder' ),
				'toggle_slug'       => 'body',
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
				'toggle_slug' => 'admin_label',
			),
			'module_id' => array(
				'label'           => esc_html__( 'CSS ID', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'configuration',
				'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'classes',
				'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
				'label'           => esc_html__( 'CSS Class', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'configuration',
				'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'classes',
				'option_class'    => 'et_pb_custom_css_regular',
			),
			);
		return $fields;
	}
	function shortcode_callback( $atts, $content = null, $function_name ) {
		$module_id            = $this->shortcode_atts['module_id'];
		$module_class         = $this->shortcode_atts['module_class'];
		$max_width            = $this->shortcode_atts['max_width'];
		$max_width_tablet     = $this->shortcode_atts['max_width_tablet'];
		$max_width_phone      = $this->shortcode_atts['max_width_phone'];
		$max_width_last_edited = $this->shortcode_atts['max_width_last_edited'];
		$panel_layout    = $this->shortcode_atts['panel_layout'];
		$use_icon               = $this->shortcode_atts['use_icon'];
		$icon               = $this->shortcode_atts['font_icon'];
		$title    = $this->shortcode_atts['title'];
		$heading_align    = $this->shortcode_atts['heading_align'];
		$heading_text_color    = $this->shortcode_atts['heading_text_color'];
		$show_button    = $this->shortcode_atts['show_button'];
		$button_link    = $this->shortcode_atts['button_link'];

		$class = "et_pb_ca_fullwidth_panel et_pb_module";
		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );
		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );
		$display_icon = ("on" == $use_icon ? get_icon_span($icon) : '');

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
			$max_width_responsive_active = et_pb_get_responsive_status( $max_width_last_edited );

			$max_width_values = array(
				'desktop' => $max_width,
				'tablet'  => $max_width_responsive_active ? $max_width_tablet : '',
				'phone'   => $max_width_responsive_active ? $max_width_phone : '',
			);

			et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );
		}

		$headingSize = ("none" == $panel_layout ? 'h1' : 'h2');
		$heading_text_color = ("none" == $panel_layout && "" != $heading_text_color ?
						sprintf(' style="color: %1$s;"', $heading_text_color) : '');

		$option_padding = ("right" == $heading_align ? ' style="padding-left: 10px;"' : '');
		$heading_align = ("left" != $heading_align ? sprintf('text-align: %1$s; width: 100%;', $heading_align ) : '');
		$heading_style = ("" != $heading_text_color || "" != $heading_align ?
										sprintf(' style="%1$s%2$s"', $heading_text_color, $heading_align )  : '');

		$remove_overflow = ("none" == $panel_layout ? 'style="overflow: visible;"' : '');
		$display_options = ($show_button == "on" ? sprintf('<div class="options" %2$s>
						<a href="%1$s" class="btn btn-default">Read More</a></div>',$button_link,  $option_padding ) : '') ;

		$display_title = ("" != $title ? sprintf('<div class="panel-heading" ><%1$s%2$s>%3$s%4$s%5$s</%1$s></div>',
								$headingSize, ( !empty($heading_style) ? $heading_style : ''), $display_icon, $title, $display_options) : '');

		$output = sprintf('<div%5$s class="%6$s%7$s panel panel-%1$s" %2$s>
									%3$s
									<div class="panel-body">%4$s</div></div> <!-- .et_pb_panel -->',
							$panel_layout, $remove_overflow, $display_title,  $this->shortcode_content,
							( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),	esc_attr( $class ),
							( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' )
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
								alert(args);
				return output;

			}
			</script>
			<?php
		}

}
new ET_Builder_Module_Fullwidth_Panel;
?>