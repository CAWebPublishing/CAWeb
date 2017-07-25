<?php



require_once(get_stylesheet_directory(). '/functions/ca_custom_nav_walker.php');

if (!class_exists('CAWeb_Nav_Menu')) {

class CAWeb_Nav_Menu extends Walker_Nav_Menu{


	/*--------------------------------------------*
	 * Constructor
	 *--------------------------------------------*/
	function __construct() {
    add_action('init', array($this, 'wp_init'), 9999);
    add_action('wp_nav_menu_item_custom_fields', array($this, 'menu_item_custom_fields'), 9, 4);

    add_action( 'wp_update_nav_menu_item', array($this,'ca_wp_update_nav_menu_item') , 10, 3 );

		// Hooked onto the WordPress Navigation Creation Filter
		add_filter('wp_nav_menu_args', array($this, 'caweb_nav_menu_args') );
		add_filter('pre_wp_nav_menu', array($this, 'caweb_nav_menu'), 10, 2 );

	} // end constructor


   public function wp_init() {
     // edit menu walker
    		add_filter( 'wp_edit_nav_menu_walker', array( $this, 'ca_edit_walker'), 9999);

    }

	function ca_edit_walker($current = 'Walker_Nav_Menu_Edit') {
    		if ($current !== 'Walker_Nav_Menu_Edit')
          return $current;

			return 'CAWeb_Nav_Menu_Walker';

	}
	function caweb_nav_menu_args( $args) {
		if(isset( $args['theme_location'] ) && in_array($args['theme_location'], array('header-menu', 'footer-menu') ) ){
			$args['fallback_cb'] = array($this, 'caweb_menu_fail');
		}

		return $args;
	}

	public function caweb_menu_fail($args){
	$output= '';

   if('header-menu' == $args['theme_location']){
			$output = '<nav id="navigation" class=" ca_wp_container main-navigation hidden-print"><ul id="nav_list" class="top-level-nav">
											<li class="nav-item"><a href="#" class="first-level-link"><span class="ca-gov-icon-warning-triangle" aria-hidden="true"></span><strong>There Is No Navigation Menu Set</strong></a></li></ul></nav>';

		}else{
     $navLinks = '<ul class="footer-links"><li><a>There Is No Navigation Menu Set</a></li></ul>';
				$socialLinks = '';
				$output = sprintf('<footer id="footer" class="global-footer hidden-print"><div class="container %1$s">%2$s%3$s</div>
													<!-- Copyright Statement -->
										<div class="copyright">
										<div class="container container ca_wp_container" %4$s> Copyright &copy;
										<script>document.write(new Date().getFullYear())</script> State of California </div></div></footer>%5$s',
									( 4 < $args['version'] ? 'ca_wp_container' : '' ), $navLinks, $socialLinks,
									( 4 >= $args['version'] ? 'style="text-align:center;" ' : '' ),
									(isset($args['ca_custom_css']) && !empty($args['ca_custom_css']) ?
									sprintf('<style id="ca_custom_css">%1$s</style>', $args['ca_custom_css']) : '') );

		}
    print $output;
	}

	/* Menu Construction
			Additional $args parameters added and used by CAWeb
			 style = Default Navigation Menu Style unless overwritten at the page level
			 home_link = If not currently on the Front Page and Auto Home Nav Link option is true add Link back to Home Page
			 version = State Template Version
	*/
	public function caweb_nav_menu( $nav , $args = array() ){
		global $post;
		$post_id = (is_object($post) ? $post->ID : $post['ID']);
		$output = '';
  	$locations = get_nav_menu_locations() ;
    $args->menu = ( isset($locations[ $args->theme_location ] ) ? wp_get_nav_menu_object( $locations[ $args->theme_location ] )  : '');

		// Header Menu Construction
		if('header-menu' == $args->theme_location && !empty($args->menu) ){
      $navLinks = $this->createNavMenu($args);

			// If not currently on the Front Page and Auto Home Nav Link option is true, create the Home Nav Link
			$homeLink = ( isset($args->home_link) && $args->home_link ? '<li class="nav-item"><a href="/" class="first-level-link"><span class="ca-gov-icon-home"></span> Home</a></li>' : '');

			$searchLink = ( isset($args->version) && 5 <= $args->version && "page-templates/searchpage.php" !== get_page_template_slug($post_id) ?
									'<li class="nav-item"><a href="#" class="first-level-link"><span id="nav-item-search" class="ca-gov-icon-search" aria-hidden="true"></span> Search</a></li>' : '' );

			$output = sprintf('<nav id="navigation" class=" ca_wp_container main-navigation %1$s hidden-print">
								<ul id="nav_list" class="top-level-nav">%2$s%3$s%4$s</ul></nav>',
												(isset($args->style) ? $args->style : 'megadropdown'), $homeLink, $navLinks, $searchLink );

			// Footer Menu Construction
		}elseif('footer-menu' == $args->theme_location && !empty($args->menu)){
      $navLinks = $this->createFooterMenu($args);
      $socialLinks = $this->createFooterSocialMenu($args);

			$output = sprintf('<footer id="footer" class="global-footer hidden-print"><div class="container %1$s">%2$s%3$s</div>
													<!-- Copyright Statement -->
										<div class="copyright">
										<div class="container container ca_wp_container" %4$s> Copyright &copy;
										<script>document.write(new Date().getFullYear())</script> State of California </div></div></footer>%5$s',
									( 4 < $args->version ? 'ca_wp_container' : '' ), $navLinks, $socialLinks, ( 4 >= $args->version ? 'style="text-align:center;" ' : '' ),
(isset($args->ca_custom_css) && !empty($args->ca_custom_css) ? sprintf('<style id="ca_custom_css">%1$s</style>', $args->ca_custom_css) : '') );
		}

			return (!empty($output) ? $output : $nav);
	}


	// Begin Creation of the Navigation Menu (first-level-links)
	public function createNavMenu($args){

    $menuitems = wp_get_nav_menu_items( $args->menu->term_id, array( 'order' => 'DESC' ) );

			_wp_menu_item_classes_by_context($menuitems);

		$nav_item = ' ';
		// Iterate thru menuitems create Top Level (first-level-link)
		foreach($menuitems as $i => $item){
			// If a top level nav item,
			// menu_item_parent= 0
			if(0 == $item->menu_item_parent){
				$item_meta = get_post_meta($item->ID);
				// Get array of Sub Nav Items (second-level-links)
				$childLinks= get_nav_menu_item_children($item->ID, $menuitems);

				// Count of Sub Nav Link
				$childCount = count($childLinks);

				// Get icon if present
				$icon = $item_meta['_caweb_menu_icon'][0];
				$icon = (!empty($icon) ? get_icon_span($icon) : get_blank_icon_span() );
				// Create Link
				$nav_item .= sprintf('<li class="nav-item %1$s%2$s"%3$s%4$s><a href="%5$s" class="first-level-link"%6$s>%7$s %8$s</a>',
										implode(" ", $item->classes),(in_array('current-menu-item', $item->classes) ? ' active ' : ''),
										(!empty($item->xfn) ? sprintf(' rel="%1$s" ', $item->xfn) : ''),
										(!empty($item->attr_title) ? sprintf(' title="%1$s" ', $item->attr_title) : ''),
										$item->url, (!empty($item->target) ? sprintf(' target="%1$s"', $item->target) : ''),
										$icon,  $item->title);


				// If there are child links create the sub-nav
				if(0 < $childCount && "singlelevel" != $args->style ){

					if("megadropdown" == $args->style){
						// Sub nav image variables
						$nav_img = $item_meta['_caweb_menu_image'][0];
						$nav_img_side = $item_meta['_caweb_menu_image_side'][0];
						$nav_img_size = $item_meta['_caweb_menu_image_size'][0];


						if(4.5 <= $args->version){
							$sub_img_class = sprintf('%1$s %2$s',
								("quarter" == $nav_img_size ? 'three-quarters' : 'half') , ("left" == $nav_img_side ? 'offset-' . $nav_img_size : '') );

							$sub_img_div = sprintf('<div class="%2$s with-image-%3$s" style="background: url(%1$s) no-repeat; background-size: 100%% 100%%;"></div>',
									$nav_img,$nav_img_size, $nav_img_side);

							$nav_item .= sprintf('<div class="sub-nav">
								<div class="%1$s">%2$s</div>%3$s</div></li>',
								(!empty($nav_img) ? $sub_img_class : 'full'), $this->createSubNavMenu($childLinks, $args ), (!empty($nav_img) ? $sub_img_div : ''),
								($args->version == 5 && "megadropdown" == $args->style ? 'ca_wp_container' : '') );
						}else{
							$sub_img_class = sprintf('with-image-%1$s-%2$s',
								("quarter" == $nav_img_size ? 'sm' : 'md'),$nav_img_side );

							$sub_img_div = sprintf('<div class="sub-nav-decoration" style="background: url(%1$s); "></div>', $nav_img);

							$nav_item .=
								sprintf('<div class="sub-nav %2$s">%1$s%3$s</div></li>', $this->createSubNavMenu($childLinks, $args),
												(!empty($nav_img) ? $sub_img_class : 'empty') , (!empty($nav_img) ? $sub_img_div : '') );
						}


					}else{
						$nav_item .= sprintf('<div class="empty sub-nav %2$s">
													<div>%1$s</div></li>',
																$this->createSubNavMenu($childLinks,  $args ), ( $args->version == 5  ? 'ca_wp_container' : '') );
					}

				}else{
					$nav_item .= "</li>";
				}

			}
		} // End of for each

				// Print the list to the Navigation UL
				return $nav_item;
	} // End of createNavMenu


		// Begin Creation of the Sub Navigation Menu from the Top Level Nav Item (second-level-links)
	function createSubNavMenu($childLinks, $args){
		// Opening ul.second-level-nav
		$sub_nav = '<ul class="second-level-nav">';

			// Iterate thru $childLinks create Sub Level (second-level-links)
			foreach($childLinks as $i => $item){
				$item_meta = get_post_meta($item->ID);

				// Get icon if present
				$icon = $item_meta['_caweb_menu_icon'][0];
				$icon = (!empty($icon) ? get_icon_span($icon) : '' );

				// Get desc if present
				$desc= ("" != $item->description  ? sprintf('<div class="link-description">%1$s</div>',$item->description)  : '&nbsp;');


				$li_unit = $item_meta['_caweb_menu_unit_size'][0];


				// if version 5
				if(5.0 <= $args->version){
						if("unit3" != $li_unit){
						// Create Link
							$sub_nav .= sprintf('<li class="%5$s"><a href="%1$s" class="second-level-link">%2$s%3$s%4$s</a></li>',
												$item->url, $icon,  $item->title,( "unit1" != $li_unit  ? $desc : '' ),	$li_unit );

						}else{
							// Get nav media if present
							$nav_media_image= $item_meta['_caweb_menu_media_image'][0];

							$nav_media = ("megadropdown" == $args->style ?
														sprintf('<div class="media-left"><a href="%1$s"><img style="height: 77px; max-width: 77px;" src="%2$s" /></a></div>',
																$item->url, $nav_media_image	) : '');

							$sub_nav .= sprintf('<li class="unit3"><div class="nav-media">
<div class="media">%2$s<div class="media-body"><div class="title"><a href="%1$s">%3$s</a></div><div class="teaser">%4$s</div></div></div></div></li>',

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
	} // End of createSubNavMenu

	public function createFooterMenu($args){
		$navLinks = '';

		// loop thru and create a link (parent nav item only)
    $menuitems =  wp_get_nav_menu_items( $args->menu->term_id, array( 'order'=> 'DESC'));

		foreach ( $menuitems as $item) {
          if($item->menu_item_parent == 0)
                $navLinks .= sprintf('<li><a href="%1$s">%2$s</a></li>',$item->url ,$item->title);
		}
    $navLinks = sprintf('<div class="%1$s"><ul class="footer-links" %2$s><li><a href="#skip-to-content">Back to Top</a></li>%3$s</ul></div>',
											(4 >= $args->version ? 'full' : 'three-quarters' ), (4 >= $args->version ? ' style="text-align:center;" ' : '' ), $navLinks
											);
		return $navLinks;
	}

	public function createFooterSocialMenu($args){
		$social_share = get_ca_social_options();
		$socialLinks = '';

		foreach($social_share as $opt){
			if(get_option($opt .'_footer') && "" != get_option($opt)){
				$share = substr($opt, 10);
				$share =  str_replace("_", "-", $share);

				$socialLinks .= sprintf('<li><a href="%1$s">%2$s<span class="sr-only">%3$s</span></a></li>',
														get_option($opt), get_icon_span($share), $share) ;
			}
		}
    $socialLinks = sprintf('<div class="%1$s"><ul class="socialsharer-container" %2$s>%3$s</ul></div>',
											(4 >= $args->version ? 'full' : 'quarter text-right' ), (4 >= $args->version ? ' style="text-align:center;  float:none;" ' : '' ), $socialLinks	);
		return $socialLinks;
	}

	public function menu_item_custom_fields($item_id, $item, $depth, $args) {
		$tmp = get_post_meta($item->ID);
?>


<div class="icon_selector <?= (!empty($tmp['_caweb_menu_unit_size'][0]) && 'unit3' != $tmp['_caweb_menu_unit_size'][0] ? 'show' : '' ) ; ?> description description-wide">
<p>Select an Icon
	<input  name="<?= $item_id; ?>_icon" id="<?= $item_id; ?>_icon"
	value="<?= !empty($tmp['_caweb_menu_icon'][0] ) ?  $tmp['_caweb_menu_icon'][0] : '' ; ?>" type="text" /></p>
<ul class="et_font_icon menu-icon-list" id="menu-icon-list-<?= $item_id; ?>">
	<?php

		foreach(get_ca_icon_list() as $name=>$code){
			printf('<li data-icon="%1$s" class="icon-option %3$s"  name="%2$s"></li>',
             esc_attr( $code ), $name, (!empty($tmp['_caweb_menu_icon'][0] ) && $name == $tmp['_caweb_menu_icon'][0]  ? 'is_selected' : '' )  );
		}
	?>
</ul>

</div>
<div class="unit_selector <?= (0 != $depth ? 'show' : '' ) ; ?> description description-wide"  >
<p><strong>Select a height for the navigation item</strong></p>
<select name="<?= $item_id; ?>_unit_size" class="unit-size-selector" id="unit-size-selector-<?= $item_id; ?>" >
<option value="unit1" <?= ('unit1' == $tmp['_caweb_menu_unit_size'][0] ? 'selected="selected"' : '' ) ; ?> >Unit 1 - 50px height</option>
  <option value="unit2" <?= ('unit2' == $tmp['_caweb_menu_unit_size'][0] ? 'selected="selected"' : '' ) ; ?> >Unit 2 - 100px height</option>
  <?php if(5.0 <= get_option('ca_site_version') ) : ?>
  <option value="unit3" <?= ('unit3' == $tmp['_caweb_menu_unit_size'][0] ? 'selected="selected"' : '' ) ; ?> >Unit 3 - 100px height w/ Image</option>
  <?php endif; ?>
</select>
</div>

<div class="media_image <?= (0 != $depth &&  !empty($tmp['_caweb_menu_unit_size'][0]) && 'unit3' == $tmp['_caweb_menu_unit_size'][0]  ? 'show' : '' ) ; ?> description description-wide" >
<p><strong>Navigation Media Image</strong><p>
<p>Select an Image</p>
<input  name="<?= $item_id; ?>_media_image" id="<?= $item_id; ?>_media_image" type="text" class="link-text" style="width: 97%;"
	value="<?= !empty($tmp['_caweb_menu_media_image'][0]) ? $tmp['_caweb_menu_media_image'][0] : '' ; ?>"/>
<input type="button" class="library-link" value="Browse" id="library-link-<?= $item_id; ?>"   name="<?= $item_id; ?>_media_image" data-choose="Choose a Default Image" data-update="Set as Navigation Media Image" />
</div>
<div class="mega_menu_images <?= (0 == $depth ? 'show' : '' ) ; ?> description description-wide " >
<p><strong>Mega Menu Image Option</strong><p>
<p>Select an Image</p>
<input  name="<?= $item_id; ?>_image" id="<?= $item_id; ?>_image"  type="text" class="link-text" style="width: 97%;"
	value="<?= !empty($tmp['_caweb_menu_image'][0]) ? $tmp['_caweb_menu_image'][0] : '' ; ?>"/>
<input type="button" value="Browse" id="library-link-<?= $item_id; ?>" class="library-link"  name="<?= $item_id; ?>_image" data-choose="Choose a Default Image" data-update="Set as Sub Navigation Image" />

<p>Select a Side / Select a Size</p>
<select name="<?= $item_id; ?>_image_side" >
<option value="left" <?= (!empty($tmp['_caweb_menu_image_side'][0]) && 'left' == $tmp['_caweb_menu_image_side'][0] ? 'selected="selected"' : '' ) ;?> >Left</option>
<option value="right" <?= (!empty($tmp['_caweb_menu_image_side'][0]) && 'right' == $tmp['_caweb_menu_image_side'][0] ? 'selected="selected"' : '' ) ;?> >Right</option>
</select>
 /
<select name="<?= $item_id; ?>_image_size">
<option value="quarter" <?= (!empty($tmp['_caweb_menu_image_size'][0]) && 'quarter' == $tmp['_caweb_menu_image_size'][0] ? 'selected="selected"' : '' ) ;?> >Quarter</option>
<option value="half" <?= (!empty($tmp['_caweb_menu_image_size'][0]) &&  'half' == $tmp['_caweb_menu_image_size'][0] ? 'selected="selected"' : '' ) ;?> >Half</option>
</select>
</div>

<?php

	}

	// save menu custom fields that are added on to ca_custom_nav_walker
	public function ca_wp_update_nav_menu_item($menu_id, $menu_item_db_id, $args){
 		// Check if element is properly sent
		if ( isset( $_POST['menu-item-db-id'] ) ){

			$args['caweb-menu-item-icon'] = $_POST[$menu_item_db_id . '_icon'];
				$args['caweb-menu-item-unit-size'] = $_POST[$menu_item_db_id . '_unit_size'];
				$args['caweb-menu-item-media-image'] = $_POST[$menu_item_db_id . '_media_image'];
				$args['caweb-menu-item-image'] = $_POST[$menu_item_db_id . '_image'];
				$args['caweb-menu-item-image-side'] = $_POST[$menu_item_db_id . '_image_side'];
				$args['caweb-menu-item-image-size'] = $_POST[$menu_item_db_id . '_image_size'];


				update_post_meta( $menu_item_db_id, '_caweb_menu_icon', $args['caweb-menu-item-icon'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_unit_size', $args['caweb-menu-item-unit-size'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_media_image', $args['caweb-menu-item-media-image'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_image', $args['caweb-menu-item-image'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_image_side', $args['caweb-menu-item-image-side'] );
				update_post_meta( $menu_item_db_id, '_caweb_menu_image_size', $args['caweb-menu-item-image-size'] );


		}

		return $menu_item_db_id;
	}

}
}
// instantiate plugin's class
new CAWeb_Nav_Menu();

?>
