/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    location_layout: 'location.innerContent.*.layout',
    featured_image: 'location.innerContent.*.featured_image.innerContent.*.src',
    name: 'location.innerContent.*.name',
    desc: 'location.innerContent.*.desc',
    show_button: 'location.innerContent.*.desc',
    location_link: 'location.innerContent.*.link',
    addr: 'address.innerContent.*.addr',
    city: 'address.innerContent.*.city',
    state: 'address.innerContent.*.state',
    zip: 'address.innerContent.*.zip',
    show_contact: 'contact.innerContent.*.show_contact',
    phone: 'contact.innerContent.*.phone',
    fax: 'contact.innerContent.*.fax',
    show_icon: 'icon.innerContent.*.show_icon',
    font_icon: 'icon.innerContent.*.font_icon'
    // module_text_shadow_horizontal_length: 'module.advanced.text.textShadow.*.horizontal',
    // module_text_shadow_vertical_length: 'module.advanced.text.textShadow.*.vertical',
    // module_text_shadow_blur_strength: 'module.advanced.text.textShadow.*.blur',
  },
  valueExpansionFunctionMap: {
    font_icon: function (value) {
      return value.replace(/%%/g, '');
    }
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/utils/index.ts");
// External Dependencies.

// Divi Dependencies.


// Local Dependencies.




/**
     * Renders Location (contact)
     *
     * @return string
     */
var contactLocation = function (props) {
  var _a, _b, _c, _d;
  var attrs = props.attrs;
  var location = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_a = attrs === null || attrs === void 0 ? void 0 : attrs.location) === null || _a === void 0 ? void 0 : _a.innerContent);
  var address = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.address) === null || _b === void 0 ? void 0 : _b.innerContent);
  var contact = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_c = attrs === null || attrs === void 0 ? void 0 : attrs.contact) === null || _c === void 0 ? void 0 : _c.innerContent);
  var icon = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_d = attrs === null || attrs === void 0 ? void 0 : attrs.icon) === null || _d === void 0 ? void 0 : _d.innerContent);
  var display_other = react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  var display_button = react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  // If displaying an icon
  var display_icon = 'on' === icon.show_icon ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_6__.get_icon_span)(icon.font_icon)) : '';
  // wrap name in strong tag
  var name = "" !== location.name ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, location.name) : '';
  // get a map link if address info exists
  var addr = "" !== address.addr || "" !== address.city || "" !== address.state || "" !== address.zip ? (0,_utils__WEBPACK_IMPORTED_MODULE_6__.get_google_map_place_link)([address.addr, address.city, address.state, address.zip]) : '';
  // show contact info if enabled
  if ('on' === contact.show_contact) {
    var phone = contact.phone ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "General Information: ", contact.phone) : '';
    var fax = contact.fax ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FAX: ", contact.fax) : '';
    display_other = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, phone, fax);
  }
  // if show button is enabled and location link exists
  if ('on' === location.show_button && "" !== location.link) {
    display_button = react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: location.link,
      className: "btn btn-outline-dark",
      target: "_blank"
    }, "More");
  }
  var contactInfo = "" !== location.name || "" !== address.addr || display_other || display_button ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, name, addr, display_other, display_button) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, display_icon, contactInfo);
};
var miniLocation = function (props) {
  var _a, _b, _c;
  var attrs = props.attrs;
  var location = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_a = attrs === null || attrs === void 0 ? void 0 : attrs.location) === null || _a === void 0 ? void 0 : _a.innerContent);
  var address = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.address) === null || _b === void 0 ? void 0 : _b.innerContent);
  var icon = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_c = attrs === null || attrs === void 0 ? void 0 : attrs.icon) === null || _c === void 0 ? void 0 : _c.innerContent);
  // If displaying an icon
  var display_icon = 'on' === icon.show_icon ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_6__.get_icon_span)(icon.font_icon)) : '';
  // if name exists
  var name = react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  if ("" !== location.name) {
    // if location link exists make a link, otherwise a strong tag
    name = "" !== location.link ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: location.link,
      target: "_blank"
    }, location.name) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, location.name);
  }
  // get a map link if address info exists
  var addr = "" !== address.addr || "" !== address.city || "" !== address.state || "" !== address.zip ? (0,_utils__WEBPACK_IMPORTED_MODULE_6__.get_google_map_place_link)([address.addr, address.city, address.state, address.zip]) : '';
  var contactInfo = "" !== location.name || "" !== address.addr ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, name, addr) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, display_icon, contactInfo);
};
var bannerLocation = function (props) {
  var _a, _b;
  var attrs = props.attrs,
    elements = props.elements;
  var location = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_a = attrs === null || attrs === void 0 ? void 0 : attrs.location) === null || _a === void 0 ? void 0 : _a.innerContent);
  var address = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.address) === null || _b === void 0 ? void 0 : _b.innerContent);
  console.log(elements);
  console.log(location);
  // If displaying a featured image
  var featuredImageElement = react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "thumbnail"
  }, elements.render({
    attrName: 'location.innerContent'
  }));
  // get a map link if address info exists
  var addr = "" !== address.addr || "" !== address.city || "" !== address.state || "" !== address.zip ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "address"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ca-gov-icon-road-pin"
  }), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.get_google_map_place_link)([address.addr, address.city, address.state, address.zip])) : '';
  // Add description markup
  var desc = "" !== location.desc ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Description"), elements.render({
    attrName: 'location',
    attrSubName: 'desc'
  })) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  // if show button is enabled and location link exists
  var display_button = 'on' === location.show_button && "" !== location.link ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: location.link,
    className: "btn btn-outline-dark",
    target: "_blank"
  }, "View More Details") : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  // let contactInfo = 
  var contactInfo = "" !== location.name || "" !== address.addr ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact"
  }, elements.render({
    attrName: 'location',
    attrSubName: 'name'
  }), addr) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  var summary = desc || display_button ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "summary"
  }, desc, display_button) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, featuredImageElement, contactInfo, summary);
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
  var _a;
  var attrs = props.attrs,
    id = props.id,
    name = props.name,
    elements = props.elements;
  var location = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_2__.getAttrByMode)((_a = attrs === null || attrs === void 0 ? void 0 : attrs.location) === null || _a === void 0 ? void 0 : _a.innerContent);
  var output;
  if ('contact' === location.layout) {
    output = contactLocation(props);
  } else if ('mini' === location.layout) {
    output = miniLocation(props);
  } else {
    output = bannerLocation(props);
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_3__.ModuleStyles,
    classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames,
    scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_5__.ModuleScriptData
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "location ".concat(location.layout)
  }, elements.render({
    attrName: 'location.innerContent',
    attrSubName: 'name'
  })));
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
// Local dependencies.




