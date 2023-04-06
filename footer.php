<?php
/**
 * The template for displaying author pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @todo Move script
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$caweb_deprecating          = '5.5' === caweb_template_version();
$caweb_is_page_builder_used = caweb_is_divi_used();

if ( $caweb_deprecating ) {
	?>
	<span class="return-top hidden-print"></span>
	<?php
} else {
	?>
	<button class="return-top">
		<span class="sr-only hidden-print">Back to top</span>
	</button>
	<?php
}

?>
			</main> <!-- .main-primary -->

			<?php
				$caweb_sidebar_allowed = is_single() || is_date() || is_archive() || is_author() || is_category() || is_tag();

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
		</div> <!-- #et-main-area -->
	</div> <!-- #page-container -->
	<?php
		wp_nav_menu(
			array(
				'caweb_theme_location' => 'footer-menu',
			)
		);

		wp_footer();

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

