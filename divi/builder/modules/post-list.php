<?php
/*
Divi Icon Field Names
make sure the field name is one of the following:
'font_icon', 'button_one_icon', 'button_two_icon',  'button_icon'
 */

class ET_Builder_Module_CA_Post_List extends ET_Builder_CAWeb_Module {
    function init() {
        $this->name = esc_html__('Post List', 'et_builder');
        $this->slug = 'et_pb_ca_post_list';

        $this->main_css_element = '%%order_class%%';

        $this->settings_modal_toggles = array(
            'general' => array(
                'toggles' => array(
                    'header' => esc_html__('Header', 'et_builder'),
                    'style'  => esc_html__('Style', 'et_builder'),
                ),
            ),
            'advanced' => array(
                'toggles' => array(
                    'header' => esc_html__('Header', 'et_builder'),
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

        do_action('caweb_post_list_module_clear_cache');
    }
    function get_fields() {
        $general_fields = array(
            'title' => array(
                'label'       => esc_html__('Title', 'et_builder'),
                'type'        => 'text',
                'description' => esc_html__('Enter a title for the Post List.', 'et_builder'),
                'tab_slug'			=> 'general',
                'toggle_slug'			=> 'header',
            ),
            'style' => array(
                'label'             => esc_html__('Content Type', 'et_builder'),
                'type'              => 'select',
                'option_category'   => 'configuration',
                'options'           => array(
                    'course-list' => esc_html__('Course List', 'et_builder'),
                    'events-list'  => esc_html__('Event List', 'et_builder'),
                    'exams-list'  => esc_html__('Exam List', 'et_builder'),
                    'faqs-list'  => esc_html__('FAQs List', 'et_builder'),
                    'general-list'  => esc_html__('General List', 'et_builder'),
                    'jobs-list'  => esc_html__('Jobs List', 'et_builder'),
                    'news-list'  => esc_html__('News List', 'et_builder'),
                    'profile-list'  => esc_html__('Profile List', 'et_builder'),
                ),
                'description'       => esc_html__('Here you can select the various list styles.', 'et_builder'),
                'tab_slug'			=> 'general',
                'toggle_slug'			=> 'style',
            ),
            'faq_style' => array(
                'label'             => esc_html__('Accordion Style', 'et_builder'),
                'type'              => 'select',
                'option_category'   => 'configuration',
                'options'           => array(
                    'accordion' => esc_html__('Accordion', 'et_builder'),
                    'toggle'  => esc_html__('Toggle', 'et_builder'),
                ),
                'description'       => esc_html__('Here you can select the various list styles.', 'et_builder'),
                'show_if' => array('style' => 'faqs-list'),
                'tab_slug'			=> 'general',
                'toggle_slug'			=> 'style',
            ),
            'posts_number' => array(
                'label'             => esc_html__('Posts Number', 'et_builder'),
                'type'              => 'text',
                'option_category'   => 'configuration',
                'description'       => esc_html__('Choose how many posts you would like to display in the list. Default is all.', 'et_builder'),
                'tab_slug'			=> 'general',
                'toggle_slug'				=> 'style',
            ),
            'view_featured_image' => array(
                'label'           => esc_html__('Featured Image', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'on'  => esc_html__('Yes', 'et_builder'),
                    'off' => esc_html__('No', 'et_builder'),
                ),
                'show_if_not' => array('style' => 'faqs-list'),
                'tab_slug'			=> 'general',
                'toggle_slug'			=> 'style',
            ),
            'all_categories_button' => array(
                'label'           => esc_html__('Include All Categories', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'on'  => esc_html__('Yes', 'et_builder'),
                    'off' => esc_html__('No', 'et_builder'),
                ),
                'show_if' => array('style' => 'general-list'),
                'tab_slug'			=> 'general',
                'toggle_slug'			=> 'style',
            ),
            'include_categories' => array(
                'label'            => esc_html__('Select Categories', 'et_builder'),
                'renderer'         => 'categories',
                'option_category'  => 'basic_option',
                'renderer_options' => array(
                    'use_terms' => false,
                ),
                'description'      => esc_html__('Choose which categories you would like to include in the list.', 'et_builder'),
                'show_if' => array('all_categories_button' => 'off'),
                'tab_slug'			=> 'general',
                'toggle_slug'			=> 'style',
            ),
            'all_tags_button' => array(
                'label'           => esc_html__('Include All Tags', 'et_builder'),
                'type'            => 'yes_no_button',
                'option_category' => 'configuration',
                'options'         => array(
                    'on'  => esc_html__('Yes', 'et_builder'),
                    'off' => esc_html__('No', 'et_builder'),
                ),
                'tab_slug'			=> 'general',
                'toggle_slug'			=> 'style',
            ),
            'include_tags' => array(
                'label'            => esc_html__('Tags', 'et_builder'),
                'renderer'         => 'et_builder_include_tags_option',
                'option_category'  => 'basic_option',
                'renderer_options' => array(
                    'use_terms' => false,
                ),
                'description'      => esc_html__('Choose which tags you would like to include in the list.', 'et_builder'),
                'show_if' => array('all_tags_button' => 'off'),
                'tab_slug'			=> 'general',
                'toggle_slug'			=> 'style',
            ),
            'orderby' => array(
                'label'             => esc_html__('Order By', 'et_builder'),
                'type'              => 'select',
                'option_category'   => 'configuration',
                'options'           => array(
                    'date_desc'  => esc_html__('Date: new to old', 'et_builder'),
                    'date_asc'   => esc_html__('Date: old to new', 'et_builder'),
                    'title_asc'  => esc_html__('Title: a-z', 'et_builder'),
                    'title_desc' => esc_html__('Title: z-a', 'et_builder'),
                    'rand'       => esc_html__('Random', 'et_builder'),
                ),
                'default' => 'date_desc',
                'description'       => esc_html__('Here you can adjust the order in which posts are displayed.', 'et_builder'),
                'tab_slug'			=> 'general',
                'toggle_slug'			=> 'style',
            ),
            'admin_label' => array(
                'label'       => esc_html__('Admin Label', 'et_builder'),
                'type'        => 'text',
                'description' => esc_html__('This will change the label of the module in the builder for easy identification.', 'et_builder'),
                'tab_slug'			=> 'general',
                'toggle_slug'	=> 'admin_label',
            ),
        );

        $design_fields = array(
            'title_size' => array(
                'label'       => esc_html__('Title Size', 'et_builder'),
                'type'        => 'select',
                'option_category'   => 'configuration',
                'options'           => array(
                    'h-1' => esc_html__('H1 - Large', 'et_builder'),
                    'h-2' => esc_html__('H2 - Medium', 'et_builder'),
                    'h-3' => esc_html__('H3 - Small', 'et_builder'),
                ),
                'description' => esc_html__('Select the size for the title of this module.', 'et_builder'),
                'tab_slug'			=> 'advanced',
                'toggle_slug'			=> 'header',
            ),
        );

        $advanced_fields = array(
        );

        return array_merge($general_fields, $design_fields, $advanced_fields);
    }
    function render($unprocessed_props, $content = null, $render_slug) {
        $module_class         = $this->props['module_class'];
        $list_title            = $this->props['title'];
        $title_size    = $this->props['title_size'];
        $style            = $this->props['style'];
        $faq_style            = $this->props['faq_style'];
        $posts_number            = $this->props['posts_number'];
        $view_featured_image            = $this->props['view_featured_image'];
        $all_categories_button            = $this->props['all_categories_button'];
        $include_categories      = $this->props['include_categories'];
        $all_tags_button            = $this->props['all_tags_button'];
        $include_tags      = $this->props['include_tags'];
        $orderby                 = $this->props['orderby'];

        $order = '';

        $cat_array = array();

        $tag_array = array();

        switch ($orderby) {
			case 'date_desc':
					$orderby = 'date';
					$order = 'DESC';

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

        if ("on" == $all_categories_button) {
            $cat_array = get_terms('category', array('orderby' => $orderby, 'hide_empty' => 0, 'fields' => 'ids'));
        } elseif ("" !== $include_categories) {
            $cat_array = $include_categories;
        }

        if ("on" == $all_tags_button) {
            $tag_array = array();
        //$tag_array = get_tags( array( 'fields' => 'names' ) );
        } elseif ("" !== $include_tags) {
            $tag_array =	$include_tags;
        }

        $posts_number = ( ! empty($posts_number) ? $posts_number : -1);

        $all_posts = caweb_return_posts($cat_array, $tag_array, -1, $orderby, $order);
        
        setlocale(LC_MONETARY, 'en_US.UTF-8');

        if ( ! empty($list_title)) {
            if ('h-1' == $title_size) {
                $list_title = sprintf('<h1>%1$s</h1>', $list_title);
            } elseif ('h-2' == $title_size) {
                $list_title = sprintf('<h2>%1$s</h2>', $list_title);
            } elseif ('h-3' == $title_size) {
                $list_title = sprintf('<h3>%1$s</h3>', $list_title);
            }
        }

        $faqs = '';
        $output = '';
        global $faq_accordion_count;

        $class = sprintf(' class="%1$s %2$s" ', $this->module_classname($render_slug), $style);

        foreach ($all_posts as $a=>$p) {
            if ($posts_number !== -1 && 0 == $posts_number) {
                break;
            }

            // Get the CAWeb Post Handler
            $post_id = $p->ID;
            $title = $p->post_title;
            $url = get_permalink($p->ID);
            $content = $p->post_content;

            $post_content_handler = caweb_get_shortcode_from_content($content, 'et_pb_ca_post_handler');

            // if the hanlder is an object, construct the appropriate list item
            if (is_object($post_content_handler)) {
                if("faqs-list" == $style){
                    $faqs .= $this->createListView($style, $posts_number, $post_content_handler, $post_id, $url, $title, $view_featured_image, $faq_style, $faq_accordion_count);
                    
                    if ("accordion" == $faq_style) 
                        $faq_accordion_count++;

                }else{
                    $output .= $this->createListView($style, $posts_number, $post_content_handler, $post_id, $url, $title, $view_featured_image, $faq_style, $faq_accordion_count);
                }

                $posts_number--;

            } // end of if is_object check
        }

        if (! empty($faqs)) {
            if ("toggle" == $faq_style) {
                $output = sprintf('<ul class="accordion-list list-overstated" role="tablist" >%1$s</ul>', $faqs );
            } else {
                $output = $faqs;
            }
        }

        $output = sprintf('<div%1$s%2$s>%3$s%4$s</div>', $this->module_id(), $class, ( ! empty($list_title) ? $list_title : ''), $output);

        $faq_accordion_count = 0;

        return $output;
    }

    function createListView($listStyle, $postCount, $pHandler, $pID, $pURL, $pTitle, $featured_image = "off", $faqStyle = "", $faqCount = 0){
        $layout = $pHandler->post_type_layout;

        // List Style
        switch ($listStyle) {
            // News List
            case "news-list":
                    // if post contains a CAWeb News Post Handler
                    if ("news" == $layout) {
                        return $this->createNews($pHandler, $pID, $pURL, $pTitle, $featured_image);
                    }

                    break;

            // Profile List
            case "profile-list":
            // if post contains a CAWeb Profile Post Handler
                if ("profile" == $layout) {
                    return	$this->createProfile($pHandler, $pID, $pURL, $featured_image);
                }

                break;
            // Job List
            case "jobs-list":
                    // if post contains a CAWeb Job Post Handler
                    if ("jobs" == $layout) {
                        return $this->createJob($pHandler, $pURL, $pTitle);
                    }

                    break;
            // Event List
            case "events-list":
                // if post contains a CAWeb Event Post Handler
                    if ("event" == $layout) {
                        return $this->createEvent($pHandler, $pID, $pURL, $pTitle, $featured_image);
                    }

                    break;
            // Course List
            case "course-list":
                // if post contains a CAWeb Course Post Handler
                    if ("course" == $layout) {
                        return $this->createCourse($pHandler, $pID, $pURL, $pTitle, $featured_image);
                    }

                    break;
            // Exam List
            case "exams-list":
                // if post contains a CAWeb Course Post Handler
                    if ("exam" == $layout) {
                        return $this->createExam($pHandler, $pURL, $pTitle);
                    }

                    break;

            // FAQs List
            case "faqs-list":
                // if post contains a CAWeb FAQ Post Handler
                if ("faqs" == $layout) {
                    return $this->createFAQ($pHandler, $faqStyle, $postCount, $pTitle, $faqCount);
                }

                break;

            // General List
            case "general-list":
                    // if post contains a CAWeb News Post Handler
                    $list_types = array('news', 'profile', 'jobs', 'event', 'course', 'exam', 'general', 'faqs');
                    if (in_array($layout, $list_types)) {
                        
                        return $this->createGeneral($pHandler, $pID, $pURL, $pTitle, $featured_image);
                    }

                    break;

        } // end of list type switch statement
    }

    function createCourse($cHandler, $pID, $pURL, $pTitle, $featured_image){
        $course_title = sprintf('<div class="title"><a href="%1$s">%2$s</a></div>', $pURL, $pTitle);
        $hasThumbnail = has_post_thumbnail($pID);

        $image= "on" == $featured_image && $hasThumbnail ? 
            sprintf('<div class="thumbnail" >%1$s</div>', caweb_get_the_post_thumbnail($pID, array(70, 70))) : '';

        $excerpt = caweb_get_excerpt($cHandler->content, 20);
        $excerpt = ( ! empty($excerpt) ?
                                sprintf('<div class="description">%1$s</div>', $excerpt) : '');

        $tmp = array(( ! empty($cHandler->course_address) ? $cHandler->course_address : ''),
            ( ! empty($cHandler->course_city) ? $cHandler->course_city : ''),
            ( ! empty($cHandler->course_state) ? $cHandler->course_state : ''),
            ( ! empty($cHandler->course_zip) ? $cHandler->course_zip : ''));

        $location = array_filter($tmp);

        $location = ( ! empty($location) ?
                sprintf('<div class="location">Location: <a href="https://www.google.com/maps/place/%1$s">%1$s</a></div>', implode(", ", $location)) : '');

        $course_date = sprintf('<div class="datetime">%1$s - %2$s</div>',
        ( ! empty($cHandler->course_start_date) ? gmdate('M j, Y g:i a', strtotime($cHandler->course_start_date)) : ''),
        ( ! empty($cHandler->course_end_date) ? gmdate('M j, Y g:i a', strtotime($cHandler->course_end_date)) : ''));

        return sprintf('<article class="course-item">%1$s<div class="header">%2$s%3$s</div><div class="body">%4$s%5$s</div></article>',
                    $image, $course_title, $course_date, $excerpt, $location );

    }

    function createEvent($cHandler, $pID, $pURL, $pTitle, $featured_image){
        $hasThumbnail = has_post_thumbnail($pID);

        $thumbnail = "on" == $featured_image ? 
            sprintf('<div class="thumbnail">%1$s</div>', caweb_get_the_post_thumbnail($pID, array(150, 100))) : '';

        $event_title = sprintf('<h5><a href="%1$s" class="title" target="_blank">%2$s</a></h5>', $pURL, $pTitle);

        $excerpt = caweb_get_excerpt($cHandler->content, 15);
        $excerpt = ( ! empty($excerpt) ?
                                sprintf('<div class="description">%1$s</div>', $excerpt) : '');

        $date = ( ! empty($cHandler->event_start_date) ? sprintf('<div class="start-date"><time>%1$s</time></div>', gmdate('D, n/j/Y g:i a', strtotime($cHandler->event_start_date))) : '');

        $info = sprintf('<div class="info">%1$s%2$s%3$s</div>', $event_title, $excerpt, $date);

        return sprintf('<article class="event-item">%1$s%2$s</article>', $thumbnail, $info);

    }
    
    function createExam($cHandler,$pURL, $pTitle){
        $exam_title = sprintf('<div class="title"><a href="%1$s">%2$s</a></div>', $pURL, $pTitle);

		$pub = ( ! empty($cHandler->exam_published_date) ?
                sprintf('<div class="published">Published: <time>%1$s</time></div>', gmdate('M j, Y', strtotime($cHandler->exam_published_date))) : '');

		$filing_date = ( ! empty($cHandler->exam_final_filing_date_chooser) && "on" == $cHandler->exam_final_filing_date_chooser ?
                        sprintf('<div class="filing-date">Final Filing Date: <time>%1$s</time></div>', gmdate('n/j/Y', strtotime($cHandler->exam_final_filing_date_picker))) :
                        sprintf('<div class="filing-date">Final Filing Date: <time>%1$s</time></div>',
                            ( ! empty($cHandler->exam_final_filing_date) ? $cHandler->exam_final_filing_date : 'Until Filled')));

		$id = ( ! empty($cHandler->exam_id) ? sprintf('<div class="id">ID: %1$s</div>', $cHandler->exam_id) : '');
		$status = ( ! empty($cHandler->exam_status) ? sprintf('<div class="base">Status: %1$s</div>', $cHandler->exam_status) : '');

        return sprintf('<article class="exam-item"><div class="header">%1$s%2$s</div><div class="body">%3$s%4$s</div><div class="footer">%5$s</div></article>',
        $exam_title, $filing_date, $id, $status, $pub);

    }

    function createFAQ($cHandler, $style, $postCount, $pTitle, $faqCount){
        if ("toggle" == $style) {
            return sprintf('<li><a class="toggle">%1$s</a><div class="description">%2$s</div></li>', $pTitle, $cHandler->content);
        }

        if ("accordion" == $style) {
            $open_faq = empty($faqCount) || 0 === $faqCount;

            $faqs = sprintf('<div class="panel panel-default et_pb_toggle et_pb_accordion_item_%3$s %4$s"><div class="et_pb_toggle_title panel-heading"><h4 class="panel-title"><a>%2$s</a></h4></div>',
                                $postCount, $pTitle, ( ! empty($faqCount) ? $faqCount : 0), ($open_faq ? ' et_pb_toggle_open' : ' et_pb_toggle_close'));

            $faqs .= sprintf('<div class="et_pb_toggle_content clearfix panel-body">%1$s</div></div>', $cHandler->content);

            return $faqs;
        }
    }

    function createGeneral($cHandler, $pID, $pURL, $pTitle, $featured_image){
        $image= "on" == $featured_image ? sprintf('<div class="thumbnail" style="width: 150px; height: 100px; margin-right:15px; float:left;">%1$s</div>', caweb_get_the_post_thumbnail($pID, array(150, 100))) : '';

        $general_title = sprintf('<h5 style="padding-bottom: 0!important;"><a href="%1$s" class="title" style="color: #428bca; background: none;">%2$s</a></h5>', $pURL, $pTitle);

        $excerpt = caweb_get_excerpt($cHandler->content, 45, $pID);
        $excerpt = sprintf('<div class="description" %1$s>%2$s</div>', ("on" == $featured_image ? 'style="margin-left: 165px;"' : ''), $excerpt );

        return sprintf('<article class="event-item" style="padding-left: 0px;">%1$s%2$s%3$s</article>', $image, $general_title, $excerpt);

    }

    function createJob($cHandler, $pURL, $pTitle){
        $job_title = sprintf('<div class="title"><a href="%1$s">%2$s</a></div>', $pURL, $pTitle);

        $addr = ( ! empty($cHandler->job_agency_address) ? $cHandler->job_agency_address : '');
        $city = ( ! empty($cHandler->job_agency_city) ? $cHandler->job_agency_city : '');
        $state = ( ! empty($cHandler->job_agency_state) ? $cHandler->job_agency_state : '');
        $zip = ( ! empty($cHandler->job_agency_zip) ? $cHandler->job_agency_zip : '');

        $location = array_filter(array($addr, $city, $state, $zip));

        $location = ( ! empty($location) ? sprintf('<div class="location">Location: %1$s</div>', implode(", ", $location)) : '');

        $filing_date = '';
        if ( ! empty($cHandler->job_final_filing_date_chooser) && "on" == $cHandler->job_final_filing_date_chooser  ) {
            if( isset($cHandler->job_final_filing_date_picker) && ! empty($cHandler->job_final_filing_date_picker) ){
                $job_final_filing_date_picker = gmdate('n/j/Y', strtotime($cHandler->job_final_filing_date_picker));
                $filing_date = sprintf('Final Filing Date:<time>%1$s</time><br />', $job_final_filing_date_picker);
            }
        } else {
            $filing_date = sprintf('Final Filing Date: %1$s<br />',
         ( ! empty($cHandler->job_final_filing_date) ? $cHandler->job_final_filing_date : 'Until Filled'));
        }

        $job_hours =   ( ! empty($cHandler->job_hours) ? sprintf('<div class="schedule">%1$s</div>', $cHandler->job_hours) : '');

        $job_salary_min    = ( ! empty($cHandler->job_salary_min) ? caweb_is_money($cHandler->job_salary_min, "$0.00") : "$0.00");
        $job_salary_max    = ( ! empty($cHandler->job_salary_max) ? caweb_is_money($cHandler->job_salary_max, "$0.00") : "$0.00");

        $job_salary_max = sprintf('  &mdash; %1$s', $job_salary_max);

        $job_salary = '';
        $job_salary    = ("on" == $cHandler->show_job_salary ?
        sprintf('<div class="salary-range">Salary Range: %1$s%2$s</div>', $job_salary_min, $job_salary_max) : '');

        $job_position = '';
        if ( ! empty($cHandler->job_position_number) && ! empty($cHandler->job_rpa_number)) {
            $job_position    = sprintf('Position Number: %1$s, RPA #%2$s', $cHandler->job_position_number, $cHandler->job_rpa_number);
        } elseif ( ! empty($cHandler->job_position_number)) {
            $job_position    = sprintf('Position Number: %1$s', $cHandler->job_position_number);
        } elseif ( ! empty($cHandler->job_rpa_number)) {
            $job_position    = sprintf('RPA #%1$s', $cHandler->job_rpa_number);
        }

        $position_type= ( ! empty($job_position) ? sprintf('<div class="position-number">%1$s</div>', $job_position) : '');

        return sprintf('<article class="job-item"><div class="header">%1$s%2$s</div><div class="body">%3$s%4$s%5$s%6$s</div></article>',
                    $job_title, $filing_date, $position_type, $job_hours, $job_salary, $location );
    }

    function createNews($cHandler, $pID, $pURL, $pTitle, $featured_image){
        $hasThumbnail = has_post_thumbnail($pID);

        $news_title = sprintf('<div class="headline"><a href="%1$s">%2$s</a></div>', $pURL, $pTitle);
        if ( ! $hasThumbnail ||  "off" == $featured_image) {
            $image = '';
        } else {
            $this->add_classname('indent');
            $thumbnail = caweb_get_the_post_thumbnail($pID, array(150, 100));
            $image= "on" == $featured_image ? sprintf('<div class="thumbnail">%1$s</div>', $thumbnail) : '';
            
        }

        $excerpt = caweb_get_excerpt($cHandler->content, 30, $pID);
        $excerpt = ( ! empty($excerpt) ?
                        sprintf('<div class="description"><p>%1$s</p></div>', $excerpt) : '');

        $author = ( ! empty($cHandler->news_author) ?
                        sprintf('Author: %1$s', $cHandler->news_author) : '');

        $date =( ! empty($cHandler->news_publish_date) ? gmdate('M j, Y', strtotime($cHandler->news_publish_date)) : '');

        $date = ( ! empty($date) ? sprintf('Published: <time>%1$s</time>', $date) : '');

        $element = ( ! empty($author) || ! empty($date) ?
                    sprintf('<div class="published">%1$s</div>', implode('<br />', array_filter(array($author, $date)))) : '');

        return sprintf('<article class="news-item">%1$s<div class="info">%2$s%3$s%4$s</div></article>', $image, $news_title, $excerpt, $element);

    }

    function createProfile($cHandler, $pID, $pURL, $featured_image){
        $hasThumbnail = has_post_thumbnail($pID);

        if ( ! $hasThumbnail || "off" == $featured_image) {
            $this->add_classname('no-thumbnail');
        }

        $thumbnail = "on" == $featured_image && $hasThumbnail ? 
            sprintf('<div class="thumbnail">%1$s</div>', caweb_get_the_post_thumbnail($pID, array(75, 75))) : '';

        $t = sprintf('%1$s%2$s%3$s',
     ( ! empty($cHandler->profile_name_prefix) ? sprintf('%1$s ', $cHandler->profile_name_prefix) : ''),
     ( ! empty($cHandler->profile_name) ? $cHandler->profile_name : ''),
     ( ! empty($cHandler->profile_career_title) ? sprintf(', %1$s', $cHandler->profile_career_title) : ''));

        $profile_title = sprintf('<div class="header"><div class="title"><a href="%1$s">%2$s</a></div></div>', $pURL, $t);

        $position = ( ! empty($cHandler->profile_career_position) ?
                        sprintf('%1$s', $cHandler->profile_career_position) : '');
        $line1 = ( ! empty($cHandler->profile_career_line_1) ?
                        sprintf('%1$s', $cHandler->profile_career_line_1) : '');
        $line2 = ( ! empty($cHandler->profile_career_line_2) ?
                        sprintf('%1$s', $cHandler->profile_career_line_2) : '');
        $line3 = ( ! empty($cHandler->profile_career_line_3) ?
                        sprintf('%1$s', $cHandler->profile_career_line_3) : '');

        $fields = array_filter(array($position, $line1, $line2, $line3));

        return sprintf('<article class="profile-item%1$s">%2$s%3$s<div class="body"><p>%4$s</p></div></article>', 
            empty($thumbnail) ? ' no-thumbnail' : '', $thumbnail, $profile_title, ( ! empty($fields) ? implode('<br />', $fields) : '<br />') );


    }
}
new ET_Builder_Module_CA_Post_List;

?>
