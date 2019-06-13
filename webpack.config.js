const VueLoaderPlugin = require("vue-loader/lib/plugin");
var isCoverage = process.env.NODE_ENV === "coverage";
var nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  output: {
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    devtoolFallbackModuleFilenameTemplate: "[absolute-resource-path]?[hash]"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ].concat(
      isCoverage
        ? {
            test: /\.js$|\.jsx$|\.vue$/,
            use: {
              loader: "istanbul-instrumenter-loader",
              options: {
                esModules: true
              }
            },
            enforce: "post",
            exclude: /node_modules|\.spec\.js$/
          }
        : []
    )
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: "inline-cheap-module-source-map",
  plugins: [new VueLoaderPlugin()]
};
