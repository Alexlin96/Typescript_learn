//webpack.base.js：是开发环境和生产环境都用到的配置
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry:{ 
        index:"./src/hello.ts",
    },
    // output 打包完成后文件输出位置配置
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'../dist'),   //__dirname 当前文件所在的绝对路径
    },
    resolve:{
        modules: [
            'src',
            'node_modules'
        ],
        extensions: [
            '.js',
            '.ts'
        ]
    },
    // module 模块
    module:{
        rules:[  //webpack 的配置中 loader 有两个目标：test和use
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /(?:node_modules)/,
            },
        ]
    },
    // plugins 插件 目的在于解决 loader 无法实现的其他事。
    plugins:[
        new htmlWebpackPlugin({   //生成html文件
            template:'./index.html'
        }),
        new cleanWebpackPlugin(),   // 每次打包生成的dist目录，如果改一次代码，都得要删除一次dist目录，这样很麻烦，可以通过clean-webpack-plugin在每次打包的前自动清空dist目录。
    ],
}