<?php
/**
 * The template for displaying category pages
 *
 * @link https://developer.wordpress.org/themes/template-files-section/taxonomy-templates/#category
 *
 * @package CAWeb
 */

get_header();
?>

<body <?php body_class( 'primary' ); ?>>
	<?php require_once 'partials/header.php'; ?>


	<div id="page-container">
		<?php do_action( 'caweb_pre_category_main_area' ); ?>
		<div id="et-main-area">
			<div id="main-content" class="main-content">
				<div class="section">
					<main class="main-primary">
					<?php do_action( 'caweb_category_main_primary' ); ?>
					</main>
					<?php do_action( 'caweb_category_sidebar' ); ?>
				</div> <!-- #main-content -->
			</div>
		</div>
	</div>
	<?php get_footer(); ?>
</body>

</html>
