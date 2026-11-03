const path = require("path");
const {
	managerAnalyticsHead,
	previewAnalyticsHead,
} = require("./ibm-analytics");

module.exports = {
	// `head` contains manager-head.html/preview-head.html (if present)
	managerHead: (head) => `${head}${managerAnalyticsHead}`,
	previewHead: (head) => `${head}${previewAnalyticsHead}`,
	staticDirs: ["public"],
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		{
			name: "@storybook/addon-essentials",
			options: {
				backgrounds: false,
			},
		},
		"@storybook/addon-a11y",
		"@storybook/addon-storysource",
	],
	framework: {
		name: "@storybook/angular",
		options: {},
	},
	core: {
		disableTelemetry: true,
	},
	docs: {
		autodocs: true,
	},
};
