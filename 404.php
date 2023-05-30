<?php
/**
 * The template for displaying 404 pages (Page Not Found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
* Loads CAWeb <header> tag.
*/
get_header();

?>
<article id="post-0" <?php post_class( 'not_found' ); ?>>
	<div class="entry-content">
		<!-- Page Title-->
		<h1>Page Not Found</h1>
		<div class="description">The page you requested was not found.</div>
	</div>
</article>
<?php

/**
 * Loads footer
 */
get_footer();
