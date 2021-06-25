<?php 
require_once 'header.php'; 

// Post Classes.
$caweb_padding = get_option( 'ca_default_post_date_display' ) ? ' pb-0' : '';

$post_title_class = apply_filters('caweb_post_title_class', "page-title$caweb_padding" );
$post_container_class = apply_filters('caweb_post_container_class', 'page-container' );
$post_main_content_class = apply_filters('caweb_post_main_content_class', 'main-content' );
?>

	<div id="page-container" class="<?php print esc_attr( $post_container_class ); ?>">
	<?php do_action( 'caweb_pre_main_area' ); ?>
		<div id="et-main-area">

			<div id="main-content" class="<?php print esc_attr( $post_main_content_class ); ?>" tabindex="-1">
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
							esc_html( the_title( "<h1 class=\"$post_title_class\">", '</h1>' ) );
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
					<aside id="non_divi_sidebar" class="col-lg-3">
					<?php
					print esc_html( get_sidebar( 'sidebar-1' ) );
					?>
					</aside>
					<?php
					endif;
				?>
			</div> <!-- #main-content -->
		</div>
	</div>

	<?php do_action( 'caweb_pre_footer' ); ?>

	<?php get_footer(); ?>
