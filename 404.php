<?php 
get_header(); 
get_template_part('partials/content', 'header') 
?>


<div id="main-content" class="main-content">
  <?php if ( ! ca_version_check(4) ) : ?>

	<div class="ca_wp_container">


<?php endif; ?>
    
    
<main class="main-primary">
  
				<article id="post-0" <?php post_class( 'et_pb_post not_found' ); ?>>
					<div class="entry-content">
<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
    <!-- Page Title-->
					<h1>Page Not Found</h1>
<div class="description">The page you requested was not found.</div>


					</div>
				</article> <!-- .et_pb_post -->
        
</main>
      
       <?php if ( ! ca_version_check(4) ) : ?>

    </div>


<?php endif; ?>
    
</div> <!-- #main-content -->

<?php get_footer(); ?>