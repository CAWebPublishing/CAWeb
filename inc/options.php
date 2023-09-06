<?php
/**
 * Main CAWeb Options File
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'admin_menu', 'caweb_admin_menu' );
add_action( 'admin_menu', 'caweb_remove_admin_menus', 999 );
add_action( 'load-themes.php', 'caweb_load_themes_tools' );
add_action( 'settings_page_disable_rest_api_settings', 'caweb_load_themes_tools' );
add_action( 'load-tools.php', 'caweb_load_themes_tools' );
add_action( 'pre_update_site_option_caweb_password', 'caweb_pre_update_site_option_caweb_password', 10, 3 );

add_filter( 'custom_menu_order', 'caweb_wpse_custom_menu_order', 10, 1 );
add_filter( 'menu_order', 'caweb_wpse_custom_menu_order', 10, 1 );
add_filter( 'option_ca_site_color_scheme', 'caweb_ca_site_color_scheme', 10, 2 );
add_filter( 'option_ca_fav_ico', 'caweb_pre_option_ca_fav_ico', 10, 2 );

/**
 * This filter is used to switch menu order.
 *
 * @see https://codex.wordpress.org/Plugin_API/Filter_Reference/custom_menu_order
 * @see https://codex.wordpress.org/Plugin_API/Filter_Reference/menu_order
 * @param  mixed $menu_ord Whether custom ordering is enabled. Default false.
 * @return array|boolean
 */
function caweb_wpse_custom_menu_order( $menu_ord ) {
	if ( ! $menu_ord ) {
		return true;
	}

	return array(
		'index.php', // Dashboard.
		'caweb_options', // CAWeb Options.
		'separator1', // First separator.
		'edit.php', // Posts.
		'upload.php', // Media.
		'link-manager.php', // Links.
		'edit-comments.php', // Comments.
		'edit.php?post_type=page', // Pages.
		'separator2', // Second separator.
		'themes.php', // Appearance.
		'plugins.php', // Plugins.
		'users.php', // Users.
		'tools.php', // Tools.
		'options-general.php', // Settings.
		'separator-last', // Last separator.
	);
}

/**
 * CAWeb Administration Menu Setup
 * Fires before the administration menu loads in the admin.
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_menu/
 * @return void
 */
function caweb_admin_menu() {
	global $submenu;

	/* Add CAWeb Options */
	add_menu_page(
		'CAWeb Options',
		'CAWeb Options',
		'manage_options',
		'caweb_options',
		'caweb_option_page',
		sprintf( '%1$s/src/images/system/caweb_logo.png', CAWEB_URI ),
		6
	);
	add_submenu_page( 'caweb_options', 'CAWeb Options', 'Settings', 'manage_options', 'caweb_options', 'caweb_option_page' );

	/* Remove Menus and re-add it under the newly created CAWeb Options as Navigation */
	remove_submenu_page( 'themes.php', 'nav-menus.php' );
	add_submenu_page( 'caweb_options', 'Navigation', 'Navigation', 'manage_options', 'nav-menus.php', '' );

	/* If Multisite instance & user is a Network Admin */
	if ( is_multisite() && current_user_can( 'manage_network_options' ) ) {
		// Add Upload Files Organize my uploads into month- and year-based folders option for multisite.
		register_setting(
			'media',
			'caweb_uploads_use_yearmonth_folders',
			array(
				'type'    => 'boolean',
				'default' => '1',
			)
		);
		add_settings_field( 'caweb_uploads_use_yearmonth_folders', 'Uploading Files', 'caweb_uploads_use_yearmonth_folders', 'media', 'default', array( 'label_for' => 'caweb_uploads_use_yearmonth_folders' ) );

		/* If on root site */
		if ( 1 === get_current_blog_id() ) {
			/* Multisite Google Analytics */
			add_submenu_page( 'caweb_options', 'CAWeb Options', 'Multisite GA', 'manage_options', 'caweb_multi_ga', 'caweb_multi_ga_menu_option_setup' );
			/* GitHub API Key */
			add_submenu_page( 'caweb_options', 'CAWeb Options', 'GitHub API Key', 'manage_options', 'caweb_api', 'caweb_api_menu_option_setup' );
		}

		/* Else single site instance */
	} else {
		/* GitHub API Key */
		add_submenu_page( 'caweb_options', 'CAWeb Options', 'GitHub API Key', 'manage_options', 'caweb_api', 'caweb_api_menu_option_setup' );
	}

}

