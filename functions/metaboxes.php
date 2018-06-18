<?php

add_action( 'add_meta_boxes', 'ca_register_meta_boxes' );

// Register Meta Boxes
function ca_register_meta_boxes(){

// Page Meta Box
add_meta_box( 'et_ca_page_meta_box', '<span class="ca-gov-icon-pencil-edit"></span> CA Page Settings',
		'ca_page_identifier_metabox_callback', array('page','post'),'side','high');

remove_meta_box('et_settings_meta_box', array('post','page'), 'side');
}



/**
 * Page Option Meta box display callback.
 *
 * @param WP_Post $post Current post object.
 */
function ca_page_identifier_metabox_callback( $post ) {
	if("" == get_post_meta($post->ID, 'ca_custom_initial_state',true) ){
		update_post_meta($post->ID, 'ca_custom_initial_state', true);
		update_post_meta($post->ID, 'ca_custom_post_title_display', "on");
		update_post_meta($post->ID, 'ca_default_navigation_menu', get_option('ca_default_navigation_menu') );

	}

	wp_nonce_field( basename( __FILE__ ), 'ca_page_meta_item_identifier_nonce' );

?>

<form action="#" method="post">

<input type="checkbox" id="ca_custom_post_title_display" name="ca_custom_post_title_display"
<?php echo( get_post_meta($post->ID, 'ca_custom_post_title_display',true) == true ? 'checked="checked"' : '' ); ?> >
Display Title on Page </input>

<p>You may display a different Navigation Menu on this page.</p>

<select id="ca_default_navigation_menu" name="ca_default_navigation_menu">
<?php
			$page_menu = get_ca_nav_menu_theme_location($post->ID);
	  	$locations = get_registered_ca_nav_menus();
			unset($locations['footer-menu']);

	  	foreach($locations as $i => $loc){
	    print sprintf('<option value="%1$s" %2$s>%3$s</option>',
				$i, ($page_menu == $loc ?'selected="selected"' : ''),
				get_ca_nav_menu_theme_location_name(-1, $i) );
	  	}

?>

</select>

</form>


<?php

}


/* Save post meta on the 'save_post' hook. */
function ca_save_post_meta($post_id, $post){
	 /* Verify the nonce before proceeding. */
    if ( !isset( $_POST["ca_page_meta_item_identifier_nonce"] ) ||
	!wp_verify_nonce( $_POST["ca_page_meta_item_identifier_nonce"], basename( __FILE__ ) ) ){
        return $post_id;
  }

	//skip auto save
  	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
      		return $post_id;
  	}


	$option_title_display = (isset($_POST['ca_custom_post_title_display']) ? $_POST['ca_custom_post_title_display'] : '');
		$default_nav = $_POST['ca_default_navigation_menu'];
		//$default_nav = (isset($_POST['ca_default_navigation_menu']) ? $_POST['ca_default_navigation_menu'] : '');
		update_post_meta($post->ID, 'ca_default_navigation_menu', $default_nav);
		update_post_meta($post->ID, 'ca_custom_post_title_display', $option_title_display);

}
add_action( 'save_post', 'ca_save_post_meta', 10, 2 );
?>
