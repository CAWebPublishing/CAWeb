<?php
/**
 * CAWeb Theme Functions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package CAWeb
 *
 * CAWeb Child Theme Functions
 * Author: Jesus D. Guzman
 *
 * Sources:
 * - PHP (http://php.net/)
 * - Theme Development (https://codex.wordpress.org/Theme_Development)
 * - Developer Resources (https://developer.wordpress.org/?s=)
 * - Code Reference (https://developer.wordpress.org/reference/)
 * - Plugin Action Reference (https://codex.wordpress.org/Plugin_API/Action_Reference)
 */

define( 'CAWEB_ABSPATH', get_stylesheet_directory() );
define( 'CAWEB_URI', get_stylesheet_directory_uri() );
define( 'CAWEB_VERSION', wp_get_theme( 'CAWeb' )->get( 'Version' ) );
define( 'CAWEB_DIVI_VERSION', wp_get_theme( 'Divi' )->get( 'Version' ) );


add_action( 'admin_init', 'caweb_admin_init' );
/**
 * CAWeb Admin Init
 *
 * Loads theme updater
 */
function caweb_admin_init() {
	/* Core Updater */
	require_once CAWEB_ABSPATH . '/core/update.php';
}

/**
 * Enable unfiltered_html capability for Administrators.
 *
 * @param  array  $caps    The user's capabilities.
 * @param  string $cap     Capability name.
 * @param  int    $user_id The user ID.
 * @return array  $caps    The user's capabilities, with 'unfiltered_html' potentially added.
 */
function caweb_add_unfiltered_html_capability( $caps, $cap, $user_id ) {
	if ( 'unfiltered_html' === $cap && user_can( $user_id, 'administrator' ) ) {
		$caps = array( 'unfiltered_html' );
	}

	return $caps;
}
add_filter( 'map_meta_cap', 'caweb_add_unfiltered_html_capability', 1, 3 );

add_action( 'after_setup_theme', 'caweb_setup_theme' );
/**
 * CAWeb After Setup Theme
 *
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 * */
function caweb_setup_theme() {
	$inc_dir = CAWEB_ABSPATH . '/includes';

	/* additional functions */
	require_once "{$inc_dir}/functions.php";

	/* Shortcodes */
	require_once "{$inc_dir}/shortcodes.php";

	/* customizer functions */
	require_once "{$inc_dir}/customizer.php";

	/* Navigation Menu Customization to wp-admin/nav-menus.php page */
	require_once "{$inc_dir}/nav_walker.php";
	require_once "{$inc_dir}/nav.php";

	/* Metaboxes */
	require_once "{$inc_dir}/metaboxes.php";

	/* Password Reset */
	require_once "{$inc_dir}/wp-login.php";

	/* Filters */
	require_once CAWEB_ABSPATH . '/includes/filters.php';

	/* Options Page */
	require_once CAWEB_ABSPATH . '/options.php';

	/* Set Up Predefined Category Content Types */
	$ca_cats = array(
		'Courses',
		'Events',
		'Exams',
		'FAQs',
		'Jobs',
		'News',
		'Profiles',
		'Publications',
	);

	/* Insert Parent Content Type Category */
	wp_insert_term( 'Content Types', 'category' );

	/* Rename Default Category to All */
	wp_update_term(
		get_option( 'default_category' ),
		'category',
		array(
			'name' => 'All',
			'slug' => 'all',
		)
	);

	/*
	Loop thru Predefined Categories and create
	Content Categories under Content Types Category
	*/
	foreach ( $ca_cats as $c ) {
		wp_insert_term(
			$c,
			'category',
			array(
				'parent' => get_cat_ID( 'Content Types' ),
			)
		);
	}

	/* Enable Post Thumbnails */
	add_theme_support( 'post-thumbnails' );
}

add_action( 'pre_get_posts', 'caweb_pre_get_posts', 11 );
/**
 * CAWeb Pre Get Posts
 *
 *  @link https://developer.wordpress.org/reference/hooks/pre_get_posts/
 *
 * Fires after the query variable object is created, but before the actual query is run.
 *
 *  @param WP_Query $query The WP Query Instance.
 */
