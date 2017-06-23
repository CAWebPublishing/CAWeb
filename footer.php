<!-- Global Footer -->
<?php
global $post;
$post_id = (is_object($post) ? $post->ID : $post['ID']);

?>
<?php if(ca_version_check(4, $post_id ) ): ?>

<script>
 /* Remove the banner from appearing as part of the content */
if(document.getElementById('et_pb_ca_fullwidth_banner')){
 var banner = document.getElementById('et_pb_ca_fullwidth_banner');
 var banParent = banner.parentElement;

 banParent.parentElement.removeChild(banParent);
}else{
 document.body.classList.remove('primary');
}
</script>
<?php endif; ?>
<footer id="footer" class="global-footer hidden-print">
	<div class="container <?=  ( ! ca_version_check(4, $post_id ) ? 'ca_wp_container' : '' ); ?> ">

    <div class="<?php print (ca_version_check(4, $post_id ) ? 'full' : 'three-quarters' ); ?>">
      <ul class="footer-links" <?php print (ca_version_check(4, $post_id ) ? 'style="text-align:center;"' : '' ); ?>>

       <?php
      			// if there is a footer menu
			// loop thru and create a link (parent nav item only)

      			if ( has_nav_menu( 'footer-menu')) {
                  $menu_name = 'footer-menu';
                  $locations = get_nav_menu_locations();
                  $menu = wp_get_nav_menu_object( $locations[ $menu_name]);
                  $menuitems = wp_get_nav_menu_items( $menu->term_id, array( 'order'=> 'DESC'));
		print '<li><a href="#skip-to-content">Back to Top</a></li>';
                  foreach ( $menuitems as $item) {
                      if($item->menu_item_parent == 0) {
                          print sprintf('<li><a href="%1$s">%2$s</a></li>',$item->url ,$item->title);
                      }
                  }
				}else{
			print '<li><a href="#"><span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span> <strong>No Navigation Menu Has Been Selected.</strong></a></li>';
			}
			?>
      </ul>
    </div>

    <div class="<?php print (ca_version_check(4, $post_id ) ? 'full' : 'quarter text-right' ); ?>">
<ul class="socialsharer-container" <?php print (ca_version_check(4, $post_id ) ? 'style="text-align:center; float:none;"' : '' ); ?>>

	<?php

	$social_share = get_ca_social_options();

	foreach($social_share as $opt){
	if(get_option($opt .'_footer') && "" != get_option($opt)){


		$share = substr($opt, 10);
		$share =  str_replace("_", "-", $share);

		print sprintf('<li><a href="%1$s">%2$s<span class="sr-only">%3$s</span></a></li>',
				get_option($opt), get_ca_icon_span($share), $share) ;

	}
	}
	?>
     </ul>
    </div>

  </div> <!-- Copyright Statement -->
  <div class="copyright">
    <div class="container container ca_wp_container" <?php print (ca_version_check(4, $post_id ) ? 'style="text-align:center;"' : '' ); ?>> Copyright &copy;
<script>document.write(new Date().getFullYear())</script> State of California </div> </div>


</footer>

<?php
	wp_footer();

if("" != get_option('ca_custom_css') ){
	printf('<style>%1$s</style>', get_option('ca_custom_css'));
}
?>
