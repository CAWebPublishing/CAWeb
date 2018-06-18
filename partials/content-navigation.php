<?php
	global $post;
	
$post_id = (is_object($post) ? $post->ID : $post['ID']);

	$menu_option = (  has_nav_menu(get_post_meta($post_id, 'ca_default_navigation_menu',true)) ?
			get_post_meta($post_id, 'ca_default_navigation_menu',true) :
			get_option('ca_default_navigation_menu') );

?>

<nav id="navigation" class="main-navigation <?php print $menu_option; ?> ">

  <ul id="nav_list" class="top-level-nav <?=   ( ca_version_check(5, $post_id) ? 'ca_wp_container' : ''); ?>">

<?php

//Initialize Menu Variables
$locations = get_nav_menu_locations();
$menu = wp_get_nav_menu_object( $locations[ $menu_option ] );
$menuitems = wp_get_nav_menu_items( $menu->term_id, array( 'order' => 'DESC' ) );

// If not currently on the Front Page, create the Home Nav Link
print ( ! is_front_page() ?'<li class="nav-item"><a href="/" class="first-level-link"><span class="ca-gov-icon-home"></span> Home</a></li>' : '' );


// If there is a menu created but it has no links
if(0 == count($menuitems)  ){
printf( '<li class="nav-item"><a href="#" class="first-level-link"><span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span><strong>The %1$s Menu Has No Links</strong></a></li>', get_ca_nav_menu_theme_location_name(-1,$menu_option) );

// If there is no menu set
}elseif( ! $menuitems){
printf('<li class="nav-item"><a href="#" class="first-level-link"><span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span><strong>There Is No %1$s Menu Set</strong></a></li>',
get_ca_nav_menu_theme_locations()[$menu_option] );


// Otherwise a menu was select, construct the Navigation Menu
}else{
	if(ca_version_check(5.0, $post_id)){
			$ver = 5.0;
	}else{
		$ver = 4;
	}

	createNavMenu($menu_option , $menuitems, $ver);
}

// If current page is Version 5 add the Search Top Nav Link
  	if( ca_version_check(5.0, $post_id)  ){
  print '<li class="nav-item"><a href="#" class="first-level-link"><span class="ca-gov-icon-search" aria-hidden="true"></span> Search</a></li>';
  	}
?>


</ul>
</nav>

<?php

