<?php
class ET_Builder_Module_Fullwidth_Panel extends ET_Builder_Module {
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
			'icon',
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
		add_action( 'wp_footer', array( $this, 'js_frontend_preview' ) );
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
				'affects' => array('icon',),
				'description' => 'Choose whether to display an icon before the Heading',
				'toggle_slug'       => 'header',
				'tab_slug'       => 'advanced',
			),
			'icon' => array(
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
		$icon               = $this->shortcode_atts['icon'];
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
								alert(args);
				return output;

			}
			</script>
			<?php
		}
	
}
new ET_Builder_Module_Fullwidth_Panel;

class ET_Builder_Module_Fullwidth_Header_Banner extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'FullWidth Header Slideshow Banner', 'et_builder' );
		$this->slug = 'et_pb_ca_fullwidth_banner';
		$this->fullwidth       = true;

		$this->child_slug      = 'et_pb_ca_fullwidth_banner_item';
		$this->child_item_text = esc_html__( 'Slide', 'et_builder' );

		$this->whitelisted_fields = array(
			'scroll_bar_icon',
			'scroll_bar_text',
 		 	'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
 		 	'module_class',
			'admin_label',
			'module_id',
		);
		$this->fields_defaults = array(
			'scroll_bar_icon' => array( '%%114%%', 'add_default_setting' ),
    	'scroll_bar_text' => array( 'Explore', 'add_default_setting' ),

    );
		$this->main_css_element = '%%order_class%%.et_pb_slider';

		$this->options_toggles = array(
			'general' => array(
				'toggles' => array(
					'scroll_bar'  => esc_html__( 'Scroll Bar' , 'et_builder'),
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
          'scroll_bar'  => esc_html__( 'Scroll Bar' , 'et_builder'),
				),
			),
			'custom_css' => array(
				'toggles' => array(
         
				),
			),
		);

		// Custom handler: Output JS for editor preview in page footer.
		add_action( 'wp_footer', array( $this, 'slideshow_banner_removal' ) );

	}
	function get_fields() {
		$fields = array(
			'scroll_bar_text' => array(
				'label'           => esc_html__( 'Scroll Bar Text','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can enter the text for the scroll bar.','et_builder' ),
				'toggle_slug'     => 'scroll_bar',
				),
			'scroll_bar_icon' => array(
				'label'           => esc_html__( 'Scroll Bar Icon','et_builder' ),
				'type'            => 'text',
				 'option_category'     => 'configuration',
				'class'               => array( 'et-pb-font-icon' ),
				'renderer'            => 'et_pb_get_font_icon_list',
				'renderer_with_field' => true,
				'description'     => esc_html__( 'Here you can select a Heading Icon','et_builder' ),
				'toggle_slug'     => 'scroll_bar',
				'tab_slug'     => 'advanced',
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
		$module_class         = $this->shortcode_atts['module_class'];

		$max_width            = $this->shortcode_atts['max_width'];

		$max_width_tablet     = $this->shortcode_atts['max_width_tablet'];

		$max_width_phone      = $this->shortcode_atts['max_width_phone'];

		$max_width_last_edited = $this->shortcode_atts['max_width_last_edited'];

		$scroll_bar_text = $this->shortcode_atts['scroll_bar_text'];

		$scroll_bar_icon = $this->shortcode_atts['scroll_bar_icon'];

		$class = "et_pb_ca_fullwidth_banner et_pb_module";

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

    $class .= ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' );

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

		$output = sprintf(
			'<div id="et_pb_ca_fullwidth_banner" class="%1$s header-slideshow-banner ">
				<div id="primary-carousel" class="carousel carousel-banner">
					%2$s
				</div>
				<div class="explore-invite">
					<div class="text-center">
						<a href="">
						<span class="explore-title">%3$s</span>%4$s</a>
					</div>
				</div>
			</div> <!-- .et_pb_ca_banner -->',
      esc_attr( $class ),$this->shortcode_content, $scroll_bar_text,  get_icon_span($scroll_bar_icon)
		);
		return $output;
	}

		// This is a non-standard function. It outputs JS code to render the
		// module preview in the new Divi 3 frontend editor.
		// Return value of the JS function must be full HTML code to display.
		function slideshow_banner_removal() {
			if( ! ca_version_check(4, get_the_ID() )  )
				return;

			$module = caweb_get_shortcode_from_content( get_the_content(), 'et_pb_ca_fullwidth_banner');


			if( empty($module)  ){
				?>
					<script>
						document.body.classList.remove('primary');
					</script>
				<?php
			}else{
			?>
           <script>
				var banner = document.getElementById('et_pb_ca_fullwidth_banner');
				var column = banner.parentNode;

					if(1 == column.childElementCount){
						var row = column.parentNode;
						row.removeChild(column);
						if(0 == row.childElementCount){
							if(1 == row.parentNode.childElementCount ){
								row.parentNode.remove();
							}else{
								row.parentNode.removeChild(row);
							}
						}
					}else{
						detail.removeChild(banner);
					}

			</script>
            <?php
		}
	}
}
new ET_Builder_Module_Fullwidth_Header_Banner;

class ET_Builder_Module_Fullwidth_Banner_Item_Slide extends ET_Builder_Module {
function init() {
	$this->name = esc_html__( 'FullWidth Banner Slide', 'et_builder' );
	$this->slug = 'et_pb_ca_fullwidth_banner_item';
	$this->type = 'child';
	$this->child_title_var = 'heading';
	$this->fullwidth = true;
	$this->child_title_fallback_var = 'heading';
	$this->whitelisted_fields = array(
		 		'display_banner_info', 'display_heading',
				'heading','module_class', 'module_id',
				'button_text','button_link','background_image',
		);
	$this->fields_defaults = array(
	'button_link' => array( '#', 'add_default_setting' ),
	'display_heading' => array( 'on', 'add_default_setting' ),
	);
	$this->advanced_setting_title_text = esc_html__( 'New Slide', 'et_builder' );
	$this->settings_text = esc_html__( 'Slide Settings', 'et_builder' );
	$this->main_css_element = '%%order_class%%';

	$this->options_toggles = array(
		'general' => array(
			'toggles' => array(
				'content'  => esc_html__( 'Content', 'et_builder'),
				'image'    => esc_html__( 'Image'  , 'et_builder'),
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
		'display_banner_info' => array(
			'label'           => esc_html__( 'Banner Information', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'on'  => esc_html__( 'Yes', 'et_builder' ),
				'off' => esc_html__( 'No', 'et_builder' ),
			),
			'affects' => array('#et_pb_heading',
												'#et_pb_heading',
												'#et_pb_display_heading',
												'#et_pb_button_text',
												'#et_pb_button_link',
			),
			'toggle_slug' => 'content',
		),
		'heading' => array(
			'label' => esc_html__( 'Heading', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description'     => esc_html__( 'Define the title text for your slide.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'content',
		),
		'display_heading' => array(
			'label'           => esc_html__( 'Heading', 'et_builder' ),
			'type'            => 'yes_no_button',
			'options'         => array(
				'on'  => esc_html__( 'Yes', 'et_builder' ),
				'off' => esc_html__( 'No', 'et_builder' ),
			),
			'option_category' => 'configuration',
			'description'       => esc_html__( 'This will toggle the heading on/off in the banner slide', 'et_builder' ),
			'toggle_slug'       => 'content',
			),
		'button_text' => array(
			'label' => esc_html__( 'Button Text', 'et_builder' ),
			'type'=> 'textarea',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the slide button', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug'     => 'content',
		),
		'button_link' => array(
			'label' => esc_html__( 'Button URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Input a destination URL for the slide button. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug'    => 'content',
		),
		'background_image' => array(
			'label' => esc_html__( 'Background Image', 'et_builder' ),
			'type' => 'upload',
			'option_category' => 'basic_option',
			'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
			'choose_text' => esc_attr__( 'Choose a Background Image', 'et_builder' ),
			'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
			'description' => esc_html__( 'If defined, this image will be used as the background for this module. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
			'toggle_slug' => 'image'
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

	$display_banner_info = $this->shortcode_atts['display_banner_info'];

	$heading = $this->shortcode_atts['heading'];

	$display_heading = $this->shortcode_atts['display_heading'];

	$button_text = $this->shortcode_atts['button_text'];

	$button_link = $this->shortcode_atts['button_link'];

	$background_image = $this->shortcode_atts['background_image'];

	global $et_pb_slider_item_num;

	$et_pb_slider_item_num++;

	$class = "et_pb_ca_fullwidth_banner_item et_pb_module";

	$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

	$link = ("on" == $display_banner_info ? sprintf('<a href="%1$s" target="window">
<p class="slide-text"><span class="title" %4$s>%2$s<br /></span>%3$s</p></a>',
 $button_link, $heading, $button_text, ("off" == $display_heading ? 'style="display:none;"': '') )	: '' );

	$output = sprintf('<div%3$s class="%4$s%5$s slide" style="background-image: url(%1$s);">%2$s</div> ',
			$background_image, $link,
			( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ), esc_attr( $class ),
			( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' )
	);
	return $output;
}
}
new ET_Builder_Module_Fullwidth_Banner_Item_Slide;


class ET_Builder_Module_Fullwidth_CA_Section_Primary extends ET_Builder_Module {
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
			'section_link' => array( 'http://','add_default_setting'),
			'show_more_button' => array('no'),
			'featured_image_button' => array('true'),
		);
		$this->main_css_element = '%%order_class%%';

		$this->options_toggles = array(
			'general' => array(
				'toggles' => array(
					'header' => esc_html__( 'Header', 'et_builder'),
					'body'   => esc_html__( 'Body'  , 'et_builder'),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'header' => esc_html__( 'Header', 'et_builder'),
					'style'  => esc_html__( 'Style' , 'et_builder'),
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
				'label'           => esc_html__( 'Section Information','et_builder'),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Here you can create the content that will be used within the module.','et_builder' ),
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
	function shortcode_callback( $atts, $content = null, $function_name ) {
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

		$heading_float = sprintf(' text-align: %1$s; ', $heading_align) ;

		$display_button = ($show_more_button == "on" && $section_link != "" ?
		sprintf('<div><a href="%1$s" class="btn btn-default">More Information</a></div>', $section_link) : '');

		if("on" == $featured_image_button){
      $img_class = ("on"== $slide_image_button  ? ' animate-fadeInLeft ' : '');
      $img_class .= ("on" == $image_pos ? 'pull-right' : '') ;

			$display_image = sprintf('<div class="col-md-4 col-md-offset-0 %1$s" style="%2$s">
					<img src="%3$s" class="img-responsive" style="width: 100%%; "></div>' , 
            $img_class, ("on" == $image_pos ? 'padding-right: 0;' : 'padding-left: 0;'),$section_image );

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
new ET_Builder_Module_Fullwidth_CA_Section_Primary;

class ET_Builder_Module_FullWidth_Section_Footer extends ET_Builder_Module {
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
          'style'  => esc_html__( 'Style' , 'et_builder'),
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
	function shortcode_callback( $atts, $content = null, $function_name ) {
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
			esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
			$section_bg_color,	$this->shortcode_content
		);
		return $output;
	}
}
new ET_Builder_Module_FullWidth_Section_Footer;

class ET_Builder_Module_FullWidth_Footer_Group extends ET_Builder_Module {
function init() {
	$this->name = esc_html__( 'FullWidth Footer Group', 'et_builder' );
	$this->slug = 'et_pb_ca_section_fullwidth_footer_group';
	$this->type = 'child';
	$this->fullwidth = true;
	$this->child_title_var = 'heading';
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
				'body'   => esc_html__( 'Body'  , 'et_builder'),
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
				'#et_pb_group_icon',
			),
			'toggle_slug'			=> 'body',
			'tab_slug'				=> 'advanced',
		),
		'group_icon' => array(
			'label' => esc_html__( 'Group Icon', 'et_builder' ),
			'type' => 'text',
			'option_category'     => 'configuration',
			'class'    => array( 'et-pb-font-icon' ),
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
		),
		'group_link1_show' => array(
			'label'           => esc_html__( 'Link 1', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_group_link_text1',
				'#et_pb_group_link_url1',
			),
			'toggle_slug' => 'body',
		),
		'group_link_text1' => array(
			'label' => esc_html__( 'Link 1 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link_url1' => array(
			'label' => esc_html__( 'Link 1 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link2_show' => array(
			'label'           => esc_html__( 'Link 2', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_group_link_text2','#et_pb_group_link_url2',
			),
			'toggle_slug' => 'body',
		),
		'group_link_text2' => array(
			'label' => esc_html__( 'Link 2 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link_url2' => array(
			'label' => esc_html__( 'Link 2 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link3_show' => array(
			'label'           => esc_html__( 'Link 3', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_group_link_text3','#et_pb_group_link_url3',
			),
			'toggle_slug' => 'body',
		),
		'group_link_text3' => array(
			'label' => esc_html__( 'Link 3 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link_url3' => array(
			'label' => esc_html__( 'Link 3 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link4_show' => array(
			'label'           => esc_html__( 'Link 4', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_group_link_text4','#et_pb_group_link_url4',
			),
			'toggle_slug' => 'body',
		),
		'group_link_text4' => array(
			'label' => esc_html__( 'Link 4 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link_url4' => array(
			'label' => esc_html__( 'Link 4 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link5_show' => array(
			'label'           => esc_html__( 'Link 5', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_group_link_text5','#et_pb_group_link_url5',
			),
			'toggle_slug' => 'body',
		),
		'group_link_text5' => array(
			'label' => esc_html__( 'Link 5 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link_url5' => array(
			'label' => esc_html__( 'Link 5 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link6_show' => array(
			'label'           => esc_html__( 'Link 6', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_group_link_text6','#et_pb_group_link_url6',
			),
			'toggle_slug' => 'body',
		),
		'group_link_text6' => array(
			'label' => esc_html__( 'Link 6 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link_url6' => array(
			'label' => esc_html__( 'Link 6 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link7_show' => array(
			'label'           => esc_html__( 'Link 7', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_group_link_text7','#et_pb_group_link_url7',
			),
			'toggle_slug' => 'body',
		),
		'group_link_text7' => array(
			'label' => esc_html__( 'Link 7 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link_url7' => array(
			'label' => esc_html__( 'Link 7 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link8_show' => array(
			'label'           => esc_html__( 'Link 8', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_group_link_text8','#et_pb_group_link_url8',
			),
			'toggle_slug' => 'body',
		),
		'group_link_text8' => array(
			'label' => esc_html__( 'Link 8 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link_url8' => array(
			'label' => esc_html__( 'Link 8 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link9_show' => array(
			'label'           => esc_html__( 'Link 9', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_group_link_text9','#et_pb_group_link_url9',
			),
			'toggle_slug' => 'body',
		),
		'group_link_text9' => array(
			'label' => esc_html__( 'Link 9 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link_url9' => array(
			'label' => esc_html__( 'Link 9 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link10_show' => array(
			'label'           => esc_html__( 'Link 10', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_group_link_text10','#et_pb_group_link_url10',
			),
			'toggle_slug' => 'body',
		),
		'group_link_text10' => array(
			'label' => esc_html__( 'Link 10 Text', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the text for the link.', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
		),
		'group_link_url10' => array(
			'label' => esc_html__( 'Link 10 URL', 'et_builder' ),
			'type' => 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the URL for the destination. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
			'toggle_slug' => 'body',
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
			'toggle_slug' 		=> 'classes',
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

	$class = "quarter";

	$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

	$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

	$heading_color = ("" != $heading_color ?
	sprintf(' style="color: %1$s" ', $heading_color) : '');

	$text_color = ("" != $text_color ?
	sprintf(' style="color: %1$s" ', $text_color) : '');

	$icon = ("on" == $group_icon_button ? get_icon_span($group_icon, sprintf('color: %1$s;' , $text_color)) : '');

	$link_as_button = ("on" == $display_link_as_button ? ' class="btn btn-default btn-xs" ' : '');

	$no_pad = ("on" != $group_icon_button ? 'padding-left: 0 !important;' : '');

	$display_more_button = ("on" == $group_show_more_button ?
	sprintf('<a href="%1$s" class="btn btn-primary">Read More</a>',$group_url) : '');

	$group_links = '';

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

	return $output;
}
}
new ET_Builder_Module_FullWidth_Footer_Group;

class ET_Builder_Module_Fullwidth_CA_Section_Carousel extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'FullWidth Section - Carousel', 'et_builder' );
		$this->fullwidth = true;
		$this->slug = 'et_pb_ca_fullwidth_section_carousel';
		$this->child_slug      = 'et_pb_ca_fullwidth_section_carousel_slide';
		$this->child_item_text = esc_html__( 'Slide', 'et_builder' );
		$this->whitelisted_fields = array(
			'carousel_style',
			'section_background_color',
			'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
			'module_class',
			'module_id',
			'admin_label',
		);
		$this->fields_defaults = array();
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
          'style'  => esc_html__( 'Style' , 'et_builder'),
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
			'carousel_style' => array(
				'label'           => esc_html__( 'Style', 'et_builder' ),
				'type'            => 'select',
				'option_category' => 'configuration',
				'options'         => array(
					'content_fit' 		=> esc_html__( 'Content Fit', 'et_builder' ),
					'image_fit' 			=> esc_html__( 'Image Fit', 'et_builder' ),
				),
				'toggle_slug' => 'style',
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

		$et_pb_ca_fullwidth_section_carousel_style = $this->shortcode_atts['carousel_style'];

	}

	function shortcode_callback( $atts, $content = null, $function_name ) {
		$carousel_style       = $this->shortcode_atts['carousel_style'];
		$module_id            = $this->shortcode_atts['module_id'];
		$module_class         = $this->shortcode_atts['module_class'];
		$max_width            = $this->shortcode_atts['max_width'];
		$max_width_tablet     = $this->shortcode_atts['max_width_tablet'];
		$max_width_phone      = $this->shortcode_atts['max_width_phone'];
		$max_width_last_edited = $this->shortcode_atts['max_width_last_edited'];
		$section_background_color = $this->shortcode_atts['section_background_color'];

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );
		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );
		$class = " et_pb_ca_fullwidth_section_carousel et_pb_module " . $carousel_style;

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
			$max_width_responsive_active = et_pb_get_responsive_status( $max_width_last_edited );

			$max_width_values = array(
				'desktop' => $max_width,
				'tablet'  => $max_width_responsive_active ? $max_width_tablet : '',
				'phone'   => $max_width_responsive_active ? $max_width_phone : '',
			);

			et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );
		}

		$section_background_color = ("" != $section_background_color ?
		sprintf(' style="background: %1$s;" ', $section_background_color) : '');

		$output = sprintf('<div%1$s class="%2$s%3$s section"%4$s>
				<div class="">
				<div class="group">
				<div class="col-md-12 ">
				<div class="carousel owl-carousel carousel-content">
				%5$s </div>
				</div>
				</div>
				</div>
			</div> <!-- et_pb_ca_fullwidth_section_carousel -->',
		( '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '' ),
		esc_attr( $class ),( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ),
		$section_background_color, $this->shortcode_content
);
		return $output;
	}
}
new ET_Builder_Module_Fullwidth_CA_Section_Carousel;

class ET_Builder_Module_Fullwidth_CA_Section_Carousel_Slide extends ET_Builder_Module {
function init() {
	$this->name = esc_html__( 'FullWidth Carousel Slide', 'et_builder' );
	$this->slug = 'et_pb_ca_fullwidth_section_carousel_slide';
$this->fullwidth = true;
	$this->type = 'child';
	$this->child_title_var = 'slide_title';
	$this->child_title_fallback_var = 'slide_title';
	$this->whitelisted_fields = array(
		'slide_image', 'slide_title',
		 'slide_desc',	'slide_url',
		'slide_show_more_button','module_class', 'module_id',
		);
	$this->fields_defaults = array(
		'slide_url' => array( 'http://','add_default_setting'),
		);
	$this->advanced_setting_title_text = esc_html__( 'New Carousel Slide', 'et_builder' );
	$this->settings_text = esc_html__( 'Carousel Slide Settings', 'et_builder' );
	$this->main_css_element = '%%order_class%%';

	$this->options_toggles = array(
		'general' => array(
			'toggles' => array(
				'style'  => esc_html__( 'Style' , 'et_builder'),
				'header' => esc_html__( 'Header', 'et_builder'),
				'body'   => esc_html__( 'Body'  , 'et_builder'),
			),
		),
		'custom_css' => array(
			'toggles' => array(
			),
		),
	);
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
			'label'           => esc_html__( 'More Information Button', 'et_builder' ),
			'type'            => 'yes_no_button',
			'option_category' => 'configuration',
			'options'         => array(
				'off' => esc_html__( 'No', 'et_builder' ),
				'on'  => esc_html__( 'Yes', 'et_builder' ),
			),
			'affects' => array(
				'#et_pb_slide_url',
			),
			'toggle_slug'	=> 'body',
		),
		'slide_url' => array(
			'label' => esc_html__( 'Slide URL', 'et_builder' ),
			'type'=> 'text',
			'option_category' => 'basic_option',
			'description' => esc_html__( 'Define the url for the slide. (http:// must be included)', 'et_builder' ),
			'depends_show_if' => 'on',
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
function shortcode_callback( $atts, $content = null, $function_name ) {
	$module_id            = $this->shortcode_atts['module_id'];

	$module_class         = $this->shortcode_atts['module_class'];

	$slide_image = $this->shortcode_atts['slide_image'];

	$slide_title = $this->shortcode_atts['slide_title'];

	$slide_desc = $this->shortcode_atts['slide_desc'];

	$slide_url = $this->shortcode_atts['slide_url'];

	$slide_show_more_button = $this->shortcode_atts['slide_show_more_button'];

	//$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );

	global $et_pb_slider_item_num;
	global $et_pb_ca_fullwidth_section_carousel_style;

	$et_pb_slider_item_num++;

	$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

	$class = $et_pb_ca_fullwidth_section_carousel_style . " et_pb_module";

	//$slide_image = sprintf('style="background-image: url(%1$s);"', $slide_image);

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

   return $output;
}
}
new ET_Builder_Module_Fullwidth_CA_Section_Carousel_Slide;


class ET_Builder_Module_Fullwidth_CA_Service_Tiles extends ET_Builder_Module{
	function init() {
		$this->name = esc_html__( 'FullWidth Service Tiles', 'et_builder' );
		$this->fullwidth = true;
		$this->slug = 'et_pb_ca_fullwidth_service_tiles';
		$this->child_slug      = 'et_pb_ca_fullwidth_service_tiles_item';
		$this->child_item_text = esc_html__( 'Tile', 'et_builder' );
		$this->whitelisted_fields = array(
			'view_more_on_off',
			'view_more_text',
			'view_more_url',
			'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
			'module_class',
			'module_id',
			'admin_label',
		);
		$this->fields_defaults = array();
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
	function pre_shortcode_content() {
		/**/global $titles;
		global $tile_images;
		global $tile_sizes;
		global $tile_links;
		global $tile_urls;

		$titles = array();
		$tile_images = array();
		$tile_sizes= array();
		$tile_links= array();
		$tile_urls= array();

		global $items_count;

		$items_count = 0;

	}
	function get_fields() {
		$fields = array(
			'view_more_on_off' => array(
				'label'           => esc_html__( 'View More', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array(
					'#et_pb_view_more_url',
					'#et_pb_view_more_text',
				),
				'toggle_slug'			=> 'body',
			),
			'view_more_url' => array(
				'label'             => esc_html__( 'Link Url', 'et_builder'),
				'type'              => 'text',
				'depends_show_if'   => 'on',
				'toggle_slug'				=> 'body',
			),
			'view_more_text' => array(
				'label'             => esc_html__( 'Link Text', 'et_builder'),
				'type'              => 'text',
				'depends_show_if'   => 'on',
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
				'tab_slug'				=> 'custom_css',
				'toggle_slug'			=> 'visibility',
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
	function shortcode_callback( $atts, $content = null, $function_name ) {
		$module_id            = $this->shortcode_atts['module_id'];
		$module_class         = $this->shortcode_atts['module_class'];
		$view_more_on_off     = $this->shortcode_atts['view_more_on_off'];
		$view_more_text       = $this->shortcode_atts['view_more_text'];
		$view_more_url        = $this->shortcode_atts['view_more_url'];
		$max_width            = $this->shortcode_atts['max_width'];
		$max_width_tablet     = $this->shortcode_atts['max_width_tablet'];
		$max_width_phone      = $this->shortcode_atts['max_width_phone'];
		$max_width_last_edited = $this->shortcode_atts['max_width_last_edited'];

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );
		$class = 'et_pb_module et_pb_ca_fullwidth_service_tiles ';

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
			$max_width_responsive_active = et_pb_get_responsive_status( $max_width_last_edited );

			$max_width_values = array(
				'desktop' => $max_width,
				'tablet'  => $max_width_responsive_active ? $max_width_tablet : '',
				'phone'   => $max_width_responsive_active ? $max_width_phone : '',
			);

			et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );
		}

		global $titles;
		global $tile_images;
		global $tile_sizes;
		global $tile_links;
		global $tile_urls;

		global $items_count;

		$view_more = ("on" == $view_more_on_off ? sprintf(
		'
		<div class="more-button" >
			<div class="more-content"></div>
			<a href="%1$s" class="btn-more inverse">
				<span class="ca-gov-icon-plus-fill" aria-hidden="true">
				</span>
				<span class="more-title">%2$s</span>
			</a>
		</div>
		', $view_more_url, $view_more_text):'');
	$output = '';

		for($i = 0; $i < $items_count ; $i++){
			if("on" == $tile_links[$i]){
				$output .= sprintf('<div tabindex="%1$s" class="service-tile service-tile-empty %2$s" data-url="%3$s">
					%4$s<div class="teaser"><h4 class="title">%5$s</h4></div></div>',
													$i + 1, $tile_sizes[$i], $tile_urls[$i] ,
													(!empty($tile_images[$i]) ? sprintf('<img src="%1$s" style="background-size: cover; width: 100%%; height: 320px;"/>', $tile_images[$i]) : ''),
													$titles[$i]  );
			}else{

		$output .= sprintf('<div tabindex="%1$s" class="service-tile %2$s" data-tile-id="panel-%1$s"
style="background-image:url(%3$s); background-size: cover;"><div class="teaser"><h4 class="title">%4$s</h4></div></div>',
												$i + 1, $tile_sizes[$i], $tile_images[$i], $titles[$i]  );
			}
		}

		$output .= $this->shortcode_content;
		$output = sprintf('<div class="%3$s%4$s section-understated collapsed">
<div class="service-group clearfix" id="service-group-123">%1$s</div>%2$s</div>',$output, $view_more,
											esc_attr($class), ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' )  );

		return $output;
		//print_r( $tile_links );
	}
}
new ET_Builder_Module_Fullwidth_CA_Service_Tiles;

class ET_Builder_Module_Fullwidth_CA_Service_Tiles_Item extends ET_Builder_Module{
	function init() {
		$this->name = esc_html__( 'FullWidth Service Tile Item', 'et_builder' );
		$this->slug = 'et_pb_ca_fullwidth_service_tiles_item';
		$this->fullwidth = true;
		$this->type = 'child';
		$this->child_title_var = 'item_title';
		$this->child_title_fallback_var = 'item_title';
		$this->whitelisted_fields = array(
			'module_class', 'module_id', 'item_title',
			'content_new', 'item_image', 'tile_size', 'tile_link', 'tile_url'
			);
		$this->fields_defaults = array(
			'tile_link' => array( 'off','add_default_setting'),
			);
		$this->advanced_setting_title_text = esc_html__( 'New Service Tile', 'et_builder' );
		$this->settings_text = esc_html__( 'Service Tile Settings', 'et_builder' );
		$this->main_css_element = '%%order_class%%';

		$this->options_toggles = array(
			'general' => array(
				'toggles' => array(
					'header' => esc_html__( 'Header', 'et_builder'),
					'style'  => esc_html__( 'Style' , 'et_builder'),
					'body'   => esc_html__( 'Body'  , 'et_builder'),
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
			'item_title' => array(
				'label' => esc_html__( 'Title', 'et_builder' ),
				'type'=> 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the title for the tile', 'et_builder' ),
				'toggle_slug'	=> 'header',
			),
			'item_image' => array(
				'label' => esc_html__( 'Image', 'et_builder' ),
				'type' => 'upload',
				'option_category' => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text' => esc_attr__( 'Choose a Background Image', 'et_builder' ),
				'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
				'description' => esc_html__( 'If defined, this image will be used as the background for this tile. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
				'toggle_slug'	=> 'body',
			),
			'tile_size' => array(
				'label'             => esc_html__( 'Size','et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'quarter' => esc_html__( 'Quarter','et_builder'),
					'half' => esc_html__( 'Half','et_builder'),
					'full'  => esc_html__( 'Full','et_builder'),
				),
				'description'       => esc_html__( 'Here you can choose the size of the tile','et_builder' ),
				'toggle_slug'	=> 'style',
			),
			'tile_link' => array(
				'label'           => esc_html__( 'Link to URL', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('#et_pb_content_new', '#et_pb_tile_url'),
				'toggle_slug'	=> 'body',
			),
			'tile_url' => array(
				'label' => esc_html__( 'URL', 'et_builder' ),
				'type'=> 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the url for the tile. (http:// must be included)', 'et_builder' ),
				'depends_show_if' => 'on',
				'toggle_slug'	=> 'body',
			),
			'content_new' => array(
				'label' => esc_html__( 'Tile Content', 'et_builder' ),
				'type'=> 'tiny_mce',
				'description' => esc_html__( 'Define the text for the tile content', 'et_builder' ),
				'depends_show_if' => 'off',
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
	function shortcode_callback( $atts, $content = null, $function_name ) {
		global $titles;
		global $tile_images;
		global $tile_sizes;
		global $tile_links;
		global $tile_urls;

		global $items_count;

		$module_class         = $this->shortcode_atts['module_class'];
		$module_id            = $this->shortcode_atts['module_id'];
		$title                = $this->shortcode_atts['item_title'];
		$tile_image           = $this->shortcode_atts['item_image'];
		$tile_size           = $this->shortcode_atts['tile_size'];
		$tile_url           = $this->shortcode_atts['tile_url'];
		$tile_link           = $this->shortcode_atts['tile_link'];

		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		$class = 'et_pb_module et_pb_ca_fullwidth_service_tiles_item ';


		$titles[] = $title;
		$tile_images[] = $tile_image;
		$tile_sizes[] = $tile_size;
		$tile_links[] = $tile_link;
		$tile_urls[] = $tile_url;

		$items_count++;

		$output = '';

		if("off" == $tile_link)
			$output = sprintf('<div class="%3$s%4$s service-tile-panel" data-tile-id="panel-%1$s">
<div class="section section-default" style="padding-top: 25px; padding-bottom: 25px;">
<div class="container" style="padding-top: 0px;">
                <div class="card card-block">
 <button type="button" class="close btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
<div class="group" style="padding-left:15px; padding-right: 15px;">%2$s</div></div></div></div></div>',
							$items_count , 	$this->shortcode_content,
											esc_attr($class), ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ) );

		return $output;

	}
}
new ET_Builder_Module_Fullwidth_CA_Service_Tiles_Item;
?>
