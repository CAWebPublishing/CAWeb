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
import { get_icon_span, get_google_map_place_link } from '../utils';

const contactLocation = (props: {
  elements: Module.ModuleElements,
  address?: addressProps,
  contact?: contactProps,
  icon?: iconProps,
  link?: linkProps
}): ReactElement => {
  const { address, contact, icon, link, elements } = props;

  // get a map link if address info exists
  let addressMapLink = get_google_map_place_link( [ address?.addr, address?.city, address?.state, address?.zip ] );
 
  // If displaying an icon
	let displayIcon   = 'on' === icon?.show ? <div className="thumbnail">{get_icon_span(icon?.icon)}</div> : <></>;

  // show contact info if enabled
  let displayOther = <></>;
  
  if('on' === contact?.show) {
    if( '' !== contact?.phone ) {
      displayOther = <Fragment>
        <p>General Information: {contact?.phone}</p>
      </Fragment>;
    }
    // if( '' !== contact?.fax ) {
    //   displayOther = <Fragment>
    //     {
    //       displayOther?.props?.children
    //     }
    //     <p>FAX: {contact?.fax}</p>
    //   </Fragment>;
    // }
  }

  // we have to do this since elements.render children property isn't working as expected
  let href = link?.url; // href to link value
  let linkText = 'More'; // set link text to More for rendering

  let linkElement = '' !== href && 'on' === link?.show ?
    elements.render({
            attrName: 'link',
            attrSubName: 'url',
            className: 'btn btn-outline-dark',
            htmlAttributes: {
              href,
              target: '_blank',
            },
            children: linkText,
          }) : <></>;

  console.log( displayOther );

  let contactInfo = ( 
    displayOther?.props?.children?.length ||
    addressMapLink?.props?.children?.length ||
    linkElement?.props?.children?.length
  ) ? 
  <div className="contact">
    { addressMapLink }
    { displayOther }
    { linkElement }
  </div> : <></>;

  return(<Fragment>
    { contactInfo}
  </Fragment>)
}
const miniLocation = (props: LocationModuleEditProps): ReactElement => {

  return(<Fragment>Mini</Fragment>)
}
const bannerLocation = (props: LocationModuleEditProps): ReactElement => {

  return(<Fragment>Banner</Fragment>)
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

  let output = <></>;
 
  switch ( layout ) {
    case 'mini':
      output = miniLocation( props );
      break;
      
    case 'banner':
        output = bannerLocation( props );
        break;
    case 'contact':
    default:
      output = contactLocation( {
        elements,
        address, 
        contact, 
        icon, 
        link
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