/**
 * Renders File Uploads by year/month option
 *
 * @return void
 */
function caweb_uploads_use_yearmonth_folders() {
	?>
<label for="caweb_uploads_use_yearmonth_folders">
<input name="caweb_uploads_use_yearmonth_folders" type="checkbox" id="caweb_uploads_use_yearmonth_folders" value="1"<?php checked( '1', get_option( 'caweb_uploads_use_yearmonth_folders', true ) ); ?> />
	Organize my uploads into YYYY/MM based folders
</label>
	<?php
}

/**
 * CAWeb Administration Menu Setup
 * Fires before the administration menu loads in the admin.
 *
 * @link https://developer.wordpress.org/reference/hooks/admin_menu/
 * @return void
 */
function caweb_remove_admin_menus() {
	global $submenu;

	/* If Multisite instance & user is not a Network Admin */
	if ( is_multisite() && ! current_user_can( 'manage_network_options' ) ) {
		/* Remove Themes and Background option under Appearance menu */
		if ( isset( $submenu['themes.php'] ) ) {
			foreach ( $submenu['themes.php'] as $m => $menu_data ) {
				if ( 'Background' === $menu_data[0] || preg_match( '/\bthemes.php\b|\bcustom-background\b/', $menu_data[2] ) ) {
					unset( $submenu['themes.php'][ $m ] );
				}
			}
		}

		/* Remove WP-Forms Addons Menus */
		remove_submenu_page( 'wpforms-overview', 'wpforms-addons' );

		/* Removal of Tools Submenu Pages */
		remove_submenu_page( 'tools.php', 'tools.php' );
		remove_submenu_page( 'tools.php', 'import.php' );
		remove_submenu_page( 'tools.php', 'ms-delete-site.php' );
		remove_submenu_page( 'tools.php', 'domainmapping' );

		/* Removal of Divi Submenu Pages */
		remove_submenu_page( 'et_divi_options', 'et_divi_options' );
		remove_submenu_page( 'et_divi_options', 'et_theme_builder' );
		remove_submenu_page( 'et_divi_options', 'customize.php?et_customizer_option_set=theme' );
		remove_submenu_page( 'et_divi_options', 'customize.php?et_customizer_option_set=module' );
		remove_submenu_page( 'et_divi_options', 'et_divi_role_editor' );

		// Remove Disable Rest API setting.
		remove_submenu_page( 'options-general.php', 'disable_rest_api_settings' );

	}
}

/**
 * If direct access to certain menus is accessed
 * redirect to admin page
 *
 * @return void
 */
function caweb_load_themes_tools() {
	$plugin_menus = array( '404pagesettings', 'disable_rest_api_settings' );
	$nonce        = wp_create_nonce( 'caweb_load_themes_tools' );
	$allowed      = wp_verify_nonce( $nonce, 'caweb_load_themes_tools' ) && isset( $_GET['page'] ) && in_array( $_GET['page'], $plugin_menus, true );

	if ( $allowed && is_multisite() && ! current_user_can( 'manage_network_options' ) ) {
		wp_safe_redirect( get_admin_url() );
		exit;
	}
}

/**
 * Filters the GitHub API caweb_password option before its value is updated.
 *
 * @link https://developer.wordpress.org/reference/hooks/pre_update_site_option_option/
 *
 * @param  mixed $value New value of the network option.
 * @param  mixed $old_value Old value of the network option.
 * @param  mixed $option Option name.
 *
 * @return string
 */
