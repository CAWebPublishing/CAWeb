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
