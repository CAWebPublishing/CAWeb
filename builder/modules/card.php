<?php
/*
Divi Icon Field Names
When using the et_pb_get_font_icon_list to render the icon picker,
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
*/

class ET_Builder_CA_Card extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'Card', 'et_builder' );

		$this->slug = 'et_pb_ca_card';
		$this->fb_support = true;

		$this->whitelisted_fields = array(
			'card_color',
			'show_image',
			'featured_image',
		 	'title',
			'content',
			'show_button',
			'button_text',
		  'button_link',
			'include_header',
			'card_layout',
			'include_footer',
			'footer_text',
			'text_color',
			'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
			'module_class',
			'module_id',
			'admin_label',
		);

		$this->fields_defaults = array(
			'button_link' => array('http://','add_default_setting'),
		);

		$this->main_css_element = '%%order_class%%';

		$this->options_toggles = array(
		  'general' => array(
		    'toggles' => array(
		      'style'  		=> esc_html__( 'Style', 'et_builder'),
		      'header' 		=> esc_html__( 'Header', 'et_builder'),
		      'body'   		=> esc_html__( 'Body', 'et_builder'),
					'footer'   	=> esc_html__( 'Footer', 'et_builder'),
		    ),
		  ),
		  'advanced' => array(
		    'toggles' => array(
		    'style' 		=> esc_html__( 'Style', 'et_builder'),
		    'header' 		=> esc_html__( 'Header', 'et_builder'),
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
			'card_layout' => array(
				'label'             => esc_html__( 'Style', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'default' => esc_html__( 'Default', 'et_builder'),
					'standout'  => esc_html__( 'Standout', 'et_builder'),
					'overstated'  => esc_html__( 'Overstated', 'et_builder'),
					'understated'  => esc_html__( 'Understated', 'et_builder'),
					'custom' => esc_html__( 'Custom', 'et_builder'),
				),
					'affects' => array('card_color',),
					'toggle_slug'		=> 'style',
			),
			'card_color' => array(
				'label'             => esc_html__( 'Set Card Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom card color.', 'et_builder' ),
				'depends_show_if' => 'custom',
				'toggle_slug'		=> 'style',
				'tab_slug'		=> 'advanced',
			),
			'show_image' => array(
				'label'           => esc_html__( 'Include Image', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('featured_image',),
				'toggle_slug'		=> 'style',
			),
			'featured_image' => array(
				'label' => esc_html__( 'Featured Image', 'et_builder' ),
				'type' => 'upload',
				'option_category' => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text' => esc_attr__( 'Choose a Background Image', 'et_builder' ),
				'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
				'description' => esc_html__( 'If defined, this image will be used as the background for this location. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug'		=> 'style',
			),
			'include_header' => array(
				'label'           => esc_html__( 'Header', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('#et_pb_title', 'title', 'text_color'),
				'toggle_slug'		=> 'header',
			),
			'title' => array(
				'label'           => esc_html__( 'Title', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a title for the card.', 'et_builder' ),
				'depends_show_if'			 => 'on',
				'toggle_slug'		=> 'header',
			),
			'text_color' => array(
				'label'             => esc_html__( 'Heading Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom text color.', 'et_builder' ),
				'depends_show_if'			 => 'on',
				'toggle_slug'		=> 'header',
				'tab_slug'		=> 'advanced',
			),
			'content' => array(
				'label'           => esc_html__( 'Content', 'et_builder'),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can create the content that will be used within the card.', 'et_builder' ),
				'toggle_slug'		=> 'body',
			),
			'show_button' => array(
				'label'           => esc_html__( 'Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('button_text','button_link',),
				'toggle_slug'		=> 'body',
			),
			'button_text' => array(
				'label'           => esc_html__( 'Button Text', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter text for the button.', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug'		=> 'body',
			),
			'button_link' => array(
				'label'           => esc_html__( 'Card URL', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the URL for the location. (http:// must be included)', 'et_builder' ),
				'toggle_slug'		=> 'body',
			),
			'include_footer' => array(
				'label'           => esc_html__( 'Footer', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('footer_text',),
				'toggle_slug' => 'footer',
			),
			'footer_text' => array(
				'label'           => esc_html__( 'Footer Text', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter text for the footer.', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug' => 'footer',
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
	function shortcode_callback($atts, $content = null, $function_name) {
		$module_id           		= $this->shortcode_atts['module_id'];
		$module_class        		= $this->shortcode_atts['module_class'];
		$max_width            	= $this->shortcode_atts['max_width'];
		$max_width_tablet     	= $this->shortcode_atts['max_width_tablet'];
		$max_width_phone     		= $this->shortcode_atts['max_width_phone'];
		$max_width_last_edited	= $this->shortcode_atts['max_width_last_edited'];
		$card_layout 						= $this->shortcode_atts['card_layout'];
		$card_color 						= $this->shortcode_atts['card_color'];
		$text_color 						= $this->shortcode_atts['text_color'];
		$show_image             = $this->shortcode_atts['show_image'];
		$featured_image         = $this->shortcode_atts['featured_image'];
		$title               		= $this->shortcode_atts['title'];
		$content               	= $this->shortcode_atts['content'];
		$show_button            = $this->shortcode_atts['show_button'];
		$button_text            = $this->shortcode_atts['button_text'];
		$button_link    				= $this->shortcode_atts['button_link'];
		$include_header         = $this->shortcode_atts['include_header'];
		$include_footer         = $this->shortcode_atts['include_footer'];
		$footer_text    				= $this->shortcode_atts['footer_text'];

		$class = " et_pb_ca_card et_pb_module ";
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

		$card_layout = ("custom" == $card_layout ? 'default'  : $card_layout);
		$card_color = ("" != $card_color ? sprintf('background-color: %1$s; ', $card_color) : "" );
		$text_color = ("" != $text_color ? sprintf('color: %1$s; ', $text_color) : "" );
		$card_style = sprintf('style="%1$s%2$s" ', $card_color, $text_color);
		$display_image = ("on" == $show_image ?
					sprintf('<img class="card-img-top img-responsive" src="%1$s" alt="Card image cap">', $featured_image) : '');

		$display_header = ("on" == $include_header ?
					sprintf('<div class="card-header"><h4 class="card-title">%1$s</h4></div>', $title) :
					'' 	);

		$display_button = ("on" == $show_button ?
		sprintf('<a href="%1$s" class="btn btn-default">%2$s</a>', $button_link, $button_text) : '');

		$display_footer = ("on" == $include_footer ?
		sprintf('<div class="card-footer">%1$s</div>', $footer_text) : '' );

		$output = sprintf('<div%1$s class="card card-%2$s%9$s" %3$s>
									%4$s%5$s<div class="card-block">
									%6$s%7$s</div>%8$s</div>',
				( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
					$card_layout . $class, $card_style, $display_image, $display_header, $this->shortcode_content,
				$display_button, $display_footer, ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' )
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
				var card_layout = "custom" == args.card_layout ? 'default'  : args.card_layout ;
				var card_color =  undefined !== args.card_color ? 'background-color: ' + args.card_color + '; ' : "" ;
				var text_color =  undefined !== args.text_color ? 'color: ' + args.text_color + '; ' : "" ;
				var card_style =  "" !== card_color || "" !== text_color ? ' style="' + card_color + text_color +'"' : "";

				var display_image = "on" == args.show_image ?
						'<img class="card-img-top img-responsive" src="' + args.featured_image +'" alt="Card image cap">' : '' ;

				var display_header = "on" == args.include_header ?
						'<div class="card-header"><h4 class="card-title">' + args.title + '</h4></div>' : '' 	;

				var display_button = "on" == args.show_button ?
						'<a href="' + args.button_link + '" class="btn btn-default">' + args.button_text + '</a>' : '';

				var display_footer = "on" == args.include_footer ?
						'<div class="card-footer">' + args.footer_text + '</div>' : ''  ;

				var output = '<div class="card card-' + card_layout + '" ' + card_style + '>' + display_image + display_header +
						'<div class="card-block"><p>' + this.props.content + '</p>' + display_button +'</div>' + display_footer + '</div>';

				return output;

			}
			</script>
			<?php
		}
}
new ET_Builder_CA_Card;

?>