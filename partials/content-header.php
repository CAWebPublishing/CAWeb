<?php

if( ( ca_version_check(4, $post->ID) || ca_version_check(4.5, $post->ID) )  && strpos($post->post_content, 'et_pb_ca_fullwidth_banner') > 0){
	$con = $post->post_content;
    $startPos = strpos($con , '[et_pb_ca_fullwidth_banner_item');
      $endPos = strpos($con , '[/et_pb_ca_fullwidth_banner]');
		$banner = substr($con , $startPos, $endPos - $startPos);
		 $banner = explode('[/et_pb_ca_fullwidth_banner_item]', $banner);
		unset($banner[count($banner) - 1]);
  
  $output = '<div class="header-slideshow-banner">
        <div id="primary-carousel" class="carousel carousel-banner">';

	foreach($banner as $i => $slide){
        $img = retrieve_layout_attr($slide,'background_image');
        $displaying_link = retrieve_layout_attr($slide,'display_banner_info');
        $link_heading = retrieve_layout_attr($slide,'heading');
        $link_text = retrieve_layout_attr($slide,'button_text');
        $link_url = retrieve_layout_attr($slide,'button_link');
        $desc = sprintf('<a href="%1$s"><p class="slide-text"><span class="title">%2$s</span><br>%3$s</p></a>',$link_url, $link_heading, $link_text);
    
        $output .= sprintf('<div class="slide" style="background-image: url(%1$s);">%2$s</div> ', $img, ("on" == $displaying_link ? $desc : ''));
      }

	$output .= '</div></div>';
  
}elseif("" != get_option('header_ca_background') &&  ca_version_check(4, $post->ID)  ){
	$c = get_option('header_ca_background');
}elseif(ca_version_check(4, $post->ID)  ){
	$c = sprintf('%1$s/images/system/%2$s/header-background.jpg', get_stylesheet_directory_uri(), get_option('ca_site_color_scheme'));

}

print sprintf('<header role="banner" id="header" class="global-header %1$s" %2$s>',
		( ca_version_check(5.0, $post->ID) && get_option('ca_sticky_navigation') ? 'fixed': '') , ( !empty($c) ? sprintf('style="background: #fff url(%1$s) no-repeat 100% 100%; background-size: cover;"', $c) : ''));
		// Version 5.0 Specific
		if(ca_version_check(5.0, $post->ID) ){

		print '<!-- Version 5.0 Specific -->';
		// Location Bar
    	 	require_once (get_stylesheet_directory() ."/ssi/location-bar.html");

        	// Settings Bar
         	require_once (get_stylesheet_directory() ."/ssi/settings-bar.html");

          	// Include Utility Header
           	require_once (get_stylesheet_directory() ."/ssi/utility-header.html");

		}
         ?>

  <!-- Required by Both Versions-->
 <!-- Include Mobile Controls -->

<?php require_once (get_stylesheet_directory() ."/ssi/mobile-controls.html");?>

        <!-- Include Branding -->

<?php require_once (get_stylesheet_directory() ."/ssi/branding.html");?>


        <div class="navigation-search">

<!-- Version 4 top-right search box always displayed -->
<!-- Version 5.0 fade in/out search box displays on front page and if option is enabled -->

<?php

print sprintf('<div id="head-search" class="search-container %1$s">',
( ca_version_check(5.0, $post->ID) && is_front_page() && "on" == get_option('ca_frontpage_search_enabled') ? 'featured-search fade': ''));


require_once (get_stylesheet_directory() ."/ssi/search.html");
?>


<?php
print '</div>';
?>


                     <!-- Include Navigation -->

	          <?php get_template_part('partials/content', 'navigation');?>



        </div>


<?php  if("on" == get_option('ca_google_trans_enabled') &&  (ca_version_check(4, $post->ID) || ca_version_check(4.5, $post->ID)  ) ): ?>

<div id="google_translate_element">
     <div class="skiptranslate goog-te-gadget" dir="ltr">
         <div id=":0.targetLanguage" class="goog-te-gadget-simple" style="white-space: nowrap;">

                     </div>
                          </div>
                              </div>

 <script>  function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en', gaTrack: true, autoDisplay: false, includedLanguages: 'en,ar,es,fr,ru,zh-CN,de,ja,ur', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }

</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<?php endif; ?>


<?php if( ( ca_version_check(4, $post->ID) || ca_version_check(4.5, $post->ID) )  && strpos($post->post_content, 'et_pb_ca_fullwidth_banner') > 0){ print $output;} ?>

        <div class="header-decoration"></div>

    </header>

<!-- Version 5.0 Specific -->

<?php if( "on" == get_option('site_frontpage_search_enabled') &&
	ca_version_check(5.0, $post->ID) && is_page() ): ?>

<!-- Search Results -->
    <div class="search-results-container">

	<?php require_once (get_stylesheet_directory() ."/ssi/search-results.html");?>
    </div>

<?php endif; ?>