<?php

class ET_Builder_CAWeb_Module extends ET_Builder_Module {
	function parse_divi_font_settings( $settings ) {
		$fields = array( 'font', 'weight', 'italic', 'uppercase', 'underline', 'titlecase', 'strikethrough', 'linecolor', 'linestyle' );
		if ( ! is_array( $settings ) ) {
			$settings = explode( '|', $settings );
		}

		return count( $fields ) === count( $settings ) ? array_combine( $fields, $settings ) : $settings;
	}

	function create_inline_font_styles( $font_settings ) {
		$styles = '';
		if ( ! empty( $font_settings ) ) {
			$settings = $this->parse_divi_font_settings( $font_settings );

			if ( isset( $settings['font'] ) && ! empty( $settings['font'] ) ) {
				$styles .= ! empty( $settings['font'] ) ? sprintf( 'font-family: %1$s;', $settings['font'] ) : '';
			}
			if ( isset( $settings['weight'] ) && ! empty( $settings['weight'] ) ) {
				$styles .= ! empty( $settings['weight'] ) ? sprintf( 'font-weight: %1$s;', $settings['weight'] ) : '';
			}
			if ( isset( $settings['italic'] ) && ! empty( $settings['italic'] ) ) {
				$styles .= ! empty( $settings['italic'] ) ? 'font-style: italic;' : '';
			}
			if ( isset( $settings['uppercase'] ) && ! empty( $settings['uppercase'] ) ) {
				$styles .= ! empty( $settings['uppercase'] ) ? 'text-transform: uppercase;' : '';
			}
			if ( isset( $settings['titlecase'] ) && ! empty( $settings['titlecase'] ) ) {
				$styles .= ! empty( $settings['titlecase'] ) ? 'text-transform: capitalize;' : '';
			}
			if ( isset( $settings['underline'] ) && ! empty( $settings['underline'] ) ) {
				$styles .= ! empty( $settings['underline'] ) ? 'text-decoration: underline;' : '';
			}
			if ( isset( $settings['strikethrough'] ) && ! empty( $settings['strikethrough'] ) ) {
				$styles .= ! empty( $settings['strikethrough'] ) ? 'text-decoration: line-through;' : '';
			}
			if ( isset( $settings['linecolor'] ) && ! empty( $settings['linecolor'] ) ) {
				$styles .= ! empty( $settings['linecolor'] ) ? sprintf( 'text-decoration-color: %1$s;', $settings['linecolor'] ) : '';
			}
			if ( isset( $settings['linestyle'] ) && ! empty( $settings['linestyle'] ) ) {
				$styles .= ! empty( $settings['linestyle'] ) ? sprintf( 'text-decoration-style: %1$s;', $settings['linestyle'] ) : '';
			}
		}

		return $styles;
	}

	function process_icon( $icon ){
		if ( empty( $icon ) ){
			return;
		}

		$icon = preg_replace( '/%%/', '', $icon );

		// get appropriate icon
		$tmp  = caweb_get_icon_list(-1, '', true);

		$icon = isset( $tmp[ $icon ] ) ? 'ca-gov-icon-' . $tmp[$icon] : '';
		return  $icon;
	}
}

