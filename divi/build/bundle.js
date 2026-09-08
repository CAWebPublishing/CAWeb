/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Card/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    image,
    title,
    button,
    footer
  } = attrs || {};
  let {
    show: showImage
  } = image && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(image?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.image?.advanced);
  let {
    show: showHeader
  } = title && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(title?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.title?.advanced);
  let {
    show: showButton
  } = button && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(button?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.button?.advanced);
  let {
    show: showFooter
  } = footer && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(footer?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.footer?.advanced);

  // Toggle Featured Image field visibility based on if show image is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'src', 'render'], 'off' !== showImage);

  // Toggle Title field visibility based on if show header is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['header', 'component', 'props', 'fields', 'title', 'render'], 'off' !== showHeader);

  // Toggle Button field visibility based on if show button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'text', 'render'], 'off' !== showButton);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== showButton);

  // Toggle Footer field visibility based on if show footer is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['footer', 'component', 'props', 'fields', 'footer', 'render'], 'off' !== showFooter);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/Card/Settings/design.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    layout,
    title,
    footer
  } = attrs || {};
  let {
    show: showHeader
  } = title && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(title?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.title?.advanced);
  let {
    show: showFooter
  } = footer && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(footer?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.footer?.advanced);
  let layoutStyle = layout && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(layout?.innerContent) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.layout?.innerContent);

  // Toggle Layout color field visibility based on if layout is custom
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['designStyle', 'component', 'props', 'fields', 'layoutInnercontent', 'render'], 'default' !== layoutStyle);

  // Toggle Heading size and color field visibility based on if show header is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['designHeader', 'component', 'props', 'fields', 'size', 'render'], 'off' !== showHeader);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['designHeader', 'component', 'props', 'fields', 'color', 'render'], 'off' !== showHeader);

  // Toggle Footer color field visibility based on if show footer is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['designFooter', 'component', 'props', 'fields', 'footerInnercontent', 'render'], 'off' !== showFooter);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/Card/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Card/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Card/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Card/module-script-data.jsx");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Card/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/Utils/index.js");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.






/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {CardModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = ({
  attrs,
  id,
  name,
  elements
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.layout?.innerContent);
  let {
    src: imgSrc
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.image?.innerContent);
  let {
    show: showImage
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.image?.advanced);
  let {
    show: showHeader,
    color: headerColor,
    size: HeaderSize
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.advanced);
  let {
    show: showButton
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.advanced);
  let {
    linkUrl: buttonUrl,
    text: buttonText
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.innerContent);
  let buttonClass = 'light';
  let header = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let headerStyle = {};
  if (headerColor) {
    headerStyle = Object.assign(headerStyle, {
      color: headerColor
    });
  }
  let content = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.content?.innerContent);
  let {
    show: showFooter,
    color: footerColor
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.footer?.advanced);
  switch (layout) {
    case 'overstated':
      buttonClass = 'main';
      break;
    case 'understated':
      buttonClass = 'alt';
      break;
    case 'standout':
      buttonClass = 'standout';
      break;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_3__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), 'on' === showImage && imgSrc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: imgSrc,
    className: "card-img-top img-responsive"
  }) : null, 'on' === showHeader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderSize, {
    className: "card-title pb-0 mb-0 border-bottom-0",
    style: headerStyle
  }, header)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body",
    dangerouslySetInnerHTML: {
      __html: content + ('on' === showButton ? `<a href="${buttonUrl}" class="btn btn-${buttonClass}" target="_blank">${buttonText}</a>` : '')
    }
  }), 'on' === showFooter ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-footer",
    style: {
      color: footerColor
    }
  }, (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.footer?.innerContent)) : null);
};


/***/ },

/***/ "./src/modules/Card/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Card/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/Card/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Card/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _custom_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Card/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.



/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css_js__WEBPACK_IMPORTED_MODULE_4__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/FullwidthPanel/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    button
  } = attrs || {};
  let {
    show: showButton
  } = button && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(button?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.button?.advanced);

  // Toggle Button field visibility based on if show button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['header', 'component', 'props', 'fields', 'text', 'render'], 'off' !== showButton);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['header', 'component', 'props', 'fields', 'url', 'render'], 'off' !== showButton);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['header', 'component', 'props', 'fields', 'target', 'render'], 'off' !== showButton);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthPanel/Settings/design.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    icon
  } = attrs || {};
  let {
    show: showIcon
  } = icon && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(icon?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.icon?.advanced);

  // Toggle Heading icon and color field visibility based on if show icon is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['designHeader', 'component', 'props', 'fields', 'icon', 'render'], 'off' !== showIcon);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthPanel/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthPanel/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthPanel/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthPanel/module-script-data.jsx");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthPanel/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/Utils/index.js");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.






/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FullwidthPanelModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = ({
  attrs,
  id,
  name,
  elements
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.layout?.innerContent);
  let {
    align,
    color,
    size: HeaderSize
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.advanced);
  let header = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let {
    show: showButton
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.advanced);
  let {
    linkUrl: buttonUrl,
    text: buttonText,
    linkTarget: buttonTarget
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.innerContent);
  let headerStyle = {};
  if ('none' === layout && color && color.length > 0) {
    headerStyle = Object.assign(headerStyle, {
      color
    });
  }

  // create button element if button is set to show and button text is not empty.
  let buttonElement = null;
  if ('on' === showButton && buttonUrl && buttonUrl.length > 0) {
    buttonElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "options"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: buttonUrl,
      target: 'on' === buttonTarget ? '_blank' : '_self',
      className: `btn btn-${layout}`
    }, buttonText));
  }

  // Create header element if header is not empty.
  let headerElement = null;
  if (header && header.length > 0) {
    headerElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: `card-header ${align}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderSize, {
      className: "card-title",
      style: headerStyle
    }, header), buttonElement);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_3__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), headerElement, elements.render({
    'attrName': 'content'
  }));
};


/***/ },

/***/ "./src/modules/FullwidthPanel/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthPanel/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/FullwidthPanel/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthPanel/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _custom_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthPanel/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.



/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css_js__WEBPACK_IMPORTED_MODULE_4__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  // let image = getAttrByMode(attrs?.image?.innerContent);
  // let link = getAttrByMode(attrs?.link?.innerContent);

  // Toggle Featured Image Image Position, Fade From Left and Src field visibility based on if show image is on
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'position', 'render'], 'off' !== image?.show );
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'fade', 'render'], 'off' !== image?.show );
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'src', 'render'], 'off' !== image?.show );

  // Toggle Link URL field visibility based on if show more button is on
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== link?.show );

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FullwidthSectionCarouselModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements,
    childrenIds,
    isLooped,
    loopIndex,
    canvasId
  } = props;
  let indicators = [];
  for (let i = 0; i < childrenIds.length; i++) {
    indicators.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: i,
      type: "button",
      "data-bs-target": `#${id}`,
      "data-bs-slide-to": i,
      className: i === 0 ? 'active' : ''
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData,
    htmlAttrs: {
      'data-bs-ride': 'carousel'
    }
  }, elements.styleComponents({
    attrName: 'module'
  }), indicators.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-indicators"
  }, indicators) : '', childrenIds && childrenIds.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ChildModulesContainer, {
    ids: childrenIds,
    isLooped: isLooped,
    loopIndex: loopIndex,
    canvasId: canvasId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "carousel-control-prev",
    type: "button",
    "data-bs-target": `#${id}`,
    "data-bs-slide": "prev"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "visually-hidden"
  }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "carousel-control-next",
    type: "button",
    "data-bs-target": `#${id}`,
    "data-bs-slide": "next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "visually-hidden"
  }, "Next")));
};


/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    button
  } = attrs || {};
  let {
    show
  } = button && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(button?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.button?.advanced);

  // Toggle Button URL field visibility based on if show more button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'on' === show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/Settings/design.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FullwidthSectionCarouselSlideModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements,
    parentAttrs,
    isFirst
  } = props;
  let title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let {
    size
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.advanced);
  let {
    show
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.advanced);
  let {
    linkUrl
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.innerContent);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    parentAttrs: parentAttrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData,
    isFirst: isFirst
  }, elements.styleComponents({
    attrName: 'module'
  }), elements.render({
    attrName: 'image',
    htmlAttributes: {
      className: 'd-block w-100'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-caption d-block"
  }, elements.render({
    attrName: 'title',
    tagName: size
  }), elements.render({
    attrName: 'desc'
  }), 'on' === show && linkUrl.length && title.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: linkUrl,
    className: "btn btn-primary",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "More Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "More Information about ", title)))));
};


/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/FullwidthSectionFooter/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionFooter/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  // let image = getAttrByMode(attrs?.image?.innerContent);
  // let link = getAttrByMode(attrs?.link?.innerContent);

  // Toggle Featured Image Image Position, Fade From Left and Src field visibility based on if show image is on
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'position', 'render'], 'off' !== image?.show );
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'fade', 'render'], 'off' !== image?.show );
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'src', 'render'], 'off' !== image?.show );

  // Toggle Link URL field visibility based on if show more button is on
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== link?.show );

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthSectionFooter/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthSectionFooter/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthSectionFooter/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionFooter/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthSectionFooter/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FullwidthSectionFooterModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements,
    childrenIds,
    isLooped,
    loopIndex,
    canvasId
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), childrenIds && childrenIds.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ChildModulesContainer, {
    ids: childrenIds,
    isLooped: isLooped,
    loopIndex: loopIndex,
    canvasId: canvasId
  }));
};


/***/ },

/***/ "./src/modules/FullwidthSectionFooter/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionFooter/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/FullwidthSectionFooter/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionFooter/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    button
  } = attrs || {};
  let links = {};
  Object.entries(defaultSettingsAttrs).map(([key, value]) => {
    // only if the key starts with 'link'
    if (key.startsWith('link')) {
      // if the attrs exists, use that, otherwise use the defaultSettingsAttrs
      links[key] = attrs?.[key] || value;
    }
  });
  let {
    show
  } = button && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(button?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.button?.advanced);
  Object.entries(links).forEach(([key, value]) => {
    let {
      show
    } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(value?.advanced) ?? (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.[key]?.advanced);

    // Toggle Link URL field visibility based on if show more button is on
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', `${key}Text`, 'render'], 'on' === show);
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', `${key}Url`, 'render'], 'on' === show);
  });

  // Toggle Button URL field visibility based on if show more button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'on' === show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/Settings/design.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    icon
  } = attrs || {};
  let {
    show
  } = (icon && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(icon?.advanced)) ?? (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.icon?.advanced);

  // Toggle Icon Design group visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['designStyle', 'component', 'props', 'fields', 'icon', 'render'], 'on' === show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FullwidthSectionFooterGroupModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements,
    parentAttrs
  } = props;
  let {
    size: TitleSize
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.advanced);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    parentAttrs: parentAttrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), elements.render({
    attrName: 'title',
    tagName: TitleSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-unstyled p-0"
  }, groupListing(attrs)));
};
const groupListing = attrs => {
  let links = Object.fromEntries(Object.entries(attrs).filter(([key, value]) => key.startsWith('link') && Object.hasOwn(value, 'innerContent')));
  let {
    color,
    displayLink
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.content?.advanced);
  let title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let linkElements = Object.entries(links).map(([key, value]) => {
    let {
      url: linkUrl,
      text
    } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(value?.innerContent);
    let {
      show
    } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(value?.advanced);
    if ('on' !== show) {
      return null;
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: key,
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: linkUrl,
        className: 'on' === displayLink ? 'btn btn-default btn-xs' : '',
        target: "_blank",
        title: `Section Footer Group ${title}`
      }, text));
    }
  });
  return linkElements;
};


/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css_js__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.image?.innerContent);
  let link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.link?.innerContent);

  // Toggle Featured Image Image Position, Fade From Left and Src field visibility based on if show image is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'position', 'render'], 'off' !== image?.show);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'fade', 'render'], 'off' !== image?.show);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'src', 'render'], 'off' !== image?.show);

  // Toggle Link URL field visibility based on if show more button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== link?.show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/module-script-data.jsx");
/* harmony import */ var _Utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/Utils/index.js");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.






/**
 * Renders the Header
 *
 * @param {{
 *       text?: string;
 *       color?: string;
 *       alignment?: 'start' | 'center' | 'end';
 *       level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
 * }} props 
 * @returns {ReactElement} 
 */
const renderHeader = ({
  text,
  color,
  alignment,
  level
}) => {
  let style = {};
  if (color) {
    style = Object.assign(style, (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.processColorPickerValue)(color));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag, {
    className: `text-${alignment}`,
    style: style
  }, text);
};

/**
 * Renders the Featured Image
 *
 * @param {{
 *     elements?: Module.ModuleElements,
 *     image?: {
 *       src?: string,
 *       alt?: string,
 *       title?: string,
 *       show?: string,
 *       alignment?: string,
 *       fade?: string
 *     }
 * }} props 
 * @returns {ReactElement} 
 */
const renderImage = ({
  elements,
  image: {
    src,
    alt,
    title,
    show,
    alignment,
    fade
  }
}) => {
  if ('off' === image?.show) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  }
  let classes = 'col-4';
  classes += 'on' === image?.alignment ? ' ps-3 float-end' : ' pe-3 float-start';
  classes += 'on' === image?.fade ? ' animate__animated  animate__fadeInLeft' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes
  }, elements.render({
    attrName: 'image'
  }));
};

/**
 * Renders the More Button
 *
 * @param {{
 *     text?: string;
 *     link?: {
 *       url?: string;
 *       show?: string;
 *     }
 * }} props 
 * @returns {ReactElement} 
 */
const renderButton = ({
  text,
  link: {
    url,
    show
  }
}) => {
  if (!link || 'off' === link?.show || !link?.url) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link?.url,
    className: "btn btn-outline-dark",
    target: "_blank"
  }, "More Information", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "More information about ", text, " ")));
};

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FullwidthSectionPrimaryModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements
  } = props;
  let title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.image?.innerContent);
  let link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.link?.innerContent);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), renderImage({
    elements,
    image
  }), renderHeader(title), elements.render({
    attrName: 'content'
  }), renderButton({
    text: title?.text,
    link
  }));
};


/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/FullwidthServiceTiles/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthServiceTiles/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    button
  } = attrs || {};
  let {
    show
  } = button && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(button?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.button?.advanced);

  // Toggle Link URL, Text fields visibility based on if show more button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== show);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'text', 'render'], 'off' !== show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthServiceTiles/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthServiceTiles/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthServiceTiles/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthServiceTiles/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthServiceTiles/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FullwidthServiceTilesModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements,
    childrenIds,
    isLooped,
    loopIndex,
    canvasId
  } = props;
  let indicators = [];
  for (let i = 0; i < childrenIds.length; i++) {
    indicators.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: i,
      type: "button",
      "data-bs-target": `#${id}`,
      "data-bs-slide-to": i,
      className: i === 0 ? 'active' : ''
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), childrenIds && childrenIds.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row clearfix"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ChildModulesContainer, {
    ids: childrenIds,
    isLooped: isLooped,
    loopIndex: loopIndex,
    canvasId: canvasId
  })));
};


/***/ },

/***/ "./src/modules/FullwidthServiceTiles/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthServiceTiles/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/FullwidthServiceTiles/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthServiceTiles/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    button
  } = attrs || {};
  let {
    show
  } = button && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(button?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.button?.advanced);

  // Toggle Button URL field visibility based on if show more button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'on' === show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/Settings/design.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.




let width = 0;
let tile_contents = [];

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {FullwidthServiceTilesItemModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements,
    parentAttrs,
    isFirst,
    isLooped,
    loopIndex
  } = props;
  let title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let {
    size
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.advanced);
  let {
    show
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.advanced);
  let {
    linkUrl
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.innerContent);
  let content = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.content?.innerContent);
  switch (size.toLowerCase()) {
    case 'half':
      size = 'w-50';
      width += 50;
      break;
    case 'full':
      size = 'w-100';
      width += 100;
      break;
    default:
      size = 'w-25';
      width += 25;
  }

  // reset everytime the width exceeds 100%
  if (100 < width) {
    width -= 100;
    tile_contents = [];
  }

  // if width hasn't exceeded 100% and not showing as a link,
  // create the tile contents
  if (100 >= width && 'off' === show) {
    tile_contents.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card card-default py-4 mb-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "container pt-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card card-block p-3 mb-0 bg-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#%3$s #card-%2$s",
      className: "btn btn-sm btn-secondary ca-gov-icon-close-mark float-end",
      "aria-expanded": "false"
    }), elements.render({
      attrName: 'content'
    }))))));
  }
  console.log(width);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    parentAttrs: parentAttrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData,
    isFirst: isFirst,
    isLooped: isLooped,
    loopIndex: loopIndex,
    htmlAttrs: {
      tabIndex: 0,
      className: `service-tile ${size}`
    }
  }, elements.styleComponents({
    attrName: 'module'
  }), 'on' === show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, elements.render({
    attrName: 'image',
    htmlAttributes: {
      style: {
        backgroundSize: 'cover',
        height: '320px'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "teaser bg-black text-white py-1 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: linkUrl,
    className: "title h4 text-decoration-none text-white lh-base"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ca-gov-icon-link d-block"
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, elements.render({
    attrName: 'image',
    htmlAttributes: {
      style: {
        backgroundSize: 'cover',
        height: '320px'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "teaser bg-black text-white py-1 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: linkUrl,
    className: "title h4 text-decoration-none text-white lh-base",
    "data-bs-toggle": "collapse",
    "data-bs-target": `#${id}`,
    "aria-expanded": "false"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ca-gov-icon-plus-fill d-block"
  }))))), 100 === width && tile_contents);
};


/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/Github/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Github/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Github/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Github/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Github/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {GithubModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements
  } = props;
  let title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), elements.render({
    attrName: 'title'
  }));
};


/***/ },

/***/ "./src/modules/Github/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Github/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/Github/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Github/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css_js__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/Location/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.layout?.innerContent);
  let layoutDefault = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.layout?.innerContent);
  let contact = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.contact?.innerContent);
  let link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.link?.innerContent);
  layout = layout ?? layoutDefault;

  // Toggle Featured Image field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'src', 'render'], 'banner' === layout);

  // Toggle Description field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'descInnercontent', 'render'], 'banner' === layout);

  // Toggle Show Contact Button field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'showContact', 'render'], 'contact' === layout);

  // Toggle Phone/Fax fields visibility based on layout and Show Contact Button
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'phone', 'render'], 'contact' === layout && 'on' === contact?.show);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'fax', 'render'], 'contact' === layout && 'on' === contact?.show);

  // Toggle Show Button field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'showLink', 'render'], 'mini' !== layout);

  // Toggle URL field visibility based on Show Button
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'url', 'render'], 'on' === link?.show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/Location/Settings/design.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.layout?.innerContent);
  let layoutDefault = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.layout?.innerContent);
  layout = layout ?? layoutDefault;

  // Toggle Icon Design group visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['icon', 'render'], 'banner' !== layout);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/Location/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Location/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Location/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Location/module-script-data.jsx");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Location/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/Utils/index.js");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.






/**
 * Renders Location (contact)
 *
 * @return ReactElement
 */
const contactLocation = ({
  elements,
  address,
  contact,
  icon,
  link,
  name
}) => {
  // get a map link if address info exists
  let addressMapLink = (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_google_map_place_link)([address?.addr, address?.city, address?.state, address?.zip]);

  // If displaying an icon
  let displayIcon = 'on' === icon?.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_icon_span)(icon?.icon)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);

  // show contact info if enabled
  let displayOther = 'on' === contact?.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ['' !== contact?.phone ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "General Information: ", contact?.phone) : null, '' !== contact?.fax ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FAX: ", contact?.fax) : null]) : null;
  let linkElement = '' !== link?.url && 'on' === link?.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link?.url,
    className: "btn btn-outline-dark",
    target: "_blank"
  }, "More") : null;

  // we combine all contact info elements here
  let contactInfo = "" !== name || null !== displayOther && displayOther?.props?.children || null !== addressMapLink || null !== linkElement && linkElement?.props?.children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, elements.render({
    'attrName': 'name'
  }), addressMapLink, displayOther, linkElement) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, contactInfo);
};

/**
 * Renders Location (mini)
 *
 * @return ReactElement
 */
const miniLocation = ({
  elements,
  address,
  icon,
  link,
  name
}) => {
  // get a map link if address info exists
  let addressMapLink = (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_google_map_place_link)([address?.addr, address?.city, address?.state, address?.zip]);

  // If displaying an icon
  let displayIcon = 'on' === icon?.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_icon_span)(icon?.icon)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);

  // we wrap the name in a link if a link url is provided
  let nameElement = '' !== name ? '' !== link?.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link?.url,
    target: "_blank"
  }, name) : elements.render({
    'attrName': 'name'
  }) : null;

  // we combine all contact info elements here
  let contactInfo = '' !== name || null !== addressMapLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, nameElement, addressMapLink) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, contactInfo);
};

