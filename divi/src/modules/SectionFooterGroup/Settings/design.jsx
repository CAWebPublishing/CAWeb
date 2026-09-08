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

// Local dependencies.
import {ModuleAttrs} from "../types";

export const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}) => {

  let { 
      icon
    } = attrs || {};

  let { show } = (icon && getAttrByMode(icon?.advanced)) ?? getAttrByMode(defaultSettingsAttrs?.icon?.advanced);

  // Toggle Icon Design group visibility based on layout
  set(groupConfiguration, ['designStyle', 'component', 'props', 'fields', 'icon', 'render'], 'on' === show );
  

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}