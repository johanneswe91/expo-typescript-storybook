import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

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

	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default MyApp;
