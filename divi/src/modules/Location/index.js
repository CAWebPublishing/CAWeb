// Local dependencies.
import metadata from './module.json';
import { ModuleEdit } from './edit.jsx';
import { placeholderContent } from './placeholder-content.js';
import { conversionOutline } from './conversion-outline.ts';
import { SettingsContent } from './Settings/content.jsx';
import { SettingsDesign } from './Settings/design.jsx';

export const CAWebModuleLocationMetadata = metadata;

export const CAWebModuleLocation = {
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
