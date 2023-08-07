import { Navbar, NavbarBackButton, NavbarPlaceholder, NavbarTitle } from '@components/Navbar';
import { ERoutes, RegisteredParamList1 } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

type Props = NativeStackScreenProps<RegisteredParamList1, ERoutes.Registered2>;
type HeaderProps = NativeStackHeaderProps & {
	route: NativeStackHeaderProps['options'] & {
		params?: RegisteredParamList1[ERoutes.Registered2];
	};
};

export const RegisteredScreen2 = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text>Registered2</Text>
		</ScreenContainer>
	);
};

export const RegisteredScreen2Header = (props: HeaderProps) => {
	const { navigation, options, route } = props;

	return (
		<Navbar>
			<NavbarBackButton />
			<NavbarTitle title="Registered 2" />
			<NavbarPlaceholder />
		</Navbar>
	);
};
