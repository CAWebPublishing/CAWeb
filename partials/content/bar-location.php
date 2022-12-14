<?php
/**
 * CAWeb Location Bar
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( 'off' === get_option( 'ca_geo_locator_enabled', false ) || ! get_option( 'ca_geo_locator_enabled', false ) ) {
	return;
}
?>
<!-- Location Bar -->
<div id="locationSettings" class="location-settings section section-standout collapse collapsed"></div>
