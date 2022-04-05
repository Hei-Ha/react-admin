const { merge } = require('webpack-merge')
const webpackCommonConfig = require('./webpack.config.common.js')
const path = require("path");
const MinCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    output: {
        filename: '[name].[hash:6].bundle.js',
        // filename: 'main.js',
        // __dirname: 当前模块的目录名
        path: path.resolve(process.cwd(), 'dist'),  // path.resolve 将给定路径解析为绝对路径
        clean: true
    },
    optimization: {
      minimize: true,
      minimizer: [
          new CssMinimizerWebpackPlugin(),
          new TerserPlugin()
      ]
    },
    devtool: false,
    plugins: [
        new MinCssExtractPlugin({
            filename: '[name].[hash:6].css'
        })
    ],
    module: {
        rules: [
            {
                test: /.css$/,
                use: [MinCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            }
        ]
    }
})