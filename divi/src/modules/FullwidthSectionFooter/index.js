
// Local dependencies.
import metadata from './module.json';
import { ModuleEdit } from './edit.jsx';
import { placeholderContent } from './placeholder-content.js';
import defaultSettingsAttrs from './module-default-render-attributes.json';
import { conversionOutline } from './conversion-outline.ts';
import { SettingsContent } from './Settings/content.jsx';

export const CAWebModuleFullwidthSectionFooterMetadata = metadata;

export const CAWebModuleFullwidthSectionFooter = {
  placeholderContent,
  conversionOutline,
  defaultAttrs: defaultSettingsAttrs,
  renderers: {
    edit: ModuleEdit,
  }
};
