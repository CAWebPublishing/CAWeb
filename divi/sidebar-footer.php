<?php
$et_active_sidebars = et_divi_footer_active_sidebars();
if ( $et_active_sidebars === false ) {
	return;
}
?>

<div class="container">
    <div id="footer-widgets" class="clearfix">
		<?php
		foreach ( $et_active_sidebars as $footer_sidebar ) :
			echo '<div class="footer-widget">';
			dynamic_sidebar( $footer_sidebar );
			echo '</div> <!-- end .footer-widget -->';
		endforeach;
		?>
    </div> <!-- #footer-widgets -->
</div>    <!-- .container -->