// Begin Creation of the Navigation Menu (first-level-links)
function createNavMenu($menu_option , $menuitems, $ver){
	$nav_image_items = get_option('ca_navigation_images');
	$nav_item = ' ';

	// Iterate thru menuitems create Top Level (first-level-link)
	foreach($menuitems as $i => $item){
		// If a top level nav item,
		// menu_item_parent= 0
		if(0 == $item->menu_item_parent){
			// Get array of Sub Nav Items (second-level-links)
			$childLinks= get_nav_menu_item_children($item->ID, $menuitems);

			// Count of Sub Nav Link
			$childCount = count($childLinks);

			// Get icon if present
			$icon = (!empty($nav_image_items[$item->ID .'_icon']) ? get_ca_icon_span($nav_image_items[$item->ID .'_icon']) : get_blank_icon_span());

			// Create Link
			$nav_item .= sprintf('<li class="nav-item"><a href="%1$s" class="first-level-link">%2$s%3$s</a>',
					$item->url, $icon,  $item->title);

			// If there are child links create the sub-nav
			if(0 < $childCount){
				// Sub nav image variables
				$nav_img = '';
				$nav_img_side = '';
				$nav_img_size ='';


				if(5 == $ver){  // If v5
					// if sub-nav has an image
					$sub_img_class = '';
					$sub_img_div = '';
					
					
					if(!empty($nav_image_items[$item->ID . '_image']) && "megadropdown" == $menu_option){
						$nav_img = (!empty($nav_image_items[$item->ID . '_image']) ? $nav_image_items[$item->ID . '_image'] : '');
						$nav_img_side = (!empty($nav_image_items[$item->ID . '_image_side']) ? $nav_image_items[$item->ID . '_image_side'] : '');
						$nav_img_size = (!empty($nav_image_items[$item->ID . '_image_size']) ? $nav_image_items[$item->ID . '_image_size'] : '');

						$sub_img_class = sprintf('%1$s %2$s',
                      ("quarter" == $nav_img_size ? 'three-quarters' : 'half') , ("left" == $nav_img_side ? 'offset-' . $nav_img_size : '') );
            
						$sub_img_div = sprintf('<div class="%2$s with-image-%3$s"
style="background: url(%1$s); %4$s; background-repeat: no-repeat;"></div>',
								$nav_img,$nav_img_size, $nav_img_side,"background-size: 100% 100%;");

            $nav_item .= sprintf('<div class="sub-nav ca_wp_container">
								<div class="%1$s">%2$s</div>%3$s',
$sub_img_class, createSubNavMenu($childLinks, $ver ), $sub_img_div);
        

					// If no sub nav exists, just one list in a full size div
					}else{
					
					$nav_item .=
				sprintf('<div class="sub-nav ca_wp_container">
						<div class="full">
							%1$s
						</div>
					</div>', createSubNavMenu($childLinks , $ver )  );
					}
				
				}elseif(4 == $ver){ // If v4 or v4.5 create 1 sub nav list
					// if sub-nav has an image
					$sub_img_class = '';
					$sub_img_div = '';
					if(!empty($nav_image_items[$item->ID . '_image'])){
						$nav_img = $nav_image_items[$item->ID . '_image'];
						$nav_img_side = $nav_image_items[$item->ID . '_image_side'];
						$nav_img_size = $nav_image_items[$item->ID . '_image_size'];

						$sub_img_class = sprintf('with-image-%1$s-%2$s',
							("quarter" == $nav_img_size ? 'sm' : 'md'),$nav_img_side );

						$sub_img_div = sprintf('<div class="sub-nav-decoration" style="background: url(%1$s); "></div>', $nav_img);
					}

					$nav_item .=
					sprintf('<div class="sub-nav %2$s">%1$s%3$s</div>', createSubNavMenu($childLinks, $ver), $sub_img_class, $sub_img_div );



				}
			}

			// Close the Link
			$nav_item .= '</li>';
		}
	}

	// Print the list to the Navigation UL
	print $nav_item;

}

// Begin Creation of the Sub Navigation Menu from the Top Level Nav Item (second-level-links)
function createSubNavMenu($childLinks, $ver){
	$nav_image_items = get_option('ca_navigation_images');

	// Opening ul.second-level-nav
	$sub_nav = '';

	$sub_nav = '<ul class="second-level-nav">';

		// Iterate thru $childLinks create Sub Level (second-level-links)
		foreach($childLinks as $i => $item){
			// Get icon if present
	$icon = (!empty($nav_image_items[$item->ID .'_icon']) ? get_ca_icon_span($nav_image_items[$item->ID .'_icon']) : '');

			// Get desc if present
      $desc= ("" != $item->description  ? sprintf('<div class="link-description">%1$s</div>',$item->description)  : '&nbsp;');


			$li_unit = (!empty($nav_image_items[$item->ID .'_unit_size']) ? $nav_image_items[$item->ID .'_unit_size'] : '');


      // if version 5
      if(5.0 <= $ver){
          if("unit3" != $li_unit ){
					// Create Link
						$sub_nav .= sprintf('<li class="%5$s"><a href="%1$s" class="second-level-link">%2$s%3$s%4$s</a></li>',
                      $item->url, $icon,  $item->title,( "unit1" != $li_unit  ? $desc : '' ),	$li_unit );

					}else{
            // Get nav media if present
						$nav_media= (!empty($nav_image_items[$item->ID .'_media_image']) ? $nav_image_items[$item->ID .'_media_image'] : '');

            $sub_nav .= sprintf('<li class="unit3"><div class="nav-media">
								<div class="media">
<div class="media-left"><a href="%1$s"><img style="height: 77px; max-width: 77px;" src="%2$s" /></a></div>
<div class="media-body"><div class="title"><a href="%1$s">%3$s</a></div><div class="teaser">%4$s</div></div>
</div></li>',
                      $item->url, $nav_media,  $item->title, $desc  );
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
