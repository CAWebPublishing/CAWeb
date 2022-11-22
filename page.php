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
<head>
	<?php 
		if( function_exists( 'wp_head' ) ){
			wp_head();
		} 
	?>
</head>
<body <?php if( function_exists( 'body_class' ) ){ body_class( 'primary' ); } ?>>

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
