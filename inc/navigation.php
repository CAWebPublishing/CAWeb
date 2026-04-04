<?php
/**
 * CAWeb Navigation Menu
 *
 * @see https://developer.wordpress.org/reference/classes/walker_nav_menu/
 * @see https://core.trac.wordpress.org/browser/tags/5.3/src/wp-includes/class-walker-nav-menu.php
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_filter( 'wp_nav_menu', 'caweb_nav_menu', 10, 2 );
add_filter( 'widget_nav_menu_args', 'caweb_widget_nav_menu_args', 10, 4 );

add_action( 'wp_nav_menu_item_custom_fields', 'caweb_nav_menu_item_custom_fields', 9, 4 );
add_action( 'wp_update_nav_menu_item', 'caweb_update_nav_menu_item', 10, 3 );

/**
 * Filters the HTML content for navigation menus.
 *
 * @link https://developer.wordpress.org/reference/hooks/wp_nav_menu/
 * @param  string   $nav_menu The HTML content for the navigation menu.
 * @param  stdClass $args An object containing wp_nav_menu() arguments.
 *
 * @return string
 */
function caweb_nav_menu( $nav_menu, $args ) {
	// In the event that a plugin is using the wp_nav_menu filter with the same arguments.
	// we check for the $args->theme = 'CAWeb' to prevent duplicate menus from rendering.

	/* Menu Construction */
	if ( ! empty( $args->menu ) && $args->echo &&
			isset(
				$args->theme,
				$args->theme_location,
				$args->caweb_nav_type
			) &&
			'CAWeb' === $args->theme
		) {

		get_template_part( "parts/nav", $args->caweb_nav_type, $args );
	} else {
		return $nav_menu;
	}
}

/**
 * Filters the arguments for the Navigation Menu widget.
 *
 * @link https://developer.wordpress.org/reference/hooks/widget_nav_menu_args/
 * @param  array   $nav_menu_args An array of arguments passed to wp_nav_menu() to retrieve a navigation menu.
 * @param  WP_Term $nav_menu Nav menu object for the current menu.
 * @param  array   $args Display arguments for the current widget.
 * @param  array   $instance Array of settings for the current widget.
 *
 * @return array
 */
function caweb_widget_nav_menu_args( $nav_menu_args, $nav_menu, $args, $instance ) {
	if ( isset( $nav_menu_args['menu'] ) ) {
		$args['echo'] = false;

		get_template_part( 'parts/nav', 'widget', $nav_menu_args );
	}

	return $args;
}

/**
 * CAWeb wp nav menu item custom fields.
 *
 * @param  mixed $item_id Not used.
 * @param  mixed $item Menu item data object.
 * @param  mixed $depth Depth of menu item. Used for padding.
 * @param  mixed $args Not used.
 *
 * @return void
 */
