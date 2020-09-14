const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
            {
                test:/\.vue$/,
                loader: 'vue-loader',

            }

        ]
    },
    plugins: [new HtmlPlugin({
        template: path.join(__dirname, './src/index.html')
    }),
    new VueLoaderPlugin()
    ], // mode:'develoment',
    devServer: {
        hot: true,
        port: 8080,
        overlay: true,
    }

}