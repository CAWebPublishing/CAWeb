import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { ModuleAttrs } from './types.ts';


/**
 * Module classnames function for Section Carousel Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}) => {

  classnamesInstance.add('carousel');
  classnamesInstance.add('slide');

  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
