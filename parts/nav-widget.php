<?php
/**
 * CAWeb Widget Navigation Menu
 *
 * @see https://developer.wordpress.org/reference/classes/walker_nav_menu/
 * @see https://core.trac.wordpress.org/browser/tags/5.3/src/wp-includes/class-walker-nav-menu.php
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// phpcs:disable
foreach ( $args as $var => $val ) {
	$$var = $val;
}
// phpcs:enable

$caweb_menuitems = wp_get_nav_menu_items( $menu->term_id, array( 'order' => 'DESC' ) );

_wp_menu_item_classes_by_context( $caweb_menuitems );

?>

<ul class="accordion-list">
	<?php
		/* Iterate thru menuitems create Top Level (first-level-link) */
	foreach ( $caweb_menuitems as $caweb_i => $caweb_item ) {

		// If a top level nav item, menu_item_parent = 0.
		if ( ! $caweb_item->menu_item_parent ) {
			$caweb_item_meta = get_post_meta( $caweb_item->ID );

			/* Get array of Sub Nav Items (second-level-links) */
			$caweb_child_items = caweb_get_nav_menu_item_children( $caweb_item->ID, $caweb_menuitems );

			$caweb_item->classes[] = 'nav-item';

			// if is menu item is the current menu item , add .active to classes.
			if ( in_array( 'current-menu-item', $caweb_item->classes, true ) ) {
				$caweb_item->classes[] = 'active';
			}

			?>
					<li 
						class="<?php print esc_attr( implode( ' ', $caweb_item->classes ) ); ?>"
						<?php if ( ! empty( $caweb_item->attr_title ) ) : ?>
						title="<?php print esc_attr( $caweb_item->attr_title ); ?>" 
						<?php endif; ?>
					>
						<a 
							href="<?php print esc_url( $caweb_item->url ); ?>"
							<?php if ( ! empty( $caweb_item->xfn ) ) : ?>
							rel="<?php print esc_attr( $caweb_item->xfn ); ?>" 
							<?php endif; ?>
							<?php if ( ! empty( $caweb_item->target ) ) : ?>
							target="<?php print esc_attr( $caweb_item->target ); ?>" 
							<?php endif; ?>
							<?php if ( ! empty( $caweb_item_meta['_caweb_menu_icon'][0] ) || ! empty( $caweb_item_meta['_caweb_menu_image'][0] ) ) : ?> 
							class="widget_nav_menu_a" 
							<?php endif; ?>
						>
						<?php if ( ! empty( $caweb_item_meta['_caweb_menu_icon'][0] ) ) : ?>
								<span class="widget_nav_menu_icon ca-gov-icon-<?php print esc_attr( $caweb_item_meta['_caweb_menu_icon'][0] ); ?>"></span>
							<?php elseif ( ! empty( $caweb_item_meta['_caweb_menu_image'][0] ) ) : ?>
								<img class="widget_nav_menu_img" src="<?php print esc_url( $caweb_item_meta['_caweb_menu_image'][0] ); ?>"/>
							<?php endif; ?>

							<span class="widget_nav_menu_title"><?php print esc_html( $caweb_item->title ); ?></span>
						</a>
					</li>
				<?php
		}
	}
	?>
</ul>
