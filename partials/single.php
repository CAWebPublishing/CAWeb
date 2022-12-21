<?php
/**
 * This is a generic display for Posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

global $post;

$caweb_is_page_builder_used = caweb_is_divi_used();

// Post Classes.
$caweb_padding = get_option( 'ca_default_post_date_display' ) ? ' pb-0' : '';

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
							print esc_html( the_title( sprintf( '<!-- Page Title--><h1 class="page-title%1$s">', $caweb_padding ), '</h1>' ) );
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
