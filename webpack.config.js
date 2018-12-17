const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ENV = process.env.NODE_ENV;

const config = {
    entry: path.join(__dirname, 'src/main.js'), // 入口文件 用path.join(__dirname, 'src/index.js')将路径拼接为绝对路径
    output: {
        filename: 'bundle.js', // 文件输出
        path: path.join(__dirname, '/dist')
    },
    mode: 'development',  //webpack 开发模式 --mode
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            "ENV": JSON.stringify(ENV)
        }),
        new HTMLPlugin({
            hash: true,
            title: '',
            template: path.join(__dirname,'index.html'),
            filename: 'index.html'
        }), // 处理html模版
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader', // 处理以.vue结尾的文件
                exclude: /^node_modules$/,
            },
            {
                test: /\.js$/,
                use: [{loader: 'babel-loader',}],
                exclude: /^node_modules$/,
            },
            {
                test: /\.(le|c)ss$/, // 处理css文件
                use: [
                    {loader: MiniCssExtractPlugin.loader },
                    {loader: "css-loader" },
                    {loader: "less-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require("autoprefixer") /*在这里添加*/
                            ]
                        }
                    }
                ],
                exclude: /^node_modules$/,
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/, // 处理图片文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                    }
                ],
                exclude: /^node_modules$/,
            }
        ]
    }
}
if(ENV == 'dev'){
    config.devtool = 'eval-source-map' // 调试代码时可以看到自己原本的代码，而不是编译后的
    config.devServer = {
        port: 8000,
        host: 'localhost',
        overlay: {
            errors: true // 将webpack编译的错误显示在网页上面
        },
        contentBase: "./dist",
        open: true // 在启用webpack-dev-server时，自动打开浏览器
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config;