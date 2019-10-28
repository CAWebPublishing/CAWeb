<?php
/*
Divi Icon Field Names
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
 */

if( ! class_exists('ET_Builder_CAWeb_Module') ){
    require_once( dirname(__DIR__) . '/class-caweb-builder-element.php');
}

// Fullwidth Version
class CAWeb_Module_Fullwidth_Service_Tiles extends ET_Builder_CAWeb_Module {
    public $slug = 'et_pb_ca_fullwidth_service_tiles';
    public $vb_support = 'on';

    function init() {
        $this->name = esc_html__('FullWidth Service Tiles', 'et_builder');
        $this->fullwidth = true;

        $this->child_slug      = 'et_pb_ca_fullwidth_service_tiles_item';
        $this->child_item_text = esc_html__('Tile', 'et_builder');

        $this->main_css_element = '%%order_class%%';

        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                    'body'   => esc_html__('Body', 'et_builder'),
                ),
            ),
            'advanced' => array(
                'toggles' => array(
                    'text' => array(
                        'title'    => esc_html__('Text', 'et_builder'),
                        'priority' => 49,
                    ),
                ),
            ),
        );
    }
    function before_render() {
        global $tile_count, $tiles;

        $tiles = array();
        $titles = array();
        $tile_images = array();
        $tile_sizes= array();
        $tile_links= array();
        $tile_urls= array();

        $tile_count = 0;
    }
    function get_fields() {
        $general_fields = array(
            'view_more_on_off' => array(
                'label'           => esc_html__('View More', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'tab_slug'			=> 'general',
                'toggle_slug'			=> 'body',
            ),
            'view_more_url' => array(
                'label'             => esc_html__('Link Url', 'et_builder'),
                'type'              => 'text',
                'show_if'   => array('view_more_on_off' => 'on'),
                'tab_slug'			=> 'general',
                'toggle_slug'				=> 'body',
            ),
            'view_more_text' => array(
                'label'             => esc_html__('Link Text', 'et_builder'),
                'type'              => 'text',
                'show_if'   => array('view_more_on_off' => 'on'),
                'tab_slug'			=> 'general',
                'toggle_slug'				=> 'body',
            ),
        );

        $design_fields = array();

        $advanced_fields = array(
        );

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render($unprocessed_props, $content = null, $render_slug) {
        $view_more_on_off     = $this->props['view_more_on_off'];
        $view_more_text       = $this->props['view_more_text'];
        $view_more_url        = $this->props['view_more_url'];

        $this->add_classname('section-understated');
        $this->add_classname('collapsed');
        $class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

        global $tile_count, $tiles;

        $view_more = "on" == $view_more_on_off ? sprintf('<div class="more-button"><div class="more-content"></div><a href="%1$s" class="btn-more inverse" target="_blanK"><span class="ca-gov-icon-plus-fill" aria-hidden="true"></span><span class="more-title">%2$s</span></a></div>', esc_url($view_more_url), $view_more_text) : '';

        $output = '';

        for ($i = 0; $i < $tile_count; $i++) {
            $title = sprintf( '<div class="teaser"><h4 class="title">%1$s</h4></div>', $tiles[$i]['item_title']);
            $tile_size = $tiles[$i]['tile_size'];
            $item_image = $tiles[$i]['item_image'];

            
            if ("on" == $tiles[$i]['tile_link']) {
                if( ! empty( $item_image ) ){
                    $alt_text = caweb_get_attachment_post_meta($item_image, '_wp_attachment_image_alt');
                    $item_image = sprintf('<img src="%1$s" alt="%2$s" class="w-100" style="background-size: cover;height: 320px;" />', $item_image, ! empty($alt_text) ? $alt_text : ' ' );
                }

                $output .= sprintf('<div tabindex="0" class="service-tile service-tile-empty %1$s" data-url="%2$s" data-link-target="new" >%3$s%4$s</div>', $tile_size, $tiles[$i]['tile_url'], $item_image, $title);
            } else {
                $output .= sprintf('<div tabindex="0" class="service-tile %2$s" data-tile-id="panel-%1$s" style="background-image:url(%3$s); background-size: cover;">%4$s</div>', $i + 1, $tile_size, $item_image, $title);
            }
        }
        for ($i = 0; $i < $tile_count; $i++) {
            if ("off" == $tiles[$i]['tile_link']) {
                $output .= sprintf('<div %1$s data-tile-id="panel-%2$s"><div class="section section-default px-3"><div class="container pt-0"><div class="card card-block"><button type="button" class="close btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><div class="group px-3">%3$s</div></div></div></div></div>', 
                $tiles[$i]['module_class'], $i + 1, $tiles[$i]['content']);
            }
        }

        $output .= $this->content;

        $output = sprintf('<div%1$s%2$s><div class="service-group clearfix">%3$s</div>%4$s</div>', $this->module_id(), $class, $output, $view_more);

        return $output;
    }
    
}
new CAWeb_Module_Fullwidth_Service_Tiles;

?>
