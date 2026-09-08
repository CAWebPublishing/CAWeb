// External Dependencies.
import React, { ReactElement } from 'react';

// Divi Dependencies.
import {
  ChildModulesContainer,
  ModuleContainer,
} from '@divi/module';

import {
  getAttrByMode,
} from '@divi/module-utils';

// Local Dependencies.
import { SectionCarouselModuleEditProps } from './types.ts';
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionCarouselModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = (props) => {
  const {
    attrs,
    id,
    name,
    elements,
    childrenIds,
    isLooped,
    loopIndex,
    canvasId,
  } = props;

  let indicators = [];

  for( let i = 0; i < childrenIds.length; i++ ) {
    indicators.push(<button key={i} type="button" data-bs-target={`#${id}`} data-bs-slide-to={i} className={i === 0 ? 'active' : ''}></button>);
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
      htmlAttrs={{
        'data-bs-ride': 'carousel',
      }}
    >
      {
        elements.styleComponents({
          attrName: 'module',
        })
      }
      { 
        indicators.length ? <div className="carousel-indicators">{indicators}</div> : ''
      }
      {childrenIds && childrenIds.length > 0 && (
        <div className="carousel-inner">
          <ChildModulesContainer 
            ids={childrenIds} 
            isLooped={isLooped} 
            loopIndex={loopIndex} 
            canvasId={canvasId} />
        </div>
      )}
      <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
			  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			  <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
