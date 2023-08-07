import { Navbar, NavbarBackButton, NavbarPlaceholder, NavbarTitle } from '@components/Navbar';
import { ERoutes, RegisteredParamList3 } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

type Props = NativeStackScreenProps<RegisteredParamList3, ERoutes.Registered6>;
type HeaderProps = NativeStackHeaderProps & {
	route: NativeStackHeaderProps['options'] & {
		params?: RegisteredParamList3[ERoutes.Registered6];
	};
};

export const RegisteredScreen6 = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text>Registered6</Text>
		</ScreenContainer>
	);
};

export const RegisteredScreen6Header = (props: HeaderProps) => {
	const { navigation, options, route } = props;

	return (
		<Navbar>
			<NavbarBackButton />
			<NavbarTitle title="Registered 6" />
			<NavbarPlaceholder />
		</Navbar>
	);
};
