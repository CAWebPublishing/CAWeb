<?php class AdvWidget extends WP_Widget
{
	function __construct(){
		$widget_ops = array( 'description' => esc_html__( 'Displays Advertisements', 'Divi' ) );
		$control_ops = array('width' => 400, 'height' => 500);
		parent::__construct( false, $name = esc_html__( 'ET Advertisement', 'Divi' ), $widget_ops, $control_ops );
	}

	/* Displays the Widget in the front-end */
	function widget($args, $instance){
		extract($args);
		$title = apply_filters( 'widget_title', empty( $instance['title'] ) ? esc_html__( 'Advertisement', 'Divi' ) : esc_html( $instance['title'] ) );
		$use_relpath = isset($instance['use_relpath']) ? $instance['use_relpath'] : false;
		$new_window = isset($instance['new_window']) ? $instance['new_window'] : false;
		$bannerPath[1] = empty($instance['bannerOnePath']) ? '' : $instance['bannerOnePath'];
		$bannerUrl[1] = empty($instance['bannerOneUrl']) ? '' : $instance['bannerOneUrl'];
		$bannerTitle[1] = empty($instance['bannerOneTitle']) ? '' : $instance['bannerOneTitle'];
		$bannerAlt[1] = empty($instance['bannerOneAlt']) ? '' : $instance['bannerOneAlt'];

		$bannerPath[2] = empty($instance['bannerTwoPath']) ? '' : $instance['bannerTwoPath'];
		$bannerUrl[2] = empty($instance['bannerTwoUrl']) ? '' : $instance['bannerTwoUrl'];
		$bannerTitle[2] = empty($instance['bannerTwoTitle']) ? '' : $instance['bannerTwoTitle'];
		$bannerAlt[2] = empty($instance['bannerTwoAlt']) ? '' : $instance['bannerTwoAlt'];

		$bannerPath[3] = empty($instance['bannerThreePath']) ? '' : $instance['bannerThreePath'];
		$bannerUrl[3] = empty($instance['bannerThreeUrl']) ? '' : $instance['bannerThreeUrl'];
		$bannerTitle[3] = empty($instance['bannerThreeTitle']) ? '' : $instance['bannerThreeTitle'];
		$bannerAlt[3] = empty($instance['bannerThreeAlt']) ? '' : $instance['bannerThreeAlt'];

		$bannerPath[4] = empty($instance['bannerFourPath']) ? '' : $instance['bannerFourPath'];
		$bannerUrl[4] = empty($instance['bannerFourUrl']) ? '' : $instance['bannerFourUrl'];
		$bannerTitle[4] = empty($instance['bannerFourTitle']) ? '' : $instance['bannerFourTitle'];
		$bannerAlt[4] = empty($instance['bannerFourAlt']) ? '' : $instance['bannerFourAlt'];

		$bannerPath[5] = empty($instance['bannerFivePath']) ? '' : $instance['bannerFivePath'];
		$bannerUrl[5] = empty($instance['bannerFiveUrl']) ? '' : $instance['bannerFiveUrl'];
		$bannerTitle[5] = empty($instance['bannerFiveTitle']) ? '' : $instance['bannerFiveTitle'];
		$bannerAlt[5] = empty($instance['bannerFiveAlt']) ? '' : $instance['bannerFiveAlt'];

		$bannerPath[6] = empty($instance['bannerSixPath']) ? '' : $instance['bannerSixPath'];
		$bannerUrl[6] = empty($instance['bannerSixUrl']) ? '' : $instance['bannerSixUrl'];
		$bannerTitle[6] = empty($instance['bannerSixTitle']) ? '' : $instance['bannerSixTitle'];
		$bannerAlt[6] = empty($instance['bannerSixAlt']) ? '' : $instance['bannerSixAlt'];

		$bannerPath[7] = empty($instance['bannerSevenPath']) ? '' : $instance['bannerSevenPath'];
		$bannerUrl[7] = empty($instance['bannerSevenUrl']) ? '' : $instance['bannerSevenUrl'];
		$bannerTitle[7] = empty($instance['bannerSevenTitle']) ? '' : $instance['bannerSevenTitle'];
		$bannerAlt[7] = empty($instance['bannerSevenAlt']) ? '' : $instance['bannerSevenAlt'];

		$bannerPath[8] = empty($instance['bannerEightPath']) ? '' : $instance['bannerEightPath'];
		$bannerUrl[8] = empty($instance['bannerEightUrl']) ? '' : $instance['bannerEightUrl'];
		$bannerTitle[8] = empty($instance['bannerEightTitle']) ? '' : $instance['bannerEightTitle'];
		$bannerAlt[8] = empty($instance['bannerEightAlt']) ? '' : $instance['bannerEightAlt'];

		echo et_core_intentionally_unescaped( $before_widget, 'html' );

		if ( $title ) {
			echo et_core_intentionally_unescaped( $before_title . $title . $after_title, 'html' );
		}
?>
<div class="adwrap">
<?php $i = 1;
while ($i <= 8):
if ($bannerPath[$i] !== '') { ?>
<?php
	if ($bannerTitle[$i] === '') {
		$bannerTitle[$i] = "advertisement";
	}

	if ($bannerAlt[$i] === '') {
		$bannerAlt[$i] = "advertisement";
	}
?>
	<a href="<?php echo esc_url( $bannerUrl[$i] ); ?>" <?php if ($new_window) echo('target="_blank"') ?>><img src="<?php if ( $use_relpath ) echo esc_url( home_url() ); else echo esc_attr( $bannerPath[$i] ); ?><?php if ( $use_relpath ) echo ("/" . esc_attr( $bannerPath[$i] ) ); ?>" alt="<?php echo esc_attr( $bannerAlt[$i] ); ?>" title="<?php echo esc_attr( $bannerTitle[$i] ); ?>" /></a>
<?php }; $i++;
endwhile; ?>
</div> <!-- end adwrap -->
<?php
		echo et_core_intentionally_unescaped( $after_widget, 'html' );
	}

	/*Saves the settings. */
	function update($new_instance, $old_instance){
		$instance = $old_instance;
		$instance['title'] = stripslashes($new_instance['title']);
		$instance['use_relpath'] = 0;
		$instance['new_window'] = 0;
		if ( isset($new_instance['use_relpath']) ) $instance['use_relpath'] = 1;
		if ( isset($new_instance['new_window']) ) $instance['new_window'] = 1;
		$instance['bannerOnePath'] = esc_attr($new_instance['bannerOnePath']);
		$instance['bannerOneUrl'] = esc_url($new_instance['bannerOneUrl']);
		$instance['bannerOneTitle'] = esc_attr($new_instance['bannerOneTitle']);
		$instance['bannerOneAlt'] = esc_attr($new_instance['bannerOneAlt']);

		$instance['bannerTwoPath'] = esc_attr($new_instance['bannerTwoPath']);
		$instance['bannerTwoUrl'] = esc_url($new_instance['bannerTwoUrl']);
		$instance['bannerTwoTitle'] = esc_attr($new_instance['bannerTwoTitle']);
		$instance['bannerTwoAlt'] = esc_attr($new_instance['bannerTwoAlt']);

		$instance['bannerThreePath'] = esc_attr($new_instance['bannerThreePath']);
		$instance['bannerThreeUrl'] = esc_url($new_instance['bannerThreeUrl']);
		$instance['bannerThreeTitle'] = esc_attr($new_instance['bannerThreeTitle']);
		$instance['bannerThreeAlt'] = esc_attr($new_instance['bannerThreeAlt']);

		$instance['bannerFourPath'] = esc_attr($new_instance['bannerFourPath']);
		$instance['bannerFourUrl'] = esc_url($new_instance['bannerFourUrl']);
		$instance['bannerFourTitle'] = esc_attr($new_instance['bannerFourTitle']);
		$instance['bannerFourAlt'] = esc_attr($new_instance['bannerFourAlt']);

		$instance['bannerFivePath'] = esc_attr($new_instance['bannerFivePath']);
		$instance['bannerFiveUrl'] = esc_url($new_instance['bannerFiveUrl']);
		$instance['bannerFiveTitle'] = esc_attr($new_instance['bannerFiveTitle']);
		$instance['bannerFiveAlt'] = esc_attr($new_instance['bannerFiveAlt']);

		$instance['bannerSixPath'] = esc_attr($new_instance['bannerSixPath']);
		$instance['bannerSixUrl'] = esc_url($new_instance['bannerSixUrl']);
		$instance['bannerSixTitle'] = esc_attr($new_instance['bannerSixTitle']);
		$instance['bannerSixAlt'] = esc_attr($new_instance['bannerSixAlt']);

		$instance['bannerSevenPath'] = esc_attr($new_instance['bannerSevenPath']);
		$instance['bannerSevenUrl'] = esc_url($new_instance['bannerSevenUrl']);
		$instance['bannerSevenTitle'] = esc_attr($new_instance['bannerSevenTitle']);
		$instance['bannerSevenAlt'] = esc_attr($new_instance['bannerSevenAlt']);

		$instance['bannerEightPath'] = esc_attr($new_instance['bannerEightPath']);
		$instance['bannerEightUrl'] = esc_url($new_instance['bannerEightUrl']);
		$instance['bannerEightTitle'] = esc_attr($new_instance['bannerEightTitle']);
		$instance['bannerEightAlt'] = esc_attr($new_instance['bannerEightAlt']);

		return $instance;
	}

	/*Creates the form for the widget in the back-end. */
	function form($instance){
		//Defaults
		$instance = wp_parse_args( (array) $instance, array('title'=>__( 'Advertisement', 'Divi' ), 'use_relpath' => false, 'new_window' => true, 'bannerOnePath'=>'', 'bannerOneUrl'=>'', 'bannerOneTitle'=>'', 'bannerOneAlt'=>'', 'bannerTwoPath'=>'', 'bannerTwoUrl'=>'', 'bannerTwoTitle'=>'', 'bannerTwoAlt'=>'','bannerThreePath'=>'', 'bannerThreeUrl'=>'','bannerThreeTitle'=>'', 'bannerThreeAlt'=>'','bannerFourPath'=>'', 'bannerFourUrl'=>'','bannerFourTitle'=>'', 'bannerFourAlt'=>'','bannerFivePath'=>'', 'bannerFiveUrl'=>'','bannerFiveTitle'=>'', 'bannerFiveAlt'=>'','bannerSixPath'=>'', 'bannerSixUrl'=>'','bannerSixTitle'=>'','bannerSixAlt'=>'', 'bannerSevenPath'=>'', 'bannerSevenUrl'=>'','bannerSevenTitle'=>'','bannerSevenAlt'=>'','bannerEightPath'=>'', 'bannerEightUrl'=>'','bannerEightTitle'=>'','bannerEightAlt'=>'') );

		$title          = $instance['title'];
		$bannerPath[1]  = $instance['bannerOnePath'];
		$bannerUrl[1]   = $instance['bannerOneUrl'];
		$bannerTitle[1] = $instance['bannerOneTitle'];
		$bannerAlt[1]   = $instance['bannerOneAlt'];

		$bannerPath[2] = $instance['bannerTwoPath'];
		$bannerUrl[2] = $instance['bannerTwoUrl'];
		$bannerTitle[2] = $instance['bannerTwoTitle'];
		$bannerAlt[2] = $instance['bannerTwoAlt'];

		$bannerPath[3] = $instance['bannerThreePath'];
		$bannerUrl[3] = $instance['bannerThreeUrl'];
		$bannerTitle[3] = $instance['bannerThreeTitle'];
		$bannerAlt[3] = $instance['bannerThreeAlt'];

		$bannerPath[4] = $instance['bannerFourPath'];
		$bannerUrl[4] = $instance['bannerFourUrl'];
		$bannerTitle[4] = $instance['bannerFourTitle'];
		$bannerAlt[4] = $instance['bannerFourAlt'];

		$bannerPath[5] = $instance['bannerFivePath'];
		$bannerUrl[5] = $instance['bannerFiveUrl'];
		$bannerTitle[5] = $instance['bannerFiveTitle'];
		$bannerAlt[5] = $instance['bannerFiveAlt'];

		$bannerPath[6] = $instance['bannerSixPath'];
		$bannerUrl[6] = $instance['bannerSixUrl'];
		$bannerTitle[6] = $instance['bannerSixTitle'];
		$bannerAlt[6] = $instance['bannerSixAlt'];

		$bannerPath[7] = $instance['bannerSevenPath'];
		$bannerUrl[7] = $instance['bannerSevenUrl'];
		$bannerTitle[7] = $instance['bannerSevenTitle'];
		$bannerAlt[7] = $instance['bannerSevenAlt'];

		$bannerPath[8] = esc_attr($instance['bannerEightPath']);
		$bannerUrl[8] = esc_url($instance['bannerEightUrl']);
		$bannerTitle[8] = esc_attr($instance['bannerEightTitle']);
		$bannerAlt[8] = esc_attr($instance['bannerEightAlt']);

		# Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('title') ) . '">' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('title') ) . '" name="' . esc_attr( $this->get_field_name('title') ) . '" type="text" value="' . esc_html( $title ) . '" /></p>'; ?>

		<input class="checkbox" type="checkbox" <?php checked($instance['use_relpath'], true) ?> id="<?php echo esc_attr( $this->get_field_id('use_relpath') ); ?>" name="<?php echo esc_attr( $this->get_field_name('use_relpath') ); ?>" />
		<label for="<?php echo esc_attr( $this->get_field_id('use_relpath') ); ?>"><?php esc_html_e( 'Use Relative Image Paths', 'Divi' ); ?></label><br />
		<input class="checkbox" type="checkbox" <?php checked($instance['new_window'], true) ?> id="<?php echo esc_attr( $this->get_field_id('new_window') ); ?>" name="<?php echo esc_attr( $this->get_field_name('new_window') ); ?>" />
		<label for="<?php echo esc_attr( $this->get_field_id('new_window') ); ?>"><?php esc_html_e( 'Open in a new window', 'Divi' ); ?></label><br /><br />

		<?php	# Banner #1 Image
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerOnePath') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #1 ' . esc_html__( 'Image', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerOnePath') ) . '" name="' . esc_attr( $this->get_field_name('bannerOnePath') ) . '" type="text" value="' . esc_attr( $bannerPath[1] ) . '" /></p>';
		# Banner #1 Url
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerOneUrl') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #1 ' . esc_html__( 'Url', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerOneUrl') ) . '" name="' . esc_attr( $this->get_field_name('bannerOneUrl') ) . '" type="text" value="' . esc_url( $bannerUrl[1] ) . '" /></p>';
		# Banner #1 Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerOneTitle') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #1 ' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerOneTitle') ) . '" name="' . esc_attr( $this->get_field_name('bannerOneTitle') ) . '" type="text" value="' . esc_attr( $bannerTitle[1] ) . '" /></p>';
		# Banner #1 Alt
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerOneAlt') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #1 ' . esc_html__( 'Alt', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerOneAlt') ) . '" name="' . esc_attr( $this->get_field_name('bannerOneAlt') ) . '" type="text" value="' . esc_attr( $bannerAlt[1] ) . '" /></p>';
		# Banner #2 Image
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerTwoPath') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #2 ' . esc_html__( 'Image', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerTwoPath') ) . '" name="' . esc_attr( $this->get_field_name('bannerTwoPath') ) . '" type="text" value="' . esc_attr( $bannerPath[2] ) . '" /></p>';
		# Banner #2 Url
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerTwoUrl') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #2 ' . esc_html__( 'Url', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerTwoUrl') ) . '" name="' . esc_attr( $this->get_field_name('bannerTwoUrl') ) . '" type="text" value="' . esc_url( $bannerUrl[2] ) . '" /></p>';
		# Banner #2 Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerTwoTitle') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #2 ' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerTwoTitle') ) . '" name="' . esc_attr( $this->get_field_name('bannerTwoTitle') ) . '" type="text" value="' . esc_attr( $bannerTitle[2] ) . '" /></p>';
		# Banner #2 Alt
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerTwoAlt') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #2 ' . esc_html__( 'Alt', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerTwoAlt') ) . '" name="' . esc_attr( $this->get_field_name('bannerTwoAlt') ) . '" type="text" value="' . esc_attr( $bannerAlt[2] ) . '" /></p>';
		# Banner #3 Image
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerThreePath') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #3 ' . esc_html__( 'Image', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerThreePath') ) . '" name="' . esc_attr( $this->get_field_name('bannerThreePath') ) . '" type="text" value="' . esc_attr( $bannerPath[3] ) . '" /></p>';
		# Banner #3 Url
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerThreeUrl') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #3 ' . esc_html__( 'Url', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerThreeUrl') ) . '" name="' . esc_attr( $this->get_field_name('bannerThreeUrl') ) . '" type="text" value="' . esc_url( $bannerUrl[3] ) . '" /></p>';
		# Banner #3 Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerThreeTitle') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #3 ' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerThreeTitle') ) . '" name="' . esc_attr( $this->get_field_name('bannerThreeTitle') ) . '" type="text" value="' . esc_attr( $bannerTitle[3] ) . '" /></p>';
		# Banner #3 Alt
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerThreeAlt') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #3 ' . esc_html__( 'Alt', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerThreeAlt') ) . '" name="' . esc_attr( $this->get_field_name('bannerThreeAlt') ) . '" type="text" value="' . esc_attr( $bannerAlt[3] ) . '" /></p>';
		# Banner #4 Image
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerFourPath') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #4 ' . esc_html__( 'Image', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerFourPath') ) . '" name="' . esc_attr( $this->get_field_name('bannerFourPath') ) . '" type="text" value="' . esc_attr( $bannerPath[4] ) . '" /></p>';
		# Banner #4 Url
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerFourUrl') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #4 ' . esc_html__( 'Url', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerFourUrl') ) . '" name="' . esc_attr( $this->get_field_name('bannerFourUrl') ) . '" type="text" value="' . esc_url( $bannerUrl[4] ) . '" /></p>';
		# Banner #4 Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerFourTitle') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #4 ' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerFourTitle') ) . '" name="' . esc_attr( $this->get_field_name('bannerFourTitle') ) . '" type="text" value="' . esc_attr( $bannerTitle[4] ) . '" /></p>';
		# Banner #4 Alt
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerFourAlt') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #4 ' . esc_html__( 'Alt', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerFourAlt') ) . '" name="' . esc_attr( $this->get_field_name('bannerFourAlt') ) . '" type="text" value="' . esc_attr( $bannerAlt[4] ) . '" /></p>';
		# Banner #5 Image
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerFivePath') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #5 ' . esc_html__( 'Image', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerFivePath') ) . '" name="' . esc_attr( $this->get_field_name('bannerFivePath') ) . '" type="text" value="' . esc_attr( $bannerPath[5] ) . '" /></p>';
		# Banner #5 Url
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerFiveUrl') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #5 ' . esc_html__( 'Url', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerFiveUrl') ) . '" name="' . esc_attr( $this->get_field_name('bannerFiveUrl') ) . '" type="text" value="' . esc_url( $bannerUrl[5] ) . '" /></p>';
		# Banner #5 Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerFiveTitle') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #5 ' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerFiveTitle') ) . '" name="' . esc_attr( $this->get_field_name('bannerFiveTitle') ) . '" type="text" value="' . esc_attr( $bannerTitle[5] ) . '" /></p>';
		# Banner #5 Alt
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerFiveAlt') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #5 ' . esc_html__( 'Alt', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerFiveAlt') ) . '" name="' . esc_attr( $this->get_field_name('bannerFiveAlt') ) . '" type="text" value="' . esc_attr( $bannerAlt[5] ) . '" /></p>';
		# Banner #6 Image
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerSixPath') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #6 ' . esc_html__( 'Image', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerSixPath') ) . '" name="' . esc_attr( $this->get_field_name('bannerSixPath') ) . '" type="text" value="' . esc_attr( $bannerPath[6] ) . '" /></p>';
		# Banner #6 Url
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerSixUrl') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #6 ' . esc_html__( 'Url', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerSixUrl') ) . '" name="' . esc_attr( $this->get_field_name('bannerSixUrl') ) . '" type="text" value="' . esc_url( $bannerUrl[6] ) . '" /></p>';
		# Banner #6 Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerSixTitle') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #6 ' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerSixTitle') ) . '" name="' . esc_attr( $this->get_field_name('bannerSixTitle') ) . '" type="text" value="' . esc_attr( $bannerTitle[6] ) . '" /></p>';
		# Banner #6 Alt
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerSixAlt') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #6 ' . esc_html__( 'Alt', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerSixAlt') ) . '" name="' . esc_attr( $this->get_field_name('bannerSixAlt') ) . '" type="text" value="' . esc_attr( $bannerAlt[6] ) . '" /></p>';
		# Banner #7 Image
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerSevenPath') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #7 ' . esc_html__( 'Image', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerSevenPath') ) . '" name="' . esc_attr( $this->get_field_name('bannerSevenPath') ) . '" type="text" value="' . esc_attr( $bannerPath[7] ) . '" /></p>';
		# Banner #7 Url
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerSevenUrl') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #7 ' . esc_html__( 'Url', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerSevenUrl') ) . '" name="' . esc_attr( $this->get_field_name('bannerSevenUrl') ) . '" type="text" value="' . esc_url( $bannerUrl[7] ) . '" /></p>';
		# Banner #7 Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerSevenTitle') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #7 ' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerSevenTitle') ) . '" name="' . esc_attr( $this->get_field_name('bannerSevenTitle') ) . '" type="text" value="' . esc_attr( $bannerTitle[7] ) . '" /></p>';
		# Banner #7 Alt
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerSevenAlt') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #7 ' . esc_html__( 'Alt', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerSevenAlt') ) . '" name="' . esc_attr( $this->get_field_name('bannerSevenAlt') ) . '" type="text" value="' . esc_attr( $bannerAlt[7] ) . '" /></p>';
		# Banner #8 Image
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerEightPath') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #8 ' . esc_html__( 'Image', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerEightPath') ) . '" name="' . esc_attr( $this->get_field_name('bannerEightPath') ) . '" type="text" value="' . esc_attr( $bannerPath[8] ) . '" /></p>';
		# Banner #8 Url
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerEightUrl') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #8 ' . esc_html__( 'Url', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerEightUrl') ) . '" name="' . esc_attr( $this->get_field_name('bannerEightUrl') ) . '" type="text" value="' . esc_url( $bannerUrl[8] ) . '" /></p>';
		# Banner #8 Title
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerEightTitle') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #8 ' . esc_html__( 'Title', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerEightTitle') ) . '" name="' . esc_attr( $this->get_field_name('bannerEightTitle') ) . '" type="text" value="' . esc_attr( $bannerTitle[8] ) . '" /></p>';
		# Banner #8 Alt
		echo '<p><label for="' . esc_attr( $this->get_field_id('bannerEightAlt') ) . '">' . esc_html__( 'Banner', 'Divi' ) . ' #8 ' . esc_html__( 'Alt', 'Divi' ) . ':' . '</label><input class="widefat" id="' . esc_attr( $this->get_field_id('bannerEightAlt') ) . '" name="' . esc_attr( $this->get_field_name('bannerEightAlt') ) . '" type="text" value="' . esc_attr( $bannerAlt[8] ) . '" /></p>';
		echo '<p><small>' . esc_html__( "If you don't want to display some banners - leave approptiate fields blank", 'Divi' ) . '.</small></p>';
	}

}// end AdvWidget class

function AdvWidgetInit() {
	register_widget('AdvWidget');
}

add_action('widgets_init', 'AdvWidgetInit');