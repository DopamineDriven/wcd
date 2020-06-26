module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  return function () {
    var Super = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
        result;

    if (Object(_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
      var NewTarget = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/vercel/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "C:\\Users\\Anthr\\wcd\\pages\\_document.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var MyDocument = /*#__PURE__*/function (_Document) {
  Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyDocument, _Document);

  var _super = Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(MyDocument);

  function MyDocument() {
    Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MyDocument);

    return _super.apply(this, arguments);
  }

  Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MyDocument, [{
    key: "render",
    value: function render() {
      var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_10__["Html"], (_React$createElement8 = {
        __self: this
      }, Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement8, "__self", this), Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement8, "__source", {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }), _React$createElement8), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_10__["Head"], (_React$createElement4 = {
        __self: this
      }, Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement4, "__self", this), Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement4, "__source", {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }), _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", (_React$createElement = {
        name: "description",
        content: "The Next generation of a news feed",
        __self: this
      }, Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement, "__self", this), Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 6
      }), _React$createElement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", (_React$createElement2 = {
        href: "https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap",
        rel: "stylesheet",
        __self: this
      }, Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement2, "__self", this), Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 6
      }), _React$createElement2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", (_React$createElement3 = {
        rel: "shortcut icon",
        href: "/favicon.ico",
        __self: this
      }, Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement3, "__self", this), Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement3, "__source", {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 6
      }), _React$createElement3)), this.props.styles), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("body", (_React$createElement7 = {
        __self: this
      }, Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement7, "__self", this), Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement7, "__source", {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }), _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_10__["Main"], (_React$createElement5 = {
        __self: this
      }, Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement5, "__self", this), Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement5, "__source", {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 6
      }), _React$createElement5)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_10__["NextScript"], (_React$createElement6 = {
        __self: this
      }, Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement6, "__self", this), Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$createElement6, "__source", {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 6
      }), _React$createElement6))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var _this = this;

        var sheet, originalRenderPage, initialProps;
        return C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sheet = new styled_components__WEBPACK_IMPORTED_MODULE_9__["ServerStyleSheet"]();
                originalRenderPage = ctx.renderPage;
                _context.prev = 2;

                ctx.renderPage = function () {
                  return originalRenderPage({
                    enhanceApp: function enhanceApp(App) {
                      return function (props) {
                        var _Object$assign;

                        return sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(App, Object.assign({}, props, (_Object$assign = {
                          __self: _this
                        }, Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$assign, "__self", _this), Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_Object$assign, "__source", {
                          fileName: _jsxFileName,
                          lineNumber: 20,
                          columnNumber: 27
                        }), _Object$assign))));
                      };
                    }
                  });
                };

                _context.next = 6;
                return next_document__WEBPACK_IMPORTED_MODULE_10___default.a.getInitialProps(ctx);

              case 6:
                initialProps = _context.sent;
                return _context.abrupt("return", Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(C_Users_Anthr_wcd_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, initialProps), {}, {
                  styles: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, initialProps.styles, sheet.getStyleElement())
                }));

              case 8:
                _context.prev = 8;
                sheet.seal();
                return _context.finish(8);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2,, 8, 11]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_10___default.a);



