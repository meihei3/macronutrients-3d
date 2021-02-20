/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/DOM/collapsibleList.js":
/*!********************************************!*\
  !*** ./src/scripts/DOM/collapsibleList.js ***!
  \********************************************/
/***/ (() => {

eval("const food_groups = [\n  { id: 1, name: '穀類' },\n  { id: 2, name: 'いも及びでん粉類' },\n  { id: 3, name: '砂糖及び甘味類' },\n  { id: 4, name: '豆類' },\n  { id: 5, name: '種実類' },\n  { id: 6, name: '野菜類' },\n  { id: 7, name: '果実類' },\n  { id: 8, name: 'きのこ類' },\n  { id: 9, name: '藻類' },\n  { id: 10, name: '魚介類' },\n  { id: 11, name: '肉類' },\n  { id: 12, name: '卵類' },\n  { id: 13, name: '乳類' },\n  { id: 14, name: '油脂類' },\n  { id: 15, name: '菓子類' },\n  { id: 16, name: 'し好飲料類' },\n  { id: 17, name: '調味料及び香辛料類' },\n  { id: 18, name: '調理済み流通食品類' },\n];\n\nconst createList = () => {\n  food_groups.forEach((group) => {\n    const header = document.createElement('div');\n    header.classList.add('collapsible-header');\n    header.innerText = group.name;\n\n    const body = document.createElement('div');\n    body.classList.add('collapsible-body');\n    body.id = `food-group-${group.id}`;\n\n    const li = document.createElement('li');\n    li.appendChild(header);\n    li.appendChild(body);\n    document.getElementById('items').appendChild(li);\n  });\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  createList();\n  var elems = document.querySelectorAll('.collapsible');\n  var instances = M.Collapsible.init(elems);\n});\n\n\n//# sourceURL=webpack://macronutrients-3d/./src/scripts/DOM/collapsibleList.js?");

/***/ }),

/***/ "./src/scripts/DOM/items.js":
/*!**********************************!*\
  !*** ./src/scripts/DOM/items.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/parser */ \"./src/scripts/utils/parser.js\");\n/* harmony import */ var _PlotlyJs_PlotlyJs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PlotlyJs/PlotlyJs */ \"./src/scripts/PlotlyJs/PlotlyJs.js\");\n\n\n\n/**\n * グラフに表示・非表示を行う関数を生成する\n *\n * @param {HTMLElement} el\n */\nconst createSwitchDisplayData = (el) => {\n  let flg = true;\n  return () => {\n    if (flg) {\n      (0,_PlotlyJs_PlotlyJs__WEBPACK_IMPORTED_MODULE_1__.appendData)(el.foodName, el.prot, el.fat, el.chocdf);\n    } else {\n      (0,_PlotlyJs_PlotlyJs__WEBPACK_IMPORTED_MODULE_1__.dropData)(el.foodName);\n    }\n    flg = !flg;\n  };\n};\n\n/**\n * データからアイテムリストのDOM生成する\n *\n * @param {Array} data\n * @param {String} parent_id\n */\nconst createItems = (data, parent_id) => {\n  data.forEach((el) => {\n    console.log(el);\n    const a = document.createElement('a');\n    a.classList.add('collection-item', 'waves-effect', 'waves-teal');\n    a.innerText = el.foodName;\n\n    a.addEventListener('click', createSwitchDisplayData(el));\n    a.addEventListener('click', () => a.classList.toggle('active'));\n\n    const parent = document.getElementById(parent_id);\n    console.log(parent);\n    parent.classList.add('collection');\n    parent.appendChild(a);\n  });\n};\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  // 現状問題ないが、念の為、親となるDOMのロードを待つ\\\n  setTimeout(() => {\n    for (let i = 1; i < 19; i++) {\n      (0,_utils_parser__WEBPACK_IMPORTED_MODULE_0__.default)(\n        `https://raw.githubusercontent.com/yameholo/macronutrients-3d/master/dist/data-min/group${i}.json`\n      )\n        .then((data) => createItems(data, `food-group-${i}`))\n        .catch((err) => console.log(err));\n    }\n  }, 10);\n});\n\n\n//# sourceURL=webpack://macronutrients-3d/./src/scripts/DOM/items.js?");

/***/ }),

/***/ "./src/scripts/PlotlyJs/PlotlyJs.js":
/*!******************************************!*\
  !*** ./src/scripts/PlotlyJs/PlotlyJs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendData\": () => /* binding */ appendData,\n/* harmony export */   \"dropData\": () => /* binding */ dropData\n/* harmony export */ });\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/scripts/PlotlyJs/init.js\");\n/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper */ \"./src/scripts/PlotlyJs/wrapper.js\");\n\n\n\nconst graphEl = document.getElementById('app');\nconst data_trace_index = 1; // 操作可能なデータのtraceのグラフに対するIndex\n\n(0,_init__WEBPACK_IMPORTED_MODULE_0__.default)(graphEl);\n\nconst appendData = (0,_wrapper__WEBPACK_IMPORTED_MODULE_1__.createAppendData)(graphEl, data_trace_index);\nconst dropData = (0,_wrapper__WEBPACK_IMPORTED_MODULE_1__.createDropData)(graphEl, data_trace_index);\n\n\n//# sourceURL=webpack://macronutrients-3d/./src/scripts/PlotlyJs/PlotlyJs.js?");

/***/ }),