/**
 * Renders Location (banner)
 *
 * @return ReactElement
 */
const bannerLocation = ({
  elements,
  address,
  link,
  name,
  image,
  desc
}) => {
  let imageElement = '' !== image?.src ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, elements.render({
    attrName: 'image'
  })) : null;

  // get a map link if address info exists
  let addressMapLink = (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_google_map_place_link)([address?.addr, address?.city, address?.state, address?.zip]);

  // Add description markup
  let descElement = '' !== desc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Description:"), elements.render({
    attrName: 'desc'
  })) : null;
  let linkElement = '' !== link?.url && 'on' === link?.show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link?.url,
    target: "_blank",
    className: "btn btn-outline-dark"
  }, "View More Details") : null;

  // we combine all contact info elements here
  let contactInfo = "" !== name || null !== addressMapLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, elements.render({
    'attrName': 'name'
  }), addressMapLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "address"
  }, (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.get_icon_span)('road-pin'), addressMapLink) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);

  // we combine all summary info elements here
  let summaryInfo = "" !== desc || null !== linkElement ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary"
  }, descElement, linkElement) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, imageElement, contactInfo, summaryInfo);
};

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {LocationModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = ({
  attrs,
  id,
  name,
  elements
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.layout?.innerContent);
  let address = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.address?.innerContent);
  let contact = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.contact?.innerContent);
  let icon = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.icon?.innerContent);
  let link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.link?.innerContent);
  let locationName = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.name?.innerContent);
  let image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.image?.innerContent);
  let desc = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.desc?.innerContent);
  let output = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  switch (layout) {
    case 'mini':
      output = miniLocation({
        elements,
        address,
        icon,
        link,
        name: locationName
      });
      break;
    case 'banner':
      output = bannerLocation({
        elements,
        address,
        image,
        link,
        desc,
        name: locationName
      });
      break;
    case 'contact':
    default:
      output = contactLocation({
        elements,
        address,
        contact,
        icon,
        link,
        name: locationName
      });
      break;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_3__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `location ${layout}`
  }, output));
};


/***/ },

/***/ "./src/modules/Location/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Location/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/Location/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Location/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css_js__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/Panel/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    button
  } = attrs || {};
  let {
    show: showButton
  } = button && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(button?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.button?.advanced);

  // Toggle Button field visibility based on if show button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['header', 'component', 'props', 'fields', 'text', 'render'], 'off' !== showButton);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['header', 'component', 'props', 'fields', 'url', 'render'], 'off' !== showButton);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['header', 'component', 'props', 'fields', 'target', 'render'], 'off' !== showButton);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/Panel/Settings/design.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    icon
  } = attrs || {};
  let {
    show: showIcon
  } = icon && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(icon?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.icon?.advanced);

  // Toggle Heading icon and color field visibility based on if show icon is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['designHeader', 'component', 'props', 'fields', 'icon', 'render'], 'off' !== showIcon);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/Panel/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Panel/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Panel/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Panel/module-script-data.jsx");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Panel/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/Utils/index.js");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.






/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {PanelModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = ({
  attrs,
  id,
  name,
  elements
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.layout?.innerContent);
  let {
    align,
    color,
    size: HeaderSize
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.advanced);
  let header = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let {
    show: showButton
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.advanced);
  let {
    linkUrl: buttonUrl,
    text: buttonText,
    linkTarget: buttonTarget
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.innerContent);
  let headerStyle = {};
  if ('none' === layout && color && color.length > 0) {
    headerStyle = Object.assign(headerStyle, {
      color
    });
  }

  // create button element if button is set to show and button text is not empty.
  let buttonElement = null;
  if ('on' === showButton && buttonUrl && buttonUrl.length > 0) {
    buttonElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "options"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: buttonUrl,
      target: 'on' === buttonTarget ? '_blank' : '_self',
      className: `btn btn-${layout}`
    }, buttonText));
  }

  // Create header element if header is not empty.
  let headerElement = null;
  if (header && header.length > 0) {
    headerElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: `card-header ${align}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderSize, {
      className: "card-title",
      style: headerStyle
    }, header), buttonElement);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_3__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_5__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), headerElement, elements.render({
    'attrName': 'content'
  }));
};


/***/ },

/***/ "./src/modules/Panel/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Panel/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/Panel/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Panel/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _custom_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Panel/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.



/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css_js__WEBPACK_IMPORTED_MODULE_4__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/PostList/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/data");
/* harmony import */ var _divi_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.

// import { BlogAttrs, FieldLibrary, Module } from '@divi/types';




// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    style,
    categories,
    tags
  } = attrs || {};
  let selectedStyle = style?.innerContent && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getAttrByMode)(style?.innerContent) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getAttrByMode)(defaultSettingsAttrs?.style?.innerContent);
  let {
    all: showAllCategories
  } = categories && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getAttrByMode)(categories?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getAttrByMode)(defaultSettingsAttrs?.categories?.advanced);
  let selectedCategories = categories?.innerContent && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getAttrByMode)(categories?.innerContent) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getAttrByMode)(defaultSettingsAttrs?.categories?.innerContent);
  let {
    all: showAllTags
  } = tags && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getAttrByMode)(tags?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getAttrByMode)(defaultSettingsAttrs?.tags?.advanced);
  let selectedTags = tags?.innerContent && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getAttrByMode)(tags?.innerContent) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getAttrByMode)(defaultSettingsAttrs?.tags?.innerContent);
  let isGeneralListStyle = 'general-list' === selectedStyle;
  let isFaqsListStyle = 'faqs-list' === selectedStyle;

  // Categories and tags are only visible if the selected style is not a 'faqs-list'
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'allCats', 'render'], isGeneralListStyle);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'allTags', 'render'], isGeneralListStyle);

  // Toggle the visibility of the category and tag fields
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'cats', 'render'], 'off' === showAllCategories);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'tags', 'render'], 'off' === showAllTags);

  // Accordion style is only visible if the selected style is a 'faqs-list'
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'faq', 'render'], isFaqsListStyle);

  // Featured image field is only visible if the selected style is a 'general-list'
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'imageInnercontent', 'render'], !isFaqsListStyle);

  // Excerpt is only visible if the selected style is a 'general-list'
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'excerptInnercontent', 'render'], ['course-list', 'events-list', 'general-list', 'news-list'].includes(selectedStyle));

  // If the selected style is a 'general-list', we need to set the selected categories and tags in the group configuration
  if (isGeneralListStyle) {
    const allCategories = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.getCategoriesForPostType)('post');
    const allTags = (0,_divi_data__WEBPACK_IMPORTED_MODULE_4__.select)('divi/settings').getSetting(['taxonomy', 'postTag']);
    const categoryCheckboxes = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.transformTaxonomiesToCheckboxOptions)(allCategories);
    const tagCheckboxes = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_5__.transformTaxonomiesToCheckboxOptions)(allTags);

    // Add all categories to the category field options if options is empty 
    if (groupConfiguration.style?.component?.props?.fields?.cats?.component?.props?.options.length === 0) {
      groupConfiguration.style?.component?.props?.fields?.cats?.component?.props?.options.push(...categoryCheckboxes);
    }
    if (groupConfiguration.style?.component?.props?.fields?.tags?.component?.props?.options.length === 0) {
      groupConfiguration.style?.component?.props?.fields?.tags?.component?.props?.options.push(...tagCheckboxes);
    }

    // Set the selected categories and tags in the group configuration
    ;(0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'cats', 'defaultAttr', 'desktop', 'value'], selectedCategories);
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'tags', 'defaultAttr', 'desktop', 'value'], selectedTags);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/PostList/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/data");
/* harmony import */ var _divi_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _divi_rest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@divi/rest");
/* harmony import */ var _divi_rest__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_divi_rest__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_shortcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@wordpress/shortcode/build-module/index.mjs");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@wordpress/url/build-module/add-query-args.mjs");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/modules/PostList/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/modules/PostList/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/modules/PostList/module-script-data.jsx");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/modules/PostList/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Utils_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/modules/Utils/index.js");
// External Dependencies.




// Divi Dependencies.




// WordPress Dependencies.




// Local Dependencies.





let c = 0;

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {PostListModuleEditProps} props React component props.
 * @returns {ReactElement}
 */
const ModuleEdit = ({
  attrs,
  id,
  name,
  elements
}) => {
  let {
    module,
    title,
    style,
    posts,
    orderby,
    categories,
    tags,
    excerpt,
    image
  } = attrs || {};
  let selectedStyle = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(style?.innerContent);
  let {
    faq: faqStyle
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(style?.advanced);
  let {
    size: titleSize
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(title?.advanced);
  let postNumber = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(posts?.innerContent);
  let {
    all: showAllCategories
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(categories?.advanced);
  let {
    all: showAllTags
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(tags?.advanced);
  let categoryList = 'on' === showAllCategories ? [] : (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(categories?.innerContent);
  let tagsList = 'on' === showAllTags ? [] : (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(tags?.innerContent);
  let orderBy = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(orderby?.innerContent);
  let order = '';
  let displayExcerpt = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(excerpt?.innerContent);
  let displayImage = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(image?.innerContent);
  let ModuleWrapper = (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment);

  // get the appropriate order by properties from the orderBy string
  if (orderBy.includes('_')) {
    [orderBy, order] = orderBy.split('_');
  } else {
    orderBy = 'rand';
  }
  const fetchAbortRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new AbortController());
  const {
    fetch,
    response,
    isLoading
  } = (0,_divi_rest__WEBPACK_IMPORTED_MODULE_5__.useFetch)([]);
  const {
    fetch: fetchImg,
    response: responseImg,
    isLoading: isLoadingImg
  } = (0,_divi_rest__WEBPACK_IMPORTED_MODULE_5__.useFetch)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (fetchAbortRef.current) {
      fetchAbortRef.current.abort();
    }
    fetchAbortRef.current = new AbortController();

    // to get the name of the category associated with this list style
    // strip the -list suffix from the style to get the post type
    // uppercase the first letter of the post type to match the category name
    // only if Faqs do we want to uppercase the first three letters of the post type to match the category name
    // let name = selectedStyle.replace('-list', '').replace(/^\w/, (c) => c.toUpperCase()).replace(/^(Faqs)/, (c) => c.toUpperCase());
    let name = selectedStyle.replace('-list', ''); //.replace(/^(faqs|\w)/, (c) => c.toUpperCase())

    let args = {
      hide_empty: false,
      _fields: 'id'
    };

    // if not general, we filter by the slug
    if ('general' !== name) {
      args.slug = name;
      // only for general, we filter by the included categories
    } else if (categoryList.length) {
      args.include = categoryList.join(',');
    }

    // fetch the category ids associated with this post list style
    fetch({
      restRoute: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)('/wp/v2/categories', args),
      method: 'GET'
    }).then(data => {
      // now that we have the category ids, we can fetch the posts
      fetch({
        restRoute: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)('/wp/v2/posts', {
          per_page: postNumber,
          orderby: orderBy,
          order,
          categories: data.map(category => category.id),
          tags: tagsList
        }),
        method: 'GET'
      }).then(posts => {
        if (displayImage) {
          // if we need to grab the featured images for the posts, let's get all the featured media ids
          const featuredMediaIds = posts.map(post => post.featured_media).filter(Boolean);
          fetchImg({
            restRoute: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_7__.addQueryArgs)('/wp/v2/media', {
              include: featuredMediaIds.join(','),
              _fields: 'id,source_url'
            }),
            method: 'GET'
          });
        }
      });
    });
    return () => {
      if (fetchAbortRef.current) {
        fetchAbortRef.current.abort();
      }
    };
  }, []);
  let output = [];
  if (!isLoading && response) {
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(response, (post, i) => {
      let {
        content: {
          rendered: post_content
        },
        guid: {
          rendered: post_url
        },
        title: {
          rendered: post_title
        },
        featured_media
      } = post || {};
      let shortCode = _wordpress_shortcode__WEBPACK_IMPORTED_MODULE_6__["default"].next('et_pb_ca_post_handler', post_content);

      // Only if a Post Handler shortcode is found, we proceed
      if (shortCode) {
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        });
        let {
          shortcode: sc
        } = shortCode;
        let {
          post_type_layout
        } = sc?.attrs?.named;
        let shortcode_content = sc?.content;
        switch (selectedStyle) {
          case 'courses-list':
            if ('course' === post_type_layout) {
              let {
                course_start_date,
                course_end_date,
                course_address,
                course_city,
                course_state,
                course_zip
              } = sc?.attrs?.named;
              let address = [course_address, course_city, course_state, course_zip].filter(Boolean);
              let featuredImage = 'on' === displayImage && responseImg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "thumbnail float-start"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
                src: responseImg.find(img => img.id === featured_media)?.source_url,
                style: {
                  width: '80px',
                  height: '80px'
                }
              }));

              // we generate an excerpt from the shortcode content, if displayExcerpt is on
              let excerpt = '';
              if ('on' === displayExcerpt) {
                const parser = new DOMParser();
                const parsedContent = parser.parseFromString(sc?.content, 'text/html');
                excerpt = parsedContent.body.textContent || '';

                // we only want the first 15 words of the excerpt
                if (excerpt.length) {
                  excerpt = excerpt.split(' ');
                  let ellipsis = excerpt.length > 20;
                  excerpt = excerpt.slice(0, 20).join(' ');

                  // Add ellipsis if the excerpt was truncated
                  if (ellipsis) {
                    excerpt += '...';
                  }
                }
              }
              output.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
                className: "course-item bg-light p-3 mb-3"
              }, featuredImage, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "header" + (featuredImage ? ' ps-5 ms-5' : '')
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "title"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                href: post_url,
                className: "fs-5 text-decoration-dotted"
              }, post_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "datetime"
              }, course_start_date && new Date(course_start_date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'UTC',
                hour: '2-digit',
                minute: '2-digit'
              }), " -", course_end_date && new Date(course_end_date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'UTC',
                hour: '2-digit',
                minute: '2-digit'
              }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "body" + (featuredImage ? ' ps-5 ms-5' : '')
              }, excerpt.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "description"
              }, excerpt), address.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "location"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Location: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                href: `https://www.google.com/maps/place/${address.join(', ')}`
              }, address.join(', ')))))));
            }
            break;
          case 'events-list':
          case 'general-list':
            if ('event' === post_type_layout || 'general-list' === selectedStyle && ['news', 'profile', 'jobs', 'event', 'course', 'exam', 'general', 'faqs'].includes(post_type_layout)) {
              let {
                event_start_date
              } = sc?.attrs?.named;

              // if the post has a featured image 
              let featuredImage = 'on' === displayImage && responseImg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "thumbnail float-start w-auto"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
                src: responseImg.find(img => img.id === featured_media)?.source_url,
                style: {
                  width: '80px',
                  height: '80px'
                }
              }));

              // we generate an excerpt from the shortcode content, if displayExcerpt is on
              let excerpt = '';
              if ('on' === displayExcerpt) {
                const parser = new DOMParser();
                const parsedContent = parser.parseFromString(sc?.content, 'text/html');
                excerpt = parsedContent.body.textContent || '';

                // we only want the first 15 words of the excerpt
                if (excerpt.length) {
                  excerpt = excerpt.split(' ');
                  let ellipsis = excerpt.length > 15;
                  excerpt = excerpt.slice(0, 15).join(' ');

                  // Add ellipsis if the excerpt was truncated
                  if (ellipsis) {
                    excerpt += '...';
                  }
                }
              }
              output.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
                className: "event-item bg-light p-3 mb-3"
              }, featuredImage, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "info" + ('on' === displayImage ? ' ms-5 ps-5 float-none clearfix' : '')
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
                className: "pb-0"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                href: post_url,
                className: "text-decoration-dotted",
                target: "_blank"
              }, post_title)), excerpt.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "description"
              }, excerpt), event_start_date && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "start-date"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time", null, new Date(event_start_date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'UTC',
                hour: '2-digit',
                minute: '2-digit'
              }))))));
            }
            break;
          case 'exams-list':
            if ('exam' === post_type_layout) {
              let {
                exam_id,
                exam_status,
                exam_final_filing_date = 'Until Filled',
                exam_final_filing_date_chooser = 'on',
                exam_final_filing_date_picker,
                exam_published_date
              } = sc?.attrs?.named;
              let filingDate = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Final Filing Date: ", exam_final_filing_date);
              if ('on' === exam_final_filing_date_chooser) {
                filingDate = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Final Filing Date: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time", null, new Date(exam_final_filing_date_picker).toLocaleDateString('en-US', {
                  month: '2-digit',
                  day: 'numeric',
                  year: 'numeric',
                  timeZone: 'UTC'
                })));
              }
              output.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
                className: "exam-item bg-light p-3 mb-3"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "header d-flex flex-row"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "title h4 my-0"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                href: post_url,
                className: "text-decoration-dotted"
              }, post_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "filing-date ms-auto"
              }, filingDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "body"
              }, exam_id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "id"
              }, "ID: ", exam_id), exam_status && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "base"
              }, "Status: ", exam_status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "footer"
              }, exam_published_date && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "published fst-italic text-secondary mt-2"
              }, "Published: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time", null, new Date(exam_published_date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'UTC'
              }))))));
            }
            break;
          case 'faqs-list':
            if ('faqs' === post_type_layout) {
              if ('toggle' === faqStyle) {
                ModuleWrapper = a => {
                  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
                    className: "accordion-list list-overstated",
                    role: "tablist"
                  }, output);
                };
                output.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                  "data-bs-target": `.${(0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getModuleOrderClassName)(id)} #accordion${i}`,
                  "data-bs-toggle": "collapse",
                  className: 'collapsed',
                  "aria-expanded": "false"
                }, post_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                  id: `accordion${i}`,
                  className: "collapse",
                  "data-bs-parent": `.${(0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getModuleOrderClassName)(id)}`
                }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Utils_index_js__WEBPACK_IMPORTED_MODULE_13__.RenderWordPressShortcode, {
                  shortcodeText: shortcode_content
                }))));
              } else if ('accordion' === faqStyle) {
                attrs.isAccordion = true;
                output.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                  className: "accordion-item"
                }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
                  className: "accordion-header"
                }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
                  className: `accordion-button collapsed`,
                  "data-bs-toggle": "collapse",
                  "data-bs-target": `.${(0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getModuleOrderClassName)(id)} #accordion${i}`,
                  "aria-expanded": "false",
                  "aria-controls": `accordion${i}`
                }, post_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                  id: `accordion${i}`,
                  className: "accordion-collapse collapse",
                  "data-bs-parent": `.${(0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getModuleOrderClassName)(id)}`
                }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                  className: "accordion-body"
                }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Utils_index_js__WEBPACK_IMPORTED_MODULE_13__.RenderWordPressShortcode, {
                  shortcodeText: shortcode_content
                })))));
              }
            }
            break;
          case 'jobs-list':
            if ('jobs' === post_type_layout) {
              let {
                job_final_filing_date,
                job_final_filing_date_chooser,
                job_final_filing_date_picker,
                job_position_number,
                job_rpa_number,
                job_hours,
                show_job_salary,
                job_salary_min,
                job_salary_max,
                job_agency_address,
                job_agency_city,
                job_agency_state,
                job_agency_zip
              } = sc?.attrs?.named;
              let filingDate = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Final Filing Date: ", job_final_filing_date, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null));
              if ('on' === job_final_filing_date_chooser) {
                filingDate = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Final Filing Date: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time", null, new Date(job_final_filing_date_picker).toLocaleDateString('en-US', {
                  month: '2-digit',
                  day: 'numeric',
                  year: 'numeric',
                  timeZone: 'UTC'
                })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null));
              }
              let jobPosition = '';
              if (job_position_number && job_rpa_number) {
                jobPosition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Position Number: ", job_position_number, ", RPA Number: ", job_rpa_number);
              } else if (job_position_number) {
                jobPosition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Position Number: ", job_position_number);
              } else if (job_rpa_number) {
                jobPosition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "RPA Number #", job_rpa_number);
              }
              let salary = 'on' === show_job_salary ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "salary-range"
              }, "Salary Range: ", formatter.format(job_salary_min), " - ", formatter.format(job_salary_max)) : '';
              let location = [job_agency_address, job_agency_city, job_agency_state, job_agency_zip].filter(Boolean);
              output.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
                className: "job-item bg-light p-3 mb-3"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "header d-flex flex-row"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "title me-auto"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                href: post_url,
                className: "fs-5 text-decoration-dotted"
              }, post_title)), filingDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "body"
              }, jobPosition, job_hours && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "schedule"
              }, job_hours), salary, location.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "location"
              }, "Location: ", location.join(', ')))));
            }
            break;
          case 'news-list':
            if ('news' === post_type_layout) {
              let {
                news_author,
                news_publish_date
              } = sc?.attrs?.named;

              // we generate an excerpt from the shortcode content, if displayExcerpt is on
              let excerpt = '';
              if ('on' === displayExcerpt) {
                const parser = new DOMParser();
                const parsedContent = parser.parseFromString(sc?.content, 'text/html');
                excerpt = parsedContent.body.textContent || '';

                // we only want the first 30 words of the excerpt
                if (excerpt.length) {
                  excerpt = excerpt.split(' ');
                  let ellipsis = excerpt.length > 30;
                  excerpt = excerpt.slice(0, 30).join(' ');

                  // Add ellipsis if the excerpt was truncated
                  if (ellipsis) {
                    excerpt += '...';
                  }
                }
              }
              let author = news_author ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Author: ", news_author, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)) : '';
              let publishDate = news_publish_date ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Published: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time", null, new Date(news_publish_date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'UTC'
              }))) : '';

              // if the post has a featured image 
              let featuredImage = 'on' === displayImage && responseImg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "thumbnail float-start"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
                src: responseImg.find(img => img.id === featured_media)?.source_url,
                style: {
                  width: '150px',
                  height: '100px'
                }
              }));
              output.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
                className: "news-item bg-light p-3 mb-3"
              }, featuredImage, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "info clearfix"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "headline"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                href: post_url
              }, post_title)), excerpt.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "excerpt"
              }, excerpt), author || publishDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "published"
              }, author, publishDate) : null)));
            }
            break;
          case 'profiles-list':
            if ('profile' === post_type_layout) {
              let {
                profile_name_prefix,
                profile_name,
                profile_career_title,
                profile_career_position,
                profile_career_line_1,
                profile_career_line_2,
                profile_career_line_3
              } = sc?.attrs?.named;

              // if the post has a featured image 
              let featuredImage = 'on' === displayImage && responseImg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "thumbnail float-start"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
                src: responseImg.find(img => img.id === featured_media)?.source_url,
                style: {
                  width: '75px',
                  height: '75px'
                }
              }));
              let fields = [profile_career_position, profile_career_line_1, profile_career_line_2, profile_career_line_3].filter(Boolean);
              output.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
                className: "profile-item bg-light p-3 mb-3"
              }, featuredImage, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: 'header' + ('on' === displayImage ? ' ms-5 ps-5' : 'ms-0')
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: "title"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
                href: post_url,
                className: "text-decoration-none"
              }, profile_name_prefix ? `${profile_name_prefix} ` : '', profile_name, profile_career_title ? `, ${profile_career_title}` : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                className: 'body' + ('on' === displayImage ? ' ms-5 ps-5' : 'ms-0'),
                dangerouslySetInnerHTML: {
                  __html: fields.join('<br />')
                }
              })));
            }
            break;
        }
      }
    });
  }
  attrs.isAccordion = true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_9__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_10__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_11__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), elements.render({
    attrName: 'title',
    tagName: titleSize
  }), !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ModuleWrapper, null, output), !isLoading && response.length < 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)('No post found.', 'd5-extension-example-modules')));
};


