module.exports = (baseConfig, env, defaultConfig) => {
	console.log(defaultConfig);
	defaultConfig.mode = "development";
	defaultConfig.devtool = "source-map";
	return defaultConfig;
};
