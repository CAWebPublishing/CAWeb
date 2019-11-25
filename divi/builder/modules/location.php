<?php
/*
Divi Icon Field Names
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
 */

if( ! class_exists('ET_Builder_CAWeb_Module') ){
    require_once( dirname(__DIR__) . '/class-caweb-builder-element.php');
}

class CAWeb_Module_Location extends ET_Builder_CAWeb_Module {
    public $slug       = 'et_pb_ca_location_widget';
    public $vb_support = 'on';
    
    function init() {
        $this->name = esc_html__('Location', 'divi-state-child-modules');
        $this->main_css_element = '%%order_class%%';
        
        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                    'style'  => esc_html__('Style', 'divi-state-child-modules'),
                    'header' => esc_html__('Header', 'divi-state-child-modules'),
                    'body'   => esc_html__('Body', 'divi-state-child-modules'),
                ),
            ),
            'advanced' => array(
                'toggles' => array(
                    'style'  => esc_html__('Style', 'divi-state-child-modules'),
                    'text' => array(
                        'title'    => esc_html__('Text', 'divi-state-child-modules'),
                        'priority' => 49,
                    ),
                ),
            ),
        );
    }
    function get_fields() {
        $general_fields = array(
            'location_layout' => array(
                'label'             => esc_html__('Style', 'divi-state-child-modules'),
                'type'              => 'select',
                'option_category'   => 'configuration',
                'options'           => array(
                    'contact' => esc_html__('Contact', 'divi-state-child-modules'),
                    'mini' => esc_html__('Mini', 'divi-state-child-modules'),
                    'banner'  => esc_html__('Banner', 'divi-state-child-modules'),
                ),
                'description'       => esc_html__('Here you can choose the style in which to display the location', 'divi-state-child-modules'),
                'tab_slug' => 'general',
                'toggle_slug' => 'style',
            ),
            'featured_image' => array(
                'label' => esc_html__('Set Featured Image', 'divi-state-child-modules'),
                'type' => 'upload',
                'option_category' => 'basic_option',
                'upload_button_text' => esc_attr__('Upload an image', 'divi-state-child-modules'),
                'choose_text' => esc_attr__('Choose a Background Image', 'divi-state-child-modules'),
                'update_text' => esc_attr__('Set As Background', 'divi-state-child-modules'),
                'description' => esc_html__('If defined, this image will be used as the background for this location. To remove a background image, simply delete the URL from the settings field.', 'divi-state-child-modules'),
                'show_if' => array('location_layout' => 'banner'),
                'tab_slug' => 'general',
                'toggle_slug' => 'style',
            ),
            'name' => array(
                'label'           => esc_html__('Location Name', 'divi-state-child-modules'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Here you can enter a name for the location.', 'divi-state-child-modules'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'desc' => array(
                'label'           => esc_html__('Location Description', 'divi-state-child-modules'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Here you can enter a description of the location.', 'divi-state-child-modules'),
                'show_if' => array('location_layout' => 'banner'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'addr' => array(
                'label'           => esc_html__('Address', 'divi-state-child-modules'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Enter an address.', 'divi-state-child-modules'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'city' => array(
                'label'           => esc_html__('City', 'divi-state-child-modules'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Enter a city.', 'divi-state-child-modules'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'state' => array(
                'label'           => esc_html__('State', 'divi-state-child-modules'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Enter a state.', 'divi-state-child-modules'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'zip' => array(
                'label'           => esc_html__('Zip', 'divi-state-child-modules'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Enter an zip.', 'divi-state-child-modules'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'show_contact' => array(
                'label'           => esc_html__('Contact information', 'divi-state-child-modules'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'divi-state-child-modules'),
                    'on'  => esc_html__('Yes', 'divi-state-child-modules'),
                ),
                'show_if' => array('location_layout' => 'contact'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'phone' => array(
                'label'           => esc_html__('Phone Number', 'divi-state-child-modules'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Enter a phone number.', 'divi-state-child-modules'),
                'show_if' => array('show_contact' => 'on'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'fax' => array(
                'label'           => esc_html__('Fax Number', 'divi-state-child-modules'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Enter a fax number.', 'divi-state-child-modules'),
                'show_if' => array('show_contact' => 'on'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'show_button' => array(
                'label'           => esc_html__('Button', 'divi-state-child-modules'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'divi-state-child-modules'),
                    'on'  => esc_html__('Yes', 'divi-state-child-modules'),
                ),
                'show_if_not' => array('location_layout' => 'mini'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'location_link' => array(
                'label'           => esc_html__('Location URL', 'divi-state-child-modules'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Here you can enter the URL for the location.', 'divi-state-child-modules'),
                'show_if' => array('show_button' => 'on'),
                'tab_slug' => 'general',
                'toggle_slug' 		=> 'body',
            ),
            'admin_label' => array(
                'label'       => esc_html__('Admin Label', 'divi-state-child-modules'),
                'type'        => 'text',
                'description' => esc_html__('This will change the label of the module in the builder for easy identification.', 'divi-state-child-modules'),
                'tab_slug' => 'general',
                'toggle_slug'	=> 'admin_label',
            ),
        );

        $design_fields = array(
            'show_icon' => array(
                'label'           => esc_html__('Use Icon', 'divi-state-child-modules'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'divi-state-child-modules'),
                    'on'  => esc_html__('Yes', 'divi-state-child-modules'),
                ),
                'show_if_not' => array('location_layout' => 'banner'),
                'tab_slug'		=> 'advanced',
                'toggle_slug' 		=> 'style',
            ),
            'font_icon' => array(
                'label'           => esc_html__('Icon', 'divi-state-child-modules'),
                'type'            => 'text',
                'option_category'     => 'configuration',
                'class'               => array('et-pb-font-icon'),
                'renderer'            => 'select_icon',
                'renderer_with_field' => true,
                'default' => '%-1%',
                'description'     => esc_html__('Select an icon.', 'divi-state-child-modules'),
                'show_if' => array('show_icon' => 'on'),
                'tab_slug'		=> 'advanced',
                'toggle_slug' 		=> 'style',
            ),
        );

		$advanced_fields = array();

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render($unprocessed_props, $content = null, $render_slug) {
        $location_layout = $this->props['location_layout'];
        
        $this->add_classname('location');
        $this->add_classname($location_layout);
        
        if ("contact" == 	$location_layout) {
            $output = $this->contactLocation();
        } elseif ("mini" == 	$location_layout) {
            $output = $this->miniLocation();
        } else {
            $output = $this->bannerLocation();
        }

        return $output;
    }

    function contactLocation(){
        $show_contact = $this->props['show_contact'];
        $phone = $this->props['phone'];
        $fax = $this->props['fax'];
        $show_button = $this->props['show_button'];
        $location_link = $this->props['location_link'];
        $name = $this->props['name'];
        $addr = $this->props['addr'];
        $city = $this->props['city'];
        $state = $this->props['state'];
        $zip = $this->props['zip'];
        $show_icon = $this->props['show_icon'];
        $icon = $this->props['font_icon'];
        
        $display_other = '';
        $display_button = '';
        $display_icon = '';
        $map_link = $this->caweb_get_google_map_place_link(array($addr, $city, $state, $zip));
        
        if ( "on" == $show_contact ){
            $phone = ! empty( $phone ) ? "General Information: {$phone}<br />" : '';
            $fax = ! empty( $fax ) ? "FAX: {$fax}" : '';
            $display_other = sprintf('<p class="other">%1$s%2$s</p>', $phone, $fax );
        }
        
        if ( "on" == $show_button && ! empty($location_link) ){
            $display_button = sprintf('<a href="%1$s" class="btn" target="_blank">More</a>', $location_link);
        } 

        if ( ! empty($name) ){
            $map_link = "$name<br />$map_link";
        }

        if ("on" == $show_icon ){
			$icon = $this->process_icon( $icon );
			$display_icon = "<span class=\"$icon\"></span>"; 
        }

        return sprintf('<div%1$s class="%2$s">%3$s<div class="contact"><p class="address">%4$s</p>%5$s%6$s</div></div>', 
        $this->module_id(), $this->module_classname($this->slug), $display_icon, $map_link, $display_other, $display_button);
    }

    function miniLocation(){
        $name = $this->props['name'];
        $location_link = $this->props['location_link'];
        $addr = $this->props['addr'];
        $city = $this->props['city'];
        $state = $this->props['state'];
        $zip = $this->props['zip'];
        $show_icon = $this->props['show_icon'];
        $icon = $this->props['font_icon'];
        
        $map_link = $this->caweb_get_google_map_place_link(array($addr, $city, $state, $zip));
        $location_link = ! empty($location_link) ? esc_url($location_link) : '';
        $display_icon = '';
        $contactClass = '';

        if ("on" == $show_icon ){
			$icon = $this->process_icon( $icon );
			$display_icon = "<span class=\"$icon\"></span>"; 
        }else{
            $contactClass = ' ml-0';
        }

        if( ! empty($map_link) ){
            $map_link = sprintf('<div class="address">%1$s</div>', $map_link);
        }
        
        return sprintf('<div%1$s class="%2$s">%3$s<div class="contact%4$s"><div class="title"><a href="%5$s" target="_blank">%6$s</a></div>%7$s</div></div>',
        $this->module_id(),	$this->module_classname($this->slug), $display_icon, $contactClass, $location_link, $name, $map_link);
    }

    function bannerLocation(){
        $name = $this->props['name'];
        $show_button = $this->props['show_button'];
        $location_link = $this->props['location_link'];
        $featured_image = $this->props['featured_image'];
        $desc = $this->props['desc'];
        $addr = $this->props['addr'];
        $city = $this->props['city'];
        $state = $this->props['state'];
        $zip = $this->props['zip'];
        
        $display_button = '';
        $map_link = $this->caweb_get_google_map_place_link(array($addr, $city, $state, $zip), false, '_blank', array('m-l-md', 'd-inline-block'));

        if ("on" == $show_button && ! empty($location_link) ){
            $display_button = sprintf('<a href="%1$s" class="btn" target="_blank">View More Details</a>', $location_link);
        } 

        if( ! empty( $featured_image ) ){
            $alt_text = caweb_get_attachment_post_meta($featured_image, '_wp_attachment_image_alt');
            $featured_image = sprintf('<img src="%1$s" alt="%2$s" class="w-100"/>', $featured_image, ! empty($alt_text) ? $alt_text : ' ' );
        }

        if ( ! empty($desc) ){
            $desc = sprintf('<div class="title">Description</div><div class="description pb-2">%1$s</div>', $desc);
        }

        if( ! empty($map_link) ){
            $map_link = sprintf(' <span class="ca-gov-icon-road-pin"></span>%1$s', $map_link);
        }
        
        return sprintf('<div%1$s class="%2$s"><div class="thumbnail">%3$s</div><div class="contact"><div class="title">%4$s</div><div class="address">%5$s</div></div><div class="summary">%6$s%7$s</div></div>',
         $this->module_id(), $this->module_classname($this->slug), $featured_image, $name , $map_link, $desc, $display_button);
    }
}
new CAWeb_Module_Location;

?>