function caweb_pre_get_posts( $query ) {
	global $wp_query;
	$vars       = array( 'year', 'monthnum', 'author_name', 'category_name', 'tag', 'paged' );
	$query_vars = $wp_query->query;

	foreach ( $vars as $var ) {
		if ( isset( $query_vars[ $var ] ) ) {
			unset( $query_vars[ $var ] );
		}
	}

	if ( empty( $query_vars ) && ( is_archive() || is_category() || is_author() || is_tag() ) ) {
		$query->set( 'posts_per_page', 5 );
	}

	return $query;
}

add_action( 'init', 'caweb_init' );
/**
 * CAWeb Init
 *
 * @return void
 */
function caweb_init() {
	global $pagenow;

	/*
		This is a Divi action and is not needed,
		it requires setting the Site Icon from the Theme Customizer
		if not set it will display with an unknown source.
	 */
	remove_action( 'wp_head', 'add_favicon' );

	/* Unregister Menu Navigation Settings */
	unregister_nav_menu( 'primary-menu' );
	unregister_nav_menu( 'secondary-menu' );
	unregister_nav_menu( 'footer-menu' );

	/* Register Menu Navigation Settings */
	register_nav_menus( cawen_nav_menu_theme_locations() );

	/* Enable Thickbox */
	if ( 'wp-login.php' !== $pagenow ) {
		add_thickbox();
	}
	if ( ! session_id() && ! headers_sent() ) {
		session_start();
	}

	add_action( 'admin_post_caweb_clear_alert_session', 'caweb_clear_alert_session' );
	add_action( 'admin_post_nopriv_caweb_clear_alert_session', 'caweb_clear_alert_session' );

	/* To be removed soon */
	add_action( 'caweb_post_list_module_clear_cache', 'caweb_post_list_module_clear_cache', 10, 1 );
}

/**
 * Clear NGinx Server Cache
 * To be removed soon
 *
 * @return void
 */
function caweb_post_list_module_clear_cache() {
	if ( function_exists( 'clear_nginx_post_publish_cache' ) ) {
		clear_nginx_post_publish_cache();
	}
}

/**
 * Clear alert session for Alert Banner
 *
 * @return void
 */
function caweb_clear_alert_session() {
	$id = isset( $_GET['alert-id'] ) ? sanitize_text_field( wp_unslash( $_GET['alert-id'] ) ) : -1;

	if ( isset( $_SESSION[ "display_alert_$id" ] ) ) {
		$_SESSION[ "display_alert_$id" ] = false;
	}

	die();
}
add_action( 'wp_enqueue_scripts', 'caweb_wp_enqueue_parent_scripts' );
/**
 * Register Parent Theme styles.css
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 *
 * Fires when scripts and styles are enqueued.
 * @return void
 */
function caweb_wp_enqueue_parent_scripts() {
	/* Required in order to inherit parent theme style.css */
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css', array(), CAWEB_DIVI_VERSION );
}

add_action( 'wp_enqueue_scripts', 'caweb_wp_enqueue_scripts', 15 );
/**
 * Register CAWeb Theme scripts/styles with priority of 15
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 *
 * Fires when scripts and styles are enqueued.
 * @return void
 */
