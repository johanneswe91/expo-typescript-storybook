import { ERoutes, RegisteredParamList3 } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

type Props = NativeStackScreenProps<RegisteredParamList3, ERoutes.Registered5>;

export const RegisteredScreen5 = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text>Registered5</Text>
			<TouchableOpacity
				testID="button_forward"
				style={{ borderWidth: 1, borderRadius: 5, paddingHorizontal: 20, paddingVertical: 10, marginTop: 10 }}
				onPress={() => navigation.navigate(ERoutes.Registered6)}
			>
				<Text>Go Forward</Text>
			</TouchableOpacity>
		</ScreenContainer>
	);
};
