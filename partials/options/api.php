<?php
/**
 * API Options Page
 */

if ( isset( $_POST['caweb_api_options_submit'] ) ) {
	caweb_save_api_options( $_POST );
}

$privated_enabled = get_site_option( 'caweb_private_theme_enabled', false );
$username = get_site_option( 'caweb_username', 'CA-CODE-Works' );
$password = get_site_option( 'caweb_password', '' );

?>
<form id="caweb-options-form" action="<?php print admin_url( 'admin.php?page=caweb_api' ); ?>" method="POST">
	<h2>GitHub API Key</h2>
	<div class="form-row">
		<div class="form-group col-sm-5">
			<label for="caweb_private_theme_enabled">Is Private?</label>
			<input type="checkbox" name="caweb_private_theme_enabled" class="form-control" size="50"<?php print $privated_enabled ? ' checked' : ''; ?>/>
			<small class="text-muted d-block">Is this theme hosted as a private repo?</small>
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-sm-5">
			<label for="caweb_username" class="d-block mb-0">Username</label>
			<small class="text-muted">Setting this feature enables us to update the theme through GitHub</small>
			<input type="text" name="caweb_username" class="form-control" size="50" value="<?php print $username; ?>" placeholder="Default: CA-CODE-Works" />
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-sm-5">
			<label for="caweb_password" class="d-block mb-0">Token</label>
			<small class="text-muted">Setting this feature enables us to update the theme through GitHub</small>
			<input type="password" class="form-control" name="caweb_password" size="50" value="<?php print base64_encode( $password ); ?>" />
		</div>
	</div>
	<input type="submit" name="caweb_api_options_submit" id="submit" class="button button-primary" value="<?php _e( 'Save Changes' ); ?>" />
</form>