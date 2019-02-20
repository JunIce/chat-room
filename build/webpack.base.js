const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '../index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:7].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({ 
                            fallback: 'vue-style-loader', 
                            use: 'css-loader' 
                        })
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
              },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        }),
        new VueLoaderPlugin,
        new ExtractTextPlugin("styles.css")
    ]
}