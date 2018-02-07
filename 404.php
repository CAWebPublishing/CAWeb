<?php
		get_header();
?>
<body <?php body_class('primary') ?>  >
<?php get_template_part('partials/content', 'header') ?>


<div id="main-content" class="main-content">
  <?php if ( ! caweb_version_check(4) ) : ?>

	<div class="ca_wp_container">


<?php endif; ?>
    
    
<main class="main-primary">
  
				<article id="post-0" <?php post_class( 'et_pb_post not_found' ); ?>>
					<div class="entry-content">
<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
    <!-- Page Title-->
					<h1>Page Not Found</h1>
<div class="description">The page you requested was not found.</div>
<div class="section section-none">
        <div class="agency-form">
          <h1>Search Site For:</h1>
       <?php
	printf('<gcse:searchbox-only resultsUrl="%1$s"></gcse:searchbox-only> ', site_url('serp') )
      ?>
    </div>
 </div>

					</div>
				</article> <!-- .et_pb_post -->
        
</main>
      
       <?php if ( ! caweb_version_check(4) ) : ?>

    </div>


<?php endif; ?>
    
</div> <!-- #main-content -->

<style>
  .entry-content tr td{padding: 0px !important;border: unset !important;}
  .gsc-input{border:1px solid #DDD !important;}
</style>

<?php get_footer(); ?>

<?php if (  caweb_version_check(4) ) : ?>
<style>
.section-default .ca_wp_container {
    margin: 0;
}
.textfield-container {
    float: left;
    padding-right: 15px;
    width: calc(97% - 15px);
}
input#search_local_textfield {
    width: 100%;
}
div#head-search {
    display: none;
}
div#google_translate_element {
    top: 10px;
}
</style>

<?php endif; ?>
</body>
</html>