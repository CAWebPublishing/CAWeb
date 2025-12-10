/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Location/Settings/content.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__);
// External dependencies.


// Divi dependencies.


var SettingsContent = function (_a) {
  var _b, _c, _d, _e;
  var attrs = _a.attrs,
    defaultSettingsAttrs = _a.defaultSettingsAttrs,
    groupConfiguration = _a.groupConfiguration;
  var layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.layout) === null || _b === void 0 ? void 0 : _b.innerContent);
  var layoutDefault = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.getAttrByMode)((_c = defaultSettingsAttrs === null || defaultSettingsAttrs === void 0 ? void 0 : defaultSettingsAttrs.layout) === null || _c === void 0 ? void 0 : _c.innerContent);
  var contact = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.getAttrByMode)((_d = attrs === null || attrs === void 0 ? void 0 : attrs.contact) === null || _d === void 0 ? void 0 : _d.innerContent);
  var link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.getAttrByMode)((_e = attrs === null || attrs === void 0 ? void 0 : attrs.link) === null || _e === void 0 ? void 0 : _e.innerContent);
  layout = layout !== null && layout !== void 0 ? layout : layoutDefault;
  // Toggle Featured Image field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['style', 'component', 'props', 'fields', 'src', 'render'], 'banner' === layout);
  // Toggle Description field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'descInnercontent', 'render'], 'banner' === layout);
  // Toggle Show Contact Button field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'showContact', 'render'], 'contact' === layout);
  // Toggle Phone/Fax fields visibility based on layout and Show Contact Button
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'phone', 'render'], 'contact' === layout && 'on' === (contact === null || contact === void 0 ? void 0 : contact.show));
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'fax', 'render'], 'contact' === layout && 'on' === (contact === null || contact === void 0 ? void 0 : contact.show));
  // Toggle Show Button field visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'showLink', 'render'], 'mini' !== layout);
  // Toggle URL field visibility based on Show Button
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['location', 'component', 'props', 'fields', 'url', 'render'], 'on' === (link === null || link === void 0 ? void 0 : link.show));
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_2__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ }),

/***/ "./src/modules/Location/Settings/design.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__);
// External dependencies.


// Divi dependencies.


var SettingsDesign = function (_a) {
  var _b, _c;
  var attrs = _a.attrs,
    defaultSettingsAttrs = _a.defaultSettingsAttrs,
    groupConfiguration = _a.groupConfiguration;
  var layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.layout) === null || _b === void 0 ? void 0 : _b.innerContent);
  var layoutDefault = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.getAttrByMode)((_c = defaultSettingsAttrs === null || defaultSettingsAttrs === void 0 ? void 0 : defaultSettingsAttrs.layout) === null || _c === void 0 ? void 0 : _c.innerContent);
  layout = layout !== null && layout !== void 0 ? layout : layoutDefault;
  // Toggle Icon Design group visibility based on layout
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['icon', 'render'], 'banner' !== layout);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_2__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ }),

/***/ "./src/modules/Location/conversion-outline.ts":
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
    featured_image: 'image.innerContent.*.src'
  }
};

/***/ }),

/***/ "./src/modules/Location/custom-css.ts":
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

/***/ "./src/modules/Location/edit.tsx":
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Location/styles.tsx");
/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Location/module-classnames.ts");
/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Location/module-script-data.tsx");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Utils/index.ts");
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
// External Dependencies.

// Divi Dependencies.


// Local Dependencies.




/**
 * Renders Location (contact)
 *
 * @return ReactElement
 */
