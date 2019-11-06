<!-- Social Media Links -->
<div class="p-2 hidden" id="social-share">
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
			$header_checked = get_option(sprintf('%1$s_header', $option)) ? ' checked="checked"' : '';
		    $footer_checked = get_option(sprintf('%1$s_footer', $option)) ? ' checked="checked"' : '';
			$new_window_checked = get_option(sprintf('%1$s_new_window', $option)) ? ' checked="checked"' : '';
    ?>
    <div class="form-row">
        <a class="caweb-option d-block text-decoration-none" data-toggle="collapse" href="#<?php print $option ?>-settings" role="button" aria-expanded="false" aria-controls="<?php print $option ?>-settings">
            <h2 class="d-inline border-bottom"><?php print $social; ?></h2>
            <span class="text-secondary"></span>
        </a>
    </div>
    <div class="form-row collapse border p-2" id="<?php print $option ?>-settings">
        <?php if( ! $share_email ): ?>
        <!-- Option URL -->
        <div class="form-group col-md-12">
            <input type="text" class="form-control w-50" name="<?php print $option; ?>" id="<?php print $option; ?>"value="<?php print get_option($option) ?>" />
        </div>
        <?php endif; ?>
        <!-- Show in header -->
        <div class="form-group col-sm-2">
            <label for="<?php print $option; ?>_header" class="w-100 mb-2 d-inline-block">Show in header:</label>
            <input type="checkbox" name="<?php print $option; ?>_header" data-toggle="toggle" data-size="xs"<?php print $header_checked ?>>
        </div>
        <!-- Show in footer -->
        <div class="form-group col-sm-2">
            <label for="<?php print $option; ?>_footer" class="w-100 mb-2 d-inline-block">Show in footer:</label>
            <input type="checkbox" name="<?php print $option; ?>_footer" data-toggle="toggle" data-size="xs"<?php print $footer_checked ?>>
        </div>
        <?php if( ! $share_email ): ?>
        <!-- Open in New Tab -->
        <div class="form-group col-sm-2">
            <label for="<?php print $option; ?>_new_window" class="w-100 mb-2 d-inline-block">Open in New Tab:</label>
            <input type="checkbox" name="<?php print $option; ?>_new_window" data-toggle="toggle" data-size="xs"<?php print $new_window_checked?>>
        </div>
        <?php endif; ?>
    </div>

    <?php 
        } 
    ?>
        
    
</div>
