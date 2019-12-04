<?php
/**
 * Module functions
 * 
 * @todo Move to plugin extension 
 * @package CAWeb
 */


function caweb_return_posts( $cats = array(), $tags = array(), $post_amount = -1, $orderby = 'post_date', $order = 'DESC' ) {
	$posts_array = array();

	$req_array = array();

	$args['category'] = ( ! empty( $cats ) ? ( is_array( $cats ) ? implode( ',', $cats ) : $cats ) : array() );

	$args += array(
		'posts_per_page'    => $post_amount,
		'orderby'           => $orderby,
		'order'             => $order,
		'post_type'         => 'post',
		'post_status'       => 'publish',
		'suppress_filters'  => true,
	);

	$posts_array = get_posts( $args );

	if ( ! empty( $tags ) ) {
		foreach ( $posts_array as $p => $i ) {
			// return posts tags
			$tag_ids = wp_get_post_tags( $i->ID, array( 'fields' => 'ids' ) );

			if ( empty( $tag_ids ) ) {
				unset( $posts_array[ $p ] );
			} else {
				// iterate through the tags
				$tags = ( ! is_array( $tags ) ? preg_split( '/\D/', $tags ) : $tags );
				foreach ( $tag_ids as $k ) {
					if ( ! in_array( $k, $tags ) ) {
						unset( $posts_array[ $p ] );
					}
				}
			}
		}
	}

	return $posts_array;
}

if ( ! function_exists( 'caweb_get_excerpt' ) ) {
	function caweb_get_excerpt( $con, $excerpt_length, $p = -1 ) {
		if ( empty( $con ) ) {
			return $con;
		}

		// Regex pattern to find the end of strong, p, span, a and br tags
		$pattern = '/&lt;\/strong&gt;|&lt;\/p&gt;|&lt;\/span&gt;|&lt;\/a&gt;|&lt;br[\s]+\/&gt;/';

		// Split content by regex pattern
		$con_array = preg_split( $pattern, htmlentities( strip_tags( $con, '<strong><p><span><a><br>' ) ), -1 );
		// Store regex matches
		preg_match_all( $pattern, htmlentities( strip_tags( $con, '<strong><p><span><a><br>' ) ), $match_array, PREG_OFFSET_CAPTURE );

		$excerpt   = array();
		$wordCount = 0;

		// Iterate thru content splits
		foreach ( $con_array as $i => $line ) {
			// strip all tags in the line and return every word
			$cleaned = explode( ' ', strip_tags( html_entity_decode( $line ) ) );

			// if there was a match for the line save it and append
			$matching_end  = '';
			$matching_end  = isset( $match_array[0][ $i ][0] ) && ! empty( $match_array[0][ $i ][0] ) ? $match_array[0][ $i ][0] : '<br>';
			$excerpt[ $i ] = $line . $matching_end;

			if ( ! empty( $line ) ) {
				$wordCount += count( $cleaned );
			}

			if ( $excerpt_length < $wordCount ) {
				do {
					$wordCount--;

					if ( ! isset( $cleaned[ count( $cleaned ) - 1 ] ) ) {
						break;
					}

					$lastWord = $cleaned[ count( $cleaned ) - 1 ];

					$line = substr( $line, 0, strrpos( $line, ' ' ) );

					$cleaned = array_filter( explode( ' ', strip_tags( html_entity_decode( $line ) ) ) );

					if ( $excerpt_length >= $wordCount ) {
						$line .= '...';
					}

					$excerpt[ $i ] = $line . $matching_end;
				} while ( $excerpt_length < $wordCount );

				break;
			}
		}

		$x = new DOMDocument();
		$x->loadHTML( sprintf( '<div class="post-%1$s-excerpt">%2$s</div>', $p, trim( implode( '', $excerpt ) ) ) );
		$element = $x->getElementById( "post-$p-excerpt" );

		return html_entity_decode( $x->saveHTML( $element ) );
	}
}

function caweb_get_the_post_thumbnail( $post = null, $size = 'thumbnail', $attr = '', $pixel_size = array() ) {
	if ( is_array( $size ) ) {
		if ( empty( $pixel_size ) && 2 === count( $size ) ) {
			$pixel_size = $size;
		}
		$size = 'thumbnail';
	}
	$thumbnail = get_the_post_thumbnail( $post, $size, $attr );

	// if there is no thumbnail return
	if ( empty( $thumbnail ) ) {
		return;
	}
	// theres is a thumbnail, and the pixel sizes is empty or has more than 2 elements
	// return the thumbnail untouched
	if ( empty( $pixel_size ) || 2 !== count( $pixel_size ) ) {
		return $thumbnail;
	}

	// remove the current width and height size attributes and
	// srcset attribute
	$thumbnail = preg_replace( array( '/(width|height)=\"\d*\"\s/', '/(width|height):[\s\d\w]*;?/', '/(srcset)=\".*\"/' ), '', $thumbnail );

	$style = '';
	// remove style attribute
	if ( preg_match( '/style=\"([\w\d\s]*)\"/', $thumbnail, $matches ) ) {
		$style     = $matches[1];
		$thumbnail = preg_replace( array( '/style=\"([\w\d\s]*)\"/' ), '', $thumbnail );
	}

	$new_img = sprintf( '<img style="width:%1$spx;height:%2$spx;%3$s" ', $pixel_size[0], $pixel_size[1], $style );

	$thumbnail = preg_replace( '/<img /', $new_img, $thumbnail );

	return $thumbnail;
}


