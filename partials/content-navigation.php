<?php
	global $post;

$post_id = (is_object($post) ? $post->ID : $post['ID']);
$ver = ca_get_version($post_id);

if(get_option('ca_menu_selector_enabled') == true){
		$menu_option = (  has_nav_menu('header-menu') ?
			get_post_meta($post_id, 'ca_default_navigation_menu',true) :
			get_option('ca_default_navigation_menu') );
}else{
	$menu_option = get_option('ca_default_navigation_menu') ;

}

?>

<nav id="navigation" class=" ca_wp_container main-navigation <?php print $menu_option; ?> hidden-print">


  <ul id="nav_list" class="top-level-nav">

<?php

// If not currently on the Front Page and Auto Home Nav Link option is true, create the Home Nav Link
print ( ! is_front_page() && get_option('ca_home_nav_link', true) ?'<li class="nav-item"><a href="/" class="first-level-link"><span class="ca-gov-icon-home"></span> Home</a></li>' : '' );

// if there is a header menu
if( has_nav_menu('header-menu') ){
	//Initialize Menu Variables
	$locations = get_nav_menu_locations();
	$menu = wp_get_nav_menu_object( $locations[ 'header-menu' ] );
	$menuitems = wp_get_nav_menu_items( $menu->term_id, array( 'order' => 'DESC' ) );
	
	
	//		update_option('dev', $menuitems);
	createNavMenu($menu_option , $menuitems, $ver);
	// otherwise display error message
}else{
	print '<li class="nav-item"><a href="#" class="first-level-link"><span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span><strong>There Is No Navigation Menu Set</strong></a></li>';

}

// If current page is Version 5 add the Search Top Nav Link, unless an Intranet Site
(5 == $ver && !is_caweb_intranet_site() ? print '<li class="nav-item"><a href="#" class="first-level-link"><span id="nav-item-search" class="ca-gov-icon-search" aria-hidden="true"></span> Search</a></li>' : '' );


	// if current site is a designated CAWeb Intranet Site add LogOut Button to Navigation
(is_caweb_intranet_site() && !current_user_can('edit_pages')  && is_user_logged_in() ?
 			printf( '<li class="nav-item"><a href="%1$s?caweb_logout=true" class="first-level-link"><span class="ca-gov-icon-lock" aria-hidden="true"></span> Log Out</a></li>', get_permalink() ) : '' );
?>


</ul>
</nav>
<?php

