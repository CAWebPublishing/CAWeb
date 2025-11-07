import { omit } from 'lodash';

import { addAction } from '@wordpress/hooks';

import { registerModule, getPossibleModuleConversionOutline } from '@divi/module-library';

// import { childModule } from './components/child-module';
// import { d4Module } from './components/d4-module';
// import { dynamicModule } from './components/dynamic-module';
// import { parentModule } from './components/parent-module';
// import { staticModule } from './components/static-module';
import { CAWebModuleProfileBanner } from './modules/ProfileBanner';
import { CAWebModuleTest } from './modules/Test';
// import './module-icons';

// Register modules.
addAction('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', () => {
  console.log( 'Registering Modules');
  registerModule(CAWebModuleProfileBanner.metadata, omit(CAWebModuleProfileBanner, 'metadata'));
  registerModule(CAWebModuleTest.metadata, omit(CAWebModuleTest, 'metadata'));
});
