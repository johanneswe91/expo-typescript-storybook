module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module:react-native-dotenv',
				{
					moduleName: 'react-native-dotenv',
					path: '.env',
					safe: false,
					allowUndefined: true,
					verbose: false
				}
			],
			['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
			[
				'module-resolver',
				{
					alias: {
						'@assets': './assets',
						'@components': './src/components',
						'@store': './src/rematch',
						'@screens': './src/screens'
					},
					extensions: ['.js', '.jsx', '.ts', '.tsx']
				}
			],
			'react-native-reanimated/plugin'
		]
	};
};
