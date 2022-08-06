module.exports = {
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
		"@storybook/addon-a11y"
	],
	framework: "@storybook/angular",
	core: {
		builder: "webpack5",
		disableTelemetry: true,
	},
	webpack(config) {
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