/***/ },

/***/ "./src/modules/PostList/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/PostList/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/PostList/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/PostList/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _custom_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/PostList/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.



/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css_js__WEBPACK_IMPORTED_MODULE_4__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/ProfileBanner/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/ProfileBanner/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/ProfileBanner/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/ProfileBanner/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/ProfileBanner/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ProfileBannerModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements
  } = props;
  let profile = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.profile?.innerContent);
  let portrait = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.portrait?.advanced);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", {
    className: `executive-profile${"on" === portrait?.vertical ? ' vertical' : ''}`
  }, elements.render({
    attrName: 'portrait',
    attrSubName: 'src',
    className: `${"on" === portrait?.rounded ? 'rounded-circle' : ''}` // rounded image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "body"
  }, elements.render({
    attrName: 'name'
  }), elements.render({
    attrName: 'job'
  }), profile?.text && profile?.url ? elements.render({
    attrName: 'profile',
    attrSubName: 'text',
    htmlAttributes: {
      href: profile?.url
    }
  }) : '')));
};


/***/ },

/***/ "./src/modules/ProfileBanner/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/ProfileBanner/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/ProfileBanner/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/ProfileBanner/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.TextStyle, {
    selector: `${orderClass} .example_d4_module_inner`,
    attr: attrs?.module?.advanced?.text
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CommonStyle, {
    selector: `${orderClass} .example_d4_module_inner`,
    attr: attrs?.module?.decoration?.background,
    declarationFunction: ({
      attrValue
    }) => {
      if ('on' === attrValue?.image?.parallax?.enabled) {
        return 'position: relative;';
      }
      return '';
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/SectionCarousel/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionCarousel/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  // let image = getAttrByMode(attrs?.image?.innerContent);
  // let link = getAttrByMode(attrs?.link?.innerContent);

  // Toggle Featured Image Image Position, Fade From Left and Src field visibility based on if show image is on
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'position', 'render'], 'off' !== image?.show );
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'fade', 'render'], 'off' !== image?.show );
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'src', 'render'], 'off' !== image?.show );

  // Toggle Link URL field visibility based on if show more button is on
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== link?.show );

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/SectionCarousel/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionCarousel/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionCarousel/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionCarousel/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/SectionCarousel/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionCarouselModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements,
    childrenIds,
    isLooped,
    loopIndex,
    canvasId
  } = props;
  let indicators = [];
  for (let i = 0; i < childrenIds.length; i++) {
    indicators.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: i,
      type: "button",
      "data-bs-target": `#${id}`,
      "data-bs-slide-to": i,
      className: i === 0 ? 'active' : ''
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData,
    htmlAttrs: {
      'data-bs-ride': 'carousel'
    }
  }, elements.styleComponents({
    attrName: 'module'
  }), indicators.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-indicators"
  }, indicators) : '', childrenIds && childrenIds.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ChildModulesContainer, {
    ids: childrenIds,
    isLooped: isLooped,
    loopIndex: loopIndex,
    canvasId: canvasId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "carousel-control-prev",
    type: "button",
    "data-bs-target": `#${id}`,
    "data-bs-slide": "prev"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "visually-hidden"
  }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "carousel-control-next",
    type: "button",
    "data-bs-target": `#${id}`,
    "data-bs-slide": "next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "visually-hidden"
  }, "Next")));
};


/***/ },

/***/ "./src/modules/SectionCarousel/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionCarousel/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/SectionCarousel/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionCarousel/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/SectionCarouselSlide/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionCarouselSlide/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    button
  } = attrs || {};
  let {
    show
  } = button && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(button?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.button?.advanced);

  // Toggle Button URL field visibility based on if show more button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'on' === show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/SectionCarouselSlide/Settings/design.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionCarouselSlide/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/SectionCarouselSlide/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionCarouselSlide/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionCarouselSlide/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionCarouselSlide/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/SectionCarouselSlide/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionCarouselSlideModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements,
    parentAttrs,
    isFirst
  } = props;
  let title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let {
    size
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.advanced);
  let {
    show
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.advanced);
  let {
    linkUrl
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.button?.innerContent);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    parentAttrs: parentAttrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData,
    isFirst: isFirst
  }, elements.styleComponents({
    attrName: 'module'
  }), elements.render({
    attrName: 'image',
    htmlAttributes: {
      className: 'd-block w-100'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "carousel-caption d-block"
  }, elements.render({
    attrName: 'title',
    tagName: size
  }), elements.render({
    attrName: 'desc'
  }), 'on' === show && linkUrl.length && title.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: linkUrl,
    className: "btn btn-primary",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "More Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "More Information about ", title)))));
};


/***/ },

/***/ "./src/modules/SectionCarouselSlide/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionCarouselSlide/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/SectionCarouselSlide/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionCarouselSlide/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/SectionFooter/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionFooter/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  // let image = getAttrByMode(attrs?.image?.innerContent);
  // let link = getAttrByMode(attrs?.link?.innerContent);

  // Toggle Featured Image Image Position, Fade From Left and Src field visibility based on if show image is on
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'position', 'render'], 'off' !== image?.show );
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'fade', 'render'], 'off' !== image?.show );
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'src', 'render'], 'off' !== image?.show );

  // Toggle Link URL field visibility based on if show more button is on
  // set(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== link?.show );

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/SectionFooter/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionFooter/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionFooter/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionFooter/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/SectionFooter/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionFooterModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements,
    childrenIds,
    isLooped,
    loopIndex,
    canvasId
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), childrenIds && childrenIds.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ChildModulesContainer, {
    ids: childrenIds,
    isLooped: isLooped,
    loopIndex: loopIndex,
    canvasId: canvasId
  }));
};


/***/ },

/***/ "./src/modules/SectionFooter/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionFooter/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/SectionFooter/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionFooter/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/SectionFooterGroup/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionFooterGroup/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    button
  } = attrs || {};
  let links = {};
  Object.entries(defaultSettingsAttrs).map(([key, value]) => {
    // only if the key starts with 'link'
    if (key.startsWith('link')) {
      // if the attrs exists, use that, otherwise use the defaultSettingsAttrs
      links[key] = attrs?.[key] || value;
    }
  });
  let {
    show
  } = button && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(button?.advanced) || (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.button?.advanced);
  Object.entries(links).forEach(([key, value]) => {
    let {
      show
    } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(value?.advanced) ?? (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.[key]?.advanced);

    // Toggle Link URL field visibility based on if show more button is on
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', `${key}Text`, 'render'], 'on' === show);
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', `${key}Url`, 'render'], 'on' === show);
  });

  // Toggle Button URL field visibility based on if show more button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'on' === show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/SectionFooterGroup/Settings/design.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionFooterGroup/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsDesign = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let {
    icon
  } = attrs || {};
  let {
    show
  } = (icon && (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(icon?.advanced)) ?? (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(defaultSettingsAttrs?.icon?.advanced);

  // Toggle Icon Design group visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['designStyle', 'component', 'props', 'fields', 'icon', 'render'], 'on' === show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/SectionFooterGroup/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionFooterGroup/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionFooterGroup/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionFooterGroup/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/SectionFooterGroup/module-script-data.jsx");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.





/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionFooterGroupModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements,
    parentAttrs
  } = props;
  let {
    size: TitleSize
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.advanced);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    parentAttrs: parentAttrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), elements.render({
    attrName: 'title',
    tagName: TitleSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-unstyled p-0"
  }, groupListing(attrs)));
};
const groupListing = attrs => {
  let links = Object.fromEntries(Object.entries(attrs).filter(([key, value]) => key.startsWith('link') && Object.hasOwn(value, 'innerContent')));
  let {
    color,
    displayLink
  } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.content?.advanced);
  let title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let linkElements = Object.entries(links).map(([key, value]) => {
    let {
      url: linkUrl,
      text
    } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(value?.innerContent);
    let {
      show
    } = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(value?.advanced);
    if ('on' !== show) {
      return null;
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: key,
        className: "mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: linkUrl,
        className: 'on' === displayLink ? 'btn btn-default btn-xs' : '',
        target: "_blank",
        title: `Section Footer Group ${title}`
      }, text));
    }
  });
  return linkElements;
};


/***/ },

/***/ "./src/modules/SectionFooterGroup/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionFooterGroup/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/SectionFooterGroup/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionFooterGroup/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/SectionPrimary/Settings/content.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionPrimary/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_5__);
// External dependencies.



// WordPress dependencies


// Divi dependencies.



// Local dependencies.

const SettingsContent = ({
  attrs,
  defaultSettingsAttrs,
  groupConfiguration
}) => {
  let image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.image?.innerContent);
  let link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_4__.getAttrByMode)(attrs?.link?.innerContent);

  // Toggle Featured Image Image Position, Fade From Left and Src field visibility based on if show image is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'position', 'render'], 'off' !== image?.show);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'fade', 'render'], 'off' !== image?.show);
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'src', 'render'], 'off' !== image?.show);

  // Toggle Link URL field visibility based on if show more button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== link?.show);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_3__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ },

/***/ "./src/modules/SectionPrimary/edit.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionPrimary/types.ts");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_types_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionPrimary/styles.jsx");
/* harmony import */ var _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionPrimary/module-classnames.js");
/* harmony import */ var _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/SectionPrimary/module-script-data.jsx");
/* harmony import */ var _Utils_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/Utils/index.js");
// External Dependencies.


// Divi Dependencies.



// Local Dependencies.






/**
 * Renders the Header
 *
 * @param {{
 *       text?: string;
 *       color?: string;
 *       alignment?: 'start' | 'center' | 'end';
 *       level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
 * }} props 
 * @returns {ReactElement} 
 */
const renderHeader = ({
  text,
  color,
  alignment,
  level
}) => {
  let style = {};
  if (color) {
    style = Object.assign(style, (0,_Utils_index_js__WEBPACK_IMPORTED_MODULE_7__.processColorPickerValue)(color));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag, {
    className: `text-${alignment}`,
    style: style
  }, text);
};

/**
 * Renders the Featured Image
 *
 * @param {{
 *     elements?: Module.ModuleElements,
 *     image?: {
 *       src?: string,
 *       alt?: string,
 *       title?: string,
 *       show?: string,
 *       alignment?: string,
 *       fade?: string
 *     }
 * }} props 
 * @returns {ReactElement} 
 */
const renderImage = ({
  elements,
  image: {
    src,
    alt,
    title,
    show,
    alignment,
    fade
  }
}) => {
  if ('off' === image?.show) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  }
  let classes = 'col-4';
  classes += 'on' === image?.alignment ? ' ps-3 float-end' : ' pe-3 float-start';
  classes += 'on' === image?.fade ? ' animate__animated  animate__fadeInLeft' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes
  }, elements.render({
    attrName: 'image'
  }));
};

/**
 * Renders the More Button
 *
 * @param {{
 *     text?: string;
 *     link?: {
 *       url?: string;
 *       show?: string;
 *     }
 * }} props 
 * @returns {ReactElement} 
 */
const renderButton = ({
  text,
  link: {
    url,
    show
  }
}) => {
  if (!link || 'off' === link?.show || !link?.url) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link?.url,
    className: "btn btn-outline-dark",
    target: "_blank"
  }, "More Information", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "More information about ", text, " ")));
};

/**
 * Divi 5 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {SectionPrimaryModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleEdit = props => {
  const {
    attrs,
    id,
    name,
    elements
  } = props;
  let title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.title?.innerContent);
  let image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.image?.innerContent);
  let link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.link?.innerContent);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles_jsx__WEBPACK_IMPORTED_MODULE_4__.ModuleStyles,
    classnamesFunction: _module_classnames_js__WEBPACK_IMPORTED_MODULE_5__.moduleClassnames,
    scriptDataComponent: _module_script_data_jsx__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), renderImage({
    elements,
    image
  }), renderHeader(title), elements.render({
    attrName: 'content'
  }), renderButton({
    text: title?.text,
    link
  }));
};


/***/ },

/***/ "./src/modules/SectionPrimary/module-script-data.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionPrimary/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Divi 5 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
const ModuleScriptData = ({
  elements
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
  attrName: 'module'
}));

/***/ },

/***/ "./src/modules/SectionPrimary/styles.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionPrimary/custom-css.js");
// External dependencies.


// Divi dependencies.


// Local dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
const ModuleStyles = ({
  attrs,
  settings,
  orderClass,
  mode,
  state,
  noStyleTag,
  elements
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings?.disabledModuleVisibility
      }
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs?.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ },

/***/ "./src/modules/Utils/Module.jsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderWordPressShortcode: () => (/* binding */ RenderWordPressShortcode),
/* harmony export */   get_address: () => (/* binding */ get_address),
/* harmony export */   get_google_map_place_link: () => (/* binding */ get_google_map_place_link),
/* harmony export */   get_icon_span: () => (/* binding */ get_icon_span),
/* harmony export */   processColorPickerValue: () => (/* binding */ processColorPickerValue)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/rest");
/* harmony import */ var _divi_rest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_rest__WEBPACK_IMPORTED_MODULE_2__);
// External Dependencies.



// Divi Dependencies.


// WordPress Dependencies.


/**
 * Process Divi Color Picker Value
 *
 * @param  string $color Color value from color picker.
 * @return string
 */
const processColorPickerValue = color => {
  let colorProp = {
    color
  };
  if (color.startsWith('$variable(') && color.endsWith(')$')) {
    try {
      let colorString = color.slice(10, -2);
      let colorObj = JSON.parse(colorString);

      // if object is a color type
      if ('color' === colorObj?.type) {
        // if opacity has been set
        if (colorObj?.value?.settings?.opacity) {
          // divide the opacity by 100
          colorObj.value.settings.opacity = colorObj.value.settings.opacity / 100;
        }

        // add color and any settings to the CSSProperty
        colorProp = {
          color: `var(--${colorObj?.value?.name})`,
          ...colorObj.value.settings
        };
      }
    } catch (e) {
      // color isn't valid JSON
    }
  }
  return colorProp;
};

/**
 * Returns address in CSV format
 *
 * @param  array|address $addr Address to format.
 * @return string
 */
const get_address = address => {
  if ("" === address || address.length === 0) {
    return;
  } else if ('string' === typeof address) {
    address = address.split(',');
  }
  return address.map(part => part?.trim()).filter(Boolean).join(', ');
};

/**
 * Create a GoogleMap Place Link/Embedded IFrame
 *
 * @param  array|string $addr Address to format.
 * @param  mixed        $embed Whether to create a link or embedded iframe.
 * @param  mixed        $target The links target, default _blank.
 * @param  mixed        $classes Class for the link.
 * @return string
 */
const get_google_map_place_link = (address, embed = false, target = '_blank', classes = '') => {
  let addr = get_address(address);
  if (!addr) {
    return null;
  }
  if (embed) {
    let map_url = `https://www.google.com/maps/embed/v1/place?q=${addr}&zoom=10&key=key`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("iframe", {
      title: `IFrame for Address ${addr}`,
      src: map_url
    });
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
      href: `https://www.google.com/maps/place/${addr}`,
      target: target,
      className: classes
    }, addr);
  }
};

/**
 * Create icon span
 *
 * @param  string $icon Icon to render.
 * @param  string $classes Classes for the span.
 * @param  string $styles Styles for the span.
 * @return string
 */
const get_icon_span = icon => {
  if ("" === icon) {
    return;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: `ca-gov-icon-${icon}`
  });
};
const RenderWordPressShortcode = ({
  shortcodeText
}) => {
  const {
    fetch,
    isLoading,
    response
  } = (0,_divi_rest__WEBPACK_IMPORTED_MODULE_2__.useFetch)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let {
      ajax_url,
      js_shortcode_nonce
    } = CawebDiviExtensionModulesBuilderBundleScriptData;
    // Build the request payload
    const formData = new FormData();
    formData.append('action', 'render_shortcode_via_js');
    formData.append('security', js_shortcode_nonce);
    formData.append('shortcode', shortcodeText);
    fetch({
      url: ajax_url,
      method: 'POST',
      data: formData
    });
  }, [shortcodeText]);
  return isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: response.data
    }
  });
};


/***/ },

/***/ "./src/modules/Card/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    card_layout: 'layout.innerContent.*',
    card_color: 'layout.advanced.*.color',
    show_image: 'image.advanced.*.show',
    featured_image: 'image.innerContent.*.src',
    include_header: 'title.advanced.*.show',
    title: 'title.innerContent.*',
    heading_size: 'title.advanced.*.size',
    text_color: 'title.advanced.*.color',
    content: 'content.innerContent.*',
    show_button: 'button.advanced.*.show',
    button_text: 'button.innerContent.*.text',
    button_link: 'button.innerContent.*.linkUrl',
    include_footer: 'footer.advanced.*.show',
    footer_text: 'footer.innerContent.*',
    footer_color: 'footer.advanced.*.color',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  }
};

/***/ },

/***/ "./src/modules/Card/types.ts"
() {



/***/ },

/***/ "./src/modules/FullwidthPanel/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    panel_layout: 'layout.innerContent.*',
    title: 'title.innerContent.*',
    heading_align: 'title.advanced.*.align',
    heading_size: 'title.advanced.*.size',
    heading_text_color: 'title.advanced.*.color',
    use_icon: 'icon.advanced.*.show',
    font_icon: 'icon.innerContent.*',
    content: 'content.innerContent.*',
    show_button: 'button.advanced.*.show',
    button_text: 'button.innerContent.*.text',
    button_link: 'button.innerContent.*.linkUrl',
    button_target: 'button.innerContent.*.linkTarget',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  }
};

/***/ },

/***/ "./src/modules/FullwidthPanel/types.ts"
() {



/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    section_background_color: 'section.advanced.*.color',
    content: 'content.innerContent.*',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  deprecatedMap: ['module_text_color']
};

/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/types.ts"
() {



/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    slide_title: 'title.innerContent.*',
    slide_title_size: 'title.advanced.*.size',
    slide_image: 'image.innerContent.*.src',
    slide_alt_text: 'image.innerContent.*.alt',
    slide_show_more_button: 'button.advanced.*.show',
    slide_url: 'button.innerContent.*.linkUrl',
    slide_desc: 'desc.innerContent.*',
    module_text_color: 'module.advanced.text.text.color',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  deprecatedMap: []
};

