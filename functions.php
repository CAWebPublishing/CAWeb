<?php
/**
 * CAWeb Theme Functions
 *
 * @author Jesus D. Guzman
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package CAWeb
 */

define( 'CAWEB_ABSPATH', get_stylesheet_directory() );
define( 'CAWEB_URI', get_stylesheet_directory_uri() );
define( 'CAWEB_VERSION', wp_get_theme( 'CAWeb' )->get( 'Version' ) );
define( 'CAWEB_EXTENSION', 'caweb-module-extension' );
define( 'CAWEB_DIVI_VERSION', wp_get_theme( 'Divi' )->get( 'Version' ) );


/**
 * Plugin API/Action Reference
 * Actions Run During a Typical Request
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference#Actions_Run_During_a_Typical_Request
 */
add_action( 'after_setup_theme', 'caweb_setup_theme', 11 );
add_action( 'init', 'caweb_init');
add_action( 'pre_get_posts', 'caweb_pre_get_posts', 11 );
add_action( 'get_header', 'caweb_et_project_get_header' );
add_action( 'wp_enqueue_scripts', 'caweb_wp_enqueue_parent_scripts' );
add_action( 'wp_enqueue_scripts', 'caweb_wp_enqueue_scripts', 15 );
add_action( 'wp_enqueue_scripts', 'caweb_late_wp_enqueue_scripts', 115 );
add_action( 'wp_head', 'caweb_wp_head' );
/*add_action( 'wp_footer', 'caweb_wp_footer', 11 );
*/
/**
 * Plugin API/Action Reference
 * Actions Run During an Admin Page Request.
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference#Actions_Run_During_an_Admin_Page_Request
 */
/*
add_action( 'admin_init', 'caweb_admin_init' );
add_action( 'admin_enqueue_scripts', 'caweb_admin_enqueue_scripts', 15 );
add_action( 'admin_head', 'caweb_admin_head' );
add_action( 'admin_bar_menu', 'caweb_admin_bar_menu', 1000 );
*/
/****************************
	End of Action References
 *****************************/
/*************************************
	Typical Action Reference Functions
 **************************************/
/**
 * CAWeb After Setup Theme
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference/after_setup_theme
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 *
 * @return void
 */
function caweb_setup_theme() {

	/* Include CAWeb Functionality */
	foreach ( glob( __DIR__ . '/inc/*.php' ) as $file ) {
		require_once $file;
	}

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

	/* Set Up Predefined Category Content Types */
	$caweb_categories = array(
		'Courses',
		'Events',
		'Exams',
		'FAQs',
		'Jobs',
		'News',
		'Profiles',
		'Publications',
	);

	/*
	Loop thru Predefined Categories and create
	Content Categories under Content Types Category
	*/
	foreach ( $caweb_categories as $cat ) {
		wp_insert_term(
			$cat,
			'category',
			array(
				'parent' => get_cat_ID( 'Content Types' ),
			)
		);
	}

	/**
	 * Enable support for Post Thumbnails on posts and pages.
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	/** 
	 * Unregister Menu Navigation Settings
	 * @link https://developer.wordpress.org/reference/functions/unregister_nav_menu/
	 */ 
	unregister_nav_menu( 'primary-menu' );
	unregister_nav_menu( 'secondary-menu' );
	unregister_nav_menu( 'footer-menu' );

	/** 
	 * Register CAWeb navigation menu locations
	 * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
	 */
	register_nav_menus( caweb_nav_menu_theme_locations() );

	/* If no session ID exists and headers havent been sent, start session*/
	if ( ! session_id() && ! headers_sent() ) {
		session_start();
	}

	/*
	add_action( 'admin_post_caweb_clear_alert_session', 'caweb_clear_alert_session' );
	add_action( 'admin_post_nopriv_caweb_clear_alert_session', 'caweb_clear_alert_session' );

	/* To be removed soon 
	add_action( 'caweb_post_list_module_clear_cache', 'caweb_post_list_module_clear_cache', 10, 1 );
	*/
}


/**
 * CAWeb Init
 * Triggered before any other hook when a user accesses the admin area.
 * Note, this does not just run on user-facing admin screens.
 * It runs on admin-ajax.php and admin-post.php as well.
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference/admin_init
 * @return void
 */
function caweb_init() {
	global $pagenow;

	/**
	 * Enqueues the default ThickBox js and css. (if not on the login page)
	 * @link https://developer.wordpress.org/reference/functions/add_thickbox/
	 */
	if ( 'wp-login.php' !== $pagenow ) {
		add_thickbox();
	}

}

