<!-- Alert Banners -->
<div class="p-2 collapse" id="alert-banners" data-parent="#caweb-settings">
    <div class="form-row">
        <div class="form-group">
            <h2 class="d-inline">Create an Alert Banner </h2>
            <span class="dashicons dashicons-plus-alt align-middle mb-1 text-info" id="add-alert"></span>
            <small class="mb-2 text-muted d-block">Add Alert Banner (Note: This feature has a known WordPress issue when using the Chrome Browser.)</small>
        </div>
    </div>
        
    <ul id="alertBanners">
        <?php
            if (! empty($alerts)) {
                foreach ($alerts as $a => $data) :
                    $header = $data['header'];
                $default_header = ! empty($header) ? $header : "Label";
                $count = $a + 1;
                $status = 'active' == $data['status'] ? ' checked' : '';
                $alert_home = 'home' == $data['page_display'] ? ' checked' : '';
                $alert_all = 'all' == $data['page_display'] ? ' checked' : '';

                $banner_color = $data['color'];

                $readmore =  "on" == $data['button'] ? ' checked' : '';
                $readmore_url = $data['url'];
                $readmore_target = "_blank" == $data['target'] ? ' checked' : '';

                $alert_icon = $data['icon']; ?>
        <li>
            <!-- Alert Banner Row -->
            <div class="form-row">
                <span class="text-danger dashicons dashicons-dismiss remove-alert mr-2"></span>
                <a class="collapsed d-block text-decoration-none" data-toggle="collapse" href="#alert-banner-<?php print $count; ?>" aria-expanded="false" aria-controls="alert-banner-<?php print $count; ?>">
                    <h2 class="d-inline border-bottom"><?php print $default_header; ?> <span class="text-secondary ca-gov-icon-"></span></h2>
                </a>
                <!-- Alert Options -->
                <div>
                    <div class="dashicons align-middle bg-success rounded-circle alert-status mb-0"></div>
                    <input type="hidden" name="alert-status-<?php print $count ?>">
                </div>

                <!-- Alert Banner Fields -->
                <div id="alert-banner-<?php print $count; ?>" class="form-row col-sm-12 border p-2 collapse">
                <!-- Alert Banner Header -->
                <div class="form-group col-sm-7">
                    <label for="alert-header-<?php print $count ?>" class="mb-0">Header</label>
                    <small class="text-muted d-block mb-2">Enter header text for the alert.</small>
                    <input placeholder="Label" class="form-control" id="alert-header-<?php print $count ?>" name="alert-header-<?php print $count ?>" type="text" value="<?php print $header ?>">
                </div>

                <!-- Alert Banner Message -->
                <div class="form-group col-sm-12">
                    <a class="collapsed text-decoration-none text-reset" data-toggle="collapse" href="#alert-message-<?php print $count; ?>_iframe" aria-expanded="false" aria-controls="alert-message-<?php print $count; ?>_iframe">
                        <label class="border-bottom" for="alert-message-<?php print $count ?>">Message <span class="text-secondary ca-gov-icon-"></span></label>
                        <small class="text-muted d-block mb-2">Enter message for the alert</small>
                    </a>
                    <div id="alert-message-<?php print $count; ?>_iframe" class="collapse">
                        <?php print wp_editor(stripslashes($data['message']), "alert-message-$count", caweb_tiny_mce_settings()); ?>
                    </div>
                </div>

                <!-- Alert Banner Settings -->
                <div class="form-group col-sm-12">
                    <a class="collapsed text-decoration-none text-reset" aria-label="CAWeb Alert Banner Settings" data-toggle="collapse" href="#alert-<?php print $count; ?>-settings" aria-expanded="false" aria-controls="alert-<?php print $count; ?>-settings">
                        <label class="border-bottom">Settings <span class="text-secondary ca-gov-icon-"></span></label>
                    </a>
                    <div id="alert-<?php print $count; ?>-settings" class="collapse">
                        <!-- Display On -->
                        <div class="form-group col-sm pl-0" role="radiogroup" aria-label="Alert Display On Options">
                            <label class="d-block mb-0"><strong>Display on</strong></label>
                            <small class="text-muted d-block mb-2">Select whether alert should display on home page or on all pages.</small>
                            <div class="form-check form-check-inline">
                                <input 
                                    id="alert-display-home-<?php print $count; ?>" 
                                    name="alert-display-<?php print $count; ?>" 
                                    class="form-check-input" 
                                    type="radio" 
                                    value="home"
                                    <?php print $alert_home ?>>
                                <label class="form-check-label" for="alert-display-home-<?php print $count; ?>">Home Page Only</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input 
                                    id="alert-display-all-<?php print $count; ?>" 
                                    name="alert-display-<?php print $count; ?>" 
                                    class="form-check-input" 
                                    type="radio" 
                                    value="all"
                                    <?php print $alert_all ?>>
                                <label class="form-check-label" for="alert-display-all-<?php print $count; ?>">All Pages</label>
                            </div>
                        </div>

                        <!-- Banner Color -->
                        <div class="form-group col-sm pl-0">
                            <label for="alert-banner-color-<?php print $count; ?>"><strong>Banner Color</strong></label>
                            <small class="text-muted d-block mb-2">Select a color for the alert banner.</small>
                            <input type="color" id="alert-banner-color-<?php print $count; ?>" name="alert-banner-color-<?php print $count; ?>" value="<?php print $banner_color ?>" class="form-control-sm">
                        </div>

                        <!-- Read More Button -->
                        <div class="form-group pl-0">
                            <label for="alert-read-more-<?php print $count; ?>" class="d-block"><strong>Read More Button</strong></label>
                            <a data-toggle="collapse" href="#alert-banner-read-more-<?php print $count ?>" class="shadow-none"> 
                                <input type="checkbox" id="alert-read-more-<?php print $count; ?>" name="alert-read-more-<?php print $count; ?>" <?php print $readmore ?> data-toggle="toggle" class="form-control">
                            </a>
                        </div>
                        
                        <div id="alert-banner-read-more-<?php print $count ?>" class="collapse<?php print ! empty($readmore) ? ' show' : ''; ?>">
                            <!-- Read More Button URL -->
                            <div class="form-group col-sm-6 pl-0 d-inline-block">
                                <label for="alert-read-more-url-<?php print $count; ?>" class="d-block"><strong>Read More Button URL</strong></label>
                                <input type="text" id="alert-read-more-url-<?php print $count; ?>" name="alert-read-more-url-<?php print $count; ?>" class="form-control" value="<?php print $readmore_url ?>">
                            </div>

                            <!-- Read More Button Target -->
                            <div class="form-group col-sm-4 pl-0 d-inline-block align-top">
                                <label for="alert-read-more-target-<?php print $count; ?>"class="d-block"><strong>Open link in New Tab</strong></label>
                                <input type="checkbox" id="alert-read-more-target-<?php print $count; ?>" name="alert-read-more-target-<?php print $count; ?>" <?php print $readmore_target ?> data-on="Yes" data-off="No" data-toggle="toggle" class="form-control">
                            </div>
                        </div>

                        <!-- Banner Icon -->
                        <div class="form-group col-sm-12 d-inline-block pl-0">
                            <?php print caweb_icon_menu(array('select' => $alert_icon, 'name' => "alert-icon-$count")); ?>
                        </div>
                    </div>
                </div>
            </div>
            
        </li>
        <?php 
                endforeach;
            }
        ?>
        <input id="caweb_alert_count" type="hidden" name="caweb_alert_count" value="<?php print ! empty($alerts) ? count($alerts) : 0; ?>">
    </ul>
</div>
