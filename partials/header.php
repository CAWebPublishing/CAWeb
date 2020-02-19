<?php
/**
 * Loads CAWeb <header> tag.
 *
 * @package CAWeb
 */

global $post;
$caweb_ver          = caweb_get_page_version( get_the_ID() );
$caweb_fixed_header = 5 <= $caweb_ver && get_option( 'ca_sticky_navigation' ) ? ' fixed' : '';
$caweb_color        = get_option( 'ca_site_color_scheme', 'oceanside' );
$caweb_schemes      = caweb_color_schemes( caweb_get_page_version( get_the_ID() ), 'filename' );
$caweb_colorscheme  = isset( $caweb_schemes[ $caweb_color ] ) ? $caweb_color : 'oceanside';

$caweb_default_background_img = sprintf( '%1$s/images/system/%2$s/header-background.jpg', CAWEB_URI, $caweb_colorscheme );

$caweb_header_background_img = 4 === $caweb_ver && '' !== get_option( 'header_ca_background' ) ?
					get_option( 'header_ca_background' ) : $caweb_default_background_img;
$caweb_header_style          = 4 === $caweb_ver ? sprintf( 'style="background: #fff url(%1$s) no-repeat 100% 100%; background-size: cover;"', $caweb_header_background_img ) : '';

/* Search */
$caweb_frontpage_search_enabled = get_option( 'ca_frontpage_search_enabled' );

/* Google Translate */
$caweb_google_search_id     = get_option( 'ca_google_search_id', '' );
$caweb_google_trans_enabled = get_option( 'ca_google_trans_enabled' );
$caweb_google_trans_page    = get_option( 'ca_google_trans_page', '' );
$caweb_google_trans_icon    = get_option( 'ca_google_trans_icon', '' );

?>

<header id="header" class="global-header<?php print esc_attr( $caweb_fixed_header ); ?>" <?php print esc_attr( $caweb_header_style ); ?>>
	<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
	<?php

		/* Version 5.0 Specific */
	if ( 5 <= caweb_get_page_version( get_the_ID() ) ) {

		/* Alerts */
		require_once( 'content/alerts.php' );

		/* Include Utility Header */
		require_once( 'content/utility-header.php' );

		/* Include Location Bar */
		require_once( 'content/bar-location.php' );

		/* Include Settings Bar */
		require_once( 'content/bar-settings.php' );

	}

	/* Include Branding */
	require_once( 'content/branding.php' );

	/* Include Mobile Controls */
	require_once( 'content/mobile-controls.php' );

	?>


	<div class="navigation-search">

		<!-- Version 4 top-right search box always displayed -->
		<!-- Version 5.0 fade in/out search box displays on front page and if option is enabled -->
		<!-- Include Navigation -->
		<?php
		wp_nav_menu(
			array(
				'theme_location'               => 'header-menu',
				'style'                        => get_option( 'ca_default_navigation_menu' ),
				'home_link'                    => ( ! is_front_page() && get_option( 'ca_home_nav_link', true ) ? true : false ),
				'version'                      => caweb_get_page_version( get_the_ID() ),
			)
		);

			$caweb_search  = 5 === $caweb_ver && is_front_page() && $caweb_frontpage_search_enabled ? ' featured-search fade' : '';
			$caweb_search .= empty( $caweb_google_search_id ) ? ' hidden' : '';

		?>
		<div id="head-search" class="search-container<?php print esc_attr( $caweb_search ) . 5 === $caweb_ver; ?> hidden-print" role="region" aria-labelledby="search-expanded">
			<?php
			if ( 'page-templates/searchpage.php' !== get_page_template_slug( get_the_ID() ) ) {
				require_once( 'content/search-form.php' );
			}

			/* This is the Custom Google Translate Location for the old State Template Version 4 */
			if ( 4 === $caweb_ver && 'custom' === $caweb_google_trans_enabled && ! empty( $caweb_google_trans_page ) ) :
				?>
				<a target="_blank" href="<?php print esc_url( $caweb_google_trans_page ); ?>" class="caweb-custom-translate">
				<?php if ( ! empty( $caweb_google_trans_icon ) ) : ?>
				<span class="ca-gov-icon-<?php print esc_attr( $caweb_google_trans_icon ); ?>"></span>
				<?php endif ?>Translate</a>
				<?php endif; ?>
		</div>
	</div>

	<?php
	/* This is the Standard Google Translate Location for the old State Template Version 4 */
	if ( ( true === $caweb_google_trans_enabled || 'standard' === $caweb_google_trans_enabled ) && 4 === $caweb_ver ) :
		?>
	<div id="google_translate_element" class="hidden-print standard-translate"></div>
	<?php endif; ?>
</header>