/**
 * CAWeb Pre Get Posts
 *
 *  @link https://developer.wordpress.org/reference/hooks/pre_get_posts/
 *
 * Fires after the query variable object is created, but before the actual query is run.
 *
 * @param WP_Query $query The WP Query Instance.
 * @return WP_Query
 */
function caweb_pre_get_posts( $query ) {
	global $wp_query;
	$vars       = array( 'year', 'monthnum', 'author_name', 'category_name', 'tag', 'paged' );
	$query_vars = array_diff_key( $wp_query->query, array_flip($vars));

	if ( empty( $query_vars ) && ( is_archive() || is_category() || is_author() || is_tag() ) ) {
		$query->set( 'posts_per_page', 5 );
	}

	return $query;
}

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
		get_template_part( 'partials/header' );
	}
}

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
	$vb_enabled  = isset( $_GET['et_fb'] ) && '1' === $_GET['et_fb'] ? true : false;
	$ver         = caweb_get_page_version( get_the_ID() );
	$color       = get_option( 'ca_site_color_scheme', 'oceanside' );
	$colorscheme = caweb_color_schemes($ver, 'filename', $color);
	
	$core_css_file = caweb_get_min_file( "/css/cagov-v$ver-$colorscheme.css" );
	$frontend_js_file = caweb_get_min_file( '/js/frontend.js', 'js' );

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

	/* This removes Divi Google Font CSS */
	wp_deregister_style( 'divi-fonts' );

	if ( ! $vb_enabled ) {
		/* Register Scripts */
		wp_register_script( 'cagov-modernizr-script', caweb_get_min_file( '/js/libs/modernizr-3.6.0.js', 'js' ), array( 'jquery' ), CAWEB_VERSION, false );

		wp_register_script( 'cagov-frontend-script', $frontend_js_file, array(), CAWEB_VERSION, true );

		$localize_args = array(
			'ca_google_analytic_id'       => get_option( 'ca_google_analytic_id' ),
			'ca_site_version'             => $ver,
			'ca_frontpage_search_enabled' => get_option( 'ca_frontpage_search_enabled' ) && is_front_page(),
			'ca_google_search_id'         => get_option( 'ca_google_search_id' ),
			'caweb_multi_ga'              => get_site_option( 'caweb_multi_ga' ),
			'ca_google_trans_enabled'     => 'none' !== get_option( 'ca_google_trans_enabled' ) ? true : false,
			'ca_geo_locator_enabled'      => 5 >= $ver && 'on' === get_option( 'ca_geo_locator_enabled' ) || get_option( 'ca_geo_locator_enabled' ),
		);

		wp_localize_script( 'cagov-frontend-script', 'args', $localize_args	);

		/* Enqueue Scripts */
		wp_enqueue_script( 'cagov-modernizr-script' );
		wp_enqueue_script( 'cagov-frontend-script' );
	}

}

/**
 * Register CAWeb Theme scripts/styles with priority of 115
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 *
 * Fires when scripts and styles are enqueued.
 * @return void
 */
function caweb_late_wp_enqueue_scripts() {
	$vb_enabled = isset( $_GET['et_fb'] ) && '1' === $_GET['et_fb'] ? true : false;
	$ver         = caweb_get_page_version( get_the_ID() );

	if ( $vb_enabled ) {
		return;
	}

	/* If CAWeb is a child theme of Divi, include Accessibility Javascript */
	if ( is_child_theme() && 'Divi' === wp_get_theme()->get( 'Template' ) ) {
		wp_register_script( 'caweb-accessibility-scripts', caweb_get_min_file( '/js/divi-accessibility.js', 'js'), array( 'jquery' ), CAWEB_VERSION, true );

		$localize_args = array( 'ajaxurl' => admin_url( 'admin-post.php' ) );

		wp_localize_script( 'caweb-accessibility-scripts', 'accessibleargs', $localize_args );

		wp_enqueue_script( 'caweb-accessibility-scripts' );
	}

	/* Load Core JS at the very end along with any external/custom javascript/jquery */
	wp_register_script( 'caweb-core-script', CAWEB_URI . '/assets/js/cagov/cagov.core.js', array( 'jquery' ), CAWEB_VERSION, true );
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
		// $location = sprintf( '%1$s/js/external/%2$s/%3$s', CAWEB_URI, get_current_blog_id(), $name );
		// wp_register_script( 'caweb-custom-js', $location, array( 'jquery' ), CAWEB_VERSION, true );

		/*
		Need to create file for custom js
		wp_enqueue_script( 'caweb-custom-js' );
		print esc_html( sprintf( '<script id="ca_custom_js">%1$s</script>', wp_unslash( get_option( 'ca_custom_js' ) ) ) );
		*/
	}
}

