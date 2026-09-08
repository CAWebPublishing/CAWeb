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

export const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}) => {

  let { 
    button,
  } = attrs || {};
  let { show: showButton } = (button && getAttrByMode(button?.advanced)) || getAttrByMode(defaultSettingsAttrs?.button?.advanced);
  
  // Toggle Button field visibility based on if show button is on
  set(groupConfiguration, ['header', 'component', 'props', 'fields', 'text', 'render'], 'off' !== showButton );
  set(groupConfiguration, ['header', 'component', 'props', 'fields', 'url', 'render'], 'off' !== showButton );
  set(groupConfiguration, ['header', 'component', 'props', 'fields', 'target', 'render'], 'off' !== showButton );

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}