/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/types.ts"
() {



/***/ },

/***/ "./src/modules/FullwidthSectionFooter/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    section_background_color: 'section.advanced.*.color',
    content: 'content.innerContent.*',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  deprecatedMap: ['0']
};

/***/ },

/***/ "./src/modules/FullwidthSectionFooter/types.ts"
() {



/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    group_title: 'title.innerContent.*',
    heading_size: 'title.advanced.*.size',
    heading_color: 'title.advanced.*.color',
    group_show_more_button: 'button.advanced.*.show',
    group_url: 'button.innerContent.*.linkUrl',
    text_color: 'content.advanced.*.color',
    display_link_as_button: 'content.advanced.*.displayLink',
    group_icon_button: 'icon.advanced.*.show',
    group_icon: 'icon.innerContent.*',
    group_link1_show: 'link1.advanced.*.show',
    group_link_text1: 'link1.innerContent.*.text',
    group_link_url1: 'link1.innerContent.*.linkUrl',
    group_link2_show: 'link2.advanced.*.show',
    group_link_text2: 'link2.innerContent.*.text',
    group_link_url2: 'link2.innerContent.*.linkUrl',
    group_link3_show: 'link3.advanced.*.show',
    group_link_text3: 'link3.innerContent.*.text',
    group_link_url3: 'link3.innerContent.*.linkUrl',
    group_link4_show: 'link4.advanced.*.show',
    group_link_text4: 'link4.innerContent.*.text',
    group_link_url4: 'link4.innerContent.*.linkUrl',
    group_link5_show: 'link5.advanced.*.show',
    group_link_text5: 'link5.innerContent.*.text',
    group_link_url5: 'link5.innerContent.*.linkUrl',
    group_link6_show: 'link6.advanced.*.show',
    group_link_text6: 'link6.innerContent.*.text',
    group_link_url6: 'link6.innerContent.*.linkUrl',
    group_link7_show: 'link7.advanced.*.show',
    group_link_text7: 'link7.innerContent.*.text',
    group_link_url7: 'link7.innerContent.*.linkUrl',
    group_link8_show: 'link8.advanced.*.show',
    group_link_text8: 'link8.innerContent.*.text',
    group_link_url8: 'link8.innerContent.*.linkUrl',
    group_link9_show: 'link9.advanced.*.show',
    group_link_text9: 'link9.innerContent.*.text',
    group_link_url9: 'link9.innerContent.*.linkUrl',
    group_link10_show: 'link10.advanced.*.show',
    group_link_text10: 'link10.innerContent.*.text',
    group_link_url10: 'link10.innerContent.*.linkUrl',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  deprecatedMap: ['0', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
};

/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/types.ts"
() {



/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    section_heading: 'title.innerContent.*.text',
    heading_text_color: 'title.innerContent.*.color',
    heading_align: 'title.innerContent.*.alignment',
    heading_size: 'title.innerContent.*.level',
    content: 'content.innerContent.*',
    section_background_color: 'module.decoration.background.*.color',
    show_more_button: 'link.innerContent.*.show',
    section_link: 'link.innerContent.*.url',
    featured_image_button: 'image.innerContent.*.show',
    left_right_button: 'image.innerContent.*.alignment',
    section_image: 'image.innerContent.*.src',
    slide_image_button: 'image.innerContent.*.fade',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  }
};

/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/types.ts"
() {



/***/ },

/***/ "./src/modules/FullwidthServiceTiles/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    view_more_on_off: 'button.advanced.*.show',
    view_more_url: 'button.innerContent.*.linkUrl',
    view_more_text: 'button.innerContent.*.text',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur',
    module_text_color: 'module.advanced.text.text.*.color'
  },
  deprecatedMap: ['module_text_color']
};

/***/ },

/***/ "./src/modules/FullwidthServiceTiles/types.ts"
() {



/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    item_title: 'title.innerContent.*',
    tile_size: 'title.advanced.*.size',
    item_image: 'image.innerContent.*.src',
    tile_link: 'button.advanced.*.show',
    tile_url: 'button.innerContent.*.linkUrl',
    content: 'content.innerContent.*',
    module_text_color: 'module.advanced.text.text.color',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  deprecatedMap: []
};

/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/types.ts"
() {



/***/ },

/***/ "./src/modules/Github/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    title: 'title.innerContent.*.text',
    title_size: 'title.innerContent.*.level',
    per_page: 'request.innerContent.*.per_page',
    repo_type: 'request.innerContent.*.repo_type',
    access_token: 'request.innerContent.*.access_token',
    username: 'request.innerContent.*.username',
    increase_rate_limit: 'request.innerContent.*.rate_limit',
    client_id: 'request.innerContent.*.client_id',
    client_secret: 'request.innerContent.*.client_secret',
    request_email: 'request.innerContent.*.email',
    email_body: 'request.innerContent.*.email_body',
    definitions: 'definition.innerContent.*',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  }
};

/***/ },

/***/ "./src/modules/Github/types.ts"
() {



/***/ },

/***/ "./src/modules/Location/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    location_layout: 'layout.innerContent.*',
    name: 'name.innerContent.*',
    desc: 'desc.innerContent.*',
    addr: 'address.innerContent.*.addr',
    city: 'address.innerContent.*.city',
    state: 'address.innerContent.*.state',
    zip: 'address.innerContent.*.zip',
    show_contact: 'contact.innerContent.*.show',
    phone: 'contact.innerContent.*.phone',
    fax: 'contact.innerContent.*.fax',
    show_button: 'link.innerContent.*.show',
    location_link: 'link.innerContent.*.url',
    show_icon: 'icon.innerContent.*.show',
    font_icon: 'icon.innerContent.*.unicode',
    featured_image: 'image.innerContent.*.src',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  }
};

/***/ },

/***/ "./src/modules/Location/types.ts"
() {



/***/ },

/***/ "./src/modules/Panel/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    panel_layout: 'layout.innerContent.*',
    title: 'title.innerContent.*',
    heading_align: 'title.advanced.*.align',
    heading_size: 'title.advanced.*.size',
    heading_text_color: 'title.advanced.*.color',
    use_icon: 'icon.advanced.*.show',
    font_icon: 'icon.innerContent.*',
    content: 'content.innerContent.*',
    show_button: 'button.advanced.*.show',
    button_text: 'button.innerContent.*.text',
    button_link: 'button.innerContent.*.linkUrl',
    button_target: 'button.innerContent.*.linkTarget',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  }
};

/***/ },

/***/ "./src/modules/Panel/types.ts"
() {



/***/ },

/***/ "./src/modules/PostList/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    title: 'title.innerContent.*',
    title_size: 'title.advanced.*.size',
    style: 'style.innerContent.*',
    faq_style: 'style.advanced.*.faq',
    posts_number: 'posts.innerContent.*',
    view_featured_image: 'image.innerContent.*',
    include_categories: 'categories.innerContent.*',
    all_categories_button: 'categories.advanced.*.all',
    include_tags: 'tags.innerContent.*',
    all_tags_button: 'tags.advanced.*.all',
    orderby: 'orderby.innerContent.*',
    display_excerpt: 'excerpt.innerContent.*'
  },
  valueExpansionFunctionMap: {
    include_categories: 'includedCategories',
    include_tags: 'CAWeb\\Modules\\Utils\\ValueExpansion::includedTags',
    style: 'CAWeb\\Modules\\Utils\\ValueExpansion::replacePostListStyle'
  }
};

/***/ },

/***/ "./src/modules/PostList/types.ts"
() {



/***/ },

/***/ "./src/modules/ProfileBanner/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    name: 'name.innerContent.*',
    job_title: 'job.innerContent.*',
    profile_link: 'profile.text.*',
    url: 'profile.innerContent.*.url',
    portrait_url: 'portrait.innerContent.*.src',
    portrait_alt: 'portrait.innerContent.*.alt',
    round_image: 'portrait.advanced.*.rounded',
    is_vertical: 'portrait.advanced.*.vertical',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  valueExpansionFunctionMap: {}
};

/***/ },

/***/ "./src/modules/ProfileBanner/types.ts"
() {



/***/ },

/***/ "./src/modules/SectionCarousel/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    section_background_color: 'section.advanced.*.color',
    content: 'content.innerContent.*',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  deprecatedMap: ['module_text_color']
};

/***/ },

/***/ "./src/modules/SectionCarousel/types.ts"
() {



/***/ },

/***/ "./src/modules/SectionCarouselSlide/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    slide_title: 'title.innerContent.*',
    slide_title_size: 'title.advanced.*.size',
    slide_image: 'image.innerContent.*.src',
    slide_alt_text: 'image.innerContent.*.alt',
    slide_show_more_button: 'button.advanced.*.show',
    slide_url: 'button.innerContent.*.linkUrl',
    slide_desc: 'desc.innerContent.*',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  deprecatedMap: []
};

/***/ },

/***/ "./src/modules/SectionCarouselSlide/types.ts"
() {



/***/ },

/***/ "./src/modules/SectionFooter/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    section_background_color: 'section.advanced.*.color',
    content: 'content.innerContent.*',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  deprecatedMap: ['0']
};

/***/ },

/***/ "./src/modules/SectionFooter/types.ts"
() {



/***/ },

/***/ "./src/modules/SectionFooterGroup/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    group_title: 'title.innerContent.*',
    heading_size: 'title.advanced.*.size',
    heading_color: 'title.advanced.*.color',
    group_show_more_button: 'button.advanced.*.show',
    group_url: 'button.innerContent.*.linkUrl',
    text_color: 'content.advanced.*.color',
    display_link_as_button: 'content.advanced.*.displayLink',
    group_icon_button: 'icon.advanced.*.show',
    group_icon: 'icon.innerContent.*',
    group_link1_show: 'link1.advanced.*.show',
    group_link_text1: 'link1.innerContent.*.text',
    group_link_url1: 'link1.innerContent.*.linkUrl',
    group_link2_show: 'link2.advanced.*.show',
    group_link_text2: 'link2.innerContent.*.text',
    group_link_url2: 'link2.innerContent.*.linkUrl',
    group_link3_show: 'link3.advanced.*.show',
    group_link_text3: 'link3.innerContent.*.text',
    group_link_url3: 'link3.innerContent.*.linkUrl',
    group_link4_show: 'link4.advanced.*.show',
    group_link_text4: 'link4.innerContent.*.text',
    group_link_url4: 'link4.innerContent.*.linkUrl',
    group_link5_show: 'link5.advanced.*.show',
    group_link_text5: 'link5.innerContent.*.text',
    group_link_url5: 'link5.innerContent.*.linkUrl',
    group_link6_show: 'link6.advanced.*.show',
    group_link_text6: 'link6.innerContent.*.text',
    group_link_url6: 'link6.innerContent.*.linkUrl',
    group_link7_show: 'link7.advanced.*.show',
    group_link_text7: 'link7.innerContent.*.text',
    group_link_url7: 'link7.innerContent.*.linkUrl',
    group_link8_show: 'link8.advanced.*.show',
    group_link_text8: 'link8.innerContent.*.text',
    group_link_url8: 'link8.innerContent.*.linkUrl',
    group_link9_show: 'link9.advanced.*.show',
    group_link_text9: 'link9.innerContent.*.text',
    group_link_url9: 'link9.innerContent.*.linkUrl',
    group_link10_show: 'link10.advanced.*.show',
    group_link_text10: 'link10.innerContent.*.text',
    group_link_url10: 'link10.innerContent.*.linkUrl',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  deprecatedMap: ['0', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
};

/***/ },

/***/ "./src/modules/SectionFooterGroup/types.ts"
() {



/***/ },

/***/ "./src/modules/SectionPrimary/conversion-outline.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
const conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    section_heading: 'title.innerContent.*.text',
    heading_text_color: 'title.innerContent.*.color',
    heading_align: 'title.innerContent.*.alignment',
    heading_size: 'title.innerContent.*.level',
    content: 'content.innerContent.*',
    section_background_color: 'module.decoration.background.*.color',
    show_more_button: 'link.innerContent.*.show',
    section_link: 'link.innerContent.*.url',
    featured_image_button: 'image.innerContent.*.show',
    left_right_button: 'image.innerContent.*.alignment',
    section_image: 'image.innerContent.*.src',
    slide_image_button: 'image.innerContent.*.fade',
    module_text_shadow_style: 'module.advanced.text.textShadow.*.style',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  }
};

/***/ },

/***/ "./src/modules/SectionPrimary/types.ts"
() {



/***/ },

/***/ "./src/styles/_builder.scss"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "lodash"
(module) {

"use strict";
module.exports = lodash;

/***/ },

/***/ "@divi/data"
(module) {

"use strict";
module.exports = divi.data;

/***/ },

/***/ "@divi/module"
(module) {

"use strict";
module.exports = divi.module;

/***/ },

/***/ "@divi/module-library"
(module) {

"use strict";
module.exports = divi.moduleLibrary;

/***/ },

/***/ "@divi/module-utils"
(module) {

"use strict";
module.exports = divi.moduleUtils;

/***/ },

/***/ "@divi/rest"
(module) {

"use strict";
module.exports = divi.rest;

/***/ },

/***/ "react"
(module) {

"use strict";
module.exports = vendor.React;

/***/ },

/***/ "@wordpress/hooks"
(module) {

"use strict";
module.exports = vendor.wp.hooks;

/***/ },

/***/ "@wordpress/i18n"
(module) {

"use strict";
module.exports = vendor.wp.i18n;

/***/ },

/***/ "./node_modules/@wordpress/shortcode/build-module/index.mjs"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attrs: () => (/* binding */ attrs),
/* harmony export */   "default": () => (/* binding */ index_default),
/* harmony export */   fromMatch: () => (/* binding */ fromMatch),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   regexp: () => (/* binding */ regexp),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   string: () => (/* binding */ string)
/* harmony export */ });
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/memize/dist/index.js");
/* harmony import */ var _types_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@wordpress/shortcode/build-module/types.mjs");
// packages/shortcode/src/index.ts


function next(tag, text, index = 0) {
  const re = regexp(tag);
  re.lastIndex = index;
  const match = re.exec(text);
  if (!match) {
    return;
  }
  if ("[" === match[1] && "]" === match[7]) {
    return next(tag, text, re.lastIndex);
  }
  const result = {
    index: match.index,
    content: match[0],
    shortcode: fromMatch(match)
  };
  if (match[1]) {
    result.content = result.content.slice(1);
    result.index++;
  }
  if (match[7]) {
    result.content = result.content.slice(0, -1);
  }
  return result;
}
function replace(tag, text, callback) {
  return text.replace(
    regexp(tag),
    // Let us use spread syntax to capture the arguments object.
    (...args) => {
      const match = args[0];
      const left = args[1];
      const right = args[7];
      if (left === "[" && right === "]") {
        return match;
      }
      const result = callback(fromMatch(args));
      return result || result === "" ? left + result + right : match;
    }
  );
}
function string(options) {
  return new Shortcode(options).string();
}
function regexp(tag) {
  return new RegExp(
    "\\[(\\[?)(" + tag + ")(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)",
    "g"
  );
}
var attrs = (0,memize__WEBPACK_IMPORTED_MODULE_0__["default"])((text) => {
  const named = {};
  const numeric = [];
  const pattern = /([\w-]+)\s*=\s*"([^"]*)"(?:\s|$)|([\w-]+)\s*=\s*'([^']*)'(?:\s|$)|([\w-]+)\s*=\s*([^\s'"]+)(?:\s|$)|"([^"]*)"(?:\s|$)|'([^']*)'(?:\s|$)|(\S+)(?:\s|$)/g;
  text = text.replace(/[\u00a0\u200b]/g, " ");
  let match;
  while (match = pattern.exec(text)) {
    if (match[1]) {
      named[match[1].toLowerCase()] = match[2];
    } else if (match[3]) {
      named[match[3].toLowerCase()] = match[4];
    } else if (match[5]) {
      named[match[5].toLowerCase()] = match[6];
    } else if (match[7]) {
      numeric.push(match[7]);
    } else if (match[8]) {
      numeric.push(match[8]);
    } else if (match[9]) {
      numeric.push(match[9]);
    }
  }
  return { named, numeric };
});
function fromMatch(match) {
  let type;
  if (match[4]) {
    type = "self-closing";
  } else if (match[6]) {
    type = "closed";
  } else {
    type = "single";
  }
  return new Shortcode({
    tag: match[2],
    attrs: match[3],
    type,
    content: match[5]
  });
}
var Shortcode = class {
  // Instance properties
  tag;
  type;
  content;
  attrs;
  // Static methods
  static next = next;
  static replace = replace;
  static string = string;
  static regexp = regexp;
  static attrs = attrs;
  static fromMatch = fromMatch;
  constructor(options) {
    const { tag, attrs: attributes, type, content } = options;
    this.tag = tag;
    this.type = type;
    this.content = content;
    this.attrs = {
      named: {},
      numeric: []
    };
    if (!attributes) {
      return;
    }
    if (typeof attributes === "string") {
      this.attrs = attrs(attributes);
    } else if ("named" in attributes && "numeric" in attributes && attributes.named !== void 0 && attributes.numeric !== void 0) {
      this.attrs = attributes;
    } else {
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== void 0) {
          this.set(key, String(value));
        }
      });
    }
  }
  /**
   * Get a shortcode attribute.
   *
   * Automatically detects whether `attr` is named or numeric and routes it
   * accordingly.
   *
   * @param attr Attribute key.
   *
   * @return Attribute value.
   */
  get(attr) {
    if (typeof attr === "number") {
      return this.attrs.numeric[attr];
    }
    return this.attrs.named[attr];
  }
  /**
   * Set a shortcode attribute.
   *
   * Automatically detects whether `attr` is named or numeric and routes it
   * accordingly.
   *
   * @param attr  Attribute key.
   * @param value Attribute value.
   *
   * @return Shortcode instance.
   */
  set(attr, value) {
    if (typeof attr === "number") {
      this.attrs.numeric[attr] = value;
    } else {
      this.attrs.named[attr] = value;
    }
    return this;
  }
  /**
   * Transform the shortcode into a string.
   *
   * @return String representation of the shortcode.
   */
  string() {
    let text = "[" + this.tag;
    this.attrs.numeric.forEach((value) => {
      if (/\s/.test(value)) {
        text += ' "' + value + '"';
      } else {
        text += " " + value;
      }
    });
    Object.entries(this.attrs.named).forEach(([name, value]) => {
      text += " " + name + '="' + value + '"';
    });
    if ("single" === this.type) {
      return text + "]";
    } else if ("self-closing" === this.type) {
      return text + " /]";
    }
    text += "]";
    if (this.content) {
      text += this.content;
    }
    return text + "[/" + this.tag + "]";
  }
};
var index_default = Shortcode;

//# sourceMappingURL=index.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/shortcode/build-module/types.mjs"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//# sourceMappingURL=types.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/url/build-module/add-query-args.mjs"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQueryArgs: () => (/* binding */ addQueryArgs)
/* harmony export */ });
/* harmony import */ var _get_query_args_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@wordpress/url/build-module/get-query-args.mjs");
/* harmony import */ var _build_query_string_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@wordpress/url/build-module/build-query-string.mjs");
/* harmony import */ var _get_fragment_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@wordpress/url/build-module/get-fragment.mjs");
// packages/url/src/add-query-args.ts



function addQueryArgs(url = "", args) {
  if (!args || !Object.keys(args).length) {
    return url;
  }
  const fragment = (0,_get_fragment_mjs__WEBPACK_IMPORTED_MODULE_2__.getFragment)(url) || "";
  let baseUrl = url.replace(fragment, "");
  const queryStringIndex = url.indexOf("?");
  if (queryStringIndex !== -1) {
    args = Object.assign((0,_get_query_args_mjs__WEBPACK_IMPORTED_MODULE_0__.getQueryArgs)(url), args);
    baseUrl = baseUrl.substr(0, queryStringIndex);
  }
  return baseUrl + "?" + (0,_build_query_string_mjs__WEBPACK_IMPORTED_MODULE_1__.buildQueryString)(args) + fragment;
}

//# sourceMappingURL=add-query-args.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/url/build-module/build-query-string.mjs"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildQueryString: () => (/* binding */ buildQueryString)
/* harmony export */ });
// packages/url/src/build-query-string.ts
function buildQueryString(data) {
  let string = "";
  const stack = Object.entries(data);
  let pair;
  while (pair = stack.shift()) {
    let [key, value] = pair;
    const hasNestedData = Array.isArray(value) || value && value.constructor === Object;
    if (hasNestedData) {
      const valuePairs = Object.entries(value).reverse();
      for (const [member, memberValue] of valuePairs) {
        stack.unshift([`${key}[${member}]`, memberValue]);
      }
    } else if (value !== void 0) {
      if (value === null) {
        value = "";
      }
      string += "&" + [key, String(value)].map(encodeURIComponent).join("=");
    }
  }
  return string.substr(1);
}

