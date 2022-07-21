/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Gotham Bold.otf */ \"./src/font/Gotham Bold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/restaurant-interior.jpg */ \"./src/images/restaurant-interior.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n    font-family: 'GothamBold';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\nh1,\\r\\nbody{\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n    background-size: cover;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    font-family: GothamBold;\\r\\n    height: 100vh;\\r\\n}\\r\\n\\r\\nnav{\\r\\n    margin-top: 10px;\\r\\n    justify-self: center;\\r\\n    align-self: center;\\r\\n}\\r\\n\\r\\n#content{\\r\\n    flex: 0;\\r\\n    color: #eee;\\r\\n    background-color: rgba(0, 0, 0, 0.568);\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n    border-radius: 10px;;\\r\\n}\\r\\n\\r\\n.headline{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 10px;\\r\\n    width: 750px;\\r\\n    border-radius: 25px;\\r\\n    padding-top: 50px;\\r\\n    padding-bottom: 50px;\\r\\n}\\r\\n\\r\\n#home-headline{\\r\\n    background-color: rgba(0, 0, 0, 0.568);\\r\\n}\\r\\n\\r\\n.tab-link{\\r\\n    font-size: 25px;\\r\\n    border: solid;\\r\\n    border-top-left-radius: 10px;\\r\\n    border-top-right-radius: 10px;\\r\\n    border-bottom: none;\\r\\n}\\r\\n\\r\\n.info{\\r\\n    flex: 1;\\r\\n    max-width: 750px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    \\r\\n}\\r\\n\\r\\n#pizza-logo,\\r\\n.item-picture{\\r\\n    max-width: 50px;\\r\\n    max-height: 50px;\\r\\n}\\r\\n\\r\\n.menu-items{\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, 1fr);\\r\\n    gap: 50px;\\r\\n    padding: 50px;\\r\\n    padding-top: 0px;\\r\\n}\\r\\n\\r\\n.item{\\r\\n    background-color: rgba(0, 0, 0, 0.671);\\r\\n    border-radius: 15px;\\r\\n    padding: 15px;\\r\\n    min-height: 250px;\\r\\n    max-width: 400px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.home-block{\\r\\n    background-color: rgba(0, 0, 0, 0.671);\\r\\n    padding: 25px;\\r\\n}\\r\\n\\r\\n.contact-block{\\r\\n    background-color: rgba(0, 0, 0, 0.671);\\r\\n    border: solid;\\r\\n    margin-top: 50px;\\r\\n    margin-bottom: 25px;\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n#about-section,\\r\\n#hours-section{\\r\\n    border-bottom: none;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.employees-block{\\r\\n    text-align: start;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-between;\\r\\n    align-items: space-between;\\r\\n    gap: 25px;\\r\\n}\\r\\n\\r\\n.employees-block h2{\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.employee{\\r\\n    background-color: rgba(0, 0, 0, 0.671);\\r\\n    border-radius: 15px;\\r\\n    padding: 15px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 15px;\\r\\n}\\r\\n\\r\\n.employee img{\\r\\n    max-width: 100px;\\r\\n    max-height: 100px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/user.png */ \"./src/images/user.png\");\n\n\n\nconst employees = [\n    {\n        imageSrc : _images_user_png__WEBPACK_IMPORTED_MODULE_1__,\n        name : \"De'Shawn Maynard\",\n        role : \"CEO\",\n        phone : \"555-555-5555\",\n        email : \"email@email.com\"\n    },\n    {\n        imageSrc : _images_user_png__WEBPACK_IMPORTED_MODULE_1__,\n        name : \"Barbara Jelensky\",\n        role : \"Manager\",\n        phone : \"555-555-5555\",\n        email : \"email@email.com\"\n    },\n    {\n        imageSrc : _images_user_png__WEBPACK_IMPORTED_MODULE_1__,\n        name : \"Donny James\",\n        role : \"Waiter\",\n        phone : \"555-555-5555\",\n        email : \"email@email.com\"\n    },\n]\n\n\nconst renderContactPage = () => {\n    // main content of page to append to\n    const content = document.getElementById('content'); \n\n    //wrapper for js injected ata\n    // const wrapper = document.createElement('div');\n    // wrapper.classList = \"wrapper\";\n    // content.appendChild(wrapper);\n\n    const headline = document.createElement('div');\n    headline.classList =\"headline\"\n    content.appendChild(headline);\n\n    const headlineHeading = document.createElement('h1');\n    headlineHeading.textContent = \"Contact Us\";\n    headline.appendChild(headlineHeading);\n\n\n    const employeesBlock = document.createElement('div');\n    employeesBlock.classList = \"employees-block\";\n    // const employeeHeading = document.createElement('h2');\n    // employeeHeading.textContent = \"Employees\";\n    // employeesBlock.appendChild(employeeHeading);\n\n    employees.forEach( (employee) => {\n        console.log(employee);\n        const employeeContainer = document.createElement('div')\n        employeeContainer.classList = \"employee\";\n\n        const employeePicture = new Image();\n        employeePicture.src = employee.imageSrc;\n        employeePicture.classList = \"employee-picture\";\n        const employeeInfo = document.createElement('div');\n        const employeNameAndRole = document.createElement('h2');\n        employeNameAndRole.textContent = `${employee.name}, ${employee.role}`;\n        const employeePhone = document.createElement('p');\n        employeePhone.textContent = employee.phone;\n        const employeeEmail = document.createElement('p');\n        employeeEmail.textContent = employee.email;\n\n        employeeInfo.appendChild(employeNameAndRole);\n        employeeInfo.appendChild(employeePhone);\n        employeeInfo.appendChild(employeeEmail);\n\n        employeeContainer.appendChild(employeePicture);\n        employeeContainer.appendChild(employeeInfo);\n        \n        employeesBlock.appendChild(employeeContainer);\n    });\n\n    content.appendChild(employeesBlock);\n\n\n\n    const contactBlock = document.createElement('div');\n    contactBlock.classList = \"contact-block\";\n    const phone = document.createElement('p');\n    phone.textContent = \"Order NOW: 1-800-DAMN-GOOD-FOOD\";\n    contactBlock.appendChild(phone);\n    content.appendChild(contactBlock);\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_fork_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/fork.png */ \"./src/images/fork.png\");\n/* harmony import */ var _images_knife_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/knife.png */ \"./src/images/knife.png\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\nconst renderHomePage = () => {\r\n    \r\n    //main content of page to append to\r\n    const content = document.getElementById('content'); \r\n\r\n    //wrapper for js injected data\r\n    // const wrapper = document.createElement('div');\r\n    // wrapper.classList = \"wrapper\";\r\n    // content.appendChild(wrapper);\r\n\r\n    const headline = document.createElement('div');\r\n    headline.classList =\"headline\"\r\n    content.appendChild(headline);\r\n\r\n    const forkLogo = new Image();\r\n    forkLogo.src = _images_fork_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    forkLogo.id = \"pizza-logo\"\r\n    const knifeLogo = new Image();\r\n    knifeLogo.src = _images_knife_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    knifeLogo.id = \"pizza-logo\"\r\n    const headlineHeading = document.createElement('h1');\r\n    headlineHeading.textContent = \"D's Krazy Food\";\r\n    headline.id = \"home-headline\";\r\n    headline.appendChild(forkLogo);\r\n    headline.appendChild(headlineHeading);\r\n    headline.appendChild(knifeLogo);\r\n\r\n    const info = document.createElement('div');\r\n    info.classList = \"info\";\r\n    content.appendChild(info);\r\n\r\n    //about us section\r\n    const aboutBlock = document.createElement('div');\r\n    aboutBlock.classList =\"home-block\";\r\n    aboutBlock.id = \"about-section\"\r\n    const aboutHeading = document.createElement('h2');\r\n    const aboutText = document.createElement('p')\r\n    aboutHeading.textContent = \"About Us\"\r\n    aboutText.textContent = \"Founded by a true foodie, we set across the globe to find the tastiest and most authentic recipes. From Newport News to Northern Virginia, we have set out to find the most unique and cultural dishes to share. Whether you are new on your foodie journey, or a seasoned traveler, we have something for you!\";\r\n    aboutBlock.appendChild(aboutHeading);\r\n    aboutBlock.appendChild(aboutText);\r\n\r\n    //restaraunt hours section\r\n    const hoursBlock = document.createElement('div');\r\n    hoursBlock.classList =\"home-block\";\r\n    hoursBlock.id = \"hours-section\"\r\n    const hoursHeading = document.createElement('h2');\r\n    const hoursText = document.createElement('p');\r\n    hoursHeading.textContent = \"Hours\"\r\n    hoursText.innerHTML = \"Monday: 9am - 9pm <br> Tuesday: 9am - 9pm <br> Wednesday: 9am - 9pm <br> Thursday: 9am - 9pm <br> Friday: 9am - 9pm <br> \";\r\n    hoursBlock.appendChild(hoursHeading);\r\n    hoursBlock.appendChild(hoursText);\r\n\r\n    //locaton section\r\n    const locationBlock = document.createElement('div');\r\n    locationBlock.classList =\"home-block\";\r\n    locationBlock.id = \"location-section\";\r\n    const locationHeading = document.createElement('h2');\r\n    const locationText = document.createElement('p');\r\n    locationHeading.textContent = \"Location\"\r\n    locationText.innerHTML = \"1000 Good Food Avenue, Arlington, Virginia\";\r\n    locationBlock.appendChild(locationHeading);\r\n    locationBlock.appendChild(locationText);\r\n\r\n    info.appendChild(aboutBlock);\r\n    info.appendChild(hoursBlock);\r\n    info.appendChild(locationBlock);\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomePage);\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\r\nconst clearContent = () => {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\";\r\n}\r\n\r\n//module pattern to attach event listeners to the appropriate buttons\r\nconst attachEventListeners = (() => {\r\n    \r\n    const homeButton = document.getElementById(\"home-button\");\r\n    homeButton.addEventListener('click', () => {\r\n        clearContent();\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n\r\n    console.log(homeButton);\r\n\r\n    const menuButton = document.getElementById(\"menu-button\");\r\n    menuButton.addEventListener('click', () => {\r\n        clearContent();\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n\r\n    const contactButton = document.getElementById(\"contact-button\");\r\n    contactButton.addEventListener('click', () => {\r\n        clearContent();\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n\r\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza.png */ \"./src/images/pizza.png\");\n/* harmony import */ var _images_asian_food_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/asian-food.png */ \"./src/images/asian-food.png\");\n/* harmony import */ var _images_cake_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cake.png */ \"./src/images/cake.png\");\n/* harmony import */ var _images_cooking_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/cooking.png */ \"./src/images/cooking.png\");\n/* harmony import */ var _images_fried_rice_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/fried-rice.png */ \"./src/images/fried-rice.png\");\n/* harmony import */ var _images_hotdog_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/hotdog.png */ \"./src/images/hotdog.png\");\n/* harmony import */ var _images_kebab_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/kebab.png */ \"./src/images/kebab.png\");\n/* harmony import */ var _images_ramen_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/ramen.png */ \"./src/images/ramen.png\");\n/* harmony import */ var _images_restaurant_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/restaurant.png */ \"./src/images/restaurant.png\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n\n\n\nconst renderMenuPage = () => {\n    // main content of page to append to\n    const content = document.getElementById('content'); \n\n    // //wrapper for js injected ata\n    // const wrapper = document.createElement('div');\n    // wrapper.classList = \"wrapper\";\n    // content.appendChild(wrapper);\n\n    const headline = document.createElement('div');\n    headline.classList =\"headline\"\n    content.appendChild(headline);\n\n    const headlineHeading = document.createElement('h1');\n    headlineHeading.textContent = \"Menu\";\n    headline.appendChild(headlineHeading);\n\n    const menuItems = document.createElement('div');\n    menuItems.classList = \"menu-items\";\n    content.appendChild(menuItems);\n\n\n    var text = [\n        {\n            heading: \"Steak\", imageSrc: _images_restaurant_png__WEBPACK_IMPORTED_MODULE_8__, description: \"A steak, also sometimes called \\\"beef steak\\\", is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though it can also be pan-fried.\" \n        },\n        {\n            heading: \"Fish\", imageSrc: _images_asian_food_png__WEBPACK_IMPORTED_MODULE_1__, description: \"Fish are aquatic, craniate, gill-bearing animals that lack limbs with digits.\"\n        }, \n        {\n            heading: \"Cake\", imageSrc: _images_cake_png__WEBPACK_IMPORTED_MODULE_2__, description: \"Cake is a flour confection made from flour, sugar, and other ingredients, and is usually baked.\" \n        }, \n        {\n            heading: \"Hot Skillet\", imageSrc: _images_cooking_png__WEBPACK_IMPORTED_MODULE_3__, description: \"One-skillet meals are the go-to when you cannot decide. Mix of meat, cheese, veggies, and rice.\" \n        },\n        {\n            heading: \"Fried Rice\", imageSrc: _images_fried_rice_png__WEBPACK_IMPORTED_MODULE_4__, description: \"Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat.\" \n        },\n        {\n            heading: \"Glizzy Dog\", imageSrc: _images_hotdog_png__WEBPACK_IMPORTED_MODULE_5__, description: \"A hot dog is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. \" \n        }, \n        {\n            heading: \"Gyro\", imageSrc: _images_kebab_png__WEBPACK_IMPORTED_MODULE_6__, description: \"Gyros—in some regions, chiefly North America, anglicized as a gyro —is a food item of Greek origin made from meat cooked on a vertical rotisserie and served wrapped or stuffed in pita bread, along with ingredients such as tomato, onion, fried potatoes, and tzatziki.\" \n        }, \n        {\n            heading: \"Ramen\", imageSrc: _images_ramen_png__WEBPACK_IMPORTED_MODULE_7__, description: \"Ramen is a Japanese noodle dish. It consists of Chinese-style alkaline wheat noodles served in a meat-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork, nori, menma, and scallions.\" \n        },\n        {\n            heading: \"'Za\", imageSrc: _images_pizza_png__WEBPACK_IMPORTED_MODULE_0__, description: \"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.\" \n        },\n    ];\n\n    text.forEach( (element) => {\n        const itemContainer = document.createElement('div')\n        itemContainer.classList = \"item\";\n\n        const itemHeading = document.createElement('h2');\n        itemHeading.textContent = element.heading;\n        const itemPicture = new Image();\n        itemPicture.src = element.imageSrc;\n        itemPicture.classList = \"item-picture\";\n        const itemDescription = document.createElement('p');\n        itemDescription.textContent = element.description;\n        const orderButton = document.createElement('button');\n        orderButton.textContent = \"Add to Order\";\n\n        \n        itemContainer.appendChild(itemPicture);\n        itemContainer.appendChild(itemHeading);\n        itemContainer.appendChild(itemDescription);\n        itemContainer.appendChild(orderButton);\n\n        menuItems.appendChild(itemContainer);\n    });\n    \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/font/Gotham Bold.otf":
/*!**********************************!*\
  !*** ./src/font/Gotham Bold.otf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19cbd08d9da163ba87d6.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/font/Gotham_Bold.otf?");

/***/ }),

