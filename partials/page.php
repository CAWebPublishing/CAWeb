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
?>

	<div id="page-container" class="<?php print esc_attr( apply_filters( 'caweb_ds_suffix', 'page-container' ) ); ?>">
		<div id="et-main-area">
			<div id="main-content" class="<?php print esc_attr( apply_filters( 'caweb_ds_suffix', 'main-content' ) ); ?>" tabindex="-1">
			<?php if ( ! $caweb_is_page_builder_used ) : ?>
			<div class="section">
			<?php endif; ?>
				<main class="main-primary">

					<?php
					while ( have_posts() ) :
						the_post();
						?>

					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

						<?php
						if ( 'on' === get_post_meta( $post->ID, 'ca_custom_post_title_display', true ) ) {
							print esc_html( the_title( '<!-- Page Title--><h1 class="page-title">', '</h1>' ) );
						}

						print '<div class="entry-content">';

						the_content();

						if ( ! $caweb_is_page_builder_used ) {
							wp_link_pages(
								array(
									'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'Divi' ),
									'after'  => '</div>',
								)
							);
						}

						print '</div>';

						if ( ! $caweb_is_page_builder_used && comments_open() && function_exists( 'et_get_option' ) && 'on' === et_get_option( 'divi_show_pagescomments', 'false' ) ) {
							comments_template( '', true );
						}

						?>

					</article> <!-- .et_pb_post -->

					<?php endwhile; ?>
					<span class="return-top hidden-print"></span>
				</main>
			<?php if ( ! $caweb_is_page_builder_used ) : ?>
			</div>
			<?php endif; ?>
			</div> <!-- #main-content -->
		</div>
	</div>