var contactLocation = function (props) {
  var _a, _b;
  var address = props.address,
    contact = props.contact,
    icon = props.icon,
    link = props.link,
    elements = props.elements,
    name = props.name;
  // get a map link if address info exists
  var addressMapLink = (0,_Utils__WEBPACK_IMPORTED_MODULE_6__.get_google_map_place_link)([address === null || address === void 0 ? void 0 : address.addr, address === null || address === void 0 ? void 0 : address.city, address === null || address === void 0 ? void 0 : address.state, address === null || address === void 0 ? void 0 : address.zip]);
  // If displaying an icon
  var displayIcon = 'on' === (icon === null || icon === void 0 ? void 0 : icon.show) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, (0,_Utils__WEBPACK_IMPORTED_MODULE_6__.get_icon_span)(icon === null || icon === void 0 ? void 0 : icon.icon)) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  // show contact info if enabled
  var displayOther = 'on' === (contact === null || contact === void 0 ? void 0 : contact.show) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement.apply((react__WEBPACK_IMPORTED_MODULE_0___default()), __spreadArray([react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null], ['' !== (contact === null || contact === void 0 ? void 0 : contact.phone) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "General Information: ", contact === null || contact === void 0 ? void 0 : contact.phone) : null, '' !== (contact === null || contact === void 0 ? void 0 : contact.fax) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FAX: ", contact === null || contact === void 0 ? void 0 : contact.fax) : null].filter(Boolean), false)) : null;
  var linkElement = '' !== (link === null || link === void 0 ? void 0 : link.url) && 'on' === (link === null || link === void 0 ? void 0 : link.show) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link === null || link === void 0 ? void 0 : link.url,
    className: 'btn btn-outline-dark',
    target: '_blank'
  }, "More") : null;
  // we combine all contact info elements here
  var contactInfo = "" !== name || null !== displayOther && ((_a = displayOther === null || displayOther === void 0 ? void 0 : displayOther.props) === null || _a === void 0 ? void 0 : _a.children) || null !== addressMapLink || null !== linkElement && ((_b = linkElement === null || linkElement === void 0 ? void 0 : linkElement.props) === null || _b === void 0 ? void 0 : _b.children) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, elements.render({
    'attrName': 'name'
  }), addressMapLink, displayOther, linkElement) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, contactInfo);
};
/**
 * Renders Location (mini)
 *
 * @return ReactElement
 */
var miniLocation = function (props) {
  var address = props.address,
    icon = props.icon,
    link = props.link,
    elements = props.elements,
    name = props.name;
  // get a map link if address info exists
  var addressMapLink = (0,_Utils__WEBPACK_IMPORTED_MODULE_6__.get_google_map_place_link)([address === null || address === void 0 ? void 0 : address.addr, address === null || address === void 0 ? void 0 : address.city, address === null || address === void 0 ? void 0 : address.state, address === null || address === void 0 ? void 0 : address.zip]);
  // If displaying an icon
  var displayIcon = 'on' === (icon === null || icon === void 0 ? void 0 : icon.show) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, (0,_Utils__WEBPACK_IMPORTED_MODULE_6__.get_icon_span)(icon === null || icon === void 0 ? void 0 : icon.icon)) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  // we wrap the name in a link if a link url is provided
  var nameElement = '' !== name ? '' !== (link === null || link === void 0 ? void 0 : link.url) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link === null || link === void 0 ? void 0 : link.url,
    target: "_blank"
  }, name) : elements.render({
    'attrName': 'name'
  }) : null;
  // we combine all contact info elements here
  var contactInfo = '' !== name || null !== addressMapLink ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, nameElement, addressMapLink) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, contactInfo);
};
/**
 * Renders Location (banner)
 *
 * @return ReactElement
 */
