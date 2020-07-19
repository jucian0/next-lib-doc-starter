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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodeBlock; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-code-blocks */ \"react-code-blocks\");\n/* harmony import */ var react_code_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/codeblock/styles.js\");\nvar _jsxFileName = \"/home/barbosa/javascript/nextjs-lib-docs-starter/components/codeblock/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/no-array-index-key */\n\n/* eslint-disable react/prop-types */\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\nfunction CodeBlock({\n  children,\n  className\n}) {\n  const language = className.replace(/language-/, '');\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 6\n    }\n  }, __jsx(react_code_blocks__WEBPACK_IMPORTED_MODULE_1__[\"CopyBlock\"], {\n    language: language,\n    text: children.trim(),\n    codeBlock: true,\n    theme: react_code_blocks__WEBPACK_IMPORTED_MODULE_1__[\"dracula\"],\n    showLineNumbers: true,\n    wrapLines: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 8\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvZGVibG9jay9pbmRleC5qc3g/ZmYyNyJdLCJuYW1lcyI6WyJDb2RlQmxvY2siLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImxhbmd1YWdlIiwicmVwbGFjZSIsInRyaW0iLCJkcmFjdWxhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxTQUFULENBQW1CO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFuQixFQUEwQztBQUN0RCxRQUFNQyxRQUFRLEdBQUdELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixXQUFsQixFQUErQixFQUEvQixDQUFqQjtBQUVBLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLFlBQVEsRUFBRUQsUUFEWjtBQUVFLFFBQUksRUFBRUYsUUFBUSxDQUFDSSxJQUFULEVBRlI7QUFHRSxhQUFTLE1BSFg7QUFJRSxTQUFLLEVBQUVDLHlEQUpUO0FBS0UsbUJBQWUsTUFMakI7QUFNRSxhQUFTLE1BTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFZRiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29kZWJsb2NrL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29weUJsb2NrLCBkcmFjdWxhIH0gZnJvbSBcInJlYWN0LWNvZGUtYmxvY2tzXCI7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi9zdHlsZXMnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZUJsb2NrKHsgY2hpbGRyZW4sIGNsYXNzTmFtZX0pe1xuICAgY29uc3QgbGFuZ3VhZ2UgPSBjbGFzc05hbWUucmVwbGFjZSgvbGFuZ3VhZ2UtLywgJycpXG5cbiAgIHJldHVybiAoXG4gICAgIDxDb250YWluZXI+XG4gICAgICAgPENvcHlCbG9ja1xuICAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgICAgdGV4dD17Y2hpbGRyZW4udHJpbSgpfVxuICAgICAgICAgY29kZUJsb2NrXG4gICAgICAgICB0aGVtZT17ZHJhY3VsYX1cbiAgICAgICAgIHNob3dMaW5lTnVtYmVyc1xuICAgICAgICAgd3JhcExpbmVzXG4gICAgICAgLz5cbiAgICAgPC9Db250YWluZXI+XG4gICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/codeblock/index.jsx\n");

/***/ }),

/***/ "./components/codeblock/styles.js":
/*!****************************************!*\
  !*** ./components/codeblock/styles.js ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/prefer-default-export */\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.pre.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"alfrsk-0\"\n})([\"border:0.025rem solid \", \";padding:.25rem;border-radius:.25rem;background-color:transparent!important;& pre{background-color:transparent!important;}\"], ({\n  theme\n}) => theme.colors.border);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvZGVibG9jay9zdHlsZXMuanM/OTdlZSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwcmUiLCJ0aGVtZSIsImNvbG9ycyIsImJvcmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZKQUNNLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxNQUQvQixDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb2RlYmxvY2svc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5wcmVgXG4gICBib3JkZXI6IDAuMDI1cmVtIHNvbGlkICR7KHt0aGVtZX0pPT4gdGhlbWUuY29sb3JzLmJvcmRlcn07XG4gICBwYWRkaW5nOiAuMjVyZW07XG4gICBib3JkZXItcmFkaXVzOi4yNXJlbTtcbiAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuXG4gICAmIHByZXtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICAgfVxuYFxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/codeblock/styles.js\n");

/***/ }),

/***/ "./components/md/index.js":
/*!********************************!*\
  !*** ./components/md/index.js ***!
  \********************************/
