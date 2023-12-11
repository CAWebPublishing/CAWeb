/**
 * WebPack Configuration for CAWeb Theme
 * 
 * @link https://webpack.js.org/configuration/
 */
const fs = require('fs'); // File System
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

fs.readdirSync('./src/').filter(file => file.toString().startsWith('version-') ).forEach((version) => {
  var ver = version.substring(version.indexOf('-') + 1);

  // add entries for each colorscheme 
  fs.readdirSync(`./src/${version}/colorscheme` ).forEach( (color) => {
    var scheme = color.substring(0, color.indexOf('.')).replace(' ', '');
    
    entries[`${scheme}-${ver}`] = [
      `./src/${version}/cagov.core.css`,
      `./src/${version}/colorscheme/${color}`,
      //`./src/${version}/cagov.core.js`,
    ]
  })

})

module.exports = {
  mode: 'none',
  plugins: [new MiniCssExtractPlugin({
    linkType: "text/css",
  })],
  entry: entries,
  output: {
    clean: true
  },
  module:{
      rules: [
        { 
          test: /\.[s]?css$/i, 
          use: [
            MiniCssExtractPlugin.loader,
            //'style-loader', // Adds CSS to the DOM by injecting a `<style>` tag
            'css-loader', // Interprets `@import` and `url()` like `import/require()` and will resolve them
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: () => [
                    autoprefixer
                  ]
                }
              }
            },
            'sass-loader', // Loads a SASS/SCSS file and compiles it to CSS
          ]
        }
      ],
  }
}