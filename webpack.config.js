
const path = require('path');

module.exports = {

    //webpack 的选项配置

    //打包入口js文件
    // 1. 入口配置
    entry: './src/index.js',
    //2. 出口配置
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    //3. 模式，环境的配置，指定是开发环境还是生产环境
    // 开发 - development
    // 生产 - production
    mode: 'development',

    // 4. 规则配置
    module: {
        //loader 规则配置
        rules: [
            //碰到引入的文件是以.css 结尾的。那么使用 css- loader 和 style-loader 去处理它
            //如果 use 需要使用多个 loader 来处理，需要注意顺序问题，先要用的写到后面         //
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                use: 'url-loader'
            }
        ]
    },
    //5. 插件配置
    plugins: [
        /*new HtmlWebpackPlugin({
            template: './src/index.html'
        })*/
    ]
};