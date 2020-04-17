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
class CAWeb_Module_Fullwidth_Header_Slideshow_Banner extends ET_Builder_CAWeb_Module {
    public $slug = 'et_pb_ca_fullwidth_banner';
    public $vb_support = 'on';

    function init() {
        $this->name = esc_html__('FullWidth Header Slideshow Banner', 'et_builder');
        $this->fullwidth       = true;

        $this->child_slug      = 'et_pb_ca_fullwidth_banner_item';
        $this->child_item_text = esc_html__('Slide', 'et_builder');

        $this->main_css_element = '%%order_class%%.et_pb_slider';

        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                    'scroll_bar'  => esc_html__('Scroll Bar', 'et_builder'),
                ),
            ),
            'advanced' => array(
                'toggles' => array(
                    'scroll_bar'  => esc_html__('Scroll Bar', 'et_builder'),
                    'text' => array(
                        'title'    => esc_html__('Text', 'et_builder'),
                        'priority' => 49,
                    ),
                ),
            ),
        );

        // Custom handler: Output JS for editor preview in page footer.
        add_action('wp_footer', array($this, 'slideshow_banner_removal'));
    }
    function get_fields() {
        $general_fields = array(
            'scroll_bar_text' => array(
                'label'           => esc_html__('Scroll Bar Text', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Here you can enter the text for the scroll bar.', 'et_builder'),
                'tab_slug'     => 'general',
                'toggle_slug'     => 'scroll_bar',
            ),
        );

        $design_fields = array(
            'font_icon' => array(
                'label'           => esc_html__('Scroll Bar Icon', 'et_builder'),
                'type'            => 'text',
                'option_category'     => 'configuration',
                'class'               => array('et-pb-font-icon'),
                'default'               => '%%114%%',
                'renderer'            => 'select_icon',
                'renderer_with_field' => true,
                'description'     => esc_html__('Here you can select a Heading Icon', 'et_builder'),
                'tab_slug'     => 'advanced',
                'toggle_slug'     => 'scroll_bar',
            ),
        );

        $advanced_fields = array(
        );

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render($unprocessed_props, $content = null, $render_slug) {
        $scroll_bar_text = $this->props['scroll_bar_text'];
        $scroll_bar_icon = $this->props['font_icon'];

        $this->add_classname('header-slideshow-banner');
				
		global $et_pb_fullwidth_header_slider_item_num;

		$solo = 1 >= $et_pb_fullwidth_header_slider_item_num ? ' solo' : '';
                
        $this->add_classname($solo);
        $this->add_classname( empty($scroll_bar_text) ? ' no-explore' : '' );
        
        $class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

        $scroll_bar_icon = $this->caweb_get_icon_span($scroll_bar_icon);

		$scrollbar = ! empty($scroll_bar_text) ? 
            sprintf('<div class="explore-invite"><div class="text-center"><a href=""><span class="explore-title">%1$s</span>%2$s</a></div></div>', $scroll_bar_text, $scroll_bar_icon) : '';
				
        $content = $this->content;

        $output = sprintf('<div id="et_pb_ca_fullwidth_banner"%1$s><div id="primary-carousel" class="carousel carousel-banner owl-carousel">%2$s</div>%3$s</div><!-- .et_pb_ca_banner -->', $class, $content, $scrollbar);

        return $output;
    }

    // This is a non-standard function.
    function slideshow_banner_removal() {
        global $post;
        $con = is_object($post) ? $post->post_content : $post['post_content'];
        $version = caweb_get_page_version(get_the_ID());
        $module = ! is_404() && ! empty($con) ? caweb_get_shortcode_from_content($con, 'et_pb_ca_fullwidth_banner') : array();

        if( isset($_GET['et_fb']) && '1' == $_GET['et_fb'] ){
            return;
        }

        if (empty($module)) : 
        ?>
			<script>
				document.body.classList.remove('primary');
            </script>
		<?php else : ?>
			<script>
                (function( $ ) {
		    		 "use strict";
							 
					 var section = $('#et_pb_ca_fullwidth_banner').parent();
					 var banner = section.find('#et_pb_ca_fullwidth_banner');
							 
					 $(document).ready(function () {
                         
						<?php if (4 == $version) : ?>
			    			$('#header').append(banner);
						<?php else : ?>
						    $('#header').after(banner);
						<?php endif; ?>
                                
                        if( ! section.children().length )
                            $(section).remove();
                            
                        $(banner).find('.explore-invite').css('zIndex', 5);

						// calculate top of screen on next repaint
						window.setTimeout(function () {
							 var MAXHEIGHT = <?php print 4 == $version ? 450 : 1080 ?>;
							 var headerTop = banner.offset().top;
							 var windowHeight = $(window).height();
							 var height = windowHeight - headerTop;
							 height = (height > MAXHEIGHT) ? MAXHEIGHT : height;
                                     
                             // fill up the remaining height of this device
							 $(banner).css({'height': height });
						}, 250)
					});

				})(jQuery);				
			</script>
        <?php 
        endif;
    }
}
new CAWeb_Module_Fullwidth_Header_Slideshow_Banner;

?>
