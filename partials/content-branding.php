<?php
global $post;

$post_id = isset($post) ? (is_object($post) ? $post->ID : $post['ID']) : -1;

$ca_logo = sprintf('%1$s/images/system/%2$s', get_stylesheet_directory_uri(),
     caweb_version_check(5, $post_id) ? 'logo.svg' : 'v4logo.png');
$logo = "" !== esc_url(get_option('header_ca_branding')) ? esc_url(get_option('header_ca_branding')) : '';
$align = "center" !== get_option('header_ca_branding_alignment') ? 'pull-'.get_option('header_ca_branding_alignment') : '';

?>
<div class="branding">
  
<?php   if (caweb_version_check(5, $post_id)  && ! empty($logo)) : ?>
     <div class="header-organization-banner"><a href="/"><img src="<?php print $logo ?>" alt="Organization Title" /></a></div>
<?php else : ?>
     <div class="header-cagov-logo"><a href="http://www.ca.gov/" title="CA.gov" ><img src="<?php print $ca_logo ?>" alt="Image of the CA.gov Logo"/></a></div>
     <?php if ( ! empty($logo)) : ?>
     <div class="header-organization-banner <?php print $align ?>"><a href="/"><img src="<?php print $logo ?>" alt="Organization Title" /></a></div>
     <?php endif; ?>
<?php endif; ?>

</div>
