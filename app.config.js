import { SENTRY_AUTH_TOKEN, SENTRY_ORGANIZATION, SENTRY_PROJECT, SENTRY_URL } from 'react-native-dotenv';

export default ({ config }) => ({
	...config,
	hooks: {
		postPublish: [
			{
				file: 'sentry-expo/upload-sourcemaps',
				config: {
					url: SENTRY_URL,
					organization: SENTRY_ORGANIZATION,
					project: SENTRY_PROJECT,
					authToken: SENTRY_AUTH_TOKEN
				}
			}
		]
	}
});
