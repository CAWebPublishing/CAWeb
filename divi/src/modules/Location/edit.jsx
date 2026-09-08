// External Dependencies.
import React, { Fragment, ReactElement } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
} from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';


// Local Dependencies.
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';
import { LocationModuleEditProps } from './types.ts';

import { get_icon_span, get_google_map_place_link } from '../Utils/index.js';

/**
 * Renders Location (contact)
 *
 * @return ReactElement
 */
const contactLocation = ({
  elements,
  address,
  contact,
  icon,
  link,
  name
}) => {
// get a map link if address info exists
  let addressMapLink = get_google_map_place_link( [ address?.addr, address?.city, address?.state, address?.zip ] );
 
  // If displaying an icon
	let displayIcon   = 'on' === icon?.show ? <div className="thumbnail">{get_icon_span(icon?.icon)}</div> : <></>;

  // show contact info if enabled
  let displayOther = 'on' === contact?.show ? <Fragment>
      {
        [
          '' !== contact?.phone ? <p>General Information: {contact?.phone}</p> : null,
          '' !== contact?.fax ? <p>FAX: {contact?.fax}</p> : null
        ]
      }
    </Fragment> : null;
  
  let linkElement = '' !== link?.url && 'on' === link?.show ?
      <a href={ link?.url } className='btn btn-outline-dark' target='_blank'>More</a>
      : null;

  // we combine all contact info elements here
  let contactInfo = ( 
    "" !== name ||
    (null !== displayOther && displayOther?.props?.children) ||
    null !== addressMapLink ||
    (null !== linkElement && linkElement?.props?.children)
  ) ? 
  <div className="contact">
    { elements.render({'attrName': 'name'}) }
    { addressMapLink }
    { displayOther }
    { linkElement }
  </div> : <></>;

  return(<Fragment>
    { contactInfo}
  </Fragment>)
}

/**
 * Renders Location (mini)
 *
 * @return ReactElement
 */
const miniLocation = ({
  elements,
  address,
  icon,
  link,
  name
}) => {

  // get a map link if address info exists
  let addressMapLink = get_google_map_place_link( [ address?.addr, address?.city, address?.state, address?.zip ] );
 
  // If displaying an icon
	let displayIcon   = 'on' === icon?.show ? <div className="thumbnail">{get_icon_span(icon?.icon)}</div> : <></>;

  // we wrap the name in a link if a link url is provided
  let nameElement = '' !== name ?
    '' !== link?.url ? 
      <a href={link?.url} target="_blank">{ name }</a>
      :
    elements.render({'attrName': 'name' })
     : null;

  // we combine all contact info elements here
  let contactInfo = ( 
    '' !== name ||
    null !== addressMapLink 
  ) ? 
  <div className="contact">
    { nameElement }
    { addressMapLink }
  </div> : <></>;

  return(<Fragment>
    { contactInfo}
  </Fragment>)
}

/**
 * Renders Location (banner)
 *
 * @return ReactElement
 */
const bannerLocation = ({
  elements,
  address,
  link,
  name,
  image,
  desc
}) => {

  let imageElement = '' !== image?.src ?
    <div className='thumbnail'>
      {
        elements.render({
            attrName: 'image',
        })
      }
    </div> : null;

  // get a map link if address info exists
  let addressMapLink = get_google_map_place_link( [ address?.addr, address?.city, address?.state, address?.zip ] );
 
  // Add description markup
  let descElement = '' !== desc ? 
      <Fragment>
        <strong>Description:</strong> 
        {
          elements.render({
              attrName: 'desc',
          })
        }
      </Fragment> : null

  let linkElement = '' !== link?.url && 'on' === link?.show ?
        <a href={ link?.url } target="_blank" className="btn btn-outline-dark">View More Details</a>
        : null;

  // we combine all contact info elements here
  let contactInfo = ( 
    "" !== name ||
    null !== addressMapLink 
  ) ? 
  <div className="contact">
    { elements.render({'attrName': 'name'}) }
    { 
      addressMapLink ? 
      <div className='address'>
        { get_icon_span('road-pin') }
        {addressMapLink}
      </div> 
      : <></>
    }
  </div> : <></>;

  // we combine all summary info elements here
  let summaryInfo = ( 
    "" !== desc ||
    null !== linkElement 
  ) ? 
  <div className="summary">
    { descElement }
    { linkElement }
  </div> : <></>;

  return(<Fragment>
    { imageElement }
    { contactInfo }
    { summaryInfo }
  </Fragment>)
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
const ModuleEdit = ({
    attrs,
    id,
    name,
    elements,
  }) => {

  let layout = getAttrByMode(attrs?.layout?.innerContent);
  
  let address = getAttrByMode(attrs?.address?.innerContent);
  let contact = getAttrByMode(attrs?.contact?.innerContent);
  let icon = getAttrByMode(attrs?.icon?.innerContent);
  let link = getAttrByMode(attrs?.link?.innerContent);
  let locationName = getAttrByMode(attrs?.name?.innerContent);
  let image = getAttrByMode(attrs?.image?.innerContent);
  let desc = getAttrByMode(attrs?.desc?.innerContent);

  let output = <></>;
 
  switch ( layout ) {
    case 'mini':
      output = miniLocation( {
        elements,
        address, 
        icon, 
        link,
        name: locationName
      } );
      break;
      
    case 'banner':
        output = bannerLocation( {
        elements,
        address, 
        image,
        link,
        desc,
        name: locationName
      } );
        break;
    case 'contact':
    default:
      output = contactLocation( {
        elements,
        address, 
        contact, 
        icon, 
        link,
        name: locationName
      } );
      break;
  }
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
      {
      <div className={`location ${layout}`}>
        { output }
        </div> 
      }
      
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
