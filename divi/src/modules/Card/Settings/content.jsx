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
    image,
    title,
    button,
    footer
  } = attrs || {};
  let { show: showImage, } = (image && getAttrByMode(image?.advanced)) || getAttrByMode(defaultSettingsAttrs?.image?.advanced);
  let { show: showHeader } = (title && getAttrByMode(title?.advanced)) || getAttrByMode(defaultSettingsAttrs?.title?.advanced);
  let { show: showButton } = (button && getAttrByMode(button?.advanced)) || getAttrByMode(defaultSettingsAttrs?.button?.advanced);
  let { show: showFooter } = (footer && getAttrByMode(footer?.advanced)) || getAttrByMode(defaultSettingsAttrs?.footer?.advanced);
  
  // Toggle Featured Image field visibility based on if show image is on
  set(groupConfiguration, ['style', 'component', 'props', 'fields', 'src', 'render'], 'off' !== showImage );

  // Toggle Title field visibility based on if show header is on
  set(groupConfiguration, ['header', 'component', 'props', 'fields', 'title', 'render'], 'off' !== showHeader );

  // Toggle Button field visibility based on if show button is on
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'text', 'render'], 'off' !== showButton );
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== showButton );

  // Toggle Footer field visibility based on if show footer is on
  set(groupConfiguration, ['footer', 'component', 'props', 'fields', 'footer', 'render'], 'off' !== showFooter );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}