function caweb_pre_update_site_option_caweb_password( $value, $old_value, $option ) {
	$pwd = $value;

	if ( base64_decode( $value ) === $old_value ) {
		$pwd = $old_value;
	}

	return $pwd;
}

/**
 * Setup CAWeb Options Menu
 *
 * @return void
 */
function caweb_option_page() {

	/* The actual menu file */
	get_template_part( 'partials/options' );
}

/**
 * Setup CAWeb API Menu
 *
 * @return void
 */
function caweb_api_menu_option_setup() {
	// if saving.
	if ( isset( $_POST['caweb_api_options_submit'], $_POST['caweb_theme_api_options_nonce'] ) &&
	wp_verify_nonce( sanitize_key( $_POST['caweb_theme_api_options_nonce'] ), 'caweb_theme_api_options' ) ) {
		caweb_save_api_options( $_POST, $_FILES );
	}

	// CAWeb API Nonce.
	$caweb_nonce      = wp_create_nonce( 'caweb_theme_api_options' );
	$privated_enabled = get_site_option( 'caweb_private_theme_enabled', false ) ? ' checked' : '';
	$username         = get_site_option( 'caweb_username', 'CA-CODE-Works' );
	$password         = get_site_option( 'caweb_password', '' );
	?>
	<form id="caweb-api-options-form" action="<?php print esc_url( admin_url( 'admin.php?page=caweb_api' ) ); ?>" method="POST">
		<input type="hidden" name="caweb_theme_api_options_nonce" value="<?php print esc_attr( $caweb_nonce ); ?>" />
		<h2>GitHub API Key</h2>
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="caweb_private_theme_enabled">Is Private?</label>
				<input type="checkbox" name="caweb_private_theme_enabled" class="form-control" size="50"<?php print esc_attr( $privated_enabled ); ?>/>
				<small class="text-muted d-block">Is this theme hosted as a private repo?</small>
			</div>
		</div>
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="caweb_username" class="d-block mb-0">Username</label>
				<small class="text-muted">Setting this feature enables us to update the theme through GitHub</small>
				<input type="text" name="caweb_username" class="form-control" size="50" value="<?php print esc_attr( $username ); ?>" placeholder="Default: CA-CODE-Works" />
			</div>
		</div>
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="caweb_password" class="d-block mb-0">Token</label>
				<small class="text-muted">Setting this feature enables us to update the theme through GitHub</small>
				<input type="password" class="form-control" name="caweb_password" size="50" value="<?php print esc_attr( $password ); ?>" />
			</div>
		</div>
		<input type="submit" name="caweb_api_options_submit" id="submit" class="button button-primary" value="Save Changes" />
	</form>
	<?php
}

/**
 * Setup Multisite Google Analytics Menu
 *
 * @return void
 */
function caweb_multi_ga_menu_option_setup() {
	// if saving.
	if ( isset( $_POST['caweb_multi_ga_options_submit'], $_POST['caweb_theme_multisite_ga_option_nonce'] ) &&
	wp_verify_nonce( sanitize_key( $_POST['caweb_theme_multisite_ga_option_nonce'] ), 'caweb_theme_multisite_ga_option' ) ) {
		caweb_save_multi_ga_options( $_POST, $_FILES );
	}

	// CAWeb Multisite Google Analytics Nonce.
	$caweb_nonce = wp_create_nonce( 'caweb_theme_multisite_ga_option' );
	$mulit_ga    = get_site_option( 'caweb_multi_ga', '' );
	$mulit_ga4   = get_site_option( 'caweb_multi_ga4', '' );

	?>
	<form id="caweb-multi-ga-options-form" action="<?php print esc_url( admin_url( 'admin.php?page=caweb_multi_ga' ) ); ?>" method="POST">
		<input type="hidden" name="caweb_theme_multisite_ga_option_nonce" value="<?php print esc_attr( $caweb_nonce ); ?>" />
		<h2>Multisite Google Analytics</h2>
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="caweb_multi_ga" class="d-block mb-0">Analytics ID</label>
				<input type="text" name="caweb_multi_ga" class="form-control" size="50" value="<?php print esc_attr( $mulit_ga ); ?>" />
			</div>
		</div>
		<div class="row">
			<div class="mb-3 col-sm-5">
				<label for="caweb_multi_ga4" class="d-block mb-0">Analytics 4 ID</label>
				<input type="text" name="caweb_multi_ga4" class="form-control" size="50" value="<?php print esc_attr( $mulit_ga4 ); ?>" />
			</div>
		</div>
		<input type="submit" name="caweb_multi_ga_options_submit" id="submit" class="button button-primary" value="Save Changes" />
	</form>
	<?php
}