var CAWebModuleLocation = {
  metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,
  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_1__.ModuleEdit
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

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/location","d4Shortcode":"et_pb_ca_location_widget","title":"Location","titles":"Locations","moduleIcon":"caweb/caweb","moduleClassName":"et_pb_ca_location_widget","moduleOrderClassName":"et_pb_ca_location_widget","category":"module","attributes":{"module":{"type":"object","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"location:layout":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","attrName":"location.innerContent","subName":"layout","label":"Style","description":"Here you can choose the style in which to display the location.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/select","type":"field","props":{"options":{"contact":{"label":"Contact","value":"contact"},"mini":{"label":"Mini","value":"mini"},"banner":{"label":"Banner","value":"banner"}}}}}}}},"location:image":{"type":"object","tagName":"img","elementType":"image","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"style","label":"Set Featured Image","render":true,"attrName":"location.innerContent.desktop.value.featured_image.innerContent","subName":"src","description":"This image will be used as the featured image for this location.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}}}}},"location:name":{"type":"object","inlineEditor":"plainText","tagName":"strong","elementType":"element","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"location","render":true,"attrName":"location.innerContent","subName":"name","label":"Name","description":"Here you can enter a name for the location.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"location:desc":{"type":"object","inlineEditor":"plainText","elementType":"heading","tagName":"div","attributes":{"class":"description"},"childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"location","render":true,"attrName":"location.innerContent","subName":"desc","label":"Description","description":"Here you can enter a description for the location.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"address":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","settings":{"innerContent":{"groupType":"group-items","items":{"addr":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"addr","label":"Address","description":"Enter an address.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"city":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"city","label":"City","description":"Enter a city.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"state":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"state","label":"State","description":"Enter a state.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"zip":{"groupSlug":"location","render":true,"attrName":"address.innerContent","subName":"zip","label":"Zip Code","description":"Enter a zip code.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"style":{"panel":"content","priority":2,"groupName":"style","component":{"name":"divi/composite","props":{"groupLabel":"Style"}}},"location":{"panel":"content","priority":2,"groupName":"location","component":{"name":"divi/composite","props":{"groupLabel":"Location"}}},"icon":{"panel":"design","priority":2,"groupName":"icon","component":{"name":"divi/composite","props":{"groupLabel":"Icon"}}}}}}');

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

module.exports = /*#__PURE__*/JSON.parse('{"name":"caweb/profile-banner","d4Shortcode":"et_pb_profile_banner","title":"Profile Banner","titles":"Profile Banners","moduleIcon":"caweb/caweb","moduleClassName":"et_pb_profile_banner","moduleOrderClassName":"et_pb_profile_banner","category":"module","attributes":{"module":{"type":"object","settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"name":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","tagName":"h4","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"name.innerContent","label":"Profile Name","description":"Input the name of the profile.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"job":{"type":"object","inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","tagName":"span","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"header","render":true,"attrName":"job.innerContent","label":"Job Title","description":"Input the job title.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}},"profile":{"type":"object","inlineEditor":"plainText","tagName":"a","elementType":"element","childrenSanitizer":"et_core_esc_previously","default":{"innerContent":{"desktop":{"value":{"text":"Link","url":"#"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"text":{"groupSlug":"profile","render":true,"attrName":"profile.innerContent","subName":"text","label":"Link Text","description":"Input the text for the profile link.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"url":{"groupSlug":"profile","render":true,"attrName":"profile.innerContent","subName":"url","label":"URL","description":"Input the website of the profile.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}}}}},"portrait":{"type":"object","childrenSanitizer":"et_core_esc_previously","tagName":"img","elementType":"image","settings":{"innerContent":{"groupType":"group-items","items":{"imgText":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"src","label":"Image URL","description":"Type in the URL to the image you would like to display, or upload your desired image below.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/text","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"img":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"src","label":"Image","description":"Upload your desired image, or type in the URL to the image you would like to display above.","features":{"sticky":false,"dynamicContent":{"type":"image"}},"component":{"name":"divi/upload","type":"field","props":{"syncImageData":{"src":true,"id":true,"alt":true,"titleText":false}}}},"alt":{"groupSlug":"portrait","render":true,"attrName":"portrait.innerContent","subName":"alt","label":"Image Alt Text","description":"Input the alt text for the portrait image.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}},"rounded":{"groupSlug":"portraitDesign","render":true,"label":"Round Image","attrName":"portrait.advanced","subName":"rounded","description":"Switch to yes if you want the profile banner to display vertically.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}},"vertical":{"groupSlug":"portraitDesign","render":true,"label":"Display Vertically","attrName":"portrait.advanced","subName":"vertical","description":"Switch to yes if you want the profile banner to display vertically.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/toggle","type":"field","props":{"defaultValue":"off"}}}}}}}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"header":{"panel":"content","priority":2,"groupName":"header","component":{"name":"divi/composite","props":{"groupLabel":"Header"}}},"profile":{"panel":"content","priority":2,"groupName":"profile","component":{"name":"divi/composite","props":{"groupLabel":"Profile"}}},"portrait":{"panel":"content","priority":2,"groupName":"portrait","component":{"name":"divi/composite","props":{"groupLabel":"Portrait"}}},"portraitDesign":{"panel":"design","priority":2,"groupName":"portraitDesign","component":{"name":"divi/composite","props":{"groupLabel":"Portrait"}}}}}}');

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

/***/ "./src/modules/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CAWebModuleLocation: () => (/* reexport safe */ _Location__WEBPACK_IMPORTED_MODULE_1__.CAWebModuleLocation),
/* harmony export */   CAWebModuleProfileBanner: () => (/* reexport safe */ _ProfileBanner__WEBPACK_IMPORTED_MODULE_0__.CAWebModuleProfileBanner)
/* harmony export */ });
/* harmony import */ var _ProfileBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/ProfileBanner/index.ts");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/Location/index.ts");