/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi private-next-pages/_document.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.tsx */"./pages/_document.tsx");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtcmVhY3QtYXBwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtcmVhY3QtYXBwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtcmVhY3QtYXBwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19kb2N1bWVudC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwibmFtZXMiOlsiZmlsZXMiLCJrZXB0IiwiYnVuZGxlIiwicHJvY2VzcyIsIkNvbXBvbmVudCIsImVuaGFuY2VycyIsImVuaGFuY2VBcHAiLCJBcHAiLCJlbmhhbmNlciIsInByb3BzIiwiY3R4Iiwic3R5bGVzIiwiX2RvY3VtZW50UHJvcHMiLCJfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIiwiRGF0ZSIsInJlbmRlciIsIkRvY3VtZW50IiwiaGVhZFRhZ3NNaWRkbGV3YXJlIiwiYm9keVRhZ3NNaWRkbGV3YXJlIiwiaHRtbFByb3BzTWlkZGxld2FyZSIsImluQW1wTW9kZSIsIkh0bWwiLCJjb250ZXh0VHlwZSIsIkRvY3VtZW50Q29tcG9uZW50Q29udGV4dCIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwiUHJvcFR5cGVzIiwiZ2V0Q3NzTGlua3MiLCJjc3NGaWxlcyIsImYiLCJjc3NMaW5rRWxlbWVudHMiLCJmaWxlIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJnZXRQcmVsb2FkRHluYW1pY0NodW5rcyIsImdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJkaXNhYmxlUnVudGltZUpTIiwidW5zdGFibGVfcnVudGltZUpTIiwiUmVhY3QiLCJjaGlsZCIsImlzUmVhY3RIZWxtZXQiLCJjb25zb2xlIiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImhlYWQiLCJiYWRQcm9wIiwidHlwZSIsIk9iamVjdCIsInByb3AiLCJfX05FWFRfREFUQV9fIiwicGFnZSIsImN1clN0eWxlcyIsIkFycmF5IiwiaGFzU3R5bGVzIiwiZWwiLCJfX2h0bWwiLCJjYW5vbmljYWxCYXNlIiwic3R5bGUiLCJnZXRBbXBQYXRoIiwiYnVpbGRJZCIsImdldFBhZ2VGaWxlIiwiaGVhZFRhZ3MiLCJIZWFkIiwibm9uY2UiLCJjcm9zc09yaWdpbiIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiTWFpbiIsImdldER5bmFtaWNDaHVua3MiLCJkZWR1cGUiLCJtb2Rlcm5Qcm9wcyIsImdldFNjcmlwdHMiLCJub3JtYWxTY3JpcHRzIiwibG93UHJpb3JpdHlTY3JpcHRzIiwibG93UHJpb3JpdHlGaWxlcyIsImdldFBvbHlmaWxsU2NyaXB0cyIsInBvbHlmaWxsRmlsZXMiLCJwb2x5ZmlsbCIsImRhdGEiLCJKU09OIiwiZXJyIiwiZGV2RmlsZXMiLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAiLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDSyIsInN0YXRpY01hcmt1cCIsIk5leHRTY3JpcHQiLCJib2R5VGFncyIsInBhZ2VTY3JpcHQiLCJhcHBTY3JpcHQiLCJzYWZhcmlOb21vZHVsZUZpeCIsImFtcFBhdGgiLCJhc1BhdGgiLCJzdGFydGluZ1VybCIsIk15RG9jdW1lbnQiLCJzaGVldCIsIlNlcnZlclN0eWxlU2hlZXQiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiY29sbGVjdFN0eWxlcyIsImdldEluaXRpYWxQcm9wcyIsImluaXRpYWxQcm9wcyIsImdldFN0eWxlRWxlbWVudCIsInNlYWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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Y3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZlwiO1xuaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIjtcbmltcG9ydCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCIuL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIFN1cGVyID0gZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2ZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiaW1wb3J0IGRlZmluZVByb3BlcnR5IGZyb20gXCIuL2RlZmluZVByb3BlcnR5XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi4vLi4vaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEFNUF9SRU5ERVJfVEFSR0VULFxuICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QLFxuICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCxcbiAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0ssXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBEb2N1bWVudENvbnRleHQgYXMgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQnXG5pbXBvcnQge1xuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBjbGVhbkFtcFBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMnXG5pbXBvcnQgeyBodG1sRXNjYXBlSnNvblN0cmluZyB9IGZyb20gJy4uL3NlcnZlci9odG1sZXNjYXBlJ1xuXG5leHBvcnQgeyBEb2N1bWVudENvbnRleHQsIERvY3VtZW50SW5pdGlhbFByb3BzLCBEb2N1bWVudFByb3BzIH1cblxuZXhwb3J0IHR5cGUgT3JpZ2luUHJvcHMgPSB7XG4gIG5vbmNlPzogc3RyaW5nXG4gIGNyb3NzT3JpZ2luPzogc3RyaW5nXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHsgcmVxLCByZXMgfTogRG9jdW1lbnRDb250ZXh0KSB7fVxuXG5mdW5jdGlvbiBkZWR1cGUoYnVuZGxlczogYW55W10pOiBhbnlbXSB7XG4gIGNvbnN0IGZpbGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IGtlcHQgPSBbXVxuXG4gIGZvciAoY29uc3QgYnVuZGxlIG9mIGJ1bmRsZXMpIHtcbiAgICBpZiAoZmlsZXMuaGFzKGJ1bmRsZS5maWxlKSkgY29udGludWVcbiAgICBmaWxlcy5hZGQoYnVuZGxlLmZpbGUpXG4gICAga2VwdC5wdXNoKGJ1bmRsZSlcbiAgfVxuICByZXR1cm4ga2VwdFxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC5qcyQvLCAnLm1vZHVsZS5qcycpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudDxQID0ge30+IGV4dGVuZHMgQ29tcG9uZW50PERvY3VtZW50UHJvcHMgJiBQPiB7XG4gIHN0YXRpYyBoZWFkVGFnc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWhlYWQtdGFncy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cbiAgc3RhdGljIGJvZHlUYWdzTWlkZGxld2FyZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgPyBpbXBvcnQoXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtYm9keS10YWdzLXNlcnZlciEnXG4gICAgICApXG4gICAgOiAoKSA9PiBbXVxuICBzdGF0aWMgaHRtbFByb3BzTWlkZGxld2FyZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgPyBpbXBvcnQoXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaHRtbC1wcm9wcy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cblxuICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhcbiAgICBjdHg6IERvY3VtZW50Q29udGV4dFxuICApOiBQcm9taXNlPERvY3VtZW50SW5pdGlhbFByb3BzPiB7XG4gICAgY29uc3QgZW5oYW5jZXJzID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICAgID8gYXdhaXQgaW1wb3J0KFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1lbmhhbmNlLWFwcC1zZXJ2ZXIhJ1xuICAgICAgICApLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQoY3R4KSlcbiAgICAgIDogW11cblxuICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwOiBhbnkpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZW5oYW5jZXIgb2YgZW5oYW5jZXJzKSB7XG4gICAgICAgIEFwcCA9IGVuaGFuY2VyKEFwcClcbiAgICAgIH1cbiAgICAgIHJldHVybiAocHJvcHM6IGFueSkgPT4gPEFwcCB7Li4ucHJvcHN9IC8+XG4gICAgfVxuXG4gICAgY29uc3QgeyBodG1sLCBoZWFkIH0gPSBhd2FpdCBjdHgucmVuZGVyUGFnZSh7IGVuaGFuY2VBcHAgfSlcbiAgICBjb25zdCBzdHlsZXMgPSBbXG4gICAgICAuLi5mbHVzaCgpLFxuICAgICAgLi4uKHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgICAgID8gYXdhaXQgaW1wb3J0KFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9dW5zdGFibGUtZ2V0LXN0eWxlcy1zZXJ2ZXIhJ1xuICAgICAgICAgICkudGhlbigobW9kKSA9PiBtb2QuZGVmYXVsdChjdHgpKVxuICAgICAgICA6IFtdKSxcbiAgICBdXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJEb2N1bWVudDxQPihcbiAgICBEb2N1bWVudDogbmV3ICgpID0+IERvY3VtZW50PFA+LFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzICYgUFxuICApOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgX2RvY3VtZW50UHJvcHM6IHByb3BzLFxuICAgICAgICAgIC8vIEluIGRldiB3ZSBpbnZhbGlkYXRlIHRoZSBjYWNoZSBieSBhcHBlbmRpbmcgYSB0aW1lc3RhbXAgdG8gdGhlIHJlc291cmNlIFVSTC5cbiAgICAgICAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB0byBmaXggaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2lzc3Vlcy81ODYwXG4gICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgd29ya2Fyb3VuZCB3aGVuIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODc3MjYgaXMgZml4ZWQuXG4gICAgICAgICAgX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZzpcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnP3RzPScgKyBEYXRlLm5vdygpIDogJycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxEb2N1bWVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L0RvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh0bWwgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0Lkh0bWxIVE1MQXR0cmlidXRlczxIVE1MSHRtbEVsZW1lbnQ+LFxuICAgIEhUTUxIdG1sRWxlbWVudFxuICA+XG4+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluQW1wTW9kZSwgaHRtbFByb3BzIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWxcbiAgICAgICAgey4uLmh0bWxQcm9wc31cbiAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgIGFtcD17aW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICAgIGRhdGEtYW1wZGV2bW9kZT17XG4gICAgICAgICAgaW5BbXBNb2RlICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnJyA6IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZCBleHRlbmRzIENvbXBvbmVudDxcbiAgT3JpZ2luUHJvcHMgJlxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEhlYWRFbGVtZW50PixcbiAgICAgIEhUTUxIZWFkRWxlbWVudFxuICAgID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgZ2V0Q3NzTGlua3MoKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGZpbGVzIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID1cbiAgICAgIGZpbGVzICYmIGZpbGVzLmxlbmd0aCA/IGZpbGVzLmZpbHRlcigoZikgPT4gL1xcLmNzcyQvLnRlc3QoZikpIDogW11cblxuICAgIGNvbnN0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtgJHtmaWxlfS1wcmVsb2FkYH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBhcz1cInN0eWxlXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAvPixcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzXG4gIH1cblxuICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7IGR5bmFtaWNJbXBvcnRzLCBhc3NldFByZWZpeCB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkZWR1cGUoZHluYW1pY0ltcG9ydHMpXG4gICAgICAgIC5tYXAoKGJ1bmRsZTogYW55KSA9PiB7XG4gICAgICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW4gdGhlXG4gICAgICAgICAgLy8gZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZSBtb2Rlcm5cbiAgICAgICAgICAvLyB2YXJpYW50cyBvbmx5LlxuICAgICAgICAgIGlmICghYnVuZGxlLmZpbGUuZW5kc1dpdGgoZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KCcuanMnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cblxuICBnZXRQcmVsb2FkTWFpbkxpbmtzKCk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBmaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9XG4gICAgICBmaWxlcyAmJiBmaWxlcy5sZW5ndGhcbiAgICAgICAgPyBmaWxlcy5maWx0ZXIoKGZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW5cbiAgICAgICAgICAgIC8vIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlXG4gICAgICAgICAgICAvLyBtb2Rlcm4gdmFyaWFudHMgb25seS5cbiAgICAgICAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBbXVxuXG4gICAgcmV0dXJuICFwcmVsb2FkRmlsZXMubGVuZ3RoXG4gICAgICA/IG51bGxcbiAgICAgIDogcHJlbG9hZEZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaHlicmlkQW1wLFxuICAgICAgY2Fub25pY2FsQmFzZSxcbiAgICAgIF9fTkVYVF9EQVRBX18sXG4gICAgICBkYW5nZXJvdXNBc1BhdGgsXG4gICAgICBoZWFkVGFncyxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcbiAgICBjb25zdCB7IF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHsgcGFnZSwgYnVpbGRJZCB9ID0gX19ORVhUX0RBVEFfX1xuXG4gICAgbGV0IHsgaGVhZCB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScgJiYgIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC10aXRsZVwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfSlcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgbGV0IGhhc0FtcGh0bWxSZWwgPSBmYWxzZVxuICAgIGxldCBoYXNDYW5vbmljYWxSZWwgPSBmYWxzZVxuXG4gICAgLy8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuICAgIGhlYWQgPSBSZWFjdC5DaGlsZHJlbi5tYXAoaGVhZCB8fCBbXSwgKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoIWNoaWxkKSByZXR1cm4gY2hpbGRcbiAgICAgIGNvbnN0IHsgdHlwZSwgcHJvcHMgfSA9IGNoaWxkXG5cbiAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgbGV0IGJhZFByb3A6IHN0cmluZyA9ICcnXG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdtZXRhJyAmJiBwcm9wcy5uYW1lID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgYmFkUHJvcCA9ICduYW1lPVwidmlld3BvcnRcIidcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnY2Fub25pY2FsJykge1xuICAgICAgICAgIGhhc0Nhbm9uaWNhbFJlbCA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgIC8vIG9ubHkgYmxvY2sgaWZcbiAgICAgICAgICAvLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbiAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgIC8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAocHJvcHMuc3JjICYmIHByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0JykgPCAtMSkgfHxcbiAgICAgICAgICAgIChwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCAmJlxuICAgICAgICAgICAgICAoIXByb3BzLnR5cGUgfHwgcHJvcHMudHlwZSA9PT0gJ3RleHQvamF2YXNjcmlwdCcpKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYmFkUHJvcCA9ICc8c2NyaXB0J1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgICAgYmFkUHJvcCArPSBgICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJhZFByb3AgKz0gJy8+J1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYWRQcm9wKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2NvbmZsaWN0aW5nLWFtcC10YWdgXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2FtcGh0bWwnKSB7XG4gICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfSlcblxuICAgIC8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIGNvbnN0IGN1clN0eWxlczogUmVhY3QuUmVhY3RFbGVtZW50W10gPSBBcnJheS5pc0FycmF5KHN0eWxlcylcbiAgICAgID8gKHN0eWxlcyBhcyBSZWFjdC5SZWFjdEVsZW1lbnRbXSlcbiAgICAgIDogW11cbiAgICBpZiAoXG4gICAgICBpbkFtcE1vZGUgJiZcbiAgICAgIHN0eWxlcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pXG4gICAgKSB7XG4gICAgICBjb25zdCBoYXNTdHlsZXMgPSAoZWw6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT5cbiAgICAgICAgZWw/LnByb3BzPy5kYW5nZXJvdXNseVNldElubmVySFRNTD8uX19odG1sXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKSA9PiBoYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKSlcbiAgICAgICAgfSBlbHNlIGlmIChoYXNTdHlsZXMoY2hpbGQpKSB7XG4gICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcy5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtoZWFkfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJuZXh0LWhlYWQtY291bnRcIlxuICAgICAgICAgIGNvbnRlbnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuZ2V0Q3NzTGlua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgKVxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBwYWdlICE9PSAnL19lcnJvcicgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgICAgICAgYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoKX1cbiAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCAmJiAoXG4gICAgICAgICAgICAgIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAgICAgICA8bm9zY3JpcHQgaWQ9XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzdHlsZXMgfHwgbnVsbH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oaGVhZFRhZ3MgfHwgW10pKX1cbiAgICAgIDwvaGVhZD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWwgfSA9IHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wc1xuICAgIGlmIChpbkFtcE1vZGUpIHJldHVybiBBTVBfUkVOREVSX1RBUkdFVFxuICAgIHJldHVybiA8ZGl2IGlkPVwiX19uZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8T3JpZ2luUHJvcHM+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIC8vIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2FtdGhvci82NGIxMTRlNGE0ZjUzOTkxNWE5NWI5MWZmZDM0MGFjY1xuICBzdGF0aWMgc2FmYXJpTm9tb2R1bGVGaXggPVxuICAgICchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOydcblxuICBnZXREeW5hbWljQ2h1bmtzKCkge1xuICAgIGNvbnN0IHsgZHluYW1pY0ltcG9ydHMsIGFzc2V0UHJlZml4LCBmaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcCgoYnVuZGxlOiBhbnkpID0+IHtcbiAgICAgIGxldCBtb2Rlcm5Qcm9wcyA9IHt9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgICAgICBtb2Rlcm5Qcm9wcyA9IC9cXC5tb2R1bGVcXC5qcyQvLnRlc3QoYnVuZGxlLmZpbGUpXG4gICAgICAgICAgPyB7IHR5cGU6ICdtb2R1bGUnIH1cbiAgICAgICAgICA6IHsgbm9Nb2R1bGU6IHRydWUgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIS9cXC5qcyQvLnRlc3QoYnVuZGxlLmZpbGUpIHx8IGZpbGVzLmluY2x1ZGVzKGJ1bmRsZS5maWxlKSkgcmV0dXJuIG51bGxcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHsuLi5tb2Rlcm5Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0U2NyaXB0cygpIHtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4LCBmaWxlcywgbG93UHJpb3JpdHlGaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGNvbnN0IG5vcm1hbFNjcmlwdHMgPSBmaWxlcz8uZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSlcbiAgICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSBsb3dQcmlvcml0eUZpbGVzPy5maWx0ZXIoKGZpbGUpID0+XG4gICAgICBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIClcblxuICAgIHJldHVybiBbLi4ubm9ybWFsU2NyaXB0cywgLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoKGZpbGUpID0+IHtcbiAgICAgIGxldCBtb2Rlcm5Qcm9wcyA9IHt9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgICAgICBtb2Rlcm5Qcm9wcyA9IGZpbGUuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgey4uLm1vZGVyblByb3BzfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gICAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgcG9seWZpbGxGaWxlcyB9ID0gdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBwb2x5ZmlsbEZpbGVzXG4gICAgICAuZmlsdGVyKFxuICAgICAgICAocG9seWZpbGwpID0+XG4gICAgICAgICAgcG9seWZpbGwuZW5kc1dpdGgoJy5qcycpICYmICEvXFwubW9kdWxlXFwuanMkLy50ZXN0KHBvbHlmaWxsKVxuICAgICAgKVxuICAgICAgLm1hcCgocG9seWZpbGwpID0+IChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wczogRG9jdW1lbnRQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBfX05FWFRfREFUQV9fIH0gPSBkb2N1bWVudFByb3BzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKVxuICAgICAgcmV0dXJuIGh0bWxFc2NhcGVKc29uU3RyaW5nKGRhdGEpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9jaXJjdWxhci1zdHJ1Y3R1cmVgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGF0aWNNYXJrdXAsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGRldkZpbGVzLFxuICAgICAgX19ORVhUX0RBVEFfXyxcbiAgICAgIGJvZHlUYWdzLFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgIH0gPSB0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHNcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgY29uc3QgeyBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldkZpbGVzID0gW1xuICAgICAgICBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCxcbiAgICAgICAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCxcbiAgICAgICAgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0ssXG4gICAgICBdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge3N0YXRpY01hcmt1cCB8fCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKFxuICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2RldkZpbGVzXG4gICAgICAgICAgICA/IGRldkZpbGVzLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCAuLi4oYm9keVRhZ3MgfHwgW10pKX1cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYWdlLCBidWlsZElkIH0gPSBfX05FWFRfREFUQV9fXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlU2NyaXB0ID0gW1xuICAgICAgPHNjcmlwdFxuICAgICAgICBhc3luY1xuICAgICAgICBkYXRhLW5leHQtcGFnZT17cGFnZX1cbiAgICAgICAga2V5PXtwYWdlfVxuICAgICAgICBzcmM9e1xuICAgICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICBlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YCkgK1xuICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgfVxuICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgey4uLihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEID8geyBub01vZHVsZTogdHJ1ZSB9IDoge30pfVxuICAgICAgLz4sXG4gICAgICBwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEICYmIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgZGF0YS1uZXh0LXBhZ2U9e3BhZ2V9XG4gICAgICAgICAga2V5PXtgJHtwYWdlfS1tb2Rlcm5gfVxuICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgICBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoXG4gICAgICAgICAgICAgIGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzJHtnZXRQYWdlRmlsZShwYWdlKX1gKVxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgdHlwZT1cIm1vZHVsZVwiXG4gICAgICAgIC8+XG4gICAgICApLFxuICAgIF1cblxuICAgIGNvbnN0IGFwcFNjcmlwdCA9IFtcbiAgICAgIDxzY3JpcHRcbiAgICAgICAgYXN5bmNcbiAgICAgICAgZGF0YS1uZXh0LXBhZ2U9XCIvX2FwcFwiXG4gICAgICAgIHNyYz17XG4gICAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgIGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5qc2AgK1xuICAgICAgICAgIF9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmdcbiAgICAgICAgfVxuICAgICAgICBrZXk9XCJfYXBwXCJcbiAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgIHsuLi4ocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCA/IHsgbm9Nb2R1bGU6IHRydWUgfSA6IHt9KX1cbiAgICAgIC8+LFxuICAgICAgcHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCAmJiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luY1xuICAgICAgICAgIGRhdGEtbmV4dC1wYWdlPVwiL19hcHBcIlxuICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgICBgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAubW9kdWxlLmpzYCArXG4gICAgICAgICAgICBfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICAgIGtleT1cIl9hcHAtbW9kZXJuXCJcbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBjcm9zc09yaWdpbj17dGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmNyb3NzT3JpZ2lufVxuICAgICAgICAgIHR5cGU9XCJtb2R1bGVcIlxuICAgICAgICAvPlxuICAgICAgKSxcbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIGRldkZpbGVzXG4gICAgICAgICAgPyBkZXZGaWxlcy5tYXAoXG4gICAgICAgICAgICAgIChmaWxlOiBzdHJpbmcpID0+XG4gICAgICAgICAgICAgICAgIWZpbGUubWF0Y2goL1xcLmpzXFwubWFwLykgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXt0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuY3Jvc3NPcmlnaW59XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtzdGF0aWNNYXJrdXAgfHwgZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UoXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEICYmICFkaXNhYmxlUnVudGltZUpTID8gKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e3RoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5jcm9zc09yaWdpbn1cbiAgICAgICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCl9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBhcHBTY3JpcHR9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBwYWdlICE9PSAnL19lcnJvcicgJiYgcGFnZVNjcmlwdH1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgfHwgc3RhdGljTWFya3VwID8gbnVsbCA6IHRoaXMuZ2V0RHluYW1pY0NodW5rcygpfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyB8fCBzdGF0aWNNYXJrdXAgPyBudWxsIDogdGhpcy5nZXRTY3JpcHRzKCl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGJvZHlUYWdzIHx8IFtdKSl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoOiBzdHJpbmcsIGFzUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9YW1wPTFgXG59XG5cbmZ1bmN0aW9uIGdldFBhZ2VGaWxlKHBhZ2U6IHN0cmluZywgYnVpbGRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHN0YXJ0aW5nVXJsID0gcGFnZSA9PT0gJy8nID8gJy9pbmRleCcgOiBwYWdlXG4gIHJldHVybiBidWlsZElkID8gYCR7c3RhcnRpbmdVcmx9LiR7YnVpbGRJZH0uanNgIDogYCR7c3RhcnRpbmdVcmx9LmpzYFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGVzY2FwZS5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fZG9jdW1lbnQnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBEb2N1bWVudCwge1xyXG5cdEh0bWwsXHJcblx0SGVhZCxcclxuXHRNYWluLFxyXG5cdE5leHRTY3JpcHQsXHJcblx0RG9jdW1lbnRDb250ZXh0XHJcbn0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHg6IERvY3VtZW50Q29udGV4dCkge1xyXG5cdFx0Y29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xyXG5cdFx0Y29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxyXG5cdFx0XHRcdG9yaWdpbmFsUmVuZGVyUGFnZSh7XHJcblx0XHRcdFx0XHRlbmhhbmNlQXBwOiAoQXBwKSA9PiAocHJvcHMpID0+XHJcblx0XHRcdFx0XHRcdHNoZWV0LmNvbGxlY3RTdHlsZXMoPEFwcCB7Li4ucHJvcHN9IC8+KVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLmluaXRpYWxQcm9wcyxcclxuXHRcdFx0XHRzdHlsZXM6IChcclxuXHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdHtpbml0aWFsUHJvcHMuc3R5bGVzfVxyXG5cdFx0XHRcdFx0XHR7c2hlZXQuZ2V0U3R5bGVFbGVtZW50KCl9XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHQpXHJcblx0XHRcdH07XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRzaGVldC5zZWFsKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8SHRtbD5cclxuXHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdDxtZXRhXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9XCJUaGUgTmV4dCBnZW5lcmF0aW9uIG9mIGEgbmV3cyBmZWVkXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8bGlua1xyXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmRpc3BsYXk9c3dhcFwiXHJcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLnN0eWxlc31cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHRcdDxib2R5PlxyXG5cdFx0XHRcdFx0PE1haW4gLz5cclxuXHRcdFx0XHRcdDxOZXh0U2NyaXB0IC8+XHJcblx0XHRcdFx0PC9ib2R5PlxyXG5cdFx0XHQ8L0h0bWw+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==