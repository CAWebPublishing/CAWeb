// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
  CommonStyle,
  TextStyle,
} from '@divi/module';

import { 
  type Element,
} from '@divi/types';

// Local dependencies.
import { ModuleAttrs } from './types';
import { cssFields } from './custom-css';

/**
 * Module's style components.
 *
 * @since ??
 */
 const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements,
}: StylesProps<ModuleAttrs>): ReactElement => {
  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {elements.style({
        attrName: 'module',
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          }
        },
      })}
     
      {elements.style({
        attrName: 'title',
      })}
      {elements.style({
        attrName: 'content',
      })}
      <CssStyle
        selector={orderClass}
        attr={attrs?.css}
        cssFields={cssFields}
      />
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};
