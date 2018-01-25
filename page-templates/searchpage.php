<?php
/*
Template Name: Search Results Page
*/

get_header(); 
get_template_part('partials/content', 'header') 

?>

<div id="page-container">
<div id="et-main-area">
<div id="main-content" class="main-content">
  
<main class="main-primary">
  <div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>

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

  <?php if ( ! ca_version_check(4) ) : ?>

	<div class="ca_wp_container">


<?php endif; ?>

				<article id="post-0" <?php post_class( 'et_pb_post not_found' ); ?>>

							<gcse:searchresults></gcse:searchresults>
				</article> <!-- .et_pb_post -->

<?php if ( ! ca_version_check(4) ) : ?>

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

<?php else: ?>
<style>
  table.gsc-search-box td.gsc-clear-button {
     display: none; 
	}
  td.gsc-search-button{
    position: relative; 
  }
  input.gsc-search-button{
    position: relative; 
  }
  span.search-icon{
    right: 63px; 
  }
  input.gsc-search-button {
    position: absolute;
    top: 2px;
    height: 51px;
    width: 48px;
    min-width: 35px ;
    right: 30px;
    opacity: 0;
}
  input.gsc-input {
    padding: 14px;
    height: 55px;
    border: 3px solid transparent;
    font-size: 1.1rem !important;
}
  input.gsc-input:focus {
    border-color: transparent;
  }
</style>

<?php endif; ?>