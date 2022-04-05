const { merge } = require('webpack-merge')
const webpackCommonConfig = require('./webpack.config.common.js')
module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    devtool: false,
})