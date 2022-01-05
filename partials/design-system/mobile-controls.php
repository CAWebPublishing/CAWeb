<?php
/**
 * Navigation Mobile Controls.
 *
 * @package CAWeb
 */

$caweb_search = get_option( 'ca_google_search_id', '' );

$caweb_search_nonce = wp_create_nonce( 'caweb_google_cse' );
$caweb_verified     = isset( $caweb_search_nonce ) && wp_verify_nonce( sanitize_key( $caweb_search_nonce ), 'caweb_google_cse' );
$caweb_keyword      = isset( $_GET['q'] ) ? sanitize_text_field( wp_unslash( $_GET['q'] ) ) : '';

?>
<!-- mobile navigation controls -->
<div class="cagov-nav mobile-icons grid-mobile-icons">
		<?php if ( ! empty( $caweb_search ) ) : ?>
			<div class="cagov-nav mobile-search">
				<button class="search-btn" aria-expanded="true">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17px"
						height="17px" viewBox="0 0 17 17" style="enable-background:new 0 0 17 17;" xml:space="preserve">
						<path class="blue" d="M16.4,15.2l-4-4c2-2.6,1.8-6.5-0.6-8.9c-1.3-1.3-3-2-4.8-2S3.5,1,2.2,2.3c-2.6,2.6-2.6,6.9,0,9.6
				c1.3,1.3,3,2,4.8,2c1.4,0,2.9-0.5,4.1-1.4l4.1,4c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C16.7,16.2,16.7,15.6,16.4,15.2
				L16.4,15.2z M7,12c-1.3,0-2.6-0.5-3.5-1.4c-1.9-1.9-1.9-5.1,0-7C4.4,2.7,5.6,2.1,7,2.1s2.6,0.5,3.5,1.4c0.9,0.9,1.4,2.2,1.4,3.5
				c0,1.3-0.5,2.6-1.4,3.5C9.5,11.5,8.3,12,7,12z"></path>
					</svg>
					<span>Search</span>
				</button>
			</div>
			<?php endif; ?>
			<button class="menu-trigger cagov-nav open-menu" aria-label="Navigation menu" aria-haspopup="true" aria-expanded="false"
			aria-owns="mainMenu" aria-controls="mainMenu">
			<div class="cagov-nav hamburger">
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>
			<div class="cagov-nav menu-trigger-label menu-label" data-openlabel="Menu" data-closelabel="Close">Menu</div>
			</button>
	</div>


	 <div class="search-container grid-search">
	  <form class="site-search" action="<?php print esc_url( site_url( 'serp' ) ); ?>">
		<span class="sr-only" id="SearchInput">Custom Google Search</span>
		<input type="text" id="q" name="q" value="<?php print esc_attr( $caweb_keyword ); ?>" aria-labelledby="SearchInput" placeholder="Search this website" class="search-textfield">
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
		<button class="search-close">Close</button>
	  </form>
</div>
