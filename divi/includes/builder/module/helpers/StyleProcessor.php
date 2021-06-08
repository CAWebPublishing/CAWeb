<?php
/**
 * Style Processor
 *
 * @package     Divi
 * @sub-package Builder
 * @since 4.6.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

// Include dependency for ResponsiveOptions.
if ( ! function_exists( 'et_pb_responsive_options' ) ) {
	require_once 'ResponsiveOptions.php';
}

/**
 * Icon Font helper methods.
 *
 * @since 4.6.0
 *
 * Class ET_Builder_Module_Helper_Style_Processor
 */
class ET_Builder_Module_Helper_Style_Processor {
	/**
	 * Custom `generate_styles()` processor for responsive, hover, and sticky styles of `icon_font_size`
	 * attributes which sets right property value of font icon in accordion/toggle title.
	 *
	 * @since 4.6.0
	 *
	 * @used-by ET_Builder_Module_Accordion->render()
	 * @used-by ET_Builder_Module_Toggle->render()
	 *
	 * @param string       $selector     CSS Selector.
	 * @param string|array $option_value Option value.
	 * @param array        $args         Arguments.
	 * @param string       $option_type  Option type (responsive|sticky|hover).
	 */
	public static function process_toggle_title_icon_font_size( $selector, $option_value, $args, $option_type ) {
		$icon_font_size_default = '16px';  // Default toggle icon size.

		if ( 'responsive' === $option_type ) {
			$icon_font_size_right_values = array();

			foreach ( $option_value as $device => $value ) {
				$icon_font_size_active = isset( $option_value[ $device ] ) ? $option_value[ $device ] : 0;
				if ( ! empty( $icon_font_size_active ) && $icon_font_size_active !== $icon_font_size_default ) {
					$icon_font_size_active_int  = (int) $icon_font_size_active;
					$icon_font_size_active_unit = str_replace( $icon_font_size_active_int, '', $icon_font_size_active );
					$icon_font_size_active_diff = (int) $icon_font_size_default - $icon_font_size_active_int;

					if ( 0 !== $icon_font_size_active_diff ) {
						// 2 is representation of left & right sides.
						$icon_font_size_right_values[ $device ] = round( $icon_font_size_active_diff / 2 ) . $icon_font_size_active_unit;
					}
				}
			}

			// Icon Font Size.
			et_pb_responsive_options()->generate_responsive_css(
				$option_value,
				$selector,
				$args['css_property'],
				$args['render_slug']
			);

			// Right property.
			et_pb_responsive_options()->generate_responsive_css(
				$icon_font_size_right_values,
				$selector,
				'right',
				$args['render_slug']
			);
		} elseif ( in_array( $option_type, array( 'sticky', 'hover' ), true ) ) {
			$helper     = 'sticky' === $option_type ? et_pb_sticky_options() : et_pb_hover_options();
			$is_enabled = $helper->is_enabled( $args['base_attr_name'], $args['attrs'] );

			if ( $is_enabled && $option_value !== $icon_font_size_default && '' !== $option_value ) {
					$icon_font_size_mode_int  = (int) $option_value;
					$icon_font_size_mode_unit = str_replace( $icon_font_size_mode_int, '', $option_value );
					$icon_font_size_mode_diff = (int) $icon_font_size_default - $icon_font_size_mode_int;

					// Icon Font Size.
					ET_Builder_Element::set_style(
						$args['render_slug'],
						array(
							'selector'    => $selector,
							'declaration' => sprintf(
								'font-size:%1$s;',
								esc_html( $option_value )
							),
						)
					);

				if ( 0 !== $icon_font_size_mode_diff ) {
					// 2 is representation of left & right sides.
					$icon_font_size_right_mode = round( $icon_font_size_mode_diff / 2 ) . $icon_font_size_mode_unit;

					// Right property.
					ET_Builder_Element::set_style(
						$args['render_slug'],
						array(
							'selector'    => $selector,
							'declaration' => sprintf(
								'right:%1$s;',
								esc_html( $icon_font_size_right_mode )
							),
						)
					);
				}
			}
		}
	}

