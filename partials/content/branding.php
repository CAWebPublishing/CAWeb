<?php
/**
 * Loads CAWeb site branding.
 *
 * @package CAWeb
 */

global $post;

$caweb_logo          = '' !== esc_url( get_option( 'header_ca_branding' ) ) ? esc_url( get_option( 'header_ca_branding' ) ) : '';
$caweb_logo_alt_text = ! empty( get_option( 'header_ca_branding_alt_text', '' ) ) ? get_option( 'header_ca_branding_alt_text' ) : caweb_get_attachment_post_meta( $caweb_logo, '_wp_attachment_image_alt' );

$caweb_branding_class = $caweb_enable_design_system ? 'container with-logo' : '';

$caweb_search = get_option( 'ca_google_search_id', '' );

?>
<!-- Branding -->
<div class="branding">
	<?php if ( ! $caweb_enable_design_system ) : ?>
	<div class="header-organization-banner">
		<a href="/">

	<?php else : ?>
	<div class="container with-logo">
		<a href="/" class="grid-logo">
	<?php endif; ?>

			<img alt="<?php print esc_attr( get_bloginfo( 'name' ) ); ?> Logo" src="<?php print esc_url( $caweb_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
		</a>

	<?php if ( ! $caweb_enable_design_system ) : ?>
	</div>
</div>
<?php else : ?>
	<a class="grid-org-name" href="/">
		<span class="org-name-state">State of California</span>
		<span class="org-name-dept"><?php print esc_attr( get_bloginfo( 'name' ) ); ?></span>
	</a>

	<?php
		// Include Mobile Controls.
		require_once dirname( __DIR__ ) . '/design-system/mobile-controls.php';
	?>
	</div>
</div>
<?php endif; ?>
