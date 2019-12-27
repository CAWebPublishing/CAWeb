<?php
/**
 * CAWeb Hosting (MCS)
 * These are required when hosted at CDT
 * 
 * @todo Remove entire file after migration
 * @package CAWeb
 */

add_action( 'caweb_post_list_module_clear_cache', 'caweb_post_list_module_clear_cache', 10, 1 );


/**
 * Clear NGinx Server Cache
 *
 * @return void
 */
function caweb_post_list_module_clear_cache() {
	if ( function_exists( 'clear_nginx_post_publish_cache' ) ) {
		clear_nginx_post_publish_cache();
	}
}