function caweb_nav_menu_item_custom_fields( $item_id, $item, $depth, $args ) {
	$tmp       = get_post_meta( $item->ID );
	$unit_size = isset( $tmp['_caweb_menu_unit_size'][0] ) && ! empty( $tmp['_caweb_menu_unit_size'][0] ) ? $tmp['_caweb_menu_unit_size'][0] : 'unit1';
	$mega_menu_row              = isset( $tmp['_caweb_menu_mega_row'][0] ) ? $tmp['_caweb_menu_mega_row'][0] : false;
	$mega_menu_border           = isset( $tmp['_caweb_menu_mega_border'][0] ) ? $tmp['_caweb_menu_mega_border'][0] : false;
	$nav_media_alignment       = isset( $tmp['_caweb_menu_media_alignment'][0] ) ? $tmp['_caweb_menu_media_alignment'][0] : 'left';
	$nav_media_type 			= isset( $tmp['_caweb_menu_media_type'][0] ) ? $tmp['_caweb_menu_media_type'][0] : 'icon';
	$nav_media_img             = isset( $tmp['_caweb_menu_media_image'][0] ) ? $tmp['_caweb_menu_media_image'][0] : '';
	$nav_media_image_alt_text  = isset( $tmp['_caweb_menu_media_image_alt_text'][0] ) && ! empty( $tmp['_caweb_menu_media_image_alt_text'][0] ) ? $tmp['_caweb_menu_media_image_alt_text'][0] : '';
	$icon                      = isset( $tmp['_caweb_menu_icon'][0] ) && ! empty( $tmp['_caweb_menu_icon'][0] ) ? $tmp['_caweb_menu_icon'][0] : '';
	
	$is_mega = 'megadropdown' === get_option( 'ca_default_navigation_menu', 'singlelevel' );

	// unit 3 is only for mega menus, fallback to unit 2.
	$unit_size = 'unit3' === $unit_size && ! $is_mega ? 'unit2' : $unit_size;
	
	?>
		<p class="description description-wide">
			<label for="field-unit-size-selector-<?php print esc_attr( $item_id ); ?>">Select a height for the navigation item</label>
			<select name="<?php print esc_attr( $item_id ); ?>_unit_size" class="field-unit-size-selector" id="field-unit-size-selector-<?php print esc_attr( $item_id ); ?>">
				<option value="unit1"<?php print 'unit1' === $unit_size ? ' selected' : ''; ?>>Unit 1 - 50px height</option>
				<option value="unit2"<?php print 'unit2' === $unit_size ? ' selected' : ''; ?>>Unit 2 - 100px height</option>
				<?php if ( $is_mega ) : ?>
					<option value="unit3"<?php print 'unit3' === $unit_size ? ' selected' : ''; ?>>Unit 3 - 100px height w/ Image</option>
				<?php endif; ?>
			</select>
		</p>
	<?php
	if( $is_mega ) :
	?>
		<div class="megamenu-description-group">
			<strong>Row Options</strong>
			<div class="d-flex">
				<p class="description description-wide flex-grow-1">
					<label for="mega-row-<?php print esc_attr( $item_id ); ?>" class="cursor-pointer">
						<input type="checkbox" name="<?php print esc_attr( $item_id ); ?>_mega_row" id="mega-row-<?php print esc_attr( $item_id ); ?>"<?php print $mega_menu_row ? ' checked' : ''; ?> /> 
						New Row
					</label>
				</p>
				<p class="description description-wide flex-grow-1">
					<label for="mega-border-<?php print esc_attr( $item_id ); ?>" class="cursor-pointer">
						<input type="checkbox" name="<?php print esc_attr( $item_id ); ?>_mega_border" id="mega-border-<?php print esc_attr( $item_id ); ?>"<?php print $mega_menu_border ? ' checked' : ''; ?> /> 
						Add Border
					</label>
				</p>
			</div>

			<strong>Media Options</strong>
			<p class="mb-0">Alignment</p>
			<div class="d-flex">
				<p class="description description-wide flex-grow-1">
					<label for="media-align-left-<?php print esc_attr( $item_id ); ?>" class="cursor-pointer">
						<input type="radio" name="<?php print esc_attr( $item_id ); ?>_media_alignment" id="media-align-left-<?php print esc_attr( $item_id ); ?>" value="left"<?php print 'left' === $nav_media_alignment ? ' checked' : ''; ?> /> 
						Left
					</label>
				</p>
				<p class="description description-wide flex-grow-1">
					<label for="media-align-top-<?php print esc_attr( $item_id ); ?>" class="cursor-pointer">
						<input type="radio" name="<?php print esc_attr( $item_id ); ?>_media_alignment" id="media-align-top-<?php print esc_attr( $item_id ); ?>" value="top"<?php print 'top' === $nav_media_alignment ? ' checked' : ''; ?> /> 
						Top
					</label>
				</p>
			</div>
			<p class="mb-0">Type</p>
			<div class="d-flex">
				<p class="description description-wide flex-grow-1">
					<label for="media-type-icon-<?php print esc_attr( $item_id ); ?>" class="cursor-pointer">
						<input type="radio" name="<?php print esc_attr( $item_id ); ?>_media_type" id="media-type-icon-<?php print esc_attr( $item_id ); ?>" value="icon"<?php print 'icon' === $nav_media_type ? ' checked' : ''; ?> class="field-media-type-selector"/> 
						Icon
					</label>
				</p>
				<p class="description description-wide flex-grow-1">
					<label for="media-type-image-<?php print esc_attr( $item_id ); ?>" class="cursor-pointer">
						<input type="radio" name="<?php print esc_attr( $item_id ); ?>_media_type" id="media-type-image-<?php print esc_attr( $item_id ); ?>" value="image"<?php print 'image' === $nav_media_type ? ' checked' : ''; ?> class="field-media-type-selector"/> 
						Image
					</label>
				</p>
			</div>

			<div class="field-icon-selector<?php print 'icon' === $nav_media_type ? '' : ' hidden-field'; ?>">
				<?php
					print wp_kses(
						caweb_icon_menu(
							array(
								'select' => $icon,
								'name'   => "{$item_id}_icon",
								'header' => 'Select an Icon',
							)
						),
						'post'
					);
				?>
			</div>
			<div class="field-image-selector<?php print 'image' === $nav_media_type ? '' : ' hidden-field'; ?>">
				<label for="media-image-<?php print esc_attr( $item_id ); ?>">Select an Image</label>
				<div class="input-group">
					<input name="<?php print esc_attr( $item_id ); ?>_media_image" id="media-image-<?php print esc_attr( $item_id ); ?>" type="text" class="form-control" value="<?php print esc_attr( $nav_media_img ); ?>" />
					<input type="button" class="library-link btn btn-outline-secondary" value="Browse" id="library-link-<?php print esc_attr( $item_id ); ?>" name="<?php print esc_attr( $item_id ); ?>_media_image" data-choose="Choose a Default Image" data-update="Set as Navigation Media Image" />
				</div>
				<label for="<?php print esc_attr( $item_id ); ?>_media_image_alt_text">Image Alt Text</label>
				<input class="form-control" name="<?php print esc_attr( $item_id ); ?>_media_image_alt_text" id="<?php print esc_attr( $item_id ); ?>_media_image_alt_text" value="<?php print esc_attr( $nav_media_image_alt_text ); ?>" type="text" />
			</div>
		</div>

	<?php
	endif;
}

