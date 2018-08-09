var webpack = require("webpack");
var ExtractText = require("extract-text-webpack-plugin");
var nodeExternals = require('webpack-node-externals');
var path = require('path');

function angularExt(lib) {
	let ns = `@angular/${lib}`;
	return {root: ['ng', lib], commonjs: ns, commonjs2: ns, amd: ns};
}

function rxjsExternal(context, request, cb) {
	if (/^rxjs\/add\/observable\//.test(request)) {
	  return cb(null, {root: ['Rx', 'Observable'], commonjs: request, commonjs2: request, amd: request});
	} else if (/^rxjs\/add\/operator\//.test(request)) {
	  return cb(null, {root: ['Rx', 'Observable', 'prototype'], commonjs: request, commonjs2: request, amd: request});
	} else if (/^rxjs\//.test(request)) {
	  return cb(null, {root: ['Rx'], commonjs: request, commonjs2: request, amd: request});
	}
	cb();
}

module.exports = [{
	devtool: "source-map",
	entry: {
		neutrino: "./src/index.ts",
	},
	output: {
		path: __dirname + "/dist/bundle",
		filename: "neutrino.umd.js",
		library: "neutrino",
		libraryTarget: "umd"
	},
	externals: [
		{
			"@angular/core": angularExt("core"),
			"@angular/common": angularExt("common"),
			"@angular/platform-browser": {
				root: ["ng", "platformBrowser"],
				commonjs: "@angular/platform-browser",
				commonjs2: "@angular/platform-browser",
				amd: "@angular/platform-browser"
			},
			"@angular/forms": angularExt("forms"),
			"@angular/compiler": angularExt("compiler"),
			"@angular/http": angularExt("http"),
		},
		rxjsExternal,
		{
			"@ngx-translate/core": {
				root: "ngx-translate-core",
				commonjs: "@ngx-translate/core",
				commonjs2: "@ngx-translate/core",
				amd: "@ngx-translate/core"
			}
		}
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: ["ts-loader", "tslint-loader"]
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
				test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader : "file-loader"
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js", ".json"]
	},
	plugins: [],
}];
