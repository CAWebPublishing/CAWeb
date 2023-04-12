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

<nav id="navigation" class="main-navigation megadropdown hidden-print nav">
	<ul id="nav_list" class="top-level-nav">
		<?php if ( $caweb_home_link ) : ?>
			<li class="nav-item nav-item-home">
				<a href="/" class="first-level-link"><span class="ca-gov-icon-home"></span> Home</a>
			</li>
		<?php endif; ?>

		<?php
		foreach ( $caweb_menuitems as $caweb_item ) {

			// If a top level nav item, menu_item_parent = 0.
			if ( ! $caweb_item->menu_item_parent ) {
				$caweb_item_meta = get_post_meta( $caweb_item->ID );

				$caweb_item->classes[] = 'nav-item';

				$caweb_item_icon = isset( $caweb_item_meta['_caweb_menu_icon'] ) && ! empty( $caweb_item_meta['_caweb_menu_icon'][0] ) ?
					$caweb_item_meta['_caweb_menu_icon'][0] : 'logo invisible';

				// Get array of Sub Nav Items (second-level-links).
				$caweb_child_items = caweb_get_nav_menu_item_children( $caweb_item->ID, $caweb_menuitems );

				// if is menu item is the current menu item or menu parent, add .active to classes.
				if ( in_array( 'current-menu-item', $caweb_item->classes, true ) || in_array( 'current-menu-parent', $caweb_item->classes, true ) ) {
					$caweb_item->classes[] = 'active';
				}


				$caweb_nav_img_classes = array();

				// if there a sub nav image set.
				if ( isset( $caweb_item_meta['_caweb_menu_image'][0] ) && ! empty( $caweb_item_meta['_caweb_menu_image'][0] ) ) {
					$caweb_nav_img_side = isset( $caweb_item_meta['caweb_item_meta'][0] ) ? $caweb_item_meta['_caweb_menu_image_side'][0] : 'left';
					$caweb_nav_img_size = isset( $caweb_item_meta['caweb_item_meta'][0] ) ? $caweb_item_meta['_caweb_menu_image_size'][0] : 'quarter';

					$caweb_nav_img_classes = array(
						'left' === $caweb_nav_img_side ? 'pull-right' : 'pull-left',
						'quarter' === $caweb_nav_img_size ? 'w-75' : 'w-50',
					);
				}
				?>
						<li 
							<?php if ( ! empty( $caweb_item->classes ) ) : ?>
							class="<?php print esc_attr( implode( ' ', $caweb_item->classes ) ); ?>"
							<?php endif; ?>
							<?php if ( ! empty( $caweb_item->attr_title ) ) : ?>
							title="<?php print esc_attr( $caweb_item->attr_title ); ?>"
							<?php endif; ?>
							>
							<a 
								href="<?php print esc_attr( $caweb_item->url ); ?>" 
								class="first-level-link"
								<?php if ( ! empty( $caweb_item->xfn ) ) : ?>
									rel="<?php print esc_attr( $caweb_item->xfn ); ?>"
								<?php endif; ?>
								<?php if ( ! empty( $caweb_item->target ) ) : ?>
									target="<?php print esc_attr( $caweb_item->target ); ?>"
								<?php endif; ?>
							>
								<span class="ca-gov-icon-<?php print esc_attr( $caweb_item_icon ); ?>"></span>
								<span class="link-title"><?php print esc_html( $caweb_item->title ); ?></span>
							</a>
							<?php if ( ! empty( $caweb_child_items ) ) : ?>
								<div class="sub-nav">
									<div 
										<?php if ( ! empty( $caweb_nav_img_classes ) ) : ?>
										class="<?php print esc_attr( implode( ' ', $caweb_nav_img_classes ) ); ?>"
										<?php endif; ?>
									>
										<ul class="second-level-nav">
										<?php
										foreach ( $caweb_child_items as $caweb_child_item ) {
											$caweb_child_item_meta      = get_post_meta( $caweb_child_item->ID );
											$caweb_child_item_unit_size = isset( $caweb_child_item_meta['_caweb_menu_unit_size'][0] ) ? $caweb_child_item_meta['_caweb_menu_unit_size'][0] : 'unit1';

											// Add unit size to classes.
											$caweb_child_item->classes[] = $caweb_child_item_unit_size;

											// Get icon if present.
											$caweb_child_item_icon = isset( $caweb_child_item_meta['_caweb_menu_icon'] ) && ! empty( $caweb_child_item_meta['_caweb_menu_icon'][0] ) ?
												$caweb_child_item_meta['_caweb_menu_icon'][0] : '';

											// Correct li size depending on parent column selection.
											if ( in_array( 'two-columns', $caweb_item->classes, true ) ) {
												$caweb_child_item->classes[] = 'w-50';
											} elseif ( in_array( 'three-columns', $caweb_item->classes, true ) ) {
												$caweb_child_item->classes[] = 'w-33';
											} else {
												$caweb_child_item->classes[] = 'w-25';
											}

											if ( 'unit3' !== $caweb_child_item_unit_size ) {
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
															class="second-level-link"
															tabindex="-1"
															href="<?php print esc_url( $caweb_child_item->url ); ?>" 
															<?php if ( ! empty( $caweb_child_item->target ) ) : ?>
															target="<?php print esc_attr( $caweb_child_item->target ); ?>" 
															<?php endif; ?>
															<?php if ( ! empty( $caweb_child_item->xfn ) ) : ?>
															rel="<?php print esc_attr( $caweb_child_item->xfn ); ?>"
															<?php endif; ?>
															>
															<?php if ( ! empty( $caweb_child_item_icon ) ) : ?>
																<span class="ca-gov-icon-<?php print esc_attr( $caweb_child_item_icon ); ?>" aria-hidden="true"></span>
															<?php endif; ?>
															<?php print esc_html( $caweb_child_item->title ); ?>
															<?php if ( in_array( $caweb_child_item_unit_size, array( 'unit2', 'unit3' ), true ) && ! empty( $caweb_child_item->description ) ) : ?> 
																<div class="link-description">
																	<div class="teaser"><?php print esc_html( $caweb_child_item->description ); ?></div>
																</div>
															<?php endif; ?>
														</a>
													</li>
												<?php
											} else {
												// Add additional item classes.
												$caweb_child_item->classes = array_merge( array( 'h-auto', 'px-0' ), $caweb_child_item->classes );

												// Get nav media if present.
												$caweb_nav_media_image    = isset( $caweb_child_item_meta['_caweb_menu_media_image'][0] ) ? $caweb_child_item_meta['_caweb_menu_media_image'][0] : '';
												$caweb_nav_media_alt_text = isset( $caweb_child_item_meta['_caweb_nav_media_image_alt_text'][0] ) ? $caweb_child_item_meta['_caweb_nav_media_image_alt_text'][0] : '';

												?>
													<li 
														<?php if ( ! empty( $caweb_child_item->classes ) ) : ?>
														class="<?php print esc_attr( implode( ' ', $caweb_child_item->classes ) ); ?>"
														<?php endif; ?> 
														<?php if ( ! empty( $caweb_child_item->attr_title ) ) : ?>
														title="<?php print esc_attr( $caweb_child_item->attr_title ); ?>"
														<?php endif; ?>
													>
														<div class="nav-media">
															<div class="media border-0">
																<?php if ( ! empty( $caweb_nav_media_image ) ) : ?>
																<div class="media-left">
																	<a 
																		class="second-level-link" 
																		tabindex="-1"
																		href="<?php print esc_url( $caweb_child_item->url ); ?>" 
																		<?php if ( ! empty( $caweb_child_item->target ) ) : ?>
																		target="<?php print esc_attr( $caweb_child_item->target ); ?>" 
																		<?php endif; ?>
																		<?php if ( ! empty( $caweb_child_item->xfn ) ) : ?>
																		rel="<?php print esc_attr( $caweb_child_item->xfn ); ?>"
																		<?php endif; ?>
																	>
																		<img 
																			style="height: 77px; max-width: 77px;" 
																			src="<?php print esc_url( $caweb_nav_media_image ); ?>" 
																			alt="<?php print esc_attr( $caweb_nav_media_alt_text ); ?>"/>
																	</a>
																</div>
																<?php endif; ?>
																<div class="media-body">
																	<div class="title">
																		<a 
																			class="second-level-link" 
																			href="<?php print esc_url( $caweb_child_item->url ); ?>"
																			tabindex="-1"
																			<?php if ( ! empty( $caweb_child_item->target ) ) : ?>
																			target="<?php print esc_attr( $caweb_child_item->target ); ?>" 
																			<?php endif; ?>
																			<?php if ( ! empty( $caweb_child_item->xfn ) ) : ?>
																			rel="<?php print esc_attr( $caweb_child_item->xfn ); ?>"
																			<?php endif; ?>
																		><?php print esc_html( $caweb_child_item->title ); ?></a>
																	</div>
																	<?php if ( in_array( $caweb_child_item_unit_size, array( 'unit2', 'unit3' ), true ) && ! empty( $caweb_child_item->description ) ) : ?> 
																	<div class="link-description">
																		<div class="teaser"><?php print esc_html( $caweb_child_item->description ); ?></div>
																	</div>
																	<?php endif; ?>
																</div>
															</div>
														</div>
													</li>
												<?php
											}
										}
										?>
										</ul>
									</div>
									<?php
									if ( ! empty( $caweb_nav_img_classes ) ) {
											$caweb_nav_img       = $caweb_item_meta['_caweb_menu_image'][0];
											$caweb_nav_img_class = 'half' === $caweb_nav_img_size ? 'w-50' : 'w-25';
										?>
												<div class="<?php print esc_attr( "$caweb_nav_img_class with-image-$caweb_nav_img_side" ); ?>" style="background: url(<?php print esc_url( $caweb_nav_img ); ?>) no-repeat; background-size: 100% 100%;"></div>
											<?php
									}
									?>
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
