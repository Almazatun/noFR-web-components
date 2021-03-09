const path = require('path')

module.exports = {
    entry: {
        App: "./src/app.js",
        // component1: "./src/component_1.js"
    },
    //mode "development give more information when code transpiling in the main.js file in the dist folder"
    mode: "development",
    output: {
        filename: '[name].bundler.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist"
    }
}