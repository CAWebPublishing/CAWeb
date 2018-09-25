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

define('CAWebAbsPath', get_stylesheet_directory());
define('CAWebUri', get_stylesheet_directory_uri());
define('CAWebVersion', wp_get_theme('CAWeb')->get('Version'));
define('CAWebDiviVersion', wp_get_theme('Divi')->get('Version'));

define('CAWebGoogleMapsEmbedAPIKey', 'AIzaSyCtq3i8ME-Ab_slI2D8te0Uh2PuAQVqZuE');
// Actions Ran During any Request
// CAWeb Admin Init
add_action('admin_init', 'caweb_admin_init');
function caweb_admin_init() {

	// Core Updater
    require_once(CAWebAbsPath.'/core/update.php');
}

/**
 * Enable unfiltered_html capability for Administrators.
 *
 * @param  array  $caps    The user's capabilities.
 * @param  string $cap     Capability name.
 * @param  int    $user_id The user ID.
 * @return array  $caps    The user's capabilities, with 'unfiltered_html' potentially added.
 */
function caweb_add_unfiltered_html_capability($caps, $cap, $user_id) {
    if ('unfiltered_html' === $cap && user_can($user_id, 'administrator')) {
        $caps = array('unfiltered_html');
    }

    return $caps;
}
add_filter('map_meta_cap', 'caweb_add_unfiltered_html_capability', 1, 3);

// CAWeb After Setup Theme
add_action('after_setup_theme', 'caweb_setup_theme');
function caweb_setup_theme() {
    $inc_dir = CAWebAbsPath.'/includes';

    // additional functions
    require_once("{$inc_dir}/functions.php");

    // Shortcodes
    require_once("{$inc_dir}/shortcodes.php");

    // customizer functions
    require_once("{$inc_dir}/customizer.php");

    // Navigation Menu Customization to wp-admin/nav-menus.php page
    require_once("{$inc_dir}/nav_walker.php");
    require_once("{$inc_dir}/nav.php");

    // Metaboxes
    require_once("{$inc_dir}/metaboxes.php");

    // Password Reset
    require_once("{$inc_dir}/wp-login.php");

    // Filters
    require_once(CAWebAbsPath."/includes/filters.php");

    // Options Page
    require_once(CAWebAbsPath.'/options.php');

    // Set Up Predefined Category Content Types
    $ca_cats = array(
        'Courses', 'Events', 'Exams', 'FAQs', 'Jobs',
        'News', 'Profiles', 'Publications');

    // Insert Parent Content Type Category
    wp_insert_term('Content Types', 'category');

    // Rename Default Category to All
    wp_update_term(get_option('default_category'), 'category', array(
        'name' => 'All',
        'slug' => 'all'));

    /* Loop thru Predefined Categories and create
    Content Categories under Content Types Category */
    foreach ($ca_cats as $c) {
        wp_insert_term($c, 'category', array(
            'parent' => get_cat_ID('Content Types'),
        ));
    }

    // Enable Post Thumbnails
    add_theme_support('post-thumbnails');
}

// CAWeb Pre Get Posts
add_action('pre_get_posts', 'caweb_pre_get_posts', 11);
function caweb_pre_get_posts($query) {
    global $wp_query;
    $vars = array('year', 'monthnum', 'author_name', 'category_name', 'tag', 'paged');
    $query_vars = $wp_query->query;

    foreach ($vars as $var) {
        if (isset($query_vars[$var])) {
            unset($query_vars[$var]);
        }
    }

    if (empty($query_vars) && (is_archive() || is_category() || is_author() || is_tag())) {
        $query->set('posts_per_page', 5);
    }

    return $query;
}

// Actions Ran During a Typical Request
// CAWeb Init
add_action('init', 'caweb_init');
function caweb_init() {
    global $pagenow;

    // Unregister Divi Project Type
    //unregister_post_type('project');

    // Unregister Menu Navigation Settings
    unregister_nav_menu('primary-menu');
    unregister_nav_menu('secondary-menu');
    unregister_nav_menu('footer-menu');

    // Register Menu Navigation Settings
    register_nav_menus(cawen_nav_menu_theme_locations());

    // Enable Thickbox
    if ('wp-login.php' !== $pagenow) {
        add_thickbox();
    }
    if ( ! session_id()) {
        session_start();
    }

    add_action('admin_post_caweb_clear_alert_session', 'caweb_clear_alert_session');
    add_action('admin_post_nopriv_caweb_clear_alert_session', 'caweb_clear_alert_session');

    add_action('caweb_post_list_module_clear_cache', 'caweb_post_list_module_clear_cache', 10, 1);
}

