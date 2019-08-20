const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpack({
    template: './assets/index.template.html',
    filename: 'index.html'
});

module.exports = {
    entry: './assets/javascript/entry.js',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '..'),
        filename: 'dist/javascript/bundle.js'
    },
    plugins: [htmlWebpack],
    module: {
        rules:[            
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8000, //conver images <8kb to base64 strings
                    names: 'images/[hash]-[name].[ext]'
                }
            }
        ]
    }
}