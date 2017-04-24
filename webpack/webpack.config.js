const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/dev-server",
        "./src/app.js"
    ],
    output: {
        filename: "main.js",
        path: path.join(process.cwd(), "/dist"),
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            use: "babel-loader"
        }, {
            test: /\.scss?$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
