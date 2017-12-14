<?php

/*

	CAWeb Child Theme Functions
	Author: Jesus D. Guzman

	Sources:
	- PHP (http://php.net/)
	- Theme Development (https://codex.wordpress.org/Theme_Development)
	- Developer Resources (https://developer.wordpress.org/?s=)
	- Code Reference (https://developer.wordpress.org/reference/)
	- Plugin Action Reference (https://codex.wordpress.org/Plugin_API/Action_Reference)

*/


define('CAWebAbsPath', get_stylesheet_directory()) ;
define('CAWebUri', get_stylesheet_directory_uri()) ;

define('CAWebGoogleMapsEmbedAPIKey', 'AIzaSyCtq3i8ME-Ab_slI2D8te0Uh2PuAQVqZuE');

// After Setup Theme
function ca_setup_theme(){

// Include additional functions
require_once(CAWebAbsPath. '/functions/additional_functions.php');

// Include customizer functions
require_once(CAWebAbsPath. '/functions/customizer.php');

// Add CA Options Page
require_once(CAWebAbsPath. '/options.php');

// Add CAWeb Navigation Menu Customization to wp-admin/nav-menus.php page
require_once(CAWebAbsPath. '/functions/ca_custom_nav.php');

  // CA Metaboxes
	require_once(CAWebAbsPath. '/functions/metaboxes.php');

	// Set Predefined Category Content Types

	$ca_cats = array(
		'Courses', 'Events', 'Exams','FAQs', 'Jobs',
		 'News', 'Profiles','Publications' );

	// Insert Parent Content Type Category

	wp_insert_term('Content Types', 'category');

	// Rename Default Category to All

	wp_update_term(get_option('default_category'), 'category', array(

			'name' => 'All',

			'slug' => 'all'));



	/* Loop thru Predefined Categories and create

	Content Categories under Content Types Category */

	foreach($ca_cats as $c){

		wp_insert_term($c, 'category', array(

					'parent' => get_cat_ID('Content Types'),));

	}

	// Enable Post Thumbnails
	add_theme_support( 'post-thumbnails' );

	require_once(CAWebAbsPath. '/core/update.php');

  // Updating the following CAWeb Checkbox Options, when enabled they saved
  // as "on" this is being changed to true.
  $options = array('ca_geo_locator_enabled', 'ca_google_trans_enabled');
  $options = array_merge($options, get_ca_social_extra_options() );
  foreach( $options as $option ){
     $val = get_option($option);
     if("on" == $val )
       update_option($option, true);
   }

}

add_action('after_setup_theme', 'ca_setup_theme');

/* Remove Divi Blank Page Template */
function caweb_remove_page_templates( $templates ) {
    unset( $templates['page-template-blank.php'] );
    return $templates;
}
add_filter( 'theme_page_templates', 'caweb_remove_page_templates' );

function ca_init(){

	// Unregister Divi Project Type
	unregister_post_type( 'project' );

	// Unregister Menu Navigation Settings
	unregister_nav_menu('primary-menu');
	unregister_nav_menu('secondary-menu');
	unregister_nav_menu('footer-menu');

	// Register Menu Navigation Settings
	register_nav_menus( get_ca_nav_menu_theme_locations() );

}
add_action('init', 'ca_init');

function get_caweb_icon_url($url = '', $size = 512,  $blog_id){
	return sprintf('%1$s/images/system/caweb_logo.ico', CAWebUri);
}
add_filter('get_site_icon_url', 'get_caweb_icon_url', 10, 3);

function caweb_admin_head(){
	$icon = apply_filters('get_site_icon_url', sprintf('%1$s/images/system/caweb_logo.ico', CAWebUri), 512, get_current_blog_id() );

	printf('<link rel="icon" href="%1$s">', $icon);

  /* This will hide all WPMUDev Dashboard Feeds from Screen Options and keep their Meta Boxes open */
	print '<style>label[for^="wpmudev_dashboard_item_df"]{display: none;}div[id^="wpmudev_dashboard_item_df"] .inside{display:block !important;}</style>';
}
add_action('admin_head', 'caweb_admin_head');

