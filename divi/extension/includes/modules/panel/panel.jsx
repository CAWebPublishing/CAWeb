// External Dependencies
import React, { Fragment } from 'react';
import  CAWEeb_Component from '../component.jsx';

class CAWeb_Module_Panel extends CAWEeb_Component {

  static slug = 'et_pb_ca_panel';

  renderHeading(){
		if( "" !== this.props.title ){
			var display_options = "";
					var display_icon = "on" === this.props.use_icon ? this.caweb_get_icon_span(this.props.font_icon) : '';
			var heading_size = "" !== this.props.heading_size ? this.props.heading_size : 'h4';
			var heading_text_color = "none" === this.props.panel_layout && "" !== this.props.heading_text_color ? this.props.heading_text_color : 'inherit';
			var standout_arrow = 'standout highlight'=== this.props.panel_layout ? <span class="triangle"></span>: '';

			if( "on" === this.props.show_button && ( undefined !== this.props.button_link && "" !== this.props.button_link) ){
				var option_padding = "right" === this.props.heading_align ? ' pl-2' : '';
				var button_text = undefined !== this.props.button_text && "" !== this.props.button_text ? this.props.button_text : 'Read More';
				var button_target = 'on' === this.props.button_target ? '_blank' : '_self';

				display_options = <div className={"options" + option_padding}>
					<a href={this.props.button_link} class="btn btn-default" target={button_target}>{button_text}<span class="sr-only">{button_text} about {this.props.title}</span></a></div>;
			}
			
			var class_list = "w-100 pb-0 text-" + this.props.heading_align;
			var panel_contents = <Fragment>{display_icon} {this.props.title}{display_options}</Fragment>;

			switch(this.props.panel_layout){
				case "h1":
					return(
						<div class="panel-heading">
						{standout_arrow}
						<h1 className={class_list} style={{color: heading_text_color}}>{panel_contents}</h1>   
						</div>
					);
				case "h2":
					return(
						<div class="panel-heading">
						{standout_arrow}
						<h2 className={class_list} style={{color: heading_text_color}}>{panel_contents}</h2>   
						</div>
					);
				case "h3":
					return(
						<div class="panel-heading">
						{standout_arrow}
						<h3 className={class_list} style={{color: heading_text_color}}>{panel_contents}</h3>   
						</div>
					);
				case "h5":
					return(
						<div class="panel-heading">
						{standout_arrow}
						<h5 className={class_list} style={{color: heading_text_color}}>{panel_contents}</h5>   
						</div>
					);
				case "h6":
					return(
						<div class="panel-heading">
						{standout_arrow}
						<h6 className={class_list} style={{color: heading_text_color}}>{panel_contents}</h6>   
						</div>
					);
				case "h4":
				default:
					return(
						<div class="panel-heading">
						{standout_arrow}
						<h4 className={class_list} style={{color: heading_text_color}}>{panel_contents}</h4>   
						</div>
					);
			}
      
		}
  }

  render() {
		var moduleID = "" !== this.props.module_id ? this.props.module_id : ''
		var classes = undefined !== this.props.module_class ? this.props.module_class : '';
		var classList = "et_pb_ca_panel et_pb_module " + classes + " panel panel-" + this.props.panel_layout;

    if( "none" === this.props.panel_layout ){
      classList += "overflow-visible border-0";
    }

    return (
			<Fragment>
      <div  id={moduleID} className={classList}>
        {this.renderHeading()}
        <div className="panel-body">{this.props.content()}</div>
      </div>
     </Fragment>
		);
  }
}

export default CAWeb_Module_Panel;
