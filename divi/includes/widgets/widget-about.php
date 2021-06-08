<?php class AboutMeWidget extends WP_Widget
{
	function __construct(){
		$widget_ops = array( 'description' => esc_html__( 'Displays About Me Information', 'Divi' ) );
		$control_ops = array( 'width' => 400, 'height' => 300 );
		parent::__construct( false, $name = esc_html__( 'ET About Me Widget', 'Divi' ), $widget_ops, $control_ops );
	}

	/* Displays the Widget in the front-end */
	function widget( $args, $instance ){
		extract($args);
		$title = apply_filters( 'widget_title', empty( $instance['title'] ) ? esc_html__( 'About Me', 'Divi' ) : esc_html( $instance['title'] ) );
		$imagePath = empty( $instance['imagePath'] ) ? '' : esc_url( $instance['imagePath'] );
		$aboutText = empty( $instance['aboutText'] ) ? '' : $instance['aboutText'];

		echo et_core_intentionally_unescaped( $before_widget, 'html' );

		if ( $title )
			echo et_core_intentionally_unescaped( $before_title . $title . $after_title, 'html' ); ?>
		<div class="clearfix">
			<img src="<?php echo et_core_esc_previously( et_new_thumb_resize( et_multisite_thumbnail( $imagePath ), 74, 74, '', true ) ); ?>" id="about-image" alt="" />
			<?php echo wp_kses_post( $aboutText )?>
		</div> <!-- end about me section -->
	<?php
		echo et_core_intentionally_unescaped( $after_widget, 'html' );
	}

	/*Saves the settings. */
	function update( $new_instance, $old_instance ){
		$instance = $old_instance;
		$instance['title'] = sanitize_text_field( $new_instance['title'] );
		$instance['imagePath'] = esc_url( $new_instance['imagePath'] );
		$instance['aboutText'] = current_user_can('unfiltered_html') ? $new_instance['aboutText'] : stripslashes( wp_filter_post_kses( addslashes($new_instance['aboutText']) ) );

		return $instance;
	}

	/*Creates the form for the widget in the back-end. */
	function form( $instance ){
		//Defaults
		$instance = wp_parse_args( (array) $instance, array( 'title' => esc_html__( 'About Me', 'Divi' ), 'imagePath' => '', 'aboutText' => '' ) );

		# Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('title') ) . '">' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('title') ) . '" name="' . esc_attr( $this->get_field_name('title') ) . '" type="text" value="' . esc_attr( $instance['title'] ) . '" /></p>';
		# Image
		echo '<p><label for="' . esc_attr( $this->get_field_id('imagePath') ) . '">' . esc_html__( 'Image', 'Divi' ) . ':' . '</label><textarea cols="20" rows="2" class="widefat" id="' . esc_attr( $this->get_field_id('imagePath') ) . '" name="' . esc_attr( $this->get_field_name('imagePath') ) . '" >' . esc_url( $instance['imagePath'] ) .'</textarea></p>';
		# About Text
		echo '<p><label for="' . esc_attr( $this->get_field_id('aboutText') ) . '">' . esc_html__( 'Text', 'Divi' ) . ':' . '</label><textarea cols="20" rows="5" class="widefat" id="' . esc_attr( $this->get_field_id('aboutText') ) . '" name="' . esc_attr( $this->get_field_name('aboutText') ) . '" >' . esc_textarea( $instance['aboutText'] ) .'</textarea></p>';
	}

}// end AboutMeWidget class

function AboutMeWidgetInit() {
	register_widget('AboutMeWidget');
}

add_action('widgets_init', 'AboutMeWidgetInit');