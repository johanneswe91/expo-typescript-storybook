import { ERoutes, RegisteredParamList2 } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

type Props = NativeStackScreenProps<RegisteredParamList2, ERoutes.Registered4>;

export const RegisteredScreen4 = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text>Registered4</Text>
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
