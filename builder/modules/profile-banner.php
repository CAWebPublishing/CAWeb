<?php
/*
Divi Icon Field Names
When using the et_pb_get_font_icon_list to render the icon picker,
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
*/

class ET_Builder_Module_Profile_Banner extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'Profile Banner', 'et_builder' );

		$this->slug = 'et_pb_profile_banner';
		$this->fb_support = true;

		$this->whitelisted_fields = array(
			'name',
			'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
			'job_title',
			'admin_label',
			'url',
			'disabled_on',
			'module_class',
			'module_id',
			'portrait_url',
			'profile_link',
			'round_image',
		);

		$this->fields_defaults = array(
			'url'       => array('#','add_default_setting'),
		);

		$this->main_css_element = '%%order_class%%.et_pb_profile_banner';

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
		      'body'   => esc_html__( 'Body', 'et_builder'),
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
		add_action( 'wp_footer', array($this, 'js_frontend_preview') );
	}
	function get_fields() {
		$fields = array(
			'name' => array(
				'label'           => esc_html__( 'Profile Name', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the name of the profile.', 'et_builder' ),
				'toggle_slug'			=> 'header',
			),
			'job_title' => array(
				'label'           => esc_html__( 'Job Title', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the job title.', 'et_builder' ),
				'toggle_slug'			=> 'header',
			),
			'profile_link' => array(
				'label'           => esc_html__( 'Profile Link', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the text for the profile link.', 'et_builder' ),
				'toggle_slug'			=> 'body',
			),
			'url' => array(
				'label'           => esc_html__( 'Profile URL', 'et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Input the website of the profile (http:// must be included).', 'et_builder' ),
				'toggle_slug'			=> 'body',
			),
			'portrait_url' => array(
				'label'              => esc_html__( 'Portrait Image URL', 'et_builder' ),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text'        => esc_attr__( 'Choose an Image', 'et_builder' ),
				'update_text'        => esc_attr__( 'Set As Image', 'et_builder' ),
				'description'        => esc_html__( 'Upload your desired image, or type in the URL to the image you would like to display. (http:// must be included)', 'et_builder' ),
				'toggle_slug'			=> 'body',
			),
			'round_image' => array(
				'label'              => esc_html__( 'Round Image', 'et_builder' ),
				'type'               => 'yes_no_button',
				'option_category'    => 'configuration',
				'options'        => array(
				  'off' => esc_html__( 'No', 'et_builder' ),
				  'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
			  'description' => esc_html__('Switch to yes if you want round images in the profile banner.'),
				'toggle_slug'			=> 'body',
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
			'admin_label' => array(
			  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
			  'type'        => 'text',
			  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
				'toggle_slug'	=> 'admin_label',
			),
		);

		return $fields;

	}
	function shortcode_callback($atts, $content = null, $function_name) {
		$module_id            = $this->shortcode_atts['module_id'];
		$module_class         = $this->shortcode_atts['module_class'];
		$name                 = $this->shortcode_atts['name'];
		$job_title              = $this->shortcode_atts['job_title'];
		$profile_link              = $this->shortcode_atts['profile_link'];
		$portrait_url           = $this->shortcode_atts['portrait_url'];
		$round                = $this->shortcode_atts['round_image'];
		$url                    = $this->shortcode_atts['url'];
		$max_width            = $this->shortcode_atts['max_width'];
		$max_width_tablet     = $this->shortcode_atts['max_width_tablet'];
		$max_width_phone      = $this->shortcode_atts['max_width_phone'];
		$max_width_last_edited = $this->shortcode_atts['max_width_last_edited'];

		$class = "et_pb_profile_banner et_pb_module";
		$module_class = ET_Builder_Element::add_module_order_class( $module_class, $function_name );

		if ( '' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width ) {
		  $max_width_responsive_active = et_pb_get_responsive_status( $max_width_last_edited );

		  $max_width_values = array(
		    'desktop' => $max_width,
		    'tablet'  => $max_width_responsive_active ? $max_width_tablet : '',
		    'phone'   => $max_width_responsive_active ? $max_width_phone : '',
		  );

		  et_pb_generate_responsive_css( $max_width_values, '%%order_class%%', 'max-width', $function_name );
		}

		$image = ('on' !== $round ?
						sprintf('<img src="%1$s" style="width: 90px; min-height: 90px;float: right;"/>', $portrait_url) :
						sprintf('<div class="profile-banner-img-wrapper">
							<img src="%1$s" style="width: 90px; min-height: 90px;float: right;"/>
						</div>', $portrait_url)
				  );

		$output = sprintf('<div id="profile-banner-wrapper" class="%7$s%8$s"><a href="%4$s"><div class="profile-banner%6$s">
											%1$s
											<div class="banner-subtitle">%2$s</div>
											<div class="banner-title">%3$s</div>
											<div class="banner-link"><p>%5$s</p>
						          </div></div></a></div>',
											$image, $job_title, $name, $url,
					$profile_link, ('on' !== $round ? '' : ' round-image'),  esc_attr( $class ),
    	    ( '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '' ) );

		return $output;

	}

		// This is a non-standard function. It outputs JS code to render the
		// module preview in the new Divi 3 frontend editor.
		// Return value of the JS function must be full HTML code to display.
		function js_frontend_preview() {
			?>
			<script>
			window.<?php echo $this->slug; ?>_preview = function(args) {
				var output = '';

				var image = ('on' !== args.round_image ?
						'<img src="' + args.portrait_url + '" style="width: 90px; min-height: 90px;float: right;"/>'  :
						'<div class="profile-banner-img-wrapper"><img src="' + args.portrait_url + '" style="width: 90px; min-height: 90px;float: right;"/></div>' );

				output = '<div id="profile-banner-wrapper"><a href="' + args.url + '"><div class="profile-banner' + ('on' !== args.round_image ? '' : ' round-image') + '">' + image +
								'<div class="banner-subtitle">' + args.job_title+ '</div><div class="banner-title">' + args.name + '</div><div class="banner-link"><p>' + args.profile_link + '</p></div></div></a></div>';

				return output;

			}
			</script>
			<?php
		}
}
new ET_Builder_Module_Profile_Banner;

?>