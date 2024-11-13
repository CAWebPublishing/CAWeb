<?php
/**
 * Loads CAWeb <header> tag.
 *
 * @package CAWeb
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

<header id="header" class="global-header">
	<div id="skip-to-content"><a href="#main-content">Skip to Main Content</a></div>
	<?php
	// Render Alert Banners.
	caweb_render_alerts();
	?>

	<!-- Utility Header -->
	<div class="utility-header">
		<div class="container d-flex flex-row">
			<div class="social-media-links">
				<div class="header-cagov-logo">
					<a href="https://www.ca.gov/" title="CA.gov website" target="_blank">
						<span class="sr-only">CA.gov</span>
						<span class="ca-gov-logo-svg"></span>
					</a>
				</div>
				<p class="official-tag">Official website of the State of California</p>
			</div>
			<div class="settings-links">
				<?php
					for ( $caweb_i = 1; $caweb_i < 4; $caweb_i++ ) :
						$caweb_url     = get_option( "ca_utility_link_$caweb_i" );
						$caweb_text    = get_option( "ca_utility_link_{$caweb_i}_name" );
						$caweb_target  = get_option( "ca_utility_link_{$caweb_i}_new_window" ) ? '_blank' : '_self';
						$caweb_enabled = get_option( "ca_utility_link_{$caweb_i}_enable", false ) && ! empty( $caweb_url ) && ! empty( $caweb_text );

						if ( $caweb_enabled ) :
							?>
							<a 
								class="utility-custom-<?php print esc_attr( $caweb_i ); ?>" 
								href="<?php print esc_url( $caweb_url ); ?>" target="<?php print esc_attr( $caweb_target ); ?>">
							<?php print esc_html( wp_unslash( $caweb_text ) ); ?>
							</a>
						<?php endif; ?>
					<?php endfor; ?>

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
						<div class="standard-translate" id="google_translate_element"></div>
					<?php endif; ?>
					
			</div>
		</div>
	</div>

	<!-- Branding -->
	<div class="branding border-bottom">
		<div class="container d-flex flex-row">
			<div class="header-organization-banner">
				<a href="/">
					<img src="<?php print esc_url( $caweb_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
				</a>
			</div>
			<?php
			if ( ! empty( $caweb_google_search_id ) &&  'page-templates/searchpage.php' !== get_page_template_slug( get_the_ID() ) ) {
				get_template_part( "parts/$caweb_template_version/search" );
			}
			?>
			<button class="mobile-control toggle-menu ca-gov-icon-menu fs-2" data-bs-toggle="collapse" data-bs-target=".mobile-controlled" aria-expanded="false" aria-controls="mobile-controls">
	        </button>
		</div>
	</div>

	<!-- Mobile Navigation Controls -->
	<div class="mobile-controlled overlay collapse collapse-horizontal">
		<button class="mobile-control toggle-menu ca-gov-icon-close-mark fs-1" data-bs-toggle="collapse" data-bs-target=".mobile-controlled" aria-expanded="false" aria-controls="mobile-controls">
		</button>
	</div>

	<!-- Navigation -->
	<div class="navigation border-bottom mobile-controlled collapse collapse-horizontal show">
	    <div class="container">
		<?php
			if ( has_nav_menu( 'header-menu' ) ) {
				wp_nav_menu(
					array(
						'theme_location'                     => 'header-menu',
						'caweb_template_version'             => $caweb_template_version,
						'caweb_nav_type'                     => $caweb_menu_style,
						'caweb_home_link'                    => $caweb_nav_home_link,
						'caweb_google_search_id'             => $caweb_google_search_id,
					)
				);
			} else {
				?>
					<ul class="nav">
							<li class="nav-item">
								<a href="#" class="nav-link">
									<span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span>
									<strong>There is no Navigation Menu set</strong>
								</a>
							</li>
						</ul>
				<?php
			}
		?>
		</div>
	</div>
</header>
