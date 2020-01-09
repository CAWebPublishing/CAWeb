<!-- Google Section -->
<div>
    <a class="collapsed d-inline-block text-decoration-none" data-toggle="collapse" href="#google-settings" role="button" aria-expanded="false" aria-controls="google-settings">
        <h2 class="mb-0">Google <span class="text-secondary ca-gov-icon-"></span></h2>
    </a>
</div>
<div class="collapse" id="google-settings" data-parent="#general-settings">
        <!-- Search Engine ID Row -->
        <div class="form-row">
            <div class="form-group col-sm-5">
                <label for="ca_google_search_id" class="d-block mb-0"><strong>Search Engine ID</strong></label>
                <small class="mb-2 text-muted d-block">Enter your unique Google search engine ID, if you don't have one see an administrator.</small>
                <!-- Search Engine ID Field -->
                <input type="text" name="ca_google_search_id" id="ca_google_search_id" class="form-control" value="<?php print $google_search_id ?>" >
            </div>

        </div>
        
        <!-- Analytics ID Row -->
        <div class="form-row">
            <div class="form-group col-sm-5">
                <label for="ca_google_analytic_id" class="d-block mb-0"><strong>Analytics ID</strong></label>
                <small class="mb-2 text-muted d-block">Enter your unique Google analytics ID, if you don't have one see an administrator.</small>
                <!-- Analytics ID Field -->
                <input type="text" name="ca_google_analytic_id" id="ca_google_analytic_id" class="form-control" value="<?php print $google_analytic_id ?>" >
            </div>

        </div>

        <!-- Meta ID Row -->
        <div class="form-row">
            <div class="form-group col-sm-5">
                <label for="ca_google_meta_id" class="d-block mb-0"><strong>Meta ID</strong></label>
                <small class="mb-2 text-muted d-block">Enter your unique Google meta ID, if you don't have one see an administrator.</small>
                <!-- Meta ID Field -->
                <input type="text" name="ca_google_meta_id" id="ca_google_meta_id" class="form-control" value="<?php print $google_search_id ?>" >
            </div>

        </div>

        <!-- Google Translate Row -->
        <div class="form-row">
            <div class="form-group" role="radiogroup" aria-label="Google Translate Modes">
                <label for="ca_google_trans_enabled" class="d-block mb-0"><strong>Enable Google Translate</strong></label>
                <small class="mb-2 text-muted d-block">Displays the Google translate feature at the top right of each page.</small>
                <!-- Google Translate None -->
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="ca_google_trans_enabled" id="ca_google_trans_enabled_none" value="none"<?php print empty($google_translate_mode) || false === $google_translate_mode || 'none' == $google_translate_mode ? ' checked' : '' ?>>
                    <label class="form-check-label" for="ca_google_trans_enabled_none">None</label>
                </div>
        
                <!-- Google Translate Standard -->
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" value="standard" name="ca_google_trans_enabled" id="ca_google_trans_enabled_standard" <?php print true === $google_translate_mode || 'standard' == $google_translate_mode ? ' checked' : '' ?>>
                    <label class="form-check-label" for="ca_google_trans_enabled_standard">Standard</label>
                </div>
        
                <!-- Google Translate Custom -->
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="ca_google_trans_enabled_custom" value="custom" name="ca_google_trans_enabled" <?php print 'custom' == $google_translate_mode ? ' checked' : '' ?>>
                    <label class="form-check-label" for="ca_google_trans_enabled_custom">Custom</label>
                </div>
            </div>

        </div>

        <!-- Google Translate Custom Extras -->
        <div class="form-row collapse <?php print 'custom' == $google_translate_mode ? ' show' : '' ?>" id="ca_google_trans_enabled_custom_extras">
            <!-- Google Translate Page -->
            <div class="form-group col-sm-5">
                <label for="ca_google_trans_page" class="d-block mb-0"><strong>Translate Page</strong></label>
                <small class="mb-2 text-muted d-block">Select a Page/Post where the Google Translate Service is located.</small>
                <!-- Translate Page Field -->
                <input type="text" name="ca_google_trans_page" id="ca_google_trans_page" class="form-control" value="<?php print $google_translate_page ?>" >
            </div>

            <div class="form-group col-sm-2">
                <!-- Open Translate in New Page -->
                <label for="ca_google_trans_page_new_window" class="d-block mb-0"><strong>Open in New Tab</strong></label>
                <small class="mb-2 text-muted d-block">Open link in new tab.</small>
                <input type="checkbox" id="ca_google_trans_page_new_window" name="ca_google_trans_page_new_window" data-on="Yes" data-off="No" data-toggle="toggle" data-onstyle="success"<?php print $google_translate_new_window ?> />
            </div>

            <!-- Google Translate Icon -->
            <div class="form-group col-sm-12">
                <?php print caweb_icon_menu(array('select' => $google_translate_icon, 'name' => 'ca_google_trans_icon', 'header' => 'Icon')); ?>
                <small class="mb-2 text-muted d-block">Select an icon to display in front of the Google Translate Page link.</small>
            </div>

            <div class="form-group col-sm-6">
                <label for="caweb-google-trans-shorcode" class="d-block mb-0"><strong>Google Translate Shortcode</strong></label>
                <small class="mb-2 text-muted d-block">Paste this shortcode on any page to render Google Translate.</small>
                <input id="caweb-google-trans-shorcode" type="text" class="form-control" readonly value="[caweb_google_translate /]">
            </div>
        </div>

</div>