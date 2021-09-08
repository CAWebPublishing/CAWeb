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

// Page Classes.
$caweb_page_container_class    = apply_filters( 'caweb_page_container_class', 'page-container' );
$caweb_page_main_content_class = apply_filters( 'caweb_page_main_content_class', 'main-content' );

get_header();
?>
<body <?php body_class( 'primary et-tb et-tb-has-header' ); ?>>
	<?php require_once dirname( __DIR__ ) . '/partials/header.php'; ?>

	<div id="page-container" class="<?php print esc_attr( $caweb_page_container_class ); ?>">
		<?php do_action( 'caweb_pre_main_area' ); ?>
		<div id="et-main-area">
			<div id="main-content" class="<?php print esc_attr( $caweb_page_main_content_class ); ?>" tabindex="-1">
				<?php do_action( 'caweb_pre_main_primary' ); ?>
				<main class="main-primary">
					<!--Search result section-->
					<div class="section section-default search-container active px-0">
						<?php
						require_once dirname( __DIR__ ) . '/partials/content/search-form.php';
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

	<?php do_action( 'caweb_pre_footer' ); ?>

	<?php get_footer(); ?>

</body>

</html>
