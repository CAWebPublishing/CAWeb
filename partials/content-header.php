<?php
/**
 * Loads CAWeb <header> tag.
 *
 * @package CAWeb
 */

global $post;
$caweb_ver          = caweb_get_page_version( get_the_ID() );
$caweb_fixed_header = ( 5 === $caweb_ver && get_option( 'ca_sticky_navigation' ) ? ' fixed' : '' );
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
$caweb_google_trans_icon    = ! empty( $caweb_google_trans_icon ) ? caweb_get_icon_span( $caweb_google_trans_icon ) : '';

?>

<header id="header" class="global-header<?php print esc_attr( $caweb_fixed_header ); ?>" <?php print esc_attr( $caweb_header_style ); ?>>
	<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
	<?php

		/* Version 5.0 Specific */
	if ( 5 === caweb_get_page_version( get_the_ID() ) ) {

			/* Alerts */
		$caweb_alerts = get_option( 'caweb_alerts', array() );

		if ( ! empty( $caweb_alerts ) ) {
			print '<!-- Alert Banners -->';
		}

		foreach ( $caweb_alerts as $caweb_a => $caweb_data ) {
			if ( 'inactive' !== $caweb_data['status'] && ( ( is_front_page() && 'home' === $caweb_data['page_display'] ) || ( 'all' === $caweb_data['page_display'] ) ) ) {
				if ( ! isset( $_SESSION[ "display_alert_$caweb_a" ] ) || 1 === $_SESSION[ "display_alert_$caweb_a" ] ) {
					$_SESSION[ "display_alert_$caweb_a" ] = true;

					$readmore   = '';
					$alert_icon = ! empty( $caweb_data['icon'] ) ? caweb_get_icon_span( $caweb_data['icon'], array( 'aria-hidden' => 'true' ) ) : '';
					if ( ! empty( $caweb_data['button'] ) && ! empty( $caweb_data['url'] ) ) {
						$target   = ! empty( $caweb_data['target'] ) ? sprintf( ' target="%1$s"', $caweb_data['target'] ) : '';
						$text     = ! empty( $caweb_data['text'] ) ? $caweb_data['text'] : '';
						$readmore = sprintf( '<a href="%1$s" class="alert-link btn btn-default btn-xs"%2$s>%3$s</a>', esc_url( $caweb_data['url'] ), $target, $text );
					}
					?>
	<div class="alert alert-dismissible alert-banner" style="background-color:<?php print $caweb_data['color']; ?>;">
		<div class="container">
			<button type="button" class="close caweb-alert-close" data-url="<?php print admin_url( "admin-post.php?action=caweb_clear_alert_session&alert-id=$caweb_a" ); ?>" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<span class="alert-level">
					<?php print $alert_icon . $caweb_data['header']; ?>
			</span>
			<span class="alert-text"><?php print stripslashes( $caweb_data['message'] ); ?></span>
					<?php print $readmore; ?>
		</div>
	</div>
					<?php
				}
			}
		}

		/* Include Utility Header */
		get_template_part( 'partials/content', 'utility-header' );

		/* Location Bar */
		require_once CAWEB_ABSPATH . '/ssi/location-bar.php';

		/* Settings Bar */
		require_once CAWEB_ABSPATH . '/ssi/settings-bar.php';
	}

	/* Include Utility Header */
	get_template_part( 'partials/content', 'branding' );

	?>

	<!-- Include Mobile Controls -->
	<?php require_once CAWEB_ABSPATH . '/ssi/mobile-controls.php'; ?>

	<div class="navigation-search">

		<!-- Version 4 top-right search box always displayed -->
		<!-- Version 5.0 fade in/out search box displays on front page and if option is enabled -->
		<!-- Include Navigation -->
		<?php
		wp_nav_menu(
			array(
				'theme_location'               => 'header-menu',
				'style'                        => ( get_option( 'ca_menu_selector_enabled' ) ?
							get_post_meta( get_the_ID(), 'ca_default_navigation_menu', true ) :
							get_option( 'ca_default_navigation_menu' ) ),
				'home_link'                    => ( ! is_front_page() && get_option( 'ca_home_nav_link', true ) ? true : false ),
				'version'                      => caweb_get_page_version( get_the_ID() ),
			)
		);

			  $search  = 5 === $caweb_ver && is_front_page() && $caweb_frontpage_search_enabled ? ' featured-search fade' : '';
			  $search .= empty( $caweb_google_search_id ) ? ' hidden' : '';

			  /* This is the Custom Google Translate Location for the old State Template Version 4 */
			  $custom_translate = 4 === $caweb_ver && 'custom' === $caweb_google_trans_enabled && ! empty( $caweb_google_trans_page ) ? sprintf( '<a target="_blank" href="%1$s" class="caweb-custom-translate">%2$sTranslate</a>', esc_url( $caweb_google_trans_page ), $caweb_google_trans_icon ) : '';

		?>
		<div id="head-search" class="search-container<?php print $search; ?> hidden-print" role="region" aria-labelledby="search-expanded">
			<?php
			if ( 'page-templates/searchpage.php' !== get_page_template_slug( get_the_ID() ) ) {
				require CAWEB_ABSPATH . '/ssi/searchForm.php';
			}
				print $custom_translate;
			?>
		</div>
	</div>

	<?php
	/* This is the Standard Google Translate Location for the old State Template Version 4 */
	if ( ( true === $caweb_google_trans_enabled || 'standard' === $caweb_google_trans_enabled ) && 4 === $caweb_ver ) :
		?>
	<div id="google_translate_element" class="hidden-print standard-translate"></div>
	<?php endif; ?>
</header>
