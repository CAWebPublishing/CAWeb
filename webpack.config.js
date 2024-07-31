/**
 * WebPack Configuration for CAWeb Theme
 * 
 * @link https://webpack.js.org/configuration/
 */
const fs = require('fs'); // File System
const path = require('path'); // File System
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let entries = {
  'caweb-core':[
    './src/styles/frontend.scss',
    './src/scripts/google/',
    './src/scripts/custom/',
    './src/scripts/a11y/'
  ],
  'caweb-admin':[
    './src/styles/admin/index.scss',
    './src/scripts/admin/',
  ],
  'caweb-customizer': [
    './src/scripts/wp/theme-customizer/bindings/',
  ],
  'caweb-customizer-controls': [
    './src/scripts/wp/theme-customizer/controls/',
  ]
};

fs.readdirSync('./src/version-5.5/colorscheme').forEach((color) => {
  // add entries for each colorscheme 
  var scheme = color.substring(0, color.indexOf('.')).replace(' ', '');
    
  entries[`${scheme}-5.5`] = [
    `./src/version-5.5/cagov.core.css`,
    `./src/version-5.5/colorscheme/${color}`,
  ]
})
fs.readdirSync('node_modules/@caweb/html-webpack-plugin/build').filter(file => file.toString().endsWith('.css') && ! file.toString().includes('-rtl') ).forEach((color) => {
  // add entries for each colorscheme 
  var scheme = color.substring(0, color.indexOf('.')).replace(' ', '');

  entries[`${scheme}-6.0`] = [
    `@caweb/html-webpack-plugin/build/${scheme}.css`,
    `@caweb/html-webpack-plugin/build/${scheme}.js`
  ]
})

module.exports = {
  entry: entries,
}