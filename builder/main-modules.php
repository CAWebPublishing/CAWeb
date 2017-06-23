<?php
class ET_Builder_Module_Panel extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'Panel', 'et_builder' );

		$this->slug = 'et_pb_ca_panel';

		$this->whitelisted_fields = array(
				'max_width', 'max_width_tablet', 'max_width_phone',
				'module_class', 'module_id', 'admin_label',
			'panel_layout', 'show_button', 'use_icon', 'icon',
			'button_link','title','contact_email',
			'heading_text_color', 'content_new', 'in_panel_button',
			'contact_addr_button','contact_address','contact_city',
			'contact_state','contact_zip','contact_phone',
			'contact_fax',
		);

		$this->fields_defaults = array(
			'panel_layout' => array( 'default' ),
			'button_link' => array( 'http://','add_default_setting'),
		);

		$this->main_css_element = '%%order_class%%';

	}
	function get_fields() {
		$fields = array(
			'panel_layout' => array(
				'label'             => esc_html__( 'Panel Style','et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'none' => esc_html__( 'None','et_builder'),
					'default' => esc_html__( 'Default','et_builder'),
					'standout'  => esc_html__( 'Standout','et_builder'),
					'standout highlight'  => esc_html__( 'Standout Highlight','et_builder'),
					'overstated'  => esc_html__( 'Overstated','et_builder'),
					'understated'  => esc_html__( 'Understated','et_builder'),
					'contact'  => esc_html__( 'Contact Widget','et_builder'),
				),
				'description'       => esc_html__( 'Here you can choose the style of panel to display','et_builder' ),
				'affects' => array('#et_pb_heading_text_color', '#et_pb_show_button', '#et_pb_in_panel_button',
							'#et_pb_contact_addr_button', '#et_pb_contact_phone','#et_pb_contact_fax','#et_pb_contact_email'),
			),
			'in_panel_button' => array(
				'label'           => esc_html__( 'Display Within a Panel', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'description' => 'Choose whether to display contact info within a Panel',
				'depends_show_if' => 'contact',
			),
			'title' => array(
				'label'           => esc_html__( 'Heading','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a Heading Title.','et_builder' ),
			),
			'contact_addr_button' => array(
				'label'           => esc_html__( 'Enter Contact Address', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'depends_show_if' => 'contact',
				'affects' => array('#et_pb_contact_address', '#et_pb_contact_city',
						 '#et_pb_contact_state', '#et_pb_contact_zip'),
			),
			'contact_address' => array(
				'label'           => esc_html__( 'Address','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'depends_show_if' => 'on',
			),
			'contact_city' => array(
				'label'           => esc_html__( 'City','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'depends_show_if' => 'on',
			),
			'contact_state' => array(
				'label'           => esc_html__( 'State','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'depends_show_if' => 'on',
			),
			'contact_zip' => array(
				'label'           => esc_html__( 'Zip','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'depends_show_if' => 'on',
			),
			'contact_phone' => array(
				'label'           => esc_html__( 'Phone','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'depends_show_if' => 'contact',
			),
			'contact_fax' => array(
				'label'           => esc_html__( 'Fax','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'depends_show_if' => 'contact',
			),
			'contact_email' => array(
				'label'           => esc_html__( 'Email','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'depends_show_if' => 'contact',
			),
			'heading_text_color' => array(
				'label'             => esc_html__( 'Set Heading Text Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'description'       => esc_html__( 'Here you can define a custom heading color for the title.', 'et_builder' ),
				'depends_show_if' => 'none',
			),
			'use_icon' => array(
				'label'           => esc_html__( 'Use a Heading Icon', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'affects' => array('#et_pb_icon',),
				'description' => 'Choose whether to display an icon before the Heading',
			),
			'icon' => array(
				'label'           => esc_html__( 'Heading Icon','et_builder' ),
				'type'            => 'text',
				 'option_category'     => 'configuration',
				'class'               => array( 'et-pb-font-icon' ),
  			'renderer'            => 'et_pb_get_ca_font_icon_list',
			'renderer_with_field' => true,
				'depends_show_if' => 'on',
				'description'     => esc_html__( 'Here you can select a Heading Icon','et_builder' ),
			),
			'show_button' => array(
				'label'           => esc_html__( 'Show Read More Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'depends_show_if_not' => 'contact',
				'affects' => array('#et_pb_button_link',),
			),
			'button_link' => array(
				'label'           => esc_html__( 'Button Link','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the URL for the button.','et_builder' ),
				'depends_show_if' => "on",
				),
		'content_new' => array(
				'label'           => esc_html__( 'Content','et_builder'),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can create the content that will be used within the module.','et_builder' ),
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
			),
			'admin_label' => array(
			  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
			  'type'        => 'text',
			  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
			),
			'module_id' => array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
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

		$panel_layout    = $this->shortcode_atts['panel_layout'];

		$use_icon               = $this->shortcode_atts['use_icon'];

		$icon               = $this->shortcode_atts['icon'];

		$title    = $this->shortcode_atts['title'];

		$heading_text_color    = $this->shortcode_atts['heading_text_color'];

		$show_button    = $this->shortcode_atts['show_button'];

		$button_link    = $this->shortcode_atts['button_link'];

		$in_panel_button = $this->shortcode_atts['in_panel_button'];

		$contact_addr_button= $this->shortcode_atts['contact_addr_button'];

		$contact_address= $this->shortcode_atts['contact_address'];

		$contact_city= $this->shortcode_atts['contact_city'];

		$contact_state= $this->shortcode_atts['contact_state'];

		$contact_zip= $this->shortcode_atts['contact_zip'];

		$contact_phone= $this->shortcode_atts['contact_phone'];

		$contact_fax= $this->shortcode_atts['contact_fax'];

		$contact_email= $this->shortcode_atts['contact_email'];

			$class = "et_pb_ca_panel et_pb_module";

			$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

		$display_icon = ("on" == $use_icon ? get_ca_icon_span($icon) : '');

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
			$max_width_values = array(
				'desktop' => $max_width,
				'tablet'  => $max_width_tablet,
				'phone'   => $max_width_phone,
			);

			et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );

		}
    if("contact" == $panel_layout){
       if("on" == $in_panel_button){
         $output = sprintf('<div%11$s class="%12$s%13$s panel-understated">
       <div class="panel-heading">
           <h4>%1$s</h4>
       </div>
       <div class="panel-body"
           <div itemscope itemtype="http://schema.org/Organization"><meta itemprop="name" content="%2$s">
               <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                   <span itemprop="streetAddress">%3$s</span><br />
                   <span itemprop="addressLocality">%4$s</span>, <span itemprop="addressRegion">%5$s</span> <span itemprop="postalCode">%6$s</span><br>
                   Phone: <span itemprop="telephone">%7$s</span><br/>
                   Fax: <span itemprop="faxNumber">%8$s</span><br />
       Email: %9$s
               </div><br />%10$s</div>
       </div>
       </div>',
			 			$title, get_option('ca_agency_name'), $contact_address, $contact_city, $contact_state,
                           $contact_zip, $contact_phone, $contact_fax, $contact_email , $this->shortcode_content,
                           ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ), esc_attr( $class ),
                           ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' )
                          );

     }else{
    $output = sprintf(' <div%11$s class="%12$s%13$s" itemscope itemtype="http://schema.org/Organization">
    <h1>%1$s%2$s</h1>
     <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                <span itemprop="streetAddress">%3$s</span><br />
                <span itemprop="addressLocality">%4$s</span>, <span itemprop="addressRegion">%5$s</span> <span itemprop="postalCode">%6$s</span><br>
                Phone: <span itemprop="telephone">%7$s</span><br />
                Fax: <span itemprop="faxNumber">%8$s</span><br />
    Email: %9$s
            </div><br />%10$s</div>',						$display_icon, $title, $contact_address, $contact_city, $contact_state, $contact_zip,
                      $contact_phone,  $contact_phone, $contact_fax, $contact_email ,  $this->shortcode_content,
                      ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),	esc_attr( $class ),
                      ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' )						);

    }
  }else{
		$headingSize = ("none" == $panel_layout ? 'h1' : 'h2');

		$heading_text_color = ("none" == $panel_layout && "" != $heading_text_color ?
						sprintf(' style="color: %1$s;"', $heading_text_color) : '');

		$remove_overflow = ("none" == $panel_layout ? 'style="overflow: visible;"' : '');

		$display_options = ($show_button == "on" ? sprintf('<div class="options">
		<a href="%1$s" class="btn btn-default">Read More</a></div>',$button_link ) : '') ;

		$display_title = ("" != $title ? sprintf('<div class="panel-heading" ><%1$s%2$s>%3$s%4$s</%1$s>%5$s</div>',
				$headingSize, $heading_text_color, $display_icon, $title, $display_options) : '');

				$output = sprintf('<div%5$s class="%6$s%7$s panel panel-%1$s" %2$s>
								%3$s
									<div class="panel-body">%4$s</div></div> <!-- .et_pb_panel -->',
							$panel_layout, $remove_overflow, $display_title,  $this->shortcode_content,
                          ( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),	esc_attr( $class ),
                          ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' )
                         );

	}
		return $output;

	}
}
new ET_Builder_Module_Panel;

class ET_Builder_CA_Card extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'Card', 'et_builder' );

		$this->slug = 'et_pb_ca_card';

		$this->whitelisted_fields = array(
			'card_color', 'show_image', 'featured_image',
			 'title', 'content','show_button','button_text',
			  'button_link','include_header', 'card_layout',
				'include_footer','footer_text','text_color',
				'max_width', 'max_width_tablet', 'max_width_phone',
				'module_class', 'module_id', 'admin_label',
		);

		$this->fields_defaults = array(
			'button_link' => array( 'http://','add_default_setting'),
		);

		$this->main_css_element = '%%order_class%%';

	}
	function get_fields() {
		$fields = array(
			'card_layout' => array(
				'label'             => esc_html__( 'Card Style','et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'default' => esc_html__( 'Default','et_builder'),
					'standout'  => esc_html__( 'Standout','et_builder'),
					'overstated'  => esc_html__( 'Overstated','et_builder'),
					'understated'  => esc_html__( 'Understated','et_builder'),
					'custom' => esc_html__( 'Custom','et_builder'),
				),
					'affects' => array('#et_pb_card_color',),
				),
			'card_color' => array(
				'label'             => esc_html__( 'Set Card Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'description'       => esc_html__( 'Here you can define a custom card color.', 'et_builder' ),
				'depends_show_if' => 'on',
			),
			'text_color' => array(
				'label'             => esc_html__( 'Set Text Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'description'       => esc_html__( 'Here you can define a custom text color.', 'et_builder' ),
				'depends_show_if'			 => 'on',
			),
			'show_image' => array(
				'label'           => esc_html__( 'Include Image', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('#et_pb_featured_image',),
			),
			'featured_image' => array(
					'label' => esc_html__( 'Set Featured Image', 'et_builder' ),
					'type' => 'upload',
					'option_category' => 'basic_option',
					'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
					'choose_text' => esc_attr__( 'Choose a Background Image', 'et_builder' ),
					'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
					'description' => esc_html__( 'If defined, this image will be used as the background for this location. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
					'depends_show_if' => 'on',
					),
					'include_header' => array(
						'label'           => esc_html__( 'Include Header', 'et_builder' ),
						'type'            => 'yes_no_button',
						'option_category' => 'configuration',
						'options'         => array(
							'off' => esc_html__( 'No', 'et_builder' ),
							'on'  => esc_html__( 'Yes', 'et_builder' ),
						),
						'affects' => array('#et_pb_title',),
					),
			'title' => array(
				'label'           => esc_html__( 'Card Title','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a title for the card.','et_builder' ),
			),
			'content' => array(
					'label'           => esc_html__( 'Content','et_builder'),
					'type'            => 'tiny_mce',
					'option_category' => 'basic_option',
					'description'     => esc_html__( 'Here you can create the content that will be used within the card.','et_builder' ),
			),
			'show_button' => array(
					'label'           => esc_html__( 'Display a button', 'et_builder' ),
					'type'            => 'yes_no_button',
					'option_category' => 'configuration',
					'options'         => array(
						'off' => esc_html__( 'No', 'et_builder' ),
						'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
					'affects' => array('#et_pb_button_text','#et_pb_button_link',),
			),
			'button_text' => array(
					'label'           => esc_html__( 'Button Text','et_builder' ),
					'type'            => 'text',
					'option_category' => 'basic_option',
					'description'     => esc_html__( 'Enter text for the button.','et_builder' ),
					'depends_show_if' => 'on',
			),
			'button_link' => array(
					'label'           => esc_html__( 'Card URL','et_builder' ),
					'type'            => 'text',
					'option_category' => 'basic_option',
					'description'     => esc_html__( 'Here you can enter the URL for the location.','et_builder' ),
				),
			'include_footer' => array(
						'label'           => esc_html__( 'Display a footer', 'et_builder' ),
						'type'            => 'yes_no_button',
						'option_category' => 'configuration',
						'options'         => array(
							'off' => esc_html__( 'No', 'et_builder' ),
							'on'  => esc_html__( 'Yes', 'et_builder' ),
						),
						'affects' => array('#et_pb_footer_text',),
			),
			'footer_text' => array(
						'label'           => esc_html__( 'Footer Text','et_builder' ),
						'type'            => 'text',
						'option_category' => 'basic_option',
						'description'     => esc_html__( 'Enter text for the footer.','et_builder' ),
						'depends_show_if' => 'on',
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
					),
					'admin_label' => array(
					  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
					  'type'        => 'text',
					  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
					),
					'module_id' => array(
					  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
					  'type'            => 'text',
					  'option_category' => 'configuration',
					  'tab_slug'        => 'custom_css',
					  'option_class'    => 'et_pb_custom_css_regular',
					),
					'module_class' => array(
					  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
					  'type'            => 'text',
					  'option_category' => 'configuration',
					  'tab_slug'        => 'custom_css',
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

		$card_layout = $this->shortcode_atts['card_layout'];

		$card_color = $this->shortcode_atts['card_color'];

		$text_color = $this->shortcode_atts['text_color'];

		$show_image               = $this->shortcode_atts['show_image'];

		$featured_image               = $this->shortcode_atts['featured_image'];

		$title               = $this->shortcode_atts['title'];

		$content               = $this->shortcode_atts['content'];

		$show_button              = $this->shortcode_atts['show_button'];

		$button_text               = $this->shortcode_atts['button_text'];

		$button_link    = $this->shortcode_atts['button_link'];

		$include_header              = $this->shortcode_atts['include_header'];

		$include_footer               = $this->shortcode_atts['include_footer'];

		$footer_text    = $this->shortcode_atts['footer_text'];

		$class = " et_pb_ca_card et_pb_module ";

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
		  $max_width_values = array(
		    'desktop' => $max_width,
		    'tablet'  => $max_width_tablet,
		    'phone'   => $max_width_phone,
		  );

		  et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );

		}
		$card_layout = ("custom" == $card_layout ? 'default'  : $card_layout);

		$card_color = ("" != $card_color ? sprintf('background-color: %1$s; ', $card_color) : "" );

		$text_color = ("" != $text_color ? sprintf('color: %1$s; ', $text_color) : "" );

		$card_style = sprintf('style="%1$s%2$s" ');

		$display_image = ("on" == $show_image ?
					sprintf('<img class="card-img-top img-responsive" src="%1$s" alt="Card image cap">', $featured_image) : '') ;

		$display_header = ("on" == $include_header ?
					sprintf('<div class="card-header"><h4 class="card-title">%1$s</h4></div>',$title) :
					'' 	);

		$display_button = ("on" == $show_button ?
		sprintf('<a href="%1$s" class="btn btn-default">%2$s</a>', $button_link, $button_text) : '');

		$display_footer = ("on" == $include_footer ?
		sprintf('<div class="card-footer">%1$s</div>', $footer_text) : '' ) ;

		$output = sprintf('<div%1$s class="card card-%2$s%9$s" %3$s>
									%4$s%5$s<div class="card-block">
									%6$s%7$s</div>%8$s</div>',
				( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
					$card_layout . $class, $card_style, $display_image, $display_header,$this->shortcode_content,
				$display_button, $display_footer,( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' )
 		);

		return $output;

	}
}
new ET_Builder_CA_Card;

class ET_Builder_CA_Location extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'Location', 'et_builder' );

		$this->slug = 'et_pb_ca_location_widget';

		$this->whitelisted_fields = array(
			'location_layout', 'show_button','featured_image',
			 'addr','city',  'zip', 'show_icon',
			'state', 'location_link','icon', 'show_contact',
			'name','desc', 'phone', 'fax', 'max_width', 'max_width_tablet',
			 'max_width_phone', 'module_class', 'module_id', 'admin_label',
		);

		$this->fields_defaults = array(
			'icon' => array('%-1%','add_default_setting'),
			'button_link' => array( 'http://','add_default_setting'),
		);

		$this->main_css_element = '%%order_class%%';

	}
	function get_fields() {
		$fields = array(
			'location_layout' => array(
				'label'             => esc_html__( 'Location Style','et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'contact' => esc_html__( 'Contact','et_builder'),
					'mini' => esc_html__( 'Mini','et_builder'),
					'banner'  => esc_html__( 'Banner','et_builder'),
				),
				'description'       => esc_html__( 'Here you can choose the style in which to display the location','et_builder' ),
				'affects' => array('#et_pb_featured_image','#et_pb_show_button','#et_pb_desc', '#et_pb_show_icon'),
			),
			'featured_image' => array(
					'label' => esc_html__( 'Set Featured Image', 'et_builder' ),
					'type' => 'upload',
					'option_category' => 'basic_option',
					'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
					'choose_text' => esc_attr__( 'Choose a Background Image', 'et_builder' ),
					'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
					'description' => esc_html__( 'If defined, this image will be used as the background for this location. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
					'depends_show_if' => 'banner',
					),
			'name' => array(
				'label'           => esc_html__( 'Location Name','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a name for the location.','et_builder' ),
			),
			'desc' => array(
				'label'           => esc_html__( 'Location Description','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter a name for the location.','et_builder' ),
				'depends_show_if' => 'banner',
				),
			'location_link' => array(
				'label'           => esc_html__( 'Location URL','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the URL for the location.','et_builder' ),
				),
			'addr' => array(
				'label'           => esc_html__( 'Address','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter an address.','et_builder' ),
			),
			'city' => array(
				'label'           => esc_html__( 'City','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a city.','et_builder' ),
			),
			'state' => array(
				'label'           => esc_html__( 'State','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a state.','et_builder' ),
			),
			'zip' => array(
				'label'           => esc_html__( 'Zip','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter an zip.','et_builder' ),
			),
			'show_contact' => array(
				'label'           => esc_html__( 'Enter contact information', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('#et_pb_phone', '#et_pb_fax',),
			),
				'phone' => array(
				'label'           => esc_html__( 'Phone Number','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a phone number.','et_builder' ),
				'depends_show_if' => "on",
			),
			'fax' => array(
			'label'           => esc_html__( 'Fax Number','et_builder' ),
			'type'            => 'text',
			'option_category' => 'basic_option',
			'description'     => esc_html__( 'Enter a fax number.','et_builder' ),
			'depends_show_if' => "on",
		),
			'show_icon' => array(
				'label'           => esc_html__( 'Display an icon', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('#et_pb_icon',),
				'depends_show_if_not' => 'banner',
			),
				'icon' => array(
				'label'           => esc_html__( 'Icon','et_builder' ),
				'type'            => 'text',
				'option_category'     => 'configuration',
				'class'               => array( 'et-pb-font-icon' ),
				'renderer'            => 'et_pb_get_ca_font_icon_list',
			'renderer_with_field' => true,
				'description'     => esc_html__( 'Select an icon.','et_builder' ),
				'depends_show_if' => 'on',
			),
			'show_button' => array(
				'label'           => esc_html__( 'Display a button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'depends_show_if_not' => 'mini',
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
		),
		'admin_label' => array(
		  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
		  'type'        => 'text',
		  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
		),
		'module_id' => array(
		  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
		  'type'            => 'text',
		  'option_category' => 'configuration',
		  'tab_slug'        => 'custom_css',
		  'option_class'    => 'et_pb_custom_css_regular',
		),
		'module_class' => array(
		  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
		  'type'            => 'text',
		  'option_category' => 'configuration',
		  'tab_slug'        => 'custom_css',
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

		$location_layout = $this->shortcode_atts['location_layout'];

		$featured_image               = $this->shortcode_atts['featured_image'];

		$name               = $this->shortcode_atts['name'];

		$desc               = $this->shortcode_atts['desc'];

		$addr               = $this->shortcode_atts['addr'];

		$city              = $this->shortcode_atts['city'];

		$state               = $this->shortcode_atts['state'];

		$zip    = $this->shortcode_atts['zip'];

		$show_contact    = $this->shortcode_atts['show_contact'];

		$phone    = $this->shortcode_atts['phone'];

		$fax    = $this->shortcode_atts['fax'];

		$show_icon    = $this->shortcode_atts['show_icon'];

		$icon    = $this->shortcode_atts['icon'];

		$show_button    = $this->shortcode_atts['show_button'];

		$location_link    = $this->shortcode_atts['location_link'];

		$class = "et_pb_ca_location_widget et_pb_module location";

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
		  $max_width_values = array(
		    'desktop' => $max_width,
		    'tablet'  => $max_width_tablet,
		    'phone'   => $max_width_phone,
		  );

		  et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );

		}
		$display_icon = ("on" == $show_icon ? get_ca_icon_span($icon) : '');

		$address = sprintf('%1$s, %2$s, %3$s, %4$', $addr, $city, $state, $zip);

		if("contact" == 	$location_layout ){
				$display_other = ("on" == $show_contact ?
				sprintf('<p class="other">%1$s%2$s</p>',
				("" != $phone ? "General Information: {$phone}<br />" : ''),
				("" != $fax ?  "FAX: {$fax}" : '')	 ) : '');

				$display_button = ("on" == $show_button ? sprintf('<a href="%1$s" class="btn">View Contact</a>',$location_link) : '' );

				$output =sprintf('<div%1$s class="%2$s%3$s contact">
			    %4$s  <div class="contact">
				        <p class="address">%5$s</p>%6$s%7$s</div></div>',
								( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
								esc_attr( $class ), ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
								$display_icon, $address, $display_other, $display_button );

		}elseif("mini" == 	$location_layout ){
			$output = sprintf('<div%1$s class="%2$s%3$s mini">
				%4$s<div class="contact"><div class="title"><a href="%5$s">%6$s</a></div>
				<div class="address">%7$s</div></div></div>',
			( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
			esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
				("on" == $show_icon ? sprintf('<div>%1$s</div>', $display_icon ) : ''), $location_link, $name, $address);

		}else{
			$output = sprintf('<div%1$s class="%2$s%3$s banner">
			<div class="thumbnail">
					<img src="%4$s"></div>
					<div class="contact">
					<div class="title">%5$s</div>
							<div class="address">
							<span class="ca-gov-icon-road-pin"></span>
								<a href="%6$s">%7%s</a>
								</div></div><div class="summary">
								<div class="title">Description</div>
						<div class="description">%8$s</div>
								<a href="%6$s" class="btn">View More Details</a>
										</div></div>',
			( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
			esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
			$featured_image, $name , $location_link, $address , $desc);

		}
		return $output;

	}
}
new ET_Builder_CA_Location;

class ET_Builder_Module_CA_Section_Primary extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'Section - Primary', 'et_builder' );

		$this->slug = 'et_pb_ca_section_primary';

		$this->whitelisted_fields = array(
			'section_image','section_heading','section_content',
			'section_link',  'show_more_button' ,'featured_image_button',
			'left_right_button','slide_image_button','section_background_color',
			'heading_align', 'heading_text_color', 'max_width', 'max_width_tablet',
			'max_width_phone','module_class', 'module_id', 'admin_label',
		);

		$this->fields_defaults = array(
			'section_link' => array( 'http://','add_default_setting'),
			'show_more_button' => array('no'),
			'featured_image_button' => array('true'),
		);

		$this->main_css_element = '%%order_class%%';

	}
	function get_fields() {
		$fields = array(
		'section_background_color' => array(
				'label'             => esc_html__( 'Set Section Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
			),
			'section_heading' => array(
				'label' => esc_html__( 'Title', 'et_builder' ),
				'type' => 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the title for the gallery section.', 'et_builder' ),
					),
					'heading_text_color' => array(
						'label'             => esc_html__( 'Set Heading Text Color', 'et_builder' ),
						'type'              => 'color-alpha',
						'description'       => esc_html__( 'Here you can define a custom heading color for the title.', 'et_builder' ),
					),
					'heading_align' => array(
							'label'           => esc_html__( 'Align Heading', 'et_builder' ),
							'type'            => 'select',
							'option_category' => 'configuration',
							'options'         => array(
								'left' => esc_html__( 'Left', 'et_builder' ),
								'center'  => esc_html__( 'Center', 'et_builder' ),
								'right'  => esc_html__( 'Right', 'et_builder' ),
							),
							'depends_show_if' => 'off',
					),
		'featured_image_button' => array(
				'label'           => esc_html__( 'Show Feature Image', 'et_builder' ),
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
		),
		'left_right_button' => array(
				'label'           => esc_html__( 'Image Position Left/Right', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'Left', 'et_builder' ),
					'on'  => esc_html__( 'Right', 'et_builder' ),
				),
		),
		'section_image' => array(
				'label' => esc_html__( 'Section Image', 'et_builder' ),
				'type' => 'upload',
				'option_category' => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text' => esc_attr__( 'Choose a Gallery Image', 'et_builder' ),
				'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
				'description' => esc_html__( 'If defined, this image will be used as the background for this module. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
				),
		'slide_image_button' => array(
				'label'           => esc_html__( 'Fade Image from Left', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
			),
		'section_background_color' => array(
				'label'             => esc_html__( 'Set Section Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
			),
		'show_more_button' => array(
				'label'           => esc_html__( 'Show More Information Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects'     => array(
					'#et_pb_section_link',
				),
			),
		'section_link' => array(
			'label' => esc_html__( 'Link URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'URL destination for the button.', 'et_builder' ),
			'depends_show_if' => 'on',
			),
		'section_content' => array(
				'label'           => esc_html__( 'Section Information','et_builder'),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
			'description'     => esc_html__( 'Here you can create the content that will be used within the module.','et_builder' ),
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
		),
		'admin_label' => array(
		  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
		  'type'        => 'text',
		  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
		),
		'module_id' => array(
		  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
		  'type'            => 'text',
		  'option_category' => 'configuration',
		  'tab_slug'        => 'custom_css',
		  'option_class'    => 'et_pb_custom_css_regular',
		),
		'module_class' => array(
		  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
		  'type'            => 'text',
		  'option_category' => 'configuration',
		  'tab_slug'        => 'custom_css',
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

		$featured_image_button = $this->shortcode_atts['featured_image_button'];

		$heading_align = $this->shortcode_atts['heading_align'];

		$image_pos = $this->shortcode_atts['left_right_button'];

		$section_image = $this->shortcode_atts['section_image'];

		$section_heading = $this->shortcode_atts['section_heading'];

		$section_content = $this->shortcode_atts['section_content '];

		$show_more_button = $this->shortcode_atts['show_more_button'];

		$slide_image_button = $this->shortcode_atts['slide_image_button'];

		$section_link = $this->shortcode_atts['section_link'];

		$section_background_color = $this->shortcode_atts['section_background_color'];

		$heading_text_color = $this->shortcode_atts['heading_text_color'];

		$class = "et_pb_ca_section_primary et_pb_module";

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );



		$section_bg_color = ("" !=  $section_background_color ?
		sprintf(' style="background: %1$s;"', $section_background_color ) : '');

		$heading_text_color = ("" != $heading_text_color ? sprintf(' color: %1$s; ', $heading_text_color) : '');

		$heading_float = sprintf(' text-align: %1$s; ', $heading_align) ;

		$display_button = ($show_more_button == "on" && $section_link != "" ?
		sprintf('<div><a href="%1$s" class="btn btn-default">More Information</a></div>', $section_link) : '');

		if("on" == $featured_image_button){
      $img_class = ("on"== $slide_image_button  ? ' animate-fadeInLeft ' : '');
      $img_class .= ("on" == $image_pos ? 'pull-right' : '') ;
      $img_style = ("on" == $image_pos ? 'style="padding-left:15px;"' : '');

			$display_image = sprintf('<div class="col-md-4 col-md-offset-0 %1$s" %3$s>
					<img src="%2$s" class="img-responsive"></div>' , $img_class, $section_image, $img_style);

				$heading_style =("" != $heading_text_color ? sprintf(' style="%1$s" ',  $heading_text_color) : '');

				$section = sprintf('<div class="col-md-15"><h2%1$s>%2$s</h2>%3$s%4$s</div>',
					$heading_style, $section_heading, 	$this->shortcode_content, $display_button);

					$body= sprintf('%1$s%2$s', $display_image, $section );



		}else{
				$heading_style = sprintf(' style="%1$s%2$s" ', $heading_float, $heading_text_color);

				$body = sprintf('<div class="col-md-10 col-md-offset-1"><h2%1$s class="text-center">%2$s</h2>
				<div  class="text-center">%3$s</div><div  class="text-center">%4$s</div></div>',
					$heading_style, $section_heading, 	$this->shortcode_content, $display_button);

		}
		$output = sprintf('<div%1$s class="%2$s%3$s section" %4$s>%5$s</div>',
		( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
		esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
		$section_bg_color, $body);

		return $output;

	}
}
new ET_Builder_Module_CA_Section_Primary;

class ET_Builder_Module_Section_Footer extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'Section - Footer', 'et_builder' );

		$this->slug = 'et_pb_ca_section_footer';

		$this->child_slug      = 'et_pb_ca_section_footer_group';

		$this->child_item_text = esc_html__( 'Group', 'et_builder' );

		$this->whitelisted_fields = array(
			'section_background_color',
		'max_width', 'max_width_tablet', 'max_width_phone',
		'module_class', 'module_id', 'admin_label',
);

		$this->main_css_element = '%%order_class%%';

	}
	function get_fields() {
		$fields = array(
		'section_background_color' => array(
				'label'             => esc_html__( 'Set Section Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
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
			),
			'admin_label' => array(
			  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
			  'type'        => 'text',
			  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
			),
			'module_id' => array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
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

		$section_background_color = $this->shortcode_atts['section_background_color'];

		$class = "et_pb_ca_section_footer section";

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
		  $max_width_values = array(
		    'desktop' => $max_width,
		    'tablet'  => $max_width_tablet,
		    'phone'   => $max_width_phone,
		  );

		  et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );

		}
		$section_bg_color ("" != $section_background_color ?
					sprintf(' style="background: %1$s" ', $section_background_color): '');

		$output = sprintf(
			'<div%1$s class="%2$s%3$s" %4$s>
				<div class="container">
				<div class="row group">
					%5$s
				</div>
				</div>
			</div> <!-- .et_pb_ca_section_footer -->',
			( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
			esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
			$section_bg_color,	$this->shortcode_content
		);

		return $output;

	}
}
new ET_Builder_Module_Section_Footer;

class ET_Builder_Module_Footer_Group extends ET_Builder_Module {
function init() {
	$this->name = esc_html__( 'Footer Group', 'et_builder' );

	$this->slug = 'et_pb_ca_section_footer_group';

	$this->type = 'child';

	$this->child_title_var = 'admin_title';

	$this->child_title_fallback_var = 'heading';

	$this->whitelisted_fields = array('heading_color', 'text_color',
		'group_icon', 'group_icon_button', 'group_title',
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
		'group_icon' => array('%-1%','add_default_setting'),
		'group_url' => array( 'http://','add_default_setting'),
		'group_link_url1' => array( 'http://','add_default_setting'),
				'group_link_url2' => array( 'http://','add_default_setting'),
				'group_link_url3' => array( 'http://','add_default_setting'),
				'group_link_url4' => array( 'http://','add_default_setting'),
				'group_link_url5' => array( 'http://','add_default_setting'),
				'group_link_url6' => array( 'http://','add_default_setting'),
				'group_link_url7' => array( 'http://','add_default_setting'),
				'group_link_url8' => array( 'http://','add_default_setting'),
				'group_link_url9' => array( 'http://','add_default_setting'),
				'group_link_url10' => array( 'http://','add_default_setting'),
		);

	$this->advanced_setting_title_text = esc_html__( 'New Footer Group', 'et_builder' );

	$this->settings_text = esc_html__( 'Footer Group Settings', 'et_builder' );

	$this->main_css_element = '%%order_class%%';

}
function get_fields() {
	$fields = array(
			'heading_color' => array(
				'label'             => esc_html__( 'Set Heading Text Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'description'       => esc_html__( 'Here you can define a custom heading color for the title.', 'et_builder' ),
			),
			'text_color' => array(
				'label'             => esc_html__( 'Set Text Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'description'       => esc_html__( 'Here you can define a custom text color for the list items.', 'et_builder' ),
			),
		'group_title' => array(
			'label' => esc_html__( 'Group Title', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the title for the group section.', 'et_builder' ),
				),
		'group_icon_button' => array(
				'label'           => esc_html__( 'Add List Icon', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects'     => array(
					'#et_pb_group_icon',
				),
		),
		'group_icon' => array(
			'label' => esc_html__( 'Group Icon', 'et_builder' ),
			'type' => 'text',
  		'option_category'     => 'configuration',
			'class'    => array( 'et-pb-font-icon' ),
				'renderer'            => 'et_pb_get_ca_font_icon_list',
			'renderer_with_field' => true,
			'description' => esc_html__( 'Define the icon for the group section.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_show_more_button' => array(
				'label'           => esc_html__( 'Show Read More Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('#et_pb_group_url',),
			),
		'group_url' => array(
			'label' => esc_html__( 'Read More URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the url for the Read More Button.', 'et_builder' ),
			'depends_show_if' => 'on',
		),
		'display_link_as_button' => array(
				'label'           => esc_html__( 'Display Links as Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
				),
				'group_link1_show' => array(
				'label'           => esc_html__( 'Show Link 1', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
		'affects' => array(
					'#et_pb_group_link_text1','#et_pb_group_link_url1',
						),
			),
		'group_link_text1' => array(
			'label' => esc_html__( 'Link 1 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			),
		'group_link_url1' => array(
			'label' => esc_html__( 'Link 1 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link2_show' => array(
				'label'           => esc_html__( 'Show Link 2', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
		'affects' => array(
					'#et_pb_group_link_text2','#et_pb_group_link_url2',
						),
			),
			'group_link_text2' => array(
			'label' => esc_html__( 'Link 2 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link_url2' => array(
			'label' => esc_html__( 'Link 2 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link3_show' => array(
				'label'           => esc_html__( 'Show Link 3', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
		'affects' => array(
					'#et_pb_group_link_text3','#et_pb_group_link_url3',
						),
			),
		'group_link_text3' => array(
			'label' => esc_html__( 'Link 3 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link_url3' => array(
			'label' => esc_html__( 'Link 3 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link4_show' => array(
				'label'           => esc_html__( 'Show Link 4', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
		'affects' => array(
					'#et_pb_group_link_text4','#et_pb_group_link_url4',
						),
			),
		'group_link_text4' => array(
			'label' => esc_html__( 'Link 4 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link_url4' => array(
			'label' => esc_html__( 'Link 4 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link5_show' => array(
				'label'           => esc_html__( 'Show Link 5', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
		'affects' => array(
					'#et_pb_group_link_text5','#et_pb_group_link_url5',
						),
			),
		'group_link_text5' => array(
			'label' => esc_html__( 'Link 5 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link_url5' => array(
			'label' => esc_html__( 'Link 5 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link6_show' => array(
				'label'           => esc_html__( 'Show Link 6', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
		'affects' => array(
					'#et_pb_group_link_text6','#et_pb_group_link_url6',
						),
			),
		'group_link_text6' => array(
			'label' => esc_html__( 'Link 6 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
		),
		'group_link_url6' => array(
			'label' => esc_html__( 'Link 6 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link7_show' => array(
				'label'           => esc_html__( 'Show Link 7', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
		'affects' => array(
					'#et_pb_group_link_text7','#et_pb_group_link_url7',
						),
			),
		'group_link_text7' => array(
			'label' => esc_html__( 'Link 7 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link_url7' => array(
			'label' => esc_html__( 'Link 7 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link8_show' => array(
				'label'           => esc_html__( 'Show Link 8', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
		'affects' => array(
					'#et_pb_group_link_text8','#et_pb_group_link_url8',
						),
			),
		'group_link_text8' => array(
			'label' => esc_html__( 'Link 8 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link_url8' => array(
			'label' => esc_html__( 'Link 8 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link9_show' => array(
				'label'           => esc_html__( 'Show Link 9', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
		'affects' => array(
					'#et_pb_group_link_text9','#et_pb_group_link_url9',
						),
			),
		'group_link_text9' => array(
			'label' => esc_html__( 'Link 9 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link_url9' => array(
			'label' => esc_html__( 'Link 9 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link10_show' => array(
				'label'           => esc_html__( 'Show Link 10', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					),
		'affects' => array(
					'#et_pb_group_link_text10','#et_pb_group_link_url10',
						),
			),
		'group_link_text10' => array(
			'label' => esc_html__( 'Link 10 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
		'group_link_url10' => array(
			'label' => esc_html__( 'Link 10 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination.', 'et_builder' ),
			'depends_show_if' => 'on',
				),
				'admin_label' => array(
				  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
				  'type'        => 'text',
				  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
				),
				'module_id' => array(
				  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
				  'type'            => 'text',
				  'option_category' => 'configuration',
				  'tab_slug'        => 'custom_css',
				  'option_class'    => 'et_pb_custom_css_regular',
				),
				'module_class' => array(
				  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
				  'type'            => 'text',
				  'option_category' => 'configuration',
				  'tab_slug'        => 'custom_css',
				  'option_class'    => 'et_pb_custom_css_regular',
				),
		);

		return $fields;

}
function shortcode_callback( $atts, $content = null, $function_name ) {
	$module_id            = $this->shortcode_atts['module_id'];

	$module_class         = $this->shortcode_atts['module_class'];

	$heading_color = $this->shortcode_atts['heading_color'];

	$text_color= $this->shortcode_atts['text_color'];

	$group_icon = $this->shortcode_atts['group_icon'];

		$group_title = $this->shortcode_atts['group_title'];

		$group_url = $this->shortcode_atts['group_url'];

		$group_icon_button = $this->shortcode_atts['group_icon_button'];

		$group_show_more_button = $this->shortcode_atts['group_show_more_button'];

$display_link_as_button= $this->shortcode_atts['display_link_as_button'];

		$group_link1_show = $this->shortcode_atts['group_link1_show'];

		$group_link_text1 = $this->shortcode_atts['group_link_text1'];

		$group_link_url1 = $this->shortcode_atts['group_link_url1'];

		$group_link2_show = $this->shortcode_atts['group_link2_show'];

		$group_link_text2 = $this->shortcode_atts['group_link_text2'];

		$group_link_url2 = $this->shortcode_atts['group_link_url2'];

		$group_link3_show = $this->shortcode_atts['group_link3_show'];

		$group_link_text3 = $this->shortcode_atts['group_link_text3'];

		$group_link_url3 = $this->shortcode_atts['group_link_url3'];

		$group_link4_show = $this->shortcode_atts['group_link4_show'];

		$group_link_text4 = $this->shortcode_atts['group_link_text4'];

		$group_link_url4 = $this->shortcode_atts['group_link_url4'];

		$group_link5_show = $this->shortcode_atts['group_link5_show'];

		$group_link_text5 = $this->shortcode_atts['group_link_text5'];

		$group_link_url5 = $this->shortcode_atts['group_link_url5'];

		$group_link6_show = $this->shortcode_atts['group_link6_show'];

		$group_link_text6 = $this->shortcode_atts['group_link_text6'];

		$group_link_url6 = $this->shortcode_atts['group_link_url6'];

		$group_link7_show = $this->shortcode_atts['group_link7_show'];

		$group_link_text7 = $this->shortcode_atts['group_link_text7'];

		$group_link_url7 = $this->shortcode_atts['group_link_url7'];

		$group_link8_show = $this->shortcode_atts['group_link8_show'];

		$group_link_text8 = $this->shortcode_atts['group_link_text8'];

		$group_link_url8 = $this->shortcode_atts['group_link_url8'];

		$group_link9_show = $this->shortcode_atts['group_link9_show'];

		$group_link_text9 = $this->shortcode_atts['group_link_text9'];

		$group_link_url9 = $this->shortcode_atts['group_link_url9'];

		$group_link10_show = $this->shortcode_atts['group_link10_show'];

		$group_link_text10 = $this->shortcode_atts['group_link_text10'];

		$group_link_url10 = $this->shortcode_atts['group_link_url10'];

	global $et_pb_footer_group_item_num;

	$et_pb_impact_footer_item_num++;

	$class = "quarter";

	$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

	$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

	$heading_color = ("" != $heading_color ?
	sprintf(' style="color: %1$s" ', $heading_color) : '');

	$text_color = ("" != $text_color ?
	sprintf(' style="color: %1$s" ', $text_color) : '');

	$icon = get_ca_icon_span($group_icon, sprintf('color: %1$s;' , $text_color));

	$link_as_button = ("on" == $display_link_as_button ? ' class="btn btn-default btn-xs" ' : '');

	$no_pad = ("on" != $group_icon_button ? 'padding-left: 0 !important;' : '');

	$display_more_button = ("on" == $group_show_more_button ?
	sprintf('<a href="%1$s" class="btn btn-primary">Read More</a>',$group_url) : '');

	$group_links .= ("on" == $group_link1_show ?
	sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>' ,
	$group_link_url1, $link_as_button, $text_color, $icon, $group_link_text1 ) : '');

	$group_links .= ("on" == $group_link2_show ?
	sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>' ,
	$group_link_url2, $link_as_button, $text_color, $icon, $group_link_text2 ) : '');

	$group_links .= ("on" == $group_link3_show ?
	sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>' ,
	$group_link_url3, $link_as_button, $text_color, $icon, $group_link_text3 ) : '');

	$group_links .= ("on" == $group_link4_show ?
	sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>' ,
	$group_link_url4, $link_as_button, $text_color, $icon, $group_link_text4 ) : '');

	$group_links .= ("on" == $group_link5_show ?
	sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>' ,
	$group_link_url5, $link_as_button, $text_color, $icon, $group_link_text5 ) : '');

	$group_links .= ("on" == $group_link6_show ?
	sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>' ,
	$group_link_url6, $link_as_button, $text_color, $icon, $group_link_text6 ) : '');

	$group_links .= ("on" == $group_link7_show ?
	sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>' ,
	$group_link_url7, $link_as_button, $text_color, $icon, $group_link_text7 ) : '');

	$group_links .= ("on" == $group_link8_show ?
	sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>' ,
	$group_link_url8, $link_as_button, $text_color, $icon, $group_link_text8 ) : '');

	$group_links .= ("on" == $group_link9_show ?
	sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>' ,
	$group_link_url9, $link_as_button, $text_color, $icon, $group_link_text9 ) : '');

	$group_links .= ("on" == $group_link10_show ?
	sprintf('<li><a href="%1$s"%2$s%3$s>%4$s%5$s</a></li>' ,
	$group_link_url10, $link_as_button, $text_color, $icon, $group_link_text10 ) : '');

	$output = sprintf('<div%1$s class="%2$s%3$s">
			<h4 %4$s>%5$s</h4>
			<ul class="list-unstyled" style="list-style-type: none; %6$s">
			%7$s</ul></div>' ,
			( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
			esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
			 $heading_color, $group_title, $no_pad, $group_links);

	return $body;

}
}
new ET_Builder_Module_Footer_Group;

class ET_Builder_Module_CA_Section_Carousel extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'Section - Carousel', 'et_builder' );

		$this->slug = 'et_pb_ca_section_carousel';

		$this->child_slug      = 'et_pb_ca_section_carousel_slide';

		$this->child_item_text = esc_html__( 'Slide', 'et_builder' );

	$this->whitelisted_fields = array('section_background_color','max_width',
						'max_width_tablet', 'max_width_phone','module_class', 'module_id',
						'admin_label',);

		$this->fields_defaults = array();

		$this->main_css_element = '%%order_class%%';

	}
	function get_fields() {
		$fields = array(
		'section_background_color' => array(
				'label'             => esc_html__( 'Set Section Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
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
			),
			'admin_label' => array(
			  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
			  'type'        => 'text',
			  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
			),
			'module_id' => array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
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

		$section_background_color = $this->shortcode_atts['section_background_color'];

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

		$class = "et_pb_ca_section_carousel et_pb_module";

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
		  $max_width_values = array(
		    'desktop' => $max_width,
		    'tablet'  => $max_width_tablet,
		    'phone'   => $max_width_phone,
		  );

		  et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );

		}
		$section_background_color = ("" != $section_background_color ?
		sprintf(' style="background: %1$s;" ', $section_background_color) : '');

		$output = sprintf('<div%1$s class="%2$s%3$s section"%4$s>
				<div class="container">
				<div class="group">
				<div class="col-md-10 col-md-offset-1 ">
				<div class="carousel owl-carousel carousel-content">
				%5$s </div>
				</div>
				</div>
				</div>
			</div> <!-- et_pb_ca_section_carousel -->',
		( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
		esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
		$section_background_color, $this->shortcode_content
);

		return $output;

	}
}
new ET_Builder_Module_CA_Section_Carousel;

class ET_Builder_Module_CA_Section_Carousel_Slide extends ET_Builder_Module {
	function init() {
	$this->name = esc_html__( 'Carousel Slide', 'et_builder' );

	$this->slug = 'et_pb_ca_section_carousel_slide';

	$this->type = 'child';

	$this->child_title_var = 'admin_title';

	$this->child_title_fallback_var = 'heading';

	$this->whitelisted_fields = array(
		'slide_image', 'slide_title',
		 'slide_desc',	'slide_url',
		'slide_show_more_button','module_class', 'module_id', 'admin_label',
		);

	$this->fields_defaults = array(
		'slide_url' => array( 'http://','add_default_setting'),
		);

	$this->advanced_setting_title_text = esc_html__( 'New Carousel Slide', 'et_builder' );

	$this->settings_text = esc_html__( 'Carousel Slide Settings', 'et_builder' );

	$this->main_css_element = '%%order_class%%';

}
	function get_fields(){
	$fields = array(
			'slide_image' => array(
				'label' => esc_html__( 'Image', 'et_builder' ),
				'type' => 'upload',
				'option_category' => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text' => esc_attr__( 'Choose a Background Image', 'et_builder' ),
				'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
				'description' => esc_html__( 'If defined, this image will be used as the background for this slide. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
				),
		'slide_title' => array(
				'label' => esc_html__( 'Title', 'et_builder' ),
				'type'=> 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the title for the slide', 'et_builder' ),
				),
		'slide_show_more_button' => array(
				'label'           => esc_html__( 'Show More Information Button', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array(
							'#et_pb_slide_url',
				),
			),
		'slide_url' => array(
				'label' => esc_html__( 'Slide URL', 'et_builder' ),
				'type'=> 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the url for the slide', 'et_builder' ),
				'depends_show_if' => 'on',
				),
		'slide_desc' => array(
				'label' => esc_html__( 'Description', 'et_builder' ),
				'type'=> 'tiny_mce',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the title for the slide', 'et_builder' ),
				),
				'admin_label' => array(
				  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
				  'type'        => 'text',
				  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
				),
				'module_id' => array(
				  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
				  'type'            => 'text',
				  'option_category' => 'configuration',
				  'tab_slug'        => 'custom_css',
				  'option_class'    => 'et_pb_custom_css_regular',
				),
				'module_class' => array(
				  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
				  'type'            => 'text',
				  'option_category' => 'configuration',
				  'tab_slug'        => 'custom_css',
				  'option_class'    => 'et_pb_custom_css_regular',
				),
			);

	return $fields;

}
	function shortcode_callback( $atts, $content = null, $function_name ) {
		$module_id            = $this->shortcode_atts['module_id'];

		$module_class         = $this->shortcode_atts['module_class'];

		$slide_image = $this->shortcode_atts['slide_image'];

	$slide_title = $this->shortcode_atts['slide_title'];

	$slide_desc = $this->shortcode_atts['slide_desc'];

	$slide_url = $this->shortcode_atts['slide_url'];

	$slide_show_more_button = $this->shortcode_atts['slide_show_more_button'];

	$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

	global $et_pb_slider_item_num;

	$et_pb_slider_item_num++;

	$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

	$class = "et_pb_ca_panel et_pb_module";

	$slide_image = sprintf('style="background-image: url(%1$s);"', $slide_image);

	$display_button = ("on" == $slide_show_more_button ?
	sprintf('<button class="btn btn-primary">
				<a href="%1$s">More Information</a></button>', $slide_url) : '');

	$output = sprintf('<div%1$s class="$2$s%3$s item backdrop" %4$s>
	<div class="content-container">
				<div class="content">
	<h2>%5$s</h2>%6$s%7$s</div></div></div>',
	( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
	esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
	$slide_image,$slide_title, $slide_desc, $display_button );

   return $output;

}
}
new ET_Builder_Module_CA_Section_Carousel_Slide;

class ET_Builder_Module_CA_Post_List extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'Post List', 'et_builder' );

		$this->slug = 'et_pb_ca_post_list';

		$this->whitelisted_fields = array('style', 'title',
			'all_categories_button','include_categories',
			'all_tags_button','include_tags',
			'posts_number',
			'orderby', 'admin_label',
		);

		$this->fields_defaults = array(
			'orderby'  => array( 'date_desc' ),
		);

		$this->main_css_element = '%%order_class%%';

	}
	function get_fields() {
		$fields = array(
			'title' => array(
				'label'       => esc_html__( 'Post List Title', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'Enter a title for the Post List.', 'et_builder' ),
			),
			'style' => array(
				'label'             => esc_html__( 'Style', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'course-list' => esc_html__( 'Course List', 'et_builder'),
					'events-list'  => esc_html__( 'Event List', 'et_builder' ),
					'exams-list'  => esc_html__( 'Exam List', 'et_builder' ),
					'jobs-list'  => esc_html__( 'Jobs List', 'et_builder' ),
'news-list'  => esc_html__( 'News List', 'et_builder' ),
			'profile-list'  => esc_html__( 'Profile List', 'et_builder' ),
									'pubs-list'  => esc_html__( 'Publication List', 'et_builder' ),
				),
				'description'       => esc_html__( 'Here you can select the various list styles.', 'et_builder' ),
			),
			'posts_number' => array(
				'label'             => esc_html__( 'Posts Number', 'et_builder' ),
				'type'              => 'text',
				'option_category'   => 'configuration',
				'description'       => esc_html__( 'Choose how many posts you would like to display in the list. Default is all.', 'et_builder' ),
			),
			'all_categories_button' => array(
				'label'           => esc_html__( 'Include All Categories', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'affects' => array(
							'#et_pb_include_categories',
				),
			),
			'include_categories' => array(
				'label'            => esc_html__( 'Select Categories', 'et_builder' ),
				'renderer'         => 'et_builder_include_categories_option',
				'option_category'  => 'basic_option',
				'renderer_options' => array(
					'use_terms' => false,
				),
				'description'      => esc_html__( 'Choose which categories you would like to include in the list.', 'et_builder' ),
				'depends_show_if' => 'off',
			),
			'all_tags_button' => array(
				'label'           => esc_html__( 'Include All Tags', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
					),
				'affects' => array('#et_pb_include_tags',
				),
			),
			'include_tags' => array(
				'label'            => esc_html__( 'Select Tags', 'et_builder' ),
				'renderer'         => 'et_builder_include_tags_option',
				'option_category'  => 'basic_option',
				'renderer_options' => array(
					'use_terms' => false,
				),
				'description'      => esc_html__( 'Choose which tags you would like to include in the list.', 'et_builder' ),
				'depends_show_if' => 'off',
			),
			'orderby' => array(
				'label'             => esc_html__( 'Order By', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'date_desc'  => esc_html__( 'Date: new to old', 'et_builder' ),
					'date_asc'   => esc_html__( 'Date: old to new', 'et_builder' ),
					'title_asc'  => esc_html__( 'Title: a-z', 'et_builder' ),
					'title_desc' => esc_html__( 'Title: z-a', 'et_builder' ),
					'rand'       => esc_html__( 'Random', 'et_builder' ),
				),
				'description'       => esc_html__( 'Here you can adjust the order in which posts are displayed.', 'et_builder' ),
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
	$title            = $this->shortcode_atts['title'];

		$style            = $this->shortcode_atts['style'];

		$posts_number            = $this->shortcode_atts['posts_number'];

		$all_categories_button            = $this->shortcode_atts['all_categories_button'];

		$include_categories      = $this->shortcode_atts['include_categories'];

		$all_tags_button            = $this->shortcode_atts['all_tags_button'];

		$include_tags      = $this->shortcode_atts['include_tags'];

		$orderby                 = $this->shortcode_atts['orderby'];

		$order;

		//$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		if ( 'date_desc' !== $orderby ) {
			switch( $orderby ) {
				case 'date_asc' :
					$orderby = 'date';

					$order = 'ASC';

					break;

				case 'title_asc' :
					$orderby = 'title';

					$order = 'ASC';

					break;

				case 'title_desc' :
					$orderby = 'title';

					$order = 'DESC';

					break;

				case 'rand' :
					$orderby = 'rand';

					break;

			}
		}
			if("on" == $all_categories_button ){
					$cat_array = get_terms( 'category', array('orderby' => $orderby, 'hide_empty' => 0, 'fields' => 'ids'));

			}elseif ( "" !== $include_categories) {
				$cat_array = split(',', $include_categories) ;

			}
			if("on" == $all_tags_button ){
					$tag_array = get_tags( array('orderby' => $orderby, 'hide_empty' => 0, 'fields' => 'ids'));

			}elseif ( "" !== $include_tags) {
				$tag_array =split(',',  $include_tags) ;

			}
			$posts_number = ( !empty($posts_number) ? $posts_number : -1);

		$all_posts = return_posts($cat_array ,$tag_array, $posts_number );

		$output = sprintf('<div class="et_pb_ca_post_list"><h1>%1$s</h1>', $title);

$counter = 1;

foreach ($all_posts as $a=>$p) {
		switch($style){
			case "events-list":
		$output .= sprintf('<article class="event-item">
					<h5><a href="%1$s"  class="title">%2$s</a></h5>
					<div class="description">%3$s</div>
					<div class="start-date"><time datetime="%4$s %5$s">%6$s</time></div>
					</article>',
					get_permalink($all_posts[$a]->ID), $all_posts[$a]->post_title, $excerpt. $sdate, $stime, date_format($date, "D, m/d/Y H:i a")  );

			break;

			case "news-list":
			$excerpt= get_post_custom( $all_posts[$a]->ID)['ca_news_excerpt'][0];

			$image= get_post_custom( $all_posts[$a]->ID)['ca_news_image'][0];

		$output .=	sprintf('<article class="news-item" itemscope itemtype="http://schema.org/NewsArticle">
			        <div class="thumbnail"  style="width: 150px !important; height: 100px !important;"><img itemprop="thumbnailUrl" src="%1$s" alt=""></div>
			        <div class="info">
			            <div class="headline"  itemprop="headline"><a href="%2$s" itemprop="url">%3$s</a></div>
 				<div class="description" itemprop="articleBody" style="margin-left: 133px !important;"><p>%4$s</p></div>
			            <div class="published" style="margin-left: 133px !important;">Published: <time itemprop="datePublished" datetime="%5$s">%6$s</time></div>
			        </div>
			    </article>',
			$image, get_permalink($all_posts[$a]->ID), $all_posts[$a]->post_title, $excerpt,
			format_date($all_posts[$a]->post_date, "c"),format_date($all_posts[$a]->post_date, "M d, Y")   );

			break;

		case "course-list":
			$location= get_post_custom( $all_posts[$a]->ID)['ca_course_location'][0];

			$time= get_post_custom( $all_posts[$a]->ID)['ca_course_time'][0];

			$desc= get_post_custom( $all_posts[$a]->ID)['ca_course_desc'][0];

			$image= get_post_custom( $all_posts[$a]->ID)['ca_course_image'][0];

			$output .= '<article class="course-item"  itemscope itemtype="http://schema.org/Event">
     <div class="thumbnail" >
         <img src="'. $image . '" alt=""  itemprop="image" style="width: 70px; height: 70px;">
     </div>
     <div class="header">
         <div class="title"  itemprop="name"><a href="' . get_permalink($all_posts[$a]->ID) . '">' . $all_posts[$a]->post_title . '</a></div>
         <div class="datetime" itemprop="startDate" >' . $time .'</div>
     </div>
     <div class="body">
         <div class="description">'. $desc. '</div>
         <div class="location" itemprop="location" itemscope itemtype="http://schema.org/PostalAddress">' . $location .'</div>
     </div>
     <div class="footer">
         <a href="' . get_permalink($all_posts[$a]->ID) . '" class="btn btn-default" itemprop="url">View More Details</a>
     </div>
 </article>';

		break;

		case "exams-list":
	$output .= '<article class="exam-item">
	<div class="header">
		<div class="title"><a href="' . get_permalink($all_posts[$a]->ID) . '">' . $all_posts[$a]->post_title . '</a></div>
			<div class="filing-date">Final Filing Date <time datetime="'. $sdate . ' ' . $stime . '">' .	date_format($date, "m/d/Y") .'</time></div>
	</div>
		 <div class="body">
	 <div class="id">ID: <span>' . $exam_id . '</span></div>
		 <div class="base">Base:<span>' . $exam_base . '</span></div>
		 </div>
		 <div class="footer">
	 <div class="published">Published: <time datetime="'. $sdate . ' ' . $stime . '">' .
date_format($date, "M d, Y") .'</time></div>
				 <a href="' . get_permalink($all_posts[$a]->ID) . '" class="btn btn-default">View More Details</a>
		 </div>
	</article>';

		break;

	case "jobs-list":
		$location= get_post_custom( $all_posts[$a]->ID)['ca_job_location'];

		$filing_date= get_post_custom( $all_posts[$a]->ID)['ca_job_filing_date'];

		$position_type= get_post_custom( $all_posts[$a]->ID)['ca_job_position_type'];

	$output .= '<article class="job-item" itemscope itemtype="http://schema.org/JobPosting">
	<div class="header">
			<div class="title"  itemprop="title"><a href="' . get_permalink($all_posts[$a]->ID) . '" itemprop="url">' . $all_posts[$a]->post_title . '</a></div>
			<div class="filing-date">Final Filing Date <time datetime="">' . $filing_date	 .'</time></div>
	</div>
		 <div class="body">
	 	<div> ' . $position_type. '</div>
			<div> ' . $location . '</div>
		 </div>
		 <div class="footer">
				 <a href="' . get_permalink($all_posts[$a]->ID) . '" class="btn btn-default" itemprop="url">View More Details</a>
		 </div>
	</article>';

		break;

			case "pubs-list":
			$offset = 'odd';

			if($counter % 2 == 0){
				$offset = 'even';

			}
		$output .=	'<article class="pub-item '. $offset . '">
			        <div class="thumbnail"><img src="'. $image . '" alt="" style="width: 70px; height: 93px;"></div>
			        <div class="pub-body">
			            <div class="pub-title">' . $all_posts[$a]->post_title .
			'<span class="pub-language">(<a href="'. $doc . '">PDF</a>) | <span class="pub-revision-date">(Revision Date <time datetime="'. $sdate . ' ' . $stime . '">' .
				date_format($date, "M d, Y") .'</time>)</span></span>
				</div>
				</div>
				 <div class="footer" style="padding-right: 15px;">
				 <a href="' . get_permalink($all_posts[$a]->ID) . '" class="btn btn-default" style="float: right;">View More Details</a>
		 </div>
				</article>';

			$counter++;

			break;

			case "profile-list":
		$output .=	'<article class="profile-item">
			        <div class="thumbnail"><img src="'. $image . '" alt=""></div>
							<div class="header">
							<div class="title"><a href="' . get_permalink($all_posts[$a]->ID) . '">' . $all_posts[$a]->post_title . ', ' . $profile_title  . '</a></div>
								</div>
			        <div class="body">
							<div class="job">' . $profile_job  . '</div>
		 			 <div class="appointed">Appointed on <time datetime="2010-12-10">'. $profile_appointed . '</time></div>';

						if("" != $profile_reappointed){
			 			 $output .= '<div class="reappointed">Reappointed on <time datetime="2011-03-01">'. $profile_reappointed . '</time></div>';

			 			}
						$output .= '<div class="term-end">Term ends <time datetime="2015-02-28">'. $profile_term_end . '</time></div>
			        </div>
							<div class="footer">
					 			 <a href="' . get_permalink($all_posts[$a]->ID) . '" class="btn btn-default">View More Details</a>
					 	 </div></article>';

			break;

		}
}
		$output .= '</div> <!-- .et_pb_ca_post_list -->';

	return $output;

}
}
new ET_Builder_Module_CA_Post_List;

class ET_Builder_Module_Profile_Banner extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'Profile Banner', 'et_builder' );

		$this->slug = 'et_pb_profile_banner';

		$this->whitelisted_fields = array(
			'name',
			'job_title', 'admin_label',
			'url',
			'portrait_url',
		);

		$this->fields_defaults = array(
			'url'       => array( 'http://','add_default_setting' ),
		);

		$this->main_css_element = '%%order_class%%.et_pb_profile_banner';

	}
	function get_fields() {
		$fields = array(
			'name' => array(
				'label'           => esc_html__( 'Profile Name', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the name of the profile.', 'et_builder' ),
			),
			'job_title' => array(
				'label'           => esc_html__( 'Job Title', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the job title.', 'et_builder' ),
			),
			'url' => array(
				'label'           => esc_html__( 'Profile URL', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the website of the profile or leave blank for no link.', 'et_builder' ),
			),
			'portrait_url' => array(
				'label'              => esc_html__( 'Portrait Image URL', 'et_builder' ),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text'        => esc_attr__( 'Choose an Image', 'et_builder' ),
				'update_text'        => esc_attr__( 'Set As Image', 'et_builder' ),
				'description'        => esc_html__( 'Upload your desired image, or type in the URL to the image you would like to display.', 'et_builder' ),
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
		$name                 = $this->shortcode_atts['name'];

		$job_title              = $this->shortcode_atts['job_title'];

		$portrait_url           = $this->shortcode_atts['portrait_url'];

		$url                    = $this->shortcode_atts['url'];

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		$banner_style = 'style="background:url('.get_stylesheet_directory_uri().'/images/banner/banner-blank.png' . ') no-repeat;background-size: 100% 100%; overflow: hidden; height: 90px;"';

		$output = sprintf('<div class="profile-banner" %1$s>
					<img src="%2$s" style="width: 90px; min-height: 90px;float: right;"/>
					<div class="banner-subtitle">%3$s</div>
					<div class="banner-title">%4$s</div>
					<div class="banner-link"><a href="%5$s">Profile</a></div>
					</div>',
					$banner_style, $portrait_url, $job_title, $name, $url);

		return $output;

	}
}
new ET_Builder_Module_Profile_Banner;

?>
