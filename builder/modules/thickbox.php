<?php
/*
Divi Icon Field Names
When using the et_pb_get_font_icon_list to render the icon picker,
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
 */

// Standard Version
class ET_Builder_Module_Thickbox extends ET_Builder_CAWeb_Module {
    function init() {
        $this->name = esc_html__('Thickbox', 'et_builder');

        $this->slug = 'et_pb_ca_thickbox';
        //$this->fb_support = true;

        $this->whitelisted_fields = array(
			'max_width',
			'max_width_tablet',
			'max_width_phone',
			'max_width_last_edited',
			'module_class',
			'module_id',
			'admin_label',
			'thickbox_layout',
			'iframe_width',
			'iframe_height',
			'external_link',
			'image',
			'link_text',
			'content_new',
		);

        $this->fields_defaults = array(
					'panel_layout' => array('inline'),
				);

        $this->main_css_element = '%%order_class%%';

        $this->options_toggles = array(
			'general' => array(
		    'toggles' => array(
		      'style'  => esc_html__('Style', 'et_builder'),
		      'header' => esc_html__('Header', 'et_builder'),
		      'body'   => esc_html__('Body', 'et_builder'),
		    ),
		  ),
		  'advanced' => array(
		    'toggles' => array(
		      'iframesize' => esc_html__('IFrame Size', 'et_builder')
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
			'thickbox_layout' => array(
				'label'             => esc_html__('Style', 'et_builder'),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'inline' => esc_html__('Inline', 'et_builder'),
					'external' => esc_html__('External', 'et_builder'),
					'media_image' => esc_html__('Image', 'et_builder'),
				),
				'description'       => esc_html__('Here you can choose the style of thickbox to use', 'et_builder'),
				'affects' => array('external_link', 'content_new', 'image'),
				'toggle_slug' => 'style',
			),
			'iframe_width' => array(
				'label'           => esc_html__('IFrame Width', 'et_builder'),
				'type'            => 'range',
				'tab_slug'        => 'advanced',
				'toggle_slug'     => 'iframesize',
				'default'         => '600px',
				'range_settings' => array(
					'min'  => '1',
					'max'  => '1280',
					'step' => '1',
				),
			),
			'iframe_height' => array(
				'label'           => esc_html__('IFrame Height', 'et_builder'),
				'type'            => 'range',
				'tab_slug'        => 'advanced',
				'toggle_slug'     => 'iframesize',
				'default'         => '550px',
				'range_settings' => array(
					'min'  => '1',
					'max'  => '1280',
					'step' => '1',
				),
			),
			'link_text' => array(
				'label'           => esc_html__('Link Text', 'et_builder'),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__('Enter the text for the link.', 'et_builder'),
				'toggle_slug'			=> 'header',
			),
			'external_link' => array(
				'label'           => esc_html__('External Link', 'et_builder'),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__('Enter the URL for the thickbox. (http:// must be included)', 'et_builder'),
				'toggle_slug'			=> 'header',
				'depends_show_if' => 'external',
			),
			'image' => array(
				'label'              => esc_html__('Media Library', 'et_builder'),
				'type'               => 'upload',
				'option_category'    => 'basic_option',
				'upload_button_text' => esc_attr__('Upload an image', 'et_builder'),
				'choose_text'        => esc_attr__('Choose an Image', 'et_builder'),
				'update_text'        => esc_attr__('Set As Image', 'et_builder'),
				'depends_show_if'    => 'media_image',
				'description'        => esc_html__('Upload an image to display in the thickbox.', 'et_builder'),
				'toggle_slug'        => 'header',
			),
			'content_new' => array(
				'label'           => esc_html__('Content', 'et_builder'),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__('Here you can create the content that will be used within the module.', 'et_builder'),
				'toggle_slug'			=> 'body',
				'depends_show_if' => 'inline',
			),
			'max_width' => array(
			  'label'           => esc_html__('Max Width', 'et_builder'),
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
			  'label'           => esc_html__('Disable on', 'et_builder'),
			  'type'            => 'multiple_checkboxes',
			  'options'         => array(
			    'phone'   => esc_html__('Phone', 'et_builder'),
			    'tablet'  => esc_html__('Tablet', 'et_builder'),
			    'desktop' => esc_html__('Desktop', 'et_builder'),
			  ),
			  'additional_att'  => 'disable_on',
			  'option_category' => 'configuration',
			  'description'     => esc_html__('This will disable the module on selected devices', 'et_builder'),
				'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'visibility',
			),
			'admin_label' => array(
			  'label'       => esc_html__('Admin Label', 'et_builder'),
			  'type'        => 'text',
			  'description' => esc_html__('This will change the label of the module in the builder for easy identification.', 'et_builder'),
				'toggle_slug' => 'admin_label',
			),
			'module_id' => array(
			  'label'           => esc_html__('CSS ID', 'et_builder'),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
			  'label'           => esc_html__('CSS Class', 'et_builder'),
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
        $module_id             	= $this->shortcode_atts['module_id'];
        $module_class          	= $this->shortcode_atts['module_class'];
        $max_width             	= $this->shortcode_atts['max_width'];
        $max_width_tablet      	= $this->shortcode_atts['max_width_tablet'];
        $max_width_phone       	= $this->shortcode_atts['max_width_phone'];
        $max_width_last_edited 	= $this->shortcode_atts['max_width_last_edited'];
        $thickbox_layout        		= $this->shortcode_atts['thickbox_layout'];
        $iframe_width        		= $this->shortcode_atts['iframe_width'];
        $iframe_height        		= $this->shortcode_atts['iframe_height'];
        $external_link    				= $this->shortcode_atts['external_link'];
        $image    				= $this->shortcode_atts['image'];
        $link_text    				= $this->shortcode_atts['link_text'];
        $content_new    				= $this->shortcode_atts['content_new'];

        $class = "et_pb_ca_thickbox et_pb_module";
        $module_class = ET_Builder_Element::add_module_order_class($module_class, $function_name);
        $this->shortcode_content = et_builder_replace_code_content_entities($this->shortcode_content);

        if ('' !== $max_width_tablet || '' !== $max_width_phone || '' !== $max_width) {
            $max_width_responsive_active = et_pb_get_responsive_status($max_width_last_edited);

            $max_width_values = array(
		    'desktop' => $max_width,
		    'tablet'  => $max_width_responsive_active ? $max_width_tablet : '',
		    'phone'   => $max_width_responsive_active ? $max_width_phone : '',
		  );

            et_pb_generate_responsive_css($max_width_values, '%%order_class%%', 'max-width', $function_name);
        }

        $thickbox_id = '' !== $module_id ? esc_attr($module_id) : 'thickbox_'.rand(1, 99);

        $class = sprintf(' class="%1$s%2$s"', esc_attr($class), '' !== $module_class ? sprintf(' %1$s', esc_attr($module_class)) : '');

        $iframe_width = ! empty($iframe_width) ? $iframe_width : '600px';
        $iframe_height = ! empty($iframe_height) ? $iframe_height : '500px';

        switch ($thickbox_layout) {
					case "inline":
						$link = sprintf('<a class="thickbox" href="#TB_inline?width=%1$d&height=%2$d&inlineId=%3$s">%4$s</a>', $iframe_width, $iframe_height, $thickbox_id, $link_text);

						$output = sprintf('<div id="%1$s" style="display:none">%2$s</div>%3$s', $thickbox_id, $this->shortcode_content, $link);

						break;

					case "external":
						$output = sprintf('<a class="thickbox" href="%1$s?TB_iframe=true&width=%2$d&height=%3$d">%4$s</a>', $external_link, $iframe_width, $iframe_height, $link_text);

						break;
					case "media_image":
						$output = sprintf('<a class="thickbox" href="%1$s?TB_iframe=true&width=%2$d&height=%3$d">%4$s</a>', $image, $iframe_width, $iframe_height, $link_text);

					break;
				}

        add_thickbox();

        return sprintf('<div%1$s>%2$s</div>%3$stest', $class, $output, $image);
    }
}
new ET_Builder_Module_Thickbox;
?>