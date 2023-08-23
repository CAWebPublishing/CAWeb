<?php
/**
 * CAWeb Theme Functions
 *
 * @author Danny Guzman
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'CAWEB_ABSPATH', get_stylesheet_directory() );
define( 'CAWEB_URI', get_stylesheet_directory_uri() );
define( 'CAWEB_VERSION', wp_get_theme( 'CAWeb' )->get( 'Version' ) );
define( 'CAWEB_EXTENSION', 'caweb-module-extension' );
define( 'CAWEB_DIVI_VERSION', wp_get_theme( 'Divi' )->get( 'Version' ) );
define( 'CAWEB_CA_STATE_PORTAL_CDN_URL', 'https://california.azureedge.net/cdt/CAgovPortal' );
define( 'CAWEB_EXTERNAL_DIR', sprintf( '%1$s/%2$s-ext/', wp_get_upload_dir()['basedir'], strtolower( wp_get_theme()->stylesheet ) ) );
define( 'CAWEB_EXTERNAL_URI', sprintf( '%1$s/%2$s-ext', wp_get_upload_dir()['baseurl'], strtolower( wp_get_theme()->stylesheet ) ) );
define( 'CAWEB_MINIMUM_SUPPORTED_TEMPLATE_VERSION', '5.5' );
define( 'CAWEB_SUPPORTED_TEMPLATE_VERSIONS', array( '5.5', '6.0' ) );
define( 'CAWEB_BETA_TEMPLATE_VERSIONS', array() );


/**
 * Plugin API/Action Reference
 * Actions Run During a Typical Request
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference#Actions_Run_During_a_Typical_Request
 */
add_action( 'after_setup_theme', 'caweb_setup_theme', 11 );
add_action( 'send_headers', 'caweb_send_headers' );
add_action( 'init', 'caweb_init' );
add_action( 'pre_get_posts', 'caweb_pre_get_posts', 11 );
add_action( 'wp_body_open', 'caweb_wp_body_open' );
add_action( 'wp_footer', 'caweb_wp_footer' );
add_action( 'wp_footer', 'caweb_late_wp_footer', 999999999 );
add_action( 'caweb_search_form', 'caweb_search_form' );
// The priority has to be 99999999 to allow Divi to run it's replacement of parent style.css.
// add_action( 'wp_enqueue_scripts', 'et_divi_replace_parent_stylesheet', 99999998 );.
add_action( 'wp_enqueue_scripts', 'caweb_wp_enqueue_scripts', 999999999 );

/**
 * Plugin API/Action Reference
 * Actions Run During an Admin Page Request.
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference#Actions_Run_During_an_Admin_Page_Request
 */
add_action( 'admin_init', 'caweb_admin_init' );
add_action( 'admin_enqueue_scripts', 'caweb_admin_enqueue_scripts', 15 );
add_action( 'save_post', 'caweb_save_post_list_meta', 10, 2 );

/*
----------------------------
	End of Action References
----------------------------
*/

/*
If CAWeb is a child theme of Divi, include CAWeb Custom Modules and Functions
*/
if ( is_child_theme() && 'Divi' === wp_get_theme()->get( 'Template' ) ) {
	if ( ! empty( CAWEB_EXTENSION ) && file_exists( sprintf( '%1$s/divi/extension/%2$s.php', CAWEB_ABSPATH, CAWEB_EXTENSION ) ) ) {
		include sprintf( '%1$s/divi/extension/%2$s.php', CAWEB_ABSPATH, CAWEB_EXTENSION );
	}
}

/*
-------------------------------------
	Typical Action Reference Functions
-------------------------------------
*/

/**
 * CAWeb After Setup Theme
 *
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference/after_setup_theme
 *
 * @wp_action add_action( 'after_setup_theme', 'caweb_setup_theme', 9999999 );
 * @return void
 */
