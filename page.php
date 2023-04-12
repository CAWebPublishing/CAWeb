<?php
/**
 * This is a generic template for Pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-page
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

global $post;

$caweb_is_page_builder_used = caweb_is_divi_used();

/**
* Loads CAWeb <header> tag.
*/
get_header();

while ( have_posts() ) :
	the_post();
	?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<?php
		if ( 'on' === get_post_meta( $post->ID, 'ca_custom_post_title_display', true ) ) {
			print esc_html( the_title( sprintf( '<!-- Page Title--><h1 class="page-title%1$s">', $caweb_padding ), '</h1>' ) );
		}

		?>
		<div class="entry-content">
		<?php

			the_content();

		if ( ! $caweb_is_page_builder_used ) {
			wp_link_pages(
				array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'Divi' ),
					'after'  => '</div>',
				)
			);
		}
		?>
		</div>

		<?php
		/* This defaults to the Divi Comments.php template file */
		if ( ! $caweb_is_page_builder_used && comments_open() ) {
			comments_template( '', true );
		}

		?>

	</article>
	<?php
endwhile;

/**
 * Loads footer
 */
get_footer();
