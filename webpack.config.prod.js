const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { IgnorePlugin } = require('webpack');

const base = require('./webpack.config.base');

module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin(
            {
                filename: '[name].[hash].css',
                chunkFilename: '[id].[hash].css',
                ignoreOrder: false,
            })
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    },
                },
                    "css-loader"
                ],
            }
        ]
    }

};




