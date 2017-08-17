<!-- Global Footer -->
<?php
wp_nav_menu(array(
						'theme_location'=> 'footer-menu',
						'version' => ca_get_version( get_the_ID() ),
						'ca_custom_css' => get_option('ca_custom_css', '')
						)	
					);

wp_footer();

?>

<script>
$(document).ready(function(){var n=$("header"),o=$("#main-content");$(window).on("scroll",function(){n.hasClass("compact")?o.css({"margin-top":o.css("padding-top")}):o.css({"margin-top":0})})});
</script>