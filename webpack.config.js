/**
 * WebPack Configuration for CAWeb Theme
 * 
 * @link https://webpack.js.org/configuration/
 */
import fs from 'fs';

let entry = {
  'caweb-core':[
    './src/styles/frontend.scss',
    '@caweb/icon-library/build/font-only.css',
    './src/scripts/google/',
    './src/scripts/custom/',
    './src/scripts/a11y/'
  ],
  'caweb-admin':[
    './src/styles/admin/index.scss',
    'bootstrap-icons/font/bootstrap-icons.css',
    '@caweb/icon-library/build/font-only.css',
    './src/scripts/admin/',
  ],
  'caweb-customizer': [
    './src/scripts/wp/theme-customizer/bindings/',
  ],
  'caweb-customizer-controls': [
    './src/scripts/wp/theme-customizer/controls/',
  ]
};

fs.readdirSync('node_modules/@caweb/framework/build').filter(file => file.toString().endsWith('.css') && ! file.toString().includes('-rtl') ).forEach((color) => {
  // add entries for each colorscheme 
  var scheme = color.substring(0, color.indexOf('.')).replace(' ', '');

  entry[`${scheme}`] = [
    `@caweb/framework/build/${scheme}.css`,
    `@caweb/framework/build/${scheme}.js`
  ]
})

export default {
  entry
}