<!-- Custom JS Section -->
<div class="p-2 collapse" id="custom-js" data-parent="#caweb-settings">
    
    <!-- Custom Uploaded JS -->
    <div class="form-row">
        <div class="form-group">
            <h2 class="d-inline">Uploaded JS</h2>
            <a class="dashicons dashicons-plus-alt" id="addJS"></a>
            <small class="form-text text-muted">Any styles added will override any pre-existing styles. Uploaded stylesheets load at the bottom of the head in the order listed. To adjust the order, click and drag the name of the file in the order you would like.</small>
        </div>
        <?php
        ?>
        <div class="form-group col-lg-12">
            <ul class="list-group" id="uploadedJS">
                <?php
                    $ext_js_dir = sprintf('%1$s/js/external/%2$s', CAWebUri, get_current_blog_id() );
                    foreach ($ext_js as $name) :
                ?>
                    <li class="list-group-item">
                        <a href="<?php print "$ext_js_dir/$name" ?>?TB_iframe=true&width=600&height=550" title="<?php print $name ?>" class="thickbox dashicons dashicons-visibility preview-js text-success"></a>
                        <a href="<?php print "$ext_js_dir/$name" ?>" download="<?php print $name ?>" title="download" class="dashicons dashicons-download download-js"></a>
                        <a title="remove <?php print $name ?>" class="dashicons dashicons-dismiss remove-js text-danger"></a>
                        <input type="hidden" name="caweb_external_js[]" value="<?php print $name ?>"><?php print $name ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>

    <!-- Custom JS -->
    <div class="form-row">
        <div class="form-group col-lg-12">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text d-inline">Custom JS</span>
                </div>
                <textarea id="ca_custom_js" name="ca_custom_js" class="form-control" aria-label="Custom JS"><?php print wp_unslash($custom_js) ?></textarea>
            </div>
            <small class="form-text text-muted">Any styles added will override any pre-existing styles.</small>
        </div>
    </div>

    
</div>
