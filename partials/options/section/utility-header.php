<!-- Utility Header Section -->
<div>
    <a class="collapsed d-inline-block text-decoration-none" data-toggle="collapse" href="#utility-header-settings" role="button" aria-expanded="false" aria-controls="utility-header-settings">
        <h2 class="mb-0">Utility Header <span class="text-secondary ca-gov-icon-"></span></h2>
    </a>
</div>
<div class="collapse" id="utility-header-settings" data-parent="#general-settings">
        <!-- Contact Us Page Row -->
        <div class="form-row">
            <div class="form-group col-sm-5">
                <label for="ca_contact_us_link" class="d-block mb-0"><strong>Contact Us Page</strong></label>
                <small class="mb-2 text-muted d-block">Enter the URL to your &quot;Contact Us&quot; page.</small>
                <input type="text" name="ca_contact_us_link" id="ca_contact_us_link" class="form-control" value="<?php print $contact_us_link ?>">
            </div>
        </div>

        <!-- Enable Geo Locator & Menu Home Link Row -->
        <div class="form-row">
            <!-- Enable Geo Locator -->
            <div class="form-group col-4">
                <label for="ca_geo_locator_enabled" class="d-block mb-0"><strong>Enable Geo Locator</strong></label>
                <small class="mb-2 text-muted d-block">Displays a geo locator feature at the top right of each page.</small>
                <input type="checkbox" name="ca_geo_locator_enabled" id="ca_geo_locator_enabled" data-toggle="toggle" <?php print $geo_locator_enabled ?>> 
            </div>
            <!-- Home Link -->
            <div class="form-group col-4">
                <label for="ca_utility_home_icon" class="d-block mb-0"><strong>Home Link</strong></label>
                <small class="mb-2 text-muted d-block">Put a home icon/link on the left side of the utility header.</small>
                <input type="checkbox" name="ca_utility_home_icon" id="ca_utility_home_icon" data-toggle="toggle" data-onstyle="success" <?php print $utility_header_home_icon ?>>
            </div>
        </div>

        <!-- Custom Link Row -->
        <div class="form-row">
            <?php 
            for( $i = 1; $i <= 3; $i++):
                $p = "ca_utility_link_$i";
                $name = get_option("{$p}_name", '');
                $url = get_option("$p", '');
                $target = get_option("{$p}_new_window", true) ? ' checked' : '';
                $enable = get_option("{$p}_enable", 'init');
                
                if( ('init' === $enable && ! empty($url)  &&  ! empty($name) ) || $enable ){
                    $enable = ' checked';
                } else{
                    $enable = '';
                }
            ?>
            <!-- Custom Link <?php print $i ?> -->
            <div class="form-group col">
                <label for="<?php print $p ?>_enable" class="d-block mb-0"><strong>Custom Link <?php print $i ?></strong></label>
                <small class="mb-2 text-muted d-block">Enable a custom link.</small>
                <a data-toggle="collapse" href="#custom_link_<?php print $i ?>" aria-expanded="<?php print ! empty($enable) ? 'true' : 'false'  ?>" aria-controls="custom_link_<?php print $i ?>" class="shadow-none">
                    <input type="checkbox" id="<?php print $p ?>_enable" name="<?php print $p ?>_enable" data-toggle="toggle" data-onstyle="success"<?php print $enable ?>>
                </a> 
                <div id="custom_link_<?php print $i ?>" class="collapse<?php print ! empty($enable) ? ' show' : ''  ?>">
                    <!-- Link Label -->
                    <label for="<?php print $p ?>_name" class="d-block mb-0"><strong>Custom Link <?php print $i ?> Label</strong></label>
                    <small class="mb-2 text-muted d-block">Custom link label text.</small>
                    <input type="text" name="<?php print $p ?>_name" id="<?php print $p ?>_name" class="form-control w-75" value="<?php print $name ?>"/>

                    <!-- Link Url -->
                     <label for="<?php print $p ?>" class="d-block mb-0"><strong>Custom Link <?php print $i ?> URL</strong></label>
                     <small class="mb-2 text-muted d-block">Enter a valid link URL.</small>
                     <input type="text" name="<?php print $p ?>" id="<?php print $p ?>" class="form-control w-75" value="<?php print $url ?>"/>

                     <!-- Link Target -->
                     <label for="<?php print $p ?>_new_window" class="d-block mb-0">
                        <input type="checkbox" name="<?php print $p ?>_new_window" id="<?php print $p ?>_new_window"<?php print $target ?>/>
                        <strong>Open in New Tab</strong>
                    </label>
                     <small class="mb-2 text-muted d-block">Open the link in new tab.</small>
                     
                </div>
            </div>
            <?php endfor; ?>
        </div>

    </div>