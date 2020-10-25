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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_info__ = __webpack_require__(1);

// ES6 模块化的导入


console.log(__WEBPACK_IMPORTED_MODULE_0__js_info__["d" /* name */], __WEBPACK_IMPORTED_MODULE_0__js_info__["a" /* age */], __WEBPACK_IMPORTED_MODULE_0__js_info__["b" /* height */]);
console.log(__WEBPACK_IMPORTED_MODULE_0__js_info__["c" /* hobby */]);

// commonjs 模块化规范导入

const {add, mul} = __webpack_require__(2);

console.log(add(20, 40));
console.log(mul(20, 40));

// 3.依赖

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// ES6 模块的导出
const name = 'hollow';
/* harmony export (immutable) */ __webpack_exports__["d"] = name;

const age = 18;
/* harmony export (immutable) */ __webpack_exports__["a"] = age;

const height = 1.88;
/* harmony export (immutable) */ __webpack_exports__["b"] = height;



const hobby = 'boll';
/* harmony export (immutable) */ __webpack_exports__["c"] = hobby;



/***/ }),
/* 2 */
/***/ (function(module, exports) {


// commonjs 模块化的导出

function add(num1 ,num2) {
    return num1 + num2;
}

function mul(num1, num2) {
    return num1 * num2;
}


module.exports = {
    add,
    mul,
}

/***/ })
/******/ ]);