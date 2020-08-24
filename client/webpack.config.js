const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

let config = {
    entry: {
        landing: './src/index.js',
    },
    devServer: {
        port: 2020,
        hot: true,
        publicPath: '/',
        watchContentBase: true,
    },
    output: {
        filename: '[name]/[name].[hash].js',
        path: path.resolve(__dirname, './build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['landing'],
            filename: 'index.html',
            template: './src/index.html',
        }),

        new HtmlWebpackInlineSVGPlugin({
            runPreEmit: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name]/[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                options: {
                    name(resourcePath, resourceQuery) {
                        if (/src\/home/.test(resourcePath)) {
                            return 'home/[name].[ext]';
                        }
                        return 'images/[name].[ext]';
                    },
                },
            },
        ],
    },
    stats: 'errors-warnings',
};

module.exports = (env, argv) => {
    //override default configs with development specific configurations
    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map';
    }

    //override default configs with production specific configurations
    if (argv.mode === 'production') {
        config.plugins = [...config.plugins, new CleanWebpackPlugin()];
        //    config.stats = 'verbose';
    }

    return config;
};