/**
 * WP Head
 * Prints scripts or data in the head tag on the front end.
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_head/
 * @return void
 */
function caweb_wp_head() {  ?>
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

	$caweb_fav_ico = ! empty(get_option( 'ca_fav_ico', '' )) ? get_option( 'ca_fav_ico' ) : caweb_default_favicon_url();
		printf( '<link title="Fav Icon" rel="icon" href="%1$s">', esc_url( $caweb_fav_ico ) );
		printf( '<link rel="shortcut icon" href="%1$s">', esc_url( $caweb_fav_ico ) );

	if ( ! empty( get_option( 'ca_custom_css', '' ) ) ) {
		print esc_html( sprintf( '<style id="ca_custom_css">%1$s</style>', wp_unslash( get_option( 'ca_custom_css' ) ) ) );
	}
}

/**
 * CAWeb Footer
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference/wp_footer
 * @return void
 */
function caweb_wp_footer() {
	/* This removes Divi Builder Google Font CSS */
	wp_deregister_style( 'et-builder-googlefonts' );
}

/**********************************************
	End of Typical Action Reference Functions
 **********************************************/
/*************************************
	Admin Action Reference Functions
 *************************************/
/**
 * CAWeb Admin Init
 * Triggered before any other hook when a user accesses the admin area.
 * Note, this does not just run on user-facing admin screens.
 * It runs on admin-ajax.php and admin-post.php as well.
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference/admin_init
 * @return void
 */
function caweb_admin_init() {
	/* Core Updater */
	require_once CAWEB_ABSPATH . '/core/update.php';
}

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

	$admin_css = caweb_get_min_file( '/css/admin.css' );

	$version     = caweb_get_page_version( get_the_ID() );
	$color       = get_option( 'ca_site_color_scheme', 'oceanside' );
	$schemes     = caweb_color_schemes( $version, 'filename' );
	$colorscheme = isset( $schemes[ $color ] ) ? $schemes[ $color ] : 'oceanside';

	$editor_css = caweb_get_min_file( "/css/cagov-v$version-$colorscheme.css" );

	if ( in_array( $hook, $pages, true ) ) {
		$admin_js = caweb_get_min_file( '/js/admin.js', 'js' );

		/* Enqueue Scripts */
		wp_enqueue_script( 'jquery' );
		wp_enqueue_media();
		wp_enqueue_editor();

		wp_enqueue_script( 'custom-header' );

		wp_register_script( 'caweb-admin-scripts', $admin_js, array( 'jquery', 'thickbox' ), CAWEB_VERSION, true );

		$caweb_localize_args = array(
			'defaultFavIcon'   => caweb_default_favicon_url(),
			'changeCheck'      => $hook,
			'caweb_icons'      => caweb_get_icon_list( -1, '', true ),
			'caweb_colors'     => caweb_template_colors(),
			'tinymce_settings' => caweb_tiny_mce_settings(),
		);

		wp_localize_script( 'caweb-admin-scripts', 'args', $caweb_localize_args );

		/*
		Bootstrap 4.3.1
		https://getbootstrap.com/docs/4.3/getting-started/introduction/
		*/
		wp_enqueue_script( 'caweb-boot2', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', array( 'jquery' ), '1.14.7', true );
		wp_enqueue_script( 'caweb-boot3', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', array( 'jquery' ), '4.3.1', true );

		/*
		Bootstrap 4 Toggle
		https://gitbrent.github.io/bootstrap4-toggle/
		*/
		wp_enqueue_script( 'caweb-boot4', 'https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js', array( 'jquery' ), '3.6.1', true );

		wp_enqueue_script( 'caweb-admin-scripts' );

		/* Enqueue Styles */
		wp_enqueue_style( 'caweb-boot4-toggle', 'https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css', array(), CAWEB_VERSION );
		wp_enqueue_style( 'caweb-admin-styles', $admin_css, array(), CAWEB_VERSION );
	} elseif ( in_array( $hook, array( 'post.php', 'post-new.php', 'widgets.php' ), true ) ) {
		wp_enqueue_style( 'caweb-admin-styles', $admin_css, array(), CAWEB_VERSION );
	}

	/* Load editor styling */
	wp_dequeue_style( get_template_directory_uri() . 'css/editor-style.css' );
	add_editor_style( $editor_css );
}

/**
 * CAWeb Admin Head
 * Fires in head section for all admin pages.
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference/admin_head
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
/********************************************
	End of Admin Action Reference Functions
*/
