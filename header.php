<?php
/**
 * The header for our theme
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

if ( caweb_design_system_enabled() ) {
	require_once 'partials/design-system/header.php';
} else {
	require_once 'partials/content/header.php';
}


