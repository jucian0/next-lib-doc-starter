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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/codeblock/index.jsx":
/*!****************************************!*\
  !*** ./components/codeblock/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodeBlock; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ \"react-code-blocks\");\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/barbosa/javascript/nextjs-lib-docs-starter/components/codeblock/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/no-array-index-key */\n\n/* eslint-disable react/prop-types */\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\nfunction CodeBlock({\n  children,\n  className\n}) {\n  const language = className.replace(/language-/, '');\n  return __jsx(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__[\"CopyBlock\"], {\n    language: language,\n    text: children.trim(),\n    codeBlock: true,\n    theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__[\"dracula\"],\n    showLineNumbers: true,\n    wrapLines: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 6\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvZGVibG9jay9pbmRleC5qc3g/ZmYyNyJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImxhbmd1YWdlIiwicmVwbGFjZSIsInRyaW0iLCJkcmFjdWxhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxTQUFULENBQW1CO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFuQixFQUEwQztBQUN0RCxRQUFNQyxRQUFRLEdBQUdELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixXQUFsQixFQUErQixFQUEvQixDQUFqQjtBQUVBLFNBQ0UsTUFBQywyREFBRDtBQUNFLFlBQVEsRUFBRUQsUUFEWjtBQUVFLFFBQUksRUFBRUYsUUFBUSxDQUFDSSxJQUFULEVBRlI7QUFHRSxhQUFTLE1BSFg7QUFJRSxTQUFLLEVBQUVDLHlEQUpUO0FBS0UsbUJBQWUsTUFMakI7QUFNRSxhQUFTLE1BTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBVUYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvZGVibG9jay9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvcHlCbG9jaywgZHJhY3VsYSB9IGZyb20gXCJyZWFjdC1jb2RlLWJsb2Nrc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVCbG9jayh7IGNoaWxkcmVuLCBjbGFzc05hbWV9KXtcbiAgIGNvbnN0IGxhbmd1YWdlID0gY2xhc3NOYW1lLnJlcGxhY2UoL2xhbmd1YWdlLS8sICcnKVxuXG4gICByZXR1cm4gKFxuICAgICA8Q29weUJsb2NrXG4gICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgIHRleHQ9e2NoaWxkcmVuLnRyaW0oKX1cbiAgICAgICBjb2RlQmxvY2tcbiAgICAgICB0aGVtZT17ZHJhY3VsYX1cbiAgICAgICBzaG93TGluZU51bWJlcnNcbiAgICAgICB3cmFwTGluZXNcbiAgICAgLz5cbiAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/codeblock/index.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: ThemeContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ThemeContext\", function() { return ThemeContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_MDXProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/MDXProvider */ \"./providers/MDXProvider.jsx\");\n/* harmony import */ var _providers_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/theme */ \"./providers/theme.js\");\nvar _jsxFileName = \"/home/barbosa/javascript/nextjs-lib-docs-starter/pages/_app.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n/* eslint-disable react/prop-types */\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\n\nconst ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  Component,\n  pageProps\n}) => {\n  const {\n    0: theme,\n    1: setTheme\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  return __jsx(ThemeContext.Provider, {\n    value: {\n      theme,\n      setTheme: () => setTheme(!theme)\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: theme ? _providers_theme__WEBPACK_IMPORTED_MODULE_3__[\"lightTheme\"] : _providers_theme__WEBPACK_IMPORTED_MODULE_3__[\"darkTheme\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(_providers_MDXProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }))), __jsx(_providers_theme__WEBPACK_IMPORTED_MODULE_3__[\"GlobalStyle\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  })));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD82MGQzIl0sIm5hbWVzIjpbIlRoZW1lQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInNldFRoZW1lIiwidXNlU3RhdGUiLCJsaWdodFRoZW1lIiwiZGFya1RoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBR0MsMkRBQWEsQ0FBQyxFQUFELENBQWxDO0FBRVEsZ0VBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFFM0MsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFFLElBQUYsQ0FBbEM7QUFFQSxTQUNFLE1BQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsU0FBSyxFQUFFO0FBQUNGLFdBQUQ7QUFBUUMsY0FBUSxFQUFDLE1BQUlBLFFBQVEsQ0FBQyxDQUFDRCxLQUFGO0FBQTdCLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFQSxLQUFLLEdBQUVHLDJEQUFGLEdBQWNDLDBEQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVMLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsRUFJRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLENBREY7QUFVRCxDQWREIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBNRFhQcm92aWRlciBmcm9tICcuLi9wcm92aWRlcnMvTURYUHJvdmlkZXInXG5pbXBvcnQgeyBsaWdodFRoZW1lLCBHbG9iYWxTdHlsZSwgZGFya1RoZW1lIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3RoZW1lJ1xuXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcblxuZXhwb3J0IGRlZmF1bHQgKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoIHRydWUpXG5cbiAgcmV0dXJuKFxuICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t0aGVtZSwgc2V0VGhlbWU6KCk9PnNldFRoZW1lKCF0aGVtZSl9fT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZT8gbGlnaHRUaGVtZTogZGFya1RoZW1lfT5cbiAgICAgICAgPE1EWFByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9NRFhQcm92aWRlcj5cbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./providers/MDXProvider.jsx":
/*!***********************************!*\
  !*** ./providers/MDXProvider.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_codeblock_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/codeblock/index */ \"./components/codeblock/index.jsx\");\nvar _jsxFileName = \"/home/barbosa/javascript/nextjs-lib-docs-starter/providers/MDXProvider.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\nconst mdComponents = {\n  code: _components_codeblock_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  children\n}) => __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"MDXProvider\"], {\n  components: mdComponents,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }\n}, children));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvTURYUHJvdmlkZXIuanN4PzRhOTciXSwibmFtZXMiOlsibWRDb21wb25lbnRzIiwiY29kZSIsIkNvZGVCbG9jayIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1BLFlBQVksR0FBRztBQUNuQkMsTUFBSSxFQUFDQyxtRUFBU0E7QUFESyxDQUFyQjtBQUllLGdFQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNiLE1BQUMseURBQUQ7QUFBYSxZQUFVLEVBQUVILFlBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBd0NHLFFBQXhDLENBREYiLCJmaWxlIjoiLi9wcm92aWRlcnMvTURYUHJvdmlkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9jb2RlYmxvY2svaW5kZXhcIlxuXG5cblxuY29uc3QgbWRDb21wb25lbnRzID0ge1xuICBjb2RlOkNvZGVCbG9ja1xufVxuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxNRFhQcm92aWRlciBjb21wb25lbnRzPXttZENvbXBvbmVudHN9PntjaGlsZHJlbn08L01EWFByb3ZpZGVyPlxuKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./providers/MDXProvider.jsx\n");

/***/ }),