/*! exports provided: H1, H2, P, StyledPre, Pre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H1\", function() { return H1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H2\", function() { return H2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"P\", function() { return P; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledPre\", function() { return StyledPre; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pre\", function() { return Pre; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/barbosa/javascript/nextjs-lib-docs-starter/components/md/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/jsx-filename-extension */\n\n/* eslint-disable import/prefer-default-export */\n\nconst H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({\n  displayName: \"md__H1\",\n  componentId: \"rm1vff-0\"\n})([\"font-size:3rem;color:\", \";font-weight:bold;line-height:1.25;\"], ({\n  theme\n}) => theme.colors.text);\nconst H2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({\n  displayName: \"md__H2\",\n  componentId: \"rm1vff-1\"\n})([\"font-size:1.5rem;color:\", \";font-weight:bold;line-height:1.25;\"], ({\n  theme\n}) => theme.colors.text);\nconst P = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({\n  displayName: \"md__P\",\n  componentId: \"rm1vff-2\"\n})([\"font-size:1rem;font-weight:normal;color:\", \";color:var(--ifm-font-color-base);box-sizing:border-box;margin-top:0;\"], ({\n  theme\n}) => theme.colors.text);\nconst StyledPre = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"md__StyledPre\",\n  componentId: \"rm1vff-3\"\n})([\"display:inline;span{background-color:\", \";border-radius:.3rem;font-size:1rem;font-family:Monospace;padding:0.125rem 0.25rem;display:inline;color:\", \";}\"], ({\n  theme\n}) => theme.colors.bkgPre, ({\n  theme\n}) => theme.colors.textColor);\nfunction Pre({\n  children\n}) {\n  return __jsx(StyledPre, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 6\n    }\n  }, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 8\n    }\n  }, children));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21kL2luZGV4LmpzPzYwZjkiXSwibmFtZXMiOlsiSDEiLCJzdHlsZWQiLCJoMSIsInRoZW1lIiwiY29sb3JzIiwidGV4dCIsIkgyIiwiaDIiLCJQIiwicCIsIlN0eWxlZFByZSIsImRpdiIsImJrZ1ByZSIsInRleHRDb2xvciIsIlByZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFFTyxNQUFNQSxFQUFFLEdBQUdDLHdEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEscUVBRUosQ0FBQztBQUFDQztBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBRnJCLENBQVI7QUFPQSxNQUFNQyxFQUFFLEdBQUdMLHdEQUFNLENBQUNNLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUVBRUosQ0FBQztBQUFDSjtBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBRnJCLENBQVI7QUFPQSxNQUFNRyxDQUFDLEdBQUdQLHdEQUFNLENBQUNRLENBQVY7QUFBQTtBQUFBO0FBQUEsMEhBR0gsQ0FBQztBQUFDTjtBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBSHRCLENBQVA7QUFRQSxNQUFNSyxTQUFTLEdBQUdULHdEQUFNLENBQUNVLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0tBR0csQ0FBQztBQUFDUjtBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFRLE1BSDVCLEVBU1IsQ0FBQztBQUFDVDtBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDQyxNQUFOLENBQWFTLFNBVGpCLENBQWY7QUFhQSxTQUFTQyxHQUFULENBQWE7QUFBQ0M7QUFBRCxDQUFiLEVBQXdCO0FBQzVCLFNBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9BLFFBQVAsQ0FERixDQURGO0FBS0YiLCJmaWxlIjoiLi9jb21wb25lbnRzL21kL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWZpbGVuYW1lLWV4dGVuc2lvbiAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IEgxID0gc3R5bGVkLmgxYFxuICAgZm9udC1zaXplOjNyZW07XG4gICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICBsaW5lLWhlaWdodDoxLjI1O1xuYFxuXG5leHBvcnQgY29uc3QgSDIgPSBzdHlsZWQuaDJgXG4gICBmb250LXNpemU6MS41cmVtO1xuICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dH07XG4gICBmb250LXdlaWdodDpib2xkO1xuICAgbGluZS1oZWlnaHQ6MS4yNTtcbmBcblxuZXhwb3J0IGNvbnN0IFAgPSBzdHlsZWQucGBcbiAgIGZvbnQtc2l6ZToxcmVtO1xuICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dH07XG4gICBjb2xvcjogdmFyKC0taWZtLWZvbnQtY29sb3ItYmFzZSk7XG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgbWFyZ2luLXRvcDogMDtcbmBcbmV4cG9ydCBjb25zdCBTdHlsZWRQcmUgPSBzdHlsZWQuZGl2YFxuICAgZGlzcGxheTppbmxpbmU7XG4gICBzcGFue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy5ia2dQcmV9O1xuICAgICAgYm9yZGVyLXJhZGl1czouM3JlbTtcbiAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgICAgZm9udC1mYW1pbHk6TW9ub3NwYWNlO1xuICAgICAgcGFkZGluZzogMC4xMjVyZW0gMC4yNXJlbTtcbiAgICAgIGRpc3BsYXk6aW5saW5lO1xuICAgICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgIH1cbmBcblxuZXhwb3J0IGZ1bmN0aW9uIFByZSh7Y2hpbGRyZW59KXtcbiAgIHJldHVybiAoXG4gICAgIDxTdHlsZWRQcmU+XG4gICAgICAgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgPC9TdHlsZWRQcmU+XG4gICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/md/index.js\n");

/***/ }),

