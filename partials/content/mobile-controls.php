<?php
/**
 * Navigation Mobile Controls.
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$caweb_deprecating = '5.5' === $caweb_version;
?>
<!-- mobile navigation controls -->
<div class="mobile-controls">
	<span class="mobile-control-group mobile-header-icons">
		<!-- Add more mobile controls here. These will be on the right side of the mobile page header section -->
	</span>
	<div class="mobile-control-group main-nav-icons">
		<button class="mobile-control toggle-search">
			<span class="ca-gov-icon-search hidden-print" aria-hidden="true"></span><span class="sr-only">Search</span>
		</button>
		<?php if ( $caweb_deprecating ) : ?>
		<button id="nav-icon3" class="mobile-control toggle-menu" aria-expanded="false" aria-controls="navigation" data-toggle="collapse" data-target="#navigation" data-toggle="collapse" data-target="#navigation">
		<?php else : ?>	
		<button id="nav-icon3" class="mobile-control toggle-menu" aria-expanded="false" aria-controls="navigation" data-bs-toggle="collapse" data-bs-target="#navigation" data-bs-toggle="collapse" data-bs-target="#navigation">
		<?php endif; ?>	
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span class="sr-only">Menu</span>
		</button>

	</div>
</div>
