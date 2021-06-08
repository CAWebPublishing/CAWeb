/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/custom.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/admin/js/frame-helpers.js":
/*!****************************************!*\
  !*** ./core/admin/js/frame-helpers.js ***!
  \****************************************/
/*! exports provided: top_window, is_iframe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top_window", function() { return top_window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_iframe", function() { return is_iframe; });
/*                    ,-,-
                     / / |
   ,-'             _/ / /
  (-_          _,-' `Z_/
   "#:      ,-'_,-.    \  _
    #'    _(_-'_()\     \" |
  ,--_,--'                 |
 / ""                      L-'\
 \,--^---v--v-._        /   \ |
   \_________________,-'      |
                    \
                     \
                      \
 NOTE: The code in this file will be executed multiple times! */
var top_window = window;
var is_iframe = false;
var top;

try {
  // Have to access top window's prop (document) to trigger same-origin DOMException
  // so we can catch it and act accordingly.
  top = window.top.document ? window.top : false;
} catch (e) {
  // Can't access top, it means we're inside a different domain iframe.
  top = false;
}

if (top && top.__Cypress__) {
  if (window.parent === top) {
    top_window = window;
    is_iframe = false;
  } else {
    top_window = window.parent;
    is_iframe = true;
  }
} else if (top) {
  top_window = top;
  is_iframe = top !== window.self;
}



/***/ }),

/***/ "./includes/builder/node_modules/lodash/_Hash.js":
/*!*******************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_Hash.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./includes/builder/node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./includes/builder/node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./includes/builder/node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./includes/builder/node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./includes/builder/node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_ListCache.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_ListCache.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./includes/builder/node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./includes/builder/node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./includes/builder/node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./includes/builder/node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./includes/builder/node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_Map.js":
/*!******************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_Map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./includes/builder/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./includes/builder/node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_MapCache.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_MapCache.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./includes/builder/node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./includes/builder/node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./includes/builder/node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./includes/builder/node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./includes/builder/node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_Symbol.js":
/*!*********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_Symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./includes/builder/node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_arrayLikeKeys.js":
/*!****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_arrayLikeKeys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./includes/builder/node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./includes/builder/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./includes/builder/node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./includes/builder/node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./includes/builder/node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./includes/builder/node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_arrayMap.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_arrayMap.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_assocIndexOf.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_assocIndexOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./includes/builder/node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseFindIndex.js":
/*!****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseFindIndex.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseGet.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseGet.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./includes/builder/node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./includes/builder/node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseGetTag.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseGetTag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./includes/builder/node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./includes/builder/node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./includes/builder/node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseIndexOf.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseIndexOf.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./includes/builder/node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./includes/builder/node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./includes/builder/node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseIsArguments.js":
/*!******************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseIsArguments.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./includes/builder/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./includes/builder/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseIsNaN.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseIsNaN.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseIsNative.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseIsNative.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./includes/builder/node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./includes/builder/node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./includes/builder/node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./includes/builder/node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseIsTypedArray.js":
/*!*******************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseIsTypedArray.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./includes/builder/node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./includes/builder/node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./includes/builder/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseKeys.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseKeys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./includes/builder/node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./includes/builder/node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseTimes.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseTimes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseToString.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseToString.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./includes/builder/node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./includes/builder/node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./includes/builder/node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./includes/builder/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseUnary.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseUnary.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_baseValues.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_baseValues.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./includes/builder/node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_castPath.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_castPath.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./includes/builder/node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./includes/builder/node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./includes/builder/node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./includes/builder/node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_coreJsData.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_coreJsData.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./includes/builder/node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_freeGlobal.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_freeGlobal.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./includes/builder/node_modules/lodash/_getMapData.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_getMapData.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./includes/builder/node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_getNative.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_getNative.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./includes/builder/node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./includes/builder/node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_getRawTag.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_getRawTag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./includes/builder/node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_getValue.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_getValue.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_hashClear.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_hashClear.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./includes/builder/node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_hashDelete.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_hashDelete.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_hashGet.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_hashGet.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./includes/builder/node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_hashHas.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_hashHas.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./includes/builder/node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_hashSet.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_hashSet.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./includes/builder/node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_isIndex.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_isIndex.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_isKey.js":
/*!********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_isKey.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./includes/builder/node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./includes/builder/node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_isKeyable.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_isKeyable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_isMasked.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_isMasked.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./includes/builder/node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_isPrototype.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_isPrototype.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_listCacheClear.js":
/*!*****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_listCacheClear.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_listCacheDelete.js":
/*!******************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_listCacheDelete.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./includes/builder/node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_listCacheGet.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_listCacheGet.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./includes/builder/node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_listCacheHas.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_listCacheHas.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./includes/builder/node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_listCacheSet.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_listCacheSet.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./includes/builder/node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_mapCacheClear.js":
/*!****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_mapCacheClear.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./includes/builder/node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./includes/builder/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./includes/builder/node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_mapCacheDelete.js":
/*!*****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_mapCacheDelete.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./includes/builder/node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_mapCacheGet.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_mapCacheGet.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./includes/builder/node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_mapCacheHas.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_mapCacheHas.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./includes/builder/node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_mapCacheSet.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_mapCacheSet.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./includes/builder/node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_memoizeCapped.js":
/*!****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_memoizeCapped.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./includes/builder/node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_nativeCreate.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_nativeCreate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./includes/builder/node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_nativeKeys.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_nativeKeys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./includes/builder/node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_nodeUtil.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_nodeUtil.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./includes/builder/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./includes/builder/node_modules/lodash/_objectToString.js":
/*!*****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_objectToString.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_overArg.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_overArg.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_root.js":
/*!*******************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_root.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./includes/builder/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_strictIndexOf.js":
/*!****************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_strictIndexOf.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_stringToPath.js":
/*!***************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_stringToPath.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./includes/builder/node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_toKey.js":
/*!********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_toKey.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./includes/builder/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/_toSource.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/_toSource.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/eq.js":
/*!****************************************************!*\
  !*** ./includes/builder/node_modules/lodash/eq.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/get.js":
/*!*****************************************************!*\
  !*** ./includes/builder/node_modules/lodash/get.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./includes/builder/node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/includes.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./includes/builder/node_modules/lodash/_baseIndexOf.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./includes/builder/node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./includes/builder/node_modules/lodash/isString.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./includes/builder/node_modules/lodash/toInteger.js"),
    values = __webpack_require__(/*! ./values */ "./includes/builder/node_modules/lodash/values.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isArguments.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isArguments.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./includes/builder/node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./includes/builder/node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isArray.js":
/*!*********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isArray.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isArrayLike.js":
/*!*************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isArrayLike.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./includes/builder/node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./includes/builder/node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isBuffer.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isBuffer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./includes/builder/node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./includes/builder/node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./includes/builder/node_modules/lodash/isFunction.js":
/*!************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isFunction.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./includes/builder/node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./includes/builder/node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isLength.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isLength.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isObject.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isObject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isObjectLike.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isObjectLike.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isString.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isString.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./includes/builder/node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./includes/builder/node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./includes/builder/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isSymbol.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isSymbol.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./includes/builder/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./includes/builder/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/isTypedArray.js":
/*!**************************************************************!*\
  !*** ./includes/builder/node_modules/lodash/isTypedArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./includes/builder/node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./includes/builder/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./includes/builder/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/keys.js":
/*!******************************************************!*\
  !*** ./includes/builder/node_modules/lodash/keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./includes/builder/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./includes/builder/node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./includes/builder/node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/memoize.js":
/*!*********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/memoize.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./includes/builder/node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/stubFalse.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/stubFalse.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/toFinite.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/toFinite.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./includes/builder/node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/toInteger.js":
/*!***********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/toInteger.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./includes/builder/node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/toNumber.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/toNumber.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./includes/builder/node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./includes/builder/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/toString.js":
/*!**********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/toString.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./includes/builder/node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./includes/builder/node_modules/lodash/values.js":
/*!********************************************************!*\
  !*** ./includes/builder/node_modules/lodash/values.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ "./includes/builder/node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "./includes/builder/node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./includes/builder/scripts/utils/utils.js":
/*!*************************************************!*\
  !*** ./includes/builder/scripts/utils/utils.js ***!
  \*************************************************/
/*! exports provided: isBuilderType, is, isFE, isVB, isBFB, isTB, isLBB, isDiviTheme, isExtraTheme, isLBP, isBlockEditor, isBuilder, getOffsets, maybeIncreaseEmitterMaxListeners, maybeDecreaseEmitterMaxListeners, registerFrontendComponent, setImportantInlineValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuilderType", function() { return isBuilderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFE", function() { return isFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVB", function() { return isVB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBFB", function() { return isBFB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTB", function() { return isTB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLBB", function() { return isLBB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDiviTheme", function() { return isDiviTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExtraTheme", function() { return isExtraTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLBP", function() { return isLBP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlockEditor", function() { return isBlockEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuilder", function() { return isBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsets", function() { return getOffsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeIncreaseEmitterMaxListeners", function() { return maybeIncreaseEmitterMaxListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDecreaseEmitterMaxListeners", function() { return maybeDecreaseEmitterMaxListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFrontendComponent", function() { return registerFrontendComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImportantInlineValue", function() { return setImportantInlineValue; });
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./includes/builder/node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./includes/builder/node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_admin_js_frame_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/admin/js/frame-helpers */ "./core/admin/js/frame-helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * IMPORTANT: Keep external dependencies as low as possible since this utils might be
 * imported by various frontend scripts; need to keep frontend script size low.
 */
// External dependencies


 // Internal dependencies


/**
 * Check current page's builder Type.
 *
 * @since 4.6.0
 *
 * @param {string} builderType Fe|vb|bfb|tb|lbb|lbp.
 *
 * @returns {bool}
 */

var isBuilderType = function isBuilderType(builderType) {
  return builderType === window.et_builder_utils_params.builderType;
};
/**
 * Return condition value.
 *
 * @since 4.6.0
 *
 * @param {string} conditionName
 *
 * @returns {bool}
 */

var is = function is(conditionName) {
  return window.et_builder_utils_params.condition[conditionName];
};
/**
 * Is current page Frontend.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isFE = isBuilderType('fe');
/**
 * Is current page Visual Builder.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isVB = isBuilderType('vb');
/**
 * Is current page BFB / New Builder Experience.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isBFB = isBuilderType('bfb');
/**
 * Is current page Theme Builder.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isTB = isBuilderType('tb');
/**
 * Is current page Layout Block Builder.
 *
 * @type {bool}
 */

var isLBB = isBuilderType('lbb');
/**
 * Is current page uses Divi Theme.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isDiviTheme = is('diviTheme');
/**
 * Is current page uses Extra Theme.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isExtraTheme = is('extraTheme');
/**
 * Is current page Layout Block Preview.
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isLBP = isBuilderType('lbp');
/**
 * Check if current window is block editor window (gutenberg editing page).
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isBlockEditor = 0 < jquery__WEBPACK_IMPORTED_MODULE_2___default()(_core_admin_js_frame_helpers__WEBPACK_IMPORTED_MODULE_3__["top_window"].document).find('.edit-post-layout__content').length;
/**
 * Check if current window is builder window (VB, BFB, TB, LBB).
 *
 * @since 4.6.0
 *
 * @type {bool}
 */