/**
 * Save CAWeb Options
 *
 * @param  array $values CAWeb option values.
 * @param  array $files CAWeb files being uploaded.
 *
 * @return void
 */
function caweb_save_options( $values = array(), $files = array() ) {
	$site_options = caweb_get_site_options();
	$ext_css_dir  = CAWEB_EXTERNAL_DIR . 'css';
	$ext_js_dir   = CAWEB_EXTERNAL_DIR . 'js';

	/* Remove unneeded values */
	unset( $values['tab_selected'], $values['caweb_options_submit'] );

	// iterate over site options.
	foreach ( $site_options as $option_name => $default_value ) {
		// if site option isn't set, set it to default value.
		if ( ! array_key_exists( $option_name, $values ) ) {
			// we don't set options with boolean defaults, otherwise there's no way to turn those options off.
			// if the option was turned off then the option won't appear in the $values array.
			$values[ $option_name ] = ! is_bool( $default_value ) ? $default_value : false;
		}
	}

	/* External CSS */
	$cssfiles = array();
	if ( isset( $files['caweb_external_css'] ) ) {
		$css       = $files['caweb_external_css'];
		$css_count = count( $files['caweb_external_css']['name'] );
		for ( $c = 0; $c < $css_count; $c++ ) {
			$data['name']     = $css['name'][ $c ];
			$data['type']     = $css['type'][ $c ];
			$data['tmp_name'] = $css['tmp_name'][ $c ];
			$data['error']    = $css['error'][ $c ];
			$data['size']     = $css['size'][ $c ];

			$cssfiles[ $css['name'][ $c ] ] = $data;
		}

		caweb_upload_external_files( $ext_css_dir, get_option( 'caweb_external_css', array() ), $values['caweb_external_css'], $cssfiles );
	}

	/* External JS */
	$jsfiles = array();
	if ( isset( $files['caweb_external_js'] ) ) {
		$js       = $files['caweb_external_js'];
		$js_count = count( $files['caweb_external_js']['name'] );
		for ( $j = 0; $j < $js_count; $j++ ) {
			$data['name']     = $js['name'][ $j ];
			$data['type']     = $js['type'][ $j ];
			$data['tmp_name'] = $js['tmp_name'][ $j ];
			$data['error']    = $js['error'][ $j ];
			$data['size']     = $js['size'][ $j ];

			$jsfiles[ $js['name'][ $j ] ] = $data;
		}

		caweb_upload_external_files( $ext_js_dir, get_option( 'caweb_external_js', array() ), $values['caweb_external_js'], $jsfiles );
	}

	/* Alert Banners */
	$alerts = array();

	// Alert Status uses bootstrap input toggle checkboxes.
	// For some reason, when checked it visually looks off.
	// So we save the opposite, so that it displays correctly.
	foreach ( preg_grep( '/alert-header-/', array_keys( $values ) ) as $k ) {
		$i    = substr( $k, strrpos( $k, '-' ) + 1 );
		$data = array(
			'status'       => isset( $values[ "alert-status-$i" ] ) ? '' : 'on',
			'header'       => isset( $values[ "alert-header-$i" ] ) ? $values[ "alert-header-$i" ] : '',
			'message'      => isset( $values[ "alert-message-$i" ] ) ? $values[ "alert-message-$i" ] : '',
			'page_display' => isset( $values[ "alert-display-$i" ] ) ? $values[ "alert-display-$i" ] : 'home',
			'color'        => isset( $values[ "alert-banner-color-$i" ] ) ? $values[ "alert-banner-color-$i" ] : '#FDB81E',
			'button'       => isset( $values[ "alert-read-more-$i" ] ) ? $values[ "alert-read-more-$i" ] : '',
			'url'          => isset( $values[ "alert-read-more-url-$i" ] ) ? $values[ "alert-read-more-url-$i" ] : '',
			'text'         => isset( $values[ "alert-read-more-text-$i" ] ) ? $values[ "alert-read-more-text-$i" ] : '',
			'target'       => isset( $values[ "alert-read-more-target-$i" ] ) ? $values[ "alert-read-more-target-$i" ] : '',
			'icon'         => isset( $values[ "alert-icon-$i" ] ) ? $values[ "alert-icon-$i" ] : '',
		);

		$alerts[] = $data;

	}

	$values['caweb_alerts'] = $alerts;

	/* Save CAWeb Options */
	foreach ( $values as $opt => $val ) {
		switch ( $opt ) {
			case 'caweb_external_css':
				$val = array_merge( $val, array_diff( array_keys( $cssfiles ), $val ) );
				break;
			case 'caweb_external_js':
				$val = array_merge( $val, array_diff( array_keys( $jsfiles ), $val ) );
				break;
			case 'caweb_live_drafts':
			case 'caweb_debug_mode':
			default:
				if ( 'on' === $val ) {
					$val = true;
				}
		}

		update_option( $opt, $val );
	}

	print '<div class="updated notice is-dismissible"><p><strong>CAWeb Options</strong> have been updated.</p><button type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></button></div>';
}

