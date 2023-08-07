import AppNavigator from '@components/Navigation/AppNavigator';
import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const MyApp = () => {
	const [fontsLoaded] = useFonts({
		// add your Fonts here
		// e.g.
		// Roboto: require('../assets/fonts/Roboto.ttf')
	});

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<ActivityIndicator />
			</View>
		);
	}

	return <AppNavigator />;
};

export default MyApp;
