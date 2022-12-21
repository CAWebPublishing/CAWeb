<?php
/**
 * Loads CAWeb site branding.
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<!-- Branding -->
<div class="branding">
	<div class="header-organization-banner">
		<a href="/">
			<img alt="<?php print esc_attr( get_bloginfo( 'name' ) ); ?> Logo" src="<?php print esc_url( $caweb_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
		</a>
	</div>
</div>