/**
 * Save API Values
 *
 * @param  mixed $values CAWeb API Values.
 *
 * @return void
 */
function caweb_save_api_options( $values = array() ) {
	update_site_option( 'caweb_private_theme_enabled', isset( $values['caweb_private_theme_enabled'] ) ? true : false );
	update_site_option( 'caweb_username', ! empty( $values['caweb_username'] ) ? $values['caweb_username'] : 'CAWebPublishing' );
	update_site_option( 'caweb_password', $values['caweb_password'] );

	print '<div class="updated notice is-dismissible"><p><strong>API Key</strong> has been updated.</p><button type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></button></div>';
}


/**
 * Save Multisite GA Values
 *
 * @param  mixed $values CAWeb Multisite GA Values.
 *
 * @return void
 */
function caweb_save_multi_ga_options( $values = array() ) {
	update_site_option( 'caweb_multi_ga', $values['caweb_multi_ga'] );
	update_site_option( 'caweb_multi_ga4', $values['caweb_multi_ga4'] );

	print '<div class="updated notice is-dismissible"><p><strong>Multisite Google Analytics ID</strong> has been updated.</p><button type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></button></div>';
}

/**
 * Returns and array of just the CA Site Options
 *
 * @param  string $group CAWeb group of options to retrieve.
 *
 * @return array
 */
