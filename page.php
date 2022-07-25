<?php
/**
 * This is a generic template for Pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-page
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
		 * Loads header
		 */
		get_header();

		/**
		 * Loads the page container
		 */
		require_once 'partials/page.php';

		/**
		 * Loads footer
		 */
		get_footer();
	?>
</body>
</html>
