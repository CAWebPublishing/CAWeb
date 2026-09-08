
// Local dependencies.
import metadata from './module.json';
import { ModuleEdit } from './edit.jsx';
import { placeholderContent } from './placeholder-content.js';
import defaultSettingsAttrs from './module-default-render-attributes.json';
import { conversionOutline } from './conversion-outline.ts';
import { SettingsContent } from './Settings/content.jsx';
import { SettingsDesign } from './Settings/design.jsx';

export const CAWebModuleSectionFooterGroupMetadata = metadata;

export const CAWebModuleSectionFooterGroup = {
  placeholderContent,
  conversionOutline,
  defaultAttrs: defaultSettingsAttrs,
  renderers: {
    edit: ModuleEdit,
  },
  settings: {
    content: SettingsContent,
    design: SettingsDesign,
  }

};
