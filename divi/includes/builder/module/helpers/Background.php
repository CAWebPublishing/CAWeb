<?php

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}


/**
 * Background helper methods.
 * This is abstraction of `ET_Builder_Element->process_advanced_background_options()` method which is
 * intended for module that needs to extend module background mechanism with few modification
 * (eg. post slider which needs to apply module background on individual slide that has featured
 * image).
 *
 * @since 4.3.3
 * @since 4.6.0 Add sticky style support
 *
 * @todo Use `ET_Builder_Module_Helper_Background->get_background_style()` for `ET_Builder_Element->process_advanced_background_options()`
 *
 * Class ET_Builder_Module_Helper_Background
 */
class ET_Builder_Module_Helper_Background {
	public static function instance() {
		static $instance;

		return $instance ? $instance : $instance = new self();
	}

	/**
	 * Get prop name alias. Some background settings (eg. button's gradient background enable) might
	 * use slightly different prop name to store background config;
	 *
	 * @since 4.6.0
	 *
	 * @param array  $aliases   Aliases.
	 * @param string $prop_name Prop name.
	 *
	 * @return string
	 */
	public function get_prop_name_alias( $aliases = array(), $prop_name = '' ) {
		// If no aliases given, simply return the prop name because it has no alias.
		if ( empty( $aliases ) ) {
			return $prop_name;
		}

		return et_()->array_get( $aliases, $prop_name, $prop_name );
	}

	/**
	 * Get gradient properties based on given props
	 *
	 * @since 4.3.3
	 *
	 * @param array  $props           Module's props
	 * @param string $base_prop_name Background base prop name
	 * @param string $suffix         Background base prop name's suffix
	 *
	 * @return array
	 */
	function get_gradient_properties( $props, $base_prop_name, $suffix ) {
		return array(
			'type'             => et_pb_responsive_options()->get_any_value( $props, "{$base_prop_name}_color_gradient_type{$suffix}", '', true ),
			'direction'        => et_pb_responsive_options()->get_any_value( $props, "{$base_prop_name}_color_gradient_direction{$suffix}", '', true ),
			'radial_direction' => et_pb_responsive_options()->get_any_value( $props, "{$base_prop_name}_color_gradient_direction_radial{$suffix}", '', true ),
			'color_start'      => et_pb_responsive_options()->get_any_value( $props, "{$base_prop_name}_color_gradient_start{$suffix}", '', true ),
			'color_end'        => et_pb_responsive_options()->get_any_value( $props, "{$base_prop_name}_color_gradient_end{$suffix}", '', true ),
			'start_position'   => et_pb_responsive_options()->get_any_value( $props, "{$base_prop_name}_color_gradient_start_position{$suffix}", '', true ),
			'end_position'     => et_pb_responsive_options()->get_any_value( $props, "{$base_prop_name}_color_gradient_end_position{$suffix}", '', true ),
		);
	}

