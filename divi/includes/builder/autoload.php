<?php
/**
 * Register autoloader.
 *
 * @package Divi
 * @subpackage Builder
 * @since 4.6.2
 */

/**
 * Autoloader for module helpers and structure elements.
 *
 * @param string $class The class name.
 */
function _et_pb_autoload( $class ) {
	switch ( $class ) {
		case 'ET_Builder_Section':
		case 'ET_Builder_Row':
		case 'ET_Builder_Row_Inner':
		case 'ET_Builder_Column':
			require_once 'main-structure-elements.php';
			break;
		case 'ET_Builder_Module_Helper_Multi_Value':
			require_once 'module/helpers/MultiValue.php';
			break;
		case 'ET_Builder_Module_Helper_Overflow':
			require_once 'module/helpers/Overflow.php';
			break;
		case 'ET_Builder_Module_Helper_Alignment':
			require_once 'module/helpers/Alignment.php';
			break;
		case 'ET_Builder_Module_Helper_Sizing':
			require_once 'module/helpers/Sizing.php';
			break;
		case 'ET_Builder_Module_Helper_Height':
			require_once 'module/helpers/Height.php';
			break;
		case 'ET_Builder_Module_Hover_Options':
			require_once 'module/helpers/HoverOptions.php';
			break;
		case 'ET_Builder_Module_Sticky_Options':
			require_once 'module/helpers/StickyOptions.php';
			break;
		case 'ET_Builder_Module_Helper_Max_Height':
			require_once 'module/helpers/MaxHeight.php';
			break;
		case 'ET_Builder_Module_Helper_Max_Width':
			require_once 'module/helpers/MaxWidth.php';
			break;
		case 'ET_Builder_Module_Helper_Min_Height':
			require_once 'module/helpers/MinHeight.php';
			break;
		case 'ET_Builder_Module_Helper_ResponsiveOptions':
			require_once 'module/helpers/ResponsiveOptions.php';
			break;
		case 'ET_Builder_Module_Helper_Slider':
			require_once 'module/helpers/Slider.php';
			break;
		case 'ET_Builder_Module_Transition_Options':
			require_once 'module/helpers/TransitionOptions.php';
			break;
		case 'ET_Builder_Module_Helper_Width':
			require_once 'module/helpers/Width.php';
			break;
		case 'ET_Builder_Module_Helper_Motion':
			require_once 'module/helpers/motion/Motion.php';
			break;
		case 'ET_Builder_Module_Helper_Motion_Sanitizer':
			require_once 'module/helpers/motion/Sanitizer.php';
			break;
		case 'ET_Builder_Module_Helper_Motion_Opacity':
			require_once 'module/helpers/motion/Opacity.php';
			break;
		case 'ET_Builder_Module_Helper_Motion_Translate':
			require_once 'module/helpers/motion/Translate.php';
			break;
		case 'ET_Builder_Module_Helper_Motion_Scale':
			require_once 'module/helpers/motion/Scale.php';
			break;
		case 'ET_Builder_Module_Helper_Motion_Rotate':
			require_once 'module/helpers/motion/Rotate.php';
			break;
		case 'ET_Builder_Module_Helper_Motion_Blur':
			require_once 'module/helpers/motion/Blur.php';
			break;
		case 'ET_Builder_Module_Field_Base':
			require_once 'module/field/Base.php';
			break;
		case 'ET_Builder_Module_Fields_Factory':
			require_once 'module/field/Factory.php';
			break;
		case 'ET_Builder_Module_Helper_Overlay':
			require_once 'module/helpers/Overlay.php';
			break;
		case 'ET_Builder_Module_Helper_MultiViewOptions':
			require_once 'module/helpers/MultiViewOptions.php';
			break;
		case 'ET_Builder_Module_Helper_OptionTemplate':
			require_once 'module/helpers/OptionTemplate.php';
			break;
		case 'ET_Builder_Module_Helper_Style_Processor':
			require_once 'module/helpers/StyleProcessor.php';
			break;
		case 'ET_Builder_Module_Helper_Font':
			require_once 'module/helpers/Font.php';
			break;
		case 'ET_Builder_Module_Helper_Background':
			require_once 'module/helpers/Background.php';
			break;
		case 'ET_Builder_Module_Helper_BackgroundLayout':
			require_once 'module/helpers/BackgroundLayout.php';
			break;
		case 'ET_Builder_Module_Helper_Woocommerce_Modules':
			if ( et_is_woocommerce_plugin_active() ) {
				require_once 'module/helpers/WooCommerceModules.php';
			}
			break;
		case 'ET_Builder_I18n':
			require_once 'feature/I18n.php';
			break;
		case 'ET_Builder_Module_Helper_Media':
			require_once 'module/helpers/class-et-builder-module-helper-media.php';
			break;
	}
}

spl_autoload_register( '_et_pb_autoload' );

/**
 * Get an instance of  `ET_Builder_Module_Helper_Multi_Value`.
 *
 * @return ET_Builder_Module_Helper_Multi_Value
 */
function et_pb_multi_value() {
	return ET_Builder_Module_Helper_Multi_Value::instance();
}

/**
 * Get an instance of `ET_Builder_Module_Helper_Overflow`.
 *
 * @return ET_Builder_Module_Helper_Overflow
 */
function et_pb_overflow() {
	return ET_Builder_Module_Helper_Overflow::get();
}

/**
 * Get an instance of `ET_Builder_Module_Helper_Alignment`.
 *
 * @param string $prefix The prefix string that may be added to field name.
 *
 * @return ET_Builder_Module_Helper_Alignment
 */
function et_pb_alignment_options( $prefix = '' ) {
	return new ET_Builder_Module_Helper_Alignment( $prefix );
}

