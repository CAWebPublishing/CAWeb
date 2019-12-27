<?php
/**
 * Multisite GA Options Page
 */

if ( isset( $_POST['caweb_multi_ga_options_submit'] ) ) {
	caweb_save_multi_ga_options( $_POST );
}

$mulit_ga = get_site_option( 'caweb_multi_ga', '' );
?>
<form id="caweb-options-form" action="<?php print admin_url( 'admin.php?page=caweb_multi_ga' ); ?>" method="POST">
	<h2>Multisite Google Analytics</h2>
	<div class="form-row">
		<div class="form-group col-sm-5">
			<label for="caweb_multi_ga" class="d-block mb-0">Analytics ID</label>
			<input type="text" name="caweb_multi_ga" class="form-control" size="50" value="<?php print $mulit_ga; ?>" />
		</div>
	</div>
	<input type="submit" name="caweb_multi_ga_options_submit" id="submit" class="button button-primary" value="<?php _e( 'Save Changes' ); ?>" />
</form>