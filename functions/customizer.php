<?php
function caweb_customize_preview_init(){
  wp_register_script('caweb-customizer-script',	CAWebUri . '/js/customizer.js', array('jquery','customize-preview'),wp_get_theme('CAWeb')->get('Version'), true);
	wp_enqueue_script( 'caweb-customizer-script' );
  
}
add_action( 'customize_preview_init', 'caweb_customize_preview_init');

function caweb_customizer_toggle_option( $customizer ){
  $manager = $customizer->manager; 
  
  if(4 ==  $manager->get_control('ca_site_version')->value() ) 
    return false;
    
   return true;  
}

function caweb_customize_register( $wp_customize ) {
  // Remove Divi Customization Panels and Sections  
  $divi_panels = array('et_divi_general_settings', 'et_divi_header_panel', 'et_divi_footer_panel', 'et_divi_blog_settings', 
                       'et_divi_buttons_settings', 'et_divi_mobile');
  
  foreach($divi_panels as $p)
    $wp_customize->remove_panel($p);

  $wp_customize->remove_section('et_color_schemes');

   //All our sections, settings, and controls will be added here
  $wp_customize->add_panel('caweb_options', array(
    														'title' => 'CAWeb Options',
  															'priority'   => 30) );
  
  $wp_customize->add_section('caweb_settings', array(
    														'title' => 'Settings',
  															'priority'   => 30,
  																'panel' => 'caweb_options') );
  
  
  $wp_customize->add_setting('ca_site_version', array(
    														'type' => 'option',
  															'default' => get_option('ca_site_version', 5) ) );
  
 $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_site_version', array(
	'label'      => 'State Template Version',
  'type' => 'select',
   'choices' => array('4'=> 'Version 4', '5'=> 'Version 5'),
	'section'    => 'caweb_settings',
	'settings'   => 'ca_site_version',
		) ) );
  
  $wp_customize->add_setting('ca_default_navigation_menu', array(
    														'type' => 'option',
  															'default' => get_option('ca_default_navigation_menu', 'megadropdown')) );
 
  $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_default_navigation_menu', array(
	'label'      => 'Header Menu Type',
  'type' => 'select',
   'choices' => array('megadropdown'=> 'Mega Drop', 'dropdown'=> 'Drop Down', 'singlelevel' => 'Single Level'),
	'section'    => 'caweb_settings',
	'settings'   => 'ca_default_navigation_menu',
		) ) );
  
  $wp_customize->add_setting('ca_site_color_scheme', array(
    														'type' => 'option',
  															'default' => get_option('ca_site_color_scheme', 'oceanside')) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_site_color_scheme', array(
	'label'      => 'Color Scheme',
  'type' => 'select',
   'choices' => array('oceanside'=> 'Oceanside', 'orangecounty'=> 'Orange County', 'pasorobles' => 'Paso Robles',
                     	'santabarbara'=> 'Santa Barbara', 'sierra' => 'Sierra'),
	'section'    => 'caweb_settings',
	'settings'   => 'ca_site_color_scheme',
		) ) );
  
  $wp_customize->add_setting('ca_frontpage_search_enabled', array(
    														'type' => 'option',
  															'default' => get_option('ca_frontpage_search_enabled', true)) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_frontpage_search_enabled', array(
	'label'      => 'Show Search on Front Page',
  'type' => 'checkbox',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_frontpage_search_enabled',
    'active_callback' => 'caweb_customizer_toggle_option'
		) ) );
  
  $wp_customize->add_setting('ca_sticky_navigation', array(
    														'type' => 'option',
  															'default' => get_option('ca_sticky_navigation', true)) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_sticky_navigation', array(
	'label'      => 'Sticky Navigation',
  'type' => 'checkbox',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_sticky_navigation',
    'active_callback' => 'caweb_customizer_toggle_option'
		) ) );
	
    $wp_customize->add_setting('ca_home_nav_link', array(
    														'type' => 'option',
  															'default' => get_option('ca_home_nav_link', true)) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_home_nav_link', array(
	'label'      => 'Menu Home Link',
  'type' => 'checkbox',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_home_nav_link',
		) ) );
  
  $wp_customize->add_setting('ca_contact_us_link', array(
    														'type' => 'option',
  															'default' => get_option('ca_contact_us_link', '') ) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_contact_us_link', array(
	'label'      => 'Contact Us Page',
  'type' => 'text',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_contact_us_link',
    'active_callback' => 'caweb_customizer_toggle_option'
		) ) );
  
  $wp_customize->add_setting('ca_geo_locator_enabled', array(
    														'type' => 'option',
  															'default' => get_option('ca_geo_locator_enabled', true) ) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_geo_locator_enabled', array(
	'label'      => 'Enable Geo Locator',
  'type' => 'checkbox',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_geo_locator_enabled'
		) ) );
  
  $wp_customize->add_setting('ca_utility_home_icon', array(
    														'type' => 'option',
  															'default' => get_option('ca_utility_home_icon', true) ) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_utility_home_icon', array(
	'label'      => 'Home Link',
  'type' => 'checkbox',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_utility_home_icon'
		) ) );
  
   $wp_customize->add_setting('ca_utility_link_1', array(
    														'type' => 'option',
  															'default' => get_option('ca_utility_link_1', '') ) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_utility_link_1', array(
	'label'      => 'Custom Link 1 URL',
  'type' => 'text',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_utility_link_1',
    'active_callback' => 'caweb_customizer_toggle_option'
		) ) );
  
   $wp_customize->add_setting('ca_utility_link_1_name', array(
    														'type' => 'option',
  															'default' => get_option('ca_utility_link_1_name', '') ) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_utility_link_1_name', array(
	'label'      => 'Custom Link 1 Label',
  'type' => 'text',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_utility_link_1_name',
    'active_callback' => 'caweb_customizer_toggle_option'
		) ) );
  
   $wp_customize->add_setting('ca_utility_link_2', array(
    														'type' => 'option',
  															'default' => get_option('ca_utility_link_2', '') ) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_utility_link_2', array(
	'label'      => 'Custom Link 2 URL',
  'type' => 'text',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_utility_link_2',
    'active_callback' => 'caweb_customizer_toggle_option'
		) ) );
  
   $wp_customize->add_setting('ca_utility_link_2_name', array(
    														'type' => 'option',
  															'default' => get_option('ca_utility_link_2_name', '') ) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_utility_link_2_name', array(
	'label'      => 'Custom Link 2 Label',
  'type' => 'text',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_utility_link_2_name',
    'active_callback' => 'caweb_customizer_toggle_option'
		) ) );
  
   $wp_customize->add_setting('ca_utility_link_3', array(
    														'type' => 'option',
  															'default' => get_option('ca_utility_link_3', '') ) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_utility_link_3', array(
	'label'      => 'Custom Link 3 URL',
  'type' => 'text',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_utility_link_3',
    'active_callback' => 'caweb_customizer_toggle_option'
		) ) );
  
   $wp_customize->add_setting('ca_utility_link_3_name', array(
    														'type' => 'option',
  															'default' => get_option('ca_utility_link_3_name', '') ) );
  
   $wp_customize->add_control( new WP_Customize_Control( $wp_customize, 'ca_utility_link_3_name', array(
	'label'      => 'Custom Link 3 Label',
  'type' => 'text',
	'section'    => 'caweb_settings',
	'settings'   => 'ca_utility_link_3_name',
    'active_callback' => 'caweb_customizer_toggle_option'
		) ) );
  
  
  $wp_customize->add_setting('header_ca_branding', array(
    														'type' => 'option',
  															'default' => get_option('header_ca_branding', ''),
  															'transport' => 'postMessage') );
  
  $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'header_ca_branding', array(
	'label'      => 'Organization Logo-Brand',
	'section'    => 'caweb_settings',
	'settings'   => 'header_ca_branding',
		) ) );
  
  
}
add_action( 'customize_register', 'caweb_customize_register' );


?>