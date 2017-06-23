<?php 
require_once(get_stylesheet_directory(). '/functions/ca_custom_nav_walker.php');


if (!class_exists('CAWeb_Nav_Menu')) {
  
class CAWeb_Nav_Menu {


	/*--------------------------------------------*
	 * Constructor
	 *--------------------------------------------*/
	function __construct() {    
    //parent::__construct($main);

    //if ($this->main->disable_navigation_menu_permissions())
    //           return;

            add_action('init', array($this, 'wp_init'), 9999);
    				add_action('wp_nav_menu_item_custom_fields', array($this, 'menu_item_custom_fields'), 9, 4);

    //add_action('wp_nav_menu_item_title_user_restriction_type', array($this, 'menu_item_title_user_restriction_type'), 10, 4);
    //      add_action('wp_nav_menu_item_custom_fields_roles_list', array($this, 'menu_item_custom_fields_roles_list'), 10, 4);

      	  	add_action( 'wp_update_nav_menu_item', array($this,'ca_wp_update_nav_menu_item') , 10, 3 );
    

    //add_filter('wp_get_nav_menu_items', array($this, 'override_nav_menu_items'), 10, 3);

    //add_action('admin_print_scripts-nav-menus.php', array($this, 'enqueue_menu_scripts'));
      add_action('admin_print_styles-nav-menus.php', array($this, 'enqueue_menu_styles'));
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
    public function enqueue_menu_scripts() {
      // wp_enqueue_script('jquery');
      //wp_enqueue_script('wpfront-user-role-editor-nav-menu-js', $this->main->pluginURL() . 'js/nav-menu.js', array('jquery'), WPFront_User_Role_Editor::VERSION);
     }

    public function enqueue_menu_styles() {
      //wp_enqueue_style('caweb-nav-menu-css', get_stylesheet_url() . '/css/nav-menu.css');
    }

 
	
	public function menu_item_custom_fields($item_id, $item, $depth, $args) {

		global $ca_navigation_images;
    
		$ca_navigation_images = get_option('ca_navigation_images');

?>


<div class="icon_selector <?= (!empty($ca_navigation_images[$item_id . '_unit_size']) && 'unit3' != $ca_navigation_images[$item_id . '_unit_size'] ? 'show' : '' ) ; ?> description description-wide">
<p>Select an Icon
	<input  name="<?= $item_id; ?>_icon" id="<?= $item_id; ?>_icon" 
	value="<?= (!empty($ca_navigation_images[$item_id . '_icon']) ? $ca_navigation_images[$item_id . '_icon'] : ''); ?>" type="text" /></p>
<ul class="menu-icon-list" id="menu-icon-list-<?= $item_id; ?>">
	<?php
		foreach(get_ca_icon_list() as $i=>$ico){
			printf('<li class="icon-option ca-gov-icon-%1$s %3$s" name="%1$s" ></li>',
             $ico, $item_id, (!empty($ca_navigation_images[$item_id . '_icon']) && $ico == $ca_navigation_images[$item_id . '_icon']  ? 'is_selected' : '' ) );
		}

	?>
</ul>

</div>
<div class="unit_selector <?= (0 != $depth ? 'show' : '' ) ; ?> description description-wide"  >
<p><strong>Select a height for the navigation item</strong></p>
<select name="<?= $item_id; ?>_unit_size" class="unit-size-selector" id="unit-size-selector-<?= $item_id; ?>" >
<option value="unit1" <?= (!empty($ca_navigation_images[$item_id  . '_unit_size']) && 'unit1' == $ca_navigation_images[$item_id . '_unit_size'] ? 'selected="selected"' : '' ) ; ?> > Unit 1 - 50px height</option>
  <option value="unit2" <?= (!empty($ca_navigation_images[$item_id  . '_unit_size']) && 'unit2' == $ca_navigation_images[$item_id  . '_unit_size'] ? 'selected="selected"' : '' ) ; ?> > Unit 2 - 100px height</option>
  <?php if(5.0 <= get_option('ca_site_version') ) : ?>
  <option value="unit3" <?= (!empty($ca_navigation_images[$item_id  . '_unit_size']) && 'unit3' == $ca_navigation_images[$item_id  . '_unit_size'] ? 'selected="selected"' : '' ) ; ?> >Unit 3 - 100px height w/ Image</option>
  <?php endif; ?>
</select>
</div>

<div class="media_image <?= (0 != $depth && !empty($ca_navigation_images[$item_id  . '_unit_size']) &&
						'unit3' == $ca_navigation_images[$item_id  . '_unit_size']  ? 'show' : '' ) ; ?> description description-wide" >
<p><strong>Navigation Media Image</strong><p>
<p>Select an Image</p>
<input  name="<?= $item_id; ?>_media_image" id="<?= $item_id; ?>_media_image" type="text" class="link-text" style="width: 97%;"
	value="<?= (!empty($ca_navigation_images[$item_id . '_media_image']) ? $ca_navigation_images[$item_id . '_media_image'] : ''); ?>"/>
<input type="button" value="Browse" class="library-link" name="<?= $item_id; ?>_media_image" data-choose="Choose a Default Image" data-update="Set as Navigation Media Image" />
</div>
<div class="mega_menu_images <?= (0 == $depth ? 'show' : '' ) ; ?> description description-wide " >
<p><strong>Mega Menu Image Option</strong><p>
<p>Select an Image</p>
<input  name="<?= $item_id; ?>_image" id="<?= $item_id; ?>_image"  type="text" class="link-text" style="width: 97%;" 
	value="<?= (!empty($ca_navigation_images[$item_id . '_image']) ? $ca_navigation_images[$item_id . '_image'] : '') ; ?>"/>
<input type="button" value="Browse" class="library-link" name="<?= $item_id; ?>_image" data-choose="Choose a Default Image" data-update="Set as Sub Navigation Image" />

<p>Select a Side / Select a Size</p>
<select name="<?= $item_id; ?>_image_side" >
<option value="left" <?= (!empty($ca_navigation_images[$item_id . '_image_side']) && 'left' == $ca_navigation_images[$item_id . '_image_side'] ? 'selected="selected"' : '' ) ;?> >Left</option>
<option value="right" <?= (!empty($ca_navigation_images[$item_id . '_image_side']) &&  'right' == $ca_navigation_images[$item_id  . '_image_side'] ? 'selected="selected"' : '' ) ;?> >Right</option>
</select>
 /
<select name="<?= $item_id; ?>_image_size">
<option value="quarter" <?= (!empty($ca_navigation_images[$item_id . '_image_size'] ) && 'quarter' == $ca_navigation_images[$item_id . '_image_size'] ? 'selected="selected"' : '' ) ;?> >Quarter</option>
<option value="half" <?= (!empty($ca_navigation_images[$item_id . '_image_size'] ) && 'half' == $ca_navigation_images[$item_id . '_image_size'] ? 'selected="selected"' : '' ) ;?> >Half</option>
</select>
</div>

<?php

	}

	// save menu custom fields
	public function ca_wp_update_nav_menu_item($menu_id, $menu_item_db_id, $args){
		$imgs = array();

 		// Check if element is properly sent
	  if ( isset( $_POST['menu-item-db-id'] ) ) {
					
			$menu_ids = $_POST['menu-item-db-id'];

			foreach($menu_ids as $i){
				$imgs[$i . '_icon'] = $_POST[$i . '_icon'];
				$imgs[$i . '_unit_size'] = $_POST[$i . '_unit_size'];
				$imgs[$i . '_media_image'] = $_POST[$i . '_media_image'];
				$imgs[$i . '_image'] = $_POST[$i . '_image'];
				$imgs[$i . '_image_side'] = $_POST[$i . '_image_side'];
				$imgs[$i . '_image_size'] = $_POST[$i . '_image_size'];

			}

		}

		update_option('ca_navigation_images', $imgs);
	}
}
}
  // instantiate plugin's class
new CAWeb_Nav_Menu();

?>