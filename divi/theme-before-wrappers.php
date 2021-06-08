<?php
/**
 * Template partial used to add content to the page in Theme Builder.
 * Duplicates partial content from header.php in order to maintain
 * backwards compatibility with child themes.
 */

$product_tour_enabled = et_builder_is_product_tour_enabled();
$page_container_style = $product_tour_enabled ? ' style="padding-top: 0px;"' : '';
?>
<div id="page-container"<?php echo et_core_intentionally_unescaped( $page_container_style, 'fixed_string' ); ?>>
