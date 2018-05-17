<?php
/*
Divi Icon Field Names
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
*/

// Fullwidth Version
class ET_Builder_Module_Fullwidth_CA_Service_Tiles extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'FullWidth Service Tiles', 'et_builder' );
		$this->slug = 'et_pb_ca_fullwidth_service_tiles';
		$this->fullwidth = true;

		$this->child_slug      = 'et_pb_ca_fullwidth_service_tiles_item';
		$this->child_item_text = esc_html__( 'Tile', 'et_builder' );

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'body'   => esc_html__( 'Body', 'et_builder'),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'text' => array(
						'title'    => esc_html__( 'Text', 'et_builder' ),
						'priority' => 49,
					),
				),
			),
			'custom_css' => array(
				'toggles' => array(
				),
			),
		);
	}
	function pre_shortcode_content() {
		global $titles;
		global $tile_images;
		global $tile_sizes;
		global $tile_links;
		global $tile_urls;

		$titles = array();
		$tile_images = array();
		$tile_sizes= array();
		$tile_links= array();
		$tile_urls= array();

		global $items_count;

		$items_count = 0;

	}
	function get_fields() {
		$general_fields = array(
			'view_more_on_off' => array(
				'label'           => esc_html__( 'View More', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'tab_slug'			=> 'general',
				'toggle_slug'			=> 'body',
			),
			'view_more_url' => array(
				'label'             => esc_html__( 'Link Url', 'et_builder'),
				'type'              => 'text',
				'show_if'   => array('view_more_on_off' => 'on'),
				'tab_slug'			=> 'general',
				'toggle_slug'				=> 'body',
			),
			'view_more_text' => array(
				'label'             => esc_html__( 'Link Text', 'et_builder'),
				'type'              => 'text',
				'show_if'   => array('view_more_on_off' => 'on'),
				'tab_slug'			=> 'general',
				'toggle_slug'				=> 'body',
			),
			'admin_label' => array(
			  'label'       => esc_html__( 'Admin Label', 'et_builder' ),
			  'type'        => 'text',
			  'description' => esc_html__( 'This will change the label of the module in the builder for easy identification.', 'et_builder' ),
				'tab_slug'			=> 'general',
				'toggle_slug'	=> 'admin_label',
			),
		);

		$design_fields = array();

		$advanced_fields = array(
			'module_id' => array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'disabled_on' => array(
		  	'label'     => esc_html__( 'Disable on', 'et_builder' ),
		  	'type'     	=> 'multiple_checkboxes',
		  	'options'   => array(
		    	'phone'   	=> esc_html__( 'Phone', 'et_builder' ),
			    'tablet'  	=> esc_html__( 'Tablet', 'et_builder' ),
			    'desktop' 	=> esc_html__( 'Desktop', 'et_builder' ),
		  	),
			  'additional_att'  => 'disable_on',
			  'option_category' => 'configuration',
			  'description'     => esc_html__( 'This will disable the module on selected devices', 'et_builder' ),
				'tab_slug'				=> 'custom_css',
				'toggle_slug'			=> 'visibility',
			),
		);

		return array_merge( $general_fields, $design_fields, $advanced_fields);

	}
	function render( $unprocessed_props, $content = null, $render_slug ) {
		$module_id            = $this->props['module_id'];
		$module_class         = $this->props['module_class'];
		$view_more_on_off     = $this->props['view_more_on_off'];
		$view_more_text       = $this->props['view_more_text'];
		$view_more_url        = $this->props['view_more_url'];

		$module_id = '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '';
		$module_class = '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '';
		$class = sprintf(' class="et_pb_ca_fullwidth_service_tiles et_pb_module section-understated collapsed%1$s"', $module_class);


		global $titles;
		global $tile_images;
		global $tile_sizes;
		global $tile_links;
		global $tile_urls;

		global $items_count;

		$view_more = "on" == $view_more_on_off ? sprintf('<div class="more-button"><div class="more-content"></div><a href="%1$s" class="btn-more inverse" target="_blanK"><span class="ca-gov-icon-plus-fill" aria-hidden="true"></span><span class="more-title">%2$s</span></a></div>', esc_url($view_more_url), $view_more_text) : '';

		$output = '';

		for($i = 0; $i < $items_count; $i++){
			if("on" == $tile_links[$i]){
				$output .= sprintf('<div tabindex="%1$s" class="service-tile service-tile-empty %2$s" data-url="%3$s" data-link-target="new" >
					%4$s<div class="teaser"><h4 class="title">%5$s</h4></div></div>',
													$i + 1, $tile_sizes[$i], esc_url($tile_urls[$i] ) ,
													( ! empty($tile_images[$i]) ? sprintf('<img src="%1$s" style="background-size: cover; width: 100%%; height: 320px;"/>', $tile_images[$i]) : ''),
													$titles[$i]  );
			}else{

		$output .= sprintf('<div tabindex="%1$s" class="service-tile %2$s" data-tile-id="panel-%1$s"
style="background-image:url(%3$s); background-size: cover;"><div class="teaser"><h4 class="title">%4$s</h4></div></div>',
												$i + 1, $tile_sizes[$i], $tile_images[$i], $titles[$i]  );
			}
		}

		$output .= do_shortcode($content);
		$output = sprintf('<div%1$s><div class="service-group clearfix" id="service-group-123">%2$s</div>%3$s</div>', $class, $output, $view_more);

		return $output;
	}
}
new ET_Builder_Module_Fullwidth_CA_Service_Tiles;

