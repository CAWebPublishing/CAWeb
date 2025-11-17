// External Dependencies.
import React, { Fragment, ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
  ElementComponents,
  DynamicData,
} from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
  type OnOff
} from '@divi/types';

// Local Dependencies.
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';
import { 
  LocationModuleEditProps
 } from './types';
import { get_icon_span, get_google_map_place_link } from '../utils';
import { get } from 'lodash';

/**
	 * Renders Location (contact)
	 *
	 * @return string
	 */
const contactLocation = (props: LocationModuleEditProps) => {
  let { attrs } = props;
  
  let location = getAttrByMode(attrs?.location?.innerContent);
  let address = getAttrByMode(attrs?.address?.innerContent);
  let contact = getAttrByMode(attrs?.contact?.innerContent);
  let icon = getAttrByMode(attrs?.icon?.innerContent);
  
  let display_other = <></>;
	let display_button = <></>;
  
  // If displaying an icon
  let display_icon   = 'on' === icon.show_icon ? <div className="thumbnail">{get_icon_span(icon.font_icon)}</div> : '';
  
  // wrap name in strong tag
  let name = "" !== location.name ? <strong>{location.name}</strong> : '';
  
  // get a map link if address info exists
  let addr = (
            "" !== address.addr ||
            "" !== address.city ||
            "" !== address.state ||
            "" !== address.zip
        ) ? get_google_map_place_link( [ address.addr, address.city, address.state, address.zip ] ) : '';
        
        
  // show contact info if enabled
  if ( 'on' === contact.show_contact ) {
    let phone         = contact.phone ? <p>General Information: {contact.phone}</p> : '';
    let fax           = contact.fax ? <p>FAX: {contact.fax}</p> : '';
    display_other = <Fragment>{phone}{fax}</Fragment>;
  }
        
  // if show button is enabled and location link exists
  if ( 'on' === location.show_button && "" !== location.link ) {
    display_button = <a href={location.link} className="btn btn-outline-dark" target="_blank">More</a>;
  }

  let contactInfo = (
    "" !== location.name ||
    "" !== address.addr ||
    display_other || 
    display_button
  ) 
  ? 
  <div className="contact">
    { name }
    { addr }
    { display_other }
    { display_button }
  </div>
  : <></>

  return (
    <Fragment>
      { display_icon }
      { contactInfo }
    </Fragment>
  );
}

const miniLocation = (props: LocationModuleEditProps) => {
  let { attrs } = props;
  
  let location = getAttrByMode(attrs?.location?.innerContent);
  let address = getAttrByMode(attrs?.address?.innerContent);
  let icon = getAttrByMode(attrs?.icon?.innerContent);
  
  // If displaying an icon
	let display_icon   = 'on' === icon.show_icon ? <div className="thumbnail">{get_icon_span(icon.font_icon)}</div> : '';

  // if name exists
  let name = <></>;
  if( "" !== location.name ){
    // if location link exists make a link, otherwise a strong tag
    name = "" !== location.link  ? <a href={ location.link } target="_blank">{location.name}</a> : <strong>{location.name}</strong>;
  }

  // get a map link if address info exists
  let addr = (
            "" !== address.addr ||
            "" !== address.city ||
            "" !== address.state ||
            "" !== address.zip
        ) ? get_google_map_place_link( [ address.addr, address.city, address.state, address.zip ] ) : '';
  
   let contactInfo = (
    "" !== location.name ||
    "" !== address.addr 
  ) 
  ? 
  <div className="contact">
    { name }
    { addr }
  </div>
  : <></>

  return (
    <Fragment>
      { display_icon }
      { contactInfo }
    </Fragment>
  );
}

const bannerLocation = (props: LocationModuleEditProps) => {
  let { attrs, elements } = props;
  
  let location = getAttrByMode(attrs?.location?.innerContent);
  let address = getAttrByMode(attrs?.address?.innerContent);
  console.log( elements)
  console.log( location );

  // If displaying a featured image
  let featuredImageElement = <div className="thumbnail">
        {
          elements.render({
            attrName: 'location.innerContent',
          })
        }
        </div>;
  
// get a map link if address info exists
  let addr = (
            "" !== address.addr ||
            "" !== address.city ||
            "" !== address.state ||
            "" !== address.zip
        ) ? 
        <div className="address">
          <span className="ca-gov-icon-road-pin"></span>
          {get_google_map_place_link( [ address.addr, address.city, address.state, address.zip ] )}
        </div> 
        : '';
        
  // Add description markup
  let desc = "" !== location.desc ? 
  <Fragment>
    <strong>Description</strong>
    { 
        elements.render({
          attrName: 'location', 
          attrSubName: 'desc'
        })
      }
  </Fragment> : <></>;

  // if show button is enabled and location link exists
  let display_button = 'on' === location.show_button && "" !== location.link ? 
    <a href={location.link} className="btn btn-outline-dark" target="_blank">View More Details</a> : <></>;

  // let contactInfo = 
  let contactInfo = (
    "" !== location.name ||
    "" !== address.addr 
  ) 
  ? 
  <div className="contact">
    { 
    elements.render({
      attrName: 'location', 
      attrSubName: 'name',
      
    })
    }
    { addr }
  </div>
  : <></>;

  let summary = (
    desc ||
    display_button 
  ) 
  ? 
  <div className="summary">
    { desc }
    { display_button }
  </div>
  : <></>

  return (
    <Fragment>
      { featuredImageElement }
      { contactInfo }
      { summary }
    </Fragment>
  );
}

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {LocationModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = (props: LocationModuleEditProps): ReactElement => {
  const {
    attrs,
    id,
    name,
    elements,
  } = props;

  let location = getAttrByMode(attrs?.location?.innerContent);

  let output;

  // if ( 'contact' === location.layout ) {
	// 		output = contactLocation(props);
	// } else if ( 'mini' === location.layout ) {
	// 		output = miniLocation(props);
	// } else  {
	// 		output = bannerLocation(props);
	// }

  console.log( location );
  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {
        elements.styleComponents({
          attrName: 'module',
        })
      }
      {/* <div className={`location ${location.layout}`}>{ output }</div> */}
      <div className={`location ${location.layout}`}>{
        elements.render({
          attrName: 'location',
          attrSubName: 'name'
        })
       }</div>
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