var bannerLocation = function (props) {
  var address = props.address,
    link = props.link,
    elements = props.elements,
    name = props.name,
    image = props.image,
    desc = props.desc;
  var imageElement = '' !== (image === null || image === void 0 ? void 0 : image.src) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'thumbnail'
  }, elements.render({
    attrName: 'image'
  })) : null;
  // get a map link if address info exists
  var addressMapLink = (0,_Utils__WEBPACK_IMPORTED_MODULE_6__.get_google_map_place_link)([address === null || address === void 0 ? void 0 : address.addr, address === null || address === void 0 ? void 0 : address.city, address === null || address === void 0 ? void 0 : address.state, address === null || address === void 0 ? void 0 : address.zip]);
  // Add description markup
  var descElement = '' !== desc ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Description:"), elements.render({
    attrName: 'desc'
  })) : null;
  var linkElement = '' !== (link === null || link === void 0 ? void 0 : link.url) && 'on' === (link === null || link === void 0 ? void 0 : link.show) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link === null || link === void 0 ? void 0 : link.url,
    target: "_blank",
    className: "btn btn-outline-dark"
  }, "View More Details") : null;
  // we combine all contact info elements here
  var contactInfo = "" !== name || null !== addressMapLink ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, elements.render({
    'attrName': 'name'
  }), addressMapLink ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'address'
  }, (0,_Utils__WEBPACK_IMPORTED_MODULE_6__.get_icon_span)('road-pin'), addressMapLink) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null)) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  // we combine all summary info elements here
  var summaryInfo = "" !== desc || null !== linkElement ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary"
  }, descElement, linkElement) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, imageElement, contactInfo, summaryInfo);
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
var ModuleEdit = function (props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  var attrs = props.attrs,
    id = props.id,
    name = props.name,
    elements = props.elements;
  var layout = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_a = attrs === null || attrs === void 0 ? void 0 : attrs.layout) === null || _a === void 0 ? void 0 : _a.innerContent);
  var address = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.address) === null || _b === void 0 ? void 0 : _b.innerContent);
  var contact = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_c = attrs === null || attrs === void 0 ? void 0 : attrs.contact) === null || _c === void 0 ? void 0 : _c.innerContent);
  var icon = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_d = attrs === null || attrs === void 0 ? void 0 : attrs.icon) === null || _d === void 0 ? void 0 : _d.innerContent);
  var link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_e = attrs === null || attrs === void 0 ? void 0 : attrs.link) === null || _e === void 0 ? void 0 : _e.innerContent);
  var locationName = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_f = attrs === null || attrs === void 0 ? void 0 : attrs.name) === null || _f === void 0 ? void 0 : _f.innerContent);
  var image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_g = attrs === null || attrs === void 0 ? void 0 : attrs.image) === null || _g === void 0 ? void 0 : _g.innerContent);
  var desc = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_h = attrs === null || attrs === void 0 ? void 0 : attrs.desc) === null || _h === void 0 ? void 0 : _h.innerContent);
  var output = react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  switch (layout) {
    case 'mini':
      output = miniLocation({
        elements: elements,
        address: address,
        icon: icon,
        link: link,
        name: locationName
      });
      break;
    case 'banner':
      output = bannerLocation({
        elements: elements,
        address: address,
        image: image,
        link: link,
        desc: desc,
        name: locationName
      });
      break;
    case 'contact':
    default:
      output = contactLocation({
        elements: elements,
        address: address,
        contact: contact,
        icon: icon,
        link: link,
        name: locationName
      });
      break;
  }
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "location ".concat(layout)
  }, output));
};


/***/ }),

/***/ "./src/modules/Location/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleLocation: () => (/* binding */ CAWebModuleLocation)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Location/module.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Location/edit.tsx");
/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Location/placeholder-content.ts");
/* harmony import */ var _conversion_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/Location/conversion-outline.ts");
/* harmony import */ var _Settings_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/Location/Settings/content.tsx");
/* harmony import */ var _Settings_design__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Location/Settings/design.tsx");
// Local dependencies.






var CAWebModuleLocation = {
  metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,
  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content__WEBPACK_IMPORTED_MODULE_4__.SettingsContent,
    design: _Settings_design__WEBPACK_IMPORTED_MODULE_5__.SettingsDesign
  }
};

/***/ }),

/***/ "./src/modules/Location/module-classnames.ts":
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

/***/ "./src/modules/Location/module-script-data.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Divi 5 module's script data component.
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

