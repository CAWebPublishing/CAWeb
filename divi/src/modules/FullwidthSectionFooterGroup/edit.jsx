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
import { FullwidthSectionFooterGroupModuleEditProps } from './types.ts';
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FullwidthSectionFooterGroupModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = (props) => {
  const {
    attrs,
    id,
    name,
    elements,
    parentAttrs
  } = props;

  let {
    size: TitleSize
  } = getAttrByMode(attrs?.title?.advanced);

  return (
    <ModuleContainer
      attrs={attrs}
      parentAttrs={parentAttrs}
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
        elements.render({
          attrName: 'title',
          tagName: TitleSize
        })
      }
      <ul className="list-unstyled p-0">
        {
          groupListing( attrs )
        }
      </ul>
      
    </ModuleContainer>
  );
}

const groupListing = ( attrs ) => {
  let links = Object.fromEntries(
    Object.entries(attrs).filter(([key, value]) => key.startsWith('link') && Object.hasOwn(value, 'innerContent') )
  );

  let {
    color,
    displayLink
  } = getAttrByMode(attrs?.content?.advanced);
  
  let title = getAttrByMode(attrs?.title?.innerContent);

  let linkElements = Object.entries(links).map(([key, value]) => {
    let {
      url: linkUrl,
      text
    } = getAttrByMode(value?.innerContent);
    let { show } = getAttrByMode(value?.advanced);
    
    if ('on' !== show) {
      return null;
    }else{
      return <li key={key} className="mb-2"><a href={linkUrl} className={'on' === displayLink ? 'btn btn-default btn-xs' : ''} target="_blank" title={`Section Footer Group ${title}`}>{text}</a></li>
    }
  })

  return linkElements
}

export {
  ModuleEdit,
};
