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
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true,
            minify: {
                removeComments: true,
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(process.cwd(), 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 12000, // 图片超过这个大小，使用原图片，否则使用base64字符串
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: [
                            // '@babel/plugin-transform-runtime',
                            // '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }
}