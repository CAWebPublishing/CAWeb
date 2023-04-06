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

<nav id="navigation" class="main-navigation dropdown hidden-print nav">
	<ul id="nav_list" class="top-level-nav">
		<?php if ( $caweb_home_link ) : ?>
			<li class="nav-item nav-item-home">
				<a href="/" class="first-level-link"><span class="ca-gov-icon-home"></span> Home</a>
			</li>
		<?php endif; ?>

		<?php
		foreach ( $caweb_menuitems as $caweb_i => $caweb_item ) {
			$caweb_item_meta = get_post_meta( $caweb_item->ID );

			$caweb_item->classes[] = 'nav-item';

			$caweb_item_icon = isset( $caweb_item_meta['_caweb_menu_icon'] ) && ! empty( $caweb_item_meta['_caweb_menu_icon'][0] ) ?
				$caweb_item_meta['_caweb_menu_icon'][0] : 'logo invisible';

			// If a top level nav item, menu_item_parent = 0.
			if ( ! $caweb_item->menu_item_parent ) {
				// Get array of Sub Nav Items (second-level-links).
				$caweb_item_child_items = caweb_get_nav_menu_item_children( $caweb_item->ID, $caweb_menuitems );

				// if is menu item is the current menu item or menu parent, add .active to classes.
				if ( in_array( 'current-menu-item', $caweb_item->classes, true ) || in_array( 'current-menu-parent', $caweb_item->classes, true ) ) {
					$caweb_item->classes[] = 'active';
				}

				?>
						<li 
							class="<?php print esc_attr( implode( ' ', $caweb_item->classes ) ); ?>" 
							title="<?php print esc_attr( $caweb_item->attr_title ); ?>"
							>
							<a 
								href="<?php print esc_attr( $caweb_item->url ); ?>" 
								class="first-level-link"
								<?php print esc_attr( ! empty( $caweb_item->xfn ) ? sprintf( ' rel="%1$s" ', $caweb_item->xfn ) : '' ); ?>
							>
								<span class="ca-gov-icon-<?php print esc_attr( $caweb_item_icon ); ?>"></span>
								<span class="link-title"><?php print esc_attr( $caweb_item->title ); ?></span>
							</a>
							<?php if ( ! empty( $caweb_item_child_items ) ) : ?>
								<div class="sub-nav">
									<div>
										<ul class="second-level-nav pos-rel opacity-100 visible p-0 w-100 border-0">
										<?php
										foreach ( $caweb_item_child_items as $caweb_c => $caweb_child_item ) {
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
													class="<?php print esc_attr( implode( ' ', $caweb_child_item->classes ) ); ?>" 
													title="<?php print esc_attr( $caweb_child_item->attr_title ); ?>"
												>
													<a 
														href="<?php print esc_url( $caweb_child_item->url ); ?>" 
														class="second-level-link d-block bg-0"
														target="<?php print esc_attr( ! empty( $caweb_child_item->target ) ? $caweb_child_item->target : 'self' ); ?>"
														tabindex="-1"
														<?php print esc_attr( ! empty( $caweb_child_item->xfn ) ? sprintf( ' rel="%1$s" ', $caweb_child_item->xfn ) : '' ); ?>
													>
														<?php if ( ! empty( $caweb_child_item_icon ) ) : ?>
															<span class="ca-gov-icon-<?php print esc_attr( $caweb_child_item_icon ); ?>" aria-hidden="true"></span>
														<?php endif; ?>

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
									</div>
								</div>
							<?php endif; ?>
						</li>
					<?php
			}
		}

		?>

		<?php if ( 'page-templates/searchpage.php' !== get_page_template_slug() && ! empty( $caweb_google_search_id ) ) : ?>
			<li class="nav-item" id="nav-item-search" >
				<button class="first-level-link h-auto"><span class="ca-gov-icon-search" aria-hidden="true"></span> Search</button>
			</li>
		<?php endif; ?>

	</ul>
</nav>