//# sourceMappingURL=build-query-string.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/url/build-module/get-fragment.mjs"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFragment: () => (/* binding */ getFragment)
/* harmony export */ });
// packages/url/src/get-fragment.ts
function getFragment(url) {
  const matches = /^\S+?(#[^\s\?]*)/.exec(url);
  if (matches) {
    return matches[1];
  }
}

//# sourceMappingURL=get-fragment.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/url/build-module/get-query-args.mjs"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQueryArgs: () => (/* binding */ getQueryArgs)
/* harmony export */ });
/* harmony import */ var _safe_decode_uri_component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@wordpress/url/build-module/safe-decode-uri-component.mjs");
/* harmony import */ var _get_query_string_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@wordpress/url/build-module/get-query-string.mjs");
// packages/url/src/get-query-args.ts


function setPath(object, path, value) {
  const length = path.length;
  const lastIndex = length - 1;
  for (let i = 0; i < length; i++) {
    let key = path[i];
    if (!key && Array.isArray(object)) {
      key = object.length.toString();
    }
    key = ["__proto__", "constructor", "prototype"].includes(key) ? key.toUpperCase() : key;
    const isNextKeyArrayIndex = !isNaN(Number(path[i + 1]));
    object[key] = i === lastIndex ? (
      // If at end of path, assign the intended value.
      value
    ) : (
      // Otherwise, advance to the next object in the path, creating
      // it if it does not yet exist.
      object[key] || (isNextKeyArrayIndex ? [] : {})
    );
    if (Array.isArray(object[key]) && !isNextKeyArrayIndex) {
      object[key] = { ...object[key] };
    }
    object = object[key];
  }
}
function getQueryArgs(url) {
  return ((0,_get_query_string_mjs__WEBPACK_IMPORTED_MODULE_1__.getQueryString)(url) || "").replace(/\+/g, "%20").split("&").reduce((accumulator, keyValue) => {
    const separatorIndex = keyValue.indexOf("=");
    const hasValue = separatorIndex !== -1;
    const key = (0,_safe_decode_uri_component_mjs__WEBPACK_IMPORTED_MODULE_0__.safeDecodeURIComponent)(
      hasValue ? keyValue.slice(0, separatorIndex) : keyValue
    );
    if (key) {
      const value = hasValue ? (0,_safe_decode_uri_component_mjs__WEBPACK_IMPORTED_MODULE_0__.safeDecodeURIComponent)(
        keyValue.slice(separatorIndex + 1)
      ) : "";
      const segments = key.replace(/\]/g, "").split("[");
      setPath(accumulator, segments, value);
    }
    return accumulator;
  }, /* @__PURE__ */ Object.create(null));
}

//# sourceMappingURL=get-query-args.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/url/build-module/get-query-string.mjs"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQueryString: () => (/* binding */ getQueryString)
/* harmony export */ });
// packages/url/src/get-query-string.ts
function getQueryString(url) {
  let query;
  try {
    query = new URL(url, "http://example.com").search.substring(1);
  } catch {
  }
  if (query) {
    return query;
  }
}

//# sourceMappingURL=get-query-string.mjs.map


/***/ },

/***/ "./node_modules/@wordpress/url/build-module/safe-decode-uri-component.mjs"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeDecodeURIComponent: () => (/* binding */ safeDecodeURIComponent)
/* harmony export */ });
// packages/url/src/safe-decode-uri-component.ts
function safeDecodeURIComponent(uriComponent) {
  try {
    return decodeURIComponent(uriComponent);
  } catch {
    return uriComponent;
  }
}

//# sourceMappingURL=safe-decode-uri-component.mjs.map


/***/ },

/***/ "./src/modules/Card/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Card/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/Card/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleCard: () => (/* binding */ CAWebModuleCard),
/* harmony export */   CAWebModuleCardMetadata: () => (/* binding */ CAWebModuleCardMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Card/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Card/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Card/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Card/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Card/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Card/Settings/content.jsx");
/* harmony import */ var _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Card/Settings/design.jsx");
// Local dependencies.







const CAWebModuleCardMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleCard = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsContent,
    design: _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__.SettingsDesign
  }
};

/***/ },

/***/ "./src/modules/Card/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Card/types.ts");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");




/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.layout?.innerContent);

  // Add card class to module.
  classnamesInstance.add('card');
  classnamesInstance.add('custom' === layout ? 'card-default' : `card-${layout}`);

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/Card/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/FullwidthPanel/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthPanel/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/FullwidthPanel/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleFullwidthPanel: () => (/* binding */ CAWebModuleFullwidthPanel),
/* harmony export */   CAWebModuleFullwidthPanelMetadata: () => (/* binding */ CAWebModuleFullwidthPanelMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/FullwidthPanel/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthPanel/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthPanel/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthPanel/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthPanel/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthPanel/Settings/content.jsx");
/* harmony import */ var _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthPanel/Settings/design.jsx");
// Local dependencies.







const CAWebModuleFullwidthPanelMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleFullwidthPanel = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsContent,
    design: _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__.SettingsDesign
  }
};

/***/ },

/***/ "./src/modules/FullwidthPanel/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthPanel/types.ts");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");




/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.layout?.innerContent);

  // Add panel class to module.
  classnamesInstance.add('card');
  classnamesInstance.add(`card-${layout}`);

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/FullwidthPanel/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleFullwidthSectionCarousel: () => (/* binding */ CAWebModuleFullwidthSectionCarousel),
/* harmony export */   CAWebModuleFullwidthSectionCarouselMetadata: () => (/* binding */ CAWebModuleFullwidthSectionCarouselMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/Settings/content.jsx");
// Local dependencies.






const CAWebModuleFullwidthSectionCarouselMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleFullwidthSectionCarousel = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  }
};

/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/types.ts");



/**
 * Module classnames function for Section Carousel Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  classnamesInstance.add('carousel');
  classnamesInstance.add('slide');

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleFullwidthSectionCarouselSlide: () => (/* binding */ CAWebModuleFullwidthSectionCarouselSlide),
/* harmony export */   CAWebModuleFullwidthSectionCarouselSlideMetadata: () => (/* binding */ CAWebModuleFullwidthSectionCarouselSlideMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/Settings/content.jsx");
/* harmony import */ var _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/Settings/design.jsx");
// Local dependencies.







const CAWebModuleFullwidthSectionCarouselSlideMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleFullwidthSectionCarouselSlide = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsContent,
    design: _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__.SettingsDesign
  }
};

/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs,
  isFirst
}) => {
  classnamesInstance.add('carousel-item');
  if (isFirst) {
    classnamesInstance.add('active');
  }

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/FullwidthSectionFooter/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionFooter/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/FullwidthSectionFooter/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleFullwidthSectionFooter: () => (/* binding */ CAWebModuleFullwidthSectionFooter),
/* harmony export */   CAWebModuleFullwidthSectionFooterMetadata: () => (/* binding */ CAWebModuleFullwidthSectionFooterMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/FullwidthSectionFooter/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionFooter/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionFooter/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthSectionFooter/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthSectionFooter/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionFooter/Settings/content.jsx");
// Local dependencies.






const CAWebModuleFullwidthSectionFooterMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleFullwidthSectionFooter = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  }
};

/***/ },

/***/ "./src/modules/FullwidthSectionFooter/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionFooter/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  classnamesInstance.add('section');
  classnamesInstance.add('row');

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/FullwidthSectionFooter/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleFullwidthSectionFooterGroup: () => (/* binding */ CAWebModuleFullwidthSectionFooterGroup),
/* harmony export */   CAWebModuleFullwidthSectionFooterGroupMetadata: () => (/* binding */ CAWebModuleFullwidthSectionFooterGroupMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/Settings/content.jsx");
/* harmony import */ var _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/Settings/design.jsx");
// Local dependencies.







const CAWebModuleFullwidthSectionFooterGroupMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleFullwidthSectionFooterGroup = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsContent,
    design: _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__.SettingsDesign
  }
};

/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  classnamesInstance.add('col');

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleFullwidthSectionPrimary: () => (/* binding */ CAWebModuleFullwidthSectionPrimary),
/* harmony export */   CAWebModuleFullwidthSectionPrimaryMetadata: () => (/* binding */ CAWebModuleFullwidthSectionPrimaryMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/placeholder-content.js");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/Settings/content.jsx");
// Local dependencies.





const CAWebModuleFullwidthSectionPrimaryMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleFullwidthSectionPrimary = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_4__.SettingsContent
  }
};

/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  classnamesInstance.add('section');

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {
  title: {
    innerContent: {
      desktop: {
        value: {
          text: '',
          level: 'h2',
          color: '',
          alignment: 'start'
        }
      }
    }
  }
};

/***/ },

/***/ "./src/modules/FullwidthServiceTiles/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthServiceTiles/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/FullwidthServiceTiles/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleFullwidthServiceTiles: () => (/* binding */ CAWebModuleFullwidthServiceTiles),
/* harmony export */   CAWebModuleFullwidthServiceTilesMetadata: () => (/* binding */ CAWebModuleFullwidthServiceTilesMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/FullwidthServiceTiles/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthServiceTiles/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthServiceTiles/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthServiceTiles/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthServiceTiles/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthServiceTiles/Settings/content.jsx");
// Local dependencies.






const CAWebModuleFullwidthServiceTilesMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleFullwidthServiceTiles = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsContent
  }
};

/***/ },

/***/ "./src/modules/FullwidthServiceTiles/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthServiceTiles/types.ts");



/**
 * Module classnames function for Service Tiles Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  classnamesInstance.add('service-tiles');

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/FullwidthServiceTiles/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleFullwidthServiceTilesItem: () => (/* binding */ CAWebModuleFullwidthServiceTilesItem),
/* harmony export */   CAWebModuleFullwidthServiceTilesItemMetadata: () => (/* binding */ CAWebModuleFullwidthServiceTilesItemMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/Settings/content.jsx");
/* harmony import */ var _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/Settings/design.jsx");
// Local dependencies.







const CAWebModuleFullwidthServiceTilesItemMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleFullwidthServiceTilesItem = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsContent,
    design: _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__.SettingsDesign
  }
};

/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs,
  isFirst
}) => {
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/Github/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Github/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/Github/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleGithub: () => (/* binding */ CAWebModuleGithub),
/* harmony export */   CAWebModuleGithubMetadata: () => (/* binding */ CAWebModuleGithubMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Github/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Github/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Github/placeholder-content.js");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Github/conversion-outline.ts");
// WordPress dependencies.
// import { __ } from '@wordpress/i18n';

// Local dependencies.




const CAWebModuleGithubMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleGithub = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  }
};

/***/ },

/***/ "./src/modules/Github/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Github/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/Github/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
// Divi dependencies.
// import { placeholderContent as placeholder } from '@divi/module-utils';

// Local dependencies.

const placeholderContent = {};

/***/ },

/***/ "./src/modules/Location/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Location/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/Location/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleLocation: () => (/* binding */ CAWebModuleLocation),
/* harmony export */   CAWebModuleLocationMetadata: () => (/* binding */ CAWebModuleLocationMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Location/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Location/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Location/placeholder-content.js");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Location/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Location/Settings/content.jsx");
/* harmony import */ var _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Location/Settings/design.jsx");
// Local dependencies.






const CAWebModuleLocationMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleLocation = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_4__.SettingsContent,
    design: _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsDesign
  }
};

/***/ },

/***/ "./src/modules/Location/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Location/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/Location/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/Panel/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Panel/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/Panel/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModulePanel: () => (/* binding */ CAWebModulePanel),
/* harmony export */   CAWebModulePanelMetadata: () => (/* binding */ CAWebModulePanelMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Panel/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Panel/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Panel/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Panel/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Panel/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Panel/Settings/content.jsx");
/* harmony import */ var _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Panel/Settings/design.jsx");
// Local dependencies.







const CAWebModulePanelMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModulePanel = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsContent,
    design: _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__.SettingsDesign
  }
};

/***/ },

/***/ "./src/modules/Panel/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Panel/types.ts");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");




/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  let layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(attrs?.layout?.innerContent);

  // Add panel class to module.
  classnamesInstance.add('card');
  classnamesInstance.add(`card-${layout}`);

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/Panel/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/PostList/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/PostList/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/PostList/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModulePostList: () => (/* binding */ CAWebModulePostList),
/* harmony export */   CAWebModulePostListMetadata: () => (/* binding */ CAWebModulePostListMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/PostList/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/PostList/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/PostList/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/PostList/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/PostList/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/PostList/Settings/content.jsx");
// Local dependencies.






const CAWebModulePostListMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModulePostList = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsContent
  }
};

/***/ },

/***/ "./src/modules/PostList/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/PostList/types.ts");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-utils");




/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  let {
    image,
    style,
    isAccordion
  } = attrs || {};
  let displayImage = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(image?.innerContent);
  let selectedStyle = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)(style?.innerContent);
  classnamesInstance.add(selectedStyle);

  // if featured image is displayed
  if ('on' === displayImage) {
    classnamesInstance.add('indent');
  }

  // if is accordion add appropriate class
  if (isAccordion) {
    classnamesInstance.add('accordion');
  }

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/PostList/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/ProfileBanner/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/ProfileBanner/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/ProfileBanner/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleProfileBanner: () => (/* binding */ CAWebModuleProfileBanner),
/* harmony export */   CAWebModuleProfileBannerMetadata: () => (/* binding */ CAWebModuleProfileBannerMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/ProfileBanner/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/ProfileBanner/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/ProfileBanner/placeholder-content.js");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/ProfileBanner/conversion-outline.ts");
// Local dependencies.




const CAWebModuleProfileBannerMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleProfileBanner = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  }
};

/***/ },

/***/ "./src/modules/ProfileBanner/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/ProfileBanner/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/ProfileBanner/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/SectionCarousel/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionCarousel/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/SectionCarousel/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleSectionCarousel: () => (/* binding */ CAWebModuleSectionCarousel),
/* harmony export */   CAWebModuleSectionCarouselMetadata: () => (/* binding */ CAWebModuleSectionCarouselMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/SectionCarousel/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionCarousel/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionCarousel/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionCarousel/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionCarousel/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionCarousel/Settings/content.jsx");
// Local dependencies.






const CAWebModuleSectionCarouselMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleSectionCarousel = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  }
};

/***/ },

/***/ "./src/modules/SectionCarousel/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionCarousel/types.ts");



/**
 * Module classnames function for Section Carousel Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  classnamesInstance.add('carousel');
  classnamesInstance.add('slide');

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/SectionCarousel/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/SectionCarouselSlide/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionCarouselSlide/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/SectionCarouselSlide/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleSectionCarouselSlide: () => (/* binding */ CAWebModuleSectionCarouselSlide),
/* harmony export */   CAWebModuleSectionCarouselSlideMetadata: () => (/* binding */ CAWebModuleSectionCarouselSlideMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/SectionCarouselSlide/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionCarouselSlide/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionCarouselSlide/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionCarouselSlide/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionCarouselSlide/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionCarouselSlide/Settings/content.jsx");
/* harmony import */ var _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/SectionCarouselSlide/Settings/design.jsx");
// Local dependencies.







const CAWebModuleSectionCarouselSlideMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleSectionCarouselSlide = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsContent,
    design: _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__.SettingsDesign
  }
};

/***/ },

/***/ "./src/modules/SectionCarouselSlide/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionCarouselSlide/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs,
  isFirst
}) => {
  classnamesInstance.add('carousel-item');
  if (isFirst) {
    classnamesInstance.add('active');
  }

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/SectionCarouselSlide/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/SectionFooter/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionFooter/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/SectionFooter/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleSectionFooter: () => (/* binding */ CAWebModuleSectionFooter),
/* harmony export */   CAWebModuleSectionFooterMetadata: () => (/* binding */ CAWebModuleSectionFooterMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/SectionFooter/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionFooter/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionFooter/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionFooter/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionFooter/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionFooter/Settings/content.jsx");
// Local dependencies.






const CAWebModuleSectionFooterMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleSectionFooter = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  }
};

/***/ },

/***/ "./src/modules/SectionFooter/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionFooter/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  classnamesInstance.add('section');
  classnamesInstance.add('row');

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/SectionFooter/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/SectionFooterGroup/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionFooterGroup/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/SectionFooterGroup/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleSectionFooterGroup: () => (/* binding */ CAWebModuleSectionFooterGroup),
/* harmony export */   CAWebModuleSectionFooterGroupMetadata: () => (/* binding */ CAWebModuleSectionFooterGroupMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/SectionFooterGroup/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionFooterGroup/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionFooterGroup/placeholder-content.js");
/* harmony import */ var _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionFooterGroup/module-default-render-attributes.json");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionFooterGroup/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionFooterGroup/Settings/content.jsx");
/* harmony import */ var _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/SectionFooterGroup/Settings/design.jsx");
// Local dependencies.







const CAWebModuleSectionFooterGroupMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleSectionFooterGroup = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_4__.conversionOutline,
  defaultAttrs: _module_default_render_attributes_json__WEBPACK_IMPORTED_MODULE_3__,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_5__.SettingsContent,
    design: _Settings_design_jsx__WEBPACK_IMPORTED_MODULE_6__.SettingsDesign
  }
};

/***/ },

/***/ "./src/modules/SectionFooterGroup/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionFooterGroup/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  classnamesInstance.add('col');

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/SectionFooterGroup/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {};

/***/ },

/***/ "./src/modules/SectionPrimary/custom-css.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionPrimary/module.json");
// WordPress dependencies.



// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;

// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');

const cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ },

/***/ "./src/modules/SectionPrimary/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleSectionPrimary: () => (/* binding */ CAWebModuleSectionPrimary),
/* harmony export */   CAWebModuleSectionPrimaryMetadata: () => (/* binding */ CAWebModuleSectionPrimaryMetadata)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/SectionPrimary/module.json");
/* harmony import */ var _edit_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionPrimary/edit.jsx");
/* harmony import */ var _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionPrimary/placeholder-content.js");
/* harmony import */ var _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionPrimary/conversion-outline.ts");
/* harmony import */ var _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionPrimary/Settings/content.jsx");
// Local dependencies.





const CAWebModuleSectionPrimaryMetadata = _module_json__WEBPACK_IMPORTED_MODULE_0__;
const CAWebModuleSectionPrimary = {
  placeholderContent: _placeholder_content_js__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline_ts__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit_jsx__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content_jsx__WEBPACK_IMPORTED_MODULE_4__.SettingsContent
  }
};

/***/ },

/***/ "./src/modules/SectionPrimary/module-classnames.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _types_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionPrimary/types.ts");



/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
const moduleClassnames = ({
  classnamesInstance,
  attrs
}) => {
  classnamesInstance.add('section');

  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)(attrs?.module?.advanced?.text));
};

/***/ },

/***/ "./src/modules/SectionPrimary/placeholder-content.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
const placeholderContent = {
  title: {
    innerContent: {
      desktop: {
        value: {
          text: '',
          level: 'h2',
          color: '',
          alignment: 'start'
        }
      }
    }
  }
};

/***/ },

/***/ "./src/modules/Utils/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderWordPressShortcode: () => (/* reexport safe */ _Module_jsx__WEBPACK_IMPORTED_MODULE_0__.RenderWordPressShortcode),
/* harmony export */   get_address: () => (/* reexport safe */ _Module_jsx__WEBPACK_IMPORTED_MODULE_0__.get_address),
/* harmony export */   get_google_map_place_link: () => (/* reexport safe */ _Module_jsx__WEBPACK_IMPORTED_MODULE_0__.get_google_map_place_link),
/* harmony export */   get_icon_span: () => (/* reexport safe */ _Module_jsx__WEBPACK_IMPORTED_MODULE_0__.get_icon_span),
/* harmony export */   processColorPickerValue: () => (/* reexport safe */ _Module_jsx__WEBPACK_IMPORTED_MODULE_0__.processColorPickerValue)
/* harmony export */ });
/* harmony import */ var _Module_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Utils/Module.jsx");



/***/ },

/***/ "./node_modules/memize/dist/index.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memize)
/* harmony export */ });
/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {(...args: any[]) => any} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {((...args: Parameters<F>) => ReturnType<F>) & MemizeMemoizedFunction} Memoized function.
 */
function memize(fn, options) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized(/* ...args */) {
		var node = head,
			len = arguments.length,
			args,
			i;

		searchCache: while (node) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if (node.args.length !== arguments.length) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for (i = 0; i < len; i++) {
				if (node.args[i] !== arguments[i]) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if (node !== head) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if (node === tail) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ (node.prev).next = node.next;
				if (node.next) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ (head).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array(len);
		for (i = 0; i < len; i++) {
			args[i] = arguments[i];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply(null, args),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if (head) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if (size === /** @type {MemizeOptions} */ (options).maxSize) {
			tail = /** @type {MemizeCacheNode} */ (tail).prev;
			/** @type {MemizeCacheNode} */ (tail).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function () {
		head = null;
		tail = null;
		size = 0;
	};

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}




/***/ },

/***/ "./src/modules/Card/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":{"innerContent":{"desktop":{"value":"default"}}},"image":{"advanced":{"desktop":{"value":{"show":"off"}}}},"title":{"advanced":{"desktop":{"value":{"show":"off","size":"h4"}}}},"button":{"advanced":{"desktop":{"value":{"show":"off"}}}},"footer":{"advanced":{"desktop":{"value":{"show":"off"}}}}}');

/***/ },

