<!-- Social Media Links -->
<div class="p-2 collapse<?php print 'social-share' === $tab ? ' show' : ''; ?>" id="social-share" data-parent="#caweb-settings">
    <div class="form-row">
        <div class="form-group">
            <h2 class="d-inline">Social Media Links</h2>
        </div>
    </div>
    <?php
		$social_options = caweb_get_site_options('social');
        foreach ($social_options as $social => $option) {
            $share_email = 'ca_social_email' === $option ? true : false;
            $social = $share_email ? "Share via $social" : $social;
			$header_checked = get_option(sprintf('%1$s_header', $option)) ? ' checked' : '';
		    $footer_checked = get_option(sprintf('%1$s_footer', $option)) ? ' checked' : '';
			$new_window_checked = get_option(sprintf('%1$s_new_window', $option)) ? ' checked' : '';
    ?>
    <div class="form-row">
        <a class="collapsed d-block text-decoration-none" data-toggle="collapse" href="#<?php print $option ?>-settings" role="button" aria-expanded="false" aria-controls="<?php print $option ?>-settings">
            <h2 class="d-inline"><?php print $social; ?> <span class="text-secondary ca-gov-icon-"></span></h2>
        </a>
    </div>
    <div class="form-row collapse pt-2" id="<?php print $option ?>-settings">
        <?php if( ! $share_email ): ?>
        <!-- Option URL -->
        <div class="form-group col-md-12">
            <input type="text" class="form-control w-50" name="<?php print $option; ?>" aria-label="<?php print $social?>" value="<?php print get_option($option) ?>" />
            <small class="text-muted d-block">Enter social media URL share link.</small>
        </div>
        <?php endif; ?>
        <!-- Show in header -->
        <div class="form-group col-sm-3">
            <label for="<?php print $option; ?>_header" class="d-block"><strong>Show in header:</strong></label>
            <small class="text-muted d-block">Display social link in the utility header.</small>
            <input type="checkbox" id="<?php print $option; ?>_header" name="<?php print $option; ?>_header" data-toggle="toggle" data-onstyle="success"<?php print $header_checked ?>>
        </div>
        <!-- Show in footer -->
        <div class="form-group col-sm-3">
            <label for="<?php print $option; ?>_footer" class="d-block"><strong>Show in footer:</strong></label>
            <small class="text-muted d-block">Display social link in the footer.</small>
            <input type="checkbox" id="<?php print $option; ?>_footer" name="<?php print $option; ?>_footer" data-toggle="toggle" data-onstyle="success"<?php print $footer_checked ?>>
        </div>
        <?php if( ! $share_email ): ?>
        <!-- Open in New Tab -->
        <div class="form-group col-sm-3">
            <label for="<?php print $option; ?>_new_window" class="d-block"><strong>Open in New Tab:</strong></label>
            <small class="text-muted d-block">Open link in new tab.</small>
            <input type="checkbox" id="<?php print $option; ?>_new_window" name="<?php print $option; ?>_new_window" data-on="Yes" data-off="No" data-toggle="toggle" data-onstyle="success"<?php print $new_window_checked?>>
        </div>
        <?php endif; ?>
    </div>

    <?php 
        } 
    ?>
        
    
</div>
