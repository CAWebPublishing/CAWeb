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

  let image = getAttrByMode(attrs?.image?.innerContent);
  let link = getAttrByMode(attrs?.link?.innerContent);

  // Toggle Featured Image Image Position, Fade From Left and Src field visibility based on if show image is on
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'position', 'render'], 'off' !== image?.show );
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'fade', 'render'], 'off' !== image?.show );
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'src', 'render'], 'off' !== image?.show );

  // Toggle Link URL field visibility based on if show more button is on
  set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== link?.show );
  
  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}