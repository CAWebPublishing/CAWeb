/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/ProfileBanner/conversion-outline.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
var conversionOutline = {
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
    url: 'profile.innerContent.*.value.url',
    portrait_url: 'portrait.innerContent.*.value.src',
    portrait_alt: 'portrait.innerContent.*.value.alt',
    round_image: 'portrait.rounded.*',
    is_vertical: 'portrait.vertical.*',
    module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur'
  },
  valueExpansionFunctionMap: {}
};

/***/ }),

/***/ "./src/modules/ProfileBanner/custom-css.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;
// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');
var cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ }),

/***/ "./src/modules/ProfileBanner/edit.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/ProfileBanner/styles.tsx");
/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/ProfileBanner/module-classnames.ts");
/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/ProfileBanner/module-script-data.tsx");
// External Dependencies.

// Divi Dependencies.





/**
 * Divi 4 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ProfileBannerModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
var ModuleEdit = function (props) {
  var _a, _b;
  var attrs = props.attrs,
    id = props.id,
    name = props.name,
    elements = props.elements;
  var profile = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_a = attrs === null || attrs === void 0 ? void 0 : attrs.profile) === null || _a === void 0 ? void 0 : _a.innerContent);
  var portrait = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.portrait) === null || _b === void 0 ? void 0 : _b.advanced);
  console.log(attrs);
  console.log(portrait);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_3__.ModuleStyles,
    classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames,
    scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_5__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", {
    className: "executive-profile p-3 d-flex flex-" + ("on" === (portrait === null || portrait === void 0 ? void 0 : portrait.vertical) ? 'column bg-light vertical' : 'row')
  }, elements.render({
    attrName: 'portrait',
    attrSubName: 'src',
    className: ("on" === (portrait === null || portrait === void 0 ? void 0 : portrait.rounded) ? 'rounded-circle ' : '') + (
    // rounded image +
    "on" === (portrait === null || portrait === void 0 ? void 0 : portrait.vertical) ? 'align-self-center ' : 'me-3 ') // vertical alignment
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "body" + ("on" === (portrait === null || portrait === void 0 ? void 0 : portrait.vertical) ? ' text-center' : '')
  }, elements.render({
    attrName: 'name'
  }), elements.render({
    attrName: 'job'
  }), (profile === null || profile === void 0 ? void 0 : profile.text) && (profile === null || profile === void 0 ? void 0 : profile.url) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: profile.url
  }, profile.text) : '')));
};


/***/ }),

/***/ "./src/modules/ProfileBanner/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleProfileBanner: () => (/* binding */ CAWebModuleProfileBanner)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/ProfileBanner/module.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/ProfileBanner/edit.tsx");
/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/ProfileBanner/placeholder-content.ts");
/* harmony import */ var _conversion_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/ProfileBanner/conversion-outline.ts");
// Local dependencies.




var CAWebModuleProfileBanner = {
  metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,
  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  }
};

/***/ }),

/***/ "./src/modules/ProfileBanner/module-classnames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
var moduleClassnames = function (_a) {
  var _b, _c;
  var classnamesInstance = _a.classnamesInstance,
    attrs = _a.attrs;
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text));
};

/***/ }),

/***/ "./src/modules/ProfileBanner/module-script-data.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Divi 4 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
var ModuleScriptData = function (_a) {
  var elements = _a.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
    attrName: 'module'
  }));
};

/***/ }),

