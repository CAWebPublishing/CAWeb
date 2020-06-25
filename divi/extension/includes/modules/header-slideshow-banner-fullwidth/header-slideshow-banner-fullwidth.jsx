// External Dependencies
import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import  CAWEeb_Component from '../component.jsx';

class CAWeb_Module_Fullwidth_Header_Slideshow_Banner extends CAWEeb_Component {

  static slug = 'et_pb_ca_fullwidth_banner';

  renderCarousel( s ){
    return (
        <OwlCarousel 
            id="primary-carousel" 
            className={"carousel-banner"}
            items="1"
            loop
            autoplay={true}
            dots={true}
            dotsClass="banner-pager"
            dotClass="banner-control"
            animateOut="fadeOut"
            >
              {this.props.content}
          </OwlCarousel>
      );
  }

  render() {
    var classes = undefined !== this.props.module_class ? this.props.module_class : '';
    var classList = "et_pb_ca_fullwidth_banner et_pb_module header-slideshow-banner enabled " + classes;
    var scroll_bar_text = this.props.scroll_bar_text;
    var scroll_bar_icon = this.caweb_get_icon_span(this.props.font_icon);

    var scrollbar = "";
    
    classList += 1 >= this.props.content.length ? ' solo' : '';

    if (undefined !== scroll_bar_text && "" !== scroll_bar_text.trim() ){
        scrollbar = <div class="explore-invite" style={ {'z-index' : '1'}}>
            <div class="text-center">
                <a class="text-white"><span class="explore-title">{scroll_bar_text}</span>{scroll_bar_icon}</a>
            </div>
        </div>;
    }else{
        classList += ' no-explore';
    }

    return(
        <div  id="et_pb_ca_fullwidth_banner" className={classList}>
            {this.renderCarousel()}
            {scrollbar}
        </div>
    );

  }
}

export default CAWeb_Module_Fullwidth_Header_Slideshow_Banner;
