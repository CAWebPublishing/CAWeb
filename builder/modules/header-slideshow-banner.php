<?php
/*
Divi Icon Field Names
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
 */

// Fullwidth Version
class ET_Builder_Module_Fullwidth_Header_Banner extends ET_Builder_CAWeb_Module {
    function init() {
      $this->name = esc_html__('FullWidth Header Slideshow Banner', 'et_builder');
      $this->slug = 'et_pb_ca_fullwidth_banner';
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
        'custom_css' => array(
          'toggles' => array(
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
          'default'     => 'Explore',
          'tab_slug'     => 'general',
          'toggle_slug'     => 'scroll_bar',
        ),
        'admin_label' => array(
          'label'       => esc_html__('Admin Label', 'et_builder'),
          'type'        => 'text',
          'description' => esc_html__('This will change the label of the module in the builder for easy identification.', 'et_builder'),
          'tab_slug'     => 'general',
          'toggle_slug' => 'admin_label',
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
        'module_id' => array(
          'label'           => esc_html__('CSS ID', 'et_builder'),
          'type'            => 'text',
          'option_category' => 'configuration',
          'tab_slug'        => 'custom_css',
          'toggle_slug'     => 'classes',
          'option_class'    => 'et_pb_custom_css_regular',
        ),
        'module_class' => array(
          'label'           => esc_html__('CSS Class', 'et_builder'),
          'type'            => 'text',
          'option_category' => 'configuration',
          'tab_slug'        => 'custom_css',
          'toggle_slug'     => 'classes',
          'option_class'    => 'et_pb_custom_css_regular',
          ),
          'disabled_on' => array(
          'label'           => esc_html__('Disable on', 'et_builder'),
          'type'            => 'multiple_checkboxes',
          'options'         => array(
          'phone'   => esc_html__('Phone', 'et_builder'),
          'tablet'  => esc_html__('Tablet', 'et_builder'),
          'desktop' => esc_html__('Desktop', 'et_builder'),
          ),
          'additional_att'  => 'disable_on',
          'option_category' => 'configuration',
          'description'     => esc_html__('This will disable the module on selected devices', 'et_builder'),
          'tab_slug'        => 'custom_css',
          'toggle_slug'     => 'visibility',
          )
          );

          return array_merge($general_fields, $design_fields, $advanced_fields);

    }
    function render( $unprocessed_props, $content = null, $render_slug ) {
      $module_class         = $this->props['module_class'];
      $scroll_bar_text = $this->props['scroll_bar_text'];
      $scroll_bar_icon = $this->props['font_icon'];

      $module_class = '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '';

      $class = sprintf(' class="et_pb_ca_fullwidth_banner et_pb_module header-single-banner%1$s"',  $module_class);

      $output = sprintf('<div id="et_pb_ca_fullwidth_banner"%1$s><div id="primary-carousel" class="carousel carousel-banner">%2$s</div><div class="explore-invite"><div class="text-center"><a href=""><span class="explore-title">%3$s</span>%4$s</a>
        </div></div></div> <!-- .et_pb_ca_banner -->', $class, do_shortcode($content), $scroll_bar_text, caweb_get_icon_span($scroll_bar_icon)
         );

      return $output;
    }

    // This is a non-standard function.
    function slideshow_banner_removal() {
        if ( ! caweb_version_check(4, get_the_ID())) {
            return;
        }

        $module = ( ! is_404() && ! empty(get_post()) ? caweb_get_shortcode_from_content(get_the_content(), 'et_pb_ca_fullwidth_banner') : array());

        if (empty($module)) {
            ?>
					<script>
						document.body.classList.remove('primary');
					</script>
				<?php
        } else {
            ?>
           <script>
				var banner = document.getElementById('et_pb_ca_fullwidth_banner');
				var column = banner.parentNode;

					if(1 == column.childElementCount){
						var row = column.parentNode;
						row.removeChild(column);
						if(0 == row.childElementCount){
							if(1 == row.parentNode.childElementCount ){
								row.parentNode.remove();
							}else{
								row.parentNode.removeChild(row);
							}
						}
					}else{
						detail.removeChild(banner);
					}

			</script>
            <?php
        }
    }
}
new ET_Builder_Module_Fullwidth_Header_Banner;

class ET_Builder_Module_Fullwidth_Banner_Item_Slide extends ET_Builder_CAWeb_Module {
    function init() {
        $this->name = esc_html__('FullWidth Banner Slide', 'et_builder');
        $this->slug = 'et_pb_ca_fullwidth_banner_item';
        $this->type = 'child';
        $this->fullwidth       = true;
        $this->child_title_var = 'heading';
        $this->child_title_fallback_var = 'heading';

        $this->advanced_setting_title_text = esc_html__('New Slide', 'et_builder');
        $this->settings_text = esc_html__('Slide Settings', 'et_builder');
        $this->main_css_element = '%%order_class%%';

        $this->settings_modal_toggles = array(
          'general' => array(
            'toggles' => array(
              'content'  => esc_html__('Content', 'et_builder'),
              'image'    => esc_html__('Image', 'et_builder'),
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
				'display_banner_info' => array(
					'label'           => esc_html__('Banner Information', 'et_builder'),
					'type'            => 'yes_no_button',
					'option_category' => 'configuration',
					'options'         => array(
						'on'  => esc_html__('Yes', 'et_builder'),
						'off' => esc_html__('No', 'et_builder'),
					),
          'affects' => array('heading', 'display_heading', 'button_text', 'button_link'),
					'tab_slug' => 'general',
					'toggle_slug' => 'content',
				),
				'heading' => array(
					'label' => esc_html__('Heading', 'et_builder'),
					'type' => 'text',
					'option_category' => 'basic_option',
					'description'     => esc_html__('Define the title text for your slide.', 'et_builder'),
					'show_if' => array('display_banner_info' => 'on'),
					'tab_slug' => 'general',
					'toggle_slug' => 'content',
				),
				'display_heading' => array(
					'label'           => esc_html__('Display Heading', 'et_builder'),
					'type'            => 'yes_no_button',
					'options'         => array(
						'on'  => esc_html__('Yes', 'et_builder'),
						'off' => esc_html__('No', 'et_builder'),
					),
					'option_category' => 'configuration',
					'description'       => esc_html__('This will toggle the heading on/off in the banner slide', 'et_builder'),
					'show_if' => array('display_banner_info' => 'on'),
					'tab_slug' => 'general',
					'toggle_slug'       => 'content',
					),
				'button_text' => array(
					'label' => esc_html__('Button Text', 'et_builder'),
					'type'=> 'textarea',
					'option_category' => 'basic_option',
					'description' => esc_html__('Define the text for the slide button', 'et_builder'),
					'show_if' => array('display_banner_info' => 'on'),
					'tab_slug' => 'general',
					'toggle_slug'     => 'content',
				),
				'button_link' => array(
					'label' => esc_html__('Button URL', 'et_builder'),
					'type' => 'text',
					'option_category' => 'basic_option',
					'description' => esc_html__('Input a destination URL for the slide button.', 'et_builder'),
					'default' => '#',
					'show_if' => array('display_banner_info' => 'on'),
					'tab_slug' => 'general',
					'toggle_slug'    => 'content',
				),
				'background_image' => array(
					'label' => esc_html__('Background Image', 'et_builder'),
					'type' => 'upload',
					'option_category' => 'basic_option',
					'upload_button_text' => esc_attr__('Upload an image', 'et_builder'),
					'choose_text' => esc_attr__('Choose a Background Image', 'et_builder'),
					'update_text' => esc_attr__('Set As Background', 'et_builder'),
					'description' => esc_html__('If defined, this image will be used as the background for this module. To remove a background image, simply delete the URL from the settings field.', 'et_builder'),
					'tab_slug' => 'general',
					'toggle_slug' => 'image'
				),
			);

			$design_fields = array();

			$advanced_fields = array(
				'module_id' => array(
				  'label'           => esc_html__('CSS ID', 'et_builder'),
				  'type'            => 'text',
				  'option_category' => 'configuration',
				  'tab_slug'        => 'custom_css',
					'toggle_slug'     => 'classes',
				  'option_class'    => 'et_pb_custom_css_regular',
				),
				'module_class' => array(
				  'label'           => esc_html__('CSS Class', 'et_builder'),
				  'type'            => 'text',
				  'option_category' => 'configuration',
				  'tab_slug'        => 'custom_css',
					'toggle_slug'     => 'classes',
				  'option_class'    => 'et_pb_custom_css_regular',
				),
			);

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render( $unprocessed_props, $content = null, $render_slug ) {
        $module_id            = $this->props['module_id'];
        $module_class         = $this->props['module_class'];
        $display_banner_info = $this->props['display_banner_info'];
        $heading = $this->props['heading'];
        $display_heading = $this->props['display_heading'];
        $button_text = $this->props['button_text'];
        $button_link = $this->props['button_link'];
        $background_image = $this->props['background_image'];

        global $et_pb_slider_item_num;

        $et_pb_slider_item_num++;

				$module_id = '' !== $module_id ? sprintf( ' id="%1$s"', esc_attr( $module_id ) ) : '';
				$module_class = '' !== $module_class ? sprintf( ' %1$s', esc_attr( $module_class ) ) : '';

				$class = sprintf(' class="et_pb_ca_fullwidth_banner_item et_pb_module slide%1$s"',  $module_class);

        $button_link = ! empty( $button_link ) ? esc_url( $button_link ) : '';

        $link = ("on" == $display_banner_info ? sprintf('<a href="%1$s" target="_blank"><p class="slide-text"><span class="title" %4$s>%2$s<br /></span>%3$s</p></a>', $button_link, $heading, $button_text, ("off" == $display_heading ? 'style="display:none;"' : ''))	: '');

        $output = sprintf('<div%1$s%2$s style="background-image:url(%3$s);">%4$s</div>', $module_id, $class, $background_image, $link	);

        return $output;
    }
}
new ET_Builder_Module_Fullwidth_Banner_Item_Slide;

?>
