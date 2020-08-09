const path = require('path');

module.exports = ({ config }) => {
	config.module.rules.push({
		test: [/\.stories\.tsx?$/, /index\.ts$/],
		loaders: [
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

	config.mode = "development";
	config.devtool = "source-map";
	return config;
};
