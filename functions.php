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
                                                   'ca_google_trans_enabled' => get_option('ca_google_trans_enabled')) );

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

function ca_mce_buttons_2( $buttons ) {

	/**

		Add in a core button that's disabled by default

	 */

	array_unshift( $buttons, 'styleselect' );

	//$buttons[] = 'cut';

	//$buttons[] = 'copy';

	//$buttons[] = 'superscript';

	//$buttons[] = 'subscript';

	return $buttons;

}

add_filter( 'mce_buttons_2', 'ca_mce_buttons_2' );





function ca_mce_before_init_insert_formats( $init_array ) {



	// Define the style_formats array

	$style_formats = array(

		// Each array child is a format with it's own settings

		array(

			'title' => 'Block Quote',

			'block' => 'blockquote',

			'wrapper' => true,

		),

		array(

			'title' => 'Block Quote Cite',

			'block' => 'footer',

			'wrapper' => true,

			'exact' => false,

		),

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
    	// List of the classes that need to be removed
   	 $blacklist= array('et_secondary_nav_dropdown_animation_fade',
				'et_primary_nav_dropdown_animation_fade', 'et_fixed_nav', 'et_show_nav');

	// List of extra classes that need to be added to the body
	$whitelist = array( ("on" == get_option('ca_sticky_navigation') ?  'sticky_nav' : '') ,  );

   	// Remove any classes in the blacklist from the wp_classes
	$wp_classes = array_diff( $wp_classes, $blacklist);

	// Return filtered wp class
	return  array_merge($wp_classes, (array) $whitelist);

}

add_filter( 'body_class', 'wp_ca_body_class', 12, 2 );

/*	CAWeb Custom Modules */
add_action( 'et_builder_ready', 'caweb_initialize_divi_modules' );
function caweb_initialize_divi_modules() {
	if ( ! class_exists( 'ET_Builder_Module' ) ) { return; }

		include(CAWebAbsPath . "/builder/functions.php");
		include(CAWebAbsPath . "/builder/class-caweb-builder-element.php");
		include(CAWebAbsPath . "/builder/special-modules.php");
		include(CAWebAbsPath . "/builder/main-modules.php");
		include(CAWebAbsPath . "/builder/main-fullwidth-modules.php");
		include(CAWebAbsPath . "/builder/layouts.php");

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
add_action( 'wp_enqueue_scripts', 'caweb_custom_frontend_builder_js', 99 );
	/**
	 * This function is directly copied from the original Divi theme.
	 * You can find it in Divi/includes/builder/functions.php
	 * somewhere around line 2314. Its copied so we can enqueue our
	 * modified Divi/includes/builder/scripts/builder.js file
	 * which adds the following line before the et_pb_icon_font_init() function:
	 * current_symbol_val = current_symbol_val.replace( /"/g, '%22' );
	 */
if ( ! function_exists( 'et_pb_add_builder_page_js_css' ) ) :
function et_pb_add_builder_page_js_css(){
	global $typenow, $post;


	// BEGIN Process shortcodes (for module settings migrations and Yoast SEO compatibility)
	// Get list of shortcodes that causes issue if being triggered in admin
	$conflicting_shortcodes = et_pb_admin_excluded_shortcodes();

	if ( ! empty( $conflicting_shortcodes ) ) {
		foreach ( $conflicting_shortcodes as $shortcode ) {
			remove_shortcode( $shortcode );
		}
	}

	// save the original content of $post variable
	$post_original = $post;
	// get the content for yoast
	$post_content_processed = do_shortcode( $post->post_content );
	// set the $post to the original content to make sure it wasn't changed by do_shortcode()
	$post = $post_original;
	// END Process shortcodes

	$is_global_template = '';
	$post_id = '';
	$post_type = $typenow;
	$selective_sync_status = '';
	$global_module_type = '';
	$excluded_global_options = array();

	// we need some post data when editing saved templates.
	if ( 'et_pb_layout' === $typenow ) {
		$template_scope = wp_get_object_terms( get_the_ID(), 'scope' );
		$template_type = wp_get_object_terms( get_the_ID(), 'layout_type' );
		$is_global_template = ! empty( $template_scope[0] ) ? $template_scope[0]->slug : 'regular';
		$global_module_type = ! empty( $template_type[0] ) ? $template_type[0]->slug : '';
		$post_id = get_the_ID();

		// Check whether it's a Global item's page and display wp error if Global items disabled for current user
		if ( ! et_pb_is_allowed( 'edit_global_library' ) && 'global' === $is_global_template ) {
			wp_die( esc_html__( "you don't have sufficient permissions to access this page", 'et_builder' ) );
		}

		if ( 'global' === $is_global_template ) {
			$excluded_global_options = get_post_meta( $post_id, '_et_pb_excluded_global_options' );
			$selective_sync_status = empty( $excluded_global_options ) ? '' : 'updated';
		}

		$built_for_post_type = get_post_meta( get_the_ID(), '_et_pb_built_for_post_type', true );
		$built_for_post_type = '' !== $built_for_post_type ? $built_for_post_type : 'page';
		$post_type = apply_filters( 'et_pb_built_for_post_type', $built_for_post_type, get_the_ID() );
	}

	// we need this data to create the filter when adding saved modules
	$layout_categories = get_terms( 'layout_category' );
	$layout_cat_data = array();
	$layout_cat_data_json = '';

	if ( is_array( $layout_categories ) && ! empty( $layout_categories ) ) {
		foreach( $layout_categories as $category ) {
			$layout_cat_data[] = array(
				'slug' => $category->slug,
				'name' => $category->name,
			);
		}
	}
	if ( ! empty( $layout_cat_data ) ) {
		$layout_cat_data_json = json_encode( $layout_cat_data );
	}

	// Set fixed protocol for preview URL to prevent cross origin issue
	$preview_scheme = is_ssl() ? 'https' : 'http';

	$preview_url = esc_url( home_url( '/' ) );

	if ( 'https' === $preview_scheme && ! strpos( $preview_url, 'https://' ) ) {
		$preview_url = str_replace( 'http://', 'https://', $preview_url );
	}

	// force update cache if et_pb_clear_templates_cache option is set to on
	$force_cache_value  = et_get_option( 'et_pb_clear_templates_cache', '' );
	$force_cache_update = '' !== $force_cache_value ? $force_cache_value : ET_BUILDER_FORCE_CACHE_PURGE;

	/**
	 * Whether or not the backend builder should clear its Backbone template cache.
	 *
	 * @param bool $force_cache_update
	 */
	$force_cache_update = apply_filters( 'et_pb_clear_template_cache', $force_cache_update );

	// delete et_pb_clear_templates_cache option it's not needed anymore
	et_delete_option( 'et_pb_clear_templates_cache' );

	wp_enqueue_script( 'jquery-ui-core' );
	wp_enqueue_script( 'underscore' );
	wp_enqueue_script( 'backbone' );

	if ( et_pb_enqueue_google_maps_script() ) {
		wp_enqueue_script( 'google-maps-api', esc_url( add_query_arg( array( 'key' => et_pb_get_google_api_key(), 'callback' => 'initMap' ), is_ssl() ? 'https://maps.googleapis.com/maps/api/js' : 'http://maps.googleapis.com/maps/api/js' ) ), array(), '3', true );
	}

	wp_enqueue_script( 'wp-color-picker' );
	wp_enqueue_style( 'wp-color-picker' );
	wp_enqueue_script( 'wp-color-picker-alpha', ET_BUILDER_URI . '/scripts/ext/wp-color-picker-alpha.min.js', array( 'jquery', 'wp-color-picker' ), ET_BUILDER_VERSION, true );
	wp_register_script( 'chart', ET_BUILDER_URI . '/scripts/ext/chart.min.js', array(), ET_BUILDER_VERSION, true );
	wp_register_script( 'jquery-tablesorter', ET_BUILDER_URI . '/scripts/ext/jquery.tablesorter.min.js', array( 'jquery' ), ET_BUILDER_VERSION, true );

	// load 1.10.4 versions of jQuery-ui scripts if WP version is less than 4.5, load 1.11.4 version otherwise
	if ( et_pb_is_wp_old_version() ) {
		$jQuery_ui = 'et_pb_admin_date_js';
		wp_enqueue_script( $jQuery_ui, ET_BUILDER_URI . '/scripts/ext/jquery-ui-1.10.4.custom.min.js', array( 'jquery' ), ET_BUILDER_VERSION, true );
	} else {
		$jQuery_ui = 'jquery-ui-datepicker';
	}

	wp_enqueue_script( 'et_pb_admin_date_addon_js', ET_BUILDER_URI . '/scripts/ext/jquery-ui-timepicker-addon.js', array( $jQuery_ui ), ET_BUILDER_VERSION, true );

	wp_enqueue_script( 'validation', ET_BUILDER_URI . '/scripts/ext/jquery.validate.js', array( 'jquery' ), ET_BUILDER_VERSION, true );
	wp_enqueue_script( 'minicolors', ET_BUILDER_URI . '/scripts/ext/jquery.minicolors.js', array( 'jquery' ), ET_BUILDER_VERSION, true );

	wp_enqueue_script( 'et_pb_cache_notice_js', ET_BUILDER_URI .'/scripts/cache_notice.js', array( 'jquery', 'et_pb_admin_js', 'et_pb_admin_global_js' ), ET_BUILDER_VERSION, true );

	wp_localize_script( 'et_pb_cache_notice_js', 'et_pb_notice_options', apply_filters( 'et_pb_notice_options_builder', array(
		'product_version'  => ET_BUILDER_PRODUCT_VERSION,
	) ) );

	wp_enqueue_script( 'et_pb_media_library', ET_BUILDER_URI . '/scripts/ext/media-library.js', array( 'media-editor' ), ET_BUILDER_VERSION, true );

	wp_enqueue_script( 'et_pb_admin_js', CAWebUri .'/builder/builder.js', array( 'jquery', 'jquery-ui-core', 'underscore', 'backbone', 'chart', 'jquery-tablesorter', 'et_pb_admin_global_js', 'et_pb_media_library' ), ET_BUILDER_VERSION, true );

	wp_localize_script( 'et_pb_admin_js', 'et_pb_options', apply_filters( 'et_pb_options_builder', array_merge( array(
		'debug'                                    => false,
		'ajaxurl'                                  => admin_url( 'admin-ajax.php' ),
		'home_url'                                 => home_url(),
		'cookie_path'                              => SITECOOKIEPATH,
		'preview_url'                              => add_query_arg( 'et_pb_preview', 'true', $preview_url ),
		'et_admin_load_nonce'                      => wp_create_nonce( 'et_admin_load_nonce' ),
		'images_uri'                               => ET_BUILDER_URI .'/images',
		'post_type'                                => $post_type,
		'et_builder_module_parent_shortcodes'      => ET_Builder_Element::get_parent_shortcodes( $post_type ),
		'et_builder_module_child_shortcodes'       => ET_Builder_Element::get_child_shortcodes( $post_type ),
		'et_builder_module_raw_content_shortcodes' => ET_Builder_Element::get_raw_content_shortcodes( $post_type ),
		'et_builder_modules'                       => ET_Builder_Element::get_modules_js_array( $post_type ),
		'et_builder_modules_count'                 => ET_Builder_Element::get_modules_count( $post_type ),
		'et_builder_modules_with_children'         => ET_Builder_Element::get_shortcodes_with_children( $post_type ),
		'et_builder_modules_featured_image_background' => ET_Builder_Element::get_featured_image_background_modules( $post_type ),
		'et_builder_templates_amount'              => ET_BUILDER_AJAX_TEMPLATES_AMOUNT,
		'default_initial_column_type'              => apply_filters( 'et_builder_default_initial_column_type', '4_4' ),
		'default_initial_text_module'              => apply_filters( 'et_builder_default_initial_text_module', 'et_pb_text' ),
		'section_only_row_dragged_away'            => esc_html__( 'The section should have at least one row.', 'et_builder' ),
		'fullwidth_module_dragged_away'            => esc_html__( 'Fullwidth module can\'t be used outside of the Fullwidth Section.', 'et_builder' ),
		'stop_dropping_3_col_row'                  => esc_html__( '3 column row can\'t be used in this column.', 'et_builder' ),
		'preview_image'                            => esc_html__( 'Preview', 'et_builder' ),
		'empty_admin_label'                        => esc_html__( 'Module', 'et_builder' ),
		'video_module_image_error'                 => esc_html__( 'Still images cannot be generated from this video service and/or this video format', 'et_builder' ),
		'geocode_error'                            => esc_html__( 'Geocode was not successful for the following reason', 'et_builder' ),
		'geocode_error_2'                          => esc_html__( 'Geocoder failed due to', 'et_builder' ),
		'no_results'                               => esc_html__( 'No results found', 'et_builder' ),
		'all_tab_options_hidden'                   => esc_html__( 'No available options for this configuration.', 'et_builder' ),
		'update_global_module'                     => esc_html__( 'You\'re about to update global module. This change will be applied to all pages where you use this module. Press OK if you want to update this module', 'et_builder' ),
		'global_row_alert'                         => esc_html__( 'You cannot add global rows into global sections', 'et_builder' ),
		'global_module_alert'                      => esc_html__( 'You cannot add global modules into global sections or rows', 'et_builder' ),
		'all_cat_text'                             => esc_html__( 'All Categories', 'et_builder' ),
		'is_global_template'                       => $is_global_template,
		'selective_sync_status'                    => $selective_sync_status,
		'global_module_type'                       => $global_module_type,
		'excluded_global_options'                  => isset( $excluded_global_options[0] ) ? json_decode( $excluded_global_options[0] ) : array(),
		'template_post_id'                         => $post_id,
		'layout_categories'                        => $layout_cat_data_json,
		'map_pin_address_error'                    => esc_html__( 'Map Pin Address cannot be empty', 'et_builder' ),
		'map_pin_address_invalid'                  => esc_html__( 'Invalid Pin and address data. Please try again.', 'et_builder' ),
		'locked_section_permission_alert'          => esc_html__( 'You do not have permission to unlock this section.', 'et_builder' ),
		'locked_row_permission_alert'              => esc_html__( 'You do not have permission to unlock this row.', 'et_builder' ),
		'locked_module_permission_alert'           => esc_html__( 'You do not have permission to unlock this module.', 'et_builder' ),
		'locked_item_permission_alert'             => esc_html__( 'You do not have permission to perform this task.', 'et_builder' ),
		'localstorage_unavailability_alert'        => esc_html__( 'Unable to perform copy/paste process due to inavailability of localStorage feature in your browser. Please use latest modern browser (Chrome, Firefox, or Safari) to perform copy/paste process', 'et_builder' ),
		'invalid_color'                            => esc_html__( 'Invalid Color', 'et_builder' ),
		'et_pb_preview_nonce'                      => wp_create_nonce( 'et_pb_preview_nonce' ),
		'is_divi_library'                          => 'et_pb_layout' === $typenow ? 1 : 0,
		'layout_type'                              => 'et_pb_layout' === $typenow ? et_pb_get_layout_type( get_the_ID() ) : 0,
		'is_plugin_used'                           => et_is_builder_plugin_active(),
		'yoast_content'                            => et_is_yoast_seo_plugin_active() ? $post_content_processed : '',
		'ab_db_status'                             => true === et_pb_db_status_up_to_date() ? 'exists' : 'not_exists',
		'ab_testing_builder_nonce'                 => wp_create_nonce( 'ab_testing_builder_nonce' ),
		'page_color_palette'                       => get_post_meta( get_the_ID(), '_et_pb_color_palette', true ),
		'default_color_palette'                    => implode( '|', et_pb_get_default_color_palette() ),
		'page_section_bg_color'                    => get_post_meta( get_the_ID(), '_et_pb_section_background_color', true ),
		'page_gutter_width'                        => '' !== ( $saved_gutter_width = get_post_meta( get_the_ID(), '_et_pb_gutter_width', true ) ) ? $saved_gutter_width : et_get_option( 'gutter_width', 3 ),
		'product_version'                          => ET_BUILDER_PRODUCT_VERSION,
		'force_cache_purge'                        => $force_cache_update ? 'true' : 'false',
		'memory_limit_increased'                   => esc_html__( 'Your memory limit has been increased', 'et_builder' ),
		'memory_limit_not_increased'               => esc_html__( "Your memory limit can't be changed automatically", 'et_builder' ),
		'google_api_key'                           => et_pb_get_google_api_key(),
		'options_page_url'                         => et_pb_get_options_page_link(),
		'et_pb_google_maps_script_notice'          => et_pb_enqueue_google_maps_script(),
		'select_text'                              => esc_html__( 'Select', 'et_builder' ),
		'et_fb_autosave_nonce'                     => wp_create_nonce( 'et_fb_autosave_nonce' ),
		'et_builder_email_fetch_lists_nonce'       => wp_create_nonce( 'et_builder_email_fetch_lists_nonce' ),
		'et_builder_email_add_account_nonce'       => wp_create_nonce( 'et_builder_email_add_account_nonce' ),
		'et_builder_email_remove_account_nonce'    => wp_create_nonce( 'et_builder_email_remove_account_nonce' ),
		'et_pb_module_settings_migrations'         => ET_Builder_Module_Settings_Migration::$migrated,
		'acceptable_css_string_values'             => et_builder_get_acceptable_css_string_values( 'all' ),
	), et_pb_history_localization() ) ) );

	wp_localize_script( 'et_pb_admin_js', 'et_pb_ab_js_options', apply_filters( 'et_pb_ab_js_options', array(
		'test_id'                    => $post->ID,
		'has_report'                 => et_pb_ab_has_report( $post->ID ),
		'has_permission'             => et_pb_is_allowed( 'ab_testing' ),
		'refresh_interval_duration'  => et_pb_ab_get_refresh_interval_duration( $post->ID ),
		'refresh_interval_durations' => et_pb_ab_refresh_interval_durations(),
		'analysis_formula'           => et_pb_ab_get_analysis_formulas(),
		'have_conversions'           => et_pb_ab_get_modules_have_conversions(),
		'sales_title'                => esc_html__( 'Sales', 'et_builder' ),
		'force_cache_purge'          => $force_cache_update,
		'total_title'                => esc_html__( 'Total', 'et_builder' ),

		// Saved data
		'subjects_rank' => ( 'on' === get_post_meta( $post->ID, '_et_pb_use_builder', true ) ) ? et_pb_ab_get_saved_subjects_ranks( $post->ID ) : false,

		// Rank color
		'subjects_rank_color' => et_pb_ab_get_subject_rank_colors(),

		// Configuration
		'has_no_permission' => array(
			'title' => esc_html__( 'Unauthorized Action', 'et_builder' ),
			'desc' => esc_html__( 'You do not have permission to edit the module, row or section in this split test.', 'et_builder' ),
		),
		'select_ab_testing_subject' => array(
			'title' => esc_html__( 'Select Split Testing Subject', 'et_builder' ),
			'desc' => esc_html__( 'You have activated the Divi Leads Split Testing System. Using split testing, you can create different element variations on your page to find out which variation most positively affects the conversion rate of your desired goal. After closing this window, please click on the section, row or module that you would like to split test.', 'et_builder' ),
		),
		'select_ab_testing_goal' => array(
			'title' => esc_html__( 'Select Your Goal', 'et_builder' ),
			'desc'  => esc_html__( 'Congratulations, you have selected a split testing subject! Next you need to select your goal. After closing this window, please click the section, row or module that you want to use as your goal. Depending on the element you choose, Divi will track relevant conversion rates for clicks, reads or sales. For example, if you select a Call To Action module as your goal, then Divi will track how variations in your test subjects affect how often visitors read and click the button in your Call To Action module. The test subject itself can also be selected as your goal.', 'et_builder' ),
		),
		'configure_ab_testing_alternative' => array(
			'title' => esc_html__( 'Configure Subject Variations', 'et_builder' ),
			'desc'  => esc_html__( 'Congratulations, your split test is ready to go! You will notice that your split testing subject has been duplicated. Each split testing variation will be displayed to your visitors and statistics will be collected to figure out which variation results in the highest goal conversion rate. Your test will begin when you save this page.', 'et_builder' ),
		),
		'select_ab_testing_winner_first' => array(
			'title' => esc_html__( 'Select Split Testing Winner', 'et_builder' ),
			'desc'  => esc_html__( 'Before ending your split test, you must choose which split testing variation to keep. Please select your favorite or highest converting subject. Alternative split testing subjects will be removed.', 'et_builder' ),
		),
		'select_ab_testing_subject_first' => array(
			'title' => esc_html__( 'Select Split Testing Subject', 'et_builder' ),
			'desc'  => esc_html__( 'You need to select a split testing subject first.', 'et_builder' ),
		),
		'select_ab_testing_goal_first' => array(
			'title' => esc_html__( 'Select Split Testing Goal', 'et_builder' ),
			'desc'  => esc_html__( 'You need to select a split testing goal first. ', 'et_builder' ),
		),
		'cannot_select_subject_parent_as_goal' => array(
			'title' => esc_html__( 'Select A Different Goal', 'et_builder' ),
			'desc'  => esc_html__( 'This element cannot be used as a your split testing goal. Please select a different module, or section.', 'et_builder' ),
		),

		// Save to Library
		'cannot_save_app_layout_has_ab_testing' => array(
			'title' => esc_html__( 'Can\'t Save Layout', 'et_builder' ),
			'desc'  => esc_html__( 'You cannot save layout while a split test is running. Please end your split test and then try again.', 'et_builder' ),
		),

		'cannot_save_section_layout_has_ab_testing' => array(
			'title' => esc_html__( 'Can\'t Save Section', 'et_builder' ),
			'desc'  => esc_html__( 'You cannot save this section while a split test is running. Please end your split test and then try again.', 'et_builder' ),
		),

		'cannot_save_row_layout_has_ab_testing' => array(
			'title' => esc_html__( 'Can\'t Save Row', 'et_builder' ),
			'desc'  => esc_html__( 'You cannot save this row while a split test is running. Please end your split test and then try again.', 'et_builder' ),
		),

		'cannot_save_row_inner_layout_has_ab_testing' => array(
			'title' => esc_html__( 'Can\'t Save Row', 'et_builder' ),
			'desc'  => esc_html__( 'You cannot save this row while a split test is running. Please end your split test and then try again.', 'et_builder' ),
		),

		'cannot_save_module_layout_has_ab_testing' => array(
			'title' => esc_html__( 'Can\'t Save Module', 'et_builder' ),
			'desc'  => esc_html__( 'You cannot save this module while a split test is running. Please end your split test and then try again.', 'et_builder' ),
		),

		// Load / Clear Layout
		'cannot_load_layout_has_ab_testing' => array(
			'title' => esc_html__( 'Can\'t Load Layout', 'et_builder' ),
			'desc'  => esc_html__( 'You cannot load a new layout while a split test is running. Please end your split test and then try again.', 'et_builder' ),
		),
		'cannot_clear_layout_has_ab_testing' => array(
			'title' => esc_html__( 'Can\'t Clear Layout', 'et_builder' ),
			'desc'  => esc_html__( 'You cannot clear your layout while a split testing is running. Please end your split test before clearing your layout.', 'et_builder' ),
		),

		// Cannot Import / Export Layout (Portability)
		'cannot_import_export_layout_has_ab_testing' => array(
			'title' => esc_html__( "Can't Import/Export Layout", 'et_builder' ),
			'desc'  => esc_html__( 'You cannot import or export a layout while a split test is running. Please end your split test and then try again.', 'et_builder' ),
		),

		// Moving Goal / Subject
		'cannot_move_module_goal_out_from_subject' => array(
			'title' => esc_html__( 'Can\'t Move Goal', 'et_builder' ),
			'desc'  => esc_html__( 'Once set, a goal that has been placed inside a split testing subject cannot be moved outside the split testing subject. You can end your split test and start a new one if you would like to make this change.', 'et_builder' ),
		),
		'cannot_move_row_goal_out_from_subject' => array(
			'title' => esc_html__( 'Can\'t Move Goal', 'et_builder' ),
			'desc'  => esc_html__( 'Once set, a goal that has been placed inside a split testing subject cannot be moved outside the split testing subject. You can end your split test and start a new one if you would like to make this change.', 'et_builder' ),
		),
		'cannot_move_goal_into_subject' => array(
			'title' => esc_html__( 'Can\'t Move Goal', 'et_builder' ),
			'desc'  => esc_html__( 'A split testing goal cannot be moved inside of a split testing subject. To perform this action you must first end your split test.', 'et_builder' ),
		),
		'cannot_move_subject_into_goal' => array(
			'title' => esc_html__( 'Can\'t Move Subject', 'et_builder' ),
			'desc'  => esc_html__( 'A split testing subject cannot be moved inside of a split testing goal. To perform this action you must first end your split test.', 'et_builder' ),
		),

		// Cloning + Has Goal
		'cannot_clone_section_has_goal' => array(
			'title' => esc_html__( 'Can\'t Clone Section', 'et_builder' ),
			'desc'  => esc_html__( 'This section cannot be duplicated because it contains a split testing goal. Goals cannot be duplicated. You must first end your split test before performing this action.', 'et_builder' ),
		),
		'cannot_clone_row_has_goal' => array(
			'title' => esc_html__( 'Can\'t Clone Row', 'et_builder' ),
			'desc'  => esc_html__( 'This row cannot be duplicated because it contains a split testing goal. Goals cannot be duplicated. You must first end your split test before performing this action.', 'et_builder' ),
		),

		// Removing + Has Goal
		'cannot_remove_section_has_goal' => array(
			'title' => esc_html__( 'Can\'t Remove Section', 'et_builder' ),
			'desc'  => esc_html__( 'This section cannot be removed because it contains a split testing goal. Goals cannot be deleted. You must first end your split test before performing this action.', 'et_builder' ),
		),
		'cannot_remove_row_has_goal' => array(
			'title' => esc_html__( 'Can\'t Remove Row', 'et_builder' ),
			'desc'  => esc_html__( 'This row cannot be removed because it contains a split testing goal. Goals cannot be deleted. You must first end your split test before performing this action.', 'et_builder' ),
		),

		// Removing + Has Unremovable Subjects
		'cannot_remove_section_has_unremovable_subject' => array(
			'title' => esc_html__( 'Can\'t Remove Section', 'et_builder' ),
			'desc'  => esc_html__( 'Split testing requires at least 2 subject variations. This variation cannot be removed until additional variations have been added.', 'et_builder' ),
		),
		'cannot_remove_row_has_unremovable_subject' => array(
			'title' => esc_html__( 'Can\'t Remove Row', 'et_builder' ),
			'desc'  => esc_html__( 'Split testing requires at least 2 subject variations. This variation cannot be removed until additional variations have been added', 'et_builder' ),
		),

		// View stats summary table heading
		'view_stats_thead_titles' => array(
			'clicks' => array(
				esc_html__( 'ID', 'et_builder' ),
				esc_html__( 'Subject', 'et_builder' ),
				esc_html__( 'Impressions', 'et_builder' ),
				esc_html__( 'Clicks', 'et_builder' ),
				esc_html__( 'Clickthrough Rate', 'et_builder' ),
			),
			'reads' => array(
				esc_html__( 'ID', 'et_builder' ),
				esc_html__( 'Subject', 'et_builder' ),
				esc_html__( 'Impressions', 'et_builder' ),
				esc_html__( 'Reads', 'et_builder' ),
				esc_html__( 'Reading Rate', 'et_builder' ),
			),
			'bounces' => array(
				esc_html__( 'ID', 'et_builder' ),
				esc_html__( 'Subject', 'et_builder' ),
				esc_html__( 'Impressions', 'et_builder' ),
				esc_html__( 'Stays', 'et_builder' ),
				esc_html__( 'Bounce Rate', 'et_builder' ),
			),
			'engagements' => array(
				esc_html__( 'ID', 'et_builder' ),
				esc_html__( 'Subject', 'et_builder' ),
				esc_html__( 'Goal Views', 'et_builder' ),
				esc_html__( 'Goal Reads', 'et_builder' ),
				esc_html__( 'Engagement Rate', 'et_builder' ),
			),
			'conversions' => array(
				esc_html__( 'ID', 'et_builder' ),
				esc_html__( 'Subject', 'et_builder' ),
				esc_html__( 'Impressions', 'et_builder' ),
				esc_html__( 'Conversion Goals', 'et_builder' ),
				esc_html__( 'Conversion Rate', 'et_builder' ),
			),
			'shortcode_conversions' => array(
				esc_html__( 'ID', 'et_builder' ),
				esc_html__( 'Subject', 'et_builder' ),
				esc_html__( 'Impressions', 'et_builder' ),
				esc_html__( 'Shortcode Conversions', 'et_builder' ),
				esc_html__( 'Conversion Rate', 'et_builder' ),
			),
		),
	) ) );

	wp_localize_script( 'et_pb_admin_js', 'et_pb_help_options', apply_filters( 'et_pb_help_options', array(
		'shortcuts' => et_builder_get_shortcuts('bb'),
	) ) );

	et_core_load_main_fonts();

	wp_enqueue_style( 'et_pb_admin_css', ET_BUILDER_URI .'/styles/style.css', array(), ET_BUILDER_VERSION );
	wp_enqueue_style( 'et_pb_admin_date_css', ET_BUILDER_URI . '/styles/jquery-ui-1.10.4.custom.css', array(), ET_BUILDER_VERSION );

	wp_add_inline_style( 'et_pb_admin_css', et_pb_ab_get_subject_rank_colors_style() );
}
endif;
?>
