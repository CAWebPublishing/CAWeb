<?php
/**
 * Loads CAWeb <header> tag.
 *
 * @package CAWeb
 */

global $post;

$caweb_enable_design_system = get_option( 'caweb_enable_design_system', false );
$caweb_loaded               = isset( $args['loaded'] ) && $args['loaded'];
$caweb_fixed_header         = ! $caweb_loaded && get_option( 'ca_sticky_navigation', false ) ? ' fixed' : '';
$caweb_color                = get_option( 'ca_site_color_scheme', 'oceanside' );
$caweb_schemes              = caweb_color_schemes( caweb_template_version(), 'filename' );
$caweb_colorscheme          = isset( $caweb_schemes[ $caweb_color ] ) ? $caweb_color : 'oceanside';

/* Search */
$caweb_frontpage_search_enabled = get_option( 'ca_frontpage_search_enabled' );

/* Google Translate */
$caweb_google_search_id     = get_option( 'ca_google_search_id', '' );
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

	/* Alerts */
	require_once 'content/alerts.php';

	/* Include Utility Header */
	if ( ! $caweb_enable_design_system ) {
		require_once 'content/utility-header.php';
	} else {
		require_once 'design-system/utility-header.php';
	}

	/* Include Location Bar */
	require_once 'content/bar-location.php';

	// if not using new design system.
	if ( ! $caweb_enable_design_system ) {
		/* Include Settings Bar */
		require_once 'content/bar-settings.php';
	}

	/* Include Branding */
	require_once 'content/branding.php';

	if ( ! $caweb_enable_design_system ) {
		/* Include Mobile Controls */
		require_once 'content/mobile-controls.php';
		?>
	<div class="navigation-search">

	<!-- Include Navigation -->
		<?php
		wp_nav_menu(
			array(
				'theme_location'               => 'header-menu',
				'style'                        => get_option( 'ca_default_navigation_menu' ),
				'home_link'                    => ( ! is_front_page() && get_option( 'ca_home_nav_link', true ) ? true : false ),
			)
		);

		$caweb_search  = is_front_page() && $caweb_frontpage_search_enabled ? ' featured-search fade ' : '';
		$caweb_search .= empty( $caweb_google_search_id ) ? ' hidden ' : '';

		?>
		<div id="head-search" class="search-container<?php print esc_attr( $caweb_search ); ?> hidden-print" role="region" aria-label="Search Expanded">
			<?php
			if ( 'page-templates/searchpage.php' !== get_page_template_slug( get_the_ID() ) ) {
				require_once 'content/search-form.php';
			}
			?>
		</div>
	</div>
		<?php
	} else {
		?>
		<div>
		<div class="site-header">
      <div class="container">
        <div class="cagov-nav mobile-icons">
          <button class="menu-trigger cagov-nav open-menu" aria-label="Navigation menu" aria-haspopup="true" aria-expanded="false"
            aria-owns="mainMenu" aria-controls="mainMenu">
            <div class="cagov-nav hamburger">
              <div class="hamburger-box">
                <div class="hamburger-inner"></div>
              </div>
            </div>
            <div class="cagov-nav menu-trigger-label menu-label" data-openlabel="Open" data-closelabel="Close">Menu</div>
          </button>
        </div>
      </div>
    </div>
	<cagov-site-navigation>
		<div class="container">
		<div class="search-container search-container--small hidden-search">
			<form class="site-search" action="/serp/">
				<span class="sr-only" id="SearchInput2">Custom Google Search</span>
				<input type="text" name="q" aria-labelledby="SearchInput2" placeholder="Search this website"
				class="search-textfield">
				<button type="submit" class="search-submit">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					width="17px" height="17px" viewBox="0 0 17 17" style="enable-background:new 0 0 17 17;"
					xml:space="preserve">
					<path class="blue" d="M16.4,15.2l-4-4c2-2.6,1.8-6.5-0.6-8.9c-1.3-1.3-3-2-4.8-2S3.5,1,2.2,2.3c-2.6,2.6-2.6,6.9,0,9.6
				c1.3,1.3,3,2,4.8,2c1.4,0,2.9-0.5,4.1-1.4l4.1,4c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C16.7,16.2,16.7,15.6,16.4,15.2
				L16.4,15.2z M7,12c-1.3,0-2.6-0.5-3.5-1.4c-1.9-1.9-1.9-5.1,0-7C4.4,2.7,5.6,2.1,7,2.1s2.6,0.5,3.5,1.4c0.9,0.9,1.4,2.2,1.4,3.5
				c0,1.3-0.5,2.6-1.4,3.5C9.5,11.5,8.3,12,7,12z" />
				</svg>
				<span class="sr-only">Submit</span>
				</button>
			</form>
		</div>
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
	</div>
		<?php
	}
	?>
</header>