function caweb_wp_enqueue_scripts() {
	global $pagenow;

	$post_id     = get_the_ID();
	$ver         = caweb_get_page_version( $post_id );
	$color       = get_option( 'ca_site_color_scheme', 'oceanside' );
	$schemes     = caweb_color_schemes( caweb_get_page_version( get_the_ID() ), 'filename' );
	$colorscheme = isset( $schemes[ $color ] ) ? $schemes[ $color ] : 'oceanside';

	$core_css_file = getMinFile( "/css/cagov-v$ver-$colorscheme.css" );

	$frontend_js_file = getMinFile( '/js/frontend.js', 'js' );

	/* If on the activation page */
	if ( 'wp-activate.php' === $pagenow ) {
		wp_enqueue_style( 'caweb-core-style', $core_css_file, array(), CAWEB_VERSION );
	} else {
		wp_enqueue_style( 'caweb-core-style', $core_css_file, array(), CAWEB_VERSION );

		/* External CSS Styles */
		$ext_css = array_values( array_filter( get_option( 'caweb_external_css', array() ) ) );

		foreach ( $ext_css as $index => $name ) {
			$location = sprintf( '%1$s/css/external/%2$s/%3$s', CAWEB_URI, get_current_blog_id(), $name );
			wp_enqueue_style( sprintf( 'caweb-external-custom-%1$d-styles', $index + 1 ), $location, array(), CAWEB_VERSION );
		}
	}

	/* Register Scripts */
	wp_register_script( 'cagov-modernizr-script', getMinFile( '/js/libs/modernizr-3.6.0.js', 'js' ), array( 'jquery' ), CAWEB_VERSION, false );

	wp_register_script( 'cagov-frontend-script', $frontend_js_file, array(), CAWEB_VERSION, true );

	/* Localize the search script with the correct site url */
	wp_localize_script(
		'cagov-frontend-script',
		'args',
		array(
			'ca_google_analytic_id'       => get_option( 'ca_google_analytic_id' ),
			'ca_site_version'             => $ver,
			'ca_frontpage_search_enabled' => get_option( 'ca_frontpage_search_enabled' ) && is_front_page(),
			'ca_google_search_id'         => get_option( 'ca_google_search_id' ),
			'caweb_multi_ga'              => get_site_option( 'caweb_multi_ga' ),
			'ca_google_trans_enabled'     => 'none' !== get_option( 'ca_google_trans_enabled' ) ? true : false,
			'ca_geo_locator_enabled' => 5 >= $ver && "on" === get_option('ca_geo_locator_enabled') || get_option('ca_geo_locator_enabled')
		)
	);

	/* Enqueue Scripts */
	wp_enqueue_script( 'cagov-modernizr-script' );
	wp_enqueue_script( 'cagov-frontend-script' );

	/* This removes Divi Google Font CSS */
	wp_deregister_style( 'divi-fonts' );
}

add_action( 'wp_enqueue_scripts', 'caweb_late_wp_enqueue_scripts', 115 );
/**
 * Register CAWeb Theme scripts/styles with priority of 115
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 *
 * Fires when scripts and styles are enqueued.
 * @return void
 */
function caweb_late_wp_enqueue_scripts() {
	/* If CAWeb is a child theme of Divi, include Accessibility Javascript */
	if ( is_child_theme() && 'Divi' === wp_get_theme()->get( 'Template' ) ) {
		wp_register_script( 'caweb-accessibility-scripts', CAWEB_URI . '/divi/js/accessibility.js', array( 'jquery' ), CAWEB_VERSION, true );

		wp_localize_script(
			'caweb-accessibility-scripts',
			'accessibleargs',
			array( 'ajaxurl' => admin_url( 'admin-post.php' ) )
		);

		wp_enqueue_script( 'caweb-accessibility-scripts' );
	}

	/* Load Core JS at the very end along with any external/custom javascript/jquery */
	wp_register_script( 'caweb-core-script', CAWEB_URI . '/js/cagov.core.js', array( 'jquery' ), CAWEB_VERSION, true );
	wp_enqueue_script( 'caweb-core-script' );

	/* External JS */
	$ext_js = array_values( array_filter( get_option( 'caweb_external_js', array() ) ) );

	foreach ( $ext_js as $index => $name ) {
		$location = sprintf( '%1$s/js/external/%2$s/%3$s', CAWEB_URI, get_current_blog_id(), $name );
		$i        = $index + 1;
		wp_register_script( "caweb-external-custom-$i-scripts", $location, array( 'jquery' ), CAWEB_VERSION, true );
		wp_enqueue_script( "caweb-external-custom-$i-scripts" );
	}

	/* Custom JS */
	if ( '' !== get_option( 'ca_custom_js', '' ) ) {
		$location = sprintf( '%1$s/js/external/%2$s/%3$s', CAWEB_URI, get_current_blog_id(), $name );
		wp_register_script( 'caweb-custom-js', $location, array( 'jquery' ), CAWEB_VERSION, true );

		/*
		Need to create file for custom js
		wp_enqueue_script( 'caweb-custom-js' );
		print esc_html( sprintf( '<script id="ca_custom_js">%1$s</script>', wp_unslash( get_option( 'ca_custom_js' ) ) ) );
		*/
	}
}

