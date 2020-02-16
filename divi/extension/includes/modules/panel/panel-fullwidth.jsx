// External Dependencies
import React, { Fragment } from 'react';
import  CAWEeb_Component from '../component.jsx';

class CAWeb_Module_Fullwidth_Panel extends CAWEeb_Component {

  static slug = 'et_pb_ca_fullwidth_panel';

  renderHeading(){
		if( "" !== this.props.title ){
			var display_options = "";
					var display_icon = "on" === this.props.use_icon ? this.caweb_get_icon_span(this.props.font_icon) : '';
			var heading_text_color = "none" === this.props.panel_layout && "" !== this.props.heading_text_color ? this.props.heading_text_color : 'inherit';
			var standout_arrow = 'standout highlight'=== this.props.panel_layout ? <span class="triangle"></span>: '';

			if( "on" === this.props.show_button && ( undefined !== this.props.button_link && "" !== this.props.button_link)){
				var option_padding = "right" === this.props.heading_align ? ' pl-2' : '';
				var button_text = undefined !== this.props.button_text && "" !== this.props.button_text ? this.props.button_text : 'Read More';
				var button_target = 'on' === this.props.button_target ? '_blank' : '_self';

				display_options = <div className={"options" + option_padding}>
				<a href={this.props.button_link} class="btn btn-default" target={button_target}>{button_text}<span class="sr-only">{button_text} about {this.props.title}</span></a></div>;
			}
			
			switch(this.props.panel_layout){
				case "none":
				case "standout":
				case "standout highlight":
				return(
					<div class="panel-heading">
					{standout_arrow}
					<h2 className={"w-100 pb-0 text-" + this.props.heading_align} style={{color: heading_text_color}}>{display_icon} {this.props.title}{display_options}</h2>   
					</div>
				);
				case "overstated":
				return(
					<div class="panel-heading">
					{standout_arrow}
					<h3 className={"w-100 pb-0 text-" + this.props.heading_align} style={{color: heading_text_color}}>{display_icon} {this.props.title}{display_options}</h3>   
					</div>
				);
				case "default":
				case "understated":
				default:
				return(
					<div class="panel-heading">
					{standout_arrow}
					<h4 className={"w-100 pb-0 text-" + this.props.heading_align} style={{color: heading_text_color}}>{display_icon} {this.props.title}{display_options}</h4>   
					</div>
				);
			}
      
		}
  }

  render() {
		var moduleID = "" !== this.props.module_id ? this.props.module_id : ''
		var classes = undefined !== this.props.module_class ? this.props.module_class : '';
		var classList = "et_pb_ca_fullwidth_panel et_pb_module " + classes + " panel panel-" + this.props.panel_layout;

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

export default CAWeb_Module_Fullwidth_Panel;
