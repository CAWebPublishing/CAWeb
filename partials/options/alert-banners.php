<!-- Alert Banners -->
<div class="p-2 collapse<?php print 'alert-banners' === $caweb_selected_tab ? ' show' : ''; ?>" id="alert-banners" data-parent="#caweb-settings">
    <div class="form-row">
        <div class="form-group">
            <h2 class="d-inline">Create an Alert Banner </h2>
            <button class="btn btn-primary" id="add-alert">New Banner</button>
            <small class="mb-2 text-muted d-block">Add Alert Banner</small>
        </div>
    </div>
        
    <ol id="caweb-alert-banners" class="ml-3">
        <?php
            if (! empty($alerts)) {
                foreach ($alerts as $a => $data) :
                    $header = $data['header'];
                $default_header = ! empty($header) ? $header : "Label";
                $count = $a + 1;
                $status = ! empty( $data['status'] ) ? ' checked' : '';
                $alert_home = 'home' == $data['page_display'] ? ' checked' : '';
                $alert_all = 'all' == $data['page_display'] ? ' checked' : '';

                $banner_color = $data['color'];

                $readmore =  "on" == $data['button'] ? ' checked' : '';
                $readmore_text = isset($data['text']) && ! empty($data['text']) ? substr($data['text'], 0, 16) : 'More Information';
                $readmore_url = $data['url'];
                $readmore_target = "_blank" == $data['target'] ? ' checked' : '';

                $alert_icon = $data['icon']; ?>
        <li class="pl-2">
            <!-- Alert Banner Row -->
            <div class="form-row">
                <a class="collapsed d-block text-decoration-none" data-toggle="collapse" href="#alert-banner-<?php print $count; ?>" aria-expanded="false" aria-controls="alert-banner-<?php print $count; ?>">
                    <h2 class="d-inline"><?php print $default_header; ?> <span class="text-secondary ca-gov-icon-"></span></h2>
                </a>
                <!-- Alert Options -->
                <div>
					<input type="checkbox" name="alert-status-<?php print $count ?>" data-toggle="toggle" data-onstyle="success"<?php print $status ?>>
					<button class="btn btn-danger remove-alert">Remove</button>
                </div>

                <!-- Alert Banner Fields -->
                <div id="alert-banner-<?php print $count; ?>" class="form-row col-sm-12 p-2 collapse">
                <!-- Alert Banner Title -->
                <div class="form-group col-sm-7">
                    <label for="alert-header-<?php print $count ?>" class="mb-0"><strong>Title</strong></label>
                    <small class="text-muted d-block mb-2">Enter header text for the alert.</small>
                    <input placeholder="Label" class="form-control" id="alert-header-<?php print $count ?>" name="alert-header-<?php print $count ?>" type="text" value="<?php print $header ?>">
                </div>

                <!-- Alert Banner Message -->
                <div class="form-group col-sm-12">
					<label for="alert-message-<?php print $count ?>"><strong>Message</strong></label>
                    <small class="text-muted d-block mb-2">Enter message for the alert</small>
                    <?php print wp_editor(stripslashes($data['message']), "alert-message-$count", caweb_tiny_mce_settings()); ?>
                </div>

                <!-- Alert Banner Settings -->
                <div class="form-group col-sm-12">
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
                            <label for="alert-read-more-<?php print $count; ?>" class="d-block mb-0"><strong>Read More Button</strong></label>
                            <a data-toggle="collapse" href="#alert-banner-read-more-<?php print $count ?>" class="shadow-none"> 
                                <input type="checkbox" id="alert-read-more-<?php print $count; ?>" name="alert-read-more-<?php print $count; ?>" <?php print $readmore ?> data-toggle="toggle" data-onstyle="success" class="form-control">
                            </a>
                        </div>
                        
                        <div id="alert-banner-read-more-<?php print $count ?>" class="collapse<?php print ! empty($readmore) ? ' show' : ''; ?>">
                            <!-- Read More Button Text -->
                            <div class="form-group col-sm-6 pl-0">
                                <label for="alert-read-more-text-<?php print $count; ?>" class="d-block mb-0"><strong>Read More Button Text</strong></label>
                                <input type="text" id="alert-read-more-text-<?php print $count; ?>" name="alert-read-more-text-<?php print $count; ?>" maxlength="16" class="form-control" value="<?php print $readmore_text ?>">
								<small class="text-muted">(Max Characters: 16)</small>
                            </div>

                            <!-- Read More Button URL -->
                            <div class="form-group col-sm-6 pl-0 d-inline-block">
                                <label for="alert-read-more-url-<?php print $count; ?>" class="d-block mb-0"><strong>Read More Button URL</strong></label>
                                <input type="text" id="alert-read-more-url-<?php print $count; ?>" name="alert-read-more-url-<?php print $count; ?>" class="form-control" value="<?php print $readmore_url ?>">
                            </div>

                            <!-- Read More Button Target -->
                            <div class="form-group col-sm-4 pl-0 d-inline-block align-top">
                                <label for="alert-read-more-target-<?php print $count; ?>"class="d-block mb-0"><strong>Open link in New Tab</strong></label>
                                <input type="checkbox" id="alert-read-more-target-<?php print $count; ?>" name="alert-read-more-target-<?php print $count; ?>" <?php print $readmore_target ?> data-on="Yes" data-off="No" data-toggle="toggle" data-onstyle="success" class="form-control">
                            </div>
                        </div>

                        <!-- Banner Icon -->
                        <div class="form-group col-sm-12 d-inline-block pl-0">
                            <?php 
                            print wp_kses(
                                caweb_icon_menu(
                                    array(
                                        'select' => $alert_icon,
                                        'name'   => "alert-icon-$count",
                                        'header' => 'Icon',
                                    )
                                ),
                                caweb_allowed_html( array(), true )
                            );
                            ?>
                        </div>
                </div>
            </div>
            
        </li>
        <?php 
                endforeach;
            }
        ?>
        <input id="caweb_alert_count" type="hidden" name="caweb_alert_count" value="<?php print ! empty($alerts) ? count($alerts) : 0; ?>">
    </ol>
</div>