add_action( 'wp_head', 'caweb_wp_head' );
/**
 * WP Head
 * Prints scripts or data in the head tag on the front end.
 *
 * @return void
 */
function caweb_wp_head() {

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

	if ( ! empty( get_option( 'ca_fav_ico', caweb_default_favicon_url() ) ) ) {
		$caweb_fav_ico = get_option( 'ca_fav_ico', caweb_default_favicon_url() );
		print esc_html( sprintf( '<link title="Fav Icon" rel="icon" href="%1$s">', $caweb_fav_ico ) );
		print esc_html( sprintf( '<link rel="shortcut icon" href="%1$s">', $caweb_fav_ico ) );
	}

	if ( ! empty( get_option( 'ca_custom_css', '' ) ) ) {
		print esc_html( sprintf( '<style id="ca_custom_css">%1$s</style>', wp_unslash( get_option( 'ca_custom_css' ) ) ) );
	}
}
add_filter( 'get_site_icon_url', 'caweb_site_icon_url', 10, 3 );
/**
 * CAWeb filter for site icon url
 * Filters the site icon URL.
 *
 * @link https://developer.wordpress.org/reference/hooks/get_site_icon_url/
 *
 * @param  string $url Site icon URL.
 * @param  int    $size Size of the site icon.
 * @param  int    $blog_id ID of the blog to get the site icon for.
 *
 * @return string
 */
function caweb_site_icon_url( $url, $size, $blog_id ) {
	if ( ! is_admin() ) {
		return '';
	}

	return $url;
}

add_action( 'get_header', 'caweb_et_project_get_header' );
/**
 * Add template header if using Divi Custom Type 'Project
 *
 * @link https://developer.wordpress.org/reference/hooks/get_header/
 * @param  string $name Name of the specific header file to use. null for the default header.
 *
 * @return void
 */
function caweb_et_project_get_header( $name = null ) {
	if ( 'project' === get_post_type( get_the_ID() ) ) {
		locate_template( array( 'header.php' ), true );
		get_template_part( 'partials/content', 'header' );
	}
}

add_action( 'wp_footer', 'caweb_wp_footer', 11 );
/**
 * CAWeb Footer
 *
 * @return void
 */
function caweb_wp_footer() {
	/* This removes Divi Builder Google Font CSS */
	wp_deregister_style( 'et-builder-googlefonts' );
}

add_action( 'wp_footer', 'caweb_late_wp_footer', 115 );

add_action( 'admin_enqueue_scripts', 'caweb_admin_enqueue_scripts', 15 );
/**
 * CAWeb Admin Enqueue Scripts and Styles
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/
 *
 * @param  string $hook The current admin page.
 *
 * @return void
 */
function caweb_admin_enqueue_scripts( $hook ) {
	$pages = array( 'toplevel_page_caweb_options', 'caweb-options_page_caweb_api', 'nav-menus.php' );

	$admin_css = getMinFile( '/css/admin.css' );

	$version     = caweb_get_page_version( get_the_ID() );
	$color       = get_option( 'ca_site_color_scheme', 'oceanside' );
	$schemes     = caweb_color_schemes( $version, 'filename' );
	$colorscheme = isset( $schemes[ $color ] ) ? $schemes[ $color ] : 'oceanside';

	$editor_css = getMinFile( "/css/cagov-v$version-$colorscheme.css" );

	if ( in_array( $hook, $pages, true ) ) {
		$admin_js = getMinFile( '/js/admin.js', 'js' );

		/* Enqueue Scripts */
		wp_enqueue_script( 'jquery' );
		wp_enqueue_media();
		wp_enqueue_editor();

		wp_enqueue_script( 'custom-header' );

		wp_register_script( 'caweb-admin-scripts', $admin_js, array( 'jquery', 'thickbox' ), CAWEB_VERSION, true );

		wp_localize_script(
			'caweb-admin-scripts',
			'args',
			array(
				'defaultFavIcon'   => caweb_default_favicon_url(),
				'changeCheck'      => $hook,
				'caweb_icons'      => caweb_get_icon_list( -1, '', true ),
				'caweb_colors'     => caweb_template_colors(),
				'tinymce_settings' => caweb_tiny_mce_settings(),
			)
		);

		wp_enqueue_script( 'caweb-admin-scripts' );

		/* Enqueue Styles */
		wp_enqueue_style( 'caweb-admin-styles', $admin_css, array(), CAWEB_VERSION );
	} elseif ( in_array( $hook, array( 'post.php', 'post-new.php', 'widgets.php' ), true ) ) {
		wp_enqueue_style( 'caweb-admin-styles', $admin_css, array(), CAWEB_VERSION );
	}

	/* Load editor styling */
	wp_dequeue_style( get_template_directory_uri() . 'css/editor-style.css' );
	add_editor_style( $editor_css );
}