/***/ "./src/modules/ProfileBanner/module.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/profile-banner","d4Shortcode":"et_pb_profile_banner","title":"Profile Banner","titles":"Profile Banners","moduleIcon":"caweb/caweb","moduleClassName":"et_pb_profile_banner","moduleOrderClassName":"et_pb_profile_banner","category":"module","attributes":{"module":{"type":"object","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"name":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","tagName":"h4","attributes":{"class":"pb-0"},"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"profileHeader","render":true,"attrName":"name.innerContent","label":"Profile Name","description":"Input the name of the profile.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"job":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","tagName":"span","attributes":{"class":"d-block"},"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"profileHeader","render":true,"attrName":"job.innerContent","label":"Job Title","description":"Input the job title.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"profile":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"profileBody","render":true,"attrName":"profile.innerContent","subName":"text","label":"Profile Link","description":"Input the text for the profile link.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"url":{"groupSlug":"profileBody","render":true,"attrName":"profile.innerContent","subName":"url","label":"Profile URL","description":"Input the website of the profile.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}},"portrait":{"type":"object","childrenSanitizer":"et_core_esc_previously","tagName":"img","elementType":"image","attributes":{"class":"width-80 height-80"},"settings":{"innerContent":{"groupType":"group-items","items":{"imgText":{"groupSlug":"profileBody","render":true,"attrName":"portrait.innerContent","subName":"src","label":"Portrait Image URL","description":"Type in the URL to the image you would like to display, or upload your desired image below.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/text","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"img":{"groupSlug":"profileBody","render":true,"attrName":"portrait.innerContent","subName":"src","label":"Portrait Image","description":"Upload your desired image, or type in the URL to the image you would like to display above.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"alt":{"groupSlug":"profileBody","render":true,"attrName":"portrait.innerContent","subName":"alt","label":"Portrait Image Alt Text","description":"Input the alt text for the portrait image.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"rounded":{"groupSlug":"profileBodyDesign","render":true,"label":"Round Image","attrName":"portrait.advanced","subName":"rounded","description":"Switch to yes if you want the profile banner to display vertically.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"vertical":{"groupSlug":"profileBodyDesign","render":true,"label":"Display Vertically","attrName":"portrait.advanced","subName":"vertical","description":"Switch to yes if you want the profile banner to display vertically.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"profileHeader":{"panel":"content","priority":2,"groupName":"profileHeader","component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"profileBody":{"panel":"content","priority":2,"groupName":"profileBody","component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"profileBodyDesign":{"panel":"design","priority":2,"groupName":"profileBodyDesign","component":{"name":"divi/composite","props":{"groupLabel":"Body"}}}}}}');

/***/ }),

/***/ "./src/modules/ProfileBanner/placeholder-content.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
// Divi dependencies.
// import { placeholderContent as placeholder } from '@divi/module-utils';
var placeholderContent = {
  name: {
    innerContent: {
      desktop: {
        value: 'placeholder.name'
      }
    }
  },
  job: {
    innerContent: {
      desktop: {
        value: 'placeholder.job'
      }
    }
  }
};

/***/ }),

/***/ "./src/modules/ProfileBanner/styles.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/ProfileBanner/custom-css.ts");
// External dependencies.

// Divi dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
var ModuleStyles = function (_a) {
  var _b, _c, _d, _e;
  var attrs = _a.attrs,
    settings = _a.settings,
    orderClass = _a.orderClass,
    mode = _a.mode,
    state = _a.state,
    noStyleTag = _a.noStyleTag,
    elements = _a.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings === null || settings === void 0 ? void 0 : settings.disabledModuleVisibility
      }
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.TextStyle, {
    selector: "".concat(orderClass, " .example_d4_module_inner"),
    attr: (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CommonStyle, {
    selector: "".concat(orderClass, " .example_d4_module_inner"),
    attr: (_e = (_d = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _d === void 0 ? void 0 : _d.decoration) === null || _e === void 0 ? void 0 : _e.background,
    declarationFunction: function (_a) {
      var _b, _c;
      var attrValue = _a.attrValue;
      if ('on' === ((_c = (_b = attrValue === null || attrValue === void 0 ? void 0 : attrValue.image) === null || _b === void 0 ? void 0 : _b.parallax) === null || _c === void 0 ? void 0 : _c.enabled)) {
        return 'position: relative;';
      }
      return '';
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs === null || attrs === void 0 ? void 0 : attrs.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ }),

/***/ "./src/modules/Test/conversion-outline.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
var conversionOutline = {
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
    title: 'title.innerContent.*'
  },
  valueExpansionFunctionMap: {}
};

/***/ }),

/***/ "./src/modules/Test/custom-css.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
// const customCssFields = metadata.customCssFields as Record<'name', { subName: string, selectorSuffix: string, label: string }>;
// customCssFields.name.label            = __('Name', 'd5-extension-example-modules');
var cssFields = {};
// export const cssFields = { ...customCssFields };

/***/ }),

/***/ "./src/modules/Test/edit.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleEdit: () => (/* binding */ ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Test/styles.tsx");
/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Test/module-classnames.ts");
/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Test/module-script-data.tsx");
// External Dependencies.

// Divi Dependencies.




/**
 * Divi 4 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ProfileBannerModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
var ModuleEdit = function (props) {
  var attrs = props.attrs,
    id = props.id,
    name = props.name,
    elements = props.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_2__.ModuleStyles,
    classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_3__.moduleClassnames,
    scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_4__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_d4_module_inner"
  }, elements.render({
    attrName: 'title'
  }), elements.render({
    attrName: 'content'
  })));
};


/***/ }),

/***/ "./src/modules/Test/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleTest: () => (/* binding */ CAWebModuleTest)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Test/module.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Test/edit.tsx");
/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Test/placeholder-content.ts");
/* harmony import */ var _conversion_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Test/conversion-outline.ts");
// Local dependencies.




