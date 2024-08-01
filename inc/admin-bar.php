<?php
/**
 * CAWeb Admin Bar
 *
 * @link https://developer.wordpress.org/reference/classes/wp_admin_bar/
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'admin_bar_menu', 'caweb_admin_bar_menu', 9999 );

/**
 * Load all necessary CAWeb Admin Bar items.
 *
 * 
 * @wp_action add_action( 'admin_bar_menu', 'caweb_admin_bar_menu', 9999 );
 * @since 6.6.1 priorty was increased to 9999 so we bumped ours up as well.
 * @param  WP_Admin_Bar $wp_admin_bar WP_Admin_Bar instance, passed by reference.
 * @return void
 */
function caweb_admin_bar_menu( $wp_admin_bar ) {
	/* Remove WP Admin Bar Nodes */
	$wp_admin_bar->remove_node( 'themes' );
	$wp_admin_bar->remove_node( 'menus' );
	$wp_admin_bar->remove_node( 'customize-divi-theme' );
	$wp_admin_bar->remove_node( 'customize-divi-module' );

	if ( current_user_can( 'manage_options' ) ) {
		/* Add CAWeb WP Admin Bar Nodes */
		$wp_admin_bar->add_node(
			array(
				'id'     => 'caweb-options',
				'title'  => 'CAWeb Options',
				'href'   => get_admin_url() . 'admin.php?page=caweb_options',
				'parent' => 'site-name',
			)
		);
		/* Add (Menu) Navigation Node */
		$wp_admin_bar->add_node(
			array(
				'id'     => 'caweb-navigation',
				'title'  => 'Navigation',
				'href'   => get_admin_url() . 'nav-menus.php',
				'parent' => 'site-name',
			)
		);
	}

	/*
	If multisite instance
	*/
	if ( is_multisite() ) {
		// user can manage network options.
		if ( current_user_can( 'manage_network_options' ) ) {
			/* If on root site */
			if ( 1 === get_current_blog_id() ) {
				/* Add Multisite Google Analytics Menu */
				$wp_admin_bar->add_node(
					array(
						'id'     => 'caweb-multi-ga',
						'title'  => 'Multisite GA',
						'href'   => get_admin_url() . 'admin.php?page=caweb_multi_ga',
						'parent' => 'site-name',
					)
				);
				/* Add GitHub API Key Menu */
				$wp_admin_bar->add_node(
					array(
						'id'     => 'caweb-api',
						'title'  => 'GitHub API Key',
						'href'   => get_admin_url() . 'admin.php?page=caweb_api',
						'parent' => 'site-name',
					)
				);
			}
		} else {
			/* Remove Visual Builder */
			$wp_admin_bar->remove_node( 'et-use-visual-builder' );
		}
	} else {
		/* Add GitHub API Key Menu */
		$wp_admin_bar->add_node(
			array(
				'id'     => 'caweb-api',
				'title'  => 'GitHub API Key',
				'href'   => get_admin_url() . 'admin.php?page=caweb_api',
				'parent' => 'site-name',
			)
		);
	}

	/*
		Replace default WP Greeting
	*/
	$my_account = $wp_admin_bar->get_node( 'my-account' );
	$newtext    = str_replace( 'Howdy,', 'Logged in as:', $my_account->title );

	$wp_admin_bar->add_node(
		array(
			'id'    => 'my-account',
			'title' => $newtext,
		)
	);
}
