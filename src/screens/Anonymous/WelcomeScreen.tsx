import { AnonymousParamList, ERoutes } from '@components/Navigation/constants';
import ScreenContainer from '@components/ScreenContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';

type Props = NativeStackScreenProps<AnonymousParamList, ERoutes.Welcome>;

export const WelcomeScreen = ({ navigation, route }: Props) => {
	return (
		<ScreenContainer>
			<Text>Welcome</Text>
		</ScreenContainer>
	);
};
