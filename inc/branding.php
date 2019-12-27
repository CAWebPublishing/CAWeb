<?php
/**
 * CAWeb Publishing Service Branding
 *
 * @package CAWeb
 */

add_action( 'admin_head', 'caweb_branding_admin_head' );

/**
 * CAWeb Publishing Branding Admin Head
 *
 * @return void
 */
function caweb_branding_admin_head() {
	?>
		<link title="Fav Icon" rel="icon" href="<?php print esc_url( caweb_default_favicon_url() ); ?>">
	<?php
}
