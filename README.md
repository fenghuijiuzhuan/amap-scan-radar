<!--
 * @path        : \amap-scan-radar\README.md
 * @message     : 
 * @Author      : yvangod
-->
# 基于高德地图jsapi的雷达扫描特效
## 在html中引入
```
<script src="/dist/amap-scan-radar.js"></script>
```
```
var map = new AMap.Map('container', {
  zoom: 11,//级别
  center: [116.397428, 39.90923],//中心点坐标
  viewMode: '3D'//使用3D视图
});
new window.AMapScanRadar(map, 116.397428, 39.90923, 5000)
```