/***/ "./src/modules/Location/module.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/location","d4Shortcode":"et_pb_ca_location_widget","title":"Location","titles":"Locations","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_location_widget","moduleOrderClassName":"et_pb_ca_location_widget","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"layout":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":"contact"}}},"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"layout.innerContent","label":"Style","description":"Here you can choose the style in which to display the location.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"contact","options":{"contact":{"label":"Contact","value":"contact"},"mini":{"label":"Mini","value":"mini"},"banner":{"label":"Banner","value":"banner"}}}}}}}},"image":{"type":"object","elementType":"image","tagName":"img","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"src":{"groupSlug":"style","render":true,"attrName":"image.innerContent","subName":"src","label":"Set Featured Image","description":"This image will be used as the main image for this location.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"alt":{"groupSlug":"style","render":false,"attrName":"image.innerContent","subName":"alt","label":"Image Alt Text","description":"Input the alt text for the portrait image.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}},"name":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"strong","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"location","render":true,"attrName":"name.innerContent","label":"Name","description":"Here you can enter a name for the location.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"desc":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"div","attributes":{"class":"description"},"childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"location","render":true,"attrName":"desc.innerContent","label":"Description","description":"Here you can enter a description for the location.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/textarea","type":"field"}}}}},"address":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"addr":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"addr","label":"Address","description":"Enter an address.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"city":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"city","label":"City","description":"Enter a city.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"state":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"state","label":"State","description":"Enter a state.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"zip":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"zip","label":"Zip Code","description":"Enter a zip code.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}},"contact":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"show":"off","phone":"","fax":""}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"showContact":{"groupSlug":"location","render":true,"label":"Contact Information","attrName":"contact.innerContent","subName":"show","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"phone":{"groupSlug":"location","render":true,"attrName":"contact.innerContent","subName":"phone","label":"Phone","description":"Enter a phone number.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"fax":{"groupSlug":"location","render":true,"attrName":"contact.innerContent","subName":"fax","label":"Fax","description":"Enter a fax number.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}},"link":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"a","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"show":"off","url":"#"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"showLink":{"groupSlug":"location","render":true,"label":"Button","attrName":"link.innerContent","subName":"show","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"location","render":true,"label":"URL","description":"Here you can enter the URL for the location.","attrName":"link.innerContent","subName":"url","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field","props":{"defaultValue":"#"}}}}}}},"icon":{"type":"object","inlineEditor":"plainText","elementType":"element","tagName":"span","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showIcon":{"groupSlug":"icon","render":true,"label":"Use Icon","attrName":"icon.innerContent","subName":"show","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"icon":{"groupSlug":"icon","render":true,"label":"Icon","description":"Select an icon.","attrName":"icon.innerContent","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/icon-picker","type":"field"}}}}}}},"settings":{"advanced":"auto","groups":{"style":{"panel":"content","priority":2,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"location":{"panel":"content","priority":2,"groupName":"location","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Location"}}},"icon":{"panel":"design","priority":2,"groupName":"icon","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Icon"}}}}}}');

/***/ }),

/***/ "./src/modules/Location/placeholder-content.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
// Divi dependencies.
// import { placeholderContent as placeholder } from '@divi/module-utils';
var placeholderContent = {};

/***/ }),

