<?php
/**
 * File to handle compatibility with WP Simple Firewall (Shield Security) plugin
 *
 * @package ET_Builder_Plugin_Compat_Base
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Plugin compatibility for WP Simple Firewall (Shield Security) plugin.
 *
 * @since 4.8.2
 *
 * @link https://wordpress.org/plugins/wp-simple-firewall/
 */
class ET_Builder_Plugin_Compat_WP_Simple_Firewall extends ET_Builder_Plugin_Compat_Base {

	/**
	 * Plugin ID
	 *
	 * @var string
	 */
	public $plugin_id = 'wp-simple-firewall/icwp-wpsf.php';

	/**
	 * Constructor
	 *
	 * @since 4.8.2
	 */
	public function __construct() {
		$this->init_hooks();
	}

	/**
	 * Hook methods to WordPress
	 *
	 * @since 4.8.2
	 *
	 * @return void
	 */
	public function init_hooks() {
		// Bail if there's no version found or no WP Simple Firewall plugin active or user permission is not sufficient.
		// phpcs:ignore WordPress.Security.NonceVerification -- Just need to check is the query string defined or not.
		if ( ! $this->get_plugin_version() || ! et_pb_is_allowed( 'use_visual_builder' ) || ! et_()->array_get( $_GET, 'et_fb' ) ) {
			return;
		}

		add_filter( 'wp_headers', array( $this, 'maybe_inject_headers' ), PHP_INT_MAX );
	}

	/**
	 * Inject "blob:" property into Content-Security-Policy HTTP header.
	 *
	 * @since 4.8.2
	 *
	 * @param array $headers Associative array of headers to be sent.
	 *
	 * @return array
	 */
	public function maybe_inject_headers( $headers ) {
		if ( ! isset( $headers['Content-Security-Policy'] ) ) {
			return $headers;
		}

		$new_rules = array();

		foreach ( explode( ';', $headers['Content-Security-Policy'] ) as $csp_rule ) {
			$parts = explode( ' ', $csp_rule );

			if ( in_array( $parts[0], array( 'default-src', 'worker-src' ), true ) && false === strpos( $csp_rule, 'blob:' ) ) {
				$csp_rule = implode( ' ', array_merge( array( $parts[0], 'blob:' ), array_slice( $parts, 1 ) ) );
			}

			$new_rules[] = $csp_rule;
		}

		if ( ! empty( $new_rules ) ) {
			$headers['Content-Security-Policy'] = implode( ';', $new_rules );
		}

		return $headers;
	}
}

new ET_Builder_Plugin_Compat_WP_Simple_Firewall();
