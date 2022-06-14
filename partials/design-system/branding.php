<?php
/**
 * Loads CAWeb site branding.
 *
 * @package CAWeb
 */

?>

<!-- Branding -->
<?php if( ! empty( $caweb_logo ) ): ?>
<a href="/" class="grid-logo" aria-label="DCC logo">
	<img alt="<?php print esc_attr( get_bloginfo( 'name' ) ); ?> Logo" src="<?php print esc_url( $caweb_logo ); ?>" alt="<?php print esc_attr( $caweb_logo_alt_text ); ?>" />
</a>
<?php else: ?>
<a class="grid-org-name" href="/">
	<span class="org-name-dept"><?php print esc_attr( get_bloginfo( 'name' ) ); ?></span>
	<span class="org-name-state">State of California</span>
</a>
<?php endif; ?>