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
 * @param  mixed $item_id Not used.
 * @param  mixed $item Menu item data object.
 * @param  mixed $depth Depth of menu item. Used for padding.
 * @param  mixed $args Not used.
 *
 * @return void
 */
function caweb_nav_menu_item_custom_fields( $item_id, $item, $depth, $args ) {
	$deprecating               = '5.5' === caweb_template_version();
	$tmp                       = get_post_meta( $item->ID );
	$icon                      = isset( $tmp['_caweb_menu_icon'][0] ) && ! empty( $tmp['_caweb_menu_icon'][0] ) ? $tmp['_caweb_menu_icon'][0] : '';
	$unit_size                 = isset( $tmp['_caweb_menu_unit_size'][0] ) && ! empty( $tmp['_caweb_menu_unit_size'][0] ) ? $tmp['_caweb_menu_unit_size'][0] : 'unit1';
	$mega_menu_img             = isset( $tmp['_caweb_menu_image'][0] ) && ! empty( $tmp['_caweb_menu_image'][0] ) ? $tmp['_caweb_menu_image'][0] : '';
	$mega_menu_side            = isset( $tmp['_caweb_menu_image_side'][0] ) ? $tmp['_caweb_menu_image_side'][0] : 'left';
	$mega_menu_size            = isset( $tmp['_caweb_menu_image_size'][0] ) ? $tmp['_caweb_menu_image_size'][0] : 'quarter';
	$menu_column_count         = isset( $tmp['_caweb_menu_column_count'][0] ) ? $tmp['_caweb_menu_column_count'][0] : '';
	$nav_media_img             = isset( $tmp['_caweb_menu_media_image'][0] ) ? $tmp['_caweb_menu_media_image'][0] : '';
	$nav_media_image_alt_text  = isset( $tmp['_caweb_nav_media_image_alt_text'][0] ) && ! empty( $tmp['_caweb_nav_media_image_alt_text'][0] ) ? $tmp['_caweb_nav_media_image_alt_text'][0] : '';
	$nav_media_image_alignment = isset( $tmp['_caweb_menu_media_image_alignment'][0] ) ? $tmp['_caweb_menu_media_image_alignment'][0] : 'left';
	$flex_border               = isset( $tmp['_caweb_menu_flexmega_border'][0] ) ? $tmp['_caweb_menu_flexmega_border'][0] : '';
	$flex_row                  = isset( $tmp['_caweb_menu_flexmega_row'][0] ) ? $tmp['_caweb_menu_flexmega_row'][0] : '';

	$nav_menu_style = get_option( 'ca_default_navigation_menu', 'singlelevel' );

	$unit_size = 'unit3' === $unit_size && ! in_array( $nav_menu_style, array( 'flexmega', 'megadropdown' ), true ) ? 'unit2' : $unit_size;

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
			<?php if ( in_array( $nav_menu_style, array( 'flexmega', 'megadropdown' ), true ) ) : ?>
				<option value="unit3"<?php print 'unit3' === $unit_size ? ' selected' : ''; ?>>Unit 3 - 100px height w/ Image</option>
			<?php endif; ?>
			</select>
		</div>

		<?php if ( 'flexmega' === $nav_menu_style ) : ?>
		<div class="description description-wide flexmega-row <?php print ! $depth ? ' hidden' : ''; ?>">
			<p>
				<label for="<?php print esc_attr( $item_id ); ?>_flexmega_row"><input type="checkbox" name="<?php print esc_attr( $item_id ); ?>_flexmega_row" id="<?php print esc_attr( $item_id ); ?>_flexmega_row" <?php print $flex_row ? 'checked' : ''; ?> class="new-row"> New Row</label>
			</p>
		</div>

		<div class="description description-wide flexmega-border <?php print ! $depth || ( $depth && ! $flex_row ) ? 'hidden' : ''; ?>">
			<label for="<?php print esc_attr( $item_id ); ?>_flexmega_border"><input type="checkbox" name="<?php print esc_attr( $item_id ); ?>_flexmega_border" id="<?php print esc_attr( $item_id ); ?>_flexmega_border" <?php print $flex_border ? 'checked' : ''; ?>> Add Border</label>
		</div>
		<?php endif; ?>

		<div class="media-image<?php print 'unit3' !== $unit_size ? ' hidden' : ''; ?> description description-wide">
			<p><strong>Navigation Media Image</strong></p>
			<p>Select an Image</p>
			<input name="<?php print esc_attr( $item_id ); ?>_media_image" id="<?php print esc_attr( $item_id ); ?>_media_image" type="text" class="link-text" style="width: 97%;" value="<?php print esc_attr( $nav_media_img ); ?>" />
			<input type="button" class="library-link" value="Browse" id="library-link-<?php print esc_attr( $item_id ); ?>" name="<?php print esc_attr( $item_id ); ?>_media_image" data-choose="Choose a Default Image" data-update="Set as Navigation Media Image" />
			<p>Navigation Media Image Alt Text
			<input name="<?php print esc_attr( $item_id ); ?>_media_image_alt_text" id="<?php print esc_attr( $item_id ); ?>_media_image_alt_text" value="<?php print esc_attr( $nav_media_image_alt_text ); ?>" type="text" /></p>

			<?php if ( 'flexmega' === $nav_menu_style ) : ?>
			<p>Navigation Media Image Alignment</p>
			<label for="<?php print esc_attr( $item_id ); ?>_media_image_alignment_left">
			<input name="<?php print esc_attr( $item_id ); ?>_media_image_alignment" id="<?php print esc_attr( $item_id ); ?>_media_image_alignment_left" value="left" type="radio"<?php print 'left' === $nav_media_image_alignment ? ' checked' : ''; ?>/>Left</label>
			<label for="<?php print esc_attr( $item_id ); ?>_media_image_alignment_top">
			<input name="<?php print esc_attr( $item_id ); ?>_media_image_alignment" id="<?php print esc_attr( $item_id ); ?>_media_image_alignment_top" value="top" type="radio"<?php print 'top' === $nav_media_image_alignment ? ' checked' : ''; ?>/>Top</label>
			<?php endif; ?>
		</div>

		<?php if ( 'megadropdown' === $nav_menu_style ) : ?>
		<div class="mega-menu-images<?php print $depth ? ' hidden' : ''; ?> description description-wide ">
			<p><strong>Mega Menu Image Option</strong></p>
			<p>Select an Image</p>
			<input name="<?php print esc_attr( $item_id ); ?>_image" id="<?php print esc_attr( $item_id ); ?>_image" type="text" class="link-text" style="width: 97%;" value="<?php print esc_attr( $mega_menu_img ); ?>" />
			<input type="button" value="Browse" id="library-link-<?php print esc_attr( $item_id ); ?>" class="library-link" name="<?php print esc_attr( $item_id ); ?>_image" data-choose="Choose a Default Image" data-update="Set as Sub Navigation Image" />
			<p>Select a Side / Select a Size</p>
			<select name="<?php print esc_attr( $item_id ); ?>_image_side">
				<option value="left"<?php print 'left' === $mega_menu_side ? ' selected' : ''; ?>>Left</option>
				<option value="right"<?php print 'right' === $mega_menu_side ? ' selected' : ''; ?>>Right</option>
			</select>
			/
			<select name="<?php print esc_attr( $item_id ); ?>_image_size">
				<option value="quarter"<?php print 'quarter' === $mega_menu_size ? 'selected' : ''; ?>>Quarter</option>
				<option value="half"<?php print 'half' === $mega_menu_size ? 'selected' : ''; ?>>Half</option>
			</select>
			<p>Select a column layout</p>
			<select name="<?php print esc_attr( $item_id ); ?>_column_count">
				<option value=""<?php print empty( $menu_column_count ) ? ' selected' : ''; ?>>Select layout...</option>
				<option value="two-columns"<?php print ! empty( $menu_column_count ) && 'two-columns' === $menu_column_count ? ' selected' : ''; ?>>2 Columns</option>
				<option value="three-columns"<?php print ! empty( $menu_column_count ) && 'three-columns' === $menu_column_count ? ' selected' : ''; ?>>3 Columns</option>
				<option value="four-columns"<?php print ! empty( $menu_column_count ) && 'four-columns' === $menu_column_count ? ' selected' : ''; ?>>4 Columns</option>
			</select>
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
		$icon                       = isset( $_POST[ $menu_item_db_id . '_icon' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_icon' ] ) ) : '';
		$unit_size                  = isset( $_POST[ $menu_item_db_id . '_unit_size' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_unit_size' ] ) ) : 'unit1';
		$item_image                 = isset( $_POST[ $menu_item_db_id . '_image' ] ) ? esc_url_raw( wp_unslash( $_POST[ $menu_item_db_id . '_image' ] ) ) : '';
		$item_image_side            = isset( $_POST[ $menu_item_db_id . '_image_side' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_image_side' ] ) ) : 'left';
		$item_image_size            = isset( $_POST[ $menu_item_db_id . '_image_size' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_image_size' ] ) ) : 'quarter';
		$column_count               = isset( $_POST[ $menu_item_db_id . '_column_count' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_column_count' ] ) ) : '';
		$item_media_image           = isset( $_POST[ $menu_item_db_id . '_media_image' ] ) ? esc_url_raw( wp_unslash( $_POST[ $menu_item_db_id . '_media_image' ] ) ) : '';
		$item_media_image_alt_text  = isset( $_POST[ $menu_item_db_id . '_media_image_alt_text' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_media_image_alt_text' ] ) ) : '';
		$item_media_image_alignment = isset( $_POST[ $menu_item_db_id . '_media_image_alignment' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_media_image_alignment' ] ) ) : '';
		$flexmega_border            = isset( $_POST[ $menu_item_db_id . '_flexmega_border' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_flexmega_border' ] ) ) : '';
		$flexmega_row               = isset( $_POST[ $menu_item_db_id . '_flexmega_row' ] ) ? sanitize_text_field( wp_unslash( $_POST[ $menu_item_db_id . '_flexmega_row' ] ) ) : '';

		update_post_meta( $menu_item_db_id, '_caweb_menu_icon', $icon );
		update_post_meta( $menu_item_db_id, '_caweb_menu_unit_size', $unit_size );
		update_post_meta( $menu_item_db_id, '_caweb_menu_image', $item_image );
		update_post_meta( $menu_item_db_id, '_caweb_menu_image_side', $item_image_side );
		update_post_meta( $menu_item_db_id, '_caweb_menu_image_size', $item_image_size );
		update_post_meta( $menu_item_db_id, '_caweb_menu_column_count', $column_count );
		update_post_meta( $menu_item_db_id, '_caweb_menu_media_image', $item_media_image );
		update_post_meta( $menu_item_db_id, '_caweb_nav_media_image_alt_text', $item_media_image_alt_text );
		update_post_meta( $menu_item_db_id, '_caweb_menu_media_image_alignment', $item_media_image_alignment );
		update_post_meta( $menu_item_db_id, '_caweb_menu_flexmega_border', $flexmega_border );
		update_post_meta( $menu_item_db_id, '_caweb_menu_flexmega_row', $flexmega_row );

	}

	return $menu_item_db_id;
}
