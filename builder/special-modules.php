<?php
class ET_Builder_Module_CAWeb_Post_Handler extends ET_Builder_Module {
	function init() {
		$this->name = esc_html__( 'CAWeb Post Handler', 'et_builder' );

		$this->slug = 'et_pb_ca_post_handler';

		$this->whitelisted_fields = array(
			'post_type_layout', 'news_author', 'news_publish_date', 'news_city', 'show_tags_button', 'show_categories_button', 'show_featured_image',
			 'profile_name_prefix', 'profile_name', 'profile_title', 'content_new', 
		);


		$this->main_css_element = '%%order_class%%';

		// Custom handler: Output JS for editor preview in page footer.
		add_action( 'admin_footer', array( $this, 'js_frontend' ) );
	}
	function get_fields() {
			
		$fields = array(
			'post_type_layout' => array(
				'label'             => esc_html__( 'Post Type Style','et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'none' => esc_html__( 'None','et_builder'),
					'jobs'  => esc_html__( 'Jobs','et_builder'),
					'news' => esc_html__( 'News','et_builder'),
					'profile'  => esc_html__( 'Profile','et_builder'),
				),
				'description'       => esc_html__( 'This is the layout style','et_builder' ),	
				'affects'           => array('news_author','news_article', 'news_publish_date', 'news_city',
																		'profile_name_prefix','profile_name','profile_title', ),
			),
			'news_author' => array(
				'label'           => esc_html__( 'Author','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter an Author for this news item.','et_builder' ),
				'depends_show_if' => 'news',
			),			
			'news_publish_date' => array(
				'label'           => esc_html__( 'Publish Date','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a Publish Date for this news item.','et_builder' ),
				'depends_show_if' => 'news',
			),
			'news_city' => array(
				'label'           => esc_html__( 'News Location','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a Location for this news item.','et_builder' ),
				'depends_show_if' => 'news',
			),
				'show_featured_image' => array(
				'label'             => esc_html__( 'Show Featured Image', 'et_builder' ),
				'type'              => 'yes_no_button',
				'option_category'   => 'configuration',
				'options'           => array(
					'off' => esc_html__( "No", 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
			),
			'profile_name_prefix' => array(
				'label'           => esc_html__( 'Name Prefix','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a prefix for this profile item.','et_builder' ),
				'depends_show_if' => 'profile',
			),			
			'profile_name' => array(
				'label'           => esc_html__( 'Profile Name','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a profile name for this profile item.','et_builder' ),
				'depends_show_if' => 'profile',
			),
			'profile_title' => array(
				'label'           => esc_html__( 'Profile Tile','et_builder' ),
				'type'            => 'text',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter a title for this profile item.','et_builder' ),
				'depends_show_if' => 'profile',
			),
		'content_new' => array(
				'label'           => esc_html__( 'Content','et_builder'),
				'type'            => 'tiny_mce',
				'option_category' => 'basic_option',
				'description'     => esc_html__( 'Enter the content for this item.','et_builder' ),
			),
			'show_tags_button' => array(
				'label'           => esc_html__( 'Display Post Tags', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
		),
			'show_categories_button' => array(
				'label'           => esc_html__( 'Display Post Categories', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'off' => esc_html__( 'No', 'et_builder' ),
					'on'  => esc_html__( 'Yes', 'et_builder' ),
				),
		),
		);

		
		return $fields;

	}
	function shortcode_callback( $atts, $content = null, $function_name ) {
		$post_type_layout    = $this->shortcode_atts['post_type_layout'];

		$news_author               = $this->shortcode_atts['news_author'];

		$news_publish_date               = $this->shortcode_atts['news_publish_date'];

		$news_city    = $this->shortcode_atts['news_city'];

		$show_featured_image    = $this->shortcode_atts['show_featured_image'];
		
		$profile_name_prefix               = $this->shortcode_atts['profile_name_prefix'];

		$profile_name               = $this->shortcode_atts['profile_name'];

		$profile_title    = $this->shortcode_atts['profile_title'];

		$content_new    = $this->shortcode_atts['content_new'];
		
		$show_tags_button    = $this->shortcode_atts['show_tags_button'];
		
		$show_categories_button    = $this->shortcode_atts['show_categories_button'];
		
		$class = "et_pb_ca_post_handler et_pb_module";


		$this->shortcode_content = et_builder_replace_code_content_entities( $this->shortcode_content );


		global $post;
		
		switch($post_type_layout){
			
			case 'news':
				$title = get_the_title($post->ID);
    	//return posts tags
				$tag_names = wp_get_post_tags( $post->ID, array( 'fields' => 'names' ) );
				$tag_list = '';
			if ( !empty($tag_names) ) {
				$tag_list = 'Tags or Keywords<ul>';
				foreach($tag_names as $n){
					$tag_list .= sprintf('<li>%1$s</li>', $n);
				}
				$tag_list = '</ul>';
			}
     	$output = sprintf('<article class="news-detail">
												<header><h1>%1$s</h1>%2$s%3$s</header>%4$s%5$s</article>', 
													$title , ( !empty($news_publish_date) ? sprintf('<div class="published">Published: %1$s', $news_publish_date) : '') , 
												( !empty($news_city) ? sprintf('<p>%1$s</p></div>', $news_city) : '</div>') ,$this->shortcode_content,
												( !empty($tag_names) ? sprintf('<footer class="keywords">%1$s</footer>', $tag_list ) : ''));
    
					
			
				break;
			case 'profile':
			$title = sprintf('%1$s%2$s%3$s', ( !empty($profile_name_prefix) ? $profile_name_prefix . ' ' : '') , $profile_name, ( !empty($profile_title) ? ', ' . $profile_title: '') );
			
				$output = sprintf('<article class="profile-detail">%1$s%2$s</h1></article>',
													( !empty($title) ? sprintf('<h1>%1$s</h1>', $title) : ''), $this->shortcode_content);
				
				break;
			default:
				$output = sprintf('%1$s','<h2>Unknown Content Type</h2>' );
		}
		

		return $output;

	}
	
	// This is a non-standard function. It outputs JS code to render the
		// module preview in the new Divi 3 frontend editor.
		// Return value of the JS function must be full HTML code to display.
		function js_frontend() {
			?>
			<script>
						console.log("<?php print_r( $this->post_type_layout ); ?>");
			</script>
			<?php
		}
}
new ET_Builder_Module_CAWeb_Post_Handler;
?>