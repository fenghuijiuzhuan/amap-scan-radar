/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/* unused harmony export default */



/*
 * @path        : \amap-scan-radar\src\index.js
 * @message     : 
 * @Author      : yvangod
 */
var ShowRadar = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function ShowRadar(map, x, y) {
    var radius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10000;

    _classCallCheck(this, ShowRadar);

    this.map = map;
    this.radius = radius; // 添加雷达扫描 和 删除

    this.id = null;
    this.x = x;
    this.y = y;
    this.object3Dlayer = new AMap.Object3DLayer();
    this.radar = null;
    this.render();
  }

  _createClass(ShowRadar, [{
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
}()));


/******/ })()
;