/**
 * Fires after a navigation menu item has been updated.
 * Save menu custom fields that are added on to ca_custom_nav_walker.
 *
 * @param  int   $menu_id ID of the updated menu.
 * @param  int   $menu_item_db_id ID of the updated menu item.
 * @param  array $args An array of arguments used to update a menu item.
 *
 * @return int
 */
function caweb_update_nav_menu_item( $menu_id, $menu_item_db_id, $args ) {
	$verified = isset( $_POST['update-nav-menu-nonce'] ) &&
		wp_verify_nonce( sanitize_key( $_POST['update-nav-menu-nonce'] ), 'update-nav_menu' );

	/* Check if element is properly sent */
	if ( $verified && isset( $_POST['menu-item-db-id'] ) ) {
		$unit_size = isset( $_POST[ "{$menu_item_db_id}_unit_size" ] ) ? sanitize_text_field( wp_unslash( $_POST[ "{$menu_item_db_id}_unit_size" ] ) ) : 'unit1';
		$mega_menu_row = isset( $_POST[ "{$menu_item_db_id}_mega_row" ] ) ? sanitize_text_field( wp_unslash( $_POST[ "{$menu_item_db_id}_mega_row" ] ) ) : false;
		$mega_menu_border = isset( $_POST[ "{$menu_item_db_id}_mega_border" ] ) ? sanitize_text_field( wp_unslash( $_POST[ "{$menu_item_db_id}_mega_border" ] ) ) : false;
		$nav_media_alignment       = isset( $_POST["{$menu_item_db_id}_media_alignment"] ) ? sanitize_text_field( wp_unslash( $_POST["{$menu_item_db_id}_media_alignment"] ) ) : 'left';
		$nav_media_type       = isset( $_POST["{$menu_item_db_id}_media_type"] ) ? sanitize_text_field( wp_unslash( $_POST["{$menu_item_db_id}_media_type"] ) ) : 'icon';
		$nav_media_img       = isset( $_POST["{$menu_item_db_id}_media_image"] ) ? sanitize_text_field( wp_unslash( $_POST["{$menu_item_db_id}_media_image"] ) ) : '';
		$nav_media_image_alt_text       = isset( $_POST["{$menu_item_db_id}_media_image_alt_text"] ) ? sanitize_text_field( wp_unslash( $_POST["{$menu_item_db_id}_media_image_alt_text"] ) ) : '';
		$icon       = isset( $_POST["{$menu_item_db_id}_icon"] ) ? sanitize_text_field( wp_unslash( $_POST["{$menu_item_db_id}_icon"] ) ) : '';
		
		update_post_meta( $menu_item_db_id, '_caweb_menu_unit_size', $unit_size );
		update_post_meta( $menu_item_db_id, '_caweb_menu_mega_row', $mega_menu_row );
		update_post_meta( $menu_item_db_id, '_caweb_menu_mega_border', $mega_menu_border );
		update_post_meta( $menu_item_db_id, '_caweb_menu_media_alignment', $nav_media_alignment );
		update_post_meta( $menu_item_db_id, '_caweb_menu_media_type', $nav_media_type );
		update_post_meta( $menu_item_db_id, '_caweb_menu_media_image', $nav_media_img );
		update_post_meta( $menu_item_db_id, '_caweb_menu_media_image_alt_text', $nav_media_image_alt_text );
		update_post_meta( $menu_item_db_id, '_caweb_menu_icon', $icon );
	}

	return $menu_item_db_id;
}
