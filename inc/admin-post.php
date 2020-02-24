<?php
/**
 * CAWeb Admin Post
 *
 * @see https://developer.wordpress.org/reference/hooks/admin_post_action/
 * @package CAWeb
 */

add_action( 'admin_post_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );
add_action( 'admin_post_no_priv_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );

/**
 * Retrieve attachment post meta alt text
 *
 * @return void
 */
function caweb_retrieve_attachment_post_meta() {
	if ( ! isset( $_POST['imgs'] ) || empty( $_POST['imgs'] ) || ! is_array( $_POST['imgs'] ) ) {
		exit();
	}

	$alts = caweb_get_attachment_post_meta( $_POST['imgs'], '_wp_attachment_image_alt' );

	print json_encode( $alts );
	exit();
}

