<?php
// set output directory

$directory = wp_upload_dir();
$file = $directory['basedir'] . '/pdf-word-sitemap.xml';

$site_id = get_current_blog_id();


// get correct posts table

if ($site_id === 1) {
	$wp_posts_table = 'wp_posts';
} else {
	$wp_posts_table = 'wp_' . $site_id . '_posts';
}

// start admin output

?>
<div class="p-2 collapse" id="document-sitemap" data-parent="#caweb-settings">
	<div class="form-row">
		<div class="form-group col-sm-5">
			<h2 class="d-inline">Document Sitemap</h2>
			<button class="doc-sitemap btn btn-primary">Generate</button>
			<small class="doc-sitemap-update text-muted"></small>
		</div>
	</div>
</div>
