var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractText = require("extract-text-webpack-plugin");
var nodeExternals = require("webpack-node-externals");
var path = require("path");
var StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = [{
	mode: "development",
	devtool: "source-map",
	entry: {
		demo: "./demo/main.ts",
	},
	output: {
		path: __dirname + "/demo/bundle",
		filename: "neutrino.umd.js"
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: ["angular2-template-loader", "ts-loader?configFile=tsconfig-demo.json", "tslint-loader"]
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.css$/,
				loader: ["raw-loader", "postcss-loader"]
			},
			{
				test: /\.scss$/,
				loaders: ["raw-loader", "postcss-loader", "sass-loader"]
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: "file-loader"
			},
			{
				test: /\.md$/,
				loader: "raw-loader"
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js"]
	},
	plugins: [
		new StyleLintPlugin({
			files: "src/**/*.scss"
		}),
		new HtmlWebpackPlugin({
			template: './demo/index.html'
		})
	],
	devServer: {
		contentBase: "./demo",
		host: "0.0.0.0",
		port: 9000,
		historyApiFallback: true,
		disableHostCheck: true
	}
}];
