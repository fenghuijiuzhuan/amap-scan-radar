/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShowRadar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);



/*
 * @path        : \amap-scan-radar\src\index.js
 * @message     : 
 * @Author      : yvangod
 */
var ShowRadar = /*#__PURE__*/function () {
  function ShowRadar(map, x, y) {
    var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10000;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, ShowRadar);

    this.map = map;
    this.radius = radius; // 添加雷达扫描 和 删除

    this.id = null;
    this.x = x;
    this.y = y;
    this.object3Dlayer = new AMap.Object3DLayer();
    this.radar = null;
    this.render();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ShowRadar, [{
    key: "render",
    value: function render() {
      this.buildRadar();
      this.map.add(this.object3Dlayer);
      this.object3Dlayer.add(this.radar);
      this.radar.position(new AMap.LngLat(this.x, this.y)); // 115.488133,33.859417

      this.bound = new AMap.Circle({
        center: [this.x, this.y],
        radius: this.radius,
        bubble: true,
        strokeOpacity: 0,
        fillOpacity: 0
      });
      this.map.add(this.bound);
      this.scan();
    }
  }, {
    key: "buildRadar",
    value: function buildRadar() {
      this.radar = new AMap.Object3D.Mesh();
      this.radar.transparent = true;
      this.radar.backOrFront = 'front';
      var geometry = this.radar.geometry; // 米

      var radius = this.radius / this.map.getResolution(this.map.getCenter(), 20);
      var unit = 1; // 每单位占有量

      var range = 360; // 弧度范围 180表示半圆 360正圆

      var count = range / unit; // 弧度范围被分为多少份

      for (var i = 0; i < count; i += 1) {
        // 正圆时（range=360）角度 = 360° => 2Π = 全部份数的角度和
        // angle = i * unit * ( 2Π / 360 )
        var angle1 = i * unit * Math.PI / 180;
        var angle2 = (i + 1) * unit * Math.PI / 180;
        var p1x = Math.cos(angle1) * radius;
        var p1y = Math.sin(angle1) * radius;
        var p2x = Math.cos(angle2) * radius;
        var p2y = Math.sin(angle2) * radius;
        geometry.vertices.push(0, 0, 0);
        geometry.vertices.push(p1x, p1y, 0);
        geometry.vertices.push(p2x, p2y, 0);
        var opacityStart = this.getOpacity(i / count);
        var opacityEnd = this.getOpacity((i + 1) / count);
        geometry.vertexColors.push(0, 1, 0.2, opacityStart);
        geometry.vertexColors.push(0, 1, 0.2, opacityStart);
        geometry.vertexColors.push(0, 1, 0.2, opacityEnd);
      }
    }
  }, {
    key: "getOpacity",
    value: function getOpacity(scale) {
      return 1 - Math.pow(scale, 0.3);
    }
  }, {
    key: "scan",
    value: function scan() {
      this.radar.rotateZ(-2);
      this.id = AMap.Util.requestAnimFrame(this.scan.bind(this));
    }
  }, {
    key: "refresh",
    value: function refresh(x, y, r) {
      this.id && AMap.Util.cancelAnimFrame(this.id);
      this.object3Dlayer.clear();
      this.x = x;
      this.y = y;
      this.radius = r;
      this.buildRadar();
      this.object3Dlayer.add(this.radar);
      this.radar.position(new AMap.LngLat(this.x, this.y)); // 115.488133,33.859417

      this.bound.setCenter(new AMap.LngLat(this.x, this.y));
      this.bound.setRadius(this.radius);
      this.scan();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      AMap.Util.cancelAnimFrame(this.id);
      this.object3Dlayer.clear();
      this.map.remove(this.bound);
    }
  }]);

  return ShowRadar;
}();



/***/ }),

/***/ 671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _createClass)
/* harmony export */ });
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
/*
 * @path        : \amap-scan-radar\example\index.js
 * @message     : 
 * @Author      : yvangod
 */


window.onLoad = function () {
  var map = new AMap.Map('container', {
    zoom: 11,
    //级别
    center: [116.397428, 39.90923],
    //中心点坐标
    viewMode: '3D' //使用3D视图

  });
  new _src__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(map, 116.397428, 39.90923, 5000);
};

var url = 'https://webapi.amap.com/maps?v=1.4.15&key=efb40f4458958f212eff58d0ace1abf4&callback=onLoad';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
})();

/******/ })()
;