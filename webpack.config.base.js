const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { IgnorePlugin } = require('webpack');

module.exports = {

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
    }),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ],
            },
        ],
    },

};




