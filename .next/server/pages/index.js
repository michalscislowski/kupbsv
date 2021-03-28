module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/calculator.js":
/*!**********************************!*\
  !*** ./components/calculator.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Calculator; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/dedal/Code/kupbsv/components/calculator.js\";\n\n\n\nfunction Calculator() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.typebox,\n    noValidate: true,\n    autoComplete: \"off\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textfield,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        error: false,\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textfield,\n        id: \"outlined-basic\",\n        label: \"PLN\",\n        helperText: \"Minimalna warto\\u015B\\u0107 100z\\u0142\",\n        variant: \"outlined\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textfield,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        disabled: true,\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textfield,\n        id: \"outlined-disabled\",\n        label: \"BSV\",\n        variant: \"outlined\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhbGN1bGF0b3IuanM/ODcwZCJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yIiwic3R5bGVzIiwidHlwZWJveCIsInRleHRmaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSWUsU0FBU0EsVUFBVCxHQUFzQjtBQUVqQyxzQkFDSTtBQUFNLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsT0FBeEI7QUFBaUMsY0FBVSxNQUEzQztBQUE0QyxnQkFBWSxFQUFDLEtBQXpEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVELDhEQUFNLENBQUNFLFNBQXZCO0FBQUEsNkJBQ0kscUVBQUMsa0VBQUQ7QUFBVyxhQUFLLEVBQUUsS0FBbEI7QUFBeUIsaUJBQVMsRUFBRUYsOERBQU0sQ0FBQ0UsU0FBM0M7QUFBc0QsVUFBRSxFQUFDLGdCQUF6RDtBQUEwRSxhQUFLLEVBQUMsS0FBaEY7QUFBc0Ysa0JBQVUsRUFBQyx3Q0FBakc7QUFBMkgsZUFBTyxFQUFDO0FBQW5JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFLLGVBQVMsRUFBRUYsOERBQU0sQ0FBQ0UsU0FBdkI7QUFBQSw2QkFDSSxxRUFBQyxrRUFBRDtBQUFXLGdCQUFRLE1BQW5CO0FBQW9CLGlCQUFTLEVBQUVGLDhEQUFNLENBQUNFLFNBQXRDO0FBQWlELFVBQUUsRUFBQyxtQkFBcEQ7QUFBd0UsYUFBSyxFQUFDLEtBQTlFO0FBQW9GLGVBQU8sRUFBQztBQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhbGN1bGF0b3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGN1bGF0b3IoKSB7XG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLnR5cGVib3h9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRmaWVsZH0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBlcnJvcj17ZmFsc2V9IGNsYXNzTmFtZT17c3R5bGVzLnRleHRmaWVsZH0gaWQ9XCJvdXRsaW5lZC1iYXNpY1wiIGxhYmVsPVwiUExOXCIgaGVscGVyVGV4dD1cIk1pbmltYWxuYSB3YXJ0b8WbxIcgMTAwesWCXCIgdmFyaWFudD1cIm91dGxpbmVkXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGZpZWxkfT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGRpc2FibGVkIGNsYXNzTmFtZT17c3R5bGVzLnRleHRmaWVsZH0gaWQ9XCJvdXRsaW5lZC1kaXNhYmxlZFwiIGxhYmVsPVwiQlNWXCIgdmFyaWFudD1cIm91dGxpbmVkXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/calculator.js\n");

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/dedal/Code/kupbsv/components/footer.js\";\n\nfunction Footer() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      children: [\"All rights reserved\", ' ', \" 2021\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/logo.png\",\n        alt: \"Banach Logo\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci5qcz82ODgzIl0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxNQUFULEdBQW1CO0FBQ2xDLHNCQUNJO0FBQVEsYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxNQUExQjtBQUFBLDJCQUNJO0FBQUEsd0NBQ3NCLEdBRHRCLHdCQUVFO0FBQUssV0FBRyxFQUFDLFdBQVQ7QUFBcUIsV0FBRyxFQUFDLGFBQXpCO0FBQXVDLGlCQUFTLEVBQUVELDhEQUFNLENBQUNFO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIgKCkge1xucmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhPlxuICAgICAgICAgIEFsbCByaWdodHMgcmVzZXJ2ZWR7JyAnfSAyMDIxXG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJCYW5hY2ggTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+ICBcbiAgICAgICAgPC9hPlxuICAgIDwvZm9vdGVyPlxuKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/footer.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_simplemenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/simplemenu */ \"./components/simplemenu.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/dedal/Code/kupbsv/components/header.js\";\n\n\nfunction Header() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"#default\",\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headlogo,\n      children: \"KUPBSV\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerRight,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: \"Money Button\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"#login\",\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.headerLeft,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_simplemenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcz82NDc4Il0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlcyIsImhlYWRlciIsImhlYWRsb2dvIiwiaGVhZGVyUmlnaHQiLCJoZWFkZXJMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFtQjtBQUVsQyxzQkFDSTtBQUFRLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsTUFBMUI7QUFBQSw0QkFDRTtBQUFHLFVBQUksRUFBQyxVQUFSO0FBQW1CLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVJO0FBQUssZUFBUyxFQUFFRiw4REFBTSxDQUFDRyxXQUF2QjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLFlBQUksRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFNSTtBQUFLLGVBQVMsRUFBRUgsOERBQU0sQ0FBQ0ksVUFBdkI7QUFBQSw2QkFDRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUMiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW1wbGVNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvc2ltcGxlbWVudSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyICgpIHtcblxucmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8YSBocmVmPVwiI2RlZmF1bHRcIiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkbG9nb30+S1VQQlNWPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclJpZ2h0fT5cbiAgICAgICAgICAgIDxhPk1vbmV5IEJ1dHRvbjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjbG9naW5cIj5Mb2dpbjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGVmdH0+XG4gICAgICAgICAgPFNpbXBsZU1lbnUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2hlYWRlcj4gXG4pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_calculator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/calculator.js */ \"./components/calculator.js\");\n\nvar _jsxFileName = \"/Users/dedal/Code/kupbsv/components/main.js\";\n\n\n\n\nfunction Main() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.box,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          variant: \"outlined\",\n          color: \"primary\",\n          children: \"KUP\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          variant: \"outlined\",\n          color: \"primary\",\n          children: \"SPRZEDAJ\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          variant: \"outlined\",\n          color: \"primary\",\n          children: \"HISTORIA\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.calculator,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_calculator_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW4uanM/ZWZmYiJdLCJuYW1lcyI6WyJNYWluIiwic3R5bGVzIiwibWFpbiIsImJveCIsImJ1dHRvbnMiLCJjYWxjdWxhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJZSxTQUFTQSxJQUFULEdBQWdCO0FBQzNCLHNCQUNJO0FBQU0sYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxJQUF4QjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxHQUF2QjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUYsOERBQU0sQ0FBQ0csT0FBdkI7QUFBQSxnQ0FDSSxxRUFBQywrREFBRDtBQUFTLGlCQUFPLEVBQUMsVUFBakI7QUFBNEIsZUFBSyxFQUFDLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUkscUVBQUMsK0RBQUQ7QUFBUSxpQkFBTyxFQUFDLFVBQWhCO0FBQTJCLGVBQUssRUFBQyxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQU9JLHFFQUFDLCtEQUFEO0FBQVEsaUJBQU8sRUFBQyxVQUFoQjtBQUEyQixlQUFLLEVBQUMsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFZSTtBQUFLLGlCQUFTLEVBQUVILDhEQUFNLENBQUNJLFVBQXZCO0FBQUEsK0JBQ0kscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkgiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9jYWxjdWxhdG9yLmpzJ1xuXG4gIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgS1VQXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU1BSWkVEQUpcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBISVNUT1JJQVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGN1bGF0b3J9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FsY3VsYXRvciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9tYWluPlxuICAgICAgICBcbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main.js\n");

