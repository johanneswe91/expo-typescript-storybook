import { Navbar, NavbarBackButton, NavbarPlaceholder, NavbarTitle } from '@components/Navbar';
import { ERoutes, RegisteredParamList2 } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

type Props = NativeStackScreenProps<RegisteredParamList2, ERoutes.Registered4>;
type HeaderProps = NativeStackHeaderProps & {
	route: NativeStackHeaderProps['options'] & {
		params?: RegisteredParamList2[ERoutes.Registered4];
	};
};

export const RegisteredScreen4 = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text>Registered4</Text>
		</ScreenContainer>
	);
};

export const RegisteredScreen4Header = (props: HeaderProps) => {
	const { navigation, options, route } = props;

	return (
		<Navbar>
			<NavbarBackButton />
			<NavbarTitle title="Registered 4" />
			<NavbarPlaceholder />
		</Navbar>
	);
};
