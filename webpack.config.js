const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'titit.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['env'],
        },
      },
    ],
  },
};