	/**
	 * Get gradient properties for hover mode
	 *
	 * @since 4.3.3
	 * @since 4.6.0 add capability to look for sticky style's gradient
	 *
	 * @param array  $props                       Module's props
	 * @param string $base_prop_name             Background base prop name
	 * @param array  $gradient_properties_desktop {
	 *     @type string $mode
	 *     @type string $type
	 *     @type string $direction
	 *     @type string $radial_direction
	 *     @type string $color_start
	 *     @type string $color_end
	 *     @type string $start_position
	 *     @type string $end_position
	 * }
	 *
	 * @return array
	 */
	public function get_gradient_mode_properties( $mode, $props, $base_prop_name, $gradient_properties_desktop = array() ) {
		$helper = et_builder_get_helper( $mode );

		if ( ! $mode ) {
			return false;
		}

		// Desktop value as default.
		$gradient_type_desktop             = et_()->array_get( $gradient_properties_desktop, 'type', '' );
		$gradient_direction_desktop        = et_()->array_get( $gradient_properties_desktop, 'direction', '' );
		$gradient_radial_direction_desktop = et_()->array_get( $gradient_properties_desktop, 'radial_direction', '' );
		$gradient_color_start_desktop      = et_()->array_get( $gradient_properties_desktop, 'color_start', '' );
		$gradient_color_end_desktop        = et_()->array_get( $gradient_properties_desktop, 'color_end', '' );
		$gradient_start_position_desktop   = et_()->array_get( $gradient_properties_desktop, 'start_position', '' );
		$gradient_end_position_desktop     = et_()->array_get( $gradient_properties_desktop, 'end_position', '' );
		$gradient_overlays_image_desktop   = et_pb_responsive_options()->get_any_value( $props, "{$base_prop_name}_color_gradient_overlays_image", '', true );

		// Mode value.
		$gradient_type_mode             = $helper->get_raw_value( "{$base_prop_name}_color_gradient_type", $props, $gradient_type_desktop );
		$gradient_direction_mode        = $helper->get_raw_value( "{$base_prop_name}_color_gradient_direction", $props, $gradient_direction_desktop );
		$gradient_direction_radial_mode = $helper->get_raw_value( "{$base_prop_name}_color_gradient_direction_radial", $props, $gradient_radial_direction_desktop );
		$gradient_start_mode            = $helper->get_raw_value( "{$base_prop_name}_color_gradient_start", $props, $gradient_color_start_desktop );
		$gradient_end_mode              = $helper->get_raw_value( "{$base_prop_name}_color_gradient_end", $props, $gradient_color_end_desktop );
		$gradient_start_position_mode   = $helper->get_raw_value( "{$base_prop_name}_color_gradient_start_position", $props, $gradient_start_position_desktop );
		$gradient_end_position_mode     = $helper->get_raw_value( "{$base_prop_name}_color_gradient_end_position", $props, $gradient_end_position_desktop );
		$gradient_overlays_image_mode   = $helper->get_raw_value( "{$base_prop_name}_color_gradient_overlays_image", $props, $gradient_overlays_image_desktop );

		return array(
			'type'             => '' !== $gradient_type_mode ? $gradient_type_mode : $gradient_type_desktop,
			'direction'        => '' !== $gradient_direction_mode ? $gradient_direction_mode : $gradient_direction_desktop,
			'radial_direction' => '' !== $gradient_direction_radial_mode ? $gradient_direction_radial_mode : $gradient_radial_direction_desktop,
			'color_start'      => '' !== $gradient_start_mode ? $gradient_start_mode : $gradient_color_start_desktop,
			'color_end'        => '' !== $gradient_end_mode ? $gradient_end_mode : $gradient_color_end_desktop,
			'start_position'   => '' !== $gradient_start_position_mode ? $gradient_start_position_mode : $gradient_start_position_desktop,
			'end_position'     => '' !== $gradient_end_position_mode ? $gradient_end_position_mode : $gradient_end_position_desktop,
		);
	}

