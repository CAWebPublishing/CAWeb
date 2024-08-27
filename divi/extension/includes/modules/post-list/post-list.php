<?php
/**
 * CAWeb Post List Module (Standard)
 *
 * @package CAWebModuleExtension
 */

if ( ! class_exists( 'ET_Builder_CAWeb_Module' ) ) {
	require_once dirname( __DIR__ ) . '/class-caweb-builder-element.php';
}

/**
 * CAWeb Post List Module Class (Standard)
 */
class CAWeb_Module_Post_List extends ET_Builder_CAWeb_Module {
	/**
	 * Module Slug Name
	 *
	 * @var string Module slug name.
	 */
	public $slug = 'et_pb_ca_post_list';
	/**
	 * Visual Builder Support
	 *
	 * @var string Whether or not this module supports Divi's Visual Builder.
	 */
	public $vb_support = 'on';

	/**
	 * Module Initialization
	 *
	 * @return void
	 */
	public function init() {
		$this->name = esc_html__( 'Post List', 'et_builder' );

		$this->main_css_element = '%%order_class%%';

		$this->settings_modal_toggles = array(
			'general' => array(
				'toggles' => array(
					'header' => esc_html__( 'Header', 'et_builder' ),
					'style'  => esc_html__( 'Style', 'et_builder' ),
				),
			),
			'advanced' => array(
				'toggles' => array(
					'header' => esc_html__( 'Header', 'et_builder' ),
					'text'   => array(
						'title'    => esc_html__( 'Text', 'et_builder' ),
						'priority' => 49,
					),
				),
			),
		);

	}

