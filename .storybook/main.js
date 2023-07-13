const path = require('path');
module.exports = {
	staticDirs: ["public"],
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
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
	framework: {
		name: "@storybook/angular",
		options: {}
	},
	core: {
		disableTelemetry: true
	},
	docs: {
		autodocs: true
	}
};
