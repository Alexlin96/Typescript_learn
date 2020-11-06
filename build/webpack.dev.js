//webpack.dev.js：是开发环境
const webpack=require('webpack');
const merge = require('webpack-merge');   //结合插件
const baseConfig = require('./webpack.base');  //公共配置

const devConfig = {
    mode:'development',
    devtool:'cheap-module-eval-source-map', 
    plugins:[
        new webpack.HotModuleReplacementPlugin() //启用HMR  模块热替换
    ],
    devServer:{    // 配置运行服务环境
        contentBase: './dist',
        open: true, //自动打开浏览器
        hot: true,  //启动webpack的模块热替换特性
        port: 9999, //默认8080 
    }
}

module.exports = merge(baseConfig,devConfig);