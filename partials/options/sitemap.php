<?php
$directory = wp_upload_dir();
$file = $directory['basedir'] . '/pdf-word-sitemap.xml';
$file_url = file_exists($file) ? sprintf('File location: <a href="%1$s%2$s" target="_blank">SiteMap</a>', $directory['baseurl'], '/pdf-word-sitemap.xml') : '';
?>
<div class="p-2 collapse" id="document-sitemap" data-parent="#caweb-settings">
	<div class="form-row">
		<div class="form-group col-sm-5">
			<h2 class="d-inline">Document Sitemap</h2>
			<button class="doc-sitemap btn btn-primary">Generate</button>
			<small class="doc-sitemap-update text-muted"><?php print $file_url; ?></small>
		</div>
	</div>
</div>