/***/ }),

/***/ "./src/modules/utils/address.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_address: () => (/* binding */ get_address),
/* harmony export */   get_google_map_place_link: () => (/* binding */ get_google_map_place_link)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// External Dependencies.

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
    return part.trim();
  }).filter(Boolean).join(', ');
};
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
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
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


/***/ }),

/***/ "./src/modules/utils/icon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_icon_span: () => (/* binding */ get_icon_span)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// External Dependencies.

var get_icon_span = function (icon) {
  if ("" === icon) {
    return;
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ca-gov-icon-".concat(icon)
  });
};


/***/ }),

/***/ "./src/modules/utils/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_address: () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_1__.get_address),
/* harmony export */   get_google_map_place_link: () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_1__.get_google_map_place_link),
/* harmony export */   get_icon_span: () => (/* reexport safe */ _icon__WEBPACK_IMPORTED_MODULE_0__.get_icon_span)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/utils/icon.tsx");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/utils/address.tsx");




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

// import './module-icons';
// Register modules.
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addAction)('divi.moduleLibrary.registerModuleLibraryStore.after', 'cawebDiviExtension', function () {
  console.log('Registering Modules');
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_modules__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleProfileBanner.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_modules__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleProfileBanner, 'metadata'));
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_modules__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleLocation.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_modules__WEBPACK_IMPORTED_MODULE_3__.CAWebModuleLocation, 'metadata'));
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map