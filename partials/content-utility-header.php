<?php      $gtranslator = get_option('ca_google_trans_enabled'); ?>    
<!-- Utility Header -->
<div class="utility-header hidden-print">
    <div class="container">
      <div class="group flex-row">
        <div class="social-media-links">
          <div class="header-cagov-logo">
            <a href="https://www.ca.gov/" title="CA.gov" style="float: left;">
              <span class="sr-only">CA.gov</span>
              <img style="height: 31px;" src="<?php print get_stylesheet_directory_uri();?>/images/system/logo.svg" class="pos-rel" alt="Image of the CA.gov Logo" aria-hidden="true" />
            </a>
          </div>
                
					<?php
              $gtranslator = get_option('ca_google_trans_enabled') || 'standard' == get_option('ca_google_trans_enabled') || 'custom' == get_option('ca_google_trans_enabled') ? true : false;

							if (get_option('ca_utility_home_icon', true)) {
							    print '<a href="/" title="Home" class="utility-home-icon ca-gov-icon-home"><span class="sr-only">Home</span></a>';
							}

                  $social_share = caweb_get_site_options('social');

                  foreach ($social_share as $opt) {
                      $share_email = 'ca_social_email' === $opt ? true : false;
                      $mailto = $share_email ? esc_attr(sprintf('mailto:?subject=%1$s | %2$s&body=%3$s', get_the_title(), get_bloginfo('name'), get_permalink())) : '';

                      if (get_option($opt.'_header') && ($share_email || "" !== get_option($opt))) {
                          $share = substr($opt, 10);
                          $share =  str_replace("_", "-", $share);

                          printf('<a class="utility-social-%1$s ca-gov-icon-%1$s" href="%2$s" title="Share via %3$s" %4$s><span class="sr-only">%3$s</span></a>',
                             $share, ($share_email ? $mailto : get_option($opt)), ucwords($share), (get_option($opt.'_new_window') ? 'target="_blank"' : ''));
                      }
                  }
            ?>
            </div>
            <div class="settings-links">                  
					<?php
					  for ($i = 1; $i < 4; $i++) {
					      $url = get_option(sprintf('ca_utility_link_%1$s', $i));
					      $p = "/<script>[\S\s]*<\/script>|<style>[\S\s]*<\/style>/";
					      $text =  get_option(sprintf('ca_utility_link_%1$s_name', $i));
					      $target = get_option(sprintf('ca_utility_link_%1$s_new_window', $i)) ? ' target="_blank"' : '';

					      if ( ! empty($url)  &&  ! empty($text)) {
					          printf('<a class="utility-custom-%1$s" href="%2$s"%3$s>%4$s</a>', $i, $url, $target, $text);
					      }
					  }
					?>
                  <?php if ("" !== get_option('ca_contact_us_link')): ?>
                    <a class="utility-contact-us" href="<?php print get_option('ca_contact_us_link'); ?>">Contact Us</a>
                  <?php endif; ?> 
                  
                  <button class="btn btn-xs btn-primary collapsed" data-toggle="collapse" href="#siteSettings" aria-expanded="false" aria-controls="siteSettings"><span class="ca-gov-icon-gear" aria-hidden="true"></span> Settings</button>

                  <?php if (get_option('ca_geo_locator_enabled')): ?>
                  <button class="btn btn-xs btn-primary collapsed geo-lookup" data-toggle="collapse" href="#locationSettings" aria-expanded="false" aria-controls="locationSettings"><span class="ca-gov-icon-compass" aria-hidden="true"></span><span class="located-city-name"></span></button>
                  <?php endif; ?>
									<?php if ('custom' == get_option('ca_google_trans_enabled') && "" !== get_option('ca_google_trans_page', '')): ?>
				            <a id="caweb-gtrans-custom" target="<?php print get_option('ca_google_trans_page_new_window', true) ? '_blank' : '_self'  ?>" href="<?php print esc_url(get_option('ca_google_trans_page')) ?>"><?php print "" !== get_option('ca_google_trans_icon') ? caweb_get_icon_span(get_option('ca_google_trans_icon')) : '' ?>Translate</a>
				          <?php endif; ?> 
            </div> 
            <?php if (true === get_option('ca_google_trans_enabled') || 'standard' == get_option('ca_google_trans_enabled')): ?>
              <div class="quarter standard-translate" id="google_translate_element"></div>
            <?php endif; ?>						  
        </div>          
    </div>
</div>