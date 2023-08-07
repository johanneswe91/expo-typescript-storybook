import { ERoutes, RegisteredParamList1 } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

type Props = NativeStackScreenProps<RegisteredParamList1, ERoutes.Registered2>;

export const RegisteredScreen2 = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text>Registered2</Text>
			<TouchableOpacity
				testID="button_back"
				style={{ borderWidth: 1, borderRadius: 5, paddingHorizontal: 20, paddingVertical: 10, marginTop: 10 }}
				onPress={() => navigation.goBack()}
			>
				<Text>Go Back</Text>
			</TouchableOpacity>
		</ScreenContainer>
	);
};
