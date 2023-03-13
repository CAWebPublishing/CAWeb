<?php
/**
 * Loads CAWeb site branding.
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$caweb_deprecating = '5.5' === caweb_template_version();

/* Branding */
$caweb_logo          = get_option( 'header_ca_branding', '' );
$caweb_logo_alt_text = get_option( 'header_ca_branding_alt_text', '' );

if ( ! empty( $caweb_logo ) && empty( $caweb_logo_alt_text ) ) {
	$caweb_logo_alt_text = caweb_get_attachment_post_meta( $caweb_logo, '_wp_attachment_image_alt' );
}

if ( $caweb_deprecating ) :
	?>
<!-- Branding -->
<div class="branding">
	<div class="header-organization-banner">
		<a href="/">
			<img alt="<?php print esc_attr( get_bloginfo( 'name' ) ); ?> Logo" src="<?php print esc_url( $caweb_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
		</a>
	</div>
</div>
<?php else : ?>
<!-- Branding -->
<div class="section-default">

	<div class="branding">
		<div class="header-organization-banner">
			<a href="/">
				<div class="logo-assets">
					<img alt="<?php print esc_attr( get_bloginfo( 'name' ) ); ?> Logo" src="<?php print esc_url( $caweb_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
				</div>
			</a>
		</div>
	</div>
</div>


<?php endif; ?>
