module.exports = ({ config }) => {
	config.extra.storybookEnabled = process.env.STORYBOOK_ENABLED;

	return config;
};