function caweb_setup_theme() {
	/* Include CAWeb Functionality */
	foreach ( glob( __DIR__ . '/inc/*.php' ) as $file ) {
		// if file is live-drafts functionality.
		if ( strpos( $file, 'live-drafts.php' ) ) {
			// check if CAWeb Live Drafts is enabled before including.
			if ( get_option( 'caweb_live_drafts', false ) ) {
				require_once $file;
			}
		} else {
			require_once $file;
		}
	}

	/**
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	/**
	 * Unregister Menu Navigation Settings
	 *
	 * @link https://developer.wordpress.org/reference/functions/unregister_nav_menu/
	 */
	unregister_nav_menu( 'primary-menu' );
	unregister_nav_menu( 'secondary-menu' );
	unregister_nav_menu( 'footer-menu' );

	/**
	 * Register CAWeb navigation menu locations
	 *
	 * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
	 */
	register_nav_menus( caweb_nav_menu_theme_locations() );

	// Remove Divi viewport meta.
	remove_action( 'wp_head', 'et_add_viewport_meta' );

	// Remove Divi favicon.
	remove_action( 'wp_head', 'add_favicon' );

	/**
	 * All Child Theme .css files must be dequeued and re-queued so that we can control their order.
	 * They must be queued below the parent stylesheet, which we have dequeued and re-queued in et_divi_replace_parent_stylesheet().
	 *
	 * Remove this action, otherwise the order of the styles is incorrect
	 *
	 * @since Divi 4.10.0
	 */
	remove_action( 'wp_enqueue_scripts', 'et_requeue_child_theme_styles', 99999999 );

	// Add CAWeb Categories if they don't already exists.
	if ( ! term_exists( 'Content Types', 'category' ) ) {
		/* Insert Parent Content Type Category */
		wp_insert_term( 'Content Types', 'category' );

		/* Rename Default Category to All */
		wp_update_term(
			get_option( 'default_category', 'all' ),
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
	}

}

/**
 * Adds additional headers
 *
 * Adds Strict-Transport-Security (HSTS) header.
 * Adds Content-Security-Policy header.
 * Adds X-Content-Type-Options header.
 *
 * @wp_action add_action( 'send_headers', 'caweb_send_headers' );
 * @return void
 */
function caweb_send_headers() {
	header( 'Strict-Transport-Security: max-age=31536000; includeSubDomains' );
	header( "Content-Security-Policy: frame-ancestors 'self' *.ca.gov" );
	header( 'X-Content-Type-Options: nosniff' );
}

/**
 * CAWeb Init
 * Triggered before any other hook when a user accesses the admin area.
 * Note, this does not just run on user-facing admin screens.
 * It runs on admin-ajax.php and admin-post.php as well.
 *
 * @wp_action add_action( 'init', 'caweb_init' );
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference/admin_init
 * @return void
 */
function caweb_init() {
	global $pagenow;

	/**
	 * Enqueues the default ThickBox js and css. (if not on the login page or customizer page)
	 *
	 * @link https://developer.wordpress.org/reference/functions/add_thickbox/
	 */
	if ( ! in_array( $pagenow, array( 'wp-login.php', 'customize.php' ), true ) ) {
		add_thickbox();
	}

}

/**
 * CAWeb Pre Get Posts
 *
 * Fires after the query variable object is created, but before the actual query is run.
 *
 * @link https://developer.wordpress.org/reference/hooks/pre_get_posts/
 * @wp_action add_action( 'pre_get_posts', 'caweb_pre_get_posts', 11 );
 * @param WP_Query $query The WP Query Instance.
 * @return WP_Query
 */
function caweb_pre_get_posts( $query ) {
	global $wp_query;
	$vars       = array( 'year', 'monthnum', 'author_name', 'category_name', 'tag', 'paged' );
	$query_vars = ! empty( $wp_query->query ) ? array_diff_key( $wp_query->query, array_flip( $vars ) ) : array();

	if ( empty( $query_vars ) && ( is_archive() || is_category() || is_author() || is_tag() ) ) {
		$query->set( 'posts_per_page', 5 );
	}

	return $query;
}

/**
 * Triggered after the opening body tag.
 *
 * @since 1.10.0
 *
 * @wp_action add_action( 'wp_body_open', 'caweb_wp_body_open' );
 * @link https://developer.wordpress.org/reference/functions/wp_body_open/
 * @return void
 */
function caweb_wp_body_open() {
	$caweb_version       = caweb_template_version();
	$caweb_logo          = get_option( 'header_ca_branding', '' );
	$caweb_logo_alt_text = get_option( 'header_ca_branding_alt_text', '' );

	// Search.
	$caweb_google_search_id         = get_option( 'ca_google_search_id', '' );
	$caweb_frontpage_search_enabled = get_option( 'ca_frontpage_search_enabled', false );
	$caweb_search_class             = is_front_page() && $caweb_frontpage_search_enabled ? ' featured-search fade ' : '';
	$caweb_search_class            .= empty( $caweb_google_search_id ) ? ' hidden ' : '';

	if ( ! empty( $caweb_logo ) && empty( $caweb_logo_alt_text ) ) {
		$caweb_logo_alt_text = caweb_get_attachment_post_meta( $caweb_logo, '_wp_attachment_image_alt' );
	}

	$args = array(
		'caweb_template_version'             => $caweb_version,
		'caweb_fixed_header'                 => get_option( 'ca_sticky_navigation', false ) ? ' fixed' : '',
		'caweb_utility_home_icon'            => get_option( 'ca_utility_home_icon', true ),
		'caweb_social_options'               => caweb_get_social_media_links(),
		'caweb_geo_locator_enabled'          => get_option( 'ca_geo_locator_enabled', false ),
		'caweb_contact_us_link'              => get_option( 'ca_contact_us_link', '' ),
		'caweb_google_trans_enabled'         => get_option( 'ca_google_trans_enabled', false ),
		'caweb_google_trans_page'            => get_option( 'ca_google_trans_page', '' ),
		'caweb_google_trans_text'            => get_option( 'ca_google_trans_text', '' ),
		'caweb_google_trans_page_new_window' => get_option( 'ca_google_trans_page_new_window', '' ),
		'caweb_google_trans_icon'            => get_option( 'ca_google_trans_icon', '' ),
		'caweb_logo'                         => $caweb_logo,
		'caweb_logo_alt_text'                => $caweb_logo_alt_text,
		'caweb_google_search_id'             => $caweb_google_search_id,
		'caweb_search_class'                 => $caweb_search_class,
		'caweb_menu_style'                   => get_option( 'ca_default_navigation_menu', 'singlelevel' ),
		'caweb_nav_home_link'                => ! is_front_page() && get_option( 'ca_home_nav_link', true ),

	);

	get_template_part( "parts/$caweb_version/header", null, $args );

}

/**
 * Triggered before the closing body tag.
 *
 * @since 1.10.0
 *
 * @wp_action add_action( 'wp_footer', 'caweb_wp_footer', 11 );
 * @link https://developer.wordpress.org/reference/functions/wp_body_open/
 * @return void
 */
function caweb_wp_footer() {
	get_template_part( 'parts/footer' );

	/* This removes Divi Builder Google Font CSS */
	wp_deregister_style( 'et-builder-googlefonts' );
}

/**
 * Triggered before the closing body tag.
 *
 * @since 1.10.1
 *
 * @wp_action add_action( 'wp_footer', 'caweb_wp_footer', 11 );
 * @link https://developer.wordpress.org/reference/functions/wp_body_open/
 * @return void
 */
function caweb_late_wp_footer() {
	/* This removes Divi Builder Google Font CSS */
	wp_deregister_style( 'et-builder-googlefonts' );
}

/**
 * Render Search Form
 *
 * @return void
 */
function caweb_search_form() {
	$caweb_version = caweb_template_version();
	?>
	<div class="section section-default search-container active top-0">
	<?php get_template_part( "parts/$caweb_version/search" ); ?>
	</div>
	<?php
}

/**
 * Register CAWeb Theme scripts/styles with priority of 99999999
 *
 * Fires when scripts and styles are enqueued.
 *
 * @wp_action add_action( 'wp_enqueue_scripts', 'caweb_wp_enqueue_scripts', 99999999 );
 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 *
 * @return void
 */
function caweb_wp_enqueue_scripts() {
	global $pagenow;

	$version = caweb_template_version();
	$color   = get_option( 'ca_site_color_scheme', 'oceanside' );

	// Template CSS File.
	$template_css_file = caweb_get_min_file( "/dist/$color-$version.css" );

	wp_enqueue_style( 'cagov-core-style', $template_css_file, array(), CAWEB_VERSION );

	// CAWeb CSS File.
	$caweb_css_file = caweb_get_min_file( '/dist/caweb-core.css' );

	wp_enqueue_style( 'caweb-core-style', $caweb_css_file, array(), CAWEB_VERSION );

	/* Google Fonts */
	wp_enqueue_style( 'caweb-google-font-style', 'https://fonts.googleapis.com/css?family=Asap+Condensed:400,600|Source+Sans+Pro:400,700', array(), CAWEB_VERSION );

	/* If not on the activation page */
	if ( 'wp-activate.php' !== $pagenow ) {
		/* External CSS Styles */
		$ext_css     = array_values( array_filter( get_option( 'caweb_external_css', array() ) ) );
		$ext_css_dir = sprintf( '%1$s/css', CAWEB_EXTERNAL_URI );

		foreach ( $ext_css as $index => $name ) {
			wp_enqueue_style( sprintf( 'caweb-external-custom-%1$d', $index + 1 ), "$ext_css_dir/$name", array(), uniqid( CAWEB_VERSION . '-', true ) );
		}
	}

	/* This removes Divi Google Font CSS */
	wp_deregister_style( 'divi-fonts' );

	$localize_args = array(
		'ca_site_version'             => $version,
		'ca_frontpage_search_enabled' => get_option( 'ca_frontpage_search_enabled', false ) && is_front_page(),
		'caweb_alerts'                => get_option( 'caweb_alerts', array() ),
		'is_front'                    => is_front_page(),
		'ajaxurl'                     => admin_url( 'admin-post.php' ),
		'path'                        => wp_parse_url( get_site_url() )['path'] ?? '/',
	);

	$localize_args = caweb_enqueue_google_scripts( $localize_args );

	// Template JS File.
	$template_js_file = caweb_get_min_file( "/dist/$color-$version.js", 'js' );

	/**
	 * Core JS File
	 *
	 * @todo Once 5.5 is completely removed the core file can be loaded with webpack instead.
	 */
	$core_js_file = caweb_get_min_file( "/src/version-$version/cagov.core.js", 'js' );

	// CAWeb JS File.
	$caweb_js_file = caweb_get_min_file( '/dist/caweb-core.js', 'js' );

	/* Geo Locator */
	$ca_geo_locator_enabled = 'on' === get_option( 'ca_geo_locator_enabled', false ) || get_option( 'ca_geo_locator_enabled', false );

	if ( $ca_geo_locator_enabled ) {
		$jsv4geo = CAWEB_CA_STATE_PORTAL_CDN_URL . '/js/js4geo.js';
		wp_enqueue_script( 'cagov-jsv4geo-script', $jsv4geo, array( 'jquery' ), CAWEB_VERSION, true );
	}

	// Register Scripts.
	wp_register_script( 'cagov-core-template-script', $template_js_file, array( 'jquery' ), CAWEB_VERSION, true );

	wp_register_script( 'caweb-core-script', $caweb_js_file, array( 'jquery' ), CAWEB_VERSION, true );
	wp_localize_script( 'caweb-core-script', 'args', $localize_args );

	/* Enqueue Scripts */
	wp_enqueue_script( 'cagov-core-script', $core_js_file, array( 'jquery', 'cagov-core-template-script' ), CAWEB_VERSION, true );

	wp_enqueue_script( 'caweb-core-script' );

	// Enable Statewide Alerts.
	if ( get_option( 'caweb_statewide_alert_enabled', false ) ) {
		wp_enqueue_script( 'cagov-statewide-alerts', 'https://alert.cdt.ca.gov/alert.js', array(), CAWEB_VERSION, false );
	}

	$cwes     = wp_create_nonce( 'caweb_wp_enqueue_scripts' );
	$verified = isset( $cwes ) && wp_verify_nonce( sanitize_key( $cwes ), 'caweb_wp_enqueue_scripts' );

	$vb_enabled = isset( $_GET['et_fb'] ) && '1' === $_GET['et_fb'] ? true : false;

	/* If not on the activation page or Divi Visual Builder is enabled */
	if ( $vb_enabled || 'wp-activate.php' === $pagenow ) {
		return;
	}

	/* External JS */
	$ext_js = array_values( array_filter( get_option( 'caweb_external_js', array() ) ) );

	foreach ( $ext_js as $index => $name ) {
		$location = sprintf( '%1$s/js/%2$s', CAWEB_EXTERNAL_URI, $name );
		$i        = $index + 1;
		wp_register_script( "caweb-external-custom-$i-scripts", $location, array( 'jquery' ), uniqid( CAWEB_VERSION . '-', true ), true );
		wp_enqueue_script( "caweb-external-custom-$i-scripts" );
	}
}

/**
 * Register CAWeb Theme Google Services
 *
 * @param  array $localized Array of localized arguments.
 * @return array
 */
function caweb_enqueue_google_scripts( $localized ) {
	// Multisite Google Options.
	$multi_ga  = get_site_option( 'caweb_multi_ga' );
	$multi_ga4 = get_site_option( 'caweb_multi_ga4' );

	// Site Google Options.
	$ga   = get_option( 'ca_google_analytic_id', '' );
	$ga4  = get_option( 'ca_google_analytic4_id', '' );
	$gtag = get_option( 'ca_google_tag_manager_id', '' );
	$gcse = get_option( 'ca_google_search_id', '' );

	$translate = get_option( 'ca_google_trans_enabled', 'none' );

	// Multisite Google Analytics ID.
	if ( ! empty( $multi_ga ) ) {
		// Add to localized arguments.
		$localized['caweb_multi_ga'] = $multi_ga;

		// Enqueue script.
		wp_enqueue_script( 'google-analytics-caweb', "https://www.googletagmanager.com/gtag/js?id=$multi_ga", array(), CAWEB_VERSION, true );
	}

	// Multisite Google Analytics4 ID.
	if ( ! empty( $multi_ga4 ) ) {
		// Add to localized arguments.
		$localized['caweb_multi_ga4'] = $multi_ga4;

		// Enqueue script.
		wp_enqueue_script( 'google-analytics4-caweb', "https://www.googletagmanager.com/gtag/js?id=$multi_ga4", array(), CAWEB_VERSION, true );
	}

	// Google Analytic ID.
	if ( ! empty( $ga ) ) {
		// Add to localized arguments.
		$localized['ca_google_analytic_id'] = $ga;

		// Enqueue script.
		wp_enqueue_script( 'google-analytics-agency', "https://www.googletagmanager.com/gtag/js?id=$ga", array(), CAWEB_VERSION, true );
	}

	// Google Analytics4 ID.
	if ( ! empty( $ga4 ) ) {
		// Add to localized arguments.
		$localized['ca_google_analytic4_id'] = $ga4;

		// Enqueue script.
		wp_enqueue_script( 'google-analytics4-agency', "https://www.googletagmanager.com/gtag/js?id=$ga4", array(), CAWEB_VERSION, true );
	}

	// Google Tag Manager ID.
	if ( ! empty( $gtag ) ) {
		// Add to localized arguments.
		$localized['ca_google_tag_manager_id'] = $gtag;

		// Enqueue script.
		wp_enqueue_script( 'google-tag-manager-agency', "https://www.googletagmanager.com/gtm.js?id=$gtag", array(), CAWEB_VERSION, true );
	}

	// Enqueue Google Custom Search script.
	if ( ! empty( $gcse ) ) {
		wp_enqueue_script( 'google-cse', "https://cse.google.com/cse.js?cx=$gcse", array(), CAWEB_VERSION, true );
	}

	// Statewide Analytics and Google Tag.
	wp_enqueue_script( 'google-analytics-statewide', 'https://www.googletagmanager.com/gtag/js?id=UA-3419582-2', array(), CAWEB_VERSION, true );
	wp_enqueue_script( 'google-analytics4-statewide', 'https://www.googletagmanager.com/gtag/js?id=G-69TD0KNT0F', array(), CAWEB_VERSION, true );

	// Google Translate.
	if ( 'none' !== get_option( 'ca_google_trans_enabled', 'none' ) ) {
		wp_enqueue_script( 'google-translate-caweb', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit', array(), CAWEB_VERSION, true );

		wp_add_inline_script(
			'google-translate-caweb',
			'function googleTranslateElementInit() {
			new google.translate.TranslateElement({pageLanguage: "en", gaTrack: true, autoDisplay: false,  
			layout: google.translate.TranslateElement.InlineLayout.VERTICAL},"google_translate_element");
		}'
		);
	}

	return $localized;
}

/*
-----------------------------------------------
	End of Typical Action Reference Functions
-----------------------------------------------
*/

/*
-------------------------------------
	Admin Action Reference Functions
-------------------------------------
*/

/**
 * CAWeb Admin Init
 *
 * Triggered before any other hook when a user accesses the admin area.
 * Note, this does not just run on user-facing admin screens.
 * It runs on admin-ajax.php and admin-post.php as well.
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference/admin_init
 * @wp_action add_action( 'admin_init', 'caweb_admin_init' );
 * @return void
 */
function caweb_admin_init() {
	/* Core Updater */
	require_once CAWEB_ABSPATH . '/core/class-caweb-theme-update.php';

	/**
	 * Initialize the WP Filesystem Class
	 *
	 * @link https://codex.wordpress.org/Filesystem_API
	 */
	global $wp_filesystem;
	if ( ! is_a( $wp_filesystem, 'WP_Filesystem_Base' ) ) {
		$creds = request_filesystem_credentials( site_url() );
		WP_Filesystem( $creds );
	}

}

/**
 * CAWeb Admin Enqueue Scripts and Styles
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/
 * @wp_action add_action( 'admin_enqueue_scripts', 'caweb_admin_enqueue_scripts', 15 );
 * @param  string $hook The current admin page.
 *
 * @return void
 */
function caweb_admin_enqueue_scripts( $hook ) {
	$pages = array( 'toplevel_page_caweb_options', 'caweb-options_page_caweb_multi_ga', 'caweb-options_page_caweb_api', 'nav-menus.php' );

	$version = caweb_template_version();
	$color   = get_option( 'ca_site_color_scheme', 'oceanside' );

	$editor_css = caweb_get_min_file( "/dist/$color-$version.css" );

	$caweb_css_file = caweb_get_min_file( '/dist/caweb-admin.css' );

	if ( in_array( $hook, $pages, true ) ) {
		$caweb_js_file = caweb_get_min_file( '/dist/caweb-admin.js', 'js' );

		/* Enqueue Scripts */
		wp_enqueue_script( 'jquery' );
		wp_enqueue_media();
		wp_enqueue_editor();

		wp_enqueue_script( 'custom-header' );

		wp_register_script( 'caweb-admin-scripts', $caweb_js_file, array( 'jquery', 'thickbox' ), CAWEB_VERSION, true );

		$caweb_localize_args = array(
			'template_version'   => $version,
			'defaultFavIcon'     => caweb_default_favicon_url(),
			'changeCheck'        => $hook,
			'caweb_icons'        => array_values( caweb_symbols( -1, '', '', false ) ),
			'caweb_colors'       => caweb_template_colors(),
			'tinymce_settings'   => caweb_tiny_mce_settings(),
			'caweb_menus'        => caweb_nav_menu_types(),
		);

		wp_localize_script( 'caweb-admin-scripts', 'caweb_admin_args', $caweb_localize_args );

		wp_enqueue_script( 'caweb-admin-scripts' );

		/* Enqueue Styles */
		wp_enqueue_style( 'caweb-admin-styles', $caweb_css_file, array(), CAWEB_VERSION );

	} elseif ( in_array( $hook, array( 'post.php', 'post-new.php', 'widgets.php' ), true ) ) {
		wp_enqueue_style( 'caweb-admin-styles', $caweb_css_file, array(), CAWEB_VERSION );
	}

	/* Load editor styling */
	wp_dequeue_style( get_template_directory_uri() . 'css/editor-style.css' );
	add_editor_style( $editor_css );
}

/**
 * Set CAWeb Category based on Post Detail Module used.
 * Fires once a post has been saved.
 *
 * @link https://developer.wordpress.org/reference/hooks/save_post/
 * @wp_action add_action( 'save_post', 'caweb_save_post_list_meta', 10, 2 );
 * @param  int     $post_id Post ID.
 * @param  WP_POST $post Post object.
 *
 * @return void
 */
function caweb_save_post_list_meta( $post_id, $post ) {
	$cats = wp_get_post_categories( $post_id );

	$content = $post->post_content;
	/* Search for Post Detail Module if it exists, add the appropriate Category */
	$layout = caweb_get_shortcode_from_content( $content, 'et_pb_ca_post_handler' );

	$layout = ( isset( $layout->post_type_layout ) ? $layout->post_type_layout : '' );

	switch ( $layout ) {

		case 'course':
			array_push( $cats, get_cat_ID( 'Courses' ) );
			array_push( $cats, get_cat_ID( 'Content Types' ) );

			break;

		case 'event':
			array_push( $cats, get_cat_ID( 'Events' ) );
			array_push( $cats, get_cat_ID( 'Content Types' ) );

			break;

		case 'exam':
			array_push( $cats, get_cat_ID( 'Exams' ) );
			array_push( $cats, get_cat_ID( 'Content Types' ) );

			break;

		case 'faqs':
			array_push( $cats, get_cat_ID( 'FAQs' ) );
			array_push( $cats, get_cat_ID( 'Content Types' ) );

			break;

		case 'jobs':
			array_push( $cats, get_cat_ID( 'Jobs' ) );
			array_push( $cats, get_cat_ID( 'Content Types' ) );

			break;

		case 'news':
			array_push( $cats, get_cat_ID( 'News' ) );
			array_push( $cats, get_cat_ID( 'Content Types' ) );

			break;

		case 'profile':
			array_push( $cats, get_cat_ID( 'Profiles' ) );
			array_push( $cats, get_cat_ID( 'Content Types' ) );

			break;
	}

	wp_set_object_terms( $post_id, $cats, 'category' );

	/*
		The 'nginx_cache_purge' custom meta field was used on the old MCS system,
		if the page/post has this field delete it.
	*/
	delete_post_meta( $post_id, 'nginx_cache_purge' );
}

/*
--------------------------------------------
	End of Admin Action Reference Functions
--------------------------------------------
*/
