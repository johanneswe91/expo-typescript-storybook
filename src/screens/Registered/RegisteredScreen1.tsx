import { ERoutes, RegisteredParamList1 } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = NativeStackScreenProps<RegisteredParamList1, ERoutes.Registered1>;
type HeaderProps = NativeStackHeaderProps & {
	route: NativeStackHeaderProps['options'] & {
		params?: RegisteredParamList1[ERoutes.Registered1];
	};
};

export const RegisteredScreen1 = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text>Registered1</Text>
			<TouchableOpacity
				testID="button_forward"
				style={{ borderWidth: 1, borderRadius: 5, paddingHorizontal: 20, paddingVertical: 10, marginTop: 10 }}
				onPress={() => navigation.navigate(ERoutes.Registered2)}
			>
				<Text>Go Forward</Text>
			</TouchableOpacity>
		</ScreenContainer>
	);
};

export const RegisteredScreen1Header = (props: HeaderProps) => {
	const { navigation, options, route } = props;

	return <View />;
};