/* Defer some scripts */
function defer_parsing_of_js( $tag, $handle, $src ){
  $js_scripts = array('cagov-modernizr-script', 'cagov-modernizr-extra-script', 'cagov-navigation-script',
						'cagov-ga-autotracker-script', 'cagov-google-script');
  // deferring jQuery breaks other scripts preg_match('/(jquery)[^\/]*\.js/', $tag)
  if( in_array($handle, $js_scripts) )
	  return str_replace('src', 'defer src', $tag);

  return $tag;

}
add_filter('script_loader_tag', 'defer_parsing_of_js', 10, 3);

/* Enqueue Scripts and Styles at the bottom */
function ca_theme_enqueue_style() {
	global $pagenow;

	$post_id = get_the_ID() ;
  $theme_version = wp_get_theme('CAWeb')->get('Version');

	$ver = ( ca_version_check(4, $post_id) ?  'v4' : '');
	// Enqueue Styles
	// Required in order to inherit parent theme style.css
	wp_enqueue_style(  'parent-style', get_template_directory_uri() . '/style.css', array(), $theme_version );

	if('wp-activate.php' == $pagenow   ){
		wp_enqueue_style( 'ca-core-styles', sprintf('%1$s/css/cagov.core.css',CAWebUri), array(), $theme_version );
		wp_enqueue_style( 'ca-color-styles', sprintf('%1$s/css/colorscheme-oceanside.css',CAWebUri), array(), $theme_version );
	}else{
		wp_enqueue_style( 'ca-core-styles', sprintf('%1$s/css/cagov.%2$score.css',CAWebUri, $ver) , array(), $theme_version);
		wp_enqueue_style( 'ca-color-styles', sprintf('%1$s/css/colorscheme-%2$s%3$s.css',CAWebUri, $ver, get_option('ca_site_color_scheme', 'oceanside')) , array(), $theme_version);
	}

	wp_enqueue_style( 'ca-module-styles', CAWebUri . '/css/modules.css' , array(), $theme_version);

	wp_enqueue_style( 'caweb-font-styles', CAWebUri . '/css/cagov.font-only.css', array(), $theme_version );

	wp_enqueue_style( 'ca-custom-styles', sprintf('%1$s/css/custom.css', CAWebUri, array(), $theme_version ) );
	wp_enqueue_style( 'ca-version-custom-styles', sprintf('%1$s/css/v%2$dcustom.css', CAWebUri, ca_get_version($post_id) ) , array(), $theme_version);

	// Load editor styling
	wp_dequeue_style( get_template_directory_uri(). 'css/editor-style.css' );
	add_editor_style(CAWebUri. '/css/cagov.core.css' );

	// Enqueue Scripts
	wp_register_script('cagov-modernizr-script', CAWebUri . '/js/libs/modernizr-2.0.6.min.js', array('jquery'), $theme_version , false );
	wp_register_script('cagov-modernizr-extra-script', CAWebUri . '/js/libs/modernizr-extra.min.js', array('jquery'), $theme_version , false );

 	wp_register_script('cagov-core-script',	CAWebUri. '/js/cagov.core.js', array('jquery'), $theme_version , true );
	wp_register_script('cagov-navigation-script',	CAWebUri. '/js/libs/navigation.js', array(),  $theme_version , true );
	wp_register_script('cagov-google-script',	CAWebUri. '/js/libs/google.js', array(), $theme_version , true );
	wp_register_script('cagov-ga-autotracker-script',	CAWebUri. '/js/libs/AutoTracker.js', array(), $theme_version , true );

	// Localize the search script with the correct site url
	wp_localize_script( 'cagov-google-script', 'args', array('ca_google_analytic_id' => get_option('ca_google_analytic_id'),
                                                  'ca_site_version' => ca_get_version(),
                                                  'ca_frontpage_search_enabled' => get_option('ca_frontpage_search_enabled') && is_front_page(),
                                                   'ca_google_search_id' => get_option('ca_google_search_id'),
                                                   'ca_google_trans_enabled' => get_option('ca_google_trans_enabled'),
                                                   'caweb_multi_ga' => get_site_option('caweb_multi_ga') ) );

	wp_enqueue_script( 'cagov-core-script' );
  wp_enqueue_script( 'cagov-navigation-script' );
  wp_enqueue_script( 'cagov-google-script' );
  wp_enqueue_script( 'cagov-ga-autotracker-script' );
	wp_enqueue_script( 'cagov-modernizr-script' );
	wp_enqueue_script( 'cagov-modernizr-extra-script' );

	  /* Version 5 specific scripts */
  if(ca_version_check(5,$post_id) && "on" == get_option('ca_geo_locator_enabled')){
	 wp_register_script('cagov-geolocator-script',CAWebUri. '/js/libs/geolocator.js', array('jquery'), $theme_version, true );

    wp_enqueue_script( 'cagov-geolocator-script' );
	}

  // This removes Divi Google Font CSS
  wp_deregister_style('divi-fonts');
}
add_action( 'wp_enqueue_scripts', 'ca_theme_enqueue_style',15 );

