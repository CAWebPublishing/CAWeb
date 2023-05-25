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


?>
			</main> <!-- .main-primary -->

			<?php
			if ( ! $caweb_is_page_builder_used && is_active_sidebar( 'sidebar-1' ) && $caweb_sidebar_allowed ) :
				?>
				<aside id="caweb-sidebar">
				<?php
				print esc_html( get_sidebar( 'sidebar-1' ) );
				?>
				</aside>
			<?php
				endif;
			?>
			</div> <!-- #main-content -->
		</div> <!-- #et-main-area -->
	</div> <!-- #page-container -->
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

	wp_footer();
	?>
	</body>
</html>

