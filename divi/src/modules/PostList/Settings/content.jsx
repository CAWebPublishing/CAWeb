// External dependencies.
import React, { ReactElement, useMemo, useState } from 'react';
import { set } from 'lodash';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  ModuleGroups,
} from '@divi/module';
// import { BlogAttrs, FieldLibrary, Module } from '@divi/types';
import { useSelect, select } from '@divi/data';
import { getCategoriesForPostType, transformTaxonomiesToCheckboxOptions } from '@divi/module-utils';
import { getAttrByMode } from '@divi/module-utils';

// Local dependencies.

export const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration,
}) => {

  let { 
    style,
    categories,
    tags,
  } = attrs || {};

  let selectedStyle = (style?.innerContent && getAttrByMode(style?.innerContent)) || getAttrByMode(defaultSettingsAttrs?.style?.innerContent);
  let {all: showAllCategories} = (categories && getAttrByMode(categories?.advanced)) || getAttrByMode(defaultSettingsAttrs?.categories?.advanced);
  let selectedCategories = (categories?.innerContent && getAttrByMode(categories?.innerContent)) || getAttrByMode(defaultSettingsAttrs?.categories?.innerContent);
  let {all: showAllTags} = (tags && getAttrByMode(tags?.advanced)) || getAttrByMode(defaultSettingsAttrs?.tags?.advanced);
  let selectedTags = (tags?.innerContent && getAttrByMode(tags?.innerContent)) || getAttrByMode(defaultSettingsAttrs?.tags?.innerContent);
  let isGeneralListStyle = 'general-list' === selectedStyle;
  let isFaqsListStyle = 'faqs-list' === selectedStyle;
  
  // Categories and tags are only visible if the selected style is not a 'faqs-list'
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'allCats', 'render'], isGeneralListStyle );
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'allTags', 'render'], isGeneralListStyle );
  
  // Toggle the visibility of the category and tag fields
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'cats', 'render'], 'off' === showAllCategories );
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'tags', 'render'], 'off' === showAllTags );
 
  // Accordion style is only visible if the selected style is a 'faqs-list'
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'faq', 'render'], isFaqsListStyle );
  
  // Featured image field is only visible if the selected style is a 'general-list'
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'imageInnercontent', 'render'], ! isFaqsListStyle );
  
  // Excerpt is only visible if the selected style is a 'general-list'
  set( groupConfiguration, ['style', 'component', 'props', 'fields', 'excerptInnercontent', 'render'], 
    [
      'course-list',
      'events-list',
      'general-list', 
      'news-list',
    ].includes(selectedStyle) 
  );

  // If the selected style is a 'general-list', we need to set the selected categories and tags in the group configuration
  if( isGeneralListStyle ) {
    const allCategories = getCategoriesForPostType('post');
    const allTags = select('divi/settings').getSetting(['taxonomy', 'postTag']); 
  
    const categoryCheckboxes = transformTaxonomiesToCheckboxOptions(allCategories);
    const tagCheckboxes = transformTaxonomiesToCheckboxOptions(allTags);

    // Add all categories to the category field options if options is empty 
    if( groupConfiguration.style?.component?.props?.fields?.cats?.component?.props?.options.length === 0 ) {
      groupConfiguration.style?.component?.props?.fields?.cats?.component?.props?.options.push(...categoryCheckboxes);
    }
    if( groupConfiguration.style?.component?.props?.fields?.tags?.component?.props?.options.length === 0 ) {
      groupConfiguration.style?.component?.props?.fields?.tags?.component?.props?.options.push(...tagCheckboxes);
    }
    
    // Set the selected categories and tags in the group configuration
    set( groupConfiguration, ['style', 'component', 'props', 'fields', 'cats', 'defaultAttr', 'desktop', 'value'], selectedCategories );
    set( groupConfiguration, ['style', 'component', 'props', 'fields', 'tags', 'defaultAttr', 'desktop', 'value'], selectedTags );
  
  }

  return (
    <ModuleGroups
      groups={groupConfiguration}
    />
  );
}