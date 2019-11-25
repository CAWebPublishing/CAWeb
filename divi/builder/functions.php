<?php

// Creates a list of checkboxes of all tags
function et_builder_include_tags_option( $args = array() ) {
	$defaults = apply_filters(
		'et_builder_include_tags_defaults',
		array(

			'use_terms' => true,

			'term_name' => 'project_tags',

		)
	);

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