// Admin Enqueue Scripts and Styles

function ca_admin_enqueue_scripts($hook){
	$pages = array( 'toplevel_page_ca_options',  'caweb-options_page_caweb_api', 'nav-menus.php' );
  $theme_version = wp_get_theme('CAWeb')->get('Version');

	if( in_array($hook , $pages) ){
		// Enqueue Scripts
		wp_enqueue_script( 'jquery' );
		wp_enqueue_media();

		wp_enqueue_script( 'custom-header' );

		wp_register_script('browse-caweb-library',	CAWebUri. '/js/libs/browse-library.js', array('jquery'), $theme_version);
		wp_register_script('caweb-admin-scripts',	CAWebUri . '/js/caweb.admin.js', array('jquery'),$theme_version);

		wp_enqueue_script( 'browse-caweb-library' );
    // Localize the search script with the correct site url
		wp_localize_script( 'caweb-admin-scripts', 'args', array('changeCheck' => $hook) );

		wp_enqueue_script( 'caweb-admin-scripts' );

		// Enqueue Styles
			wp_enqueue_style( 'caweb-admin-styles', CAWebUri . '/css/admin_custom.css', array(), $theme_version );

	}elseif(in_array($hook, array('post.php', 'post-new.php', 'widgets.php') )){
		wp_enqueue_style( 'caweb-admin-styles', CAWebUri . '/css/admin_custom.css', array(), $theme_version );
	}

	wp_enqueue_style( 'caweb-font-styles', CAWebUri . '/css/cagov.font-only.css', array(), $theme_version );
}
add_action( 'admin_enqueue_scripts', 'ca_admin_enqueue_scripts',15);

function remove_excess_fonts(){
   // This removes Divi Builder Google Font CSS
  wp_deregister_style('et-builder-googlefonts');
}
add_action( 'wp_footer', 'remove_excess_fonts', 11);

