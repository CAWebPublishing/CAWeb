<?php
/**
 * This is a generic template for Posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package CAWeb
 */

get_header();
$caweb_is_page_builder_used = caweb_is_divi_used();

/* CAGov Design System */
$caweb_enable_design_system = get_option( 'caweb_enable_design_system', false );

// Post Classes.
$caweb_padding = get_option( 'ca_default_post_date_display' ) ? ' pb-0' : '';

$caweb_post_title_class        = apply_filters( 'caweb_post_title_class', "page-title$caweb_padding" );
$caweb_post_container_class    = apply_filters( 'caweb_post_container_class', 'page-container' );
$caweb_post_main_content_class = apply_filters( 'caweb_post_main_content_class', 'main-content' );

if ( $caweb_enable_design_system ) {
	$caweb_post_container_class    .= ' page-container-ds';
	$caweb_post_main_content_class .= '  main-content-ds';
}

?>
<body <?php body_class( 'primary' ); ?>>
	<?php require_once 'partials/single.php'; ?>
</body>
</html>
