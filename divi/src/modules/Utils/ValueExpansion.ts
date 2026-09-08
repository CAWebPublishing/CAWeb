import { find, map } from 'lodash';

import { select } from '@divi/data';

/**
 * Get included categories.
 *
 * @param {string} categories Categories.
 *
 * @returns {Array} - Included categories.
 */
export const includedCategories = (categories: string): string[] => {
  const postCategories = select('divi/settings').getSetting(['taxonomy', 'postCategories']);

  // categories = '';
  // return [];
  // console.log( categories );
  // return categories;
  // return [ 'this works?'];
  // return categories.split(',');

  const filterCategories = map(
    categories.split(',').filter(item => item !== ''),
    item => {
      const categoryExists = find(postCategories, ['term_id', Number(item)]);
      if (categoryExists) {
        return Number(item);
      }
    },
  )
    .filter(Boolean)
    .map(String);

  filterCategories.shift();

  return filterCategories;
};

/**
 * Get included tags.
 *
 * @param {string} tags Tags.
 *
 * @returns {Array} - Included tags.
 */
export const includedTags = (tags: string): string[] => {
  const postTags = select('divi/settings').getSetting(['taxonomy', 'postTag']);

  const filterTags = map(
    tags.split(',').filter(item => item !== ''),
    item => {
      const tagExists = find(postTags, ['term_id', Number(item)]);
      if (tagExists) {
        return Number(item);
      }
    },
  )
    .filter(Boolean)
    .map(String);

  return filterTags;
};

export const replacePostListStyle = (style: string): string => {
  // console.log('replacePostListStyle', style);
  return style.replace('profile', 'profiles');
};
