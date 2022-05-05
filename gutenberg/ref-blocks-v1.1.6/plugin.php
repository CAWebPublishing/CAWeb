<?php

/**
 * Load Gutenberg blocks scripts
 */

/**
 * Add custom Gutenberg Blocks from the CA Design System
 *
 * @package CADesignSystem
 */

cagov_design_system_load();

function cagov_design_system_load()
{
    // Load all block dependencies and files.
    cagov_design_system_load_block_dependencies();

    // Get all scripts
    add_action('wp_enqueue_scripts', 'cagov_design_system_build_scripts_frontend', 100);
    add_action('enqueue_block_editor_assets', 'cagov_design_system_build_scripts_editor', 100);
}

/**
 * Load all patterns and blocks.
 */
function cagov_design_system_load_block_dependencies()
{
    // CA Design System BLOCKS
    // Requires webcomponents from external design system
    include_once CAGOV_DS_GUTENBERG_BLOCKS__DIR_PATH . '/cagov-design-system/blocks/accordion/plugin.php';
    include_once CAGOV_DS_GUTENBERG_BLOCKS__DIR_PATH . '/cagov-design-system/blocks/card/plugin.php'; // Planning to rename to: 'call-to-action-button' - Renamed in GB interface labels but not code
    include_once CAGOV_DS_GUTENBERG_BLOCKS__DIR_PATH . '/cagov-design-system/blocks/button-grid/plugin.php'; // Planning to rename to: 'call-to-action-grid' - Renamed in GB interface labels but not code
    include_once CAGOV_DS_GUTENBERG_BLOCKS__DIR_PATH . '/cagov-design-system/blocks/content-navigation/plugin.php';

    include_once CAGOV_DS_GUTENBERG_BLOCKS__DIR_PATH . '/cagov-design-system/blocks/feature-card/plugin.php';
    include_once CAGOV_DS_GUTENBERG_BLOCKS__DIR_PATH . '/cagov-design-system/blocks/page-alert/plugin.php';

    include_once CAGOV_DS_GUTENBERG_BLOCKS__DIR_PATH . '/cagov-design-system/blocks/promotional-card/plugin.php';
    include_once CAGOV_DS_GUTENBERG_BLOCKS__DIR_PATH . '/cagov-design-system/blocks/regulatory-outline/plugin.php';
    include_once CAGOV_DS_GUTENBERG_BLOCKS__DIR_PATH . '/cagov-design-system/blocks/step-list/plugin.php';
    include_once CAGOV_DS_GUTENBERG_BLOCKS__DIR_PATH . '/cagov-design-system/blocks/scrollable-card/plugin.php';
}
/**
 * Create special categories for design system blocks
 *
 * @return void
 */
function cagov_design_system_init()
{
    cagov_design_system_load_block_pattern_categories();
    cagov_design_system_load_block_category();
    add_action( 'admin_enqueue_scripts', 'cagov_design_system_add_admin_scripts', 10, 1 );

}

add_action('init', 'cagov_design_system_init');

/**
 * Register Custom Block Pattern Category.
 */
function cagov_design_system_load_block_pattern_categories()
{
    if (function_exists('register_block_pattern_category')) {
        register_block_pattern_category(
            'ca-design-system',
            array('label' => esc_html__('CA Design System', 'ca-design-system'))
        );
    }
}

/**
 * Register Custom Block Category.
 */
function cagov_design_system_load_block_category()
{

    global $wp_version;

    $is_under_5_8 = version_compare($wp_version, "5.8", '<');

    if ($is_under_5_8) {
        add_filter('block_categories', function ($categories, $post) {
            return array_merge(
                array(
                    array(
                        'slug'  => 'ca-design-system',
                        'title' => 'CA Design System',
                    ),
                ),
                array(
                    array(
                        'slug'  => 'ca-design-system-utilities',
                        'title' => 'CA Design System: Utilities',
                    ),
                ),
                $categories,
            );
        }, 10, 2);
    } else {
        add_filter('block_categories_all', function ($categories, $post) {
            return array_merge(
                array(
                    array(
                        'slug'  => 'ca-design-system',
                        'title' => 'CA Design System',
                    ),
                ),
                array(
                    array(
                        'slug'  => 'ca-design-system-utilities',
                        'title' => 'CA Design System: Utilities',
                    ),
                ),
                $categories,
            );
        }, 10, 2);
    }

    // add_filter('allowed_block_types', 'cagov_design_system_allowed_block_types');
}

