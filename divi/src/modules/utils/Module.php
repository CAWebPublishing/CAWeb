<?php
namespace CAWeb\Modules\Utils;

use CAWeb\Modules\Utils\DepInterface;

use ET\Builder\Framework\Utility\HTMLUtility;

// class Module  {
abstract class Module implements DepInterface {

    /**
	 * Returns address in CSV format
	 *
	 * @param  array|string $addr Address to format.
	 * @return string
	 */
    public static function get_address( $addr ){
        if ( empty( $addr ) ) {
			return;
		} elseif ( is_string( $addr ) ) {
			$addr = preg_split( '/,/', $addr );
		}

		$addr = array_filter( $addr );
		$addr = implode( ', ', $addr );

		return $addr;
    }

	/**
	 * Create a GoogleMap Place Link/Embedded IFrame
	 *
	 * @param  array|string $addr Address to format.
	 * @param  mixed        $embed Whether to create a link or embedded iframe.
	 * @param  mixed        $target The links target, default _blank.
	 * @param  mixed        $classes Class for the link.
	 * @return string
	 */
    public static function render_address_map_link( $addr, $embed = false, $target = '_blank', $classes = '' ) {
		$addr = self::get_address( $addr );

        // if no address, return nothing.
        if ( empty( $addr ) ) {
            return '';
        }

        // if not embed, build link.
        if ( ! $embed ) {
            // Build link attributes.
            $attributes = array(
                'href' => sprintf( 'https://www.google.com/maps/place/%s', esc_attr( $addr ) ),
                'target' => esc_attr( $target ),
            );

            // Add classes if provided.
            if ( ! empty( $classes ) ) {
                $classes = is_array( $classes ) ? implode( ' ', $classes ) : $classes;

                $attributes['class'] = esc_attr( is_array( $classes ) ? implode( ' ', $classes ) : $classes );
            }

            // Render the anchor tag using HTMLUtility.
            return HTMLUtility::render( array(
                'tag' => 'a',
                'attributes' => $attributes,
                'children' => array( esc_html( $addr ) ),
            ) );

        // else embed.
        }else{
            // Render the iframe tag using HTMLUtility.
            return HTMLUtility::render( array(
                'tag' => 'iframe',
                'attributes' => array(
                    'title' => sprintf( 'IFrame for Address %s', esc_attr( $addr ) ),
                    'src' => sprintf( 'https://www.google.com/maps/embed/v1/place?q=%1$s&zoom=10&key=%2$s', esc_attr( $addr ), esc_attr( self::$caweb_google_maps_embed_api_key ) ),
                ),
            ) );
        }
        
	}

    /**
	 * Create icon span
	 *
	 * @param  string $icon Icon to render.
	 * @param  string $classes Classes for the span.
	 * @param  string $styles Styles for the span.
	 * @return string
	 */
	public static function get_icon_span( $icon, $classes = '', $styles = '' ) {
		// $icon = $this->process_icon( $icon );

		if ( empty( $icon ) ) {
			return;
		}

		$classes = is_array( $classes ) ? implode( ' ', $classes ) : $classes;
		$classes = ! empty( $classes ) ? " $classes" : '';

		$styles = is_array( $styles ) ? implode( ';', $styles ) : $styles;
		$styles = ! empty( $styles ) ? " style=\"$styles\"" : '';

		return sprintf( '<span class="ca-gov-icon-%1$s%2$s"%3$s></span>', $icon, $classes, $styles );
	}
}