/**
 * Get an instance of `ET_Builder_Module_Helper_Height`.
 *
 * @param string $prefix The prefix string that may be added to field name.
 *
 * @return ET_Builder_Module_Helper_Height
 */
function et_pb_height_options( $prefix = '' ) {
	return new ET_Builder_Module_Helper_Height( $prefix );
}

/**
 * Get an instance of `ET_Builder_Module_Hover_Options`.
 *
 * @return ET_Builder_Module_Hover_Options
 */
function et_pb_hover_options() {
	return ET_Builder_Module_Hover_Options::get();
}

/**
 * Get sticky option instance.
 *
 * @since 4.6.0
 *
 * @return ET_Builder_Module_Sticky_Options
 */
function et_pb_sticky_options() {
	return ET_Builder_Module_Sticky_Options::get();
}

/**
 * Get an instance of `ET_Builder_Module_Helper_Max_Height`.
 *
 * @param string $prefix The prefix string that may be added to field name.
 *
 * @return ET_Builder_Module_Helper_Max_Height
 */
function et_pb_max_height_options( $prefix = '' ) {
	return new ET_Builder_Module_Helper_Max_Height( $prefix );
}

/**
 * Get an instance of `ET_Builder_Module_Helper_Max_Width`.
 *
 * @param string $prefix The prefix string that may be added to field name.
 *
 * @return ET_Builder_Module_Helper_Max_Width
 */
function et_pb_max_width_options( $prefix = '' ) {
	return new ET_Builder_Module_Helper_Max_Width( $prefix );
}

/**
 * Get an instance of `ET_Builder_Module_Helper_Min_Height`.
 *
 * @param string $prefix The prefix string that may be added to field name.
 *
 * @return ET_Builder_Module_Helper_Min_Height
 */
function et_pb_min_height_options( $prefix = '' ) {
	return new ET_Builder_Module_Helper_Min_Height( $prefix );
}

/**
 * Get an instance of `ET_Builder_Module_Helper_ResponsiveOptions`.
 *
 * @return ET_Builder_Module_Helper_ResponsiveOptions
 */
function et_pb_responsive_options() {
	return ET_Builder_Module_Helper_ResponsiveOptions::instance();
}

/**
 * Get an instance of `ET_Builder_Module_Helper_Slider`.
 *
 * @return ET_Builder_Module_Helper_Slider
 */
function et_pb_slider_options() {
	return new ET_Builder_Module_Helper_Slider();
}

/**
 * Get an instance of `ET_Builder_Module_Transition_Options`.
 *
 * @return ET_Builder_Module_Transition_Options
 */
function et_pb_transition_options() {
	return ET_Builder_Module_Transition_Options::get();
}

/**
 * Get an instance of `ET_Builder_Module_Helper_Width`.
 *
 * @param string $prefix The prefix string that may be added to field name.
 *
 * @return ET_Builder_Module_Helper_Width
 */
function et_pb_width_options( $prefix = '' ) {
	return new ET_Builder_Module_Helper_Width( $prefix );
}

/**
 * Get an instance of `ET_Builder_Module_Helper_Font`.
 *
 * @return ET_Builder_Module_Helper_Font
 */
function et_pb_font_options() {
	return ET_Builder_Module_Helper_Font::instance();
}

/**
 * Get an instance of `ET_Builder_Module_Helper_BackgroundLayout`.
 *
 * @return ET_Builder_Module_Helper_BackgroundLayout
 */
function et_pb_background_layout_options() {
	return ET_Builder_Module_Helper_BackgroundLayout::instance();
}

/**
 * Get helper instance
 *
 * @since 4.6.0
 *
 * @param string $helper_name Helper name.
 *
 * @return object
 */
function et_builder_get_helper( $helper_name ) {
	switch ( $helper_name ) {
		case 'sticky':
			$helper = et_pb_sticky_options();
			break;

		case 'hover':
			$helper = et_pb_hover_options();
			break;

		case 'responsive':
			$helper = et_pb_responsive_options();
			break;

		default:
			$helper = false;
			break;
	}

	return $helper;
}

/**
 * Class ET_Builder_Module_Helper_MultiViewOptions wrapper
 *
 * @since 3.27.1
 *
 * @param ET_Builder_Element|bool $module             Module object.
 * @param array                   $custom_props       Defined custom props data.
 * @param array                   $conditional_values Defined options conditional values.
 * @param array                   $default_values     Defined options default values.
 *
 * @return ET_Builder_Module_Helper_MultiViewOptions
 */
function et_pb_multi_view_options( $module = false, $custom_props = array(), $conditional_values = array(), $default_values = array() ) {
	return new ET_Builder_Module_Helper_MultiViewOptions( $module, $custom_props, $conditional_values, $default_values );
}

if ( et_is_woocommerce_plugin_active() ) {
	add_filter(
		'et_builder_get_woo_default_columns',
		array(
			'ET_Builder_Module_Helper_Woocommerce_Modules',
			'get_columns_posts_default_value',
		)
	);
}

/**
 * Get an instance of `ET_Builder_Module_Helper_OptionTemplate`.
 *
 * @return ET_Builder_Module_Helper_OptionTemplate
 */
function et_pb_option_template() {
	return ET_Builder_Module_Helper_OptionTemplate::instance();
}

/**
 * Get an instance of `ET_Builder_Module_Helper_Background`.
 *
 * @return ET_Builder_Module_Helper_Background
 *
 * @since 4.3.3
 */
function et_pb_background_options() {
	return ET_Builder_Module_Helper_Background::instance();
}

/**
 * Class ET_Builder_Module_Helper_Media wrapper
 *
 * @since 4.6.4
 *
 * @return ET_Builder_Module_Helper_Media
 */
function et_pb_media_options() {
	return ET_Builder_Module_Helper_Media::instance();
}
