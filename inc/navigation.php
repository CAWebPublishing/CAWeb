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

	/* Menu Construction */
	if ( ! empty( $args->menu ) && $args->echo &&
			isset(
				$args->theme_location,
				$args->caweb_nav_type,
				$args->caweb_template_version
			)
		) {

			$template_version = $args->caweb_template_version;

			get_template_part( "parts/$template_version/nav", $args->caweb_nav_type, $args );
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
 * @todo remove icon menu once 5.5 is completely removed.
 * 
 * @param  mixed $item_id Not used.
 * @param  mixed $item Menu item data object.
 * @param  mixed $depth Depth of menu item. Used for padding.
 * @param  mixed $args Not used.
 *
 * @return void
 */
function caweb_nav_menu_item_custom_fields( $item_id, $item, $depth, $args ) {
	$deprecating               = '5.5' === caweb_template_version();
	$icon                      = isset( $tmp['_caweb_menu_icon'][0] ) && ! empty( $tmp['_caweb_menu_icon'][0] ) ? $tmp['_caweb_menu_icon'][0] : '';
	$unit_size                 = isset( $tmp['_caweb_menu_unit_size'][0] ) && ! empty( $tmp['_caweb_menu_unit_size'][0] ) ? $tmp['_caweb_menu_unit_size'][0] : 'unit1';

	$nav_menu_style = get_option( 'ca_default_navigation_menu', 'singlelevel' );

	// unit 3, fallback to unit 2.
	$unit_size = 'unit3' === $unit_size ? 'unit2' : $unit_size;

	$icon                      = isset( $tmp['_caweb_menu_icon'][0] ) && ! empty( $tmp['_caweb_menu_icon'][0] ) ? $tmp['_caweb_menu_icon'][0] : '';
	
	?>
		<div class="caweb-icon-selector <?php print ! $deprecating || 'unit3' === $unit_size ? 'hidden' : ''; ?> description description-wide">
			<?php
			print wp_kses(
				caweb_icon_menu(
					array(
						'select' => $icon,
						'name'   => $item_id . '_icon',
						'header' => 'Select an Icon',
					)
				),
				'post'
			);
			?>
		</div>

		<div class="unit-selector<?php print ! $depth ? ' hidden' : ''; ?> description description-wide">
			<p><strong>Select a height for the navigation item</strong></p>
			<select name="<?php print esc_attr( $item_id ); ?>_unit_size" class="unit-size-selector" id="unit-size-selector-<?php print esc_attr( $item_id ); ?>">
				<option value="unit1"<?php print 'unit1' === $unit_size ? ' selected' : ''; ?>>Unit 1 - 50px height</option>
				<option value="unit2"<?php print 'unit2' === $unit_size ? ' selected' : ''; ?>>Unit 2 - 100px height</option>
			</select>
		</div>
	<?php
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
		$icon                       = isset( $_POST[ $menu_item_db_id . '_icon' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_icon' ] ) ) : '';
		$unit_size                  = isset( $_POST[ $menu_item_db_id . '_unit_size' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_unit_size' ] ) ) : 'unit1';

		update_post_meta( $menu_item_db_id, '_caweb_menu_unit_size', $unit_size );

	}

	return $menu_item_db_id;
}
