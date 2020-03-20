<?php 

// Standard Version
class CAWeb_Module_Section_Footer extends ET_Builder_CAWeb_Module {
    public $slug = 'et_pb_ca_section_footer';
    public $vb_support = 'on';

    function init() {
        $this->name = esc_html__('Section - Footer', 'et_builder');

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
		);

		$design_fields = array(
			'section_background_color' => array(
				'label'             => esc_html__( 'Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
				'tab_slug'          => 'advanced',
				'toggle_slug'       => 'style',
			),
		);

		$advanced_fields = array(
			'module_id' => array(
				'label'           => esc_html__('CSS ID', 'et_builder'),
				'type'            => 'text',
				'option_category' => 'configuration',
				'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'classes',
			),
			'module_class' => array(
				'label'           => esc_html__('CSS Class', 'et_builder'),
				'type'            => 'text',
				'option_category' => 'configuration',
				'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'classes',
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
        $section_bg_color = $this->props['section_background_color'];

		$content = $this->content;

		$this->add_classname('section');
		$class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

		$section_bg_color = ! empty( $section_bg_color ) ? sprintf(' style="background: %1$s" ', $section_bg_color) : '';

		$output = sprintf( '<div%1$s%2$s%3$s>%4$s</div>', $this->module_id(), $class, $section_bg_color, $content );

		return $output;
    }
}
new CAWeb_Module_Section_Footer;

// Fullwidth Version
class CAWeb_Module_FullWidth_Section_Footer extends ET_Builder_CAWeb_Module {
		public $slug = 'et_pb_ca_fullwidth_section_footer';
        public $vb_support = 'on';

	function init() {
		$this->name = esc_html__('FullWidth Section - Footer', 'et_builder');
		$this->fullwidth = true;

		$this->child_slug      = 'et_pb_ca_section_fullwidth_footer_group';
		$this->child_item_text = esc_html__( 'Group', 'et_builder' );

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(),
			),
			'advanced' => array(
				'toggles' => array(
					'style' => esc_html__( 'Style', 'et_builder' ),
					'text'  => array(
						'title'    => esc_html__( 'Text', 'et_builder' ),
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
		);

		$design_fields = array(
			'section_background_color' => array(
				'label'             => esc_html__( 'Background Color', 'et_builder' ),
				'type'              => 'color-alpha',
				'custom_color'      => true,
				'description'       => esc_html__( 'Here you can define a custom background color for the section.', 'et_builder' ),
				'tab_slug'          => 'advanced',
				'toggle_slug'       => 'style',
			),
		);

		$advanced_fields = array(
			'module_id' => array(
				'label'           => esc_html__('CSS ID', 'et_builder'),
				'type'            => 'text',
				'option_category' => 'configuration',
				'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'classes',
			),
			'module_class' => array(
				'label'           => esc_html__('CSS Class', 'et_builder'),
				'type'            => 'text',
				'option_category' => 'configuration',
				'tab_slug'        => 'custom_css',
				'toggle_slug'     => 'classes',
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

		return array_merge( $general_fields, $design_fields, $advanced_fields );
	}
	function render($unprocessed_props, $content = null, $render_slug) {
		$section_bg_color = $this->props['section_background_color'];

		$content = $this->content;

		$this->add_classname('section');
		$class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

		$section_bg_color = ! empty( $section_bg_color ) ? sprintf(' style="background: %1$s" ', $section_bg_color) : '';

		$output = sprintf( '<div%1$s%2$s%3$s>%4$s</div>', $this->module_id(), $class, $section_bg_color, $content );

		return $output;
	}
}
new CAWeb_Module_FullWidth_Section_Footer;
?>
