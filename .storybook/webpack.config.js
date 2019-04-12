const path = require('path');

module.exports = ({config, mode}) => {
	config.module.rules.push({
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

	config.mode = "development";
	config.devtool = "source-map";
	return config;
};
