<style>
	table tr td:first-of-type {
		width: 15px;
	}
</style>

<form id="caweb-options-form" action="<?php print admin_url( 'admin.php?page=caweb_api' ); ?>" method="POST">
	<?php
	if ( isset( $_POST['caweb_api_options_submit'] ) ) {
		caweb_save_api_options( $_POST );
	}
	?>
	<div class="wrap">
		<h1>GitHub API Key</h1>
		<table class="form-table">
			<tr>
				<td>
					<div class="tooltip">Is Private?<span class="tooltiptext">Is this theme hosted as a private repo?</span></div>
				</td>
				<td><input type="checkbox" name="caweb_private_theme_enabled" size="50" <?php print get_site_option( 'caweb_private_theme_enabled', false ) ? ' checked="checked"' : ''; ?> /></td>
			</tr>
			<tr>
				<td>
					<div class="tooltip">Username<span class="tooltiptext">Setting this feature enables us to update the theme through GitHub</span></div>
				</td>
				<td><input type="text" name="caweb_username" size="50" value="<?php print get_site_option( 'caweb_username', 'CAWebPublishing' ); ?>" placeholder="Default: CAWebPublishing" /></td>
			</tr>
			<tr>
				<td>
					<div class="tooltip">Token<span class="tooltiptext">Setting this feature enables us to update the theme through GitHub</span></div>
				</td>
				<td><input type="password" name="caweb_password" size="50" value="<?php print base64_encode( get_site_option( 'caweb_password', '' ) ); ?>" /></td>
			</tr>
		</table>
	</div>
	<input type="submit" name="caweb_api_options_submit" id="submit" class="button button-primary" value="<?php _e( 'Save Changes' ); ?>" />
</form>