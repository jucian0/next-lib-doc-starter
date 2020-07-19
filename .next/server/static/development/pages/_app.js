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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodeBlock; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ \"react-code-blocks\");\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/codeblock/styles.js\");\nvar _jsxFileName = \"/home/barbosa/javascript/nextjs-lib-docs-starter/components/codeblock/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/no-array-index-key */\n\n/* eslint-disable react/prop-types */\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\nfunction CodeBlock({\n  children,\n  className\n}) {\n  const language = className.replace(/language-/, '');\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 6\n    }\n  }, __jsx(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__[\"CopyBlock\"], {\n    className: \"code-block\",\n    language: language,\n    text: children.trim(),\n    codeBlock: true,\n    theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__[\"dracula\"],\n    showLineNumbers: true,\n    wrapLines: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 8\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvZGVibG9jay9pbmRleC5qc3g/ZmYyNyJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImxhbmd1YWdlIiwicmVwbGFjZSIsInRyaW0iLCJkcmFjdWxhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxTQUFULENBQW1CO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFuQixFQUEwQztBQUN0RCxRQUFNQyxRQUFRLEdBQUdELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixXQUFsQixFQUErQixFQUEvQixDQUFqQjtBQUVBLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsWUFBUSxFQUFFRCxRQUZaO0FBR0UsUUFBSSxFQUFFRixRQUFRLENBQUNJLElBQVQsRUFIUjtBQUlFLGFBQVMsTUFKWDtBQUtFLFNBQUssRUFBRUMseURBTFQ7QUFNRSxtQkFBZSxNQU5qQjtBQU9FLGFBQVMsTUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQWFGIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb2RlYmxvY2svaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb3B5QmxvY2ssIGRyYWN1bGEgfSBmcm9tIFwicmVhY3QtY29kZS1ibG9ja3NcIjtcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICcuL3N0eWxlcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlQmxvY2soeyBjaGlsZHJlbiwgY2xhc3NOYW1lfSl7XG4gICBjb25zdCBsYW5ndWFnZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9sYW5ndWFnZS0vLCAnJylcblxuICAgcmV0dXJuIChcbiAgICAgPENvbnRhaW5lcj5cbiAgICAgICA8Q29weUJsb2NrXG4gICAgICAgICBjbGFzc05hbWU9XCJjb2RlLWJsb2NrXCJcbiAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cbiAgICAgICAgIHRleHQ9e2NoaWxkcmVuLnRyaW0oKX1cbiAgICAgICAgIGNvZGVCbG9ja1xuICAgICAgICAgdGhlbWU9e2RyYWN1bGF9XG4gICAgICAgICBzaG93TGluZU51bWJlcnNcbiAgICAgICAgIHdyYXBMaW5lc1xuICAgICAgIC8+XG4gICAgIDwvQ29udGFpbmVyPlxuICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/codeblock/index.jsx\n");

/***/ }),

/***/ "./components/codeblock/styles.js":
/*!****************************************!*\
  !*** ./components/codeblock/styles.js ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/prefer-default-export */\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"alfrsk-0\"\n})([\"border:0.025rem solid \", \";padding:.15rem;margin:1rem 0;border-radius:.25rem;background-color:transparent!important;& pre{background-color:transparent!important;}& button{background-color:\", \";border:1px solid \", \";cursor:pointer;}& div{background-color:\", \"!important;span{background-color:\", \"!important;}}\"], ({\n  theme\n}) => theme.colors.border, ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => theme.colors.primary, ({\n  theme\n}) => theme.colors.dark, ({\n  theme\n}) => theme.colors.dark);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvZGVibG9jay9zdHlsZXMuanM/OTdlZSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsImJvcmRlciIsInByaW1hcnkiLCJkYXJrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNlRBQ00sQ0FBQztBQUFDQztBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE1BRC9CLEVBWUcsQ0FBQztBQUFDRjtBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFFLE9BWjVCLEVBYUksQ0FBQztBQUFDSDtBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFFLE9BYjdCLEVBa0JHLENBQUM7QUFBQ0g7QUFBRCxDQUFELEtBQVlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRyxJQWxCNUIsRUFvQk0sQ0FBQztBQUFDSjtBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFHLElBcEIvQixDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb2RlYmxvY2svc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICBib3JkZXI6IDAuMDI1cmVtIHNvbGlkICR7KHt0aGVtZX0pPT4gdGhlbWUuY29sb3JzLmJvcmRlcn07XG4gICBwYWRkaW5nOiAuMTVyZW07XG4gICBtYXJnaW46MXJlbSAwO1xuICAgYm9yZGVyLXJhZGl1czouMjVyZW07XG4gICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtcblxuICAgJiBwcmV7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgIH1cblxuICAgJiBidXR0b257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHt0aGVtZX0pPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgIH1cblxuICAgJiBkaXYge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy5kYXJrfSFpbXBvcnRhbnQ7XG4gICAgICBzcGFue1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy5kYXJrfSFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICB9XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/codeblock/styles.js\n");

