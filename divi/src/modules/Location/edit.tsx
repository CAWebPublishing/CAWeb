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
  type OnOff,
} from '@divi/types';

// Local Dependencies.
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';
import { 
  LocationModuleEditProps,
  addressProps,
  iconProps,
  contactProps,
  linkProps
 } from './types';

import { get_icon_span, get_google_map_place_link } from '../Utils';

/**
 * Renders Location (contact)
 *
 * @return ReactElement
 */
const contactLocation = (props: {
  elements: Module.ModuleElements,
  address?: addressProps,
  contact?: contactProps,
  icon?: iconProps,
  link?: linkProps,
  name?: string
}): ReactElement => {
  const { address, contact, icon, link, elements, name } = props;

  // get a map link if address info exists
  let addressMapLink = get_google_map_place_link( [ address?.addr, address?.city, address?.state, address?.zip ] );
 
  // If displaying an icon
	let displayIcon   = 'on' === icon?.show ? <div className="thumbnail">{get_icon_span(icon?.icon)}</div> : <></>;

  // show contact info if enabled
  let displayOther = 'on' === contact?.show ? <Fragment>
      {
        ...[
              '' !== contact?.phone ? <p>General Information: {contact?.phone}</p> : null,
              '' !== contact?.fax ? <p>FAX: {contact?.fax}</p> : null
          ].filter(Boolean)
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
const miniLocation = (props: {
  elements: Module.ModuleElements,
  address?: addressProps,
  icon?: iconProps,
  link?: linkProps,
  name?: string
}): ReactElement => {
const { address, icon, link, elements, name } = props;

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
const bannerLocation = (props: {
  elements: Module.ModuleElements,
  address?: addressProps,
  link?: linkProps,
  name?: string,
  image?: {
    src?: string,
    alt?: string,
    title?: string
  },
  desc?: string
}): ReactElement => {
  const { address, link, elements, name, image, desc } = props;

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
const ModuleEdit = (props: LocationModuleEditProps): ReactElement => {
  const {
    attrs,
    id,
    name,
    elements,
  } = props;

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
