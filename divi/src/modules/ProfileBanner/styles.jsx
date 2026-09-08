// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  StyleContainer,
  CssStyle,
  CommonStyle,
  TextStyle,
} from '@divi/module';


// Local dependencies.
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
}) => {
  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {elements.style({
        attrName: 'module',
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
        },
      })}
      <TextStyle
        selector={`${orderClass} .example_d4_module_inner`}
        attr={attrs?.module?.advanced?.text}
      />
      {
        // Set the `.example_d4_module_inner` element `position` to `relative` if the background image has parallax enabled.
      }
      <CommonStyle
        selector={`${orderClass} .example_d4_module_inner`}
        attr={attrs?.module?.decoration?.background}
        declarationFunction={({attrValue}) => {
          if ('on' === attrValue?.image?.parallax?.enabled) {
            return 'position: relative;';
          }

          return '';
        }}
      />
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
