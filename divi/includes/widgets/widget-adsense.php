<?php class AdsenseWidget extends WP_Widget
{
	function __construct(){
		$widget_ops = array( 'description' => esc_html__( 'Displays Adsense Ads', 'Divi' ) );
		$control_ops = array( 'width' => 400, 'height' => 500 );
		parent::__construct( false, $name = esc_html__( 'ET Adsense Widget', 'Divi' ), $widget_ops, $control_ops );
	}

	/* Displays the Widget in the front-end */
	function widget( $args, $instance ){
		extract($args);
		$title = apply_filters( 'widget_title', empty( $instance['title'] ) ? esc_html__( 'Adsense', 'Divi' ) : esc_html( $instance['title'] ) );
		$adsenseCode = empty( $instance['adsenseCode'] ) ? '' : $instance['adsenseCode'];

		echo et_core_intentionally_unescaped( $before_widget, 'html' );

		if ( $title ) {
			echo et_core_intentionally_unescaped( $before_title . $title . $after_title, 'html' );
		}
		?>
		<div style="overflow: hidden;">
			<?php echo et_core_intentionally_unescaped( $adsenseCode, 'html' ); ?>
			<div class="clearfix"></div>
		</div> <!-- end adsense -->
	<?php
		echo et_core_intentionally_unescaped( $after_widget, 'html' );
	}

	/*Saves the settings. */
	function update( $new_instance, $old_instance ){
		$instance = $old_instance;
		$instance['title'] = sanitize_text_field( $new_instance['title'] );
		$instance['adsenseCode'] = current_user_can('unfiltered_html') ? $new_instance['adsenseCode'] : stripslashes( wp_filter_post_kses( addslashes($new_instance['adsenseCode']) ) );

		return $instance;
	}

	/*Creates the form for the widget in the back-end. */
	function form( $instance ){
		//Defaults
		$instance = wp_parse_args( (array) $instance, array( 'title' => esc_html__( 'Adsense', 'Divi' ), 'adsenseCode'=>'' ) );

		$title = $instance['title'];
		$adsenseCode = $instance['adsenseCode'];

		# Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('title') ) . '">' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('title') ) . '" name="' . esc_attr( $this->get_field_name('title') ) . '" type="text" value="' . esc_attr( $title ) . '" /></p>';
		# Adsense Code
		echo '<p><label for="' . esc_attr( $this->get_field_id('adsenseCode') ) . '">' . esc_html__( 'Adsense Code', 'Divi' ) . ':' . '</label><textarea cols="20" rows="12" class="widefat" id="' . esc_attr( $this->get_field_id('adsenseCode') ) . '" name="' . esc_attr( $this->get_field_name('adsenseCode') ) . '" >' . esc_textarea( $adsenseCode ) . '</textarea></p>';
	}

}// end AdsenseWidget class

function AdsenseWidgetInit() {
	register_widget('AdsenseWidget');
}

add_action('widgets_init', 'AdsenseWidgetInit');