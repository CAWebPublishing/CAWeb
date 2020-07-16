<?php
/**
 * CAWeb Customizer Alert Banner Control
 *
 * @link https://developer.wordpress.org/reference/classes/WP_Customize_Control/
 * @package CAWeb
 */

if ( class_exists( 'WP_Customize_Control' ) ) {
	/**
	 * CAWeb_Customize_Alert_Banner_Control
	 */
	class CAWeb_Customize_Alert_Banner_Control extends WP_Customize_Control {
		public $is_expanded = false;
		public $header = 'Label';
		public $message = ''; 
		public $display_on = 'home';
		public $banner_color = '#FFFFFF';
		public $read_more = true;
		public $read_more_text = '';
		public $read_more_url = '';
		public $read_more_target = true;
		public $icon = 'important';
		public $active = null; 
		public $alert_id = -1;
		
		/**
		 * __construct
		 *
		 * @param  WP_Customize_Manager $manager
		 * @param  string $id
		 * @param  array $args
		 * @return void
		 */
		function __construct( $manager, $id, $args = array() ){
			parent::__construct( $manager, $id, $args );

			$this->alert_id = str_replace( 'caweb_alert_banner_', '', $this->id);
		}
		
		/**
		 * Render an Alert Banner.
		 *
		 * @link https://developer.wordpress.org/reference/classes/wp_customize_control/render_content/
		 * @return void
		 */
		public function render_content() {
			$collapse = $this->is_expanded ? '' : ' show';
			$collapse_icon = $this->is_expanded ? ' dashicons-arrow-right' : '';

			$main_input = sprintf( '<input type="hidden" name="%1$s" id="%1$s"/>', $this->id );
			$add_alert = sprintf('<a data-target="caweb-toggle-alert-%1$s" class="text-decoration-none text-reset caweb-toggle-alert">%2$s <span class="text-secondary align-baseline dashicons dashicons-arrow-down%3$s"></span></a>', $this->alert_id, $this->header, $collapse_icon );
			$alert_status = sprintf('<input type="checkbox" name="alert-status-%1$s"%2$s%3$s>', 
				$this->alert_id,
				null !== $this->active ? ' data-toggle="toggle" data-onstyle="success" data-size="sm"' : '', 
				null === $this->active || in_array( $this->active, array('on', 'active'), true ) ? ' checked="checked"' : ''
			);
			$remove_button = '<button class="caweb-remove-alert btn btn-danger btn-sm">Remove</button>';
			$main_options = "$main_input$add_alert$alert_status$remove_button";

			$main_div = sprintf( '<div id="caweb-toggle-alert-%1$s" class="collapse%2$s">%3$s%4$s%5$s%6$s%7$s%8$s</div>', 
				$this->alert_id,
				$collapse,
				$this->render_alert_banner_header(),
				$this->render_alert_banner_message(),
				$this->render_alert_banner_display_on(),
				$this->render_alert_banner_color(),
				$this->render_alert_banner_read_more(),
				$this->render_alert_banner_icon()
			);

			printf( '%1$s%2$s', $main_options, $main_div );
		}

		private function render_alert_banner_header(){
			$value = ! empty( $this->header ) ? sprintf(' value="%1$s"', $this->header ) : '';
			return sprintf('<div id="customize-control-alert-header-%1$s"><label for="alert-header-%1$s" class="customize-control-title">Title</label><input type="text" placeholder="Label" id="alert-header-%1$s" name="alert-header-%1$s"%2$s/></div>', $this->alert_id, $value );
		}

		private function render_alert_banner_message(){
			return sprintf('<div><label for="alert-message-%1$s" class="customize-control-title">Message</label><textarea id="alert-message-%1$s" name="alert-message-%1$s" class="w-100">%2$s</textarea></div>', $this->alert_id, $this->message );
		}

		private function render_alert_banner_display_on(){
			$home_page = sprintf( '<input id="alert-display-home-%1$s" name="alert-display-%1$s" type="radio" value="home"%2$s/><label for="">Home Page Only</label>', $this->alert_id, 'home' === $this->display_on ? ' checked="checked"' : '' );
			$all_pages = sprintf( '<input id="alert-display-all-%1$s" name="alert-display-%1$s" type="radio" value="all"%2$s/><label for="">All Pages</label>', $this->alert_id, 'all' === $this->display_on ? ' checked="checked"' : '' );

			return sprintf('<div role="radiogroup"><span class="customize-control-title">Display On</span>%1$s%2$s</div>', $home_page, $all_pages );
		}

		private function render_alert_banner_color(){
			return sprintf('<div><label for="alert-banner-color-%1$s" class="customize-control-title">Banner Color</label><input class="w-25" type="color" id="alert-banner-color-%1$s" name="alert-banner-color-%1$s" value="%2$s"/></div>', $this->alert_id, $this->banner_color );
		}

		private function render_alert_banner_read_more(){
			$read_more = sprintf( '<div><a href="#alert-read-more-options-%1$s" data-toggle="collapse"><input id="alert-read-more-%1$s" name="alert-read-more-%1$s" type="checkbox"%2$s/></a><label class="d-inline customize-control-title" for="alert-read-more-%1$s">Read More Button</label></div>', $this->alert_id, $this->read_more ? ' checked="checked"' : '' );
			$read_more_text = sprintf('<div><label for="alert-read-more-text-%1$s" class="customize-control-title">Read More Button Text</label><input type="text" id="alert-read-more-text-%1$s" name="alert-read-more-text-%1$s" value="%2$s" /></div>', $this->alert_id, $this->read_more_text );
			$read_more_url = sprintf('<div><label for="alert-read-more-url-%1$s" class="customize-control-title">Read More Button URL</label><input type="text" id="alert-read-more-url-%1$s" name="alert-read-more-url-%1$s" value="%2$s" /></div>', $this->alert_id, $this->read_more_url );
			$open_in_new_tab = sprintf('<div><input type="checkbox" id="alert-read-more-target-%1$s" name="alert-read-more-target-%1$s"%2$s/><label for="alert-read-more-target-%1$s" class="d-inline customize-control-title">Open Link in New Tab</label></div>', $this->alert_id, $this->read_more_target ? ' checked="checked"' : '' );

			return sprintf( '%1$s<div id="alert-read-more-options-%2$s" class="collapse%3$s">%4$s%5$s%6$s</div>', 
				$read_more, 
				$this->alert_id,
				$this->read_more ? ' show' : '' , 
				$read_more_text, 
				$read_more_url, 
				$open_in_new_tab 
			);
		}

		private function render_alert_banner_icon(){
			return caweb_icon_menu(
				array(
					'select'       => $this->icon,
					'name'         => 'alert-icon-' . $this->alert_id,
					'header'       => 'Icon',
					'header_class' => array( 'customize-control-title', 'd-inline' ),
				)
			);
		}
	}
}

