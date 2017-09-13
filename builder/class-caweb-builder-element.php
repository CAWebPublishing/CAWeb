<?php

class ET_Builder_CAWeb_Module extends ET_Builder_Module {
  /* 
		This array is an exact copy of the parent variable 
		'et_pb_icon', 'et_pb_group_icon', 'et_pb_scroll_bar_icon' was added to dbl_quote_exception_options array
		$dbl_quote_exception_options = array('et_pb_font_icon', 'et_pb_button_icon', 'et_pb_button_one_icon', 'et_pb_button_two_icon' );
	*/
 	public $dbl_quote_exception_options = array( 'et_pb_icon', 'et_pb_group_icon', 'et_pb_scroll_bar_icon', 
                                              'et_pb_font_icon', 'et_pb_button_one_icon', 'et_pb_button_two_icon', 
                                              'et_pb_button_icon', 'et_pb_content_new' );
 
  
  /* 
		This function is an exact copy of the parent function, except for 
		'icon', 'group_icon', 'scroll_bar_icon' was added to font_icon_ options array
		$font_icon_options = array('font_icon', 'button_icon', 'button_one_icon', 'button_two_icon' );

	*/
  
  /**
	 * Double quote are saved as "%22" in shortcode attributes.
	 * Decode them back into "
	 *
	 * @return void
	 */
	private function _decode_double_quotes() {
		if ( ! isset( $this->shortcode_atts ) ) {
			return;
		}

		$shortcode_attributes = array();
		$font_icon_options = array('icon', 'group_icon', 'scroll_bar_icon', 'font_icon', 'button_icon', 'button_one_icon', 'button_two_icon' );

		foreach ( $this->shortcode_atts as $attribute_key => $attribute_value ) {
			// the icon shortcodes are fine.
			if ( in_array( $attribute_key, $font_icon_options, true ) ) {
				$shortcode_attributes[ $attribute_key ] = $attribute_value;
				// icon attributes must not be str_replaced
				continue;
			}

			// URLs are weird since they can allow non-ascii characters so we escape those separately.
			if ( in_array( $attribute_key, array( 'url', 'button_link', 'button_url' ), true ) ) {
				$shortcode_attributes[ $attribute_key ] = esc_url_raw( $attribute_value );
			} else {
				$shortcode_attributes[ $attribute_key ] = str_replace( array( '%22', '%92', '%91', '%93' ), array( '"', '\\', '&#91;', '&#93;' ), $attribute_value );
			}
		}

		$this->shortcode_atts = $shortcode_attributes;
	}

  
  /* 
		This function is an exact copy of the parent function, except for 
		'et_pb_icon', 'et_pb_group_icon', 'et_pb_scroll_bar_icon' was added to font_icon_options array
		$font_icon_options = array('et_pb_font_icon', 'et_pb_button_icon', 'et_pb_button_one_icon', 'et_pb_button_two_icon' );

	*/
  function render_field( $field ) {
		$classes = array();
		$hidden_field = '';
		$field_el = '';
		$is_custom_color = isset( $field['custom_color'] ) && $field['custom_color'];
		$reset_button_html = '<span class="et-pb-reset-setting"></span>';
		$need_mobile_options = isset( $field['mobile_options'] ) && $field['mobile_options'] ? true : false;
		$only_options = isset( $field['only_options'] ) ? $field['only_options'] : false;

		if ( $need_mobile_options ) {
			$mobile_settings_tabs = et_pb_generate_mobile_options_tabs();
		}

		if ( 0 !== strpos( $field['type'], 'select' ) ) {
			$classes = array( 'regular-text' );
		}

		foreach( $this->get_validation_class_rules() as $rule ) {
			if ( ! empty( $field[ $rule ] ) ) {
				$this->validation_in_use = true;
				$classes[] = $rule;
			}
		}

		if ( isset( $field['validate_unit'] ) && $field['validate_unit'] ) {
			$classes[] = 'et-pb-validate-unit';
		}

		if ( ! empty( $field['class'] ) ) {
			if ( is_string( $field['class'] ) ) {
				$field['class'] = array( $field['class'] );
			}

			$classes = array_merge( $classes, $field['class'] );
		}
		$field['class'] = implode(' ', $classes );

		$field_name = $this->get_field_name( $field );

		$field['id'] = ! empty( $field['id'] ) ? $field['id'] : $field_name;

		$field['name'] = $field_name;

		if ( isset( $this->type ) && 'child' === $this->type ) {
			$field_name = "data.{$field_name}";
		}

		$default = isset( $field['default'] ) ? $field['default'] : '';

		if ( 'font' === $field['type'] ) {
			$default = '' === $default ? '||||' : $default;
		}

		$font_icon_options = array('et_pb_icon', 'et_pb_group_icon', 'et_pb_scroll_bar_icon',
                               'et_pb_font_icon', 'et_pb_button_icon', 'et_pb_button_one_icon', 'et_pb_button_two_icon' );

		if ( in_array( $field_name, $font_icon_options ) ) {
			$field_value = esc_attr( $field_name );
		} else {
			$field_value = esc_attr( $field_name ) . '.replace(/%91/g, "[").replace(/%93/g, "]").replace(/%22/g, "\"")';
		}

		$value_html = ' value="<%%- typeof( %1$s ) !== \'undefined\' ?  %2$s : \'%3$s\' %%>" ';
		$value = sprintf(
			$value_html,
			esc_attr( $field_name ),
			$field_value,
			$default
		);

		$attributes = '';
		if ( ! empty( $field['attributes'] ) ) {
			$this->process_html_attributes( $field, $attributes );
		}

		if ( ! empty( $field['affects'] ) ) {
			$field['class'] .= ' et-pb-affects';
			$attributes .= sprintf( ' data-affects="%s"', esc_attr( implode( ', ', $field['affects'] ) ) );
		}

		if ( 'font' === $field['type'] ) {
			$field['class'] .= ' et-pb-font-select';
		}

		if ( in_array( $field['type'], array( 'font', 'hidden', 'multiple_checkboxes', 'select_with_option_groups', 'select_animation' ) ) && ! $only_options ) {
			$hidden_field = sprintf(
				'<input type="hidden" name="%1$s" id="%2$s" class="et-pb-main-setting %3$s" data-default="%4$s" %5$s %6$s/>',
				esc_attr( $field['name'] ),
				esc_attr( $field['id'] ),
				esc_attr( $field['class'] ),
				esc_attr( $default ),
				$value,
				$attributes
			);

			if ( 'select_with_option_groups' === $field['type'] ) {
				// Since we are using a hidden field to manage the value, we need to clear the data-affects attribute so that
				// it doesn't appear on both the `$field` AND the hidden field. This should probably be done for all of these
				// field types but don't want to risk breaking anything :-/
				$attributes = preg_replace( '/data-affects="[\w\s-,]*"/', 'data-affects=""', $attributes );
			}
		}

		foreach ( $this->get_validation_attr_rules() as $rule ) {
			if ( ! empty( $field[ $rule ] ) ) {
				$this->validation_in_use = true;
				$attributes .= ' data-rule-' . esc_attr( $rule ). '="' . esc_attr( $field[ $rule ] ) . '"';
			}
		}

		if ( isset( $field['before'] ) && ! $only_options ) {
			$field_el .= $this->render_field_before_after_element( $field['before'] );
		}

		switch( $field['type'] ) {
			case 'warning':
				$field_el .= sprintf(
					'<div class="et-pb-option-warning" data-name="%2$s" data-display_if="%3$s">%1$s</div>',
					html_entity_decode( esc_html( $field['message'] ) ),
					esc_attr( $field['name'] ),
					esc_attr( $field['display_if'] )
				);
				break;
			case 'tiny_mce':
				if ( ! empty( $field['tiny_mce_html_mode'] ) ) {
					$field['class'] .= ' html_mode';
				}

				$main_content_property_name = $main_content_field_name = 'et_pb_content_new';

				if ( isset( $this->type ) && 'child' === $this->type ) {
					$main_content_property_name = "data.{$main_content_property_name}";
				}

				$field_el .= sprintf(
					'<div id="%1$s"><%%= typeof( %2$s ) !== \'undefined\' ? %2$s : \'\' %%></div>',
					esc_attr( $main_content_field_name ),
					esc_html( $main_content_property_name )
				);

				break;
			case 'textarea':
			case 'custom_css':
			case 'options_list':
				$field_custom_value = esc_html( $field_name );
				if ( in_array( $field['type'], array( 'custom_css', 'options_list' ) ) ) {
					$field_custom_value .= '.replace( /\|\|/g, "\n" ).replace( /%22/g, "&quot;" ).replace( /%92/g, "\\\" )';
					$field_custom_value .= '.replace( /%91/g, "&#91;" ).replace( /%93/g, "&#93;" )';
				}

				if ( in_array( $field_name, array( 'et_pb_raw_content', 'et_pb_custom_message' ) ) ) {
					$field_custom_value = sprintf( '_.unescape( %1$s )', $field_custom_value );
				}

				$field_el .= sprintf(
					'<textarea class="et-pb-main-setting large-text code%1$s" rows="4" cols="50" id="%2$s"><%%= typeof( %3$s ) !== \'undefined\' ? %4$s : \'\' %%></textarea>',
					esc_attr( $field['class'] ),
					esc_attr( $field['id'] ),
					esc_html( $field_name ),
					et_esc_previously( $field_custom_value )
				);

				if ( 'options_list' === $field['type'] ) {
					$radio_check = '';
					$row_class   = 'et_options_list_row';

					if ( isset( $field['checkbox'] ) && true === $field['checkbox'] ) {
						$radio_check = '<a href="#" class="et_options_list_check"></a>';
						$row_class   .= ' et_options_list_row_checkbox';
					}

					if ( isset( $field['radio'] ) && true === $field['radio'] ) {
						$radio_check = '<a href="#" class="et_options_list_check"></a>';
						$row_class   .= ' et_options_list_row_radio';
					}

					$field_el = sprintf(
						'<div class="et_options_list">
							<div class="%5$s">
								%6$s
								<input type="text" />
								<div class="et_options_list_actions">
									<a href="#" class="et_options_list_move"></a>
									<a href="#" class="et_options_list_copy"></a>
									<a href="#" class="et_options_list_remove"></a>
								</div>
							</div>
							<textarea class="et-pb-main-setting large-text code%1$s" rows="4" cols="50" id="%2$s"><%%= typeof( %3$s ) !== \'undefined\' ? %4$s : \'\' %%></textarea>
							<a href="#" class="et-pb-add-sortable-option"><span>%7$s</span></a>
						</div>',
						esc_attr( $field['class'] ),
						esc_attr( $field['id'] ),
						esc_html( $field_name ),
						et_esc_previously( $field_custom_value ),
						esc_attr( $row_class ),
						$radio_check,
						esc_html__( 'Add New Item', 'et_builder' )
					);
				}
				break;
			case 'conditional_logic':
				$field_custom_value = esc_html( $field_name );
				$field_custom_value .= '.replace( /\|\|/g, "\n" ).replace( /%22/g, "&quot;" ).replace( /%92/g, "\\\" )';
				$field_custom_value .= '.replace( /%91/g, "&#91;" ).replace( /%93/g, "&#93;" )';

				$field_selects = sprintf(
					'<select class="et_conditional_logic_field"></select>
					<select class="et_conditional_logic_condition">
						<option value="is">%1$s</option>
						<option value="is not">%2$s</option>
						<option value="is greater">%3$s</option>
						<option value="is less">%4$s</option>
						<option value="contains">%5$s</option>
						<option value="does not contain">%6$s</option>
						<option value="is empty">%7$s</option>
						<option value="is not empty">%8$s</option>
					</select>',
					esc_html__( 'equals', 'et_builder' ),
					esc_html__( 'does not equal', 'et_builder' ),
					esc_html__( 'is greater than', 'et_builder' ),
					esc_html__( 'is less than', 'et_builder' ),
					esc_html__( 'contains', 'et_builder' ),
					esc_html__( 'does not contain', 'et_builder' ),
					esc_html__( 'is empty', 'et_builder' ),
					esc_html__( 'is not empty', 'et_builder' )
				);

				$field_el = sprintf(
					'<div class="et_options_list et_conditional_logic" data-checked="%6$s" data-unchecked="%7$s">
						<div class="et_options_list_row">
							%5$s
							<a href="#" class="et_options_list_remove"></a>
						</div>
						<textarea class="et-pb-main-setting large-text code%1$s" rows="4" cols="50" id="%2$s"><%%= typeof( %3$s ) !== \'undefined\' ? %4$s : \'\' %%></textarea>
						<a href="#" class="et-pb-add-sortable-option"><span>%8$s</span></a>
					</div>',
					esc_attr( $field['class'] ),
					esc_attr( $field['id'] ),
					esc_html( $field_name ),
					et_esc_previously( $field_custom_value ),
					$field_selects,
					esc_html__( 'checked', 'et_builder' ),
					esc_html__( 'not checked', 'et_builder' ),
					esc_html__( 'Add New Rule', 'et_builder' )
				);
				break;
			case 'select':
			case 'yes_no_button':
			case 'font':
			case 'select_with_option_groups':
				if ( 'font' === $field['type'] ) {
					$field['id']    .= '_select';
					$field_name     .= '_select';
					$field['class'] .= ' et-pb-helper-field';
					$field['options'] = array();
				}

				$button_options = array();

				if ( 'yes_no_button' === $field['type'] ) {
					$button_options = isset( $field['button_options'] ) ? $field['button_options'] : array();
				}

				if ( isset( $field['default'] ) ) {
					$attributes .= sprintf( ' data-default="%1$s"', esc_attr( $field['default'] ) );
				}

				$select = $this->render_select( $field_name, $field['options'], $field['id'], $field['class'], $attributes, $field['type'], $button_options, $default, $only_options );

				if ( $only_options ) {
					$field_el = $select;
				} else {
					$field_el .= $select;
				}

				if ( 'font' === $field['type'] ) {
					$font_style_button_html = sprintf(
						'<%%= window.et_builder.options_template_output("font_buttons",%1$s) %%>',
						json_encode( array( 'bold', 'italic', 'uppercase', 'underline' ) )
					);

					$field_el .= sprintf(
						'<div class="et_builder_font_styles mce-toolbar">
							%1$s
						</div> <!-- .et_builder_font_styles -->',
						$font_style_button_html
					);

					$field_el .= $hidden_field;
				}

				if ( 'select_with_option_groups' === $field['type'] ) {
					$field_el .= $hidden_field;
				}

				break;
			case 'select_animation':
				$options           = $field['options'];
				$animation_buttons = '';

				foreach ( $options as $option_name => $option_title ) {
					$animation_buttons .= sprintf(
						'<div class="et_animation_button">
							<a href="#">
								<span class="et_animation_button_title" data-value="%1$s">%2$s</span>
								<span class="et_animation_button_icon">%3$s</span>
							</a>
						</div>',
						esc_attr( $option_name ),
						esc_html( $option_title ),
						$this->get_icon( "animation-{$option_name}" )
					);
				}

				$field_el = sprintf(
					'<div class="et_select_animation et-pb-main-setting" data-default="none">
						%1$s
						%2$s
					</div>',
					$animation_buttons,
					$hidden_field
				);
				break;
			case 'color':
			case 'color-alpha':
				$field['default'] = ! empty( $field['default'] ) ? $field['default'] : '';

				if ( $is_custom_color && ( ! isset( $field['default'] ) || '' === $field['default'] ) ) {
					$field['default'] = '';
				}

				$default = ! empty( $field['default'] ) && ! $is_custom_color ? sprintf( ' data-default-color="%1$s" data-default="%1$s"', esc_attr( $field['default'] ) ) : '';

				$color_id = sprintf( ' id="%1$s"', esc_attr( $field['id'] ) );
				$color_value_html = '<%%- typeof( %1$s ) !== \'undefined\' && %1$s !== \'\' ? %1$s : \'%2$s\' %%>';
				$main_color_value = sprintf( $color_value_html, esc_attr( $field_name ), $field['default'] );
				$hidden_color_value = sprintf( $color_value_html, esc_attr( $field_name ), '' );
				$has_preview = isset( $field['has_preview'] ) && $field['has_preview'];

				$field_el = sprintf(
					'<input%1$s class="et-pb-color-picker-hex%5$s%8$s%10$s" type="text"%6$s%7$s placeholder="%9$s" data-selected-value="%2$s" value="%2$s"%3$s />
					%4$s',
					( ! $is_custom_color || $has_preview ? $color_id : '' ),
					$main_color_value,
					$default,
					( ! empty( $field['additional_code'] ) ? $field['additional_code'] : '' ),
					( 'color-alpha' === $field['type'] ? ' et-pb-color-picker-hex-alpha' : '' ),
					( 'color-alpha' === $field['type'] ? ' data-alpha="true"' : '' ),
					( 'color' === $field['type'] ? ' maxlength="7"' : '' ),
					( ! $is_custom_color ? ' et-pb-main-setting' : '' ),
					esc_attr__( 'Hex Value', 'et_builder' ),
					$has_preview ? esc_attr( ' et-pb-color-picker-hex-has-preview' ) : ''
				);

				if ( $is_custom_color && ! $has_preview ) {
					$field_el = sprintf(
						'<span class="et-pb-custom-color-button et-pb-choose-custom-color-button"><span>%1$s</span></span>
						<div class="et-pb-custom-color-container et_pb_hidden">
							%2$s
							<input%3$s class="et-pb-main-setting et-pb-custom-color-picker" type="hidden" value="%4$s" %6$s />
							%5$s
						</div> <!-- .et-pb-custom-color-container -->',
						esc_html__( 'Choose Custom Color', 'et_builder' ),
						$field_el,
						$color_id,
						$hidden_color_value,
						$reset_button_html,
						$attributes
					);
				}
				break;
			case 'upload':
				$field_data_type = ! empty( $field['data_type'] ) ? $field['data_type'] : 'image';
				$field['upload_button_text'] = ! empty( $field['upload_button_text'] ) ? $field['upload_button_text'] : esc_attr__( 'Upload', 'et_builder' );
				$field['choose_text'] = ! empty( $field['choose_text'] ) ? $field['choose_text'] : esc_attr__( 'Choose image', 'et_builder' );
				$field['update_text'] = ! empty( $field['update_text'] ) ? $field['update_text'] : esc_attr__( 'Set image', 'et_builder' );
				$field['class'] = ! empty( $field['class'] ) ? ' ' . $field['class'] : '';
				$field_additional_button = ! empty( $field['additional_button'] ) ? "\n\t\t\t\t\t" . $field['additional_button'] : '';
				$field_el .= sprintf(
					'<input id="%1$s" type="text" class="et-pb-main-setting regular-text et-pb-upload-field%8$s" value="<%%- typeof( %2$s ) !== \'undefined\' ? %2$s : \'\' %%>" %9$s />
					<input type="button" class="button button-upload et-pb-upload-button" value="%3$s" data-choose="%4$s" data-update="%5$s" data-type="%6$s" />%7$s',
					esc_attr( $field['id'] ),
					esc_attr( $field_name ),
					esc_attr( $field['upload_button_text'] ),
					esc_attr( $field['choose_text'] ),
					esc_attr( $field['update_text'] ),
					esc_attr( $field_data_type ),
					$field_additional_button,
					esc_attr( $field['class'] ),
					$attributes
				);
				break;
			case 'checkbox':
				$field_el .= sprintf(
					'<input type="checkbox" name="%1$s" id="%2$s" class="et-pb-main-setting" value="on" <%%- typeof( %1$s ) !==  \'undefined\' && %1$s == \'on\' ? checked="checked" : "" %%>>',
					esc_attr( $field['name'] ),
					esc_attr( $field['id'] )
				);
				break;
			case 'multiple_checkboxes' :
				$checkboxes_set = '<div class="et_pb_checkboxes_wrapper">';

				if ( ! empty( $field['options'] ) ) {
					foreach( $field['options'] as $option_value => $option_label ) {
						$checkboxes_set .= sprintf(
							'%3$s<label><input type="checkbox" class="et_pb_checkbox_%1$s" value="%1$s"> %2$s</label><br/>',
							esc_attr( $option_value ),
							esc_html( $option_label ),
							"\n\t\t\t\t\t"
						);
					}
				}

				// additional option for disable_on option for backward compatibility
				if ( isset( $field['additional_att'] ) && 'disable_on' === $field['additional_att'] ) {
					$et_pb_disabled_value = sprintf(
						$value_html,
						esc_attr( 'et_pb_disabled' ),
						esc_attr( 'et_pb_disabled' ),
						''
					);

					$checkboxes_set .= sprintf(
						'<input type="hidden" id="et_pb_disabled" class="et_pb_disabled_option"%1$s>',
						$et_pb_disabled_value
					);
				}

				$field_el .= $checkboxes_set . $hidden_field . '</div>';
				break;
			case 'hidden':
				$field_el .= $hidden_field;
				break;
			case 'custom_margin':
			case 'custom_padding':

				$custom_margin_class = "";

				// Fill the array of values for tablet and phone
				if ( $need_mobile_options ) {
					$mobile_values_array = array();
					$has_saved_value = array();
					$mobile_desktop_class = ' et_pb_setting_mobile et_pb_setting_mobile_desktop et_pb_setting_mobile_active';
					$mobile_desktop_data = ' data-device="desktop"';

					foreach( array( 'tablet', 'phone' ) as $device ) {
						$mobile_values_array[] = sprintf(
							$value_html,
							esc_attr( $field_name . '_' . $device ),
							esc_attr( $field_name . '_' . $device ),
							$default
						);
						$has_saved_value[] = sprintf( ' data-has_saved_value="<%%- typeof( %1$s ) !== \'undefined\' ? \'yes\' : \'no\' %%>" ',
							esc_attr( $field_name . '_' . $device )
						);
					}

					$value_last_edited = sprintf(
						$value_html,
						esc_attr( $field_name . '_last_edited' ),
						esc_attr( $field_name . '_last_edited' ),
						''
					);
					// additional field to save the last edited field which will be opened automatically
					$additional_mobile_fields = sprintf( '<input id="%1$s" type="hidden" class="et_pb_mobile_last_edited_field"%2$s>',
						esc_attr( $field_name . '_last_edited' ),
						$value_last_edited
					);
				}

				// Add auto_important class to field which automatically append !important tag
				if ( isset( $this->advanced_options['custom_margin_padding']['css']['important'] ) ) {
					$custom_margin_class .= " auto_important";
				}

				$single_fields_settings = array(
					'side' => '',
					'label' => '',
					'need_mobile' => $need_mobile_options ? 'need_mobile' : '',
					'class' => esc_attr( $custom_margin_class ),
				);

				$field_el .= sprintf(
					'<div class="et_custom_margin_padding">
						%6$s
						%7$s
						%8$s
						%9$s
						<input type="hidden" name="%1$s" data-default="%5$s" id="%2$s" class="et_custom_margin_main et-pb-main-setting%11$s"%12$s %3$s %4$s/>
						%10$s
						%13$s
					</div> <!-- .et_custom_margin_padding -->',
					esc_attr( $field['name'] ),
					esc_attr( $field['id'] ),
					$value,
					$attributes,
					esc_attr( $default ), // #5
					! isset( $field['sides'] ) || ( ! empty( $field['sides'] ) && in_array( 'top', $field['sides'] ) ) ?
						sprintf( '<%%= window.et_builder.options_template_output("padding",%1$s) %%>',
							json_encode( array_merge( $single_fields_settings, array(
								'side' => 'top',
								'label' => esc_html__( 'Top', 'et_builder' ),
							) ) )
						) : '',
					! isset( $field['sides'] ) || ( ! empty( $field['sides'] ) && in_array( 'right', $field['sides'] ) ) ?
						sprintf( '<%%= window.et_builder.options_template_output("padding",%1$s) %%>',
							json_encode( array_merge( $single_fields_settings, array(
								'side' => 'right',
								'label' => esc_html__( 'Right', 'et_builder' ),
							) ) )
						) : '',
					! isset( $field['sides'] ) || ( ! empty( $field['sides'] ) && in_array( 'bottom', $field['sides'] ) ) ?
						sprintf( '<%%= window.et_builder.options_template_output("padding",%1$s) %%>',
							json_encode( array_merge( $single_fields_settings, array(
								'side' => 'bottom',
								'label' => esc_html__( 'Bottom', 'et_builder' ),
							) ) )
						) : '',
					! isset( $field['sides'] ) || ( ! empty( $field['sides'] ) && in_array( 'left', $field['sides'] ) ) ?
						sprintf( '<%%= window.et_builder.options_template_output("padding",%1$s) %%>',
							json_encode( array_merge( $single_fields_settings, array(
								'side' => 'left',
								'label' => esc_html__( 'Left', 'et_builder' ),
							) ) )
						) : '',
					$need_mobile_options ?
						sprintf(
							'<input type="hidden" name="%1$s_tablet" data-default="%4$s" id="%2$s_tablet" class="et-pb-main-setting et_custom_margin_main et_pb_setting_mobile et_pb_setting_mobile_tablet" data-device="tablet" %5$s %3$s %7$s/>
							<input type="hidden" name="%1$s_phone" data-default="%4$s" id="%2$s_phone" class="et-pb-main-setting et_custom_margin_main et_pb_setting_mobile et_pb_setting_mobile_phone" data-device="phone" %6$s %3$s %8$s/>',
							esc_attr( $field['name'] ),
							esc_attr( $field['id'] ),
							$attributes,
							esc_attr( $default ),
							$mobile_values_array[0],
							$mobile_values_array[1],
							$has_saved_value[0],
							$has_saved_value[1]
						)
						: '', // #10
					$need_mobile_options ? esc_attr( $mobile_desktop_class ) : '',
					$need_mobile_options ? $mobile_desktop_data : '',
					$need_mobile_options ? $additional_mobile_fields : '' // #13
				);
				break;
			case 'text':
			case 'number':
			case 'date_picker':
			case 'range':
			default:
				$validate_number = isset( $field['number_validation'] ) && $field['number_validation'] ? true : false;

				if ( 'date_picker' === $field['type'] ) {
					$field['class'] .= ' et-pb-date-time-picker';
				}

				$field['class'] .= 'range' === $field['type'] ? ' et-pb-range-input' : ' et-pb-main-setting';

				$type = in_array( $field['type'], array( 'text', 'number' ) ) ? $field['type'] : 'text';

				$field_el .= sprintf(
					'<input id="%1$s" type="%11$s" class="%2$s%5$s%9$s"%6$s%3$s%8$s%10$s %4$s/>%7$s',
					esc_attr( $field['id'] ),
					esc_attr( $field['class'] ),
					$value,
					$attributes,
					( $validate_number ? ' et-validate-number' : '' ),
					( $validate_number ? ' maxlength="3"' : '' ),
					( ! empty( $field['additional_button'] ) ? $field['additional_button'] : '' ),
					( '' !== $default
						? sprintf( ' data-default="%1$s"', esc_attr( $default ) )
						: ''
					),
					$need_mobile_options ? ' et_pb_setting_mobile et_pb_setting_mobile_active et_pb_setting_mobile_desktop' : '',
					$need_mobile_options ? ' data-device="desktop"' : '',
					$type
				);

				// generate additional fields for mobile settings switcher if needed
				if ( $need_mobile_options ) {
					$additional_fields = '';

					foreach( array( 'tablet', 'phone' ) as $device_type ) {
						$value_mobile = sprintf(
							$value_html,
							esc_attr( $field_name . '_' . $device_type ),
							esc_attr( $field_name . '_' . $device_type ),
							$default
						);
						// additional data attribute to handle default values for the responsive options
						$has_saved_value = sprintf( ' data-has_saved_value="<%%- typeof( %1$s ) !== \'undefined\' ? \'yes\' : \'no\' %%>" ',
							esc_attr( $field_name . '_' . $device_type )
						);

						$additional_fields .= sprintf( '<input id="%2$s" type="%11$s" class="%3$s%5$s et_pb_setting_mobile et_pb_setting_mobile_%9$s"%6$s%8$s%1$s data-device="%9$s" %4$s%10$s/>%7$s',
							$value_mobile,
							esc_attr( $field['id'] ) . '_' . $device_type,
							esc_attr( $field['class'] ),
							$attributes,
							( $validate_number ? ' et-validate-number' : '' ), // #5
							( $validate_number ? ' maxlength="3"' : '' ),
							( ! empty( $field['additional_button'] ) ? $field['additional_button'] : '' ),
							( '' !== $default
								? sprintf( ' data-default="%1$s"', esc_attr( $default ) )
								: ''
							),
							esc_attr( $device_type ),
							$has_saved_value, // #10,
							$type
						);
					}

					$value_last_edited = sprintf(
						$value_html,
						esc_attr( $field_name . '_last_edited' ),
						esc_attr( $field_name . '_last_edited' ),
						''
					);
					// additional field to save the last edited field which will be opened automatically
					$additional_fields .= sprintf( '<input id="%1$s" type="hidden" class="et_pb_mobile_last_edited_field"%2$s>',
						esc_attr( $field_name . '_last_edited' ),
						$value_last_edited
					);
				}

				if ( 'range' === $field['type'] ) {
					$value = sprintf(
						$value_html,
						esc_attr( $field_name ),
						esc_attr( sprintf( 'parseFloat( %1$s )', $field_name ) ),
						( '' !== $default ? floatval( $default ) : '' )
					);
					$fixed_range = isset($field['fixed_range']) && $field['fixed_range'];

					$range_settings_html = '';
					$range_properties = apply_filters( 'et_builder_range_properties', array( 'min', 'max', 'step' ) );
					foreach ( $range_properties as $property ) {
						if ( isset( $field['range_settings'][ $property ] ) ) {
							$range_settings_html .= sprintf( ' %2$s="%1$s"',
								esc_attr( $field['range_settings'][ $property ] ),
								esc_html( $property )
							);
						}
					}

					$range_el = sprintf(
						'<input type="range" class="et-pb-main-setting et-pb-range%4$s%6$s" data-default="%2$s"%1$s%3$s%5$s />',
						$value,
						esc_attr( $default ),
						$range_settings_html,
						$need_mobile_options ? ' et_pb_setting_mobile et_pb_setting_mobile_desktop et_pb_setting_mobile_active' : '',
						$need_mobile_options ? ' data-device="desktop"' : '',
						$fixed_range ? ' et-pb-fixed-range' : ''
					);

					if ( $need_mobile_options ) {
						foreach( array( 'tablet', 'phone' ) as $device_type ) {
							// additional data attribute to handle default values for the responsive options
							$has_saved_value = sprintf( ' data-has_saved_value="<%%- typeof( %1$s ) !== \'undefined\' ? \'yes\' : \'no\' %%>" ',
								esc_attr( $field_name . '_' . $device_type )
							);
							$value_mobile_range = sprintf(
								$value_html,
								esc_attr( $field_name . '_' . $device_type ),
								esc_attr( sprintf( 'parseFloat( %1$s )', $field_name . '_' . $device_type ) ),
								( '' !== $default ? floatval( $default ) : '' )
							);
							$range_el .= sprintf(
								'<input type="range" class="et-pb-main-setting et-pb-range et_pb_setting_mobile et_pb_setting_mobile_%3$s%6$s" data-default="%1$s"%4$s%2$s data-device="%3$s"%5$s/>',
								esc_attr( $default ),
								$range_settings_html,
								esc_attr( $device_type ),
								$value_mobile_range,
								$has_saved_value,
								$fixed_range ? ' et-pb-fixed-range' : ''
							);
						}
					}

					$field_el = $range_el . "\n" . $field_el;
				}

				if ( $need_mobile_options ) {
					$field_el = $field_el . $additional_fields;
				}

				break;
		}

		if ( isset( $field['has_preview'] ) && $field['has_preview'] ) {
			$field_el = sprintf(
				'<div class="et-pb-option-preview et-pb-option-preview--empty">
					<button class="et-pb-option-preview-button et-pb-option-preview-button--add">
						%1$s
					</button>
					<button class="et-pb-option-preview-button et-pb-option-preview-button--edit">
						%2$s
					</button>
					<button class="et-pb-option-preview-button et-pb-option-preview-button--delete">
						%3$s
					</button>
				</div>%4$s',
				$this->get_icon( 'add' ),
				$this->get_icon( 'setting' ),
				$this->get_icon( 'delete' ),
				$field_el
			);
		}

		if ( $need_mobile_options ) {
			$field_el = $mobile_settings_tabs . "\n" . $field_el;
			$field_el .= '<span class="et-pb-mobile-settings-toggle"></span>';
		}

		if ( isset( $field['type'] ) && isset( $field['tab_slug'] ) && 'advanced' === $field['tab_slug'] && ! $is_custom_color ) {
			$field_el .= $reset_button_html;
		}

		if ( isset( $field['after'] ) && ! $only_options ) {
			$field_el .= $this->render_field_before_after_element( $field['after'] );
		}

		return "\t" . $field_el;
	}
  
  
}
?>