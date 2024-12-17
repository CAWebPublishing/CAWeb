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
<ul class="nav">

<?php
foreach ( $caweb_menuitems as $caweb_item ) {

	// If a top level nav item, menu_item_parent = 0.
	if ( ! $caweb_item->menu_item_parent ) {
		$caweb_item_meta = get_post_meta( $caweb_item->ID );

		$caweb_item->classes[] = 'nav-item';

		// Get array of Sub Nav Items (second-level-links).
		$caweb_child_items = caweb_get_nav_menu_item_children( $caweb_item->ID, $caweb_menuitems );
		$has_child_items = ! empty( $caweb_child_items );

		if( $has_child_items ){
			$caweb_item->classes[] = 'dropdown';
		}

		?>
				<li 
					class="<?php print esc_attr( implode( ' ', $caweb_item->classes ) ); ?>" 
					<?php if ( ! empty( $caweb_item->attr_title ) ) : ?>
					title="<?php print esc_attr( $caweb_item->attr_title ); ?>"
					<?php endif; ?>
				>
					<a 
						href="<?php print esc_attr( $caweb_item->url ); ?>" 
						class="nav-link<?php print $has_child_items ? ' dropdown-toggle' : ''; ?>"
						<?php if ( ! empty( $caweb_item->xfn ) ) : ?>
						rel="<?php print esc_attr( $caweb_item->xfn ); ?>"
						<?php endif; ?>
						<?php if ( ! empty( $caweb_item->target ) ) : ?>
						target="<?php print esc_attr( $caweb_item->target ); ?>"
						<?php endif; ?>
						<?php if ( $has_child_items ) : ?>
						data-bs-toggle="dropdown"
						data-bs-popper-config='{"placement": "bottom-start", "strategy": "fixed"}'
						aria-expanded="false"
						<?php endif; ?>
						<?php if ( in_array( 'current-menu-item', $caweb_item->classes, true ) || in_array( 'current-menu-parent', $caweb_item->classes, true ) ) : ?>
						aria-current="page"
						<?php endif; ?>
					>
					<?php print esc_html( $caweb_item->title ); ?>
					</a>
					<?php if ( $has_child_items ) : ?>
						<ul class="dropdown-menu">
							<?php
								foreach ( $caweb_child_items as $caweb_child_item ) {
									$caweb_child_item_meta      = get_post_meta( $caweb_child_item->ID );
									$caweb_child_item_unit_size = isset( $caweb_child_item_meta['_caweb_menu_unit_size'][0] ) ? $caweb_child_item_meta['_caweb_menu_unit_size'][0] : 'unit1';

									// this prevents any unit3 from attempting to render.
									$caweb_child_item_unit_size = 'unit1' === $caweb_child_item_unit_size ? 'unit1' : 'unit2';

									// Get icon if present.
									$caweb_child_item_icon = isset( $caweb_child_item_meta['_caweb_menu_icon'] ) && ! empty( $caweb_child_item_meta['_caweb_menu_icon'][0] ) ?
										$caweb_child_item_meta['_caweb_menu_icon'][0] : '';

									// Add additional item classes.
									$caweb_child_item->classes = array_merge( array( $caweb_child_item_unit_size, 'w-100', 'p-0' ), $caweb_child_item->classes );

									?>
										<li
											<?php if ( ! empty( $caweb_child_item->classes ) ) : ?>
											class="<?php print esc_attr( implode( ' ', $caweb_child_item->classes ) ); ?>"
											<?php endif; ?>  
											<?php if ( ! empty( $caweb_child_item->attr_title ) ) : ?>
											title="<?php print esc_attr( $caweb_child_item->attr_title ); ?>"
											<?php endif; ?>
										>
											<a 
												href="<?php print esc_url( $caweb_child_item->url ); ?>" 
												class="dropdown-item nav-link"
												tabindex="-1"
												<?php if ( ! empty( $caweb_child_item->target ) ) : ?>
												target="<?php print esc_attr( $caweb_child_item->target ); ?>" 
												<?php endif; ?>
												<?php if ( ! empty( $caweb_child_item->xfn ) ) : ?>
												rel="<?php print esc_attr( $caweb_child_item->xfn ); ?>"
												<?php endif; ?>
											>														
												<?php print esc_html( $caweb_child_item->title ); ?>

												<?php if ( in_array( $caweb_child_item_unit_size, array( 'unit2', 'unit3' ), true ) && ! empty( $caweb_child_item->description ) ) : ?>
													<div class="link-description"><?php print esc_html( $caweb_child_item->description ); ?></div>
												<?php endif; ?>
											</a>
										</li>
										<?php

								}
								?>
								</ul>
					<?php endif; ?>
				</li>
			<?php
	}
}

?>

</ul>