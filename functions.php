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

// This is a temporary fix
function caweb_login_logo() {
	print '<style>#login h1 a, .login h1 a { background-size: 329px 110px; height: 110px; width: 329px; background-image: url('. CAWebUri .'/images/CAWEB.png); }</style>';
}
add_action( 'login_enqueue_scripts', 'caweb_login_logo' );

// After Setup Theme
function ca_setup_theme(){
	global $ca_navigation_images;



  $ca_navigation_images = get_option('ca_navigation_images');

	if (!empty($ca_navigation_images) ) {
		$tmp = array();
		foreach( $ca_navigation_images as $k => $val){
			array_push($tmp, substr($k ,0, strpos($k, '_') ) ) ;
		}

		$menu_ids = array_unique($tmp);
		foreach( $menu_ids as $k ){
			update_post_meta( $k, '_caweb_menu_icon', $ca_navigation_images[$k . '_icon'] );
			update_post_meta( $k, '_caweb_menu_unit_size', $ca_navigation_images[$k . '_unit_size'] );
			update_post_meta( $k, '_caweb_menu_media_image', $ca_navigation_images[$k . '_media_image'] );
			update_post_meta( $k, '_caweb_menu_image', $ca_navigation_images[$k . '_image'] );
			update_post_meta( $k, '_caweb_menu_image_side', $ca_navigation_images[$k . '_image_side'] );
			update_post_meta( $k, '_caweb_menu_image_size', $ca_navigation_images[$k . '_image_size'] );
		}


		delete_option('ca_navigation_images');
	}

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
function tfc_remove_page_templates( $templates ) {
    unset( $templates['page-template-blank.php'] );
    return $templates;
}
add_filter( 'theme_page_templates', 'tfc_remove_page_templates' );

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
}
add_action('admin_head', 'caweb_admin_head');

/* Enqueue Scripts and Styles at the bottom */
function ca_theme_enqueue_style() {
	global $post;
	global $pagenow;

	$post_id = (is_object($post) ? $post->ID : $post['ID']);

	$ver = ( ca_version_check(4, $post_id) ?  'v4' : '');
	// Enqueue Styles
	// Required in order to inherit parent theme style.css
	wp_enqueue_style(  'parent-style', get_template_directory_uri() . '/style.css' );

	if('wp-activate.php' == $pagenow   ){
		wp_enqueue_style( 'ca-core-styles', sprintf('%1$s/css/cagov.core.css',CAWebUri) );
		wp_enqueue_style( 'ca-color-styles', sprintf('%1$s/css/colorscheme-oceanside.css',CAWebUri) );
	}else{
		wp_enqueue_style( 'ca-core-styles', sprintf('%1$s/css/cagov.%2$score.css',CAWebUri, $ver) );
		wp_enqueue_style( 'ca-color-styles', sprintf('%1$s/css/colorscheme-%2$s%3$s.css',CAWebUri, $ver, get_option('ca_site_color_scheme')) );
	}

	wp_enqueue_style( 'ca-module-styles', CAWebUri . '/css/modules.css' );

	wp_enqueue_style( 'caweb-font-styles', CAWebUri . '/css/cagov.font-only.css' );

	wp_enqueue_style( 'ca-custom-styles', sprintf('%1$s/css/custom.css', CAWebUri ) );
	wp_enqueue_style( 'ca-version-custom-styles', sprintf('%1$s/css/v%2$dcustom.css', CAWebUri, ca_get_version($post_id) ) );

	// Load editor styling
	wp_dequeue_style( get_template_directory_uri(). 'css/editor-style.css' );
	add_editor_style(CAWebUri. '/css/cagov.core.css' );

	// Enqueue Scripts
	wp_register_script('cagov-modernizr-script', CAWebUri . '/js/libs/modernizr-2.0.6.min.js', array('jquery'), '1.0', false );
	wp_register_script('cagov-modernizr-extra-script', CAWebUri . '/js/libs/modernizr-extra.min.js', array('jquery'), '1.0', false );

 	wp_register_script('cagov-core-script',	CAWebUri. '/js/cagov.core.js', array('jquery'), '1.0', true );
	wp_register_script('cagov-navigation-script',	CAWebUri. '/js/libs/navigation.js', '', '1.0', true );

	// Localize the search script with the correct site url
	wp_localize_script( 'cagov-search-script', 'site', array('site_url' => site_url()) );

	wp_enqueue_script( 'cagov-core-script' );
  wp_enqueue_script( 'cagov-navigation-script' );
	wp_enqueue_script( 'cagov-modernizr-script' );
	wp_enqueue_script( 'cagov-modernizr-extra-script' );

	  /* Version 5 specific scripts */
  if(ca_version_check(5,$post_id) && "on" == get_option('ca_geo_locator_enabled')){
	 wp_register_script('cagov-geolocator-script',CAWebUri. '/js/libs/geolocator.js', array('jquery'), '1.0', true );

    wp_enqueue_script( 'cagov-geolocator-script' );
	}
}
add_action( 'wp_enqueue_scripts', 'ca_theme_enqueue_style',15 );

// Admin Enqueue Scripts and Styles

