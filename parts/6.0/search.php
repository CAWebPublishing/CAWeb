<?php
/**
 * Loads CAWeb search form.
 * php version 8.0.28
 *
 * @package CAWeb
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$caweb_search_nonce = wp_create_nonce( 'caweb_google_cse' );
$caweb_verified     = isset( $caweb_search_nonce ) && wp_verify_nonce( sanitize_key( $caweb_search_nonce ), 'caweb_google_cse' );
$caweb_keyword      = isset( $_GET['q'] ) ? sanitize_text_field( wp_unslash( $_GET['q'] ) ) : '';

?>

<div class="search-container">
    <form action="<?php print esc_url( site_url( 'serp' ) ); ?>">
        <div class="input-group">
            <span class="sr-only" id="SearchInput">Custom Google Search</span>
            <input type="search" name="q" aria-labelledby="SearchInput" placeholder="Search" class="search-textfield form-control" value="<?php print esc_attr( $caweb_keyword ); ?>">
            <button type="submit" class="search-button">
                <span class="ca-gov-icon-search" aria-hidden="true"></span>
                <span class="sr-only">Submit</span>
            </button>
        </div>
    </form>
</div>