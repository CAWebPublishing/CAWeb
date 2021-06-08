<?php
/**
 * Template partial used to add content to the page in Theme Builder.
 * Duplicates partial content from footer.php in order to maintain
 * backwards compatibility with child themes.
 */

?>
<?php if ( ! et_builder_is_product_tour_enabled() && ! is_page_template( 'page-template-blank.php' ) ) : ?>
    </div> <!-- #et-main-area -->
<?php endif; ?>
