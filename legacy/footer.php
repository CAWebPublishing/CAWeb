<?php
/**
 * The template for displaying author pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CAWeb
 */

wp_nav_menu(
	array(
		'theme_location' => 'footer-menu',
		'version'        => caweb_get_page_version( get_the_ID() ),
	)
);

wp_footer();

if ( is_tag() || is_archive() || is_category() || is_author() ) : ?>
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

<?php endif; ?>
