import MyApp from './src/MyApp';
import { store } from './src/rematch/store';
import { NavigationContainer } from '@react-navigation/native';
import { getPersistor } from '@rematch/persist';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

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
