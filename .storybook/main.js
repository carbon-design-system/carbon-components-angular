const path = require('path');
module.exports = {
    staticDirs: ["public"],
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ["@storybook/addon-links", "@storybook/addon-a11y", '@storybook/addon-docs'],

    framework: {
		name: "@storybook/angular",
		options: {}
	},

    core: {
		disableTelemetry: true
	},

    docs: {},

    features: {
      backgrounds: false
    }
};
