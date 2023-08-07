import MyApp from './src/MyApp';
import de from './src/config/locales/de.json';
import en from './src/config/locales/en.json';
import { store } from './src/rematch/store';
import { NavigationContainer } from '@react-navigation/native';
import { getPersistor } from '@rematch/persist';
import Constants from 'expo-constants';
import * as Localization from 'expo-localization';
import { StatusBar } from 'expo-status-bar';
import i18n from 'i18next';
import React from 'react';
import { initReactI18next } from 'react-i18next';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
// import { SENTRY_DSN } from 'react-native-dotenv';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import * as Sentry from 'sentry-expo';

// Sentry.init({
// 	dsn: SENTRY_DSN,
// 	enabled: !__DEV__
// });

i18n.use(initReactI18next).init({
	lng: Localization.locale.split('-')[0],
	resources: {
		de,
		en
	},
	compatibilityJSON: 'v3',
	keySeparator: false,
	debug: false,
	interpolation: {
		escapeValue: false
	}
});

function App() {
	return (
		<Provider store={store}>
			<StatusBar style="dark" />
			<SafeAreaProvider>
				<PersistGate
					loading={
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<ActivityIndicator />
						</View>
					}
					persistor={getPersistor()}
				>
					<SafeAreaView style={{ flex: 1 }}>
						<NavigationContainer>
							<MyApp />
						</NavigationContainer>
					</SafeAreaView>
				</PersistGate>
			</SafeAreaProvider>
		</Provider>
	);
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
	AppEntryPoint = require('./.ondevice').default;
}

export default AppEntryPoint;
