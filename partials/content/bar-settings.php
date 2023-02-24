<?php
/**
 * CAWeb Settings Bar
 *
 * @package CAWeb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$deprecating = '5.5' === caweb_template_version();

?>

<div class="site-settings section section-standout collapse collapsed" aria-atomic="true" role="alert" id="siteSettings">
	<div class="container  p-y">

		<?php if( ! $deprecating ) : ?>
			<div class="settings-bar-buttons">

				<div class="btn-group" aria-label="contrastMode">
					<button type="button"
					class="btn btn-default btn-lg bg-transparent bg-s1-hover disableHighContrastMode">Reset</button>
				</div>

				<div class="btn-group"><button type="button" class="btn btn-s1 btn-lg brd-s1 enableHighContrastMode">High
					contrast</button>
				</div>

				<div class="btn-group">
					<button type="button" class="btn btn-s1 btn-lg brd-s1 increaseTextSize">
					<span class="hidden-xs">Increase font size</span>
					<span class="visible-xs">Font
					<span class="sr-only">increase</span>
					<span class="ca-gov-icon-plus-line small" aria-hidden="true"></span>
					</span>
					</button>
				</div>

				<div class="btn-group">
					<button type="button" class="btn btn-s1 btn-lg brd-s1 decreaseTextSize">
					<span class="hidden-xs">Decrease font size</span>
					<span class="visible-xs">Font <span class="sr-only">decrease</span>
					<span class="ca-gov-icon-minus-line small" aria-hidden="true"></span>
					</span>
					</button>
				</div>

				<div class="btn-group">
					<button type="button" class="btn btn-s1 btn-lg brd-s1 dyslexicFont">Dyslexic font</button>
				</div>

				<button type="button" class="close ms-auto" data-bs-toggle="collapse" data-bs-target="#siteSettings" aria-label="Close">
					<span aria-hidden="true" class=" ca-gov-icon-close-mark"></span>
				</button>
			</div>
			
		<?php else: ?>
			<div class="btn-group btn-group-justified-sm" role="group" aria-label="contrastMode">
				<div class="btn-group"><button type="button" class="btn btn-primary disableHighContrastMode">Default</button></div>
				<div class="btn-group"><button type="button" class="btn btn-primary enableHighContrastMode">High Contrast</button></div>
			</div>

			<div class="btn-group" role="group" aria-label="textSizeMode">
				<div class="btn-group"><button type="button" class="btn btn-primary resetTextSize">Reset</button></div>
				<div class="btn-group"><button type="button" class="btn btn-primary increaseTextSize"><span class="hidden-xs">Increase Font Size</span><span class="visible-xs">Font <span class="sr-only">Increase</span><span class="ca-gov-icon-plus-line font-size-sm" aria-hidden="true"></span></span></button></div>
				<div class="btn-group"><button type="button" class="btn btn-primary decreaseTextSize"><span class="hidden-xs">Decrease Font Size</span><span class="visible-xs">Font <span class="sr-only">Decrease</span><span class="ca-gov-icon-minus-line font-size-sm" aria-hidden="true"></span></span></button></div>
			</div>

			<button type="button" class="close" data-toggle="collapse" data-target="#siteSettings" aria-expanded="false" aria-controls="siteSettings" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		<?php endif; ?>

	</div>
</div>
