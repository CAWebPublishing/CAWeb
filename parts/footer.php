<?php
/**
 * CAWeb Theme Footer
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @todo Move script
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Detect plugin. For use on Front End only.
 *
 *  @link https://developer.wordpress.org/reference/functions/is_plugin_active/
 */
require_once ABSPATH . 'wp-admin/includes/plugin.php';

$caweb_plugin_active    = is_plugin_active( 'caweb-admin/caweb-admin.php' ) || is_plugin_active_for_network( 'caweb-admin/caweb-admin.php' );

// social media.
$caweb_social_media      = caweb_get_social_media_links();
?>
<!-- Footer -->
<footer class="global-footer">
	<div class="container">
		<div class="d-flex">
	<?php

	if ( has_nav_menu( 'footer-menu' ) ) {
		wp_nav_menu(
			array(
				'theme'                     => 'CAWeb',
				'theme_location'          => 'footer-menu',
				'caweb_nav_type'          => 'footer'
			)
		);
	} else {
		?>
					<ul class="footer-links ps-0 me-auto">
						<li><a>There Is No Navigation Menu Set</a></li>
					</ul>
					<?php get_template_part( "parts/socialshare" ); ?>
				
		<?php
	}
	?>
		</div>
	</div>
	<!-- Copyright Statement -->
	<div class="copyright">
		<div class="container">
			<div class="d-flex">
				<p class="me-auto">Copyright <span aria-hidden="true">&copy;</span> <script>document.write(new Date().getFullYear())</script> State of California</p>
				<?php if ( $caweb_plugin_active ) : ?>
					<span>Powered by: CAWeb Publishing Service</span>
				<?php endif; ?>
			</div>
		</div>
	</div>

	<?php get_template_part( "parts/back-to-top" ); ?>
</footer>