/***/ "./components/scrollbar/index.js":
/*!***************************************!*\
  !*** ./components/scrollbar/index.js ***!
  \***************************************/
/*! exports provided: ScrollBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollBar\", function() { return ScrollBar; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/prefer-default-export */\n\nconst ScrollBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"::-webkit-scrollbar{width:0.625rem;background-color:rgba(0,0,0,0);border-top:0.625rem solid rgba(0,0,0,0);border-bottom:0.625rem solid rgba(0,0,0,0);}::-webkit-scrollbar:hover{background-color:rgba(0,0,0,0.05);}::-webkit-scrollbar-thumb:vertical{background:rgba(0,0,0,0.2);border-radius:6.25rem;background-clip:padding-box;border:0.125rem solid rgba(0,0,0,0);min-height:0.625rem;}::-webkit-scrollbar-thumb:vertical:active{background:rgba(0,0,0,0.3);-webkit-border-radius:6.25rem;}::-webkit-scrollbar-thumb:vertical:hover{background:rgba(0,0,0,0.3);-webkit-border-radius:6.25rem;width:0.625rem;}.horizontal-scroll::-webkit-scrollbar:vertical{width:0.4375rem;}.horizontal-scroll::-webkit-scrollbar:horizontal{height:0.4375rem;}.horizontal-scroll::-webkit-scrollbar-thumb{background:#3333;border-radius:0.4375rem;}.horizontal-scroll::-webkit-scrollbar-track{border-radius:0.75rem;padding:0.0625rem;}.horizontal-scroll::-webkit-scrollbar-thumb:hover{background:#adadad;}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Njcm9sbGJhci9pbmRleC5qcz8zYWVkIl0sIm5hbWVzIjpbIlNjcm9sbEJhciIsImNzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyw2REFBSCw0OEJBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Njcm9sbGJhci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgU2Nyb2xsQmFyID0gY3NzYFxuICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogMC42MjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgYm9yZGVyLXRvcDogMC42MjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuNjI1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICB9XG5cbiAgIDo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgIH1cblxuICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIG1pbi1oZWlnaHQ6IDAuNjI1cmVtO1xuICAgfVxuXG4gICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICB9XG4gICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgIHdpZHRoOiAwLjYyNXJlbTtcbiAgIH1cblxuICAgLmhvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XG4gICAgICB3aWR0aDogMC40Mzc1cmVtO1xuICAgfVxuXG4gICAuaG9yaXpvbnRhbC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvcml6b250YWwge1xuICAgICAgaGVpZ2h0OiAwLjQzNzVyZW07XG4gICB9XG5cbiAgIC5ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZDogIzMzMzM7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjQzNzVyZW07XG4gICB9XG5cbiAgIC5ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuMDYyNXJlbTtcbiAgIH1cblxuICAgLmhvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjYWRhZGFkO1xuICAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/scrollbar/index.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_codeblock_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/codeblock/index */ \"./components/codeblock/index.jsx\");\n/* harmony import */ var _components_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/md */ \"./components/md/index.js\");\nvar _jsxFileName = \"/home/barbosa/javascript/nextjs-lib-docs-starter/providers/MDXProvider.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n\n\nconst mdComponents = {\n  code: _components_codeblock_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  h1: _components_md__WEBPACK_IMPORTED_MODULE_3__[\"H1\"],\n  h2: _components_md__WEBPACK_IMPORTED_MODULE_3__[\"H2\"],\n  p: _components_md__WEBPACK_IMPORTED_MODULE_3__[\"P\"],\n  Inline: _components_md__WEBPACK_IMPORTED_MODULE_3__[\"Pre\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  children\n}) => __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"MDXProvider\"], {\n  components: mdComponents,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 3\n  }\n}, children));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvTURYUHJvdmlkZXIuanN4PzRhOTciXSwibmFtZXMiOlsibWRDb21wb25lbnRzIiwiY29kZSIsIkNvZGVCbG9jayIsImgxIiwiSDEiLCJoMiIsIkgyIiwicCIsIlAiLCJJbmxpbmUiLCJQcmUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBQ0MsbUVBRGM7QUFFbkJDLElBQUUsRUFBRUMsaURBRmU7QUFHbkJDLElBQUUsRUFBQ0MsaURBSGdCO0FBSW5CQyxHQUFDLEVBQUNDLGdEQUppQjtBQUtuQkMsUUFBTSxFQUFDQyxrREFBR0E7QUFMUyxDQUFyQjtBQVFlLGdFQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUNiLE1BQUMseURBQUQ7QUFBYSxZQUFVLEVBQUVYLFlBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBd0NXLFFBQXhDLENBREYiLCJmaWxlIjoiLi9wcm92aWRlcnMvTURYUHJvdmlkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTURYUHJvdmlkZXIgfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9jb2RlYmxvY2svaW5kZXhcIlxuaW1wb3J0IHsgSDEsIEgyLCBQLFByZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWQnXG5cblxuXG5jb25zdCBtZENvbXBvbmVudHMgPSB7XG4gIGNvZGU6Q29kZUJsb2NrLFxuICBoMTogSDEsXG4gIGgyOkgyLFxuICBwOlAsXG4gIElubGluZTpQcmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17bWRDb21wb25lbnRzfT57Y2hpbGRyZW59PC9NRFhQcm92aWRlcj5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./providers/MDXProvider.jsx\n");

