import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {}

export const NavbarBackButton = (props: IProps) => {
	const {} = props;
	const navigation = useNavigation();

	return (
		<TouchableOpacity testID="navbar_button_back" onPress={() => navigation.goBack()}>
			<SimpleLineIcons name="arrow-left" color="#000000" size={20} />
		</TouchableOpacity>
	);
};
