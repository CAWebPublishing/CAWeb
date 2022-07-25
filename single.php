<?php
/**
 * This is a generic template for Posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package CAWeb
 */

?>
<!DOCTYPE html>
<html class="no-js" lang="en">
<head><?php wp_head(); ?></head>
<body <?php body_class( 'primary' ); ?>>
	<?php
		/**
		 * Loads CAWeb <header> tag.
		 */
		get_header();

		/**
		 * Loads the post container
		 */
		require_once 'partials/single.php';

		/**
		 * Loads footer
		 */
		get_footer();

	?>
</body>
</html>