/***/ }),

/***/ "./components/md/index.js":
/*!********************************!*\
  !*** ./components/md/index.js ***!
  \********************************/
/*! exports provided: H1, H2, H3, H4, P, StyledPre, Pre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H1\", function() { return H1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H2\", function() { return H2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H3\", function() { return H3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H4\", function() { return H4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"P\", function() { return P; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledPre\", function() { return StyledPre; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pre\", function() { return Pre; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/barbosa/javascript/nextjs-lib-docs-starter/components/md/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/jsx-filename-extension */\n\n/* eslint-disable import/prefer-default-export */\n\nconst H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({\n  displayName: \"md__H1\",\n  componentId: \"rm1vff-0\"\n})([\"font-size:2em;color:\", \";font-weight:bold;line-height:1.25;\"], ({\n  theme\n}) => theme.colors.textColor);\nconst H2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({\n  displayName: \"md__H2\",\n  componentId: \"rm1vff-1\"\n})([\"font-size:1.5em;color:\", \";font-weight:bold;line-height:1.25;\"], ({\n  theme\n}) => theme.colors.textColor);\nconst H3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({\n  displayName: \"md__H3\",\n  componentId: \"rm1vff-2\"\n})([\"font-size:1.3rem;color:\", \";font-weight:bold;line-height:1.25em;\"], ({\n  theme\n}) => theme.colors.textColor);\nconst H4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({\n  displayName: \"md__H4\",\n  componentId: \"rm1vff-3\"\n})([\"font-size:1rem;color:\", \";font-weight:bold;line-height:1.25em;\"], ({\n  theme\n}) => theme.colors.textColor);\nconst P = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({\n  displayName: \"md__P\",\n  componentId: \"rm1vff-4\"\n})([\"font-size:1rem;font-weight:normal;color:\", \";box-sizing:border-box;margin-top:0;\"], ({\n  theme\n}) => theme.colors.textColor);\nconst StyledPre = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"md__StyledPre\",\n  componentId: \"rm1vff-5\"\n})([\"display:inline;span{background-color:\", \";border-radius:.3rem;font-size:.75rem;font-family:Monospace;padding:0.125rem 0.25rem;display:inline;*/ color:\", \";}\"], ({\n  theme\n}) => theme.colors.bkgPre, ({\n  theme\n}) => theme.colors.textColor);\nfunction Pre({\n  children\n}) {\n  return __jsx(StyledPre, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 6\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 8\n    }\n  }, children));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21kL2luZGV4LmpzPzYwZjkiXSwibmFtZXMiOlsiSDEiLCJzdHlsZWQiLCJoMSIsInRoZW1lIiwiY29sb3JzIiwidGV4dENvbG9yIiwiSDIiLCJoMiIsIkgzIiwiSDQiLCJQIiwicCIsIlN0eWxlZFByZSIsImRpdiIsImJrZ1ByZSIsIlByZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUVPLE1BQU1BLEVBQUUsR0FBR0Msd0RBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSxvRUFFSixDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsU0FGckIsQ0FBUjtBQU9BLE1BQU1DLEVBQUUsR0FBR0wsd0RBQU0sQ0FBQ00sRUFBVjtBQUFBO0FBQUE7QUFBQSxzRUFFSixDQUFDO0FBQUNKO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsU0FGckIsQ0FBUjtBQU9BLE1BQU1HLEVBQUUsR0FBR1Asd0RBQU0sQ0FBQ00sRUFBVjtBQUFBO0FBQUE7QUFBQSx5RUFFSixDQUFDO0FBQUNKO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsU0FGckIsQ0FBUjtBQU9BLE1BQU1JLEVBQUUsR0FBR1Isd0RBQU0sQ0FBQ00sRUFBVjtBQUFBO0FBQUE7QUFBQSx1RUFFSixDQUFDO0FBQUNKO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsU0FGckIsQ0FBUjtBQU9BLE1BQU1LLENBQUMsR0FBR1Qsd0RBQU0sQ0FBQ1UsQ0FBVjtBQUFBO0FBQUE7QUFBQSx5RkFHSCxDQUFDO0FBQUNSO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsU0FIdEIsQ0FBUDtBQU9BLE1BQU1PLFNBQVMsR0FBR1gsd0RBQU0sQ0FBQ1ksR0FBVjtBQUFBO0FBQUE7QUFBQSxxS0FHRyxDQUFDO0FBQUNWO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNDLE1BQU4sQ0FBYVUsTUFINUIsRUFTUixDQUFDO0FBQUNYO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsU0FUakIsQ0FBZjtBQWFBLFNBQVNVLEdBQVQsQ0FBYTtBQUFDQztBQUFELENBQWIsRUFBd0I7QUFDNUIsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0EsUUFBUCxDQURGLENBREY7QUFLRiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtZmlsZW5hbWUtZXh0ZW5zaW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgSDEgPSBzdHlsZWQuaDFgXG4gICBmb250LXNpemU6MmVtO1xuICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICBsaW5lLWhlaWdodDoxLjI1O1xuYFxuXG5leHBvcnQgY29uc3QgSDIgPSBzdHlsZWQuaDJgXG4gICBmb250LXNpemU6MS41ZW07XG4gICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgIGxpbmUtaGVpZ2h0OjEuMjU7XG5gXG5cbmV4cG9ydCBjb25zdCBIMyA9IHN0eWxlZC5oMmBcbiAgIGZvbnQtc2l6ZToxLjNyZW07XG4gICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgIGxpbmUtaGVpZ2h0OjEuMjVlbTtcbmBcblxuZXhwb3J0IGNvbnN0IEg0ID0gc3R5bGVkLmgyYFxuICAgZm9udC1zaXplOjFyZW07XG4gICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgIGxpbmUtaGVpZ2h0OjEuMjVlbTtcbmBcblxuZXhwb3J0IGNvbnN0IFAgPSBzdHlsZWQucGBcbiAgIGZvbnQtc2l6ZToxcmVtO1xuICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICBtYXJnaW4tdG9wOiAwO1xuYFxuZXhwb3J0IGNvbnN0IFN0eWxlZFByZSA9IHN0eWxlZC5kaXZgXG4gICBkaXNwbGF5OmlubGluZTtcbiAgIHNwYW57XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHt0aGVtZX0pPT4gdGhlbWUuY29sb3JzLmJrZ1ByZX07XG4gICAgICBib3JkZXItcmFkaXVzOi4zcmVtO1xuICAgICAgZm9udC1zaXplOi43NXJlbTtcbiAgICAgIGZvbnQtZmFtaWx5Ok1vbm9zcGFjZTtcbiAgICAgIHBhZGRpbmc6IDAuMTI1cmVtIDAuMjVyZW07XG4gICAgICBkaXNwbGF5OmlubGluZTsgKi9cbiAgICAgIGNvbG9yOiR7KHt0aGVtZX0pPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICB9XG5gXG5cbmV4cG9ydCBmdW5jdGlvbiBQcmUoe2NoaWxkcmVufSl7XG4gICByZXR1cm4gKFxuICAgICA8U3R5bGVkUHJlPlxuICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG4gICAgIDwvU3R5bGVkUHJlPlxuICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/md/index.js\n");

/***/ }),