function caweb_post_list_module_clear_cache() {
    if (function_exists('clear_nginx_post_publish_cache')) {
        clear_nginx_post_publish_cache();
    }
}
function caweb_clear_alert_session() {
    $id = $_GET['alert-id'];

    if (isset($_SESSION['display_alert_'.$id])) {
        $_SESSION['display_alert_'.$id] = false;
    }

    die();
}
add_action('wp_enqueue_scripts', 'caweb_wp_enqueue_parent_scripts');
function caweb_wp_enqueue_parent_scripts() {
    // Required in order to inherit parent theme style.css
    wp_enqueue_style('parent-style', get_template_directory_uri().'/style.css', array());
}
// CAWeb Enqueue Scripts and Styles at the bottom
add_action('wp_enqueue_scripts', 'caweb_wp_enqueue_scripts', 15);
function caweb_wp_enqueue_scripts() {
    global $pagenow;

    $post_id = get_the_ID();
    $ver = caweb_get_page_version($post_id);
    $color = get_option('ca_site_color_scheme', 'oceanside');
    $schemes = caweb_color_schemes(caweb_get_page_version(get_the_ID()), 'filename');
    $colorscheme = isset($schemes[$color]) ? $schemes[$color] : 'oceanside';

    // If on the activation page
    if ('wp-activate.php' == $pagenow) {
        wp_enqueue_style('caweb-core-styles', sprintf('%1$s/css/version%2$s/cagov.core.css', CAWebUri, $ver), array(), CAWebVersion);
        wp_enqueue_style('caweb-color-styles', sprintf('%1$s/css/version%2$s/colorscheme/%3$s.css', CAWebUri, $ver, $colorscheme), array(), CAWebVersion);
    } else {
        wp_enqueue_style('caweb-core-style', sprintf('%1$s/css/version%2$s/cagov.core.css', CAWebUri, $ver), array(), CAWebVersion);
        wp_enqueue_style('caweb-color-style', sprintf('%1$s/css/version%2$s/colorscheme/%3$s.css', CAWebUri, $ver, $colorscheme), array(), CAWebVersion);
        wp_enqueue_style('caweb-module-style', sprintf('%1$s/css/modules.css', CAWebUri), array(), CAWebVersion);
        wp_enqueue_style('caweb-font-style', sprintf('%1$s/css/cagov.font-only.css', CAWebUri), array(), CAWebVersion);
        wp_enqueue_style('caweb-custom-style', sprintf('%1$s/css/custom.css', CAWebUri), array(), CAWebVersion);
        wp_enqueue_style('caweb-custom-version-style', sprintf('%1$s/css/version%2$s/custom.css', CAWebUri, $ver), array(), CAWebVersion);

        // External CSS Styles
        $ext_css = array_values(array_filter(get_option('caweb_external_css', array())));

        foreach ($ext_css as $index => $name) {
            $location = sprintf('%1$s/css/external/%2$s/%3$s', CAWebUri, get_current_blog_id(), $name);
            wp_enqueue_style(sprintf('caweb-external-custom-%1$d-styles', $index + 1), $location, array(), CAWebVersion);
        }
    }

    // Register Scripts
    wp_register_script('cagov-modernizr-script', CAWebUri.'/js/libs/modernizr-3.6.0.min.js', array('jquery'), CAWebVersion, false);

    wp_register_script('cagov-google-script', CAWebUri.'/js/libs/google.js', array(), CAWebVersion, true);
    wp_register_script('cagov-ga-autotracker-script', CAWebUri.'/js/libs/AutoTracker.js', array(), CAWebVersion, true);

    // Localize the search script with the correct site url
    wp_localize_script('cagov-google-script', 'args', array('ca_google_analytic_id' => get_option('ca_google_analytic_id'),
        'ca_site_version' => $ver,
        'ca_frontpage_search_enabled' => get_option('ca_frontpage_search_enabled') && is_front_page(),
        'ca_google_search_id' => get_option('ca_google_search_id'),
        'caweb_multi_ga' => get_site_option('caweb_multi_ga'),
        'ca_google_trans_enabled' => 'none' !== get_option('ca_google_trans_enabled') ? true : false));

    wp_register_script('cagov-custom-script', CAWebUri.'/js/wplibs/custom.js', array(), CAWebVersion, true);

    // Enqueue Scripts
    wp_enqueue_script('cagov-navigation-script');
    wp_enqueue_script('cagov-google-script');
    wp_enqueue_script('cagov-ga-autotracker-script');
    wp_enqueue_script('cagov-modernizr-script');
    wp_enqueue_script('cagov-custom-script');

    // Version 5 specific scripts
    if (5 >= $ver && ("on" == get_option('ca_geo_locator_enabled') || get_option('ca_geo_locator_enabled'))) {
        wp_register_script('cagov-geolocator-script', CAWebUri.'/js/libs/geolocator.js', array('jquery'), CAWebVersion, true);
        wp_enqueue_script('cagov-geolocator-script');
    }

    // This removes Divi Google Font CSS
    wp_deregister_style('divi-fonts');
}

