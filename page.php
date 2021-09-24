<?php
/**
 * This is a generic template for Pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-page
 *
 * @package CAWeb
 */

get_header();
$caweb_is_page_builder_used = caweb_is_divi_used();

// Page Classes.
$caweb_page_title_class        = apply_filters( 'caweb_page_title_class', 'page-title' );
$caweb_page_container_class    = apply_filters( 'caweb_page_container_class', 'page-container' );
$caweb_page_main_content_class = apply_filters( 'caweb_page_main_content_class', 'main-content' );

?>
<body <?php body_class( 'primary' ); ?>>
	<?php require_once 'partials/page.php'; ?>
</body>
</html>
