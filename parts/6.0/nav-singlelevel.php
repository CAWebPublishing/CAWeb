<?php
/**
 * CAWeb Singlelevel Navigation Menu
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

<nav id="navigation" class="main-navigation singlelevel hidden-print nav">
	<ul id="nav_list" class="top-level-nav">

		<?php
		foreach ( $caweb_menuitems as $caweb_item ) {

			// If a top level nav item, menu_item_parent = 0.
			if ( ! $caweb_item->menu_item_parent ) {
				$caweb_item_meta = get_post_meta( $caweb_item->ID );

				$caweb_item->classes[] = 'nav-item';

				// if is menu item is the current menu item or menu parent, add .active to classes.
				if ( in_array( 'current-menu-item', $caweb_item->classes, true ) || in_array( 'current-menu-parent', $caweb_item->classes, true ) ) {
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
								class="first-level-link text-left"
								<?php if ( ! empty( $caweb_item->xfn ) ) : ?>
								rel="<?php print esc_attr( $caweb_item->xfn ); ?>"
								<?php endif; ?>
								<?php if ( ! empty( $caweb_item->target ) ) : ?>
								target="<?php print esc_attr( $caweb_item->target ); ?>" 
								<?php endif; ?>
							>
								<span class="link-title"><?php print esc_html( $caweb_item->title ); ?></span>
							</a>
						</li>
					<?php
			}
		}

		?>

	</ul>
</nav>
