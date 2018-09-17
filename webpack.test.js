var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [{
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: ["ts-loader"]
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.css$/,
				loader: "raw-loader"
			},
			{
				test: /\.scss$/,
				loaders: ["raw-loader", "sass-loader"]
			},
			{
				test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader : 'file-loader'
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js", ".json"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			templateContent: '<html><body></body></html>'
		})
	],
}];
