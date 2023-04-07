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

$caweb_sidebar_allowed      = is_single() || is_date() || is_archive() || is_author() || is_category() || is_tag();
$caweb_is_page_builder_used = caweb_is_divi_used();

/**
 * Detect plugin. For use on Front End only.
 *
 *  @link https://developer.wordpress.org/reference/functions/is_plugin_active/
 */
require_once ABSPATH . 'wp-admin/includes/plugin.php';

$caweb_plugin_active = is_plugin_active( 'caweb-admin/caweb-admin.php' ) || is_plugin_active_for_network( 'caweb-admin/caweb-admin.php' );


?>
			</main> <!-- .main-primary -->

			<?php
			if ( ! $caweb_is_page_builder_used && is_active_sidebar( 'sidebar-1' ) && $caweb_sidebar_allowed ) :
				?>
			<aside id="non_divi_sidebar" class="col-lg-3 pull-left">
				<?php
				print esc_html( get_sidebar( 'sidebar-1' ) );
				?>
			</aside>
				<?php
				endif;

			if ( ! $caweb_is_page_builder_used ) :
				?>
				</div> <!-- .section -->
			<?php endif; ?>
			</div> <!-- #main-content -->
			<?php wp_footer(); ?>
		</div> <!-- #et-main-area -->
	</div> <!-- #page-container -->

	<!-- Footer -->
	<footer id="footer" class="global-footer hidden-print">
		<?php
			wp_nav_menu(
				array(
					'theme_location'         => 'footer-menu',
					'caweb_nav_type'         => 'footer',
					'caweb_template_version' => caweb_template_version(),
				)
			);
			?>
		<!-- Copyright Statement -->
		<div class="copyright">
			<div class="container">
				<div class="d-flex">
					<p class="mr-auto me-auto">Copyright <span aria-hidden="true">&copy;</span> <script>document.write(new Date().getFullYear())</script> State of California</p>
					<?php if ( $caweb_plugin_active ) : ?>
						<span>Powered by: CAWeb Publishing Service</span>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</footer>

	<?php

	if ( is_tag() || is_archive() || is_category() || is_author() ) :
		?>
			<script>
				jQuery(document).ready(function() {
					var articles = document.getElementsByTagName('main')[0].getElementsByTagName('article');
					var makeSpace = false;

					for (var i = 0, len = articles.length; i < len; i++) {
						if (articles[i].classList.contains('has-post-thumbnail')) {
							makeSpace = true;
						}
					}

					if (makeSpace) {
						for (var i = 0, len = articles.length; i < len; i++) {
							if (!articles[i].classList.contains('has-post-thumbnail'))
								articles[i].getElementsByTagName('a')[0].setAttribute("style", "width:200px;height:150px;padding-right:20px;padding-bottom:15px;float:left;");

						}
					}

				});
			</script>
		<?php
		endif;

	if ( is_active_sidebar( 'caweb-site-wide-widget' ) ) {
		dynamic_sidebar( 'caweb-site-wide-widget' );
	}
	?>
	</body>
</html>

