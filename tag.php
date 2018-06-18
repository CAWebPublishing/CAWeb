<?php



get_header();

$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );



?>

<body <?php body_class('primary'); ?>>

<?php get_template_part('partials/content', 'header') ?>

<div id="page-container">

<div id="et-main-area">

<div id="main">



<?php if ( ! $is_page_builder_used ) : ?>



	<div class="container">



		<div id="content-area" class="clearfix">



			<div id="left-area">





<?php endif; ?>



<main class="main-primary">



			<?php while ( have_posts() ) : the_post(); ?>





				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>




					<div class="entry-content">

<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>

					<?php


						the_content();



						if ( ! $is_page_builder_used )



							wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'Divi' ), 'after' => '</div>' ) );

					?>





					</div> <!-- .entry-content -->



				<?php





					if ( ! $is_page_builder_used && comments_open() && 'on' === et_get_option( 'divi_show_pagescomments', 'false' ) ) comments_template( '', true );



				?>



				</article> <!-- .et_pb_post -->



			<?php endwhile; ?>

					<span class="return-top"></span>

</main>



<?php if ( ! $is_page_builder_used ) : ?>



			</div> <!-- #left-area -->



			<?php get_sidebar(); ?>





		</div><!-- #content-area -->





	</div> <!-- .container -->











<?php endif; ?>





</div> <!-- #main-content -->

</div>

</div>



<?php get_footer(); ?>





</body>

