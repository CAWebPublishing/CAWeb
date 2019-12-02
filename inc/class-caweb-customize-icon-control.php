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
			?>
			<label>
				<span class="customize-control-title "><?php print esc_html( $this->label ); ?> <span class="dashicons dashicons-image-rotate resetGoogleIcon"></span></span>
				<ul id="caweb-icon-menu" class="autoUpdate">
				<?php
				$icons = caweb_get_icon_list( -1, '', true );
				foreach ( $icons as $i ) {
					printf( '<li class="icon-option ca-gov-icon-%1$s%2$s" title="%1$s"></li>', $i, $this->value() === $i ? ' selected' : '' );
				}
				?>

					<input id="_customize-input-<?php print $this->id; ?>" type="hidden" name="ca_google_trans_icon" value="<?php print $this->value(); ?>" <?php $this->link(); ?>>
				</ul>
			</label>
			<?php
		}
	}
}

