<!-- Global Footer -->
<?php
wp_nav_menu(array(
						'theme_location'=> 'footer-menu',
						'version' => ca_get_version( get_the_ID() )
						)	
					);

wp_footer();

if("" !== get_option('ca_custom_css', '') ? printf('<style id="ca_custom_css">%1$s</style>',  get_option('ca_custom_css') ) : '')
  
if( !is_404() ) :
?>

<script> 
$=jQuery.noConflict();$(document).ready(function(){var n=$("header"),o=$("#main-content");$(window).on("scroll",function(){n.hasClass("compact")?o.css({"margin-top":o.css("padding-top")}):o.css({"margin-top":0})})});
</script>

<?php endif; ?>