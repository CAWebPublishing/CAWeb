<?php
/**
 * Plugin Name:       Ds Feature Card
 * Description:       Design System Web Component Description
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ds-feature-card
 *
 * @package           ca-design-system
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ca_design_system_ds_feature_card_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ca_design_system_ds_feature_card_block_init' );
