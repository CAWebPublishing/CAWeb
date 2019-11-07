<!-- Custom CSS Section -->
<div class="p-2 collapse" id="custom-css" data-parent="#caweb-settings">
    
    <!-- Custom Uploaded CSS -->
    <div class="form-row">
        <div class="form-group">
            <h2 class="d-inline">Uploaded CSS</h2>
            <a class="dashicons dashicons-plus-alt" id="addCSS"></a>
            <small class="form-text text-muted">Any styles added will override any pre-existing styles. Uploaded stylesheets load at the bottom of the head in the order listed. To adjust the order, click and drag the name of the file in the order you would like.</small>
        </div>
        <?php
        ?>
        <div class="form-group col-lg-12">
            <ul class="list-group" id="uploadedCSS">
                <?php
                    $ext_css_dir = sprintf('%1$s/css/external/%2$s', CAWebUri, get_current_blog_id() );
                    foreach ($ext_css as $name) :
                ?>
                    <li class="list-group-item">
                        <a href="<?php print "$ext_css_dir/$name" ?>?TB_iframe=true&width=600&height=550" title="<?php print $name ?>" class="thickbox dashicons dashicons-visibility preview-css text-success"></a>
                        <a href="<?php print "$ext_css_dir/$name" ?>" download="<?php print $name ?>" title="download" class="dashicons dashicons-download download-css"></a>
                        <a title="remove <?php print $name ?>" class="dashicons dashicons-dismiss remove-css text-danger"></a>
                        <input type="hidden" name="caweb_external_css[]" value="<?php print $name ?>"><?php print $name ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>

    <!-- Custom CSS -->
    <div class="form-row">
        <div class="form-group col-lg-12">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text d-inline">Custom CSS</span>
                </div>
                <textarea id="ca_custom_css" name="ca_custom_css" class="form-control" aria-label="Custom CSS"><?php print wp_unslash($custom_css) ?></textarea>
            </div>
            <small class="form-text text-muted">Any styles added will override any pre-existing styles.</small>
        </div>
    </div>

    
</div>
