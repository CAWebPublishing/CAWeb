# CAWeb Extension Modules
This extension is a collection of CAWeb modules. You can use these modules as a reference for your development. This extension uses composer to autoload the modules in PHP. You can find the modules in the `src/modules` folder.

## Installation

### Composer Dependencies

Install the composer dependencies:
```
composer install
```

### Node.js Dependencies

You need to have **npm** available in your node.js environment. And make sure to use **node version: 18.0.0 or later**.

```
npm install
```

## CAWeb Modules
This extension contains 5 example modules.
1. **Static Module** - Simple static module like Blurb module.
2. **Dynamic Module** - Dynamic module like Blog module.
3. **Parent Module** - Parent module like Accordion module.
4. **Child Module** - Child module like Accordion Item module.
5. **Divi 4 Module** - Module converted from Divi 4 to Divi 5.

## Module Icons
You can find the module icons in the `src/icons` folder. You can use these icons for module icon. You can also add your own icons in this folder.

## Available Commands
Some `npm` commands are available for your development and tests.

### `npm install`
It will install dependencies for modules. 

### `npm run build`
It will build all JS and CSS assets for production.  You can also use `npm run build:dev` to build all JS and CSS assets for production.

_Note: If you see error messages for divi packages related to `placeholderContent` in `npm run build` and `npm run build:all`, this is a known issue and it will be fixed once we update `divi-types` npm packages._

### `npm run reset-install`
It will remove node_modules and reinstall all dependencies for D5 modules. For D4 modules, you need to run `npm run reset-install:divi-4`.

_Note: If you are facing error for divi packages in `npm run install`, then you need to run `npm run reset-install` command._

### `npm run zip`
It will zip all assets and files without the `src` folder for distribution.

### `npm run test`
It will run all tests for the module.

## Folder Structure
```
d5-extension-example-modules
├── divi-4
│   ├── build -- (Divi 4 Visual Builder build output)
│   │   └── d5-extension-example-modules-divi4.js
│   ├── modules
│   │   ├── Divi4Module
│   │   │   └── Divi4Module.php
│   │   └── Divi4OnlyModule
│   │       └── Divi4OnlyModule.php
│   ├── src -- (Divi 4 Visual Builder components)
│   │   ├── components
│   │   │   ├── divi4-module
│   │   │   │   └── index.jsx
│   │   │   └── divi4-only-module
│   │   │       └── index.jsx
│   │   └── index.js
│   ├── package.json
│   └── webpack.config.js
├── modules
│   └── ModuleName
│   │   ├── ModuleNameTrait
│   │   │   ├── CustomCssTrait.php
│   │   │   ├── ModuleClassnamesTrait.php
│   │   │   ├── ModuleScriptDataTrait.php
│   │   │   ├── ModuleStylesTrait.php
│   │   │   └── RenderCallbackTrait.php
│   │   └── ModuleName.php
│   └── Modules.php
├── scripts -- (Divi 5 build scripts)
├── src -- (Divi 5 Visual Builder components)
│   ├── components
│   │   └── module-name
│   │       ├── __mock-data__
│   │       │   └── attrs.ts
│   │       │   └── shortcodes.ts -- (for converted modules from Divi 4 module)
│   │       ├── __tests__
│   │       │   ├── __snapshots__
│   │       │   │   └── edit.tsx.snap
│   │       │   └── conversion.ts -- (for converted modules from Divi 4 module)
│   │       │   └── edit.tsx
│   │       ├── custom-css.ts
│   │       ├── edit.tsx
│   │       ├── index.ts
│   │       ├── module.json
│   │       ├── module.scss
│   │       ├── placeholder-content.ts
│   │       ├── settings-advanced.tsx
│   │       ├── settings-content.tsx
│   │       ├── settings-design.tsx
│   │       ├── style.scss
│   │       ├── styles.tsx
│   │       └── types.ts
│   ├── icons
│   │   ├── icon-name
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── index.ts
│   └── module-icons.ts
├── d5-extension-example-modules.php
├── gulpfile.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```
