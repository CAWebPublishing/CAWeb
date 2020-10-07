<?php
/**
 * CAWeb Navigation Menu Edit Class
 *
 * @see https://developer.wordpress.org/reference/classes/walker_nav_menu/
 * @see https://core.trac.wordpress.org/browser/tags/5.3/src/wp-admin/includes/class-walker-nav-menu-edit.php
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit();
}

require_once ABSPATH . 'wp-admin/includes/nav-menu.php';

if ( ! class_exists( 'CAWeb_Nav_Menu_Walker' ) ) {

	/**
	 * Create HTML list of nav menu input items.
	 *
	 * @link https://developer.wordpress.org/reference/classes/walker_nav_menu_edit/
	 */
	class CAWeb_Nav_Menu_Walker extends Walker_Nav_Menu_Edit {

		/**
		 *
		 * Start the element output.
		 *
		 * @link https://developer.wordpress.org/reference/classes/walker_nav_menu_edit/start_el/
		 * @link https://core.trac.wordpress.org/browser/tags/5.3/src/wp-admin/includes/class-walker-nav-menu-edit.php#L58
		 *
		 * @see Walker_Nav_Menu::start_el()
		 *
		 * @since 3.0.0
		 *
		 * @global int $_wp_nav_menu_max_depth
		 *
		 * @param string $output Passed by reference. Used to append additional content.
		 *
		 * @param object $item   Menu item data object.
		 *
		 * @param int    $depth  Depth of menu item. Used for padding.
		 *
		 * @param array  $args   Not used.
		 *
		 * @param int    $id     Not used.
		 */
		public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
			ob_start();
			$item_id      = esc_attr( $item->ID );
			$removed_args = array(
				'action',
				'customlink-tab',
				'edit-menu-item',
				'menu-item',
				'page-tab',
				'_wpnonce',
			);

			$original_title = false;

			if ( 'taxonomy' === $item->type ) {
					$original_object = get_term( (int) $item->object_id, $item->object );
				if ( $original_object && ! is_wp_error( $original_title ) ) {
						$original_title = $original_object->name;
				}
			} elseif ( 'post_type' === $item->type ) {
					$original_object = get_post( $item->object_id );
				if ( $original_object ) {
						$original_title = get_the_title( $original_object->ID );
				}
			} elseif ( 'post_type_archive' === $item->type ) {
					$original_object = get_post_type_object( $item->object );
				if ( $original_object ) {
						$original_title = $original_object->labels->archives;
				}
			}
			$verified = isset( $_REQUEST['menu-settings-column-nonce'] ) && wp_verify_nonce( sanitize_key( $_REQUEST['menu-settings-column-nonce'] ), 'add-menu_item' );
			$active   = isset( $_GET['edit-menu-item'] ) && $item_id === $_GET['edit-menu-item'];

			$classes = array(
				'menu-item menu-item-depth-' . $depth,
				'menu-item-' . esc_attr( $item->object ),
				'menu-item-edit-' . ( $active ? 'active' : 'inactive' ),
			);

			$title = $item->title;

			if ( ! empty( $item->_invalid ) ) {
					$classes[] = 'menu-item-invalid';
					/* translators: %s: Title of an invalid menu item. */
					$title = sprintf( '%s (Invalid)', $item->title );
			} elseif ( isset( $item->post_status ) && 'draft' === $item->post_status ) {
					$classes[] = 'pending';
					/* translators: %s: Title of a menu item in draft status. */
					$title = sprintf( '%s (Pending)', $item->title );
			}

			$title = ( ! isset( $item->label ) || '' === $item->label ) ? $title : $item->label;

			$submenu_text = '';
			if ( 0 === $depth ) {
					$submenu_text = 'style="display: none;"';
			}

			?>
			<li id="menu-item-<?php print esc_attr( $item_id ); ?>" class="<?php print esc_attr( implode( ' ', $classes ) ); ?>">
					<div class="menu-item-bar">
							<div class="menu-item-handle">
									<span class="item-title"><span class="menu-item-title"><?php print esc_html( $title ); ?></span> <span class="is-submenu" <?php print esc_attr( $submenu_text ); ?>>sub item</span></span>
									<span class="item-controls">
											<span class="item-type"><?php print esc_html( $item->type_label ); ?></span>
											<span class="item-order hide-if-js">
													<?php
													printf(
														'<a href="%s" class="item-move-up" aria-label="%s">&#8593;</a>',
														esc_url_raw(
															wp_nonce_url(
																add_query_arg(
																	array(
																		'action'    => 'move-up-menu-item',
																		'menu-item' => $item_id,
																	),
																	remove_query_arg( $removed_args, admin_url( 'nav-menus.php' ) )
																),
																'move-menu_item'
															)
														),
														esc_attr( 'Move up' )
													);
													?>
													|
													<?php
													printf(
														'<a href="%s" class="item-move-down" aria-label="%s">&#8595;</a>',
														esc_url_raw(
															wp_nonce_url(
																add_query_arg(
																	array(
																		'action'    => 'move-down-menu-item',
																		'menu-item' => $item_id,
																	),
																	remove_query_arg( $removed_args, admin_url( 'nav-menus.php' ) )
																),
																'move-menu_item'
															)
														),
														esc_attr( 'Move down' )
													);
													?>
											</span>
											<?php
											if ( isset( $_GET['edit-menu-item'] ) && $item_id === $_GET['edit-menu-item'] ) {
													$edit_url = admin_url( 'nav-menus.php' );
											} else {
													$edit_url = add_query_arg(
														array(
															'edit-menu-item' => $item_id,
														),
														remove_query_arg( $removed_args, admin_url( 'nav-menus.php#menu-item-settings-' . $item_id ) )
													);
											}

											printf(
												'<a class="item-edit" id="edit-%s" href="%s" aria-label="%s"><span class="screen-reader-text">Edit</span></a>',
												esc_attr( $item_id ),
												esc_url( $edit_url ),
												esc_attr( 'Edit menu item' )
											);
											?>
									</span>
							</div>
					</div>

					<div class="menu-item-settings wp-clearfix" id="menu-item-settings-<?php print esc_attr( $item_id ); ?>">
							<?php if ( 'custom' === $item->type ) : ?>
									<p class="field-url description description-wide">
											<label for="edit-menu-item-url-<?php print esc_attr( $item_id ); ?>">
													URL<br />
													<input type="text" id="edit-menu-item-url-<?php print esc_attr( $item_id ); ?>" class="widefat code edit-menu-item-url" name="menu-item-url[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_url( $item->url ); ?>" />
											</label>
									</p>
							<?php endif; ?>
							<p class="description description-wide">
									<label for="edit-menu-item-title-<?php print esc_attr( $item_id ); ?>">
											Navigation Label<br />
											<input type="text" id="edit-menu-item-title-<?php print esc_attr( $item_id ); ?>" class="widefat edit-menu-item-title" name="menu-item-title[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_attr( $item->title ); ?>" />
									</label>
							</p>
							<p class="field-title-attribute field-attr-title description description-wide">
									<label for="edit-menu-item-attr-title-<?php print esc_attr( $item_id ); ?>">
											Title Attribute<br />
											<input type="text" id="edit-menu-item-attr-title-<?php print esc_attr( $item_id ); ?>" class="widefat edit-menu-item-attr-title" name="menu-item-attr-title[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_attr( $item->post_excerpt ); ?>" />
									</label>
							</p>
							<p class="field-link-target description">
									<label for="edit-menu-item-target-<?php print esc_attr( $item_id ); ?>">
											<input type="checkbox" id="edit-menu-item-target-<?php print esc_attr( $item_id ); ?>" value="_blank" name="menu-item-target[<?php print esc_attr( $item_id ); ?>]"<?php checked( $item->target, '_blank' ); ?> />
											Open link in a new tab
									</label>
							</p>
							<p class="field-css-classes description description-thin">
									<label for="edit-menu-item-classes-<?php print esc_attr( $item_id ); ?>">
											CSS Classes (optional)<br />
											<input type="text" id="edit-menu-item-classes-<?php print esc_attr( $item_id ); ?>" class="widefat code edit-menu-item-classes" name="menu-item-classes[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_attr( implode( ' ', $item->classes ) ); ?>" />
									</label>
							</p>
							<p class="field-xfn description description-thin">
									<label for="edit-menu-item-xfn-<?php print esc_attr( $item_id ); ?>">
											Link Relationship (XFN)<br />
											<input type="text" id="edit-menu-item-xfn-<?php print esc_attr( $item_id ); ?>" class="widefat code edit-menu-item-xfn" name="menu-item-xfn[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_attr( $item->xfn ); ?>" />
									</label>
							</p>
							<p class="field-description description description-wide">
									<label for="edit-menu-item-description-<?php print esc_attr( $item_id ); ?>">
											Description<br />
											<textarea id="edit-menu-item-description-<?php print esc_attr( $item_id ); ?>" class="widefat edit-menu-item-description" rows="3" cols="20" name="menu-item-description[<?php print esc_attr( $item_id ); ?>]"><?php print esc_html( $item->description ); ?></textarea>
											<span class="description">The description will be displayed in the menu if the current theme supports it.</span>
									</label>
							</p>

							<?php do_action( 'wp_nav_menu_item_custom_fields', $item_id, $item, $depth, $args ); ?>

							<fieldset class="field-move hide-if-no-js description description-wide">
									<span class="field-move-visual-label" aria-hidden="true">Move</span>
									<button type="button" class="button-link menus-move menus-move-up" data-dir="up">Up one</button>
									<button type="button" class="button-link menus-move menus-move-down" data-dir="down">Down one</button>
									<button type="button" class="button-link menus-move menus-move-left" data-dir="left"></button>
									<button type="button" class="button-link menus-move menus-move-right" data-dir="right"></button>
									<button type="button" class="button-link menus-move menus-move-top" data-dir="top">To the top</button>
							</fieldset>

							<div class="menu-item-actions description-wide submitbox">
									<?php if ( 'custom' !== $item->type && false !== $original_title ) : ?>
											<p class="link-to-original">
													<?php
													/* translators: %s: Link to menu item's original object. */
													printf( 'Original: <a href="%s">%s</a>', esc_url( $item->url ), esc_html( $original_title ) );
													?>
											</p>
									<?php endif; ?>

									<?php
									printf(
										'<a class="item-delete submitdelete deletion" id="delete-%s" href="%s">%s</a>',
										esc_attr( $item_id ),
										esc_url_raw(
											wp_nonce_url(
												add_query_arg(
													array(
														'action'    => 'delete-menu-item',
														'menu-item' => $item_id,
													),
													admin_url( 'nav-menus.php' )
												),
												'delete-menu_item_' . $item_id
											)
										),
										'Remove'
									);
									?>
									<span class="meta-sep hide-if-no-js"> | </span>
									<?php
									printf(
										'<a class="item-cancel submitcancel hide-if-no-js" id="cancel-%s" href="%s#menu-item-settings-%s">%s</a>',
										esc_attr( $item_id ),
										esc_url(
											add_query_arg(
												array(
													'edit-menu-item' => $item_id,
													'cancel'         => time(),
												),
												admin_url( 'nav-menus.php' )
											)
										),
										esc_attr( $item_id ),
										'Cancel'
									);
									?>
							</div>

							<input class="menu-item-data-db-id" type="hidden" name="menu-item-db-id[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_attr( $item_id ); ?>" />
							<input class="menu-item-data-object-id" type="hidden" name="menu-item-object-id[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_attr( $item->object_id ); ?>" />
							<input class="menu-item-data-object" type="hidden" name="menu-item-object[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_attr( $item->object ); ?>" />
							<input class="menu-item-data-parent-id" type="hidden" name="menu-item-parent-id[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_attr( $item->menu_item_parent ); ?>" />
							<input class="menu-item-data-position" type="hidden" name="menu-item-position[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_attr( $item->menu_order ); ?>" />
							<input class="menu-item-data-type" type="hidden" name="menu-item-type[<?php print esc_attr( $item_id ); ?>]" value="<?php print esc_attr( $item->type ); ?>" />
					</div><!-- .menu-item-settings-->
					<ul class="menu-item-transport"></ul>
			<?php
			$output .= ob_get_clean();
		}
	} /* Walker_Nav_Menu_Edit */
}
