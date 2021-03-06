const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.base');
const config = require('./config')

module.exports = {
    ...baseConfig,
    mode: 'development',
    devtool: "source-map",
    stats: {
        colors: true,
        children: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        builtAt: false,
        entrypoints: false,
        assets: false,
        version: false,
        errorDetails: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        ...baseConfig.plugins,
    ],
    devServer: {
        port: config.serverPort,
        // host: '0.0.0.0',
        host: '127.0.0.1',
        contentBase: path.join(__dirname, '../public'),
        watchContentBase: true,
        publicPath: '/',
        compress: true,
        historyApiFallback: true,
        hot: true,
        clientLogLevel: 'error',
        open: true,
        overlay: false,
        quiet: false,
        noInfo: false,
        watchOptions: {
            ignored: /node_modules/
        },
        proxy: {},
        disableHostCheck: true,

    }
}