/***/ "./src/modules/Card/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/card","d4Shortcode":"et_pb_ca_card","title":"Card","titles":"Cards","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_card","moduleOrderClassName":"et_pb_ca_card","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"layout":{"type":"object","inlineEditor":"plainText","selector":"{{selector}} .card-layout","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"style":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"layout.innerContent","label":"Card Style","description":"Here you can choose the style in which to display the card.","features":{"responsive":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"options":{"default":{"label":"Default","value":"default"},"standout":{"label":"Standout","value":"standout"},"overstated":{"label":"Overstated","value":"overstated"},"understated":{"label":"Understated","value":"understated"},"custom":{"label":"Custom","value":"custom"}}}}}},"styleDesign":{"groupType":"group-item","item":{"groupSlug":"designStyle","render":true,"attrName":"layout.advanced","subName":"color","label":"Set Card Color","description":"Here you can define a custom card color.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}},"image":{"type":"object","elementType":"image","selector":"{{selector}} .card-image-top","tagName":"img","attributes":{"class":"card-image-top img-responsive"},"childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showImage":{"groupSlug":"style","render":true,"label":"Include Image","attrName":"image.advanced","subName":"show","description":"Toggle to include or exclude the image for this card.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"src":{"groupSlug":"style","render":true,"attrName":"image.innerContent","subName":"src","label":"Featured Image","description":"This image will be used as the main image for this card.","features":{"responsive":false},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}}}}}},"title":{"type":"object","elementType":"heading","selector":"{{selector}} .card-header","attributes":{"class":"card-header"},"childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"header":{"groupType":"group-items","items":{"showHeader":{"groupSlug":"header","render":true,"attrName":"title.advanced","subName":"show","label":"Include Header","description":"Toggle to include or exclude the header for this card.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"title":{"groupSlug":"header","render":true,"attrName":"title.innerContent","label":"Header Title","description":"Here you can enter a header title for the card.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}},"designHeader":{"groupType":"group-items","items":{"size":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"size","label":"Header Size","description":"Here you can choose the heading size for the header title.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h4","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}},"color":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"color","label":"Heading Color","description":"Here you can define a custom text color.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}}},"content":{"type":"object","selector":"{{selector}} .card-body","attributes":{"class":"card-body"},"childrenSanitizer":"et_core_esc_previously","allowHtml":true,"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the card.","features":{"responsive":false},"component":{"name":"divi/richtext","type":"field"}}}}},"button":{"type":"object","selector":"{{selector}} .card-button","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"attrName":"button.advanced","subName":"show","label":"Button","description":"Toggle to include or exclude a button in the card.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"text":{"groupSlug":"body","render":true,"attrName":"button.innerContent","subName":"text","label":"Button Text","description":"Here you can enter the text that will be used for the button.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"url":{"groupSlug":"body","render":true,"attrName":"button.innerContent","subName":"linkUrl","label":"Button URL","description":"Here you can enter the URL that the button will link to.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"footer":{"type":"object","selector":"{{selector}} .card-footer","attributes":{"class":"card-footer"},"childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"footer":{"groupType":"group-items","items":{"showFooter":{"groupSlug":"footer","render":true,"attrName":"footer.advanced","subName":"show","label":"Include Footer","description":"Toggle to include or exclude the footer for this card.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"footer":{"groupSlug":"footer","render":true,"attrName":"footer.innerContent","label":"Footer Title","description":"Here you can enter a footer title for the card.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}},"designFooter":{"groupType":"group-item","item":{"groupSlug":"designFooter","render":true,"attrName":"footer.advanced","subName":"color","label":"Footer Color","description":"Here you can define a custom text color.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}}},"settings":{"advanced":"auto","groups":{"style":{"panel":"content","priority":1,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"header":{"panel":"content","priority":2,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":3,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"footer":{"panel":"content","priority":4,"groupName":"footer","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Footer"}}},"designStyle":{"panel":"design","priority":1,"groupName":"designStyle","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"designHeader":{"panel":"design","priority":2,"groupName":"designHeader","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"designFooter":{"panel":"design","priority":3,"groupName":"designFooter","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Footer"}}}}}}');

/***/ },

/***/ "./src/modules/FullwidthPanel/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":{"innerContent":{"desktop":{"value":"default"}}},"title":{"innerContent":{"desktop":{"value":"Header"}},"advanced":{"desktop":{"value":{"align":"left","size":"h4"}}}},"content":{"innerContent":{"desktop":{"value":"Add content here"}}},"button":{"innerContent":{"desktop":{"value":{"text":"Read More","linkUrl":"#","linkTarget":"_blank"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"icon":{"advanced":{"desktop":{"value":{"show":"off"}}}}}');

/***/ },

/***/ "./src/modules/FullwidthPanel/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/fullwidth-panel","d4Shortcode":"et_pb_ca_fullwidth_panel","title":"Fullwidth Panel","titles":"Fullwidth Panels","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_fullwidth_panel","moduleOrderClassName":"et_pb_ca_fullwidth_panel","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"layout":{"type":"object","inlineEditor":"plainText","selector":"{{selector}} .card-layout","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"style":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"layout.innerContent","label":"Panel Style","description":"Here you can choose the style in which to display the panel.","features":{"responsive":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"options":{"none":{"label":"None","value":"none"},"default":{"label":"Default","value":"default"},"standout":{"label":"Standout","value":"standout"},"standout highlight":{"label":"Standout Highlight","value":"standout highlight"},"overstated":{"label":"Overstated","value":"overstated"},"understated":{"label":"Understated","value":"understated"}}}}}},"styleDesign":{"groupType":"group-item","item":{"groupSlug":"designStyle","render":true,"attrName":"layout.advanced","subName":"color","label":"Set Panel Color","description":"Here you can define a custom panel color.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}},"title":{"type":"object","elementType":"heading","selector":"{{selector}} .card-title","attributes":{"class":"card-title"},"childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"header":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"title.innerContent","label":"Heading","description":"Here you can enter a header title for the panel.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}},"designHeader":{"groupType":"group-items","items":{"alignment":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"alignment","label":"Heading Alignment","description":"Here you can choose the alignment for the header title.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"left","options":{"left":{"label":"Left","value":"left"},"center":{"label":"Center","value":"center"},"right":{"label":"Right","value":"right"}}}}},"size":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"size","label":"Heading Size","description":"Here you can choose the heading size for the header title.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h4","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}},"color":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"color","label":"Heading Text Color","description":"Here you can define a custom text color.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}}},"icon":{"type":"object","selector":"{{selector}} .card-icon","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showIcon":{"groupSlug":"designHeader","render":true,"attrName":"icon.advanced","subName":"show","label":"Use Icon","description":"Choose whether to display an icon before the Heading.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"icon":{"groupSlug":"designHeader","render":true,"attrName":"icon.innerContent","label":"Heading Icon","description":"Here you can select a Heading Icon.","features":{"responsive":false},"component":{"name":"divi/icon-picker","type":"field"}}}}}},"button":{"type":"object","selector":"{{selector}} .card-button","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"header","render":true,"attrName":"button.advanced","subName":"show","label":"Read More Button","description":"Toggle to include or exclude a button in the panel.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"text":{"groupSlug":"header","render":true,"attrName":"button.innerContent","subName":"text","label":"Button Text","description":"Here you can enter the text that will be used for the button.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"url":{"groupSlug":"header","render":true,"attrName":"button.innerContent","subName":"linkUrl","label":"Button Link","description":"Here you can enter the URL that the button will link to.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"target":{"groupSlug":"header","render":true,"attrName":"button.innerContent","subName":"target","label":"Open in New Tab","description":"Toggle to open the button link in a new tab.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}}}}}},"content":{"type":"object","selector":"{{selector}} .card-body","attributes":{"class":"card-body"},"childrenSanitizer":"et_core_esc_previously","allowHtml":true,"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the panel.","features":{"responsive":false},"component":{"name":"divi/richtext","type":"field"}}}}}},"settings":{"advanced":"auto","groups":{"style":{"panel":"content","priority":1,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"header":{"panel":"content","priority":2,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":3,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"designStyle":{"panel":"design","priority":1,"groupName":"designStyle","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"designHeader":{"panel":"design","priority":2,"groupName":"designHeader","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}}}}}');

/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = {};

/***/ },

/***/ "./src/modules/FullwidthSectionCarousel/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/fullwidth-section-carousel","d4Shortcode":"et_pb_ca_fullwidth_section_carousel","title":"Fullwidth Section - Carousel","titles":"Fullwidth Section - Carousels","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_fullwidth_section_carousel","moduleOrderClassName":"et_pb_ca_fullwidth_section_carousel","category":"module","childModuleName":"caweb/fullwidth-section-carousel-slide","childModuleTitle":"Fullwidth Section Carousel Slide","childrenName":["caweb/fullwidth-section-carousel-slide"],"attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"section":{"type":"object","selector":"{{selector}}","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"designStyle","render":true,"attrName":"section.advanced","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"content":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","allowHtml":true,"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the panel.","features":{"responsive":false},"component":{"name":"divi/richtext","type":"field"}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"designStyle":{"panel":"design","priority":1,"groupName":"designStyle","component":{"name":"divi/composite","props":{"groupLabel":"Style"}}}}}}');

/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"title":{"innerContent":{"desktop":{"value":"Slide Title"}},"advanced":{"desktop":{"value":{"size":"h2"}}}},"desc":{"innerContent":{"desktop":{"value":"Slide Description"}}},"button":{"innerContent":{"desktop":{"value":{"text":"","linkUrl":""}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"image":{"innerContent":{"desktop":{"value":{"src":"","alt":""}}}}}');

/***/ },

/***/ "./src/modules/FullwidthSectionCarouselSlide/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/fullwidth-section-carousel-slide","d4Shortcode":"et_pb_ca_fullwidth_section_carousel_slide","title":"Fullwidth Carousel Slide","titles":"Fullwidth Carousel Slides","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_fullwidth_section_carousel_slide","moduleOrderClassName":"et_pb_ca_fullwidth_section_carousel_slide","category":"child-module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"header":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"title.innerContent","label":"Title","description":"Define the title for the group section.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}},"designHeader":{"groupType":"group-item","item":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"size","label":"Heading Size","description":"Here you can choose the heading size for the header title.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h2","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}}}}}}},"image":{"type":"object","elementType":"image","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"src":{"groupSlug":"body","render":true,"priority":1,"attrName":"image.innerContent","subName":"src","label":"Image","description":"If defined, this image will be used as the background for this slide. To remove a background image, simply delete the URL from the settings field.","features":{"responsive":false},"component":{"name":"divi/upload","type":"field"}},"alt":{"groupSlug":"body","render":true,"priority":1,"attrName":"image.innerContent","subName":"alt","label":"Image Alt Text","description":"Override the existing alternate text for the slide image.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"button":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"attrName":"button.advanced","subName":"show","label":"Add More Link","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"body","render":true,"attrName":"button.innerContent","subName":"linkUrl","label":"Link URL","description":"Define the URL for the link.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"desc":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"attrName":"desc.innerContent","label":"Description","description":"Define the text for the slide content.","features":{"responsive":false},"component":{"name":"divi/textarea","type":"field"}}}}}},"settings":{"advanced":"auto","groups":{"header":{"panel":"content","priority":1,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":1,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"designHeader":{"panel":"design","priority":1,"groupName":"designHeader","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}}}}}');

/***/ },

/***/ "./src/modules/FullwidthSectionFooter/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = {};

/***/ },

/***/ "./src/modules/FullwidthSectionFooter/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/fullwidth-section-footer","d4Shortcode":"et_pb_ca_fullwidth_section_footer","title":"Fullwidth Section - Footer","titles":"Fullwidth Section - Footers","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_fullwidth_section_footer","moduleOrderClassName":"et_pb_ca_fullwidth_section_footer","category":"module","childModuleName":"caweb/fullwidth-section-footer-group","childModuleTitle":"Fullwidth Section Footer Group","childrenName":["caweb/fullwidth-section-footer-group"],"attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"section":{"type":"object","selector":"{{selector}}","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"designStyle","render":true,"attrName":"section.advanced","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"content":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","allowHtml":true,"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the panel.","features":{"responsive":false},"component":{"name":"divi/richtext","type":"field"}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"designStyle":{"panel":"design","priority":1,"groupName":"designStyle","component":{"name":"divi/composite","props":{"groupLabel":"Style"}}}}}}');

/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"title":{"innerContent":{"desktop":{"value":"Group Title"}},"advanced":{"desktop":{"value":{"size":"h4","color":""}}}},"content":{"advanced":{"desktop":{"value":{"color":"","displayLink":"off"}}}},"button":{"innerContent":{"desktop":{"value":{"text":"","linkUrl":""}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"icon":{"innerContent":{"desktop":{"value":{"icon":""}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link1":{"innerContent":{"desktop":{"value":{"text":"Link1","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link2":{"innerContent":{"desktop":{"value":{"text":"Link2","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link3":{"innerContent":{"desktop":{"value":{"text":"Link3","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link4":{"innerContent":{"desktop":{"value":{"text":"Link4","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link5":{"innerContent":{"desktop":{"value":{"text":"Link5","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link6":{"innerContent":{"desktop":{"value":{"text":"Link6","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link7":{"innerContent":{"desktop":{"value":{"text":"Link7","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link8":{"innerContent":{"desktop":{"value":{"text":"Link8","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link9":{"innerContent":{"desktop":{"value":{"text":"Link9","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link10":{"innerContent":{"desktop":{"value":{"text":"Link10","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}}}');

/***/ },

/***/ "./src/modules/FullwidthSectionFooterGroup/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/fullwidth-section-footer-group","d4Shortcode":"et_pb_ca_section_fullwidth_footer_group","title":"Fullwidth Footer Group","titles":"Fullwidth Footer Groups","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_section_fullwidth_footer_group","moduleOrderClassName":"et_pb_ca_section_fullwidth_footer_group","category":"child-module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"header":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"title.innerContent","label":"Title","description":"Define the title for the group section.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}},"designHeader":{"groupType":"group-items","items":{"size":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"size","label":"Heading Size","description":"Here you can choose the heading size for the header title.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h4","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}},"color":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"color","label":"Heading Text Color","description":"Here you can define a custom text color.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}}},"button":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"attrName":"button.advanced","subName":"show","label":"Read More Button","description":"Toggle to include or exclude a button in the group.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"body","render":true,"attrName":"button.innerContent","subName":"linkUrl","label":"Button Link","description":"Here you can enter the URL that the button will link to.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"content":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"body":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"priority":1,"attrName":"content.advanced","subName":"displayLink","label":"Display Links as Button","description":"Whether the links should display as buttons or not.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}}},"designStyle":{"groupType":"group-items","items":{"size":{"groupSlug":"designStyle","render":true,"attrName":"content.advanced","subName":"color","label":"Text Color","description":"Here you can define a custom text color for the list items.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}}},"icon":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showIcon":{"groupSlug":"designStyle","render":true,"attrName":"icon.advanced","subName":"show","label":"Use Icon","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"icon":{"groupSlug":"designStyle","render":true,"attrName":"icon.innerContent","label":"Group Icon","description":"Define the icon for the group section.","features":{"responsive":false},"component":{"name":"divi/icon-picker","type":"field"}}}}}},"link1":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link1ShowButton":{"groupSlug":"body","render":true,"attrName":"link1.advanced","subName":"show","label":"Link 1","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link1Text":{"groupSlug":"body","render":true,"attrName":"link1.innerContent","subName":"text","label":"Link 1 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link1Url":{"groupSlug":"body","render":true,"attrName":"link1.innerContent","subName":"linkUrl","label":"Link 1 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link2":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link2ShowButton":{"groupSlug":"body","render":true,"attrName":"link2.advanced","subName":"show","label":"Link 2","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link2Text":{"groupSlug":"body","render":true,"attrName":"link2.innerContent","subName":"text","label":"Link 2 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link2Url":{"groupSlug":"body","render":true,"attrName":"link2.innerContent","subName":"linkUrl","label":"Link 2 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link3":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link3ShowButton":{"groupSlug":"body","render":true,"attrName":"link3.advanced","subName":"show","label":"Link 3","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link3Text":{"groupSlug":"body","render":true,"attrName":"link3.innerContent","subName":"text","label":"Link 3 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link3Url":{"groupSlug":"body","render":true,"attrName":"link3.innerContent","subName":"linkUrl","label":"Link 3 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link4":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link4ShowButton":{"groupSlug":"body","render":true,"attrName":"link4.advanced","subName":"show","label":"Link 4","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link4Text":{"groupSlug":"body","render":true,"attrName":"link4.innerContent","subName":"text","label":"Link 4 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link4Url":{"groupSlug":"body","render":true,"attrName":"link4.innerContent","subName":"linkUrl","label":"Link 4 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link5":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link5ShowButton":{"groupSlug":"body","render":true,"attrName":"link5.advanced","subName":"show","label":"Link 5","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link5Text":{"groupSlug":"body","render":true,"attrName":"link5.innerContent","subName":"text","label":"Link 5 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link5Url":{"groupSlug":"body","render":true,"attrName":"link5.innerContent","subName":"linkUrl","label":"Link 5 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link6":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link6ShowButton":{"groupSlug":"body","render":true,"attrName":"link6.advanced","subName":"show","label":"Link 6","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link6Text":{"groupSlug":"body","render":true,"attrName":"link6.innerContent","subName":"text","label":"Link 6 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link6Url":{"groupSlug":"body","render":true,"attrName":"link6.innerContent","subName":"linkUrl","label":"Link 6 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link7":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link7ShowButton":{"groupSlug":"body","render":true,"attrName":"link7.advanced","subName":"show","label":"Link 7","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link7Text":{"groupSlug":"body","render":true,"attrName":"link7.innerContent","subName":"text","label":"Link 7 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link7Url":{"groupSlug":"body","render":true,"attrName":"link7.innerContent","subName":"linkUrl","label":"Link 7 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link8":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link8ShowButton":{"groupSlug":"body","render":true,"attrName":"link8.advanced","subName":"show","label":"Link 8","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link8Text":{"groupSlug":"body","render":true,"attrName":"link8.innerContent","subName":"text","label":"Link 8 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link8Url":{"groupSlug":"body","render":true,"attrName":"link8.innerContent","subName":"linkUrl","label":"Link 8 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link9":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link9ShowButton":{"groupSlug":"body","render":true,"attrName":"link9.advanced","subName":"show","label":"Link 9","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link9Text":{"groupSlug":"body","render":true,"attrName":"link9.innerContent","subName":"text","label":"Link 9 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link9Url":{"groupSlug":"body","render":true,"attrName":"link9.innerContent","subName":"linkUrl","label":"Link 9 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link10":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link10ShowButton":{"groupSlug":"body","render":true,"attrName":"link10.advanced","subName":"show","label":"Link 10","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link10Text":{"groupSlug":"body","render":true,"attrName":"link10.innerContent","subName":"text","label":"Link 10 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link10Url":{"groupSlug":"body","render":true,"attrName":"link10.innerContent","subName":"linkUrl","label":"Link 10 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}}},"settings":{"advanced":"auto","groups":{"style":{"panel":"content","priority":1,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"header":{"panel":"content","priority":1,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":1,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"designHeader":{"panel":"design","priority":1,"groupName":"designHeader","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"designStyle":{"panel":"design","priority":1,"groupName":"designStyle","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}}}}}');

/***/ },

/***/ "./src/modules/FullwidthSectionPrimary/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/fullwidth-section-primary","d4Shortcode":"et_pb_ca_fullwidth_section_primary","title":"Fullwidth Section Primary","titles":"Fullwidth Section Primaries","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_fullwidth_section_primary","moduleOrderClassName":"et_pb_ca_fullwidth_section_primary","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}},"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"module.decoration.background","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"title":{"type":"object","inlineEditor":"plainText","elementType":"heading","selector":"{{selector}} .title","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"text":"","level":"h2","color":"","alignment":"start"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"header","render":true,"attrName":"title.innerContent","subName":"text","label":"Title","description":"Define the title for the section.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"level":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"level","label":"Size","description":"Here you can choose the size for the panel header.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h2","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}},"alignment":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"alignment","label":"Alignment","description":"Here you can choose the alignment for the panel header.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"start","options":{"start":{"label":"Left","value":"start"},"center":{"label":"Center","value":"center"},"end":{"label":"Right","value":"end"}}}}},"color":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"color","label":"Color","description":"Here you can define a custom heading color for the title.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}}},"content":{"type":"object","elementType":"content","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the module.","render":true,"features":{"responsive":false},"component":{"type":"field","name":"divi/richtext"}}}}},"image":{"type":"object","elementType":"image","tagName":"img","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"show":{"groupSlug":"body","render":true,"label":"Feautured Image","attrName":"image.innerContent","subName":"show","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"position":{"groupSlug":"body","render":true,"label":"Image Position","attrName":"image.innerContent","subName":"alignment","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"fade":{"groupSlug":"body","render":true,"label":"Fade Image from Left","attrName":"image.innerContent","subName":"fade","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"src":{"groupSlug":"body","render":true,"attrName":"image.innerContent","subName":"src","label":"Image","description":"If defined, this image will be used as the background for this module.","features":{"responsive":false},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}}}}}},"link":{"type":"object","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"label":"More Information Button","attrName":"link.innerContent","subName":"show","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"body","render":true,"label":"Link URL","description":"URL destination for the button","attrName":"link.innerContent","subName":"url","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}}},"settings":{"design":"auto","advanced":"auto","groups":{"header":{"panel":"content","priority":2,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":2,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"headerDesign":{"panel":"design","priority":2,"groupName":"headerDesign","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"style":{"panel":"design","priority":2,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}}}}}');

/***/ },

/***/ "./src/modules/FullwidthServiceTiles/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = {};

/***/ },

