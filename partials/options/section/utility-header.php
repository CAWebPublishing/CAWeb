<!-- Utility Header Section -->
<div>
    <a class="collapsed d-inline-block text-decoration-none" data-toggle="collapse" href="#utility-header-settings" role="button" aria-expanded="false" aria-controls="utility-header-settings">
        <h2 class="border-bottom mb-0">Utility Header <span class="text-secondary ca-gov-icon-"></span></h2>
    </a>
</div>
<div class="collapse border p-3" id="utility-header-settings" data-parent="#general-settings">
        <!-- Contact Us Page Row -->
        <div class="form-row">
            <label for="ca_site_version" class="w-100 mb-2" data-toggle="tooltip" data-placement="top" title="Select a page as the &quot;Contact Us&quot; page to be used in the utility header."><strong>Contact Us Page</strong></label>
            <div class="form-group col-md-5">
                <input type="text" name="ca_contact_us_link" id="ca_contact_us_link" class="form-control" value="<?php print $contact_us_link ?>">
            </div>
        </div>

        <!-- Enable Geo Locator & Menu Home Link Row -->
        <div class="form-row">
            <!-- Enable Geo Locator -->
            <div class="form-group col-3">
                <label for="ca_geo_locator_enabled" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="Displays a geo locator feature at the top right of each page."><strong>Enable Geo Locator</strong></label>
                <input type="checkbox" name="ca_geo_locator_enabled" id="ca_geo_locator_enabled" data-toggle="toggle" <?php print $geo_locator_enabled ?>> 
            </div>
            <!-- Home Link -->
            <div class="form-group col-3">
                <label for="ca_utility_home_icon" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="Adds a home link to the utility header."><strong>Home Link</strong></label>
                <input type="checkbox" name="ca_utility_home_icon" id="ca_utility_home_icon" data-toggle="toggle"  <?php print $utility_header_home_icon ?>>
            </div>
        </div>

        <!-- Custom Link Row -->
        <div class="form-row">
            <!-- Custom Link 1 -->
            <div class="form-group col-6">
                <label for="ca_enable_custom_link_1" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="Enable a custom link for the header."><strong>Custom Link 1?</strong></label>
                <a data-toggle="collapse" href="#custom_link_1" aria-expanded="false" aria-controls="custom_link_1" class="shadow-none">
                    <input type="checkbox" name="ca_enable_custom_link_1" data-toggle="toggle" >
                </a> 
                <div id="custom_link_1">
                    <!-- Link Label -->
                    <label for="ca_enable_custom_link_1" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="This is the text you want to display for this custom link in the utility header."><strong>Custom Link 1 Label</strong></label>
                    <input type="text" name="ca_utility_link_1_name" id="ca_utility_link_1_name" class="form-control w-75" value="<?php print $ca_utility_link_1_name ?>"/>

                    <!-- Link Url -->
                     <label for="ca_utility_link_1" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="Adds a custom link to the utility header."><strong>Custom Link 1 URL</strong></label>
                    <input type="text" name="ca_utility_link_1" id="ca_utility_link_1" class="form-control w-75" value="<?php print $ca_utility_link_1_url ?>"/>

                     <!-- Link Target -->
                     <label for="ca_utility_link_1_new_window" class="w-100 mb-2 d-inline-block">Open in New Tab: <input type="checkbox" name="ca_utility_link_1_new_window" id="ca_utility_link_1_new_window" <?php print $ca_utility_link_1_target ?> /></label>
                
                </div>
            </div>
            <!-- Custom Link 2 -->
            <div class="form-group col-6">
                <label for="ca_enable_custom_link_2" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="Enable a custom link for the header."><strong>Custom Link 2?</strong></label>
                <a data-toggle="collapse" href="#custom_link_2" aria-expanded="false" aria-controls="custom_link_2" class="shadow-none">
                    <input type="checkbox" name="ca_enable_custom_link_2" data-toggle="toggle" >
                </a> 
                <div id="custom_link_2">
                    <!-- Link Label -->
                    <label for="ca_enable_custom_link_2" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="This is the text you want to display for this custom link in the utility header."><strong>Custom Link 2 Label</strong></label>
                    <input type="text" name="ca_utility_link_2_name" id="ca_utility_link_2_name" class="form-control w-75" value="<?php print $ca_utility_link_2_name ?>"/>

                     <!-- Link Url -->
                     <label for="ca_utility_link_2" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="Adds a custom link to the utility header."><strong>Custom Link 2 URL</strong></label>
                    <input type="text" name="ca_utility_link_2" id="ca_utility_link_2" class="form-control w-75" value="<?php print $ca_utility_link_2_url ?>"/>

                     <!-- Link Target -->
                     <label for="ca_utility_link_2_new_window" class="w-100 mb-2 d-inline-block">Open in New Tab: <input type="checkbox" name="ca_utility_link_2_new_window" id="ca_utility_link_2_new_window" <?php print $ca_utility_link_2_target ?> /></label>
                
                </div>
            </div>
            <!-- Custom Link 3 -->
            <div class="form-group col-6">
                <label for="ca_enable_custom_link_3" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="Enable a custom link for the header."><strong>Custom Link 3?</strong></label>
                <a data-toggle="collapse" href="#custom_link_3" aria-expanded="false" aria-controls="custom_link_3" class="shadow-none">
                    <input type="checkbox" name="ca_enable_custom_link_3" data-toggle="toggle" >
                </a> 
                <div id="custom_link_3">
                    <!-- Link Label -->
                    <label for="ca_utility_link_3_name" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="This is the text you want to display for this custom link in the utility header."><strong>Custom Link 3 Label</strong></label>
                    <input type="text" name="ca_utility_link_3_name" id="ca_utility_link_3_name" class="form-control w-75" value="<?php print $ca_utility_link_3_name ?>"/>
                    
                    <!-- Link Url -->
                    <label for="ca_utility_link_3" class="w-100 mb-2 d-inline-block" data-toggle="tooltip" data-placement="top" title="Adds a custom link to the utility header."><strong>Custom Link 3 URL</strong></label>
                    <input type="text" name="ca_utility_link_3" id="ca_utility_link_3" class="form-control w-75" value="<?php print $ca_utility_link_3_url ?>"/>
                
                    <!-- Link Target -->
                    <label for="ca_utility_link_3_new_window" class="w-100 mb-2 d-inline-block">Open in New Tab: <input type="checkbox" name="ca_utility_link_3_new_window" id="ca_utility_link_3_new_window" <?php print $ca_utility_link_3_target ?> /></label>
                
                </div>
            </div>
        </div>

    </div>