/***/ "./src/modules/Location/styles.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/Location/custom-css.ts");
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
    url: 'profile.innerContent.*.url',
    portrait_url: 'portrait.innerContent.*.src',
    portrait_alt: 'portrait.innerContent.*.alt',
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
 * Divi 5 Module edit component of visual builder.
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
    className: "executive-profile".concat("on" === (portrait === null || portrait === void 0 ? void 0 : portrait.vertical) ? ' vertical' : '')
  }, elements.render({
    attrName: 'portrait',
    attrSubName: 'src',
    className: "".concat("on" === (portrait === null || portrait === void 0 ? void 0 : portrait.rounded) ? 'rounded-circle' : '') // rounded image
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "body"
  }, elements.render({
    attrName: 'name'
  }), elements.render({
    attrName: 'job'
  }), (profile === null || profile === void 0 ? void 0 : profile.text) && (profile === null || profile === void 0 ? void 0 : profile.url) ? elements.render({
    attrName: 'profile',
    attrSubName: 'text',
    htmlAttributes: {
      href: profile === null || profile === void 0 ? void 0 : profile.url
    }
  }) : '')));
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
 * Divi 5 module's script data component.
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

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/profile-banner","d4Shortcode":"et_pb_profile_banner","title":"Profile Banner","titles":"Profile Banners","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_profile_banner","moduleOrderClassName":"et_pb_profile_banner","category":"module","attributes":{"module":{"type":"object","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"name":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","tagName":"h4","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"name.innerContent","label":"Profile Name","description":"Input the name of the profile.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"job":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","tagName":"span","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"job.innerContent","label":"Job Title","description":"Input the job title.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"profile":{"type":"object","inlineEditor":"plainText","tagName":"a","elementType":"element","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"text":"Link","url":"#"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"profile","render":true,"attrName":"profile.innerContent","subName":"text","label":"Link Text","description":"Input the text for the profile link.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"url":{"groupSlug":"profile","render":true,"attrName":"profile.innerContent","subName":"url","label":"URL","description":"Input the website of the profile.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}},"portrait":{"type":"object","childrenSanitizer":"et_core_esc_previously","tagName":"img","elementType":"image","settings":{"innerContent":{"groupType":"group-items","items":{"imgText":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"src","label":"Image URL","description":"Type in the URL to the image you would like to display, or upload your desired image below.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/text","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"img":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"src","label":"Image","description":"Upload your desired image, or type in the URL to the image you would like to display above.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"alt":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"alt","label":"Image Alt Text","description":"Input the alt text for the portrait image.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"rounded":{"groupSlug":"portraitDesign","render":true,"label":"Round Image","attrName":"portrait.advanced","subName":"rounded","description":"Switch to yes if you want the profile banner to display vertically.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"vertical":{"groupSlug":"portraitDesign","render":true,"label":"Display Vertically","attrName":"portrait.advanced","subName":"vertical","description":"Switch to yes if you want the profile banner to display vertically.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"header":{"panel":"content","priority":2,"groupName":"header","component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"profile":{"panel":"content","priority":2,"groupName":"profile","component":{"name":"divi/composite","props":{"groupLabel":"Profile"}}},"portrait":{"panel":"content","priority":2,"groupName":"portrait","component":{"name":"divi/composite","props":{"groupLabel":"Portrait"}}},"portraitDesign":{"panel":"design","priority":2,"groupName":"portraitDesign","component":{"name":"divi/composite","props":{"groupLabel":"Portrait"}}}}}}');

/***/ }),

/***/ "./src/modules/ProfileBanner/placeholder-content.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
// Divi dependencies.
// import { placeholderContent as placeholder } from '@divi/module-utils';
var placeholderContent = {};

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

/***/ "./src/modules/SectionPrimary/Settings/content.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__);
// External dependencies.


// Divi dependencies.


var SettingsContent = function (_a) {
  var _b, _c;
  var attrs = _a.attrs,
    defaultSettingsAttrs = _a.defaultSettingsAttrs,
    groupConfiguration = _a.groupConfiguration;
  var image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.image) === null || _b === void 0 ? void 0 : _b.innerContent);
  var link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.getAttrByMode)((_c = attrs === null || attrs === void 0 ? void 0 : attrs.link) === null || _c === void 0 ? void 0 : _c.innerContent);
  // Toggle Featured Image Image Position, Fade From Left and Src field visibility based on if show image is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'position', 'render'], 'off' !== (image === null || image === void 0 ? void 0 : image.show));
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'fade', 'render'], 'off' !== (image === null || image === void 0 ? void 0 : image.show));
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'src', 'render'], 'off' !== (image === null || image === void 0 ? void 0 : image.show));
  // Toggle Link URL field visibility based on if show more button is on
  (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['body', 'component', 'props', 'fields', 'url', 'render'], 'off' !== (link === null || link === void 0 ? void 0 : link.show));
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_2__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ }),

