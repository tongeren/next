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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./shared/Layout.js + 1 modules
var Layout = __webpack_require__(2);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./shared/PostLink.js




var PostLink_postLink = function postLink(_ref) {
  var post = _ref.post;
  return external_react_default.a.createElement("li", {
    className: "jsx-3950785544"
  }, external_react_default.a.createElement(link_default.a, {
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title)
  }, external_react_default.a.createElement("a", {
    className: "jsx-3950785544"
  }, post.title)), external_react_default.a.createElement(style_default.a, {
    styleId: "3950785544",
    css: ["li.jsx-3950785544{list-style:none;margin:5px 0;}", "a.jsx-3950785544{-webkit-text-decoration:none;text-decoration:none;color:blue;font-family:\"Arial\";}", "a.jsx-3950785544:hover{opacity:0.6;}"]
  }));
};

/* harmony default export */ var PostLink = (PostLink_postLink);
// CONCATENATED MODULE: ./pages/index.js





var getPosts = function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement("h1", {
    className: "jsx-2987328901"
  }, "My Blog"), external_react_default.a.createElement("ul", {
    className: "jsx-2987328901"
  }, getPosts().map(function (post) {
    return external_react_default.a.createElement(PostLink, {
      key: post.id,
      post: post
    });
  })), external_react_default.a.createElement(style_default.a, {
    styleId: "2987328901",
    css: ["h1.jsx-2987328901,a.jsx-2987328901{font-family:\"Arial\";}", "ul.jsx-2987328901{padding:0;}", "li.jsx-2987328901{list-style:none;margin:5px 0;}", "a.jsx-2987328901{-webkit-text-decoration:none;text-decoration:none;color:blue;}", "a.jsx-2987328901:hover{opacity:0.6;}"]
  }));
});

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./shared/Header.js


var linkStyle = {
  marginRight: 15
};

var Header_header = function header() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    style: linkStyle
  }, "Home")), external_react_default.a.createElement(link_default.a, {
    href: "/about"
  }, external_react_default.a.createElement("a", {
    style: linkStyle
  }, "About")));
};

/* harmony default export */ var Header = (Header_header);
// CONCATENATED MODULE: ./shared/Layout.js


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout_layout = function layout(props) {
  return external_react_default.a.createElement("div", {
    style: layoutStyle
  }, external_react_default.a.createElement(Header, null), props.children);
};

/* harmony default export */ var Layout = __webpack_exports__["a"] = (Layout_layout);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ })

/******/ });