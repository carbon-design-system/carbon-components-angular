const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
	defaultConfig.module.rules.push({
		test: [/\.stories\.tsx?$/, /index\.ts$/],
		loaders: [
		  {
			loader: require.resolve('@storybook/addon-storysource/loader'),
			options: {
			  parser: 'typescript',
			},
		  },
		],
		include: [path.resolve(__dirname, '../src')],
		enforce: 'pre',
	});

	defaultConfig.mode = "development";
	defaultConfig.devtool = "source-map";
	return defaultConfig;
};
