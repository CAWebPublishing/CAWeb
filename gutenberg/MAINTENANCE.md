# MAINTENANCE

## Issues board
(Coming soon)
(Includes contact information for teams working on Gutenberg Block plugins)

## Branches
* The `main` branch of this plugin should only include content componnets published on the design system website.
* The `staging` branch is used for QA testing and validation of the components
* The `development` branch is used for shared work.
* Other branches can be submitted for feature development following this pattern: `feature/{issue-number}-{short-description}`
* Hotfixes may be applied to branches as needed.

## Content updates
Please notes that some updates will update the markup on a page.

An editor can try the "resolve" feature on pages with issues.


## How to Get Started Building Gutenberg Blocks

Make sure npm is installed along with necessary packages, from a terminal in the projects root directory run the following command.

`npm install`

### Creating Blocks

From a terminal in the projects root directory run the following command.

`npm run new-block --name=`<block name>``

**Note:**It might take a couple of minutes for the block to build

### Editing the block.json File

Modify the `gutenberg/blocks/<block name>/src/block.json` file

If necessary, update the following fields:

@TODO Note this needs to be updated
- title
- description
- add [block attributes](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/)

### **Block Editor Styling**

Modify the `gutenberg/blocks/<block name>/src/editor.scss` file to change the backend styling. 
Modify the `gutenberg/blocks/<block name>/src/style.scss` file to change the frontend styling.

### **[Block Edit & Save](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/)**

Modify the `gutenberg/blocks/<block name>/src/edit.js` file to change the edit functionality. 
Modify the `gutenberg/blocks/<block name>/src/save.js` file to change the save functionality.

### **Rebuild Block Code**
From a terminal in the projects root directory run the following command.
`npm run build`

## WordPress Gutenberg Block tips
* We use these WordPress components and packages: https://developer.wordpress.org/block-editor/reference-guides/packages/
* Please see current examples for some UI challenges. 
* If you have questions about the integration specs, features and requirements please connect with Yesenia or Chach and they will help. (Currently in pre-planning stage 4/29/2022.)
- Build and set up for the blocks takes a couple of minutes. The bundle and bundling are large.
- If VSCode slows down, be sure to exclude `node_modules` from search.


## Update Content components from Design System
* This plugin only includes content compontents from the Design System, other components are handled differently.
* Manually update `./blocks/*/package.json` with updated version number.
* Make sure the markup changes match component documentation from [Design System website](https://designsystem.webstandards.ca.gov/components/. 
* Be aware that there is a lot of legacy documentation on Gutenberg Blocks, but the examples in this git repo match the current spec.
* Any issues with Design System components, file on https://github.com/cagov/design-system.
* We recommend checking out the design and engineering principles: https://designsystem.webstandards.ca.gov/components/
* We suggest working with a designer to help with wire-framing a UI experience in the editor.


## Debugging mode for developers

### To run with debugger
* Right now: edit: define( 'CAGOV_DESIGN_SYSTEM_GUTENBERG__DEBUG', false ); 

* Soon: `export CAGOV_DESIGN_SYSTEM_WORDPRESS_GUTENBERG="true"`
Create local environment variable. 

* From root directory, run `npm run build` to generate a full build of *all* Gutenberg Blocks, running from `/src` folder.
* Updates will load in `build/cagov-design-system.debug.js`, `build/gutenberg.debug.js`, etc.
