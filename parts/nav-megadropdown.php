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

<ul class="nav megadropdown" aria-label="Main navigation">
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
			
			// if is menu item is the current menu item or menu parent, add .active to classes.
			// if ( in_array( 'current-menu-item', $caweb_item->classes, true ) || in_array( 'current-menu-parent', $caweb_item->classes, true ) ) {
			// 	$caweb_item->classes[] = 'active';
			// }


			$caweb_nav_img_classes = array();

			// if there a sub nav image set.
			// if ( isset( $caweb_item_meta['_caweb_menu_image'][0] ) && ! empty( $caweb_item_meta['_caweb_menu_image'][0] ) ) {
			// 	$caweb_nav_img_side = isset( $caweb_item_meta['caweb_item_meta'][0] ) ? $caweb_item_meta['_caweb_menu_image_side'][0] : 'left';
			// 	$caweb_nav_img_size = isset( $caweb_item_meta['caweb_item_meta'][0] ) ? $caweb_item_meta['_caweb_menu_image_size'][0] : 'quarter';

			// 	$caweb_nav_img_classes = array(
			// 		'left' === $caweb_nav_img_side ? 'pull-right' : 'pull-left',
			// 		'quarter' === $caweb_nav_img_size ? 'w-75' : 'w-50',
			// 	);
			// }
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
						<?php if ( ! empty( $caweb_child_items ) ) : ?>
						<ul class="dropdown-menu">
							<div class="submenu">
							<?php
								foreach ( $caweb_child_items as $caweb_child_item ) {
									$caweb_child_item_meta      = get_post_meta( $caweb_child_item->ID );
									
									// new row is determined by the _caweb_menu_mega_row meta value, if true, it closes the current second-level-nav div and opens a new one.
									$caweb_new_row = isset( $caweb_child_item_meta['_caweb_menu_mega_row'][0] ) ? $caweb_child_item_meta['_caweb_menu_mega_row'][0] : '';
									
									$caweb_child_item_unit_size = isset( $caweb_child_item_meta['_caweb_menu_unit_size'][0] ) ? $caweb_child_item_meta['_caweb_menu_unit_size'][0] : 'unit1';

									// Add additional item classes.
									$caweb_child_item->classes = array_merge( array( $caweb_child_item_unit_size ), $caweb_child_item->classes );
	
									// nav media type (icon or image).
									$nav_media_type= isset( $caweb_child_item_meta['_caweb_menu_media_type'][0] ) ? $caweb_child_item_meta['_caweb_menu_media_type'][0] : 'icon';

									// Get icon if present.
									$caweb_child_item_icon = isset( $caweb_child_item_meta['_caweb_menu_icon'] ) && ! empty( $caweb_child_item_meta['_caweb_menu_icon'][0] ) ?
										$caweb_child_item_meta['_caweb_menu_icon'][0] : '';
										
									if( $caweb_new_row ){
										// close the open second-level-nav and open another for the new row.
										?>
											</div>
											<div class="submenu">
										<?php
									}
									?>
									
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
										<?php 
											
											if( 'icon' === $nav_media_type ){
												$icon = isset( $caweb_child_item_meta['_caweb_menu_icon'][0] ) && ! empty( $caweb_child_item_meta['_caweb_menu_icon'][0] ) ? $caweb_child_item_meta['_caweb_menu_icon'][0] : '';
												if( ! empty( $icon ) ){
													?>
													<span class="ca-gov-icon-<?php print esc_attr( $icon ); ?>" aria-hidden="true"></span>
													<?php
												}
											} else if ( 'image' === $nav_media_type ) {
												$nav_media_image_alt_text  = isset( $caweb_child_item_meta['_caweb_menu_media_image_alt_text'][0] ) ? $caweb_child_item_meta['_caweb_menu_media_image_alt_text'][0] : '';
												$nav_media_img             = isset( $caweb_child_item_meta['_caweb_menu_media_image'][0] ) ? $caweb_child_item_meta['_caweb_menu_media_image'][0] : '';
												

												if( ! empty( $nav_media_img ) ){
													?>
													<img 
														src="<?php print esc_url( $nav_media_img ); ?>" 
														<?php if ( ! empty( $nav_media_image_alt_text ) ) : ?>
														alt="<?php print esc_attr( $nav_media_image_alt_text ); ?>"
														<?php endif; ?>
														/>
													<?php
												}
											}
										?>

										<?php print esc_html( $caweb_child_item->title ); ?>
										
										<?php if ( in_array( $caweb_child_item_unit_size, array( 'unit2', 'unit3' ), true ) && ! empty( $caweb_child_item->description ) ) : ?>
											<div class="link-description"><?php print esc_html( $caweb_child_item->description ); ?></div>
										<?php endif; ?>
										</a>
									<?php

								}
							?>
							</div>
						</ul>
						<?php endif; ?>
					</li>
				<?php
		}
	}

	?>


</ul>