	/**
	 * Get background gradient style based on properties given
	 *
	 * @since 4.3.3
	 *
	 * @param array $args {
	 *     @type string $type
	 *     @type string $direction
	 *     @type string $radial_direction
	 *     @type string $color_start
	 *     @type string $color_end
	 *     @type string $start_position
	 *     @type string $end_position
	 * }
	 *
	 * @return string
	 */
	function get_gradient_style( $args ) {
		$default_gradient = array(
			'type'             => ET_Global_Settings::get_value( 'all_background_gradient_type' ),
			'direction'        => ET_Global_Settings::get_value( 'all_background_gradient_direction' ),
			'radial_direction' => ET_Global_Settings::get_value( 'all_background_gradient_direction_radial' ),
			'color_start'      => ET_Global_Settings::get_value( 'all_background_gradient_start' ),
			'color_end'        => ET_Global_Settings::get_value( 'all_background_gradient_end' ),
			'start_position'   => ET_Global_Settings::get_value( 'all_background_gradient_start_position' ),
			'end_position'     => ET_Global_Settings::get_value( 'all_background_gradient_end_position' ),
		);

		$defaults = apply_filters( 'et_pb_default_gradient', $default_gradient );

		$args           = wp_parse_args( array_filter( $args ), $defaults );
		$direction      = 'linear' === $args['type'] ? $args['direction'] : "circle at {$args['radial_direction']}";
		$start_position = et_sanitize_input_unit( $args['start_position'], false, '%' );
		$end_position   = et_sanitize_input_unit( $args['end_position'], false, '%' );

		return esc_html(
			"{$args['type']}-gradient(
			{$direction},
			{$args['color_start']} ${start_position},
			{$args['color_end']} ${end_position}
		)"
		);
	}

	/**
	 * Get individual background image style
	 *
	 * @since 4.3.3
	 *
	 * @param string $attr                 Background attribute name
	 * @param string $base_prop_name       Base background prop name
	 * @param string $suffix               Attribute name suffix
	 * @param array  $props                Module props
	 * @param array  $fields_definition    Module's fields definition
	 * @param bool   $is_prev_image_active Whether previous background image is active or not
	 *
	 * @return string
	 */
	function get_image_style( $attr, $base_prop_name, $suffix = '', $props = array(), $fields_definition = array(), $is_prev_image_active = true ) {
		// Get default style
		$default = et_()->array_get( $fields_definition, "{$base_prop_name}_{$attr}.default", '' );

		// Get style
		$style = et_pb_responsive_options()->get_any_value( $props, "{$base_prop_name}_{$attr}{$suffix}", $default, ! $is_prev_image_active );

		return $style;
	}

	/**
	 * Get background UI option's style based on given props and prop name
	 *
	 * @since 4.3.3
	 * @since 4.6.0 Add sticky style support.
	 *
	 * @todo Further simplify this method; Break it down into more encapsulated methods
	 *
	 * @param array $args {
	 *     @type string $base_prop_name
	 *     @type array  $props
	 *     @type string $important
	 *     @type array  $fields_Definition
	 *     @type string $selector
	 *     @type string $selector_hover
	 *     @type string $selector_sticky
	 *     @type number $priority
	 *     @type string $function_name
	 *     @type bool   $has_background_color_toggle
	 *     @type bool   $use_background_color
	 *     @type bool   $use_background_color_gradient
	 *     @type bool   $use_background_image
	 *     @type bool   $use_background_video
	 *     @type bool   $use_background_color_reset
	 * }
	 */
	function get_background_style( $args = array() ) {
		// Default settings
		$defaults = array(
			'base_prop_name'                => 'background',
			'props'                         => array(),
			'important'                     => '',
			'fields_definition'             => array(),
			'selector'                      => '',
			'selector_hover'                => '',
			'selector_sticky'               => '',
			'priority'                      => '',
			'function_name'                 => '',
			'has_background_color_toggle'   => false,
			'use_background_color'          => true,
			'use_background_color_gradient' => true,
			'use_background_image'          => true,
			'use_background_video'          => true,
			'use_background_color_reset'    => true,
			'prop_name_aliases'             => array(),
		);

		// Parse arguments
		$args = wp_parse_args( $args, $defaults );

		// Break argument into variables
		$base_prop_name    = $args['base_prop_name'];
		$props             = $args['props'];
		$important         = $args['important'];
		$fields_definition = $args['fields_definition'];
		$selector          = $args['selector'];
		$priority          = $args['priority'];
		$function_name     = $args['function_name'];

		// Possible values for use_background_* variables are true, false, or 'fields_only'
		$has_color_toggle_options = $args['has_background_color_toggle'];
		$use_gradient_options     = $args['use_background_color_gradient'];
		$use_image_options        = $args['use_background_image'];
		$use_color_options        = $args['use_background_color'];
		$use_color_reset_options  = $args['use_background_color_reset'];

		// Prop name aliases. Some background element uses different prop name (eg. button background).
		$prop_name_aliases = $args['prop_name_aliases'];

		// Save processed background. These will be compared with the smaller device background
		// processed value to avoid rendering the same styles.
		$processed_color                 = '';
		$processed_image                 = '';
		$gradient_properties_desktop     = array();
		$processed_image_blend           = '';
		$gradient_overlays_image_desktop = 'off';

		// Store background images status because the process is extensive.
		$image_status = array(
			'desktop' => false,
			'tablet'  => false,
			'phone'   => false,
		);

		// Helper.
		$responsive = et_pb_responsive_options();

		// Parsed prop name, in case it has aliases.
		$base_prop_name_parsed = $this->get_prop_name_alias( $prop_name_aliases, $base_prop_name );

		// Background Desktop, Tablet, and Phone.
		foreach ( $responsive->get_modes() as $device ) {
			$is_desktop = 'desktop' === $device;
			$suffix     = ! $is_desktop ? "_{$device}" : '';
			$style      = '';

			// Conditionals
			$has_gradient           = false;
			$has_image              = false;
			$has_gradient_and_image = false;
			$is_gradient_disabled   = false;
			$is_image_disabled      = false;

			// Ensure responsive settings is enabled on mobile.
			if ( ! $is_desktop && ! $responsive->is_responsive_enabled( $props, $base_prop_name_parsed ) ) {
				continue;
			}

			// Styles output
			$image_style             = '';
			$color_style             = '';
			$images                  = array();
			$gradient_overlays_image = 'off';

			// A. Background Gradient.
			if ( $use_gradient_options && 'fields_only' !== $use_gradient_options ) {
				$use_gradient = $responsive->get_inheritance_background_value(
					$props,
					$this->get_prop_name_alias( $prop_name_aliases, "use_{$base_prop_name}_color_gradient" ),
					$device,
					$base_prop_name,
					$fields_definition
				);

				// 1. Ensure gradient color is active.
				if ( 'on' === $use_gradient ) {
					$gradient_overlays_image = $responsive->get_any_value( $props, "{$base_prop_name}_color_gradient_overlays_image{$suffix}", '', true );
					$gradient_properties     = $this->get_gradient_properties( $props, $base_prop_name, $suffix );

					// Will be used as default of Gradient hover.
					if ( $is_desktop ) {
						$gradient_properties_desktop     = $gradient_properties;
						$gradient_overlays_image_desktop = $gradient_overlays_image;
					}

					// Save background gradient into background images list.
					$background_gradient = $this->get_gradient_style( $gradient_properties );
					$images[]            = $background_gradient;

					// Flag to inform Background Color if current module has Gradient.
					$has_gradient = true;
				} elseif ( 'off' === $use_gradient ) {
					$is_gradient_disabled = true;
				}
			}

			// B. Background Image.
			if ( $use_image_options && 'fields_only' !== $use_image_options ) {
				$image    = $responsive->get_inheritance_background_value( $props, "{$base_prop_name}_image", $device, $base_prop_name, $fields_definition );
				$parallax = $responsive->get_any_value( $props, "parallax{$suffix}", 'off' );

				// Background image and parallax status.
				$is_image_active         = '' !== $image && 'on' !== $parallax;
				$image_status[ $device ] = $is_image_active;

				// 1. Ensure image exists and parallax is off.
				if ( $is_image_active ) {
					// Flag to inform Background Color if current module has Image.
					$has_image = true;

					// Check previous Background image status. Needed to get the correct value.
					$is_prev_image_active = true;

					if ( ! $is_desktop ) {
						$is_prev_image_active = 'tablet' === $device ?
							$image_status['desktop'] :
							$image_status['tablet'];
					}

					// Size.
					$image_size = $this->get_image_style( 'size', $base_prop_name, $suffix, $props, $fields_definition, $is_prev_image_active );

					if ( '' !== $image_size ) {
						$style .= sprintf( 'background-size: %1$s; ', esc_html( $image_size ) );
					}

					// Position.
					$image_position = $this->get_image_style( 'position', $base_prop_name, $suffix, $props, $fields_definition, $is_prev_image_active );

					if ( '' !== $image_position ) {
						$style .= sprintf(
							'background-position: %1$s; ',
							esc_html( str_replace( '_', ' ', $image_position ) )
						);
					}

					// Repeat.
					$image_repeat = $this->get_image_style( 'repeat', $base_prop_name, $suffix, $props, $fields_definition, $is_prev_image_active );

					if ( '' !== $image_repeat ) {
						$style .= sprintf( 'background-repeat: %1$s; ', esc_html( $image_repeat ) );
					}

					// Blend.
					$image_blend         = $this->get_image_style( 'blend', $base_prop_name, $suffix, $props, $fields_definition, $is_prev_image_active );
					$image_blend_inherit = $responsive->get_any_value( $props, "{$base_prop_name}_blend{$suffix}", '', true );
					$image_blend_default = et_()->array_get( $fields_definition, "{$base_prop_name}_blend.default", '' );

					if ( '' !== $image_blend_inherit ) {
						// Don't print the same image blend style.
						if ( '' !== $image_blend ) {
							$style .= sprintf( 'background-blend-mode: %1$s; ', esc_html( $image_blend ) );
						}

						// Reset - If background has image and gradient, force background-color: initial.
						if ( $has_gradient && $has_image && $use_color_reset_options !== 'fields_only' && $image_blend_inherit !== $image_blend_default ) {
							$has_gradient_and_image = true;
							$color_style            = 'initial';

							$style .= sprintf( 'background-color: initial%1$s; ', esc_html( $important ) );
						}

						$processed_image_blend = $image_blend;
					}

					// Only append background image when the image is exist.
					$images[] = sprintf( 'url(%1$s)', esc_html( $image ) );
				} elseif ( '' === $image ) {
					// Reset - If background image is disabled, ensure we reset prev background blend mode.
					if ( '' !== $processed_image_blend ) {
						$style                .= 'background-blend-mode: normal; ';
						$processed_image_blend = '';
					}

					$is_image_disabled = true;
				}
			}

			if ( ! empty( $images ) ) {
				// The browsers stack the images in the opposite order to what you'd expect.
				if ( 'on' !== $gradient_overlays_image ) {
					$images = array_reverse( $images );
				}

				// Set background image styles only it's different compared to the larger device.
				$image_style = join( ', ', $images );
				if ( $processed_image !== $image_style ) {
					$style .= sprintf(
						'background-image: %1$s%2$s;',
						esc_html( $image_style ),
						$important
					);
				}
			} elseif ( ! $is_desktop && $is_gradient_disabled && $is_image_disabled ) {
				// Reset - If background image and gradient are disabled, reset current background image.
				$image_style = 'initial';

				$style .= sprintf(
					'background-image: %1$s%2$s;',
					esc_html( $image_style ),
					$important
				);
			}

			// Save processed background images.
			$processed_image = $image_style;

			// C. Background Color.
			if ( $use_color_options && 'fields_only' !== $use_color_options ) {

				$use_color_value = $responsive->get_any_value( $props, "use_{$base_prop_name}_color{$suffix}", 'on', true );

				if ( ! $has_gradient_and_image && 'off' !== $use_color_value ) {
					$color       = $responsive->get_inheritance_background_value( $props, "{$base_prop_name}_color", $device, $base_prop_name, $fields_definition );
					$color       = ! $is_desktop && '' === $color ? 'initial' : $color;
					$color_style = $color;

					if ( '' !== $color && $processed_color !== $color ) {
						$style .= sprintf(
							'background-color: %1$s%2$s; ',
							esc_html( $color ),
							esc_html( $important )
						);
					}
				} elseif ( $has_color_toggle_options && 'off' === $use_color_value && ! $is_desktop ) {
					// Reset - If current module has background color toggle, it's off, and current mode
					// it's not desktop, we should reset the background color.
					$style .= sprintf(
						'background-color: initial %1$s; ',
						esc_html( $important )
					);
				}
			}

			// Save processed background color.
			$processed_color = $color_style;

			// Render background styles.
			if ( '' !== $style ) {
				// Add media query parameter.
				$background_args = array();
				if ( ! $is_desktop ) {
					$current_media_query            = 'tablet' === $device ? 'max_width_980' : 'max_width_767';
					$background_args['media_query'] = ET_Builder_Element::get_media_query( $current_media_query );
				}

				$el_style = array(
					'selector'    => $selector,
					'declaration' => rtrim( $style ),
					'priority'    => $priority,
				);
				ET_Builder_Element::set_style( $function_name, wp_parse_args( $background_args, $el_style ) );
			}
		}

		// Background Modes (Hover & Sticky).
		$modes = array( 'hover', 'sticky' );

		foreach ( $modes as $mode ) {
			// Get helper.
			$helper = et_builder_get_helper( $mode );

			// Bail if no helper.
			if ( ! $helper ) {
				continue;
			}

			// Get selector.
			$selector_mode = $args[ "selector_{$mode}" ];

			// If no fixed selector defined, prepend / append default selector.
			if ( '' === $selector_mode ) {
				if ( 'hover' === $mode ) {
					$selector_mode = $helper->add_hover_to_selectors( $selector );
				} elseif ( 'sticky' === $mode ) {
					$is_sticky_module = $helper->is_sticky_module( $props );
					$selector_mode    = $helper->add_sticky_to_order_class( $selector, $is_sticky_module );
				}
			}

			// Check if mode is enabled.
			if ( $helper->is_enabled( $this->get_prop_name_alias( $prop_name_aliases, $base_prop_name ), $props ) ) {
				$images_mode = array();
				$style_mode  = '';

				$has_gradient_mode           = false;
				$has_image_mode              = false;
				$has_gradient_and_image_mode = false;
				$is_gradient_mode_disabled   = false;
				$is_image_mode_disabled      = false;

				$gradient_overlays_image_mode = 'off';

				// Background Gradient Mode (Hover / Sticky).
				// This part is little bit different compared to responsive implementation. In
				// this case, mode is enabled on the background field, not on the each of those
				// fields. So, built in function get_value() doesn't work in this case.
				// Temporarily, we need to fetch the the value from get_raw_value().
				if ( $use_gradient_options && 'fields_only' !== $use_gradient_options ) {
					$use_gradient_mode = $responsive->get_inheritance_background_value(
						$props,
						$this->get_prop_name_alias( $prop_name_aliases, "use_{$base_prop_name}_color_gradient" ),
						$mode,
						$base_prop_name,
						$fields_definition
					);

					// 1. Ensure gradient color is active and values are not null.
					if ( 'on' === $use_gradient_mode ) {
						// Flag to inform BG Color if current module has Gradient.
						$has_gradient_mode    = true;
						$gradient_values_mode = $this->get_gradient_mode_properties(
							$mode,
							$props,
							$base_prop_name,
							$gradient_properties_desktop
						);
						$gradient_mode        = $this->get_gradient_style( $gradient_values_mode );
						$images_mode[]        = $gradient_mode;

						$gradient_overlays_image_desktop = $responsive->get_any_value(
							$props,
							"{$base_prop_name}_color_gradient_overlays_image",
							'',
							true
						);
						$gradient_overlays_image_mode    = $helper->get_raw_value(
							"{$base_prop_name}_color_gradient_overlays_image",
							$props,
							$gradient_overlays_image_desktop
						);
					} elseif ( 'off' === $use_gradient_mode ) {
						$is_gradient_mode_disabled = true;
					}
				}

				// Background Image Mode (Hover / Sticky).
				// This part is little bit different compared to responsive implementation. In
				// this case, mode is enabled on the background field, not on the each of those
				// fields. So, built in function get_value() doesn't work in this case.
				// Temporarily, we need to fetch the the value from get_raw_value().
				if ( $use_image_options && 'fields_only' !== $use_image_options ) {
					$image_mode    = $responsive->get_inheritance_background_value(
						$props,
						"{$base_prop_name}_image",
						$mode,
						$base_prop_name,
						$fields_definition
					);
					$parallax_mode = $helper->get_raw_value( 'parallax', $props );

					if ( '' !== $image_mode && null !== $image_mode && 'on' !== $parallax_mode ) {
						// Flag to inform BG Color if current module has Image.
						$has_image_mode = true;

						// Size.
						$image_size_mode    = $helper->get_raw_value( "{$base_prop_name}_size", $props );
						$image_size_desktop = et_()->array_get( $props, "{$base_prop_name}_size", '' );
						$is_same_image_size = $image_size_mode === $image_size_desktop;

						if ( empty( $image_size_mode ) && ! empty( $image_size_desktop ) ) {
							$image_size_mode = $image_size_desktop;
						}

						if ( ! empty( $image_size_mode ) && ! $is_same_image_size ) {
							$style_mode .= sprintf(
								'background-size: %1$s; ',
								esc_html( $image_size_mode )
							);
						}

						// Position.
						$image_position_mode    = $helper->get_raw_value( "{$base_prop_name}_position", $props );
						$image_position_desktop = et_()->array_get( $props, "{$base_prop_name}_position", '' );
						$is_same_image_position = $image_position_mode === $image_position_desktop;

						if ( empty( $image_position_mode ) && ! empty( $image_position_desktop ) ) {
							$image_position_mode = $image_position_desktop;
						}

						if ( ! empty( $image_position_mode ) && ! $is_same_image_position ) {
							$style_mode .= sprintf(
								'background-position: %1$s; ',
								esc_html( str_replace( '_', ' ', $image_position_mode ) )
							);
						}

						// Repeat.
						$image_repeat_mode    = $helper->get_raw_value( "{$base_prop_name}_repeat", $props );
						$image_repeat_desktop = et_()->array_get( $props, "{$base_prop_name}_repeat", '' );
						$is_same_image_repeat = $image_repeat_mode === $image_repeat_desktop;

						if ( empty( $image_repeat_mode ) && ! empty( $image_repeat_desktop ) ) {
							$image_repeat_mode = $image_repeat_desktop;
						}

						if ( ! empty( $image_repeat_mode ) && ! $is_same_image_repeat ) {
							$style_mode .= sprintf(
								'background-repeat: %1$s; ',
								esc_html( $image_repeat_mode )
							);
						}

						// Blend.
						$image_blend_mode    = $helper->get_raw_value( "{$base_prop_name}_blend", $props );
						$image_blend_default = et_()->array_get( $fields_definition, "{$base_prop_name}_blend.default", '' );
						$image_blend_desktop = et_()->array_get( $props, "{$base_prop_name}_blend", '' );
						$is_same_image_blend = $image_blend_mode === $image_blend_desktop;

						if ( empty( $image_blend_mode ) && ! empty( $image_blend_desktop ) ) {
							$image_blend_mode = $image_blend_desktop;
						}

						if ( ! empty( $image_blend_mode ) ) {
							// Don't print the same background blend.
							if ( ! $is_same_image_blend ) {
								$style_mode .= sprintf(
									'background-blend-mode: %1$s; ',
									esc_html( $image_blend_mode )
								);
							}

							// Force background-color: initial.
							if ( $has_gradient_mode && $has_image_mode && $image_blend_mode !== $image_blend_default ) {
								$has_gradient_and_image_mode = true;
								$style_mode                 .= sprintf( 'background-color: initial%1$s; ', esc_html( $important ) );
							}
						}

						// Only append background image when the image is exist.
						$images_mode[] = sprintf( 'url(%1$s)', esc_html( $image_mode ) );
					} elseif ( '' === $image_mode ) {
						$is_image_mode_disabled = true;
					}
				}

				if ( ! empty( $images_mode ) ) {
					// The browsers stack the images in the opposite order to what you'd expect.
					if ( 'on' !== $gradient_overlays_image_mode ) {
						$images_mode = array_reverse( $images_mode );
					}

					$style_mode .= sprintf(
						'background-image: %1$s%2$s;',
						esc_html( join( ', ', $images_mode ) ),
						$important
					);
				} elseif ( $is_gradient_mode_disabled && $is_image_mode_disabled ) {
					$style_mode .= sprintf(
						'background-image: initial %1$s;',
						$important
					);
				}

				// Background Color Mode (Hover / Sticky).
				if ( $use_color_options && 'fields_only' !== $use_color_options ) {
					$use_color_mode_value = $helper->get_raw_value( "use_{$base_prop_name}_color", $props );
					$use_color_mode_value = ! empty( $use_color_mode_value ) ?
						$use_color_mode_value :
						et_()->array_get( $props, "use_{$base_prop_name}_color", 'on' );

					if ( ! $has_gradient_and_image_mode && 'off' !== $use_color_mode_value ) {
						$color_mode = $responsive->get_inheritance_background_value(
							$props,
							"{$base_prop_name}_color",
							$mode,
							$base_prop_name,
							$fields_definition
						);
						$color_mode = '' !== $color_mode ? $color_mode : 'transparent';

						if ( '' !== $color_mode ) {
							$style_mode .= sprintf(
								'background-color: %1$s%2$s; ',
								esc_html( $color_mode ),
								esc_html( $important )
							);
						}
					} elseif ( $has_color_toggle_options && 'off' === $use_color_mode_value ) {
						// Reset - If current module has background color toggle, it's off, and current mode
						// it's not desktop, we should reset the background color.
						$style .= sprintf(
							'background-color: initial %1$s; ',
							esc_html( $important )
						);
					}
				}

				// Render background mode styles.
				if ( '' !== $style_mode ) {
					$el_style = array(
						'selector'    => $selector_mode,
						'declaration' => rtrim( $style_mode ),
						'priority'    => $priority,
					);
					ET_Builder_Element::set_style( $function_name, $el_style );
				}
			}
		}
	}
}
