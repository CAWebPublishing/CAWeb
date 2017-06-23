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
		$tmp = get_post_meta($item->ID);
?>


<div class="icon_selector <?= (!empty($tmp['_caweb_menu_unit_size'][0]) && 'unit3' != $tmp['_caweb_menu_unit_size'][0] ? 'show' : '' ) ; ?> description description-wide">
<p>Select an Icon
	<input  name="<?= $item_id; ?>_icon" id="<?= $item_id; ?>_icon"
	value="<?= !empty($tmp['_caweb_menu_icon'][0] ) ?  $tmp['_caweb_menu_icon'][0] : '' ; ?>" type="text" /></p>
<ul class="menu-icon-list" id="menu-icon-list-<?= $item_id; ?>">
	<?php
		foreach(get_ca_icon_list() as $i=>$ico){
			printf('<li class="icon-option ca-gov-icon-%1$s %3$s" name="%1$s" ></li>',
             $ico, $item_id, (!empty($tmp['_caweb_menu_icon'][0] ) && $ico == $tmp['_caweb_menu_icon'][0]  ? 'is_selected' : '' ) );
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

	// save menu custom fields
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
