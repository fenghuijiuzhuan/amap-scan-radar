/*
 * @path        : \amap-scan-radar\example\index.js
 * @message     : 
 * @Author      : yvangod
 */
import ShowRadar from "../src";

window.onLoad = function () {
  var map = new AMap.Map('container', {
    zoom: 11,//级别
    center: [116.397428, 39.90923],//中心点坐标
    viewMode: '3D'//使用3D视图
  });
  new ShowRadar(map, 116.397428, 39.90923, 5000)
}

var url = 'https://webapi.amap.com/maps?v=1.4.15&key=efb40f4458958f212eff58d0ace1abf4&callback=onLoad';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