function caweb_get_site_options( $group = '' ) {
	$caweb_general_options = array(
		'ca_fav_ico'                    => caweb_default_favicon_url(),
		'ca_site_version'               => CAWEB_MINIMUM_SUPPORTED_TEMPLATE_VERSION,
		'ca_default_navigation_menu'    => 'singlelevel',
		'ca_site_color_scheme'          => 'oceanside',
		'ca_frontpage_search_enabled'   => false,
		'ca_sticky_navigation'          => false,
		'ca_home_nav_link'              => true,
		'ca_default_post_title_display' => false,
		'ca_default_post_date_display'  => false,
		'ca_x_ua_compatibility'         => false,
	);

	$caweb_utility_header_options = array(
		'ca_contact_us_link'           => '',
		'ca_geo_locator_enabled'       => false,
		'ca_utility_home_icon'         => true,
		'ca_utility_link_1'            => '',
		'ca_utility_link_1_name'       => '',
		'ca_utility_link_1_new_window' => true,
		'ca_utility_link_1_enable'     => false,
		'ca_utility_link_2'            => '',
		'ca_utility_link_2_name'       => '',
		'ca_utility_link_2_new_window' => true,
		'ca_utility_link_2_enable'     => false,
		'ca_utility_link_3'            => '',
		'ca_utility_link_3_name'       => '',
		'ca_utility_link_3_new_window' => true,
		'ca_utility_link_3_enable'     => false,
	);

	$caweb_page_header_options = array(
		'header_ca_branding'          => '',
		'header_ca_branding_alt_text' => '',
	);

	$caweb_google_options = array(
		'ca_google_search_id'             => '',
		'ca_google_analytic_id'           => '',
		'ca_google_analytic4_id'          => '',
		'ca_google_tag_manager_id'        => '',
		'ca_google_meta_id'               => '',
		'ca_google_trans_enabled'         => false,
		'ca_google_trans_page'            => '',
		'ca_google_trans_icon'            => 'globe',
		'ca_google_trans_page_new_window' => true,
	);

	$caweb_social_links = caweb_get_social_media_links();

	$caweb_social_options = array();

	foreach ( $caweb_social_links as $social => $option ) {
		$caweb_social_options[ $option ]            = '';
		$caweb_social_options[ "${option}_header" ] = true;
		$caweb_social_options[ "${option}_footer" ] = true;

		if ( 'ca_social_email' !== $option ) {
			$caweb_social_options[ "${option}_new_window" ] = true;
			$caweb_social_options[ "${option}_hover_text" ] = "Share via $social";
		}
	}

	$caweb_special_options = array(
		'caweb_username'  => 'CA-CODE-Works',
		'caweb_password'  => '',
		'caweb_multi_ga'  => '',
		'caweb_multi_ga4' => '',
	);

	$caweb_alert_options = array(
		'caweb_alerts' => array(),
	);

	$caweb_custom_options = array(
		'caweb_external_css' => array(),
		'caweb_external_js'  => array(),
	);

	$caweb_addtl_options = array(
		'caweb_live_drafts'             => false,
		'caweb_debug_mode'              => false,
		'caweb_body_classes'            => '',
		'caweb_page_container_classes'  => '',
		'caweb_main_content_classes'    => '',
		'caweb_statewide_alert_enabled' => false,
	);

	switch ( $group ) {
		case 'general':
			$output = $caweb_general_options;

			break;
		case 'utility_header':
			$output = $caweb_utility_header_options;

			break;
		case 'page_header':
			$output = $caweb_page_header_options;

			break;
		case 'google':
			$output = $caweb_google_options;

			break;
		case 'social':
			$output = $caweb_social_options;

			break;
		case 'special':
			$output = $caweb_special_options;
			break;

		case 'custom':
				$output = $caweb_custom_options;
			break;
		case 'alerts':
			$output = $caweb_alert_options;

			break;
		case 'addtl':
			$output = $caweb_addtl_options;
			break;
		default:
			$output = array_merge(
				$caweb_general_options,
				$caweb_utility_header_options,
				$caweb_page_header_options,
				$caweb_google_options,
				$caweb_social_options,
				$caweb_custom_options,
				$caweb_alert_options,
				$caweb_addtl_options
			);

			break;
	}

	return $output;
}

/**
 * Returns an array of available social options.
 *
 * @return array
 */
