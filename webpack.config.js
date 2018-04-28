var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, './src'),
    entry: {
        main: ['./index.js', ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_mudules/],
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};