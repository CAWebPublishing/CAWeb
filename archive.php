<?php
		get_header();

?>
<body <?php body_class('primary') ?>  >
<?php get_template_part('partials/content', 'header') ?>


<div id="page-container">
<div id="et-main-area">
<div id="main-content" class="main-content ca_wp_container">
	<main class="main-primary" >

			<?php

      global $wp_query;

			if ( have_posts() ) :
				while ( have_posts() ) : the_post();
					$post_format = et_pb_post_format();
					?>
					<article id="post-<?php the_ID(); ?>" <?php post_class( 'et_pb_post' ); ?>>

				<?php

						if( has_post_thumbnail() ){
				 ?>
						 <a href="<?php the_permalink(); ?>">
						<?php  the_post_thumbnail( 'medium','style=max-width:200px;height:200px;padding-right:20px;padding-bottom:15px;float:left;'); ?>
						 </a>
					 <?php

					}
					et_divi_post_format_content();
				?>
            <div class="archive-info">
						<h2 class="page-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
           <?php et_divi_post_meta(); ?>
            </div>
           <?php

					if ( 'on' !== et_get_option( 'divi_blog_style', 'false' ) || ( is_search() && ( 'on' === get_post_meta( get_the_ID(), '_et_pb_use_builder', true ) ) ) ) {
							truncate_post( 270 );
						} else {
							the_content();
						}
          ?>
					</article> <!-- .et_pb_post -->
			<?php
					endwhile;
			?>
      <div class="pagination ca_wp_container clearfix">
        <div class="alignleft"><?php next_posts_link(esc_html__('&laquo; Older Entries','Divi')); ?></div>
        <div class="alignright"><?php previous_posts_link(esc_html__('Next Entries &raquo;', 'Divi')); ?></div>
      </div>
			<?php
				else :
					get_template_part( 'includes/no-results', 'index' );
				endif;
			?>
  </main>
  <?php
if(  is_active_sidebar('sidebar-1') ){
   print '<aside id="non_divi_sidebar" class="col-lg-3">';
		print get_sidebar('sidebar-1') ;
    print '</aside>';
}
 ?>
</div> <!-- #main-content -->
</div>
</div>
<?php get_footer(); ?>
</body>
