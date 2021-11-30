/*
 * @path        : \amap-scan-radar\webpack.config.js
 * @message     : 
 * @Author      : yvangod
 */
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    example: './example/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
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
