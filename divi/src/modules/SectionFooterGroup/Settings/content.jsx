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

  let links = {};
  
  Object.entries(defaultSettingsAttrs).map(([key, value]) => {
    // only if the key starts with 'link'
    if( key.startsWith('link')  ) {
      // if the attrs exists, use that, otherwise use the defaultSettingsAttrs
      links[key] = attrs?.[key] || value;
    }
  })

  let { show } = (button && getAttrByMode( button?.advanced )) || getAttrByMode( defaultSettingsAttrs?.button?.advanced );

  Object.entries(links).forEach(([key, value]) => {
    let { show } = getAttrByMode(value?.advanced) ?? getAttrByMode( defaultSettingsAttrs?.[key]?.advanced );

    // Toggle Link URL field visibility based on if show more button is on
    set(groupConfiguration, ['body', 'component', 'props', 'fields', `${key}Text`, 'render'], 'on' === show );
    set(groupConfiguration, ['body', 'component', 'props', 'fields', `${key}Url`, 'render'], 'on' === show );
  })

  // Toggle Button URL field visibility based on if show more button is on
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'on' === show );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}