const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    // },
    entry: './src/index.js',
    output: {
        filename: 'index.[hash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'change title',
        template: 'src/assets/tem.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }

};