var isBuilder = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(['vb', 'bfb', 'tb', 'lbb'], window.et_builder_utils_params.builderType);
/**
 * Get offsets value of all sides.
 *
 * @since 4.6.0
 *
 * @param {object} $selector JQuery selector instance.
 * @param {number} height
 * @param {number} width
 *
 * @returns {object}
 */

var getOffsets = function getOffsets($selector) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  // Return previously saved offset if sticky tab is active; retrieving actual offset contain risk
  // of incorrect offsets if sticky horizontal / vertical offset of relative position is modified.
  var isStickyTabActive = isBuilder && $selector.hasClass('et_pb_sticky') && 'fixed' !== $selector.css('position');
  var cachedOffsets = $selector.data('et-offsets');
  var cachedDevice = $selector.data('et-offsets-device');
  var currentDevice = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(window.ET_FE, 'stores.window.breakpoint', ''); // Only return cachedOffsets if sticky tab is active and cachedOffsets is not undefined and
  // cachedDevice equal to currentDevice.

  if (isStickyTabActive && cachedOffsets !== undefined && cachedDevice === currentDevice) {
    return cachedOffsets;
  } // Get top & left offsets


  var offsets = $selector.offset(); // If no offsets found, return empty object

  if ('undefined' === typeof offsets) {
    return {};
  } // FE sets the flag for sticky module which uses transform as classname on module wrapper while
  // VB, BFB, TB, and LB sets the flag on CSS output's <style> element because it can't modify
  // its parent. This compromises avoids the needs to extract transform rendering logic


  var hasTransform = isBuilder ? $selector.children('.et-fb-custom-css-output[data-sticky-has-transform="on"]').length > 0 : $selector.hasClass('et_pb_sticky--has-transform');
  var top = 'undefined' === typeof offsets.top ? 0 : offsets.top;
  var left = 'undefined' === typeof offsets.left ? 0 : offsets.left; // If module is sticky module that uses transform, its offset calculation needs to be adjusted
  // because transform tends to modify the positioning of the module

  if (hasTransform) {
    // Calculate offset (relative to selector's parent) AFTER it is affected by transform
    // NOTE: Can't use jQuery's position() because it considers margin-left `auto` which causes issue
    // on row thus this manually calculate the difference between element and its parent's offset
    // @see https://github.com/jquery/jquery/blob/1.12-stable/src/offset.js#L149-L155
    var parentOffsets = $selector.parent().offset();
    var transformedPosition = {
      top: offsets.top - parentOffsets.top,
      left: offsets.left - parentOffsets.left
    }; // Calculate offset (relative to selector's parent) BEFORE it is affected by transform

    var preTransformedPosition = {
      top: $selector[0].offsetTop,
      left: $selector[0].offsetLeft
    }; // Update offset's top value

    top += preTransformedPosition.top - transformedPosition.top;
    offsets.top = top; // Update offset's left value

    left += preTransformedPosition.left - transformedPosition.left;
    offsets.left = left;
  } // Manually calculate right & bottom offsets


  offsets.right = left + width;
  offsets.bottom = top + height; // Save copy of the offset on element's .data() in case of scenario where retrieving actual
  // offset value will lead to incorrect offset value (eg. sticky tab active with position offset)

  $selector.data('et-offsets', offsets); // Add current device to cache

  if ('' !== currentDevice) {
    $selector.data('et-offsets-device', offsets);
  }

  return offsets;
};
/**
 * Increase EventEmitter's max listeners if lister count is about to surpass the max listeners limit
 * IMPORTANT: Need to be placed BEFORE `.on()`.
 *
 * @since 4.6.0
 * @param {EventEmitter} emitter
 * @param eventName
 * @param {string} EventName
 */

var maybeIncreaseEmitterMaxListeners = function maybeIncreaseEmitterMaxListeners(emitter, eventName) {
  var currentCount = emitter.listenerCount(eventName);
  var maxListeners = emitter.getMaxListeners();

  if (currentCount === maxListeners) {
    emitter.setMaxListeners(maxListeners + 1);
  }
};
/**
 * Decrease EventEmitter's max listeners if listener count is less than max listener limit and above
 * 10 (default max listener limit). If listener count is less than 10, max listener limit will
 * remain at 10
 * IMPORTANT: Need to be placed AFTER `.removeListener()`.
 *
 * @since 4.6.0
 *
 * @param {EventEmitter} emitter
 * @param {string} eventName
 */

var maybeDecreaseEmitterMaxListeners = function maybeDecreaseEmitterMaxListeners(emitter, eventName) {
  var currentCount = emitter.listenerCount(eventName);
  var maxListeners = emitter.getMaxListeners();

  if (maxListeners > 10) {
    emitter.setMaxListeners(currentCount);
  }
};
/**
 * Expose frontend (FE) component via global object so it can be accessed and reused externally
 * Note: window.ET_Builder is for builder app's component; window.ET_FE is for frontend component.
 *
 * @since 4.6.0
 *
 * @param {string} type
 * @param {string} name
 * @param {mixed} component
 */

var registerFrontendComponent = function registerFrontendComponent(type, name, component) {
  // Make sure that ET_FE is available
  if ('undefined' === typeof window.ET_FE) {
    window.ET_FE = {};
  }

  if ('object' !== _typeof(window.ET_FE[type])) {
    window.ET_FE[type] = {};
  }

  window.ET_FE[type][name] = component;
};
/**
 * Set inline style with !important tag. JQuery's .css() can't set value with `!important` tag so
 * here it is.
 *
 * @since 4.6.2
 *
 * @param {object} $element
 * @param {string} cssProp
 * @param {string} value
 */

var setImportantInlineValue = function setImportantInlineValue($element, cssProp, value) {
  // Remove prop from current inline style in case the prop is already exist
  $element.css(cssProp, ''); // Get current inline style

  var inlineStyle = $element.attr('style'); // Re-insert inline style + property with important tag

  $element.attr('style', "".concat(inlineStyle, " ").concat(cssProp, ": ").concat(value, " !important;"));
};

/***/ }),

/***/ "./js/src/custom.js":
/*!**************************!*\
  !*** ./js/src/custom.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! builder/scripts/utils/utils */ "./includes/builder/scripts/utils/utils.js");
// Internal dependencies

/*! ET custom.js */