/***/ "./src/modules/SectionPrimary/conversion-outline.ts":
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
    slide_image_button: 'image.innerContent.*.fade'
  }
};

/***/ }),

/***/ "./src/modules/SectionPrimary/custom-css.ts":
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

/***/ "./src/modules/SectionPrimary/edit.tsx":
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionPrimary/styles.tsx");
/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionPrimary/module-classnames.ts");
/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/SectionPrimary/module-script-data.tsx");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/Utils/index.ts");
// External Dependencies.

// Divi Dependencies.






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
var renderHeader = function (props) {
  var text = props.text,
    color = props.color,
    alignment = props.alignment,
    Tag = props.level;
  var style = {};
  if (color) {
    style = Object.assign(style, (0,_Utils__WEBPACK_IMPORTED_MODULE_6__.processColorPickerValue)(color));
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag, {
    className: "text-".concat(alignment),
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
 *       show?: OnOff,
 *       alignment?: OnOff,
 *       fade?: OnOff
 *     }
 * }} props
 * @returns {ReactElement}
 */
var renderImage = function (props) {
  var elements = props.elements,
    image = props.image;
  if ('off' === (image === null || image === void 0 ? void 0 : image.show)) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  }
  var classes = 'col-4';
  classes += 'on' === (image === null || image === void 0 ? void 0 : image.alignment) ? ' ps-3 float-end' : ' pe-3 float-start';
  classes += 'on' === (image === null || image === void 0 ? void 0 : image.fade) ? ' animate__animated  animate__fadeInLeft' : '';
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
 *       show?: OnOff;
 *     }
 * }} props
 * @returns {ReactElement}
 */
var renderButton = function (props) {
  var text = props.text,
    link = props.link;
  if (!link || 'off' === (link === null || link === void 0 ? void 0 : link.show) || !(link === null || link === void 0 ? void 0 : link.url)) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link === null || link === void 0 ? void 0 : link.url,
    className: "btn btn-outline-dark",
    target: "_blank"
  }, "More Information", react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
var ModuleEdit = function (props) {
  var _a, _b, _c;
  var attrs = props.attrs,
    id = props.id,
    name = props.name,
    elements = props.elements;
  var title = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_a = attrs === null || attrs === void 0 ? void 0 : attrs.title) === null || _a === void 0 ? void 0 : _a.innerContent);
  var image = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.image) === null || _b === void 0 ? void 0 : _b.innerContent);
  var link = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_c = attrs === null || attrs === void 0 ? void 0 : attrs.link) === null || _c === void 0 ? void 0 : _c.innerContent);
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
  }), renderImage({
    elements: elements,
    image: image
  }), renderHeader(title), elements.render({
    attrName: 'content'
  }), renderButton({
    text: title === null || title === void 0 ? void 0 : title.text,
    link: link
  }));
};


/***/ }),

/***/ "./src/modules/SectionPrimary/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleSectionPrimary: () => (/* binding */ CAWebModuleSectionPrimary)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/SectionPrimary/module.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/SectionPrimary/edit.tsx");
/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionPrimary/placeholder-content.ts");
/* harmony import */ var _conversion_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/SectionPrimary/conversion-outline.ts");
/* harmony import */ var _Settings_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/SectionPrimary/Settings/content.tsx");
// Local dependencies.





var CAWebModuleSectionPrimary = {
  metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,
  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
  },
  settings: {
    content: _Settings_content__WEBPACK_IMPORTED_MODULE_4__.SettingsContent
  }
};

/***/ }),

/***/ "./src/modules/SectionPrimary/module-classnames.ts":
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
  classnamesInstance.add('section');
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text));
};

/***/ }),

/***/ "./src/modules/SectionPrimary/module-script-data.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Divi 5 module's script data component.
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

