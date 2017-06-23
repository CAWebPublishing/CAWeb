<!-- Global Footer -->
<?php
global $post;
$post_id = (is_object($post) ? $post->ID : $post['ID']);

wp_nav_menu(array(
						'theme_location'=> 'footer-menu',
						'version' => ca_get_version($post_id),
						'ca_custom_css' => get_option('ca_custom_css', '')
						)	
					);

wp_footer();

?>
