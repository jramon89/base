const webpack = require('webpack'),
    webpackDevServer = require('webpack-dev-server'),
    config = require('./webpack/webpack.config'),

    server = new webpackDevServer(webpack(config), {
    	publicPath: config.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(3000, function(){
    	console.log("Server listen in http://localhost:3000")
    });
