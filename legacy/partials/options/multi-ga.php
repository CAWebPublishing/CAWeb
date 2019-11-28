<style>
	table tr td:first-of-type {
		width: 100px;
	}
</style>

<form id="caweb-options-form" action="<?php print admin_url( 'admin.php?page=caweb_multi_ga' ); ?>" method="POST">
	<?php
	if ( isset( $_POST['caweb_multi_ga_options_submit'] ) ) {
		caweb_save_multi_ga_options( $_POST );
	}
	?>
	<div class="wrap">
		<h1>Multisite Google Analytics</h1>
		<table class="form-table">
			<tr>
				<td>
					<div class="tooltip">Analytics ID<span class="tooltiptext"></span></div>
				</td>
				<td><input type="text" name="caweb_multi_ga" size="50" value="<?php print get_site_option( 'caweb_multi_ga', '' ); ?>" /></td>
			</tr>
		</table>
	</div>
	<input type="submit" name="caweb_multi_ga_options_submit" id="submit" class="button button-primary" value="<?php _e( 'Save Changes' ); ?>" />
</form>