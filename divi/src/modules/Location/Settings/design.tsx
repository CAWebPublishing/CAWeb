// External dependencies.
import React, { ReactElement } from 'react';
import { set } from 'lodash';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  ModuleGroups,
} from '@divi/module';
import { mergeAttrs } from '@divi/module-utils';
import {
  type Module,
} from '@divi/types';

// Local dependencies.
import {ModuleAttrs} from "../types";

export const SettingsDesign = ({
  defaultSettingsAttrs,
  parentAttrs,
  groupConfiguration,
}: Module.Settings.Panel.Props<ModuleAttrs>): ReactElement => {

  // Insert custom Icon default attribute value inherited from Parent Module if any.
  if (groupConfiguration?.contentIcon?.component?.props) {
    // const defaultIconAttrs = mergeAttrs({
    //   defaultAttrs: defaultSettingsAttrs?.icon?.innerContent,
    //   attrs:        parentAttrs?.asMutable({ deep: true })?.icon?.innerContent,
    // });

    // set(groupConfiguration, ['contentIcon', 'component', 'props', 'fields', 'iconInnercontent', 'defaultAttr'], defaultIconAttrs);
  }

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}