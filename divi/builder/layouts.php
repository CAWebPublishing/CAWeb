<?php

function ca_save_post_list_meta($post_id, $post) {
    $cats = wp_get_post_categories($post_id);

    $content = $post->post_content;
    // Search for Post Detail Module if it exists, add the appropriate Category
    $layout = caweb_get_shortcode_from_content($content, 'et_pb_ca_post_handler');

    $layout = (isset($layout->post_type_layout) ? $layout->post_type_layout : '');

    switch ($layout) {

		case "course":
			array_push($cats, get_cat_ID('Courses'));
			array_push($cats, get_cat_ID('Content Types'));

			break;

		case "event":
			array_push($cats, get_cat_ID('Events'));
			array_push($cats, get_cat_ID('Content Types'));

			break;

		case "exam":
			array_push($cats, get_cat_ID('Exams'));
			array_push($cats, get_cat_ID('Content Types'));

			break;

		case "faqs":
			array_push($cats, get_cat_ID('FAQs'));
			array_push($cats, get_cat_ID('Content Types'));

			break;

		case "jobs":
			array_push($cats, get_cat_ID('Jobs'));
			array_push($cats, get_cat_ID('Content Types'));

			break;

		case "news":
			array_push($cats, get_cat_ID('News'));
			array_push($cats, get_cat_ID('Content Types'));

			break;

		case "profile":
			array_push($cats, get_cat_ID('Profiles'));
			array_push($cats, get_cat_ID('Content Types'));

			break;
	}

    wp_set_object_terms($post_id, $cats, 'category');

    // Search for Post List, Post Slider, PostNavigation, Blog Module if they exists, add the 'nginx_cache_purge' custom meta field
    $cache_modules = array('et_pb_ca_post_list', 'et_pb_post_slider', 'et_pb_blog', 'et_pb_post_nav');
    $module = caweb_get_shortcode_from_content($content, $cache_modules, true);

    if ( ! empty($module)) {
        update_post_meta($post_id, 'nginx_cache_purge', 'yes');
    } else {
        delete_post_meta($post_id, 'nginx_cache_purge');
    }
}

add_action('save_post', 'ca_save_post_list_meta', 10, 2);

function caweb_predefined_layouts() {

 	// delete default layouts
    et_pb_delete_predefined_layouts();

    // delete all default layouts w/ new built_for meta
    et_pb_delete_predefined_layouts('post');
    et_pb_delete_predefined_layouts('page');

    caweb_get_layouts();
}

//add_action('admin_init', 'caweb_predefined_layouts', 15);
//add_filter('et_pb_get_predefined_layouts', 'caweb_get_layouts' );

/*
Collect CA Predefined Layouts

Sample structure for layouts
$ca_layouts[] = array(
	'name' => 'Layout Name',
	'content' => <<<EOT
	Layout Content
	EOT
);
 */

function caweb_get_layouts() {
    $ca_layouts = array();

    $meta = array(
        '_et_pb_predefined_layout'   => 'on',
        '_et_pb_built_for_post_type' => 'post',
    );

    if (isset($ca_layouts) && is_array($ca_layouts)) {
        foreach ($ca_layouts as $ca_layout) {
            et_pb_create_layout($ca_layout ['name'], $ca_layout ['content'], $meta);
        }
    }
}

?>