/***/ "./src/modules/SectionPrimary/module.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/section-primary","d4Shortcode":"et_pb_ca_section_primary","title":"Section Primary","titles":"Section Primaries","moduleIcon":"caweb/module-logo","moduleClassName":"et_pb_ca_section_primary","moduleOrderClassName":"et_pb_ca_section_primary","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}},"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","render":true,"attrName":"module.decoration.background","subName":"color","label":"Background Color","description":"Here you can define a custom background color for the section.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}},"title":{"type":"object","inlineEditor":"plainText","elementType":"heading","selector":"{{selector}} .title","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"text":"","level":"h2","color":"","alignment":"start"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"header","render":true,"attrName":"title.innerContent","subName":"text","label":"Title","description":"Define the title for the section.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"level":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"level","label":"Size","description":"Here you can choose the size for the panel header.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"h2","options":{"h1":{"label":"H1","value":"h1"},"h2":{"label":"H2","value":"h2"},"h3":{"label":"H3","value":"h3"},"h4":{"label":"H4","value":"h4"},"h5":{"label":"H5","value":"h5"}}}}},"alignment":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"alignment","label":"Alignment","description":"Here you can choose the alignment for the panel header.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/select","type":"field","props":{"defaultValue":"start","options":{"start":{"label":"Left","value":"start"},"center":{"label":"Center","value":"center"},"end":{"label":"Right","value":"end"}}}}},"color":{"groupSlug":"headerDesign","render":true,"attrName":"title.innerContent","subName":"color","label":"Color","description":"Here you can define a custom heading color for the title.","features":{"responsive":false},"component":{"type":"field","name":"divi/color-picker"}}}}}},"content":{"type":"object","elementType":"content","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"body","attrName":"content.innerContent","label":"Content","description":"Here you can create the content that will be used within the module.","render":true,"features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"type":"field","name":"divi/richtext"}}}}},"image":{"type":"object","elementType":"image","tagName":"img","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"show":{"groupSlug":"body","render":true,"label":"Feautured Image","attrName":"image.innerContent","subName":"show","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"position":{"groupSlug":"body","render":true,"label":"Image Position","attrName":"image.innerContent","subName":"alignment","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"on"}}},"fade":{"groupSlug":"body","render":true,"label":"Fade Image from Left","attrName":"image.innerContent","subName":"fade","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"src":{"groupSlug":"body","render":true,"attrName":"image.innerContent","subName":"src","label":"Image","description":"If defined, this image will be used as the background for this module.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}}}}}},"link":{"type":"object","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"showButton":{"groupSlug":"body","render":true,"label":"More Information Button","attrName":"link.innerContent","subName":"show","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"url":{"groupSlug":"body","render":true,"label":"Link URL","description":"URL destination for the button","attrName":"link.innerContent","subName":"url","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/text","type":"field"}}}}}}},"settings":{"design":"auto","advanced":"auto","groups":{"header":{"panel":"content","priority":2,"groupName":"header","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"body":{"panel":"content","priority":2,"groupName":"body","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Body"}}},"headerDesign":{"panel":"design","priority":2,"groupName":"headerDesign","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"style":{"panel":"design","priority":2,"groupName":"style","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Style"}}}}}}');

/***/ }),

/***/ "./src/modules/SectionPrimary/placeholder-content.ts":
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

/***/ }),

/***/ "./src/modules/SectionPrimary/styles.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionPrimary/custom-css.ts");
// External dependencies.

