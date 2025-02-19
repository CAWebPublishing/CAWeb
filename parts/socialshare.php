<?php
/**
 * CAWeb Social Share
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// social media.
$caweb_social_media = caweb_get_social_media_links();
$caweb_social_opened = false;

if ( ! empty( $caweb_social_media ) ) :
	?>
	<?php
	foreach ( $caweb_social_media as $caweb_share => $caweb_option ) :
		$caweb_share_email  = 'ca_social_email' === $caweb_option ? true : false;
		$caweb_mail_subject = rawurlencode( sprintf( '%1$s | %2$s', get_the_title(), get_bloginfo( 'name' ) ) );
		$caweb_mail_body    = rawurlencode( get_permalink() );
		$caweb_mailto       = $caweb_share_email ? "mailto:?subject=$caweb_mail_subject&body=$caweb_mail_body" : '';
		if ( get_option( $caweb_option . '_footer' ) &&
			( $caweb_share_email || ! empty( get_option( $caweb_option, '' ) ) )
		) {
			$caweb_social_url = $caweb_share_email ? $caweb_mailto : get_option( $caweb_option );

			$caweb_social_default_title = "Share via $caweb_share";
			$caweb_social_title         = get_option( "{$caweb_option}_hover_text", $caweb_social_default_title );
			$caweb_icon                 = str_replace( '_', '-', substr( $caweb_option, 10 ) );
			$caweb_social_target        = get_option( "{$caweb_option}_new_window", true ) ? '_blank' : '_self';

			if( ! $caweb_social_opened ){
				$caweb_social_opened = true;
				?>
				<ul class="nav social-share-links">
				<?php
			}
			?>
		<li class="nav-item">
			<a 
				class="nav-link ca-gov-icon-<?php print esc_attr( $caweb_icon ); ?>"
				href="<?php print esc_url( $caweb_social_url ); ?>" 
				title="<?php print esc_attr( wp_unslash( $caweb_social_title ) ); ?>"
				target="<?php print esc_attr( $caweb_social_target ) ;?>"
			>
			</a>
		</li>

	<?php 
		}
	endforeach; 
	if( $caweb_social_opened ){
		?>
		</ul>
		<?php
	}
	?>
<?php endif; ?>
