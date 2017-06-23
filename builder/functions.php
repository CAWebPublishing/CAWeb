<?php

function et_pb_get_text_sizes(){
	$text_size = array(
			'p' => 'Paragraph',
			'h1' => 'H1',
			'h2' => 'H2',
			'h3' => 'H3',
			'h4' => 'H4'
			);

	$output = '';

	foreach($text_size as $key => $opt){
		$output .= sprintf('<option value="%1$s">%2$s</option>', $key, $opt);
	}
		
	$output = sprintf('<select>%1$s</select>', $output);
	return $text_size ;
}


function monthName($month_int) {

$month_int = (int)$month_int;

$months = array('','January', 'February', 'March', 
		'April', 'May', 'June', 'July', 
		'August', 'September', 'October',
		'November', 'December');

return $months[$month_int];

}

function shortMonthName($month_int){
	return substr(monthName($month_int),0,3);
}

function get_ca_icon_span($name, $styles = '', $classes = array()){
	$ca_icons = get_ca_icon_list();
	$et_pb_icons = et_pb_get_font_icon_symbols();

	$icon = get_ca_icon_name($name);
	
	if(in_array($icon , $ca_icons)){
		
		return sprintf('<span style="%3$s" class="ca-gov-icon-%1$s %2$s"></span> ', $icon, implode(" ", $classes), $styles);
	}else{

	$symbols = array_merge($ca_icons,$et_pb_icons );
	
	if(in_array($icon, $symbols)){
		return sprintf('<span style="%3$s" class="%2$s">%1$s</span> ', esc_attr( et_pb_process_font_icon( $icon ) ), implode(" ", $classes), $styles);
	}else{
		return '';
	}
}
}

function get_ca_icon_name($name){
	$list = get_ca_icon_list();

	if(strpos($name, '%') !== false){
		$name= (int) str_replace("%","",$name);
	}

if(in_array($name, $list)){
	return $list[array_search($name,$list)];
}else{

	$symbols = array_merge($list, et_pb_get_font_icon_symbols());
	
	if(array_key_exists($name, $symbols)){
		//return $symbols[array_search($name,$symbols)];
		return $symbols[$name];
	}else{
		return '';
	}
}
}

function get_ca_icon_pos($name = '', $class_name = ''){
	$icons = get_ca_icon_list();

	for($i = 0; $i < count($icons); $i++){
		if("" != $name && $icons[$i] == $name){
			return $i;
		}elseif("" != $class_name && 'ca-gov-icon-' . $icons[$i] == $class_name){
			return $i;
		}
	}

}




function et_pb_get_ca_font_icon_list() {
	$output = et_pb_get_ca_font_icon_list_items() ;

	$output = sprintf( '<ul class="et_font_icon">%1$s</ul>', $output );

	return $output;
}

function et_pb_get_ca_font_icon_list_items() {
	$output = '';

	$symbols = get_ca_icon_list();

	foreach ( $symbols as $symbol ) {
		$output .= '<li class="ca-gov-icon-'.  $symbol .'"></li>';
		//$output .= sprintf( '<li data-icon="%1$s"></li>', esc_attr( $symbol ) );
	}
	
	$output .= et_pb_get_font_icon_list_items();
	
	return $output;
}

// Creates a list of checkboxes of all tags
function et_builder_include_tags_option( $args = array() ) {

	$defaults = apply_filters( 'et_builder_include_tags_defaults', array (

		'use_terms' => true,

		'term_name' => 'project_tags',

	) );



	$args = wp_parse_args( $args, $defaults );



	$output = "\t" . "<% var et_pb_include_tags_temp = typeof et_pb_include_tags !== 'undefined' ? et_pb_include_tags.split( ',' ) : []; %>" . "\n";



	if ( $args['use_terms'] ) {

		$tags_array = get_terms( $args['term_name'] );

	} else {

		$tags_array = get_tags( apply_filters( 'et_builder_get_tags_args', 'hide_empty=0' ) );

	}



	if ( empty( $tags_array ) ) {

		$output = '<p>' . esc_html__( "You currently don't have any projects assigned to a tag.", 'et_builder' ) . '</p>';

	}



	foreach ( $tags_array as $tags ) {

		$contains = sprintf(

			'<%%= _.contains( et_pb_include_tags_temp, "%1$s" ) ? checked="checked" : "" %%>',

			esc_html( $tags->term_id )

		);



		$output .= sprintf(

			'%4$s<label><input type="checkbox" name="et_pb_include_tags" value="%1$s"%3$s> %2$s</label><br/>',

			esc_attr( $tags->term_id ),

			esc_html( $tags->name ),

			$contains,

			"\n\t\t\t\t\t"

		);

	}



	$output = '<div id="et_pb_include_tags">' . $output . '</div>';



	return apply_filters( 'et_builder_include_tags_option_html', $output );

}


?>