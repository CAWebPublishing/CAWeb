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
import { SectionFooterModuleEditProps } from './types.ts';
import { ModuleStyles } from './styles.jsx';
import { moduleClassnames } from './module-classnames.js';
import { ModuleScriptData } from './module-script-data.jsx';

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionFooterModuleEditProps} props React component props.
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
      {childrenIds && childrenIds.length > 0 && (
        <ChildModulesContainer ids={childrenIds} isLooped={isLooped} loopIndex={loopIndex} canvasId={canvasId} />
      )}
    </ModuleContainer>
  );
}

export {
  ModuleEdit,
};
