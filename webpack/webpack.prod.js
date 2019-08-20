
const common = require('./webpack.common.js');
const merge = require('webpack-merge'); 

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'dist/css/[name].[md5:contenthash:hex:20].css',
    allChunks: true
})

module.exports = merge(common, {
    output: {
        publicPath: '.'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use:
                    [
                        {loader: 'css-loader'},
                        {loader: 'sass-loader'}
                    ]
                })
            }, 
            
            {
                test: /\.html$/,
                use: 
                [
                    {loader: 'html-loader'}
                ]
            }
        ]
    },
    plugins: [extractSass]   
});