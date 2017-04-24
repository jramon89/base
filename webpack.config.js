const webpack = require('webpack'), 
	  path = require('path');
module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "main.js",
		path: path.join(__dirname, "/dist")
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: "babel-loader"
			}
		]
	}
}