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
define( 'CAWEB_CA_STATE_PORTAL_CDN_URL', 'https://california.azureedge.net/cdt/CAgovPortal' );
define( 'CAWEB_EXTERNAL_DIR', sprintf( '%1$s/%2$s-ext/', wp_get_upload_dir()['basedir'], strtolower( wp_get_theme()->stylesheet ) ) );
define( 'CAWEB_EXTERNAL_URI', sprintf( '%1$s/%2$s-ext', wp_get_upload_dir()['baseurl'], strtolower( wp_get_theme()->stylesheet ) ) );
define( 'CAWEB_MINIMUM_SUPPORTED_TEMPLATE_VERSION', 5.5 );
define( 'CAWEB_SUPPORTED_TEMPLATE_VERSIONS', array( 5.5 ) );
define( 'CAWEB_BETA_TEMPLATE_VERSIONS', array() );


/**
 * Plugin API/Action Reference
 * Actions Run During a Typical Request
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference#Actions_Run_During_a_Typical_Request
 */
add_action( 'after_setup_theme', 'caweb_setup_theme', 11 );
add_action( 'send_headers', 'caweb_enable_hsts' );
add_action( 'init', 'caweb_init' );
add_action( 'pre_get_posts', 'caweb_pre_get_posts', 11 );
add_action( 'get_header', 'caweb_get_header' );
add_action( 'wp_head', 'caweb_wp_head' );
add_action( 'wp_footer', 'caweb_wp_footer', 11 );
// The priority has to be 99999999 to allow Divi to run it's replacement of parent style.css.
// add_action( 'wp_enqueue_scripts', 'et_divi_replace_parent_stylesheet', 99999998 );.
add_action( 'wp_enqueue_scripts', 'caweb_wp_enqueue_scripts', 99999999 );

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
 * @category add_action( 'after_setup_theme', 'caweb_setup_theme', 9999999 );
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

	/**
	 * This action hook is used to add additional headers to the outgoing HTTP response.
	 * Add $_COOKIE variable for Alert Banners
	 * Session variables used to be used but are no longer supported in WP since 4.9.
	 *
	 * @since WordPress 4.9
	 * @see https://wordpress.org/support/topic/the-loopback-request-to-your-site-failed-4/page/2/
	 */
	$caweb_alerts = get_option( 'caweb_alerts', array() );

	if ( ! empty( $caweb_alerts ) && ! headers_sent() ) {
		foreach ( $caweb_alerts as $c => $data ) {
			if ( ! isset( $_COOKIE[ "caweb-alert-id-$c" ] ) ) {
				setcookie( "caweb-alert-id-$c", true );
				$_COOKIE[ "caweb-alert-id-$c" ] = true;
			}
		}
	}

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

}

/**
 * Enables the HTTP Strict Transport Security (HSTS) header in WordPress.
 *
 * @category add_action( 'send_headers', 'caweb_enable_hsts' );
 * @return void
 */
function caweb_enable_hsts() {
	header( 'Strict-Transport-Security: max-age=31536000; includeSubDomains' );
}

/**
 * CAWeb Init
 * Triggered before any other hook when a user accesses the admin area.
 * Note, this does not just run on user-facing admin screens.
 * It runs on admin-ajax.php and admin-post.php as well.
 *
 * @category add_action( 'init', 'caweb_init' );
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
 * @category add_action( 'pre_get_posts', 'caweb_pre_get_posts', 11 );
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
 * Add template header if using Divi Custom Type 'Project
 *
 * @category add_action( 'get_header', 'caweb_get_header' );
 * @link https://developer.wordpress.org/reference/hooks/get_header/
 * @param  string $name Name of the specific header file to use. null for the default header.
 *
 * @return void
 */
