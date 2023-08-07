import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Text, TouchableOpacity, View } from 'react-native';

const DrawerView = (props: DrawerContentComponentProps) => {
	const { navigation } = props;

	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity style={{ padding: 15, alignSelf: 'flex-end' }} onPress={() => navigation.closeDrawer()}>
				<SimpleLineIcons name="close" size={20} />
			</TouchableOpacity>
			<DrawerContentScrollView contentContainerStyle={{ paddingTop: 0 }}>
				<Text>Scrollable Drawer Content</Text>
			</DrawerContentScrollView>
		</View>
	);
};

export default DrawerView;
