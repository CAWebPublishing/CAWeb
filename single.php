<?php

get_header();
$is_page_builder_used = et_pb_is_pagebuilder_used(get_the_ID());

?>
<body <?php body_class('primary'); ?>>
<?php get_template_part('partials/content', 'header') ?>
  
<div id="page-container">
<div id="et-main-area">

<div id="main-content" class="main-content">
     
<main class="main-primary" >

			<?php while (have_posts()) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

<!-- Page Title-->
<?php
if ("on" == get_post_meta($post->ID, 'ca_custom_post_title_display', true)) {
    print the_title(sprintf('<h1 class="page-title" %1$s>',
      get_option('ca_default_post_date_display') ? 'style="padding-bottom:0;"' : ''), '</h1>');
}

if (get_option('ca_default_post_date_display') && ! $is_page_builder_used) {
    printf('<p class="page-date published">Published: <time datetime="%1$s">%1$s</time></p>', get_the_date('M d, Y'));
}

  	 print '<div class="entry-content">';

						the_content();

if ( ! $is_page_builder_used) {
    wp_link_pages(array('before' => '<div class="page-links">'.esc_html__('Pages:', 'Divi'), 'after' => '</div>'));
}

  print '</div>';

					?>


				<?php
					// This defaults to the Divi Comments.php template file
					if ( ! $is_page_builder_used && comments_open()) {
					    comments_template('', true);
					}

				?>

				</article> <!-- .et_pb_post -->

			<?php endwhile; ?>

</main>
   <?php
if ( ! $is_page_builder_used && is_active_sidebar('sidebar-1')) {
				    print '<aside id="non_divi_sidebar" class="col-lg-3">';
				    print get_sidebar('sidebar-1');
				    print '</aside>';
				}
 ?>
</div> <!-- #main-content -->
</div>
</div>

<?php get_footer(); ?>

</body>
</html>