


/**
 * Enable unfiltered_html capability for Administrators.
 *
 * @param  array  $caps    The user's capabilities.
 * @param  string $cap     Capability name.
 * @param  int    $user_id The user ID.
 * @return array  $caps    The user's capabilities, with 'unfiltered_html' potentially added.
 */
function caweb_add_unfiltered_html_capability( $caps, $cap, $user_id ) {
	if ( 'unfiltered_html' === $cap && user_can( $user_id, 'administrator' ) ) {
		$caps = array( 'unfiltered_html' );
	}

	return $caps;
}
add_filter( 'map_meta_cap', 'caweb_add_unfiltered_html_capability', 1, 3 );



/**
 * Clear NGinx Server Cache
 * To be removed soon
 *
 * @return void
 */
function caweb_post_list_module_clear_cache() {
	if ( function_exists( 'clear_nginx_post_publish_cache' ) ) {
		clear_nginx_post_publish_cache();
	}
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



add_filter( 'get_site_icon_url', 'caweb_site_icon_url', 10, 3 );
/**
 * CAWeb filter for site icon url
 * Filters the site icon URL.
 *
 * @link https://developer.wordpress.org/reference/hooks/get_site_icon_url/
 *
 * @param  string $url Site icon URL.
 * @param  int    $size Size of the site icon.
 * @param  int    $blog_id ID of the blog to get the site icon for.
 *
 * @return string
 */
function caweb_site_icon_url( $url, $size, $blog_id ) {
	if ( ! is_admin() ) {
		return '';
	}

	return $url;
}

/*
If CAWeb is a child theme of Divi, include CAWeb Custom Modules and Functions
*/
if ( is_child_theme() && 'Divi' === wp_get_theme()->get( 'Template' ) ) {
	if (! empty(CAWEB_EXTENSION) && file_exists(sprintf('%1$s/divi/extension/%2$s.php', CAWEB_ABSPATH, CAWEB_EXTENSION))) {
		include  sprintf('%1$s/divi/extension/%2$s.php', CAWEB_ABSPATH,  CAWEB_EXTENSION);
    	include  sprintf('%1$s/divi/layouts.php', CAWEB_ABSPATH,  CAWEB_EXTENSION);
    }
} else {
	include CAWEB_ABSPATH . '/divi/functions.php';
}