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

export const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}) => {
  let {
    button
  } = attrs || {};

  let { show } = (button && getAttrByMode( button?.advanced )) || getAttrByMode( defaultSettingsAttrs?.button?.advanced );

  // Toggle Button URL field visibility based on if show more button is on
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'on' === show );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}