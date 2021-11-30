/*
 * @path        : \amap-scan-radar\webpack.config.js
 * @message     : 
 * @Author      : yvangod
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'amap-scan-radar.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'AMapScanRadar',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false,
  }
};