(function ($) {
  window.et_calculating_scroll_position = false;
  window.et_side_nav_links_initialized = false;
  var top_window = builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"] ? ET_Builder.Frames.top : window;

  function et_get_first_section() {
    return $('.et-l:not(.et-l--footer) .et_pb_section:visible').first();
  }

  function et_get_first_module() {
    return $('.et-l .et_pb_module:visible').first();
  }

  var $et_pb_post_fullwidth = $('.single.et_pb_pagebuilder_layout.et_full_width_page'),
      et_is_mobile_device = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/),
      et_is_ipad = navigator.userAgent.match(/iPad/),
      $et_container = $('.container'),
      et_container_width = $et_container.width(),
      et_is_fixed_nav = $('body').hasClass('et_fixed_nav') || $('body').hasClass('et_vertical_fixed'),
      et_is_vertical_fixed_nav = $('body').hasClass('et_vertical_fixed'),
      et_is_rtl = $('body').hasClass('rtl'),
      et_hide_nav = $('body').hasClass('et_hide_nav'),
      et_header_style_left = $('body').hasClass('et_header_style_left'),
      $top_header = $('#top-header'),
      $main_header = $('#main-header'),
      $main_container_wrapper = $('#page-container'),
      $et_main_content_first_row = $('#main-content .container:first-child'),
      $et_main_content_first_row_meta_wrapper = $et_main_content_first_row.find('.et_post_meta_wrapper').first(),
      $et_main_content_first_row_meta_wrapper_title = $et_main_content_first_row_meta_wrapper.find('h1.entry-title'),
      $et_main_content_first_row_content = $et_main_content_first_row.find('.entry-content').first(),
      $et_single_post = $('body.single'),
      $et_window = $(window),
      etRecalculateOffset = false,
      et_header_height = 0,
      et_header_modifier,
      et_header_offset,
      et_primary_header_top,
      $et_header_style_split = $('.et_header_style_split'),
      $et_top_navigation = $('#et-top-navigation'),
      $logo = $('#logo'),
      $et_pb_first_row = et_get_first_section(),
      et_is_touch_device = 'ontouchstart' in window || navigator.maxTouchPoints,
      $et_top_cart = $('#et-secondary-menu a.et-cart-info'); // Modification of underscore's _.debounce()
  // Underscore.js 1.8.3
  // http://underscorejs.org
  // (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  // Underscore may be freely distributed under the MIT license.

  function et_debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    var now = Date.now || new Date().getTime();

    var later = function later() {
      var last = now - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;

        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function () {
      context = this;
      args = arguments;
      timestamp = now;
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);

      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  }

  ;

  function et_preload_image(src, callback) {
    var img = new Image();
    img.onLoad = callback;
    img.onload = callback;
    img.src = src;
  } // We need to check first to see if we are on a woocommerce single product.


  if ($(".woocommerce .woocommerce-product-gallery").length > 0) {
    // get the gallery container.
    var gal = $(".woocommerce-product-gallery")[0]; // let's replace the data attribute since Salvatorre reconfigures
    // data-columns on the resize event.

    var newstr = gal.outerHTML.replace('data-columns', 'data-cols'); // finally we re-insert.

    gal.outerHTML = newstr;
  } // update the cart item on the secondary menu.


  if ($et_top_cart.length > 0 && $('.shop_table.cart').length > 0) {
    $(document.body).on('updated_wc_div', function () {
      var new_total = 0;
      var new_text;
      $('.shop_table.cart').find('.product-quantity input').each(function () {
        new_total = new_total + parseInt($(this).val());
      });

      if (new_total === 1) {
        new_text = DIVI.item_count;
      } else {
        new_text = DIVI.items_count;
      }

      new_text = new_text.replace('%d', new_total);
      $et_top_cart.find('span').text(new_text);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var $et_top_menu = $('ul.nav, ul.menu'),
        $et_search_icon = $('#et_search_icon'),
        et_parent_menu_longpress_limit = 300,
        et_parent_menu_longpress_start,
        et_parent_menu_click = true,
        is_customize_preview = $('body').hasClass('et_is_customize_preview');
    window.et_pb_init_nav_menu($et_top_menu);

    function et_header_menu_split() {
      var $logo_container = $('#main-header > .container > .logo_container'),
          $logo_container_splitted = $('.centered-inline-logo-wrap > .logo_container'),
          et_top_navigation_li_size = $et_top_navigation.children('nav').children('ul').children('li').length,
          et_top_navigation_li_break_index = Math.round(et_top_navigation_li_size / 2) - 1,
          window_width = window.innerWidth || $et_window.width();

      if (window_width > 980 && $logo_container.length && $('body').hasClass('et_header_style_split')) {
        $('<li class="centered-inline-logo-wrap"></li>').insertAfter($et_top_navigation.find('nav > ul >li:nth(' + et_top_navigation_li_break_index + ')'));
        $logo_container.appendTo($et_top_navigation.find('.centered-inline-logo-wrap'));
      }

      if (window_width <= 980 && $logo_container_splitted.length) {
        $logo_container_splitted.prependTo('#main-header > .container');
        $('#main-header .centered-inline-logo-wrap').remove();
      }
    }

    function et_set_right_vertical_menu() {
      var $body = $('body');

      if ($body.hasClass('et_boxed_layout') && $body.hasClass('et_vertical_fixed') && $body.hasClass('et_vertical_right')) {
        var header_offset = parseFloat($('#page-container').css('margin-right'));
        header_offset += parseFloat($('#et-main-area').css('margin-right')) - 225;
        header_offset = 0 > header_offset ? 0 : header_offset;
        $('#main-header').addClass('et_vertical_menu_set').css({
          'left': '',
          'right': header_offset + 'px'
        });
      }
    }

    if ($et_header_style_split.length && !window.et_is_vertical_nav || is_customize_preview) {
      et_header_menu_split();
      $(window).on('resize', function () {
        et_header_menu_split();
      });
    }

    if (window.et_is_vertical_nav) {
      if ($('#main-header').height() < $('#et-top-navigation').height()) {
        $('#main-header').height($('#et-top-navigation').height() + $('#logo').height() + 100);
      }

      et_set_right_vertical_menu();
    }

    window.et_calculate_header_values = function () {
      var $top_header = $('#top-header'),
          secondary_nav_height = $top_header.length && $top_header.is(':visible') ? parseInt($top_header.innerHeight()) : 0,
          admin_bar_height = $('#wpadminbar').length ? parseInt($('#wpadminbar').innerHeight()) : 0,
          $slide_menu_container = $('.et_header_style_slide .et_slide_in_menu_container'),
          is_rtl = $('body').hasClass('rtl');
      et_header_height = parseInt($('#main-header').length ? $('#main-header').innerHeight() : 0) + secondary_nav_height;
      et_header_modifier = et_header_height <= 90 ? et_header_height - 29 : et_header_height - 56;
      et_header_offset = et_header_modifier + admin_bar_height;
      et_primary_header_top = secondary_nav_height + admin_bar_height;

      if ($slide_menu_container.length && !$('body').hasClass('et_pb_slide_menu_active')) {
        if (is_rtl) {
          $slide_menu_container.css({
            left: '-' + parseInt($slide_menu_container.innerWidth()) + 'px',
            'display': 'none'
          });
        } else {
          $slide_menu_container.css({
            right: '-' + parseInt($slide_menu_container.innerWidth()) + 'px',
            'display': 'none'
          });
        }

        if ($('body').hasClass('et_boxed_layout')) {
          if (is_rtl) {
            var page_container_margin = $main_container_wrapper.css('margin-right');
            $main_header.css({
              right: page_container_margin
            });
          } else {
            var page_container_margin = $main_container_wrapper.css('margin-left');
            $main_header.css({
              left: page_container_margin
            });
          }
        }
      }
    };

    var $comment_form = $('#commentform');
    et_pb_form_placeholders_init($comment_form);
    $comment_form.on('submit', function () {
      et_pb_remove_placeholder_text($comment_form);
    });
    et_duplicate_menu($('#et-top-navigation ul.nav'), $('#et-top-navigation .mobile_nav'), 'mobile_menu', 'et_mobile_menu');
    et_duplicate_menu('', $('.et_pb_fullscreen_nav_container'), 'mobile_menu_slide', 'et_mobile_menu', 'no_click_event'); // Handle `Disable top tier dropdown menu links` Theme Option.

    if ($('ul.et_disable_top_tier').length) {
      var $disbaled_top_tier_links = $("ul.et_disable_top_tier > li > ul").prev('a');
      $disbaled_top_tier_links.attr('href', '#');
      $disbaled_top_tier_links.on('click', function (e) {
        e.preventDefault();
      }); // Handle top tier links in cloned mobile menu

      var $disbaled_top_tier_links_mobile = $("ul#mobile_menu > li > ul").prev('a');
      $disbaled_top_tier_links_mobile.attr('href', '#');
      $disbaled_top_tier_links_mobile.on('click', function (e) {
        e.preventDefault();
      });
    }

    if ($('#et-secondary-nav').length) {
      $('#et-top-navigation #mobile_menu').append($('#et-secondary-nav').clone().html());
    } // adding arrows for the slide/fullscreen menus


    if ($('.et_slide_in_menu_container').length) {
      var $item_with_sub = $('.et_slide_in_menu_container').find('.menu-item-has-children > a'); // add arrows for each menu item which has submenu

      if ($item_with_sub.length) {
        $item_with_sub.append('<span class="et_mobile_menu_arrow"></span>');
      }
    }

    function et_change_primary_nav_position(delay) {
      setTimeout(function () {
        var etPrimaryHeaderTop = 0;
        var $body = $('body');
        var $wpadminbar = builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"] ? top_window.jQuery('#wpadminbar') : $('#wpadminbar');
        var $topHTML = top_window.jQuery('html');
        var $topHeader = $('#top-header');
        var isPreviewMode = $topHTML.is('.et-fb-preview--zoom:not(.et-fb-preview--desktop)');
        isPreviewMode = isPreviewMode || $topHTML.is('.et-fb-preview--tablet');
        isPreviewMode = isPreviewMode || $topHTML.is('.et-fb-preview--phone');

        if ($wpadminbar.length && !Number.isNaN($wpadminbar.innerHeight())) {
          var adminbarHeight = parseFloat($wpadminbar.innerHeight()); // Adjust admin bar height for builder's preview mode
          // since admin bar is rendered on top window in these modes.

          etPrimaryHeaderTop += builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"] && isPreviewMode ? 0 : adminbarHeight;
        }

        if ($topHeader.length && $topHeader.is(':visible')) {
          etPrimaryHeaderTop += $topHeader.innerHeight();
        }

        var isFixedNav = $body.hasClass('et_fixed_nav');
        var isAbsolutePrimaryNav = !isFixedNav && $body.hasClass('et_transparent_nav') && $body.hasClass('et_secondary_nav_enabled');

        if (!window.et_is_vertical_nav && (isFixedNav || isAbsolutePrimaryNav)) {
          $('#main-header').css('top', etPrimaryHeaderTop + 'px');
        }
      }, delay);
    }

    window.et_change_primary_nav_position = et_change_primary_nav_position;

    function et_hide_nav_transform() {
      var $body = $('body'),
          $body_height = $(document).height(),
          $viewport_height = $(window).height() + et_header_height + 200; // Do nothing when Vertical Navigation is Enabled

      if ($body.hasClass('et_vertical_nav')) {
        return;
      }

      if ($body.hasClass('et_hide_nav') || $body.hasClass('et_hide_nav_disabled') && $body.hasClass('et_fixed_nav')) {
        if ($body_height > $viewport_height) {
          if ($body.hasClass('et_hide_nav_disabled')) {
            $body.addClass('et_hide_nav');
            $body.removeClass('et_hide_nav_disabled');
          }

          $('#main-header').css('transform', 'translateY(-' + et_header_height + 'px)');
          $('#top-header').css('transform', 'translateY(-' + et_header_height + 'px)');
        } else {
          $('#main-header').css({
            'transform': 'translateY(0)',
            'opacity': '1'
          });
          $('#top-header').css({
            'transform': 'translateY(0)',
            'opacity': '1'
          });
          $body.removeClass('et_hide_nav');
          $body.addClass('et_hide_nav_disabled');
        } // Run fix page container again, needed when body height is not tall enough and
        // adjustment has been aded


        et_fix_page_container_position();
      }
    } // Saving current styling for the next resize cycle


    function et_save_initial_page_container_style($selector, property) {
      var styling = {};
      styling[property] = $selector.css(property);
      $selector.attr({
        'data-fix-page-container': 'on'
      }).data({
        'fix_page_container_style': styling
      });
    }

    function et_page_load_scroll_to_anchor() {
      var location_hash = window.et_location_hash.replace(/(\|)/g, "\\$1");

      if ($(location_hash).length === 0) {
        return;
      }

      var $map_container = $(location_hash + ' .et_pb_map_container');
      var $map = $map_container.children('.et_pb_map');
      var $target = $(location_hash); // Make the target element visible again

      if ('undefined' !== typeof window.et_location_hash_style) {
        $target.css('display', window.et_location_hash_style);
      }

      var distance = 'undefined' !== typeof $target.offset().top ? $target.offset().top : 0;
      var speed = distance > 4000 ? 1600 : 800;

      if ($map_container.length) {
        google.maps.event.trigger($map[0], 'resize');
      } // Workaround for reviews tab in woo tabs.


      if ($target.parents().hasClass('commentlist')) {
        $('.reviews_tab').trigger('click').animate({
          scrollTop: $target.offset().top
        }, 700);
      } // Allow the header sizing functions enough time to finish before scrolling the page


      setTimeout(function () {
        et_pb_smooth_scroll($target, false, speed, 'swing'); // During the page scroll animation, the header's height might change.
        // Do the scroll animation again to ensure its accuracy.

        setTimeout(function () {
          et_pb_smooth_scroll($target, false, 150, 'linear');
        }, speed + 25);
      }, 700);
    } // Retrieving padding/margin value based on formatted saved padding/margin strings


    function et_get_saved_padding_margin_value(saved_value, order) {
      if (typeof saved_value === 'undefined') {
        return false;
      }

      var values = saved_value.split('|');
      return typeof values[order] !== 'undefined' ? values[order] : false;
    }

    function et_fix_page_container_position() {
      var et_window_width = parseInt($et_window.width()),
          $top_header = $('#top-header'),
          $et_pb_first_row = et_get_first_section(),
          secondary_nav_height = $top_header.length && $top_header.is(':visible') ? parseInt($top_header.innerHeight()) : 0,
          main_header_fixed_height = 0,
          header_height,
          et_pb_first_row_padding_top;
      var $mainHeaderClone = $main_header.clone().addClass('et-disabled-animations main-header-clone').css({
        opacity: '0px',
        position: 'fixed',
        top: 'auto',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }).appendTo($('body')); // Replace previous resize cycle's adjustment

      if (!$('body').hasClass('et-bfb')) {
        $('*[data-fix-page-container="on"]').each(function () {
          var $adjusted_element = $(this),
              styling = $adjusted_element.data();

          if (styling && styling.fix_page_container_style) {
            // Reapply previous styling
            $adjusted_element.css(styling.fix_page_container_style);
          }
        });
      } // Set data-height-onload for header if the page is loaded on large screen
      // If the page is loaded from small screen, rely on data-height-onload printed on the markup,
      // prevent window resizing issue from small to large
      // ignore data-height-loaded in VB to make sure it calculated correctly.


      if (et_window_width > 980 && (!$main_header.attr('data-height-loaded') || $('body').is('.et-fb'))) {
        var mainHeaderHeight = 0;

        if ($main_header.hasClass('et-fixed-header')) {
          $mainHeaderClone.removeClass('et-fixed-header');
          mainHeaderHeight = $mainHeaderClone.height();
          $mainHeaderClone.addClass('et-fixed-header');
        } else {
          mainHeaderHeight = $main_header.height();
        }

        $main_header.attr({
          'data-height-onload': parseInt(mainHeaderHeight),
          'data-height-loaded': true
        });
      } // Use on page load calculation for large screen. Use on the fly calculation for small screen (980px below)


      if (et_window_width <= 980) {
        header_height = parseInt($main_header.length ? $main_header.innerHeight() : 0) + secondary_nav_height - ($('body').hasClass('et-fb') ? 0 : 1); // If transparent is detected, #main-content .container's padding-top needs to be added to header_height
        // And NOT a pagebuilder page

        if (window.et_is_transparent_nav && !$et_pb_first_row.length) {
          header_height += 58;
        }
      } else {
        // Get header height from header attribute
        header_height = parseInt($main_header.attr('data-height-onload')) + secondary_nav_height; // Non page builder page needs to be added by #main-content .container's fixed height

        if (window.et_is_transparent_nav && !window.et_is_vertical_nav && $et_main_content_first_row.length) {
          header_height += 58;
        } // Calculate fixed header height by cloning, emulating, and calculating its height


        main_header_fixed_height = $mainHeaderClone.height();
      }

      if (et_hide_nav) {
        var topNavHeightDiff = parseInt($et_top_navigation.data('height')) - parseInt($et_top_navigation.data('fixed-height'));
        main_header_fixed_height = parseInt($main_header.data('height-onload')) - topNavHeightDiff;
      } // Saved fixed main header height calculation


      $main_header.attr({
        'data-fixed-height-onload': main_header_fixed_height
      });
      var $wooCommerceNotice = $('.et_fixed_nav.et_transparent_nav.et-db.et_full_width_page #left-area > .woocommerce-notices-wrapper');

      if ($wooCommerceNotice.length > 0 && 'yes' !== $wooCommerceNotice.attr('data-position-set')) {
        var wooNoticeMargin = main_header_fixed_height;

        if (0 === wooNoticeMargin && $main_header.attr('data-height-onload')) {
          wooNoticeMargin = $main_header.attr('data-height-onload');
        }

        $wooCommerceNotice.css('marginTop', parseFloat(wooNoticeMargin) + 'px');
        $wooCommerceNotice.animate({
          'opacity': '1'
        });
        $wooCommerceNotice.attr('data-position-set', 'yes');
      } // Specific adjustment required for transparent nav + not vertical nav + (not hidden nav
      // OR hidden nav but document height is shorter than "viewport" height)
      // NOTES:
      // 1. hidden nav: nav is initially hidden then appears as the window is scrolled)
      // 2. in hidden nav, nav is displayed as window is scrolled. If document height is
      //    shorter than viewport, vertical scroll doesn't exist and nav is directly rendered.
      //    Thus, transparent nav adjustment need to be applied if body is shorter than window
      // 3. Hidden nav only works on desktop breakpoint. Nav is always displayed on tablet
      //    and smaller breakpoints
      // 4. "viewport" height calculation needs to be identical with viewport calculation used
      //    at `et_hide_nav_transform()` to make sure that when nav is displayed due to short
      //    document height, the padding gets added


      var bodyHeight = $(document).height();
      var viewportHeight = $(window).height() + et_header_height + 200;
      var isBodyShorterThanViewport = viewportHeight > bodyHeight;
      var isDesktop = parseInt($(window).width()) > 980;
      var isHideNavDesktop = isDesktop && et_hide_nav;

      if (window.et_is_transparent_nav && !window.et_is_vertical_nav && (!isHideNavDesktop || isBodyShorterThanViewport)) {
        if (!$('body').hasClass('et-bfb')) {
          // Add class for first row for custom section padding purpose
          $et_pb_first_row.addClass('et_pb_section_first');
        } // List of conditionals


        var is_pb = $et_pb_first_row.length,
            is_post_pb = is_pb && $et_single_post.length,
            is_post_pb_full_layout_has_title = $et_pb_post_fullwidth.length && $et_main_content_first_row_meta_wrapper_title.length,
            is_post_pb_full_layout_no_title = $et_pb_post_fullwidth.length && 0 === $et_main_content_first_row_meta_wrapper_title.length,
            is_post_with_tb_body = is_post_pb && $('.et-l--body').length,
            is_pb_fullwidth_section_first = $et_pb_first_row.is('.et_pb_fullwidth_section'),
            is_no_pb_mobile = et_window_width <= 980 && $et_main_content_first_row.length,
            isProject = $('body').hasClass('single-project');

        if (!is_post_with_tb_body && is_post_pb && !(is_post_pb_full_layout_no_title && is_pb_fullwidth_section_first) && !isProject) {
          /* Desktop / Mobile + Single Post */

          /*
           * EXCEPT for fullwidth layout + fullwidth section ( at the first row ).
           * It is basically the same as page + fullwidth section with few quirk.
           * Instead of duplicating the conditional for each module, it'll be simpler to negate
           * fullwidth layout + fullwidth section in is_post_pb and rely it to is_pb_fullwidth_section_first
           */
          // Remove main content's inline padding to styling to prevent looping padding-top calculation
          $et_main_content_first_row.css({
            'paddingTop': ''
          });

          if (et_window_width < 980) {
            header_height += 40;
          }

          if (is_pb_fullwidth_section_first) {
            // If the first section is fullwidth, restore the padding-top modified area at first section
            $et_pb_first_row.css({
              'paddingTop': '0px'
            });
          }

          if (is_post_pb_full_layout_has_title) {
            // Add header height to post meta wrapper as padding top
            $et_main_content_first_row_meta_wrapper.css({
              'paddingTop': header_height + 'px'
            });
          } else if (is_post_pb_full_layout_no_title) {
            // Save current styling for the next resize cycle
            et_save_initial_page_container_style($et_pb_first_row, 'paddingTop'); // Reset any inline padding-top.

            $et_pb_first_row.css({
              paddingTop: ''
            });
            $et_pb_first_row.css({
              // Ignore the extra 58px added to header height previously.
              'paddingTop': 'calc(' + (header_height - 58) + 'px + ' + $et_pb_first_row.css('paddingTop') + ')'
            });
          } else {
            // Save current styling for the next resize cycle
            et_save_initial_page_container_style($et_main_content_first_row, 'paddingTop'); // Add header height to first row content as padding top

            $et_main_content_first_row.css({
              'paddingTop': header_height + 'px'
            });
          }
        } else if (is_pb_fullwidth_section_first) {
          /* Desktop / Mobile + Pagebuilder + Fullwidth Section */
          var $et_pb_first_row_first_module = $et_pb_first_row.children('.et_pb_module:visible').first(); // Quirks: If this is post with fullwidth layout + no title + fullwidth section at first row,
          // Remove the added height at line 2656

          if (is_post_pb_full_layout_no_title && is_pb_fullwidth_section_first && et_window_width > 980) {
            header_height = header_height - 58;
          }

          if ($et_pb_first_row_first_module.is('.et_pb_slider')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth slider */
            var $et_pb_first_row_first_module_slide_image = $et_pb_first_row_first_module.find('.et_pb_slide_image'),
                $et_pb_first_row_first_module_slide = $et_pb_first_row_first_module.find('.et_pb_slide'),
                $et_pb_first_row_first_module_slide_container = $et_pb_first_row_first_module.find('.et_pb_slide .et_pb_container'),
                et_pb_slide_image_margin_top = 0 - parseInt($et_pb_first_row_first_module_slide_image.height()) / 2,
                et_pb_slide_container_height = 0,
                $et_pb_first_row_first_module_slider_arrow = $et_pb_first_row_first_module.find('.et-pb-slider-arrows a'),
                et_pb_first_row_slider_arrow_height = $et_pb_first_row_first_module_slider_arrow.height(); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_slide, 'paddingTop'); // Adding padding top to each slide so the transparency become useful

            $et_pb_first_row_first_module_slide.css({
              'paddingTop': header_height + 'px'
            }); // delete container's min-height

            $et_pb_first_row_first_module_slide_container.css({
              'min-height': ''
            }); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_slide_image, 'marginTop'); // Adjusting slider's image, considering additional top padding of slideshow

            $et_pb_first_row_first_module_slide_image.css({
              'marginTop': et_pb_slide_image_margin_top + 'px'
            }); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_slider_arrow, 'marginTop'); // Adjusting slider's arrow, considering additional top padding of slideshow

            $et_pb_first_row_first_module_slider_arrow.css({
              'marginTop': header_height / 2 - et_pb_first_row_slider_arrow_height / 2 + 'px'
            }); // Looping the slide and get the highest height of slide

            var et_pb_first_row_slide_container_height_new = 0;
            $et_pb_first_row_first_module.find('.et_pb_slide').each(function () {
              var $et_pb_first_row_first_module_slide_item = $(this),
                  $et_pb_first_row_first_module_slide_container = $et_pb_first_row_first_module_slide_item.find('.et_pb_container'); // Make sure that the slide is visible to calculate correct height

              $et_pb_first_row_first_module_slide_item.show(); // Remove existing inline css to make sure that it calculates the height

              $et_pb_first_row_first_module_slide_container.css({
                'min-height': ''
              });
              var et_pb_first_row_slide_container_height = $et_pb_first_row_first_module_slide_container.innerHeight();

              if (et_pb_first_row_slide_container_height_new < et_pb_first_row_slide_container_height) {
                et_pb_first_row_slide_container_height_new = et_pb_first_row_slide_container_height;
              } // Hide the slide back if it isn't active slide


              if ($et_pb_first_row_first_module_slide_item.is(':not(".et-pb-active-slide")')) {
                $et_pb_first_row_first_module_slide_item.hide();
              }
            }); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_slide_container, 'min-height'); // Setting appropriate min-height, considering additional top padding of slideshow

            $et_pb_first_row_first_module_slide_container.css({
              'min-height': et_pb_first_row_slide_container_height_new + 'px'
            });
          } else if ($et_pb_first_row_first_module.is('.et_pb_fullwidth_header')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth header */
            // Remove existing inline stylesheet to prevent looping padding
            $et_pb_first_row_first_module.removeAttr('style'); // Get paddingTop from stylesheet

            var et_pb_first_row_first_module_fullwidth_header_padding_top = parseInt($et_pb_first_row_first_module.css('paddingTop')); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module, 'paddingTop'); // Implement stylesheet's padding-top + header_height

            $et_pb_first_row_first_module.css({
              'paddingTop': header_height + et_pb_first_row_first_module_fullwidth_header_padding_top + 'px'
            });
          } else if ($et_pb_first_row_first_module.is('.et_pb_fullwidth_portfolio')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth Portfolio */
            // Save current styling for the next resize cycle
            et_save_initial_page_container_style($et_pb_first_row_first_module, 'paddingTop');
            $et_pb_first_row_first_module.css({
              'paddingTop': header_height + 'px'
            });
          } else if ($et_pb_first_row_first_module.is('.et_pb_map_container')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth Map */
            var $et_pb_first_row_map = $et_pb_first_row_first_module.find('.et_pb_map'); // Remove existing inline height to prevent looping height calculation

            $et_pb_first_row_map.css({
              'height': ''
            }); // Implement map height + header height

            $et_pb_first_row_first_module.find('.et_pb_map').css({
              'height': header_height + parseInt($et_pb_first_row_map.css('height')) + 'px'
            }); // Adding specific class to mark the map as first row section element

            $et_pb_first_row_first_module.addClass('et_beneath_transparent_nav');
          } else if ($et_pb_first_row_first_module.is('.et_pb_menu') || $et_pb_first_row_first_module.is('.et_pb_fullwidth_menu')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth Menu */
            // Save current styling for the next resize cycle
            et_save_initial_page_container_style($et_pb_first_row_first_module, 'marginTop');
            $et_pb_first_row_first_module.css({
              'marginTop': header_height + 'px'
            });
          } else if ($et_pb_first_row_first_module.is('.et_pb_fullwidth_code')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth code */
            var $et_pb_first_row_first_module_code = $et_pb_first_row_first_module;
            $et_pb_first_row_first_module_code.css({
              'paddingTop': ''
            });
            var et_pb_first_row_first_module_code_padding_top = parseInt($et_pb_first_row_first_module_code.css('paddingTop')); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_code, 'paddingTop');
            $et_pb_first_row_first_module_code.css({
              'paddingTop': header_height + et_pb_first_row_first_module_code_padding_top + 'px'
            });
          } else if ($et_pb_first_row_first_module.is('.et_pb_post_title')) {
            /* Desktop / Mobile + Pagebuilder + Fullwidth Post Title */
            var $et_pb_first_row_first_module_title = $et_pb_first_row_first_module; // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row_first_module_title, 'paddingTop');
            $et_pb_first_row_first_module.css({
              'paddingTop': header_height + 50 + 'px'
            });
          } else if (!$et_pb_first_row_first_module.length) {
            // Get current padding top
            et_pb_first_row_padding_top = parseFloat($et_pb_first_row.css('paddingTop')); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row, 'paddingTop'); // Keep the state of previous cycle. The padding top is reset to the first
            // cycle by default (padding-top: 0px) so if previous cycle didn't hide the
            // nav, automatically add the additional padding top

            if (!$et_pb_first_row.data('is_hide_nav')) {
              $et_pb_first_row.css({
                'paddingTop': et_pb_first_row_padding_top + header_height + 'px'
              });
            } // Use timeout to avoid flickering padding top when window is resized vertically
            // and hidden nav is transitioned to visible nav, vice versa.


            clearTimeout(window.et_fallback_transparent_adjustment_timeout);
            window.et_fallback_transparent_adjustment_timeout = setTimeout(function () {
              // Hidden nav can be decided by the existance of et_hide_nav class AND
              // the css transform attribute value because the visibility of nav is
              // modified by CSS transition
              var is_hide_nav = $('body').hasClass('et_hide_nav') && $('#main-header').css('transform') !== 'matrix(1, 0, 0, 1, 0, 0)'; // Add / remove additional top padding accordingly

              if (is_hide_nav) {
                $et_pb_first_row.css({
                  'paddingTop': ''
                });
              } else {
                $et_pb_first_row.css({
                  'paddingTop': et_pb_first_row_padding_top + header_height + 'px'
                });
              } // Save current nav state for next cycle assessment


              $et_pb_first_row.data('is_hide_nav', is_hide_nav);
            }, 300);
          }
        } else if (is_pb) {
          /* Desktop / Mobile + Pagebuilder + Regular section */
          // Remove first row's inline padding top styling to prevent looping padding-top calculation
          $et_pb_first_row.css({
            'paddingTop': ''
          }); // Get saved custom padding from data-* attributes. Builder automatically adds
          // saved custom paddings to data-* attributes on first section

          var saved_custom_padding = $et_pb_first_row.attr('data-padding'),
              saved_custom_padding_top = et_get_saved_padding_margin_value(saved_custom_padding, 0),
              saved_custom_padding_tablet = $et_pb_first_row.attr('data-padding-tablet'),
              saved_custom_padding_tablet_top = et_get_saved_padding_margin_value(saved_custom_padding_tablet, 0),
              saved_custom_padding_phone = $et_pb_first_row.attr('data-padding-phone'),
              saved_custom_padding_phone_top = et_get_saved_padding_margin_value(saved_custom_padding_phone, 0),
              applied_saved_custom_padding;

          if (saved_custom_padding_top || saved_custom_padding_tablet_top || saved_custom_padding_phone_top) {
            // Applies padding top to first section to automatically convert saved unit into px
            if (et_window_width > 980 && saved_custom_padding_top) {
              $et_pb_first_row.css({
                paddingTop: 'number' === typeof saved_custom_padding_top ? saved_custom_padding_top + 'px' : saved_custom_padding_top
              });
            } else if (et_window_width > 767 && saved_custom_padding_tablet_top) {
              $et_pb_first_row.css({
                paddingTop: 'number' === typeof saved_custom_padding_tablet_top ? saved_custom_padding_tablet_top + 'px' : saved_custom_padding_tablet_top
              });
            } else if (saved_custom_padding_phone_top) {
              $et_pb_first_row.css({
                paddingTop: 'number' === typeof saved_custom_padding_phone_top ? saved_custom_padding_phone_top + 'px' : saved_custom_padding_phone_top
              });
            } // Get converted custom padding top value


            applied_saved_custom_padding = parseInt($et_pb_first_row.css('paddingTop')); // Implemented saved & converted padding top + header height

            $et_pb_first_row.css({
              paddingTop: header_height + applied_saved_custom_padding + 'px'
            });
          } else {
            // Pagebuilder ignores #main-content .container's fixed height and uses its row's padding
            // Anticipate the use of custom section padding.
            et_pb_first_row_padding_top = header_height + parseInt($et_pb_first_row.css('paddingTop')); // Save current styling for the next resize cycle

            et_save_initial_page_container_style($et_pb_first_row, 'paddingTop'); // Implementing padding-top + header_height

            $et_pb_first_row.css({
              'paddingTop': et_pb_first_row_padding_top + 'px'
            });
          }
        } else if (is_no_pb_mobile) {
          // Mobile + not pagebuilder
          $et_main_content_first_row.css({
            'paddingTop': header_height + 'px'
          });
        } else {
          $('#main-content .container:first-child').css({
            'paddingTop': header_height + 'px'
          });
        } // Set #page-container's padding-top to zero after inline styling first row's content has been added


        if (!$('#et_fix_page_container_position').length) {
          $('<style />', {
            'id': 'et_fix_page_container_position',
            'text': '#page-container{ padding-top: 0 !important;}'
          }).appendTo('head');
        } // If the first visible (visibility is significant for for cached split test) section/row/module has
        // parallax background, trigger parallax height resize so the parallax location is correctly rendered
        // due to addition of first section/row/module margin-top/padding-top which is needed for transparent
        // primary nav


        var $firstSection = $('.et_pb_section:visible').first();
        var $firstRow = $firstSection.find('.et_pb_row:visible').first();
        var $firstModule = $firstSection.find('.et_pb_module:visible').first();
        var firstSectionHasParallax = $firstSection.hasClass('et_pb_section_parallax');
        var firstRowHasParallax = $firstRow.hasClass('et_pb_section_parallax');
        var firstModuleHasParallax = $firstModule.hasClass('et_pb_section_parallax');

        if (firstSectionHasParallax || firstRowHasParallax || firstModuleHasParallax) {
          $(window).trigger('resize.etTrueParallaxBackground');
        }
      } else if (et_is_fixed_nav) {
        $main_container_wrapper.css('paddingTop', header_height + 'px');
      }

      $mainHeaderClone.remove();
      et_change_primary_nav_position(0);
      $(document).trigger('et-pb-header-height-calculated');
    }

    window.et_fix_page_container_position = et_fix_page_container_position; // Save container width on page load for reference

    $et_container.data('previous-width', parseInt($et_container.width()));
    var update_page_container_position = et_debounce(function () {
      et_fix_page_container_position();

      if (typeof et_fix_fullscreen_section === 'function') {
        et_fix_fullscreen_section();
      }
    }, 200);
    $(window).on('resize', function () {
      var window_width = parseInt($et_window.width()),
          has_container = $et_container.length > 0,
          et_container_previous_width = !has_container ? 0 : parseInt($et_container.data('previous-width')) || 0,
          et_container_css_width = $et_container.css('width'),
          et_container_width_in_pixel = typeof et_container_css_width !== 'undefined' ? et_container_css_width.substr(-1, 1) !== '%' : '',
          et_container_actual_width = !has_container ? 0 : et_container_width_in_pixel ? parseInt($et_container.width()) : parseInt((parseInt($et_container.width()) / 100).toFixed(0)) * window_width,
          // $et_container.width() doesn't recognize pixel or percentage unit. It's our duty to understand what it returns and convert it properly
      containerWidthChanged = $et_container.length && et_container_previous_width !== et_container_actual_width,
          $slide_menu_container = $('.et_slide_in_menu_container'),
          $adminbar = builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"] ? top_window.jQuery('#wpadminbar') : $('#wpadminbar'),
          is_rtl = $('body').hasClass('rtl'),
          page_container_margin;

      if (et_is_fixed_nav && containerWidthChanged) {
        update_page_container_position(); // Update container width data for future resizing reference

        $et_container.data('previous-width', et_container_actual_width);
      }

      if (et_hide_nav) {
        et_hide_nav_transform();
      } // Update header and primary adjustment when transitioning across breakpoints or inside visual builder


      if ($adminbar.length && et_is_fixed_nav && window_width >= 740 && window_width <= 782 || builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"]) {
        et_calculate_header_values();
        et_change_primary_nav_position(0);
      }

      et_set_search_form_css();

      if ($slide_menu_container.length && !$('body').hasClass('et_pb_slide_menu_active')) {
        if (is_rtl) {
          $slide_menu_container.css({
            left: '-' + parseInt($slide_menu_container.innerWidth()) + 'px',
            right: 'unset'
          });
        } else {
          $slide_menu_container.css({
            right: '-' + parseInt($slide_menu_container.innerWidth()) + 'px'
          });
        }

        if ($('body').hasClass('et_boxed_layout') && et_is_fixed_nav) {
          if (is_rtl) {
            page_container_margin = $main_container_wrapper.css('margin-right');
            $main_header.css({
              right: page_container_margin
            });
          } else {
            page_container_margin = $main_container_wrapper.css('margin-left');
            $main_header.css({
              left: page_container_margin
            });
          }
        }
      }

      if ($slide_menu_container.length && $('body').hasClass('et_pb_slide_menu_active')) {
        if ($('body').hasClass('et_boxed_layout')) {
          var left_position;
          page_container_margin = parseFloat($main_container_wrapper.css('margin-left'));
          $main_container_wrapper.css({
            left: '-' + (parseInt($slide_menu_container.innerWidth()) - page_container_margin) + 'px'
          });

          if (et_is_fixed_nav) {
            left_position = 0 > parseInt($slide_menu_container.innerWidth()) - page_container_margin * 2 ? Math.abs($slide_menu_container.innerWidth() - page_container_margin * 2) : '-' + ($slide_menu_container.innerWidth() - page_container_margin * 2);

            if (left_position < parseInt($slide_menu_container.innerWidth())) {
              $main_header.css({
                left: left_position + 'px'
              });
            }
          }
        } else {
          if (is_rtl) {
            $('#page-container, .et_fixed_nav #main-header').css({
              right: '-' + parseInt($slide_menu_container.innerWidth()) + 'px'
            });
          } else {
            $('#page-container, .et_fixed_nav #main-header').css({
              left: '-' + parseInt($slide_menu_container.innerWidth()) + 'px'
            });
          }
        }
      } // adjust the padding in fullscreen menu


      if ($slide_menu_container.length && $('body').hasClass('et_header_style_fullscreen')) {
        var top_bar_height = parseInt($slide_menu_container.find('.et_slide_menu_top').innerHeight());
        $slide_menu_container.css({
          'padding-top': top_bar_height + 20 + 'px'
        });
      }

      et_set_right_vertical_menu();
    });

    if (builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"] && jQuery('.et_header_style_fullscreen .et_slide_in_menu_container').length > 0) {
      jQuery(window).on('resize', et_pb_resize_fullscreen_menu);
    }

    $(function () {
      if ($.fn.fitVids) {
        $('#main-content').fitVids({
          customSelector: "iframe[src^='http://www.hulu.com'], iframe[src^='http://www.dailymotion.com'], iframe[src^='http://www.funnyordie.com'], iframe[src^='https://embed-ssl.ted.com'], iframe[src^='http://embed.revision3.com'], iframe[src^='https://flickr.com'], iframe[src^='http://blip.tv'], iframe[src^='http://www.collegehumor.com']"
        });
      }
    });

    function et_all_elements_loaded() {
      if (et_is_fixed_nav) {
        et_calculate_header_values();
      } // Run container position calculation with 0 timeout to make sure all elements are ready for proper calculation.


      setTimeout(function () {
        et_fix_page_container_position();
      }, 0); // Minified JS is ordered differently to avoid jquery-migrate to cause js error.
      // This might cause hiccup on some specific configuration (ie. parallax of first module on transparent nav)
      // Triggerring resize, in most case, re-calculate the UI correctly

      if (window.et_is_minified_js && window.et_is_transparent_nav && !window.et_is_vertical_nav) {
        $(window).trigger('resize');
      }

      if (window.hasOwnProperty('et_location_hash') && '' !== window.et_location_hash) {
        // Handle the page scroll that we prevented earlier in the <head>
        et_page_load_scroll_to_anchor();
      }

      if (et_header_style_left && !window.et_is_vertical_nav) {
        var $logo_width = parseInt($('#logo').width());

        if (et_is_rtl) {
          $et_top_navigation.css('padding-right', $logo_width + 30 + 'px');
        } else {
          $et_top_navigation.css('padding-left', $logo_width + 30 + 'px');
        }
      }

      if ($('p.demo_store').length && $('p.demo_store').is(':visible')) {
        $('#footer-bottom').css('margin-bottom', $('p.demo_store').innerHeight() + 'px');
        $('.woocommerce-store-notice__dismiss-link').on('click', function () {
          $('#footer-bottom').css('margin-bottom', '');
        });
      }

      if ($.fn.waypoint) {
        var $waypoint_selector;

        if (et_is_vertical_fixed_nav) {
          $waypoint_selector = $('#main-content');
          $waypoint_selector.waypoint({
            handler: function handler(direction) {
              et_fix_logo_transition();

              if (direction === 'down') {
                $('#main-header').addClass('et-fixed-header');
              } else {
                $('#main-header').removeClass('et-fixed-header');
              }
            }
          });
        }

        if (et_is_fixed_nav) {
          // Changing waypoint selector to first section's row / module when transparent
          // nav is used only valid if the first section position is on offset top = 0
          // (or 32 when admin bar exist) to avoid `et-fixed-nav` classname being added
          // too late when the window is scrolled too way down
          var firstRowOffsetTop = $et_pb_first_row.length > 0 ? $et_pb_first_row.offset().top : 0;
          var maxFirstRowOffsetTop = $('#wpadminbar').length ? $('#wpadminbar').height() : 0;
          var isFirstRowOnTop = firstRowOffsetTop <= maxFirstRowOffsetTop;

          if (isFirstRowOnTop && window.et_is_transparent_nav && !window.et_is_vertical_nav && $et_pb_first_row.length) {
            // Fullscreen section at the first row requires specific adjustment
            if ($et_pb_first_row.is('.et_pb_fullwidth_section')) {
              $waypoint_selector = $et_pb_first_row.children('.et_pb_module:visible').first();
            } else {
              $waypoint_selector = $et_pb_first_row.find('.et_pb_row:visible').first();
            } // Fallback for a less likely but possible scenario: a) fullwidth section
            // has no module OR b) other section has no row. When this happened,
            // the safest option is look for the first visible module and use it
            // as waypoint selector


            if (!$waypoint_selector.length) {
              $waypoint_selector = et_get_first_module();
            }
          } else if (isFirstRowOnTop && window.et_is_transparent_nav && !window.et_is_vertical_nav && $et_main_content_first_row.length) {
            $waypoint_selector = $('#content-area');
          } else {
            $waypoint_selector = $('#main-content');
          } // Disabled section/row/module can cause waypoint to trigger 'down' event during its setup even if
          // no scrolling happened, which would result in 'et-fixed-header' class being prematurely added.
          // Since this only happens when page is loaded, we add an extra check that is no longer needed
          // as soon as waypoint initialization is finished.


          var checkIfScrolled = true;
          setTimeout(function () {
            checkIfScrolled = false;
          }, 0);
          $waypoint_selector.waypoint({
            offset: function offset() {
              if (etRecalculateOffset) {
                setTimeout(function () {
                  et_calculate_header_values();
                }, 200);
                etRecalculateOffset = false;
              }

              if (et_hide_nav) {
                return et_header_offset - et_header_height - 200;
              } else {
                // Transparent nav modification: #page-container's offset is set to 0. Modify et_header_offset's according to header height
                var waypoint_selector_offset = $waypoint_selector.offset();

                if (waypoint_selector_offset.top < et_header_offset) {
                  et_header_offset = 0 - (et_header_offset - waypoint_selector_offset.top);
                }

                return et_header_offset;
              }
            },
            handler: function handler(direction) {
              et_fix_logo_transition();

              if (direction === 'down') {
                if (checkIfScrolled && $et_window.scrollTop() === 0) {
                  return;
                }

                $main_header.addClass('et-fixed-header');
                $main_container_wrapper.addClass('et-animated-content');
                $top_header.addClass('et-fixed-header');

                if (!et_hide_nav && !window.et_is_transparent_nav && !$('.mobile_menu_bar_toggle').is(':visible')) {
                  var secondary_nav_height = $top_header.length ? parseInt($top_header.height()) : 0,
                      $clone_header,
                      clone_header_height,
                      fix_padding;
                  $clone_header = $main_header.clone().addClass('et-fixed-header, et_header_clone').css({
                    'transition': 'none',
                    'display': 'none'
                  });
                  clone_header_height = parseInt($clone_header.prependTo('body').height()); // Vertical nav doesn't need #page-container margin-top adjustment

                  if (!window.et_is_vertical_nav) {
                    fix_padding = parseInt($main_container_wrapper.css('padding-top')) - clone_header_height - secondary_nav_height + 1;
                    $main_container_wrapper.css('margin-top', -fix_padding + 'px');
                  }

                  $('.et_header_clone').remove();
                }
              } else {
                fix_padding = 1;
                $main_header.removeClass('et-fixed-header');
                $top_header.removeClass('et-fixed-header');
                $main_container_wrapper.css('margin-top', -fix_padding + 'px');
              } // Dispatch event when fixed header height transition starts


              window.dispatchEvent(new CustomEvent('ETDiviFixedHeaderTransitionStart', {
                detail: {
                  marginTop: -fix_padding
                }
              }));
              setTimeout(function () {
                et_set_search_form_css(); // Dispatch another event when fixed header height transition ends

                window.dispatchEvent(new CustomEvent('ETDiviFixedHeaderTransitionEnd', {
                  detail: {
                    marginTop: -fix_padding
                  }
                }));
              }, 400);
            }
          });
        }

        if (et_hide_nav) {
          et_hide_nav_transform();
        }
      }
    }

    $('a[href*="#"]:not([href="#"]), .mobile_nav').on('click', function (e) {
      var $this_link = $(this),
          has_closest_smooth_scroll_disabled = $this_link.closest('.et_smooth_scroll_disabled').length,
          has_closest_woocommerce_tabs = $this_link.closest('.woocommerce-tabs').length && $this_link.closest('.tabs').length,
          has_closest_timetable_tab = $this_link.closest('.tt_tabs_navigation').length,
          has_closest_eab_cal_link = $this_link.closest('.eab-shortcode_calendar-navigation-link').length,
          has_closest_ee_cart_link = $this_link.closest('.view-cart-lnk').length,
          has_acomment_reply = $this_link.hasClass('acomment-reply'),
          is_woocommerce_review_link = $this_link.hasClass('woocommerce-review-link'),
          disable_scroll = has_closest_smooth_scroll_disabled || has_closest_ee_cart_link || has_closest_woocommerce_tabs || has_closest_eab_cal_link || has_acomment_reply || is_woocommerce_review_link || has_closest_timetable_tab;

      if (($this_link.hasClass('mobile_nav') || location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) && !disable_scroll) {
        var target = $(this.hash); // Workaround for empty target in mobile menu.

        if ($this_link.hasClass('mobile_nav')) {
          target = $('#' + e.target.hash.slice(1)); // Workaround for Popup Maker plugin not working in mobile.

          if ($(e.target).parent().hasClass('pum-trigger')) {
            e.preventDefault();
            var temp_classes = $(e.target).parent().attr('class').split(' ');
            var pop_make_classes = temp_classes.filter(function (pop_make_class) {
              return pop_make_class.includes('popmake');
            });
            var id_slug = pop_make_classes[0].split('-')[1];
            $("#pum-".concat(id_slug)).css({
              'opacity': '1',
              'display': 'block'
            });
            $("#popmake-".concat(id_slug)).css({
              'opacity': '1',
              'display': 'block'
            });
          }
        }

        if (!target.length && this.hash) {
          target = $('[name=' + this.hash.slice(1) + ']');
        }

        if (target.length) {
          // Workaround for reviews tab in woo tabs.
          if ($(this).parents().hasClass('widget_recent_reviews')) {
            $('.reviews_tab').trigger('click').animate({
              scrollTop: target.offset().top
            }, 700);
          } // automatically close fullscreen menu if clicked from there


          if ($this_link.closest('.et_pb_fullscreen_menu_opened').length > 0) {
            et_pb_toggle_fullscreen_menu();
          }

          setTimeout(function () {
            et_pb_smooth_scroll(target, false, 800);
          }, 0);

          if (!$('#main-header').hasClass('et-fixed-header') && $('body').hasClass('et_fixed_nav') && $(window).width() > 980) {
            setTimeout(function () {
              et_pb_smooth_scroll(target, false, 40, 'linear');
            }, 780);
          }

          return false;
        }
      }
    }); // Marking elements which has attached event already

    $('a[href*="#"]:not([href="#"])').each(function (index, element) {
      $(element).attr('data-et-has-event-already', 'true');
    });

    var et_pb_window_side_nav_get_sections = function et_pb_window_side_nav_get_sections() {
      var $postRoot = $('.et-l--post');
      var $inTBBody = $('.et-l--body .et_pb_section').not('.et-l--post .et_pb_section');
      var $inPost;

      if (builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"]) {
        $inPost = $postRoot.find('.et-fb-post-content > .et_pb_section');
      } else {
        $inPost = $postRoot.find('.et_builder_inner_content > .et_pb_section');
      }

      if (0 === $inTBBody.length || $inPost.length > 1) {
        return $inPost;
      }

      return $inTBBody;
    };

    window.et_pb_window_side_nav_scroll_init = function () {
      if (true === window.et_calculating_scroll_position || false === window.et_side_nav_links_initialized) {
        return;
      }

      var $sections = et_pb_window_side_nav_get_sections();
      window.et_calculating_scroll_position = true;
      var is_tb_layout_used = $('.et-l--header').length || $('.et-l--body').length || !$('#main-header').length;
      var add_offset_default = is_tb_layout_used ? 0 : -90;
      var add_offset = $('body').hasClass('et_fixed_nav') ? 20 : add_offset_default;
      var top_header_height = $('#top-header').length > 0 ? parseInt($('#top-header').height()) : 0;
      var main_header_height = $('#main-header').length > 0 ? parseInt($('#main-header').height()) : 0;
      var side_offset;

      if ($('#wpadminbar').length > 0 && parseInt($(window).width()) > 600) {
        add_offset += parseInt($('#wpadminbar').outerHeight());
      }

      if (window.et_is_vertical_nav) {
        side_offset = top_header_height + add_offset + 60;
      } else {
        side_offset = top_header_height + main_header_height + add_offset;
      }

      var window_height = parseInt($(window).height());
      var scroll_position = parseInt($(window).scrollTop());
      var document_height = parseInt($(document).height());
      var at_bottom_of_page = window_height + scroll_position === document_height;
      var total_links = $('.side_nav_item a').length - 1;

      for (var link = 0; link <= total_links; link++) {
        var $target_section = $sections.eq(link);
        var at_top_of_page = 'undefined' === typeof $target_section.offset();
        var current_active = $('.side_nav_item a.active').parent().index();
        var next_active = null;
        var target_offset = false === at_top_of_page ? $target_section.offset().top - side_offset : 0;

        if (at_top_of_page) {
          next_active = 0;
        } else if (at_bottom_of_page) {
          next_active = total_links;
        } else if (scroll_position >= target_offset) {
          next_active = link;
        }

        if (null !== next_active && next_active !== current_active) {
          $('.side_nav_item a').removeClass('active');
          $('a#side_nav_item_id_' + next_active).addClass('active');
        }
      }

      window.et_calculating_scroll_position = false;
    };

    window.et_pb_side_nav_page_init = function () {
      var $sections = et_pb_window_side_nav_get_sections();
      var total_sections = $sections.length;
      var side_nav_offset = parseInt((total_sections * 20 + 40) / 2);
      window.et_side_nav_links_initialized = false;
      window.et_calculating_scroll_position = false;

      if (total_sections > 1 && $('.et_pb_side_nav_page').length) {
        $('#main-content').append('<ul class="et_pb_side_nav"></ul>');
        $sections.each(function (index, element) {
          var active_class = 0 === index ? 'active' : '';
          $('.et_pb_side_nav').append('<li class="side_nav_item"><a href="#" id="side_nav_item_id_' + index + '" class= "' + active_class + '">' + index + '</a></li>');

          if (total_sections - 1 === index) {
            window.et_side_nav_links_initialized = true;
          }
        });
        $('ul.et_pb_side_nav').css('marginTop', '-' + side_nav_offset + 'px');
        $('.et_pb_side_nav').addClass('et-visible');
        $('.et_pb_side_nav a').on('click', function () {
          // We use the index position of the sections to locate them instead of custom classes so
          // that we have the same implementation for the frontend website and the Visual Builder.
          var index = parseInt($(this).text());
          var $target = $sections.eq(index);
          var top_section = $(this).text() == "0" && !$('.et-l--body').length;
          et_pb_smooth_scroll($target, top_section, 800);

          if (!$('#main-header').hasClass('et-fixed-header') && $('body').hasClass('et_fixed_nav') && parseInt($(window).width()) > 980) {
            setTimeout(function () {
              et_pb_smooth_scroll($target, top_section, 200);
            }, 500);
          }

          return false;
        });
        $(window).on('scroll', et_pb_window_side_nav_scroll_init);
      }
    };

    if ($('body').is('.et-fb, .et-bfb')) {
      // Debounce slow function
      window.et_pb_side_nav_page_init = et_debounce(window.et_pb_side_nav_page_init, 200);
    }

    et_pb_side_nav_page_init();

    if ($('.et_pb_scroll_top').length) {
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 800) {
          $('.et_pb_scroll_top').show().removeClass('et-hidden').addClass('et-visible');
        } else {
          $('.et_pb_scroll_top').removeClass('et-visible').addClass('et-hidden');
        }
      }); //Click event to scroll to top

      $('.et_pb_scroll_top').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
      });
    }

    if ($('.comment-reply-link').length) {
      $('.comment-reply-link').addClass('et_pb_button');
    }

    $('#et_top_search').on('click', function () {
      var $search_container = $('.et_search_form_container');

      if ($search_container.hasClass('et_pb_is_animating')) {
        return;
      }

      $('.et_menu_container').removeClass('et_pb_menu_visible et_pb_no_animation').addClass('et_pb_menu_hidden');
      $search_container.removeClass('et_pb_search_form_hidden et_pb_no_animation').addClass('et_pb_search_visible et_pb_is_animating');
      setTimeout(function () {
        $('.et_menu_container').addClass('et_pb_no_animation');
        $search_container.addClass('et_pb_no_animation').removeClass('et_pb_is_animating');
      }, 1000);
      $search_container.find('input').trigger('focus');
      et_set_search_form_css();
    });

    function et_hide_search() {
      if ($('.et_search_form_container').hasClass('et_pb_is_animating')) {
        return;
      }

      $('.et_menu_container').removeClass('et_pb_menu_hidden et_pb_no_animation').addClass('et_pb_menu_visible');
      $('.et_search_form_container').removeClass('et_pb_search_visible et_pb_no_animation').addClass('et_pb_search_form_hidden et_pb_is_animating');
      setTimeout(function () {
        $('.et_menu_container').addClass('et_pb_no_animation');
        $('.et_search_form_container').addClass('et_pb_no_animation').removeClass('et_pb_is_animating');
      }, 1000);
    }

    function et_set_search_form_css() {
      var $search_container = $('.et_search_form_container');
      var $body = $('body');

      if ($search_container.hasClass('et_pb_search_visible')) {
        var header_height = $('#main-header').innerHeight(),
            menu_width = $('#top-menu').width(),
            font_size = $('#top-menu li a').css('font-size');
        $search_container.css({
          'height': header_height + 'px'
        });
        $search_container.find('input').css('font-size', font_size);

        if (!$body.hasClass('et_header_style_left')) {
          $search_container.css('max-width', menu_width + 60 + 'px');
        } else {
          $search_container.find('form').css('max-width', menu_width + 60 + 'px');
        }
      }
    }

    $('.et_close_search_field').on('click', function () {
      et_hide_search();
    });
    $(document).on('mouseup', function (e) {
      var $header = $('#main-header');

      if ($('.et_menu_container').hasClass('et_pb_menu_hidden')) {
        if (!$header.is(e.target) && $header.has(e.target).length === 0) {
          et_hide_search();
        }
      }
    }); // Detect actual logo dimension, used for tricky fixed navigation transition

    function et_define_logo_dimension() {
      var $logo = $('#logo'),
          logo_src = $logo.attr('src'),
          is_svg = logo_src.substr(-3, 3) === 'svg' ? true : false,
          $logo_wrap,
          logo_width,
          logo_height; // Append invisible wrapper at the bottom of the page

      $('body').append($('<div />', {
        'id': 'et-define-logo-wrap',
        'style': 'position: fixed; bottom: 0; opacity: 0;'
      })); // Define logo wrap

      $logo_wrap = $('#et-define-logo-wrap');

      if (is_svg) {
        $logo_wrap.addClass('svg-logo');
      } // Clone logo to invisible wrapper


      $logo_wrap.html($logo.clone().css({
        'display': 'block'
      }).removeAttr('id')); // Get dimension

      logo_width = $logo_wrap.find('img').width();
      logo_height = $logo_wrap.find('img').height(); // Add data attribute to $logo

      $logo.attr({
        'data-actual-width': logo_width,
        'data-actual-height': logo_height
      }); // Destroy invisible wrapper

      $logo_wrap.remove(); // Init logo transition onload

      et_fix_logo_transition(true);
    }

    if ($('#logo').length) {
      // Wait until logo is loaded before performing logo dimension fix
      // This comes handy when the page is heavy due to the use of images or other assets
      et_preload_image($('#logo').attr('src'), et_define_logo_dimension);
    } // Set width for adsense in footer widget


    $('.footer-widget').each(function () {
      var $footer_widget = $(this),
          footer_widget_width = $footer_widget.width(),
          $adsense_ins = $footer_widget.find('.widget_adsensewidget ins');

      if ($adsense_ins.length) {
        $adsense_ins.width(footer_widget_width);
      }
    });
    /**
     * Visual Builder adjustment
     */

    function et_fb_side_nav_page_init() {
      $(window).off('scroll', window.et_pb_window_side_nav_scroll_init);
      $('#main-content .et_pb_side_nav').off('click', '.et_pb_side_nav a');
      $('#main-content .et_pb_side_nav').remove();
      et_pb_side_nav_page_init();
    }

    if ($('body').is('.et-fb')) {
      $(window).on('et_fb_root_did_mount', function () {
        et_fb_side_nav_page_init();
        et_all_elements_loaded();
      });
      $(window).on('et_fb_section_content_change', et_fb_side_nav_page_init);
    } else {
      window.addEventListener('load', et_all_elements_loaded);
    }
  }); // Fixing logo size transition in tricky header style

  function et_fix_logo_transition(is_onload) {
    var $body = $('body'),
        $logo = $('#logo'),
        logo_actual_width = parseInt($logo.attr('data-actual-width')),
        logo_actual_height = parseInt($logo.attr('data-actual-height')),
        logo_height_percentage = parseInt($logo.attr('data-height-percentage')),
        $top_nav = $('#et-top-navigation'),
        top_nav_height = parseInt($top_nav.attr('data-height')),
        top_nav_fixed_height = parseInt($top_nav.attr('data-fixed-height')),
        $main_header = $('#main-header'),
        is_header_split = $body.hasClass('et_header_style_split'),
        is_fixed_nav = $main_header.hasClass('et-fixed-header'),
        is_hide_primary_logo = $body.hasClass('et_hide_primary_logo'),
        is_hide_fixed_logo = $body.hasClass('et_hide_fixed_logo'),
        logo_height_base = is_fixed_nav ? top_nav_height : top_nav_fixed_height,
        logo_wrapper_width,
        logo_wrapper_height;
    is_onload = typeof is_onload === 'undefined' ? false : is_onload; // Fix for inline centered logo in horizontal nav

    if (is_header_split && !window.et_is_vertical_nav) {
      // On page load, logo_height_base should be top_nav_height
      if (is_onload) {
        logo_height_base = top_nav_height;
      } // Calculate logo wrapper height


      logo_wrapper_height = logo_height_base * (logo_height_percentage / 100) + 22; // Calculate logo wrapper width

      logo_wrapper_width = logo_actual_width * (logo_wrapper_height / logo_actual_height); // Override logo wrapper width to 0 if it is hidden

      if (is_hide_primary_logo && (is_fixed_nav || is_onload)) {
        logo_wrapper_width = 0;
      }

      if (is_hide_fixed_logo && !is_fixed_nav && !is_onload) {
        logo_wrapper_width = 0;
      } // Set fixed width for logo wrapper to force correct dimension


      $('.et_header_style_split .centered-inline-logo-wrap').css({
        'width': logo_wrapper_width + 'px'
      });
    }
  }

  function et_toggle_slide_menu(force_state) {
    var $slide_menu_container = $('.et_header_style_slide .et_slide_in_menu_container'),
        $page_container = $('.et_header_style_slide #page-container, .et_header_style_slide.et_fixed_nav #main-header'),
        $header_container = $('.et_header_style_slide #main-header'),
        is_menu_opened = $slide_menu_container.hasClass('et_pb_slide_menu_opened'),
        set_to = typeof force_state !== 'undefined' ? force_state : 'auto',
        is_boxed_layout = $('body').hasClass('et_boxed_layout'),
        page_container_margin = is_boxed_layout ? parseFloat($('#page-container').css('margin-left')) : 0,
        slide_container_width = $slide_menu_container.innerWidth(),
        is_rtl = $('body').hasClass('rtl');

    if ('auto' !== set_to && (is_menu_opened && 'open' === set_to || !is_menu_opened && 'close' === set_to)) {
      return;
    }

    if (is_menu_opened) {
      if (is_rtl) {
        $slide_menu_container.css({
          left: '-' + slide_container_width + 'px'
        });
        $page_container.css({
          right: '0px'
        });
      } else {
        $slide_menu_container.css({
          right: '-' + slide_container_width + 'px'
        });
        $page_container.css({
          left: '0px'
        });
      }

      if (is_boxed_layout && et_is_fixed_nav) {
        if (is_rtl) {
          $header_container.css({
            right: page_container_margin + 'px'
          });
        } else {
          $header_container.css({
            left: page_container_margin + 'px'
          });
        }
      } // hide the menu after animation completed


      setTimeout(function () {
        $slide_menu_container.css({
          'display': 'none'
        });
      }, 700);
    } else {
      $slide_menu_container.css({
        'display': 'block'
      }); // add some delay to make sure css animation applied correctly

      setTimeout(function () {
        if (is_rtl) {
          $slide_menu_container.css({
            left: '0px'
          });
          $page_container.css({
            right: '-' + (slide_container_width - page_container_margin) + 'px'
          });
        } else {
          $slide_menu_container.css({
            right: '0px'
          });
          $page_container.css({
            left: '-' + (slide_container_width - page_container_margin) + 'px'
          });
        }

        if (is_boxed_layout && et_is_fixed_nav) {
          var left_position = 0 > slide_container_width - page_container_margin * 2 ? Math.abs(slide_container_width - page_container_margin * 2) : '-' + (slide_container_width - page_container_margin * 2);

          if (left_position < slide_container_width) {
            if (is_rtl) {
              $header_container.css({
                right: left_position + 'px'
              });
            } else {
              $header_container.css({
                left: left_position + 'px'
              });
            }
          }
        }
      }, 50);
    }

    $('body').toggleClass('et_pb_slide_menu_active');
    $slide_menu_container.toggleClass('et_pb_slide_menu_opened');
  } // Scrolling to the correct place on page if Fixed Nav enabled


  function et_adjust_woocommerce_checkout_scroll() {
    if (!et_is_fixed_nav) {
      return;
    }

    var window_width = parseInt($et_window.width());

    if (980 >= window_width) {
      return;
    }

    var headerHeight = parseInt($('#main-header').length ? $('#main-header').innerHeight() : 0); // scroll to the top of checkout form taking into account fixed header height

    $('html, body').animate({
      scrollTop: $('form.checkout').offset().top - 100 - headerHeight
    }, 1000);
  }

  $('#main-header').on('click', '.et_toggle_slide_menu', function () {
    et_toggle_slide_menu();
  });

  if (et_is_touch_device) {
    // open slide menu on swipe left
    $et_window.on('swipeleft', function (event) {
      var window_width = parseInt($et_window.width()),
          swipe_start = parseInt(event.swipestart.coords[0]); // horizontal coordinates of the swipe start
      // if swipe started from the right edge of screen then open slide menu

      if (30 >= window_width - swipe_start) {
        et_toggle_slide_menu('open');
      }
    }); // close slide menu on swipe right

    $et_window.on('swiperight', function (event) {
      if ($('body').hasClass('et_pb_slide_menu_active')) {
        et_toggle_slide_menu('close');
      }
    });
  }

  $('#page-container').on('click', '.et_toggle_fullscreen_menu', function () {
    et_pb_toggle_fullscreen_menu();
  });

  function et_pb_toggle_fullscreen_menu() {
    var $menu_container = $('.et_header_style_fullscreen .et_slide_in_menu_container'),
        top_bar_height = $menu_container.find('.et_slide_menu_top').innerHeight();
    $menu_container.toggleClass('et_pb_fullscreen_menu_opened');
    $('body').toggleClass('et_pb_fullscreen_menu_active');
    et_pb_resize_fullscreen_menu();

    if ($menu_container.hasClass('et_pb_fullscreen_menu_opened')) {
      $menu_container.addClass('et_pb_fullscreen_menu_animated'); // adjust the padding in fullscreen menu

      $menu_container.css({
        'padding-top': top_bar_height + 20 + 'px'
      });
    } else {
      setTimeout(function () {
        $menu_container.removeClass('et_pb_fullscreen_menu_animated');
      }, 1000);
    }
  }

  function et_pb_resize_fullscreen_menu(e) {
    if (builder_scripts_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isBuilder"]) {
      var $menu = jQuery('.et_header_style_fullscreen .et_slide_in_menu_container.et_pb_fullscreen_menu_opened');

      if ($menu.length > 0) {
        var height = jQuery(top_window).height(); // Account for padding

        height -= parseInt($menu.css('padding-top'), 10); // and AdminBar

        if ($menu.closest('.admin-bar').length > 0) {
          height -= 32;
        }

        $menu.find('.et_pb_fullscreen_nav_container').css('max-height', height + 'px');
      }
    }
  }

  $(window).on('unload', function () {
    /**
     * Fix the issue with Fullscreen menu, that remains open,
     * when back button is clicked in Firefox
     */
    if ($('body').hasClass('et_pb_fullscreen_menu_active')) {
      $('.et_toggle_fullscreen_menu').trigger('click');
    }
  });
  $('.et_pb_fullscreen_nav_container').on('click', 'li.menu-item-has-children > a', function () {
    var $this_parent = $(this).closest('li'),
        $this_arrow = $this_parent.find('>a .et_mobile_menu_arrow'),
        $closest_submenu = $this_parent.find('>ul'),
        is_opened_submenu = $this_arrow.hasClass('et_pb_submenu_opened'),
        sub_menu_max_height;
    $this_arrow.toggleClass('et_pb_submenu_opened');

    if (is_opened_submenu) {
      $closest_submenu.removeClass('et_pb_slide_dropdown_opened');
      $closest_submenu.slideToggle(700, 'easeInOutCubic');
    } else {
      $closest_submenu.slideToggle(700, 'easeInOutCubic');
      $closest_submenu.addClass('et_pb_slide_dropdown_opened');
    }

    return false;
  }); // define initial padding-top for fullscreen menu container

  if ($('body').hasClass('et_header_style_fullscreen')) {
    var $menu_container = $('.et_header_style_fullscreen .et_slide_in_menu_container');

    if ($menu_container.length) {
      var top_bar_height = $menu_container.find('.et_slide_menu_top').innerHeight();
      $menu_container.css({
        'padding-top': top_bar_height + 20 + 'px'
      });
    }
  } // adjust the scrolling position on Woocommerce checkout page in case of error


  $(document.body).on('checkout_error', function () {
    et_adjust_woocommerce_checkout_scroll();
  });
  $(document.body).on('updated_checkout', function (data) {
    if ('failure' !== data.result) {
      return;
    }

    et_adjust_woocommerce_checkout_scroll();
  }); // Override row selector in VB

  $et_window.on('et_fb_init', function () {
    var wp = top_window.wp;

    if (wp && wp.hooks && wp.hooks.addFilter) {
      var replacement = window.DIVI.row_selector;
      wp.hooks.addFilter('et.pb.row.css.selector', 'divi.et.pb.row.css.selector', function (selector) {
        return selector.replace('%%row_selector%%', replacement);
      });
    }
  });
})(jQuery);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=custom.js.map
//# sourceMappingURL=custom.js.map