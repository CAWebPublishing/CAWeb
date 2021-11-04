<?php
/**
 * CAWeb Settings Bar
 *
 * @package CAWeb
 */

?>

<div class="d-none site-settings section section-standout collapse collapsed" aria-atomic="true" role="alert" id="siteSettings">
	<div class="container  p-y">
		<div class="btn-group btn-group-justified-sm" role="group" aria-label="contrastMode">
			<div class="btn-group"><button type="button" class="btn btn-standout disableHighContrastMode">Default</button></div>
			<div class="btn-group"><button type="button" class="btn btn-standout enableHighContrastMode">High Contrast</button></div>
		</div>

		<div class="btn-group" role="group" aria-label="textSizeMode">
			<div class="btn-group"><button type="button" class="btn btn-standout resetTextSize">Reset</button></div>
			<div class="btn-group"><button type="button" class="btn btn-standout increaseTextSize"><span class="hidden-xs">Increase Font Size</span><span class="visible-xs">Font <span class="sr-only">Increase</span><span class="ca-gov-icon-plus-line font-size-sm" aria-hidden="true"></span></span></button></div>
			<div class="btn-group"><button type="button" class="btn btn-standout decreaseTextSize"><span class="hidden-xs">Decrease Font Size</span><span class="visible-xs">Font <span class="sr-only">Decrease</span><span class="ca-gov-icon-minus-line font-size-sm" aria-hidden="true"></span></span></button></div>
		</div>
		<button type="button" class="close" data-toggle="collapse" data-target="#siteSettings" aria-expanded="false" aria-controls="siteSettings" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	</div>
</div>
