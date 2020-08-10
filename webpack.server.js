const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
    // buildng bundle for node.js not browser
    target: 'node',

    //root file for webpack
    entry: './src/index.js',

    //output file for webpack
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(css)$/,
    //             include: [
    //                 path.resolve(__dirname, './src')
    //             ],
    //             use: [
    //                 {
    //                   loader: "css-loader",
    //                   options: {
    //                       modules: true,
    //                   }
    //                 }
    //             ]
    //         }
    //     ]
    // },
    externals: [webpackNodeExternals()]

};

module.exports = merge(baseConfig, config);