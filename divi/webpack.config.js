import ConversionOutlineJsonPlugin from './webpack/config/plugins/conversion-outline-json-plugin.js';

export default {
    // Webpack starts bundling the assets from the following file.
    // @see https://webpack.js.org/concepts/#entry
    entry: {
        bundle4: './divi-4/src/index.js',
        bundle: './src/index.js',
        // admin: './src/styles/_icons.scss',
    },
    
    externals: {
        underscore: '_',
        jquery: 'jQuery',
        lodash: 'lodash',
        react: ['vendor', 'React'],
        'react-dom': ['vendor', 'ReactDOM'],

        // Divi Dependencies.
        '@divi/data': ['divi', 'data'],
        '@divi/module': ['divi', 'module'],
        '@divi/module-library': ['divi', 'moduleLibrary'],
        '@divi/module-utils': ['divi', 'moduleUtils'],
        '@divi/rest': ['divi', 'rest'],
        // '@divi/modal': ['divi', 'modal'],
        // '@divi/field-library': ['divi', 'fieldLibrary'],
        // '@divi/icon-library': ['divi', 'iconLibrary'],
        // '@divi/style-library': ['divi', 'styleLibrary'],
        // '@divi/shortcode-module': ['divi', 'shortcodeModule'],
    },
  
    resolve: {
        extensions: ['.ts', '.tsx' ],
    },
    plugins: [
        // Generate conversion-outline.json files from conversion-outline.ts files
        new ConversionOutlineJsonPlugin(),
    ],

};
