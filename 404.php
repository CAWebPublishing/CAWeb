<?php
/**
 * The template for displaying 404 pages (Page Not Found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package CAWeb
 */

/* CAGov Design System */
$caweb_enable_design_system = get_option( 'caweb_enable_design_system', false );

$caweb_post_title_class        = apply_filters( 'caweb_post_title_class', 'page-title' );
$caweb_post_container_class    = apply_filters( 'caweb_post_container_class', 'page-container' );
$caweb_post_main_content_class = apply_filters( 'caweb_post_main_content_class', 'main-content' );

$caweb_header_file = 'partials/content/';

if ( $caweb_enable_design_system ) {
	$caweb_post_container_class    .= ' page-container-ds';
	$caweb_post_main_content_class .= '  main-content-ds';
	$caweb_header_file              = 'partials/design-system/';
}

get_header();
?>

<body <?php body_class( 'primary' ); ?>>
	<?php
		/**
		 * Loads CAWeb <header> tag.
		 */
		require_once $caweb_header_file . 'header.php';

	?>


	<div id="main-content" class="<?php print esc_attr( $caweb_post_main_content_class ); ?>">
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

	<?php get_footer(); ?>
</body>

</html>