var CAWebModuleTest = {
  metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,
  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  }
};

/***/ }),

/***/ "./src/modules/Test/module-classnames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ModuleAttrs>} param0 Function parameters.
 */
var moduleClassnames = function (_a) {
  var _b, _c;
  var classnamesInstance = _a.classnamesInstance,
    attrs = _a.attrs;
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text));
};

/***/ }),

/***/ "./src/modules/Test/module-script-data.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Divi 4 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
var ModuleScriptData = function (_a) {
  var elements = _a.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
    attrName: 'module'
  }));
};

/***/ }),

/***/ "./src/modules/Test/module.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/test","d4Shortcode":"et_pb_ca_test","title":"Test","titles":"Tests","moduleIcon":"caweb/caweb","moduleClassName":"et_pb_ca_test","moduleOrderClassName":"et_pb_ca_test","category":"module","attributes":{"module":{"type":"object","default":{"meta":{"adminLabel":{"desktop":{"value":"D4 Module"}}}},"settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","default":{"decoration":{"font":{"font":{"desktop":{"value":{"headingLevel":"h2"}}}}}},"inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","attributes":{"class":"example_d4_module_title"},"settings":{"innerContent":{"groupType":"group-item","item":{"groupName":"mainContent","priority":10,"render":true,"attrName":"title.innerContent","label":"Title","description":"Input your value to action title here.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}},"decoration":{"font":{"priority":10,"component":{"props":{"groupLabel":"Title Text","fieldLabel":"Title"}}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto"}}');

/***/ }),

/***/ "./src/modules/Test/placeholder-content.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
// Divi dependencies.
// import { placeholderContent as placeholder } from '@divi/module-utils';
var placeholderContent = {
  title: {
    innerContent: {
      desktop: {
        value: 'placeholder.title'
      }
    }
  }
};

/***/ }),

/***/ "./src/modules/Test/styles.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Test/custom-css.ts");
// External dependencies.

// Divi dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
var ModuleStyles = function (_a) {
  var _b, _c, _d, _e;
  var attrs = _a.attrs,
    settings = _a.settings,
    orderClass = _a.orderClass,
    mode = _a.mode,
    state = _a.state,
    noStyleTag = _a.noStyleTag,
    elements = _a.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings === null || settings === void 0 ? void 0 : settings.disabledModuleVisibility
      }
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.TextStyle, {
    selector: "".concat(orderClass, " .example_d4_module_inner"),
    attr: (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CommonStyle, {
    selector: "".concat(orderClass, " .example_d4_module_inner"),
    attr: (_e = (_d = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _d === void 0 ? void 0 : _d.decoration) === null || _e === void 0 ? void 0 : _e.background,
    declarationFunction: function (_a) {
      var _b, _c;
      var attrValue = _a.attrValue;
      if ('on' === ((_c = (_b = attrValue === null || attrValue === void 0 ? void 0 : attrValue.image) === null || _b === void 0 ? void 0 : _b.parallax) === null || _c === void 0 ? void 0 : _c.enabled)) {
        return 'position: relative;';
      }
      return '';
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs === null || attrs === void 0 ? void 0 : attrs.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ }),

/***/ "@divi/module":
/***/ ((module) => {

module.exports = divi.module;

/***/ }),

/***/ "@divi/module-library":
/***/ ((module) => {

module.exports = divi.moduleLibrary;

/***/ }),

/***/ "@divi/module-utils":
/***/ ((module) => {

module.exports = divi.moduleUtils;

/***/ }),

/***/ "@wordpress/hooks":
/***/ ((module) => {

module.exports = vendor.wp.hooks;

/***/ }),

/***/ "lodash":
/***/ ((module) => {

module.exports = lodash;

/***/ }),

/***/ "react":
/***/ ((module) => {

module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-library");
/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_ProfileBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/ProfileBanner/index.ts");
/* harmony import */ var _modules_Test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Test/index.ts");



// import { childModule } from './components/child-module';
// import { d4Module } from './components/d4-module';
// import { dynamicModule } from './components/dynamic-module';
// import { parentModule } from './components/parent-module';
// import { staticModule } from './components/static-module';


// import './module-icons';
// Register modules.
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addAction)('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', function () {
  console.log('Registering Modules');
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_modules_ProfileBanner__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleProfileBanner.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_modules_ProfileBanner__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleProfileBanner, 'metadata'));
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_modules_Test__WEBPACK_IMPORTED_MODULE_4__.CAWebModuleTest.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_modules_Test__WEBPACK_IMPORTED_MODULE_4__.CAWebModuleTest, 'metadata'));
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map