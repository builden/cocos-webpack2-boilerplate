const paths = require('./paths');

module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: 'source-map',

  entry: {
    bundle: paths.appIndexJs,
    vendors: ['mobx'],
  },
  output: {
    filename: '[name].js',
    path: paths.appSrc,
  },

  // support tree-shaking if module use es6
  resolve: {
    mainFields: ['jsnext:main', 'main'],
    modules: [paths.appNodeModules],
  },
};
