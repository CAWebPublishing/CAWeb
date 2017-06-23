<?php

/*

	This function is only used with the predefined layouts

	to extract certain fields embedded into the layouts and

	update post custom meta

	Mode Explanation

	0 = (Default) Strip everything from the post content except the value of the embedded_attr

	1 = Strip everything from the post content except the content from the module of the embedded_attr

	2 = Same as number 1, except it returns an excerpt of at least 45 words

	3 = Same as 0, except it will return the value of the swapped_attr

*/

function retrieve_layout_attr($content, $embedded_attr = "", $mode = 0, $swapped_attr = "", $num_count = 45){

	$val = '';

	if("" != strpos($content, $embedded_attr) ){

		switch($mode){

			case 0:

			$val = substr($content, strpos($content, $embedded_attr)+ strlen( $embedded_attr) +2);

			$val = substr($val , 0, strpos($val ,'"'));

			break;

			case 1:

			case 2:

				$val = substr($content, strpos($content, $embedded_attr));

				$val = substr($val , strpos($val, ']') + 1);

				$val = trim(substr($val , 0, strpos($val ,'[')));

				if(2 == $mode && str_word_count($val) > $num_count){

					$words =  explode(" ", $val);

					$word_limit = array_splice($words,0, $num_count);

					$val =  implode(" ", $word_limit) . '...';

				}

			break;

			case 3:

			$val = substr($content, strpos($content, $embedded_attr) +  3 + strlen( $embedded_attr) * 2);

			$val =substr($val, strpos($val, $swapped_attr ) +  strlen( $swapped_attr) + 2)  ;

			$val = substr($val , 0, strpos($val ,'"'));

			break;

		}

	}

	return $val;

}

function ca_save_post_list_meta($post_id, $post){

	$cats = wp_get_post_categories($post_id);

	$content = $post->post_content;

	$layout = caweb_get_shortcode_from_content($content, 'et_pb_ca_post_handler');

	$layout = ( isset( $layout->post_type_layout) ? $layout->post_type_layout : '' );


	switch( $layout  ){

		case "course":
			array_push($cats , get_cat_ID('Courses'));
			array_push($cats , get_cat_ID('Content Types'));
			break;

		case "event":
			array_push($cats , get_cat_ID('Events'));
			array_push($cats , get_cat_ID('Content Types'));
			break;

		case "exam":
			array_push($cats , get_cat_ID('Exams'));
			array_push($cats , get_cat_ID('Content Types'));
			break;

		case "jobs":
			array_push($cats , get_cat_ID('Jobs'));
			array_push($cats , get_cat_ID('Content Types'));
			break;

		case "news":
			array_push($cats , get_cat_ID('News'));
			array_push($cats , get_cat_ID('Content Types'));
			break;

		case "profile":
			array_push($cats , get_cat_ID('Profiles'));
			array_push($cats , get_cat_ID('Content Types'));
			break;
	}

	wp_set_object_terms( $post_id, $cats , 'category');

}

add_action( 'save_post', 'ca_save_post_list_meta', 10, 2 );

function caweb_predefined_layouts() {

 	// delete default layouts

	// delete all default layouts w/o new built_for meta

	et_pb_delete_predefined_layouts();

	// delete all default layouts w/ new built_for meta

	et_pb_delete_predefined_layouts('post');

	et_pb_delete_predefined_layouts('page');

	caweb_get_layouts();

}

//add_action('admin_init', 'caweb_predefined_layouts', 15);
//add_filter('et_pb_get_predefined_layouts', 'caweb_get_layouts' );
/* Collect CA Predefined Layouts

	Sample structure for layouts

$ca_layouts[] = array(

'name' => 'Layout Name',

'content' => <<<EOT

Layout Content

EOT

);

*/

function caweb_get_layouts(){

	
$ca_layouts = array();

	$ca_layouts[] = array(

'name' => 'Profile Detail',

'content' => <<<EOT

[et_pb_section admin_label="section"][et_pb_row admin_label="row"][et_pb_column type="4_4"][et_pb_ca_post_handler admin_label="CAWeb Profile Fields" post_type_layout="profile" show_featured_event_image="off" show_event_presenter="off"

show_event_address="off" event_registration_type="free" show_event_map="off" exam_status="open" exam_type="web" show_about_agency="off" show_job_salary="off" show_job_apply_to="off" show_job_questions="off" show_featured_news_image="off"

show_featured_profile_image="off" show_featured_course_image="off" show_course_presenter="off" show_course_address="off" course_registration_type="free" show_course_map="off" show_tags_button="off" show_categories_button="off"]

[/et_pb_ca_post_handler][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);

$ca_layouts[] = array(

'name' => 'News Detail',

'content' => <<<EOT

[et_pb_section admin_label="section"][et_pb_row admin_label="row"][et_pb_column type="4_4"][et_pb_ca_post_handler admin_label="CAWeb News Fields" post_type_layout="news"] [/et_pb_ca_post_handler][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);
	
$ca_layouts[] = array(

'name' => 'Job Detail',

'content' => <<<EOT

[et_pb_section admin_label="section"][et_pb_row admin_label="row"][et_pb_column type="4_4"][et_pb_ca_post_handler admin_label="CAWeb Job Fields" post_type_layout="jobs"] [/et_pb_ca_post_handler][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);
	
$ca_layouts[] = array(

'name' => 'Event Detail',

'content' => <<<EOT

[et_pb_section admin_label="section"][et_pb_row admin_label="row"][et_pb_column type="4_4"][et_pb_ca_post_handler admin_label="CAWeb Event Fields" post_type_layout="event"] [/et_pb_ca_post_handler][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);
	
$ca_layouts[] = array(

'name' => 'Course Detail',

'content' => <<<EOT

[et_pb_section admin_label="section"][et_pb_row admin_label="row"][et_pb_column type="4_4"][et_pb_ca_post_handler admin_label="CAWeb Course Fields" post_type_layout="course"] [/et_pb_ca_post_handler][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);

$ca_layouts[] = array(

'name' => 'Exam Detail',

'content' => <<<EOT

[et_pb_section admin_label="section"][et_pb_row admin_label="row"][et_pb_column type="4_4"][et_pb_ca_post_handler admin_label="CAWeb Exam Fields" post_type_layout="exam"] [/et_pb_ca_post_handler][/et_pb_column][/et_pb_row][/et_pb_section]

EOT

);



$meta = array(

		'_et_pb_predefined_layout'   => 'on',

		'_et_pb_built_for_post_type' => 'post',

	);

if ( isset( $ca_layouts ) && is_array( $ca_layouts ) ) {

		foreach ( $ca_layouts as $ca_layout ) {

			et_pb_create_layout( $ca_layout ['name'], $ca_layout ['content'], $meta );

		}

	}

}

?>
