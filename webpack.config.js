const webpack = require("webpack");
const paths = require("./utils/config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ENV = process.env.ENV = process.env.NODE_ENV = "development";


const metadata = {
  title: 'Angular2 Webpack Starter by @gdi2990 from @AngularClass',
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: ENV
};

module.exports = {
  watch: true,
  metadata: metadata,  
  devtool: "source-map",
  debug: true,
  output: {
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].map",
    chunkFilename: "[id].chunk.js",
    publicPath: '/'
  },
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  module: {
    loaders: [
      {test: /\.ts$/, loaders: ["ng-annotate-loader", "ts-loader"]},
      {test: /\.handlebars$/, loaders: ['handlebars-loader']}
    ]
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
    })

    // new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}
