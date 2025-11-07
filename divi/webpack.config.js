import ConversionOutlineJsonPlugin from './webpack/config/plugins/conversion-outline-json-plugin.js';

export default {
    // Webpack starts bundling the assets from the following file.
    // @see https://webpack.js.org/concepts/#entry
    entry: {
        bundle4: './divi-4/src/index.js',
        bundle: './src/index.ts',
    },
    
    externals: {
        // Divi Dependencies.
        '@divi/rest': ['divi', 'rest'],
        '@divi/data': ['divi', 'data'],
        '@divi/module': ['divi', 'module'],
        '@divi/module-utils': ['divi', 'moduleUtils'],
        '@divi/modal': ['divi', 'modal'],
        '@divi/field-library': ['divi', 'fieldLibrary'],
        '@divi/icon-library': ['divi', 'iconLibrary'],
        '@divi/module-library': ['divi', 'moduleLibrary'],
        '@divi/style-library': ['divi', 'styleLibrary'],
        '@divi/shortcode-module': ['divi', 'shortcodeModule'],
    },
  
    
    plugins: [
        // Generate conversion-outline.json files from conversion-outline.ts files
        new ConversionOutlineJsonPlugin(),
    ],

};
