const { merge } = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config.common')

module.exports = merge(webpackCommonConfig,{
    devServer: {
        static: './dist',
        hot: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', // 将 js 字符串转为 style 节点
                    'css-loader', // 将 css 转化成 commonjs 节点
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    }
})
