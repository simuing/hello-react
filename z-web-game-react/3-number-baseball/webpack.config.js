const path = require('path');
 
module.exports = () => {
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
              '@babel/plugin-proposal-class-properties'
            ],
          },
        },
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
    },
    devServer: {
      contentBase: path.join(__dirname, '/'),
      compress: true,
      port: 9000,
    },
  }
};