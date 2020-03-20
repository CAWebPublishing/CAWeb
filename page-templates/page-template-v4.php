<?php
/**
 * Template Name: State v4
 *
 * This is the template for Search Results Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-page
 *
 * @package CAWeb
 */

?>

<!DOCTYPE html>
<html class="no-js" lang="en">
<?php

get_header();
$caweb_is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );

?>
<body <?php body_class( 'primary' ); ?>>
	<?php require_once( dirname(__DIR__) . '/partials/page.php') ?>
</body>
</html>
