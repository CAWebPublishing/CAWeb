<?php
/*
Divi Icon Field Names
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
 */

// Standard Version
class ET_Builder_Module_Section_Footer extends ET_Builder_CAWeb_Module {
    function init() {
        $this->name = esc_html__('Section - Footer', 'et_builder');
        $this->slug = 'et_pb_ca_section_footer';

        $this->child_slug      = 'et_pb_ca_section_footer_group';
        $this->child_item_text = esc_html__('Group', 'et_builder');

        $this->main_css_element = '%%order_class%%.et_pb_ca_section_footer';

        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                ),
            ),
            'advanced' => array(
                'toggles' => array(
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
            'admin_label' => array(
                'label'       => esc_html__('Admin Label', 'et_builder'),
                'type'        => 'text',
                'description' => esc_html__('This will change the label of the module in the builder for easy identification.', 'et_builder'),
                'tab_slug'				=> 'general',
                'toggle_slug'	=> 'admin_label',
            ),
        );

        $design_fields = array(
            'section_background_color' => array(
                'label'             => esc_html__('Background Color', 'et_builder'),
                'type'              => 'color-alpha',
                'custom_color'      => true,
                'description'       => esc_html__('Here you can define a custom background color for the section.', 'et_builder'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'style',
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
        $section_background_color = $this->props['section_background_color'];

        $content = $this->content;

        $this->add_classname('section');
        $class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

        $section_bg_color = ("" != $section_background_color ? sprintf(' style="background: %1$s" ', $section_background_color) : '');

        $output = sprintf('<div%1$s%2$s%3$s>%4$s</div>', $this->module_id(), $class, $section_bg_color, $content);

        return $output;
    }
}
new ET_Builder_Module_Section_Footer;

class ET_Builder_Module_Footer_Group extends ET_Builder_CAWeb_Module {
    function init() {
        $this->name = esc_html__('Footer Group', 'et_builder');
        $this->slug = 'et_pb_ca_section_footer_group';

        $this->type = 'child';
        $this->child_title_var = 'group_title';
        $this->child_title_fallback_var = 'group_title';

        $this->advanced_setting_title_text = esc_html__('New Footer Group', 'et_builder');
        $this->settings_text = esc_html__('Footer Group Settings', 'et_builder');

        $this->main_css_element = '%%order_class%%';

        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                    'style'  => esc_html__('Style', 'et_builder'),
                    'header' => esc_html__('Header', 'et_builder'),
                    'body'   => esc_html__('Body', 'et_builder'),
                ),
            ),
            'advanced' => array(
                'toggles' => array(
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
            'group_title' => array(
                'label' => esc_html__('Title', 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('Define the title for the group section.', 'et_builder'),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'header',
            ),
            'group_show_more_button' => array(
                'label'           => esc_html__('Read More Button', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'affects' => array('group_url'),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'body',
            ),
            'group_url' => array(
                'label' => esc_html__('Read More URL', 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('Define the url for the Read More Button.', 'et_builder'),
                'show_if' => array('group_show_more_button' => 'on'),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'body',
            ),
            'display_link_as_button' => array(
                'label'           => esc_html__('Links as Button', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'body',
            )
        );

        for ($i = 1; $i <= 10; $i++) {
            $show = sprintf('group_link%1$s_show', $i);
            $text = sprintf('group_link_text%1$s', $i);
            $url = sprintf('group_link_url%1$s', $i);

            $general_fields[$show] = array(
                'label'           => esc_html__(sprintf('Link %1$s', $i), 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'affects' => array($text, $url),
                'tab_slug'				=> 'general',
                'toggle_slug'	=> 'body',
            );
            $general_fields[$text] = array(
                'label' => esc_html__(sprintf('Link %1$s Text', $i), 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('Define the text for the link.', 'et_builder'),
                'show_if' => array($show => 'on'),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'body',
            );
            $general_fields[$url] = array(
                'label' => esc_html__(sprintf('Link %1$s URL', $i), 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('Define the URL for the destination.', 'et_builder'),
                'show_if' => array($show => 'on'),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'body',
            );
        }

        $design_fields = array(
            'heading_color' => array(
                'label'             => esc_html__('Heading Text Color', 'et_builder'),
                'type'              => 'color-alpha',
                'custom_color'      => true,
                'description'       => esc_html__('Here you can define a custom heading color for the title.', 'et_builder'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'style',
            ),
            'text_color' => array(
                'label'             => esc_html__('Text Color', 'et_builder'),
                'type'              => 'color-alpha',
                'custom_color'      => true,
                'description'       => esc_html__('Here you can define a custom text color for the list items.', 'et_builder'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'style',
            ),
            'group_icon_button' => array(
                'label'           => esc_html__('List Icon', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'affects' => array('font_icon'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'style',
            ),
            'font_icon' => array(
                'label' => esc_html__('Group Icon', 'et_builder'),
                'type' => 'text',
                'option_category'     => 'configuration',
                'class'    => array('et-pb-font-icon'),
                'renderer'            => 'select_icon',
                'renderer_with_field' => true,
                'default' => '%-1%',
                'description' => esc_html__('Define the icon for the group section.', 'et_builder'),
                'show_if' => array('group_icon_button' => 'on'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'style',
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
            )
        );

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render($unprocessed_props, $content = null, $render_slug) {
        $heading_color = $this->props['heading_color'];
        $text_color= $this->props['text_color'];
        $group_icon = $this->props['font_icon'];
        $group_title = $this->props['group_title'];
        $group_url = $this->props['group_url'];
        $group_icon_button = $this->props['group_icon_button'];
        $group_show_more_button = $this->props['group_show_more_button'];
        $display_link_as_button= $this->props['display_link_as_button'];

        // Declare variable variables for the 10 groups
        for ($i = 1; $i <= 10; $i++) {
            $group_link_show[$i] = $this->props[sprintf('group_link%1$s_show', $i)];
            $group_link_text[$i] = $this->props[sprintf('group_link_text%1$s', $i)];
            $group_link_url[$i] = $this->props[sprintf('group_link_url%1$s', $i)];
        }

        $this->add_classname('quarter');
        $class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

        $heading_color = ( ! empty($heading_color) ? sprintf(' style="color: %1$s" ', $heading_color) : '');

        $icon_color = ( ! empty($text_color) ? sprintf(' color: %1$s;', $text_color) : '');
        $text_color = ( ! empty($text_color) ? sprintf(' style="color: %1$s" ', $text_color) : '');

        $icon = ("on" == $group_icon_button ? caweb_get_icon_span($group_icon, $icon_color) : '');

        $link_as_button = ("on" == $display_link_as_button ? ' class="btn btn-default btn-xs" ' : '');

        $no_pad = ("on" != $group_icon_button ? 'padding-left: 0 !important;' : '');

        $display_more_button = ("on" == $group_show_more_button ?
		sprintf('<a href="%1$s" class="btn btn-primary" target="_blank">Read More</a>', esc_url($group_url)) : '');

        $group_links = '';

        for ($i = 1; $i <= 10; $i++) {
            $tmp[] = $icon;
            $group_links .= ("on" == $group_link_show[$i] ?
        sprintf('<li><a href="%1$s"%2$s%3$s target="_blank">%4$s%5$s</a></li>',
        esc_url($group_link_url[$i]), $link_as_button, $text_color, $icon, $group_link_text[$i]) : '');
        }

        $output = sprintf('<div%1$s%2$s><h4%3$s>%4$s</h4><ul class="list-unstyled" style="list-style-type: none; %5$s">%6$s</ul>%7$s</div>', $this->module_id(), $class, $heading_color, $group_title, $no_pad, $group_links, $display_more_button);

        return $output;
    }
}
new ET_Builder_Module_Footer_Group;

// Fullwidth Version
class ET_Builder_Module_FullWidth_Section_Footer extends ET_Builder_CAWeb_Module {
    function init() {
        $this->name = esc_html__('FullWidth Section - Footer', 'et_builder');
        $this->slug = 'et_pb_ca_fullwidth_section_footer';
        $this->fullwidth = true;

        $this->child_slug      = 'et_pb_ca_section_fullwidth_footer_group';
        $this->child_item_text = esc_html__('Group', 'et_builder');

        $this->main_css_element = '%%order_class%%';

        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                ),
            ),
            'advanced' => array(
                'toggles' => array(
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
            'admin_label' => array(
                'label'       => esc_html__('Admin Label', 'et_builder'),
                'type'        => 'text',
                'description' => esc_html__('This will change the label of the module in the builder for easy identification.', 'et_builder'),
                'tab_slug'				=> 'general',
                'toggle_slug'	=> 'admin_label',
            ),
        );

        $design_fields = array(
            'section_background_color' => array(
                'label'             => esc_html__('Background Color', 'et_builder'),
                'type'              => 'color-alpha',
                'custom_color'      => true,
                'description'       => esc_html__('Here you can define a custom background color for the section.', 'et_builder'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'style',
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
        $section_background_color = $this->props['section_background_color'];

        $content = $this->content;

        $this->add_classname('section');
        $class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

        $section_bg_color = ("" != $section_background_color ? sprintf(' style="background: %1$s" ', $section_background_color) : '');

        $output = sprintf('<div%1$s%2$s%3$s>%4$s</div>', $this->module_id(), $class, $section_bg_color, $content);

        return $output;
    }
}
new ET_Builder_Module_FullWidth_Section_Footer;

class ET_Builder_Module_FullWidth_Footer_Group extends ET_Builder_CAWeb_Module {
    function init() {
        $this->name = esc_html__('FullWidth Footer Group', 'et_builder');
        $this->slug = 'et_pb_ca_section_fullwidth_footer_group';
        $this->fullwidth = true;

        $this->type = 'child';
        $this->child_title_var = 'group_title';
        $this->child_title_fallback_var = 'group_title';

        $this->advanced_setting_title_text = esc_html__('New Footer Group', 'et_builder');
        $this->settings_text = esc_html__('Footer Group Settings', 'et_builder');

        $this->main_css_element = '%%order_class%%';

        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                    'style'  => esc_html__('Style', 'et_builder'),
                    'header' => esc_html__('Header', 'et_builder'),
                    'body'   => esc_html__('Body', 'et_builder'),
                ),
            ),
            'advanced' => array(
                'toggles' => array(
                    'header' => esc_html__('Header', 'et_builder'),
                    'body'   => esc_html__('Body', 'et_builder'),
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
            'group_title' => array(
                'label' => esc_html__('Title', 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('Define the title for the group section.', 'et_builder'),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'header',
            ),
            'group_show_more_button' => array(
                'label'           => esc_html__('Read More Button', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'affects' => array('group_url'),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'body',
            ),
            'group_url' => array(
                'label' => esc_html__('Read More URL', 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('Define the url for the Read More Button.', 'et_builder'),
                'show_if' => array('group_show_more_button' => 'on'),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'body',
            ),
            'display_link_as_button' => array(
                'label'           => esc_html__('Links as Button', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'body',
            )
        );

        for ($i = 1; $i <= 10; $i++) {
            $show = sprintf('group_link%1$s_show', $i);
            $text = sprintf('group_link_text%1$s', $i);
            $url = sprintf('group_link_url%1$s', $i);

            $general_fields[$show] = array(
                'label'           => esc_html__(sprintf('Link %1$s', $i), 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'affects' => array($text, $url),
                'tab_slug'				=> 'general',
                'toggle_slug'	=> 'body',
            );
            $general_fields[$text] = array(
                'label' => esc_html__(sprintf('Link %1$s Text', $i), 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('Define the text for the link.', 'et_builder'),
                'show_if' => array($show => 'on'),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'body',
            );
            $general_fields[$url] = array(
                'label' => esc_html__(sprintf('Link %1$s URL', $i), 'et_builder'),
                'type' => 'text',
                'option_category' => 'basic_option',
                'description' => esc_html__('Define the URL for the destination.', 'et_builder'),
                'show_if' => array($show => 'on'),
                'tab_slug'				=> 'general',
                'toggle_slug'				=> 'body',
            );
        }

        $design_fields = array(
            'heading_color' => array(
                'label'             => esc_html__('Heading Text Color', 'et_builder'),
                'type'              => 'color-alpha',
                'custom_color'      => true,
                'description'       => esc_html__('Here you can define a custom heading color for the title.', 'et_builder'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'style',
            ),
            'text_color' => array(
                'label'             => esc_html__('Text Color', 'et_builder'),
                'type'              => 'color-alpha',
                'custom_color'      => true,
                'description'       => esc_html__('Here you can define a custom text color for the list items.', 'et_builder'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'style',
            ),
            'group_icon_button' => array(
                'label'           => esc_html__('List Icon', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'affects' => array('font_icon'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'style',
            ),
            'font_icon' => array(
                'label' => esc_html__('Group Icon', 'et_builder'),
                'type' => 'text',
                'option_category'     => 'configuration',
                'class'    => array('et-pb-font-icon'),
                'renderer'            => 'select_icon',
                'renderer_with_field' => true,
                'default' => '%-1%',
                'description' => esc_html__('Define the icon for the group section.', 'et_builder'),
                'show_if' => array('group_icon_button' => 'on'),
                'tab_slug'				=> 'advanced',
                'toggle_slug'				=> 'style',
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
            )
        );

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render($unprocessed_props, $content = null, $render_slug) {
        $heading_color = $this->props['heading_color'];
        $text_color= $this->props['text_color'];
        $group_icon = $this->props['font_icon'];
        $group_title = $this->props['group_title'];
        $group_url = $this->props['group_url'];
        $group_icon_button = $this->props['group_icon_button'];
        $group_show_more_button = $this->props['group_show_more_button'];
        $display_link_as_button= $this->props['display_link_as_button'];

        // Declare variable variables for the 10 groups
        for ($i = 1; $i <= 10; $i++) {
            $group_link_show[$i] = $this->props[sprintf('group_link%1$s_show', $i)];
            $group_link_text[$i] = $this->props[sprintf('group_link_text%1$s', $i)];
            $group_link_url[$i] = $this->props[sprintf('group_link_url%1$s', $i)];
        }

        $this->add_classname('quarter');
        $class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

        $heading_color = ( ! empty($heading_color) ? sprintf(' style="color: %1$s" ', $heading_color) : '');

        $icon_color = ( ! empty($text_color) ? sprintf(' color: %1$s;', $text_color) : '');
        $text_color = ( ! empty($text_color) ? sprintf(' style="color: %1$s" ', $text_color) : '');

        $icon = ("on" == $group_icon_button ? caweb_get_icon_span($group_icon, $icon_color) : '');

        $link_as_button = ("on" == $display_link_as_button ? ' class="btn btn-default btn-xs" ' : '');

        $no_pad = ("on" != $group_icon_button ? 'padding-left: 0 !important;' : '');

        $display_more_button = ("on" == $group_show_more_button ?
	sprintf('<a href="%1$s" class="btn btn-primary" target="_blank">Read More</a>', esc_url($group_url)) : '');

        $group_links = '';

        for ($i = 1; $i <= 10; $i++) {
            $tmp[] = $icon;
            $group_links .= ("on" == $group_link_show[$i] ?
			sprintf('<li><a href="%1$s"%2$s%3$s target="_blank">%4$s%5$s</a></li>',
			esc_url($group_link_url[$i]), $link_as_button, $text_color, $icon, $group_link_text[$i]) : '');
        }

        $output = sprintf('<div%1$s%2$s><h4%3$s>%4$s</h4><ul class="list-unstyled" style="list-style-type: none; %5$s">%6$s</ul>%7$s</div>', $this->module_id(), $class, $heading_color, $group_title, $no_pad, $group_links, $display_more_button);

        return $output;
    }
}
new ET_Builder_Module_FullWidth_Footer_Group;
?>
