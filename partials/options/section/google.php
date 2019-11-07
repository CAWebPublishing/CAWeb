<!-- Google Section -->
<a class="caweb-option d-block text-decoration-none" data-toggle="collapse" href="#google-settings" role="button" aria-expanded="false" aria-controls="google-settings">
    <h2 class="d-inline border-bottom">Google</h2>
    <span class="text-secondary"></span>
</a>
<div class="collapse border p-3" id="google-settings" data-parent="#general-settings">
        <!-- Search Engine ID Row -->
        <div class="form-row">
            <label for="ca_google_search_id" class="w-100 mb-2" data-toggle="tooltip" data-placement="top" title="Enter your unique Google search engine ID, if you don't have one see an administrator."><strong>Search Engine ID</strong></label>
            <div class="form-group col-md-5">
                <!-- Search Engine ID Field -->
                <input type="text" name="ca_google_search_id" id="ca_google_search_id" class="form-control" value="<?php print $google_search_id ?>" >
            </div>

        </div>
        
        <!-- Analytics ID Row -->
        <div class="form-row">
            <label for="ca_google_analytic_id" class="w-100 mb-2" data-toggle="tooltip" data-placement="top" title="Enter your unique Google analytics ID, if you don't have one see an administrator."><strong>Analytics ID</strong></label>
            <div class="form-group col-md-5">
                <!-- Analytics ID Field -->
                <input type="text" name="ca_google_analytic_id" id="ca_google_analytic_id" class="form-control" value="<?php print $google_analytic_id ?>" >
            </div>

        </div>

        <!-- Meta ID Row -->
        <div class="form-row">
            <label for="ca_google_meta_id" class="w-100 mb-2" data-toggle="tooltip" data-placement="top" title="Enter your unique Google meta ID, if you don't have one see an administrator."><strong>Meta ID</strong></label>
            <div class="form-group col-md-5">
                <!-- Meta ID Field -->
                <input type="text" name="ca_google_meta_id" id="ca_google_meta_id" class="form-control" value="<?php print $google_search_id ?>" >
            </div>

        </div>

        <!-- Google Translate Row -->
        <div class="form-row">
            <label for="ca_google_trans_enabled" class="w-100 mb-2" data-toggle="tooltip" data-placement="top" title="Displays the Google translate feature at the top right of each page."><strong>Enable Google Translate</strong></label>

            <div class="form-group">
                <!-- Google Translate None -->
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="ca_google_trans_enabled" id="ca_google_trans_enabled_none" value="none"<?php print false === $google_translate_mode || 'none' == $google_translate_mode ? ' checked="checked"' : '' ?>>
                    <label class="form-check-label" for="ca_google_trans_enabled_none">None</label>
                </div>
        
                <!-- Google Translate Standard -->
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" value="standard" name="ca_google_trans_enabled" id="ca_google_trans_enabled_standard" <?php print true === $google_translate_mode || 'standard' == $google_translate_mode ? ' checked="checked"' : '' ?>>
                    <label class="form-check-label" for="ca_google_trans_enabled_standard">Standard</label>
                </div>
        
                <!-- Google Translate Custom -->
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="ca_google_trans_enabled_custom" value="custom" name="ca_google_trans_enabled" <?php print 'custom' == $google_translate_mode ? ' checked="checked"' : '' ?>>
                    <label class="form-check-label" for="ca_google_trans_enabled_custom">Custom</label>
                </div>
            </div>

        </div>

        <!-- Google Translate Custom Extras -->
        <div class="form-row" id="ca_google_trans_enabled_custom_extras">
            <!-- Google Translate Page -->
            <div class="form-group col-md-6">
                <label for="ca_google_trans_page" class="w-100 mb-2"><strong>Translate Page</strong></label>
                
                <!-- Translate Page Field -->
                <input type="text" name="ca_google_trans_page" id="ca_google_trans_page" class="form-control" value="<?php print $google_translate_page ?>" >
            
                <!-- Open Translate in New Page -->
                <label for="ca_google_trans_page_new_window" class="w-100 mb-2 d-inline-block">Open in New Tab: <input type="checkbox" name="ca_google_trans_page_new_window" id="ca_google_trans_page_new_window" <?php print $google_translate_new_window ?> /></label>
            </div>

            <!-- Google Translate Icon -->
            <div class="form-group col-md-6">
                <label for="ca_google_trans_icon" class="w-100 mb-2"><span class="dashicons dashicons-image-rotate resetIcon resetGoogleIcon"></span><strong>Icon</strong></label>
                <ul id="caweb-icon-menu" class="autoUpdate">
                <?php
                    $icons = caweb_get_icon_list(-1, '', true);
                    $iconList = '';
                    foreach ($icons as $i) {
                        printf('<li class="icon-option ca-gov-icon-%1$s%2$s" title="%1$s"></li>', $i, $google_translate_icon == $i ? ' selected' : '');
                    }
                ?>
                <input type="hidden" name="ca_google_trans_icon" value="<?php print $google_translate_icon ?>" >
                </ul>
            </div>

            <div class="form-group col-md-6">
                <input id="caweb-google-trans-shorcode" type="text" class="form-control" readonly value="[caweb_google_translate /]">
            </div>
        </div>

</div>