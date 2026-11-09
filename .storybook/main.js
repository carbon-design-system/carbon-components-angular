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
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ["@storybook/addon-links", "@storybook/addon-a11y", '@storybook/addon-docs'],
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
	features: {
		backgrounds: false
	}
};
