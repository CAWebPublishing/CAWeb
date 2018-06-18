<?php
/*
	Checks the Site Wide Version and Page Slug Template Version
	$version = 'ca_site_version' Setting returns true/false

	If a $post_id is included will check if $version also matches the
	Page Template Version
	$version = Specific Page Template Version  returns true/false

*/
function ca_version_check($version, $post_id = -1){
	$result = ($version == get_option('ca_site_version') ? true : false);

	if(-1 < $post_id  ){
		switch(get_page_template_slug($post_id)){
		case "page-templates/page-template-v4.php":
			$result = (4 == $version ? true : false);
			break;
		}

	}

	return $result;
}

// Returns array of Menu Theme Locations
function get_ca_nav_menu_theme_locations(){
	return array(
		'megadropdown' => 'Mega Drop Navigation (Default)',
		'dropdown' => 'Dropdown Navigation',
		'singlelevel' => 'Single Level Navigation',
		'footer-menu' => 'Footer Menu',
				);
}

// Returns array of Currently Set Menus
function get_registered_ca_nav_menus(){
// Get all currently set menus
$locations = get_nav_menu_locations();

$tmp = array();
// Loop thru  arranging the menu by order of precedence
foreach($locations as $loc=> $l){

		switch($loc){
			case "megadropdown":
				$tmp[0] = "megadropdown";
				break;
			case "dropdown":
				$tmp[1] = "dropdown";
				break;
			case "singlelevel":
				$tmp[2] = "singlelevel";
				break;
			case "footer-menu":
				$tmp[3] = "footer-menu";
				break;
		}

}

// Flip the array so that the values become the keys in the array
$tmp = array_flip($tmp);

// Intersect the keys against all the registered nav menus
// this will return an array of where the element is the location
// of the menu and the value is the name of the menu
$tmp = array_intersect_key(get_registered_nav_menus(),$tmp);
return $tmp;

}

/*
 Returns the location of the the Menu,
 if a Post ID is passed in then the Post 'ca_default_navigation_menu' metakey menu location is returned
 if Post ID is -1 and a menu_name is passed in then the location of that menu gets returned
*/
function get_ca_nav_menu_theme_location($postID = -1, $menu_name = ''){

	if(-1 != $postID){
		$post_menu = get_registered_ca_nav_menus()[get_post_meta($postID, 'ca_default_navigation_menu',true)];
	}elseif("" != $menu_name ){
		$tmp = array_flip(get_registered_ca_nav_menus());
		$post_menu = $tmp[$menu_name];
	}

	return $post_menu;

}

/*
 Returns the name of the the Menu,
 if a Post ID is passed in then the Menu Name of the Post 'ca_default_navigation_menu' metakey value is returned
 if Post ID is -1 and a menu_location is passed in then the name of that menu gets returned
*/
function get_ca_nav_menu_theme_location_name($postID = -1, $menu_location = ''){
	$post_menu = '';
	if(-1 != $postID){
		$post_menu = get_post_meta($postID, 'ca_default_navigation_menu',true);
		$post_menu = get_registered_ca_nav_menus()[$post_menu];

	}elseif("" != $menu_location){
		 $post_menu = get_registered_ca_nav_menus()[$menu_location];
	}

	return $post_menu;
}

function format_date($pub_date, $pattern){
	$date =date_create($pub_date);
	return date_format($date,$pattern);
}


/**

* Returns all child nav_menu_items under a specific parent
* Source http://wpsmith.net/2011/how-to-get-all-the-children-of-a-specific-nav-menu-item/

* @param int the parent nav_menu_item ID
* @param array nav_menu_items
* @param bool gives all children or direct children only
* @return array returns filtered array of nav_menu_items

*/
function get_nav_menu_item_children( $parent_id, $nav_menu_items, $depth = true ) {

	$nav_menu_item_list = array();

	foreach ( (array) $nav_menu_items as $nav_menu_item ) {
		if ( $nav_menu_item->menu_item_parent == $parent_id ) {
			$nav_menu_item_list[] = $nav_menu_item;
			if ( $depth ) {
			if ( $children = get_nav_menu_item_children( $nav_menu_item->ID, $nav_menu_items ) )
				$nav_menu_item_list = array_merge( $nav_menu_item_list, $children );
			}
		}
	}

	return $nav_menu_item_list;
}




function return_posts($cats = array(), $tags = array(), $post_amount = -1,$orderby='post_date',$order = 'DESC'){

$posts_array = array();

$req_array = array();



$args = array(

	'posts_per_page' => $post_amount ,

        'orderby'           => $orderby,

        'order'             => $order,

        'post_type'         => 'post',

        'post_status'       => 'publish',

        'suppress_filters'  => true



    );



if(! empty($cats)){

	$args['cat'] = $cats;

}



$posts_array = get_posts( $args );



if(! empty($tags)){

	foreach($posts_array as $p=> $i){

		//return posts tags

		$tag_ids = wp_get_post_tags( $i ->ID, array( 'fields' => 'ids' ) );

		// iterate through the tags

		foreach($tag_ids as $k){

			if(in_array($k, $tags)){

			array_push($req_array , $i);

			break;

			}



		}



	}

	$posts_array = $req_array;

}





	return $posts_array ;

}

