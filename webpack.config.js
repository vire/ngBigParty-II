const webpack = require( 'webpack' );

const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const webpackConfigEntryPoints = {
  app: './src/bootstrap.ts'
};

const webpackConfigLoaders = [

  // Scripts
  {
    test: /\.ts$/,
    exclude: [ /node_modules/ ],
    loader: 'ts-loader'
  },

  // Styles
  {
    test: /\.(scss)$/,
    loaders: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
  },

  // Fonts
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&minetype=application/font-woff'
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
  },

  //Images
  {
    test: /\.(png|jpg)$/,
    loader: [ 'url-loader' ],
    query: { limit: 8192 }
  },

  //HTML
  {
    test: /\.html$/,
    loader: 'raw-loader'
  }

];

const webpackConfigPlugins = [

  new HtmlWebpackPlugin({
    template: 'src/index.html',
    host: '0.0.0.0'
  }),

  new CopyWebpackPlugin([
    {
      from: 'src/assets',
      to: './assets'
    }
  ])

];


module.exports = {
  devtool: 'source-map',
  entry: webpackConfigEntryPoints,
  output: {
    path: '/',
    publicPath: '/ngBigParty-II',
    filename: '[name].js'
  },
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: [ '', '.webpack.js', '.web.js', '.ts', '.js' ]
  },
  watch: true,
  module: {
    loaders: webpackConfigLoaders
  },
  plugins: webpackConfigPlugins
};