function caweb_banner_content_filter($content, $ver = 5){
  $module = (4 == $ver ? caweb_get_shortcode_from_content($content, 'et_pb_ca_fullwidth_banner') : array() );

  /* Filter the Header Slideshow Banner */
  if( !empty($module) ){
        $slides = caweb_get_shortcode_from_content($module->content, 'et_pb_ca_fullwidth_banner_item', true);
        $carousel = '';

        foreach($slides as $i => $slide){
          $heading = '';
          $info = '';
          if("on" == $slide->display_banner_info){
            $link = (!empty( $slide->button_link ) ?  $slide->button_link : '#');

            if(!isset($slide->display_heading) || "on" == $slide->display_heading )
              $heading = sprintf('<span class="title">%1$s<br /></span>',( isset($slide->heading) ? $slide->heading : '') );


            $info = sprintf('<a href="%1$s"><p class="slide-text">%2$s%3$s</p></a>', $link, $heading, ( isset($slide->button_text) ? $slide->button_text : '') );

          }
          $carousel .= sprintf('<div class="slide" %1$s>%2$s</div> ',
                              (isset($slide->background_image) ?
                               sprintf('style="background-image: url(%1$s);"', $slide->background_image) : ""), $info);
         }

        $banner = sprintf('<div class="header-slideshow-banner">
          <div id="primary-carousel" class="carousel carousel-banner">
            %1$s</div></div>', $carousel);

  			return $banner;
  }

}

/* Adjust WP Admin Bar */
function ca_admin_bar_menu( $wp_admin_bar ) {
  /* Remove WP Admin Bar Nodes */
	$wp_admin_bar->remove_node( 'themes' );
	$wp_admin_bar->remove_node( 'menus' );
	$wp_admin_bar->remove_node( 'customize-divi-theme' );
	$wp_admin_bar->remove_node( 'customize-divi-module' );

	if ( current_user_can('manage_options') ){
		/* Add CAWeb WP Admin Bar Nodes */
		$wp_admin_bar->add_node( array(
										'id'     => 'caweb-options',
										'title'  => 'CAWeb Options',
									'href' =>  get_admin_url() . 'admin.php?page=ca_options',
									'parent' => 'site-name',
									)
								);
		/* Add (Menu) Navigation Node */
		$wp_admin_bar->add_node( array(
										'id'     => 'caweb-navigation',
										'title'  => 'Navigation',
									'href' => get_admin_url() . 'nav-menus.php',
									'parent' => 'site-name',
									)
								);

	}

	if (!is_multisite() || current_user_can('manage_network_options') ){
		$wp_admin_bar->add_node( array(
										'id'     => 'caweb-api',
										'title'  => 'GitHub API Key',
									'href' => get_admin_url() . 'admin.php?page=caweb_api',
									'parent' => 'site-name',
									)
								);
	}
}

add_action( 'admin_bar_menu', 'ca_admin_bar_menu', 1000 );


/*
	TinyMCE Editor
*/
// Add hidden MCE Buttons
// The primary toolbar (always visible)
function ca_mce_buttons( $buttons ) {
	/**
		Add in a core button that's disabled by default
	**/
  $tmp = array('formatselect', 'bold', 'italic', 'underline');
  array_splice($buttons, 0, 3, $tmp);

	return $buttons;

}
add_filter( 'mce_buttons', 'ca_mce_buttons' );

function ca_mce_buttons_2( $buttons ) {

	/**
		Add in a core button that's disabled by default
	**/

	$tmp = array('styleselect', 'strikethrough', 'hr', 'fontselect', 'fontsizeselect',
               'forecolor', 'backcolor', 'pastetext', 'copy','subscript', 'superscript');
  array_splice($buttons, 0, 5, $tmp);

	return $buttons;

}
add_filter( 'mce_buttons_2', 'ca_mce_buttons_2' );

function ca_mce_before_init_insert_formats( $init_array ) {



	// Define the style_formats array

	$style_formats = array(

		// Each array child is a format with it's own settings

		array(

			'title' => 'Featured Narrative',

			'block' => 'aside',

			'classes' => 'featured-narrative',

			'wrapper' => true,

		),

		array(

			'title' => 'Overstated List',

			'selector' => 'ul',

			'inline' => 'ul',

			'classes' => 'list-overstated',

			'wrapper' => true,

			'styles' => array(

        			'list-style-type' => 'none'),

		),

		array(

			'title' => 'Standout List',

			'selector' => 'ul',

			'inline' => 'ul',

			'classes' => 'list-standout',

			'wrapper' => true,

			'styles' => array(

        			'list-style-type' => 'none'),

		),

		array(

			'title' => 'Understated List',

			'selector' => 'ul',

			'inline' => 'ul',

			'classes' => 'list-understated',

			'wrapper' => true,

			'styles' => array(

        			'list-style-type' => 'none'),



		),

	);

	// Insert the array, JSON ENCODED, into 'style_formats'
  $init_array['style_formats'] = json_encode( $style_formats );

  // TinyMCE Toolbar Start off unhidden
	$init_array['wordpress_adv_hidden'] = false;

  return $init_array;

}

// Attach callback to 'tiny_mce_before_init'

add_filter( 'tiny_mce_before_init', 'ca_mce_before_init_insert_formats' );

function caweb_turn_off_divi_related_videos(){
 	?>
<script>
(function($) {
    $(window).bind("load", function() {
        $('.fluid-width-video-wrapper').each(function() {
            var src = $(this).find('iframe').attr('src');
            $(this).find('iframe').attr('src', src + '&amp;rel=0');
        });
    });
})(jQuery)
</script>

<?php
}
add_action('wp_head','caweb_turn_off_divi_related_videos');

function wp_ca_body_class( $wp_classes, $extra_classes ) {
  global $post;

  // List of the classes that need to be removed
  $blacklist= array('et_secondary_nav_dropdown_animation_fade',
				'et_primary_nav_dropdown_animation_fade', 'et_fixed_nav', 'et_show_nav', 'et_right_sidebar');

	// List of extra classes that need to be added to the body
  if( isset($post->ID) ){
		$divi = et_pb_is_pagebuilder_used( $post->ID );
		$sidebar_enabled = ! is_page();
		$special_templates = is_tag() || is_archive() || is_category() || is_author();

  	$whitelist = array( (  $divi && ! $special_templates ?  'divi_builder' : 'non_divi_builder' ),
                     ( "on" == get_post_meta($post->ID, 'ca_custom_post_title_display', false) ? 'title_displayed' : 'title_not_displayed' ),
                      sprintf('v%1$s', ca_get_version($post->ID) ),
                       (is_active_sidebar('sidebar-1') && $sidebar_enabled  ? 'sidebar_displayed' : 'sidebar_not_displayed'  ) );
  }
  $whitelist[] = ("on" == get_option('ca_sticky_navigation') ?  'sticky_nav' : '');

   	// Remove any classes in the blacklist from the wp_classes
  $wp_classes = array_diff( $wp_classes, $blacklist);

	// Return filtered wp class
	return  array_merge($wp_classes, (array) $whitelist);

}
add_filter( 'body_class', 'wp_ca_body_class', 20, 2 );

function wp_ca_post_class( $classes ) {
	global $post;
  
  if( has_post_thumbnail( $post->ID ) && "" == get_the_post_thumbnail_url( $post->ID ) )
		 unset( $classes[ array_search("has-post-thumbnail", $classes) ] );
  
	return $classes;
}
add_filter( 'post_class', 'wp_ca_post_class', 15 );

function wp_ca_post_class( $classes ) {
	global $post;
	
  if( ""  == get_the_post_thumbnail_url( $post->ID ) && 19979 == $post->ID ){
		unset( $classes['has-post-thumbnail'] );
	update_site_option('dev', $post );
  }
	return $classes;
}
add_filter( 'post_class', 'wp_ca_post_class' );

/*	CAWeb Custom Modules */
add_action( 'et_pagebuilder_module_init', 'caweb_initialize_divi_modules' );
function caweb_initialize_divi_modules() {

		include(CAWebAbsPath . "/builder/functions.php");
	  include(CAWebAbsPath . "/builder/layouts.php");

	if (  class_exists( 'ET_Builder_Module' ) ) {
		include(CAWebAbsPath . "/builder/class-caweb-builder-element.php");
  	$modules = glob( CAWebAbsPath . '/builder/modules/*.php' );
  	foreach ( $modules as $module_file ) {
      require_once( $module_file );
    }
	}
		if ( class_exists( 'ET_Builder_Module_Settings_Migration' ) ) {

      include(CAWebAbsPath . "/builder/modules/settings/Migration.php");
      ET_Builder_CAWeb_Module_Settings_Migration::init();
	}
}


function caweb_custom_frontend_builder_js() {
  /* FrontEnd Visual Builder */
	// This code assumes you save the file bundle.js in the child-theme root
  // e.g. /themes/custom-divi/bundle.js
  $app = trailingslashit( CAWebUri . '/builder/frontend-builder' );
	$ver = ET_BUILDER_VERSION;
	/**
	 * This code is directly copied from the original Divi theme.
	 * You can find it in Divi/includes/builder/frontend-builder/assets.php
	 * somewhere around line 107
	 */
	$fb_bundle_dependencies = apply_filters('et_fb_bundle_dependencies',
																array('jquery',	'jquery-ui-core',	'jquery-ui-draggable', 'jquery-ui-resizable', 'underscore',
                                      'jquery-ui-sortable',	'jquery-effects-core', 'iris', 'wp-color-picker',	'wp-color-picker-alpha',
                                      'react-tiny-mce',	'easypiechart',	'et_pb_admin_date_addon_js', 'salvattore',	'hashchange',
                                      'wp-shortcode')	);
	// Dequeue official bundle.js
	wp_dequeue_script( 'et-frontend-builder' );
	// Enqueue modified bundle.js
  wp_enqueue_script('et-frontend-builder',"{$app}/bundle.js",	$fb_bundle_dependencies,	$ver,		true	);

}

?>