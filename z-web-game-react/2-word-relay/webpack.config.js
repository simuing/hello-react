const path = require('path');
const webpack = require('webpack');
 
module.exports = {
  name: 'number-baseball',
  mode: 'development',
  devtool: 'eval',
 
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./client'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        // babel 옵션
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 1% in KR'], //browserslist
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-refresh/babel' //babel이 과거버전으로 컴파일할 때 핫 리로딩까지 지원을 해준다.
          ],
        },
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    // new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    // publicPath: '/dist/',
  },
  devServer: {
    publicPath: '/dist/',
    hot: true,
  }
};