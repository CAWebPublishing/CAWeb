<?php

get_header();

$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );

?>

<body <?php body_class('primary'); ?>>

<?php get_template_part('partials/content', 'header') ?>

<div id="page-container">

<div id="et-main-area">

<div id="main-content" class="main-content <?= ( ! $is_page_builder_used? 'et_pb_row' : '' ) ?>">
 
  <main class="main-primary <?= ( ! $is_page_builder_used? 'col-lg-9' : '' ) ?>"  >


			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>


					<div class="entry-content">

<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>

 <!-- Page Title-->
<?php 
if ( "on" == get_post_meta($post->ID, 'ca_custom_post_title_display', true) ) 
  	echo the_title(sprintf('<h1 class="page-title %1$s" >', ( $is_page_builder_used ? 'et_pb_row' : '' )), '</h1>');

if ( get_option('ca_default_post_date_display') && ! $is_page_builder_used ) 
   printf('<div class="page-date %1$s published">Published: <time datetime="%2$s">%2$s</time></div>', ( $is_page_builder_used ? 'et_pb_row' : '' ), get_the_date('M d, Y') );

?>


					<?php

						the_content();

if ( ! $is_page_builder_used ){

							wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'Divi' ), 'after' => '</div>' ) );
}

					?>

					</div> <!-- .entry-content -->

				<?php

					if ( ! $is_page_builder_used && comments_open() && 'on' === et_get_option( 'divi_show_pagescomments', 'false' ) ) comments_template( '', true );

				?>

				</article> <!-- .et_pb_post -->

			<?php endwhile; ?>

</main>
   <?php
if( ! $is_page_builder_used ){
   print '<div id="non_divi_sidebar" class="col-lg-3">';
		print get_sidebar() ;
    print '</div>';
}
 ?>
    
</div> <!-- #main-content -->

</div> <!-- #et-main-area -->

</div> <!-- #page-container -->

<?php get_footer(); ?>

</body>
