// External Dependencies.
import React, { ReactElement } from 'react';

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
import { PanelModuleEditProps } from './types.ts';

import { get_icon_span, get_google_map_place_link } from '../Utils/index.js';

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {PanelModuleEditProps} props React component props.
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
  
  let { 
      align,
      color,
      size: HeaderSize, 
    } = getAttrByMode(attrs?.title?.advanced);
  let header = getAttrByMode(attrs?.title?.innerContent);

  let {
    show: showButton
  } = getAttrByMode(attrs?.button?.advanced);
  let {
    linkUrl: buttonUrl,
    text: buttonText,
    linkTarget: buttonTarget,
  } = getAttrByMode(attrs?.button?.innerContent);

  let headerStyle = {};
  if( 'none' === layout && color && color.length > 0 ) {
      headerStyle = Object.assign( headerStyle, {color} );
  }

  // create button element if button is set to show and button text is not empty.
  let buttonElement = null;
  if( 'on' === showButton && buttonUrl && buttonUrl.length > 0 ) {
    buttonElement = <div className="options">
      <a href={buttonUrl} target={ 'on' === buttonTarget ? '_blank' : '_self'} className={`btn btn-${layout}`}>{buttonText}</a>
    </div>;
  }

  // Create header element if header is not empty.
  let headerElement = null;
  if( header && header.length > 0 ) {

    headerElement = <div className={`card-header ${align}`}>
      <HeaderSize className="card-title" style={headerStyle}>{header}</HeaderSize>
      { buttonElement}
      </div>;
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
      {headerElement}
      { elements.render({
          'attrName': 'content',
        })
      }
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
