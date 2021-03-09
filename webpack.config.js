const path = require('path')

module.exports = {
    entry: {
        App: "./src/app.js",
        Header: "./src/components/header.js"
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
                test: /\.(s[ac]|c)ss$/,
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