/***/ "./components/scrollbar/index.js":
/*!***************************************!*\
  !*** ./components/scrollbar/index.js ***!
  \***************************************/
/*! exports provided: ScrollBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollBar\", function() { return ScrollBar; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/prefer-default-export */\n\nconst ScrollBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"::-webkit-scrollbar{width:0.625rem;background-color:transparent;border-top:0.625rem solid transparent;border-bottom:0.625rem solid transparent;}::-webkit-scrollbar:hover{background-color:rgba(0,0,0,0.05);}::-webkit-scrollbar-thumb:vertical{background:\", \";border-radius:6.25rem;background-clip:padding-box;border:0.125rem solid transparent;min-height:0.625rem;}::-webkit-scrollbar-thumb:vertical:active{background:\", \";-webkit-border-radius:6.25rem;}::-webkit-scrollbar-thumb:vertical:hover{background:\", \";-webkit-border-radius:6.25rem;width:0.625rem;}.horizontal-scroll::-webkit-scrollbar:vertical{width:0.4375rem;}.horizontal-scroll::-webkit-scrollbar:horizontal{height:0.4375rem;}.horizontal-scroll::-webkit-scrollbar-thumb{background:\", \";border-radius:0.4375rem;}.horizontal-scroll::-webkit-scrollbar-track{border-radius:0.75rem;padding:0.0625rem;}.horizontal-scroll::-webkit-scrollbar-thumb:hover{background:\", \";}\"], ({\n  theme\n}) => theme.colors.bkgScrollbar, ({\n  theme\n}) => theme.colors.bkgScrollbar, ({\n  theme\n}) => theme.colors.bkgScrollbar, ({\n  theme\n}) => theme.colors.bkgScrollbar, ({\n  theme\n}) => theme.colors.bkgScrollbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njcm9sbGJhci9pbmRleC5qcz8zYWVkIl0sIm5hbWVzIjpbIlNjcm9sbEJhciIsImNzcyIsInRoZW1lIiwiY29sb3JzIiwiYmtnU2Nyb2xsYmFyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLDZEQUFILGc2QkFhRixDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsWUFidkIsRUFxQkYsQ0FBQztBQUFDRjtBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFlBckJ2QixFQXlCRixDQUFDO0FBQUNGO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsWUF6QnZCLEVBdUNGLENBQUM7QUFBQ0Y7QUFBRCxDQUFELEtBQVlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxZQXZDdkIsRUFpREYsQ0FBQztBQUFDRjtBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFlBakR2QixDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zY3JvbGxiYXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFNjcm9sbEJhciA9IGNzc2BcbiAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDAuNjI1cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wOiAwLjYyNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgfVxuXG4gICA6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICB9XG5cbiAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWwge1xuICAgICAgYmFja2dyb3VuZDogJHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMuYmtnU2Nyb2xsYmFyfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIG1pbi1oZWlnaHQ6IDAuNjI1cmVtO1xuICAgfVxuXG4gICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy5ia2dTY3JvbGxiYXJ9O1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgfVxuICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy5ia2dTY3JvbGxiYXJ9O1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgd2lkdGg6IDAuNjI1cmVtO1xuICAgfVxuXG4gICAuaG9yaXpvbnRhbC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcbiAgICAgIHdpZHRoOiAwLjQzNzVyZW07XG4gICB9XG5cbiAgIC5ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XG4gICAgICBoZWlnaHQ6IDAuNDM3NXJlbTtcbiAgIH1cblxuICAgLmhvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy5ia2dTY3JvbGxiYXJ9O1xuICAgICAgYm9yZGVyLXJhZGl1czogMC40Mzc1cmVtO1xuICAgfVxuXG4gICAuaG9yaXpvbnRhbC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gICAgICBwYWRkaW5nOiAwLjA2MjVyZW07XG4gICB9XG5cbiAgIC5ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMuYmtnU2Nyb2xsYmFyfTtcbiAgIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/scrollbar/index.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_codeblock_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/codeblock/index */ \"./components/codeblock/index.jsx\");\n/* harmony import */ var _components_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/md */ \"./components/md/index.js\");\nvar _jsxFileName = \"/home/barbosa/javascript/nextjs-lib-docs-starter/providers/MDXProvider.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\n\nconst mdComponents = {\n  code: _components_codeblock_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  h1: _components_md__WEBPACK_IMPORTED_MODULE_3__[\"H1\"],\n  h2: _components_md__WEBPACK_IMPORTED_MODULE_3__[\"H2\"],\n  h3: _components_md__WEBPACK_IMPORTED_MODULE_3__[\"H3\"],\n  h4: _components_md__WEBPACK_IMPORTED_MODULE_3__[\"H4\"],\n  p: _components_md__WEBPACK_IMPORTED_MODULE_3__[\"P\"],\n  Inline: _components_md__WEBPACK_IMPORTED_MODULE_3__[\"Pre\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  children\n}) => __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"MDXProvider\"], {\n  components: mdComponents,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 3\n  }\n}, children));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvTURYUHJvdmlkZXIuanN4PzRhOTciXSwibmFtZXMiOlsibWRDb21wb25lbnRzIiwiY29kZSIsIkNvZGVCbG9jayIsImgxIiwiSDEiLCJoMiIsIkgyIiwiaDMiLCJIMyIsImg0IiwiSDQiLCJwIiwiUCIsIklubGluZSIsIlByZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU1BLFlBQVksR0FBRztBQUNuQkMsTUFBSSxFQUFDQyxtRUFEYztBQUVuQkMsSUFBRSxFQUFFQyxpREFGZTtBQUduQkMsSUFBRSxFQUFDQyxpREFIZ0I7QUFJbkJDLElBQUUsRUFBQ0MsaURBSmdCO0FBS25CQyxJQUFFLEVBQUNDLGlEQUxnQjtBQU1uQkMsR0FBQyxFQUFDQyxnREFOaUI7QUFPbkJDLFFBQU0sRUFBQ0Msa0RBQUdBO0FBUFMsQ0FBckI7QUFVZSxnRUFBQztBQUFFQztBQUFGLENBQUQsS0FDYixNQUFDLHlEQUFEO0FBQWEsWUFBVSxFQUFFZixZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXdDZSxRQUF4QyxDQURGIiwiZmlsZSI6Ii4vcHJvdmlkZXJzL01EWFByb3ZpZGVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29kZWJsb2NrL2luZGV4XCJcbmltcG9ydCB7IEgxLCBIMiwgUCxQcmUsSDMsSDQgfSBmcm9tICcuLi9jb21wb25lbnRzL21kJ1xuXG5cblxuY29uc3QgbWRDb21wb25lbnRzID0ge1xuICBjb2RlOkNvZGVCbG9jayxcbiAgaDE6IEgxLFxuICBoMjpIMixcbiAgaDM6SDMsXG4gIGg0Okg0LFxuICBwOlAsXG4gIElubGluZTpQcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17bWRDb21wb25lbnRzfT57Y2hpbGRyZW59PC9NRFhQcm92aWRlcj5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./providers/MDXProvider.jsx\n");

