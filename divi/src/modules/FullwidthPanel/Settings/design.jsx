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

export const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}) => {

  let { 
      icon
    } = attrs || {};
    let { show: showIcon } = (icon && getAttrByMode(icon?.advanced)) || getAttrByMode(defaultSettingsAttrs?.icon?.advanced);
    
  // Toggle Heading icon and color field visibility based on if show icon is on
  set(groupConfiguration, ['designHeader', 'component', 'props', 'fields', 'icon', 'render'], 'off' !== showIcon );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}