<?php
/**
 * CAWeb Theme Header
 *
 * This is the template that displays all of the <header> section
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

global $is_IE, $is_edge;

$caweb_google_tag_manager_id = get_option( 'ca_google_tag_manager_id', '' );
$caweb_google_meta_id        = get_option( 'ca_google_meta_id', '' );
$caweb_x_ua_compatibility    = get_option( 'ca_x_ua_compatibility', false ) ? '11' : 'edge';
$caweb_apple_icon            = CAWEB_URI . '/src/images/system/apple-touch-icon';
$caweb_fav_ico               = ! empty( get_option( 'ca_fav_ico', '' ) ) ? get_option( 'ca_fav_ico' ) : caweb_default_favicon_url();

$caweb_is_page_builder_used = caweb_is_divi_used();

$caweb_page_container_classes = sprintf( 'page-container %1$s', get_option( 'caweb_page_container_classes', '' ));
$caweb_main_content_classes = sprintf( 'main-content %1$s', get_option( 'caweb_main_content_classes', '' ));

?>
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="Author" content="State of California" />
	<meta name="Description" content="State of California" />
	<meta name="Keywords" content="California, government" />

	<!-- http://t.co/dKP3o1e -->
	<meta name="HandheldFriendly" content="True">

	<!-- for Blackberry, AvantGo -->
	<meta name="MobileOptimized" content="320">

	<!-- for Windows mobile -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

	<!-- Google Meta-->
	<?php if ( ! empty( $caweb_google_meta_id ) ) : ?>
	<meta name="google-site-verification" content="<?php print esc_attr( $caweb_google_meta_id ); ?>" />
	<?php endif; ?>

	<?php if ( $is_IE ) : ?>
	<!-- Activate ClearType for Mobile IE -->
	<meta http-equiv="cleartype" content="on">
	<?php endif; ?>

	<?php if ( $is_IE && ! $is_edge && $caweb_x_ua_compatibility ) : ?>
	<!-- Use highest compatibility mode -->
	<meta http-equiv="X-UA-Compatible" content="IE=<?php print esc_attr( $caweb_x_ua_compatibility ); ?>">
	<?php endif; ?>

	<link rel="apple-touch-icon-precomposed" sizes="100x100" href="<?php print esc_url( $caweb_apple_icon ); ?>-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="192x192" href="<?php print esc_url( $caweb_apple_icon ); ?>-192x192.png">
	<link rel="apple-touch-icon-precomposed" sizes="180x180" href="<?php print esc_url( $caweb_apple_icon ); ?>-180x180.png">
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?php print esc_url( $caweb_apple_icon ); ?>-152x152.png">
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php print esc_url( $caweb_apple_icon ); ?>-144x144.png">
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?php print esc_url( $caweb_apple_icon ); ?>-120x120.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php print esc_url( $caweb_apple_icon ); ?>-114x114.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php print esc_url( $caweb_apple_icon ); ?>-72x72.png">
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?php print esc_url( $caweb_apple_icon ); ?>-57x57.png">
	<link rel="apple-touch-icon" href="<?php print esc_url( $caweb_apple_icon ); ?>.png">

	<link title="Fav Icon" rel="icon" href="<?php print esc_url( $caweb_fav_ico ); ?>">
	<link rel="shortcut icon" href="<?php print esc_url( $caweb_fav_ico ); ?>">

	<?php wp_head(); ?>

</head>
<body <?php body_class( 'primary' ); ?>>

<?php
if ( ! empty( $caweb_google_tag_manager_id ) ) :
	$caweb_google_tag_src = sprintf( 'https://www.googletagmanager.com/ns.html?id=%1$s', $caweb_google_tag_manager_id );
	?>
<!-- Google Tag Manager (noscript) -->
<noscript>
	<iframe src="<?php print esc_url( $caweb_google_tag_src ); ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<?php endif; ?>

<?php wp_body_open(); ?>

<div id="page-container" class="<?php print esc_attr( apply_filters( 'caweb_page_container_class', $caweb_page_container_classes ) ); ?>">
	<div id="et-main-area">
		<div id="main-content" class="<?php print esc_attr( apply_filters( 'caweb_main_content_class', $caweb_main_content_classes ) ); ?>" tabindex="-1">
			<main class="main-primary">
