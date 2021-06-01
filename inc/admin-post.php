<?php
/**
 * CAWeb Admin Post
 *
 * @see https://developer.wordpress.org/reference/hooks/admin_post_action/
 * @package CAWeb
 */

add_action( 'admin_post_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );
add_action( 'admin_post_nopriv_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );

/**
 * Retrieve attachment post meta alt text
 *
 * @category {
 * add_action( 'admin_post_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );
 * add_action( 'admin_post_nopriv_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );
 * }
 * @return void
 */
function caweb_retrieve_attachment_post_meta() {
	$crapm    = wp_create_nonce( 'caweb_retrieve_attachment_post_meta' );
	$verified = isset( $crapm ) && wp_verify_nonce( sanitize_key( $crapm ), 'caweb_retrieve_attachment_post_meta' );

	if ( ! isset( $_POST['imgs'] ) || empty( $_POST['imgs'] ) || ! is_array( $_POST['imgs'] ) ) {
		exit();
	}

	$imgs = array_map( 'esc_url_raw', wp_unslash( $_POST['imgs'] ) );

	$alts = caweb_get_attachment_post_meta( $imgs, '_wp_attachment_image_alt' );

	print wp_json_encode( $alts );
	exit();
}

