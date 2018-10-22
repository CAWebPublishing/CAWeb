<?php

// TinyMCE Editor
// Attach callback to 'tiny_mce_before_init'
add_filter('tiny_mce_before_init', 'caweb_tiny_mce_before_init', 15);
function caweb_tiny_mce_before_init($init_array) {
    // Define the style_formats array
    // Each array child is a format with it's own settings
    $style_formats = array(
        array(
            'name' => 'Featured Narrative',
            'title' => 'Featured Narrative',
            'block' => 'aside',
            'classes' => 'featured-narrative',
            'wrapper' => true,
        ),
        array(
            'name' => 'Overstated List',
            'title' => 'Overstated List',
            'selector' => 'ul',
            'inline' => 'ul',
            'classes' => 'list-overstated',
            'wrapper' => true,
            'styles' => array(
                'list-style-type' => 'none'),
        ),
        array(
            'name' => 'Standout List',
            'title' => 'Standout List',
            'selector' => 'ul',
            'inline' => 'ul',
            'classes' => 'list-standout',
            'wrapper' => true,
            'styles' => array(
                'list-style-type' => 'none'),
        ),
        array(
            'name' => 'Understated List',
            'title' => 'Understated List',
            'selector' => 'ul',
            'inline' => 'ul',
            'classes' => 'list-understated',
            'wrapper' => true,
            'styles' => array(
                'list-style-type' => 'none'
            ),
        ),
    );

    // Insert the array, JSON ENCODED, into 'style_formats'
    $init_array['style_formats'] = json_encode($style_formats);
		
		// TinyMCE default is 11pt but it doesnt appear in the font size box
    $init_array['fontsize_formats'] = "8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt";

    // TinyMCE Toolbar Start off unhidden
    $init_array['wordpress_adv_hidden'] = false;

    return $init_array;
}

// Add hidden MCE Buttons
// The primary toolbar (always visible)
add_filter('mce_buttons', 'caweb_mce_buttons', 15);
function caweb_mce_buttons($buttons) {
    /**
     * Add in a core button that's disabled by default
     **/
    $tmp = array('formatselect', 'bold', 'italic', 'underline');
    array_splice($buttons, 0, 3, $tmp);

    return $buttons;
}

add_filter('mce_buttons_2', 'caweb_mce_buttons_2', 15);
function caweb_mce_buttons_2($buttons) {

	/**
	 * Add in a core button that's disabled by default
	 **/

    $tmp = array('styleselect', 'strikethrough', 'hr', 'fontselect', 'fontsizeselect',
        'forecolor', 'backcolor', 'pastetext', 'copy', 'subscript', 'superscript');
    array_splice($buttons, 0, 5, $tmp);

    return $buttons;
}

// CAWeb Page Body Class
add_filter('body_class', 'caweb_body_class', 20, 2);
function caweb_body_class($wp_classes, $extra_classes) {
    global $post;

    // List of the classes that need to be removed
    $blacklist= array('et_secondary_nav_dropdown_animation_fade',
        'et_primary_nav_dropdown_animation_fade', 'et_fixed_nav', 'et_show_nav', 'et_right_sidebar');

    // List of extra classes that need to be added to the body
    if (isset($post->ID)) {
        $divi = et_pb_is_pagebuilder_used($post->ID);
        $sidebar_enabled = ! is_page();
        $special_templates = is_tag() || is_archive() || is_category() || is_author();

        $whitelist = array(($divi && ! $special_templates ? 'divi_builder' : 'non_divi_builder'),
            ("on" == get_post_meta($post->ID, 'ca_custom_post_title_display', true) ? 'title_displayed' : 'title_not_displayed'),
            sprintf('v%1$s', caweb_get_page_version($post->ID)),
            (is_active_sidebar('sidebar-1') && $sidebar_enabled ? 'sidebar_displayed' : 'sidebar_not_displayed'));
    }
    $whitelist[] = (get_option('ca_sticky_navigation') ? 'sticky_nav' : '');

    // Remove any classes in the blacklist from the wp_classes
    $wp_classes = array_diff($wp_classes, $blacklist);

    // Return filtered wp class
    return  array_merge($wp_classes, (array) $whitelist);
}

// CAWeb Post Body Class
add_filter('post_class', 'caweb_post_class', 15);
function caweb_post_class($classes) {
    global $post;

    if (has_post_thumbnail($post->ID) && "" == get_the_post_thumbnail_url($post->ID)) {
        unset($classes[ array_search("has-post-thumbnail", $classes) ]);
    }

    return $classes;
}

// CAWeb Theme Page Templates
add_filter('theme_page_templates', 'caweb_theme_page_templates', 15);
function caweb_theme_page_templates($templates) {
    // Remove Divi Blank Page Template
    unset($templates['page-template-blank.php']);

    if (5 <= get_option('ca_site_version', 5)) {
        unset($templates['page-templates/page-template-v4.php']);
    }

    return $templates;
}

// CAWeb Script Loader Tags
add_filter('script_loader_tag', 'caweb_script_loader_tag', 10, 3);
function caweb_script_loader_tag($tag, $handle, $src) {
    // Defer some scripts
    $js_scripts = array('cagov-modernizr-script', 'cagov-modernizr-extra-script', 'cagov-navigation-script', 'cagov-ga-autotracker-script', 'cagov-google-script', 'thickbox');
    // deferring jQuery breaks other scripts preg_match('/(jquery)[^\/]*\.js/', $tag)
    if (in_array($handle, $js_scripts)) {
        return str_replace('src', 'defer src', $tag);
    }

    return $tag;
}

?>