/***/ "./src/scripts/PlotlyJs/init.js":
/*!**************************************!*\
  !*** ./src/scripts/PlotlyJs/init.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst color_palette = {\n  p: '#F00',\n  c: '#0F0',\n  f: '#FF0',\n};\n\nconst hovertemplate =\n  '<b>%{text}</b><br><br>' +\n  `<span>Protein: %{x} g</span><br>` +\n  `<span>Carbohydrates: %{y} g</span><br>` +\n  `<span>Fat: %{z} g</span>`;\n\nconst trace0 = {\n  text: ['origin'],\n  x: [0],\n  y: [0],\n  z: [0],\n  mode: 'markers',\n  opacity: 0,\n  type: 'scatter3d',\n};\n\nconst trace1 = {\n  text: [],\n  x: [],\n  y: [],\n  z: [],\n  mode: 'markers',\n  opacity: 0.5,\n  hovertemplate: hovertemplate,\n  type: 'scatter3d',\n};\n\nconst data = [trace0, trace1];\n\nconst layout = {\n  title: 'Macronutrients',\n  scene: {\n    xaxis: {\n      title: 'Protein',\n      titlefont: {\n        color: color_palette.p,\n      },\n      zerolinecolor: color_palette.p,\n      rangemode: 'tozero',\n      autorange: true,\n    },\n    yaxis: {\n      title: 'Carbohydrates',\n      titlefont: {\n        color: color_palette.c,\n      },\n      zerolinecolor: color_palette.c,\n      rangemode: 'tozero',\n      autorange: true,\n    },\n    zaxis: {\n      title: 'Fat',\n      titlefont: {\n        color: color_palette.f,\n      },\n      zerolinecolor: color_palette.f,\n      rangemode: 'tozero',\n      autorange: true,\n    },\n  },\n  hoverlabel: {\n    bgcolor: '#FFF',\n    font: {\n      color: '#555',\n    },\n  },\n  margin: {\n    l: 0,\n    r: 0,\n    b: 0,\n    t: 0,\n  },\n  showlegend: false,\n};\n\nconst config = {\n  responsive: true,\n};\n\n/**\n * @param {HTMLElement} graphEl\n */\nconst init = (graphEl) => {\n  Plotly.newPlot(graphEl, data, layout, config);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://macronutrients-3d/./src/scripts/PlotlyJs/init.js?");

/***/ }),

/***/ "./src/scripts/PlotlyJs/wrapper.js":
/*!*****************************************!*\
  !*** ./src/scripts/PlotlyJs/wrapper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAppendData\": () => /* binding */ createAppendData,\n/* harmony export */   \"createDropData\": () => /* binding */ createDropData\n/* harmony export */ });\n/**\n * appendData関数を生成する．\n *\n * @param {HTMLElement} graphEl グラフのElement\n * @param {Int} trace_idx 対象traceのindex\n */\nfunction createAppendData(graphEl, trace_idx) {\n  /**\n   * グラフに要素を追加する．\n   *\n   * @function appendData\n   * @param {String} text 対象のテキスト\n   * @param {Float} x タンパク質\n   * @param {Float} y 炭水化物\n   * @param {Float} z 脂質\n   */\n  const f = (text, x, y, z) => {\n    graphEl.data[trace_idx].text.push(text);\n    graphEl.data[trace_idx].x.push(x);\n    graphEl.data[trace_idx].y.push(y);\n    graphEl.data[trace_idx].z.push(z);\n\n    Plotly.redraw(graphEl);\n  };\n\n  return f;\n}\n\n/**\n * dropData関数を生成する．\n *\n * @param {HTMLElement} graphEl グラフのElement\n * @param {Int} trace_idx 対象traceのindex\n */\nfunction createDropData(graphEl, trace_idx) {\n  /**\n   * グラフから要素を削除する．textが重複する場合上手く動作しないと思われる．\n   *\n   * @function dropData\n   * @param {String} text 対象のテキスト\n   */\n  const dropData = (text) => {\n    const index = graphEl.data[trace_idx].text.indexOf(text);\n    if (index >= 0) {\n      graphEl.data[trace_idx].text.splice(index, 1);\n      graphEl.data[trace_idx].x.splice(index, 1);\n      graphEl.data[trace_idx].y.splice(index, 1);\n      graphEl.data[trace_idx].z.splice(index, 1);\n\n      Plotly.redraw(graphEl);\n    }\n  };\n\n  return dropData;\n}\n\n\n//# sourceURL=webpack://macronutrients-3d/./src/scripts/PlotlyJs/wrapper.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PlotlyJs_PlotlyJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlotlyJs/PlotlyJs */ \"./src/scripts/PlotlyJs/PlotlyJs.js\");\n/* harmony import */ var _DOM_collapsibleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/collapsibleList */ \"./src/scripts/DOM/collapsibleList.js\");\n/* harmony import */ var _DOM_collapsibleList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DOM_collapsibleList__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DOM_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/items */ \"./src/scripts/DOM/items.js\");\n\n\n\n\n\n//# sourceURL=webpack://macronutrients-3d/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/utils/parser.js":
/*!*************************************!*\
  !*** ./src/scripts/utils/parser.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/**\n * URL(JSON)からデータを取ってくる\n *\n * @param {String} url\n */\nconst getData = async (url) => {\n  const response = await fetch(url);\n  return await response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://macronutrients-3d/./src/scripts/utils/parser.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;