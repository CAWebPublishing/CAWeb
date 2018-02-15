<?php
/*
Template Name: Search Results Page
*/

get_header(); 
?>
<body <?php body_class('primary') ?>  >
<?php get_template_part('partials/content', 'header') ?>
<div id="page-container">
<div id="et-main-area">
<div id="main-content" class="main-content">
  
<main class="main-primary">

      <div class="section section-default collapsed p-t-lg">
    <div class="ca_wp_container">
        <div class="agency-form">
        <h1>Search Results</h1>
       <?php
	printf('<gcse:searchbox resultsUrl="%1$s" enableAutoComplete="true"></gcse:searchbox> ', site_url('serp') )
      ?>
      </div>
    </div>
 </div>

  <?php if ( ! caweb_version_check(4) ) : ?>

	<div class="ca_wp_container">


<?php endif; ?>

				<article id="post-0" <?php post_class( 'et_pb_post not_found' ); ?>>

							<gcse:searchresults></gcse:searchresults>
				</article> <!-- .et_pb_post -->

<?php if ( ! caweb_version_check(4) ) : ?>

  </div>

<?php endif; ?>

</div> <!-- #main-content -->
</div>
</div>
<style>
.main-content{
    min-height: 1px;    
}
.et_pb_post.not_found{
    margin-bottom: 0px;
}
  button.close.close-search {
    visibility: hidden;
}

</style>

<?php get_footer(); ?>

</body>
</html>