	/**
	 * Custom `generate_styles()` processor for responsive, hover, and sticky styles of
	 * `icon_font_size` attributes which sets css properties for social media follow's icon and
	 * its dimension.
	 *
	 * @since 4.6.0
	 *
	 * @used-by ET_Builder_Module_Social_Media_Follow->render()
	 * @used-by ET_Builder_Module_Social_Media_Follow_Item->render()
	 *
	 * @param string       $selector     CSS Selector.
	 * @param string|array $option_value Option value.
	 * @param array        $args         Arguments.
	 * @param string       $option_type  Option type (responsive|sticky|hover).
	 */
	public static function process_social_media_icon_font_size( $selector, $option_value, $args, $option_type ) {
		if ( 'responsive' === $option_type ) {
			foreach ( $option_value as $font_size_key => $font_size_value ) {
				if ( '' === $font_size_value ) {
					continue;
				}

				$media_query = 'general';

				if ( 'tablet' === $font_size_key ) {
					$media_query = ET_Builder_Element::get_media_query( 'max_width_980' );
				} elseif ( 'phone' === $font_size_key ) {
					$media_query = ET_Builder_Element::get_media_query( 'max_width_767' );
				}

				$font_size_value_double = et_builder_multiply_value_has_unit( $font_size_value, 2, 0 );

				// Icon.
				ET_Builder_Element::set_style(
					$args['render_slug'],
					array(
						'selector'    => $selector,
						'declaration' => sprintf(
							'font-size:%1$s; line-height:%2$s; height:%2$s; width:%2$s;',
							esc_html( $font_size_value ),
							esc_html( $font_size_value_double )
						),
						'media_query' => $media_query,
					)
				);

				// Icon Wrapper.
				ET_Builder_Element::set_style(
					$args['render_slug'],
					array(
						'selector'    => $args['selector_wrapper'],
						'declaration' => sprintf(
							'height:%1$s; width:%1$s;',
							esc_html( $font_size_value_double )
						),
						'media_query' => $media_query,
					)
				);
			}
		} elseif ( in_array( $option_type, array( 'sticky', 'hover' ), true ) ) {
			$helper     = 'sticky' === $option_type ? et_pb_sticky_options() : et_pb_hover_options();
			$is_enabled = $helper->is_enabled( $args['base_attr_name'], $args['attrs'] );

			if ( $is_enabled && '' !== $option_value ) {
				$option_value_double = et_builder_multiply_value_has_unit( $option_value, 2, 0 );

				// Selector wrapper isn't default argument so it needs to be turned into sticky /
				// hover selector manually here.
				$selector_wrapper = 'hover' === $option_type ?
					$helper->add_hover_to_selectors( $args['selector_wrapper'] ) :
					$helper->add_sticky_to_selectors( $args['selector_wrapper'], $args['is_sticky_module'] );

				// Icon.
				ET_Builder_Element::set_style(
					$args['render_slug'],
					array(
						'selector'    => $selector,
						'declaration' => sprintf(
							'font-size:%1$s; line-height:%2$s; height:%2$s; width:%2$s;',
							esc_html( $option_value ),
							esc_html( $option_value_double )
						),
					)
				);

				// Icon Wrapper.
				ET_Builder_Element::set_style(
					$args['render_slug'],
					array(
						'selector'    => $selector_wrapper,
						'declaration' => sprintf(
							'height:%1$s; width:%1$s;',
							esc_html( $option_value_double )
						),
					)
				);
			}
		}
	}

	/**
	 * Custom `generate_styles()` processor for responsive, hover, and sticky styles of
	 * `icon_font_size` attributes which sets the size of overlay icon.
	 *
	 * @since 4.6.0
	 *
	 * @used-by ET_Builder_Module_Testimonial->render()
	 * @used-by ET_Builder_Module_Video->render()
	 * @used-by ET_Builder_Module_Video_Slider->render()
	 * @used-by ET_Builder_Module_Video_Slider_Item->render()
	 *
	 * @param string       $selector     CSS Selector.
	 * @param string|array $value Option value.
	 * @param array        $args         Arguments.
	 * @param string       $option_type  Option type (responsive|sticky|hover).
	 */
	public static function process_overlay_icon_font_size( $selector, $value, $args, $option_type ) {
		$declaration_format = '' !== $args['processor_declaration_format'] ?
			$args['processor_declaration_format'] :
			'font-size:%1$s; line-height:%1$s; margin-top:-%2$s; margin-left:-%2$s;';

		if ( 'responsive' === $option_type ) {
			foreach ( $value as $breakpoint => $font_size_value ) {
				if ( '' === $font_size_value ) {
					continue;
				}

				$media_query = 'general';
				if ( 'tablet' === $breakpoint ) {
					$media_query = ET_Builder_Element::get_media_query( 'max_width_980' );
				} elseif ( 'phone' === $breakpoint ) {
					$media_query = ET_Builder_Element::get_media_query( 'max_width_767' );
				}

				$font_size_value_half = et_builder_multiply_value_has_unit( $font_size_value, 0.5, 0 );

				ET_Builder_Element::set_style(
					$args['render_slug'],
					array(
						'selector'    => $selector,
						'declaration' => sprintf(
							$declaration_format,
							esc_html( $font_size_value ),
							esc_html( $font_size_value_half )
						),
						'media_query' => $media_query,
					)
				);
			}
		} elseif ( in_array( $option_type, array( 'sticky', 'hover' ), true ) ) {
			$helper     = 'sticky' === $option_type ? et_pb_sticky_options() : et_pb_hover_options();
			$is_enabled = $helper->is_enabled( $args['base_attr_name'], $args['attrs'] );

			if ( $is_enabled && '' !== $value ) {
				$value_half = et_builder_multiply_value_has_unit( $value, 0.5, 0 );

				ET_Builder_Element::set_style(
					$args['render_slug'],
					array(
						'selector'    => $selector,
						'declaration' => sprintf(
							$declaration_format,
							esc_html( $value ),
							esc_html( $value_half )
						),
					)
				);
			}
		}
	}
}
