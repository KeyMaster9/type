const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
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
    devtool : 'source-map'
}