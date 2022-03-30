const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config.common')

module.exports = merge(webpackCommonConfig,{
    mode: 'development',
    devServer: {
        static: './dist',
        hot: true,
    },
    devtool: 'inline-source-map'
})