function caweb_get_social_media_links() {
	$caweb_social_options = array(
		'Email'           => 'ca_social_email',
		'Facebook'        => 'ca_social_facebook',
		'Flickr'          => 'ca_social_flickr',
		'Github'          => 'ca_social_github',
		'Google Plus'     => 'ca_social_google_plus',
		'Instagram'       => 'ca_social_instagram',
		'LinkedIn'        => 'ca_social_linkedin',
		'Pinterest'       => 'ca_social_pinterest',
		'RSS'             => 'ca_social_rss',
		'Snapchat'        => 'ca_social_snapchat',
		'Twitter'         => 'ca_social_twitter',
		'YouTube'         => 'ca_social_youtube',
	);

	return apply_filters( 'caweb_social_media_links', $caweb_social_options );

}

/**
 * CAWeb upload CSS/JS files to the sites respective external directory
 *
 * @param  string $upload_path Path to upload directory.
 * @param  array  $prev_files Sites previously saved uploaded files.
 * @param  array  $existing_files Sites currently uploaded files, case files have been deleted.
 * @param  array  $uploaded_files Sites files waiting to be uploaded.
 *
 * @return void
 */
function caweb_upload_external_files( $upload_path, $prev_files = array(), $existing_files = array(), $uploaded_files = array() ) {
	$site_path = "$upload_path/";

	/* External Upload */
	$file_upload = array();

	/* files are being uploaded */
	if ( ! empty( $uploaded_files ) ) {
		/* create the external site directory if its never been created */
		if ( ! file_exists( $site_path ) ) {
			mkdir( $site_path, 0777, true );
		}

		foreach ( $uploaded_files as $key => $data ) {
			if ( ! empty( $data['name'] ) && ! empty( $data['tmp_name'] ) ) {
				$target_file = $site_path . basename( $data['name'] );

				move_uploaded_file( $data['tmp_name'], $target_file );
				$file_upload[] = $data['name'];
			}
		}
	}

	/* Previous Uploaded Check */
	foreach ( $prev_files as $filename ) {
		/*
		If the file exists, and the file is no longer in the upload list and
		a file with the same hasn't overwritten it then remove it
		*/
		if ( file_exists( "$site_path$filename" ) &&
		! in_array( $filename, $existing_files, true ) &&
		! in_array( $filename, $file_upload, true ) ) {
			unlink( "$site_path$filename" );
		}
	}
}

/**
 * Default CAWeb fav ico URL
 *
 * @return URI
 */
function caweb_default_favicon_url() {
	return site_url( 'wp-content/themes/CAWeb/src/images/system/favicon.ico' );
}

/**
 * Retrieve CAWeb fav icon filename
 *
 * @return string
 */
function caweb_favicon_name() {
	$option = get_option( 'ca_fav_ico', caweb_default_favicon_url() );

	return preg_replace( '/(.*\.ico)(.*)/', '$1', substr( $option, strrpos( $option, '/' ) + 1 ) );
}


/**
 * Ensures the CAWeb Theme colorscheme is supported.
 *
 * @link https://developer.wordpress.org/reference/hooks/option_option/
 *
 * @param  mixed  $value Value of the option. If stored serialized, it will be unserialized prior to being returned.
 * @param  string $option Option name.
 * @return mixed
 */
function caweb_ca_site_color_scheme( $value, $option ) {
	foreach ( caweb_template_colors() as $color => $data ) {
		if ( str_replace( ' ', '', $color ) === $value ) {
			return $value;
		}
	}
	return 'oceanside';
}

/**
 * Filters the value of the CAWeb Fav Icon.
 *
 * @link https://developer.wordpress.org/reference/hooks/option_option/
 *
 * @param  mixed  $value Value of the option. If stored serialized, it will be unserialized prior to being returned.
 * @param  string $option Option name.
 * @return mixed
 */
function caweb_pre_option_ca_fav_ico( $value, $option ) {
	$old_file_path = 'CAWeb/images/system/favicon.ico';

	// As of 1.10.0 favicon file was moved.
	$new_file_path = 'CAWeb/src/images/system/favicon.ico';

	$ico = str_ends_with( $value, $old_file_path ) ? str_replace( $old_file_path, $new_file_path, $value ) : $value;

	return $ico;
}
