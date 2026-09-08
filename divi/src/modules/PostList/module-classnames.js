import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { ModuleAttrs } from './types.ts';
import {
  getAttrByMode,
} from '@divi/module-utils';

/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}) => {

  let { image, style, isAccordion } = attrs || {};
  
  let displayImage = getAttrByMode(image?.innerContent);
  let selectedStyle = getAttrByMode(style?.innerContent);
  
  classnamesInstance.add(selectedStyle);

  // if featured image is displayed
  if( 'on' === displayImage ) {
    classnamesInstance.add('indent');
  }

  // if is accordion add appropriate class
  if( isAccordion ) {
    classnamesInstance.add('accordion');
  }

  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
