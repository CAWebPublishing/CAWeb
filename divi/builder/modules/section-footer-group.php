<?php 

class CAWeb_Module_Footer_Group extends ET_Builder_CAWeb_Module {
    public $slug = 'et_pb_ca_section_footer_group';
    public $vb_support = 'on';

    function init() {
        $this->name = esc_html__('Footer Group', 'et_builder');

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
		);

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render($unprocessed_props, $content = null, $render_slug) {
        $heading_color = $this->props['heading_color'];
		$group_show_more_button = $this->props['group_show_more_button'];
		$group_url = $this->props['group_url'];
		$group_title = $this->props['group_title'];

		$this->add_classname('quarter');
		
		$class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

		$heading_color = ! empty($heading_color) ? sprintf(' style="color: %1$s" ', $heading_color) : '';

		$display_more_button = '';
		
		if ("on" == $group_show_more_button ){
			$display_more_button = sprintf('<a href="%1$s" class="btn btn-primary" target="_blank">Read More<span class="sr-only">Read More about %2$s</span></a>', esc_url($group_url), $group_title);
		}

		$output = sprintf('<div%1$s%2$s><h4%3$s>%4$s</h4>%5$s</ul>%6$s</div>', 
			$this->module_id(), $class, $heading_color, $group_title, $this->renderGroupList(), $display_more_button);

        return $output;
	}
	
	function renderGroupList(){
		$group_icon = $this->props['font_icon'];
		$group_icon_button = $this->props['group_icon_button'];
		$text_color= $this->props['text_color'];
		$display_link_as_button= $this->props['display_link_as_button'];

		// List Color Styles
		$text_color = ! empty($text_color) ? sprintf(' style="color: %1$s" ', $text_color) : '';
		
		$opts['style'] = ! empty($text_color) ? sprintf('color: %1$s', $text_color) : '';
		$opts['style'] .= 'padding-right: 5px';

		$icon = "on" == $group_icon_button ? caweb_get_icon_span($group_icon, $opts) : '';

		$link_as_button = "on" == $display_link_as_button ? ' class="btn btn-default btn-xs" ' : '';

		$groupLinks = '';

		for ($i = 1; $i <= 10; $i++) {
			$group_link_show = $this->props[sprintf('group_link%1$s_show', $i)];
			$group_link_text = $this->props[sprintf('group_link_text%1$s', $i)];
			$group_link_url = $this->props[sprintf('group_link_url%1$s', $i)];
		
			if( "on" == $group_link_show ){
				$groupLinks .= sprintf('<li class="mb-2"><a href="%1$s"%2$s%3$s target="_blank">%4$s%5$s</a></li>',
					esc_url($group_link_url), $link_as_button, $text_color, $icon, $group_link_text);
			}
		}

		return sprintf( '<ul class="list-unstyled p-0">%1$s</ul>', $groupLinks);
	}
}
new CAWeb_Module_Footer_Group;

class CAWeb_Module_FullWidth_Footer_Group extends ET_Builder_CAWeb_Module {
	public $slug = 'et_pb_ca_section_fullwidth_footer_group';
    public $vb_support = 'on';

	function init() {
		$this->name = esc_html__('FullWidth Footer Group', 'et_builder');
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
		);

		return array_merge($general_fields, $design_fields, $advanced_fields);
	}
	function render($unprocessed_props, $content = null, $render_slug) {
        $heading_color = $this->props['heading_color'];
		$group_show_more_button = $this->props['group_show_more_button'];
		$group_url = $this->props['group_url'];
		$group_title = $this->props['group_title'];

		$this->add_classname('quarter');
		
		$class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

		$heading_color = ! empty($heading_color) ? sprintf(' style="color: %1$s" ', $heading_color) : '';

		$display_more_button = '';
		
		if ("on" == $group_show_more_button ){
			$display_more_button = sprintf('<a href="%1$s" class="btn btn-primary" target="_blank">Read More<span class="sr-only">Read More about %2$s</span></a>', esc_url($group_url), $group_title);
		}

		$output = sprintf('<div%1$s%2$s><h4%3$s>%4$s</h4>%5$s</ul>%6$s</div>', 
			$this->module_id(), $class, $heading_color, $group_title, $this->renderGroupList(), $display_more_button);

        return $output;
	}
	
	function renderGroupList(){
		$group_icon = $this->props['font_icon'];
		$group_icon_button = $this->props['group_icon_button'];
		$text_color= $this->props['text_color'];
		$display_link_as_button= $this->props['display_link_as_button'];

		// List Color Styles
		$text_color = ! empty($text_color) ? sprintf(' style="color: %1$s" ', $text_color) : '';
		
		$opts['style'] = ! empty($text_color) ? sprintf('color: %1$s', $text_color) : '';
		$opts['style'] .= 'padding-right: 5px';

		$icon = "on" == $group_icon_button ? caweb_get_icon_span($group_icon, $opts) : '';

		$link_as_button = "on" == $display_link_as_button ? ' class="btn btn-default btn-xs" ' : '';

		$groupLinks = '';

		for ($i = 1; $i <= 10; $i++) {
			$group_link_show = $this->props[sprintf('group_link%1$s_show', $i)];
			$group_link_text = $this->props[sprintf('group_link_text%1$s', $i)];
			$group_link_url = $this->props[sprintf('group_link_url%1$s', $i)];
		
			if( "on" == $group_link_show ){
				$groupLinks .= sprintf('<li class="mb-2"><a href="%1$s"%2$s%3$s target="_blank">%4$s%5$s</a></li>',
					esc_url($group_link_url), $link_as_button, $text_color, $icon, $group_link_text);
			}
		}

		return sprintf( '<ul class="list-unstyled p-0">%1$s</ul>', $groupLinks);
	}
}
new CAWeb_Module_FullWidth_Footer_Group;
?>