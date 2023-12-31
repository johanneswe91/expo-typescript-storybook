import { Navbar, NavbarPlaceholder, NavbarTitle } from '@components/Navbar';
import { ERoutes, RegisteredParamList4 } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

type Props = NativeStackScreenProps<RegisteredParamList4, ERoutes.Registered7>;
type HeaderProps = NativeStackHeaderProps & {
	route: NativeStackHeaderProps['options'] & {
		params?: RegisteredParamList4[ERoutes.Registered7];
	};
};

export const RegisteredScreen7 = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text>Registered7</Text>
			<TouchableOpacity
				testID="button_forward"
				style={{ borderWidth: 1, borderRadius: 5, paddingHorizontal: 20, paddingVertical: 10, marginTop: 10 }}
				onPress={() => navigation.navigate(ERoutes.Registered8)}
			>
				<Text>Go Forward</Text>
			</TouchableOpacity>
		</ScreenContainer>
	);
};

export const RegisteredScreen7Header = (props: HeaderProps) => {
	const { navigation, options, route } = props;

	return (
		<Navbar>
			<NavbarPlaceholder />
			<NavbarTitle title="Registered 7" />
			<NavbarPlaceholder />
		</Navbar>
	);
};
