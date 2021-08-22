<?php
/**
 * This is a generic display for Posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package CAWeb
 */

/**
 * Loads CAWeb <header> tag.
 */
require_once 'header.php';

?>

	<div id="page-container" class="<?php print esc_attr( $caweb_post_container_class ); ?>">
	<?php do_action( 'caweb_pre_main_area' ); ?>
		<div id="et-main-area">

			<div id="main-content" class="<?php print esc_attr( $caweb_post_main_content_class ); ?>" tabindex="-1">
			<?php if ( ! $caweb_is_page_builder_used ) : ?>
			<div class="section">
			<?php endif; ?>
			<?php do_action( 'caweb_pre_main_primary' ); ?>

				<main class="main-primary">

					<?php
					while ( have_posts() ) :
						the_post();
						?>

					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

						<!-- Page Title-->
						<?php
						if ( 'on' === get_post_meta( $post->ID, 'ca_custom_post_title_display', true ) ) {
							esc_html( the_title( "<h1 class=\"$caweb_post_title_class\">", '</h1>' ) );
						}

						if ( get_option( 'ca_default_post_date_display' ) && ! $caweb_is_page_builder_used ) {
							printf( '<p class="page-date published">Published: <time datetime="%1$s">%1$s</time></p>', get_the_date( 'M d, Y' ) );
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

						?>


						<?php
						/* This defaults to the Divi Comments.php template file */
						if ( ! $caweb_is_page_builder_used && comments_open() ) {
							comments_template( '', true );
						}

						?>

					</article> <!-- .et_pb_post -->

					<?php endwhile; ?>

				</main>
				<?php
				if ( ! $caweb_is_page_builder_used && is_active_sidebar( 'sidebar-1' ) ) :
					?>
					<aside id="non_divi_sidebar" class="col-lg-3 pull-left">
					<?php
					print esc_html( get_sidebar( 'sidebar-1' ) );
					?>
					</aside>
					<?php
					endif;
				?>

			<?php if ( ! $caweb_is_page_builder_used ) : ?>
			</div>
			<?php endif; ?>
			</div> <!-- #main-content -->
		</div>
	</div>

	<?php do_action( 'caweb_pre_footer' ); ?>

	<?php get_footer(); ?>
