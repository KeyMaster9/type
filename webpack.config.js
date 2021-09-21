const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    //wihtout any addition settings, this will reference .babelrc
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [new ESLintPlugin({

    })],
    devtool: 'source-map'
}