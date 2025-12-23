// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  type Metadata,
  type ModuleLibrary,
} from '@divi/types';

// Local dependencies.
import standardMetadata from '../SectionPrimary/module.json';
import fullwidthMetadata from './module.json';

// Fullwidth Modules use everything from the standard modules
import { ModuleEdit } from '../SectionPrimary/edit';
import { ModuleAttrs } from '../SectionPrimary/types';
import { placeholderContent } from '../SectionPrimary/placeholder-content';
import { conversionOutline } from '../SectionPrimary/conversion-outline';
import { SettingsContent } from '../SectionPrimary/Settings/content';

// Merged metadata 
const metadata = Object.assign( standardMetadata, fullwidthMetadata );

export const CAWebModuleFullwidthSectionPrimary: ModuleLibrary.Module.RegisterDefinition<ModuleAttrs> = {
  metadata: metadata as Metadata.Values<ModuleAttrs>,
  placeholderContent,
  conversionOutline,
  renderers: {
    edit: ModuleEdit,
  },
  settings: {
    content: SettingsContent,
  }

};
