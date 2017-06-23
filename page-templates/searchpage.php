<?php
/*
Template Name: Search Results Page
*/

get_header(); ?>

<?php get_template_part('partials/content', 'header') ?>

<div id="main-content" class="main-content">
  <div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>

      <div class="section section-default collapsed p-t-lg">
    <div class="ca_wp_container">
        <div class="agency-form">
        <h1>Search Results</h1>
       <?php
require_once (get_stylesheet_directory() ."/ssi/search.html");
      ?>
      </div>
    </div>
 </div>

  <?php if ( ! ca_version_check(4) ) : ?>

	<div class="ca_wp_container">


<?php endif; ?>

				<article id="post-0" <?php post_class( 'et_pb_post not_found' ); ?>>

					<div class="entry-content">

<div id='cse' style='width: 100%;'>Loading</div>
<!-- <script src='//www.google.com/jsapi' type='text/javascript'></script> -->
<script type='text/javascript'>
google.load('search', '1', {language: 'en', style: google.loader.themes.DEFAULT});
google.setOnLoadCallback(function() {
		var customSearchOptions = {};
		var customSearchControl = new google.search.CustomSearchControl("<?php echo get_option('ca_google_search_id'); ?>", customSearchOptions); // Step 7: Update this value with your search engine unique ID.
		customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
		customSearchControl.setLinkTarget(google.search.Search.LINK_TARGET_SELF); // use same tab instead of opening a new tab when clicking a link
		var options = new google.search.DrawOptions();
  	options.enableSearchResultsOnly();
		options.setAutoComplete(true);
		customSearchControl.draw('cse', options);
		function parseParamsFromUrl() {
				var params = {};
				var parts = window.location.search.substr(1).split('&');
				for (var i = 0; i < parts.length; i++) {
						var keyValuePair = parts[i].split('=');
						var key = decodeURIComponent(keyValuePair[0]);
						params[key] = keyValuePair[1] ?
								decodeURIComponent(keyValuePair[1].replace(/\+/g, ' ')) :
								keyValuePair[1];
				}
				return params;
		}
		var urlParams = parseParamsFromUrl();
		var queryParamName = 'q';
		if (urlParams[queryParamName]) {
				customSearchControl.execute(urlParams[queryParamName]);
		}
}, true);
</script>
<link rel='stylesheet' href='http://www.google.com/cse/style/look/default.css' type='text/css'/>




					</div>

				</article> <!-- .et_pb_post -->


<?php if ( ! ca_version_check(4) ) : ?>

  </div>

<?php endif; ?>

</div> <!-- #main-content -->

<style>
  button.close.close-search {
    visibility: hidden;
}
  .gssb_c {
		/*	table-layout: fixed;*/
		top: 340px !important;
}
</style>

<?php get_footer(); ?>
<?php if (  ca_version_check(4) ) : ?>
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
