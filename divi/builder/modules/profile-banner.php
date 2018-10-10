<?php
/*
Divi Icon Field Names
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
 */

class ET_Builder_Module_Profile_Banner extends ET_Builder_CAWeb_Module {
    function init() {
        $this->name = esc_html__('Profile Banner', 'et_builder');
        $this->slug = 'et_pb_profile_banner';

        $this->main_css_element = '%%order_class%%.et_pb_profile_banner';

        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                    'style'  => esc_html__('Style', 'et_builder'),
                    'header' => esc_html__('Header', 'et_builder'),
                    'body'   => esc_html__('Body', 'et_builder'),
                ),
            ),
            'advanced' => array(
                'toggles' => array(
                    'body'   => esc_html__('Body', 'et_builder'),
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
    }
    function get_fields() {
        $general_fields = array(
            'name' => array(
                'label'           => esc_html__('Profile Name', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Input the name of the profile.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'header',
            ),
            'job_title' => array(
                'label'           => esc_html__('Job Title', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Input the job title.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'header',
            ),
            'profile_link' => array(
                'label'           => esc_html__('Profile Link', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Input the text for the profile link.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'url' => array(
                'label'           => esc_html__('Profile URL', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'default' => '#',
                'description'     => esc_html__('Input the website of the profile.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'portrait_url' => array(
                'label'              => esc_html__('Portrait Image URL', 'et_builder'),
                'type'               => 'upload',
                'option_category'    => 'basic_option',
                'upload_button_text' => esc_attr__('Upload an image', 'et_builder'),
                'choose_text'        => esc_attr__('Choose an Image', 'et_builder'),
                'update_text'        => esc_attr__('Set As Image', 'et_builder'),
                'description'        => esc_html__('Upload your desired image, or type in the URL to the image you would like to display.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
						'portrait_alt' => array(
                'label'           => esc_html__('Portrait Image Alt Text', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'basic_option',
                'description'     => esc_html__('Input the alt text for the portrait image.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'			=> 'body',
            ),
            'admin_label' => array(
                'label'       => esc_html__('Admin Label', 'et_builder'),
                'type'        => 'text',
                'description' => esc_html__('This will change the label of the module in the builder for easy identification.', 'et_builder'),
                'tab_slug' => 'general',
                'toggle_slug'	=> 'admin_label',
            ),
        );
        $design_fields = array(
            'round_image' => array(
                'label'              => esc_html__('Round Image', 'et_builder'),
                'type'               => 'yes_no_button',
                'option_category'    => 'configuration',
                'options'        => array(
                    'off' => esc_html__('No', 'et_builder'),
                    'on'  => esc_html__('Yes', 'et_builder'),
                ),
                'description' => esc_html__('Switch to yes if you want round images in the profile banner.'),
                'tab_slug'			=> 'advanced',
                'toggle_slug'			=> 'body',
            ),
        );
        $advanced_fields = array(
            'module_class' => array(
                'label'           => esc_html__('CSS Class', 'et_builder'),
                'type'            => 'text',
                'option_category' => 'configuration',
                'tab_slug'        => 'custom_css',
                'toggle_slug'			=> 'classes',
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
            ),
        );

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render($unprocessed_props, $content = null, $render_slug) {
        $name                 = $this->props['name'];
        $job_title              = $this->props['job_title'];
        $profile_link              = $this->props['profile_link'];
				$portrait_url           = $this->props['portrait_url'];
        $portrait_alt           = $this->props['portrait_alt'];
        $round                = $this->props['round_image'];
        $url                    = $this->props['url'];

        $class = sprintf(' class="%1$s" ', $this->module_classname($render_slug));

        $url = ! empty($url) ? esc_url($url) : '';
				
				if( empty($portrait_alt) && ! empty($portrait_url) ){
					$portrait_id = attachment_url_to_postid( $portrait_url );
					$portrait_alt = get_post_meta($portrait_id, '_wp_attachment_image_alt', true);
					//$portrait_alt = ! empty($portrait_alt) ? $portrait_alt : $name;
				}
				
        $image = ('on' !== $round ?
						sprintf('<img src="%1$s" style="width: 90px; min-height: 90px;float: right;" alt="%2$s"/>', $portrait_url, $portrait_alt) :
						sprintf('<div class="profile-banner-img-wrapper">
							<img src="%1$s" style="width: 90px; min-height: 90px;float: right;" alt="%2$s"/>
						</div>', $portrait_url, $portrait_alt)
				  );

        $output = sprintf('<div id="profile-banner-wrapper" %1$s><a href="%2$s"><div class="profile-banner%3$s">%4$s<div class="banner-subtitle">%5$s</div><div class="banner-title">%6$s</div><div class="banner-link"><p>%7$s</p></div></div></a></div>', $class, $url, 'on' !== $round ? '' : ' round-image', $image, $job_title, $name, $profile_link);

        return $output;
    }
}
new ET_Builder_Module_Profile_Banner;

?>
