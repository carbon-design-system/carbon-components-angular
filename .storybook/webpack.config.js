const path = require('path');

module.exports = ({ config }) => {
	config.module.rules.push({
		test: [/\.stories\.tsx?$/, /index\.ts$/],
		use: [
			{
				loader: require.resolve('@storybook/source-loader'),
				options: {
					parser: 'typescript',
				},
			},
		],
		include: [path.resolve(__dirname, '../src')],
		enforce: 'pre',
	});

	const rule = config.module.rules.find(rule => rule.test.toString().includes("scss"));

	rule.use = ["style-loader", "css-loader", "postcss-loader", {
		loader: "sass-loader",
		options: {
			implementation: require("sass")
		}
	}];

	config.mode = "development";
	config.devtool = "source-map";
	return config;
};
