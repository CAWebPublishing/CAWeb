// External Dependencies
import React, { Fragment } from 'react';
import  CAWEeb_Component from '../component.jsx';


class CAWebModuleLocation extends CAWEeb_Component {

  static slug = 'et_pb_ca_location_widget';

  // Render Contact Layout
  renderContactLocation() {
    let {
      addr, city, state, zip,
      show_contact, phone, fax,
      show_button, location_link,
      name, show_icon, font_icon
    } = this.props;


    let display_other = "";
    let display_button = "";
    
    // If displaying an icon
    let display_icon = "on" === show_icon ? <div class="thumbnail">{this.caweb_get_icon_span(font_icon)}</div> : '';
    
    // wrap name in strong tag
    name = "" !== name ? <strong>{name}</strong> : '';
    
    // get a map link if address info exists
    let address = (
      "" !== addr ||
      "" !== city ||
      "" !== state ||
      "" !== zip
    ) ?
    this.caweb_get_google_map_place_link([addr, city, state, zip]) : '';

    // show contact info if enabled
    if( "on" === show_contact ){
      phone = "" !== phone ? <p>General Information: {phone}</p>: '';
      fax = "" !== fax ? <p>FAX: {fax}</p> : '';
      display_other = <Fragment>{phone}{fax}</Fragment>;
    } 
    
    // if show button is enabled and location link exists
    if ( "on" === show_button && "" !== location_link ){
        display_button = <a href={location_link} class="btn btn-outline-dark" target="_blank">More</a>;
    } 
    
    return (
      <Fragment>
          {display_icon}
          <div className="contact">
            {name}
            {address}
            {display_other}
            {display_button}
          </div>
      </Fragment>
    );
  }

  // Render Mini Layout
  renderMiniLocation() {
    let {
      addr, city, state, zip,
      location_link,
      name, show_icon, font_icon
    } = this.props;
    
     // If displaying an icon
     let display_icon = "on" === show_icon ? <div class="thumbnail">{this.caweb_get_icon_span(font_icon)}</div> : '';
     
     // if name exists
     if( "" !== name ){
       // if location link exists make a link, otherwise a strong tag
       name = "" !== location_link  ? <a href={encodeURIComponent(location_link)} target="_blank">{name}</a> : <strong>{name}</strong>;
     }
       
    let address = (
      "" !== addr ||
      "" !== city ||
      "" !== state ||
      "" !== zip
    ) ?
    this.caweb_get_google_map_place_link([addr, city, state, zip]) : '';


    return (
      <Fragment>
        {display_icon}
        <div className="contact">
            {name}
            {address}
          </div>
      </Fragment>
    );
  }

  // Render Banner Layout
  renderBannerLocation() {
    let {
      addr, city, state, zip,
      show_contact, phone, fax,
      show_button, location_link,
      name, featured_image, desc
    } = this.props;

    // If displaying a featured image
    // @todo: alt text for images
    featured_image = "" !== featured_image ? <div class="thumbnail"><img src={featured_image} /></div> : '';

    // wrap name in strong tag
    name = "" !== name ? <strong>{name}</strong> : '';

    // get a map link if address info exists
    let address = (
      "" !== addr ||
      "" !== city ||
      "" !== state ||
      "" !== zip
    ) ?
    <div className="address">
      <span class="ca-gov-icon-road-pin"></span>
      {this.caweb_get_google_map_place_link([addr, city, state, zip])}
    </div>
    : '';

    // Add description markup
    desc = "" !== desc ? 
      <Fragment>
        <strong>Description</strong><div class="description">{desc}</div>
      </Fragment>
      : '';

    // if show button is enabled and location link exists
    let display_button = "on" === show_button && "" !== location_link ?
      <a href={location_link} className="btn btn-outline-dark" target="_blank">View More Details</a> 
      : '';

    // contact info
    let contact = (
      "" !== name ||
      "" !== address
    ) ? 
    <div class="contact">{name}{address}</div>
    : '';

    // summary info
    let summary = (
      "" !== desc ||
      "" !== display_button
    ) ? 
    <div class="summary">{desc}{display_button}</div>
    : '';

    return (
      <Fragment>
        {featured_image}
        {contact}
        {summary}
      </Fragment>
    );
  }


  render() {
    let {location_layout } = this.props;
    
    let output = "";

    switch(location_layout) {
      case "mini":
        output = this.renderMiniLocation();
        break;
      case "banner":
        output = this.renderBannerLocation();
        break;
      case "contact":
      default:
        output = this.renderContactLocation();
        break;
    }

    return(<Fragment>
      <div className={"location " + location_layout}>
        { output }
      </div>
    </Fragment>);

  }

}

export default CAWebModuleLocation;