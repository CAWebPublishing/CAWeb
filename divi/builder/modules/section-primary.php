<?php
/*
Divi Icon Field Names
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
 */

// Standard Version
class ET_Builder_Module_CA_Section_Primary extends ET_Builder_CAWeb_Module {
    function init() {
        $this->name = esc_html__('Section - Primary', 'et_builder');
        $this->slug = 'et_pb_ca_section_primary';

        $this->main_css_element = '%%order_class%%';

        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                    'header' => esc_html__('Header', 'et_builder'),
                    'body'   => esc_html__('Body', 'et_builder'),
                ),
            ),
            'advanced' => array(
                'toggles' => array(
                    'header' => esc_html__('Header', 'et_builder'),
                    'style'  => esc_html__('Style', 'et_builder'),
                    'text' => array(
                        'title'    => esc_html__('Text', 'et_builder'),
                        'priority' => 49,
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
        $general_fields = array(
            'section_heading' => array(
                'label' => esc_html__('Title', 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('Define the title for the section.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'header',
            ),
            'featured_image_button' => array(
                'label'           => esc_html__('Featured Image', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'default' => 'on',
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'left_right_button' => array(
                'label'           => esc_html__('Image Position', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('Left', 'et_builder'),
                    'on'  => esc_html__('Right', 'et_builder'),
                ),
                'show_if' => array('featured_image_button' => 'on'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'section_image' => array(
                'label' => esc_html__('Image', 'et_builder'),
                'type' => 'upload',
                'option_category' => 'basic_option',
                'upload_button_text' => esc_attr__('Upload an image', 'et_builder'),
                'choose_text' => esc_attr__('Choose a Gallery Image', 'et_builder'),
                'update_text' => esc_attr__('Set As Background', 'et_builder'),
                'description' => esc_html__('If defined, this image will be used as the background for this module. To remove a background image, simply delete the URL from the settings field.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
                'show_if' => array('featured_image_button' => 'on'),
            ),
            'slide_image_button' => array(
                'label'           => esc_html__('Fade Image from Left', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
                'show_if' => array('featured_image_button' => 'on'),
            ),
            'show_more_button' => array(
                'label'           => esc_html__('More Information Button', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'default' => 'off',
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'section_link' => array(
                'label' => esc_html__('Link URL', 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('URL destination for the button.', 'et_builder'),
                'show_if' => array('show_more_button' => 'on'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'content' => array(
                'label'           => esc_html__('Content', 'et_builder'),
                'type'            => 'tiny_mce',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Here you can create the content that will be used within the module.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'admin_label' => array(
                'label'       => esc_html__('Admin Label', 'et_builder'),
                'type'        => 'text',
                'description' => esc_html__('This will change the label of the module in the builder for easy identification.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'	=> 'admin_label',
            ),
        );

        $design_fields = array(
            'heading_text_color' => array(
                'label'             => esc_html__('Heading Text Color', 'et_builder'),
                'type'              => 'color-alpha',
                'custom_color'      => true,
                'description'       => esc_html__('Here you can define a custom heading color for the title.', 'et_builder'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'header',
            ),
            'heading_align' => array(
                'label'           => esc_html__('Heading Alignment', 'et_builder'),
                'type'            => 'select',
                'option_category' => 'configuration',
                'options'         => array(
                    'left' => esc_html__('Left', 'et_builder'),
                    'center'  => esc_html__('Center', 'et_builder'),
                    'right'  => esc_html__('Right', 'et_builder'),
                ),
                'show_if' => array('featured_image_button' => 'off'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'			=> 'header',
            ),
            'section_background_color' => array(
                'label'             => esc_html__('Background Color', 'et_builder'),
                'type'              => 'color-alpha',
                'custom_color'      => true,
                'description'       => esc_html__('Here you can define a custom background color for the section.', 'et_builder'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'			=> 'style',
            ),
        );

        $advanced_fields = array(
            'module_id' => array(
                'label'           => esc_html__('CSS ID', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'configuration',
                'tab_slug'        => 'custom_css',
                'toggle_slug'			=> 'classes',
                'option_class'    => 'et_pb_custom_css_regular',
            ),
            'module_class' => array(
                'label'           => esc_html__('CSS Class', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'configuration',
                'tab_slug'        => 'custom_css',
                'toggle_slug'			=> 'classes',
                'option_class'    => 'et_pb_custom_css_regular',
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
        );

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render($unprocessed_props, $content = null, $render_slug) {
        $featured_image_button 		= $this->props['featured_image_button'];
        $heading_align 						= $this->props['heading_align'];
        $image_pos 								= $this->props['left_right_button'];
        $section_image 						= $this->props['section_image'];
        $section_heading 					= $this->props['section_heading'];
        $show_more_button 				= $this->props['show_more_button'];
        $slide_image_button 			= $this->props['slide_image_button'];
        $section_link 						= $this->props['section_link'];
        $section_background_color = $this->props['section_background_color'];
        $heading_text_color 			= $this->props['heading_text_color'];

        $content = $this->content;

        $this->add_classname('section');
        $class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

        $section_bg_color = ("" !=  $section_background_color ?
			sprintf(' style="background: %1$s;"', $section_background_color) : '');

        $heading_text_color = ("" != $heading_text_color ? sprintf(' color: %1$s; ', $heading_text_color) : '');

        $display_button = ($show_more_button == "on" && $section_link != "" ?
			sprintf('<div><a href="%1$s" class="btn btn-default" target="_blank">More Information</a></div>', esc_url($section_link)) : '');

        if ("on" == $featured_image_button) {
            $img_class = ("on"== $slide_image_button ? ' animate-fadeInLeft ' : '');
            $img_class .= ("on" == $image_pos ? 'pull-right' : '');

            $display_image = sprintf('<div class="col-md-4 col-md-offset-0 %1$s" style="%2$s">
					<img src="%3$s" class="img-responsive" style="width: 100%%;"></div>',
                $img_class, ("on" == $image_pos ? 'padding-right: 0;' : 'padding-left: 0;'), $section_image);

            $heading_style =("" != $heading_text_color ? sprintf(' style="%1$s" ', $heading_text_color) : '');

            $section = sprintf('<div class="col-md-15" ><h2%1$s>%2$s</h2>%3$s%4$s</div>',
					$heading_style, $section_heading, $content, $display_button);

            $body= sprintf('%1$s%2$s', $display_image, $section);
        } else {
            $heading_style = ( ! empty($heading_text_color) ?
										sprintf(' style="%1$s" ', $heading_text_color) : '');

            $body = sprintf('<div><h2%1$s class="text-%2$s">%3$s</h2>%4$s%5$s</div>',
					$heading_style, $heading_align, $section_heading, $content, $display_button);
        }
        $output = sprintf('<div%1$s%2$s%3$s>%4$s</div>', $this->module_id(), $class, $section_bg_color, $body);

        return $output;
    }
}
new ET_Builder_Module_CA_Section_Primary;

// Fullwidth Version
class ET_Builder_Module_Fullwidth_CA_Section_Primary extends ET_Builder_CAWeb_Module {
    function init() {
        $this->name = esc_html__('FullWidth Section - Primary', 'et_builder');
        $this->slug = 'et_pb_ca_fullwidth_section_primary';
        $this->fullwidth = true;

        $this->main_css_element = '%%order_class%%';

        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                    'header' => esc_html__('Header', 'et_builder'),
                    'body'   => esc_html__('Body', 'et_builder'),
                ),
            ),
            'advanced' => array(
                'toggles' => array(
                    'header' => esc_html__('Header', 'et_builder'),
                    'style'  => esc_html__('Style', 'et_builder'),
                    'text' => array(
                        'title'    => esc_html__('Text', 'et_builder'),
                        'priority' => 49,
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
        $general_fields = array(
            'section_heading' => array(
                'label' => esc_html__('Title', 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('Define the title for the section.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'header',
            ),
            'featured_image_button' => array(
                'label'           => esc_html__('Featured Image', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'default' => 'on',
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'left_right_button' => array(
                'label'           => esc_html__('Image Position', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('Left', 'et_builder'),
                    'on'  => esc_html__('Right', 'et_builder'),
                ),
                'show_if' => array('featured_image_button' => 'on'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'section_image' => array(
                'label' => esc_html__('Image', 'et_builder'),
                'type' => 'upload',
                'option_category' => 'basic_option',
                'upload_button_text' => esc_attr__('Upload an image', 'et_builder'),
                'choose_text' => esc_attr__('Choose a Gallery Image', 'et_builder'),
                'update_text' => esc_attr__('Set As Background', 'et_builder'),
                'description' => esc_html__('If defined, this image will be used as the background for this module. To remove a background image, simply delete the URL from the settings field.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
                'show_if' => array('featured_image_button' => 'on'),
            ),
            'slide_image_button' => array(
                'label'           => esc_html__('Fade Image from Left', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
                'show_if' => array('featured_image_button' => 'on'),
            ),
            'show_more_button' => array(
                'label'           => esc_html__('More Information Button', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'default' => 'off',
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'section_link' => array(
                'label' => esc_html__('Link URL', 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('URL destination for the button.', 'et_builder'),
                'show_if' => array('show_more_button' => 'on'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'content' => array(
                'label'           => esc_html__('Content', 'et_builder'),
                'type'            => 'tiny_mce',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Here you can create the content that will be used within the module.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'admin_label' => array(
                'label'       => esc_html__('Admin Label', 'et_builder'),
                'type'        => 'text',
                'description' => esc_html__('This will change the label of the module in the builder for easy identification.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'	=> 'admin_label',
            ),
        );

        $design_fields = array(
            'heading_text_color' => array(
                'label'             => esc_html__('Heading Text Color', 'et_builder'),
                'type'              => 'color-alpha',
                'custom_color'      => true,
                'description'       => esc_html__('Here you can define a custom heading color for the title.', 'et_builder'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'header',
            ),
            'heading_align' => array(
                'label'           => esc_html__('Heading Alignment', 'et_builder'),
                'type'            => 'select',
                'option_category' => 'configuration',
                'options'         => array(
                    'left' => esc_html__('Left', 'et_builder'),
                    'center'  => esc_html__('Center', 'et_builder'),
                    'right'  => esc_html__('Right', 'et_builder'),
                ),
                'show_if' => array('featured_image_button' => 'off'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'			=> 'header',
            ),
            'section_background_color' => array(
                'label'             => esc_html__('Background Color', 'et_builder'),
                'type'              => 'color-alpha',
                'custom_color'      => true,
                'description'       => esc_html__('Here you can define a custom background color for the section.', 'et_builder'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'			=> 'style',
            ),
        );

        $advanced_fields = array(
            'module_id' => array(
                'label'           => esc_html__('CSS ID', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'configuration',
                'tab_slug'        => 'custom_css',
                'toggle_slug'			=> 'classes',
                'option_class'    => 'et_pb_custom_css_regular',
            ),
            'module_class' => array(
                'label'           => esc_html__('CSS Class', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'configuration',
                'tab_slug'        => 'custom_css',
                'toggle_slug'			=> 'classes',
                'option_class'    => 'et_pb_custom_css_regular',
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
        );

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render($unprocessed_props, $content = null, $render_slug) {
        $featured_image_button 		= $this->props['featured_image_button'];
        $heading_align 						= $this->props['heading_align'];
        $image_pos 								= $this->props['left_right_button'];
        $section_image 						= $this->props['section_image'];
        $section_heading 					= $this->props['section_heading'];
        $show_more_button 				= $this->props['show_more_button'];
        $slide_image_button 			= $this->props['slide_image_button'];
        $section_link 						= $this->props['section_link'];
        $section_background_color = $this->props['section_background_color'];
        $heading_text_color 			= $this->props['heading_text_color'];

        $content = $this->content;

        $this->add_classname('section');
        $class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

        $section_bg_color = ("" !=  $section_background_color ?
			sprintf(' style="background: %1$s;"', $section_background_color) : '');

        $heading_text_color = ("" != $heading_text_color ? sprintf(' color: %1$s; ', $heading_text_color) : '');

        $display_button = ($show_more_button == "on" && $section_link != "" ?
			sprintf('<div><a href="%1$s" class="btn btn-default" target="_blank">More Information</a></div>', esc_url($section_link)) : '');

        if ("on" == $featured_image_button) {
            $img_class = ("on"== $slide_image_button ? ' animate-fadeInLeft ' : '');
            $img_class .= ("on" == $image_pos ? 'pull-right' : '');

            $display_image = sprintf('<div class="col-md-4 col-md-offset-0 %1$s" style="%2$s">
					<img src="%3$s" class="img-responsive" style="width: 100%%;"></div>',
                $img_class, ("on" == $image_pos ? 'padding-right: 0;' : 'padding-left: 0;'), $section_image);

            $heading_style =("" != $heading_text_color ? sprintf(' style="%1$s" ', $heading_text_color) : '');

            $section = sprintf('<div class="col-md-15" ><h2%1$s>%2$s</h2>%3$s%4$s</div>',
					$heading_style, $section_heading, $content, $display_button);

            $body= sprintf('%1$s%2$s', $display_image, $section);
        } else {
            $heading_style = ( ! empty($heading_text_color) ?
										sprintf(' style="%1$s" ', $heading_text_color) : '');

            $body = sprintf('<div><h2%1$s class="text-%2$s">%3$s</h2>%4$s%5$s</div>',
					$heading_style, $heading_align, $section_heading, $content, $display_button);
        }
        $output = sprintf('<div%1$s%2$s%3$s>%4$s</div>', $this->module_id(), $class, $section_bg_color, $body);

        return $output;
    }
}
new ET_Builder_Module_Fullwidth_CA_Section_Primary;

?>