/***/ "./providers/theme.js":
/*!****************************!*\
  !*** ./providers/theme.js ***!
  \****************************/
/*! exports provided: lightTheme, darkTheme, GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightTheme\", function() { return lightTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkTheme\", function() { return darkTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/prefer-default-export */\n\nconst lightTheme = {\n  colors: {\n    primary: \"#5bc0be\",\n    secondary: \"#3a506b\",\n    dark: \"#0b132b\",\n    border: \"#edf2f4\",\n    red: \"#e71d36\",\n    background: \"#FFFFFF\",\n    textColor: \"#3a506b\"\n  }\n};\nconst darkTheme = {\n  colors: {\n    primary: \"#5bc0be\",\n    secondary: \"#3a506b\",\n    dark: \"#0b132b\",\n    border: \"#1b262c\",\n    red: \"#e71d36\",\n    background: \"#0b132b\",\n    textColor: \"#edf2f4\"\n  }\n};\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n\n   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');\n   *{\n      margin:0;\n      font-size:16px;\n      font-family: 'Roboto', sans-serif;\n      box-sizing: border-box;\n      color:${({\n  theme\n}) => theme.colors.textColor};\n   }\n\n\n   html, body {\n      width: 100%;\n      height: 100%;\n      background-color:${({\n  theme\n}) => theme.colors.background};\n   }\n\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvdGhlbWUuanM/YjczNSJdLCJuYW1lcyI6WyJsaWdodFRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImRhcmsiLCJib3JkZXIiLCJyZWQiLCJiYWNrZ3JvdW5kIiwidGV4dENvbG9yIiwiZGFya1RoZW1lIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInRoZW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUEsVUFBVSxHQUFHO0FBQ3ZCQyxRQUFNLEVBQUM7QUFDSkMsV0FBTyxFQUFFLFNBREw7QUFFSkMsYUFBUyxFQUFFLFNBRlA7QUFHSkMsUUFBSSxFQUFDLFNBSEQ7QUFJSkMsVUFBTSxFQUFDLFNBSkg7QUFLSkMsT0FBRyxFQUFDLFNBTEE7QUFNSkMsY0FBVSxFQUFDLFNBTlA7QUFPSkMsYUFBUyxFQUFDO0FBUE47QUFEZ0IsQ0FBbkI7QUFZQSxNQUFNQyxTQUFTLEdBQUc7QUFDdEJSLFFBQU0sRUFBQztBQUNKQyxXQUFPLEVBQUUsU0FETDtBQUVKQyxhQUFTLEVBQUUsU0FGUDtBQUdKQyxRQUFJLEVBQUMsU0FIRDtBQUlKQyxVQUFNLEVBQUMsU0FKSDtBQUtKQyxPQUFHLEVBQUMsU0FMQTtBQU1KQyxjQUFVLEVBQUMsU0FOUDtBQU9KQyxhQUFTLEVBQUU7QUFQUDtBQURlLENBQWxCO0FBWUEsTUFBTUUsV0FBVyxHQUFHQyxtRUFBa0I7Ozs7Ozs7O2NBUS9CLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVlBLEtBQUssQ0FBQ1gsTUFBTixDQUFhTyxTQUFVOzs7Ozs7O3lCQU94QixDQUFDO0FBQUNJO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNYLE1BQU4sQ0FBYU0sVUFBVzs7O0NBZnREIiwiZmlsZSI6Ii4vcHJvdmlkZXJzL3RoZW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBsaWdodFRoZW1lID0ge1xuICAgY29sb3JzOntcbiAgICAgIHByaW1hcnk6IFwiIzViYzBiZVwiLFxuICAgICAgc2Vjb25kYXJ5OiBcIiMzYTUwNmJcIixcbiAgICAgIGRhcms6XCIjMGIxMzJiXCIsXG4gICAgICBib3JkZXI6XCIjZWRmMmY0XCIsXG4gICAgICByZWQ6XCIjZTcxZDM2XCIsXG4gICAgICBiYWNrZ3JvdW5kOlwiI0ZGRkZGRlwiLFxuICAgICAgdGV4dENvbG9yOlwiIzNhNTA2YlwiXG4gICB9XG59XG5cbmV4cG9ydCBjb25zdCBkYXJrVGhlbWUgPSB7XG4gICBjb2xvcnM6e1xuICAgICAgcHJpbWFyeTogXCIjNWJjMGJlXCIsXG4gICAgICBzZWNvbmRhcnk6IFwiIzNhNTA2YlwiLFxuICAgICAgZGFyazpcIiMwYjEzMmJcIixcbiAgICAgIGJvcmRlcjpcIiMxYjI2MmNcIixcbiAgICAgIHJlZDpcIiNlNzFkMzZcIixcbiAgICAgIGJhY2tncm91bmQ6XCIjMGIxMzJiXCIsXG4gICAgICB0ZXh0Q29sb3I6IFwiI2VkZjJmNFwiXG4gICB9XG59XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuXG4gICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG4gICAqe1xuICAgICAgbWFyZ2luOjA7XG4gICAgICBmb250LXNpemU6MTZweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICAgfVxuXG5cbiAgIGh0bWwsIGJvZHkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHt0aGVtZX0pPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgfVxuXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./providers/theme.js\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mdx-js/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCI/M2UxMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWR4LWpzL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mdx-js/react\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-code-blocks":
/*!************************************!*\
  !*** external "react-code-blocks" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-code-blocks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb2RlLWJsb2Nrc1wiP2Q1ZGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtY29kZS1ibG9ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb2RlLWJsb2Nrc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-code-blocks\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });