import { Navbar, NavbarBackButton, NavbarPlaceholder, NavbarTitle } from '@components/Navbar';
import { ERoutes, RegisteredParamList4 } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

type Props = NativeStackScreenProps<RegisteredParamList4, ERoutes.Registered8>;
type HeaderProps = NativeStackHeaderProps & {
	route: NativeStackHeaderProps['options'] & {
		params?: RegisteredParamList4[ERoutes.Registered8];
	};
};

export const RegisteredScreen8 = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text>Registered8</Text>
		</ScreenContainer>
	);
};

export const RegisteredScreen8Header = (props: HeaderProps) => {
	const { navigation, options, route } = props;

	return (
		<Navbar>
			<NavbarBackButton />
			<NavbarTitle title="Registered 8" />
			<NavbarPlaceholder />
		</Navbar>
	);
};
