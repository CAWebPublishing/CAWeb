// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  type Metadata,
  type ModuleLibrary,
} from '@divi/types';

// Local dependencies.
import metadata from './module.json';
import { ModuleEdit } from './edit';
import { ModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';
import { conversionOutline } from './conversion-outline';
import { SettingsContent } from './Settings/content';
import { SettingsDesign } from './Settings/design';


export const CAWebModuleLocation: ModuleLibrary.Module.RegisterDefinition<ModuleAttrs> = {
  metadata: metadata as Metadata.Values<ModuleAttrs>,
  placeholderContent,
  conversionOutline,
  renderers: {
    edit: ModuleEdit,
  },
  settings: {
    content: SettingsContent,
    design: SettingsDesign,
  }
};
