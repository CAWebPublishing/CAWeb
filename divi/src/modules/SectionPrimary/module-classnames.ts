import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { ModuleAttrs } from './types';


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
}: ModuleClassnamesParams<ModuleAttrs>): void => {

  classnamesInstance.add('section');

  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
