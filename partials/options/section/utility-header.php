<!-- Utility Header Section -->
<div>
    <a class="collapsed d-inline-block text-decoration-none" data-toggle="collapse" href="#utility-header-settings" role="button" aria-expanded="false" aria-controls="utility-header-settings">
        <h2 class="border-bottom mb-0">Utility Header <span class="text-secondary ca-gov-icon-"></span></h2>
    </a>
</div>
<div class="collapse border p-3" id="utility-header-settings" data-parent="#general-settings">
        <!-- Contact Us Page Row -->
        <div class="form-row">
            <label for="ca_site_version" class="w-100" data-toggle="tooltip" data-placement="top" title="Select a page as the &quot;Contact Us&quot; page to be used in the utility header."><strong>Contact Us Page</strong></label>
            <div class="form-group col-sm-5">
                <input type="text" name="ca_contact_us_link" id="ca_contact_us_link" class="form-control" value="<?php print $contact_us_link ?>">
            </div>
        </div>

        <!-- Enable Geo Locator & Menu Home Link Row -->
        <div class="form-row">
            <!-- Enable Geo Locator -->
            <div class="form-group col-4">
                <label for="ca_geo_locator_enabled" class="w-100" data-toggle="tooltip" data-placement="top" title="Displays a geo locator feature at the top right of each page."><strong>Enable Geo Locator</strong></label>
                <input type="checkbox" name="ca_geo_locator_enabled" id="ca_geo_locator_enabled" data-toggle="toggle" <?php print $geo_locator_enabled ?>> 
            </div>
            <!-- Home Link -->
            <div class="form-group col-4">
                <label for="ca_utility_home_icon" class="w-100" data-toggle="tooltip" data-placement="top" title="Adds a home link to the utility header."><strong>Home Link</strong></label>
                <input type="checkbox" name="ca_utility_home_icon" id="ca_utility_home_icon" data-toggle="toggle"  <?php print $utility_header_home_icon ?>>
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
                if( ('init' == $enable && ! empty($url)  &&  ! empty($name) ) ||
                    true === $enable ){
                    $enable = ' checked';
                } else{
                    $enable = '';
                }
            ?>
            <!-- Custom Link <?php print $i ?> -->
            <div class="form-group col">
                <label for="<?php print $p ?>_enable" class="w-100" data-toggle="tooltip" data-placement="top" title="Enable a custom link for the header."><strong>Custom Link <?php print $i ?>?</strong></label>
                <a data-toggle="collapse" href="#custom_link_<?php print $i ?>" aria-expanded="<?php print ! empty($enable) ? 'true' : 'false'  ?>" aria-controls="custom_link_<?php print $i ?>" class="shadow-none">
                    <input type="checkbox" name="<?php print $p ?>_enable" data-toggle="toggle"<?php print $enable ?>>
                </a> 
                <div id="custom_link_<?php print $i ?>" class="collapse<?php print ! empty($enable) ? ' show' : ''  ?>">
                    <!-- Link Label -->
                    <label for="<?php print $p ?>_name" class="w-100" data-toggle="tooltip" data-placement="top" title="This is the text you want to display for this custom link in the utility header."><strong>Custom Link <?php print $i ?> Label</strong></label>
                    <input type="text" name="<?php print $p ?>_name" id="<?php print $p ?>_name" class="form-control w-75" value="<?php print $name ?>"/>

                    <!-- Link Url -->
                     <label for="<?php print $p ?>" class="w-100" data-toggle="tooltip" data-placement="top" title="Adds a custom link to the utility header."><strong>Custom Link <?php print $i ?> URL</strong></label>
                    <input type="text" name="<?php print $p ?>" id="<?php print $p ?>" class="form-control w-75" value="<?php print $url ?>"/>

                     <!-- Link Target -->
                     <label for="<?php print $p ?>_new_window" class="w-100"><strong>Open in New Tab</strong></label>
                     <input type="checkbox" name="<?php print $p ?>_new_window" id="<?php print $p ?>_new_window" data-toggle="toggle"<?php print $target ?> />
                
                </div>
            </div>
            <?php endfor; ?>
        </div>

    </div>