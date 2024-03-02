<?php
/**
 * CAWeb Metaboxes
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'init', 'caweb_register_meta' );
add_action( 'add_meta_boxes', 'caweb_add_meta_boxes' );
add_action( 'admin_head-nav-menus.php', 'caweb_admin_head_nav_menus' );
add_action( 'save_post', 'caweb_save_post', 10, 2 );

/**
 * Register Meta Data
 * Editing a post meta via REST API is allowed by default unless its key is protected (starts with `_`)
 * Protected meta keys are those that begin with an underscore. 
 * 
 * Protected Keys:
 * - _caweb_menu_icon
 * - _caweb_menu_unit_size
 * - _caweb_menu_image
 * - _caweb_menu_image_side
 * - _caweb_menu_image_size
 * - _caweb_menu_column_count
 * - _caweb_menu_media_image
 * - _caweb_nav_media_image_alt_text
 * - _caweb_menu_media_image_alignment
 * - _caweb_menu_flexmega_border
 * - _caweb_menu_flexmega_row
 * 
 * @return void
 */
function caweb_register_meta() {
	$nav_meta = array(
		'_caweb_menu_icon' => 'Navigation Icon',
		'_caweb_menu_unit_size' => 'Navigation Sub Link Unit Size',
		'_caweb_menu_image' => 'Navigation Mega Menu Background Image',
		'_caweb_menu_image_side' => 'Navigation Mega Menu Background Image Alignment',
		'_caweb_menu_image_size' => 'Navigation Mega Menu Background Image Size',
		'_caweb_menu_column_count' => 'Navigation Mega Menu Column Count',
		'_caweb_menu_media_image' => 'Navigation Mega Menu Sub Link Image',
		'_caweb_nav_media_image_alt_text' => 'Navigation Mega Menu Sub Link Image Alt Text',
		'_caweb_menu_media_image_alignment' => 'Navigation Mega Menu Sub Link Image Image Alignment',
		'_caweb_menu_flexmega_border' => 'Navigation Flex Mega Menu Border',
		'_caweb_menu_flexmega_row' => 'Navigation Flex Mega Menu New Row'
	);

	// Register Navigation Meta.
	foreach ( $nav_meta as $key => $label ) {
		register_meta( 'post', $key, array(
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'description' => $label
		) );
	}
}

/**
 * Add CAWeb Metaboxes
 *
 * @return void
 */
function caweb_add_meta_boxes() {

	/* Page Meta Box */
	add_meta_box(
		'et_ca_page_meta_box',
		'<span class="ca-gov-icon-pencil-edit"></span> CA Page Settings',
		'caweb_page_identifier_metabox_callback',
		array( 'page', 'post' ),
		'side',
		'high'
	);

	/* Remove Divi Metaboxes */
	remove_meta_box( 'et_settings_meta_box', array( 'post', 'page' ), 'side' );
}

/**
 * Remove Certain Divi Metaboxes from the Navigation Menu
 *
 * @return void
 */
function caweb_admin_head_nav_menus() {
	/* Remove Divi Metaboxes */
	remove_meta_box( 'add-project_category', 'nav-menus', 'side' );
	remove_meta_box( 'add-project_tag', 'nav-menus', 'side' );
}

/**
 * Page Option Meta box display callback.
 *
 * @param WP_Post $post Current post object.
 */
function caweb_page_identifier_metabox_callback( $post ) {
	if ( '' === get_post_meta( $post->ID, 'ca_custom_initial_state', true ) ) {
		update_post_meta( $post->ID, 'ca_custom_initial_state', true );
		update_post_meta( $post->ID, 'ca_default_navigation_menu', get_option( 'ca_default_navigation_menu', 'singlelevel' ) );
	}

	/*
	If the post doesnt't have a ca_custom_post_title_display meta field or a page/post ID assumed new page
	if new page, then ca_default_post_title_display option determines initial title setting
	*/
	if ( ! isset( $post->ID ) || ! in_array( 'ca_custom_post_title_display', get_post_custom_keys( $post->ID ), true ) ) {
		$custom_title = get_option( 'ca_default_post_title_display', false ) ? ' checked' : '';
		/* if the post does have a ca_custom_post_title_display meta field let the user selected option override */
	} else {
		$custom_title = get_post_meta( $post->ID, 'ca_custom_post_title_display', true ) ? ' checked' : '';
	}

	wp_nonce_field( basename( __FILE__ ), 'caweb_metabox_nonce' );

	?>
	<label for="ca_custom_post_title_display">
		<input type="checkbox" id="ca_custom_post_title_display" name="ca_custom_post_title_display"<?php print esc_attr( $custom_title ); ?>>
		Display Title on Page
	</label>
	<?php
}

/**
 * Save post meta on the 'save_post' hook.
 * Fires once a post has been saved.
 *
 * @link https://developer.wordpress.org/reference/hooks/save_post/
 *
 * @param  int     $post_id Post ID.
 * @param  WP_POST $post Post object.
 *
 * @return int
 */
function caweb_save_post( $post_id, $post ) {
	/* Verify the nonce before proceeding. */
	if ( ! isset( $_POST['caweb_metabox_nonce'] ) ||
	! wp_verify_nonce( sanitize_key( $_POST['caweb_metabox_nonce'] ), basename( __FILE__ ) ) ) {
		return $post_id;
	}

	/* skip auto save */
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return $post_id;
	}

	$option_title_display = isset( $_POST['ca_custom_post_title_display'] ) ? sanitize_text_field( wp_unslash( $_POST['ca_custom_post_title_display'] ) ) : '';
	update_post_meta( $post->ID, 'ca_custom_post_title_display', $option_title_display );
}

?>
