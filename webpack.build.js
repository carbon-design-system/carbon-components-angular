function angularExt(lib) {
	let ns = `@angular/${lib}`;
	return {root: ["ng", lib], commonjs: ns, commonjs2: ns, amd: ns};
}

function rxjsExternal(context, request, cb) {
	if (request.match(/^rxjs(\/|$)/)) {
		const pathParts = request.split("/");
		return cb(null, {root: pathParts, commonjs: request, commonjs2: request, amd: request});
	}
	cb();
}

module.exports = [{
	mode: "production",
	devtool: "source-map",
	entry: {
		carbonAngular: "./src/index.ts",
	},
	output: {
		path: __dirname + "/dist/bundle",
		filename: "carbon-angular.umd.js",
		library: "carbonAngular",
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
		rxjsExternal
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
