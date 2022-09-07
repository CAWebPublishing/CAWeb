<?php
/**
 * Loads CAWeb <header> tag.
 *
 * @package CAWeb
 */

$caweb_loaded       = isset( $args['loaded'] ) && $args['loaded'];
$caweb_fixed_header = ! $caweb_loaded && get_option( 'ca_sticky_navigation', false ) ? ' fixed' : '';
$caweb_color        = get_option( 'ca_site_color_scheme', 'cagov' );
$caweb_schemes      = caweb_color_schemes( caweb_template_version(), 'filename' );
$caweb_colorscheme  = isset( $caweb_schemes[ $caweb_color ] ) ? $caweb_color : 'cagov';

/* Branding */
$caweb_logo          = '' !== esc_url( get_option( 'header_ca_branding' ) ) ? esc_url( get_option( 'header_ca_branding' ) ) : '';
$caweb_logo_alt_text = ! empty( get_option( 'header_ca_branding_alt_text', '' ) ) ? get_option( 'header_ca_branding_alt_text' ) : caweb_get_attachment_post_meta( $caweb_logo, '_wp_attachment_image_alt' );


/* Search */
$caweb_google_search_id         = get_option( 'ca_google_search_id', '' );
$caweb_frontpage_search_enabled = get_option( 'ca_frontpage_search_enabled' );


/* Google Translate */
$caweb_google_trans_enabled = get_option( 'ca_google_trans_enabled' );
$caweb_google_trans_page    = get_option( 'ca_google_trans_page', '' );
$caweb_google_trans_icon    = get_option( 'ca_google_trans_icon', '' );

/* Google Tag Manager */
$caweb_google_tag_manager_id = get_option( 'ca_google_tag_manager_id', '' );

if ( ! empty( $caweb_google_tag_manager_id ) ) :
	$caweb_google_tag_src = sprintf( 'https://www.googletagmanager.com/ns.html?id=%1$s', $caweb_google_tag_manager_id );

	?>
<!-- Google Tag Manager (noscript) -->
<noscript>
	<iframe src="<?php print esc_url( $caweb_google_tag_src ); ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>

<?php endif; ?>

<header id="header" class="global-header<?php print esc_attr( $caweb_fixed_header ); ?>">
	<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
	<?php

	/* Include Utility Header */
	require_once 'utility-header.php';

	?>
	<div class="site-header">
		<div class="container<?php echo ! empty( $caweb_logo ) ? ' with-logo' : ''; ?>">
		<?php
			/* Include Branding */
			require_once 'branding.php';

			// Include Mobile Controls.
			require_once 'mobile-controls.php';

			// Include Search.
			require_once 'search-form.php';

		?>
		</div>
	</div>
	<cagov-site-navigation>
		<div>

	<?php
		/* Include Navigation */
		wp_nav_menu(
			array(
				'theme_location'               => 'header-menu',
				'style'                        => get_option( 'ca_default_navigation_menu' ),
				'home_link'                    => ( ! is_front_page() && get_option( 'ca_home_nav_link', true ) ? true : false ),
			)
		);

		?>
		</div>
	</cagov-site-navigation>
</header>