class ET_Builder_Module_Fullwidth_CA_Service_Tiles_Item extends ET_Builder_CAWeb_Module{
	function init() {
		$this->name = esc_html__( 'FullWidth Service Tile Item', 'et_builder' );
		$this->slug = 'et_pb_ca_fullwidth_service_tiles_item';
		$this->fullwidth = true;

		$this->type = 'child';
		$this->child_title_var = 'item_title';
		$this->child_title_fallback_var = 'item_title';

		$this->fields_defaults = array(
			'tile_link' => array('off','add_default_setting'),
			);
		$this->advanced_setting_title_text = esc_html__( 'New Service Tile', 'et_builder' );
		$this->settings_text = esc_html__( 'Service Tile Settings', 'et_builder' );
		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'header' => esc_html__( 'Header', 'et_builder'),
					'style'  => esc_html__( 'Style', 'et_builder'),
					'body'   => esc_html__( 'Body', 'et_builder'),
				),
			),
			'advanced' => array(
				'toggles' => array(
				),
			),
			'custom_css' => array(
				'toggles' => array(
				),
			),
		);
	}
	function get_fields() {
		$general_fields = array(
			'item_title' => array(
				'label' => esc_html__( 'Title', 'et_builder' ),
				'type'=> 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the title for the tile', 'et_builder' ),
				'tab_slug'	=> 'general',
				'toggle_slug'	=> 'header',
			),
			'tile_size' => array(
				'label'             => esc_html__( 'Size', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'quarter' => esc_html__( 'Quarter', 'et_builder'),
					'half' => esc_html__( 'Half', 'et_builder'),
					'full'  => esc_html__( 'Full', 'et_builder'),
				),
				'description'       => esc_html__( 'Here you can choose the size of the tile', 'et_builder' ),
				'tab_slug'	=> 'general',
				'toggle_slug'	=> 'style',
			),
			'item_image' => array(
				'label' => esc_html__( 'Image', 'et_builder' ),
				'type' => 'upload',
				'option_category' => 'basic_option',
				'upload_button_text' => esc_attr__( 'Upload an image', 'et_builder' ),
				'choose_text' => esc_attr__( 'Choose a Background Image', 'et_builder' ),
				'update_text' => esc_attr__( 'Set As Background', 'et_builder' ),
				'description' => esc_html__( 'If defined, this image will be used as the background for this tile. To remove a background image, simply delete the URL from the settings field.', 'et_builder' ),
				'tab_slug'	=> 'general',
				'toggle_slug'	=> 'body',
			),
			'tile_link' => array(
				'label'           => esc_html__( 'Link to URL', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
				'affects' => array('tile_url', 'content'),
				'default' => 'off',
				'tab_slug'	=> 'general',
				'toggle_slug'	=> 'body',
			),
			'tile_url' => array(
				'label' => esc_html__( 'URL', 'et_builder' ),
				'type'=> 'text',
				'option_category' => 'basic_option',
				'description' => esc_html__( 'Define the url for the tile.', 'et_builder' ),
				'show_if' => array('tile_link' => 'on'),
				'tab_slug'	=> 'general',
				'toggle_slug'	=> 'body',
			),
			'content' => array(
				'label' => esc_html__( 'Tile Content', 'et_builder' ),
				'type'=> 'tiny_mce',
				'description' => esc_html__( 'Define the text for the tile content', 'et_builder' ),
				'show_if_not' =>  array('tile_link' => 'on'),
				'tab_slug'	=> 'general',
				'toggle_slug'	=> 'body',
			),
		);

		$design_fields = array();

		$advanced_fields = array(
			'module_id' => array(
			  'label'           => esc_html__( 'CSS ID', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
			'module_class' => array(
			  'label'           => esc_html__( 'CSS Class', 'et_builder' ),
			  'type'            => 'text',
			  'option_category' => 'configuration',
			  'tab_slug'        => 'custom_css',
				'toggle_slug'			=> 'classes',
			  'option_class'    => 'et_pb_custom_css_regular',
			),
		);

		return array_merge( $general_fields, $design_fields, $advanced_fields);

	}
	function render( $unprocessed_props, $content = null, $render_slug ) {
		$module_class         = $this->props['module_class'];
		$module_id            = $this->props['module_id'];
		$title                = $this->props['item_title'];
		$tile_image           = $this->props['item_image'];
		$tile_size           = $this->props['tile_size'];
		$tile_url           = $this->props['tile_url'];
		$tile_link           = $this->props['tile_link'];

		global $titles;
		global $tile_images;
		global $tile_sizes;
		global $tile_links;
		global $tile_urls;

		global $items_count;

		$module_id = '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '';
		$module_class = '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '';
		$class = sprintf(' class="et_pb_ca_fullwidth_service_tiles_item et_pb_module service-tile-panel%1$s"', $module_class);

		$titles[] = $title;
		$tile_images[] = $tile_image;
		$tile_sizes[] = $tile_size;
		$tile_links[] = $tile_link;
		$tile_urls[] = $tile_url;

		$items_count++;

		$output = '';

		if("off" == $tile_link)
			$output = sprintf('<div%1$s data-tile-id="panel-%2$s"><div class="section section-default" style="padding-top: 25px; padding-bottom: 25px;"><div class="container" style="padding-top: 0px;"><div class="card card-block"><button type="button" class="close btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><div class="group" style="padding-left:15px; padding-right: 15px;">%3$s</div></div></div></div></div>', $class, $items_count , 	do_shortcode($content));

		return $output;

	}
}
new ET_Builder_Module_Fullwidth_CA_Service_Tiles_Item;
?>
