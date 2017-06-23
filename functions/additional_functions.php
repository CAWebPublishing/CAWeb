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
		$result = ($version == ca_get_version($post_id) ? true : false);
	}

	return $result;
}

function ca_get_version($post_id = -1){
	switch(get_page_template_slug($post_id)){
	case "page-templates/page-template-v4.php":
		$result = 4;
		break;
  case "page-templates/page-template-v5.php":
		$result = 5;
		break;
	default:
		$result = get_option('ca_site_version');
		break;

	}
	return $result;
}

// Returns array of Menu Theme Locations
function get_ca_nav_menu_theme_locations(){
	return array(
		'header-menu' => 'Header Menu',
		'footer-menu' => 'Footer Menu',
				);
}

if( !function_exists('is_valid_date') ){
	function is_valid_date($checkdate, $default = false, $pattern = '', $retobj = false){
		if(!empty($checkdate)){
				$tmp = preg_split('/\D/', $checkdate);
				if(3 != count($tmp) || !checkdate($tmp[0], $tmp[1], $tmp[2]) )
					return $default;

				$date = date_create($checkdate);
				if($date instanceof DateTime && "UTC" == $date->getTimezone()->getName()){
					if( !empty($pattern) ){
						return date_format($date,$pattern);
					}elseif($retobj){
						return $date;
					}else{
						return $checkdate;
					}
				}
			}

		return $default;
	}
}


if( !function_exists('is_money') ){
	function is_money($checkmoney, $default = false, $pattern = '%.2n'){
		if(!empty($checkmoney)){

			$checkmoney    = (is_string($checkmoney) ? str_replace(',','',$checkmoney) : $checkmoney);
			$checkmoney    = (is_string($checkmoney) ? str_replace('$','', $checkmoney) : $checkmoney);

			setlocale(LC_MONETARY, get_locale());
			if(is_numeric($checkmoney))
				return money_format($pattern,  $checkmoney);
		}
		return $default;
	}
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


	$args['category'] = ( ! empty($cats) ? ( is_array($cats) ? implode(',', $cats) : $cats)  : array()) ;

	$args += array(
				'posts_per_page' => $post_amount ,
        'orderby'           => $orderby,
        'order'             => $order,
        'post_type'         => 'post',
        'post_status'       => 'publish',
        'suppress_filters'  => true
    		);

	$posts_array = get_posts( $args );

	if(! empty($tags)){
			foreach($posts_array as $p=> $i){
				//return posts tags
				$tag_ids = wp_get_post_tags( $i ->ID, array( 'fields' => 'ids' ) );

				if( empty($tag_ids) ){
						unset($posts_array[$p]);
				}else{
					// iterate through the tags
					$tags = (!is_array($tags) ? preg_split('/\D/', $tags): $tags);
					foreach($tag_ids as $k){
						if( !in_array($k, $tags)){
							unset($posts_array[$p]);
						}
					}
				}
			}
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

if( !function_exists('is_caweb_intranet_site') ){
	function is_caweb_intranet_site($id = -1){
		$id = -1 == $id ? get_current_blog_id() : $id;
		$hold= get_site_option( 'caweb_intranet_enabled_sites');

		return ( !empty($hold) ? in_array($id, $hold ) : false ) ;

	}
}

if( !function_exists('caweb_get_shortcode_from_content') ){
	function caweb_get_shortcode_from_content($con = "", $tag = "", $all_matches = false){

		if( empty($con) || empty($tag) )
			return array();
		$content = array();

		// Get Shortcode Tag from Con and save it to Content
    $pattern = sprintf('/\[(%1$s)[\d\s\w\S]+?\[\/\1\]|\[(%1$s)[\d\s\w\S]+? \/\]/', $tag);
		preg_match_all($pattern, $con, $content );

    if(empty($content))
      return array();

      $matches = $content[0];
      $objects = array();

      foreach($matches as $match){
        $obj = array();
        $attr = array();
        $tmp = array();
        preg_match($pattern, $match, $tmp) ;


        if(2 == count($tmp)){
          preg_match(sprintf('/"\][\s\S]*\[\/%1$s/', $tag), $tmp[0], $obj['content']);
          $hold = substr($tmp[0], 1, strpos($tmp[0], $obj['content'][0]) );
           // Get Attributes from Shortcode
            preg_match_all('/\w*="[\w\s\d$:(),@?=+%\/\.\[\]\{\}-]*/', $hold, $attr);
            foreach($attr[0] as $a){
                preg_match('/\w*/', $a, $key);
              $obj[$key[0]] = substr($a, strlen($key[0]) + 2 );
            }

          $obj['content'] = strip_tags( substr($obj['content'][0], 2, strlen($obj['content'][0]) - strlen($tag) - 4 ) );
        }else{
           // Get Attributes from Shortcode
            preg_match_all('/\w*="[\w\s\d$:(),@?=%\/\.\[\]\{\}-]*/', $tmp[0], $attr);
            foreach($attr[0] as $a){
                preg_match('/\w*/', $a, $key);
              $obj[$key[0]] = substr($a, strlen($key[0]) + 2 );
            }

          	$obj['content'] = '';
        }

        $objects[] =  (object) $obj ;
      }

      if($all_matches)
        return $objects;

		return (!empty($objects) ? $objects[0] : array() );
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
			'caret-up', 'caret-down', 'filter', 'caweb');



	return $icons;
}


function get_blank_icon_span(){
  return '<span style="visibility:hidden;" class="ca-gov-icon-logo"></span>';
}

if( !function_exists('caweb_get_excerpt') ){
	function caweb_get_excerpt($con, $excerpt_length){
		if( empty($con) )
			return $con;

		if(count( explode(" ", $con) ) > $excerpt_length){
			$excerpt = array_splice( explode(" ", $con) , 0, $excerpt_length);
			$excerpt = implode(" ", $excerpt) . '...';

			return $excerpt;
		}else{
			return $con;	
		}

	}
}
?>