// Begin Creation of the Navigation Menu (first-level-links)
function createNavMenu($menu_option , $menuitems, $ver){

	// Iterate thru menuitems create Top Level (first-level-link)
	foreach($menuitems as $i => $item){
		//_wp_menu_item_classes_by_context($item);
		$item_meta = get_post_meta($item->ID);

		// If a top level nav item,
		// menu_item_parent= 0
		if(0 == $item->menu_item_parent){
			// Get array of Sub Nav Items (second-level-links)
			$childLinks= get_nav_menu_item_children($item->ID, $menuitems);

			// Count of Sub Nav Link
			$childCount = count($childLinks);

			// Get icon if present


			$icon = $item_meta['_caweb_menu_icon'][0];
			$icon = (!empty($icon) ? get_ca_icon_span($icon) : get_blank_icon_span() );
			// Create Link
			$nav_item = ' ';
			$nav_item .= sprintf('<li class="nav-item %1$s %2$s"><a href="%3$s" class="first-level-link">%4$s%5$s</a>',
													'','',$item->url, $icon,  $item->title);


			// If there are child links create the sub-nav
			if(0 < $childCount && "singlelevel" != $menu_option ){

				if("megadropdown" == $menu_option){
					// Sub nav image variables
					$nav_img = $item_meta['_caweb_menu_image'][0];
					$nav_img_side = $item_meta['_caweb_menu_image_side'][0];
					$nav_img_size = $item_meta['_caweb_menu_image_size'][0];


					if(4.5 <= $ver){
						$sub_img_class = sprintf('%1$s %2$s',
              ("quarter" == $nav_img_size ? 'three-quarters' : 'half') , ("left" == $nav_img_side ? 'offset-' . $nav_img_size : '') );

						$sub_img_div = sprintf('<div class="%2$s with-image-%3$s" style="background: url(%1$s) no-repeat; background-size: 100%% 100%%;"></div>',
								$nav_img,$nav_img_size, $nav_img_side);

						$nav_item .= sprintf('<div class="sub-nav">
							<div class="%1$s">%2$s</div>%3$s</li>',
							(!empty($nav_img) ? $sub_img_class : 'full'), createSubNavMenu($childLinks, $ver, $menu_option ), (!empty($nav_img) ? $sub_img_div : ''),
							( $ver == 5 && "megadropdown" == $menu_option ? 'ca_wp_container' : '') );
					}else{
						$sub_img_class = sprintf('with-image-%1$s-%2$s',
							("quarter" == $nav_img_size ? 'sm' : 'md'),$nav_img_side );

						$sub_img_div = sprintf('<div class="sub-nav-decoration" style="background: url(%1$s); "></div>', $nav_img);

						$nav_item .=
							sprintf('<div class="sub-nav %2$s">%1$s%3$s</div></li>', createSubNavMenu($childLinks, $ver, $menu_option),
                      (!empty($nav_img) ? $sub_img_class : 'empty') , (!empty($nav_img) ? $sub_img_div : '') );
					}


				}else{
					$nav_item .= sprintf('<div class="empty sub-nav %2$s">
												<div>%1$s</div></li>',
															 createSubNavMenu($childLinks, $ver, $menu_option ), ( $ver == 5  ? 'ca_wp_container' : '') );
				}

			}else{
				$nav_item .= "</li>";
			}

			// Print the list to the Navigation UL
			print $nav_item;
		}
	}


}


// Begin Creation of the Sub Navigation Menu from the Top Level Nav Item (second-level-links)
function createSubNavMenu($childLinks, $ver, $menu_option){
	// Opening ul.second-level-nav
	$sub_nav = '<ul class="second-level-nav">';

		// Iterate thru $childLinks create Sub Level (second-level-links)
		foreach($childLinks as $i => $item){
			$item_meta = get_post_meta($item->ID);

			// Get icon if present
			$icon = $item_meta['_caweb_menu_icon'][0];
			$icon = (!empty($icon) ? get_ca_icon_span($icon) : '' );

			// Get desc if present
      $desc= ("" != $item->description  ? sprintf('<div class="link-description">%1$s</div>',$item->description)  : '&nbsp;');


			$li_unit = $item_meta['_caweb_menu_unit_size'][0];


      // if version 5
      if(5.0 <= $ver){
          if("unit3" != $li_unit){
					// Create Link
						$sub_nav .= sprintf('<li class="%5$s"><a href="%1$s" class="second-level-link">%2$s%3$s%4$s</a></li>',
                      $item->url, $icon,  $item->title,( "unit1" != $li_unit  ? $desc : '' ),	$li_unit );

					}else{
            // Get nav media if present
						$nav_media_image= $item_meta['_caweb_menu_media_image'][0];

						$nav_media = ("megadropdown" == $menu_option ?
													sprintf('<div class="media-left"><a href="%1$s"><img style="height: 77px; max-width: 77px;" src="%2$s" /></a></div>',
															$item->url, $nav_media_image	) : '');

            $sub_nav .= sprintf('<li class="unit3"><div class="nav-media">
								<div class="media">%2$s<div class="media-body"><div class="title"><a href="%1$s">%3$s</a></div><div class="teaser">%4$s</div></div></div></li>',

							$item->url, $nav_media,	$item->title, $desc  );
   				}


        // version 4
      }else{
				$sub_nav .= sprintf('<li class="%1$s"><a href="%2$s" class="second-level-link">%3$s%4$s </a>%5$s</li>',
										 $li_unit,$item->url, $icon,  $item->title,( "unit1" != $li_unit  ? $desc : '' ));
      }
    }
	// Closing ul.second-level-nav
	$sub_nav .= '</ul>';

	// Return the Sub Nav
	return $sub_nav;
}

?>
