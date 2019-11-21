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

get_header();
?>

<body <?php body_class( 'primary' ); ?>>
	<?php get_template_part( 'partials/content', 'header' ); ?>
	<style>
		#main-content .container {
			padding-top: 0
		}

		.search-container {
			top: 0 !important;
		}

		.mobile-controls .toggle-search,
		form#Search .close-search {
			display: none !important
		}
	</style>

	<div id="page-container">
		<div id="et-main-area">

			<div id="main-content" class="main-content">
				<main class="main-primary">
					<!--Search result section-->
					<div class="section section-default search-container active px-0">
						<?php
						require CAWEB_ABSPATH . '/ssi/searchForm.php';
						?>
					</div>
					<div class="section">
						<div class="container">
							<h1>Search Results for: <?php print esc_attr( $keyword ); ?></h1>
							<gcse:searchresults-only></gcse:searchresults-only>
						</div>
					</div>
				</main>
			</div>

		</div>
	</div>
	<?php get_footer(); ?>

</body>

</html>
