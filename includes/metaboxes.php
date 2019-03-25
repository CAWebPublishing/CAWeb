<?php

// Add CAWeb Meta Boxes
add_action('add_meta_boxes', 'caweb_add_meta_boxes');
function caweb_add_meta_boxes() {

	// Page Meta Box
    add_meta_box('et_ca_page_meta_box', '<span class="ca-gov-icon-pencil-edit"></span> CA Page Settings',
		'caweb_page_identifier_metabox_callback', array('page', 'post'), 'side', 'high');

    // Remove Divi Metaboxes
    remove_meta_box('et_settings_meta_box', array('post', 'page'), 'side');
}

add_action('admin_head-nav-menus.php', 'caweb_admin_head_nav_menus');
function caweb_admin_head_nav_menus() {
    // Remove Divi Metaboxes
    remove_meta_box('add-project_category', 'nav-menus', 'side');
    remove_meta_box('add-project_tag', 'nav-menus', 'side');
}

/**
 * Page Option Meta box display callback.
 *
 * @param WP_Post $post Current post object.
 */
function caweb_page_identifier_metabox_callback($post) {
    if ("" == get_post_meta($post->ID, 'ca_custom_initial_state', true)) {
        update_post_meta($post->ID, 'ca_custom_initial_state', true);
        update_post_meta($post->ID, 'ca_default_navigation_menu', get_option('ca_default_navigation_menu'));
    }

    wp_nonce_field(basename(__FILE__), 'ca_page_meta_item_identifier_nonce'); ?>

<form action="#" method="post">

<input type="checkbox" id="ca_custom_post_title_display" name="ca_custom_post_title_display"
  <?php
  // if the post doesnt't have a ca_custom_post_title_display meta field or a page/post ID assumed new page
  // if new page, then ca_default_post_title_display option determines initial title setting
  if ( ! isset($post->ID) || ! in_array('ca_custom_post_title_display', get_post_custom_keys($post->ID))) {
      print( ! get_option('ca_default_post_title_display', false) ? 'checked="checked"' : '');
  // if the post does have a ca_custom_post_title_display meta field let the user selected option override
  } else {
      print(get_post_meta($post->ID, 'ca_custom_post_title_display', true) == true ? 'checked="checked"' : '');
  } ?>>
Display Title on Page

	<?php if (get_option('ca_menu_selector_enabled') == true): ?>
<p>You may display a different Navigation Menu on this page.</p>

<select id="ca_default_navigation_menu" name="ca_default_navigation_menu">
	<option value="megadropdown"
			<?php print (get_post_meta($post->ID, 'ca_default_navigation_menu', true) == 'megadropdown' ? 'selected="selected"' : '') ?>>Mega Drop</option>
			  <option value="dropdown"
			<?php print (get_post_meta($post->ID, 'ca_default_navigation_menu', true) == 'dropdown' ? 'selected="selected"' : '') ?>>Drop Down</option>
			  <option value="singlelevel"
			<?php print (get_post_meta($post->ID, 'ca_default_navigation_menu', true) == 'singlelevel' ? 'selected="selected"' : '') ?>>Single Level</option>


</select>
<?php endif; ?>
</form>


<?php
}
// Save post meta on the 'save_post' hook.
add_action('save_post', 'caweb_save_post', 10, 2);
function caweb_save_post($post_id, $post) {
    // Verify the nonce before proceeding.
    if ( ! isset($_POST["ca_page_meta_item_identifier_nonce"]) ||
	! wp_verify_nonce($_POST["ca_page_meta_item_identifier_nonce"], basename(__FILE__))) {
        return $post_id;
    }

    //skip auto save
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    $option_title_display = (isset($_POST['ca_custom_post_title_display']) ? $_POST['ca_custom_post_title_display'] : '');
    update_post_meta($post->ID, 'ca_custom_post_title_display', $option_title_display);

    if (get_option('ca_menu_selector_enabled') == true) {
        update_post_meta($post->ID, 'ca_default_navigation_menu', $_POST['ca_default_navigation_menu']);
    }
}
?>
