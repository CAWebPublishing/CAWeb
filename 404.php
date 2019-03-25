<?php
		get_header();
?>
<body <?php body_class('primary') ?>  >
<?php get_template_part('partials/content', 'header') ?>


<div id="main-content" class="main-content">    
<div class="section">
<main class="main-primary">
  
				<article id="post-0" <?php post_class('et_pb_post not_found'); ?>>
					<div class="entry-content">
    <!-- Page Title-->
					<h1 class="text-center">Page Not Found</h1>

					<div class="text-center" style="width:400px; margin:0 auto">
					<img src="/wp-content/themes/CAWeb/images/404.png" alt="Page not Found" />
					
					<h2>Opps... we no longer have that.</h2>
					</div>
<div class="description text-center">The page you requested was not found.</div>
<div class="section section-none">
        <div class="agency-form text-center">
          <h3>Search Site For:</h3>
       <?php
	printf('<gcse:searchbox-only resultsUrl="%1$s"></gcse:searchbox-only> ', site_url('serp'))
      ?>
    </div>
 </div>

					</div>
				</article> <!-- .et_pb_post -->
        
</main>
</div>
</div> <!-- #main-content -->

<style>
  .entry-content tr td{padding: 0px !important;border: unset !important;}
  .gsc-input{border:1px solid #DDD !important;}
</style>

<?php get_footer(); ?>

<?php if (caweb_version_check(4)) : ?>
<style>div#head-search {display: none;}div#google_translate_element { top: 10px;}</style>
<?php endif; ?>
</body>
</html>