<?php

class ET_Builder_Module_Bar_Counters extends ET_Builder_Module {
	function init() {
		$this->name            = esc_html__( 'Bar Counters', 'et_builder' );
		$this->plural          = esc_html__( 'Bar Counters', 'et_builder' );
		$this->slug            = 'et_pb_counters';
		$this->vb_support      = 'on';
		$this->child_slug      = 'et_pb_counter';
		$this->child_item_text = esc_html__( 'Bar Counter', 'et_builder' );

		$this->main_css_element = '%%order_class%%.et_pb_counters';

		$this->settings_modal_toggles = array(
			'general'  => array(
				'toggles' => array(
					'elements' => et_builder_i18n( 'Elements' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'layout' => et_builder_i18n( 'Layout' ),
					'text'   => array(
						'title'    => et_builder_i18n( 'Text' ),
						'priority' => 49,
					),
					'bar'    => esc_html__( 'Bar', 'et_builder' ),
				),
			),
		);

		$this->advanced_fields = array(
			'borders'        => array(
				'default' => array(
					'css' => array(
						'main' => array(
							'border_radii'  => '%%order_class%% .et_pb_counter_container, %%order_class%% .et_pb_counter_amount',
							'border_styles' => '%%order_class%% .et_pb_counter_container',
						),
					),
				),
			),
			'box_shadow'     => array(
				'default' => array(
					'css' => array(
						'main'    => '%%order_class%% .et_pb_counter_container',
						'overlay' => 'inset',
					),
				),
			),
			'fonts'          => array(
				'title'   => array(
					'label' => et_builder_i18n( 'Title' ),
					'css'   => array(
						'main' => "{$this->main_css_element} .et_pb_counter_title",
					),
				),
				'percent' => array(
					'label' => esc_html__( 'Percentage', 'et_builder' ),
					'css'   => array(
						'main'       => "{$this->main_css_element} .et_pb_counter_amount_number",
						'text_align' => "{$this->main_css_element} .et_pb_counter_amount",
					),
				),
			),
			'background'     => array(
				'use_background_color' => 'fields_only',
				'css'                  => array(
					'main' => "{$this->main_css_element} .et_pb_counter_container",
				),
				'options'              => array(
					'background_color' => array(
						'default' => '',
					),
				),
			),
			'margin_padding' => array(
				'draggable_padding' => false,
				'css'               => array(
					'margin'    => "{$this->main_css_element}",
					'padding'   => "{$this->main_css_element} .et_pb_counter_amount",
					'important' => array( 'custom_margin' ),
				),
			),
			'text'           => array(
				'use_background_layout' => true,
				'options'               => array(
					'background_layout' => array(
						'default_on_front' => 'light',
						'hover'            => 'tabs',
					),
				),
			),
			'filters'        => array(
				'css' => array(
					'main' => '%%order_class%%',
				),
			),
			'scroll_effects' => array(
				'grid_support' => 'yes',
			),
			'button'         => false,
		);

		$this->custom_css_fields = array(
			'counter_title'     => array(
				'label'    => esc_html__( 'Counter Title', 'et_builder' ),
				'selector' => '.et_pb_counter_title',
			),
			'counter_container' => array(
				'label'    => esc_html__( 'Counter Container', 'et_builder' ),
				'selector' => '.et_pb_counter_container',
			),
			'counter_amount'    => array(
				'label'    => esc_html__( 'Counter Amount', 'et_builder' ),
				'selector' => '.et_pb_counter_amount',
			),
		);

		$this->help_videos = array(
			array(
				'id'   => '2QLX8Lwr3cs',
				'name' => esc_html__( 'An introduction to the Bar Counter module', 'et_builder' ),
			),
		);
	}

	function get_fields() {
		$fields = array(
			'bar_bg_color'    => array(
				'label'          => esc_html__( 'Bar Background Color', 'et_builder' ),
				'type'           => 'color-alpha',
				'tab_slug'       => 'advanced',
				'toggle_slug'    => 'bar',
				'hover'          => 'tabs',
				'description'    => esc_html__( 'This will change the fill color for the bar.', 'et_builder' ),
				'default'        => et_builder_accent_color(),
				'mobile_options' => true,
				'sticky'         => true,
			),
			'use_percentages' => array(
				'label'            => esc_html__( 'Show Percentage', 'et_builder' ),
				'description'      => esc_html__( 'Turning off percentages will remove the percentage text from within the filled portion of the bar.', 'et_builder' ),
				'type'             => 'yes_no_button',
				'option_category'  => 'configuration',
				'options'          => array(
					'on'  => et_builder_i18n( 'On' ),
					'off' => et_builder_i18n( 'Off' ),
				),
				'toggle_slug'      => 'elements',
				'default_on_front' => 'on',
				'mobile_options'   => true,
				'hover'            => 'tabs',
			),
		);

		return $fields;
	}

	public function get_transition_fields_css_props() {
		$fields = parent::get_transition_fields_css_props();

		$fields['background_layout'] = array( 'color' => '%%order_class%% .et_pb_counter_title' );
		$fields['bar_bg_color']      = array( 'background-color' => '%%order_class%% .et_pb_counter_amount' );

		return $fields;
	}

	function before_render() {
		global $et_pb_counters_settings;

		$multi_view                              = et_pb_multi_view_options( $this );
		$background_image                        = $this->props['background_image'];
		$parallax                                = $this->props['parallax'];
		$parallax_method                         = $this->props['parallax_method'];
		$background_video_mp4                    = $this->props['background_video_mp4'];
		$background_video_webm                   = $this->props['background_video_webm'];
		$background_video_width                  = $this->props['background_video_width'];
		$background_video_height                 = $this->props['background_video_height'];
		$allow_player_pause                      = $this->props['allow_player_pause'];
		$bar_bg_color_values                     = et_pb_responsive_options()->get_property_values( $this->props, 'bar_bg_color' );
		$background_video_pause_outside_viewport = $this->props['background_video_pause_outside_viewport'];
		$use_background_color_gradient           = $this->props['use_background_color_gradient'];

		// Background Color.
		$background_last_edited        = self::$_->array_get( $this->props, 'background_last_edited', '' );
		$background_hover_enabled      = self::$_->array_get( $this->props, 'background__hover_enabled', '' );
		$background_colors             = et_pb_responsive_options()->get_composite_property_values( $this->props, 'background', 'background_color' );
		$background_enable_colors      = et_pb_responsive_options()->get_composite_property_values( $this->props, 'background', 'background_enable_color' );
		$background_color_hover        = et_pb_hover_options()->get_compose_value( 'background_color', 'background', $this->props, '' );
		$background_enable_color_hover = et_pb_hover_options()->get_compose_value( 'background_enable_color', 'background', $this->props, '' );

		// Sticky Element.
		$is_sticky_module = et_pb_sticky_options()->is_sticky_module( $this->props );

		$et_pb_counters_settings = array(
			// Background Color.
			'background_last_edited'                  => $background_last_edited,
			'background__hover_enabled'               => $background_hover_enabled,
			'background_color'                        => $background_colors['desktop'],
			'background_color_tablet'                 => $background_colors['tablet'],
			'background_color_phone'                  => $background_colors['phone'],
			'background_enable_color'                 => $background_enable_colors['desktop'],
			'background_enable_color_tablet'          => $background_enable_colors['tablet'],
			'background_enable_color_phone'           => $background_enable_colors['phone'],
			'background_color_hover'                  => $background_color_hover,
			'background_color__hover'                 => $background_color_hover,
			'background_enable_color__hover'          => $background_enable_color_hover,
			'background_image'                        => $background_image,
			'parallax'                                => $parallax,
			'parallax_method'                         => $parallax_method,
			'background_video_mp4'                    => $background_video_mp4,
			'background_video_webm'                   => $background_video_webm,
			'background_video_width'                  => $background_video_width,
			'background_video_height'                 => $background_video_height,
			'allow_player_pause'                      => $allow_player_pause,
			'bar_bg_color'                            => isset( $bar_bg_color_values['desktop'] ) ? $bar_bg_color_values['desktop'] : '',
			'bar_bg_color_tablet'                     => isset( $bar_bg_color_values['tablet'] ) ? $bar_bg_color_values['tablet'] : '',
			'bar_bg_color_phone'                      => isset( $bar_bg_color_values['phone'] ) ? $bar_bg_color_values['phone'] : '',
			'use_percentages'                         => $multi_view->get_values( 'use_percentages' ),
			'background_video_pause_outside_viewport' => $background_video_pause_outside_viewport,
			'use_background_color_gradient'           => $use_background_color_gradient,
			'is_sticky_module'                        => $is_sticky_module,
		);
	}

	/**
	 * Renders the module output.
	 *
	 * @param  array  $attrs       List of attributes.
	 * @param  string $content     Content being processed.
	 * @param  string $render_slug Slug of module that is used for rendering output.
	 *
	 * @return string
	 */
	public function render( $attrs, $content, $render_slug ) {
		$video_background = $this->video_background();

		// Module classname
		$this->add_classname(
			array(
				'et-waypoint',
			)
		);

		// Background layout class names.
		$background_layout_class_names = et_pb_background_layout_options()->get_background_layout_class( $this->props );
		$this->add_classname( $background_layout_class_names );

		$this->add_classname( $this->get_text_orientation_classname() );

		// Background layout data attributes.
		$data_background_layout = et_pb_background_layout_options()->get_background_layout_attrs( $this->props );

		// Sticky & Hover style rendering.
		$this->generate_styles(
			array(
				'responsive'     => false,
				'render_slug'    => $render_slug,
				'base_attr_name' => 'background_color',
				'css_property'   => 'background-color',
				'selector'       => '%%order_class%% .et_pb_counter_container',
			)
		);

		$this->generate_styles(
			array(
				'responsive'     => false,
				'render_slug'    => $render_slug,
				'base_attr_name' => 'bar_bg_color',
				'css_property'   => 'background-color',
				'selector'       => '%%order_class%% .et_pb_counter_amount',
			)
		);

		$output = sprintf(
			'<ul%3$s class="%2$s"%4$s>
				%1$s
			</ul> <!-- .et_pb_counters -->',
			$this->content,
			$this->module_classname( $render_slug ),
			$this->module_id(),
			et_core_esc_previously( $data_background_layout )
		);

		return $output;
	}
}

new ET_Builder_Module_Bar_Counters();
