// webpack.prod.js：是生产环境
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const prodConfig = {
    mode:'production',
    devtool: 'cheap-module-source-map',
}

module.exports = merge(baseConfig,prodConfig)