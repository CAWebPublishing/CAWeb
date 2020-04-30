<?php
/**
 * CAWeb Customizer Icon Control
 *
 * @link https://developer.wordpress.org/reference/classes/WP_Customize_Control/
 * @package CAWeb
 */

if ( class_exists( 'WP_Customize_Control' ) ) {
	/**
	 * CAWeb_Customize_Icon_Control
	 */
	class CAWeb_Customize_Icon_Control extends WP_Customize_Control {

		/**
		 * Label for the Icon Menu
		 *
		 * @var $label Icon Menu Label Text.
		 */
		public $label = 'Icon';

		/**
		 * Render the CAWeb Icon Menu.
		 *
		 * @link https://developer.wordpress.org/reference/classes/wp_customize_control/render_content/
		 * @return void
		 */
		public function render_content() {
			print wp_kses(
				caweb_icon_menu(
					array(
						'select' => $this->value(),
						'name'   => 'ca_google_trans_icon',
						'header' => 'Icon',
					)
				),
				caweb_allowed_html( array(), true )
			);
		}
	}
}

