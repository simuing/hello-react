const path = require('path');
const webpack = require('webpack');
 
module.exports = (env) => {
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true

  return {
    name: 'number-baseball',
    mode: 'development',
    devtool: 'eval',
   
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    entry: {
      app: './client.jsx'
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
                    browsers: ['> 5% in KR'], //browserslist
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
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: path.join(__dirname, '/'),
      compress: true,
      port: 9000,
    },
  }
};