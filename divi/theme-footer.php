<?php
/**
 * Template partial used to add content to the page in Theme Builder.
 * Duplicates partial content from footer.php in order to maintain
 * backwards compatibility with child themes.
 */

/**
 * Fires after the main content, before the footer is output.
 *
 * Note: This action always runs while et_before_main_content runs conditionally. Possibly an unintended behavior.
 *
 * @since 3.10
 */
do_action( 'et_after_main_content' );
?>

<?php if ( 'on' === et_get_option( 'divi_back_to_top', 'false' ) ) : ?>
	<span class="et_pb_scroll_top et-pb-icon"></span>
<?php endif; ?>

<?php if ( ! et_builder_is_product_tour_enabled() && ! is_page_template( 'page-template-blank.php' ) ) : ?>
	<footer id="main-footer">
		<?php get_sidebar( 'footer' ); ?>

		<?php
		if ( has_nav_menu( 'footer-menu' ) ) : ?>

			<div id="et-footer-nav">
				<div class="container">
					<?php
					wp_nav_menu( array(
						'theme_location' => 'footer-menu',
						'depth'          => '1',
						'menu_class'     => 'bottom-nav',
						'container'      => '',
						'fallback_cb'    => '',
					) );
					?>
				</div>
			</div> <!-- #et-footer-nav -->

		<?php endif; ?>

		<div id="footer-bottom">
			<div class="container clearfix">
				<?php
				if ( false !== et_get_option( 'show_footer_social_icons', true ) ) {
					get_template_part( 'includes/social_icons', 'footer' );
				}

				// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
				echo et_core_fix_unclosed_html_tags( et_core_esc_previously( et_get_footer_credits() ) );
				// phpcs:enable
				?>
			</div>	<!-- .container -->
		</div>
	</footer> <!-- #main-footer -->
<?php endif; ?>