add_action( 'admin_head', 'caweb_admin_head' );
/**
 * CAWeb Admin Head
 * Fires in head section for all admin pages.
 *
 * @return void
 */
function caweb_admin_head() {
	$icon = apply_filters( 'caweb_site_icon_url', sprintf( '%1$s/images/system/caweb_logo.ico', CAWEB_URI ), 512, get_current_blog_id() );
	printf( '<link title="Fav Icon" rel="icon" href="%1$s">', esc_url( $icon ) );

	/* This will hide all WPMUDev Dashboard Feeds from Screen Options and keep their Meta Boxes open */
	print '<style>label[for^="wpmudev_dashboard_item_df"]{display: none;}div[id^="wpmudev_dashboard_item_df"] .inside{display:block !important;}</style>';

	/* This is a fix for CAWeb icons in the new divi builder */
	print '<style>
            body.et-db #et-boc .et-fb-font-icon-list li:after {
              font-family: "CaGov", "ETModules" !important;
            } 
          </style>';
}

add_action( 'admin_bar_menu', 'caweb_admin_bar_menu', 1000 );
/**
 * Load all necessary CAWeb Admin Bar items.
 *
 * @param  WP_Admin_Bar $wp_admin_bar WP_Admin_Bar instance, passed by reference.
 *
 * @return void
 */
function caweb_admin_bar_menu( $wp_admin_bar ) {
	/* Remove WP Admin Bar Nodes */
	$wp_admin_bar->remove_node( 'themes' );
	$wp_admin_bar->remove_node( 'menus' );
	$wp_admin_bar->remove_node( 'customize-divi-theme' );
	$wp_admin_bar->remove_node( 'customize-divi-module' );

	if ( current_user_can( 'manage_options' ) ) {
		/* Add CAWeb WP Admin Bar Nodes */
		$wp_admin_bar->add_node(
			array(
				'id'     => 'caweb-options',
				'title'  => 'CAWeb Options',
				'href'   => get_admin_url() . 'admin.php?page=caweb_options',
				'parent' => 'site-name',
			)
		);
		/* Add (Menu) Navigation Node */
		$wp_admin_bar->add_node(
			array(
				'id'     => 'caweb-navigation',
				'title'  => 'Navigation',
				'href'   => get_admin_url() . 'nav-menus.php',
				'parent' => 'site-name',
			)
		);
	}

	if ( ! is_multisite() || current_user_can( 'manage_network_options' ) ) {
		$wp_admin_bar->add_node(
			array(
				'id'     => 'caweb-api',
				'title'  => 'GitHub API Key',
				'href'   => get_admin_url() . 'admin.php?page=caweb_api',
				'parent' => 'site-name',
			)
		);
	}
}

/*
If CAWeb is a child theme of Divi, include CAWeb Custom Modules and Functions
*/
if ( is_child_theme() && 'Divi' === wp_get_theme()->get( 'Template' ) ) {
	add_action( 'et_pagebuilder_module_init', 'caweb_et_pagebuilder_module_init' );
	/**
	 * CAWeb Custom Modules
	 *
	 * @return void
	 */
	function caweb_et_pagebuilder_module_init() {
		$divi_builder = CAWEB_ABSPATH . '/divi/builder';
		include "$divi_builder/functions.php";
		include "$divi_builder/layouts.php";

		if ( class_exists( 'ET_Builder_Module' ) ) {
			include "$divi_builder/class-caweb-builder-element.php";

			$modules = glob( "$divi_builder/modules/*.php" );
			foreach ( $modules as $module_file ) {
				require_once $module_file;
			}
		}
	}
} else {
	include CAWEB_ABSPATH . '/divi/functions.php';
}
?>
