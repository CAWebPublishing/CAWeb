<?php
/**
 * Loads CAWeb footer area.
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

$caweb_menuitems = wp_get_nav_menu_items( $menu->term_id, array( 'order' => 'DESC' ) );

?>


<div class="container">
	<div class="d-flex">

		<ul class="footer-links mr-auto">
			<li class="d-none">
				<a href="#skip-to-content">Back to Top</a>
			</li>
			<?php
			foreach ( $caweb_menuitems as $caweb_item ) {
				if ( ! $caweb_item->menu_item_parent ) {
					?>
						<li
							<?php if ( ! empty( $caweb_item->classes ) ) : ?>
							class="<?php print esc_attr( implode( ' ', $caweb_item->classes ) ); ?>"
							<?php endif; ?>
							<?php if ( ! empty( $caweb_item->attr_title ) ) : ?>
							title="<?php print esc_attr( $caweb_item->attr_title ); ?>"
							<?php endif; ?>
						>
							<a 
								href="<?php print esc_url( $caweb_item->url ); ?>"
								<?php if ( ! empty( $caweb_item->xfn ) ) : ?>
								rel="<?php print esc_attr( $caweb_item->xfn ); ?>"
								<?php endif; ?>
								<?php if ( ! empty( $caweb_item->target ) ) : ?>
								target="<?php print esc_attr( $caweb_item->target ); ?>" 
								<?php endif; ?>
							><?php print esc_html( $caweb_item->title ); ?></a>
						</li>
					<?php
				}
			}
			?>
		</ul>

		<?php
			// social media.
			$caweb_social_media = caweb_get_social_media_links();
			$caweb_social_links = '';

			$caweb_opened = false;

		foreach ( $caweb_social_media as $caweb_share => $caweb_option ) {
			$caweb_share_email  = 'ca_social_email' === $caweb_option ? true : false;
			$caweb_mail_subject = rawurlencode( sprintf( '%1$s | %2$s', get_the_title(), get_bloginfo( 'name' ) ) );
			$caweb_mail_body    = rawurlencode( get_permalink() );
			$caweb_mailto       = $caweb_share_email ? "mailto:?subject=$caweb_mail_subject&body=$caweb_mail_body" : '';

			if ( ! in_array( $caweb_option, array( 'ca_social_github' ), true ) &&
				get_option( $caweb_option . '_footer' ) &&
				( $caweb_share_email || ! empty( get_option( $caweb_option, '' ) ) )
			) {

				// open ul tag only once.
				if ( ! $caweb_opened ) :
					$caweb_opened = true;
					?>
						<ul class="socialsharer-container">
					<?php
					endif;

				$caweb_social_url = $caweb_share_email ? $caweb_mailto : get_option( $caweb_option );

				$caweb_social_default_title = "Share via $caweb_share";
				$caweb_social_title         = get_option( "${caweb_option}_hover_text", $caweb_social_default_title );
				$caweb_icon                 = str_replace( '_', '-', substr( $caweb_option, 10 ) );
				$caweb_social_target        = get_option( "${caweb_option}_new_window", true ) ? '_blank' : '_self';
				?>
						<li>
							<a 
								href="<?php print esc_url( $caweb_social_url ); ?>" 
								title="<?php print esc_attr( $caweb_social_title ); ?>"
								target="<?php print esc_attr( $caweb_social_target ); ?>"
							>
							<?php if ( ! empty( $caweb_option ) ) : ?>
									<span class="ca-gov-icon-<?php print esc_attr( $caweb_icon ); ?>"></span>
								<?php endif; ?>
								<span class="sr-only"><?php print esc_attr( $caweb_share ); ?></span>
							</a>
						</li>
					<?php

			}
		}

			// close ul tag if opened.
		if ( $caweb_opened ) :
			?>
				</ul>
			<?php
			endif
		?>

	</div>
</div>
