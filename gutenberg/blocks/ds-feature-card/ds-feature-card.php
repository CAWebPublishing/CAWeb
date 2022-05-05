<?php
/**
 * Plugin Name:       Ds Feature Card
 * Description:       Design System component description, pull from design system website or project assets from PM
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ds-feature-card
 *
 * @package           cagov-design-system
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function cagov_design_system_ds_feature_card_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'cagov_design_system_ds_feature_card_block_init' );
