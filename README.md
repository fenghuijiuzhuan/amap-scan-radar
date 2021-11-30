<!--
 * @path        : \amap-scan-radar\README.md
 * @message     : 
 * @Author      : yvangod
-->
# 基于高德地图jsapi的雷达扫描特效

## npm安装
```
npm install amap-scan-radar
```
### 使用
```
import AMapScanRadar from 'amap-scan-radar'

var map = new AMap.Map('container', {
  zoom: 11,//级别
  center: [116.397428, 39.90923],//中心点坐标
  viewMode: '3D'//使用3D视图
});
new AMapScanRadar(map, 116.397428, 39.90923, 5000)
```
## 在html中的引入
```
<script src="/dist/amap-scan-radar.js"></script>
```
### 使用
```
var map = new AMap.Map('container', {
  zoom: 11,//级别
  center: [116.397428, 39.90923],//中心点坐标
  viewMode: '3D'//使用3D视图
});
new window.AMapScanRadar(map, 116.397428, 39.90923, 5000)
```