/***/ "./src/modules/FullwidthServiceTiles/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/fullwidth-service-tiles","d4Shortcode":"et_pb_ca_fullwidth_service_tiles","title":"Fullwidth Service Tiles","titles":"Fullwidth Service Tiles","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_fullwidth_service_tiles","moduleOrderClassName":"et_pb_ca_fullwidth_service_tiles","category":"module","childModuleName":"caweb/fullwidth-service-tiles-item","childModuleTitle":"Fullwidth Service Tiles Item","childrenName":["caweb/fullwidth-service-tiles-item"],"attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"button":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"attrName":"button.advanced","subName":"show","label":"View More","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"body","render":true,"attrName":"button.innerContent","subName":"linkUrl","label":"Link URL","description":"Define the URL for the link.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"text":{"groupSlug":"body","render":true,"attrName":"button.innerContent","subName":"linkText","label":"Link Text","description":"Define the text for the link.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}}},"settings":{"design":"auto","advanced":"auto","groups":{"body":{"panel":"content","priority":1,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}}}}}');

/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"title":{"innerContent":{"desktop":{"value":"Item Title"}},"advanced":{"desktop":{"value":{"size":"h2"}}}},"desc":{"innerContent":{"desktop":{"value":"Item Description"}}},"button":{"innerContent":{"desktop":{"value":{"text":"","linkUrl":""}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"image":{"innerContent":{"desktop":{"value":{"src":"","alt":""}}}}}');

/***/ },

/***/ "./src/modules/FullwidthServiceTilesItem/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/fullwidth-service-tiles-item","d4Shortcode":"et_pb_ca_fullwidth_service_tiles_item","title":"Fullwidth Service Tiles Item","titles":"Fullwidth Service Tiles Items","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_fullwidth_service_tiles_item","moduleOrderClassName":"et_pb_ca_fullwidth_service_tiles_item","category":"child-module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"header":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"title.innerContent","label":"Title","description":"Define the title for the tile.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}},"style":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"title.advanced","subName":"size","label":"Size","description":"Here you can choose the size of the title.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"quarter","options":{"quarter":{"label":"Quarter","value":"quarter"},"half":{"label":"Half","value":"half"},"full":{"label":"Full","value":"full"}}}}}}}}}},"image":{"type":"object","elementType":"image","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","attributes":{"class":"w-100"},"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"priority":1,"attrName":"image.innerContent","subName":"src","label":"Image","description":"If defined, this image will be used as the background for this tile. To remove a background image, simply delete the URL from the settings field.","features":{"responsive":false},"component":{"name":"divi/upload","type":"field"}}}}},"button":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"attrName":"button.advanced","subName":"show","label":"Link to URL","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"body","render":true,"attrName":"button.innerContent","subName":"linkUrl","label":"URL","description":"Define the URL for the tile.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"content":{"type":"object","selector":"{{selector}}","attributes":{"class":"group"},"allowHtml":true,"childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"attrName":"content.innerContent","label":"Tile Content","description":"Define the text for the tile content.","features":{"responsive":false},"component":{"name":"divi/richtext","type":"field"}}}}}},"settings":{"design":"auto","advanced":"auto","groups":{"header":{"panel":"content","priority":1,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"style":{"panel":"content","priority":1,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"body":{"panel":"content","priority":1,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}}}}}');

/***/ },

/***/ "./src/modules/Github/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/github","d4Shortcode":"et_pb_ca_github","title":"Github","titles":"Githubs","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_github","moduleOrderClassName":"et_pb_ca_github","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}},"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"module.decoration.background","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"title":{"type":"object","inlineEditor":"plainText","elementType":"heading","selector":"{{selector}} .title","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"text":"","level":"h2"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"header","render":true,"attrName":"title.innerContent","subName":"text","label":"Title","description":"Enter a title for the list.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"level":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"level","label":"Size","description":"Here you can choose the size for the panel header.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}}}}}},"request":{"type":"object","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"username":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"username","label":"Username","description":"Enter GitHub Username.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"results":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"per_page","label":"Maximum # of results","description":"Enter amount to display per page. Default is 30, Max is 100.","features":{"responsive":false},"component":{"name":"divi/common-numeric-input","type":"field","props":{"defaultValue":100,"min":1,"max":100,"step":1}}},"repo_type":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"repo_type","label":"Repository Type","description":"Choose repository type you wish to display.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"all","options":{"all":{"label":"All","value":"all"},"public":{"label":"Public","value":"public"},"private":{"label":"Private","value":"private"},"forks":{"label":"Forks","value":"forks"}}}}},"pat":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"access_token","label":"Personal Access Token","description":"This is required for Private Repositories to display.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"rate_limit":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"increase_rate_limit","label":"Increase Rate Limit","description":"Increase the maximum number of requests users are permitted to make per hour. <a href=\\"https://developer.github.com/v3/#rate-limiting\\" target=\\"_blank\\">Rate Limiting</a>.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"client_id":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"client_id","label":"Client ID","description":"Enter GitHub Client ID.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"client_secret":{"groupSlug":"organization","render":true,"attrName":"request.innerContent","subName":"client_secret","label":"Client Secret","description":"Enter GitHub Client Secret.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"definitions":{"groupSlug":"organization","render":true,"label":"Select which information for each repository you would like to display.","description":"Definitions","attrName":"definitions","features":{"responsive":false},"component":{"name":"divi/checkboxes","type":"field","props":{"options":[{"label":"Project Title","value":"name"},{"label":"Add Link to repositories (Public Repositories Only)","value":"url"},{"label":"Description","value":"desc"},{"label":"Fork","value":"fork"},{"label":"Creation Date","value":"created_at"},{"label":"Updated Date","value":"updated_at"},{"label":"Language","value":"language"}]}}}}}}}},"settings":{"design":"auto","advanced":"auto","groups":{"header":{"panel":"content","priority":2,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"headerDesign":{"panel":"design","priority":2,"groupName":"headerDesign","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"organization":{"panel":"content","priority":2,"groupName":"organization","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Organization"}}}}}}');

/***/ },

/***/ "./src/modules/Location/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/location","d4Shortcode":"et_pb_ca_location_widget","title":"Location","titles":"Locations","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_location_widget","moduleOrderClassName":"et_pb_ca_location_widget","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"layout":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":"contact"}}},"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"layout.innerContent","label":"Style","description":"Here you can choose the style in which to display the location.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"contact","options":{"contact":{"label":"Contact","value":"contact"},"mini":{"label":"Mini","value":"mini"},"banner":{"label":"Banner","value":"banner"}}}}}}}},"image":{"type":"object","elementType":"image","tagName":"img","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"src":{"groupSlug":"style","render":true,"attrName":"image.innerContent","subName":"src","label":"Set Featured Image","description":"This image will be used as the main image for this location.","features":{"responsive":false},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"alt":{"groupSlug":"style","render":false,"attrName":"image.innerContent","subName":"alt","label":"Image Alt Text","description":"Input the alt text for the portrait image.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"name":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"strong","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"location","render":true,"attrName":"name.innerContent","label":"Name","description":"Here you can enter a name for the location.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}},"desc":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"div","attributes":{"class":"description"},"childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"location","render":true,"attrName":"desc.innerContent","label":"Description","description":"Here you can enter a description for the location.","features":{"responsive":false},"component":{"name":"divi/textarea","type":"field"}}}}},"address":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"addr":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"addr","label":"Address","description":"Enter an address.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"city":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"city","label":"City","description":"Enter a city.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"state":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"state","label":"State","description":"Enter a state.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"zip":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"zip","label":"Zip Code","description":"Enter a zip code.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"contact":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"show":"off","phone":"","fax":""}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"showContact":{"groupSlug":"location","render":true,"label":"Contact Information","attrName":"contact.innerContent","subName":"show","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"phone":{"groupSlug":"location","render":true,"attrName":"contact.innerContent","subName":"phone","label":"Phone","description":"Enter a phone number.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"fax":{"groupSlug":"location","render":true,"attrName":"contact.innerContent","subName":"fax","label":"Fax","description":"Enter a fax number.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"a","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"show":"off","url":"#"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"showLink":{"groupSlug":"location","render":true,"label":"Button","attrName":"link.innerContent","subName":"show","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"location","render":true,"label":"URL","description":"Here you can enter the URL for the location.","attrName":"link.innerContent","subName":"url","features":{"responsive":false},"component":{"name":"divi/text","type":"field","props":{"defaultValue":"#"}}}}}}},"icon":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"span","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showIcon":{"groupSlug":"icon","render":true,"label":"Use Icon","attrName":"icon.innerContent","subName":"show","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"icon":{"groupSlug":"icon","render":true,"label":"Icon","description":"Select an icon.","attrName":"icon.innerContent","features":{"responsive":false},"component":{"name":"divi/icon-picker","type":"field"}}}}}}},"settings":{"advanced":"auto","groups":{"style":{"panel":"content","priority":2,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"location":{"panel":"content","priority":2,"groupName":"location","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Location"}}},"icon":{"panel":"design","priority":2,"groupName":"icon","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Icon"}}}}}}');

/***/ },

/***/ "./src/modules/Panel/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":{"innerContent":{"desktop":{"value":"default"}}},"title":{"innerContent":{"desktop":{"value":"Header"}},"advanced":{"desktop":{"value":{"align":"left","size":"h4"}}}},"content":{"innerContent":{"desktop":{"value":"Add content here"}}},"button":{"innerContent":{"desktop":{"value":{"text":"Read More","linkUrl":"#","linkTarget":"_blank"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"icon":{"advanced":{"desktop":{"value":{"show":"off"}}}}}');

/***/ },

/***/ "./src/modules/Panel/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/panel","d4Shortcode":"et_pb_ca_panel","title":"Panel","titles":"Panels","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_panel","moduleOrderClassName":"et_pb_ca_panel","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"layout":{"type":"object","inlineEditor":"plainText","selector":"{{selector}} .card-layout","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"style":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"layout.innerContent","label":"Panel Style","description":"Here you can choose the style in which to display the panel.","features":{"responsive":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"options":{"none":{"label":"None","value":"none"},"default":{"label":"Default","value":"default"},"standout":{"label":"Standout","value":"standout"},"standout highlight":{"label":"Standout Highlight","value":"standout highlight"},"overstated":{"label":"Overstated","value":"overstated"},"understated":{"label":"Understated","value":"understated"}}}}}},"styleDesign":{"groupType":"group-item","item":{"groupSlug":"designStyle","render":true,"attrName":"layout.advanced","subName":"color","label":"Set Panel Color","description":"Here you can define a custom panel color.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}},"title":{"type":"object","elementType":"heading","selector":"{{selector}} .card-title","attributes":{"class":"card-title"},"childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"header":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"title.innerContent","label":"Heading","description":"Here you can enter a header title for the panel.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}},"designHeader":{"groupType":"group-items","items":{"alignment":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"alignment","label":"Heading Alignment","description":"Here you can choose the alignment for the header title.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"left","options":{"left":{"label":"Left","value":"left"},"center":{"label":"Center","value":"center"},"right":{"label":"Right","value":"right"}}}}},"size":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"size","label":"Heading Size","description":"Here you can choose the heading size for the header title.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h4","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}},"color":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"color","label":"Heading Text Color","description":"Here you can define a custom text color.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}}},"icon":{"type":"object","selector":"{{selector}} .card-icon","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showIcon":{"groupSlug":"designHeader","render":true,"attrName":"icon.advanced","subName":"show","label":"Use Icon","description":"Choose whether to display an icon before the Heading.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"icon":{"groupSlug":"designHeader","render":true,"attrName":"icon.innerContent","label":"Heading Icon","description":"Here you can select a Heading Icon.","features":{"responsive":false},"component":{"name":"divi/icon-picker","type":"field"}}}}}},"button":{"type":"object","selector":"{{selector}} .card-button","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"header","render":true,"attrName":"button.advanced","subName":"show","label":"Read More Button","description":"Toggle to include or exclude a button in the panel.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"text":{"groupSlug":"header","render":true,"attrName":"button.innerContent","subName":"text","label":"Button Text","description":"Here you can enter the text that will be used for the button.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"url":{"groupSlug":"header","render":true,"attrName":"button.innerContent","subName":"linkUrl","label":"Button Link","description":"Here you can enter the URL that the button will link to.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"target":{"groupSlug":"header","render":true,"attrName":"button.innerContent","subName":"target","label":"Open in New Tab","description":"Toggle to open the button link in a new tab.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}}}}}},"content":{"type":"object","selector":"{{selector}} .card-body","attributes":{"class":"card-body"},"childrenSanitizer":"et_core_esc_previously","allowHtml":true,"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the panel.","features":{"responsive":false},"component":{"name":"divi/richtext","type":"field"}}}}}},"settings":{"advanced":"auto","groups":{"style":{"panel":"content","priority":1,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"header":{"panel":"content","priority":2,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":3,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"designStyle":{"panel":"design","priority":1,"groupName":"designStyle","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"designHeader":{"panel":"design","priority":2,"groupName":"designHeader","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}}}}}');

/***/ },

/***/ "./src/modules/PostList/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"title":{"innerContent":{"desktop":{"value":""}},"advanced":{"desktop":{"value":{"size":"h1"}}}},"style":{"innerContent":{"desktop":{"value":"courses-list"}},"advanced":{"desktop":{"value":{"faq":"accordion"}}}},"posts":{"innerContent":{"desktop":{"value":"-1"}}},"image":{"innerContent":{"desktop":{"value":"on"}}},"categories":{"innerContent":{"desktop":{"value":""}},"advanced":{"desktop":{"value":{"all":"on"}}}},"tags":{"innerContent":{"desktop":{"value":""}},"advanced":{"desktop":{"value":{"all":"on"}}}},"orderby":{"innerContent":{"desktop":{"value":"date_desc"}}},"excerpt":{"innerContent":{"desktop":{"value":"on"}}}}');

/***/ },

/***/ "./src/modules/PostList/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/post-list","d4Shortcode":"et_pb_ca_post_list","title":"Post List","titles":"Post Lists","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_post_list","moduleOrderClassName":"et_pb_ca_post_list","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"header":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"title.innerContent","label":"Title","description":"Enter a title for the Post List.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}},"designHeader":{"groupType":"group-item","item":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"size","label":"Title Size","description":"Select the size for the title of this module.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h1","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}}}}}}},"style":{"type":"object","inlineEditor":"plainText","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"style":{"priority":1,"groupSlug":"style","render":true,"attrName":"style.innerContent","label":"Content Type","description":"Here you can select the various list styles.","features":{"responsive":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"options":{"courses-list":{"label":"Course List","value":"courses-list"},"events-list":{"label":"Events List","value":"events-list"},"exams-list":{"label":"Exams List","value":"exams-list"},"faqs-list":{"label":"FAQs List","value":"faqs-list"},"general-list":{"label":"General List","value":"general-list"},"jobs-list":{"label":"Jobs List","value":"jobs-list"},"news-list":{"label":"News List","value":"news-list"},"profiles-list":{"label":"Profile List","value":"profiles-list"}}}}},"faq":{"priority":2,"groupSlug":"style","render":true,"attrName":"style.advanced","subName":"faq","label":"Accordion Style","description":"Here you can define a custom panel color.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"options":{"accordion":{"label":"Accordion","value":"accordion"},"toggle":{"label":"Toggle","value":"toggle"}}}}}}}}},"posts":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"priority":3,"groupSlug":"style","render":true,"attrName":"posts.innerContent","label":"Posts Number","description":"Choose how many posts you would like to display in the list. Default is all (-1).","features":{"responsive":false},"component":{"name":"divi/text","type":"field","props":{"defaultValue":"-1"}}}}}},"orderby":{"type":"object","inlineEditor":"plainText","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"priority":4,"groupSlug":"style","render":true,"attrName":"orderby.innerContent","label":"Order By","description":"Here you can adjust the order in which posts are displayed.","features":{"responsive":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"options":{"date_desc":{"label":"Date: new to old","value":"date_desc"},"date_asc":{"label":"Date: old to new","value":"date_asc"},"title_asc":{"label":"Title: A to Z","value":"title_asc"},"title_desc":{"label":"Title: Z to A","value":"title_desc"},"rand":{"label":"Random","value":"rand"}}}}}}}},"image":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"priority":5,"groupSlug":"style","render":true,"attrName":"image.innerContent","label":"Featured Image","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}}}}},"categories":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"allCats":{"priority":6,"groupSlug":"style","render":true,"attrName":"categories.advanced","subName":"all","label":"Include All Categories","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"cats":{"priority":7,"groupSlug":"style","render":true,"attrName":"categories.innerContent","label":"Select Categories","features":{"responsive":false},"component":{"name":"divi/checkboxes","type":"field","props":{"options":[]}}}}}}},"tags":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"allTags":{"priority":8,"groupSlug":"style","render":true,"attrName":"tags.advanced","subName":"all","label":"Include All Tags","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"tags":{"priority":9,"groupSlug":"style","render":true,"attrName":"tags.innerContent","label":"Select Tags","features":{"responsive":false},"component":{"name":"divi/checkboxes","type":"field","props":{"options":[]}}}}}}},"excerpt":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"priority":10,"groupSlug":"style","render":true,"attrName":"excerpt.innerContent","label":"Display Excerpt","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}}}}}},"settings":{"advanced":"auto","design":"auto","groups":{"header":{"panel":"content","priority":1,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"style":{"panel":"content","priority":2,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"designHeader":{"panel":"design","priority":1,"groupName":"designHeader","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}}}}}');

/***/ },

/***/ "./src/modules/ProfileBanner/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/profile-banner","d4Shortcode":"et_pb_profile_banner","title":"Profile Banner","titles":"Profile Banners","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_profile_banner","moduleOrderClassName":"et_pb_profile_banner","category":"module","attributes":{"module":{"type":"object","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"name":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","tagName":"h4","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"name.innerContent","label":"Profile Name","description":"Input the name of the profile.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}},"job":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","tagName":"span","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"job.innerContent","label":"Job Title","description":"Input the job title.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}},"profile":{"type":"object","inlineEditor":"plainText","tagName":"a","elementType":"element","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"text":"Link","url":"#"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"profile","render":true,"attrName":"profile.innerContent","subName":"text","label":"Link Text","description":"Input the text for the profile link.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"url":{"groupSlug":"profile","render":true,"attrName":"profile.innerContent","subName":"url","label":"URL","description":"Input the website of the profile.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"portrait":{"type":"object","childrenSanitizer":"et_core_esc_previously","tagName":"img","elementType":"image","default":{"innerContent":{"desktop":{"value":{"rounded":"on"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"imgText":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"src","label":"Image URL","description":"Type in the URL to the image you would like to display, or upload your desired image below.","features":{"responsive":false},"component":{"name":"divi/text","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"img":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"src","label":"Image","description":"Upload your desired image, or type in the URL to the image you would like to display above.","features":{"responsive":false},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"alt":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"alt","label":"Image Alt Text","description":"Input the alt text for the portrait image.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"rounded":{"groupSlug":"portraitDesign","render":true,"attrName":"portrait.advanced","subName":"rounded","label":"Round Image","description":"Switch to yes if you want the profile banner to display vertically.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field"}},"vertical":{"groupSlug":"portraitDesign","render":true,"label":"Display Vertically","attrName":"portrait.advanced","subName":"vertical","description":"Switch to yes if you want the profile banner to display vertically.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"header":{"panel":"content","priority":2,"groupName":"header","component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"profile":{"panel":"content","priority":2,"groupName":"profile","component":{"name":"divi/composite","props":{"groupLabel":"Profile"}}},"portrait":{"panel":"content","priority":2,"groupName":"portrait","component":{"name":"divi/composite","props":{"groupLabel":"Portrait"}}},"portraitDesign":{"panel":"design","priority":2,"groupName":"portraitDesign","component":{"name":"divi/composite","props":{"groupLabel":"Portrait"}}}}}}');

/***/ },

/***/ "./src/modules/SectionCarousel/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = {};

/***/ },

/***/ "./src/modules/SectionCarousel/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/section-carousel","d4Shortcode":"et_pb_ca_section_carousel","title":"Section - Carousel","titles":"Section - Carousels","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_section_carousel","moduleOrderClassName":"et_pb_ca_section_carousel","category":"module","childModuleName":"caweb/section-carousel-slide","childModuleTitle":"Section Carousel Slide","childrenName":["caweb/section-carousel-slide"],"attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"section":{"type":"object","selector":"{{selector}}","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"designStyle","render":true,"attrName":"section.advanced","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"content":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","allowHtml":true,"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the panel.","features":{"responsive":false},"component":{"name":"divi/richtext","type":"field"}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"designStyle":{"panel":"design","priority":1,"groupName":"designStyle","component":{"name":"divi/composite","props":{"groupLabel":"Style"}}}}}}');

/***/ },

/***/ "./src/modules/SectionCarouselSlide/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"title":{"innerContent":{"desktop":{"value":"Slide Title"}},"advanced":{"desktop":{"value":{"size":"h2"}}}},"desc":{"innerContent":{"desktop":{"value":"Slide Description"}}},"button":{"innerContent":{"desktop":{"value":{"text":"","linkUrl":""}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"image":{"innerContent":{"desktop":{"value":{"src":"","alt":""}}}}}');

/***/ },