	/**
	 * Returns an array of all the Module Fields.
	 *
	 * @return array
	 */
	public function get_fields() {
		$general_fields = array(
			'title' => array(
				'label'       => esc_html__( 'Title', 'et_builder' ),
				'type'        => 'text',
				'description' => esc_html__( 'Enter a title for the Post List.', 'et_builder' ),
				'tab_slug'    => 'general',
				'toggle_slug' => 'header',
			),
			'style' => array(
				'label'             => esc_html__( 'Content Type', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'course-list'  => esc_html__( 'Course List', 'et_builder' ),
					'events-list'  => esc_html__( 'Event List', 'et_builder' ),
					'exams-list'   => esc_html__( 'Exam List', 'et_builder' ),
					'faqs-list'    => esc_html__( 'FAQs List', 'et_builder' ),
					'general-list' => esc_html__( 'General List', 'et_builder' ),
					'jobs-list'    => esc_html__( 'Jobs List', 'et_builder' ),
					'news-list'    => esc_html__( 'News List', 'et_builder' ),
					'profile-list' => esc_html__( 'Profile List', 'et_builder' ),
				),
				'default'           => 'course-list',
				'description'       => esc_html__( 'Here you can select the various list styles.', 'et_builder' ),
				'tab_slug'          => 'general',
				'toggle_slug'       => 'style',
			),
			'faq_style' => array(
				'label'             => esc_html__( 'Accordion Style', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'accordion' => esc_html__( 'Accordion', 'et_builder' ),
					'toggle'    => esc_html__( 'Toggle', 'et_builder' ),
				),
				'description'       => esc_html__( 'Here you can select the various list styles.', 'et_builder' ),
				'show_if'           => array( 'style' => 'faqs-list' ),
				'tab_slug'          => 'general',
				'toggle_slug'       => 'style',
			),
			'posts_number' => array(
				'label'             => esc_html__( 'Posts Number', 'et_builder' ),
				'type'              => 'text',
				'option_category'   => 'configuration',
				'description'       => esc_html__( 'Choose how many posts you would like to display in the list. Default is all.', 'et_builder' ),
				'tab_slug'          => 'general',
				'toggle_slug'       => 'style',
			),
			'view_featured_image' => array(
				'label'           => esc_html__( 'Featured Image', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'show_if_not'     => array( 'style' => 'faqs-list' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'style',
			),
			'all_categories_button' => array(
				'label'           => esc_html__( 'Include All Categories', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'show_if'         => array( 'style' => 'general-list' ),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'style',
			),
			'include_categories' => array(
				'label'            => esc_html__( 'Select Categories', 'et_builder' ),
				'renderer'         => 'categories',
				'option_category'  => 'basic_option',
				'renderer_options' => array(
					'use_terms' => false,
				),
				'description'      => esc_html__( 'Choose which categories you would like to include in the list.', 'et_builder' ),
				'show_if'          => array( 'all_categories_button' => 'off' ),
				'tab_slug'         => 'general',
				'toggle_slug'      => 'style',
			),
			'all_tags_button' => array(
				'label'           => esc_html__( 'Include All Tags', 'et_builder' ),
				'type'            => 'yes_no_button',
				'option_category' => 'configuration',
				'options'         => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'tab_slug'        => 'general',
				'toggle_slug'     => 'style',
			),
			'include_tags' => array(
				'label'            => esc_html__( 'Tags', 'et_builder' ),
				'type'             => 'categories',
				'option_category'  => 'basic_option',
				'post_type'        => 'post',
				'taxonomy_name'    => 'post_tag',
				'renderer_options' => array(
					'use_terms'  => true,
					'term_name'  => 'post_tag',
					'field_name' => 'et_pb_include_tags',
				),
				'description'      => esc_html__( 'Choose which tags you would like to include in the list.', 'et_builder' ),
				'show_if'          => array( 'all_tags_button' => 'off' ),
				'tab_slug'         => 'general',
				'toggle_slug'      => 'style',
			),
			'orderby' => array(
				'label'             => esc_html__( 'Order By', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => array(
					'date_desc'  => esc_html__( 'Date: new to old', 'et_builder' ),
					'date_asc'   => esc_html__( 'Date: old to new', 'et_builder' ),
					'title_asc'  => esc_html__( 'Title: a-z', 'et_builder' ),
					'title_desc' => esc_html__( 'Title: z-a', 'et_builder' ),
					'rand'       => esc_html__( 'Random', 'et_builder' ),
				),
				'default'           => 'date_desc',
				'description'       => esc_html__( 'Here you can adjust the order in which posts are displayed.', 'et_builder' ),
				'tab_slug'          => 'general',
				'toggle_slug'       => 'style',
			),
			'display_excerpt' => array(
				'label'             => esc_html__( 'Display Excerpt', 'et_builder' ),
				'type'              => 'yes_no_button',
				'option_category'   => 'configuration',
				'options'           => array(
					'on'  => esc_html__( 'Yes', 'et_builder' ),
					'off' => esc_html__( 'No', 'et_builder' ),
				),
				'default'           => 'on',
				'show_if'           => array(
					'style' => array( 'course-list', 'events-list', 'general-list', 'news-list' ),
				),
				'show_if_not'       => array(
					'style' => array( 'exams-list', 'faqs-list', 'jobs-list', 'profile-list' ),
				),
				'tab_slug'          => 'general',
				'toggle_slug'       => 'style',
			),
		);

		$design_fields = array(
			'title_size' => array(
				'label'             => esc_html__( 'Title Size', 'et_builder' ),
				'type'              => 'select',
				'option_category'   => 'configuration',
				'options'           => $this->caweb_get_text_sizes( array( 'p', 'h6' ) ),
				'description'       => esc_html__( 'Select the size for the title of this module.', 'et_builder' ),
				'tab_slug'          => 'advanced',
				'toggle_slug'       => 'header',
			),
		);

		$advanced_fields = array();

		return array_merge( $general_fields, $design_fields, $advanced_fields );
	}

	/**
	 * Renders the Module on the frontend
	 *
	 * @param  mixed $unprocessed_props Module Props before processing.
	 * @param  mixed $content Module Content.
	 * @param  mixed $render_slug Module Slug Name.
	 * @return string
	 */
	public function render( $unprocessed_props, $content, $render_slug ) {
		$module_class        = $this->props['module_class'];
		$list_title          = $this->props['title'];
		$title_size          = $this->props['title_size'];
		$style               = $this->props['style'];
		$faq_style           = $this->props['faq_style'];
		$posts_number        = $this->props['posts_number'];
		$view_featured_image = $this->props['view_featured_image'];
		$all_tags_button     = $this->props['all_tags_button'];
		$include_tags        = $this->props['include_tags'];
		$orderby             = $this->props['orderby'];

		$order = '';

		$cat_array = $this->get_categories( $style );
		$tag_array = array();

		switch ( $orderby ) {
			case 'date_desc':
					$orderby = 'date';
					$order   = 'DESC';

				break;
			case 'date_asc':
					$orderby = 'date';

					$order = 'ASC';

				break;

			case 'title_asc':
					$orderby = 'title';

					$order = 'ASC';

				break;

			case 'title_desc':
					$orderby = 'title';

					$order = 'DESC';

				break;

			case 'rand':
					$orderby = 'rand';

				break;

		}

		if ( 'on' === $all_tags_button ) {
			$tag_array = array();
		} elseif ( '' !== $include_tags ) {
			$tag_array = $include_tags;
		}

		$posts_number = ( ! empty( $posts_number ) ? $posts_number : -1 );

		$all_posts = $this->caweb_return_posts( $cat_array, $tag_array, -1, $orderby, $order );

		setlocale( LC_MONETARY, 'en_US.UTF-8' );

		if ( ! empty( $list_title ) ) {
			$title_size = str_replace( '-', '', $title_size );
			$list_title = "<$title_size>$list_title</$title_size>";
		}

		$faqs   = 'faqs-list' === $style ? true : false;
		$output = '';

		foreach ( $all_posts as $a => $p ) {
			if ( -1 !== $posts_number && 0 === $posts_number ) {
				break;
			}
			// Get the CAWeb Post Handler.
			$post_info = array(
				'id'      => $p->ID,
				'title'   => $p->post_title,
				'url'     => get_permalink( $p->ID ),
				'excerpt' => get_the_excerpt( $p->ID ),
				'content' => $p->post_content,
			);

			$post_content_handler = caweb_get_shortcode_from_content( $p->post_content, 'et_pb_ca_post_handler' );

			// if the handler is an object, construct the appropriate list item.
			if ( is_object( $post_content_handler ) ) {
				$output .= $this->createListView( $style, $posts_number, $post_content_handler, $post_info, $view_featured_image, $faq_style );
			} // end of if is_object check.
		}

		if ( $faqs ) {
			$this->props['module_id'] = empty( $this->props['module_id'] ) ? 
				 $this->get_module_order_class( $render_slug )
				: 
				 $this->props['module_id'];


			if( 'toggle' === $faq_style ){
				$output = sprintf( '<ul class="accordion-list list-overstated" role="tablist" >%1$s</ul>', $output );
			}else{
				
				$this->add_classname('accordion');
			}
		}

		$class = sprintf( ' class="%1$s %2$s" ', $this->module_classname( $render_slug ), $style );


		return sprintf( '<div%1$s%2$s>%3$s%4$s</div>', $this->module_id(), $class, ( ! empty( $list_title ) ? $list_title : '' ), $output );

	}

	/**
	 * Get appropriate category ID's based on list style
	 *
	 * @param  mixed $list_style Post List Style.
	 * @return array|string
	 */
	public function get_categories( $list_style ) {
		$include_categories    = $this->props['include_categories'];
		$all_categories_button = $this->props['all_categories_button'];

		$cat_array = array();
		$args      = array(
			'hide_empty' => 0,
			'fields'     => 'ids',
		);
		switch ( $list_style ) {
			// Course List.
			case 'course-list':
				$args['name'] = 'Courses';
				break;
			// Event List.
			case 'events-list':
				$args['name'] = 'Events';
				break;

			// Exam List.
			case 'exams-list':
				$args['name'] = 'Exams';
				break;
			// FAQs List.
			case 'faqs-list':
				$args['name'] = 'FAQs';
				break;
			// General List.
			case 'general-list':
				if ( 'off' === $all_categories_button && '' !== $include_categories ) {
					return $include_categories;
				}
				break;
			// Job List.
			case 'jobs-list':
				$args['name'] = 'Jobs';
				break;
			// News List.
			case 'news-list':
				$args['name'] = 'News';
				break;
			// Profile List.
			case 'profile-list':
				$args['name'] = 'Profiles';
				break;
		}
		return get_terms( 'category', $args );
	}

	/**
	 * Renders appropriate Post List View
	 *
	 * @param  string $list_style Post List style.
	 * @param  int    $post_count Counter of posts to display.
	 * @param  object $p_handler Post Module Handler Object.
	 * @param  array  $post_info Information about the Post.
	 * @param  string $featured_image Post Featured Image.
	 * @param  string $faq_style Post List FAQs style.
	 * @return string
	 */
	public function createListView( $list_style, &$post_count, $p_handler, $post_info, $featured_image = 'off', $faq_style = '' ) {
		$layout = isset( $p_handler->post_type_layout ) ? $p_handler->post_type_layout : 'general';

		// List Style.
		switch ( $list_style ) {
			// News List.
			case 'news-list':
					// if post contains a CAWeb News Post Handler.
				if ( 'news' === $layout ) {
					--$post_count;
					return $this->createNews( $p_handler, $post_info, $featured_image );
				}

				break;

			// Profile List.
			case 'profile-list':
				// if post contains a CAWeb Profile Post Handler.
				if ( 'profile' === $layout ) {
					--$post_count;
					return $this->createProfile( $p_handler, $post_info, $featured_image );
				}

				break;
			// Job List.
			case 'jobs-list':
					// if post contains a CAWeb Job Post Handler.
				if ( 'jobs' === $layout ) {
					--$post_count;
					return $this->createJob( $p_handler, $post_info );
				}

				break;
			// Event List.
			case 'events-list':
				// if post contains a CAWeb Event Post Handler.

				if ( 'event' === $layout ) {
					--$post_count;
					return $this->createEvent( $p_handler, $post_info, $featured_image );
				}

				break;
			// Course List.
			case 'course-list':
				// if post contains a CAWeb Course Post Handler.
				if ( 'course' === $layout ) {
					--$post_count;
					return $this->createCourse( $p_handler, $post_info, $featured_image );
				}

				break;
			// Exam List.
			case 'exams-list':
				// if post contains a CAWeb Course Post Handler.
				if ( 'exam' === $layout ) {
					--$post_count;
					return $this->createExam( $p_handler, $post_info );
				}

				break;

			// FAQs List.
			case 'faqs-list':
				// if post contains a CAWeb FAQ Post Handler.
				if ( 'faqs' === $layout ) {
					--$post_count;
					return $this->createFAQ( $p_handler, $faq_style, $post_count, $post_info );
				}

				break;

			// General List.
			case 'general-list':
					// if post contains a CAWeb News Post Handler.
					$list_types = array( 'news', 'profile', 'jobs', 'event', 'course', 'exam', 'general', 'faqs' );
				if ( in_array( $layout, $list_types, true ) ) {
					--$post_count;
					return $this->createEvent( $p_handler, $post_info, $featured_image );
				}

				break;

		} // end of list type switch statement
	}

	/**
	 * Renders Course Views
	 *
	 * @param  object $p_handler Post Module Handler Object.
	 * @param  array  $post_info Information about the Post.
	 * @param  string $featured_image Post Featured Image.
	 * @return string
	 */
	public function createCourse( $p_handler, $post_info, $featured_image ) {
		$display_excerpt = $this->props['display_excerpt'];

		$course_title  = sprintf( '<div class="title"><a href="%1$s" class="fs-5 text-decoration-dotted">%2$s</a></div>', $post_info['url'], $post_info['title'] );
		$has_thumbnail = has_post_thumbnail( $post_info['id'] );

		$thumbnail = 'on' === $featured_image && $has_thumbnail ?
			sprintf( '<div class="thumbnail float-start" >%1$s</div>', $this->caweb_get_the_post_thumbnail( $post_info['id'], array( 80, 80 ) ) ) : '';

		$excerpt = $this->caweb_get_excerpt( $p_handler->content, 20, $post_info['id'] );
		$excerpt = ! empty( $excerpt ) && 'on' === $display_excerpt ?
								sprintf( '<div class="description">%1$s</div>', $excerpt ) : '';

		$tmp = array(
			( ! empty( $p_handler->course_address ) ? $p_handler->course_address : '' ),
			( ! empty( $p_handler->course_city ) ? $p_handler->course_city : '' ),
			( ! empty( $p_handler->course_state ) ? $p_handler->course_state : '' ),
			( ! empty( $p_handler->course_zip ) ? $p_handler->course_zip : '' ),
		);

		$location = array_filter( $tmp );

		$location = ( ! empty( $location ) ?
				sprintf( '<div class="location">Location: <a href="https://www.google.com/maps/place/%1$s">%1$s</a></div>', implode( ', ', $location ) ) : '' );

		$course_date = sprintf(
			'<div class="datetime">%1$s - %2$s</div>',
			( ! empty( $p_handler->course_start_date ) ? gmdate( 'M j, Y g:i a', strtotime( $p_handler->course_start_date ) ) : '' ),
			( ! empty( $p_handler->course_end_date ) ? gmdate( 'M j, Y g:i a', strtotime( $p_handler->course_end_date ) ) : '' )
		);

		return sprintf(
			'<article class="course-item bg-light p-3 mb-3">%1$s<div class="header%6$s">%2$s%3$s</div><div class="body%6$s">%4$s%5$s</div></article>',
			$thumbnail,
			$course_title,
			$course_date,
			$excerpt,
			$location,
			! empty( $thumbnail ) ? ' ps-5 ms-5' : ''
		);
	}

	/**
	 * Renders Event View
	 *
	 * @param  object $p_handler Post Module Handler Object.
	 * @param  array  $post_info Information about the Post.
	 * @param  string $featured_image Post Featured Image.
	 * @return string
	 */
	public function createEvent( $p_handler, $post_info, $featured_image ) {
		$display_excerpt = $this->props['display_excerpt'];

		$has_thumbnail = has_post_thumbnail( $post_info['id'] );

		$thumbnail = 'on' === $featured_image && $has_thumbnail ?
			sprintf( '<div class="thumbnail float-start w-auto">%1$s</div>', $this->caweb_get_the_post_thumbnail( $post_info['id'], array( 80, 80 ) ) ) : '';

		$event_title = sprintf( '<h5 class="pb-0"><a href="%1$s" class="text-decoration-dotted" target="_blank">%2$s</a></h5>', $post_info['url'], $post_info['title'] );

		$excerpt = $this->caweb_get_excerpt( $p_handler->content, 15, $post_info['id'] );
		$excerpt = ! empty( $excerpt ) && 'on' === $display_excerpt ?
								sprintf( '<div class="description">%1$s</div>', $excerpt ) : '';

		// only display event date if layout is an event.
		// general view uses this function so we don't want the event displayed.	
		$date = ! empty( $p_handler->event_start_date ) && 'event' === $p_handler->post_type_layout ? sprintf( '<div class="start-date"><time>%1$s</time></div>', gmdate( 'D, n/j/Y g:i a', strtotime( $p_handler->event_start_date ) ) ) : '';

		$info = sprintf( '<div class="info%1$s">%2$s%3$s%4$s</div>', ! empty( $thumbnail ) ? ' ps-5 ms-5 float-none clearfix' : '', $event_title, $excerpt, $date );

		return sprintf( '<article class="event-item bg-light p-3 mb-3">%1$s%2$s</article>', $thumbnail, $info );
	}

	/**
	 * Renders Exam View
	 *
	 * @param  object $p_handler Post Module Handler Object.
	 * @param  array  $post_info Information about the Post.
	 *
	 * @return string
	 */
	public function createExam( $p_handler, $post_info ) {
		$exam_title = sprintf( '<div class="title h4 my-0"><a href="%1$s" class="text-decoration-dotted">%2$s</a></div>', $post_info['url'], $post_info['title'] );

		$pub = ( ! empty( $p_handler->exam_published_date ) ?
				sprintf( '<div class="published fst-italic text-secondary mt-2">Published: <time>%1$s</time></div>', gmdate( 'M j, Y', strtotime( $p_handler->exam_published_date ) ) ) : '' );

		$filing_date = isset( $p_handler->exam_final_filing_date_chooser ) && 'off' === $p_handler->exam_final_filing_date_chooser ?
		sprintf( '<div class="filing-date ms-auto">Final Filing Date: <time>%1$s</time></div>', ! empty( $p_handler->exam_final_filing_date ) ? $p_handler->exam_final_filing_date : 'Until Filled' ) :
		sprintf( '<div class="filing-date ms-auto">Final Filing Date: <time>%1$s</time></div>', gmdate( 'n/j/Y', strtotime( $p_handler->exam_final_filing_date_picker ) ) );

		$id     = ( ! empty( $p_handler->exam_id ) ? sprintf( '<div class="id">ID: %1$s</div>', $p_handler->exam_id ) : '' );
		$status = ( ! empty( $p_handler->exam_status ) ? sprintf( '<div class="base">Status: %1$s</div>', $p_handler->exam_status ) : '' );

		return sprintf(
			'<article class="exam-item bg-light p-3 mb-3"><div class="header d-flex flex-row">%1$s%2$s</div><div class="body">%3$s%4$s</div><div class="footer">%5$s</div></article>',
			$exam_title,
			$filing_date,
			$id,
			$status,
			$pub
		);
	}

	/**
	 * Render FAQ View
	 *
	 * @param  object $p_handler Post Module Handler Object.
	 * @param  string $style Post List FAQs style.
	 * @param  int    $post_count Counter of posts to display.
	 * @param  array  $post_info Information about the Post.
	 * @return string
	 */
	public function createFAQ( $p_handler, $style, $post_count, $post_info ) {
		$expanded = -2 === $post_count ? true : false;
		
		if ( 'toggle' === $style ) {
			return sprintf( '<li><a data-bs-target="#%5$s #accordion%1$s" class="%2$s" aria-expanded="%3$s" data-bs-toggle="collapse">%4$s</a><div id="accordion%1$s" data-bs-parent="#%5$s" class="collapse%6$s">%7$s</div></li>', 
				$post_count,
				$expanded ? '' : ' collapsed',
				"$expanded",
				$post_info['title'], 
				empty( $this->props['module_id'] ) ? 
					$this->get_module_order_class( $this->slug )
					: 
					$this->props['module_id'],
				$expanded ? ' show' : '',
				$p_handler->content 
			);
		}

		if ( 'accordion' === $style ) {

			$faqs = sprintf(
				'<div class="accordion-item">
					<h2 class="accordion-header">
						<button type="button" class="accordion-button%1$s" data-bs-toggle="collapse" data-bs-target="#%5$s #accordion%2$s" aria-controls="accordion%2$s" aria-expanded="%3$s">%4$s</button>
					</h2>
					<div id="accordion%2$s" data-bs-parent="#%5$s" class="accordion-collapse collapse%6$s">
						<div class="accordion-body">%7$s</div>
					</div>
				</div>',
				$expanded ? '' : ' collapsed',
				$post_count,
				"$expanded",
				$post_info['title'],
				empty( $this->props['module_id'] ) ? 
					$this->get_module_order_class( $this->slug )
					: 
					$this->props['module_id'],
				$expanded ? ' show' : '',
				$p_handler->content 
			);


			return $faqs;
		}
	}

	/**
	 * Renders Job View
	 *
	 * @param  object $p_handler Post Module Handler Object.
	 * @param  array  $post_info Information about the Post.
	 * @return string
	 */
	public function createJob( $p_handler, $post_info ) {
		$job_title = sprintf( '<div class="title me-auto"><a href="%1$s" class="fs-5 text-decoration-dotted">%2$s</a></div>', $post_info['url'], $post_info['title'] );

		$addr  = ( ! empty( $p_handler->job_agency_address ) ? $p_handler->job_agency_address : '' );
		$city  = ( ! empty( $p_handler->job_agency_city ) ? $p_handler->job_agency_city : '' );
		$state = ( ! empty( $p_handler->job_agency_state ) ? $p_handler->job_agency_state : '' );
		$zip   = ( ! empty( $p_handler->job_agency_zip ) ? $p_handler->job_agency_zip : '' );

		$location = array_filter( array( $addr, $city, $state, $zip ) );

		$location = ( ! empty( $location ) ? sprintf( '<div class="location">Location: %1$s</div>', implode( ', ', $location ) ) : '' );

		$filing_date = '';
		if ( ! empty( $p_handler->job_final_filing_date_chooser ) && 'on' === $p_handler->job_final_filing_date_chooser ) {
			if ( isset( $p_handler->job_final_filing_date_picker ) && ! empty( $p_handler->job_final_filing_date_picker ) ) {
				$job_final_filing_date_picker = gmdate( 'n/j/Y', strtotime( $p_handler->job_final_filing_date_picker ) );
				$filing_date                  = sprintf( 'Final Filing Date:<time>%1$s</time><br />', $job_final_filing_date_picker );
			}
		} else {
			$filing_date = sprintf(
				'Final Filing Date: %1$s<br />',
				( ! empty( $p_handler->job_final_filing_date ) ? $p_handler->job_final_filing_date : 'Until Filled' )
			);
		}

		$job_hours = ( ! empty( $p_handler->job_hours ) ? sprintf( '<div class="schedule">%1$s</div>', $p_handler->job_hours ) : '' );

		$job_salary_min = ( ! empty( $p_handler->job_salary_min ) ? $this->caweb_is_money( $p_handler->job_salary_min, '$0.00' ) : '$0.00' );
		$job_salary_max = ( ! empty( $p_handler->job_salary_max ) ? $this->caweb_is_money( $p_handler->job_salary_max, '$0.00' ) : '$0.00' );

		$job_salary_max = sprintf( '  &mdash; %1$s', $job_salary_max );

		$job_salary = '';
		$job_salary = ( 'on' === $p_handler->show_job_salary ?
		sprintf( '<div class="salary-range">Salary Range: %1$s%2$s</div>', $job_salary_min, $job_salary_max ) : '' );

		$job_position = '';
		if ( ! empty( $p_handler->job_position_number ) && ! empty( $p_handler->job_rpa_number ) ) {
			$job_position = sprintf( 'Position Number: %1$s, RPA #%2$s', $p_handler->job_position_number, $p_handler->job_rpa_number );
		} elseif ( ! empty( $p_handler->job_position_number ) ) {
			$job_position = sprintf( 'Position Number: %1$s', $p_handler->job_position_number );
		} elseif ( ! empty( $p_handler->job_rpa_number ) ) {
			$job_position = sprintf( 'RPA #%1$s', $p_handler->job_rpa_number );
		}

		$position_type = ( ! empty( $job_position ) ? sprintf( '<div class="position-number">%1$s</div>', $job_position ) : '' );

		return sprintf(
			'<article class="job-item bg-light p-3 mb-3"><div class="header d-flex flex-row">%1$s%2$s</div><div class="body">%3$s%4$s%5$s%6$s</div></article>',
			$job_title,
			$filing_date,
			$position_type,
			$job_hours,
			$job_salary,
			$location
		);
	}

	/**
	 * Renders News View
	 *
	 * @param  object $p_handler Post Module Handler Object.
	 * @param  array  $post_info Information about the Post.
	 * @param  string $featured_image Post Featured Image.
	 * @return string
	 */
	public function createNews( $p_handler, $post_info, $featured_image ) {
		$display_excerpt = $this->props['display_excerpt'];

		$has_thumbnail = has_post_thumbnail( $post_info['id'] );

		$news_title = sprintf( '<div class="headline"><a href="%1$s">%2$s</a></div>', $post_info['url'], $post_info['title'] );
		if ( ! $has_thumbnail || 'off' === $featured_image ) {
			$image = '';
		} else {
			$this->add_classname( 'indent' );
			$thumbnail = $this->caweb_get_the_post_thumbnail( $post_info['id'], array( 150, 100 ) );
			$image     = 'on' === $featured_image ? sprintf( '<div class="thumbnail float-start">%1$s</div>', $thumbnail ) : '';
		}

		$excerpt = $this->caweb_get_excerpt( $p_handler->content, 30, $post_info['id'] );
		$excerpt = ! empty( $excerpt ) && 'on' === $display_excerpt ?
						sprintf( '<div class="description"><p>%1$s</p></div>', $excerpt ) : '';

		$author = ( ! empty( $p_handler->news_author ) ?
						sprintf( 'Author: %1$s', $p_handler->news_author ) : '' );

		$date = ( ! empty( $p_handler->news_publish_date ) ? gmdate( 'M j, Y', strtotime( $p_handler->news_publish_date ) ) : '' );

		$date = ( ! empty( $date ) ? sprintf( 'Published: <time>%1$s</time>', $date ) : '' );

		$element = ( ! empty( $author ) || ! empty( $date ) ?
					sprintf( '<div class="published">%1$s</div>', implode( '<br />', array_filter( array( $author, $date ) ) ) ) : '' );

		return sprintf( '<article class="news-item bg-light p-3 mb-3">%1$s<div class="info clearfix">%2$s%3$s%4$s</div></article>', $image, $news_title, $excerpt, $element );
	}

	/**
	 * Renders Profile View
	 *
	 * @param  object $p_handler Post Module Handler Object.
	 * @param  array  $post_info Information about the Post.
	 * @param  string $featured_image Post Featured Image.
	 * @return string
	 */
	public function createProfile( $p_handler, $post_info, $featured_image ) {
		$no_thumbnail = ! has_post_thumbnail( $post_info['id'] ) || 'off' === $featured_image ? true : false;

		$thumbnail = 'on' === $featured_image && ! $no_thumbnail ?
			sprintf( '<div class="thumbnail float-start">%1$s</div>', $this->caweb_get_the_post_thumbnail( $post_info['id'], array( 75, 75 ) ) ) : '';

		$t = sprintf(
			'%1$s%2$s%3$s',
			( ! empty( $p_handler->profile_name_prefix ) ? sprintf( '%1$s ', $p_handler->profile_name_prefix ) : '' ),
			( ! empty( $p_handler->profile_name ) ? $p_handler->profile_name : '' ),
			( ! empty( $p_handler->profile_career_title ) ? sprintf( ', %1$s', $p_handler->profile_career_title ) : '' )
		);

		$profile_title = sprintf( '<div class="header%1$s"><div class="title"><a href="%2$s" class="text-decoration-none">%3$s</a></div></div>', $no_thumbnail ? ' ms-0' : ' ms-5 ps-5', $post_info['url'], $t );

		$position = ( ! empty( $p_handler->profile_career_position ) ?
						sprintf( '%1$s', $p_handler->profile_career_position ) : '' );
		$line1    = ( ! empty( $p_handler->profile_career_line_1 ) ?
						sprintf( '%1$s', $p_handler->profile_career_line_1 ) : '' );
		$line2    = ( ! empty( $p_handler->profile_career_line_2 ) ?
						sprintf( '%1$s', $p_handler->profile_career_line_2 ) : '' );
		$line3    = ( ! empty( $p_handler->profile_career_line_3 ) ?
						sprintf( '%1$s', $p_handler->profile_career_line_3 ) : '' );

		$fields = array_filter( array( $position, $line1, $line2, $line3 ) );

		return sprintf(
			'<article class="profile-item bg-light p-3 mb-3">%1$s%2$s<div class="body%3$s"><p>%4$s</p></div></article>',
			$thumbnail,
			$profile_title,
			$no_thumbnail ? ' ms-0' : ' ms-5 ps-5',
			! empty( $fields ) ? implode( '<br />', $fields ) : '<br />'
		);
	}
}
new CAWeb_Module_Post_List();