// CAWeb WP Head
add_action('wp_head', 'caweb_wp_head');
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

	printf('<link alt="Fav Icon" rel="icon" href="%1$s">', get_option('ca_fav_ico', caweb_default_favicon_url()));
    printf('<link rel="shortcut icon" href="%1$s">', get_option('ca_fav_ico', caweb_default_favicon_url()));

    if ("" !== get_option('ca_custom_css', '')) {
        printf('<style id="ca_custom_css">%1$s</style>', wp_unslash(get_option('ca_custom_css')));
    }
}
add_filter('get_site_icon_url', 'caweb_site_icon_url', 10, 3);
function caweb_site_icon_url($url, $size, $blog_id) {
    if ( ! is_admin()) {
        return '';
    }

    return $url;
}

add_action('get_header', 'caweb_et_project_get_header');
function caweb_et_project_get_header($name = null) {
    // Add template header if using Divi Custom Type 'Project'
    if ('project' == get_post_type(get_the_ID())) {
        locate_template(array('header.php'), true);
        get_template_part('partials/content', 'header');
    }
}

// CAWeb Footer
add_action('wp_footer', 'caweb_wp_footer', 11);
function caweb_wp_footer() {
    // This removes Divi Builder Google Font CSS
    wp_deregister_style('et-builder-googlefonts');
}

function caweb_late_wp_footer() {
    // Load Core JS at the very end along with any external/custom javascript/jquery
    $core_js = sprintf('<script type="text/javascript" src="%1$s/js/cagov.core.js?ver=%2$s"></script>', CAWebUri, CAWebVersion);

    print $core_js;

    // External JS
    $ext_js = array_values(array_filter(get_option('caweb_external_js', array())));

    foreach ($ext_js as $index => $name) {
        $location = sprintf('%1$s/js/external/%2$s/%3$s', CAWebUri, get_current_blog_id(), $name);
        printf('<script type="text/javascript" src="%1$s?ver=%2$s" id="caweb-external-custom-%3$d-scripts"></script>', $location, CAWebVersion, $index + 1);
    }

    if ("" !== get_option('ca_custom_js', '')) {
        printf('<script id="ca_custom_js">%1$s</script>', wp_unslash(get_option('ca_custom_js')));
    }
}
add_action('wp_footer', 'caweb_late_wp_footer', 115);

