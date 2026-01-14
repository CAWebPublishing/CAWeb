// External Dependencies
import React, { Fragment } from 'react';
import CAWebComponent from '../component.jsx';

// import styles
import './styles.css';

class CAWebModuleSectionPrimary extends CAWebComponent {

	static slug = 'et_pb_ca_section_primary';

	renderHeader(featured_image_button = 'on' ){
		let {
			heading_size: Tag,
			heading_text_color,
			heading_align
		} = this.props;

		var heading_style = undefined !== heading_text_color ? { 'color': heading_text_color } : {};
		var heading_class = "off" === featured_image_button ? 'text-' + heading_align : '';

		return(
			<Tag style={heading_style} className={heading_class}>
				{ this.props.section_heading }
			</Tag>
		);
		switch( heading_size){
			case 'h1':
			default:
				return(
					<h1 style={heading_style} className={heading_class}>
						{this.props.section_heading}
					</h1>
				);
			case 'h2':
				return(
					<h2 style={heading_style} className={heading_class}>
						{this.props.section_heading}
					</h2>
				);
			case 'h3':
				return(
					<h3 style={heading_style} className={heading_class}>
						{this.props.section_heading}
					</h3>
				);
			case 'h4':
				return(
					<h4 style={heading_style} className={heading_class}>
						{this.props.section_heading}
					</h4>
				);
			case 'h5':
				return(
					<h5 style={heading_style} className={heading_class}>
						{this.props.section_heading}
					</h5>
				);
		}

	}

	renderMoreButton(){
		let { 
			section_link,
			section_heading
		} = this.props;

		if( "" !== section_link ){
			return(
				<div>
					<a href={ encodeURIComponent(section_link) } className="btn btn-outline-dark" target="_blank">More Information<span className="sr-only">More information about {section_heading}</span></a>
				</div>
			);
		}

	}

	renderFeatureImage(){
		let { 
			slide_image_button,
			image_pos,
			section_image
		} = this.props;

		var classes = "on" === slide_image_button ? ' animate__animated  animate__fadeInLeft' : '';
		classes += "on" === image_pos ? ' ps-3 float-end' : ' pe-3 float-start';

		// caweb_get_attachment_post_meta need to figure away to run WP Functions
		// alt_text = caweb_get_attachment_post_meta($section_image, '_wp_attachment_image_alt');
		
		return (
			<div className={"col-4" + classes}>
				<img src={this.props.section_image} alt=""/>
			</div>
		);
	}

	render() {
		let {
			featured_image_button,
			show_more_button
		} = this.props;


		let header = this.renderHeader(featured_image_button);
		let display_button = "on" === show_more_button ? this.renderMoreButton() : '';

		return(
			<Fragment>
				{ 
					'on' === featured_image_button ?
					this.renderFeatureImage() : null
				}
				{ header }
				{ this.props.content() }
				{ display_button }
			</Fragment>
		)

  	}

}

export default CAWebModuleSectionPrimary;