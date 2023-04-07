<?php
/**
 * Loads CAWeb <header> tag.
 * php version 8.0.28
 *
 * @package CAWeb
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// phpcs:disable
foreach ( $args as $var => $val ) {
	$$var = $val;
}
// phpcs:enable

?>

<header id="header" class="global-header<?php print esc_attr( $caweb_fixed_header ); ?>">
	<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
	<div id="caweb_alerts"></div>

	<!-- Utility Header -->
	<div class="utility-header hidden-print">
		<div class="container">
			<div class="group flex-row">
				<div class="social-media-links">
						<div class="header-cagov-logo">
							<a href="https://www.ca.gov/" title="CA.gov website">
								<span class="sr-only">CA.gov</span>
								<img 
									style="height: 31px;" 
									src="<?php print esc_url( CAWEB_URI ); ?>/images/system/logo.svg" 
									class="pos-rel" 
									alt="CA.gov website" 
									aria-hidden="true" />
							</a>
						</div>

						<?php if ( $caweb_utility_home_icon ) : ?>
							<a href="/" title="Home" class="utility-home-icon ca-gov-icon-home">
								<span class="sr-only">Home</span>
							</a>
						<?php endif; ?>

						<?php
						foreach ( $caweb_social_options as $caweb_option ) {
							$caweb_share_email = 'ca_social_email' === $caweb_option ? true : false;
							$caweb_sub         = rawurlencode( sprintf( '%1$s | %2$s', get_the_title(), get_bloginfo( 'name' ) ) );
							$caweb_body        = rawurlencode( get_permalink() );
							$caweb_mailto      = $caweb_share_email ? sprintf( 'mailto:?subject=%1$s&body=%2$s', $caweb_sub, $caweb_body ) : '';

							if ( get_option( "${caweb_option}_header" ) && ( $caweb_share_email || '' !== get_option( $caweb_option ) ) ) :
								$caweb_share  = substr( $caweb_option, 10 );
								$caweb_share  = str_replace( '_', '-', $caweb_share );
								$caweb_class  = "utility-social-$caweb_share ca-gov-icon-$caweb_share";
								$caweb_title  = get_option( "${caweb_option}_hover_text", 'Share via ' . ucwords( $caweb_share ) );
								$caweb_href   = $caweb_share_email ? $caweb_mailto : get_option( $caweb_option );
								$caweb_target = get_option( "${caweb_option}_new_window" ) ? 'target="_blank"' : ''
								?>
									<a class="<?php print esc_attr( $caweb_class ); ?>" href="<?php print esc_url( $caweb_href ); ?>" title="<?php print esc_attr( $caweb_title ); ?>" <?php print esc_attr( $caweb_target ); ?>>
										<span class="sr-only"><?php print esc_attr( $caweb_title ); ?></span>
									</a>
								<?php
							endif;

						}
						?>
				</div>
				<div class="settings-links">
					<?php
					for ( $caweb_i = 1; $caweb_i < 4; $caweb_i++ ) :
						$caweb_url     = get_option( "ca_utility_link_$caweb_i" );
						$caweb_text    = get_option( "ca_utility_link_${caweb_i}_name" );
						$caweb_target  = get_option( "ca_utility_link_${caweb_i}_new_window" ) ? ' target="_blank"' : '';
						$caweb_enabled = get_option( "ca_utility_link_${caweb_i}_enable", false ) && ! empty( $caweb_url ) && ! empty( $caweb_text );

						if ( $caweb_enabled ) :
							?>
							<a 
								class="utility-custom-<?php print esc_attr( $caweb_i ); ?>" 
								href="<?php print esc_url( $caweb_url ); ?>"<?php print esc_attr( $caweb_target ); ?>>
							<?php print esc_html( $caweb_text ); ?>
							</a>
						<?php endif; ?>
					<?php endfor; ?>

					<?php if ( $caweb_geo_locator_enabled ) : ?>
						<button type="button" class="btn btn-xs collapsed btn-primary" onclick="showAddLocation()" aria-expanded="false"><span class="ca-gov-icon-compass" aria-hidden="true"></span> <span class="located-city-name">Set Location</span></button>    
					<?php endif; ?>

					<?php if ( ! empty( $caweb_contact_us_link ) ) : ?>
						<a class="utility-contact-us" href="<?php print esc_url( $caweb_contact_us_link ); ?>">Contact Us</a>
					<?php endif; ?>

					<?php if ( 'custom' === $caweb_google_trans_enabled && ! empty( $caweb_google_trans_page ) ) : ?>
						<a 
							id="caweb-gtrans-custom" 
							target="<?php print esc_attr( $caweb_google_trans_page_new_window ); ?>" 
							href="<?php print esc_url( $caweb_google_trans_page ); ?>" 
							aria-label="Google Custom Translate">
						<?php if ( ! empty( $caweb_google_trans_icon ) ) : ?>
								<span class="ca-gov-icon-<?php print esc_attr( $caweb_google_trans_icon ); ?>"></span>
						<?php endif; ?>
						<?php if ( ! empty( $caweb_google_trans_text ) ) : ?>
								<span><?php print esc_html( $caweb_google_trans_text ); ?></span>
						<?php endif; ?>
						</a>
					<?php endif; ?>

					<?php if ( true === $caweb_google_trans_enabled || 'standard' === $caweb_google_trans_enabled ) : ?>
						<div class="quarter standard-translate px-0 w-auto" id="google_translate_element"></div>
					<?php endif; ?>

					<button 
						class="btn btn-xs collapsed btn-primary" 
						data-toggle="collapse" data-target="#siteSettings" 
						aria-controls="siteSettings">
						<span class="ca-gov-icon-gear" aria-hidden="true"></span> Settings
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Location Bar -->
	<div id="locationSettings" class="location-settings section section-standout collapse collapsed"></div>

	<!-- Bar Settings -->
	<div class="site-settings section section-standout collapse collapsed" aria-atomic="true" role="alert" id="siteSettings">
		<div class="container p-y">
			<div class="btn-group btn-group-justified-sm" role="group" aria-label="contrastMode">
				<div class="btn-group">
					<button type="button" class="btn btn-primary disableHighContrastMode">Default</button>
				</div>
				<div class="btn-group">
					<button type="button" class="btn btn-primary enableHighContrastMode">High Contrast</button>
				</div>
			</div>

			<div class="btn-group" role="group" aria-label="textSizeMode">
				<div class="btn-group">
					<button type="button" class="btn btn-primary resetTextSize">Reset</button>
				</div>
				<div class="btn-group">
					<button type="button" class="btn btn-primary increaseTextSize">
						<span class="hidden-xs">Increase Font Size</span>
						<span class="visible-xs">Font <span class="sr-only">Increase</span>
							<span class="ca-gov-icon-plus-line font-size-sm" aria-hidden="true"></span>
						</span>
					</button>
				</div>

				<div class="btn-group">
					<button type="button" class="btn btn-primary decreaseTextSize">
						<span class="hidden-xs">Decrease Font Size</span>
						<span class="visible-xs">Font <span class="sr-only">Decrease</span>
							<span class="ca-gov-icon-minus-line font-size-sm" aria-hidden="true"></span>
						</span>
					</button>
				</div>

			</div>

			<button type="button" class="close" data-toggle="collapse" data-target="#siteSettings" aria-expanded="false" aria-controls="siteSettings" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		</div>
	</div>

	<!-- Branding -->
	<div class="branding">
		<div class="header-organization-banner">
			<a href="/">
				<img alt="<?php print esc_attr( get_bloginfo( 'name' ) ); ?> Logo" src="<?php print esc_url( $caweb_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
			</a>
		</div>
	</div>

	<!-- Mobile Navigation Controls -->
	<div class="mobile-controls">
		<span class="mobile-control-group mobile-header-icons">
			<!-- Add more mobile controls here. These will be on the right side of the mobile page header section -->
		</span>
		<div class="mobile-control-group main-nav-icons">
			<button class="mobile-control toggle-search">
				<span class="ca-gov-icon-search hidden-print" aria-hidden="true"></span><span class="sr-only">Search</span>
			</button>
			<button id="nav-icon3" class="mobile-control toggle-menu" aria-expanded="false" aria-controls="navigation" data-toggle="collapse" data-target="#navigation" data-toggle="collapse" data-target="#navigation">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span class="sr-only">Menu</span>
			</button>

		</div>
	</div>

	<div class="navigation-search">
		<!-- Include Navigation -->
		<?php
		wp_nav_menu(
			array(
				'theme_location'                     => 'header-menu',
				'caweb_template_version'             => $caweb_template_version,
				'caweb_nav_type'                     => $caweb_menu_style,
				'caweb_home_link'                    => $caweb_nav_home_link,
				'caweb_google_search_id'             => $caweb_google_search_id,
			)
		);
		?>
		<div id="head-search" class="search-container hidden-print<?php print esc_attr( $caweb_search_class ); ?>" role="region" aria-label="Search Expanded">
			<?php
			if ( 'page-templates/searchpage.php' !== get_page_template_slug( get_the_ID() ) ) {
				get_template_part( "parts/$caweb_template_version/search" );
			}
			?>
		</div>
	</div>

</header>
