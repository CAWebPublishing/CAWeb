<?php

/*

	CAWeb Child Theme Functions

	Author: Jesus D. Guzman



	Notes:

	- Please ensure that actions remain in their appropriate order in accordance with WordPress Codex Theme Development, Hooks and Actions



	Sources:

	- PHP (http://php.net/)

	- Theme Development (https://codex.wordpress.org/Theme_Development)

	- Developer Resources (https://developer.wordpress.org/?s=)

	- Code Reference (https://developer.wordpress.org/reference/)

	- Plugin Action Reference (https://codex.wordpress.org/Plugin_API/Action_Reference)

*/


// After Setup Theme
function ca_setup_theme(){
	global $ca_navigation_images;
  
  
	define('CAWebAbsPath', get_stylesheet_directory()) ;
	define('CAWebUri', get_stylesheet_directory_uri()) ;
  
  $ca_navigation_images = get_option('ca_navigation_images');
  
// Include additional functions
require_once(get_stylesheet_directory(). '/functions/additional_functions.php');


// Add CA Options Page
require_once(get_stylesheet_directory(). '/options.php');

// Add CAWeb Navigation Menu Customization to wp-admin/nav-menus.php page  
require_once(get_stylesheet_directory(). '/functions/ca_custom_nav.php');


  // CA Metaboxes
	require_once(get_stylesheet_directory(). '/functions/metaboxes.php');

	// Set Predefined Category Content Types

	$ca_cats = array(
		'Courses', 'Events', 'Exams','Jobs',
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



	// Load editor styling

	wp_dequeue_style( get_template_directory_uri(). 'css/editor-style.css' );

	add_editor_style(get_stylesheet_directory_uri(). '/css/cagov.core.css' );


}

add_action('after_setup_theme', 'ca_setup_theme');



/*

	Ran during Typical Requests

*/



// Initialization



function ca_init(){

	// Unregister Divi Project Type

	unregister_post_type( 'project' );



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





// Enqueue Scripts  and Styles

function ca_theme_enqueue_style() {



	// Enqueue Styles



	// Required in order to inherit parent theme style.css

	wp_enqueue_style(  'parent-style', get_template_directory_uri() . '/style.css' );



}

add_action( 'wp_enqueue_scripts', 'ca_theme_enqueue_style' );


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
  
	$wp_admin_bar->add_node( $caweb_args );
 
  /* Add (Menu) Navigation Node */
  $menu_args = array(
		'id'     => 'caweb-navigation',   
		'title'  => 'Navigation',
    'href' => get_admin_url() . 'nav-menus.php',
    'parent' => 'site-name',
	);
  
	$wp_admin_bar->add_node( $menu_args );
}

add_action( 'admin_bar_menu', 'ca_admin_bar_menu', 1000 );


// Admin Enqueue Scripts and Styles

function ca_admin_enqueue_scripts(){
	global $pagenow;
	// Enqueue Scripts

	wp_enqueue_script( 'jquery' );
	wp_enqueue_media();


	wp_register_script('caweb-admin-scripts',	CAWebUri . '/js/caweb.admin.js', array('jquery'),true);
	wp_register_script('browse-caweb-library',	get_stylesheet_directory_uri(). '/js/libs/browse-library.js', array('jquery'),true);



	wp_enqueue_script( 'custom-header' );
	wp_enqueue_script( 'caweb-admin-scripts' );
	wp_enqueue_script( 'browse-caweb-library' );



	// Enqueue Styles



	wp_enqueue_style( 'caweb-font-styles', get_stylesheet_directory_uri() . '/css/cagov.font-only.css' );

	wp_enqueue_style( 'caweb-admin-styles', get_stylesheet_directory_uri() . '/css/admin_custom.css' );


  //


}

add_action( 'admin_enqueue_scripts', 'ca_admin_enqueue_scripts' );







/*

	Hooks

*/
/* Enqueue Scripts and Styles on Footer */
function ca_enqueue_core_js($post){


	wp_register_script('cagov-core-script',	get_stylesheet_directory_uri(). '/js/cagov.core.js', array('jquery'), '1.0', true );

	wp_register_script('cagov-search-script',get_stylesheet_directory_uri(). '/js/search.js', array('jquery'), '1.0', true );
 
	wp_enqueue_script( 'cagov-core-script' );

	wp_enqueue_script( 'cagov-search-script' );

  if(ca_version_check(5, $post->ID) && "on" == get_option('ca_geo_locator_enabled')){
    wp_register_script('cagov-geolocator-script',get_stylesheet_directory_uri(). '/js/libs/geolocator.js', array('jquery'), '1.0', true );

		wp_enqueue_script( 'cagov-geolocator-script' );
  }

 wp_enqueue_style( 'ca-module-styles', get_stylesheet_directory_uri() . '/css/modules.css' );

	wp_enqueue_style( 'ca-media-styles', get_stylesheet_directory_uri() . '/css/media_styles.css' );

}



add_action( 'wp_footer', 'ca_enqueue_core_js' );

/*

	WP Update Nav Menu

	If the Navigation Menu has no Menu Theme Location selected,

	assign the default navigation menu

*/

function ca_update_nav_menu($menu_id){

global $pagenow;



if('nav-menus.php' == $pagenow && isset( $_GET['menu']) &&  get_theme_mod('nav_menu_locations')[megadropdown] == $_GET['menu']){



}else{

}

}

add_action( 'wp_update_nav_menu', 'ca_update_nav_menu' );

/*

 Set newly created menus to default (Mega Dropdown),

 only if a Mega Drop Menu is not already registered.

 If Mega Drop is register, set to Dropdown, otherwise

 set to Single Level, if all menus have been registered

 do not set the Theme Location.

*/

function ca_create_nav_menu($menu_id){

	$reg_menus = get_registered_ca_nav_menus() ;



	if( ! in_array('megadropdown',$reg_menus)){

		//set_theme_mod('nav_menu_locations', array('megadropdown' => $menu_id));

	}elseif( ! in_array('dropdown',$reg_menus)){

		//set_theme_mod('nav_menu_locations', array('dropdown' => $menu_id));

	}elseif( ! in_array('singlelevel',$reg_menus)){

		//set_theme_mod('nav_menu_locations', array('singlelevel' => $menu_id));

	}

}

add_action('wp_create_nav_menu','ca_create_nav_menu');





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

/*

	CA/Divi Custom Modules

	This function gets called during Prep_CA_Custom_Modules

	and is attached to the appropriate action hook.

	Includes the custom modules once Divi Parent Theme ET_Builder_Module exists it should

	remain at the bottom of the Child Theme Functions file.



*/

function CA_Custom_Modules(){

	if(class_exists("ET_Builder_Module")){

		include(get_stylesheet_directory() . "/builder/functions.php");
		include(get_stylesheet_directory() . "/builder/main-modules.php");
		include(get_stylesheet_directory(). '/builder/main-fullwidth-modules.php');
		include(get_stylesheet_directory(). '/builder/microdata-module.php');
		include(get_stylesheet_directory() . "/builder/layouts.php");
 	}

}





function Prep_CA_Custom_Modules(){

 	global $pagenow;

	$is_admin = is_admin();

 	$action_hook = $is_admin ? 'wp_loaded' : 'wp';



	// list of admin pages where we need to load builder files

 	$required_admin_pages = array(

				'edit.php', 'post.php', 'post-new.php',

				'admin.php', 'customize.php', 'edit-tags.php',

				'admin-ajax.php', 'export.php' );





	$specific_filter_pages = array( 'edit.php', 'admin.php', 'edit-tags.php' );

	$is_edit_library_page =

		'edit.php' === $pagenow && isset( $_GET['post_type'] ) && 'et_pb_layout' === $_GET['post_type'];



 	$is_role_editor_page =

		'admin.php' === $pagenow && isset( $_GET['page'] ) && 'et_divi_role_editor' === $_GET['page'];



 	$is_import_page = 'admin.php' === $pagenow && isset( $_GET['import'] ) && 'wordpress' === $_GET['import'];



 	$is_edit_layout_category_page =

		'edit-tags.php' === $pagenow && isset( $_GET['taxonomy'] ) && 'layout_category' === $_GET['taxonomy'];



	if ( ! $is_admin ||

		( $is_admin && in_array( $pagenow, $required_admin_pages ) &&

			( ! in_array( $pagenow, $specific_filter_pages ) ||

			$is_edit_library_page || $is_role_editor_page ||

			$is_edit_layout_category_page || $is_import_page ) ) )

	{



		 add_action($action_hook, 'CA_Custom_Modules', 9789);



 	}

}



Prep_CA_Custom_Modules();



function caweb_page_customizations(){
global $pagenow;

if('nav-menus.php' == $pagenow   ){
?>

<script>
  // Change title of page from 'Menu' to 'Navigation'
	var title = document.getElementById('wpbody-content');
  title = title.getElementsByClassName('wrap')[0];


  title.style.background = "<?php echo get_ca_user_color(0); ?>"  ;


  title = title.getElementsByClassName('page-title-action')[0].parentNode;
  title.style.color = "#fff";
  title.style.paddingLeft = "10px";

  title.innerHTML = "Navigation";


</script>
<?php
}elseif('post-new.php' == $pagenow || 'post.php' == $pagenow  ){

 ?>
<style>
#et_ca_page_meta_box .hndle  {
	background-color: <?php echo get_ca_user_color(1); ?> ;
    color: white;
}
</style>
<?php
}


}
add_action('admin_footer', 'caweb_page_customizations');

?>
