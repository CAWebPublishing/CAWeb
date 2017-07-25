<?php
global $post;
$post_id = -1;
$h = "";
$con = "";

if( is_object($post) ){
	$post_id = $post->ID;
	$con = $post->post_content;
}elseif( is_array($post) ){
	$post_id = $post['ID'];
	$con = $post['post_content'];
}

$ver = ca_get_version($post_id);
$module = caweb_get_shortcode_from_content($con, 'et_pb_ca_fullwidth_banner');


/* Filter the Header Slideshow Banner */
if(  4 == $ver  && !empty($module) ){
			$slides = caweb_get_shortcode_from_content($module->content, 'et_pb_ca_fullwidth_banner_item', true);
			$carousel = '';

      foreach($slides as $i => $slide){
				$heading = '';
				$info = '';
				if("on" == $slide->display_banner_info){
					$link = (!empty( $slide->button_link ) ?  $slide->button_link : '#');

					if(!isset($slide->display_heading) || "on" == $slide->display_heading )
						$heading = sprintf('<span class="title">%1$s<br /></span>', $slide->heading);


					$info = sprintf('<a href="%1$s"><p class="slide-text">%2$s%3$s</p></a>', $link, $heading, $slide->button_text);

				}
				$carousel .= sprintf('<div class="slide" style="background-image: url(%1$s);">%2$s</div> ',
													$slide->background_image, $info);
       }

			$banner = sprintf('<div class="header-slideshow-banner">
        <div id="primary-carousel" class="carousel carousel-banner">
					%1$s</div></div>', $carousel);

}elseif(4 == $ver){
		$h = ( "" != get_option('header_ca_background') ? get_option('header_ca_background') :
						sprintf('%1$s/images/system/%2$s/header-background.jpg', get_stylesheet_directory_uri(), get_option('ca_site_color_scheme', 'oceanside') )
				);
}

printf('<header role="banner" id="header" class="global-header %1$s" %2$s>',
		( ca_version_check(5.0, $post_id) && get_option('ca_sticky_navigation') ? 'fixed': '') ,
    ( !empty($h) ? sprintf('style="background: #fff url(%1$s) no-repeat 100% 100%; background-size: cover;"', $h) : ''));

		// Version 5.0 Specific
		if(ca_version_check(5.0, $post_id) ){

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
$search = ( ca_version_check(5.0, $post_id) && is_front_page() && "on" == get_option('ca_frontpage_search_enabled') ? 'featured-search fade': '');

printf('<div id="head-search" class="search-container %1$s hidden-print">%2$s</div>',
			$search, ("page-templates/searchpage.php" != get_page_template_slug( $post_id) ?
								sprintf('<gcse:searchbox-only resultsUrl="%1$s" enableAutoComplete="true"></gcse:searchbox-only> ', site_url('serp') ) : '') );

?>

          <!-- Include Navigation -->
					<?php
							wp_nav_menu( array('theme_location' => 'header-menu',
																'style' => (true == get_option('ca_menu_selector_enabled') ?
																						get_post_meta($post_id, 'ca_default_navigation_menu',true) :
																						get_option('ca_default_navigation_menu') ),
																'home_link' => ( ! is_front_page() && get_option('ca_home_nav_link', true) ? true : false),
																'version' => $ver,
																)
												);

					?>

        </div>

<?php  if("on" == get_option('ca_google_trans_enabled') &&  (ca_version_check(4, $post_id) || ca_version_check(4.5, $post_id)  ) ): ?>

<div id="google_translate_element" class="hidden-print"></div>

 <script>  function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en', gaTrack: true, autoDisplay: false,  layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }

</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<?php endif; ?>


<?php ( !empty($banner) ? print $banner : print '') ?>

        <div class="header-decoration hidden-print"></div>

</header>
