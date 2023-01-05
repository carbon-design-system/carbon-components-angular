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
		disableTelemetry: true
	},
	webpackFinal: async config => {
		config.module.rules.push({
			test: [/\.stories\.ts$/, /index\.ts$/],
			include: [path.resolve(__dirname, '../src')],
			use: [
				{
					loader: require.resolve('@storybook/source-loader'),
					options: { parser: 'typescript' }
				},
			],
			enforce: 'pre'
		});

		return config;
	}
}
