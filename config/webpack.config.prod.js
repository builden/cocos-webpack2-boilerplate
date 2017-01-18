const paths = require('./paths');
const webpack = require('webpack');

module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: 'source-map',

  entry: {
    bundle: paths.appIndexJs,
  },
  output: {
    filename: '[name].js',
    path: paths.appSrc,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.appEs,
        loader: 'babel-loader?cacheDirectory',
      },
    ],
  },

  // support tree-shaking if module use es6
  resolve: {
    mainFields: ['jsnext:main', 'main'],
    modules: [paths.appNodeModules],
  },

  plugins: [
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
};
