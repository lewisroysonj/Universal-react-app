const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    //root file for webpack
    entry: './src/client/client.js',

    //output file for webpack
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                }
            }
            
        ]
    }

};

module.exports = merge(baseConfig, config);
