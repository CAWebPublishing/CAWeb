<?php
global $post;

$post_id = isset( $post ) ? ( is_object( $post ) ? $post->ID : $post['ID'] ) : -1;

$ca_logo       = sprintf(
	'%1$s/images/system/%2$s',
	get_stylesheet_directory_uri(),
	5 === caweb_get_page_version( get_the_ID() ) ? 'logo.svg' : 'v4logo.png'
);
$logo          = '' !== esc_url( get_option( 'header_ca_branding' ) ) ? esc_url( get_option( 'header_ca_branding' ) ) : '';
$logo_alt_text = ! empty( get_option( 'header_ca_branding_alt_text', '' ) ) ? get_option( 'header_ca_branding_alt_text' ) : caweb_get_attachment_post_meta( $logo, '_wp_attachment_image_alt' );

$align = 'center' !== get_option( 'header_ca_branding_alignment' ) ? 'pull-' . get_option( 'header_ca_branding_alignment' ) : '';

?>
<!-- Branding -->
<div class="branding">

	<?php if ( 5 === caweb_get_page_version( get_the_ID() ) && ! empty( $logo ) ) : ?>
	<div class="header-organization-banner"><a href="/"><img src="<?php print $logo; ?>" alt="<?php print $logo_alt_text; ?>" /></a></div>
	<?php else : ?>
	<div class="header-cagov-logo"><a href="http://www.ca.gov/" title="CA.gov"><img src="<?php print $ca_logo; ?>" alt="<?php print $logo_alt_text; ?>" /></a></div>
		<?php if ( ! empty( $logo ) ) : ?>
		<div class="header-organization-banner <?php print $align; ?>"><a href="/"><img src="<?php print $logo; ?>" alt="<?php print $logo_alt_text; ?>" /></a></div>
		<?php endif; ?>
	<?php endif; ?>

</div>