function cagov_design_system_allowed_block_types($allowed_blocks)
{

    // remove_theme_support('core-block-patterns');
    // return array(
    //     'core/image',
    //     'core/paragraph',
    //     'core/heading',
    //     'core/list',
    //     // 'core/custom-html',
    //     'core/classic',      
    //     'ca-design-system/accordion',
    //     'ca-design-system/card',
    //     'ca-design-system/button-grid',
    //     'ca-design-system/content-navigation',
    //     'ca-design-system/feature-card',
    //     'ca-design-system/page-alert',
    //     'ca-design-system/promotional-card',
    //     'ca-design-system/regulatory-outline',
    //     'ca-design-system/scrollable-card',
    //     'ca-design-system/step-list',
    //     'ca-design-system/table',
    //     // @TODO move to patterns
    //     'ca-design-system/post-list',
    //     'ca-design-system/event-detail',
    //     'ca-design-system/event-materials',
    //     'ca-design-system/event-list',
    //     'ca-design-system/event-pattern'
    // );
}

/**
 * Add required WP block scripts to front end pages.
 *
 * NOTE: This is NOT optimized for performance or file loading.
 */
function cagov_design_system_build_scripts_frontend()
{
    if (!is_admin()) {
        // PERFORMANCE OPTION (re render blocking): inlining CSS 
        // @NOTE We hope to avoid this & only require editor CSS for this plugin.
        $theme = wp_get_theme();
        // If we are using the CAWeb theme (hosted on Flywheel)
        // These styles are moved into the performant theme for new version.
        if ('CAWeb' == $theme->name) {
            $critical_css = file_get_contents(CAGOV_DS_GUTENBERG_BLOCKS__ADMIN_URL . 'styles/page.css');
            echo '<style>' . $critical_css . '</style>';

            // Let's try versioning these changes going forward so that we start to build more communication with updates & releases of design system code and package changes. We will need some smoother way to bring in code without requiring node_modules, can be as simple as popping a dist file in the plugin & testing it. 

            wp_enqueue_style('ca-design-system-caweb-override-css-style',  CAGOV_DS_GUTENBERG_BLOCKS__ADMIN_URL . 'cagov-design-system/blocks/styles/manual/manual-caweb.v1.0.2.css', false);

            wp_enqueue_style('ca-design-system-design-system-color-scheme-css-style',  CAGOV_DS_GUTENBERG_BLOCKS__ADMIN_URL . 'cagov-design-system/blocks/styles/manual/colorscheme-cannabis.v1.0.8.min.css', false);

            // Locally override css.
            wp_enqueue_style('ca-design-system-design-system-components-css-style',  CAGOV_DS_GUTENBERG_BLOCKS__ADMIN_URL . 'cagov-design-system/blocks/styles/components/index.css', array(), "1.1.2.1");

            // @TODO do we want to do anything to do with these? Maybe put them in an agency specific location?
            // import './../node_modules/@cagov/ds-feedback/dist/index.js';
            // import './../node_modules/@cagov/ds-minus/index.js';
            // import './../node_modules/@cagov/ds-pagination/dist/index.js';
            // import './../node_modules/@cagov/ds-pdf-icon/src/index.js';
            // import './../node_modules/@cagov/ds-plus/index.js';
        }

        // This needs to load after page is rendered.
        wp_register_script(
            'ca-design-system-blocks-web-components',
            CAGOV_DS_GUTENBERG_BLOCKS__ADMIN_URL . 'cagov-design-system/build/index.js',
            array(),
            "1.1.2.3",
            true
        );

        wp_enqueue_script('ca-design-system-blocks-web-components');
    }
}

function cagov_design_system_add_admin_scripts( $hook ) {

    global $post;

    if ( $hook == 'post-new.php' || $hook == 'post.php' ) {
        if ( 'post' === $post->post_type || 'page' === $post->post_type ) {     
            wp_register_script(
                'ca-design-system-blocks-web-components-editor',
                CAGOV_DS_GUTENBERG_BLOCKS__ADMIN_URL . 'cagov-design-system/build/index.js',
                array(),
                "1.1.2.4",
                true
            );
       
    
            wp_enqueue_script('ca-design-system-blocks-web-components-editor');
            
        }
    }
}

/**
 * Add editor CSS
 *
 * @param [type] $tag
 * @param [type] $handle
 * @param [type] $src
 * @return void
 */
function cagov_design_system_build_scripts_editor()
{
    // Editor-only styles
    wp_enqueue_style('cagov-gutenberg-blocks-editor',  CAGOV_DS_GUTENBERG_BLOCKS__ADMIN_URL . 'styles/editor.css', false);
}
