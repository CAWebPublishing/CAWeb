// WordPress dependencies.
// import { __ } from '@wordpress/i18n';


// Local dependencies.
import metadata from './module.json';
import { ModuleEdit } from './edit.jsx';
import { placeholderContent } from './placeholder-content.js';
import { conversionOutline } from './conversion-outline.ts';

export const CAWebModuleGithubMetadata = metadata;

export const CAWebModuleGithub = {
  placeholderContent,
  conversionOutline,
  renderers: {
    edit: ModuleEdit,
  }
};
