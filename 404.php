<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package CAWeb
 */

get_header();
?>

<body <?php body_class( 'primary' ); ?>>
	<?php require_once( 'partials/header.php' ); ?>


	<div id="main-content" class="main-content">
		<div class="section">
			<main class="main-primary">

				<article id="post-0" <?php post_class( 'et_pb_post not_found' ); ?>>
					<div class="entry-content">
						<!-- Page Title-->
						<h1>Page Not Found</h1>
						<div class="description">The page you requested was not found.</div>
						<div class="section section-none">
							<div class="agency-form">
								<h1>Search Site For:</h1>
								<gcse:searchbox-only resultsUrl="<?php print esc_url( site_url( 'serp' ) ); ?>"></gcse:searchbox-only>
							</div>
						</div>

					</div>
				</article> <!-- .et_pb_post -->

			</main>
		</div>
	</div> <!-- #main-content -->

	<style>
		.entry-content tr td {
			padding: 0px !important;
			border: unset !important;
		}

		.gsc-input {
			border: 1px solid #DDD !important;
		}
	</style>

	<?php get_footer(); ?>

	<?php if ( 4 === caweb_get_page_version( get_the_ID() ) ) : ?>
	<style>
		div#head-search {
			display: none;
		}

		div#google_translate_element {
			top: 10px;
		}
	</style>
	<?php endif; ?>
</body>

</html>
