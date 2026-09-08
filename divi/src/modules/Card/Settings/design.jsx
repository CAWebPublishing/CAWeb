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
    layout,
    title,
    footer
  } = attrs || {};

  let { show: showHeader } = (title && getAttrByMode(title?.advanced)) || getAttrByMode(defaultSettingsAttrs?.title?.advanced);
  let { show: showFooter } = (footer && getAttrByMode(footer?.advanced)) || getAttrByMode(defaultSettingsAttrs?.footer?.advanced);
  let layoutStyle = (layout && getAttrByMode(layout?.innerContent)) || getAttrByMode(defaultSettingsAttrs?.layout?.innerContent);
  
  // Toggle Layout color field visibility based on if layout is custom
  set(groupConfiguration, ['designStyle', 'component', 'props', 'fields', 'layoutInnercontent', 'render'], 'default' !== layoutStyle );

  // Toggle Heading size and color field visibility based on if show header is on
  set(groupConfiguration, ['designHeader', 'component', 'props', 'fields', 'size', 'render'], 'off' !== showHeader );
  set(groupConfiguration, ['designHeader', 'component', 'props', 'fields', 'color', 'render'], 'off' !== showHeader );

  // Toggle Footer color field visibility based on if show footer is on
  set(groupConfiguration, ['designFooter', 'component', 'props', 'fields', 'footerInnercontent', 'render'], 'off' !== showFooter );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}