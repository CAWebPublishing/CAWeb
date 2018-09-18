<?php
// Template Name: State v5
get_header();
$is_page_builder_used = et_pb_is_pagebuilder_used(get_the_ID());

?>
<body <?php body_class('primary') ?>  >
<?php get_template_part('partials/content', 'header') ?>
<div id="page-container">
<div id="et-main-area">


<div id="main-content" class="main-content">
<main class="main-primary">

			<?php while (have_posts()) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

<?php
if ("on" == get_post_meta($post->ID, 'ca_custom_post_title_display', true)) {
    print the_title(sprintf('<!-- Page Title--><h1 class="page-title %1$s">', ($is_page_builder_used ? 'et_pb_row' : '')), '</h1>');
}

				print '<div class="entry-content">';

						the_content();

						if ( ! $is_page_builder_used) {
						    wp_link_pages(array('before' => '<div class="page-links">'.esc_html__('Pages:', 'Divi'), 'after' => '</div>'));
						}

					print '</div>';

				if ( ! $is_page_builder_used && comments_open() && 'on' === et_get_option('divi_show_pagescomments', 'false')) {
				    comments_template('', true);
				}

				?>

				</article> <!-- .et_pb_post -->

			<?php endwhile; ?>
					<span class="return-top hidden-print"></span>
</main>
</div> <!-- #main-content -->
</div>
</div>

<?php get_footer(); ?>


</body>
</html>