function caweb_get_header( $name = null ) {
	$post_type = get_post_type( get_the_ID() );

	if ( in_array( $post_type, array( 'project', 'tribe_events' ), true ) || empty( $post_type ) ) {
		locate_template( array( 'header.php' ), true );
		locate_template( array( 'partials/header.php' ), true, true, array( 'loaded' => true ) );
	}
}

/**
 * Register CAWeb Theme scripts/styles with priority of 99999999
 *
 * Fires when scripts and styles are enqueued.
 *
 * @category add_action( 'wp_enqueue_scripts', 'caweb_wp_enqueue_scripts', 99999999 );
 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 *
 * @return void
 */
function caweb_wp_enqueue_scripts() {
	global $pagenow;
	$cwes     = wp_create_nonce( 'caweb_wp_enqueue_scripts' );
	$verified = isset( $cwes ) && wp_verify_nonce( sanitize_key( $cwes ), 'caweb_wp_enqueue_scripts' );

	$version     = caweb_template_version();
	$color       = get_option( 'ca_site_color_scheme', 'oceanside' );
	$colorscheme = caweb_color_schemes( $version, 'filename', $color );
	$colorscheme = is_array( $colorscheme ) ? array_shift( $colorscheme ) : $colorscheme;

	$core_css_file = caweb_get_min_file( "/css/caweb-$version-$colorscheme.css" );

	/* CAWeb Core CSS */
	wp_enqueue_style( 'caweb-core-style', $core_css_file, array(), CAWEB_VERSION );

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
		'ca_frontpage_search_enabled' => get_option( 'ca_frontpage_search_enabled' ) && is_front_page(),
		'ca_google_search_id'         => get_option( 'ca_google_search_id' ),
		'caweb_multi_ga'              => get_site_option( 'caweb_multi_ga' ),
		'ca_google_trans_enabled'     => 'none' !== get_option( 'ca_google_trans_enabled' ) ? true : false,
		'ajaxurl'                     => admin_url( 'admin-post.php' ),
	);

	if ( ! empty( get_option( 'ca_google_tag_manager_id', '' ) ) ) {
		$localize_args['ca_google_tag_manager_id'] = get_option( 'ca_google_tag_manager_id', '' );
	}

	if ( ! empty( get_option( 'ca_google_analytic_id', '' ) ) ) {
		$localize_args['ca_google_analytic_id'] = get_option( 'ca_google_analytic_id', '' );
	}

	$frontend_js_file = caweb_get_min_file( "/js/caweb-$version.js", 'js' );

	/* Geo Locator */
	$ca_geo_locator_enabled = 'on' === get_option( 'ca_geo_locator_enabled' ) || get_option( 'ca_geo_locator_enabled' );

	if ( $ca_geo_locator_enabled ) {
		$jsv4geo = CAWEB_CA_STATE_PORTAL_CDN_URL . '/js/js4geo.js';
		wp_enqueue_script( 'cagov-jsv4geo-script', $jsv4geo, array( 'jquery' ), CAWEB_VERSION, true );
	}

	/* Register Scripts */
	wp_register_script( 'cagov-modernizr-script', CAWEB_URI . '/js/libs/modernizr-3.6.0.min.js', array( 'jquery' ), CAWEB_VERSION, false );

	wp_register_script( 'caweb-script', $frontend_js_file, array( 'cagov-modernizr-script' ), CAWEB_VERSION, true );

	wp_localize_script( 'caweb-script', 'args', $localize_args );

	/* Enqueue Scripts */
	wp_enqueue_script( 'caweb-script' );

	$vb_enabled = isset( $_GET['et_fb'] ) && '1' === $_GET['et_fb'] ? true : false;

	if ( $vb_enabled ) {
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
 * WP Head
 * Prints scripts or data in the head tag on the front end.
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_head/
 * @category add_action( 'wp_head', 'caweb_wp_head' );
 * @return void
 */
function caweb_wp_head() {
	$caweb_fav_ico = ! empty( get_option( 'ca_fav_ico', '' ) ) ? get_option( 'ca_fav_ico' ) : caweb_default_favicon_url();
	?>
	<link title="Fav Icon" rel="icon" href="<?php print esc_url( $caweb_fav_ico ); ?>">
	<link rel="shortcut icon" href="<?php print esc_url( $caweb_fav_ico ); ?>">
	<?php
}

/**
 * CAWeb Footer
 *
 * @link https://codex.wordpress.org/Plugin_API/Action_Reference/wp_footer
 * @category add_action( 'wp_footer', 'caweb_wp_footer', 11 );
 * @return void
 */
function caweb_wp_footer() {
	/* This removes Divi Builder Google Font CSS */
	wp_deregister_style( 'et-builder-googlefonts' );
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
 * @category add_action( 'admin_init', 'caweb_admin_init' );
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
 * @category add_action( 'admin_enqueue_scripts', 'caweb_admin_enqueue_scripts', 15 );
 * @param  string $hook The current admin page.
 *
 * @return void
 */
function caweb_admin_enqueue_scripts( $hook ) {
	$pages     = array( 'toplevel_page_caweb_options', 'caweb-options_page_caweb_multi_ga', 'caweb-options_page_caweb_api', 'nav-menus.php' );
	$admin_css = caweb_get_min_file( '/css/admin.css' );

	$caweb_enable_design_system = get_option( 'caweb_enable_design_system', false );
	$version                    = caweb_template_version();
	$color                      = get_option( 'ca_site_color_scheme', 'oceanside' );
	$colorscheme                = caweb_color_schemes( $version, 'filename', $color );
	$colorscheme                = is_array( $colorscheme ) ? array_shift( $colorscheme ) : $colorscheme;

	$editor_css = caweb_get_min_file( "/css/caweb-$version-$colorscheme.css" );

	if ( in_array( $hook, $pages, true ) ) {
		$admin_js = caweb_get_min_file( '/js/admin.js', 'js' );

		/* Enqueue Scripts */
		wp_enqueue_script( 'jquery' );
		wp_enqueue_media();
		wp_enqueue_editor();

		wp_enqueue_script( 'custom-header' );

		wp_register_script( 'caweb-admin-scripts', $admin_js, array( 'jquery', 'thickbox' ), CAWEB_VERSION, true );

		$schemes = array( 'design-system' => caweb_color_schemes( 'design-system' ) );
		foreach ( caweb_template_versions() as $v => $label ) {
			$schemes[ "$v" ] = caweb_color_schemes( $v );
		}

		$caweb_localize_args = array(
			'defaultFavIcon'     => caweb_default_favicon_url(),
			'changeCheck'        => $hook,
			'caweb_icons'        => array_values( caweb_symbols( -1, '', '', false ) ),
			'caweb_colors'       => caweb_template_colors(),
			'tinymce_settings'   => caweb_tiny_mce_settings(),
			'caweb_colorschemes' => $schemes,
		);

		wp_localize_script( 'caweb-admin-scripts', 'caweb_admin_args', $caweb_localize_args );

		wp_enqueue_script( 'caweb-admin-scripts' );

		/*
		Bootstrap 4 Toggle
		https://gitbrent.github.io/bootstrap4-toggle/
		*/
		wp_enqueue_script( 'caweb-boot1', 'https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js', array( 'jquery' ), '3.6.1', true );

		/* Enqueue Styles */
		wp_enqueue_style( 'caweb-admin-styles', $admin_css, array(), CAWEB_VERSION );
		wp_enqueue_style( 'caweb-boot1-toggle', 'https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css', array(), CAWEB_VERSION );
	} elseif ( in_array( $hook, array( 'post.php', 'post-new.php', 'widgets.php' ), true ) ) {
		wp_enqueue_style( 'caweb-admin-styles', $admin_css, array(), CAWEB_VERSION );
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
 * @category add_action( 'save_post', 'caweb_save_post_list_meta', 10, 2 );
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
