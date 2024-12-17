<?php
/**
 * Template Name: Search Results Page
 *
 * This is the template for Search Results Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-page
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$caweb_search_nonce = wp_create_nonce( 'caweb_google_cse' );
$caweb_verified     = isset( $caweb_search_nonce ) && wp_verify_nonce( sanitize_key( $caweb_search_nonce ), 'caweb_google_cse' );
$caweb_keyword      = isset( $_GET['q'] ) ? sanitize_text_field( wp_unslash( $_GET['q'] ) ) : '';

/**
* Loads CAWeb <header> tag.
*/
get_header();

do_action( 'caweb_search_form' );
?>

<!--Search result section-->
<div class="section">
	<div class="container pt-0">
		<h1>Search results for: <?php print esc_attr( $caweb_keyword ); ?></h1>
		<gcse:searchresults-only></gcse:searchresults-only>
	</div>
</div>
<?php

/**
 * Loads footer
 */
get_footer();
