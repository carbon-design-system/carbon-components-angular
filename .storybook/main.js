const path = require('path');

module.exports = {
	staticDirs: ["public"],
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-links",
		{
			name: "@storybook/addon-essentials",
			options: {
				backgrounds: false
			}
		},
		{
			name: '@storybook/addon-storysource',
			options: {
				rule: {
					test: [/\.stories\.ts$/, /index\.ts$/],
					include: [path.resolve(__dirname, '../src')]
				},
				loaderOptions: {
					injectStoryParameters: true,
					prettierConfig: { printWidth: 80, singleQuote: false }
				}
			}
		},
		"@storybook/addon-a11y"
	],
	framework: "@storybook/angular",
	core: {
		builder: "webpack5",
		disableTelemetry: true,
	},
	webpackFinal: async config => {
		// remove all styling rules to ensure styles get loaded
		config.module.rules = config.module.rules.filter((rule) => !isStylingRule(rule));

		config.module.rules.push({
			test: /\.scss$/,
			sideEffects: true,
			use: [
				"style-loader",
				"css-loader",
				"postcss-loader",
				{
					loader: "sass-loader",
					options: {
						implementation: require("sass")
					}
				}
			]
		});

		config.mode = "development";
		config.devtool = "source-map";
		return config;
	}
}

function isStylingRule(rule) {
	const { test } = rule;
	if (!test || !(test instanceof RegExp)) {
		return false;
	}
	return test.test('.css') || test.test('.scss') || test.test('.sass');
}
