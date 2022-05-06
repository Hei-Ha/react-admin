const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist'),  // path.resolve 将给定路径解析为绝对路径
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(process.cwd(), './public/index.html'),
            favicon: path.resolve(process.cwd(), './public/favicon.png'),
            inject: 'body',
            minify: {
                removeComments: true,
            }
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.less', '.scss'],
        modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
        alias: {
            '@': path.resolve(process.cwd(), 'src'),
            '/': path.resolve(process.cwd(), '')
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
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
            },
            {
                test: /\.(tsx|ts)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
}