/***/ "./src/images/asian-food.png":
/*!***********************************!*\
  !*** ./src/images/asian-food.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"891a734d0a569d63b527.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/asian-food.png?");

/***/ }),

/***/ "./src/images/cake.png":
/*!*****************************!*\
  !*** ./src/images/cake.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8bb742d7d6aeccdb7105.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cake.png?");

/***/ }),

/***/ "./src/images/cooking.png":
/*!********************************!*\
  !*** ./src/images/cooking.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7732257df4b084e50005.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cooking.png?");

/***/ }),

/***/ "./src/images/fork.png":
/*!*****************************!*\
  !*** ./src/images/fork.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7511bec6b8f8f613ed48.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/fork.png?");

/***/ }),

/***/ "./src/images/fried-rice.png":
/*!***********************************!*\
  !*** ./src/images/fried-rice.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"435a49d78dc5cd603f3f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/fried-rice.png?");

/***/ }),

/***/ "./src/images/hotdog.png":
/*!*******************************!*\
  !*** ./src/images/hotdog.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ff1754bbea56b96f5e8c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hotdog.png?");

/***/ }),

/***/ "./src/images/kebab.png":
/*!******************************!*\
  !*** ./src/images/kebab.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"81a995eb959ca97c6b91.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/kebab.png?");

/***/ }),

/***/ "./src/images/knife.png":
/*!******************************!*\
  !*** ./src/images/knife.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6fa4f229307d82dea0ef.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/knife.png?");

/***/ }),

/***/ "./src/images/pizza.png":
/*!******************************!*\
  !*** ./src/images/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf0b894367fb3d1e88b1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pizza.png?");

/***/ }),

/***/ "./src/images/ramen.png":
/*!******************************!*\
  !*** ./src/images/ramen.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da4424282860c36b16c3.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramen.png?");

/***/ }),

/***/ "./src/images/restaurant-interior.jpg":
/*!********************************************!*\
  !*** ./src/images/restaurant-interior.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da3fd7f1c5875d127e1c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant-interior.jpg?");

/***/ }),

/***/ "./src/images/restaurant.png":
/*!***********************************!*\
  !*** ./src/images/restaurant.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31589fb23eee5f82f250.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant.png?");

/***/ }),

/***/ "./src/images/user.png":
/*!*****************************!*\
  !*** ./src/images/user.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a650f7e85053615dedc2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/user.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;