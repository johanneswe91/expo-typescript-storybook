module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
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
