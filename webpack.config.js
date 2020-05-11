const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const babelOptions = (preset) => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ]
    }
    if(preset) {
        opts.presets.push(preset)
    }
    return opts
}

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ['@babel/polyfill', "./index.js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".css", ".png", ".jpg", ".jpeg"],
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: {
            loader: "babel-loader",
            options: babelOptions()
        }
      },
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: {
            loader: "babel-loader",
            options: babelOptions('@babel/preset-react')
        }
      },
    ],
  },
};
