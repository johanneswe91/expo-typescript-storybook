import { AnonymousParamList, ERoutes } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

type Props = NativeStackScreenProps<AnonymousParamList, ERoutes.Authentication>;

const AuthenticationScreen = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer>
			<Text>Authentication</Text>
		</ScreenContainer>
	);
};

export default AuthenticationScreen;