/***/ }),

/***/ "./components/simplemenu.js":
/*!**********************************!*\
  !*** ./components/simplemenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimpleMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Menu */ \"@material-ui/core/Menu\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/dedal/Code/kupbsv/components/simplemenu.js\";\n\n\n\n\n\nfunction SimpleMenu() {\n  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);\n\n  const handleClick = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      \"aria-controls\": \"simple-menu\",\n      \"aria-haspopup\": \"true\",\n      onClick: handleClick,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        style: {\n          color: \"white\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      id: \"simple-menu\",\n      anchorEl: anchorEl,\n      keepMounted: true,\n      open: Boolean(anchorEl),\n      onClose: handleClose,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"Regulamin\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"O nas\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"RODO\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        onClick: handleClose,\n        children: \"Kontakt\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpbXBsZW1lbnUuanM/YzBjNCJdLCJuYW1lcyI6WyJTaW1wbGVNZW51IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiY29sb3IiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFDbkMsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBQWhDOztBQUVBLFFBQU1DLFdBQVcsR0FBSUMsS0FBRCxJQUFXO0FBQzdCSixlQUFXLENBQUNJLEtBQUssQ0FBQ0MsYUFBUCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4Qk4sZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywrREFBRDtBQUFRLHVCQUFjLGFBQXRCO0FBQW9DLHVCQUFjLE1BQWxEO0FBQXlELGFBQU8sRUFBRUcsV0FBbEU7QUFBQSw2QkFDRSxxRUFBQyw4REFBRDtBQUFVLGFBQUssRUFBRTtBQUFDSSxlQUFLLEVBQUU7QUFBUjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsNkRBQUQ7QUFDRSxRQUFFLEVBQUMsYUFETDtBQUVFLGNBQVEsRUFBRVIsUUFGWjtBQUdFLGlCQUFXLE1BSGI7QUFJRSxVQUFJLEVBQUVTLE9BQU8sQ0FBQ1QsUUFBRCxDQUpmO0FBS0UsYUFBTyxFQUFFTyxXQUxYO0FBQUEsOEJBT0UscUVBQUMsaUVBQUQ7QUFBVSxlQUFPLEVBQUVBLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRSxxRUFBQyxpRUFBRDtBQUFVLGVBQU8sRUFBRUEsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFLHFFQUFDLGlFQUFEO0FBQVUsZUFBTyxFQUFFQSxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBVUUscUVBQUMsaUVBQUQ7QUFBVSxlQUFPLEVBQUVBLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpbXBsZW1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlTWVudSgpIHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gYXJpYS1jb250cm9scz1cInNpbXBsZS1tZW51XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIDxNZW51SWNvbiBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCJ9fSAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgICA8TWVudVxuICAgICAgICBpZD1cInNpbXBsZS1tZW51XCJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICA+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+UmVndWxhbWluPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5PIG5hczwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Uk9ETzwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+S29udGFrdDwvTWVudUl0ZW0+XG4gICAgICA8L01lbnU+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/simplemenu.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main */ \"./components/main.js\");\n\nvar _jsxFileName = \"/Users/dedal/Code/kupbsv/pages/index.js\";\n\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Kup BSV\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_main__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFPRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFTRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL21haW4nXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+S3VwIEJTVjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPE1haW4gLz5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Home_header__3vlZW\",\n\t\"headlogo\": \"Home_headlogo__3TwBf\",\n\t\"headerRight\": \"Home_headerRight__1pljx\",\n\t\"headerLeft\": \"Home_headerLeft__1xNbr\",\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"box\": \"Home_box__1Ri2p\",\n\t\"buttons\": \"Home_buttons__f55Jx\",\n\t\"calculator\": \"Home_calculator__3KKGj\",\n\t\"typebox\": \"Home_typebox__-2gLH\",\n\t\"textfield\": \"Home_textfield__2hyEB\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2M1NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiSG9tZV9oZWFkZXJfXzN2bFpXXCIsXG5cdFwiaGVhZGxvZ29cIjogXCJIb21lX2hlYWRsb2dvX18zVHdCZlwiLFxuXHRcImhlYWRlclJpZ2h0XCI6IFwiSG9tZV9oZWFkZXJSaWdodF9fMXBsanhcIixcblx0XCJoZWFkZXJMZWZ0XCI6IFwiSG9tZV9oZWFkZXJMZWZ0X18xeE5iclwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiYm94XCI6IFwiSG9tZV9ib3hfXzFSaTJwXCIsXG5cdFwiYnV0dG9uc1wiOiBcIkhvbWVfYnV0dG9uc19fZjU1SnhcIixcblx0XCJjYWxjdWxhdG9yXCI6IFwiSG9tZV9jYWxjdWxhdG9yX18zS0tHalwiLFxuXHRcInR5cGVib3hcIjogXCJIb21lX3R5cGVib3hfXy0yZ0xIXCIsXG5cdFwidGV4dGZpZWxkXCI6IFwiSG9tZV90ZXh0ZmllbGRfXzJoeUVCXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Menu\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCI/Zjg3MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Menu\n");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/MenuItem\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiP2M3ZDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/MenuItem\n");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIj85MTFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/TextField\n");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Menu\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiPzhlZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Menu\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });