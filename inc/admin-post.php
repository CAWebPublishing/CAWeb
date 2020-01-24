<?php
/**
 * CAWeb Admin Post
 *
 * @see https://developer.wordpress.org/reference/hooks/admin_post_action/
 * @package CAWeb
 */

add_action( 'admin_post_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );
add_action( 'admin_post_no_priv_caweb_attachment_post_meta', 'caweb_retrieve_attachment_post_meta' );
add_action( 'admin_post_caweb_clear_alert_session', 'caweb_clear_alert_session' );
add_action( 'admin_post_nopriv_caweb_clear_alert_session', 'caweb_clear_alert_session' );

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

/**
 * Clear alert session for Alert Banner
 *
 * @return void
 */
function caweb_clear_alert_session() {
	$id = isset( $_GET['alert-id'] ) ? sanitize_text_field( wp_unslash( $_GET['alert-id'] ) ) : -1;

	if ( isset( $_SESSION[ "display_alert_$id" ] ) ) {
		$_SESSION[ "display_alert_$id" ] = false;
	}

	die();
}

