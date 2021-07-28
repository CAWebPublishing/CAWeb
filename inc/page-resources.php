<?php
/**
 * WordPress Template Overrides for the CAWeb Theme
 *
 * @package CAWeb
 */

add_action( 'caweb_category_main_primary', 'caweb_theme_category_template' );
add_action( 'caweb_category_sidebar', 'caweb_theme_category_template_sidebar' );

/**
 * CAWeb Category Template
 *
 * @return void
 */
function caweb_theme_category_template() {

	global $wp_query;

	$output = '';

	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();
			$post_thumbnail = '';
			$post_truncate  = '';

			if ( has_post_thumbnail() ) {
				$caweb_thumb_id  = get_post_thumbnail_id( get_the_ID() );
				$caweb_thumb_alt = get_post_meta( $caweb_thumb_id, 'wp_attachment_image_alt', true );

				$post_thumbnail = the_post_thumbnail( 'medium', '', array( 'alt' => $caweb_thumb_alt ) );
			}

			$cat_link = sprintf(
				'<a class="cat-link no-underline" href="%1$s">%2$s<span class="sr-only">Read more about %3$s</span></a>',
				get_permalink(),
				$post_thumbnail,
				get_the_title()
			);

			$divi_post_format = function_exists( 'et_divi_post_format_content' ) ? et_divi_post_format_content() : '';

			$divi_post_meta = '';

			// taken from the Divi Theme.
			if ( function_exists( 'et_divi_post_meta' ) &&
				function_exists( 'et_get_option' ) &&
				function_exists( 'et_pb_postinfo_meta' )
				) {
				$postinfo = is_single() ? et_get_option( 'divi_postinfo2' ) : et_get_option( 'divi_postinfo1' );

				if ( $postinfo ) {
					$divi_post_meta = sprintf(
						'<p class="post-meta">%1$s</p>',
						et_pb_postinfo_meta( $postinfo, et_get_option( 'divi_date_format', 'M j, Y' ), esc_html__( '0 comments', 'Divi' ), esc_html__( '1 comment', 'Divi' ), '% ' . esc_html__( 'comments', 'Divi' ) )
					);
				}
			}

			$cat_info = sprintf(
				'<div class="cat-info"><a class="title" href="%1$s"><h2>%2$s</h2></a>%3$s</div>',
				get_permalink(),
				! empty( get_the_title() ) ? get_the_title() : 'No Title',
				$divi_post_meta
			);

			if ( function_exists( 'truncate_post' ) ) {
				$post_truncate = sprintf(
					'<p>%1$s<a class="btn btn-default" href="%2$s">Read More<span class="sr-only">Read more about %3$s</span></a></p>',
					truncate_post( 270, false ),
					get_permalink(),
					get_the_title()
				);
			}

			$output .= sprintf(
				'<article id="post-%1$s" class="et_pb_post %2$s">%3$s%4$s%5$s%6$s</article><!-- .et_pb_post -->',
				get_the_ID(),
				esc_attr( implode( ' ', get_post_class( '', get_the_ID() ) ) ),
				$cat_link,
				$divi_post_format,
				$cat_info,
				$post_truncate
			);
			endwhile;

			$pagination = sprintf(
				'<div class="pagination clearfix"><div class="alignleft">%1$s</div><div class="alignright">%2$s</div></div>',
				next_posts_link( esc_html__( '&laquo; Older Entries', 'Divi' ) ),
				previous_posts_link( esc_html__( 'Next Entries &raquo;', 'Divi' ) )
			);

			$output .= $pagination;

	else :
		$output = get_template_part( 'includes/no-results', 'index' );
	endif;

	$output = apply_filters( 'caweb_category_template', $output );

	print $output;
}


/**
 * CAWeb Category Template Sidebar
 *
 * @return void
 */
function caweb_theme_category_template_sidebar() {
	$output = '';

	if ( is_active_sidebar( 'sidebar-1' ) ) {
		$output = sprintf( '<aside id="non_divi_sidebar" class="col-lg-3">%1$s</aside>', esc_html( get_sidebar( 'sidebar-1' ) ) );
	}

	$output = apply_filters( 'caweb_category_template_sidebar', $output );

	print $output;
}
