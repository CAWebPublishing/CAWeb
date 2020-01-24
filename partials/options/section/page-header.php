<!-- Page Header Section -->
<div>
    <a class="collapsed d-inline-block text-decoration-none" data-toggle="collapse" href="#page-header-settings" role="button" aria-expanded="false" aria-controls="page-header-settings">
        <h2 class="mb-0">Page Header <span class="text-secondary ca-gov-icon-"></span></h2>
    </a>
</div>
<div class="collapse" id="page-header-settings" data-parent="#general-settings">
    <!-- Organization Logo-Brand Row -->
    <div class="form-row">
        <div class="form-group col-sm-5">
            <label for="header_ca_branding_filename" class="d-block mb-0"><strong>Organization Logo-Brand</strong></label>
            <small class="mb-2 text-muted d-block">Select an image to use as the agency logo. Recommended size is 300 pixels wide by 80 pixels tall.</small>
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
    </div>

    <div class="form-row">
        <div class="form-group col-sm-5">
            <label for="header_ca_branding_alt_text" class="d-block mb-0"><strong>Organization Logo-Alt Text</strong></label>
            <small class="mb-2 text-muted d-block">Enter alternative text for the agency logo image.</small>
            <!-- Organization Logo-Brand image alt text -->
            <input type="text" name="header_ca_branding_alt_text" id="header_ca_branding_alt_text" value="<?php print $org_logo_alt_text ?>" class="form-control">
        </div>
    </div>
</div>