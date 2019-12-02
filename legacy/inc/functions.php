<?php





/**
 *
 * Returns all child nav_menu_items under a specific parent
 * Source http://wpsmith.net/2011/how-to-get-all-the-children-of-a-specific-nav-menu-item/
 *
 * @parent_id int the parent nav_menu_item ID
 * @nav_menu_items array nav_menu_items
 * @depth bool gives all children or direct children only
 * @nav_menu_item_list array returns filtered array of nav_menu_items
 */
function caweb_get_nav_menu_item_children( $parent_id, $nav_menu_items, $depth = true ) {
	$nav_menu_item_list = array();

	foreach ( (array) $nav_menu_items as $nav_menu_item ) {
		if ( $nav_menu_item->menu_item_parent === $parent_id ) {
			$nav_menu_item_list[] = $nav_menu_item;
			if ( $depth ) {
				if ( $children = caweb_get_nav_menu_item_children( $nav_menu_item->ID, $nav_menu_items ) ) {
					$nav_menu_item_list = array_merge( $nav_menu_item_list, $children );
				}
			}
		}
	}

	return $nav_menu_item_list;
}

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

// Get User Profile Color
function caweb_get_user_color( $element ) {
	global $_wp_admin_css_colors;

	$admin_color = get_user_option( 'admin_color' );
	$colors      = $_wp_admin_css_colors[ $admin_color ]->colors;

	return $colors[ $element ];
}

function caweb_get_tag_ID($tag_name) {
	$tag = get_term_by('name', $tag_name, 'post_tag');
	if ($tag) {
		return $tag->term_id;
	}

	return 0;
}



function caweb_banner_content_filter( $content, $ver = 5 ) {
	$module = caweb_get_shortcode_from_content( $content, 'et_pb_ca_fullwidth_banner' );

	if ( 4 !== $ver ) {
		return;
	}
	// Filter the Header Slideshow Banner
	if ( ! empty( $module ) ) {
		$slides   = caweb_get_shortcode_from_content( $module->content, 'et_pb_ca_fullwidth_banner_item', true );
		$carousel = '';

		foreach ( $slides as $i => $slide ) {
			$heading = '';
			$info    = '';
			if ( 'on' === $slide->display_banner_info ) {
				$link = ( ! empty( $slide->button_link ) ? $slide->button_link : '#' );

				if ( ! isset( $slide->display_heading ) || 'on' === $slide->display_heading ) {
					$heading = sprintf( '<span class="title">%1$s<br /></span>', ( isset( $slide->heading ) ? $slide->heading : '' ) );
				}

				$info = sprintf( '<a href="%1$s"><p class="slide-text">%2$s%3$s</p></a>', $link, $heading, ( isset( $slide->button_text ) ? $slide->button_text : '' ) );
			}
			$carousel .= sprintf(
				'<div class="slide" %1$s>%2$s</div> ',
				( isset( $slide->background_image ) ?
							   sprintf( 'style="background-image: url(%1$s);"', $slide->background_image ) : '' ),
				$info
			);
		}

		$banner = sprintf(
			'<div class="header-slideshow-banner">
          <div id="primary-carousel" class="carousel carousel-banner">
            %1$s</div></div>',
			$carousel
		);

		return $banner;
	}
}


// Merger of Divi and CAWeb Icon Font Library
add_filter( 'et_pb_font_icon_symbols', 'caweb_et_pb_font_icon_symbols' );
function caweb_et_pb_font_icon_symbols( $divi_symbols = array() ) {
	$symbols = array_values( caweb_get_icon_list() );

	return $symbols;
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

add_action( 'admin_post_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );
add_action( 'admin_post_no_priv_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );
function caweb_retrieve_attachment_post_meta() {
	if ( ! isset( $_POST['imgs'] ) || empty( $_POST['imgs'] ) || ! is_array( $_POST['imgs'] ) ) {
		return 0;
	}

	$alts = caweb_get_attachment_post_meta( $_POST['imgs'], '_wp_attachment_image_alt' );

	print json_encode( $alts );
	exit();
}