// Actions Ran During an Admin Page Request
// CAWeb Admin Enqueue Scripts and Styles
add_action('admin_enqueue_scripts', 'caweb_admin_enqueue_scripts', 15);
function caweb_admin_enqueue_scripts($hook) {
    $pages = array('toplevel_page_caweb_options',  'caweb-options_page_caweb_api', 'nav-menus.php');

    if (in_array($hook, $pages)) {
        // Enqueue Scripts
        wp_enqueue_script('jquery');
        wp_enqueue_media();
        wp_enqueue_editor();

        wp_enqueue_script('custom-header');

        wp_register_script('browse-caweb-library', CAWebUri.'/js/wplibs/browse-library.js', array('jquery'), CAWebVersion);

        wp_register_script('caweb-icon-script', CAWebUri.'/js/wplibs/icon.js', array('jquery'), CAWebVersion, true);

        wp_register_script('caweb-admin-scripts', CAWebUri.'/js/wplibs/caweb.admin.js', array('jquery', 'thickbox', 'caweb-icon-script', 'browse-caweb-library'), CAWebVersion, true);

        wp_localize_script('caweb-admin-scripts', 'args', array('defaultFavIcon' => caweb_default_favicon_url(), 'changeCheck' => $hook, 'caweb_icons' => caweb_get_icon_list(-1, '', true), 'caweb_colors' => caweb_template_colors(), 'tinymce_settings' => caweb_tiny_mce_settings()));

        wp_enqueue_script('caweb-admin-scripts');
        // Enqueue Styles
        wp_enqueue_style('caweb-admin-styles', CAWebUri.'/css/admin_custom.css', array(), CAWebVersion);
    } elseif (in_array($hook, array('post.php', 'post-new.php', 'widgets.php'))) {
        wp_enqueue_style('caweb-admin-styles', CAWebUri.'/css/admin_custom.css', array(), CAWebVersion);
    }

    wp_enqueue_style('caweb-font-styles', CAWebUri.'/css/cagov.font-only.css', array(), CAWebVersion);

    // Load editor styling
    wp_dequeue_style(get_template_directory_uri().'css/editor-style.css');
    add_editor_style(sprintf('%1$s/css/version%2$s/cagov.core.css', CAWebUri, caweb_get_page_version(get_the_ID())));
}

// CAWeb Admin Head
add_action('admin_head', 'caweb_admin_head');
function caweb_admin_head() {
    $icon = apply_filters('get_site_icon_url', sprintf('%1$s/images/system/caweb_logo.ico', CAWebUri), 512, get_current_blog_id());
    printf('<link alt="Fav Icon" rel="icon" href="%1$s">', $icon);

    // This will hide all WPMUDev Dashboard Feeds from Screen Options and keep their Meta Boxes open
    print '<style>label[for^="wpmudev_dashboard_item_df"]{display: none;}div[id^="wpmudev_dashboard_item_df"] .inside{display:block !important;}</style>';
}

// CAWeb Admin Bar Menu
add_action('admin_bar_menu', 'caweb_admin_bar_menu', 1000);
function caweb_admin_bar_menu($wp_admin_bar) {
    // Remove WP Admin Bar Nodes
    $wp_admin_bar->remove_node('themes');
    $wp_admin_bar->remove_node('menus');
    $wp_admin_bar->remove_node('customize-divi-theme');
    $wp_admin_bar->remove_node('customize-divi-module');

    if (current_user_can('manage_options')) {
        // Add CAWeb WP Admin Bar Nodes
        $wp_admin_bar->add_node(array(
            'id'     => 'caweb-options',
            'title'  => 'CAWeb Options',
            'href' =>  get_admin_url().'admin.php?page=caweb_options',
            'parent' => 'site-name',
        )
								);
        // Add (Menu) Navigation Node
        $wp_admin_bar->add_node(array(
            'id'     => 'caweb-navigation',
            'title'  => 'Navigation',
            'href' => get_admin_url().'nav-menus.php',
            'parent' => 'site-name',
        )
								);
    }

    if ( ! is_multisite() || current_user_can('manage_network_options')) {
        $wp_admin_bar->add_node(array(
            'id'     => 'caweb-api',
            'title'  => 'GitHub API Key',
            'href' => get_admin_url().'admin.php?page=caweb_api',
            'parent' => 'site-name',
        )
								);
    }
}

// If CAWeb is a child theme of Divi, include CAWeb Custom Modules and Functions
if (is_child_theme() && 'Divi' == wp_get_theme()->get('Template')) {
    // CAWeb Custom Modules
    add_action('et_pagebuilder_module_init', 'caweb_et_pagebuilder_module_init');
    function caweb_et_pagebuilder_module_init() {
        $divi_builder = CAWebAbsPath."/divi/builder";
        include("$divi_builder/functions.php");
        include("$divi_builder/layouts.php");

        if (class_exists('ET_Builder_Module')) {
            include("$divi_builder/class-caweb-builder-element.php");

            $modules = glob("$divi_builder/modules/*.php");
            foreach ($modules as $module_file) {
                require_once($module_file);
            }
        }
    }
} else {
    include(CAWebAbsPath."/divi/functions.php");
}
?>