/*
	Get User Profile Color
*/
function get_ca_user_color($element){
  	global $_wp_admin_css_colors;

    	$admin_color = get_user_option( 'admin_color' );
    	$colors      = $_wp_admin_css_colors[$admin_color]->colors;

	return $colors[$element];

}

function get_tag_ID($tag_name) {
$tag = get_term_by('name', $tag_name, 'post_tag');
if ($tag) {
return $tag->term_id;
} else {
return 0;
}
}


/* CA.gov Icon Library List */
function get_ca_icon_list(){
	$icons = array('logo', 'home', 'menu', 'apps', 'search', 'chat', 'capitol', 'state', 'phone', 'email', 'contact-us', 'calendar', 'bear', 'chat-bubble',
			'info-bubble','share-button', 'share-facebook', 'share-email', 'share-flickr', 'share-twitter', 'share-linkedin', 'share-googleplus',
			'share-instagram', 'share-pinterest', 'share-vimeo', 'share-youtube', 'law-enforcement', 'justice-legal', 'at-sign', 'attachment',
			'zipped-file', 'powerpoint', 'excel', 'word', 'pdf', 'share','facebook', 'linkedin', 'youtube', 'twitter', 'pinterest', 'vimeo', 'instagram',
			'flickr', 'google-plus', 'microsoft', 'apple', 'android', 'computer', 'tablet', 'smartphone', 'roadways', 'travel-car', 'travel-air', 'truck-delivery',
			'construction', 'bar-chart', 'pie-chart', 'graph', 'server', 'download', 'cloud-download', 'cloud-upload', 'shield', 'fire', 'binoculars', 'compass', 'sos',
			'shopping-cart', 'video-camera', 'camera', 'green', 'loud-speaker', 'audio', 'print', 'medical', 'zoom-out', 'zoom-in', 'important', 'chat-bubbles',
			'call', 'people', 'person', 'user-id', 'payment-card', 'skip-backwards', 'play', 'pause', 'skip-forward', 'mail', 'image', 'house', 'gear', 'tool', 'time', 'cal',
			'check-list', 'document', 'clipboard', 'page', 'read-book', 'cc-copyright', 'ca-capitol', 'ca-state', 'favorite', 'rss', 'road-pin', 'online-services',
			'link','magnify-glass', 'key', 'lock', 'info', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'carousel-prev', 'carousel-next', 'arrow-prev',
			'arrow-next', 'menu-toggle-closed', 'menu-toggle-open' , 'carousel-play', 'carousel-pause', 'search-right', 'graduate', 'briefcase', 'images', 'gears',
			'tools', 'pencil', 'pencil-edit', 'science', 'film', 'table', 'flowchart', 'building', 'searching', 'wallet', 'tags', 'currency', 'idea', 'lightbulb',
			'calculator', 'drive', 'globe', 'hourglass', 'mic', 'volume', 'music' , 'folder', 'grid', 'archive', 'contacts', 'book', 'drawer', 'map', 'pushpin',
			'location', 'quote-fill', 'question-fill', 'warning-triangle', 'warning-fill', 'check-fill', 'close-fill', 'plus-fill', 'minus-fill', 'caret-fill-right',
			'caret-fill-left', 'caret-fill-down', 'caret-fill-up', 'caret-fill-two-right', 'caret-fill-two-left', 'caret-fill-two-down', 'caret-fill-two-up',
			'arrow-fill-right', 'arrow-fill-left', 'arrow-fill-up', 'arrow-fill-down', 'arrow-fill-left-down', 'arrow-fill-right-down', 'arrow-fill-left-up',
			'arrow-fill-right-up', 'triangle-line-right',  'triangle-line-left', 'triangle-line-up', 'triangle-line-down', 'caret-line-two-right', 'caret-line-two-left',
			'caret-line-two-up', 'caret-line-two-down', 'caret-line-right', 'caret-line-left', 'caret-line-up', 'caret-line-down', 'important-line', 'info-line',
			'check-line', 'question-line', 'close-line', 'plus-line', 'minus-line', 'question', 'minus-mark', 'plus-mark', 'collapse', 'expand', 'check-mark', 'close-mark',
			'triangle-right', 'triangle-left', 'triangle-up', 'triangle-down', 'caret-two-right', 'caret-two-left', 'caret-two-down', 'caret-two-up', 'caret-right', 'caret-left',
			'caret-up', 'caret-down', 'filter');



	return $icons;
}


function get_blank_icon_span(){
  return '<span style="visibility:hidden;" class="ca-gov-icon-logo"></span>';
}
?>
