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
?>

<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<?php wp_head(); ?>
</head>
<body <?php body_class( 'primary' ); ?>>
	<?php
		/**
		 * Loads CAWeb <header> tag.
		 */
		get_header();

	?>

	<div id="page-container" class="<?php print esc_attr( apply_filters( 'caweb_ds_suffix', 'page-container' ) ); ?>">
		<div id="et-main-area">

			<div id="main-content" class="<?php print esc_attr( apply_filters( 'caweb_ds_suffix', 'main-content' ) ); ?>">
				<div class="section">
					<main class="main-primary">

						<article id="post-0" <?php post_class( 'et_pb_post not_found' ); ?>>
							<div class="entry-content">
								<!-- Page Title-->
								<h1>Page Not Found</h1>
								<div class="description">The page you requested was not found.</div>
							</div>
						</article> <!-- .et_pb_post -->

					</main>
				</div>
			</div> <!-- #main-content -->
		</div>
	</div>
	<?php
		/**
		 * Loads footer
		 */
		get_footer();
	?>
</body>
</html>
