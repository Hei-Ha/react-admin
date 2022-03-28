const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        // __dirname: 当前模块的目录名
        path: path.resolve(__dirname, 'dist'),  // path.resolve 将给定路径解析为绝对路径
        clean: true
    },
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}