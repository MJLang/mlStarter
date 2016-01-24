const webpack = require("webpack");
const paths = require("./utils/config");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ENV = process.env.ENV = process.env.NODE_ENV = "development";


const metadata = {
  title: 'Angular2 Webpack Starter by @gdi2990 from @AngularClass',
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: ENV
};

module.exports = {
  // watch: true,
  metadata: metadata,  
  devtool: "source-map",
  debug: true,
  output: {
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].map",
    chunkFilename: "[id].chunk.js",
    publicPath: "/"
  },
  // resolve: {
  //   extensions: ["", ".ts", ".js", ".scss", ".css"]
  // },
  module: {
    loaders: [
      {test: /\.ts$/, loaders: ["ng-annotate-loader", "ts-loader"]},
      {test: /\.handlebars$/, loaders: ['handlebars-loader']},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!resolve-url-loader!sass-loader?sourceMap")
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        loader: "file-loader"
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      }
      // {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", 

      //                                                   "css-loader?sourceMap",
      //                                                   "postcss-loader",
      //                                                   "resolve-url-loader"
      //                                                   )}
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules")]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new HtmlWebpackPlugin({ template: paths.bundle.app.template,
                            filename: paths.bundle.app.development.templateDest,
                            inject: true
                         }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV)
      }
    }),
    new ExtractTextPlugin("styles/[name].css")
  ]
}