// Divi dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
var ModuleStyles = function (_a) {
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

/***/ "./src/modules/Utils/Module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_address: () => (/* binding */ get_address),
/* harmony export */   get_google_map_place_link: () => (/* binding */ get_google_map_place_link),
/* harmony export */   get_icon_span: () => (/* binding */ get_icon_span),
/* harmony export */   processColorPickerValue: () => (/* binding */ processColorPickerValue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};

/**
 * Process Divi Color Picker Value
 *
 * @param  string $color Color value from color picker.
 * @return string
 */
var processColorPickerValue = function (color) {
  var _a, _b, _c;
  var colorProp = {
    color: color
  };
  if (color.startsWith('$variable(') && color.endsWith(')$')) {
    try {
      var colorString = color.slice(10, -2);
      var colorObj = JSON.parse(colorString);
      // if object is a color type
      if ('color' === (colorObj === null || colorObj === void 0 ? void 0 : colorObj.type)) {
        // if opacity has been set
        if ((_b = (_a = colorObj === null || colorObj === void 0 ? void 0 : colorObj.value) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.opacity) {
          // divide the opacity by 100
          colorObj.value.settings.opacity = colorObj.value.settings.opacity / 100;
        }
        // add color and any settings to the CSSProperty
        colorProp = __assign({
          color: "var(--".concat((_c = colorObj === null || colorObj === void 0 ? void 0 : colorObj.value) === null || _c === void 0 ? void 0 : _c.name, ")")
        }, colorObj.value.settings);
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
var get_address = function (address) {
  if ("" === address || address.length === 0) {
    return;
  } else if ('string' === typeof address) {
    address = address.split(',');
  }
  return address.map(function (part) {
    return part === null || part === void 0 ? void 0 : part.trim();
  }).filter(Boolean).join(', ');
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
var get_google_map_place_link = function (address, embed, target, classes) {
  if (embed === void 0) {
    embed = false;
  }
  if (target === void 0) {
    target = '_blank';
  }
  if (classes === void 0) {
    classes = '';
  }
  var addr = get_address(address);
  if (!addr) {
    return null;
  }
  if (embed) {
    var map_url = "https://www.google.com/maps/embed/v1/place?q=".concat(addr, "&zoom=10&key=key");
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
      title: "IFrame for Address ".concat(addr),
      src: map_url
    });
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://www.google.com/maps/place/".concat(addr),
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
var get_icon_span = function (icon) {
  if ("" === icon) {
    return;
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ca-gov-icon-".concat(icon)
  });
};


/***/ }),

/***/ "./src/modules/Utils/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_address: () => (/* reexport safe */ _Module__WEBPACK_IMPORTED_MODULE_0__.get_address),
/* harmony export */   get_google_map_place_link: () => (/* reexport safe */ _Module__WEBPACK_IMPORTED_MODULE_0__.get_google_map_place_link),
/* harmony export */   get_icon_span: () => (/* reexport safe */ _Module__WEBPACK_IMPORTED_MODULE_0__.get_icon_span),
/* harmony export */   processColorPickerValue: () => (/* reexport safe */ _Module__WEBPACK_IMPORTED_MODULE_0__.processColorPickerValue)
/* harmony export */ });
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/Utils/Module.tsx");



/***/ }),

/***/ "./src/modules/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleLocation: () => (/* reexport safe */ _Location__WEBPACK_IMPORTED_MODULE_1__.CAWebModuleLocation),
/* harmony export */   CAWebModuleProfileBanner: () => (/* reexport safe */ _ProfileBanner__WEBPACK_IMPORTED_MODULE_0__.CAWebModuleProfileBanner),
/* harmony export */   CAWebModuleSectionPrimary: () => (/* reexport safe */ _SectionPrimary__WEBPACK_IMPORTED_MODULE_2__.CAWebModuleSectionPrimary)
/* harmony export */ });
/* harmony import */ var _ProfileBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/ProfileBanner/index.ts");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Location/index.ts");
/* harmony import */ var _SectionPrimary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/SectionPrimary/index.ts");





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
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/index.ts");



/**
 * Internal dependencies
 */
// modules

// import icon-library integration
// import './icons';
// Register modules.
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addAction)('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', function () {
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_modules__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleProfileBanner.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_modules__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleProfileBanner, 'metadata'));
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_modules__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleLocation.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_modules__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleLocation, 'metadata'));
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_modules__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleSectionPrimary.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_modules__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleSectionPrimary, 'metadata'));
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map