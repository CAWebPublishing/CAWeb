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

  let layout = getAttrByMode(attrs?.layout?.innerContent);
  
  // Add panel class to module.
  classnamesInstance.add('card');
  classnamesInstance.add(`card-${layout}`);
  
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
