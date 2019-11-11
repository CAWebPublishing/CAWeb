<!-- Page Header Section -->
<div>
    <a class="collapsed d-inline-block text-decoration-none" data-toggle="collapse" href="#page-header-settings" role="button" aria-expanded="false" aria-controls="page-header-settings">
        <h2 class="border-bottom mb-0">Page Header <span class="text-secondary ca-gov-icon-"></span></h2>
    </a>
</div>
<div class="collapse border p-3" id="page-header-settings" data-parent="#general-settings">
        <!-- Organization Logo-Brand Row -->
        <div class="form-row">
            <label for="header_ca_branding" class="w-100" data-toggle="tooltip" data-placement="top" title="Select an image to use as the agency logo. Recommended size is 300pixels wide by 80pixels tall."><strong>Organization Logo-Brand</strong></label>
            
            <div class="form-group col-sm-5">
                <div class="input-group">
                    <!-- Organization Logo-Brand Field -->
                    <input 
                        type="text" 
                        name="header_ca_branding" 
                        id="header_ca_branding_filename" 
                        readonly 
                        value="<?php print $org_logo_filename ?>" 
                        class="library-link form-control" 
                        data-choose="Choose an Organization Logo-Brand"
                        data-update="Set as Default Logo"  
                        data-uploader="false">

                    <div class="input-group-append">
                        <!-- Organization Logo-Brand Browse images -->
                        <button 
                            name="header_ca_branding" 
                            class="library-link btn btn-outline-primary" 
                            data-choose="Choose an Organization Logo-Brand"
                            data-update="Set as Default Logo" 
                            data-uploader="false"
                            >Browse</button>
                    </div>    
                </div>
                
                <!-- Organization Logo-Brand  -->
                <input type="hidden" name="header_ca_branding" value="<?php print $org_logo ?>" >
                
                 <!-- Organization Logo-Brand Preview -->
                <img class="header_ca_branding_option" id="header_ca_branding_img" src="<?php print $org_logo ?>"/>
            </div>

            <label for="header_ca_branding_alt_text" class="w-100" data-toggle="tooltip" data-placement="top" title="Enter alternative text for the agency logo image."><strong>Organization Logo-Alt Text</strong></label>
            <div class="form-group col-sm-6">
                    <!-- Organization Logo-Brand image alt text -->
                    <input type="text" name="header_ca_branding_alt_text" id="header_ca_branding_alt_text" value="<?php print $org_logo_alt_text ?>" class="form-control">
            </div>
        </div>

        <!-- Organization Logo Alignment Row -->
        <div class="form-row">
            <label for="header_ca_branding_alignment" class="w-100" data-toggle="tooltip" data-placement="top" title="Select the position for the agency logo."><strong>Organization Logo Alignment</strong></label>
            <div class="form-group col-sm-5">
                <select id="header_ca_branding_alignment" name="header_ca_branding_alignment" class="w-50 form-control">
                <option value="left"
                    <?php print 'left' == $header_branding_alignment ? ' selected="selected"' : '' ?>>Left</option>
                    <option value="center"
                    <?php print 'center' == $header_branding_alignment ? ' selected="selected"' : '' ?>>Center</option>
                    <option value="right"
                    <?php print 'right' == $header_branding_alignment ? ' selected="selected"' : '' ?>>Right</option>
                </select>
            </div>
        </div>

</div>