/***/ }),

/***/ "./providers/theme.js":
/*!****************************!*\
  !*** ./providers/theme.js ***!
  \****************************/
/*! exports provided: lightTheme, darkTheme, GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightTheme\", function() { return lightTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkTheme\", function() { return darkTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/scrollbar */ \"./components/scrollbar/index.js\");\n/* eslint-disable import/prefer-default-export */\n\n\nconst lightTheme = {\n  colors: {\n    primary: \"#5bc0be\",\n    secondary: \"#3a506b\",\n    dark: \"#0b132b\",\n    border: \"#edf2f4\",\n    red: \"#e71d36\",\n    background: \"#FFFFFF\",\n    textColor: \"#3a506b\",\n    bkgPre: \"#edf2f4\",\n    colorPre: \"#edf2f4\"\n  }\n};\nconst darkTheme = {\n  colors: {\n    primary: \"#5bc0be\",\n    secondary: \"#3a506b\",\n    dark: \"#0b132b\",\n    border: \"#1b262c\",\n    red: \"#e71d36\",\n    background: \"#0b132b\",\n    textColor: \"#edf2f4\",\n    bkgPre: \"#3a506b\",\n    colorPre: \"#edf2f4\"\n  }\n};\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n\n   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');\n   *{\n      margin:0;\n      font-size:16px;\n      font-family: 'Roboto', sans-serif;\n      box-sizing: border-box;\n      color:${({\n  theme\n}) => theme.colors.textColor};\n\n      ${_components_scrollbar__WEBPACK_IMPORTED_MODULE_1__[\"ScrollBar\"]}\n   }\n\n\n   html, body {\n      width: 100%;\n      height: 100%;\n      background-color:${({\n  theme\n}) => theme.colors.background};\n   }\n\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvdGhlbWUuanM/YjczNSJdLCJuYW1lcyI6WyJsaWdodFRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImRhcmsiLCJib3JkZXIiLCJyZWQiLCJiYWNrZ3JvdW5kIiwidGV4dENvbG9yIiwiYmtnUHJlIiwiY29sb3JQcmUiLCJkYXJrVGhlbWUiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWUiLCJTY3JvbGxCYXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRU8sTUFBTUEsVUFBVSxHQUFHO0FBQ3ZCQyxRQUFNLEVBQUM7QUFDSkMsV0FBTyxFQUFFLFNBREw7QUFFSkMsYUFBUyxFQUFFLFNBRlA7QUFHSkMsUUFBSSxFQUFDLFNBSEQ7QUFJSkMsVUFBTSxFQUFDLFNBSkg7QUFLSkMsT0FBRyxFQUFDLFNBTEE7QUFNSkMsY0FBVSxFQUFDLFNBTlA7QUFPSkMsYUFBUyxFQUFDLFNBUE47QUFRSkMsVUFBTSxFQUFDLFNBUkg7QUFTSkMsWUFBUSxFQUFDO0FBVEw7QUFEZ0IsQ0FBbkI7QUFjQSxNQUFNQyxTQUFTLEdBQUc7QUFDdEJWLFFBQU0sRUFBQztBQUNKQyxXQUFPLEVBQUUsU0FETDtBQUVKQyxhQUFTLEVBQUUsU0FGUDtBQUdKQyxRQUFJLEVBQUMsU0FIRDtBQUlKQyxVQUFNLEVBQUMsU0FKSDtBQUtKQyxPQUFHLEVBQUMsU0FMQTtBQU1KQyxjQUFVLEVBQUMsU0FOUDtBQU9KQyxhQUFTLEVBQUUsU0FQUDtBQVFKQyxVQUFNLEVBQUMsU0FSSDtBQVNKQyxZQUFRLEVBQUM7QUFUTDtBQURlLENBQWxCO0FBY0EsTUFBTUUsV0FBVyxHQUFHQyxtRUFBa0I7Ozs7Ozs7O2NBUS9CLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVlBLEtBQUssQ0FBQ2IsTUFBTixDQUFhTyxTQUFVOztRQUV6Q08sK0RBQVU7Ozs7Ozs7eUJBT08sQ0FBQztBQUFDRDtBQUFELENBQUQsS0FBWUEsS0FBSyxDQUFDYixNQUFOLENBQWFNLFVBQVc7OztDQWpCdEQiLCJmaWxlIjoiLi9wcm92aWRlcnMvdGhlbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQge2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHtTY3JvbGxCYXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL3Njcm9sbGJhclwiXG5cbmV4cG9ydCBjb25zdCBsaWdodFRoZW1lID0ge1xuICAgY29sb3JzOntcbiAgICAgIHByaW1hcnk6IFwiIzViYzBiZVwiLFxuICAgICAgc2Vjb25kYXJ5OiBcIiMzYTUwNmJcIixcbiAgICAgIGRhcms6XCIjMGIxMzJiXCIsXG4gICAgICBib3JkZXI6XCIjZWRmMmY0XCIsXG4gICAgICByZWQ6XCIjZTcxZDM2XCIsXG4gICAgICBiYWNrZ3JvdW5kOlwiI0ZGRkZGRlwiLFxuICAgICAgdGV4dENvbG9yOlwiIzNhNTA2YlwiLFxuICAgICAgYmtnUHJlOlwiI2VkZjJmNFwiLFxuICAgICAgY29sb3JQcmU6XCIjZWRmMmY0XCJcbiAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IHtcbiAgIGNvbG9yczp7XG4gICAgICBwcmltYXJ5OiBcIiM1YmMwYmVcIixcbiAgICAgIHNlY29uZGFyeTogXCIjM2E1MDZiXCIsXG4gICAgICBkYXJrOlwiIzBiMTMyYlwiLFxuICAgICAgYm9yZGVyOlwiIzFiMjYyY1wiLFxuICAgICAgcmVkOlwiI2U3MWQzNlwiLFxuICAgICAgYmFja2dyb3VuZDpcIiMwYjEzMmJcIixcbiAgICAgIHRleHRDb2xvcjogXCIjZWRmMmY0XCIsXG4gICAgICBia2dQcmU6XCIjM2E1MDZiXCIsXG4gICAgICBjb2xvclByZTpcIiNlZGYyZjRcIlxuICAgfVxufVxuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgKntcbiAgICAgIG1hcmdpbjowO1xuICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcblxuICAgICAgJHtTY3JvbGxCYXJ9XG4gICB9XG5cblxuICAgaHRtbCwgYm9keSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICB9XG5cbmAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./providers/theme.js\n");

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