function ca_admin_enqueue_scripts($hook){
	$pages = array( 'toplevel_page_ca_options',  'nav-menus.php');

	if( in_array($hook , $pages) ){
		// Enqueue Scripts
		wp_enqueue_script( 'jquery' );
		wp_enqueue_media();

		wp_enqueue_script( 'custom-header' );

		wp_register_script('browse-caweb-library',	CAWebUri. '/js/libs/browse-library.js', array('jquery'),true);
		wp_register_script('caweb-admin-scripts',	CAWebUri . '/js/caweb.admin.js', array('jquery'),true);

		wp_enqueue_script( 'browse-caweb-library' );
		wp_enqueue_script( 'caweb-admin-scripts' );


		wp_enqueue_style( 'caweb-admin-styles', CAWebUri . '/css/admin_custom.css' );
	}


	// Enqueue Styles
	wp_enqueue_style( 'caweb-font-styles', CAWebUri . '/css/cagov.font-only.css' );



}

add_action( 'admin_enqueue_scripts', 'ca_admin_enqueue_scripts',15);

/* Adjust WP Admin Bar */
function ca_admin_bar_menu( $wp_admin_bar ) {
  /* Remove WP Admin Bar Nodes */
	$wp_admin_bar->remove_node( 'themes' );
	$wp_admin_bar->remove_node( 'menus' );
	$wp_admin_bar->remove_node( 'widgets' );
	$wp_admin_bar->remove_node( 'customize-divi-theme' );
	$wp_admin_bar->remove_node( 'customize-divi-module' );

  /* Add CAWeb WP Admin Bar Nodes */
  $caweb_args = array(
		'id'     => 'caweb-options',
		'title'  => 'CAWeb Options',
    'href' =>  get_admin_url() . 'admin.php?page=ca_options',
    'parent' => 'site-name',
	);

	if ( current_user_can('manage_options') ){
		$wp_admin_bar->add_node( $caweb_args );
	}

  /* Add (Menu) Navigation Node */
  $menu_args = array(
		'id'     => 'caweb-navigation',
		'title'  => 'Navigation',
    'href' => get_admin_url() . 'nav-menus.php',
    'parent' => 'site-name',
	);

	if ( current_user_can('manage_options') ){
		$wp_admin_bar->add_node( $menu_args );
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
		include(CAWebAbsPath . "/builder/main-modules.php");
		include(CAWebAbsPath. '/builder/main-fullwidth-modules.php');
		include(CAWebAbsPath. '/builder/special-modules.php');
		include(CAWebAbsPath . "/builder/layouts.php");
		//include(CAWebAbsPath . "/Dev/Dev-Modules.php");

}

function custom_bundle_js() {
	// This code assumes you save the file bundle.js in the child-theme root
  // e.g. /themes/custom-divi/bundle.js
	$app = trailingslashit( CAWebUri . '/builder/frontend-builder' );
	$ver = ET_BUILDER_VERSION;
	/**
	 * This code is directly copied from the original Divi theme.
	 * You can find it in Divi/includes/builder/frontend-builder/assets.php
	 * somewhere around line 107
	 */
	$fb_bundle_dependencies = apply_filters(
		'et_fb_bundle_dependencies',
		array(
			'jquery',
			'jquery-ui-core',
			'jquery-ui-draggable',
			'jquery-ui-resizable',
			'underscore',
			// 'minicolors',
			'jquery-ui-sortable',
			'jquery-effects-core',
			'iris',
			'wp-color-picker',
			'wp-color-picker-alpha',
			'react-tiny-mce',
			'easypiechart',
			'et_pb_admin_date_addon_js',
			'salvattore',
			'hashchange',
			'wp-shortcode',
		)
	);
	// Dequeue official bundle.js
	wp_dequeue_script( 'et-frontend-builder' );
	// Enqueue modified bundle.js
	wp_enqueue_script(
		'et-frontend-builder',
		"{$app}/bundle.js",
		$fb_bundle_dependencies,
		$ver,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'custom_bundle_js', 99 );

function caweb_page_customizations(){
global $pagenow;

if('nav-menus.php' == $pagenow   ){
?>

<!--script>
  // Change title of page from 'Menu' to 'Navigation'
	var title = document.getElementById('wpbody-content');
  title = title.getElementsByClassName('wrap')[0];
	title = title.getElementsByClassName('page-title-action')[0].parentNode;


title.innerHTML = "Navigation";


</script-->
<?php
}elseif('post-new.php' == $pagenow || 'post.php' == $pagenow  ){

 ?>
<style>
#et_ca_page_meta_box .hndle  {
	background-color: <?php echo get_ca_user_color(1); ?> ;
    color: white;
}
	#et_pb_fb_cta{
		/*display: none !important;*/
	}
	/* This is the background color for the Divi Panel that pops open
		when inserting modules or sections */
	.et-pb-main-settings{

	background-color: lightblue;

	}

	ul.et_font_icon {
		background-color: white !important;
		max-height: 300px;
	}
	.et_font_icon li {
			font-size: 30px;
	}
	.et-pb-option-container .description {
			color: black !important;
	}
</style>
<?php
}


}
add_action('admin_footer', 'caweb_page_customizations');

?>
