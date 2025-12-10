import { omit } from 'lodash';

import { addAction } from '@wordpress/hooks';

import { registerModule, getPossibleModuleConversionOutline } from '@divi/module-library';

/**
 * Internal dependencies
 */

// modules
import { 
  CAWebModuleProfileBanner,
  CAWebModuleLocation,
  CAWebModuleSectionPrimary 
} from './modules';

// import icon-library integration
// import './icons';

// Register modules.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', () => {
  registerModule(CAWebModuleProfileBanner.metadata, omit(CAWebModuleProfileBanner, 'metadata'));
  registerModule(CAWebModuleLocation.metadata, omit(CAWebModuleLocation, 'metadata'));
  registerModule(CAWebModuleSectionPrimary.metadata, omit(CAWebModuleSectionPrimary, 'metadata'));
});
