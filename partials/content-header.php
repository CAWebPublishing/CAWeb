<?php
global $post;

$ver = caweb_get_version( get_the_ID() );
$fixed_header = ( 5 == $ver && get_option('ca_sticky_navigation') ? ' fixed': '');
$color = get_option('ca_site_color_scheme', 'oceanside');
$schemes = caweb_color_schemes( caweb_get_version( get_the_ID() ) , 'filename');	
$colorscheme = isset( $schemes[$color] ) ? $color : 'oceanside';

$default_background_img = sprintf('%1$s/images/system/%2$s/header-background.jpg',
                                 CAWebUri , $colorscheme);

$header_background_img = (4 == $ver && "" !== get_option('header_ca_background') ?
                          get_option('header_ca_background') : $default_background_img );
$header_style = (4 == $ver ? sprintf('style="background: #fff url(%1$s) no-repeat 100% 100%; background-size: cover;"', $header_background_img) : '' );

$slideshow_banner = caweb_banner_content_filter( (is_object($post) ? $post->post_content : $post['content'] ) , $ver );

?>

<header role="banner" id="header" class="global-header<?= $fixed_header; ?>" <?= $header_style; ?> >  
<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
<?php

		// Version 5.0 Specific
		if(caweb_version_check(5.0, get_the_ID()) ){

		    print '<!-- Location Bar -->';
		    // Location Bar
    	 	require_once (CAWebAbsPath ."/ssi/location-bar.html");

        
      print '<!-- Utility Header -->';
      // Include Utility Header
      get_template_part('partials/content', 'utility-header');
                  
      
      print '<!-- Settings Bar -->';
    	// Settings Bar
   	  require_once (CAWebAbsPath ."/ssi/settings-bar.html");

		}
         ?>

         <!-- Include Branding -->        
         <?php require_once (CAWebAbsPath ."/ssi/branding.html");?>
         
         <!-- Include Mobile Controls -->
         <?php require_once (CAWebAbsPath ."/ssi/mobile-controls.html");?>

        <div class="navigation-search">

<!-- Version 4 top-right search box always displayed -->
<!-- Version 5.0 fade in/out search box displays on front page and if option is enabled -->
<?php
$search = ( caweb_version_check(5, get_the_ID()) && is_front_page() &&  get_option('ca_frontpage_search_enabled') ? 'featured-search fade': '');

printf('<div id="head-search" class="search-container %1$s %2$s hidden-print">%3$s</div>',
       $search, ("" == get_option('ca_google_search_id') ? 'hidden' : '' ),
       ("page-templates/searchpage.php" !== get_page_template_slug( get_the_ID() ) ?
								sprintf('<gcse:searchbox-only resultsUrl="%1$s" enableAutoComplete="true"></gcse:searchbox-only> ', site_url('serp') ) : '') );

?>

          <!-- Include Navigation -->
					<?php
							wp_nav_menu( array('theme_location' => 'header-menu',
																'style' => ( get_option('ca_menu_selector_enabled') ?
																						get_post_meta(get_the_ID(), 'ca_default_navigation_menu',true) :
																						get_option('ca_default_navigation_menu') ),
																'home_link' => ( ! is_front_page() && get_option('ca_home_nav_link', true) ? true : false),
																'version' => caweb_get_version( get_the_ID() ),
																)
												);

					?>

        </div>

<?php  if( 'none' !== get_option('ca_google_trans_display') &&  (caweb_version_check(4, get_the_ID()) ) ): ?>

<div id="google_translate_element" class="hidden-print"></div>


<?php endif; ?>


<?php ( !empty($slideshow_banner) ? print $slideshow_banner : print '') ?>

        <div class="header-decoration hidden-print"></div>

</header>