/***/ }),

/***/ "./providers/theme.js":
/*!****************************!*\
  !*** ./providers/theme.js ***!
  \****************************/
/*! exports provided: lightTheme, darkTheme, GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightTheme\", function() { return lightTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkTheme\", function() { return darkTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/scrollbar */ \"./components/scrollbar/index.js\");\n/* eslint-disable import/prefer-default-export */\n\n\nconst lightTheme = {\n  colors: {\n    primary: \"#5bc0be\",\n    secondary: \"#3a506b\",\n    dark: \"#0b132b\",\n    border: \"#edf2f4\",\n    red: \"#e71d36\",\n    background: \"#FFFFFF\",\n    textColor: \"#3a506b\",\n    bkgPre: \"#edf2f4\",\n    colorPre: \"#edf2f4\",\n    bkgScrollbar: \"#3a506b\"\n  }\n};\nconst darkTheme = {\n  colors: {\n    primary: \"#5bc0be\",\n    secondary: \"#3a506b\",\n    dark: \"#0b132b\",\n    border: \"#1b262c\",\n    red: \"#e71d36\",\n    background: \"#0b132b\",\n    textColor: \"#edf2f4\",\n    bkgPre: \"#3a506b\",\n    colorPre: \"#edf2f4\",\n    bkgScrollbar: \"#3a506b\"\n  }\n};\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n\n   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');\n   *{\n      margin:0;\n      font-size:16px;\n      font-family: 'Roboto', sans-serif;\n      box-sizing: border-box;\n      ${_components_scrollbar__WEBPACK_IMPORTED_MODULE_1__[\"ScrollBar\"]}\n   }\n\n\n   html, body {\n      width: 100%;\n      height: 100%;\n      background-color:${({\n  theme\n}) => theme.colors.background};\n   }\n\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvdGhlbWUuanM/YjczNSJdLCJuYW1lcyI6WyJsaWdodFRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImRhcmsiLCJib3JkZXIiLCJyZWQiLCJiYWNrZ3JvdW5kIiwidGV4dENvbG9yIiwiYmtnUHJlIiwiY29sb3JQcmUiLCJia2dTY3JvbGxiYXIiLCJkYXJrVGhlbWUiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiU2Nyb2xsQmFyIiwidGhlbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRU8sTUFBTUEsVUFBVSxHQUFHO0FBQ3ZCQyxRQUFNLEVBQUM7QUFDSkMsV0FBTyxFQUFFLFNBREw7QUFFSkMsYUFBUyxFQUFFLFNBRlA7QUFHSkMsUUFBSSxFQUFDLFNBSEQ7QUFJSkMsVUFBTSxFQUFDLFNBSkg7QUFLSkMsT0FBRyxFQUFDLFNBTEE7QUFNSkMsY0FBVSxFQUFDLFNBTlA7QUFPSkMsYUFBUyxFQUFDLFNBUE47QUFRSkMsVUFBTSxFQUFDLFNBUkg7QUFTSkMsWUFBUSxFQUFDLFNBVEw7QUFVSkMsZ0JBQVksRUFBQztBQVZUO0FBRGdCLENBQW5CO0FBZUEsTUFBTUMsU0FBUyxHQUFHO0FBQ3RCWCxRQUFNLEVBQUM7QUFDSkMsV0FBTyxFQUFFLFNBREw7QUFFSkMsYUFBUyxFQUFFLFNBRlA7QUFHSkMsUUFBSSxFQUFDLFNBSEQ7QUFJSkMsVUFBTSxFQUFDLFNBSkg7QUFLSkMsT0FBRyxFQUFDLFNBTEE7QUFNSkMsY0FBVSxFQUFDLFNBTlA7QUFPSkMsYUFBUyxFQUFFLFNBUFA7QUFRSkMsVUFBTSxFQUFDLFNBUkg7QUFTSkMsWUFBUSxFQUFDLFNBVEw7QUFVSkMsZ0JBQVksRUFBQztBQVZUO0FBRGUsQ0FBbEI7QUFnQkEsTUFBTUUsV0FBVyxHQUFHQyxtRUFBa0I7Ozs7Ozs7O1FBUXJDQywrREFBVTs7Ozs7Ozt5QkFPTyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFZQSxLQUFLLENBQUNmLE1BQU4sQ0FBYU0sVUFBVzs7O0NBZnREIiwiZmlsZSI6Ii4vcHJvdmlkZXJzL3RoZW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCB7U2Nyb2xsQmFyfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zY3JvbGxiYXJcIlxuXG5leHBvcnQgY29uc3QgbGlnaHRUaGVtZSA9IHtcbiAgIGNvbG9yczp7XG4gICAgICBwcmltYXJ5OiBcIiM1YmMwYmVcIixcbiAgICAgIHNlY29uZGFyeTogXCIjM2E1MDZiXCIsXG4gICAgICBkYXJrOlwiIzBiMTMyYlwiLFxuICAgICAgYm9yZGVyOlwiI2VkZjJmNFwiLFxuICAgICAgcmVkOlwiI2U3MWQzNlwiLFxuICAgICAgYmFja2dyb3VuZDpcIiNGRkZGRkZcIixcbiAgICAgIHRleHRDb2xvcjpcIiMzYTUwNmJcIixcbiAgICAgIGJrZ1ByZTpcIiNlZGYyZjRcIixcbiAgICAgIGNvbG9yUHJlOlwiI2VkZjJmNFwiLFxuICAgICAgYmtnU2Nyb2xsYmFyOlwiIzNhNTA2YlwiXG4gICB9XG59XG5cbmV4cG9ydCBjb25zdCBkYXJrVGhlbWUgPSB7XG4gICBjb2xvcnM6e1xuICAgICAgcHJpbWFyeTogXCIjNWJjMGJlXCIsXG4gICAgICBzZWNvbmRhcnk6IFwiIzNhNTA2YlwiLFxuICAgICAgZGFyazpcIiMwYjEzMmJcIixcbiAgICAgIGJvcmRlcjpcIiMxYjI2MmNcIixcbiAgICAgIHJlZDpcIiNlNzFkMzZcIixcbiAgICAgIGJhY2tncm91bmQ6XCIjMGIxMzJiXCIsXG4gICAgICB0ZXh0Q29sb3I6IFwiI2VkZjJmNFwiLFxuICAgICAgYmtnUHJlOlwiIzNhNTA2YlwiLFxuICAgICAgY29sb3JQcmU6XCIjZWRmMmY0XCIsXG4gICAgICBia2dTY3JvbGxiYXI6XCIjM2E1MDZiXCIsXG5cbiAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbiAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICp7XG4gICAgICBtYXJnaW46MDtcbiAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICR7U2Nyb2xsQmFyfVxuICAgfVxuXG5cbiAgIGh0bWwsIGJvZHkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHt0aGVtZX0pPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgfVxuXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./providers/theme.js\n");

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