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

export const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}: Module.Settings.Panel.Props<ModuleAttrs>): ReactElement => {

  let layout = getAttrByMode(attrs?.layout?.innerContent);
  let layoutDefault = getAttrByMode(defaultSettingsAttrs?.layout?.innerContent);
  
  layout = layout ?? layoutDefault;

  // Toggle Icon Design group visibility based on layout
  set(groupConfiguration, ['icon', 'render'], 'banner' !== layout );

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}