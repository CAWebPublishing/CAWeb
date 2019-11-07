<!-- Alert Banners -->
<div class="p-2 collapse" id="alert-banners" data-parent="#caweb-settings">
    <div class="form-row">
        <div class="form-group">
            <h2 class="d-inline">Create an Alert Banner <a class="dashicons dashicons-plus-alt tooltip" data-toggle="tooltip" title="Add Alert Banner (Note: This feature has a known WordPress issue when using the Chrome Browser.)"></a></h2>
        </div>
    </div>
        
    <ul class="list-group">
        <?php
            foreach ($alerts as $a => $data) :
                $header = $data['header'];
                $default_header = ! empty($header) ? $header : "Label";
                $count = $a + 1;
                $status = 'active' == $data['status'] ? ' checked' : '';
                $alert_home = 'home' == $data['page_display'] ? ' checked' : '';

                $banner_color = $data['color'];

                $readmore =  "on" == $data['button'] ? ' checked' : '';
                $readmore_url = $data['url'];
                $readmore_target = "_blank" == $data['target'] ? ' checked' : '';

                $alert_icon = $data['icon'];
        ?>
        <li>
            <!-- Alert Banner Row -->
            <div class="form-row">
                <a class="caweb-option d-block text-decoration-none" data-toggle="collapse" href="#alert-banner-<?php print $count; ?>" role="button" aria-expanded="false" aria-controls="alert-banner-<?php print $count; ?>">
                    <h2 class="d-inline border-bottom"><?php print $default_header; ?></h2>
                    <span class="text-secondary"></span>
                </a>
                <!-- Alert Options -->
                <div class="form-group col-sm text-right">
                    <input type="checkbox"<?php print $status; ?> class="form-control" data-toggle="toggle" data-on="Enabled" data-off="Disabled" data-onstyle="success" data-offstyle="danger">
                    <a class="text-danger dashicons dashicons-dismiss align-middle"></a>
                </div>
            <!-- Alert Banner Fields -->
            <div id="alert-banner-<?php print $count; ?>" class="form-row col-sm-12 border p-2 collapse">
                <!-- Alert Banner Header -->
                <div class="form-group col-sm-7">
                    <label for="alert-header-<?php print $count ?>">Header</label>
                    <input placeholder="Label" class="form-control" name="alert-header-<?php print $count ?>" type="text" value="<?php print $header ?>">
                </div>

                <!-- Alert Banner Message -->
                <div class="form-group col-sm-12">
                    <a class="caweb-option text-decoration-none text-reset" data-toggle="collapse" href="#alert-message-<?php print $count; ?>_iframe" role="button" aria-expanded="false" aria-controls="alert-message-<?php print $count; ?>_iframe">
                        <label class="border-bottom" for="alert-message-<?php print $count ?>">Message</label>
                        <span class="text-secondary"></span>
                    </a>
                    <div id="alert-message-<?php print $count; ?>_iframe" class="collapse">
                        <?php print wp_editor(stripslashes($data['message']), "alert-message-$count", caweb_tiny_mce_settings()); ?>
                    </div>
                </div>

                <!-- Alert Banner Settings -->
                <div class="form-group col-sm-12">
                    <a class="caweb-option text-decoration-none text-reset" data-toggle="collapse" href="#alert-message-<?php print $count; ?>-settings" role="button" aria-expanded="false" aria-controls="alert-message-<?php print $count; ?>-settings">
                        <label class="border-bottom">Settings</label>
                        <span class="text-secondary"></span>
                    </a>
                    <div id="alert-message-<?php print $count; ?>-settings" class="collapse">
                        <!-- Display On -->
                        <div class="form-group col-sm-5 d-inline-block pl-0">
                            <label class="d-block">Display on</label>
                            <input type="checkbox" <?php print $alert_home ?> name="alert-display-<?php print $count; ?>" class="form-control" data-toggle="toggle" data-on="Home Page Only" data-off="All Pages" data-style="w-75">
                        </div>

                        <!-- Banner Color -->
                        <div class="form-group col-sm-5 d-inline-block pl-0">
                            <label class="d-block">Banner Color</label>
                            <input type="color" name="alert-banner-color-<?php print $count; ?>" value="<?php print $banner_color ?>" class="form-control w-50">
                        </div>

                        <!-- Read More Button -->
                        <div class="form-group col-sm-2 d-inline-block pl-0">
                            <label class="d-block">Read More Button</label>
                            <a data-toggle="collapse" href="#alert-banner-read-more-<?php print $count ?>">
                                <input type="checkbox" name="alert-read-more-<?php print $count; ?>" <?php print $readmore ?> data-toggle="toggle" class="form-control">
                            </a>
                        </div>

                        <div id="alert-banner-read-more-<?php print $count ?>" class="col-sm-8 d-inline-block ">
                            <!-- Read More Button URL -->
                            <div class="form-group col-sm-6 d-inline-block pl-0">
                                <label class="d-block">Read More Button URL</label>
                                <input type="text" name="alert-read-more-url-<?php print $count; ?>" class="form-control" value="<?php print $readmore_url ?>">
                            </div>

                            <!-- Read More Button Target -->
                            <div class="form-group col-sm-4 d-inline-block pl-0">
                                <label class="d-block">Open link in</label>
                                <input type="checkbox" name="alert-read-more-target-<?php print $count; ?>" <?php print $readmore_target ?> data-on="New Tab" data-off="Current Tab" data-toggle="toggle" data-style="w-75" class="form-control">
                            </div>
                        </div>
                        
                        <!-- Banner Icon -->
                        <div class="form-group col-sm-5 d-inline-block pl-0">
                            <label class="d-block">Add Icon <span class="dashicons dashicons-image-rotate resetAlertIcon"></span></label>
                            <ul id="caweb-icon-menu" class="autoUpdate">
                                <?php
                                    $icons = caweb_get_icon_list(-1, '', true);
                                    $iconList = '';
                                    foreach ($icons as $i) :
                                        $i == $alert_icon ? "$i selected" : $i;
                                ?>
                                    <li class="icon-option ca-gov-icon-<?php print $i; ?>" title="<?php print $i; ?>"></li>;
                                    
                                <?php endforeach; ?>
                            </ul>
                            <input type="hidden" name="alert-icon-<?php print $count; ?>" value="<?php print $alert_icon ?>">
                        </div>
                    </div>
                </div>
            </div>
            
        </li>
        <?php endforeach; ?>
        <input id="caweb_alert_count" type="hidden" name="caweb_alert_count" value="<?php print count($alerts) ?>">
    </ul>
</div>
