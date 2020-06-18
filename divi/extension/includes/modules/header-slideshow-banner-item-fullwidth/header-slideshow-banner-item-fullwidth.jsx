// External Dependencies
import React from 'react';

import  CAWEeb_Component from '../component.jsx';

class CAWeb_Module_Fullwidth_Header_Slideshow_Banner_Item extends CAWEeb_Component {

  static slug = 'et_pb_ca_fullwidth_banner_item';

  /**
   * All component inline styling.
   *
   * @since 1.0.0
   *
   * @return array
   */
  static css(props) {
    const additionalCss = [];

    // Process text-align value into style
    additionalCss.push([{
      selector:    '%%order_class%%',
      declaration: 'height: 100%',
    }]);

    return additionalCss;
  }

  render() {
		var moduleId = "" !== this.props.module_id ? this.props.module_id : ''
    var classes = undefined !== this.props.module_class ? this.props.module_class : '';
		var classList = "et_pb_ca_fullwidth_banner_item et_pb_module slide" + classes;
    var button_text = this.props.button_text;
    var button_link = this.props.button_link;
    var background_image = this.props.background_image;
    var banner_align = this.props.banner_align;
    var display_heading = "off" === this.props.display_heading ? {'display' : 'none'} : {};
    var heading = this.props.heading;
        
    var link = "";
    
    if( "on" === this.props.display_banner_info ){
      link = <a href={button_link} target="_blank">
        <p className={"slide-text " + banner_align}>
          <span class="title" style={display_heading}>{heading}<br /></span>
          {button_text}
          </p>
          </a>; 
    }
  
    return(
      <div id={moduleId} className={classList} style={{'background-image':"url('" + background_image + "')"}}>
        {link}
      </div>
    )

  }
}

export default CAWeb_Module_Fullwidth_Header_Slideshow_Banner_Item;
