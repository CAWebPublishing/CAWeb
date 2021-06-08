<?php
/**
 * Utility functions for checking conditions.
 *
 * To be included in this file a function must:
 *
 *   * Return a bool value
 *   * Have a name that asks a yes or no question (where the first word after
 *     the et_ prefix is a word like: is, can, has, should, was, had, must, or will)
 *
 * @package Divi
 * @subpackage Builder
 * @since 4.0.7
 */

// phpcs:disable Squiz.PHP.CommentedOutCode -- We may add `et_builder_()` in future.

/*
Function Template

if ( ! function_exists( '' ) ):
function et_builder_() {

}
endif;

*/
// phpcs:enable

// Note: Functions in this file are sorted alphabetically.

if ( ! function_exists( 'et_builder_is_loading_data' ) ) :
	/**
	 * Determine whether builder is loading full data or not.
	 *
	 * @param string $type Is it a bb or vb.
	 *
	 * @return bool
	 */
	function et_builder_is_loading_data( $type = 'vb' ) {
		// phpcs:disable WordPress.Security.NonceVerification -- This function does not change any stats, hence CSRF ok.
		if ( 'bb' === $type ) {
			return 'et_pb_get_backbone_templates' === et_()->array_get( $_POST, 'action' );
		}

		$data_actions = array(
			'et_fb_retrieve_builder_data',
			'et_fb_update_builder_assets',
		);

		return isset( $_POST['action'] ) && in_array( $_POST['action'], $data_actions, true );
		// phpcs:enable
	}
endif;

if ( ! function_exists( 'et_builder_should_load_all_data' ) ) :
	/**
	 * Determine whether to load full builder data.
	 *
	 * @return bool
	 */
	function et_builder_should_load_all_data() {
		$needs_cached_definitions = et_core_is_fb_enabled() && ! et_fb_dynamic_asset_exists( 'definitions' );

		return $needs_cached_definitions || ( ET_Builder_ELement::is_saving_cache() || et_builder_is_loading_data() );
	}
endif;

// Note: Functions in this file are sorted alphabetically.