/***/ "./src/modules/SectionCarouselSlide/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/section-carousel-slide","d4Shortcode":"et_pb_ca_section_carousel_slide","title":"Carousel Slide","titles":"Carousel Slides","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_section_carousel_slide","moduleOrderClassName":"et_pb_ca_section_carousel_slide","category":"child-module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"header":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"title.innerContent","label":"Title","description":"Define the title for the group section.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}},"designHeader":{"groupType":"group-item","item":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"size","label":"Heading Size","description":"Here you can choose the heading size for the header title.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h2","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}}}}}}},"image":{"type":"object","elementType":"image","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"src":{"groupSlug":"body","render":true,"priority":1,"attrName":"image.innerContent","subName":"src","label":"Image","description":"If defined, this image will be used as the background for this slide. To remove a background image, simply delete the URL from the settings field.","features":{"responsive":false},"component":{"name":"divi/upload","type":"field"}},"alt":{"groupSlug":"body","render":true,"priority":1,"attrName":"image.innerContent","subName":"alt","label":"Image Alt Text","description":"Override the existing alternate text for the slide image.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"button":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"attrName":"button.advanced","subName":"show","label":"Add More Link","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"body","render":true,"attrName":"button.innerContent","subName":"linkUrl","label":"Link URL","description":"Define the URL for the link.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"desc":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"attrName":"desc.innerContent","label":"Description","description":"Define the text for the slide content.","features":{"responsive":false},"component":{"name":"divi/textarea","type":"field"}}}}}},"settings":{"advanced":"auto","groups":{"header":{"panel":"content","priority":1,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":1,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"designHeader":{"panel":"design","priority":1,"groupName":"designHeader","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}}}}}');

/***/ },

/***/ "./src/modules/SectionFooter/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = {};

/***/ },

/***/ "./src/modules/SectionFooter/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/section-footer","d4Shortcode":"et_pb_ca_section_footer","title":"Section - Footer","titles":"Section - Footers","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_section_footer","moduleOrderClassName":"et_pb_ca_section_footer","category":"module","childModuleName":"caweb/section-footer-group","childModuleTitle":"Section Footer Group","childrenName":["caweb/section-footer-group"],"attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"section":{"type":"object","selector":"{{selector}}","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"designStyle","render":true,"attrName":"section.advanced","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"content":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","allowHtml":true,"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the panel.","features":{"responsive":false},"component":{"name":"divi/richtext","type":"field"}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"designStyle":{"panel":"design","priority":1,"groupName":"designStyle","component":{"name":"divi/composite","props":{"groupLabel":"Style"}}}}}}');

/***/ },

/***/ "./src/modules/SectionFooterGroup/module-default-render-attributes.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"title":{"innerContent":{"desktop":{"value":"Group Title"}},"advanced":{"desktop":{"value":{"size":"h4","color":""}}}},"content":{"advanced":{"desktop":{"value":{"color":"","displayLink":"off"}}}},"button":{"innerContent":{"desktop":{"value":{"text":"","linkUrl":""}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"icon":{"innerContent":{"desktop":{"value":{"icon":""}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link1":{"innerContent":{"desktop":{"value":{"text":"Link1","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link2":{"innerContent":{"desktop":{"value":{"text":"Link2","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link3":{"innerContent":{"desktop":{"value":{"text":"Link3","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link4":{"innerContent":{"desktop":{"value":{"text":"Link4","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link5":{"innerContent":{"desktop":{"value":{"text":"Link5","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link6":{"innerContent":{"desktop":{"value":{"text":"Link6","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link7":{"innerContent":{"desktop":{"value":{"text":"Link7","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link8":{"innerContent":{"desktop":{"value":{"text":"Link8","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link9":{"innerContent":{"desktop":{"value":{"text":"Link9","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}},"link10":{"innerContent":{"desktop":{"value":{"text":"Link10","linkUrl":"#"}}},"advanced":{"desktop":{"value":{"show":"off"}}}}}');

/***/ },

/***/ "./src/modules/SectionFooterGroup/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/section-footer-group","d4Shortcode":"et_pb_ca_section_footer_group","title":"Section Footer Group","titles":"Section Footer Groups","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_section_footer_group","moduleOrderClassName":"et_pb_ca_section_footer_group","category":"child-module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","elementType":"heading","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"header":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"title.innerContent","label":"Title","description":"Define the title for the group section.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}},"designHeader":{"groupType":"group-items","items":{"size":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"size","label":"Heading Size","description":"Here you can choose the heading size for the header title.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h4","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}},"color":{"groupSlug":"designHeader","render":true,"attrName":"title.advanced","subName":"color","label":"Heading Text Color","description":"Here you can define a custom text color.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}}},"button":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"attrName":"button.advanced","subName":"show","label":"Read More Button","description":"Toggle to include or exclude a button in the group.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"body","render":true,"attrName":"button.innerContent","subName":"linkUrl","label":"Button Link","description":"Here you can enter the URL that the button will link to.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"content":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"into-multiple-groups","groups":{"body":{"groupType":"group-item","item":{"groupSlug":"body","render":true,"priority":1,"attrName":"content.advanced","subName":"displayLink","label":"Display Links as Button","description":"Whether the links should display as buttons or not.","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}}},"designStyle":{"groupType":"group-items","items":{"size":{"groupSlug":"designStyle","render":true,"attrName":"content.advanced","subName":"color","label":"Text Color","description":"Here you can define a custom text color for the list items.","features":{"responsive":false},"component":{"name":"divi/color-picker","type":"field"}}}}}}}},"icon":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showIcon":{"groupSlug":"designStyle","render":true,"attrName":"icon.advanced","subName":"show","label":"Use Icon","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"icon":{"groupSlug":"designStyle","render":true,"attrName":"icon.innerContent","label":"Group Icon","description":"Define the icon for the group section.","features":{"responsive":false},"component":{"name":"divi/icon-picker","type":"field"}}}}}},"link1":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link1ShowButton":{"groupSlug":"body","render":true,"attrName":"link1.advanced","subName":"show","label":"Link 1","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link1Text":{"groupSlug":"body","render":true,"attrName":"link1.innerContent","subName":"text","label":"Link 1 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link1Url":{"groupSlug":"body","render":true,"attrName":"link1.innerContent","subName":"linkUrl","label":"Link 1 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link2":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link2ShowButton":{"groupSlug":"body","render":true,"attrName":"link2.advanced","subName":"show","label":"Link 2","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link2Text":{"groupSlug":"body","render":true,"attrName":"link2.innerContent","subName":"text","label":"Link 2 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link2Url":{"groupSlug":"body","render":true,"attrName":"link2.innerContent","subName":"linkUrl","label":"Link 2 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link3":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link3ShowButton":{"groupSlug":"body","render":true,"attrName":"link3.advanced","subName":"show","label":"Link 3","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link3Text":{"groupSlug":"body","render":true,"attrName":"link3.innerContent","subName":"text","label":"Link 3 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link3Url":{"groupSlug":"body","render":true,"attrName":"link3.innerContent","subName":"linkUrl","label":"Link 3 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link4":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link4ShowButton":{"groupSlug":"body","render":true,"attrName":"link4.advanced","subName":"show","label":"Link 4","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link4Text":{"groupSlug":"body","render":true,"attrName":"link4.innerContent","subName":"text","label":"Link 4 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link4Url":{"groupSlug":"body","render":true,"attrName":"link4.innerContent","subName":"linkUrl","label":"Link 4 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link5":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link5ShowButton":{"groupSlug":"body","render":true,"attrName":"link5.advanced","subName":"show","label":"Link 5","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link5Text":{"groupSlug":"body","render":true,"attrName":"link5.innerContent","subName":"text","label":"Link 5 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link5Url":{"groupSlug":"body","render":true,"attrName":"link5.innerContent","subName":"linkUrl","label":"Link 5 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link6":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link6ShowButton":{"groupSlug":"body","render":true,"attrName":"link6.advanced","subName":"show","label":"Link 6","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link6Text":{"groupSlug":"body","render":true,"attrName":"link6.innerContent","subName":"text","label":"Link 6 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link6Url":{"groupSlug":"body","render":true,"attrName":"link6.innerContent","subName":"linkUrl","label":"Link 6 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link7":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link7ShowButton":{"groupSlug":"body","render":true,"attrName":"link7.advanced","subName":"show","label":"Link 7","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link7Text":{"groupSlug":"body","render":true,"attrName":"link7.innerContent","subName":"text","label":"Link 7 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link7Url":{"groupSlug":"body","render":true,"attrName":"link7.innerContent","subName":"linkUrl","label":"Link 7 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link8":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link8ShowButton":{"groupSlug":"body","render":true,"attrName":"link8.advanced","subName":"show","label":"Link 8","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link8Text":{"groupSlug":"body","render":true,"attrName":"link8.innerContent","subName":"text","label":"Link 8 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link8Url":{"groupSlug":"body","render":true,"attrName":"link8.innerContent","subName":"linkUrl","label":"Link 8 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link9":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link9ShowButton":{"groupSlug":"body","render":true,"attrName":"link9.advanced","subName":"show","label":"Link 9","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link9Text":{"groupSlug":"body","render":true,"attrName":"link9.innerContent","subName":"text","label":"Link 9 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link9Url":{"groupSlug":"body","render":true,"attrName":"link9.innerContent","subName":"linkUrl","label":"Link 9 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}},"link10":{"type":"object","selector":"{{selector}}","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"link10ShowButton":{"groupSlug":"body","render":true,"attrName":"link10.advanced","subName":"show","label":"Link 10","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"link10Text":{"groupSlug":"body","render":true,"attrName":"link10.innerContent","subName":"text","label":"Link 10 Text","description":"Here you can enter the text for the link","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"link10Url":{"groupSlug":"body","render":true,"attrName":"link10.innerContent","subName":"linkUrl","label":"Link 10 URL","description":"Here you can enter the URL.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}}},"settings":{"advanced":"auto","groups":{"style":{"panel":"content","priority":1,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"header":{"panel":"content","priority":1,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":1,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"designHeader":{"panel":"design","priority":1,"groupName":"designHeader","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"designStyle":{"panel":"design","priority":1,"groupName":"designStyle","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}}}}}');

/***/ },

/***/ "./src/modules/SectionPrimary/module.json"
(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/section-primary","d4Shortcode":"et_pb_ca_section_primary","title":"Section Primary","titles":"Section Primaries","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_section_primary","moduleOrderClassName":"et_pb_ca_section_primary","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}},"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"module.decoration.background","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"title":{"type":"object","inlineEditor":"plainText","elementType":"heading","selector":"{{selector}} .title","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"text":"","level":"h2","color":"","alignment":"start"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"header","render":true,"attrName":"title.innerContent","subName":"text","label":"Title","description":"Define the title for the section.","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}},"level":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"level","label":"Size","description":"Here you can choose the size for the panel header.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h2","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}},"alignment":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"alignment","label":"Alignment","description":"Here you can choose the alignment for the panel header.","features":{"responsive":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"start","options":{"start":{"label":"Left","value":"start"},"center":{"label":"Center","value":"center"},"end":{"label":"Right","value":"end"}}}}},"color":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"color","label":"Color","description":"Here you can define a custom heading color for the title.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}}},"content":{"type":"object","elementType":"content","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the module.","render":true,"features":{"responsive":false},"component":{"type":"field","name":"divi/richtext"}}}}},"image":{"type":"object","elementType":"image","tagName":"img","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"show":{"groupSlug":"body","render":true,"label":"Feautured Image","attrName":"image.innerContent","subName":"show","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"position":{"groupSlug":"body","render":true,"label":"Image Position","attrName":"image.innerContent","subName":"alignment","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"fade":{"groupSlug":"body","render":true,"label":"Fade Image from Left","attrName":"image.innerContent","subName":"fade","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"src":{"groupSlug":"body","render":true,"attrName":"image.innerContent","subName":"src","label":"Image","description":"If defined, this image will be used as the background for this module.","features":{"responsive":false},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}}}}}},"link":{"type":"object","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"label":"More Information Button","attrName":"link.innerContent","subName":"show","features":{"responsive":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"body","render":true,"label":"Link URL","description":"URL destination for the button","attrName":"link.innerContent","subName":"url","features":{"responsive":false},"component":{"name":"divi/text","type":"field"}}}}}}},"settings":{"design":"auto","advanced":"auto","groups":{"header":{"panel":"content","priority":2,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":2,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"headerDesign":{"panel":"design","priority":2,"groupName":"headerDesign","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"style":{"panel":"design","priority":2,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}}}}}');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/hooks");
/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module-library");
/* harmony import */ var _styles_builder_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/styles/_builder.scss");
/* harmony import */ var _modules_Github_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Github/index.js");
/* harmony import */ var _modules_Location_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Location/index.js");
/* harmony import */ var _modules_ProfileBanner_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/ProfileBanner/index.js");
/* harmony import */ var _modules_SectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/SectionPrimary/index.js");
/* harmony import */ var _modules_Card_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/Card/index.js");
/* harmony import */ var _modules_Panel_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/modules/Panel/index.js");
/* harmony import */ var _modules_SectionFooter_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/modules/SectionFooter/index.js");
/* harmony import */ var _modules_SectionFooterGroup_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/modules/SectionFooterGroup/index.js");
/* harmony import */ var _modules_SectionCarousel_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/modules/SectionCarousel/index.js");
/* harmony import */ var _modules_SectionCarouselSlide_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/modules/SectionCarouselSlide/index.js");
/* harmony import */ var _modules_PostList_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/modules/PostList/index.js");
/* harmony import */ var _modules_FullwidthSectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/modules/FullwidthSectionPrimary/index.js");
/* harmony import */ var _modules_FullwidthPanel_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/modules/FullwidthPanel/index.js");
/* harmony import */ var _modules_FullwidthSectionFooter_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/modules/FullwidthSectionFooter/index.js");
/* harmony import */ var _modules_FullwidthSectionFooterGroup_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/modules/FullwidthSectionFooterGroup/index.js");
/* harmony import */ var _modules_FullwidthSectionCarousel_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/modules/FullwidthSectionCarousel/index.js");
/* harmony import */ var _modules_FullwidthSectionCarouselSlide_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/modules/FullwidthSectionCarouselSlide/index.js");
/* harmony import */ var _modules_FullwidthServiceTiles_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/modules/FullwidthServiceTiles/index.js");
/* harmony import */ var _modules_FullwidthServiceTilesItem_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/modules/FullwidthServiceTilesItem/index.js");



/**
 * Internal dependencies
 */
// Styles


// standard modules












//fullwidth modules









//
// import icon-library integration
// import './icons';

// Register modules.
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addAction)('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', () => {
  // Standard modules
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_Github_index_js__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleGithubMetadata, _modules_Github_index_js__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleGithub);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_Location_index_js__WEBPACK_IMPORTED_MODULE_4__.CAWebModuleLocationMetadata, _modules_Location_index_js__WEBPACK_IMPORTED_MODULE_4__.CAWebModuleLocation);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_ProfileBanner_index_js__WEBPACK_IMPORTED_MODULE_5__.CAWebModuleProfileBannerMetadata, _modules_ProfileBanner_index_js__WEBPACK_IMPORTED_MODULE_5__.CAWebModuleProfileBanner);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_SectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_6__.CAWebModuleSectionPrimaryMetadata, _modules_SectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_6__.CAWebModuleSectionPrimary);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_Card_index_js__WEBPACK_IMPORTED_MODULE_7__.CAWebModuleCardMetadata, _modules_Card_index_js__WEBPACK_IMPORTED_MODULE_7__.CAWebModuleCard);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_Panel_index_js__WEBPACK_IMPORTED_MODULE_8__.CAWebModulePanelMetadata, _modules_Panel_index_js__WEBPACK_IMPORTED_MODULE_8__.CAWebModulePanel);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_SectionFooter_index_js__WEBPACK_IMPORTED_MODULE_9__.CAWebModuleSectionFooterMetadata, _modules_SectionFooter_index_js__WEBPACK_IMPORTED_MODULE_9__.CAWebModuleSectionFooter);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_SectionFooterGroup_index_js__WEBPACK_IMPORTED_MODULE_10__.CAWebModuleSectionFooterGroupMetadata, _modules_SectionFooterGroup_index_js__WEBPACK_IMPORTED_MODULE_10__.CAWebModuleSectionFooterGroup);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_SectionCarousel_index_js__WEBPACK_IMPORTED_MODULE_11__.CAWebModuleSectionCarouselMetadata, _modules_SectionCarousel_index_js__WEBPACK_IMPORTED_MODULE_11__.CAWebModuleSectionCarousel);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_SectionCarouselSlide_index_js__WEBPACK_IMPORTED_MODULE_12__.CAWebModuleSectionCarouselSlideMetadata, _modules_SectionCarouselSlide_index_js__WEBPACK_IMPORTED_MODULE_12__.CAWebModuleSectionCarouselSlide);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_PostList_index_js__WEBPACK_IMPORTED_MODULE_13__.CAWebModulePostListMetadata, _modules_PostList_index_js__WEBPACK_IMPORTED_MODULE_13__.CAWebModulePostList);

  // Fullwidth modules
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_FullwidthSectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_14__.CAWebModuleFullwidthSectionPrimaryMetadata, _modules_FullwidthSectionPrimary_index_js__WEBPACK_IMPORTED_MODULE_14__.CAWebModuleFullwidthSectionPrimary);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_FullwidthPanel_index_js__WEBPACK_IMPORTED_MODULE_15__.CAWebModuleFullwidthPanelMetadata, _modules_FullwidthPanel_index_js__WEBPACK_IMPORTED_MODULE_15__.CAWebModuleFullwidthPanel);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_FullwidthSectionFooter_index_js__WEBPACK_IMPORTED_MODULE_16__.CAWebModuleFullwidthSectionFooterMetadata, _modules_FullwidthSectionFooter_index_js__WEBPACK_IMPORTED_MODULE_16__.CAWebModuleFullwidthSectionFooter);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_FullwidthSectionFooterGroup_index_js__WEBPACK_IMPORTED_MODULE_17__.CAWebModuleFullwidthSectionFooterGroupMetadata, _modules_FullwidthSectionFooterGroup_index_js__WEBPACK_IMPORTED_MODULE_17__.CAWebModuleFullwidthSectionFooterGroup);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_FullwidthSectionCarousel_index_js__WEBPACK_IMPORTED_MODULE_18__.CAWebModuleFullwidthSectionCarouselMetadata, _modules_FullwidthSectionCarousel_index_js__WEBPACK_IMPORTED_MODULE_18__.CAWebModuleFullwidthSectionCarousel);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_FullwidthSectionCarouselSlide_index_js__WEBPACK_IMPORTED_MODULE_19__.CAWebModuleFullwidthSectionCarouselSlideMetadata, _modules_FullwidthSectionCarouselSlide_index_js__WEBPACK_IMPORTED_MODULE_19__.CAWebModuleFullwidthSectionCarouselSlide);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_FullwidthServiceTiles_index_js__WEBPACK_IMPORTED_MODULE_20__.CAWebModuleFullwidthServiceTilesMetadata, _modules_FullwidthServiceTiles_index_js__WEBPACK_IMPORTED_MODULE_20__.CAWebModuleFullwidthServiceTiles);
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_1__.registerModule)(_modules_FullwidthServiceTilesItem_index_js__WEBPACK_IMPORTED_MODULE_21__.CAWebModuleFullwidthServiceTilesItemMetadata, _modules_FullwidthServiceTilesItem_index_js__WEBPACK_IMPORTED_MODULE_21__.CAWebModuleFullwidthServiceTilesItem);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map