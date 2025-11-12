import { omit } from 'lodash';

import { addAction } from '@wordpress/hooks';

import { registerModule, getPossibleModuleConversionOutline } from '@divi/module-library';

/**
 * Internal dependencies
 */

// modules
import { 
  CAWebModuleProfileBanner,
  CAWebModuleLocation 
} from './modules';

// import './module-icons';

// Register modules.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', () => {
  console.log( 'Registering Modules');
  registerModule(CAWebModuleProfileBanner.metadata, omit(CAWebModuleProfileBanner, 'metadata'));
  registerModule(CAWebModuleLocation.metadata, omit(CAWebModuleLocation, 'metadata'));
});
