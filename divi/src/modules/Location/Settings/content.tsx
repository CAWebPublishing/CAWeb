// External dependencies.
import React, { ReactElement } from 'react';
import { set } from 'lodash';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  ModuleGroups,
} from '@divi/module';
import { getAttrByMode } from '@divi/module-utils';
import {
  type Module,
} from '@divi/types';

// Local dependencies.
import {ModuleAttrs} from "../types";

export const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}: Module.Settings.Panel.Props<ModuleAttrs>): ReactElement => {

  let layout = getAttrByMode(attrs?.layout?.innerContent);
  let layoutDefault = getAttrByMode(defaultSettingsAttrs?.layout?.innerContent);
  let contact = getAttrByMode(attrs?.contact?.innerContent);
  let link = getAttrByMode(attrs?.link?.innerContent);
  
  layout = layout ?? layoutDefault

  // Toggle Featured Image field visibility based on layout
  set(groupConfiguration, ['style', 'component', 'props', 'fields', 'src', 'render'], 'banner' === layout );

  // Toggle Description field visibility based on layout
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'descInnercontent', 'render'], 'banner' === layout );

  // Toggle Show Contact Button field visibility based on layout
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'showContact', 'render'], 'contact' === layout );

  // Toggle Phone/Fax fields visibility based on layout and Show Contact Button
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'phone', 'render'], 'contact' === layout && 'on' === contact?.show );
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'fax', 'render'], 'contact' === layout && 'on' === contact?.show );

  // Toggle Show Button field visibility based on layout
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'showLink', 'render'], 'mini' !== layout );

  // Toggle URL field visibility based on Show Button
  set(groupConfiguration, ['location', 'component', 'props', 'fields', 'url', 'render'], 'on' === link?.show );

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}