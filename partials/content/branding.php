<?php
/**
 * Loads CAWeb site branding.
 *
 * @package CAWeb
 */

global $post;

$caweb_logo          = '' !== esc_url( get_option( 'header_ca_branding' ) ) ? esc_url( get_option( 'header_ca_branding' ) ) : '';
$caweb_logo_alt_text = ! empty( get_option( 'header_ca_branding_alt_text', '' ) ) ? get_option( 'header_ca_branding_alt_text' ) : caweb_get_attachment_post_meta( $caweb_logo, '_wp_attachment_image_alt' );

$caweb_align = 'center' !== get_option( 'header_ca_branding_alignment' ) ? 'pull-' . get_option( 'header_ca_branding_alignment' ) : '';

?>
<!-- Branding -->
<div class="branding">

	<?php if ( 5 <= caweb_get_page_version( get_the_ID() ) && ! empty( $caweb_logo ) ) : ?>
	<div class="header-organization-banner">
		<a href="/">
			<img src="<?php print esc_url( $caweb_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
		</a>
	</div>
	<?php else : 
	$caweb_v_logo = sprintf( '%1$s/images/system/v4logo.png', CAWEB_URI );
	?>
	
	<div class="header-cagov-logo">
		<a href="http://www.ca.gov/" title="CA.gov">
			<img src="<?php print esc_url( $caweb_v_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
		</a>
	</div>
		<?php if ( ! empty( $caweb_logo ) ) : ?>
	<div class="header-organization-banner <?php print esc_attr( $caweb_align ); ?>">
		<a href="/">
			<img src="<?php print esc_url( $caweb_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
		</a>
	</div>
		<?php endif; ?>
	<?php endif; ?>

</div>
