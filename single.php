<?php

get_header();

$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );

?>

<body <?php body_class('primary'); ?>>

<?php get_template_part('partials/content', 'header') ?>

<div id="page-container">

<div id="et-main-area">

<div id="main-content" class="main-content">

<?php if ( ! ca_version_check(4) ) : ?>

	<!--div class="ca_wp_container"-->


<?php endif; ?>

<main class="main-primary">


			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>


					<div class="entry-content">

<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>

 <!-- Page Title-->


<?php if ( "on" == get_post_meta($post->ID, 'ca_custom_post_title_display', true) ) : ?>


<h1 class="page-title et_pb_row" ><?php echo $post->post_title; ?></h1>


<?php endif; ?>


					<?php
if ( ! $is_page_builder_used ){
		print '<div class="et_pb_row">';
	}

						the_content();

if ( ! $is_page_builder_used ){

							wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'Divi' ), 'after' => '</div>' ) );
}
if ( ! $is_page_builder_used ){
		print '</div>';
	}
					?>

					</div> <!-- .entry-content -->

				<?php

					if ( ! $is_page_builder_used && comments_open() && 'on' === et_get_option( 'divi_show_pagescomments', 'false' ) ) comments_template( '', true );

				?>

				</article> <!-- .et_pb_post -->

			<?php endwhile; ?>

					<span class="return-top hidden-print"></span>

</main>


<?php if ( ! ca_version_check(4) ) : ?>


  <!--/div-->

<?php endif; ?>

</div> <!-- #main-content -->

</div>

</div>

<?php get_footer(); ?>

</body>
