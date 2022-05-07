<?php
/**
 * This is a generic template for Pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-page
 *
 * @package CAWeb
 */

global $post;

get_header();
$caweb_is_page_builder_used = caweb_is_divi_used();

/* CAGov Design System */
$caweb_enable_design_system = get_option( 'caweb_enable_design_system', false );

// Page Classes.
$caweb_page_title_class        = apply_filters( 'caweb_page_title_class', 'page-title' );
$caweb_page_container_class    = apply_filters( 'caweb_page_container_class', 'page-container' );
$caweb_page_main_content_class = apply_filters( 'caweb_page_main_content_class', 'main-content' );

$caweb_header_file = 'partials/content/';

if ( $caweb_enable_design_system ) {
	$caweb_page_container_class    .= ' page-container-ds';
	$caweb_page_main_content_class .= '  main-content-ds';
	$caweb_header_file              = 'partials/design-system/';
}

?>
<body <?php body_class( 'primary' ); ?>>

	<?php

		/**
		 * Loads CAWeb <header> tag.
		 */
		require_once $caweb_header_file . 'header.php';

		/**
		 * Loads the page container
		 */
		require_once 'partials/page.php';
	?>
</body>
</html>
