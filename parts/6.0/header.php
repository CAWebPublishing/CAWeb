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
			<div class="flex-row">
				<div class="social-media-links">
						<div class="header-cagov-logo">
							<a href="https://www.ca.gov/" title="CA.gov website">
								<span class="sr-only">CA.gov</span>
								<span class="ca-gov-logo-svg"></span>
							</a>
							<span class="official-tag align-bottom"><span class="desktop-only">Official website of the&nbsp;</span>State of California</span>
						</div>
				</div>
				<div class="settings-links">

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
	</div>

	<!-- Bar Settings -->
	<div class="site-settings section section-standout collapse collapsed" aria-atomic="true" role="alert" id="siteSettings">
		<div class="container p-y">
			<div class="settings-bar-buttons">
				<div class="btn-group" aria-label="contrastMode">
					<button type="button"
						class="btn btn-s1 btn-lg disableHighContrastMode">Reset</button>
				</div>

				<div class="btn-group">
					<button type="button" class="btn btn-s1 btn-lg brd-s1 enableHighContrastMode">High contrast</button>
				</div>

				<div class="btn-group">
					<button type="button" class="btn btn-s1 btn-lg brd-s1 increaseTextSize">
						<span class="hidden-xs">Increase font size</span>
						<span class="visible-xs">Font
							<span class="sr-only">increase</span>
							<span class="ca-gov-icon-plus-line small" aria-hidden="true"></span>
						</span>
					</button>
				</div>

				<div class="btn-group">
					<button type="button" class="btn btn-s1 btn-lg brd-s1 decreaseTextSize">
						<span class="hidden-xs">Decrease font size</span>
							<span class="visible-xs">Font <span class="sr-only">decrease</span>
							<span class="ca-gov-icon-minus-line small" aria-hidden="true"></span>
						</span>
					</button>
				</div>

				<div class="btn-group">
					<button type="button" class="btn btn-s1 btn-lg brd-s1 dyslexicFont">Dyslexic font</button>
				</div>

				<button type="button" class="close ms-auto" data-bs-toggle="collapse" data-bs-target="#siteSettings" aria-label="Close">
					<span aria-hidden="true" class=" ca-gov-icon-close-mark"></span>
				</button>
			</div>
		</div>
	</div>

	<!-- Branding -->
	<div class="border-bottom">
		<div class="branding">
			<div class="header-organization-banner">
				<a href="/">
					<div class="logo-assets">
						<img src="<?php print esc_url( $caweb_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
					</div>
				</a>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation Controls -->
	<div class="mobile-controls">
		<span class="mobile-control-group mobile-header-icons">
			<!-- Add more mobile controls here. These will be on the right side of the mobile page header section -->
		</span>
		<div class="mobile-control-group main-nav-icons">
			<button id="nav-icon3" class="mobile-control toggle-menu" aria-expanded="false" aria-controls="navigation" data-bs-toggle="collapse" data-bs-target="#navigation" data-bs-toggle="collapse" data-bs-target="#navigation">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span class="sr-only">Menu</span>
			</button>
		</div>
	</div>

	<!-- Include Navigation -->
	<div class="navigation-search full-width-nav container">
		<?php
		if ( ! empty( $caweb_google_search_id ) && 'page-templates/searchpage.php' !== get_page_template_slug( get_the_ID() ) ) :
			?>
			<div id="head-search" class="search-container hidden-print featured-search">
			<?php
			if ( 'page-templates/searchpage.php' !== get_page_template_slug( get_the_ID() ) ) {
				get_template_part( "parts/$caweb_template_version/search" );
			}
			?>
			</div>
		<?php endif; ?>

		<!-- Include Navigation -->
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
				<nav id="navigation" class="main-navigation hidden-print nav">
					<ul id="nav_list" class="top-level-nav">
						<li class="nav-item">
							<a href="#" class="first-level-link">
								<span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span>
								<strong>There is no Navigation Menu set</strong>
							</a>
						</li>
					</ul>
				</nav>
			<?php
		}
		?>

	</div>

</header>
