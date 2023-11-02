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
$caweb_template_version = caweb_template_version();

// social media.
$caweb_social_media      = caweb_get_social_media_links();
$caweb_social_links      = '';
$caweb_social_exclusions = '6.0' === $caweb_template_version ?
	array(
		'ca_social_snapchat',
		'ca_social_pinterest',
		'ca_social_rss',
		'ca_social_google_plus',
		'ca_social_flickr',
	) : array( 'ca_social_github' );

?>
<!-- Footer -->
<footer id="footer" class="global-footer hidden-print">

	<?php

	if ( has_nav_menu( 'footer-menu' ) ) {
		wp_nav_menu(
			array(
				'theme_location'          => 'footer-menu',
				'caweb_nav_type'          => 'footer',
				'caweb_template_version'  => $caweb_template_version,
				'caweb_social_exclusions' => $caweb_social_exclusions,
			)
		);
	} else {
		// @todo remove Back to Top link once 5.5 is completely removed.
		?>
			<div class="container">
				<ul class="footer-links me-auto">
					<li class="d-none">
						<a href="#skip-to-content">Back to Top</a>
					</li>
					<li><a>There Is No Navigation Menu Set</a></li>
				</ul>
				<?php get_template_part( 'parts/socialshare', null, $caweb_social_exclusions ); ?>
			</div>
		<?php
	}
	?>
	<!-- Copyright Statement -->
	<div class="copyright">
		<div class="container">
			<div class="d-flex">
				<p>Copyright <span aria-hidden="true">&copy;</span> <script>document.write(new Date().getFullYear())</script> State of California</p>
				<?php if ( $caweb_plugin_active ) : ?>
					<span class="ms-auto">Powered by: CAWeb Publishing Service</span>
				<?php endif; ?>
				</div>
		</div>
	</div>

	<?php get_template_part( "parts/$caweb_template_version/back-to-top" ); ?>
</footer>
