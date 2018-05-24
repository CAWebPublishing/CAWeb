<?php
// Template Name: Search Results Page

get_header();
?>
<body <?php body_class('primary') ?>  >
<?php get_template_part('partials/content', 'header') ?>
<div id="page-container">
<div id="et-main-area">
<div id="main-content" class="main-content">

<main class="main-primary">

<div class="section section-default">
	<div class="container search-results-header">
			<h1>Search Results</h1>
			<?php
				printf('<gcse:searchbox resultsUrl="%1$s" enableAutoComplete="true"></gcse:searchbox> ', site_url('serp'))
			?>
	</div>
</div>
<div class="section">
	<div class="container" style="padding-top: 0;">
		<article id="post-0" <?php post_class('et_pb_post not_found'); ?>>
				<gcse:searchresults></gcse:searchresults>
		</article> <!-- .et_pb_post -->
	</div>
</div>	
</main>
</div> <!-- #main-content -->
</div>
</div>
<?php get_footer(); ?>
<?php if (caweb_version_check(5)) : ?>
<style>.main-content{min-height: 1px}main .container{max-width: 1280px;}#post-0{margin-bottom: 0;}table.gsc-search-box td.gsc-clear-button {display: none;}td.gsc-search-button{position: relative;}input.gsc-search-button{position: relative;}
span.search-icon{right: 63px;}input.gsc-search-button{position: absolute;top: 2px;height: 51px;width: 48px;min-width: 35px ;right: 30px;opacity: 0;}
input.gsc-input {padding: 14px;height: 55px;border: 3px solid transparent;font-size: 1.1rem !important;}input.gsc-input:focus {border-color: transparent;}
.section.section-default{padding-top: 0 !important;}</style>
<?php else: ?>	
<style>.main-content{min-height: 1px}#post-0{margin-bottom: 0;}.main-content .container{padding: 0 !important;}</style>
<?php endif; ?>
</body>
</html>