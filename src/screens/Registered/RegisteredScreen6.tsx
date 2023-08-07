import { ERoutes, RegisteredParamList3 } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

type Props = NativeStackScreenProps<RegisteredParamList3, ERoutes.Registered6>;

export const RegisteredScreen6 = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text>Registered6</Text>
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
