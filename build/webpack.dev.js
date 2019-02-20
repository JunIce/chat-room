const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')
module.exports = merge(base, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 9020,
        hot: true
    },
})