# CHANGELOG

### 2.0.0
Original Gutenberg Blocks plugin was written for integration on a multi-site WordPress host that allowed one child theme and required Divi, it also included work for supporting static site generation and site flattening by using the WordPress REST API with innovations developed for supporting the covid19.ca.gov site throughout the pandemic.

This version of the plugin incorporates feedback and requests from different WordPress hosting platforms used in the State of California.
* CAWeb Publishing
* ODI Publishing
* (More to come)

CAWeb contributions:
* Change Block editor application UI to be current WordPress recommended interface.
* Gulp bundler from CAWeb, Danny Guzman
* make it possible to import plugin to CAWeb by PR (seeing if it will be possible to use Github releases instead.)

Office of Digital Innovation (ODI) contributions:
* Use imported, versioned external bundle from design system.
* Remove extra Gutenberg plugins from editor UI (reduce errors from using un-tested blocks)
* Move 11ty headless support code to new plugin: 
* Update README reflecting recent changes
* Establish new naming convention for Design System integrations plugins (for WordPress and other frameworks, platforms)
* Gutenberg block improvements
* Remove unpublished blocks, will create a staging zone
* Add Architectural Decision Records folder and example record
* Convert blocks to alternate React interface.
* Update component names

### 1.1.7 (planned)
- Accordion hotfix

### 1.1.6
- Add support for SVG, CSV, JSON mime-types.

### 1.1.5

- Hotfix on api-redirection, escape endpoint if Redirection plugin is not active.

### 1.1.4

- Post list uses correct API data endpoint. (A hotfix that fixes display of data on news post lists)

### 1.1.3

- Fix REST API error that breaks Divi's gutenberg.js script (Empty Posts have no data and Divi does not want a null result, even though WP docs suggests this.
- Copy edits CHANGELOG and ROADMAP
- Hotfixes for Pantheon distribution (footer menus)
- Hotfix for production cannabis site: feedback form missing color variable

### 1.1.2

- Check for CAWeb theme & deliver CAWeb specific page templates, otherwise default to Pantheon cagov theme option.
- Clean up folder structure
- Add more notes/suggestions about the structure and direction of this code for keeping flexibility with development coming from agency partners.
- Copy editing
- Removed some reference code

### 1.1.1

- Rename `ca-design-system` block namespace to `cagov-design-system.`
- Add `patterns/template-pattern-extension` - Structure a starter plugin for adding structured data and blocks for specific State publishing content patterns.
- Add `template-custom-blocks-extension` - Structure a starter plugin that shows how to support custom Gutenberg Blocks as extensions of the California Design System.
- Not deployed to cannabis.ca.gov, temporary update only for drought.ca.gov to update the Pantheon + no CAWeb theme code
- Update og meta content for API
- Alter output for Pantheon development
- Add Content Admin role (which suffered from an issue of not being able to load capabilities in the 15 minutes we had to add this feature)
- Merge in change to support headless rendering.
- Refactor plugin structure to delineate current usage & future changes for planned work.
- Include new `regulatory-outline` block. [#245](https://github.com/cagov/ca-design-system-gutenberg-blocks/issues/245)
- REST API endpoint updates to structure (aligns with headless release data mapping)
- Events system (Event detail, Events Post List, REST support)
- Campaign toolkit feature (`promotional-card` and `scrollable-card`)

### 1.1.0

- Refactored single plugin for any WordPress environment.
- Improve plugin naming conventions.
- Decide to keep `ca-design-system` as the block namespace as markup on sites are mapped to this naming convention. Will think this through for design-system version upgrades and validate the long-term usage of this block-library key. The name is mapped to the specific library name, prefixed with ca. The name should be `cagov-design-system` to be accurate to the GitHub repository name and project name. This has migration requirements, so postponing this to the future.
- Keeping the same Gutenberg block library namespace for the California Design System (`ca-design-system`) split blocks into groups

* `cagov-design-system-html` - Simple Gutenberg Blocks that render static markup samples for the California Design System.

* `cagov-design-system-blocks` — Mirrors `@cagov/design-system` published component packages. Each package is hosted on `npm` and loaded into the block library from `cagov-design-system/

* `patterns/cagov-events` - Initial Events data systems plugin, exposes data to REST API

* `patterns/cagov-news` - Initial News posts data systems plugin, exposes data to REST API

- Merge in change to support headless rendering.
- Refactor plugin structure to delineate current usage & future changes for planned work.
- Include new `regulatory-outline` block. [#245](https://github.com/cagov/ca-design-system-gutenberg-blocks/issues/245)
- REST API endpoint updates to structure (aligns with headless release data mapping)
- Events system (Event detail, Events Post List, REST support)
- Campaign toolkit feature (`promotional-card` and `scrollable-card`)

### Releases up to 1.0.17

Build on initial support of early design system component for WordPress monolith

Initial exploration of using Gutenberg block editing tools with the California Design System.

In this phase, we specified the component structure, github repository organization, found preferred methods of rendering Gutenberg blocks, defined matrices for component publishing, and our participation framework.

Working with CAWeb publishing and ca.gov, we began weaving knowledge from the COVID-19 website with State of California web publishing.

We started with a monolithic WordPress instance for the Department of Cannabis Control, and created a plugin that could provide design system elements, specially tailored for State communication officers, interagency communication, and agency support.

Using the same REST API, we built a headless clone off of the original WordPress site and began repackaging the initial plugin code for installation in a variety of WordPress environments and future collaboration, and separating out some of the special adaptations that were necessary to work with the CAWeb theme.

### Prior work

This modular approach to a design system uses the accumulated knowledge of the Office of Digital Innovation team's static-site, headless WordPress implementation for https://covid19.ca.gov and combining it with the CAWeb theme that implements the State Template.